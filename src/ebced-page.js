// Mythborn Abjad & Numerology Platform Page
// Haute Horlogerie Astronomical & Mathematical Symbolic Interface

const langs = {
  tr: {
    metaTitle: 'Ebced ve Numeroloji Platformu — Kadim İlim ve Pisagor Analizi',
    metaDesc: 'Büyük ve Küçük Ebced hesaplama, anne adıyla ebced, Pisagor numerolojisi, yaşam yolu ve iki kişilik sembolik uyum analizi.',
    badge: 'MYTHBORN · MATEMATİKSEL EBCED & NUMEROLOJİ MOTORU',
    title: 'Ebced ve Numeroloji Çözümleme Platformu',
    subtitle: 'İsimlerin tarihsel harf değerlerini Meşrikî ve Mağribî sistemleriyle hesaplayın; Pisagor numerolojisi, yaşam yolu ve sembolik ilişki dinamiklerini derinlemesine inceleyin.',
    pillMath: '✦ 0.001° Matematiksel Doğruluk',
    pillPrivacy: '🔒 Sıfır Veri Depolama (%100 Tarayıcı İçi)',
    pillSystems: '⚖ Meşrikî, Mağribî & Pisagor Ekolleri',
    modePersonal: 'Kişisel Analiz (Tek Kişi)',
    modeCompare: 'İki Kişilik Sembolik Karşılaştırma',
    person1Legend: '1. Kişi Bilgileri',
    person2Legend: '2. Kişi Bilgileri',
    nameLabel: 'Ad Soyad (Latin harfleriyle)',
    namePlaceholder: 'Örn. Ali Kaya, Deniz Yılmaz...',
    motherLabel: 'Anne Adı (İsteğe bağlı geleneksel hesap)',
    motherPlaceholder: 'Örn. Ayşe, Fatma...',
    dateLabel: 'Doğum Tarihi (İsteğe bağlı yaşam yolu hesabı)',
    arabicLabel: 'Arap Harfli Yazım (Öneri olarak üretilir, serbestçe düzenleyebilirsiniz)',
    arabicMotherLabel: 'Anne Adı Arap Harfli Yazım (Düzenlenebilir)',
    arabicHint: 'Türkçe isimlerin tek zorunlu Arapça yazımı yoktur. Sistem Osmanlıca/Arapça imla kurallarına göre öneri üretir; dilediğiniz gibi değiştirebilirsiniz. Ebced toplamı yalnızca bu kutuda görünen Arap harflerini esas alır.',
    configTitle: 'Hesaplama Parametreleri & Sistem Seçimi',
    systemLabel: 'Ebced Sistemi',
    systemMashriqi: 'Meşrikî (Klasik Doğu Geleneği — Standart)',
    systemMaghribi: 'Mağribî (Kuzey Afrika & Endülüs Geleneği)',
    taLabel: 'Tâ-i Merbûta (ة) Değeri',
    taHe: 'He (ه) kuralı = 5 (Yaygın gelenek)',
    taTe: 'Te (ت) kuralı = 400 (Yazılış kuralı)',
    shaddaLabel: 'Şedde (ّ) Hesabı',
    shaddaOnce: '1 × (Tek harf kabul edilir — Yaygın)',
    shaddaTwice: '2 × (Harf iki kez sayılır)',
    submitBtn: 'Ebced ve Numeroloji Analizini Başlat →',
    methodTitle: 'Tarihsel Yöntemler, Harf Değerleri ve Metodoloji',
    methodDesc: 'Ebced-i Kebîr (Büyük Ebced): 28 harfli geleneksel alfabe sırasına göre her harfe 1 ile 1000 arasında sayısal değer atanır. Meşrikî diziliminde Sin=60, Şın=300 iken Mağribî sisteminde Sin=300, Şın=1000 değerini alır. Ebced-i Sağîr (Küçük Ebced), harf değerlerinin 1-9 kök basamağına indirgenmesidir. Pisagor numerolojisinde ise Türkçe Latin harfleri 1-9 tablosuna göre toplanarak Yaşam Yolu, İfade ve Ruh Arzusu sayıları elde edilir.',
    privacyNote: 'Gizlilik ve Güvenlik Güvencesi: Girdiğiniz hiçbir isim, anne adı veya doğum tarihi Mythborn sunucularına gönderilmez ve hiçbir veri tabanında saklanmaz. Tüm matematiksel hesaplamalar cihazınızın tarayıcısında yerel olarak gerçekleştirilir.',
    disclaimer: 'Etik & Bilimsel Ayrım İhtarı: Ebced ve numeroloji tarihsel, edebi ve sembolik farkındalık araçlarıdır. Geleceği bilme, kişilerin gizli niyetlerini tespit etme, ayrılık/evlilik garantisi veya mutlak ilişki sonucu iddia etmez.'
  },
  en: {
    metaTitle: 'Abjad & Numerology Platform — Classical Letter Science & Pythagorean Analysis',
    metaDesc: 'Greater and Lesser Abjad calculation, maternal Abjad sums, Pythagorean numerology, life path numbers, and comparative symbolic analysis.',
    badge: 'MYTHBORN · MATHEMATICAL ABJAD & NUMEROLOGY ENGINE',
    title: 'Abjad & Numerology Analysis Platform',
    subtitle: 'Compute historical letter values across Mashriqi and Maghribi traditions; explore Pythagorean life path, expression numbers, and balanced relationship dynamics.',
    pillMath: '✦ Mathematical Verifiability',
    pillPrivacy: '🔒 Zero Data Storage (%100 Local Browser Execution)',
    pillSystems: '⚖ Mashriqi, Maghribi & Pythagorean Standards',
    modePersonal: 'Individual Analysis (Single Person)',
    modeCompare: 'Comparative Symbolic Harmony (Two People)',
    person1Legend: 'Person 1 Details',
    person2Legend: 'Person 2 Details',
    nameLabel: 'Full Name (Latin script)',
    namePlaceholder: 'e.g. Johnathan Smith, Sophia Miller...',
    motherLabel: "Mother's Name (Optional maternal Abjad)",
    motherPlaceholder: 'e.g. Mary, Catherine...',
    dateLabel: 'Date of Birth (Optional Life Path analysis)',
    arabicLabel: 'Arabic Spelling (Generated as editable suggestion)',
    arabicMotherLabel: "Mother's Arabic Spelling (Editable)",
    arabicHint: 'Names in non-Arabic alphabets have multiple phonetic transliterations. The suggested Arabic spelling is fully editable. The Abjad calculation accurately tallies only the Arabic glyphs present in this box.',
    configTitle: 'Calculation Parameters & System Selectors',
    systemLabel: 'Abjad System',
    systemMashriqi: 'Mashriqi (Eastern Tradition — Standard)',
    systemMaghribi: 'Maghribi (North African & Andalusian Tradition)',
    taLabel: 'Tāʾ Marbūṭa (ة) Valuation',
    taHe: 'Ha rule = 5 (Common convention)',
    taTe: 'Ta rule = 400 (Script convention)',
    shaddaLabel: 'Shadda (ّ) Policy',
    shaddaOnce: '1 × (Counted once — Standard)',
    shaddaTwice: '2 × (Counted twice)',
    submitBtn: 'Compute Abjad & Numerology Analysis →',
    methodTitle: 'Historical Methodology, Letter Tables & Constraints',
    methodDesc: 'Greater Abjad (Ebced-i Kebir) maps the 28 classical Semitic letters to values from 1 to 1000. In Mashriqi, Seen=60 and Sheen=300; in Maghribi, Seen=300 and Sheen=1000. Lesser Abjad (Ebced-i Sagir) reduces values to their single-digit roots (1-9). Pythagorean numerology calculates Expression, Soul Urge, and Life Path using 1-9 cyclic reduction with master numbers (11, 22, 33) preserved.',
    privacyNote: 'Privacy Guarantee: No personal names, maternal names, or birth dates are transmitted to external servers or logged in databases. All computation executes locally inside your web browser.',
    disclaimer: 'Ethical & Epistemic Disclaimer: Abjad and numerology are symbolic, literary, and introspective traditions. They do not predict the future, diagnose medical or legal outcomes, or detect hidden personal feelings.'
  },
  el: {
    metaTitle: 'Πλατφόρμα Αμπτζάντ & Αριθμολογίας — Ιστορική Ανάλυση Γραμμάτων & Πυθαγόρεια Συστήματα',
    metaDesc: 'Υπολογισμός Μεγάλου και Μικρού Αμπτζάντ, αριθμολογία ονόματος μητέρας, Πυθαγόρειο μονοπάτι ζωής και συμβολική σύγκριση.',
    badge: 'MYTHBORN · ΜΗΧΑΝΙΣΜΟΣ ΑΜΠΤΖΑΝΤ & ΑΡΙΘΜΟΛΟΓΙΑΣ',
    title: 'Πλατφόρμα Ανάλυσης Αμπτζάντ & Αριθμολογίας',
    subtitle: 'Υπολογίστε τις αριθμητικές τιμές των γραμμάτων σύμφωνα με τα ανατολικά (Mashriqi) και δυτικά (Maghribi) συστήματα και ανακαλύψτε τις συμβολικές διαστάσεις της Πυθαγόρειας αριθμολογίας.',
    pillMath: '✦ Μαθηματική Επαληθευσιμότητα',
    pillPrivacy: '🔒 Μηδενική Αποθήκευση Δεδομένων (%100 Τοπικά)',
    pillSystems: '⚖ Παραδόσεις Mashriqi, Maghribi & Πυθαγόρα',
    modePersonal: 'Ατομική Ανάλυση (Ένα Άτομο)',
    modeCompare: 'Συμβολική Σύγκριση Δύο Ατόμων',
    person1Legend: 'Στοιχεία 1ου Ατόμου',
    person2Legend: 'Στοιχεία 2ου Ατόμου',
    nameLabel: 'Ονοματεπώνυμο (Λατινικοί/Ελληνικοί χαρακτήρες)',
    namePlaceholder: 'π.χ. Αλέξανδρος, Ελένη...',
    motherLabel: 'Όνομα Μητέρας (Προαιρετικό)',
    motherPlaceholder: 'π.χ. Μαρία, Άννα...',
    dateLabel: 'Ημερομηνία Γέννησης (Προαιρετικό Μονοπάτι Ζωής)',
    arabicLabel: 'Αραβική Γραφή (Επεξεργάσιμη πρόταση)',
    arabicMotherLabel: 'Αραβική Γραφή Μητέρας (Επεξεργάσιμη)',
    arabicHint: 'Η αραβική γραφή παράγεται ως πρόταση και μπορεί να τροποποιηθεί ελεύθερα. Ο υπολογισμός βασίζεται αποκλειστικά στα γράμματα που εμφανίζονται στο πεδίο.',
    configTitle: 'Παράμετροι Υπολογισμού & Συστήματα',
    systemLabel: 'Σύστημα Αμπτζάντ',
    systemMashriqi: 'Mashriqi (Ανατολική Παράδοση — Πρότυπο)',
    systemMaghribi: 'Maghribi (Δυτική / Ανδαλουσιανή Παράδοση)',
    taLabel: 'Αξία Tāʾ Marbūṭa (ة)',
    taHe: 'Κανόνας Ha = 5',
    taTe: 'Κανόνας Ta = 400',
    shaddaLabel: 'Κανόνας Shadda (ّ)',
    shaddaOnce: '1 × (Μονός υπολογισμός)',
    shaddaTwice: '2 × (Διπλός υπολογισμός)',
    submitBtn: 'Υπολογισμός Αμπτζάντ & Αριθμολογίας →',
    methodTitle: 'Ιστορική Μεθοδολογία & Πηγές',
    methodDesc: 'Το Μεγάλο Αμπτζάντ αντιστοιχεί 28 σύμφωνα σε τιμές από 1 έως 1000. Το Μικρό Αμπτζάντ ανάγει τις τιμές στον μονοψήφιο πυρήνα 1-9. Η Πυθαγόρεια αριθμολογία υπολογίζει το Μονοπάτι Ζωής και τον Αριθμό Έκφρασης.',
    privacyNote: 'Διασφάλιση Απορρήτου: Κανένα προσωπικό στοιχείο δεν αποστέλλεται σε διακομιστές ούτε καταγράφεται. Όλοι οι υπολογισμοί εκτελούνται αποκλειστικά στη συσκευή σας.',
    disclaimer: 'Ηθική & Επιστημονική Σημείωση: Το Αμπτζάντ αποτελεί ιστορική και συμβολική μέθοδο στοχασμού. Δεν προβλέπει το μέλλον ούτε συναισθήματα τρίτων προσώπων.'
  },
  es: {
    metaTitle: 'Plataforma de Ábyad y Numerología — Ciencia Tradicional de Letras y Análisis Pitagórico',
    metaDesc: 'Cálculo de Ábyad Mayor y Menor, Ábyad con nombre materno, numerología pitagórica, camino de vida y compatibilidad simbólica.',
    badge: 'MYTHBORN · MOTOR MATEMÁTICO DE ÁBYAD Y NUMEROLOGÍA',
    title: 'Plataforma de Análisis de Ábyad y Numerología',
    subtitle: 'Calcule los valores numéricos históricos de nombres en los sistemas Mashriqi y Maghribi; explore el camino de vida pitagórico y las dinámicas simbólicas de relación.',
    pillMath: '✦ Verificabilidad Matemática',
    pillPrivacy: '🔒 Cero Almacenamiento de Datos (%100 Local)',
    pillSystems: '⚖ Tradiciones Mashriqi, Maghribi y Pitagórica',
    modePersonal: 'Análisis Individual (Una Persona)',
    modeCompare: 'Comparación Simbólica de Dos Personas',
    person1Legend: 'Datos de la Persona 1',
    person2Legend: 'Datos de la Persona 2',
    nameLabel: 'Nombre Completo (en caracteres latinos)',
    namePlaceholder: 'Ej. Carlos Mendoza, Lucía Morales...',
    motherLabel: 'Nombre de la Madre (Cálculo materno opcional)',
    motherPlaceholder: 'Ej. Carmen, Elena...',
    dateLabel: 'Fecha de Nacimiento (Camino de vida opcional)',
    arabicLabel: 'Escritura Árabe (Sugerencia editable)',
    arabicMotherLabel: 'Escritura Árabe de la Madre (Editable)',
    arabicHint: 'La ortografía árabe sugerida es aproximada y totalmente editable. El cálculo de Ábyad computa de forma transparente solo los caracteres árabes visibles.',
    configTitle: 'Parámetros de Cálculo y Selección de Sistema',
    systemLabel: 'Sistema de Ábyad',
    systemMashriqi: 'Mashriqi (Tradición Oriental — Estándar)',
    systemMaghribi: 'Maghribi (Tradición Norteafricana y Andalusí)',
    taLabel: 'Valor de Tāʾ Marbūṭa (ة)',
    taHe: 'Regla de Ha = 5',
    taTe: 'Regla de Ta = 400',
    shaddaLabel: 'Política de Shadda (ّ)',
    shaddaOnce: '1 × (Contada una vez)',
    shaddaTwice: '2 × (Contada dos veces)',
    submitBtn: 'Iniciar Análisis de Ábyad y Numerología →',
    methodTitle: 'Metodología Histórica, Valores de Letras y Límites',
    methodDesc: 'El Ábyad Mayor asigna a cada una de las 28 letras semíticas valores del 1 al 1000. En el sistema oriental Sin=60 y Shin=300; en el occidental Sin=300 y Shin=1000. El Ábyad Menor reduce los valores a su raíz de un solo dígito (1-9). La numerología pitagórica evalúa la Expresión y el Camino de Vida respetando los números maestros (11, 22, 33).',
    privacyNote: 'Garantía de Privacidad: Ningún dato personal o fecha de nacimiento se envía a servidores ni se almacena en bases de datos. Todo el cálculo opera de forma local en su navegador.',
    disclaimer: 'Aviso Ético: El Ábyad y la numerología son herramientas simbólicas e introspectivas. No predicen acontecimientos futuros ni determinan emociones ajenas.'
  }
};

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

export const ebcedPath=p=>/^\/(?:(?:en|gr|es)\/)?ebced(?:\/(?:uyum|compatibility|symvatotita|compatibilidad))?\/?$/.test(p);

function renderPersonBlock(id, legend, t) {
  return `
    <fieldset class="person-fieldset">
      <legend class="fieldset-legend">✦ ${esc(legend)}</legend>
      <div class="form-grid">
        <div class="form-group">
          <label for="${id}Name">${esc(t.nameLabel)} *</label>
          <input type="text" id="${id}Name" name="${id}Name" placeholder="${esc(t.namePlaceholder)}" maxlength="120" autocomplete="off" ${id === 'a' ? 'required' : ''}>
        </div>
        <div class="form-group">
          <label for="${id}Mother">${esc(t.motherLabel)}</label>
          <input type="text" id="${id}Mother" name="${id}Mother" placeholder="${esc(t.motherPlaceholder)}" maxlength="80" autocomplete="off">
        </div>
        <div class="form-group">
          <label for="${id}Date">${esc(t.dateLabel)}</label>
          <input type="date" id="${id}Date" name="${id}Date" max="2100-12-31" autocomplete="off">
        </div>
        <div class="form-group form-group-full">
          <label for="${id}Arabic">${esc(t.arabicLabel)} *</label>
          <div class="arabic-input-wrap">
            <input type="text" id="${id}Arabic" name="${id}Arabic" class="input-arabic" lang="ar" dir="rtl" maxlength="120" placeholder="عربي..." aria-describedby="${id}-arabic-hint" ${id === 'a' ? 'required' : ''}>
          </div>
          <span id="${id}-arabic-hint" class="input-hint">${esc(t.arabicHint)}</span>
        </div>
        <div class="form-group form-group-full">
          <label for="${id}MotherArabic">${esc(t.arabicMotherLabel)}</label>
          <div class="arabic-input-wrap">
            <input type="text" id="${id}MotherArabic" name="${id}MotherArabic" class="input-arabic" lang="ar" dir="rtl" maxlength="80" placeholder="اسم الأم...">
          </div>
        </div>
      </div>
    </fieldset>
  `;
}

export function ebcedPage(path, isPreview = true) {
  const isComparison = /\/(?:uyum|compatibility|symvatotita|compatibilidad)\/?$/.test(path);
  const lang = path.startsWith('/en/') ? 'en'
    : path.startsWith('/gr/') ? 'el'
    : path.startsWith('/es/') ? 'es'
    : 'tr';

  const t = langs[lang] || langs.tr;

  const personalUrls = { tr: '/ebced', en: '/en/ebced', el: '/gr/ebced', es: '/es/ebced' };
  const compareUrls = { tr: '/ebced/uyum', en: '/en/ebced/compatibility', el: '/gr/ebced/symvatotita', es: '/es/ebced/compatibilidad' };
  const currentTr = (isComparison ? compareUrls : personalUrls).tr;
  const currentEn = (isComparison ? compareUrls : personalUrls).en;
  const currentGr = (isComparison ? compareUrls : personalUrls).el;
  const currentEs = (isComparison ? compareUrls : personalUrls).es;

  const homeHref = lang === 'en' ? '/en' : lang === 'el' ? '/gr' : lang === 'es' ? '/es' : '/';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': t.title,
    'url': `https://mythborn.co${path}`,
    'description': t.metaDesc,
    'applicationCategory': 'LifestyleApplication',
    'operatingSystem': 'All',
    'inLanguage': ['tr', 'en', 'el', 'es']
  };

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="robots" content="${isPreview ? 'noindex,follow' : 'index,follow'}">
  <meta name="theme-color" content="#05070e">
  <title>${esc(isComparison ? t.modeCompare + ' | Mythborn' : t.metaTitle)}</title>
  <meta name="description" content="${esc(isComparison ? t.modeCompare + '. ' + t.metaDesc : t.metaDesc)}">
  <link rel="canonical" href="https://mythborn.co${path}">
  <link rel="alternate" hreflang="tr" href="https://mythborn.co${currentTr}">
  <link rel="alternate" hreflang="en" href="https://mythborn.co${currentEn}">
  <link rel="alternate" hreflang="el" href="https://mythborn.co${currentGr}">
  <link rel="alternate" hreflang="es" href="https://mythborn.co${currentEs}">
  <link rel="alternate" hreflang="x-default" href="https://mythborn.co${currentTr}">
  <link rel="icon" type="image/svg+xml" href="/assets/astrology/mythborn-symbol.svg">
  <script type="application/ld+json">${JSON.stringify(schemaJson)}</script>
  <style>
    :root {
      --bg: #05070e;
      --bg-radial: radial-gradient(circle at 50% -20%, #171f38 0%, #080b16 55%, #030408 100%);
      --card-bg: rgba(14, 18, 34, 0.78);
      --card-border: rgba(212, 175, 55, 0.22);
      --card-hover: rgba(212, 175, 55, 0.5);
      --gold: #d4af37;
      --gold-bright: #f3cf7a;
      --gold-dim: rgba(212, 175, 55, 0.12);
      --cream: #f8f6f0;
      --muted: #a6abbd;
      --input-bg: rgba(8, 12, 22, 0.88);
      --font-serif: "Cinzel", "Playfair Display", Georgia, "Times New Roman", serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-arabic: "Amiri", "Traditional Arabic", "Scheherazade New", serif;
      color-scheme: dark;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-radial);
      background-attachment: fixed;
      color: var(--cream);
      font-family: var(--font-sans);
      line-height: 1.6;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    .shell {
      width: min(1080px, calc(100% - 32px));
      margin: 0 auto;
      padding: 24px 0 80px;
    }
    /* Brand & Navigation Header */
    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--card-border);
      margin-bottom: 32px;
      flex-wrap: wrap;
    }
    .brand-group {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: #fff;
    }
    .brand-logo {
      width: 32px;
      height: 32px;
      filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
    }
    .brand-name {
      font-family: var(--font-serif);
      font-size: 20px;
      letter-spacing: 0.22em;
      font-weight: 600;
      color: #fff;
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .home-link {
      color: var(--gold-bright);
      font-size: 13px;
      text-decoration: none;
      padding: 6px 12px;
      border: 1px solid var(--card-border);
      border-radius: 8px;
      background: var(--gold-dim);
      transition: all 0.2s ease;
    }
    .home-link:hover {
      border-color: var(--gold);
      color: #fff;
    }
    .lang-pills {
      display: inline-flex;
      gap: 4px;
      background: rgba(255, 255, 255, 0.03);
      padding: 3px;
      border-radius: 8px;
      border: 1px solid var(--card-border);
    }
    .lang-pills a {
      color: var(--muted);
      text-decoration: none;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 6px;
      transition: all 0.2s;
    }
    .lang-pills a:hover { color: #fff; }
    .lang-pills a.active {
      color: var(--gold-bright);
      background: var(--gold-dim);
      border: 1px solid rgba(212, 175, 55, 0.3);
    }
    /* Hero section */
    .hero {
      text-align: center;
      margin-bottom: 36px;
    }
    .eyebrow {
      display: inline-block;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 12px;
    }
    h1 {
      font-family: var(--font-serif);
      font-size: clamp(28px, 4.5vw, 46px);
      line-height: 1.2;
      color: #fff;
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .lead {
      font-size: clamp(15px, 2vw, 17px);
      color: var(--muted);
      max-width: 820px;
      margin: 0 auto 24px;
      line-height: 1.65;
    }
    .telemetry-ribbon {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 16px;
    }
    .telemetry-tag {
      font-size: 12px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--card-border);
      color: var(--gold-bright);
    }
    /* Mode selector tabs */
    .mode-toggle-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      padding: 8px;
      display: flex;
      gap: 8px;
      max-width: 620px;
      margin: 0 auto 30px;
    }
    .mode-label {
      flex: 1;
      text-align: center;
      cursor: pointer;
      padding: 10px 16px;
      border-radius: 10px;
      font-size: 13.5px;
      font-weight: 600;
      color: var(--muted);
      transition: all 0.22s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .mode-label input[type="radio"] { display: none; }
    .mode-label:has(input:checked) {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(18, 24, 46, 0.85) 100%);
      color: #fff;
      border: 1px solid var(--gold);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    }
    /* Panels & Fieldsets */
    .panel {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 18px;
      padding: clamp(20px, 3.5vw, 36px);
      margin-bottom: 28px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.06);
    }
    .person-fieldset {
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 22px 20px;
      margin-bottom: 24px;
      background: rgba(255, 255, 255, 0.015);
    }
    .fieldset-legend {
      font-family: var(--font-serif);
      font-size: 18px;
      color: var(--gold-bright);
      padding: 0 10px;
      letter-spacing: 0.04em;
    }
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .form-group-full { grid-column: 1 / -1; }
    .form-group label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: var(--muted);
      margin-bottom: 6px;
      text-transform: uppercase;
    }
    input[type="text"], input[type="date"], select {
      width: 100%;
      padding: 12px 14px;
      background: var(--input-bg);
      border: 1px solid rgba(212, 175, 55, 0.28);
      border-radius: 10px;
      color: #fff;
      font-family: inherit;
      font-size: 14.5px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      transition: all 0.2s ease;
    }
    input:focus, select:focus {
      outline: none;
      border-color: var(--gold-bright);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25), inset 0 2px 4px rgba(0, 0, 0, 0.4);
      background: rgba(14, 20, 36, 0.96);
    }
    .input-arabic {
      font-family: var(--font-arabic);
      font-size: 22px !important;
      direction: rtl;
      padding: 10px 16px !important;
      color: var(--gold-bright) !important;
    }
    .input-hint {
      display: block;
      font-size: 11.5px;
      color: var(--muted);
      margin-top: 5px;
      line-height: 1.5;
    }
    /* Advanced config accordion */
    .config-accordion {
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 16px 20px;
      background: rgba(0, 0, 0, 0.35);
      margin: 20px 0;
    }
    .config-summary {
      cursor: pointer;
      font-size: 13.5px;
      font-weight: 600;
      color: var(--gold-bright);
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .config-summary::-webkit-details-marker { display: none; }
    .config-summary::after { content: '▾'; font-size: 14px; transition: transform 0.2s; }
    .config-accordion[open] .config-summary::after { transform: rotate(180deg); }
    .config-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    /* Submit button */
    .btn-submit {
      width: 100%;
      padding: 16px 24px;
      background: linear-gradient(135deg, #f5d78e 0%, #d4af37 50%, #997a26 100%);
      color: #05070e;
      border: 0;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      cursor: pointer;
      box-shadow: 0 6px 24px rgba(212, 175, 55, 0.45);
      transition: all 0.25s ease;
    }
    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 32px rgba(212, 175, 55, 0.65);
      background: linear-gradient(135deg, #fff 0%, #f5d78e 50%, #d4af37 100%);
    }
    /* Results formatting */
    .hidden { display: none !important; }
    .result-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 18px;
      padding: clamp(22px, 3.5vw, 36px);
      margin-bottom: 24px;
      box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6);
    }
    .person-summary-card {
      border-left: 4px solid var(--gold);
    }
    .card-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }
    .card-prefix {
      font-size: 11.5px;
      color: var(--gold);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
    }
    .person-title {
      font-family: var(--font-serif);
      font-size: clamp(22px, 3vw, 30px);
      color: #fff;
    }
    .mother-sub {
      font-size: 13.5px;
      color: var(--muted);
      margin-top: 2px;
    }
    .symbolic-badges {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .badge {
      font-size: 12px;
      padding: 5px 12px;
      border-radius: 999px;
      font-weight: 600;
      letter-spacing: 0.04em;
    }
    .badge-element {
      background: rgba(212, 175, 55, 0.12);
      border: 1px solid rgba(212, 175, 55, 0.35);
      color: var(--gold-bright);
    }
    .badge-zodiac {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #fff;
    }
    .arabic-display-box {
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(212, 175, 55, 0.22);
      border-radius: 12px;
      padding: 14px 20px;
      margin-bottom: 22px;
      font-family: var(--font-arabic);
      font-size: 26px;
      display: flex;
      gap: 16px;
      align-items: center;
      color: var(--gold-bright);
    }
    .arabic-mom { color: var(--muted); font-size: 20px; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 12px;
      margin-bottom: 22px;
    }
    .stat-pill {
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .highlight-pill {
      border-color: rgba(212, 175, 55, 0.45);
      background: linear-gradient(145deg, rgba(212, 175, 55, 0.12) 0%, rgba(12, 16, 32, 0.8) 100%);
    }
    .stat-label {
      font-size: 11px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 600;
    }
    .stat-val {
      font-family: var(--font-serif);
      font-size: 24px;
      color: #fff;
    }
    .stat-val .raw-total {
      font-size: 14px;
      color: var(--gold);
      font-family: var(--font-sans);
      font-weight: 400;
    }
    /* Letter Ledger Table */
    .ledger-details {
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 14px 18px;
      margin-bottom: 20px;
    }
    .ledger-summary {
      cursor: pointer;
      font-size: 13.5px;
      font-weight: 600;
      color: var(--gold-bright);
    }
    .table-responsive {
      overflow-x: auto;
      margin-top: 14px;
    }
    .ledger-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13.5px;
      text-align: left;
    }
    .ledger-table th, .ledger-table td {
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .ledger-table th {
      color: var(--muted);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .ar-cell {
      font-family: var(--font-arabic);
      font-size: 20px;
      color: var(--gold-bright);
    }
    .num-cell { font-family: monospace; font-size: 14px; }
    .gold-cell { color: var(--gold-bright); font-weight: 700; }
    .muted-cell { color: var(--muted); }
    /* Three Layer Interpretation */
    .interpretation-card {
      background: linear-gradient(160deg, rgba(16, 22, 42, 0.85) 0%, rgba(8, 10, 20, 0.95) 100%);
    }
    .interp-heading {
      font-family: var(--font-serif);
      font-size: 20px;
      color: var(--gold-bright);
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 10px;
    }
    .interp-layer {
      margin-bottom: 20px;
      padding: 16px 18px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    .layer-title {
      font-size: 12.5px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--gold);
      margin-bottom: 8px;
    }
    .layer-body {
      font-size: 14px;
      color: rgba(248, 246, 240, 0.82);
      line-height: 1.65;
    }
    .theme-subtitle {
      font-family: var(--font-serif);
      font-size: 17px;
      color: #fff;
      margin-bottom: 10px;
    }
    .theme-content p {
      font-size: 13.5px;
      color: rgba(248, 246, 240, 0.82);
      margin-bottom: 8px;
      line-height: 1.6;
    }
    .reflection-box {
      margin-top: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      background: rgba(212, 175, 55, 0.08);
      border: 1px solid rgba(212, 175, 55, 0.25);
      font-size: 13.5px;
      color: var(--cream);
    }
    .reflection-box em {
      color: var(--gold-bright);
      font-style: italic;
      display: block;
      margin-top: 4px;
    }
    /* Comparison section */
    .comparison-card {
      border: 1px solid rgba(212, 175, 55, 0.4);
      background: linear-gradient(165deg, rgba(20, 26, 52, 0.85) 0%, rgba(8, 11, 22, 0.95) 100%);
    }
    .comparison-sections {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 18px;
    }
    .comp-block {
      background: rgba(0, 0, 0, 0.35);
      border-radius: 12px;
      padding: 16px 18px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    .comp-block h4 {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--gold);
      margin-bottom: 8px;
    }
    .comp-block p {
      font-size: 14px;
      color: rgba(248, 246, 240, 0.85);
      line-height: 1.65;
    }
    .conclusion-block {
      border-color: rgba(212, 175, 55, 0.3);
      background: rgba(212, 175, 55, 0.05);
    }
    .ethical-notice-badge {
      font-size: 12px !important;
      color: var(--muted) !important;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .person-divider {
      border: 0;
      border-top: 1px dashed rgba(212, 175, 55, 0.3);
      margin: 32px 0;
    }
    .print-action-bar {
      text-align: center;
      margin: 28px 0;
    }
    .btn-print {
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      color: var(--gold-bright);
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-print:hover {
      background: rgba(212, 175, 55, 0.15);
      border-color: var(--gold);
      color: #fff;
    }
    .error-banner {
      background: rgba(220, 38, 38, 0.15);
      border: 1px solid rgba(220, 38, 38, 0.4);
      color: #fca5a5;
      padding: 14px 18px;
      border-radius: 12px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    /* Info Details */
    .info-panel summary {
      cursor: pointer;
      font-family: var(--font-serif);
      font-size: 17px;
      color: var(--gold-bright);
      padding: 4px 0;
    }
    .info-content {
      margin-top: 16px;
      font-size: 14px;
      color: var(--muted);
      line-height: 1.7;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    /* Footer */
    .footer {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid var(--card-border);
      text-align: center;
      font-size: 12.5px;
      color: var(--muted);
    }
    .footer p { margin-bottom: 8px; }
    /* Responsive */
    @media (max-width: 768px) {
      .form-grid { grid-template-columns: 1fr; }
      .mode-toggle-card { flex-direction: column; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .topbar { flex-direction: column; align-items: flex-start; gap: 14px; }
    }
    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; animation: none !important; }
    }

/* Editorial redesign: quiet typographic hierarchy and a separate two-person journey */
.shell { width:min(1020px,calc(100% - 40px)); padding: 20px 0 68px; }
.topbar { margin-bottom: 24px; padding: 8px 0 18px; flex-wrap:nowrap; }
.nav-actions { display:flex; align-items:center; gap:12px; }
.brand-name { letter-spacing:.17em; }
.hero { margin: 12px auto 28px; max-width: 760px; }
.hero h1, .hero > h1 { font-size:clamp(32px,4.2vw,54px); letter-spacing:-.025em; line-height:1.1; margin:12px 0 15px; }
.hero .lead { max-width:660px; margin-inline:auto; line-height:1.6; }
.telemetry-ribbon { margin-top:14px; }
.telemetry-tag { border:0; background:none; padding:2px 8px; color:var(--muted); }
.eyebrow { letter-spacing:.13em; font-size:10px; }
.analysis-path-nav { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; max-width:740px; margin: 0 auto 22px; }
.analysis-path { display:flex;justify-content:center;align-items:center;min-height:52px;text-align:center;color:var(--muted);font-size:14px;font-weight:600;text-decoration:none;background:rgba(255,255,255,.025);border:1px solid rgba(212,175,55,.19);border-radius:11px;padding:12px;transition:border .2s,background .2s; }
.analysis-path:hover,.analysis-path.is-current { background:rgba(212,175,55,.10);border-color:rgba(212,175,55,.62);color:var(--gold-bright); }
.panel { padding:clamp(16px,3vw,29px); box-shadow:0 10px 35px rgba(0,0,0,.26); margin-bottom:20px; }
.person-fieldset { padding:20px 22px; border-color:rgba(212,175,55,.13);background:rgba(255,255,255,.009);margin-bottom:17px; }
.form-grid { grid-template-columns: repeat(3,minmax(0,1fr));gap:14px; }
.form-group { min-width:0; }
.form-group label { font-size:11px; letter-spacing:.025em; }
.step-progress { display:flex;gap:10px;justify-content:center;align-items:center;margin:0 0 25px; }
.step-progress span { flex:1;padding:11px 8px;border-bottom:2px solid rgba(212,175,55,.19);color:var(--muted);font-size:12px;text-align:center; }
.step-progress span.is-active { border-color:var(--gold-bright);color:var(--gold-bright); }
.step-actions { display:flex;gap:12px;justify-content:flex-end;margin:8px 0 15px; }
.step-primary,.step-secondary { border-radius:9px;padding:13px 20px;border:1px solid rgba(212,175,55,.35);cursor:pointer;font-weight:600; }
.step-primary { background:linear-gradient(115deg,#f3dc9d,#b99734);color:#121017; }
.step-secondary { color:var(--cream);background:transparent; }
.ebced-language { position:relative;z-index:20; }
.ebced-language summary { display:flex; gap:9px;align-items:center;cursor:pointer;list-style:none;white-space:nowrap;background:rgba(212,175,55,.06);border:1px solid rgba(212,175,55,.28);padding:10px 13px;border-radius:9px;color:var(--gold-bright);font-size:13px; }
.ebced-language summary::-webkit-details-marker { display:none; }
.ebced-language-options { position:absolute;inset-inline-end:0;top:calc(100% + 8px);min-width:165px;padding:7px;background:#101421;border:1px solid rgba(212,175,55,.3);border-radius:12px;box-shadow:0 15px 40px #000a;display:grid;gap:2px; }
.ebced-language-options a { display:block;color:var(--cream);font-size:13px;padding:11px;border-radius:7px;text-decoration:none; }
.ebced-language-options a:hover,.ebced-language-options a[aria-current="page"] { background:rgba(212,175,55,.13); }
.hidden,[hidden] { display:none !important; }
@media(max-width:760px) { .shell {width:calc(100% - 26px);} .topbar {flex-wrap:wrap;}.brand-name {font-size:17px;}.form-grid {grid-template-columns:1fr;} .analysis-path-nav {grid-template-columns:1fr 1fr;} .analysis-path {font-size:12px;} .nav-actions {gap:7px;} .person-fieldset {padding:17px 13px;} .step-progress span{font-size:11px;} .hero h1 {font-size:clamp(29px,8vw,40px);} }
@media(max-width:390px) { .home-link {font-size:11px;padding:8px;} .ebced-language summary {font-size:12px;padding:9px;} .step-actions {flex-direction:column-reverse;} .step-actions button {width:100%;} }


    /* Result experience: refined editorial layout and clear separation of calculation methods */
    .person-summary-card { border:1px solid rgba(212,175,55,.24); background:linear-gradient(145deg,#121525,#0b0d18); padding:clamp(21px,3.8vw,44px); }
    .person-summary-card .card-head { align-items:center; }
    .person-summary-card .person-title { font-size:clamp(28px,3.8vw,43px); letter-spacing:-.018em; }
    .card-method-tag { color:var(--gold-bright);border:1px solid rgba(212,175,55,.24);border-radius:999px;padding:9px 13px;font-size:11px;white-space:nowrap;letter-spacing:.04em; }
    .person-summary-card .arabic-display-box { min-height:106px;display:flex;justify-content:center;align-items:center;gap:24px;flex-wrap:wrap;padding:18px 26px;background:linear-gradient(100deg,rgba(6,8,17,.85),rgba(19,20,30,.65));border:1px solid rgba(212,175,55,.26);margin-top:21px; }
    .person-summary-card .arabic-main { font-size:clamp(31px,3.7vw,48px);line-height:1.7;color:#ebd29a;overflow-wrap:anywhere;text-align:center; }
    .person-summary-card .arabic-mom { font-size:clamp(21px,2vw,27px);line-height:1.6;color:#d3cbdb;overflow-wrap:anywhere;text-align:center; }
    .arabic-hint { margin:7px 0 23px;color:var(--muted);font-size:11px;text-align:center; }
    .symbol-guide { display:grid;grid-template-columns:1fr 1.45fr;gap:13px;margin-bottom:23px; }
    .symbol-guide-item { padding:17px 19px;background:rgba(212,175,55,.028);border:1px solid rgba(212,175,55,.17);border-radius:11px;display:flex;flex-direction:column;gap:10px; }
    .symbol-guide-birth { background:rgba(212,175,55,.08);border-color:rgba(212,175,55,.33); }
    .symbol-guide-label { font-size:11px;letter-spacing:.04em;color:var(--muted);font-weight:600;line-height:1.45; }
    .symbol-guide-item strong { color:#e9dfc8;font-size:clamp(14px,1.3vw,17px);font-weight:600;line-height:1.4; }
    .symbol-guide-birth strong { color:var(--gold-bright); }
    .symbol-guide-separator { color:rgba(212,175,55,.55);padding:0 5px; }
    .symbol-guide-details { grid-column:1/-1; border:1px solid rgba(212,175,55,.14);border-radius:11px;background:rgba(255,255,255,.013);padding:13px 18px; }
    .symbol-guide-details summary { cursor:pointer;color:var(--gold-bright);font-weight:600;font-size:13px;line-height:1.5; }
    .symbol-guide-details summary:focus-visible { outline:2px solid var(--gold-bright);outline-offset:4px; }
    .symbol-guide-details p { color:var(--muted);line-height:1.7;font-size:13px;margin:10px 0 0; }
    .symbol-guide-details .symbol-guide-formula { color:#f0deb7;font-size:12px; }
    .symbol-guide-details .symbol-guide-caution { font-size:12px; }
    .stats-grid { grid-template-columns:repeat(4,minmax(0,1fr));gap:12px; }
    .stat-pill { min-width:0; padding:17px; background:#0b0d17;border:1px solid rgba(212,175,55,.12);border-radius:11px; }
    .stat-label { font-size:11px;line-height:1.5;letter-spacing:.02em; }
    .stat-val { font-size:clamp(24px,2.6vw,34px); }
    @media(max-width:820px) { .stats-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
    @media(max-width:560px) {
      .symbol-guide { grid-template-columns:1fr; }
      .symbol-guide-details { grid-column:auto; }
      .person-summary-card .arabic-display-box { padding:14px 10px;gap:8px; }
      .person-summary-card .arabic-main { font-size:clamp(26px,7vw,38px); }
      .card-method-tag { white-space:normal; }
    }


    /* Explanatory results: clear definitions, readable calculations, no decorative numbered cards */
    .meaning-card,.readable-summary { padding:clamp(23px,3.2vw,40px);background:linear-gradient(145deg,#111524,#0a0d16); }
    .meaning-header { max-width:740px; margin:0 0 22px; }
    .meaning-kicker,.summary-eyebrow {font-size:11px;letter-spacing:.15em;font-weight:700;color:var(--gold-bright);}
    .meaning-header h3,.readable-summary h2 {font:400 clamp(25px,3.2vw,36px)/1.22 var(--font-serif);color:#faf3e6;margin:10px 0 12px;}
    .meaning-header p {font-size:15px;line-height:1.6;color:var(--muted);}
    .meaning-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:start;}
    .meaning-row {min-width:0;background:#0b0e18;border:1px solid rgba(215,184,124,.18);border-radius:11px;overflow:hidden;}
    .meaning-row[open] {border-color:rgba(215,184,124,.45);background:#101522;}
    .meaning-row summary {min-height:66px;display:flex;align-items:center;gap:12px;padding:15px 18px;cursor:pointer;list-style:none;}
    .meaning-row summary::-webkit-details-marker {display:none;}
    .meaning-row summary:focus-visible {outline:2px solid var(--gold-bright);outline-offset:-3px;}
    .meaning-row summary>span:first-child {flex:1;font-size:13px;font-weight:600;line-height:1.5;color:#d9d7dd;}
    .meaning-row summary strong {font:26px/1 var(--font-serif);color:#ebd296;}
    .meaning-chevron {color:var(--gold-bright);font-size:19px;transition:transform .2s;}
    .meaning-row[open] .meaning-chevron {transform:rotate(180deg);}
    .meaning-answer {padding:0 18px 18px;font-size:13px;line-height:1.7;color:var(--muted);}
    .meaning-answer p {margin:9px 0 0;}
    .meaning-answer b {display:block;color:#e8d4a8;margin-bottom:2px;font-weight:600;}
    .meaning-answer strong {color:#ebd296;}
    .meaning-disclaimer {margin-top:20px;border-top:1px solid rgba(215,184,124,.15);padding-top:17px;color:var(--muted);font-size:12px;line-height:1.65;}
    .readable-summary {border-color:rgba(212,175,55,.45);background:radial-gradient(ellipse at 100% 0%,rgba(171,129,52,.13),transparent 56%),#101421;}
    .readable-summary>p {max-width:850px;font-size:15px;line-height:1.75;color:#d8d2c8;margin:11px 0;}
    .readable-summary>p strong {color:#f0d79e;}
    @media(max-width:700px){.meaning-grid{grid-template-columns:1fr}.meaning-card,.readable-summary{padding:21px 17px}.meaning-row summary{min-height:58px}.readable-summary>p{font-size:14px}}
    @media(prefers-reduced-motion:reduce){.meaning-chevron{transition:none}}

    /* Print Stylesheet */
    @media print {
      body { background: #fff !important; color: #000 !important; }
      .topbar, .mode-toggle-card, #ebced-form, .info-panel, .print-action-bar, .footer { display: none !important; }
      .panel, .result-card { background: #fff !important; border: 1px solid #ddd !important; box-shadow: none !important; color: #000 !important; }
      .person-title, .stat-val, .card-prefix { color: #000 !important; }
      .arabic-display-box { background: #f8f8f8 !important; color: #000 !important; border: 1px solid #ccc !important; }
      .ledger-table th, .ledger-table td { color: #000 !important; border-bottom: 1px solid #ddd !important; }
      .reflection-box { background: #f9f9f9 !important; border-color: #ccc !important; color: #000 !important; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <!-- Topbar -->
    <header class="topbar">
      <a href="${homeHref}" class="brand-group">
        <img src="/assets/astrology/mythborn-symbol.svg" alt="Mythborn Symbol" class="brand-logo">
        <span class="brand-name">MYTHBORN</span>
      </a>
      <div class="nav-actions">
        <a href="${homeHref}" class="home-link">← ${lang === 'en' ? 'Home' : lang === 'el' ? 'Αρχική' : lang === 'es' ? 'Inicio' : 'Ana Sayfa'}</a>
        <details class="ebced-language"><summary aria-label="Language"><span>◎</span> ${lang === 'tr' ? 'Türkçe' : lang === 'en' ? 'English' : lang === 'el' ? 'Ελληνικά' : 'Español'} <span aria-hidden="true">⌄</span></summary><nav class="ebced-language-options" aria-label="Select language"><a ${lang==='tr'?'aria-current="page"':''} href="${currentTr}">Türkçe</a><a ${lang==='en'?'aria-current="page"':''} href="${currentEn}">English</a><a ${lang==='el'?'aria-current="page"':''} href="${currentGr}">Ελληνικά</a><a ${lang==='es'?'aria-current="page"':''} href="${currentEs}">Español</a></nav></details>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <span class="eyebrow">${esc(t.badge)}</span>
      <h1>${esc((isComparison ? {tr:'İki Kişilik Ebced Uyumu',en:'Two-Person Abjad Reading',el:'Συμβολική Σύγκριση Δύο Προσώπων',es:'Comparación de Dos Personas'} : {tr:'Ebced & Numeroloji',en:'Abjad & Numerology',el:'Αμπτζάντ & Αριθμολογία',es:'Ábyad y Numerología'})[lang])}</h1>
      <p class="lead">${esc(({tr:'İsimlerin harf değerlerini hesapla, geleneksel sembolizmi keşfet ve sonuçları adım adım incele.',en:'Calculate letter values, explore traditional symbolism, and review every step.',el:'Υπολογίστε τις αριθμητικές τιμές των γραμμάτων και εξερευνήστε τις συμβολικές ερμηνείες.',es:'Calcula valores de letras y explora sus interpretaciones simbólicas.'})[lang])}</p>
      <div class="telemetry-ribbon">
        
        <span class="telemetry-tag">${esc(t.pillPrivacy)}</span>
        
      </div>
    </section>

    <nav class="analysis-path-nav" aria-label="Analysis selection">
      <a class="analysis-path ${!isComparison ? 'is-current' : ''}" href="${personalUrls[lang]}" ${!isComparison ? 'aria-current="page"' : ''}>✦ ${esc(t.modePersonal)}</a>
      <a class="analysis-path ${isComparison ? 'is-current' : ''}" href="${compareUrls[lang]}" ${isComparison ? 'aria-current="page"' : ''}>♡ ${esc(t.modeCompare)}</a>
    </nav>

    <form id="ebced-form" class="panel" novalidate data-analysis-mode="${isComparison ? 'compare' : 'personal'}">
      ${isComparison ? `<div class="step-progress" aria-label="Progress"><span data-step-marker="1" class="is-active">01 · ${esc(t.person1Legend)}</span><span data-step-marker="2">02 · ${esc(t.person2Legend)}</span></div>` : ''}
      <div id="first-person-container" class="person-step">
        ${renderPersonBlock('a', t.person1Legend, t)}
      </div>
      ${isComparison ? `<div id="second-person-container" class="person-step hidden" hidden>
        ${renderPersonBlock('b', t.person2Legend, t)}
      </div>
      <div class="step-actions"><button id="comparison-back" class="step-secondary hidden" type="button" hidden>← ${lang === 'tr' ? 'Önceki Kişi' : lang === 'es' ? 'Anterior' : lang === 'el' ? 'Πίσω' : 'Previous person'}</button>
      <button id="comparison-next" class="step-primary" type="button">${lang === 'tr' ? 'İkinci Kişiye Geç' : lang === 'es' ? 'Continuar con la segunda persona' : lang === 'el' ? 'Συνέχεια στο δεύτερο άτομο' : 'Continue to second person'} →</button></div>` : ''}
      <!-- Advanced Calculation Parameters -->
      <details class="config-accordion">
        <summary class="config-summary">
          <span>⚙ ${esc(t.configTitle)}</span>
        </summary>
        <div class="config-grid">
          <div class="form-group">
            <label for="abjadSystem">${esc(t.systemLabel)}</label>
            <select id="abjadSystem" name="abjadSystem">
              <option value="mashriqi" selected>${esc(t.systemMashriqi)}</option>
              <option value="maghribi">${esc(t.systemMaghribi)}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="taValue">${esc(t.taLabel)}</label>
            <select id="taValue" name="taValue">
              <option value="5" selected>${esc(t.taHe)}</option>
              <option value="400">${esc(t.taTe)}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="shadda">${esc(t.shaddaLabel)}</label>
            <select id="shadda" name="shadda">
              <option value="once" selected>${esc(t.shaddaOnce)}</option>
              <option value="twice">${esc(t.shaddaTwice)}</option>
            </select>
          </div>
        </div>
      </details>

      <button type="submit" class="btn-submit ${isComparison ? 'hidden' : ''}" ${isComparison ? 'hidden' : ''}>${esc(t.submitBtn)}</button>
    </form>

    <!-- Results Section -->
    <section id="result" aria-live="polite"></section>

    <!-- Methodology & Philosophical Notes -->
    <details class="panel info-panel">
      <summary>✦ ${esc(t.methodTitle)}</summary>
      <div class="info-content">
        <p>${esc(t.methodDesc)}</p>
        <p><strong>${esc(t.privacyNote)}</strong></p>
        <p><em>${esc(t.disclaimer)}</em></p>
      </div>
    </details>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2026 Mythborn. ${esc(t.privacyNote)}</p>
      <p>${esc(t.disclaimer)}</p>
    </footer>
  </main>

  <script src="/ebced.js" defer></script>
</body>
</html>`;
}
