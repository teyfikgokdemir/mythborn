// Mythborn Astrology Platform — Daily & Weekly Horoscopes
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { generateDailyHoroscopes } from '../horoscope-pipeline.js';

export const renderHoroscopesView = ({ locale = 'tr', searchParams = {} }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const selectedSignId = searchParams.sign || '';
  const now = new Date();
  const pilotData = generateDailyHoroscopes(now);
  const locData = pilotData.horoscopes[locale] || pilotData.horoscopes.tr;

  const cardsHtml = locData.signs.map(s => {
    const isSelected = selectedSignId === s.id;
    const signMeta = ZODIAC_SIGNS.find(z => z.slug === s.id) || {};
    const signTitle = locale === 'tr' ? `${s.name} Burcu Günün Teması`
      : locale === 'en' ? `${s.name} Daily Alignment`
      : locale === 'el' ? `${s.name} Ημερήσια Εστίαση`
      : locale === 'es' ? `${s.name} Enfoque Diario`
      : `التركيز اليومي لبرج ${s.name}`;

    return `
      <article id="horoscope-${s.id}" class="zodiac-natural-card" style="${isSelected ? 'border-color:var(--gold); box-shadow:0 0 20px rgba(212,175,55,0.2)' : ''}">
        <div class="zodiac-natural-header">
          <div style="display:flex; align-items:center; gap:10px">
            <span class="zodiac-natural-symbol" aria-hidden="true">${s.symbol}</span>
            <strong style="color:#fff; font-size:17px">${s.name}</strong>
          </div>
          <span class="zodiac-element-tag element-${s.element}">${s.element.toUpperCase()}</span>
        </div>
        <h3 class="zodiac-natural-title" style="font-size:18px; margin-top:8px">${signTitle}</h3>
        <p style="font-size:14px; font-weight:600; color:var(--gold-bright); margin:6px 0 10px 0">✦ ${s.headline}</p>
        <p style="font-size:13px; color:var(--muted); line-height:1.6; margin-bottom:12px">${s.theme}</p>
        <div style="padding:10px 14px; background:rgba(0,0,0,0.3); border-radius:8px; border:1px solid rgba(255,255,255,0.06); font-size:12px">
          <strong style="color:var(--gold); display:block; margin-bottom:2px">💡 ${locData.adviceLabel}:</strong>
          <span style="color:#e2e8f0">${s.advice}</span>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ GÜNCEL GÖKYÜZÜ TRANSİTLERİYLE SENTEZLENEN İÇERİK</span>
        <h1>12 Burç Günlük Gökyüzü Yorumları</h1>
        <p class="astro-hero-lead">${locData.disclaimer}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <!-- Güncel Gökyüzü Bilgi Rozeti -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; padding:14px 20px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:12px; margin-bottom:32px">
          <div>
            <span style="font-size:12px; color:var(--muted)">GÜNEŞ & AY KONUMU:</span>
            <strong style="color:#fff; margin-left:6px">☉ ${pilotData.metadata.sunPlacement} · ☽ ${pilotData.metadata.moonPhase}</strong>
          </div>
          <div style="font-size:12px; color:var(--muted)">
            Sürüm: <strong style="color:var(--gold)">${pilotData.metadata.content_version}</strong> (Etik Filtre Doğrulandı)
          </div>
        </div>

        <div class="astro-grid-3">
          ${cardsHtml}
        </div>

        <div style="margin-top:40px; padding:20px; border:1px solid var(--border); border-radius:12px; font-size:12px; color:var(--muted); text-align:center">
          <p style="margin:0">${locData.disclaimer}</p>
        </div>
      </div>
    </section>
  `;
};
