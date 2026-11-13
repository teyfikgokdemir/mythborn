// Mythborn Astrology Platform — Request Router & Dispatcher
import { ASTROLOGY_LOCALES } from './i18n.js';
import { renderAstrologyLayout, getRouteHref } from './layout.js';
import { renderHomeView } from './pages/home.js';
import { renderContactView } from './pages/contact.js';
import { renderNatalChartView } from './pages/natal-chart.js';
import { renderZodiacIndexView } from './pages/zodiac.js';
import { renderSkyCalendarView } from './pages/sky-calendar.js';
import { renderRetrogradesView } from './pages/retrogrades.js';
import { renderTransitsView } from './pages/transits.js';
import { renderSynastryView } from './pages/synastry.js';
import { renderGlossaryView } from './pages/glossary.js';
import { renderApproachView } from './pages/approach.js';
import { renderLearningCenterView } from './pages/learning.js';
import { renderHoroscopesView } from './pages/horoscopes.js';
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
  if (['/iletisim','/contact','/epikoinonia','/contacto','/alittisal'].includes(clean)) return 'contact';
  if (clean === '/dogum-haritasi' || clean === '/birth-chart' || clean === '/genethlios-chartis' || clean === '/carta-natal' || clean === '/kharitat-almilad') return 'natal';
  if (clean === '/burclar' || clean === '/12-burc' || clean === '/burc-rehberi' || clean === '/zodiac-signs' || clean === '/zodia' || clean === '/signos-del-zodiaco' || clean === '/al-abraj') return 'zodiac';
  if (clean === '/gokyuzu-takvimi' || clean === '/sky-calendar' || clean === '/imerologio-ouranou' || clean === '/calendario-celeste' || clean === '/altaqwim-alfalaki') return 'calendar';
  if (clean === '/retrolar' || clean === '/retrogrades' || clean === '/anadromes' || clean === '/retrogrados' || clean === '/harakat-altaraju') return 'retros';
  if (clean === '/transitler' || clean === '/transits' || clean === '/diabaseis' || clean === '/transitos' || clean === '/al-uboor-alfalaki') return 'transits';
  if (clean === '/sinastri' || clean === '/synastry' || clean === '/synastria' || clean === '/sinastria' || clean === '/altawafuq-alfalaki') return 'synastry';
  if (clean === '/astroloji-sozlugu' || clean === '/astrology-glossary' || clean === '/lexiko-astrologias' || clean === '/glosario-astrologia' || clean === '/qamus-al-tanjim') return 'glossary';
  if (clean === '/ogrenme-merkezi' || clean === '/learning-center' || clean === '/kentro-mathisis' || clean === '/centro-aprendizaje' || clean === '/markaz-altaalum') return 'learning';
  if (clean === '/burc-yorumlari' || clean === '/gunluk-burc-yorumlari' || clean === '/horoscopes' || clean === '/daily-horoscopes' || clean === '/provlepseis' || clean === '/horoscopos' || clean === '/altawaqushat') return 'horoscopes';
  if (clean === '/yaklasim' || clean === '/approach' || clean === '/prosegisi' || clean === '/enfoque' || clean === '/al-manhaj') return 'approach';

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
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isPreview = env?.ENVIRONMENT === 'preview';

  const searchParams = Object.fromEntries(url.searchParams.entries());

  let contentHtml = '';
  let title = '';
  let description = '';
  let faqItems = [];

  switch (routeKey) {
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
    case 'retros':
      contentHtml = renderRetrogradesView({ locale });
      title = ({tr:'Gezegen Retroları Takvimi',en:'Planetary Retrogrades Calendar',el:'Ημερολόγιο Ανάδρομων Πλανητών',es:'Calendario de Planetas Retrógrados',ar:'تقويم تراجع الكواكب'})[locale];
      description = ({tr:'Gezegen retroları ve gölge dönemleri rehberi.',en:'Explore planetary retrograde cycles and their shadow periods.',el:'Εξερευνήστε τους ανάδρομους κύκλους των πλανητών και τις περιόδους σκιάς τους.',es:'Explora los ciclos retrógrados de los planetas y sus períodos de sombra.',ar:'استكشف دورات تراجع الكواكب وفترات الظل المرتبطة بها.'})[locale];
      break;
    case 'transits':
      contentHtml = renderTransitsView({ locale });
      title = ({tr:'Gezegen Transitleri ve Açı Dinamikleri',en:'Planetary Transits and Aspects',el:'Πλανητικές Διελεύσεις και Όψεις',es:'Tránsitos Planetarios y Aspectos',ar:'عبور الكواكب والزوايا الفلكية'})[locale];
      description = ({tr:'Canlı gezegen transitleri ve geometrik açılar.',en:'Explore current planetary transits and geometric aspects.',el:'Δείτε τις τρέχουσες πλανητικές διελεύσεις και τις γεωμετρικές όψεις.',es:'Consulta los tránsitos planetarios actuales y sus aspectos geométricos.',ar:'استكشف عبور الكواكب الحالي والزوايا الهندسية بينها.'})[locale];
      break;
    case 'synastry':
      contentHtml = renderSynastryView({ locale, searchParams });
      title = ({tr:'Sinastri ve Çift Haritası Uyumu',en:'Synastry and Birth Chart Compatibility',el:'Συναστρία και Συμβατότητα Γενέθλιων Χαρτών',es:'Sinastría y Compatibilidad de Cartas Natales',ar:'التوافق الفلكي ومقارنة خرائط الميلاد'})[locale];
      description = ({tr:'İki harita arası ilişki ve uyum dinamikleri.',en:'Compare two birth charts to explore symbolic relationship dynamics.',el:'Συγκρίνετε δύο γενέθλιους χάρτες για να εξερευνήσετε συμβολικά τη δυναμική μιας σχέσης.',es:'Compara dos cartas natales para explorar dinámicas simbólicas de pareja.',ar:'قارن بين خريطتي ميلاد لاستكشاف ديناميكيات العلاقة بصورة رمزية.'})[locale];
      break;
    case 'glossary':
      contentHtml = renderGlossaryView({ locale });
      title = ({tr:'Astroloji Sözlüğü ve Temel Kavramlar',en:'Astrology Glossary and Key Concepts',el:'Αστρολογικό Λεξικό και Βασικές Έννοιες',es:'Glosario de Astrología y Conceptos Clave',ar:'قاموس التنجيم والمفاهيم الأساسية'})[locale];
      description = t.sections.glossarySub;
      break;
    case 'learning':
      contentHtml = renderLearningCenterView({ locale });
      title = ({tr:'Astroloji Öğrenme Merkezi',en:'Astrology Learning Center',el:'Κέντρο Εκμάθησης Αστρολογίας',es:'Centro de Aprendizaje de Astrología',ar:'مركز تعلم التنجيم'})[locale];
      description = ({tr:'Kozmik okuryazarlık, doğum haritası, evler ve açılar rehberliği.',en:'Learn the basics of birth charts, astrological houses and planetary aspects.',el:'Μάθετε τα βασικά των γενέθλιων χαρτών, των αστρολογικών οίκων και των πλανητικών όψεων.',es:'Aprende los fundamentos de las cartas natales, las casas y los aspectos planetarios.',ar:'تعرف على أساسيات خرائط الميلاد والبيوت الفلكية والزوايا بين الكواكب.'})[locale];
      break;
    case 'horoscopes':
      contentHtml = renderHoroscopesView({ locale, searchParams });
      title = ({tr:'12 Burç Günlük Gökyüzü Yorumları',en:'Daily Horoscopes for All 12 Zodiac Signs',el:'Ημερήσιες Προβλέψεις για τα 12 Ζώδια',es:'Horóscopos Diarios de los 12 Signos',ar:'الأبراج اليومية للعلامات الاثنتي عشرة'})[locale];
      description = ({tr:'Astronomik verilere dayalı etik ve bilinçli burç rehberliği.',en:'Explore reflective daily zodiac guidance informed by astronomical data.',el:'Διαβάστε ημερήσιες συμβολικές ερμηνείες των ζωδίων με βάση αστρονομικά δεδομένα.',es:'Explora orientaciones simbólicas diarias para cada signo basadas en datos astronómicos.',ar:'استكشف قراءات يومية رمزية للأبراج تستند إلى بيانات فلكية.'})[locale];
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
    case 'home':
    default:
      contentHtml = renderHomeView({ locale, isPreview });
      title = t.hero.title;
      description = t.hero.lead;
      break;
  }

  const html = renderAstrologyLayout({
    locale,
    currentRouteKey: routeKey,
    title,
    description,
    contentHtml,
    isPreview,
    canonicalUrl: `https://mythborn.co${getRouteHref(locale, routeKey)}`,
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
