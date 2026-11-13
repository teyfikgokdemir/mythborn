// Mythborn Astrology Platform — Premium Layout & Navigation Component
import { ASTROLOGY_LOCALES } from './i18n.js';
import { SHARED_CSS } from './tokens.js';

export const getRouteHref = (localeKey, routeKey = 'home') => {
  const p = localeKey === 'tr' ? '' : localeKey === 'el' ? '/gr' : `/${localeKey}`;

  const routes = {
    home: p || '/',
    ebced: localeKey === 'ar' ? '/ebced' : `${p}/ebced`,
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
  canonicalUrl = '',
  faqItems = []
}) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const pageTitle = title ? `${safe(title)} — ${safe(t.navBrand)}` : `${safe(t.navBrand)} · ${safe(t.navTagline)}`;
  const pageDesc = description ? safe(description) : safe(t.hero.lead);
  const isRtl = t.dir === 'rtl';

  // Language switcher links (Editorial haute horlogerie with delicate mid-dots)
  const langCodes = ['tr', 'en', 'el', 'es', 'ar'];
  const langLabels = { tr: 'TR', en: 'EN', el: 'GR', es: 'ES', ar: 'AR' };
  const langFullNames = {
    tr: 'Türkçe',
    en: 'English',
    el: 'Ελληνικά',
    es: 'Español',
    ar: 'العربية'
  };

  const clean = (txt) => (txt || '').replace(/[→←\s]+$/, '');

  const langSwitcherHtml = `
    <details class="astro-lang-select">
      <summary aria-label="${locale === 'tr' ? 'Dil seç' : locale === 'ar' ? 'اختر اللغة' : 'Select language'}"><span aria-hidden="true">◎</span><span class="astro-lang-current">${langFullNames[locale]}</span><span class="astro-lang-chevron" aria-hidden="true">▾</span></summary>
      <div class="astro-lang-options" role="group" aria-label="Languages">
        ${langCodes.map(code => `<a href="${getRouteHref(code, currentRouteKey)}" lang="${code}"${code === locale ? ' aria-current="page"' : ''}><span>${langLabels[code]}</span><span>${langFullNames[code]}</span></a>`).join('')}
      </div>
    </details>`;

  const drawerLangHtml = langCodes.map((code) => {
    const isCur = code === locale;
    const href = getRouteHref(code, currentRouteKey);
    return `<a href="${href}" lang="${code}" style="padding:7px 10px; border-radius:8px; font-size:11.5px; font-weight:600; text-align:center; text-decoration:none; border:1px solid ${isCur ? 'var(--gold)' : 'rgba(255,255,255,0.12)'}; background:${isCur ? 'rgba(212,175,55,0.18)' : 'rgba(255,255,255,0.03)'}; color:${isCur ? 'var(--gold-bright)' : 'var(--cream)'}">${langLabels[code]} · ${langFullNames[code]}</a>`;
  }).join('');

  const footerLangPillsHtml = langCodes.map((code) => {
    const isCur = code === locale;
    const href = getRouteHref(code, currentRouteKey);
    return `<a href="${href}" lang="${code}" class="astro-footer-lang-badge${isCur ? ' is-active' : ''}">${langLabels[code]}</a>`;
  }).join('');

  const telemetryLabels = {
    tr: {
      ephemeris: '✦ 0.001° Efemeris Hassasiyeti',
      standard: '⏱ 24 Saat Zaman Standardı · TSI & UTC',
      privacy: '🔒 Sıfır Veri Depolama · %100 Gizlilik'
    },
    en: {
      ephemeris: '✦ 0.001° Ephemeris Precision',
      standard: '⏱ 24h Time Standard · Dual TSI & UTC',
      privacy: '🔒 Zero Data Logging · 100% Privacy'
    },
    el: {
      ephemeris: '✦ Ακρίβεια Εφημερίδας 0.001°',
      standard: '⏱ 24ωρο Πρότυπο Χρόνου · TSI & UTC',
      privacy: '🔒 Μηδενική Καταγραφή · 100% Απόρρητο'
    },
    es: {
      ephemeris: '✦ Precisión de Efemérides 0.001°',
      standard: '⏱ Estándar de 24 Horas · TSI y UTC',
      privacy: '🔒 Cero Registro de Datos · 100% Privacidad'
    },
    ar: {
      ephemeris: '✦ دقة التقويم الفلكي 0.001 درجة',
      standard: '⏱ معيار التوقيت 24 ساعة · TSI و UTC',
      privacy: '🔒 بدون تخزين بيانات · خصوصية 100%'
    }
  };
  const curTel = telemetryLabels[locale] || telemetryLabels.tr;

  const legalLabels = {
    tr: {
      kvkk: 'KVKK & GDPR',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları'
    },
    en: {
      kvkk: 'KVKK & GDPR',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    el: {
      kvkk: 'KVKK & GDPR',
      privacy: 'Πολιτική Απορρήτου',
      terms: 'Όροι Χρήσης'
    },
    es: {
      kvkk: 'KVKK y GDPR',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso'
    },
    ar: {
      kvkk: 'حماية البيانات و GDPR',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام'
    }
  };
  const curLegal = legalLabels[locale] || legalLabels.tr;

  const manifestoText = locale === 'tr' ? 'Açık kaynak efemeris modelleri ve matematiksel astronomiyle haritanızı hesaplayın; deterministik korku yerine sembolik öz-farkındalık kazanın.'
    : locale === 'en' ? 'Calculate your natal geometry with open-source mathematical ephemeris and archetypal psychology. Embracing conscious awareness over deterministic fear.'
    : locale === 'el' ? 'Ανοιχτού κώδικα αστρονομικά εφημερίδια και αρχετυπική ψυχολογία για συνειδητή αυτογνωσία.'
    : locale === 'es' ? 'Modelos de efemérides astronómicas de código abierto y psicología arquetípica para el autoconocimiento consciente.'
    : 'نماذج فلكية مفتوحة المصدر وحسابات دقيقة قائمة على الوعي الذاتي الرمزي بدلاً من الخوف الحتمي.';

  const backToTopText = locale === 'tr' ? '↑ Başa Dön'
    : locale === 'en' ? '↑ Back to Top'
    : locale === 'el' ? '↑ Κορυφή'
    : locale === 'es' ? '↑ Volver Arriba'
    : '↑ إلى الأعلى';

  // Primary desktop navigation items (NO redundant "Ana Sayfa" in navbar!)
  const desktopPrimaryNav = [
    { key: 'natal', label: t.menu.natal },
    { key: 'ebced', label: locale === 'tr' ? 'Ebced & Numeroloji' : locale === 'ar' ? 'الأبجد (بالتركية)' : locale === 'el' ? 'Αμπτζάντ & Αριθμολογία' : locale === 'es' ? 'Ábyad y Numerología' : 'Abjad & Numerology' },
    { key: 'zodiac', label: t.menu.zodiac },
    { key: 'calendar', label: t.menu.calendar }
  ];

  // Preview-only navigation: frequency prototype is deliberately not exposed in production.
  const frequencyTitle = ({ tr: 'Frekans Stüdyosu', en: 'Frequency Studio', el: 'Στούντιο Συχνοτήτων', es: 'Estudio de Frecuencias', ar: 'استوديو الترددات' })[locale] || 'Frequency Studio';
  const frequencyHref = '/frekans-studyo';
  const frequencyDesktopLink = isPreview
    ? `<a class="astro-nav-frequency" href="${frequencyHref}">${safe(frequencyTitle)}</a>`
    : '';

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
        <a href="${getRouteHref(locale, 'horoscopes')}">✦ ${locale === 'tr' ? 'Burç Yorumları' : locale === 'en' ? 'Horoscopes' : locale === 'el' ? 'Προβλέψεις' : locale === 'es' ? 'Horóscopos' : 'الأبراج'}</a>
        <a href="${getRouteHref(locale, 'transits')}">✦ ${safe(t.menu.transits)}</a>
        <a href="${getRouteHref(locale, 'retros')}">✦ ${safe(t.menu.retros)}</a>
        <a href="${getRouteHref(locale, 'synastry')}">✦ ${safe(t.menu.synastry)}</a>
        <a href="${getRouteHref(locale, 'glossary')}">✦ ${safe(t.menu.glossary)}</a>
        <a href="${getRouteHref(locale, 'learning')}">✦ ${locale === 'tr' ? 'Öğrenme Merkezi' : locale === 'en' ? 'Learning Center' : locale === 'el' ? 'Κέντρο Μάθησης' : locale === 'es' ? 'Centro de Aprendizaje' : 'مركز التعلم'}</a>
        <a href="${getRouteHref(locale, 'approach')}">✦ ${safe(t.menu.approach)}</a>
      </div>
    </div>
  `;

  const allDrawerItems = [
    { key: 'home', label: t.menu.home },
    { key: 'natal', label: t.menu.natal },
    { key: 'ebced', label: locale === 'tr' ? 'Ebced & Numeroloji' : locale === 'ar' ? 'الأبجد (بالتركية)' : locale === 'el' ? 'Αμπτζάντ & Αριθμολογία' : locale === 'es' ? 'Ábyad y Numerología' : 'Abjad & Numerology' },
    { key: 'zodiac', label: t.menu.zodiac },
    { key: 'calendar', label: t.menu.calendar },
    ...(isPreview ? [{ key: 'frequency', label: frequencyTitle }] : []),
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
      const href = item.key === 'frequency' ? frequencyHref : getRouteHref(locale, item.key);
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

  // Rich Schema.org Structured Data Graph (AEO / GEO / SEO)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mythborn.co/#organization",
        "name": "Mythborn",
        "url": "https://mythborn.co",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mythborn.co/assets/astrology/mythborn-symbol.svg"
        },
        "description": "High-precision open-source astronomical ephemeris and archetypal astrology platform."
      },
      {
        "@type": "WebSite",
        "@id": "https://mythborn.co/#website",
        "url": "https://mythborn.co",
        "name": "Mythborn",
        "publisher": { "@id": "https://mythborn.co/#organization" },
        "inLanguage": ["tr", "en", "el", "es", "ar"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === 'tr' ? "Ana Sayfa" : "Home",
            "item": `https://mythborn.co${getRouteHref(locale, 'home')}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageTitle,
            "item": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}`
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": pageTitle,
        "url": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}`,
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}#webpage`,
        "url": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}`,
        "name": pageTitle,
        "description": pageDesc,
        "isPartOf": { "@id": "https://mythborn.co/#website" },
        "inLanguage": t.lang
      },
      ...(faqItems.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}#faq`,
        "url": `https://mythborn.co${getRouteHref(locale, currentRouteKey)}`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      }] : [])
    ]
  };
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(schemaGraph)}</script>`;

  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${pageTitle}</title>
  <meta name="description" content="${pageDesc}">
  ${robotsMeta}
  ${canonicalTag}
  ${hreflangTags}
  ${ogTag}
  ${jsonLdTag}
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
          ${frequencyDesktopLink}
          ${dropdownHtml}
        </nav>

        <div class="astro-header-actions">
          <a class="astro-cta-gold" href="${getRouteHref(locale, 'natal')}">
            <span>${safe(clean(t.menu.ctaQuick))}</span>
            <span aria-hidden="true">${isRtl ? '←' : '→'}</span>
          </a>
          ${langSwitcherHtml}
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
            <img src="/assets/astrology/mythborn-symbol.svg" alt="" style="width:24px; height:24px; border-radius:50%">
            <span class="astro-brand-name" style="font-size:15px">MYTHBORN</span>
          </a>
          <button type="button" class="astro-btn-ghost" style="padding:6px 12px; font-size:12px" data-drawer-close aria-label="Close">✕</button>
        </div>

        <!-- Dedicated Touch Language Grid for Mobile Drawer -->
        <div style="padding:10px 0 14px 0; border-bottom:1px solid var(--border); margin-bottom:12px">
          <span style="font-size:10px; text-transform:uppercase; letter-spacing:0.12em; color:var(--gold); display:block; margin-bottom:8px">Kozmik Dil / Language</span>
          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:6px">
            ${drawerLangHtml}
          </div>
        </div>

        <nav class="astro-drawer-links" aria-label="Mobile Navigation">
          ${drawerNavHtml}
        </nav>
        <div style="margin-top:auto; padding-top:16px; border-top:1px solid var(--border)">
          <a class="astro-btn-primary" href="${getRouteHref(locale, 'natal')}" style="width:100%; justify-content:center">
            <span>${safe(clean(t.menu.ctaQuick))}</span>
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
        <!-- Live Precision Telemetry Ribbon -->
        <div class="astro-footer-telemetry">
          <div class="astro-footer-telemetry-pill">
            <span>${curTel.ephemeris}</span>
          </div>
          <div class="astro-footer-telemetry-pill">
            <span>${curTel.standard}</span>
          </div>
          <div class="astro-footer-telemetry-pill">
            <span>${curTel.privacy}</span>
          </div>
        </div>

        <!-- 4-Column Luxury Architecture -->
        <div class="astro-footer-grid">
          <div class="astro-footer-brand-elite">
            <a class="astro-brand" href="${getRouteHref(locale, 'home')}">
              <img src="/assets/astrology/mythborn-symbol.svg" alt="" class="astro-brand-logo-img">
              <span class="astro-brand-name">MYTHBORN</span>
            </a>
            <p class="astro-footer-manifesto">${manifestoText}</p>
            <div class="astro-footer-engine-badge">
              <span>✦ High-Precision Ephemeris Engine · v2.4</span>
            </div>
            <button type="button" class="astro-back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="${backToTopText}">
              <span>${backToTopText}</span>
            </button>
          </div>

          <div class="astro-footer-col">
            <h4>✦ ${safe(t.footer.colTools)}</h4>
            <ul>
              <li><a href="${getRouteHref(locale, 'natal')}">${safe(t.menu.natal)}</a></li>
              <li><a href="${getRouteHref(locale, 'synastry')}">${safe(t.menu.synastry)}</a></li>
              <li><a href="${getRouteHref(locale, 'calendar')}">${safe(t.menu.calendar)}</a></li>
              <li><a href="${getRouteHref(locale, 'transits')}">${safe(t.menu.transits)}</a></li>
              <li><a href="${getRouteHref(locale, 'retros')}">${safe(t.menu.retros)}</a></li>
            </ul>
          </div>

          <div class="astro-footer-col">
            <h4>✦ ${safe(t.footer.colZodiac)}</h4>
            <ul>
              <li><a href="${getRouteHref(locale, 'zodiac')}">${safe(t.menu.zodiac)}</a></li>
              <li><a href="${getRouteHref(locale, 'horoscopes')}">${locale === 'tr' ? 'Burç Yorumları' : locale === 'en' ? 'Daily Horoscopes' : locale === 'el' ? 'Ημερήσιες Προβλέψεις' : locale === 'es' ? 'Horóscopos' : 'توقعات الأبراج'}</a></li>
              <li><a href="${getRouteHref(locale, 'glossary')}">${safe(t.menu.glossary)}</a></li>
              <li><a href="${getRouteHref(locale, 'learning')}">${locale === 'tr' ? 'Öğrenme Merkezi' : locale === 'en' ? 'Learning Center' : locale === 'el' ? 'Κέντρο Μάθησης' : locale === 'es' ? 'Centro de Aprendizaje' : 'مركز التعلم'}</a></li>
              <li><a href="${getRouteHref(locale, 'approach')}">${safe(t.menu.approach)}</a></li>
            </ul>
          </div>

          <div class="astro-footer-col astro-footer-col-legal">
            <h4>✦ ${safe(t.footer.colLegal)}</h4>
            <ul>
              <li><a href="${getRouteHref(locale, 'kvkk')}">${safe(curLegal.kvkk)}</a></li>
              <li><a href="${getRouteHref(locale, 'privacy')}">${safe(curLegal.privacy)}</a></li>
              <li><a href="${getRouteHref(locale, 'terms')}">${safe(curLegal.terms)}</a></li>
            </ul>
          </div>
        </div>

        <!-- Refined Ethical & Legal Disclaimer Box -->
        <div class="astro-footer-disclaimer-card">
          <span class="astro-footer-disclaimer-icon" aria-hidden="true">✦</span>
          <p>${safe(t.disclaimer)}</p>
        </div>

        <!-- Haute Horlogerie Bottom Bar -->
        <div class="astro-footer-bottom-bar">
          <span>${safe(t.footer.copyright)}</span>
          <div class="astro-footer-lang-badges" aria-label="Language Badges">
            ${footerLangPillsHtml}
          </div>
          <a class="astro-qct-sig" href="https://qctcommerce.com/" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">✦</span>
            <span>${safe(t.footer.qctCredit)}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
    <button type="button" id="astro-scroll-top" class="astro-scroll-top-btn" aria-label="${backToTopText}">
      <svg class="astro-scroll-top-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  </div>

  <script>
    (function() {
      // Mobile Drawer Controller
      var btn = document.querySelector('[data-drawer-open]');
      var drawer = document.getElementById('astro-mobile-drawer');
      var closes = document.querySelectorAll('[data-drawer-close]');
      if (btn && drawer) {
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
      }

      // Dynamic Motion-Only Scroll Controller:
      // Button appears ONLY while actively scrolling. Once scrolling stops and the page is stationary,
      // it automatically fades out after 1.5s so it never stays statically on screen.
      var topBtn = document.getElementById('astro-scroll-top');
      if (topBtn) {
        var scrollTimer = null;
        var isHovered = false;

        topBtn.addEventListener('mouseenter', function() {
          isHovered = true;
          clearTimeout(scrollTimer);
        });
        topBtn.addEventListener('mouseleave', function() {
          isHovered = false;
          scheduleHide();
        });
        topBtn.addEventListener('touchstart', function() {
          isHovered = true;
          clearTimeout(scrollTimer);
        }, { passive: true });
        topBtn.addEventListener('click', function() {
          isHovered = false;
          topBtn.classList.remove('is-visible');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        function scheduleHide() {
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(function() {
            if (!isHovered) {
              topBtn.classList.remove('is-visible');
            }
          }, 1500);
        }

        window.addEventListener('scroll', function() {
          var scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          if (scrolled > 250) {
            topBtn.classList.add('is-visible');
            scheduleHide();
          } else {
            clearTimeout(scrollTimer);
            topBtn.classList.remove('is-visible');
          }
        }, { passive: true });
      }
    })();
  </script>
</body>
</html>`;
};
