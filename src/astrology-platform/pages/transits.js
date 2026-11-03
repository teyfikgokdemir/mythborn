// Mythborn Astrology Platform — Transits & Planetary Aspects Skeleton
import { ASTROLOGY_LOCALES } from '../i18n.js';

export const renderTransitsView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ CANLI GEZEGENSEL ETKİLEŞİMLER</span>
        <h1>${t.menu.transits} ve Açı Dinamikleri</h1>
        <p class="astro-hero-lead">Gezegenlerin güncel gökyüzündeki ekliptik boylamları ve birbirleriyle kurdukları geometrik açılar.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-3">
          <article class="astro-card">
            <span class="astro-card-tag">☌ KAVUŞUM (0°)</span>
            <h3>Yeni Enerji Tohumları</h3>
            <p>İki gezegenin aynı derecede buluştuğu en yoğun temas. Yeni bir temanın doğumu ve saf güç birleşimi.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Orb Sınırı: ±8°</div>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">△ ÜÇGEN (120°) & ⚹ SEKSTİL (60°)</span>
            <h3>Uyumlu Akış ve Fırsatlar</h3>
            <p>Aynı element veya uyumlu doğadaki burçlar arasında kurulan kolaylaştırıcı, yetenek açığa çıkaran açılar.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Orb Sınırı: ±7°</div>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">□ KARE (90°) & ☍ KARŞIT (180°)</span>
            <h3>Baskı, Eylem ve Denge Sınavı</h3>
            <p>İçsel gerilimi dışsal başarıya dönüştüren sürtünme açıları. Farkındalıkla yönetildiğinde en büyük sıçramayı sağlar.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Orb Sınırı: ±7° / ±8°</div>
          </article>
        </div>
      </div>
    </section>
  `;
};
