// Mythborn Astrology Platform — Astrology Glossary
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getRouteHref } from '../layout.js';

export const renderGlossaryView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  const terms = [
    { term: 'Yükselen Burç (ASC)', tag: 'KİMLİK & PERSPEKTİF', def: 'Doğum anında doğu ufkunda yükselen zodyak derecesidir. Bireyin dünyaya açılan kapısını, ilk izlenimini ve fiziksel enerjisini sembolize eder.' },
    { term: 'Tepe Noktası (MC / Medium Coeli)', tag: 'KARİYER & YÖN', def: 'Doğum haritasının en üst noktasıdır. Toplumsal statüyü, kariyer hedeflerini, görünür başarıları ve yaşam gayesini temsil eder.' },
    { term: 'Güneş Burcu', tag: 'ÖZ BENLİK', def: 'Kişinin temel kimliği, bilinçli iradesi, yaşam enerjisi ve içsel motivasyon merkezidir.' },
    { term: 'Ay Burcu', tag: 'İÇ DÜNYA & GÜVEN', def: 'Bilinçdışı ihtiyaçlar, duygusal tepkiler, anne figürü ve bireyin kendini güvende hissetme biçimidir.' },
    { term: '12 Evler (Astrolojik Evler)', tag: 'YAŞAM ALANLARI', def: 'Gökyüzünün 12 bölüme ayrılmasıyla oluşan yaşam sahneleridir: 1. Ev (özbenlik), 4. Ev (kökler), 7. Ev (ortaklıklar), 10. Ev (kariyer) temel köşe evlerdir.' },
    { term: 'Kavuşum (0° Açı)', tag: 'BİRLEŞME & YOĞUNLUK', def: 'İki gök cisminin aynı boylam derecesinde bir araya gelmesidir. İki enerjinin tek bir odak halinde kaynaşmasını sağlar.' },
    { term: 'Sekstil (60° Açı)', tag: 'FIRSAT & DİYALOG', def: 'Uyumlu elementler arasında kurulan, çabayla eyleme dönüşen açık fırsat kapısıdır.' },
    { term: 'Kare (90° Açı)', tag: 'GERİLİM & DÖNÜŞÜM', def: 'İki gezegen arasındaki dinamik sürtüşmedir; eyleme zorlayan, karakteri geliştiren kriz ve aşma eşiğidir.' },
    { term: 'Üçgen (120° Açı)', tag: 'DOĞAL AKIŞ & YETENEK', def: 'Aynı elementteki burçlar arasındaki akıcı ve destekleyici temastır; doğuştan gelen kolaylıkları sembolize eder.' },
    { term: 'Karşıt (180° Açı)', tag: 'FARKINDALIK & DENGE', def: 'Zodyak çarkında birbirine tam zıt konumda olan enerjilerin yüzleşmesi ve sentez arayışıdır.' },
    { term: 'Retrograd (Geri Hareket)', tag: 'İÇSELLEŞTİRME', def: 'Dünya’dan bakıldığında bir gezegenin yavaşlayarak geri gidiyor gibi görünmesidir. O gezegenin temalarında geçmişi gözden geçirme evresidir.' },
    { term: 'Transit', tag: 'GÜNCEL HAREKET', def: 'Şu an gökyüzünde hareket eden gezegenlerin, doğum haritasındaki sabit gezegen derecelerine dokunuşudur.' },
    { term: 'Sinastri', tag: 'İLİŞKİ KARŞILAŞTIRMASI', def: 'İki kişinin doğum haritalarının üst üste konarak açılarının ve ev yerleşimlerinin incelenmesidir.' },
    { term: 'Ekliptik', tag: 'ASTRONOMİK HAT', def: 'Güneş’in bir yıl boyunca gökyüzünde Dünya çevresinde izlediği varsayılan düzlemsel yörünge hattıdır.' },
    { term: 'Zodyak (Burçlar Kuşağı)', tag: '360° KOZMİK ÇARK', def: 'Ekliptik hattı boyunca uzanan ve her biri 30 derecelik 12 eşit parçaya bölünen göksel çemberdir.' },
    { term: 'Efemeris (Gök Günlüğü)', tag: 'MATEMATİKSEL TABLO', def: 'Gök cisimlerinin belirli zaman aralıklarında gökyüzündeki tam ekliptik boylam ve koordinatlarını listeleyen astronomik tablodur.' }
  ];

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ TEMEL ASTROLOJİK KAVRAMLAR REHBERİ</span>
        <h1>${t.menu.glossary} ve Terminoloji</h1>
        <p class="astro-hero-lead">${t.sections.glossarySub}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-3">
          ${terms.map(item => `
            <article class="astro-card">
              <span class="astro-card-tag">${item.tag}</span>
              <h3 style="font-size:18px">${item.term}</h3>
              <p style="font-size:13px; color:var(--muted); line-height:1.6">${item.def}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};
