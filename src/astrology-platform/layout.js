// Mythborn Astrology Platform — Premium Layout & Navigation Component
import { ASTROLOGY_LOCALES } from './i18n.js';
import { SHARED_CSS } from './tokens.js';

export const getRouteHref = (localeKey, routeKey = 'home') => {
  const p = localeKey === 'tr' ? '' : localeKey === 'el' ? '/gr' : `/${localeKey}`;

  const routes = {
    home: p || '/',
    natal: `${p}${localeKey === 'tr' ? '/dogum-haritasi' : localeKey === 'en' ? '/birth-chart' : localeKey === 'el' ? '/genethlios-chartis' : localeKey === 'es' ? '/carta-natal' : '/kharitat-almilad'}`,
    zodiac: `${p}${localeKey === 'tr' ? '/burclar' : localeKey === 'en' ? '/zodiac-signs' : localeKey === 'el' ? '/zodia' : localeKey === 'es' ? '/signos-del-zodiaco' : '/al-abraj'}`,
    calendar: `${p}${localeKey === 'tr' ? '/gokyuzu-takvimi' : localeKey === 'en' ? '/sky-calendar' : localeKey === 'el' ? '/imerologio-ouranou' : localeKey === 'es' ? '/calendario-celeste' : '/altaqwim-alfalaki'}`,
    retros: `${p}${localeKey === 'tr' ? '/retrolar' : localeKey === 'en' ? '/retrogrades' : localeKey === 'el' ? '/anadromes' : localeKey === 'es' ? '/retrogrados' : '/harakat-altaraju'}`,
    transits: `${p}${localeKey === 'tr' ? '/transitler' : localeKey === 'en' ? '/transits' : localeKey === 'el' ? '/diabaseis' : localeKey === 'es' ? '/transitos' : '/al-uboor-alfalaki'}`,
    synastry: `${p}${localeKey === 'tr' ? '/sinastri' : localeKey === 'en' ? '/synastry' : localeKey === 'el' ? '/synastria' : localeKey === 'es' ? '/sinastria' : '/altawafuq-alfalaki'}`,
    glossary: `${p}${localeKey === 'tr' ? '/astroloji-sozlugu' : localeKey === 'en' ? '/astrology-glossary' : localeKey === 'el' ? '/lexiko-astrologias' : localeKey === 'es' ? '/glosario-astrologia' : '/qamus-al-tanjim'}`,
    learning: `${p}${localeKey === 'tr' ? '/ogrenme-merkezi' : localeKey === 'en' ? '/learning-center' : localeKey === 'el' ? '/kentro-mathisis' : localeKey === 'es' ? '/centro-aprendizaje' : '/markaz-altaalum'}`,
    horoscopes: `${p}${localeKey === 'tr' ? '/burc-yorumlari' : localeKey === 'en' ? '/horoscopes' : localeKey === 'el' ? '/provlepseis' : localeKey === 'es' ? '/horoscopos' : '/altawaqushat'}`,
    approach: `${p}${localeKey === 'tr' ? '/yaklasim' : localeKey === 'en' ? '/approach' : localeKey === 'el' ? '/prosegisi' : localeKey === 'es' ? '/enfoque' : '/al-manhaj'}`,
    kvkk: `${p}/kvkk`,
    privacy: `${p}${localeKey === 'tr' ? '/gizlilik' : '/privacy'}`,
    terms: `${p}${localeKey === 'tr' ? '/kullanim-kosullari' : '/terms'}`
  };

  return routes[routeKey] || (p || '/');
};

const safe = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const renderAstrologyLayout = ({
  locale = 'tr',
  currentRouteKey = 'home',
  title = '',
  description = '',
  contentHtml = '',
  isPreview = false,
  canonicalUrl = ''
}) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const pageTitle = title ? `${safe(title)} — ${safe(t.navBrand)}` : `${safe(t.navBrand)} · ${safe(t.navTagline)}`;
  const pageDesc = description ? safe(description) : safe(t.hero.lead);
  const isRtl = t.dir === 'rtl';

  // Language switcher links (Editorial haute horlogerie with delicate mid-dots)
  const langCodes = ['tr', 'en', 'el', 'es', 'ar'];
  const langLabels = { tr: 'TR', en: 'EN', el: 'GR', es: 'ES', ar: 'AR' };
  const langSwitcherHtml = langCodes
    .map((code, idx) => {
      const activeClass = code === locale ? ' is-active' : '';
      const href = getRouteHref(code, currentRouteKey);
      const link = `<a href="${href}" lang="${code}" class="${activeClass}" data-lang-switch="${code}">${langLabels[code]}</a>`;
      return idx < langCodes.length - 1 ? `${link}<span class="astro-lang-dot" aria-hidden="true">·</span>` : link;
    })
    .join('');

  // Primary desktop navigation items (NO redundant "Ana Sayfa" in navbar!)
  const desktopPrimaryNav = [
    { key: 'natal', label: t.menu.natal },
    { key: 'zodiac', label: t.menu.zodiac },
    { key: 'calendar', label: t.menu.calendar },
    { key: 'horoscopes', label: locale === 'tr' ? 'Burç Yorumları' : locale === 'en' ? 'Horoscopes' : locale === 'el' ? 'Προβλέψεις' : locale === 'es' ? 'Horóscopos' : 'الأبراج' }
  ];

  const primaryLinksHtml = desktopPrimaryNav
    .map((item) => {
      const href = getRouteHref(locale, item.key);
      const activeAttr = item.key === currentRouteKey ? ' aria-current="page"' : '';
      return `<a href="${href}"${activeAttr}>${safe(item.label)}</a>`;
    })
    .join('');

  // Dropdown items for instruments & consultation
  const exploreDropdownLabel = locale === 'tr' ? 'Keşif & Araçlar' : locale === 'en' ? 'Explore & Tools' : locale === 'el' ? 'Εργαλεία' : locale === 'es' ? 'Explorar' : 'أدوات فلكية';
  const dropdownHtml = `
    <div class="astro-nav-dropdown">
      <button type="button" class="astro-nav-dropdown-btn">
        <span>${exploreDropdownLabel}</span>
        <span aria-hidden="true">▾</span>
      </button>
      <div class="astro-nav-dropdown-menu">
        <a href="${getRouteHref(locale, 'transits')}">✦ ${safe(t.menu.transits)}</a>
        <a href="${getRouteHref(locale, 'retros')}">✦ ${safe(t.menu.retros)}</a>
        <a href="${getRouteHref(locale, 'synastry')}">✦ ${safe(t.menu.synastry)}</a>
        <a href="${getRouteHref(locale, 'glossary')}">✦ ${safe(t.menu.glossary)}</a>
        <a href="${getRouteHref(locale, 'learning')}">✦ ${locale === 'tr' ? 'Öğrenme Merkezi' : locale === 'en' ? 'Learning Center' : locale === 'el' ? 'Κέντρο Μάθησης' : locale === 'es' ? 'Centro de Aprendizaje' : 'مركز التعلم'}</a>
        <a href="${getRouteHref(locale, 'approach')}">✦ ${safe(t.menu.approach)}</a>
        <a href="${locale === 'tr' ? '/videolar' : `/${locale === 'el' ? 'gr' : locale}/videos`}">✦ ${locale === 'tr' ? 'Haftalık Video Açılımları' : locale === 'en' ? 'Weekly Video Readings' : locale === 'el' ? 'Εβδομαδιαία Βίντεο' : locale === 'es' ? 'Videos Semanales' : 'فيديوهات أسبوعية'}</a>
      </div>
    </div>
  `;

  const allDrawerItems = [
    { key: 'home', label: t.menu.home },
    { key: 'natal', label: t.menu.natal },
    { key: 'zodiac', label: t.menu.zodiac },
    { key: 'calendar', label: t.menu.calendar },
    { key: 'horoscopes', label: locale === 'tr' ? 'Burç Yorumları' : locale === 'en' ? 'Daily Horoscopes' : locale === 'el' ? 'Ημερήσιες Προβλέψεις' : locale === 'es' ? 'Horóscopos' : 'توقعات الأبراج' },
    { key: 'transits', label: t.menu.transits },
    { key: 'retros', label: t.menu.retros },
    { key: 'synastry', label: t.menu.synastry },
    { key: 'glossary', label: t.menu.glossary },
    { key: 'learning', label: locale === 'tr' ? 'Öğrenme Merkezi' : locale === 'en' ? 'Learning Center' : locale === 'el' ? 'Κέντρο Μάθησης' : locale === 'es' ? 'Centro de Aprendizaje' : 'مركز التعلم' },
    { key: 'approach', label: t.menu.approach }
  ];

  const drawerNavHtml = allDrawerItems
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
  <meta name="theme-color" content="#05070e">
  <style>${SHARED_CSS}</style>
</head>
<body>
  <div class="astro-shell">
    <header class="astro-header">
      <div class="astro-container astro-header-inner">
        <a class="astro-brand" href="${getRouteHref(locale, 'home')}">
          <img src="/assets/astrology/mythborn-symbol.svg" alt="Mythborn Symbol" class="astro-brand-logo-img">
          <span class="astro-brand-name">MYTHBORN</span>
        </a>

        <nav class="astro-nav-desktop" aria-label="Primary Navigation">
          ${primaryLinksHtml}
          ${dropdownHtml}
        </nav>

        <div class="astro-header-actions">
          <a class="astro-cta-gold" href="${getRouteHref(locale, 'natal')}">
            <span>${safe(t.menu.ctaQuick)}</span>
            <span aria-hidden="true">${isRtl ? '←' : '→'}</span>
          </a>
          <div class="astro-lang-pills" aria-label="Language Selector">
            ${langSwitcherHtml}
          </div>
          <button type="button" class="astro-menu-btn" data-drawer-open aria-expanded="false" aria-controls="astro-mobile-drawer" aria-label="Menu">
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>
    </header>

    <aside id="astro-mobile-drawer" class="astro-drawer" hidden inert>
      <div class="astro-drawer-backdrop" data-drawer-close></div>
      <div class="astro-drawer-panel">
        <div class="astro-drawer-head">
          <a class="astro-brand" href="${getRouteHref(locale, 'home')}">
            <img src="/assets/astrology/mythborn-symbol.svg" alt="" style="width:26px; height:26px; border-radius:50%">
            <span class="astro-brand-name">MYTHBORN</span>
          </a>
          <button type="button" class="astro-btn-ghost" style="padding:6px 12px; font-size:12px" data-drawer-close aria-label="Close">✕</button>
        </div>
        <nav class="astro-drawer-links" aria-label="Mobile Navigation">
          ${drawerNavHtml}
        </nav>
        <div style="margin-top:auto; padding-top:16px; border-top:1px solid var(--border)">
          <a class="astro-btn-primary" href="${getRouteHref(locale, 'natal')}" style="width:100%; justify-content:center">
            <span>${safe(t.menu.ctaQuick)}</span>
            <span aria-hidden="true">${isRtl ? '←' : '→'}</span>
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
              <img src="/assets/astrology/mythborn-symbol.svg" alt="" style="width:24px; height:24px; border-radius:50%">
              <span class="astro-brand-name">MYTHBORN</span>
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
              <li><a href="${locale === 'tr' ? '/videolar' : `/${locale === 'el' ? 'gr' : locale}/videos`}">${locale === 'tr' ? 'Haftalık Video Açılımları' : locale === 'en' ? 'Weekly Video Readings' : locale === 'el' ? 'Εβδομαδιαία Βίντεο' : locale === 'es' ? 'Videos Semanales' : 'فيديوهات أسبوعية'}</a></li>
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
      var btn = document.querySelector('[data-drawer-open]');
      var drawer = document.getElementById('astro-mobile-drawer');
      var closes = document.querySelectorAll('[data-drawer-close]');
      if (!btn || !drawer) return;
      function open() {
        drawer.hidden = false;
        drawer.removeAttribute('inert');
        drawer.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
      function close() {
        drawer.classList.remove('is-open');
        drawer.hidden = true;
        drawer.setAttribute('inert', '');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
      btn.addEventListener('click', open);
      closes.forEach(function(c) { c.addEventListener('click', close); });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !drawer.hidden) close();
      });
    })();
  </script>
</body>
</html>`;
};
