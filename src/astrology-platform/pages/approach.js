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
          tag: 'HESAPLAMA METODOLOJİSİ',
          h: 'Astronomi ile Yorumun Açık Ayrımı',
          p: 'Gezegen boylamları, hızları ve ev açıları açık kaynaklı astronomy-engine (MIT) çekirdeği ile hesaplanır. Matematiksel koordinatlar objektiftir; astrolojik yorumlar ise binlerce yıllık kültürel arketiplerin sembolik bir okumasıdır. Bu iki alan birbirine karıştırılmaz.'
        },
        {
          tag: 'ETİK SINIRLAR',
          h: 'Determinizm ve Korku Dilinin Reddi',
          p: 'Gökyüzü bir ceza veya kaçınılmaz kader tablosu değildir. Platformumuzda felaket tellallığı, mutlak kehanetler, manipülatif satış taktikleri, finansal yönlendirmeler veya tıbbi teşhis/tavsiyeler kesinlikle yer almaz.'
        },
        {
          tag: 'GİZLİLİK VE VERİ HAKLARI',
          h: 'Kişisel Doğum Bilgilerinin Korunması',
          p: 'Doğum tarihi, saati ve doğum yeriniz ticari bir profil çıkarma veya üçüncü taraflarla paylaşma amacıyla kullanılmaz. Doğum haritası sonuçlarınız arama motorlarına indexlenebilir açık linkler olarak yayınlanmaz.'
        },
        {
          tag: 'ÜCRETSİZ & AÇIK ERİŞİM',
          h: 'Ticari Tuzaksız Temel Deneyim',
          p: 'Temel doğum haritası, güncel gökyüzü transitleri, zodyak rehberleri ve astroloji sözlüğü gizli ödeme duvarları olmaksızın herkese açıktır. Bilgiye erişim etik bir haktır.'
        }
      ]
    },
    en: {
      eyebrow: '✦ ASTRONOMICAL INTEGRITY & SYMBOLIC CONSCIOUSNESS',
      title: 'Methodology, Ethics & Boundaries',
      lead: 'Mythborn unites the mathematical precision of the sky with human agency and mindful self-reflection.',
      sections: [
        {
          tag: 'METHODOLOGY',
          h: 'Clear Separation of Astronomy and Archetype',
          p: 'Planetary coordinates and angles are computed using the verified, open-source astronomy-engine (MIT). Astronomical data is objective; astrological interpretations serve as archetypal self-reflection. We never conflate the two.'
        },
        {
          tag: 'ETHICAL BOUNDARIES',
          h: 'Rejection of Fatalism and Fear',
          p: 'The celestial realm does not mandate rigid fate. Mythborn strictly forbids fear-based prophecies, manipulative sales, medical diagnosis, and financial advice. Free will remains foundational.'
        },
        {
          tag: 'PRIVACY BY DESIGN',
          h: 'Protection of Birth Data',
          p: 'Your birth parameters are processed to compute your chart on demand. We do not publish your personal birth charts as indexable public URLs or sell data to third parties.'
        },
        {
          tag: 'OPEN ACCESS',
          h: 'Accessible Cosmic Knowledge',
          p: 'Our core birth chart engine, sky calendar, transit map, and archetypal guides remain accessible without predatory subscription walls.'
        }
      ]
    },
    el: {
      eyebrow: '✦ ΑΣΤΡΟΝΟΜΙΚΗ ΑΚΡΙΒΕΙΑ & ΣΥΜΒΟΛΙΚΗ ΑΥΤΟΓΝΩΣΙΑ',
      title: 'Μεθοδολογία, Ηθική και Όρια',
      lead: 'Το Mythborn συνδυάζει τη μαθηματική ακρίβεια του ουρανού με την ελεύθερη βούληση και την προσωπική ενσυνειδητότητα.',
      sections: [
        { tag: 'ΜΕΘΟΔΟΛΟΓΙΑ', h: 'Διάκριση Αστρονομίας και Συμβολισμού', p: 'Οι πλανητικές θέσεις υπολογίζονται με το ανοιχτού κώδικα astronomy-engine (MIT).' },
        { tag: 'ΗΘΙΚΑ ΟΡΙΑ', h: 'Απόρριψη της Μοιρολατρίας', p: 'Απορρίπτουμε απόλυτες προβλέψεις, ιατρικές ή οικονομικές συμβουλές.' },
        { tag: 'ΙΔΙΩΤΙΚΟΤΗΤΑ', h: 'Προστασία Προσωπικών Δεδομένων', p: 'Τα γενέθλια στοιχεία σας δεν δημοσιεύονται σε ευρετηριάσιμους δημόσιους συνδέσμους.' },
        { tag: 'ΠΡΟΣΒΑΣΙΜΟΤΗΤΑ', h: 'Ελεύθερη Γνώση', p: 'Οι βασικές αναλύσεις παραμένουν ανοιχτές χωρίς παραπλανητικές συνδρομές.' }
      ]
    },
    es: {
      eyebrow: '✦ RIGOR ASTRONÓMICO Y AUTOCONOCIMIENTO',
      title: 'Metodología, Ética y Límites',
      lead: 'Mythborn une la precisión matemática celeste con la libre voluntad y la reflexión consciente.',
      sections: [
        { tag: 'METODOLOGÍA', h: 'Separación Clara entre Astronomía y Símbolo', p: 'Las coordenadas planetarias se calculan con el motor verificado astronomy-engine (MIT).' },
        { tag: 'LÍMITES ÉTICOS', h: 'Rechazo al Fatalismo y al Miedo', p: 'No emitimos profecías deterministas, pronósticos alarmistas ni asesoramiento médico o financiero.' },
        { tag: 'PRIVACIDAD', h: 'Protección de Datos Natales', p: 'Tus datos de nacimiento no se publican en URLs públicas indexables ni se comercializan.' },
        { tag: 'ACCESO LIBRE', h: 'Conocimiento Abierto', p: 'Las herramientas cardinales de carta natal y tránsitos están abiertas sin barreras ocultas.' }
      ]
    },
    ar: {
      eyebrow: '✦ الدقة الفلكية والوعي الذاتي',
      title: 'المنهج والأخلاقيات والحدود',
      lead: 'تجمع Mythborn بين الحسابات الفلكية الرياضية والتأمل الذاتي القائم على حرية الإرادة.',
      sections: [
        { tag: 'المنهج الرياضي', h: 'الفصل الواضح بين الفلك والتأويل', p: 'تُحسب مواقع الكواكب وفق محرك astronomy-engine المفتوح المصدر (MIT).' },
        { tag: 'المعايير الأخلاقية', h: 'رفض الحتمية ولغة التخويف', p: 'نرفض تماماً ادعاءات الغيب الحتمية، التوجيهات الطبية أو المالية.' },
        { tag: 'حماية البيانات', h: 'خصوصية بيانات الميلاد', p: 'بيانات ميلادك لا تُنشر في روابط عامة قابلة للأرشفة أو البيع.' },
        { tag: 'المعرفة الحرة', h: 'الوصول المفتوح', p: 'أدوات خريطة الميلاد وتقويم السماء متاحة دون اشتراكات إجبارية مجحفة.' }
      ]
    }
  };

  const c = content[locale] || content.tr;

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">${c.eyebrow}</span>
        <h1>${c.title}</h1>
        <p class="astro-hero-lead">${c.lead}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-2">
          ${c.sections.map(s => `
            <article class="astro-card">
              <span class="astro-card-tag">${s.tag}</span>
              <h3>${s.h}</h3>
              <p style="font-size:14px; color:var(--muted); line-height:1.7">${s.p}</p>
            </article>
          `).join('')}
        </div>

        <div style="margin-top:40px; padding:24px; border:1px solid var(--border); border-radius:16px; background:rgba(255,255,255,0.015); text-align:center">
          <p style="font-size:13px; color:var(--muted); margin:0">
            <strong>Hesaplama Motoru:</strong> ${ENGINE_METADATA.name} v${ENGINE_METADATA.version} (${ENGINE_METADATA.license}) · ${ENGINE_METADATA.anglesMethod} · ${ENGINE_METADATA.houseSystem}
          </p>
        </div>
      </div>
    </section>
  `;
};
