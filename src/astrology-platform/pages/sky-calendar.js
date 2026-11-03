// Mythborn Astrology Platform — Sky Calendar & Lunations
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getMoonPhaseData, ENGINE_METADATA } from '../data-core.js';

export const renderSkyCalendarView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const now = new Date();
  const moon = getMoonPhaseData(now, locale);

  const lunations2026 = [
    { title: locale === 'tr' ? 'Akrep Yeniayı' : 'Scorpio New Moon', time: '09 Kasım 2026 · 18:45 TSI (15:45 UTC)', deg: '17° Akrep', desc: 'Dönüşüm, derin sezgiler ve içsel niyet eşiği.' },
    { title: locale === 'tr' ? 'Kova İlk Dördün' : 'Aquarius First Quarter', time: '17 Kasım 2026 · 06:20 TSI (03:20 UTC)', deg: '25° Kova', desc: 'Bireysel vizyon, eyleme geçiş ve dirençleri kırma.' },
    { title: locale === 'tr' ? 'Boğa Dolunayı' : 'Taurus Full Moon', time: '24 Kasım 2026 · 21:14 TSI (18:14 UTC)', deg: '02° Boğa', desc: 'Maddi güvence, somut hasat ve netleşme.' },
    { title: locale === 'tr' ? 'Başak Son Dördün' : 'Virgo Last Quarter', time: '02 Aralık 2026 · 14:10 TSI (11:10 UTC)', deg: '10° Başak', desc: 'Sadeleşme, fazlalıklardan arınma ve düzenleme.' }
  ];

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ ASTRONOMİ MOTORUYLA HESAPLANAN AY DÖNGÜLERİ</span>
        <h1>${t.menu.calendar} ve Ay Evreleri</h1>
        <p class="astro-hero-lead">${t.sections.skySub}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <!-- Güncel Canlı Ay Durumu -->
        <div style="padding:28px; background:linear-gradient(135deg, rgba(212,175,55,0.06), rgba(0,0,0,0.5)); border:1px solid var(--gold); border-radius:18px; margin-bottom:36px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px">
          <div>
            <span class="astro-card-tag">✦ LIVE MOON PHASE</span>
            <h2 style="font-family:var(--font-serif); font-size:28px; color:#fff; margin:6px 0">
              ${moon.name}
            </h2>
            <p style="color:var(--muted); font-size:14px; margin:0">
              Açısal Konum: <strong>${moon.degrees}°</strong> · Aydınlanma Oranı: <strong style="color:var(--gold-bright)">%${moon.illuminationPct}</strong>
            </p>
          </div>
          <div style="display:flex; gap:16px; flex-wrap:wrap">
            <div style="padding:12px 18px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:10px; font-size:13px">
              <span style="color:var(--muted); display:block; font-size:11px">YAKLAŞAN YENİAY</span>
              <strong style="color:#fff">${moon.nextNewMoon24h}</strong>
            </div>
            <div style="padding:12px 18px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:10px; font-size:13px">
              <span style="color:var(--muted); display:block; font-size:11px">YAKLAŞAN DOLUNAY</span>
              <strong style="color:#fff">${moon.nextFullMoon24h}</strong>
            </div>
          </div>
        </div>

        <div class="astro-section-head">
          <span class="astro-card-tag">✦ 2026 KASIM & ARALIK KORİDORU</span>
          <h2>24 Saat Zaman Standartlı Lunasyon Takvimi</h2>
          <p>Tüm zaman gösterimleri Europe/Istanbul ve UTC olarak 24 saatlik formatta üretilmektedir.</p>
        </div>

        <div class="sky-snapshot-grid">
          ${lunations2026.map(l => `
            <div class="sky-snapshot-card">
              <div class="sky-snapshot-phase" aria-hidden="true">✦</div>
              <h4>${l.title}</h4>
              <time>${l.time}</time>
              <small>${l.deg} · ${l.desc}</small>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:36px; padding:20px; border:1px solid var(--border); border-radius:12px; font-size:12px; color:var(--muted); text-align:center">
          <p style="margin:0">${ENGINE_METADATA.precision} · ${ENGINE_METADATA.disclaimer}</p>
        </div>
      </div>
    </section>
  `;
};
