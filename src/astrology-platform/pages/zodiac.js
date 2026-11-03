// Mythborn Astrology Platform — 12 Zodiac Signs Index View Skeleton
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';

export const renderZodiacIndexView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  const cardsHtml = ZODIAC_SIGNS.map((sign) => {
    const signName = sign[locale] || sign.tr;
    return `
      <article id="${sign.slug}" class="astro-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
          <span style="font-size:28px; color:var(--gold)">${sign.symbol}</span>
          <span class="astro-card-tag" style="margin-bottom:0">${sign.element.toUpperCase()}</span>
        </div>
        <h3>${signName}</h3>
        <p>Yönetici Gezegen: <strong>${sign.ruler}</strong></p>
        <p style="font-size:13px; color:var(--muted)">Doğum haritasındaki ${signName} arketipi; temel motivasyonları, ego ifadesini ve liderlik dinamiklerini sembolize eder.</p>
        <div style="margin-top:auto; padding-top:14px; border-top:1px solid rgba(255,255,255,0.06); font-size:12px; color:var(--gold)">
          <span>✦ Karakteristik & Arketip Rehberi</span>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ 12 BURÇ & ARKETİPİK REHBER</span>
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
