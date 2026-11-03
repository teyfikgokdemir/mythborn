// Mythborn Astrology Platform — Master Layout (Header, Footer, Language Switcher, Drawer)
import { ASTROLOGY_LOCALES } from './i18n.js';
import { SHARED_CSS } from './tokens.js';

export const getRouteHref = (localeKey, routeKey = 'home') => {
  const loc = ASTROLOGY_LOCALES[localeKey] || ASTROLOGY_LOCALES.tr;
  const p = loc.prefix;

  const routes = {
    home: p || '/',
    natal: `${p}/dogum-haritasi`,
    zodiac: `${p}/burclar`,
    calendar: `${p}/gokyuzu-takvimi`,
    retros: `${p}/retrolar`,
    transits: `${p}/transitler`,
    synastry: `${p}/sinastri`,
    glossary: `${p}/astroloji-sozlugu`,
    learning: `${p}/ogrenme-merkezi`,
    horoscopes: `${p}/burc-yorumlari`,
    approach: `${p}/yaklasim`,
    about: `${p}/hakkimizda`,
    contact: `${p}/iletisim`,
    kvkk: `${p}/kvkk`,
    privacy: `${p}/gizlilik`,
    terms: `${p}/kullanim-kosullari`
  };

  return routes[routeKey] || (p || '/');
};

const safe = (str = '') => String(str).replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

export const renderAstrologyLayout = ({
  locale = 'tr',
  currentRouteKey = 'home',
  title = '',
  description = '',
  contentHtml = '',
  isPreview = true,
  canonicalUrl = ''
}) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const pageTitle = title ? `${safe(title)} — ${safe(t.navBrand)}` : `${safe(t.navBrand)} · ${safe(t.navTagline)}`;
  const pageDesc = description ? safe(description) : safe(t.hero.lead);
  const isRtl = t.dir === 'rtl';

  // Language switcher links
  const langCodes = ['tr', 'en', 'el', 'es', 'ar'];
  const langLabels = { tr: 'TR', en: 'EN', el: 'GR', es: 'ES', ar: 'AR' };
  const langSwitcherHtml = langCodes
    .map((code) => {
      const activeAttr = code === locale ? ' aria-current="page"' : '';
      const href = getRouteHref(code, currentRouteKey);
      return `<a href="${href}" lang="${code}" data-lang-switch="${code}"${activeAttr}>${langLabels[code]}</a>`;
    })
    .join('');

  // Primary navigation items
  const navItems = [
    { key: 'home', label: t.menu.home },
    { key: 'natal', label: t.menu.natal },
    { key: 'zodiac', label: t.menu.zodiac },
    { key: 'calendar', label: t.menu.calendar },
    { key: 'retros', label: t.menu.retros },
    { key: 'transits', label: t.menu.transits },
    { key: 'synastry', label: t.menu.synastry },
    { key: 'glossary', label: t.menu.glossary }
  ];

  const desktopNavHtml = navItems
    .map((item) => {
      const href = getRouteHref(locale, item.key);
      const activeAttr = item.key === currentRouteKey ? ' aria-current="page"' : '';
      return `<a href="${href}"${activeAttr}>${safe(item.label)}</a>`;
    })
    .join('');

  const drawerNavHtml = navItems
    .map((item) => {
      const href = getRouteHref(locale, item.key);
      const activeAttr = item.key === currentRouteKey ? ' aria-current="page"' : '';
      return `<a href="${href}"${activeAttr}><span>✦ ${safe(item.label)}</span><span aria-hidden="true">${isRtl ? '←' : '→'}</span></a>`;
    })
    .join('');

  // Metadata tags
  const robotsMeta = isPreview
    ? '<meta name="robots" content="noindex, nofollow">'
    : '<meta name="robots" content="index, follow, max-image-preview:large">';

  const canonicalTag = canonicalUrl && !isPreview
    ? `<link rel="canonical" href="${canonicalUrl}">`
    : '';

  const hreflangTags = !isPreview ? `
  <link rel="alternate" hreflang="tr" href="https://mythborn.co${getRouteHref('tr', currentRouteKey)}">
  <link rel="alternate" hreflang="en" href="https://mythborn.co${getRouteHref('en', currentRouteKey)}">
  <link rel="alternate" hreflang="el" href="https://mythborn.co${getRouteHref('el', currentRouteKey)}">
  <link rel="alternate" hreflang="es" href="https://mythborn.co${getRouteHref('es', currentRouteKey)}">
  <link rel="alternate" hreflang="ar" href="https://mythborn.co${getRouteHref('ar', currentRouteKey)}">
  <link rel="alternate" hreflang="x-default" href="https://mythborn.co${getRouteHref('tr', currentRouteKey)}">` : '';

  const ogLocale = locale === 'gr' ? 'el' : locale;
  const ogTag = `
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDesc}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="/assets/astrology/og/og-${ogLocale}.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageTitle}">
  <meta name="twitter:description" content="${pageDesc}">
  <meta name="twitter:image" content="/assets/astrology/og/og-${ogLocale}.svg">
  <link rel="icon" type="image/svg+xml" href="/assets/astrology/mythborn-symbol.svg">`;

  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${pageTitle}</title>
  <meta name="description" content="${pageDesc}">
  ${robotsMeta}
  ${canonicalTag}
  ${hreflangTags}
  ${ogTag}
  <meta name="theme-color" content="#08080c">
  <style>${SHARED_CSS}</style>
</head>
<body>
  <div class="astro-shell">
    <header class="astro-header">
      <div class="astro-container astro-header-inner">
        <a class="astro-brand" href="${getRouteHref(locale, 'home')}">
          <img src="/assets/astrology/mythborn-symbol.svg" alt="" style="width:28px; height:28px; border-radius:50%; filter:drop-shadow(0 0 6px rgba(212,175,55,0.4))">
          <span>${safe(t.navBrand)}</span>
        </a>

        <nav class="astro-nav-desktop" aria-label="Primary Navigation">
          ${desktopNavHtml}
        </nav>

        <div class="astro-header-actions">
          <a class="astro-cta-pill" href="${getRouteHref(locale, 'natal')}">
            <span>${safe(t.menu.ctaQuick)}</span>
          </a>
          <div class="astro-langs" aria-label="Language Selector">
            ${langSwitcherHtml}
          </div>
          <button type="button" class="astro-menu-btn" data-drawer-open aria-expanded="false" aria-controls="astro-mobile-drawer">
            <span aria-hidden="true">☰</span>
            <span>${safe(t.menu.menuToggle)}</span>
          </button>
        </div>
      </div>
    </header>

    <aside id="astro-mobile-drawer" class="astro-drawer" hidden inert>
      <div class="astro-drawer-backdrop" data-drawer-close></div>
      <div class="astro-drawer-panel">
        <div class="astro-drawer-head">
          <a class="astro-brand" href="${getRouteHref(locale, 'home')}">
            <span class="astro-brand-emblem" aria-hidden="true">✦</span>
            <span>${safe(t.navBrand)}</span>
          </a>
          <button type="button" class="astro-btn-ghost" data-drawer-close aria-label="Close">✕</button>
        </div>
        <nav class="astro-drawer-links" aria-label="Mobile Navigation">
          ${drawerNavHtml}
        </nav>
        <div style="margin-top:auto">
          <a class="astro-btn-primary" href="${getRouteHref(locale, 'natal')}" style="width:100%;justify-content:center">
            ${safe(t.menu.ctaQuick)}
          </a>
        </div>
      </div>
    </aside>

    <main id="main-content">
      ${contentHtml}
    </main>

    <footer class="astro-footer">
      <div class="astro-container">
        <div class="astro-footer-grid">
          <div class="astro-footer-brand">
            <a class="astro-brand" href="${getRouteHref(locale, 'home')}">
              <span class="astro-brand-emblem" aria-hidden="true">✦</span>
              <span>${safe(t.navBrand)}</span>
            </a>
            <p>${safe(t.navTagline)}. ${safe(t.hero.lead)}</p>
          </div>

          <div class="astro-footer-col">
            <h4>${safe(t.footer.colTools)}</h4>
            <ul>
              <li><a href="${getRouteHref(locale, 'natal')}">${safe(t.menu.natal)}</a></li>
              <li><a href="${getRouteHref(locale, 'synastry')}">${safe(t.menu.synastry)}</a></li>
              <li><a href="${getRouteHref(locale, 'calendar')}">${safe(t.menu.calendar)}</a></li>
              <li><a href="${getRouteHref(locale, 'transits')}">${safe(t.menu.transits)}</a></li>
              <li><a href="${getRouteHref(locale, 'retros')}">${safe(t.menu.retros)}</a></li>
            </ul>
          </div>

          <div class="astro-footer-col">
            <h4>${safe(t.footer.colZodiac)}</h4>
            <ul>
              <li><a href="${getRouteHref(locale, 'zodiac')}">${safe(t.menu.zodiac)}</a></li>
              <li><a href="${getRouteHref(locale, 'horoscopes')}">${locale === 'tr' ? 'Burç Yorumları' : locale === 'en' ? 'Daily Horoscopes' : locale === 'el' ? 'Ημερήσιες Προβλέψεις' : locale === 'es' ? 'Horóscopos' : 'توقعات الأبراج'}</a></li>
              <li><a href="${getRouteHref(locale, 'glossary')}">${safe(t.menu.glossary)}</a></li>
              <li><a href="${getRouteHref(locale, 'learning')}">${locale === 'tr' ? 'Öğrenme Merkezi' : locale === 'en' ? 'Learning Center' : locale === 'el' ? 'Κέντρο Μάθησης' : locale === 'es' ? 'Centro de Aprendizaje' : 'مركز التعلم'}</a></li>
              <li><a href="${getRouteHref(locale, 'approach')}">${safe(t.menu.approach)}</a></li>
            </ul>
          </div>

          <div class="astro-footer-col">
            <h4>${safe(t.footer.colLegal)}</h4>
            <ul>
              <li><a href="${getRouteHref(locale, 'kvkk')}">KVKK & GDPR</a></li>
              <li><a href="${getRouteHref(locale, 'privacy')}">${safe(t.footer.colLegal)}</a></li>
              <li><a href="${getRouteHref(locale, 'terms')}">${safe(t.footer.colLegal)}</a></li>
            </ul>
          </div>
        </div>

        <div class="astro-footer-disclaimer">
          <p>${safe(t.disclaimer)}</p>
        </div>

        <div class="astro-footer-bottom">
          <span>${safe(t.footer.copyright)}</span>
          <a class="astro-qct-sig" href="https://qctcommerce.com/" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">✦</span>
            <span>${safe(t.footer.qctCredit)}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  </div>

  <script>
    (function() {
      const drawer = document.getElementById('astro-mobile-drawer');
      const openBtn = document.querySelector('[data-drawer-open]');
      const closeBtns = document.querySelectorAll('[data-drawer-close]');

      const setDrawer = function(open) {
        if (!drawer) return;
        if (open) {
          drawer.hidden = false;
          drawer.removeAttribute('inert');
          requestAnimationFrame(function() { drawer.classList.add('is-open'); });
        } else {
          drawer.classList.remove('is-open');
          drawer.setAttribute('inert', '');
          drawer.hidden = true;
        }
        if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      };

      if (openBtn) openBtn.addEventListener('click', function() { setDrawer(true); });
      closeBtns.forEach(function(b) { b.addEventListener('click', function() { setDrawer(false); }); });
      document.addEventListener('keydown', function(e) { if (e.key === 'Escape') setDrawer(false); });
    })();
  </script>
</body>
</html>`;
};
