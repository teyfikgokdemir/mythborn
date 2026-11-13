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

const EBCEd_GUIDE={
  tr:{
    label:'EBCED NEDİR?',head:'Kadim Harf İlmi: Ebced',
    explanation:'Ebced, Arap alfabesindeki harflere belirli sayısal değerler atayan tarihsel bir hesaplama geleneğidir. İsimlerin ve kelimelerin harf değerleri toplanarak sayısal karşılıkları bulunabilir. Bu yöntem tarihsel olarak edebiyat, tarih düşürme ve sembolik yorumlarda kullanılmıştır.',
    features:['İsim ve harf analizi','İlişki ve uyum analizi','Kişisel potansiyel','Sembolik yorumlar'],
    numLabel:'NUMEROLOJİ NEDİR?',
    numHead:'Sayıların Dili: Numeroloji',
    numText:'Numeroloji, isim ve doğum tarihi gibi bilgilerden elde edilen sayılara sembolik anlamlar yükleyen bir yorumlama geleneğidir. Yaşam yolu, ifade ve kişilik sayısı gibi hesaplamalar üzerinden kişisel farkındalık amacıyla kullanılabilir.',
    ctaEyebrow:'HEMEN DENEYİMLE',
    ctaPrimary:'Ebced Analizi',
    ctaPrimarySub:'İsminin sayısal değerini keşfet.',
    ctaCompare:'İki Kişilik Uyum Analizi',
    ctaCompareSub:'İki ismin sembolik uyumunu incele.',
    numericHead:'Numeroloji ile farkı nedir?',
    numeric:'Bu sayfada Ebced, Arap harflerinin değerlerini; Pisagor numerolojisi ise Latin harfleri ve doğum tarihi üzerinden sembolik sayıları hesaplar. İki yöntemin kuralları ve ortaya çıkan değerleri birbirinden farklıdır.',
    stepsHead:'Burada nasıl kullanılır?',
    steps:'İsmini gir, önerilen Arap harfli yazımı kontrol et ve hesabı başlat. İstersen anne adı ve doğum tarihini ekle. Sonuçlarda her sayı için hesaplama yöntemi ile geleneksel anlamı ayrı ayrı görebilirsin.',
    warning:'Ebced ve numeroloji sonuçları sembolik yorumlardır; bilimsel kişilik ölçümü, sağlık tavsiyesi veya kesin gelecek tahmini değildir.',
    linkPersonal:'Kişisel analizi aç',linkCompare:'İki kişiyi karşılaştır'
  },
  en:{
    label:'WHAT IS ABJAD?',head:'Ancient Letter Science: Abjad',
    explanation:'Abjad is a historical calculation tradition that assigns numerical values to Arabic letters. By summing the letter values of names and words, their numerical counterparts can be found. Historically, this method has been used in literature, chronograms, and symbolic interpretations.',
    features:['Name & letter analysis','Relationship & harmony','Personal potential','Symbolic interpretations'],
    numLabel:'WHAT IS NUMEROLOGY?',
    numHead:'The Language of Numbers: Numerology',
    numText:'Numerology is an interpretive tradition that attaches symbolic meanings to numbers derived from names and birth dates. Calculations such as life path, expression, and personality numbers can be explored for personal reflection.',
    ctaEyebrow:'EXPERIENCE NOW',
    ctaPrimary:'Abjad Analysis',
    ctaPrimarySub:'Discover the numerical value of your name.',
    ctaCompare:'Two-Person Compatibility',
    ctaCompareSub:'Explore the symbolic harmony of two names.',
    numericHead:'How is numerology different?',
    numeric:'Abjad uses Arabic letter values, while the Pythagorean numerology used here calculates symbolic numbers from Latin-script names and dates of birth. They are distinct systems with different rules.',
    stepsHead:'How does this tool work?',
    steps:'Enter a name, review its proposed Arabic spelling, then calculate. Mother’s name and date of birth are optional. Each result separates the calculation from its traditional interpretation.',
    warning:'These are symbolic interpretations, not scientifically validated personality tests, health advice or reliable predictions.',
    linkPersonal:'Open personal analysis',linkCompare:'Compare two people'
  },
  el:{
    label:'ΤΙ ΕΙΝΑΙ ΤΟ ΑΜΠΤΖΑΝΤ;',head:'Αρχαία Επιστήμη Γραμμάτων: Αμπτζάντ',
    explanation:'Το Αμπτζάντ είναι μια ιστορική παράδοση υπολογισμού που αποδίδει αριθμητικές τιμές στα αραβικά γράμματα. Αθροίζοντας τις τιμές των γραμμάτων ονομάτων και λέξεων προκύπτουν αριθμητικά ισοδύναμα που χρησιμοποιήθηκαν στη λογοτεχνία και στη συμβολική ερμηνεία.',
    features:['Ανάλυση ονόματος & γραμμάτων','Σχέση & αρμονία','Προσωπικό δυναμικό','Συμβολικές ερμηνείες'],
    numLabel:'ΤΙ ΕΙΝΑΙ Η ΑΡΙΘΜΟΛΟΓΙΑ;',
    numHead:'Η Γλώσσα των Αριθμών: Αριθμολογία',
    numText:'Η αριθμολογία είναι μια ερμηνευτική παράδοση που αποδίδει συμβολικές σημασίες σε αριθμούς από ονόματα και ημερομηνίες γέννησης. Υπολογισμοί όπως το μονοπάτι ζωής και ο αριθμός έκφρασης χρησιμοποιούνται για προσωπική αυτογνωσία.',
    ctaEyebrow:'ΔΟΚΙΜΑΣΕ ΤΩΡΑ',
    ctaPrimary:'Ανάλυση Αμπτζάντ',
    ctaPrimarySub:'Ανακάλυψε την αριθμητική αξία του ονόματός σου.',
    ctaCompare:'Σύγκριση Δύο Ατόμων',
    ctaCompareSub:'Εξερεύνησε τη συμβολική αρμονία δύο ονομάτων.',
    numericHead:'Πώς διαφέρει από την αριθμολογία;',
    numeric:'Το Αμπτζάντ βασίζεται σε αραβικά γράμματα, ενώ η Πυθαγόρεια αριθμολογία εδώ βασίζεται σε λατινικούς χαρακτήρες και ημερομηνίες γέννησης. Πρόκειται για διαφορετικές μεθόδους.',
    stepsHead:'Πώς λειτουργεί;',
    steps:'Πληκτρολόγησε το όνομα και έλεγξε την προτεινόμενη αραβική γραφή. Το όνομα μητέρας και η ημερομηνία γέννησης είναι προαιρετικά. Κάθε αποτέλεσμα εξηγεί τον υπολογισμό και τον συμβολισμό.',
    warning:'Οι ερμηνείες είναι συμβολικές, όχι επιστημονική αξιολόγηση ή αξιόπιστη πρόβλεψη.',
    linkPersonal:'Ατομική ανάλυση',linkCompare:'Σύγκριση δύο ατόμων'
  },
  es:{
    label:'¿QUÉ ES EL ÁBYAD?',head:'Ciencia Antigua de las Letras: Ábyad',
    explanation:'El Ábyad es una tradición histórica de cálculo que asigna valores numéricos a las letras árabes. Al sumar los valores de las letras de nombres y palabras se obtienen correspondencias numéricas usadas históricamente en literatura, cronogramas e interpretaciones simbólicas.',
    features:['Análisis de nombre y letras','Relación y armonía','Potencial personal','Interpretaciones simbólicas'],
    numLabel:'¿QUÉ ES LA NUMEROLOGÍA?',
    numHead:'El Lenguaje de los Números: Numerología',
    numText:'La numerología es una tradición interpretativa que asigna significados simbólicos a los números obtenidos de nombres y fechas de nacimiento. Cálculos como el camino de vida y la expresión sirven para la reflexión personal.',
    ctaEyebrow:'EXPERIMENTA AHORA',
    ctaPrimary:'Análisis Ábyad',
    ctaPrimarySub:'Descubre el valor numérico de tu nombre.',
    ctaCompare:'Compatibilidad de Dos Personas',
    ctaCompareSub:'Explora la armonía simbólica de dos nombres.',
    numericHead:'¿En qué se diferencia de la numerología?',
    numeric:'El Ábyad utiliza letras árabes; la numerología pitagórica de esta herramienta emplea letras latinas y fechas de nacimiento. Son métodos distintos.',
    stepsHead:'¿Cómo se utiliza?',
    steps:'Escribe un nombre, revisa su escritura árabe sugerida y calcula. El nombre materno y la fecha de nacimiento son opcionales. Cada resultado explica el cálculo y su interpretación simbólica.',
    warning:'Las interpretaciones son simbólicas, no pruebas de personalidad, consejos médicos ni predicciones fiables.',
    linkPersonal:'Análisis individual',linkCompare:'Comparar dos personas'
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
  const navPrefix = lang === 'tr' ? '' : lang === 'el' ? '/gr' : `/${lang}`;
  const navRoutes = {
    natal: `${navPrefix}${lang === 'tr' ? '/dogum-haritasi' : lang === 'en' ? '/birth-chart' : lang === 'el' ? '/genethlios-chartis' : '/carta-natal'}`,
    ebced: personalUrls[lang],
    ebcedCompare: compareUrls[lang],
    zodiac: `${navPrefix}${lang === 'tr' ? '/burclar' : lang === 'en' ? '/zodiac-signs' : lang === 'el' ? '/zodia' : '/signos-del-zodiaco'}`,
    calendar: `${navPrefix}${lang === 'tr' ? '/gokyuzu-takvimi' : lang === 'en' ? '/sky-calendar' : lang === 'el' ? '/imerologio-ouranou' : '/calendario-celeste'}`,
    horoscopes: `${navPrefix}${lang === 'tr' ? '/burc-yorumlari' : lang === 'en' ? '/horoscopes' : lang === 'el' ? '/provlepseis' : '/horoscopos'}`,
    transits: `${navPrefix}${lang === 'tr' ? '/canli-transitler' : lang === 'en' ? '/live-transits' : lang === 'el' ? '/zontanes-dielefseis' : '/transitos-en-vivo'}`,
    retros: `${navPrefix}${lang === 'tr' ? '/gezegen-retrolari' : lang === 'en' ? '/planetary-retrogrades' : lang === 'el' ? '/anadromoi-planites' : '/retrogrados-planetarios'}`,
    synastry: `${navPrefix}${lang === 'tr' ? '/sinastri' : lang === 'en' ? '/synastry' : lang === 'el' ? '/synastria' : '/sinastria'}`,
    glossary: `${navPrefix}${lang === 'tr' ? '/astroloji-sozlugu' : lang === 'en' ? '/astrology-glossary' : lang === 'el' ? '/lexiko-astrologias' : '/glosario-astrologico'}`,
    learning: `${navPrefix}${lang === 'tr' ? '/ogrenme-merkezi' : lang === 'en' ? '/learning-center' : lang === 'el' ? '/kentro-mathisis' : '/centro-de-aprendizaje'}`,
    approach: `${navPrefix}${lang === 'tr' ? '/yontem-ve-etik' : lang === 'en' ? '/method-and-ethics' : lang === 'el' ? '/methodos-kai-ithiki' : '/metodo-y-etica'}`
  };
  const navCopy = {
    tr: { home: 'Ana Sayfa', natal: 'Doğum Haritası', ebced: 'Ebced & Numeroloji', zodiac: '12 Burç Rehberi', calendar: 'Gökyüzü Takvimi', tools: 'Keşif & Araçlar', cta: 'Ücretsiz Haritanı Çıkar', horoscopes: 'Burç Yorumları', transits: 'Canlı Transitler', retros: 'Gezegen Retroları', synastry: 'Sinastri & Uyum', glossary: 'Astroloji Sözlüğü', learning: 'Öğrenme Merkezi', approach: 'Yöntem ve Etik', compare: 'İki Kişilik Ebced Uyumu', menu: 'Menü' },
    en: { home: 'Home', natal: 'Birth Chart', ebced: 'Abjad & Numerology', zodiac: '12 Zodiac Signs', calendar: 'Sky Calendar', tools: 'Explore & Tools', cta: 'Free Birth Chart', horoscopes: 'Horoscopes', transits: 'Live Transits', retros: 'Retrogrades', synastry: 'Synastry & Harmony', glossary: 'Astrology Glossary', learning: 'Learning Center', approach: 'Method & Ethics', compare: 'Two-Person Abjad', menu: 'Menu' },
    el: { home: 'Αρχική', natal: 'Γενέθλιος Χάρτης', ebced: 'Αμπτζάντ & Αριθμολογία', zodiac: 'Οδηγός 12 Ζωδίων', calendar: 'Ουράνιο Ημερολόγιο', tools: 'Εργαλεία', cta: 'Δωρεάν Χάρτης', horoscopes: 'Προβλέψεις', transits: 'Ζωντανές Διελεύσεις', retros: 'Ανάδρομοι Πλανήτες', synastry: 'Συναστρία', glossary: 'Λεξικό Αστρολογίας', learning: 'Κέντρο Μάθησης', approach: 'Μέθοδος & Ηθική', compare: 'Σύγκριση Αμπτζάντ', menu: 'Μενού' },
    es: { home: 'Inicio', natal: 'Carta Natal', ebced: 'Ábyad y Numerología', zodiac: '12 Signos', calendar: 'Calendario Celeste', tools: 'Explorar', cta: 'Carta Natal Gratis', horoscopes: 'Horóscopos', transits: 'Tránsitos en Vivo', retros: 'Retrógrados', synastry: 'Sinastría', glossary: 'Glosario Astrológico', learning: 'Centro de Aprendizaje', approach: 'Método y Ética', compare: 'Comparación Ábyad', menu: 'Menú' }
  }[lang];
  const g = EBCEd_GUIDE[lang];

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
    html { overflow-x: clip; max-width: 100%; }
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
      width: min(1320px, calc(100% - 32px));
      margin: 0 auto;
      padding: 0 0 80px;
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


    /* Consent UI injected by the existing analytics/privacy pipeline.
       Presentation only: no changes to consent storage, tracking or button actions. */
    .consent-dialog {
      position:fixed !important;inset:auto 18px 20px auto !important;
      width:min(570px,calc(100vw - 36px)) !important;max-height:calc(100dvh - 36px) !important;
      overflow-y:auto !important;box-sizing:border-box;z-index:99999 !important;
      margin:0 !important;padding:0 !important;background:#10131e !important;
      border:1px solid rgba(215,184,124,.4) !important;border-radius:17px !important;
      box-shadow:0 24px 85px rgba(0,0,0,.74),0 0 42px rgba(194,151,76,.08) !important;
      color:#f6f1e9 !important; font-family:system-ui,-apple-system,Segoe UI,sans-serif;
    }
    .consent-dialog .consent-panel {padding:24px !important;display:grid !important;gap:18px !important;align-items:start !important;background:none !important;}
    .consent-dialog .consent-copy {min-width:0 !important;}
    .consent-dialog .consent-copy strong {display:block;color:#eed49c !important;font:400 23px/1.25 Georgia,serif !important;letter-spacing:0 !important;margin-bottom:9px !important;}
    .consent-dialog .consent-copy p {font-size:13px !important;line-height:1.7 !important;margin:0 !important;color:#cecbd4 !important;}
    .consent-dialog .consent-copy a {color:#e9cf90 !important;text-decoration:underline !important;text-underline-offset:3px !important;}
    .consent-dialog .consent-actions {display:flex !important;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:10px !important;}
    .consent-dialog .consent-actions button {appearance:none;min-width:120px;min-height:43px;padding:10px 19px !important;margin:0 !important;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px !important;font-weight:600 !important;line-height:1.2 !important;border-radius:9px !important;}
    .consent-dialog [data-consent-reject] {background:transparent !important;border:1px solid rgba(215,184,124,.4) !important;color:#f2e1bb !important;}
    .consent-dialog [data-consent-accept] {background:linear-gradient(110deg,#f1d693,#be963f) !important;border:1px solid #dab566 !important;color:#11121a !important;}
    .consent-dialog button:focus-visible,.consent-dialog a:focus-visible {outline:2px solid #ffe8a9 !important;outline-offset:3px !important;}
    @media(max-width:600px){
      .consent-dialog {inset:auto 12px 12px !important;width:calc(100vw - 24px) !important;max-height:50dvh !important;border-radius:14px !important;}
      .consent-dialog .consent-panel {padding:18px !important;gap:14px !important;}
      .consent-dialog .consent-actions {display:grid !important;grid-template-columns:1fr 1fr;}
      .consent-dialog .consent-actions button {width:100% !important;min-width:0 !important;}
    }


/* Wider editorial header, single-line introduction on wide desktop */
@media(min-width:1180px){
 .shell{width:min(1320px,calc(100% - 48px))}
 .hero{max-width:1320px;margin:0 auto}
 .hero .lead{max-width:none;width:100%;font-size:clamp(14px,1.08vw,16.5px);white-space:nowrap;line-height:1.55}
 .analysis-path-nav,#ebced-form,#result,.info-panel,.footer,.ebced-guide{max-width:1080px;margin-left:auto;margin-right:auto}
}
@media(max-width:1179px){.hero .lead{white-space:normal}}

/* Approved Header & Navigation */
.ebced-header{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:74px;padding:12px 0;border-bottom:1px solid rgba(212,175,55,.16);position:relative;z-index:70}
.ebced-nav{display:flex;align-items:center;gap:clamp(14px,1.6vw,26px)}
.ebced-nav>a,.ebced-nav-drop summary{position:relative;color:#c9cad6;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:10px 2px;transition:color .2s;list-style:none;cursor:pointer;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.ebced-nav-drop summary::-webkit-details-marker{display:none}
.ebced-nav>a:hover,.ebced-nav>a[aria-current="page"],.ebced-nav-drop summary:hover{color:#f5deb0}
.ebced-nav>a[aria-current="page"]::after{content:'';position:absolute;left:0;right:0;bottom:0;height:2px;background:linear-gradient(90deg,transparent,#e6c16d,transparent);box-shadow:0 0 12px rgba(230,193,109,.65)}
.ebced-nav-drop{position:relative}
.ebced-nav-drop-menu{position:absolute;top:calc(100% + 10px);left:0;min-width:230px;padding:8px;background:rgba(10,13,22,.98);border:1px solid rgba(212,175,55,.28);border-radius:12px;box-shadow:0 22px 60px rgba(0,0,0,.78);display:grid;gap:2px;z-index:80}
.ebced-nav-drop-menu a{display:block;padding:9px 12px;border-radius:8px;color:#dad8df;text-decoration:none;font-size:13px;letter-spacing:.01em;transition:background .18s,color .18s}
.ebced-nav-drop-menu a:hover{background:rgba(212,175,55,.12);color:#f7dfaa}
.ebced-header-right{display:flex;align-items:center;gap:10px;flex-shrink:0}
.ebced-header-cta{display:inline-flex;align-items:center;gap:7px;padding:9px 16px;border-radius:999px;border:1px solid rgba(212,175,55,.42);background:rgba(212,175,55,.07);color:#f2dca9;font-size:12px;font-weight:600;text-decoration:none;white-space:nowrap;transition:border-color .2s,background .2s,transform .2s}
.ebced-header-cta:hover{border-color:#e8c468;background:rgba(212,175,55,.15);transform:translateY(-1px)}

.ebced-language{position:relative;isolation:isolate;z-index:60}
.ebced-language summary{display:inline-flex;align-items:center;gap:7px;min-height:38px;padding:6px 13px;border-radius:999px;background:linear-gradient(140deg,rgba(222,181,107,.1),rgba(12,15,24,.95));border:1px solid rgba(225,188,117,.42);box-shadow:inset 0 1px rgba(255,255,255,.06);color:#f0dba7;font-size:12px;font-weight:650;letter-spacing:.04em;cursor:pointer;list-style:none}
.ebced-language summary::-webkit-details-marker{display:none}
.ebced-language summary:hover,.ebced-language[open] summary{border-color:rgba(243,205,125,.78);background:rgba(229,190,111,.14)}
.ebced-language summary:focus-visible,.ebced-language-options a:focus-visible{outline:2px solid #f3cf7a;outline-offset:3px}
.ebced-language-globe{height:16px;width:16px;flex:none;color:#d9b86c}
.ebced-language-code{letter-spacing:.09em;font-size:11px;font-weight:700}
.ebced-language-full{display:none}
.ebced-language-chevron{font-size:13px;color:#d0b57d;transition:transform .2s}
.ebced-language[open] .ebced-language-chevron{transform:rotate(180deg)}
.ebced-language-options{position:absolute;inset-inline-end:0;top:calc(100% + 10px);min-width:195px;padding:7px;background:rgba(13,16,26,.99);border:1px solid rgba(226,189,120,.39);border-radius:13px;box-shadow:0 22px 65px #000b;display:grid;gap:3px;z-index:90}
.ebced-language-options a{display:flex;align-items:center;gap:14px;color:#e6e0d7;font-size:13px;padding:10px 12px;border-radius:8px;text-decoration:none}
.ebced-language-options a span{width:24px;font-size:10px;font-weight:750;color:#deb870;letter-spacing:.07em}
.ebced-language-options a:hover,.ebced-language-options a[aria-current="page"]{background:rgba(213,173,104,.13);color:#ffe2a4}

.ebced-mobile-menu{display:none;position:relative}
.ebced-mobile-menu summary{display:inline-flex;align-items:center;justify-content:center;width:40px;height:38px;border-radius:10px;border:1px solid rgba(212,175,55,.35);background:rgba(14,18,30,.9);color:#f0dba7;cursor:pointer;list-style:none}
.ebced-mobile-menu summary::-webkit-details-marker{display:none}
.ebced-mobile-drawer{position:absolute;right:0;top:calc(100% + 10px);width:min(300px,calc(100vw - 32px));padding:12px;background:rgba(9,12,20,.99);border:1px solid rgba(212,175,55,.32);border-radius:14px;box-shadow:0 24px 60px rgba(0,0,0,.85);display:grid;gap:4px;z-index:95}
.ebced-mobile-drawer a{display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-radius:8px;color:#e7e4dc;text-decoration:none;font-size:13.5px}
.ebced-mobile-drawer a[aria-current="page"],.ebced-mobile-drawer a:hover{background:rgba(212,175,55,.12);color:#f3cf7a}
@media(max-width:1060px){.ebced-nav,.ebced-header-cta{display:none}.ebced-mobile-menu{display:block}}

/* Approved Inner Hero (Section 4) */
.ebced-illustrated-hero{position:relative;isolation:isolate;overflow:hidden;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(320px,.92fr);align-items:center;gap:24px;min-height:260px;padding:28px 0 32px;border-bottom:1px solid rgba(212,175,55,.15);text-align:left;background:#060913}
.ebced-hero-copy{position:relative;z-index:2;min-width:0}
.ebced-breadcrumb{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:#9ea4b8;margin-bottom:14px}
.ebced-breadcrumb a{display:inline-flex;align-items:center;gap:6px;color:#c9b489;text-decoration:none;transition:color .18s}
.ebced-breadcrumb a:hover{color:#f3cf7a}
.ebced-breadcrumb span[aria-current="page"]{color:#e6e2d8}
.ebced-illustrated-hero .eyebrow{display:block;font-size:10.5px;letter-spacing:.2em;color:#d6b05c;margin-bottom:8px;text-transform:uppercase}
.ebced-illustrated-hero h1{font-family:var(--font-serif);font-size:clamp(34px,4vw,52px);font-weight:500;line-height:1.1;letter-spacing:.01em;color:#faf4e8;margin:0 0 14px}
.ebced-lead-row{display:flex;align-items:center;gap:14px}
.ebced-lead-rule{width:28px;height:1px;background:#d4af37;flex-shrink:0}
.ebced-illustrated-hero .lead{color:#d3d5df;margin:0}
.ebced-hero-art{position:relative;margin:0;height:250px;border-radius:12px;overflow:hidden}
.ebced-hero-art img{width:100%;height:100%;object-fit:cover;object-position:55% 48%;display:block}
.ebced-hero-art::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#060913 0%,rgba(6,9,19,.55) 18%,transparent 48%),linear-gradient(180deg,rgba(6,9,19,.25) 0%,transparent 22%,transparent 78%,rgba(6,9,19,.45) 100%);pointer-events:none}

/* Approved Section 5: Ebced Nedir? Two-Column Layout */
.ebced-what{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(360px,.98fr);gap:clamp(28px,4vw,54px);align-items:center;padding:42px 0;border-bottom:1px solid rgba(212,175,55,.14)}
.ebced-what-copy{min-width:0}
.ebced-what-copy .eyebrow{display:block;font-size:11px;letter-spacing:.2em;color:#d6b05c;margin-bottom:8px;text-transform:uppercase}
.ebced-what-copy h2{font-family:var(--font-serif);font-size:clamp(28px,3.1vw,40px);font-weight:500;line-height:1.18;color:#f7f0e2;margin:0 0 16px}
.ebced-what-copy p{font-size:15px;line-height:1.78;color:#c7cad6;margin:0 0 28px;max-width:58ch}
.ebced-features-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(212,175,55,.14);padding-top:22px}
.ebced-feature-item{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:4px 10px}
.ebced-feature-item+.ebced-feature-item{border-left:1px solid rgba(212,175,55,.14)}
.ebced-feature-icon{width:28px;height:28px;color:#e4be6c;flex-shrink:0}
.ebced-feature-item span{font-size:12.5px;line-height:1.35;color:#e9e4d9;font-weight:500}
.ebced-guide-art{margin:0;min-width:0;position:relative;overflow:hidden;border-radius:10px}
.ebced-guide-art img{width:100%;height:auto;aspect-ratio:16/9.2;display:block;object-fit:cover;object-position:center}
.ebced-guide-art::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,9,19,.55) 0%,transparent 18%,transparent 88%,rgba(6,9,19,.35) 100%),linear-gradient(180deg,rgba(6,9,19,.2) 0%,transparent 18%,transparent 82%,rgba(6,9,19,.35) 100%);pointer-events:none}

/* Approved Section 6: Numeroloji Nedir? Horizontal Layout */
.ebced-numerology{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(340px,.82fr);gap:clamp(26px,3.5vw,48px);align-items:center;padding:38px 0;margin-bottom:34px;border-bottom:1px solid rgba(212,175,55,.14)}
.ebced-numerology-left{display:grid;grid-template-columns:168px minmax(0,1fr);gap:24px;align-items:center;min-width:0}
.ebced-numerology-art{margin:0;width:168px;height:168px;border-radius:50%;overflow:hidden;position:relative}
.ebced-numerology-art img{width:100%;height:100%;object-fit:cover;display:block;mask-image:radial-gradient(circle,#000 48%,transparent 75%);-webkit-mask-image:radial-gradient(circle,#000 48%,transparent 75%)}
.ebced-numerology-copy .eyebrow{display:block;font-size:11px;letter-spacing:.2em;color:#d6b05c;margin-bottom:6px;text-transform:uppercase}
.ebced-numerology-copy h2{font-family:var(--font-serif);font-size:clamp(26px,2.7vw,34px);font-weight:500;line-height:1.18;color:#f7f0e2;margin:0 0 12px}
.ebced-numerology-copy p{font-size:14.5px;line-height:1.72;color:#c5c8d4;margin:0}
.ebced-numerology-cta{border-left:1px solid rgba(212,175,55,.16);padding-left:clamp(20px,3vw,36px);min-width:0}
.ebced-numerology-cta .eyebrow{display:block;font-size:11px;letter-spacing:.2em;color:#d6b05c;margin-bottom:14px;text-transform:uppercase}
.ebced-cta-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.ebced-cta-card{position:relative;overflow:hidden;display:flex;align-items:flex-start;gap:12px;padding:16px 18px;border-radius:12px;text-decoration:none;transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease,background .22s ease}
.ebced-cta-card svg{width:20px;height:20px;flex-shrink:0;margin-top:2px}
.ebced-cta-card-body{display:grid;gap:4px;min-width:0}
.ebced-cta-card-body strong{font-size:15px;font-weight:650;line-height:1.25}
.ebced-cta-card-body span{font-size:12.5px;line-height:1.4;opacity:.9}
.ebced-cta-primary{background:linear-gradient(125deg,#eccb78,#c69a3d);border:1px solid #eccb78;color:#11131a;box-shadow:0 8px 28px rgba(212,175,55,.18)}
.ebced-cta-primary:hover{transform:translateY(-2px);box-shadow:0 12px 34px rgba(212,175,55,.28)}
.ebced-cta-secondary{background:linear-gradient(145deg,rgba(18,22,36,.92),rgba(10,13,22,.96));border:1px solid rgba(212,175,55,.32);color:#f3ebd8}
.ebced-cta-secondary svg{color:#e2bd6b}
.ebced-cta-secondary:hover{transform:translateY(-2px);border-color:rgba(243,207,122,.72);background:rgba(212,175,55,.09)}

/* Secondary Guide & Calculator spacing */
.ebced-guide{margin:34px auto 28px;padding:clamp(22px,3vw,38px);background:linear-gradient(135deg,rgba(20,24,38,.96),rgba(10,13,22,.92));border:1px solid rgba(221,180,104,.23);border-radius:17px}
.ebced-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:25px;margin:0 0 22px;padding:0 0 22px;border-bottom:1px solid rgba(221,180,104,.15)}
.ebced-guide-grid article{min-width:0}
.ebced-guide-grid article+article{border-left:1px solid rgba(221,180,104,.15);padding-left:24px}
.ebced-guide-grid h3{font:400 21px/1.25 Georgia,serif;color:#e9d19a;margin:0 0 9px}
.ebced-guide-grid p,.ebced-guide-tail p{font-size:14px;color:#b9bbc6;line-height:1.8}
.ebced-guide-tail{display:flex;justify-content:space-between;gap:24px;align-items:center}
.ebced-guide-tail p{font-size:12px;max-width:640px}
.ebced-guide-links{display:flex;gap:15px;flex-wrap:wrap;flex-shrink:0}
.ebced-guide-links a{color:#e8c683;font-size:12px;text-underline-offset:5px}
.ebced-numerology-story{position:relative;isolation:isolate;overflow:hidden}
.ebced-numerology-story::before{content:'';position:absolute;inset:0;z-index:-1;opacity:.08;background:url('/images/Mythborn_02_Altin_Kutsal_Geometri.webp') center 47%/cover no-repeat;pointer-events:none;mask-image:linear-gradient(90deg,transparent 5%,#000 100%)}

@media(max-width:1024px){
 .shell{width:min(100%,calc(100% - 28px));max-width:100%}
 .ebced-illustrated-hero{grid-template-columns:minmax(0,1fr);gap:20px;padding:22px 0 28px}
 .ebced-hero-art{height:240px;width:100%}
 .ebced-hero-art::after{background:linear-gradient(180deg,rgba(6,9,19,.35) 0%,transparent 30%,transparent 75%,rgba(6,9,19,.5) 100%)}
 .ebced-what{grid-template-columns:minmax(0,1fr);gap:26px;padding:32px 0}
 .ebced-numerology{grid-template-columns:minmax(0,1fr);gap:28px;padding:30px 0}
 .ebced-numerology-cta{border-left:0;border-top:1px solid rgba(212,175,55,.16);padding-left:0;padding-top:24px}
}
@media(max-width:850px){
 .ebced-cta-grid{grid-template-columns:minmax(0,1fr)}
 .ebced-guide-grid{grid-template-columns:minmax(0,1fr);gap:22px}
 .ebced-guide-grid article+article{border:0;padding:0}
 .ebced-guide-tail{flex-direction:column;align-items:flex-start;gap:14px}
 .ebced-guide-links{flex-shrink:1}
}
@media(max-width:640px){
 .ebced-features-row{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
 .ebced-feature-item+.ebced-feature-item{border-left:0}
 .ebced-numerology-left{grid-template-columns:minmax(0,1fr);text-align:left;gap:16px}
 .ebced-numerology-art{width:136px;height:136px}
 .ebced-hero-art{height:205px}
 .ebced-lead-rule{display:none}
 .ebced-header .brand-name{font-size:16px;letter-spacing:.16em}
}
@media(prefers-reduced-motion:reduce){.ebced-language-chevron,.ebced-cta-card,.ebced-header-cta{transition:none}.ebced-cta-card:hover,.ebced-header-cta:hover{transform:none}}

    /* Print Stylesheet */
    @media print {
      body { background: #fff !important; color: #000 !important; }
      .ebced-header, .ebced-illustrated-hero, .ebced-what, .ebced-numerology, .analysis-path-nav, #ebced-form, .info-panel, .print-action-bar, .footer { display: none !important; }
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
    <!-- Approved Header -->
    <header class="ebced-header">
      <a href="${homeHref}" class="brand-group">
        <img src="/assets/astrology/mythborn-symbol.svg" alt="Mythborn Symbol" class="brand-logo">
        <span class="brand-name">MYTHBORN</span>
      </a>
      <nav class="ebced-nav" aria-label="Primary Navigation">
        <a href="${navRoutes.natal}">${esc(navCopy.natal)}</a>
        <a href="${navRoutes.ebced}" aria-current="page">${esc(navCopy.ebced)}</a>
        <a href="${navRoutes.zodiac}">${esc(navCopy.zodiac)}</a>
        <a href="${navRoutes.calendar}">${esc(navCopy.calendar)}</a>
        <details class="ebced-nav-drop">
          <summary>${esc(navCopy.tools)} <span aria-hidden="true">▾</span></summary>
          <div class="ebced-nav-drop-menu">
            <a href="${navRoutes.ebcedCompare}">✦ ${esc(navCopy.compare)}</a>
            <a href="${navRoutes.horoscopes}">✦ ${esc(navCopy.horoscopes)}</a>
            <a href="${navRoutes.transits}">✦ ${esc(navCopy.transits)}</a>
            <a href="${navRoutes.retros}">✦ ${esc(navCopy.retros)}</a>
            <a href="${navRoutes.synastry}">✦ ${esc(navCopy.synastry)}</a>
            <a href="${navRoutes.glossary}">✦ ${esc(navCopy.glossary)}</a>
            <a href="${navRoutes.learning}">✦ ${esc(navCopy.learning)}</a>
            <a href="${navRoutes.approach}">✦ ${esc(navCopy.approach)}</a>
          </div>
        </details>
      </nav>
      <div class="ebced-header-right">
        <a href="${navRoutes.natal}" class="ebced-header-cta">${esc(navCopy.cta)} →</a>
        <details class="ebced-language"><summary aria-label="${lang === 'tr' ? 'Dili değiştir' : lang === 'el' ? 'Επιλογή γλώσσας' : lang === 'es' ? 'Elegir idioma' : 'Change language'}"><svg class="ebced-language-globe" aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M4 12h16M12 4c-5 4-5 12 0 16M12 4c5 4 5 12 0 16" stroke="currentColor" stroke-width="1.2"/></svg><span class="ebced-language-code">${lang === 'el' ? 'EL' : lang.toUpperCase()}</span><span class="ebced-language-full">${lang === 'tr' ? 'Türkçe' : lang === 'en' ? 'English' : lang === 'el' ? 'Ελληνικά' : 'Español'}</span><span class="ebced-language-chevron" aria-hidden="true">⌄</span></summary><nav class="ebced-language-options" aria-label="Languages"><a ${lang==='tr'?'aria-current="page"':''} href="${currentTr}"><span>TR</span>Türkçe</a><a ${lang==='en'?'aria-current="page"':''} href="${currentEn}"><span>EN</span>English</a><a ${lang==='el'?'aria-current="page"':''} href="${currentGr}"><span>EL</span>Ελληνικά</a><a ${lang==='es'?'aria-current="page"':''} href="${currentEs}"><span>ES</span>Español</a></nav></details>
        <details class="ebced-mobile-menu">
          <summary aria-label="${esc(navCopy.menu)}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></summary>
          <nav class="ebced-mobile-drawer" aria-label="Mobile Navigation">
            <a href="${homeHref}"><span>${esc(navCopy.home)}</span><span>→</span></a>
            <a href="${navRoutes.natal}"><span>${esc(navCopy.natal)}</span><span>→</span></a>
            <a href="${navRoutes.ebced}" aria-current="page"><span>${esc(navCopy.ebced)}</span><span>→</span></a>
            <a href="${navRoutes.ebcedCompare}"><span>${esc(navCopy.compare)}</span><span>→</span></a>
            <a href="${navRoutes.zodiac}"><span>${esc(navCopy.zodiac)}</span><span>→</span></a>
            <a href="${navRoutes.calendar}"><span>${esc(navCopy.calendar)}</span><span>→</span></a>
            <a href="${navRoutes.horoscopes}"><span>${esc(navCopy.horoscopes)}</span><span>→</span></a>
            <a href="${navRoutes.synastry}"><span>${esc(navCopy.synastry)}</span><span>→</span></a>
            <a href="${navRoutes.approach}"><span>${esc(navCopy.approach)}</span><span>→</span></a>
          </nav>
        </details>
      </div>
    </header>

    <!-- Section 4: Approved Inner Hero -->
    <section class="hero ebced-illustrated-hero">
      <div class="ebced-hero-copy">
        <nav class="ebced-breadcrumb" aria-label="Breadcrumb">
          <a href="${homeHref}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg><span>${esc(navCopy.home)}</span></a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${esc(navCopy.ebced)}</span>
        </nav>
        <span class="eyebrow">${esc(t.badge)}</span>
        <h1>${esc((isComparison ? {tr:'İki Kişilik Ebced Uyumu',en:'Two-Person Abjad Reading',el:'Συμβολική Σύγκριση Δύο Προσώπων',es:'Comparación de Dos Personas'} : {tr:'Ebced & Numeroloji',en:'Abjad & Numerology',el:'Αμπτζάντ & Αριθμολογία',es:'Ábyad y Numerología'})[lang])}</h1>
        <div class="ebced-lead-row">
          <span class="ebced-lead-rule" aria-hidden="true"></span>
          <p class="lead">${esc(({tr:'İsimlerin harf ve sayı değerlerini hesapla, sembolik anlamlarını keşfet ve sonuçları adım adım incele.',en:'Calculate the letter and number values of names, explore their symbolic meanings, and review every step.',el:'Υπολογίστε τις αριθμητικές τιμές των ονομάτων, εξερευνήστε τη συμβολική τους σημασία και δείτε κάθε βήμα.',es:'Calcula los valores de letras y números de los nombres, explora su simbolismo y revisa cada paso.'})[lang])}</p>
        </div>
      </div>
      <figure class="ebced-hero-art">
        <img src="/images/Mythborn_04_Isikli_Kitap_Hero.webp" width="1792" height="1024" decoding="async" alt="${esc(({tr:'Işıklı kadim kitap, pirinç usturlap ve astronomik gök küresini gösteren sahne',en:'Illuminated antique manuscript, brass astrolabe and armillary sphere',el:'Φωτισμένο αρχαίο βιβλίο, ορειχάλκινος αστρολάβος και σφαίρα',es:'Libro antiguo iluminado, astrolabio de latón y esfera armilar'})[lang])}">
      </figure>
    </section>

    <!-- Section 5: Ebced Nedir? Two-Column Editorial Section -->
    <section class="ebced-what" aria-labelledby="ebced-guide-heading">
      <div class="ebced-what-copy">
        <span class="eyebrow">${esc(g.label)}</span>
        <h2 id="ebced-guide-heading">${esc(g.head)}</h2>
        <p>${esc(g.explanation)}</p>
        <div class="ebced-features-row">
          <div class="ebced-feature-item">
            <svg class="ebced-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"/></svg>
            <span>${esc(g.features[0])}</span>
          </div>
          <div class="ebced-feature-item">
            <svg class="ebced-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.3c2.6.5 4.5 2.7 4.5 5.7"/></svg>
            <span>${esc(g.features[1])}</span>
          </div>
          <div class="ebced-feature-item">
            <svg class="ebced-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 4c2.5 3 2.5 6.5 0 9.5C9.5 10.5 9.5 7 12 4z"/><path d="M12 13.5c3.5-1.5 7-.5 8.5 2-3 2.5-6.5 2-8.5-2z"/><path d="M12 13.5c-3.5-1.5-7-.5-8.5 2 3 2.5 6.5 2 8.5-2z"/><path d="M4 19h16"/></svg>
            <span>${esc(g.features[2])}</span>
          </div>
          <div class="ebced-feature-item">
            <svg class="ebced-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H12v17H4.5A2.5 2.5 0 0 0 2 22V5.5z"/><path d="M22 5.5A2.5 2.5 0 0 0 19.5 3H12v17h7.5A2.5 2.5 0 0 1 22 22V5.5z"/></svg>
            <span>${esc(g.features[3])}</span>
          </div>
        </div>
      </div>
      <figure class="ebced-guide-art">
        <img src="/images/Mythborn_05_Ebced_Harf_Tablosu.webp" width="1792" height="1024" loading="lazy" decoding="async" alt="${esc(({tr:'Ebced harf tablosu, eski kitaplar ve altın feneri gösteren özgün sahne',en:'Original scene of an Abjad letter chart, antique books and a golden lantern',el:'Πρωτότυπη σκηνή με πίνακα γραμμάτων Αμπτζάντ και παλιά βιβλία',es:'Escena original de una tabla de letras Ábyad y libros antiguos'})[lang])}">
      </figure>
    </section>

    <!-- Section 6: Numeroloji Nedir? Horizontal Section -->
    <section class="ebced-numerology" aria-labelledby="ebced-numerology-heading">
      <div class="ebced-numerology-left">
        <figure class="ebced-numerology-art">
          <img src="/images/Mythborn_02_Altin_Kutsal_Geometri.webp" width="1024" height="1024" loading="lazy" decoding="async" alt="${esc(({tr:'Altın kutsal geometri ve yaşam çiçeği sembolü',en:'Golden sacred geometry flower of life pattern',el:'Χρυσή ιερή γεωμετρία',es:'Geometría sagrada dorada'})[lang])}">
        </figure>
        <div class="ebced-numerology-copy">
          <span class="eyebrow">${esc(g.numLabel)}</span>
          <h2 id="ebced-numerology-heading">${esc(g.numHead)}</h2>
          <p>${esc(g.numText)}</p>
        </div>
      </div>
      <div class="ebced-numerology-cta">
        <span class="eyebrow">${esc(g.ctaEyebrow)}</span>
        <div class="ebced-cta-grid">
          <a href="${isComparison ? personalUrls[lang] : '#ebced-form'}" class="ebced-cta-card ebced-cta-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/></svg>
            <span class="ebced-cta-card-body">
              <strong>${esc(g.ctaPrimary)}</strong>
              <span>${esc(g.ctaPrimarySub)} →</span>
            </span>
          </a>
          <a href="${isComparison ? '#ebced-form' : compareUrls[lang]}" class="ebced-cta-card ebced-cta-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.3c2.6.5 4.5 2.7 4.5 5.7"/></svg>
            <span class="ebced-cta-card-body">
              <strong>${esc(g.ctaCompare)}</strong>
              <span>${esc(g.ctaCompareSub)} →</span>
            </span>
          </a>
        </div>
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

    <!-- Secondary Methodological Guide & FAQ -->
    <section class="ebced-guide" aria-label="${esc(g.numericHead)}">
      <div class="ebced-guide-grid">
        <article class="ebced-numerology-story"><h3>${esc(g.numericHead)}</h3><p>${esc(g.numeric)}</p></article>
        <article><h3>${esc(g.stepsHead)}</h3><p>${esc(g.steps)}</p></article>
      </div>
      <div class="ebced-guide-tail"><p>${esc(g.warning)}</p><div class="ebced-guide-links"><a href="${personalUrls[lang]}">${esc(g.linkPersonal)} →</a><a href="${compareUrls[lang]}">${esc(g.linkCompare)} ↗</a></div></div>
    </section>

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
