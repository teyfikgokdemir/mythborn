// Mythborn Astrology Platform — Homepage View Skeleton
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
import { getRouteHref } from '../layout.js';

export const renderHomeView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const zodiacCardsHtml = ZODIAC_SIGNS.map((sign) => {
    const signName = sign[locale] || sign.tr;
    return `
      <article class="astro-card">
        <span class="astro-card-tag">${sign.symbol} ${sign.element.toUpperCase()}</span>
        <h3>${signName}</h3>
        <p>${t.sections.zodiacSub}</p>
        <a class="astro-card-link" href="${getRouteHref(locale, 'zodiac')}#${sign.slug}">
          <span>${signName} ${t.menu.zodiac}</span>
          <span aria-hidden="true">${arrow}</span>
        </a>
      </article>
    `;
  }).join('');

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ ${t.hero.eyebrow}</span>
        <h1>${t.hero.title}</h1>
        <p class="astro-hero-lead">${t.hero.lead}</p>
        <div class="astro-hero-actions">
          <a class="astro-btn-primary" href="${getRouteHref(locale, 'natal')}">
            <span>${t.hero.ctaPrimary}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
          <a class="astro-btn-ghost" href="${getRouteHref(locale, 'calendar')}">
            <span>${t.hero.ctaSecondary}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ZODIAC & ARCHETYPES</span>
          <h2>${t.sections.zodiacTitle}</h2>
          <p>${t.sections.zodiacSub}</p>
        </div>
        <div class="astro-grid-4">
          ${zodiacCardsHtml}
        </div>
      </div>
    </section>

    <section class="astro-section" style="background: rgba(255,255,255,0.015); border-top:1px solid var(--border); border-bottom:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ANALYSIS TOOLS</span>
          <h2>${t.sections.toolsTitle}</h2>
          <p>${t.sections.toolsSub}</p>
        </div>
        <div class="astro-grid-3">
          <article class="astro-card">
            <span class="astro-card-tag">☉ NATAL ENGINE</span>
            <h3>${t.menu.natal}</h3>
            <p>Doğum anınızdaki gezegen konumları, yükselen (ASC), tepe noktası (MC) ve ev yerleşimlerinin matematiksel analizi.</p>
            <a class="astro-card-link" href="${getRouteHref(locale, 'natal')}">
              <span>${t.menu.natal} Başlat</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">☽ LUNATION & TRANSITS</span>
            <h3>${t.menu.calendar}</h3>
            <p>Yeniay, dolunay, tutulmalar ve Ay'ın burç geçişlerinin günlük ritim üzerindeki etkileri.</p>
            <a class="astro-card-link" href="${getRouteHref(locale, 'calendar')}">
              <span>${t.menu.calendar} İncele</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">☿ DYNAMICS & CYCLES</span>
            <h3>${t.menu.retros} & ${t.menu.transits}</h3>
            <p>Merkür ve dış gezegen retroları, gölge dönemleri ve kolektif açı kalıpları.</p>
            <a class="astro-card-link" href="${getRouteHref(locale, 'retros')}">
              <span>${t.menu.retros} Takvimi</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  `;
};
