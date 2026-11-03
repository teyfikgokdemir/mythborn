// Mythborn Astrology Platform — 12 Zodiac Signs Guide
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
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

    const elementLabel = sign.element.toUpperCase();

    const desc = locale === 'tr'
      ? `${signName}; ${sign.element === 'fire' ? 'Ateş' : sign.element === 'earth' ? 'Toprak' : sign.element === 'air' ? 'Hava' : 'Su'} elementi ve ${sign.quality} niteliğiyle, ${sign.ruler} yönetiminde temel yaşam motivasyonunu sembolize eder.`
      : locale === 'en'
      ? `${signName} embodies the ${sign.element} element and ${sign.quality} modality, ruled by ${sign.ruler}, representing foundational life momentum.`
      : locale === 'el'
      ? `${signName} εκπροσωπεί το στοιχείο ${sign.element} και ${sign.quality} ιδιοσυγκρασία υπό τον κυβερνήτη ${sign.ruler}.`
      : locale === 'es'
      ? `${signName} representa el elemento ${sign.element} y modalidad ${sign.quality}, bajo la regencia de ${sign.ruler}.`
      : `${signName} يمثل عنصر ${sign.element} وحركة ${sign.quality} تحت حكم كوكب ${sign.ruler}.`;

    return `
      <article id="${sign.slug}" class="zodiac-natural-card">
        <div class="zodiac-natural-header">
          <div style="display:flex; align-items:center; gap:12px">
            <img src="/assets/astrology/zodiac/${sign.slug || sign.id}.svg" alt="${signName}" style="width:40px; height:40px; border-radius:50%">
            <span class="zodiac-natural-symbol" aria-hidden="true">${sign.symbol}</span>
          </div>
          <span class="zodiac-element-tag element-${sign.element}">${elementLabel}</span>
        </div>
        <h3 class="zodiac-natural-title">${naturalTitle}</h3>
        <p class="zodiac-natural-ruler">🪐 ${sign.ruler} · ${sign.quality}</p>
        <div class="zodiac-natural-dates">${sign.dates}</div>
        <p style="font-size:13px; color:var(--muted); line-height:1.6; margin-top:10px">
          ${desc}
        </p>
        <div style="margin-top:auto; padding-top:14px; border-top:1px solid rgba(255,255,255,0.06); font-size:12px; display:flex; justify-content:space-between; align-items:center">
          <span style="color:var(--gold-bright)">✦ ${sign.dates}</span>
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
