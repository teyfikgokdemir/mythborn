// Mythborn Astrology Platform — Request Router & Dispatcher
import { ASTROLOGY_LOCALES } from './i18n.js';
import { renderAstrologyLayout, getRouteHref } from './layout.js';
import { renderHomeView } from './pages/home.js';
import { renderContactView } from './pages/contact.js';
import { renderNatalChartView } from './pages/natal-chart.js';
import { renderZodiacIndexView } from './pages/zodiac.js';
import { renderSkyCalendarView } from './pages/sky-calendar.js';
import { renderSynastryView } from './pages/synastry.js';
import { renderApproachView } from './pages/approach.js';
import { renderSanctuaryView, getSanctuaryFaqItems } from './pages/sanctuary.js';
import { renderJungView, getJungFaqItems } from './pages/jung.js';
import { GUIDE_SLUGS, getGuideBySlug, getGuideFaqItems, renderGuidesHubView, renderGuideArticleView } from './pages/guides.js';
import { renderLegalView, getLegalPageMeta } from './pages/legal.js';
import { generateDailyHoroscopes } from './horoscope-pipeline.js';
import { getApproachFaqItems, getToolSeo } from './seo-content.js';

export const resolveAstrologyLocale = (pathname = '/') => {
  if (pathname.startsWith('/ar')) return 'ar';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/gr') || pathname.startsWith('/el')) return 'el';
  if (pathname.startsWith('/en')) return 'en';
  return 'tr';
};

export const matchAstrologyRoute = (pathname = '/') => {
  const clean = pathname.toLowerCase().replace(/^\/(?:en|gr|el|es|ar)(?=\/|$)/, '') || '/';

  if (clean === '/' || clean === '') return 'home';
  if (['/meditasyon-ve-frekans', '/meditation-and-frequencies', '/dialogismos-kai-sychnotites', '/meditacion-y-frecuencias', '/altaamul-waltaraddudat'].includes(clean)) return 'sanctuary';
  if (['/siginak', '/sanctuary', '/katafygio', '/santuario', '/al-maladh', '/meditasyon', '/meditation', '/rezonans', '/resonance', '/frekans-studyo', '/frequency-studio'].includes(clean)) return 'redirect:sanctuary';
  if (clean === '/jung') return 'jung';
  if (clean === '/carl-jung' || clean === '/arketip' || clean === '/archetypes') return 'redirect:jung';
  if (['/rehber', '/guides', '/odigoi', '/guias', '/al-dalil'].includes(clean)) return 'guides';
  const guideMatch = clean.match(/^\/(?:rehber|guides|odigoi|guias|al-dalil)\/([a-z0-9-]+)$/);
  if (guideMatch && GUIDE_SLUGS.includes(guideMatch[1])) return `guide:${guideMatch[1]}`;
  if (['/iletisim','/contact','/epikoinonia','/contacto','/alittisal'].includes(clean)) return 'contact';
  if (clean === '/dogum-haritasi' || clean === '/birth-chart' || clean === '/genethlios-chartis' || clean === '/carta-natal' || clean === '/kharitat-almilad') return 'natal';
  if (clean === '/burclar' || clean === '/12-burc' || clean === '/burc-rehberi' || clean === '/zodiac-signs' || clean === '/zodia' || clean === '/signos-del-zodiaco' || clean === '/al-abraj') return 'zodiac';
  if (clean === '/gokyuzu-takvimi' || clean === '/sky-calendar' || clean === '/imerologio-ouranou' || clean === '/calendario-celeste' || clean === '/altaqwim-alfalaki') return 'calendar';
  if (clean === '/retrolar' || clean === '/retrogrades' || clean === '/anadromes' || clean === '/retrogrados' || clean === '/harakat-altaraju') return 'redirect:calendar';
  if (clean === '/transitler' || clean === '/transits' || clean === '/diabaseis' || clean === '/transitos' || clean === '/al-uboor-alfalaki') return 'redirect:calendar';
  if (clean === '/sinastri' || clean === '/synastry' || clean === '/synastria' || clean === '/sinastria' || clean === '/altawafuq-alfalaki') return 'synastry';
  if (clean === '/astroloji-sozlugu' || clean === '/astrology-glossary' || clean === '/lexiko-astrologias' || clean === '/glosario-astrologia' || clean === '/qamus-al-tanjim') return 'redirect:approach';
  if (clean === '/ogrenme-merkezi' || clean === '/learning-center' || clean === '/kentro-mathisis' || clean === '/centro-aprendizaje' || clean === '/markaz-altaalum') return 'redirect:jung';
  if (clean === '/burc-yorumlari' || clean === '/gunluk-burc-yorumlari' || clean === '/horoscopes' || clean === '/daily-horoscopes' || clean === '/provlepseis' || clean === '/horoscopos' || clean === '/altawaqushat') return 'redirect:zodiac';
  if (clean === '/yaklasim' || clean === '/approach' || clean === '/prosegisi' || clean === '/enfoque' || clean === '/al-manhaj') return 'approach';
  if (clean === '/kvkk') return 'kvkk';
  if (clean === '/gizlilik' || clean === '/privacy') return 'privacy';
  if (clean === '/kullanim-kosullari' || clean === '/terms') return 'terms';
  if (clean === '/cerezler' || clean === '/cookies') return 'cookies';

  return null;
};

export const isAstrologyPlatformPath = (pathname = '/') => {
  if (pathname === '/api/astrology/daily-horoscope' || pathname.endsWith('/daily-horoscope.json')) return true;
  return Boolean(matchAstrologyRoute(pathname));
};

export const handleAstrologyRequest = (request, env) => {
  const url = new URL(request.url);

  if (url.pathname === '/api/astrology/daily-horoscope' || url.pathname.endsWith('/daily-horoscope.json')) {
    const data = generateDailyHoroscopes();
    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=1800',
        'x-robots-tag': 'noindex, nofollow'
      }
    });
  }

  const pathname = url.pathname;
  const locale = resolveAstrologyLocale(pathname);
  const routeKey = matchAstrologyRoute(pathname) || 'home';
  if (routeKey.startsWith('redirect:')) {
    const targetKey = routeKey.slice('redirect:'.length);
    const targetHref = getRouteHref(locale, targetKey);
    return Response.redirect(`${url.origin}${targetHref}`, 301);
  }
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isPreview = env?.ENVIRONMENT === 'preview';

  const searchParams = Object.fromEntries(url.searchParams.entries());

  let contentHtml = '';
  let title = '';
  let description = '';
  let faqItems = [];
  let layoutRouteKey = routeKey;
  let canonicalPath = getRouteHref(locale, routeKey);

  if (routeKey.startsWith('guide:')) {
    const slug = routeKey.slice('guide:'.length);
    const guide = getGuideBySlug(locale, slug);
    const baseHref = getRouteHref(locale, 'guides');
    contentHtml = renderGuideArticleView({ locale, slug, guideBaseHref: baseHref });
    title = guide ? guide.title : 'Mythborn Guide';
    description = guide ? guide.lead : t.hero.lead;
    faqItems = getGuideFaqItems(locale, slug);
    layoutRouteKey = 'guides';
    canonicalPath = `${baseHref}/${slug}`;
  } else switch (routeKey) {
    case 'guides':
      contentHtml = renderGuidesHubView({ locale, guideBaseHref: getRouteHref(locale, 'guides') });
      title = ({ tr: 'Bilinç, Carl Jung, Meditasyon ve Frekans Rehberleri', en: 'Consciousness, Carl Jung, Meditation & Resonance Guides', el: 'Οδηγοί Συνείδησης, Carl Jung & Διαλογισμού', es: 'Guías de Consciencia, Carl Jung y Meditación', ar: 'أدلة الوعي وكارل يونغ والتأمل' }[locale] || 'Consciousness & Awareness Guides');
      description = ({ tr: 'Spiritüel yaşam, Carl Jung gölge çalışması, Trataka mum meditasyonu ve ses rezonansı üzerine eğitici uzun-form rehberler.', en: 'In-depth educational guides on mindful living, Carl Jung shadow work, candle meditation and sound resonance.', el: 'Αναλυτικοί οδηγοί για συνειδητή ζωή, Carl Jung, διαλογισμό και ήχο.', es: 'Guías educativas sobre vida consciente, Carl Jung, meditación y resonancia.', ar: 'أدلة تعليمية معمقة حول الحياة الواعية وكارل يونغ والتأمل.' }[locale] || t.hero.lead);
      faqItems = getGuideFaqItems(locale, '');
      break;
    case 'sanctuary':
      contentHtml = renderSanctuaryView({ locale });
      title = ({ tr: 'Canlı Meditasyon, Frekans & Doğa Sesleri Sığınağı', en: 'Live Meditation, Frequency & Nature Sound Sanctuary', el: 'Καταφύγιο Διαλογισμού, Συχνοτήτων & Ήχων Φύσης', es: 'Santuario de Meditación, Frecuencias y Sonidos de la Naturaleza', ar: 'ملاذ التأمل المباشر والترددات وأصوات الطبيعة' }[locale] || 'Meditation & Sound Sanctuary');
      description = ({ tr: 'Mum meditasyonu (Trataka), iç benlik nefesi, Theta gevşemesi, 108 mantra sayacı, binaural frekanslar ve canlı doğa sesleri.', en: 'Candle gazing (Trataka), inner-self breathwork, Theta relaxation, 108 mala counter, binaural frequencies and live nature soundscapes.', el: 'Διαλογισμός κεριού, αναπνοή, χαλάρωση Theta, μετρητής 108 μάντρα και ήχοι φύσης.', es: 'Meditación con vela (Trataka), respiración consciente, relajación Theta, contador de 108 mantras y sonidos de la naturaleza.', ar: 'تأمل الشمعة والتنفس الواعي واسترخاء ثيتا وعداد ١٠٨ وأصوات الطبيعة.' }[locale] || t.hero.lead);
      faqItems = getSanctuaryFaqItems(locale);
      break;
    case 'jung':
      contentHtml = renderJungView({ locale, sanctuaryHref: getRouteHref(locale, 'sanctuary') });
      title = ({ tr: 'Carl Jung Arketip, Gölge & Eşzamanlılık Aynası', en: 'Carl Jung Archetype, Shadow & Synchronicity Mirror', el: 'Carl Jung: Αρχέτυπα, Σκιά & Συγχρονικότητα', es: 'Carl Jung: Arquetipos, Sombra y Sincronicidad', ar: 'كارل يونغ: النماذج الأصلية والظل والتزامن' }[locale] || 'Carl Jung Archetype & Shadow Mirror');
      description = ({ tr: 'Carl Jung derinlik psikolojisiyle arketip keşfi, gölge (shadow) yansıtma soruları, aktif imgelem ve gizli yerel eşzamanlılık günlüğü.', en: 'Explore Carl Jung’s archetypes, shadow integration prompts, active imagination and a 100% private local synchronicity journal.', el: 'Εξερευνήστε τα αρχέτυπα του Carl Jung, τη σκιά και το ιδιωτικό ημερολόγιο συγχρονικότητας.', es: 'Explora los arquetipos de Carl Jung, el trabajo con la sombra y un diario local y privado de sincronicidad.', ar: 'استكشف النماذج الأصلية لكارل يونغ وعمل الظل ومذكرة التزامن الخاصة.' }[locale] || t.hero.lead);
      faqItems = getJungFaqItems(locale);
      break;
    case 'natal':
      contentHtml = renderNatalChartView({ locale, searchParams });
      title = ({ tr: 'Doğum Haritası Hesaplama ve Yükselen Analizi', en: 'Birth Chart Calculation and Ascendant Analysis', el: 'Υπολογισμός Γενέθλιου Χάρτη και Ωροσκόπου', es: 'Cálculo de Carta Natal y Análisis del Ascendente', ar: 'حساب خريطة الميلاد وتحليل الطالع' }[locale] || 'Birth Chart Calculation');
      description = ({ tr: 'Doğum tarihi, saati ve şehriyle doğum haritası, yükselen burç ve gezegen evlerini hesaplayın.', en: 'Calculate a birth chart, rising sign and planetary houses from your birth date, time and city.', el: 'Υπολογίστε τον γενέθλιο χάρτη, τον ωροσκόπο και τους πλανητικούς οίκους σας.', es: 'Calcula tu carta natal, ascendente y casas planetarias con tus datos de nacimiento.', ar: 'احسب خريطة الميلاد والطالع والبيوت الفلكية من بيانات ميلادك.' }[locale] || t.hero.lead);
      faqItems = getToolSeo({ locale, type: 'natal', t, routeHref: (routeKey) => getRouteHref(locale, routeKey) }).faqItems;
      break;
    case 'zodiac':
      contentHtml = renderZodiacIndexView({ locale, searchParams });
      title = t.sections.zodiacTitle;
      description = t.sections.zodiacSub;
      faqItems = getToolSeo({ locale, type: 'zodiac', t, routeHref: (routeKey) => getRouteHref(locale, routeKey) }).faqItems;
      break;
    case 'calendar':
      contentHtml = renderSkyCalendarView({ locale });
      title = ({tr:'Gökyüzü Takvimi ve Ay Evreleri',en:'Sky Calendar and Moon Phases',el:'Ουράνιο Ημερολόγιο και Φάσεις Σελήνης',es:'Calendario Celeste y Fases Lunares',ar:'التقويم الفلكي ومراحل القمر'})[locale];
      description = t.sections.skySub;
      break;
    case 'synastry':
      contentHtml = renderSynastryView({ locale, searchParams });
      title = ({tr:'Sinastri ve Çift Haritası Uyumu',en:'Synastry and Birth Chart Compatibility',el:'Συναστρία και Συμβατότητα Γενέθλιων Χαρτών',es:'Sinastría y Compatibilidad de Cartas Natales',ar:'التوافق الفلكي ومقارنة خرائط الميلاد'})[locale];
      description = ({tr:'İki harita arası ilişki ve uyum dinamikleri.',en:'Compare two birth charts to explore symbolic relationship dynamics.',el:'Συγκρίνετε δύο γενέθλιους χάρτες για να εξερευνήσετε συμβολικά τη δυναμική μιας σχέσης.',es:'Compara dos cartas natales para explorar dinámicas simbólicas de pareja.',ar:'قارن بين خريطتي ميلاد لاستكشاف ديناميكيات العلاقة بصورة رمزية.'})[locale];
      break;
    case 'approach':
      contentHtml = renderApproachView({ locale });
      title = ({ tr: 'Yöntem, Etik İlkeler ve Sınırlarımız', en: 'Methodology, Ethics and Boundaries', el: 'Μεθοδολογία, Ηθική και Όρια', es: 'Metodología, Ética y Límites', ar: 'المنهج والأخلاقيات والحدود' }[locale] || 'Methodology, Ethics and Boundaries');
      description = ({ tr: 'Matematiksel kesinlik, açık astronomi ve determinizmin reddi.', en: 'How Mythborn calculates astronomical positions and presents astrology as symbolic, non-deterministic reflection.', el: 'Η μεθοδολογία, τα ηθικά όρια και η συμβολική προσέγγιση του Mythborn.', es: 'La metodología, los límites éticos y el enfoque simbólico de Mythborn.', ar: 'منهجية Mythborn وحدودها الأخلاقية ونهجها الرمزي.' }[locale] || t.hero.lead);
      faqItems = getApproachFaqItems({ locale });
      break;
    case 'contact':
      contentHtml = renderContactView({ locale });
      title = ({tr:'İletişim ve Destek',en:'Contact and Support',el:'Επικοινωνία και Υποστήριξη',es:'Contacto y Soporte',ar:'التواصل والدعم'})[locale];
      description = ({tr:'Mythborn destek, teknik sorular ve iş birlikleri için iletişim adresleri.',en:'Contact Mythborn for support, technical questions and collaborations.',el:'Επικοινωνήστε με το Mythborn για υποστήριξη και συνεργασίες.',es:'Contacta con Mythborn para soporte y colaboraciones.',ar:'تواصل مع Mythborn للدعم والتعاون.'})[locale];
      break;
    case 'kvkk':
    case 'privacy':
    case 'terms':
    case 'cookies': {
      const legalMeta = getLegalPageMeta(locale, routeKey);
      contentHtml = renderLegalView({
        locale,
        type: routeKey,
        contactHref: getRouteHref(locale, 'contact'),
        homeHref: getRouteHref(locale, 'home')
      });
      title = legalMeta.title;
      description = legalMeta.description;
      break;
    }
    case 'home':
    default:
      contentHtml = renderHomeView({ locale, isPreview });
      title = t.hero.title;
      description = t.hero.lead;
      break;
  }

  const html = renderAstrologyLayout({
    locale,
    currentRouteKey: layoutRouteKey,
    title,
    description,
    contentHtml,
    isPreview,
    canonicalUrl: `https://mythborn.co${canonicalPath}`,
    faqItems
  });

  const headers = {
    'content-type': 'text/html; charset=utf-8',
    'content-language': t.lang,
    'cache-control': isPreview ? 'no-store' : 'public, max-age=120'
  };

  if (isPreview) {
    headers['x-robots-tag'] = 'noindex, nofollow';
  }

  return new Response(request.method === 'HEAD' ? null : html, {
    status: 200,
    headers
  });
};
