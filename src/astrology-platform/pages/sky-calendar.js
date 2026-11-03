// Mythborn Astrology Platform — Sky Calendar & Lunations Skeleton
import { ASTROLOGY_LOCALES } from '../i18n.js';

export const renderSkyCalendarView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ KOZMİK ZAMAN ÇİZELGESİ</span>
        <h1>${t.menu.calendar} ve Ay Evreleri</h1>
        <p class="astro-hero-lead">${t.sections.skySub}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-3">
          <article class="astro-card">
            <span class="astro-card-tag">🌑 YENİAY DÖNGÜSÜ</span>
            <h3>Yeniay ve Niyet Eşiği</h3>
            <p>Güneş ve Ay'ın aynı burçta kavuştuğu tohum ekme evresi. Yeni başlangıçlar, planlar ve hedefler için odaklanma dönemi.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Ayın Burç Geçişleri</div>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">🌕 DOLUNAY VE AYDINLANMA</span>
            <h3>Dolunay ve Hasat Zamanı</h3>
            <p>Güneş ve Ay'ın gökyüzünde 180° karşıtlık oluşturduğu aydınlanma ve görünürlük evresi. Tamamlanmalar ve yüzleşmeler.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Karşıtlık Dinamikleri</div>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">🌓 İLKDÖRDÜN & SONDÖRDÜN</span>
            <h3>Dönüm Noktaları ve Kriz Yönetimi</h3>
            <p>90° kare açılar ile tetiklenen eylem ve ayarlama süreçleri. Zihinsel detoks ve engelleri aşma ritmi.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Açı Kalıpları</div>
          </article>
        </div>
      </div>
    </section>
  `;
};
