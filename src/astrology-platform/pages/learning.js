// Mythborn Astrology Platform — Astrology Learning Center
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getRouteHref } from '../layout.js';

export const renderLearningCenterView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const localizedContent = {
    tr: {
      eyebrow: '✦ KOZMİK OKURYAZARLIK & REHBERLİK',
      title: 'Astroloji Öğrenme Merkezi',
      lead: 'Doğum haritanızı ve gökyüzü hareketlerini bilinçli, bağımsız ve derinlemesine kavramanız için hazırlanan arketipsel analiz rehberi.',
      modules: [
        {
          glyph: '☉',
          title: 'Kozmik Büyük Üçlü: Güneş, Ay ve Yükselen',
          desc: 'Kişiliğin irade, duygusal hafıza ve dış dünya vizyonunu doğum anındaki astronomik koordinatlarla çözümleyin.',
          linkText: 'Doğum Haritasını Hesapla',
          route: 'natal'
        },
        {
          glyph: '🜂',
          title: 'Dört Element ve Üç Nitelik Mimarisi',
          desc: 'Ateş, toprak, hava ve su dengesiyle enerjinizi nasıl başlattığınızı, koruduğunuzu ve dönüştürdüğünüzü keşfedin.',
          linkText: '12 Burç Külliyatını İncele',
          route: 'zodiac'
        },
        {
          glyph: '🏛',
          title: '12 Ev ve Yaşam Alanları Sahnesi',
          desc: 'Kimlikten kariyere, köklerden ilişkilere kadar gökyüzünün 12 sektöründeki kişisel deneyim alanlarınızı haritalandırın.',
          linkText: 'Astroloji Sözlüğünü Aç',
          route: 'glossary'
        },
        {
          glyph: '☌',
          title: 'Gezegen Açıları: Geometrik Diyalog',
          desc: 'Kavuşum, sekstil, kare, üçgen ve karşıt açıların getirdiği doğal yetenekleri ve dinamik gelişim sürtüşmelerini öğrenin.',
          linkText: 'Canlı Transitleri İncele',
          route: 'transits'
        },
        {
          glyph: '☿',
          title: 'Gezegen Retroları ve İçsel Dönüşüm',
          desc: 'Retroların bir felaket değil; yavaşlama, geçmişi derleme ve içsel muhakemeyi onarma evresi olduğunu kavrayın.',
          linkText: 'Retro Takvimini Gör',
          route: 'retros'
        }
      ]
    },
    en: {
      eyebrow: '✦ CELESTIAL LITERACY & GUIDANCE',
      title: 'Astrology Learning Center',
      lead: 'An archetypal guide designed to help you interpret your personal birth chart and cosmic cycles with autonomy and clarity.',
      modules: [
        {
          glyph: '☉',
          title: 'The Celestial Big Three: Sun, Moon & Ascendant',
          desc: 'Decode the core layers of conscious will, emotional instinct, and outer persona through your birth coordinates.',
          linkText: 'Calculate Birth Chart',
          route: 'natal'
        },
        {
          glyph: '🜂',
          title: 'The Four Elements & Triad Modalities',
          desc: 'Discover how fire, earth, air, and water dynamics shape your innate drive, stability, and emotional adaptability.',
          linkText: 'Explore 12 Archetypes',
          route: 'zodiac'
        },
        {
          glyph: '🏛',
          title: 'The 12 Astrological Houses',
          desc: 'Map your life stages and experiences from identity to vocation across the 12 cosmic sectors.',
          linkText: 'Open Celestial Glossary',
          route: 'glossary'
        },
        {
          glyph: '☌',
          title: 'Planetary Aspects & Geometric Dialogue',
          desc: 'Understand how conjunctions, trines, and squares create creative talents and dynamic growth tensions.',
          linkText: 'View Real-Time Transits',
          route: 'transits'
        },
        {
          glyph: '☿',
          title: 'Retrograde Cycles & Mindful Reflection',
          desc: 'Recognize planetary retrogrades as intentional deceleration, inner review, and recalibration rather than misfortune.',
          linkText: 'Track Retrograde Radar',
          route: 'retros'
        }
      ]
    },
    el: {
      eyebrow: '✦ ΚΟΣΜΙΚΗ ΠΑΙΔΕΙΑ & ΚΑΘΟΔΗΓΗΣΗ',
      title: 'Κέντρο Εκμάθησης Αστρολογίας',
      lead: 'Ένας αρχετυπικός οδηγός για να ερμηνεύετε τον γενέθλιο χάρτη και τις ουράνιες κινήσεις με συνείδηση και αυτονομία.',
      modules: [
        {
          glyph: '☉',
          title: 'Η Κοσμική Μεγάλη Τριάδα: Ήλιος, Σελήνη & Ωροσκόπος',
          desc: 'Αποκωδικοποιήστε τη συνειδητή βούληση, το συναίσθημα και την εξωτερική παρουσία από τις γενέθλιες συντεταγμένες σας.',
          linkText: 'Υπολογισμός Χάρτη',
          route: 'natal'
        },
        {
          glyph: '🜂',
          title: 'Τα Τέσσερα Στοιχεία & οι Τρεις Ιδιότητες',
          desc: 'Ανακαλύψτε πώς η φωτιά, η γη, ο αέρας και το νερό διαμορφώνουν την ενέργεια και την προσαρμοστικότητά σας.',
          linkText: 'Εξερεύνηση 12 Ζωδίων',
          route: 'zodiac'
        },
        {
          glyph: '🏛',
          title: 'Οι 12 Αστρολογικοί Οίκοι',
          desc: 'Χαρτογραφήστε τα πεδία της ζωής από την προσωπική ταυτότητα έως την καριέρα στους 12 κοσμικούς τομείς.',
          linkText: 'Λεξικό Αστρολογίας',
          route: 'glossary'
        },
        {
          glyph: '☌',
          title: 'Πλανητικές Όψεις & Γεωμετρικός Διάλογος',
          desc: 'Κατανοήστε πώς οι σύνοδοι, τα τρίγωνα και τα τετράγωνα δημιουργούν ταλέντα και δημιουργικές εντάσεις.',
          linkText: 'Ζωντανές Διελεύσεις',
          route: 'transits'
        },
        {
          glyph: '☿',
          title: 'Ανάδρομοι Πλανήτες & Εσωτερική Επανεξέταση',
          desc: 'Αντιληφθείτε τις ανάδρομες πορείες ως συνειδητή επιβράδυνση και εσωτερική αναθεώρηση.',
          linkText: 'Ημερολόγιο Αναδρομών',
          route: 'retros'
        }
      ]
    },
    es: {
      eyebrow: '✦ ALFABETIZACIÓN CELESTE Y GUÍA',
      title: 'Centro de Aprendizaje Astrológico',
      lead: 'Una guía arquetípica diseñada para interpretar tu carta natal y los ciclos planetarios con total autonomía y lucidez.',
      modules: [
        {
          glyph: '☉',
          title: 'La Gran Tríada Celeste: Sol, Luna y Ascendente',
          desc: 'Descifra la voluntad consciente, el instinto emocional y la presencia exterior según tus coordenadas natales.',
          linkText: 'Calcular Carta Natal',
          route: 'natal'
        },
        {
          glyph: '🜂',
          title: 'Los Cuatro Elementos y las Tres Cualidades',
          desc: 'Descubre cómo el fuego, la tierra, el aire y el agua moldean tu impulso, solidez y adaptabilidad consciente.',
          linkText: 'Explorar 12 Arquetipos',
          route: 'zodiac'
        },
        {
          glyph: '🏛',
          title: 'Las 12 Casas Astrológicas',
          desc: 'Mapea las áreas fundamentales de tu vida desde la identidad hasta la vocación en los 12 sectores cósmicos.',
          linkText: 'Glosario Astrológico',
          route: 'glossary'
        },
        {
          glyph: '☌',
          title: 'Aspectos Planetarios y Geometría Celeste',
          desc: 'Comprende cómo las conjunciones, trígonos y cuadraturas generan dones creativos y tensiones evolutivas.',
          linkText: 'Ver Tránsitos en Vivo',
          route: 'transits'
        },
        {
          glyph: '☿',
          title: 'Retrógrados Planetarios y Reflexión Interior',
          desc: 'Reconoce los tránsitos retrógrados como fases de pausa consciente, revisión y maduración interna.',
          linkText: 'Seguir Retrógrados',
          route: 'retros'
        }
      ]
    },
    ar: {
      eyebrow: '✦ المعرفة الكونية والإرشاد الرمزي',
      title: 'مركز تعلم الفلك والرموز',
      lead: 'دليل منهجي متعمق يساعدك على فهم خريطة ميلادك وحركة الكواكب بوعي واستقلالية تامة.',
      modules: [
        {
          glyph: '☉',
          title: 'الثلاثية الفلكية الكبرى: الشمس، القمر والطالع',
          desc: 'فك رموز الإرادة الواعية، البعد النفسي والواجهة الخارجية وفق إحداثيات ولادتك الفلكية بدقة.',
          linkText: 'احسب خريطة الميلاد',
          route: 'natal'
        },
        {
          glyph: '🜂',
          title: 'العناصر الأربعة والطبائع الثلاث',
          desc: 'اكتشف كيف توازن قوى النار والتراب والهواء والماء طاقتك وقدرتك على التكيف والتجدد المستمر.',
          linkText: 'تصفح الأبراج الـ12',
          route: 'zodiac'
        },
        {
          glyph: '🏛',
          title: 'البيوت الفلكية الاثنا عشر',
          desc: 'ارسم خريطة مجالات حياتك من الهوية الشخصية إلى المسار المهني عبر القطاعات الكونية الـ12.',
          linkText: 'افتح القاموس الفلكي',
          route: 'glossary'
        },
        {
          glyph: '☌',
          title: 'الاتصالات الفلكية والحوار الهندسي',
          desc: 'افهم كيف تصنع اتصالات الاقتران والتثليث والتربيع مواهب فريدة وتحديات صقل مستمرة للذات.',
          linkText: 'تابع حركة العبور الفلكي',
          route: 'transits'
        },
        {
          glyph: '☿',
          title: 'التراجع الكوكبي والمراجعة الذاتية',
          desc: 'أدرك أن التراجع ليس نذير شؤم، بل محطة تأمل وتهدئة واعية لإعادة ترتيب الأولويات الداخلية.',
          linkText: 'تتبع تقويم التراجع',
          route: 'retros'
        }
      ]
    }
  };

  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';
  const c = localizedContent[loc] || localizedContent.tr;

  return `
    <section class="astro-hero" style="padding-bottom:32px">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">${c.eyebrow}</span>
        <h1 style="font-size:clamp(30px, 3.8vw, 48px); margin:12px 0 16px 0">${c.title}</h1>
        <p class="astro-hero-lead" style="max-width:740px; margin:0 auto">${c.lead}</p>
      </div>
    </section>

    <section class="astro-section" style="padding-top:10px">
      <div class="astro-container">
        <div class="learning-cards-stack">
          ${c.modules.map(m => `
            <article class="learning-elite-card">
              <div class="learning-elite-badge" aria-hidden="true">
                <span>${m.glyph}</span>
              </div>
              <div class="learning-elite-body">
                <h3 class="learning-elite-title">${m.title}</h3>
                <p class="learning-elite-desc">${m.desc}</p>
              </div>
              <div class="learning-elite-action">
                <a class="astro-btn-ghost learning-elite-btn" href="${getRouteHref(locale, m.route)}">
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
