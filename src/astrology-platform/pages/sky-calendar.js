// Mythborn Astrology Platform — Sky Calendar & Lunations
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getMoonPhaseData, ENGINE_METADATA } from '../data-core.js';

export const renderSkyCalendarView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const now = new Date();
  const moon = getMoonPhaseData(now, locale);

  const labels = {
    tr: {
      eyebrow: '✦ ASTRONOMİ MOTORUYLA HESAPLANAN AY DÖNGÜLERİ',
      heroTitle: `${t.menu.calendar} ve Ay Evreleri`,
      liveTag: '✦ ANLIK AY FAZI (CANLI EFEMERİS)',
      angleLabel: 'Açısal Konum',
      illumLabel: 'Aydınlanma Oranı',
      nextNewTag: 'YAKLAŞAN YENİAY',
      nextFullTag: 'YAKLAŞAN DOLUNAY',
      corridorTag: '✦ 2026 KASIM & ARALIK KORİDORU',
      corridorTitle: '24 Saat Zaman Standartlı Lunasyon Takvimi',
      corridorSub: 'Tüm zaman gösterimleri Europe/Istanbul ve UTC olarak 24 saatlik formatta üretilmektedir.',
      utcEquiv: 'UTC Eşleniği',
      tsiLabel: 'Europe/Istanbul (TSI)'
    },
    en: {
      eyebrow: '✦ LUNAR CYCLES CALCULATED VIA ASTRONOMY ENGINE',
      heroTitle: `${t.menu.calendar} & Lunar Phases`,
      liveTag: '✦ CURRENT MOON PHASE (LIVE EPHEMERIS)',
      angleLabel: 'Angular Position',
      illumLabel: 'Illumination',
      nextNewTag: 'UPCOMING NEW MOON',
      nextFullTag: 'UPCOMING FULL MOON',
      corridorTag: '✦ 2026 NOV & DEC LUNATION CORRIDOR',
      corridorTitle: '24-Hour Standardized Lunation Showcase',
      corridorSub: 'All lunation milestones computed in parallel 24-hour Europe/Istanbul and UTC standards.',
      utcEquiv: 'UTC Equivalent',
      tsiLabel: 'Europe/Istanbul (TSI)'
    },
    el: {
      eyebrow: '✦ ΣΕΛΗΝΙΑΚΟΙ ΚΥΚΛΟΙ ΜΕ ΑΣΤΡΟΝΟΜΙΚΗ ΑΚΡΙΒΕΙΑ',
      heroTitle: `${t.menu.calendar} & Φάσεις Σελήνης`,
      liveTag: '✦ ΤΡΕΧΟΥΣΑ ΦΑΣΗ ΣΕΛΗΝΗΣ (ΖΩΝΤΑΝΗ)',
      angleLabel: 'Γωνιακή Θέση',
      illumLabel: 'Φωτισμός',
      nextNewTag: 'ΕΠΕΡΧΟΜΕΝΗ ΝΕΑ ΣΕΛΗΝΗ',
      nextFullTag: 'ΕΠΕΡΧΟΜΕΝΗ ΠΑΝΣΕΛΗΝΟΣ',
      corridorTag: '✦ ΣΕΛΗΝΙΑΚΟΣ ΔΙΑΔΡΟΜΟΣ ΝΟΕ-ΔΕΚ 2026',
      corridorTitle: 'Ημερολόγιο Σελήνης Προτύπου 24 Ωρών',
      corridorSub: 'Όλοι οι υπολογισμοί παράγονται σε μορφή 24 ωρών Europe/Istanbul και UTC.',
      utcEquiv: 'Ισοδύναμο UTC',
      tsiLabel: 'Europe/Istanbul (TSI)'
    },
    es: {
      eyebrow: '✦ CICLOS LUNARES CALCULADOS CON MOTOR ASTRONÓMICO',
      heroTitle: `${t.menu.calendar} y Fases Lunares`,
      liveTag: '✦ FASE LUNAR ACTUAL (EFEMÉRIDES EN VIVO)',
      angleLabel: 'Posición Angular',
      illumLabel: 'Iluminación',
      nextNewTag: 'PRÓXIMA LUNA NUEVA',
      nextFullTag: 'PRÓXIMA LUNA LLENA',
      corridorTag: '✦ CORREDOR DE LUNACIONES NOV & DIC 2026',
      corridorTitle: 'Calendario de Lunaciones en Formato 24h',
      corridorSub: 'Todas las marcas temporales calculadas en 24 horas Europe/Istanbul y UTC.',
      utcEquiv: 'Equivalente UTC',
      tsiLabel: 'Europe/Istanbul (TSI)'
    },
    ar: {
      eyebrow: '✦ دورات القمر محسوبة بمحرك فلكي دقيق',
      heroTitle: `${t.menu.calendar} ومنازل القمر`,
      liveTag: '✦ طور القمر اللحظي (حساب حي)',
      angleLabel: 'الموقع الزاوي',
      illumLabel: 'نسبة الإضاءة',
      nextNewTag: 'المحاق القادم',
      nextFullTag: 'البدر القادم',
      corridorTag: '✦ مسار الاقترانات القمرية نوفمبر وديسمبر 2026',
      corridorTitle: 'تقويم أطوار القمر بمعيار 24 ساعة',
      corridorSub: 'جميع التواقيت محسوبة بدقة بتوقيت إسطنبول وUTC بنظام 24 ساعة.',
      utcEquiv: 'توقيت UTC',
      tsiLabel: 'توقيت إسطنبول (TSI)'
    }
  };

  const l = labels[locale] || labels.tr;

  const lunations = [
    {
      phaseId: 'new-moon',
      phaseBadge: locale === 'tr' ? 'YENİAY' : locale === 'en' ? 'NEW MOON' : locale === 'el' ? 'ΝΕΑ ΣΕΛΗΝΗ' : locale === 'es' ? 'LUNA NUEVA' : 'محاق',
      illum: '%0',
      title: locale === 'tr' ? 'Akrep Yeniayı' : locale === 'en' ? 'Scorpio New Moon' : locale === 'el' ? 'Νέα Σελήνη στον Σκορπιό' : locale === 'es' ? 'Luna Nueva en Escorpio' : 'محاق العقرب',
      zodiacDeg: locale === 'tr' ? '17° Akrep ♏' : locale === 'en' ? '17° Scorpio ♏' : locale === 'el' ? '17° Σκορπιός ♏' : locale === 'es' ? '17° Escorpio ♏' : '17° العقرب ♏',
      dateTsi: '09 Kasım 2026 · 18:45 TSI',
      dateUtc: '15:45 UTC',
      desc: locale === 'tr' ? 'Dönüşüm, derin sezgiler ve içsel niyet eşiği. Eski kalıpları bırakıp köklü bir yenilenmeye adım atma zamanı.'
        : locale === 'en' ? 'Transformation, deep intuition, and conscious intention. Time to release outdated structures and commit to renewal.'
        : locale === 'el' ? 'Μεταμόρφωση, βαθιά διαίσθηση και συνειδητή πρόθεση για αναγέννηση.'
        : locale === 'es' ? 'Transformación, intuición profunda y siembra de intenciones conscientes.'
        : 'التحول، الحدس العميق وإطلاق النوايا الصادقة للتجدد الداخلي.'
    },
    {
      phaseId: 'first-quarter',
      phaseBadge: locale === 'tr' ? 'İLK DÖRDÜN' : locale === 'en' ? 'FIRST QUARTER' : locale === 'el' ? 'ΠΡΩΤΟ ΤΕΤΑΡΤΟ' : locale === 'es' ? 'CUARTO CRECIENTE' : 'التربيع الأول',
      illum: '%50',
      title: locale === 'tr' ? 'Kova İlk Dördün' : locale === 'en' ? 'Aquarius First Quarter' : locale === 'el' ? 'Πρώτο Τέταρτο στον Υδροχόο' : locale === 'es' ? 'Cuarto Creciente en Acuario' : 'التربيع الأول في الدلو',
      zodiacDeg: locale === 'tr' ? '25° Kova ♒' : locale === 'en' ? '25° Aquarius ♒' : locale === 'el' ? '25° Υδροχόος ♒' : locale === 'es' ? '25° Acuario ♒' : '25° الدلو ♒',
      dateTsi: '17 Kasım 2026 · 06:20 TSI',
      dateUtc: '03:20 UTC',
      desc: locale === 'tr' ? 'Bireysel vizyon, eyleme geçiş ve dirençleri kırma. Kararlılıkla hedeflere doğru somut adım atma aşaması.'
        : locale === 'en' ? 'Innovative vision, overcoming initial hurdles, and mobilizing deliberate effort toward future milestones.'
        : locale === 'el' ? 'Προσωπικό όραμα, υπέρβαση εμποδίων και ανάληψη δράσης.'
        : locale === 'es' ? 'Visión innovadora, superación de resistencias y acción decidida hacia metas.'
        : 'الرؤية المستقبلية، التغلب على التحديات والبدء بخطوات عملية واثقة.'
    },
    {
      phaseId: 'full-moon',
      phaseBadge: locale === 'tr' ? 'DOLUNAY' : locale === 'en' ? 'FULL MOON' : locale === 'el' ? 'ΠΑΝΣΕΛΗΝΟΣ' : locale === 'es' ? 'LUNA LLENA' : 'بدر',
      illum: '%100',
      title: locale === 'tr' ? 'Boğa Dolunayı' : locale === 'en' ? 'Taurus Full Moon' : locale === 'el' ? 'Πανσέληνος στον Ταύρο' : locale === 'es' ? 'Luna Llena en Tauro' : 'بدر الثور',
      zodiacDeg: locale === 'tr' ? '02° Boğa ♉' : locale === 'en' ? '02° Taurus ♉' : locale === 'el' ? '02° Ταύρος ♉' : locale === 'es' ? '02° Tauro ♉' : '02° الثور ♉',
      dateTsi: '24 Kasım 2026 · 21:14 TSI',
      dateUtc: '18:14 UTC',
      desc: locale === 'tr' ? 'Maddi güvence, somut hasat ve duygusal netleşme. Emeklerin görünür olduğu ve değerlerin sağlamlaştığı tepe noktası.'
        : locale === 'en' ? 'Material stability, tangible fruition, and emotional clarity. Peak culmination where value and persistence bear fruit.'
        : locale === 'el' ? 'Υλική σταθερότητα, απτή συγκομιδή καρπών και συναισθηματική διαύγεια.'
        : locale === 'es' ? 'Seguridad tangible, cosecha de esfuerzos y máxima claridad emocional.'
        : 'الاستقرار المادي، حصاد الثمار والوضوح العاطفي التام.'
    },
    {
      phaseId: 'last-quarter',
      phaseBadge: locale === 'tr' ? 'SON DÖRDÜN' : locale === 'en' ? 'LAST QUARTER' : locale === 'el' ? 'ΤΕΛΕΥΤΑΙΟ ΤΕΤΑΡΤΟ' : locale === 'es' ? 'CUARTO MENGUANTE' : 'التربيع الأخير',
      illum: '%50',
      title: locale === 'tr' ? 'Başak Son Dördün' : locale === 'en' ? 'Virgo Last Quarter' : locale === 'el' ? 'Τελευταίο Τέταρτο στην Παρθένο' : locale === 'es' ? 'Cuarto Menguante en Virgo' : 'التربيع الأخير في العذراء',
      zodiacDeg: locale === 'tr' ? '10° Başak ♍' : locale === 'en' ? '10° Virgo ♍' : locale === 'el' ? '10° Παρθένος ♍' : locale === 'es' ? '10° Virgo ♍' : '10° العذراء ♍',
      dateTsi: '02 Aralık 2026 · 14:10 TSI',
      dateUtc: '11:10 UTC',
      desc: locale === 'tr' ? 'Sadeleşme, fazlalıklardan arınma ve düzenleme. Zihinsel ve fiziksel alanı temizleyerek bir sonraki döngüye zemin hazırlama.'
        : locale === 'en' ? 'Pragmatic discernment, decluttering, and refinement. Organizing physical and mental space for the next cycle.'
        : locale === 'el' ? 'Απλοποίηση, αποσυμφόρηση και αναδιοργάνωση για τον επόμενο κύκλο.'
        : locale === 'es' ? 'Depuración consciente, orden práctico y cierre sereno del ciclo.'
        : 'التنظيم الدقيق، التخلص من الفوضى والتحضير للدورة الجديدة بهدوء.'
    }
  ];

  return `
    <section class="astro-hero astro-section-viewport" style="display:flex; flex-direction:column; justify-content:center; padding:clamp(28px, 4vh, 48px) 0">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">${l.eyebrow}</span>
        <h1 style="margin-bottom:12px">${l.heroTitle}</h1>
        <p class="astro-hero-lead" style="margin-bottom:24px">${t.sections.skySub}</p>

        <!-- Güncel Canlı Ay Durumu -->
        <div style="padding:24px 28px; background:linear-gradient(135deg, rgba(212,175,55,0.08), rgba(6,9,18,0.85)); border:1px solid rgba(212,175,55,0.4); border-radius:18px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:20px; box-shadow:0 16px 40px rgba(0,0,0,0.55)">
          <div style="display:flex; align-items:center; gap:20px">
            <img src="/assets/astrology/moon/${moon.phaseId.replace(/_/g, '-')}.svg" alt="${moon.name}" style="width:60px; height:60px; filter:drop-shadow(0 0 14px rgba(212,175,55,0.45))">
            <div>
              <span class="astro-card-tag" style="margin-bottom:4px">${l.liveTag}</span>
              <h2 style="font-family:var(--font-serif); font-size:26px; color:#fff; margin:2px 0 6px 0">
                ${moon.name}
              </h2>
              <p style="color:var(--muted); font-size:13.5px; margin:0">
                ${l.angleLabel}: <strong style="color:#fff">${moon.degrees}°</strong> · ${l.illumLabel}: <strong style="color:var(--gold-bright)">%${moon.illuminationPct}</strong>
              </p>
            </div>
          </div>
          <div style="display:flex; gap:14px; flex-wrap:wrap">
            <div style="padding:10px 16px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.08); border-radius:10px; font-size:12.5px">
              <span style="color:var(--muted); display:block; font-size:10.5px; font-weight:600; letter-spacing:0.04em">${l.nextNewTag}</span>
              <strong style="color:#fff">${moon.nextNewMoon24h}</strong>
            </div>
            <div style="padding:10px 16px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.08); border-radius:10px; font-size:12.5px">
              <span style="color:var(--muted); display:block; font-size:10.5px; font-weight:600; letter-spacing:0.04em">${l.nextFullTag}</span>
              <strong style="color:#fff">${moon.nextFullMoon24h}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="astro-section astro-section-viewport" style="border-top:1px solid var(--border); display:flex; flex-direction:column; justify-content:center; padding:clamp(28px, 4vh, 52px) 0">
      <div class="astro-container">
        <div class="astro-section-head" style="margin-bottom:20px">
          <span class="astro-card-tag">${l.corridorTag}</span>
          <h2>${l.corridorTitle}</h2>
          <p>${l.corridorSub}</p>
        </div>

        <div class="lunation-card-grid">
          ${lunations.map(card => `
            <article class="lunation-card">
              <div class="lunation-card-header">
                <img src="/assets/astrology/moon/${card.phaseId}.svg" alt="${card.title}" class="lunation-card-icon">
                <span class="lunation-illum-badge">${card.phaseBadge} · ${card.illum}</span>
              </div>
              <h3 class="lunation-card-title">${card.title}</h3>
              <div class="lunation-zodiac-pill">
                <span>✦</span>
                <strong>${card.zodiacDeg}</strong>
              </div>
              <div class="lunation-time-box">
                <span class="lunation-time-tsi">${card.dateTsi}</span>
                <span class="lunation-time-utc">${l.utcEquiv}: ${card.dateUtc}</span>
              </div>
              <p class="lunation-guide-text">${card.desc}</p>
            </article>
          `).join('')}
        </div>

        <div style="margin-top:28px; padding:16px; border:1px solid rgba(212,175,55,0.18); border-radius:12px; font-size:12px; color:var(--muted); text-align:center; background:rgba(255,255,255,0.015)">
          <p style="margin:0">${ENGINE_METADATA.precision} · ${ENGINE_METADATA.disclaimer}</p>
        </div>
      </div>
    </section>
  `;
};
