// Mythborn Astrology Platform — Retrogrades Calendar
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { calculateSkySnapshot, ENGINE_METADATA } from '../data-core.js';

export const renderRetrogradesView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const snapshot = calculateSkySnapshot(new Date(), locale);

  const retroSchedule2026 = [
    { planet: 'Merkür', symbol: '☿', dates: '26 Şubat – 20 Mart 2026', sign: 'Balık → Kova', theme: 'İletişim, teknoloji ve zihinsel odak gözden geçirmesi.' },
    { planet: 'Merkür', symbol: '☿', dates: '29 Haziran – 23 Temmuz 2026', sign: 'Yengeç', theme: 'Duygusal hafıza, aile içi diyaloglar ve geçmiş bağlar.' },
    { planet: 'Merkür', symbol: '☿', dates: '24 Ekim – 13 Kasım 2026', sign: 'Akrep → Terazi', theme: 'Gizli gerçekler, finansal anlaşmalar ve ilişkilerde netlik.' },
    { planet: 'Venüs', symbol: '♀', dates: '02 Mart – 12 Nisan 2026', sign: 'Koç → Balık', theme: 'Değer yargıları, öz-değer ve ilişkisel sınırların yeniden inşası.' },
    { planet: 'Mars', symbol: '♂', dates: '06 Aralık 2024 – 24 Şubat 2026', sign: 'Aslan → Yengeç', theme: 'İçsel irade, öfke kontrolü ve enerji yönetimi.' },
    { planet: 'Jüpiter', symbol: '♃', dates: '11 Kasım 2026 – 11 Mart 2027', sign: 'Aslan', theme: 'İnançlar, büyüme hedefleri ve aşırı iyimserliği dengeleme.' },
    { planet: 'Satürn', symbol: '♄', dates: '13 Temmuz – 27 Kasım 2026', sign: 'Koç', theme: 'Sorumluluklar, uzun vadeli yapılar ve disiplin testi.' }
  ];

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ GÖRÜNÜR GERİ HAREKETLER & İÇE DÖNÜŞ DÖNEMLERİ</span>
        <h1>${t.menu.retros} ve Gölge Dönemleri</h1>
        <p class="astro-hero-lead">Gezegenlerin Dünya'dan gözlemlenen hız yavaşlaması ve sembolik içsel gözden geçirme süreçleri.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <!-- Canlı Aktif Retrolar -->
        <div style="padding:24px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:16px; margin-bottom:36px">
          <span class="astro-card-tag" style="color:#f87171; border-color:#f87171">✦ ŞU AN AKTİF RETROLAR (CANLI HESAPLAMA)</span>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-top:16px">
            ${snapshot.activeRetrogrades.length > 0 ? snapshot.activeRetrogrades.map(r => `
              <div style="padding:16px; background:rgba(0,0,0,0.4); border-radius:12px; border:1px solid rgba(248,113,113,0.3)">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px">
                  <span style="font-size:24px; color:var(--gold)">${r.symbol}</span>
                  <span style="font-size:11px; color:#f87171; border:1px solid #f87171; padding:2px 6px; border-radius:4px">Retrograd</span>
                </div>
                <h4 style="margin:0 0 4px 0; color:#fff">${r.name}</h4>
                <p style="font-size:12px; color:var(--muted); margin:0">${r.sign} burcunda geri harekette</p>
                <small style="font-size:11px; color:var(--gold-bright); display:block; margin-top:6px">Günlük Hız: ${r.dailySpeed}°/gün</small>
              </div>
            `).join('') : '<p style="color:var(--muted); font-size:14px">Şu anda geri harekette olan gezegen bulunmamaktadır.</p>'}
          </div>
        </div>

        <div class="astro-section-head">
          <span class="astro-card-tag">✦ 2026 GEZEGEN RETROLARI TAKVİMİ</span>
          <h2>Dönemler ve Anlamları</h2>
          <p>Korku üretmeyen, farkındalık ve hazırlık odaklı retrograd rehberi.</p>
        </div>

        <div class="astro-grid-3">
          ${retroSchedule2026.map(r => `
            <article class="astro-card">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
                <span style="font-size:28px; color:var(--gold)">${r.symbol}</span>
                <span class="astro-card-tag" style="margin-bottom:0">${r.sign}</span>
              </div>
              <h3>${r.planet} Retrosu</h3>
              <p style="color:var(--gold-bright); font-size:13px; font-weight:600">${r.dates}</p>
              <p style="font-size:13px; color:var(--muted)">${r.theme}</p>
            </article>
          `).join('')}
        </div>

        <div style="margin-top:36px; padding:20px; border:1px solid var(--border); border-radius:12px; font-size:12px; color:var(--muted); text-align:center">
          <p style="margin:0">${ENGINE_METADATA.precision} · ${ENGINE_METADATA.disclaimer}</p>
        </div>
      </div>
    </section>
  `;
};
