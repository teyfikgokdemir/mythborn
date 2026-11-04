// Mythborn Astrology Platform — Approach, Ethics & Boundaries
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { ENGINE_METADATA } from '../data-core.js';

export const renderApproachView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  const content = {
    tr: {
      eyebrow: '✦ BİLİMSEL HESAPLAMA & SEMBOLİK BİLİNÇ',
      title: 'Yöntem, Etik İlkeler ve Sınırlarımız',
      lead: 'Mythborn; gökyüzünün matematiksel kesinliğini bireyin özgür iradesi ve kişisel farkındalığıyla birleştiren şeffaf bir platformdur.',
      sections: [
        {
          glyph: '🔭',
          tag: 'HESAPLAMA METODOLOJİSİ',
          h: 'Astronomi ile Yorumun Açık Ayrımı',
          p: 'Gezegen boylamları, hızları ve ev açıları açık kaynaklı astronomy-engine (MIT) çekirdeği ile hesaplanır. Matematiksel koordinatlar objektiftir; astrolojik yorumlar ise binlerce yıllık kültürel arketiplerin sembolik bir okumasıdır. Bu iki alan birbirine karıştırılmaz.',
          badge: 'astronomy-engine v2.1.19 (MIT)'
        },
        {
          glyph: '⚖',
          tag: 'ETİK SINIRLAR',
          h: 'Determinizm ve Korku Dilinin Reddi',
          p: 'Gökyüzü bir ceza veya kaçınılmaz kader tablosu değildir. Platformumuzda felaket tellallığı, mutlak kehanetler, manipülatif satış taktikleri, finansal yönlendirmeler veya tıbbi teşhis/tavsiyeler kesinlikle yer almaz.',
          badge: 'Sıfır Korku · Özgür İrade'
        },
        {
          glyph: '🔒',
          tag: 'GİZLİLİK VE VERİ HAKLARI',
          h: 'Kişisel Doğum Bilgilerinin Korunması',
          p: 'Doğum tarihi, saati ve doğum yeriniz ticari bir profil çıkarma veya üçüncü taraflarla paylaşma amacıyla kullanılmaz. Doğum haritası sonuçlarınız arama motorlarına indexlenebilir açık linkler olarak yayınlanmaz.',
          badge: 'Sıfır İzleme · %100 Mahremiyet'
        },
        {
          glyph: '✧',
          tag: 'ÜCRETSİZ & AÇIK ERİŞİM',
          h: 'Ticari Tuzaksız Temel Deneyim',
          p: 'Temel doğum haritası, güncel gökyüzü transitleri, zodyak rehberleri ve astroloji sözlüğü gizli ödeme duvarları olmaksızın herkese açıktır. Bilgiye erişim etik bir haktır.',
          badge: 'Açık Kaynak · Şeffaf Erişim'
        }
      ]
    },
    en: {
      eyebrow: '✦ ASTRONOMICAL INTEGRITY & ETHICAL REFLECTION',
      title: 'Methodology, Ethics & Boundaries',
      lead: 'Mythborn unites the mathematical precision of the cosmos with human agency, psychological depth, and mindful reflection.',
      sections: [
        {
          glyph: '🔭',
          tag: 'CALCULATION METHODOLOGY',
          h: 'Clear Separation of Astronomy & Archetype',
          p: 'Planetary coordinates, speeds, and house cusps are computed using open-source astronomy-engine (MIT). Mathematical coordinates are objective; astrological interpretations are archetypal lenses. We never conflate empirical facts with symbolic metaphor.',
          badge: 'astronomy-engine v2.1.19 (MIT)'
        },
        {
          glyph: '⚖',
          tag: 'ETHICAL BOUNDARIES',
          h: 'Rejection of Fatalism & Fear Narratives',
          p: 'The celestial realm does not mandate rigid doom. Mythborn strictly prohibits fear-based sensationalism, manipulative sales scripts, medical diagnoses, and financial advice. Human agency and free will remain sovereign.',
          badge: 'Zero Fatalism · Sovereign Agency'
        },
        {
          glyph: '🔒',
          tag: 'DATA PRIVACY',
          h: 'Strict Protection of Birth Data',
          p: 'Your birth parameters are processed in-memory solely to generate your calculation. We never monetize, profile, or publish personal natal charts on publicly indexable URLs.',
          badge: 'Zero Tracking · Total Confidentiality'
        },
        {
          glyph: '✧',
          tag: 'OPEN KNOWLEDGE',
          h: 'Honest Access Without Dark Patterns',
          p: 'Core birth charts, celestial calendars, live planetary transits, and archetypal compendiums remain openly accessible without hidden subscriptions or paywall traps.',
          badge: 'Open Source · Free Public Access'
        }
      ]
    },
    el: {
      eyebrow: '✦ ΑΣΤΡΟΝΟΜΙΚΗ ΑΚΡΙΒΕΙΑ & ΣΥΜΒΟΛΙΚΗ ΣΥΝΕΙΔΗΣΗ',
      title: 'Μεθοδολογία, Ηθική και Όρια',
      lead: 'Το Mythborn συνδυάζει τη μαθηματική ακρίβεια του ουρανού με την ελεύθερη βούληση, το ψυχολογικό βάθος και την ενσυνείδητη αυτογνωσία.',
      sections: [
        {
          glyph: '🔭',
          tag: 'ΜΕΘΟΔΟΛΟΓΙΑ ΥΠΟΛΟΓΙΣΜΟΥ',
          h: 'Σαφής Διάκριση Αστρονομίας και Συμβολισμού',
          p: 'Οι πλανητικές θέσεις και όψεις υπολογίζονται με το ανοιχτού κώδικα astronomy-engine (MIT). Οι μαθηματικές συντεταγμένες είναι αντικειμενικές, ενώ η ερμηνεία παραμένει συμβολική.',
          badge: 'astronomy-engine v2.1.19 (MIT)'
        },
        {
          glyph: '⚖',
          tag: 'ΗΘΙΚΑ ΟΡΙΑ',
          h: 'Απόρριψη Μοιρολατρίας και Εκφοβισμού',
          p: 'Ο ουρανός δεν αποτελεί αναπόφευκτο πεπρωμένο. Απορρίπτουμε απόλυτες μοιρολατρικές προφητείες, εμπορική εκμετάλλευση, ιατρικές ή οικονομικές παραινέσεις.',
          badge: 'Ελεύθερη Βούληση · Μηδενικός Φόβος'
        },
        {
          glyph: '🔒',
          tag: 'ΠΡΟΣΤΑΣΙΑ ΔΕΔΟΜΕΝΩΝ',
          h: 'Αυστηρή Προστασία Γενέθλιων Στοιχείων',
          p: 'Τα προσωπικά στοιχεία γέννησής σας χρησιμοποιούνται αποκλειστικά για τον άμεσο υπολογισμό. Δεν δημοσιεύονται σε ευρετηριάσιμους δημόσιους συνδέσμους.',
          badge: '100% Απόρρητο · Καμία Αποθήκευση'
        },
        {
          glyph: '✧',
          tag: 'ΑΝΟΙΧΤΗ ΠΡΟΣΒΑΣΗ',
          h: 'Ελεύθερη Κοσμική Γνώση',
          p: 'Οι βασικές αναλύσεις γενέθλιου χάρτη, το ουράνιο ημερολόγιο και το λεξικό παρέχονται ελεύθερα χωρίς παραπλανητικές συνδρομές.',
          badge: 'Ανοιχτός Κώδικας · Ελεύθερη Πρόσβαση'
        }
      ]
    },
    es: {
      eyebrow: '✦ RIGOR ASTRONÓMICO Y CONCIENCIA ARQUETÍPICA',
      title: 'Metodología, Ética y Límites',
      lead: 'Mythborn une la precisión matemática celeste con la soberanía personal, la psicología profunda y la reflexión lúcida.',
      sections: [
        {
          glyph: '🔭',
          tag: 'METODOLOGÍA DE CÁLCULO',
          h: 'Separación Clara entre Astronomía y Símbolo',
          p: 'Las coordenadas y velocidades planetarias se calculan con el motor verificado de código abierto astronomy-engine (MIT). La astronomía es empírica; la astrología es un marco simbólico.',
          badge: 'astronomy-engine v2.1.19 (MIT)'
        },
        {
          glyph: '⚖',
          tag: 'LÍMITES ÉTICOS',
          h: 'Rechazo al Fatalismo y al Discurso del Miedo',
          p: 'El cielo no decreta un destino inmutable. Rechazamos categóricamente el alarmismo, la manipulación comercial, los diagnósticos médicos y las directrices financieras.',
          badge: 'Libre Albedrío · Cero Alarmismo'
        },
        {
          glyph: '🔒',
          tag: 'PRIVACIDAD DE DATOS',
          h: 'Protección Estricta de Datos Natales',
          p: 'Tus parámetros de nacimiento se procesan en tiempo real únicamente para generar tu cálculo. Nunca vendemos datos ni publicamos cartas natales en enlaces indexables.',
          badge: 'Privacidad Total · Sin Rastreo'
        },
        {
          glyph: '✧',
          tag: 'CONOCIMIENTO ABIERTO',
          h: 'Acceso Transparente sin Trampas Comerciales',
          p: 'El cálculo de carta natal, tránsitos en vivo, retrógrados y el glosario astronómico están disponibles abiertamente sin muros de pago encubiertos.',
          badge: 'Código Abierto · Acceso Libre'
        }
      ]
    },
    ar: {
      eyebrow: '✦ النزاهة الفلكية والوعي الرمزي',
      title: 'المنهج والأخلاقيات والحدود المعرفية',
      lead: 'تجمع منصة Mythborn بين الدقة الرياضية لحركة الكواكب والوعي الإنساني القائم على حرية الإرادة والتأمل النفسي العميق.',
      sections: [
        {
          glyph: '🔭',
          tag: 'المنهج الرياضي',
          h: 'الفصل الواضح بين الفلك الرياضي والتأويل الرمزي',
          p: 'تُحسب درجات الكواكب وحركاتها بدقة بالغة وفق محرك astronomy-engine المفتوح المصدر (MIT). البيانات الفلكية علمية موضوعية، بينما التحليل النفسي قراءة رمزية واعية.',
          badge: 'astronomy-engine v2.1.19 (MIT)'
        },
        {
          glyph: '⚖',
          tag: 'المعايير الأخلاقية',
          h: 'رفض الحتمية والتنبؤات القائمة على التخويف',
          p: 'حركة السماء ليست قدراً محتوماً يعطل إرادة الإنسان. ترفض المنصة بشكل قاطع التهويل، التجارة بالخوف، أو تقديم استشارات طبية ومالية مضللة.',
          badge: 'إرادة حرة · رفض التخويف'
        },
        {
          glyph: '🔒',
          tag: 'حماية البيانات',
          h: 'السرية التامة لبيانات الميلاد الفلكية',
          p: 'تُعالج بيانات ولادتك لحظياً لحساب خريطتك فقط دون تخزينها أو بيعها لأي جهة، ولا تُنشر الخرائط الشخصية في روابط مفتوحة قابلة للأرشفة.',
          badge: 'خصوصية تامة · خلو من التتبع'
        },
        {
          glyph: '✧',
          tag: 'المعرفة الحرة',
          h: 'تجربة مفتوحة دون جدران دفع ملتوية',
          p: 'خريطة الميلاد الفلكية، تقويم العبور، وأدلة الأبراج متاحة للجميع بشفافية تامة ودون أفخاخ اشتراك إجبارية.',
          badge: 'مصدر مفتوح · نفاذ حر'
        }
      ]
    }
  };

  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';
  const c = content[loc] || content.tr;

  return `
    <section class="astro-hero" style="padding-bottom:32px">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">${c.eyebrow}</span>
        <h1 style="font-size:clamp(30px, 3.8vw, 48px); margin:12px 0 16px 0">${c.title}</h1>
        <p class="astro-hero-lead" style="max-width:760px; margin:0 auto">${c.lead}</p>
      </div>
    </section>

    <section class="astro-section" style="padding-top:10px">
      <div class="astro-container">
        <div class="approach-elite-grid">
          ${c.sections.map(s => `
            <article class="approach-elite-card">
              <div class="approach-elite-head">
                <div class="approach-elite-icon" aria-hidden="true">${s.glyph}</div>
                <span class="approach-elite-tag">${s.tag}</span>
              </div>
              <h3 class="approach-elite-title">${s.h}</h3>
              <p class="approach-elite-text">${s.p}</p>
              <div class="approach-elite-footer">
                <span class="approach-elite-pill">✦ ${s.badge}</span>
              </div>
            </article>
          `).join('')}
        </div>

        <div class="approach-engine-banner">
          <span style="color:var(--gold-bright); font-size:16px">✦</span>
          <span>${loc === 'tr' ? 'Hesaplama Çekirdeği: astronomy-engine v2.1.19 (MIT Lisansı) · Yerel yıldız zamanı ve ekliptik eğiklik (eps ~23.4392911°) · Eşit Ev (Equal House) Sistemi' : loc === 'en' ? 'Core Engine: astronomy-engine v2.1.19 (MIT License) · Local sidereal time & true obliquity · Equal House System' : loc === 'el' ? 'Πυρήνας Υπολογισμού: astronomy-engine v2.1.19 (MIT) · Τοπικός αστρικός χρόνος & πραγματική λοξότητα' : loc === 'es' ? 'Motor de Cálculo: astronomy-engine v2.1.19 (Licencia MIT) · Tiempo sidéreo local y oblicuidad real' : 'محرك الحسابات: astronomy-engine v2.1.19 (ترخيص MIT) · التوقيت النجمي المحلي والميل الحقيقي'}</span>
        </div>
      </div>
    </section>
  `;
};
