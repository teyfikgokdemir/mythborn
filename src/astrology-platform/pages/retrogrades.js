// Mythborn Astrology Platform — Retrogrades Calendar
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { calculateSkySnapshot, ENGINE_METADATA } from '../data-core.js';

export const renderRetrogradesView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const snapshot = calculateSkySnapshot(new Date(), locale);

  const copy = {
    tr: {
      triadTitle: 'Merkür’ün 2026 Zihinsel ve İletişim Üçlemesi',
      triadBadge: '3 Döngü · 66 Günlük Toplam Faz',
      quadTitle: 'Kişisel İrade, İlişki ve Kolektif Gezegen Döngüleri',
      quadBadge: '4 Gezegen · Majör Dönüşüm Fazları',
      phaseLabel: 'Gölge · Durağan · Retro · Direkt',
      mercuryBaharTitle: 'Bahar Zihinsel Döngüsü',
      mercuryBaharTheme: 'İletişim, teknoloji, veri güvenliği ve zihinsel odak gözden geçirmesi.',
      mercuryBaharGuide: 'Yeni sözleşmeler imzalamak yerine taslakları ve yarım kalan projeleri revize edin.',
      mercuryYazTitle: 'Yaz Duygusal Döngüsü',
      mercuryYazTheme: 'Duygusal hafıza, aile içi diyaloglar, geçmiş bağlar ve köklerle yüzleşme.',
      mercuryYazGuide: 'Geçmiş kırgınlıkları netleştirmek ve ailevi bağlarda şefkatli sınırlar koymak için ideal.',
      mercurySonbaharTitle: 'Güz Finansal & İlişki Döngüsü',
      mercurySonbaharTheme: 'Gizli gerçekler, finansal anlaşmalar, ortak gelirler ve ilişkide denge teftişi.',
      mercurySonbaharGuide: 'Mali tabloları gözden geçirin; ikili ilişkilerdeki yarım kalan diyalogları tamamlayın.',
      venusTitle: 'Venüs Retrosu · Değer & Aşk',
      venusCycle: '41 Günlük Arketipsel Faz',
      venusTheme: 'Değer yargıları, öz-değer algısı, estetik tercihler ve ilişkisel sınırların yeniden inşası.',
      venusGuide: 'Dürtüsel harcamaları durdurun; içsel değerinizi ve ilişkisel dengenizi onarın.',
      marsTitle: 'Mars Retrosu · İrade & Eylem',
      marsCycle: '80 Günlük Güç & Sabır Fazı',
      marsTheme: 'İçsel irade, eylem stratejisi, öfke kontrolü ve bastırılmış enerjinin yönetimi.',
      marsGuide: 'Aceleci ve çatışmacı adımlar yerine enerjiyi planlı, stratejik ve sabırlı bir eyleme dönüştürün.',
      jupiterTitle: 'Jüpiter Retrosu · Bilgelik & İnanç',
      jupiterCycle: '120 Günlük Felsefi Faz',
      jupiterTheme: 'İnanç sistemleri, felsefi büyüme, yüksek öğrenim ve aşırı iyimserliği dengeleme.',
      jupiterGuide: 'Dışsal kontrolsüz genişleme yerine içsel bilgelik ve uzun vadeli vizyonu sağlamlaştırın.',
      saturnTitle: 'Satürn Retrosu · Zaman & Sorumluluk',
      saturnCycle: '137 Günlük Ustalık Fazı',
      saturnTheme: 'Kişisel otorite, sınırlar, uzun vadeli yapılar ve disiplin testi.',
      saturnGuide: 'Sorumluluklardan kaçmak yerine sağlam, gerçekçi ve sürdürülebilir temeller inşa edin.'
    },
    en: {
      triadTitle: 'Mercury’s 2026 Mental & Communication Triad',
      triadBadge: '3 Cycles · 66 Total Retro Days',
      quadTitle: 'Personal Will, Relational & Collective Planetary Cycles',
      quadBadge: '4 Planets · Major Transformative Phases',
      phaseLabel: 'Shadow · Stationary · Retrograde · Direct',
      mercuryBaharTitle: 'Spring Intellectual Cycle',
      mercuryBaharTheme: 'Review of communications, software, cognitive focus, and clarity.',
      mercuryBaharGuide: 'Instead of signing new treaties, audit existing drafts and finish lingering projects.',
      mercuryYazTitle: 'Summer Emotional Cycle',
      mercuryYazTheme: 'Emotional memory, domestic dialogues, ancestral bonds, and personal roots.',
      mercuryYazGuide: 'Ideal for resolving family misunderstandings and nurturing emotional boundaries.',
      mercurySonbaharTitle: 'Autumn Financial & Relational Cycle',
      mercurySonbaharTheme: 'Uncovering truths, shared financial agreements, and relational fairness.',
      mercurySonbaharGuide: 'Audit personal accounts and conclude overdue conversations with partners.',
      venusTitle: 'Venus Retrograde · Values & Love',
      venusCycle: '41-Day Archetypal Phase',
      venusTheme: 'Re-evaluating self-worth, relational standards, aesthetic priorities, and commitments.',
      venusGuide: 'Cease impulse purchases; restore authentic self-respect and clear relational agreements.',
      marsTitle: 'Mars Retrograde · Will & Drive',
      marsCycle: '80-Day Fortitude Phase',
      marsTheme: 'Inner motivation, action strategies, anger recalibration, and disciplined energy.',
      marsGuide: 'Avoid impulsive conflict; channel vital drives into methodical and patient mastery.',
      jupiterTitle: 'Jupiter Retrograde · Wisdom & Vision',
      jupiterCycle: '120-Day Philosophical Phase',
      jupiterTheme: 'Revisiting core belief systems, intellectual expansion, and realistic optimism.',
      jupiterGuide: 'Ground grandiose plans into meaningful wisdom and sustainable long-term goals.',
      saturnTitle: 'Saturn Retrograde · Time & Discipline',
      saturnCycle: '137-Day Mastery Phase',
      saturnTheme: 'Personal authority, endurance, realistic boundaries, and structural accountability.',
      saturnGuide: 'Rather than fearing responsibility, construct durable and unshakable life pillars.'
    },
    el: {
      triadTitle: 'Η Τριάδα Επικοινωνίας του Ερμή 2026',
      triadBadge: '3 Κύκλοι · 66 Ημέρες',
      quadTitle: 'Κύκλοι Προσωπικής Βούλησης & Συλλογικών Πλανητών',
      quadBadge: '4 Πλανήτες · Κύριες Φάσεις',
      phaseLabel: 'Σκιά · Στάσιμος · Ανάδρομος · Ορθόδρομος',
      mercuryBaharTitle: 'Εαρινός Κύκλος Ερμή',
      mercuryBaharTheme: 'Επανεξέταση επικοινωνίας, τεχνολογίας και πνευματικής συγκέντρωσης.',
      mercuryBaharGuide: 'Αναθεωρήστε υπάρχοντα σχέδια αντί για νέα συμβόλαια.',
      mercuryYazTitle: 'Θερινός Συναισθηματικός Κύκλος',
      mercuryYazTheme: 'Συναισθηματική μνήμη, οικογενειακοί διάλογοι και παρελθόν.',
      mercuryYazGuide: 'Ιδανικό για επούλωση παλαιών δεσμών και συναισθηματικά όρια.',
      mercurySonbaharTitle: 'Φθινοπωρινός Οικονομικός Κύκλος',
      mercurySonbaharTheme: 'Αλήθειες, οικονομικές συμφωνίες και ισορροπία σχέσεων.',
      mercurySonbaharGuide: 'Ελέγξτε προϋπολογισμούς και ξεκαθαρίστε ανοιχτές συζητήσεις.',
      venusTitle: 'Ανάδρομη Αφροδίτη · Αξίες & Αγάπη',
      venusCycle: 'Φάση 41 Ημερών',
      venusTheme: 'Αυτοεκτίμηση, σχέσεις και αισθητική αναθεώρηση.',
      venusGuide: 'Αποφύγετε παρορμητικές δαπάνες· οικοδομήστε υγιή όρια σχέσεων.',
      marsTitle: 'Ανάδρομος Άρης · Βούληση & Δράση',
      marsCycle: 'Φάση 80 Ημερών',
      marsTheme: 'Εσωτερική θέληση, διαχείριση θυμού και ενεργειακή πειθαρχία.',
      marsGuide: 'Αντικαταστήστε την παρορμητικότητα με στρατηγική υπομονή.',
      jupiterTitle: 'Ανάδρομος Δίας · Σοφία & Πίστη',
      jupiterCycle: 'Φάση 120 Ημερών',
      jupiterTheme: 'Αναθεώρηση πεποιθήσεων και φιλοσοφική ανάπτυξη.',
      jupiterGuide: 'Εμβαθύνετε στην εσωτερική σοφία αντί για επιφανειακή επέκταση.',
      saturnTitle: 'Ανάδρομος Κρόνος · Χρόνος & Πειθαρχία',
      saturnCycle: 'Φάση 137 Ημερών',
      saturnTheme: 'Προσωπική εξουσία, ευθύνες και αντοχή.',
      saturnGuide: 'Χτίστε ανθεκτικές δομές με υπομονή και ρεαλισμό.'
    },
    es: {
      triadTitle: 'La Tríada Mental y de Comunicación de Mercurio 2026',
      triadBadge: '3 Ciclos · 66 Días Totales',
      quadTitle: 'Ciclos de Voluntad Personal, Relaciones y Colectivos',
      quadBadge: '4 Planetas · Fases Mayores',
      phaseLabel: 'Sombra · Estacionario · Retrógrado · Directo',
      mercuryBaharTitle: 'Ciclo Mental de Primavera',
      mercuryBaharTheme: 'Revisión de comunicaciones, tecnología y enfoque mental.',
      mercuryBaharGuide: 'En lugar de firmar nuevos acuerdos, audite borradores y proyectos pendientes.',
      mercuryYazTitle: 'Ciclo Emocional de Verano',
      mercuryYazTheme: 'Memoria emocional, diálogos familiares y raíces del pasado.',
      mercuryYazGuide: 'Ideal para sanar viejos malentendidos y cultivar límites afectivos.',
      mercurySonbaharTitle: 'Ciclo Financiero y Relacional de Otoño',
      mercurySonbaharTheme: 'Verdades ocultas, acuerdos financieros y equilibrio vincular.',
      mercurySonbaharGuide: 'Revise presupuestos y concluya conversaciones pendientes con socios.',
      venusTitle: 'Venus Retrógrado · Valores y Amor',
      venusCycle: 'Fase Arquetípica de 41 Días',
      venusTheme: 'Autoestima, valores personales y reconstrucción de límites vinculares.',
      venusGuide: 'Detenga gastos impulsivos; restaure su dignidad interna y respeto mutuo.',
      marsTitle: 'Marte Retrógrado · Voluntad y Acción',
      marsCycle: 'Fase de Fortaleza de 80 Días',
      marsTheme: 'Estrategia de acción, control de la ira y disciplina energética.',
      marsGuide: 'Canalice la impulsividad hacia una maestría paciente y metódica.',
      jupiterTitle: 'Júpiter Retrógrado · Sabiduría y Fe',
      jupiterCycle: 'Fase Filosófica de 120 Días',
      jupiterTheme: 'Sistemas de creencias, expansión intelectual y optimismo sobrio.',
      jupiterGuide: 'Consolide la sabiduría interna en lugar de una expansión desmedida.',
      saturnTitle: 'Saturno Retrógrado · Tiempo y Disciplina',
      saturnCycle: 'Fase de Maestría de 137 Días',
      saturnTheme: 'Autoridad personal, límites realistas y responsabilidad estructural.',
      saturnGuide: 'Construya pilares vitales duraderos con perseverancia y realismo.'
    },
    ar: {
      triadTitle: 'ثلاثية عطارد الفكرية والتواصلية لعام 2026',
      triadBadge: '3 دورات · 66 يوماً إجمالياً',
      quadTitle: 'دورات الإرادة الشخصية والعلاقات والكواكب الجماعية',
      quadBadge: '4 كواكب · مراحل التحول الكبرى',
      phaseLabel: 'الظل · الثبات · التراجع · الحركة المباشرة',
      mercuryBaharTitle: 'دورة الربيع الفكرية',
      mercuryBaharTheme: 'مراجعة التواصل والتكنولوجيا والتركيز الذهني بدقة.',
      mercuryBaharGuide: 'راجع المسودات والمشاريع السابقة بدلاً من توقيع عقود جديدة متسرعة.',
      mercuryYazTitle: 'دورة الصيف العاطفية',
      mercuryYazTheme: 'الذاكرة العاطفية، الحوارات العائلية والروابط القديمة.',
      mercuryYazGuide: 'مثالية لتصفية سوء الفهم الأسري وبناء حدود نفسية دافئة.',
      mercurySonbaharTitle: 'دورة الخريف المالية والعاطفية',
      mercurySonbaharTheme: 'كشف الحقائق، الاتفاقيات المالية وتوازن العلاقات.',
      mercurySonbaharGuide: 'دقق في الحسابات المالية وأكمل الحوارات المؤجلة مع الشركاء.',
      venusTitle: 'تراجع الزهرة · القيم والحب',
      venusCycle: 'مرحلة أصيلة مدتها 41 يوماً',
      venusTheme: 'تقدير الذات، القيم الشخصية وإعادة بناء حدود العلاقات.',
      venusGuide: 'أوقف النفقات المندفعة ورسخ احترامك الداخلي وتوازنك العاطفي.',
      marsTitle: 'تراجع المريخ · الإرادة والعمل',
      marsCycle: 'مرحلة الصبر مدتها 80 يوماً',
      marsTheme: 'الإرادة الداخلية، ضبط الغضب وتوجيه الطاقة الإيجابية.',
      marsGuide: 'تجنب الصراعات المتسرعة وحوّل طاقتك نحو إنجاز منظم وهادئ.',
      jupiterTitle: 'تراجع المشتري · الحكمة والإيمان',
      jupiterCycle: 'مرحلة فلسفية مدتها 120 يوماً',
      jupiterTheme: 'مراجعة القناعات، النمو الفلسفي والتفاؤل المتزن.',
      jupiterGuide: 'رسخ الحكمة الداخلية بدلاً من التوسع العشوائي غير المدروس.',
      saturnTitle: 'تراجع زحل · الوقت والانضباط',
      saturnCycle: 'مرحلة النضج مدتها 137 يوماً',
      saturnTheme: 'السلطة الشخصية، الحدود الواقعية والمسؤولية المستدامة.',
      saturnGuide: 'ابنِ ركائز حياتية متينة بثقة وواقعية دون الهروب من الواجبات.'
    }
  };

  const l = copy[locale] || copy.tr;

  const mercuryTriad = [
    {
      symbol: '☿',
      planetName: locale === 'tr' ? 'Merkür Retrosu' : locale === 'en' ? 'Mercury Retrograde' : locale === 'el' ? 'Ανάδρομος Ερμής' : locale === 'es' ? 'Mercurio Retrógrado' : 'تراجع عطارد',
      cycleName: l.mercuryBaharTitle,
      dates: '26 Şubat – 20 Mart 2026',
      duration: '22 Gün',
      sign: 'Balık ♓ → Kova ♒',
      theme: l.mercuryBaharTheme,
      guide: l.mercuryBaharGuide
    },
    {
      symbol: '☿',
      planetName: locale === 'tr' ? 'Merkür Retrosu' : locale === 'en' ? 'Mercury Retrograde' : locale === 'el' ? 'Ανάδρομος Ερμής' : locale === 'es' ? 'Mercurio Retrógrado' : 'تراجع عطارد',
      cycleName: l.mercuryYazTitle,
      dates: '29 Haziran – 23 Temmuz 2026',
      duration: '24 Gün',
      sign: 'Yengeç ♋',
      theme: l.mercuryYazTheme,
      guide: l.mercuryYazGuide
    },
    {
      symbol: '☿',
      planetName: locale === 'tr' ? 'Merkür Retrosu' : locale === 'en' ? 'Mercury Retrograde' : locale === 'el' ? 'Ανάδρομος Ερμής' : locale === 'es' ? 'Mercurio Retrógrado' : 'تراجع عطارد',
      cycleName: l.mercurySonbaharTitle,
      dates: '24 Ekim – 13 Kasım 2026',
      duration: '20 Gün',
      sign: 'Akrep ♏ → Terazi ♎',
      theme: l.mercurySonbaharTheme,
      guide: l.mercurySonbaharGuide
    }
  ];

  const majorQuad = [
    {
      symbol: '♀',
      planetName: l.venusTitle,
      cycleName: l.venusCycle,
      dates: '02 Mart – 12 Nisan 2026',
      duration: '41 Gün',
      sign: 'Koç ♈ → Balık ♓',
      theme: l.venusTheme,
      guide: l.venusGuide
    },
    {
      symbol: '♂',
      planetName: l.marsTitle,
      cycleName: l.marsCycle,
      dates: '06 Aralık 2024 – 24 Şubat 2026',
      duration: '80 Gün',
      sign: 'Aslan ♌ → Yengeç ♋',
      theme: l.marsTheme,
      guide: l.marsGuide
    },
    {
      symbol: '♃',
      planetName: l.jupiterTitle,
      cycleName: l.jupiterCycle,
      dates: '11 Kasım 2026 – 11 Mart 2027',
      duration: '120 Gün',
      sign: 'Aslan ♌',
      theme: l.jupiterTheme,
      guide: l.jupiterGuide
    },
    {
      symbol: '♄',
      planetName: l.saturnTitle,
      cycleName: l.saturnCycle,
      dates: '13 Temmuz – 27 Kasım 2026',
      duration: '137 Gün',
      sign: 'Koç ♈',
      theme: l.saturnTheme,
      guide: l.saturnGuide
    }
  ];

  const renderCard = (c) => `
    <article class="retro-elite-card">
      <div class="retro-card-head">
        <div style="display:flex; align-items:center; gap:12px">
          <div class="retro-glyph-badge" aria-hidden="true">${c.symbol}</div>
          <div>
            <h3 class="retro-planet-title">${c.planetName}</h3>
            <span class="retro-cycle-tag">${c.cycleName}</span>
          </div>
        </div>
        <span class="retro-sign-pill">${c.sign}</span>
      </div>

      <div class="retro-date-row">
        <span class="retro-date-text">
          <span style="color:var(--gold)">📅</span>
          <span>${c.dates}</span>
        </span>
        <span class="retro-duration-badge">${c.duration}</span>
      </div>

      <div class="retro-phase-track" title="${l.phaseLabel}">
        <span class="retro-phase-step"></span>
        <span class="retro-phase-step is-active"></span>
        <span class="retro-phase-step is-active"></span>
        <span class="retro-phase-step"></span>
      </div>

      <p class="retro-theme-desc">${c.theme}</p>

      <div class="retro-guidance-box">
        <strong style="color:var(--gold-bright)">✦ Kozmik Pusula:</strong> ${c.guide}
      </div>
    </article>
  `;

  return `
    <!-- 1. Integrated Hero Stage: Editorial Head + Live Cosmic Retrograde Radar (Full Viewport, NOT EMPTY!) -->
    <section class="astro-hero astro-section-viewport" style="display:flex; flex-direction:column; justify-content:center; padding:clamp(32px, 5vh, 60px) 0">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ GÖRÜNÜR GERİ HAREKETLER & İÇE DÖNÜŞ DÖNEMLERİ</span>
        <h1 style="margin-bottom:12px">${t.menu.retros} ve Gölge Dönemleri</h1>
        <p class="astro-hero-lead" style="margin-bottom:28px">Gezegenlerin Dünya'dan gözlemlenen hız yavaşlaması ve sembolik içsel gözden geçirme süreçleri. Korku yerine farkındalık ve hazırlık rehberi.</p>

        <!-- Canlı Aktif Retrolar Efemeris Radarı -->
        <div style="padding:22px 28px; background:rgba(11, 15, 28, 0.85); backdrop-filter:blur(28px); border:1px solid rgba(212, 175, 55, 0.3); border-radius:20px; box-shadow:0 20px 50px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.1)">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:10px">
            <span class="astro-card-tag" style="color:#f87171; border-color:rgba(248,113,113,0.35); background:rgba(248,113,113,0.08); padding:5px 14px; border-radius:999px; font-size:11px; margin-bottom:0">
              ✦ ŞU AN GÖKYÜZÜNDE AKTİF RETROLAR (CANLI HESAPLAMA)
            </span>
            <span style="font-size:12px; color:var(--gold-bright); letter-spacing:0.04em">0.001° Efemeris Hassasiyeti</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px">
            ${snapshot.activeRetrogrades.length > 0 ? snapshot.activeRetrogrades.map(r => `
              <div style="padding:16px 18px; background:rgba(0,0,0,0.5); border-radius:14px; border:1px solid rgba(248,113,113,0.3); display:flex; flex-direction:column; gap:6px; text-align:left">
                <div style="display:flex; justify-content:space-between; align-items:center">
                  <span style="font-size:24px; color:var(--gold-bright)">${r.symbol}</span>
                  <span style="font-size:11px; color:#f87171; border:1px solid #f87171; padding:2px 8px; border-radius:999px; font-weight:600">Retrograd</span>
                </div>
                <h4 style="margin:2px 0 0 0; color:#fff; font-family:var(--font-serif); font-size:17px">${r.name}</h4>
                <p style="font-size:12.5px; color:var(--muted); margin:0">${r.sign} burcunda geri harekette</p>
                <small style="font-size:11.5px; color:var(--gold); display:block; margin-top:4px">Günlük Hız: ${r.dailySpeed}°/gün</small>
              </div>
            `).join('') : '<p style="color:var(--muted); font-size:14px; margin:8px 0; text-align:center">Şu anda geri harekette olan majör gezegen bulunmamaktadır. Gökyüzü doğrudan (direct) akışta.</p>'}
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Master Retrograde Calendar (Triad + Quad, Clean Second Viewport) -->
    <section class="astro-section astro-section-viewport" id="retro-calendar" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head" style="margin-bottom:30px">
          <span class="astro-card-tag">✦ 2026 GEZEGEN RETROLARI TAKVİMİ</span>
          <h2>Dönemler ve Arketipsel Anlamları</h2>
          <p>Korku üretmeyen, döngüsel farkındalık ve stratejik hazırlık odaklı 7 ana retrograd takvimi.</p>
        </div>

        <!-- 1. MERKÜR ÜÇLEMESİ (3 KART - SİMETRİK 3 SÜTUN) -->
        <div class="retro-group-container">
          <div class="retro-group-header">
            <h3 class="retro-group-title">
              <span style="color:var(--gold-bright)">☿</span>
              <span>${l.triadTitle}</span>
            </h3>
            <span class="retro-group-badge">${l.triadBadge}</span>
          </div>
          <div class="retro-grid-triad">
            ${mercuryTriad.map(renderCard).join('')}
          </div>
        </div>

        <!-- 2. MAJÖR DÖNÜŞÜM DÖNGÜLERİ (4 KART - SİMETRİK 4 SÜTUN / 2x2) -->
        <div class="retro-group-container">
          <div class="retro-group-header">
            <h3 class="retro-group-title">
              <span style="color:var(--gold-bright)">🪐</span>
              <span>${l.quadTitle}</span>
            </h3>
            <span class="retro-group-badge">${l.quadBadge}</span>
          </div>
          <div class="retro-grid-quad">
            ${majorQuad.map(renderCard).join('')}
          </div>
        </div>

        <div style="margin-top:44px; padding:22px; border:1px solid var(--border); border-radius:14px; font-size:12.5px; color:var(--muted); text-align:center; background:rgba(255,255,255,0.015)">
          <p style="margin:0">${ENGINE_METADATA.precision} · ${ENGINE_METADATA.disclaimer}</p>
        </div>
      </div>
    </section>
  `;
};
