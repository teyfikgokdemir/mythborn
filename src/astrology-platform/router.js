// Mythborn Astrology Platform — Request Router & Dispatcher
import { ASTROLOGY_LOCALES } from './i18n.js';
import { renderAstrologyLayout, getRouteHref } from './layout.js';
import { renderHomeView } from './pages/home.js';
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
  if (clean === '/dogum-haritasi' || clean === '/birth-chart' || clean === '/genethlios-chartis' || clean === '/carta-natal' || clean === '/kharitat-almilad') return 'natal';
  if (clean === '/burclar' || clean === '/zodiac-signs' || clean === '/zodia' || clean === '/signos-del-zodiaco' || clean === '/al-abraj') return 'zodiac';
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

  switch (routeKey) {
    case 'natal':
      contentHtml = renderNatalChartView({ locale, searchParams });
      title = `${t.menu.natal} Hesaplama`;
      description = 'Doğum haritası, yükselen burç ve gezegen evleri hesaplama aracı.';
      break;
    case 'zodiac':
      contentHtml = renderZodiacIndexView({ locale });
      title = t.sections.zodiacTitle;
      description = t.sections.zodiacSub;
      break;
    case 'calendar':
      contentHtml = renderSkyCalendarView({ locale });
      title = `${t.menu.calendar} ve Ay Evreleri`;
      description = t.sections.skySub;
      break;
    case 'retros':
      contentHtml = renderRetrogradesView({ locale });
      title = `${t.menu.retros} Takvimi`;
      description = 'Gezegen retroları ve gölge dönemleri rehberi.';
      break;
    case 'transits':
      contentHtml = renderTransitsView({ locale });
      title = `${t.menu.transits} ve Açı Dinamikleri`;
      description = 'Canlı gezegen transitleri ve geometrik açılar.';
      break;
    case 'synastry':
      contentHtml = renderSynastryView({ locale, searchParams });
      title = `${t.menu.synastry} ve Çift Haritası Uyumu`;
      description = 'İki harita arası ilişki ve uyum dinamikleri.';
      break;
    case 'glossary':
      contentHtml = renderGlossaryView({ locale });
      title = `${t.menu.glossary} ve Temel Kavramlar`;
      description = t.sections.glossarySub;
      break;
    case 'learning':
      contentHtml = renderLearningCenterView({ locale });
      title = 'Astroloji Öğrenme Merkezi';
      description = 'Kozmik okuryazarlık, doğum haritası, evler ve açılar rehberliği.';
      break;
    case 'horoscopes':
      contentHtml = renderHoroscopesView({ locale, searchParams });
      title = '12 Burç Günlük Gökyüzü Yorumları';
      description = 'Astronomik verilere dayalı etik ve bilinçli burç rehberliği.';
      break;
    case 'approach':
      contentHtml = renderApproachView({ locale });
      title = 'Yöntem, Etik İlkeler ve Sınırlarımız';
      description = 'Matematiksel kesinlik, açık astronomi ve determinizmin reddi.';
      break;
    case 'home':
    default:
      contentHtml = renderHomeView({ locale });
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
    canonicalUrl: `https://mythborn.co${getRouteHref(locale, routeKey)}`
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
