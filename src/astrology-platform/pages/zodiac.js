// Mythborn Astrology Platform — 12 Zodiac Signs Guide
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS, ZODIAC_LOCALIZED } from '../i18n.js';
import { getRouteHref } from '../layout.js';

export const renderZodiacIndexView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const cardsHtml = ZODIAC_SIGNS.map((sign) => {
    const signName = sign[locale] || sign.tr;

    // Natural title generation (NO "Koç 12 Burç" repeats!)
    const naturalTitle = locale === 'tr' ? `${signName} Burcu Rehberi`
      : locale === 'en' ? `${signName} Archetype & Guide`
      : locale === 'el' ? `Οδηγός: ${signName}`
      : locale === 'es' ? `Guía del Signo ${signName}`
      : `دليل برج ${signName}`;

    const elementLabel = (ZODIAC_LOCALIZED.elements[sign.element] && ZODIAC_LOCALIZED.elements[sign.element][locale]) || sign.element;
    const qualityLabel = (ZODIAC_LOCALIZED.qualities[sign.quality] && ZODIAC_LOCALIZED.qualities[sign.quality][locale]) || sign.quality;
    const rulerLabel = (ZODIAC_LOCALIZED.rulers[sign.ruler] && ZODIAC_LOCALIZED.rulers[sign.ruler][locale]) || sign.ruler;
    const datesLabel = (ZODIAC_LOCALIZED.dates[sign.slug] && ZODIAC_LOCALIZED.dates[sign.slug][locale]) || sign.dates;

    const desc = locale === 'tr'
      ? `${signName}; ${elementLabel} elementi ve ${qualityLabel} niteliğiyle, ${rulerLabel} yönetiminde temel yaşam motivasyonunu sembolize eder.`
      : locale === 'en'
      ? `${signName} embodies the ${elementLabel} element and ${qualityLabel} modality, ruled by ${rulerLabel}, representing foundational life momentum.`
      : locale === 'el'
      ? `${signName} εκπροσωπεί το στοιχείο ${elementLabel} και ${qualityLabel} ιδιοσυγκρασία υπό τον κυβερνήτη ${rulerLabel}.`
      : locale === 'es'
      ? `${signName} representa el elemento ${elementLabel} y modalidad ${qualityLabel}, bajo la regencia de ${rulerLabel}.`
      : `${signName} يمثل عنصر ${elementLabel} وحركة ${qualityLabel} تحت حكم كوكب ${rulerLabel}.`;

    return `
      <article id="${sign.slug}" class="zodiac-natural-card">
        <div class="zodiac-natural-header">
          <div style="display:flex; align-items:center; gap:12px">
            <div class="zodiac-icon-badge">
              <img src="/assets/astrology/zodiac/${sign.slug}.svg" alt="${signName}" onerror="this.onerror=null;this.src='/assets/astrology/zodiac/${sign.icon}.svg'" loading="lazy">
            </div>
            <span class="zodiac-natural-symbol" aria-hidden="true">${sign.symbol}</span>
          </div>
          <span class="zodiac-element-tag element-${sign.element}">${elementLabel.toUpperCase()}</span>
        </div>
        <h3 class="zodiac-natural-title">${naturalTitle}</h3>
        <p class="zodiac-natural-ruler">🪐 ${rulerLabel} · ${qualityLabel}</p>
        <div class="zodiac-natural-dates">${datesLabel}</div>
        <p style="font-size:13px; color:var(--muted); line-height:1.6; margin-top:10px">
          ${desc}
        </p>
        <div style="margin-top:auto; padding-top:14px; border-top:1px solid rgba(255,255,255,0.06); font-size:12px; display:flex; justify-content:space-between; align-items:center">
          <span style="color:var(--gold-bright)">✦ ${datesLabel}</span>
          <a href="${getRouteHref(locale, 'natal')}" style="color:var(--gold); text-decoration:none">
            <span>${t.menu.natal}</span> <span aria-hidden="true">${arrow}</span>
          </a>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ 12 BURÇ ARKETİPİ & KOZMİK MİZİÇ</span>
        <h1>${t.sections.zodiacTitle}</h1>
        <p class="astro-hero-lead">${t.sections.zodiacSub}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-3">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
};
