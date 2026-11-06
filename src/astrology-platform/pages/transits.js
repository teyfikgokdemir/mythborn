// Mythborn Astrology Platform — Transits & Live Sky
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { calculateSkySnapshot, ENGINE_METADATA } from '../data-core.js';

export const renderTransitsView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const now = new Date();
  const snapshot = calculateSkySnapshot(now, locale);

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ CANLI GÖKYÜZÜ TRANSİTLERİ & AÇILAR</span>
        <h1>${t.menu.transits} ve Açı Kalıpları</h1>
        <p class="astro-hero-lead">Şu an gökyüzündeki gezegenlerin anlık ekliptik boylamları ve birbirleriyle kurdukları geometrik açılar.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <!-- Zaman ve Meta Barı -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; padding:16px 20px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:12px; margin-bottom:28px">
          <div>
            <span style="font-size:12px; color:var(--muted)">HESAPLANAN ZAMAN:</span>
            <strong style="color:#fff; margin-left:6px">${snapshot.metadata.time_istanbul_24h} TSI (${snapshot.metadata.time_utc_24h} UTC)</strong>
          </div>
          <div>
            <span style="font-size:12px; color:var(--muted)">BASKIN ELEMENT:</span>
            <strong style="color:var(--gold-bright); margin-left:6px; text-transform:uppercase">${snapshot.dominantElement}</strong>
          </div>
        </div>

        <!-- 10 Gezegen Canlı Tablosu -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:36px">
          ${snapshot.planets.map(p => `
            <div style="padding:16px 20px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; display:flex; justify-content:space-between; align-items:center">
              <div style="display:flex; align-items:center; gap:12px">
                <span style="font-size:24px; color:var(--gold)">${p.symbol}</span>
                <div>
                  <h4 style="margin:0; font-size:15px; color:#fff">${p.name}</h4>
                  <small style="color:var(--muted)">${p.element?.toUpperCase()} · ${p.ruler}</small>
                </div>
              </div>
              <div style="text-align:right">
                <strong style="color:var(--gold-bright); font-size:14px">${p.sign}</strong>
                <div style="font-size:12px; color:var(--muted)">${p.formatted}</div>
                ${p.isRetrograde ? '<span style="color:#f87171; font-size:10px; border:1px solid #f87171; padding:1px 4px; border-radius:4px">Retro</span>' : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Canlı Açı Kalıpları -->
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ GÜNCEL ETKİN AÇILAR</span>
          <h2>Gezegenler Arası Geometrik İlişkiler</h2>
          <p>Kavuşum, sekstil, kare, üçgen ve karşıt açıların orbları.</p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px">
          ${snapshot.aspects.map(a => `
            <div style="padding:14px 18px; background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:10px; display:flex; justify-content:space-between; align-items:center">
              <div>
                <strong style="color:#fff">${a.from}</strong>
                <span style="color:var(--gold); margin:0 4px">${a.type}</span>
                <strong style="color:#fff">${a.to}</strong>
              </div>
              <div style="text-align:right">
                <span style="font-size:12px; color:${a.nature === 'harmonious' ? '#4ade80' : a.nature === 'challenging' ? '#fb923c' : 'var(--gold)'}">${a.actualAngle}°</span>
                <small style="color:var(--muted); display:block; font-size:10px">Orb: ${a.orb}°</small>
              </div>
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
