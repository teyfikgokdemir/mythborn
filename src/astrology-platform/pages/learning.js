// Mythborn Astrology Platform — Astrology Learning Center
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getRouteHref } from '../layout.js';

export const renderLearningCenterView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const modules = [
    {
      step: 'MODÜL 01',
      title: 'Kozmik Büyük Üçlü: Güneş, Ay ve Yükselen',
      desc: 'Kişiliğinizin üç temel katmanı: Güneş bilinçli irade ve yaşam enerjisini, Ay duygusal ihtiyaçları ve bilinçdışı tepkileri, Yükselen ise dünyaya sunduğunuz ilk perspektifi ve dış ufkunu temsil eder.',
      linkText: 'Doğum Haritanı Hesapla',
      route: 'natal'
    },
    {
      step: 'MODÜL 02',
      title: 'Dört Element ve Üç Nitelik Mimarisi',
      desc: 'Ateş (coşku), Toprak (somutluk), Hava (iletişim) ve Su (sezgi) dengesi. Öncü, Sabit ve Değişken niteliklerle enerjinin nasıl başlatıldığı, korunduğu veya dönüştürüldüğünü öğrenin.',
      linkText: '12 Burç Rehberini İncele',
      route: 'zodiac'
    },
    {
      step: 'MODÜL 03',
      title: '12 Ev ve Yaşam Alanları Sahnesi',
      desc: '1. Ev kimlikten 10. Ev kariyere, 4. Ev köklerden 7. Ev ilişkilere kadar gökyüzünün 12 sektörü yaşamınızdaki sahneleri tanımlar.',
      linkText: 'Ev Kavramlarını Keşfet',
      route: 'glossary'
    },
    {
      step: 'MODÜL 04',
      title: 'Gezegen Açıları: Geometrik Diyalog',
      desc: 'Kavuşum (0°), Sekstil (60°), Kare (90°), Üçgen (120°) ve Karşıt (180°) açılar; gezegenlerin birbirini nasıl desteklediğini veya hangi dinamik sürtüşmelerle eyleme zorladığını gösterir.',
      linkText: 'Canlı Transitleri Gör',
      route: 'transits'
    },
    {
      step: 'MODÜL 05',
      title: 'Retrograd Dönemleri ve İçselleşme',
      desc: 'Retro bir felaket değil; yavaşlama, geçmişi derleme ve içsel revizyon evresidir. Gölge dönemleri ve dikkat edilmesi gereken eşikleri kavrayın.',
      linkText: 'Retro Takvimini İncele',
      route: 'retros'
    }
  ];

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ KOZMİK OKURYAZARLIK & REHBERLİK</span>
        <h1>Astroloji Öğrenme Merkezi</h1>
        <p class="astro-hero-lead">Kendi doğum haritanızı ve gökyüzü hareketlerini bilinçli, bağımsız ve derinlemesine yorumlamanızı sağlayan rehberlik modülleri.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div style="display:flex; flex-direction:column; gap:20px; max-width:880px; margin:0 auto">
          ${modules.map(m => `
            <article class="astro-card" style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px">
              <div style="flex:1; min-width:280px">
                <span class="astro-card-tag">${m.step}</span>
                <h3 style="font-size:20px; margin:8px 0 10px 0">${m.title}</h3>
                <p style="font-size:14px; color:var(--muted); line-height:1.7; margin:0">${m.desc}</p>
              </div>
              <div style="align-self:center">
                <a class="astro-btn-ghost" href="${getRouteHref(locale, m.route)}" style="font-size:13px; padding:10px 18px">
                  <span>${m.linkText}</span>
                  <span aria-hidden="true">${arrow}</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};
