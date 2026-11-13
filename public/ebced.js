(()=>{
'use strict';

const form = document.querySelector('#ebced-form');
const out = document.querySelector('#result');
const modePersonal = document.querySelector('#mode-personal');
const modeCompare = document.querySelector('#mode-compare');
const secondBox = document.querySelector('#second-person-container');

// Core Abjad numerical values (Ebced-i Kebîr / Mashriqi Baseline)
const values={
  ا: 1, أ: 1, إ: 1, آ: 1, ٱ: 1,
  ب: 2, ج: 3, د: 4, ه: 5, ة: 5,
  و: 6, ز: 7, ح: 8, ط: 9,
  ي: 10, ى: 10, ی: 10, ئ: 10,
  ك: 20, ک: 20, گ: 20, ڭ: 20,
  ل: 30, م: 40, ن: 50,
  س: 60, ع: 70, ف: 80, ص: 90,
  ق: 100, ر: 200, ش: 300, ت: 400,
  ث: 500, خ: 600, ذ: 700, ض: 800,
  ظ: 900, غ: 1000,
  پ: 2, چ: 3, ژ: 7, ڤ: 80,
  ؤ: 6, ء: 0
};

// Rich dictionary of Turkish, Ottoman and Arabic personal names
const special={
  'teyfik': 'توفيق', 'tevfik': 'توفيق',
  'gökdemir': 'گوكدمير', 'gokdemir': 'گوكدمير',
  'gülten': 'گولتن', 'gulten': 'گولتن',
  'cansu': 'جانسو',
  'gür': 'گور', 'gur': 'گور',
  'emine': 'امينه',
  'mehmet': 'محمد', 'muhammed': 'محمد',
  'ahmet': 'احمد', 'ahmed': 'احمد',
  'ali': 'علي',
  'ayşe': 'عائشه', 'ayse': 'عائشه',
  'fatma': 'فاطمه', 'fadime': 'فاطمه',
  'zeynep:': 'زينب', 'zeynep': 'زينب',
  'mustafa': 'مصطفى',
  'hasan': 'حسن',
  'hüseyin': 'حسين', 'huseyin': 'حسين',
  'ibrahim': 'ابراهيم',
  'hatice': 'خديجه',
  'elif': 'الف',
  'can': 'جان',
  'cem': 'جم',
  'murat': 'مرad',
  'burak': 'براق',
  'deniz': 'دنيز',
  'ece': 'اجه',
  'seda': 'صدا',
  'yasemin': 'ياسمين',
  'selin': 'سلين',
  'kerem': 'كرم',
  'sinan': 'سنان',
  'ömer': 'عمر', 'omer': 'عمر',
  'osman': 'عثمان',
  'kemal': 'كمال',
  'yusuf': 'يوسف',
  'süleyman': 'سليمان', 'suleyman': 'سليمان',
  'meryem': 'مريم',
  'esra': 'اسراء',
  'büşra': 'بشرى', 'busra': 'بشرى',
  'kübra': 'كبرى', 'kubra': 'كبرى',
  'zehra': 'زهراء',
  'betül': 'بتول', 'betul': 'بتول',
  'merve': 'مروه',
  'gamze': 'غمزه',
  'duygu': 'دويغو',
  'yağmur': 'يغمور', 'yagmur': 'يغمور',
  'barış': 'باريش', 'baris': 'باريش',
  'hakan': 'خاقان',
  'kaan': 'قاغان',
  'serkan': 'سرقان',
  'oğuz': 'اوغوز', 'oguz': 'اوغوز',
  'alper': 'آلبر',
  'demir': 'دمير',
  'kaya': 'قايا',
  'yıldız': 'ييلديز', 'yildiz': 'ييلديز',
  'güneş': 'كويش', 'gunes': 'كويش',
  'ateş': 'آتش', 'ates': 'آتش'
};

const letters = {
  b: 'ب', c: 'ج', ç: 'چ', d: 'د', f: 'ف', g: 'گ', ğ: 'غ', h: 'ه',
  j: 'ژ', k: 'ك', l: 'ل', m: 'م', n: 'ن', p: 'پ', r: 'ر', s: 'س',
  ş: 'ش', t: 'ت', v: 'و', y: 'ي', z: 'ز'
};

const normalizeTr = s => (s || '')
  .toLocaleLowerCase('tr-TR')
  .trim()
  .replace(/\s+/g, ' ');

// Arabic transliteration suggestion with word-boundary awareness
function suggested(name) {
  if (!name) return '';
  const clean = normalizeTr(name);
  if (!clean) return '';
  return clean.split(' ').map(word => {
    if (special[word]) return special[word];
    const chars = [...word];
    let res = '';
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      if (i === 0) {
        if (ch === 'a' || ch === 'e') res += 'ا';
        else if (ch === 'ı' || ch === 'i') res += 'اي';
        else if (ch === 'o' || ch === 'ö' || ch === 'u' || ch === 'ü') res += 'او';
        else res += (letters[ch] || '');
      } else {
        if (ch === 'a') res += (i === chars.length - 1 ? 'ا' : 'ا');
        else if (ch === 'e') res += (i === chars.length - 1 ? 'ه' : '');
        else if (ch === 'ı' || ch === 'i') res += 'ي';
        else if (ch === 'o' || ch === 'ö' || ch === 'u' || ch === 'ü') res += 'و';
        else res += (letters[ch] || '');
      }
    }
    return res;
  }).join(' ');
}

// Attach auto-transliteration helpers to input pairs
function bindPair(latinId, arabicId) {
  const latin = document.getElementById(latinId);
  const arabic = document.getElementById(arabicId);
  if (!latin || !arabic) return;
  let prevAuto = suggested(latin.value);
  latin.addEventListener('input', () => {
    const nextAuto = suggested(latin.value);
    if (!arabic.value || arabic.value === prevAuto) {
      arabic.value = nextAuto;
    }
    prevAuto = nextAuto;
  });
}
bindPair('aName', 'aArabic');
bindPair('aMother', 'aMotherArabic');
bindPair('bName', 'bArabic');
bindPair('bMother', 'bMotherArabic');

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

// Single-digit reduction with optional master numbers (11, 22, 33) retention
function reduce(n, preserveMasters = false) {
  if (!n || n <= 0) return 0;
  let val = Number(n);
  while (val > 9) {
    if (preserveMasters && (val === 11 || val === 22 || val === 33)) {
      return val;
    }
    val = String(val).split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return val;
}

// Küçük Ebced / Ebced-i Sağîr: Digital root of standard Abjad letter value
function smallAbjadVal(v) {
  if (!v || v <= 0) return 0;
  return ((v - 1) % 9) + 1;
}

// Pythagorean letter values
const PYTHAGOREAN = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

const VOWEL_SET = new Set(['A', 'E', 'I', 'O', 'U']);

function normalizeToAscii(str) {
  return (str || '')
    .toUpperCase()
    .replace(/İ/g, 'I')
    .replace(/ı/g, 'I')
    .replace(/Ç/g, 'C')
    .replace(/Ğ/g, 'G')
    .replace(/Ö/g, 'O')
    .replace(/Ş/g, 'S')
    .replace(/Ü/g, 'U')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z]/g, '');
}

// Complete Pythagorean Numerology module
function calculateNumerology(name, birthDate) {
  const clean = normalizeToAscii(name);
  const lettersArray = [...clean];
  
  let totalExpression = 0;
  let totalSoulUrge = 0;
  let totalPersonality = 0;

  for (const ch of lettersArray) {
    const val = PYTHAGOREAN[ch] || 0;
    totalExpression += val;
    if (VOWEL_SET.has(ch)) {
      totalSoulUrge += val;
    } else {
      totalPersonality += val;
    }
  }

  let lifePath = null;
  let birthdayNumber = null;
  let personalYear = null;
  let personalMonth = null;
  let personalDay = null;

  if (birthDate && /^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    const [yStr, mStr, dStr] = birthDate.split('-');
    const y = parseInt(yStr, 10);
    const m = parseInt(mStr, 10);
    const d = parseInt(dStr, 10);

    const redD = reduce(d, true);
    const redM = reduce(m, true);
    const redY = reduce(String(y).split('').reduce((a, c) => a + Number(c), 0), true);

    birthdayNumber = reduce(d, true);
    lifePath = reduce(redD + redM + redY, true);

    // Current date cycles
    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth() + 1;
    const curDay = now.getDate();

    const redCurYear = reduce(String(curYear).split('').reduce((a, c) => a + Number(c), 0), false);
    personalYear = reduce(reduce(d, false) + reduce(m, false) + redCurYear, true);
    personalMonth = reduce(reduce(personalYear, false) + curMonth, false);
    personalDay = reduce(personalMonth + curDay, false);
  }

  return {
    expression: totalExpression,
    expressionRoot: reduce(totalExpression, true),
    soulUrge: totalSoulUrge,
    soulUrgeRoot: reduce(totalSoulUrge, true),
    personality: totalPersonality,
    personalityRoot: reduce(totalPersonality, true),
    lifePath,
    birthdayNumber,
    personalYear,
    personalMonth,
    personalDay
  };
}

// Master Abjad routine
function abjad(s, options = {}) {
  const smallAbjadVal = v => (v > 0 ? ((v - 1) % 9) + 1 : 0);
  const maghribi = options.system === 'maghribi';
  const table = { ...values };
  if (maghribi) {
    Object.assign(table, { س: 300, ش: 1000, ص: 60, ض: 90, ظ: 800, غ: 900 });
  }
  table['ة'] = options.ta === 400 ? 400 : 5;
  table['ؤ'] = 6;
  table['ئ'] = 10;
  table['ٱ'] = 1;
  table['ی'] = 10;
  table['ء'] = 0;

  const parts = [];
  const ignored = [];
  const norm = (s || '').normalize('NFKC');

  let running = 0;
  let runningSmall = 0;

  for (const c of [...norm]) {
    if (c === 'ّ' && options.shadda === 'twice' && parts.length) {
      const prev = parts[parts.length - 1];
      running += prev.value;
      runningSmall += prev.small;
      parts.push({
        letter: prev.letter + 'ّ',
        value: prev.value,
        small: prev.small,
        running,
        runningSmall
      });
      continue;
    }
    if (Object.hasOwn(table, c)) {
      if (table[c] > 0) {
        const val = table[c];
        const sm = smallAbjadVal(val);
        running += val;
        runningSmall += sm;
        parts.push({
          letter: c,
          value: val,
          small: sm,
          running,
          runningSmall
        });
      }
      continue;
    }
    if (!/[\s\u064B-\u065F\u0670\u0640.,،؛!?؟()\[\]0-9]/u.test(c)) {
      ignored.push(c);
    }
  }

  const total = parts.reduce((acc, p) => acc + p.value, 0);
  const totalSmall = parts.reduce((acc, p) => acc + p.small, 0);

  return { parts, ignored, total, totalSmall };
}

// Parse single person form data
function person(id, options) {
  const getVal = name => (document.getElementById(id + name) || {}).value || '';
  const name = getVal('Name').trim();
  const mother = getVal('Mother').trim();
  const arabic = getVal('Arabic').trim();
  const motherArabic = getVal('MotherArabic').trim();
  const date = getVal('Date');

  if (!name || !arabic) {
    throw Error('Ad soyad ve Arap harfli yazım gereklidir. / Name and Arabic spelling are required.');
  }
  if ((mother && !motherArabic) || (!mother && motherArabic)) {
    throw Error('Anne adı girildiğinde Arap harfli karşılığı da doldurulmalıdır. / Fill both mother name fields.');
  }
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)))) {
    throw Error('Geçerli bir doğum tarihi seçin (YYYY-AA-GG). / Enter a valid date of birth.');
  }

  const a = abjad(arabic, options);
  const m = abjad(motherArabic, options);

  if (!a.parts.length) {
    throw Error('Arap harfli yazımda geçerli bir Ebced harfi bulunamadı. / No valid Arabic letters found.');
  }

  const numerology = calculateNumerology(name, date);

  // Traditional Astrology & Elemental Correspondence (mod 12 and mod 4)
  const zodiacIndex = ((a.total - 1) % 12) + 1;
  const elementIndex = ((a.total - 1) % 4) + 1;

  const maternalZodiac = m.parts.length ? (((a.total + m.total - 1) % 12) + 1) : null;
  const maternalElement = m.parts.length ? (((a.total + m.total - 1) % 4) + 1) : null;

  return {
    name,
    mother,
    arabic,
    motherArabic,
    date,
    a,
    m,
    full: a.total + m.total,
    fullSmall: a.totalSmall + m.totalSmall,
    numerology,
    zodiacIndex,
    elementIndex,
    maternalZodiac,
    maternalElement
  };
}

// Multilingual translations and interpretation tables
const I18N = {
  tr: {
    personalSummary: 'Kişisel Sonuç Özeti',
    abjadKebir: 'Büyük Ebced (Ebced-i Kebîr)',
    abjadSagir: 'Küçük Ebced (Ebced-i Sağîr)',
    withMother: 'Anne Adıyla Birlikte',
    expressionNum: 'İfade / Kader Sayısı',
    lifePathNum: 'Yaşam Yolu Sayısı',
    soulUrgeNum: 'Ruh Arzusu (Sesliler)',
    personalityNum: 'Kişilik (Sessizler)',
    birthdayNum: 'Doğum Günü Sayısı',
    personalYearNum: 'Kişisel Yıl (2026)',
    letterLedger: 'Harf Harf Muhasebe ve Ara Toplamlar',
    char: 'Harf',
    val: 'Değer',
    smallVal: 'Küçük Değer',
    cumulative: 'Ara Toplam',
    uncounted: 'Hesaba dahil edilmeyen karakterler',
    numerologyTitle: 'Pisagor Numerolojisi Analizi',
    threeLayerTitle: 'Üç Katmanlı Anlatım Motoru',
    layerA: 'A. Matematiksel Sonuç',
    layerB: 'B. Geleneksel Sembolik Arketip',
    layerC: 'C. Modern Numerolojik Perspektif',
    comparisonTitle: 'İki Kişilik Sembolik Karşılaştırma ve Denge Analizi',
    combinedAbjad: 'Birleşik Ebced Toplamı',
    combinedReduction: 'Birleşik İndirgeme Kökü',
    combinedMother: 'Anne Adlarıyla Birleşik',
    sharedThemes: 'Ortak Sembolik Rezonanslar',
    divergentThemes: 'Farklılaşan Alanlar ve Öğrenme',
    strengths: 'Birbirini Besleyen Güçlü Yönler',
    caution: 'Denge ve Dikkat Gerektiren Eşikler',
    communication: 'İlişkide İletişim ve Denge Önerileri',
    neutralConclusion: 'Genel Tarafsız Değerlendirme',
    ethicalDisclaimer: 'Bu sembolik bir tefekkür aracıdır; gelecek tahmini, ayrılık/bağlılık garantisi ya da başka birinin zihnini okuma iddiası taşımaz.',
    printBtn: '✦ Bu Raporu Yazdır / PDF Kaydet',
    elementNames: { 1: 'Ateş (Nârî)', 2: 'Toprak (Türâbî)', 3: 'Hava (Hevâî)', 4: 'Su (Mâî)' },
    elementDesc: {
      1: 'İrade, inisiyatif, coşku ve eyleme geçme kapasitesi.',
      2: 'Somut temel, sabır, güven ve istikrar arayışı.',
      3: 'İletişim, zihinsel merak, bağlantı kurma ve akıl.',
      4: 'Sezgi, derin empati, içsel algı ve duygusal zenginlik.'
    },
    zodiacNames: {
      1: 'Koç (Hamel)', 2: 'Boğa (Sevr)', 3: 'İkizler (Cevzâ)', 4: 'Yengeç (Seretân)',
      5: 'Aslan (Esed)', 6: 'Başak (Sünbüle)', 7: 'Terazi (Mîzân)', 8: 'Akrep (Akreb)',
      9: 'Yay (Kavs)', 10: 'Oğlak (Cedy)', 11: 'Kova (Delv)', 12: 'Balık (Hût)'
    }
  },
  en: {
    personalSummary: 'Personal Summary Overview',
    abjadKebir: 'Greater Abjad (Ebced-i Kebîr)',
    abjadSagir: 'Lesser Abjad (Ebced-i Sağîr)',
    withMother: 'Total with Maternal Name',
    expressionNum: 'Expression / Destiny',
    lifePathNum: 'Life Path Number',
    soulUrgeNum: 'Soul Urge (Vowels)',
    personalityNum: 'Personality (Consonants)',
    birthdayNum: 'Birthday Number',
    personalYearNum: 'Personal Year (2026)',
    letterLedger: 'Letter Ledger & Cumulative Totals',
    char: 'Letter',
    val: 'Value',
    smallVal: 'Lesser Value',
    cumulative: 'Subtotal',
    uncounted: 'Uncounted characters',
    numerologyTitle: 'Pythagorean Numerology Breakdown',
    threeLayerTitle: 'Three-Layer Interpretive Framework',
    layerA: 'A. Mathematical Calculation',
    layerB: 'B. Traditional Symbolic Archetype',
    layerC: 'C. Modern Numerological Perspective',
    comparisonTitle: 'Comparative Symbolic Harmony Analysis',
    combinedAbjad: 'Combined Abjad Sum',
    combinedReduction: 'Combined Root Reduction',
    combinedMother: 'Combined with Maternal Names',
    sharedThemes: 'Shared Symbolic Resonances',
    divergentThemes: 'Divergent Themes & Growth Areas',
    strengths: 'Mutually Reinforcing Strengths',
    caution: 'Aspects Requiring Conscious Balance',
    communication: 'Communication & Equilibrium Guidance',
    neutralConclusion: 'Balanced Objective Evaluation',
    ethicalDisclaimer: 'This is a symbolic reflection tool. It does not predict future events, relationship permanence, or detect undisclosed personal emotions.',
    printBtn: '✦ Print / Save PDF Report',
    elementNames: { 1: 'Fire', 2: 'Earth', 3: 'Air', 4: 'Water' },
    elementDesc: {
      1: 'Initiative, willpower, dynamism, and courage.',
      2: 'Stability, patient realism, and tangible grounding.',
      3: 'Intellectual curiosity, social clarity, and communication.',
      4: 'Deep intuition, emotional receptivity, and empathy.'
    },
    zodiacNames: {
      1: 'Aries', 2: 'Taurus', 3: 'Gemini', 4: 'Cancer',
      5: 'Leo', 6: 'Virgo', 7: 'Libra', 8: 'Scorpio',
      9: 'Sagittarius', 10: 'Capricorn', 11: 'Aquarius', 12: 'Pisces'
    }
  },
  el: {
    personalSummary: 'Σύνοψη Αποτελεσμάτων',
    abjadKebir: 'Μεγάλο Αμπτζάντ (Kebîr)',
    abjadSagir: 'Μικρό Αμπτζάντ (Sağîr)',
    withMother: 'Σύνολο με Όνομα Μητέρας',
    expressionNum: 'Αριθμός Έκφρασης / Πεπρωμένου',
    lifePathNum: 'Αριθμός Μονοπατιού Ζωής',
    soulUrgeNum: 'Επιθυμία Ψυχής (Φωνήεντα)',
    personalityNum: 'Προσωπικότητα (Σύμφωνα)',
    birthdayNum: 'Αριθμός Γενεθλίων',
    personalYearNum: 'Προσωπικό Έτος (2026)',
    letterLedger: 'Αναλυτική Κατανομή Γραμμάτων',
    char: 'Γράμμα',
    val: 'Τιμή',
    smallVal: 'Μικρή Τιμή',
    cumulative: 'Μερικό Σύνολο',
    uncounted: 'Χαρακτήρες εκτός υπολογισμού',
    numerologyTitle: 'Πυθαγόρεια Αριθμολογία',
    threeLayerTitle: 'Τριεπίπεδη Ερμηνευτική Προσέγγιση',
    layerA: 'Α. Μαθηματικό Αποτέλεσμα',
    layerB: 'Β. Παραδοσιακό Συμβολικό Αρχέτυπο',
    layerC: 'Γ. Σύγχρονη Αριθμολογική Προοπτική',
    comparisonTitle: 'Συγκριτική Συμβολική Ανάλυση Δύο Ατόμων',
    combinedAbjad: 'Συνδυασμένο Αμπτζάντ',
    combinedReduction: 'Συνδυασμένη Αναγωγή',
    combinedMother: 'Σύνολο με Ονόματα Μητέρων',
    sharedThemes: 'Κοινοί Συμβολικοί Συντονισμοί',
    divergentThemes: 'Περιοχές Διαφοροποίησης',
    strengths: 'Ισχυρά Σημεία Αλληλοϋποστήριξης',
    caution: 'Σημεία Προσοχής και Ισορροπίας',
    communication: 'Συμβουλές Επικοινωνίας',
    neutralConclusion: 'Αντικειμενική Αξιολόγηση',
    ethicalDisclaimer: 'Συμβολικό εργαλείο στοχασμού. Δεν προβλέπει το μέλλον ούτε συναισθήματα τρίτων.',
    printBtn: '✦ Εκτύπωση / Αποθήκευση PDF',
    elementNames: { 1: 'Φωτιά', 2: 'Γη', 3: 'Αέρας', 4: 'Νερό' },
    elementDesc: {
      1: 'Δράση, πρωτοβουλία, δυναμισμός και σθένος.',
      2: 'Σταθερότητα, ρεαλισμός και ασφάλεια.',
      3: 'Επικοινωνία, διανοητική διαύγεια και διάλογος.',
      4: 'Διαίσθηση, ενσυναίσθηση και συναισθηματικό βάθος.'
    },
    zodiacNames: {
      1: 'Κριός', 2: 'Ταύρος', 3: 'Δίδυμοι', 4: 'Καρκίνος',
      5: 'Λέων', 6: 'Παρθένος', 7: 'Ζυγός', 8: 'Σκορπιός',
      9: 'Τοξότης', 10: 'Αιγόκερως', 11: 'Υδροχόος', 12: 'Ιχθύες'
    }
  },
  es: {
    personalSummary: 'Resumen de Resultados',
    abjadKebir: 'Ábyad Mayor (Kebîr)',
    abjadSagir: 'Ábyad Menor (Sağîr)',
    withMother: 'Total con Nombre Materno',
    expressionNum: 'Número de Expresión / Destino',
    lifePathNum: 'Número de Camino de Vida',
    soulUrgeNum: 'Deseo del Alma (Vocales)',
    personalityNum: 'Personalidad (Consonantes)',
    birthdayNum: 'Número de Día Natal',
    personalYearNum: 'Año Personal (2026)',
    letterLedger: 'Desglose Letra por Letra y Subtotales',
    char: 'Letra',
    val: 'Valor',
    smallVal: 'Valor Reducido',
    cumulative: 'Subtotal',
    uncounted: 'Caracteres no computados',
    numerologyTitle: 'Numerología Pitagórica',
    threeLayerTitle: 'Estructura Interpretativa en Tres Niveles',
    layerA: 'A. Resultado Matemático',
    layerB: 'B. Arquetipo Simbólico Tradicional',
    layerC: 'C. Perspectiva Numerológica Moderna',
    comparisonTitle: 'Análisis Comparativo Simbólico de Dos Personas',
    combinedAbjad: 'Suma Combinada de Ábyad',
    combinedReduction: 'Raíz de Reducción Combinada',
    combinedMother: 'Combinado con Nombres Maternos',
    sharedThemes: 'Resonancias Simbólicas Compartidas',
    divergentThemes: 'Áreas de Diferenciación y Aprendizaje',
    strengths: 'Fortalezas Mutuas',
    caution: 'Aspectos que Requieren Equilibrio',
    communication: 'Pautas de Comunicación y Diálogo',
    neutralConclusion: 'Evaluación Objetiva y Equilibrada',
    ethicalDisclaimer: 'Esta es una herramienta simbólica de reflexión. No predice el futuro ni garantiza desenlaces afectivos.',
    printBtn: '✦ Imprimir / Guardar en PDF',
    elementNames: { 1: 'Fuego', 2: 'Tierra', 3: 'Aire', 4: 'Agua' },
    elementDesc: {
      1: 'Iniciativa, voluntad, dinamismo y coraje.',
      2: 'Estabilidad, paciencia y arraigo tangible.',
      3: 'Curiosidad intelectual, diálogo y claridad mental.',
      4: 'Intuición profunda, empatía y sensibilidad.'
    },
    zodiacNames: {
      1: 'Aries', 2: 'Tauro', 3: 'Géminis', 4: 'Cáncer',
      5: 'Leo', 6: 'Virgo', 7: 'Libra', 8: 'Escorpio',
      9: 'Sagitario', 10: 'Capricornio', 11: 'Acuario', 12: 'Piscis'
    }
  }
};

// Rich archetypal readings for 1-9 and master numbers 11, 22, 33
const THEMES = {
  1: {
    tr: {
      title: 'Öncülük, Bağımsız İrade ve Başlangıçlar',
      symb: 'Geleneksel olarak başlangıç noktası, tohum ve özgün iradeyle ilişkilendirilir.',
      positive: 'Yeni yollar açma, cesaretle karar alma ve kendi ayakları üzerinde durabilme gücü.',
      care: 'Diğer insanların görüş ve hızlarına sabır göstermek; tek başına hareket etme eğilimini dengelemek.',
      question: 'Bugün hayatında kendi inisiyatifinle hangi temiz sayfayı açmak istiyorsun?'
    },
    en: {
      title: 'Initiative, Independent Will & New Beginnings',
      symb: 'Historically associated with primal emergence, original impulse, and singular focus.',
      positive: 'Pioneering resolve, bold decision-making, and self-reliance.',
      care: 'Practicing patience with others; balancing autonomy with collaborative listening.',
      question: 'What authentic milestone are you ready to initiate through your own resolve?'
    },
    el: {
      title: 'Πρωτοβουλία, Αυτονομία και Νέα Ξεκινήματα',
      symb: 'Συσχετίζεται παραδοσιακά με την αρχική σπίθα και την αποφασιστικότητα.',
      positive: 'Θάρρος στη λήψη αποφάσεων και αυτόνομη δημιουργικότητα.',
      care: 'Υπομονή στις ανάγκες και στους ρυθμούς των άλλων.',
      question: 'Ποιο ουσιαστικό ξεκίνημα είστε έτοιμοι να κάνετε σήμερα;'
    },
    es: {
      title: 'Iniciativa, Voluntad Independiente y Nuevos Comienzos',
      symb: 'Vinculado históricamente con el impulso originario y la determinación singular.',
      positive: 'Resolución pionera, valentía en las decisiones y autoconfianza.',
      care: 'Cultivar paciencia con el ritmo de los demás y evitar el aislamiento.',
      question: '¿Qué paso decisivo estás listo para iniciar por tu propia convicción?'
    }
  },
  2: {
    tr: {
      title: 'Denge, Karşılıklı Uyum ve Sezgisel İşbirliği',
      symb: 'Geleneksel olarak aynalama, empati, diplomasi ve ortaklık sembolüdür.',
      positive: 'Dinleme inceliği, arabuluculuk yeteneği ve zıtlıklar arasında köprü kurma becerisi.',
      care: 'Kendi sınırlarını ve önceliklerini başkalarını memnun etme uğruna feda etmemek.',
      question: 'İlişkilerinde hem kendin kalarak hem de karşı tarafı gerçekten duyarak nasıl denge kurabilirsin?'
    },
    en: {
      title: 'Harmony, Receptivity & Collaborative Balance',
      symb: 'Historically associated with duality, empathetic mediation, and partnership.',
      positive: 'Attentive listening, diplomatic grace, and synthesizing divergent views.',
      care: 'Protecting personal boundaries without over-accommodating at personal expense.',
      question: 'How can you maintain your equilibrium while offering genuine presence to others?'
    },
    el: {
      title: 'Αρμονία, Ενσυναίσθηση και Συνεργασία',
      symb: 'Σύμβολο διαλόγου, γέφυρας και συναισθηματικής διαλλακτικότητας.',
      positive: 'Διπλωματική ικανότητα και βαθιά κατανόηση.',
      care: 'Διατήρηση των προσωπικών ορίων χωρίς υποχωρητικότητα.',
      question: 'Πώς μπορείτε να διατηρήσετε την προσωπική σας ισορροπία στις σχέσεις σας;'
    },
    es: {
      title: 'Armonía, Receptividad y Equilibrio Colaborativo',
      symb: 'Símbolo histórico de mediación, empatía y síntesis de opuestos.',
      positive: 'Capacidad de escucha, diplomacia y construcción de acuerdos sólidos.',
      care: 'Cuidar los límites personales para no desgastarse en complacer al entorno.',
      question: '¿De qué forma puedes honrar tus necesidades sin dejar de escuchar al otro?'
    }
  },
  3: {
    tr: {
      title: 'Yaratıcı İfade, İletişim ve Yaşama Sevinci',
      symb: 'Fikirlerin yeşermesi, sözün gücü ve estetik ifadeyle eşleştirilir.',
      positive: 'Akıcı anlatım, ilham verme gücü ve içten bir mizah duygusu.',
      care: 'Derin ve zor duygulardan kaçmak için yüzeyselliğe veya dağılmaya sığınmamak.',
      question: 'İçindeki özgün duyguyu söze, sanata ya da eyleme en berrak şekilde nasıl dökebilirsin?'
    },
    en: {
      title: 'Creative Expression, Communication & Vitality',
      symb: 'Historically linked to eloquence, generative spark, and expressive clarity.',
      positive: 'Fluid articulation, inspiring enthusiasm, and aesthetic sensibility.',
      care: 'Avoiding emotional evasion through superficiality; grounding creative energy.',
      question: 'In what authentic medium can your deeper truth find uninhibited expression?'
    },
    el: {
      title: 'Δημιουργική Έκφραση και Επικοινωνία',
      symb: 'Συνδέεται με τη δύναμη του λόγου και τη χαρά της δημιουργίας.',
      positive: 'Ευφράδεια, έμπνευση και αυθορμητισμός.',
      care: 'Αποφυγή επιφανειακότητας μπροστά σε ουσιαστικές δυσκολίες.',
      question: 'Πώς μπορείτε να εκφράσετε την αλήθεια σας με τον πιο καθαρό τρόπο;'
    },
    es: {
      title: 'Expresión Creativa, Comunicación y Vitalidad',
      symb: 'Asociado históricamente con la elocuencia y el despliegue artístico.',
      positive: 'Comunicación fluida, capacidad de inspirar y optimismo reflexivo.',
      care: 'Evitar la dispersión mental o esquivar temas profundos con ligereza.',
      question: '¿Qué mensaje auténtico deseas comunicar con mayor transparencia?'
    }
  },
  4: {
    tr: {
      title: 'İstikrar, Sağlam Temeller ve Sorumluluk',
      symb: 'Geleneksel olarak dört yön, sağlam yapı ve sabırlı emek sembolüdür.',
      positive: 'Güvenilirlik, metodik çalışma disiplini ve somut değer üretme kapasitesi.',
      care: 'Aşırı katılık, yeniliklere direnç ve her şeyi kontrol etme ihtiyacını esnetebilmek.',
      question: 'Hayatında kurduğun düzen seni özgürleştiriyor mu, yoksa kısıtlıyor mu?'
    },
    en: {
      title: 'Stability, Pragmatic Grounding & Endurance',
      symb: 'Historically associated with structural integrity, the four cardinal pillars, and diligence.',
      positive: 'Dependability, methodical stewardship, and crafting lasting foundations.',
      care: 'Allowing flexibility; moderating rigid expectations and excessive control.',
      question: 'Does your current structure nourish your growth, or is it time to allow more elasticity?'
    },
    el: {
      title: 'Σταθερότητα, Θεμελίωση και Υπευθυνότητα',
      symb: 'Σύμβολο των τεσσάρων στοιχείων και της ακλόνητης δομής.',
      positive: 'Αξιοπιστία, οργανωτικό πνεύμα και υπομονετική εργασία.',
      care: 'Αποφυγή υπερβολικής αυστηρότητας και αντίστασης στην αλλαγή.',
      question: 'Η δομή που χτίζετε σας ενδυναμώνει ή σας περιορίζει;'
    },
    es: {
      title: 'Estabilidad, Cimientos Sólidos y Responsabilidad',
      symb: 'Símbolo histórico de solidez constructiva, orden y perseverancia.',
      positive: 'Fiabilidad, disciplina metódica y creación de valor perdurable.',
      care: 'Moderar la rigidez y aprender a fluir ante cambios imprevistos.',
      question: '¿Tus rutinas actuales te proporcionan serenidad o te generan rigidez?'
    }
  },
  5: {
    tr: {
      title: 'Değişim, Deneyim Açlığı ve Zihinsel Özgürlük',
      symb: 'Beş duyu, seyahat, dönüşüm ve esnek adaptasyonla ilişkilendirilir.',
      positive: 'Hızlı uyum sağlama, çok yönlü bakış açısı ve keşfetme arzusu.',
      care: 'Sorumluluklardan kaçma eğilimine kapılmamak; özgürlüğü tutarlılıkla dengelemek.',
      question: 'Değişimin getirdiği fırsatları karşılarken hangi temel değerine sadık kalacaksın?'
    },
    en: {
      title: 'Adaptability, Dynamic Freedom & Exploration',
      symb: 'Linked to the five senses, movement, boundary-crossing, and versatile awareness.',
      positive: 'Quick adaptation, multi-faceted perception, and brave curiosity.',
      care: 'Balancing freedom with follow-through; avoiding restlessness when discipline is required.',
      question: 'How will you anchor your core purpose while navigating transformative shifts?'
    },
    el: {
      title: 'Προσαρμοστικότητα, Ελευθερία και Εξερεύνηση',
      symb: 'Συσχετίζεται με την κίνηση, τις αισθήσεις και την εσωτερική ευελιξία.',
      positive: 'Ευστροφία, ευελιξία και ανοιχτό πνεύμα.',
      care: 'Σταθερότητα στις δεσμεύσεις χωρίς φυγόκεντρες τάσεις.',
      question: 'Ποια αξία αποτελεί την άγκυρά σας μέσα σε περιόδους αλλαγής;'
    },
    es: {
      title: 'Adaptabilidad, Libertad Dinámica y Transformación',
      symb: 'Vinculado históricamente con los cinco sentidos, los viajes y la adaptabilidad.',
      positive: 'Versatilidad, mente abierta y capacidad de aprendizaje vivencial.',
      care: 'Evitar la inquietud constante y sostener los compromisos asumidos.',
      question: '¿Qué principio fundamental te sostiene en momentos de cambio dinámico?'
    }
  },
  6: {
    tr: {
      title: 'Şefkat, Aile Bağı ve Uyumlu Sorumluluk',
      symb: 'Geleneksel olarak koruyuculuk, yuva, adalet ve estetik zarafet sembolüdür.',
      positive: 'Yüksek sorumluluk bilinci, cömert destek ve ortamı güzelleştirme kabiliyeti.',
      care: 'Tüm yükü tek başına sırtlanmamak; başkalarının öğrenme süreçlerine saygı duymak.',
      question: 'Kendine gösterdiğin özen ile başkalarına sunduğun destek arasında denge var mı?'
    },
    en: {
      title: 'Nurture, Compassionate Stewardship & Harmony',
      symb: 'Historically associated with caretaking, aesthetic balance, and communal responsibility.',
      positive: 'Loyal guardianship, empathetic generosity, and creating comforting spaces.',
      care: 'Guarding against martyr dynamics; allowing others their own lessons and autonomy.',
      question: 'Is the care you extend to others matched by gentle kindness toward yourself?'
    },
    el: {
      title: 'Φροντίδα, Αρμονία και Συναισθηματική Υπευθυνότητα',
      symb: 'Σύμβολο προστασίας, οικογενειακών δεσμών και δικαιοσύνης.',
      positive: 'Γενναιοδωρία, αλληλεγγύη και αίσθημα ευθύνης.',
      care: 'Αποφυγή υπερβολικού ελέγχου στο όνομα της φροντίδας.',
      question: 'Προσφέρετε στον εαυτό σας την ίδια φροντίδα που δίνετε στους άλλους;'
    },
    es: {
      title: 'Cuidado, Vocación Protectora y Compromiso Afectivo',
      symb: 'Símbolo histórico de hospitalidad, equilibrio doméstico y apoyo mutuo.',
      positive: 'Generosidad afectiva, responsabilidad comunitaria y sentido de la belleza.',
      care: 'No sobrecargarse de responsabilidades ajenas ni asumir el rol de salvador.',
      question: '¿Equilibras la atención que brindas a los demás con tu propio descanso y bienestar?'
    }
  },
  7: {
    tr: {
      title: 'Derin Tefekkür, Hakikat Arayışı ve İçe Dönüş',
      symb: 'Geleneksel olarak yedi gök, bilgelik, araştırma ve manevi sırlarla ilişkilidir.',
      positive: 'Analitik keskinlik, derin kavrayış ve yüzeysel olanın ardındaki gerçeği görebilme.',
      care: 'İçe kapanırken insanlarla iletişimi tamamen koparmamak; kuşkuculuğu şefkatle yumuşatmak.',
      question: 'Zihnindeki kalabalıktan sıyrılıp kendi iç sesini dinlemeye ne kadar alan açıyorsun?'
    },
    en: {
      title: 'Contemplation, Discerning Insight & Quiet Truth',
      symb: 'Historically associated with the seven celestial spheres, analytical depth, and introspection.',
      positive: 'Penetrating intellect, quiet wisdom, and seeing beneath outward illusions.',
      care: 'Preventing detachment from turning into cynicism; softening intellectual scrutiny with grace.',
      question: 'How much conscious stillness do you afford yourself to listen to your deeper intuition?'
    },
    el: {
      title: 'Στοχασμός, Σοφία και Εσωτερική Αναζήτηση',
      symb: 'Συσχετίζεται με την έρευνα, την πνευματική αναζήτηση και τη διαύγεια.',
      positive: 'Οξυδέρκεια, βάθος σκέψης και αναζήτηση ουσίας.',
      care: 'Αποφυγή απομόνωσης και υπερβολικού σκεπτικισμού.',
      question: 'Πόσο χώρο αφήνετε στη σιωπή για να ακούσετε τη δική σας εσωτερική φωνή;'
    },
    es: {
      title: 'Contemplación, Búsqueda de Verdad e Introspección',
      symb: 'Vinculado históricamente con la sabiduría analítica y el estudio profundo.',
      positive: 'Capacidad de discernimiento, lucidez reflexiva y búsqueda de sentido.',
      care: 'Evitar el distanciamiento excesivo y temperar el escepticismo con empatía.',
      question: '¿Cuánto silencio consciente te concedes para ordenar tus pensamientos esenciales?'
    }
  },
  8: {
    tr: {
      title: 'Adalet, Somut Güç ve Stratejik Ustalık',
      symb: 'Maddi ile manevinin kesişimi, terazi adaleti ve somutlaşan otorite.',
      positive: 'Liderlik vizyonu, krizleri soğukkanlılıkla yönetme ve hedeflere kararlılıkla ulaşma.',
      care: 'Güç mücadelesine girmemek; hedeflere yürürken şefkat ve adaleti elden bırakmamak.',
      question: 'Eline geçen imkânları ve gücü kimlerin hayatına adil bir fayda sağlamak için kullanıyorsun?'
    },
    en: {
      title: 'Equilibrium, Pragmatic Mastery & Structural Impact',
      symb: 'Historically linked to balanced authority, material manifestation, and cosmic justice.',
      positive: 'Executive vision, calm composure during crises, and sustained achievement.',
      care: 'Guarding against coercive control; ensuring ethics guide all pragmatic ambition.',
      question: 'In what ways are you channeling your influence toward constructive and fair outcomes?'
    },
    el: {
      title: 'Δικαιοσύνη, Ηγεσία και Στρατηγική Επίτευξη',
      symb: 'Σύμβολο ισχύος, ισορροπίας και υπεύθυνης διαχείρισης.',
      positive: 'Ηγετική ικανότητα, ανθεκτικότητα και προσήλωση στους στόχους.',
      care: 'Αποφυγή συγκρούσεων εξουσίας και σκληρότητας.',
      question: 'Πώς αξιοποιείτε τις δυνάμεις σας για το κοινό καλό;'
    },
    es: {
      title: 'Justicia, Maestría Estratégica y Realización Concreta',
      symb: 'Símbolo histórico de autoridad responsable y balance entre esfuerzo y recompensa.',
      positive: 'Visión ejecutiva, aplomo en la dificultad y capacidad de materialización.',
      care: 'Evitar que la ambición degenere en control rígido o disputas de poder.',
      question: '¿De qué manera estás utilizando tus recursos para generar un impacto equitativo y útil?'
    }
  },
  9: {
    tr: {
      title: 'Evrensel Bilinç, Olgunluk ve Tamamlanma',
      symb: 'Döngülerin son halkası, kapsayıcı bilgelik ve geçmişi geride bırakma erdemi.',
      positive: 'Geniş yüreklilik, fedakarlık yapabilme olgunluğu ve insanlığa hizmet gayesi.',
      care: 'Kişisel kırgınlıklara saplanıp kalmamak; bitmesi gereken döngüleri zarafetle kapatabilmek.',
      question: 'Bugün sana artık hizmet etmeyen hangi eski kırgınlığı veya alışkanlığı serbest bırakmaya hazırsın?'
    },
    en: {
      title: 'Universal Compassion, Maturity & Culmination',
      symb: 'Historically represents completion of the cycle, synthesis, and broad-minded wisdom.',
      positive: 'Generous humanitarian perspective, emotional breadth, and philosophical maturity.',
      care: 'Releasing outdated grievances; allowing natural endings without resentment.',
      question: 'What outworn narrative or disappointment are you ready to gracefully let go of?'
    },
    el: {
      title: 'Ολοκλήρωση, Συμπαντική Ενσυναίσθηση και Σοφία',
      symb: 'Σύμβολο του κλεισίματος των κύκλων και της ανθρωπιστικής ματιάς.',
      positive: 'Ανιδιοτέλεια, ευρύτητα αντίληψης και γενναιοδωρία.',
      care: 'Απελευθέρωση από παλιά παράπονα και αποδοχή των αναγκαίων ολοκληρώσεων.',
      question: 'Ποιο παλιό βάρος είστε έτοιμοι να αφήσετε πίσω σας σήμερα;'
    },
    es: {
      title: 'Compasión Universal, Madurez y Cierre de Ciclos',
      symb: 'Representa tradicionalmente la culminación del sendero y la amplitud filosófica.',
      positive: 'Visión humanista, desprendimiento noble y madurez reflexiva.',
      care: 'Aprender a cerrar etapas con serenidad sin guardar rencores ni aferrarse al pasado.',
      question: '¿Qué antigua expectativa o frustración estás preparado para soltar con dignidad?'
    }
  },
  11: {
    tr: {
      title: 'Usta Sayı 11/2: Sezgisel İlham ve Işık Taşıyıcılığı',
      symb: 'İki birin yan yana gelişi; yüksek sezgisel algı, ilham ve manevi duyarlılık.',
      positive: 'Öngörü gücü, kalabalıkların duygusunu hissetme ve aydınlatıcı fikirler üretme.',
      care: 'Aşırı sinirsel gerilim ve hassasiyet; sezgileri pratik gerçeklikle topraklama gereği.',
      question: 'İçine doğan güçlü sezgileri somut ve faydalı bir projeye nasıl dönüştürebilirsin?'
    },
    en: {
      title: 'Master Number 11/2: Intuitive Illumination & Vision',
      symb: 'Dual pillar of receptive insight, heightened perception, and visionary inspiration.',
      positive: 'Deep intuitive clarity, inspiring presence, and bridging subconscious insight.',
      care: 'Managing nervous sensitivity; grounding high-frequency ideas in pragmatic routines.',
      question: 'How can you translate your intuitive impressions into constructive reality?'
    },
    el: {
      title: 'Κυρίαρχος Αριθμός 11/2: Διαισθητική Έμπνευση',
      symb: 'Σύμβολο διαισθητικής καθοδήγησης και πνευματικής διαύγειας.',
      positive: 'Οραματισμός και βαθιά αντίληψη.',
      care: 'Διαχείριση της υπερευαισθησίας και γείωση των ιδεών.',
      question: 'Πώς μπορείτε να μετουσιώσετε τις ιδέες σας σε πράξη;'
    },
    es: {
      title: 'Número Maestro 11/2: Inspiración Intuitiva y Visión',
      symb: 'Doble pilar de percepción sutil, clarividencia intuitiva y luz reflexiva.',
      positive: 'Lucidez intuitiva, capacidad de conmover conciencias y visión inspiradora.',
      care: 'Canalizar el exceso de sensibilidad nerviosa y anclar los ideales en la práctica.',
      question: '¿De qué forma puedes llevar tus intuiciones a proyectos tangibles y útiles?'
    }
  },
  22: {
    tr: {
      title: 'Usta Sayı 22/4: Usta Mimar ve Büyük İnşa Gücü',
      symb: 'En yüksek idealleri yeryüzünde somut, kurumsal ve kalıcı sistemlere dönüştürme.',
      positive: 'Büyük ölçekli planlama, sağlam vizyon ve topluma yararlı yapılar inşa edebilme.',
      care: 'Sorumlulukların ağırlığı altında ezilmemek; mükemmeliyetçiliği dengelemek.',
      question: 'Toplumun ya da sevdiklerinin geleceği için hangi kalıcı mirası inşa etmek istiyorsun?'
    },
    en: {
      title: 'Master Number 22/4: The Master Builder',
      symb: 'Transmuting high ethical vision into enduring physical, systemic, and societal structures.',
      positive: 'Monumental organizational mastery, practical idealism, and long-range focus.',
      care: 'Avoiding overwhelm under self-imposed obligations; trusting the incremental pace.',
      question: 'What enduring structure or contribution are you called to construct for the collective?'
    },
    el: {
      title: 'Κυρίαρχος Αριθμός 22/4: Ο Μεγάλος Οικοδόμος',
      symb: 'Σύμβολο υλοποίησης μεγάλων οραμάτων σε πρακτικές δομές.',
      positive: 'Στρατηγική οργάνωση και ικανότητα δημιουργίας μόνιμων έργων.',
      care: 'Αποφυγή υπερβολικού άγχους από το βάρος της ευθύνης.',
      question: 'Ποιο διαχρονικό έργο καλείστε να θεμελιώσετε;'
    },
    es: {
      title: 'Número Maestro 22/4: El Maestro Constructor',
      symb: 'Materialización de ideales elevados en instituciones, obras y estructuras duraderas.',
      positive: 'Capacidad de ejecución a gran escala, realismo visionario y constancia.',
      care: 'No sucumbir ante el peso del perfeccionismo ni agotar las energías propias.',
      question: '¿Qué cimientos perdurables estás llamado a levantar para el beneficio común?'
    }
  },
  33: {
    tr: {
      title: 'Usta Sayı 33/6: Evrensel Rehberlik ve Karşılıksız Hizmet',
      symb: 'Kutsal sevgi, şefkatin en üst ifadesi ve insanlığın acılarını dindirme gayreti.',
      positive: 'Yüksek manevi olgunluk, şefkatli rehberlik ve yargılamadan kucaklayabilme.',
      care: 'Kurtarıcı rolüne bürünerek kendi hayatını ihmal etmemek; sağlıklı mesafeyi korumak.',
      question: 'Sevgi ve şefkatini sunarken kendi ruhsal dengeni nasıl koruyacaksın?'
    },
    en: {
      title: 'Master Number 33/6: Compassionate Stewardship & Guidance',
      symb: 'Highest expression of unconditional care, moral teaching, and selfless service.',
      positive: 'Profound empathetic maturity, restorative guidance, and unifying presence.',
      care: 'Guarding against burnout in savior complexes; maintaining compassionate boundaries.',
      question: 'How do you sustain your personal sanctuary while extending care to the world?'
    },
    el: {
      title: 'Κυρίαρχος Αριθμός 33/6: Ανθρωπιστική Καθοδήγηση',
      symb: 'Ανώτατη έκφραση αγάπης, αλληλεγγύης και διδασκαλίας.',
      positive: 'Βαθιά ενσυναίσθηση, πνευματική ωριμότητα και θεραπευτική παρουσία.',
      care: 'Προστασία από την εξάντληση λόγω υπερβολικής προσφοράς.',
      question: 'Πώς φροντίζετε τον εαυτό σας όσο προσφέρετε στους άλλους;'
    },
    es: {
      title: 'Número Maestro 33/6: Guía Compasiva y Servicio Universal',
      symb: 'La más alta expresión del amor desinteresado, la enseñanza moral y el cuidado.',
      positive: 'Madurez empática, presencia pacificadora y capacidad de elevación espiritual.',
      care: 'Evitar el desgaste por asumir roles de rescate; conservar límites saludables.',
      question: '¿Cómo proteges tu paz interior mientras ofreces tu servicio al entorno?'
    }
  }
};

// Render personal result card
function renderPersonCard(p, loc, titlePrefix = '') {
  const t = I18N[loc] || I18N.tr;
  const num = p.numerology;
  const elName = t.elementNames[p.elementIndex];
  const zodName = t.zodiacNames[p.zodiacIndex];

  let statsHtml = `
    <div class="stat-pill">
      <span class="stat-label">${t.abjadKebir}</span>
      <strong class="stat-val">${p.a.total}</strong>
    </div>
    <div class="stat-pill">
      <span class="stat-label">${t.abjadSagir}</span>
      <strong class="stat-val">${p.a.totalSmall}</strong>
    </div>
  `;

  if (p.m.parts.length) {
    statsHtml += `
      <div class="stat-pill">
        <span class="stat-label">${t.withMother}</span>
        <strong class="stat-val">${p.full}</strong>
      </div>
    `;
  }

  statsHtml += `
    <div class="stat-pill">
      <span class="stat-label">${t.expressionNum}</span>
      <strong class="stat-val">${num.expressionRoot} <small class="raw-total">(${num.expression})</small></strong>
    </div>
    <div class="stat-pill">
      <span class="stat-label">${t.soulUrgeNum}</span>
      <strong class="stat-val">${num.soulUrgeRoot} <small class="raw-total">(${num.soulUrge})</small></strong>
    </div>
    <div class="stat-pill">
      <span class="stat-label">${t.personalityNum}</span>
      <strong class="stat-val">${num.personalityRoot} <small class="raw-total">(${num.personality})</small></strong>
    </div>
  `;

  if (num.lifePath !== null) {
    statsHtml += `
      <div class="stat-pill highlight-pill">
        <span class="stat-label">${t.lifePathNum}</span>
        <strong class="stat-val">${num.lifePath}</strong>
      </div>
      <div class="stat-pill">
        <span class="stat-label">${t.personalYearNum}</span>
        <strong class="stat-val">${num.personalYear}</strong>
      </div>
    `;
  }

  return `
    <article class="result-card person-summary-card">
      <div class="card-head">
        <div>
          ${titlePrefix ? `<span class="card-prefix">${esc(titlePrefix)}</span>` : ''}
          <h2 class="person-title">${esc(p.name)}</h2>
          ${p.mother ? `<p class="mother-sub">${esc(p.mother)} evladı</p>` : ''}
        </div>
        <span class="card-method-tag">${loc === 'tr' ? 'Harf değeri analizi' : loc === 'es' ? 'Análisis de letras' : loc === 'el' ? 'Ανάλυση γραμμάτων' : 'Letter value analysis'}</span>
      </div>

      <div class="arabic-display-box" dir="rtl" lang="ar">
        <span class="arabic-main">${esc(p.arabic)}</span>
        ${p.motherArabic ? `<span class="arabic-mom">+ ${esc(p.motherArabic)}</span>` : ''}
      </div>
      <p class="arabic-hint">${(SYMBOL_INFO[loc]||SYMBOL_INFO.tr).nameFormat}</p>
      ${renderSymbolicNote(p,loc,t)}

      <div class="stats-grid">
        ${statsHtml}
      </div>
    </article>
  `;
}


const SYMBOL_INFO = {
 tr: {birth:'Doğum tarihine göre Güneş burcu',symbol:'İsmin Ebced değerinden sembolik eşleştirme',element:'Element',archetype:'Sembolik burç',explain:'Bu sonuçlar neden farklı?',answer:'Güneş burcu doğum tarihinden belirlenir. Sembolik burç ve element ise ismin Arap harfleriyle bulunan Ebced toplamının sırasıyla 12 ve 4 üzerinden kalanlarına göre eşleştirilir. Bunlar farklı sistemlerdir; sembolik Akrep sonucu doğum burcunun Akrep olduğu anlamına gelmez.',math:'Ebced toplamı',mod12:'12’ye göre sıra',mod4:'4’e göre sıra',caveat:'Bu eşleştirme, Ebced’in evrensel veya bilimsel olarak doğrulanmış bir kuralı değildir.',unknown:'Doğum tarihi girilmedi',nameFormat:'Gösterilen Arap harfleri hesaplamanın temelidir.'},
 en: {birth:'Sun sign from birth date',symbol:'Symbolic match from name Abjad value',element:'Element',archetype:'Symbolic zodiac sign',explain:'Why are these different?',answer:'The Sun sign is based on the birth date. The symbolic zodiac and element are assigned from the Abjad letter total using its positions within cycles of 12 and 4. A symbolic Scorpio does not mean the person has a Scorpio Sun sign.',math:'Abjad total',mod12:'Position in 12',mod4:'Position in 4',caveat:'This correspondence is not a universal Abjad rule or a scientifically validated prediction.',unknown:'No birth date provided',nameFormat:'The Arabic spelling shown determines the calculation.'},
 el: {birth:'Ηλιακό ζώδιο από την ημερομηνία γέννησης',symbol:'Συμβολική αντιστοιχία από το Αμπτζάντ',element:'Στοιχείο',archetype:'Συμβολικό ζώδιο',explain:'Γιατί διαφέρουν;',answer:'Το ηλιακό ζώδιο προκύπτει από την ημερομηνία γέννησης. Το συμβολικό ζώδιο και στοιχείο αντιστοιχίζονται στον αριθμό του ονόματος με κύκλους 12 και 4. Το συμβολικό ζώδιο δεν αλλάζει το ζώδιο γέννησης.',math:'Άθροισμα Αμπτζάντ',mod12:'Θέση στο 12',mod4:'Θέση στο 4',caveat:'Αυτή η αντιστοίχιση δεν είναι καθολικός ή επιστημονικά επιβεβαιωμένος κανόνας.',unknown:'Δεν δόθηκε ημερομηνία γέννησης',nameFormat:'Η εμφανιζόμενη αραβική γραφή καθορίζει τον υπολογισμό.'},
 es: {birth:'Signo solar según la fecha de nacimiento',symbol:'Correspondencia simbólica del valor Ábyad',element:'Elemento',archetype:'Signo zodiacal simbólico',explain:'¿Por qué son distintos?',answer:'El signo solar se determina por la fecha de nacimiento. El signo y elemento simbólicos se asignan a partir del valor numérico del nombre en ciclos de 12 y 4. Un Escorpio simbólico no cambia el signo solar.',math:'Total Ábyad',mod12:'Posición entre 12',mod4:'Posición entre 4',caveat:'No es una regla universal del Ábyad ni una predicción con validación científica.',unknown:'Sin fecha de nacimiento',nameFormat:'El cálculo usa la escritura árabe mostrada.'}
};
const SUN_LABELS={
 tr:['Oğlak','Kova','Balık','Koç','Boğa','İkizler','Yengeç','Aslan','Başak','Terazi','Akrep','Yay'],
 en:['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'],
 el:['Αιγόκερως','Υδροχόος','Ιχθύες','Κριός','Ταύρος','Δίδυμοι','Καρκίνος','Λέων','Παρθένος','Ζυγός','Σκορπιός','Τοξότης'],
 es:['Capricornio','Acuario','Piscis','Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario']
};
function sunSignByDate(date,loc){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))return null;
 const [,month,day]=date.split('-').map(Number);
 // Standard tropical calendar-date boundaries (not a calculated natal chart).
 const cutoffs=[20,19,20,20,21,21,22,23,23,23,22,22];
 const indexes=[0,1,2,3,4,5,6,7,8,9,10,11];
 const index=day<cutoffs[month-1]?indexes[month-1]:(indexes[month-1]+1)%12;
 return (SUN_LABELS[loc]||SUN_LABELS.tr)[index];
}
function renderSymbolicNote(p,loc,t){
 const l=SYMBOL_INFO[loc]||SYMBOL_INFO.tr;
 const sun=sunSignByDate(p.date,loc);
 const el=t.elementNames[p.elementIndex],z=t.zodiacNames[p.zodiacIndex];
 return `<section class="symbol-guide" aria-label="${l.symbol}">
  <div class="symbol-guide-item symbol-guide-birth"><span class="symbol-guide-label">${l.birth}</span><strong>${sun||l.unknown}</strong></div>
  <div class="symbol-guide-item"><span class="symbol-guide-label">${l.symbol}</span><strong>${l.element}: ${el} <span class="symbol-guide-separator">·</span> ${l.archetype}: ${z}</strong></div>
  <details class="symbol-guide-details"><summary>ⓘ ${l.explain}</summary><p>${l.answer}</p><p class="symbol-guide-formula">${l.math}: ${p.a.total} · ${l.mod12}: ${p.zodiacIndex} · ${l.mod4}: ${p.elementIndex}</p><p class="symbol-guide-caution">${l.caveat}</p></details>
 </section>`;
}


const EXPLAINED_METRICS={
 tr:{
 title:'Rakamların Anlamı',intro:'Her sonucun neyi gösterdiğini ve hangi işlemle hesaplandığını aşağıdan inceleyebilirsin.',
 greater:['Büyük Ebced','Arap harflerinin klasik sayısal değerleri toplanır.','Bu tarihsel bir harf-sayı hesabıdır; tek başına kişilik veya gelecek göstermez.'],
 lesser:['Küçük Ebced','Bu araçta her harfin Büyük Ebced değeri 1–9 aralığına indirgenir ve toplanır.','Küçük Ebced adı altında birden fazla yöntem kullanılır; burada uygulanan kural budur.'],
 maternal:['Anne adıyla birlikte','Ad ve soyadın Ebced toplamına annenin adının Ebced değeri eklenir.','Geleneksel uygulamalarda görülen ek bir hesaplamadır; kişisel kader tespiti değildir.'],
 expression:['İfade / kader sayısı','Latin harfleri Pisagor tablosuyla 1–9 değerlerine çevrilir ve bütün harfler toplanır.','Modern numerolojide ifade tarzı ve yetenek temalarıyla ilişkilendirilir; gerçek kişiliği kanıtlamaz.'],
 soul:['Ruh arzusu','İsimdeki sesli harflerin Pisagor değerleri toplanır.','Modern numerolojide sembolik istekler ve motivasyonlarla ilişkilendirilir.'],
 personality:['Kişilik sayısı','İsimdeki sessiz harflerin Pisagor değerleri toplanır.','Modern numerolojide dışarıya yansıtılan özellikleri simgeler; psikolojik test değildir.'],
 life:['Yaşam yolu','Doğum tarihinin gün, ay ve yıl bileşenleri toplanıp numerolojik kurala göre indirgenir.','Modern numerolojide yaşam temalarıyla ilişkilendirilir; hayatın yönünü belirlemez.'],
 year:['Kişisel yıl','Doğum günü ve ayı, içinde bulunulan yılın rakamlarıyla birlikte indirgenir.','Yıla atanan sembolik bir temadır; yıl içinde ne olacağını öngörmez.'],
 raw:'İlk toplam',root:'Son sayı',how:'Nasıl hesaplanır?',meaning:'Geleneksel / sembolik anlam',theme:'Bu sayının numerolojideki teması',note:'Sayılar matematiksel olarak hesaplanabilir; yorumlar tarihsel veya modern sembolik geleneklerden gelir.',
 summaryTitle:'Sonuçların Kısa Yorumu',summaryIntro:'Bu sayılar sana ne söylüyor?',summaryEnding:'Bunlar sembolik okumalardır; geleceği veya karakteri kesin biçimde belirlemez.',
 compareTitle:'İki Kişinin Sonuçları Ne Anlama Geliyor?',compareNote:'İsimlerden hesaplanan ortak sayı, iki insanın duygularını ya da ilişkinin geleceğini ölçmez. Farklı veya aynı sayılar birlikte konuşulabilecek temalar sunar.'
 },
 en:{
 title:'Understand Your Numbers',intro:'Explore what each number means and how it was calculated.',
 greater:['Greater Abjad','Sum the classical numerical values of the Arabic letters.','A historical letter-number calculation, not a personality or future prediction.'],
 lesser:['Lesser Abjad','This tool reduces each Greater Abjad letter value to 1–9 and sums the results.','Several methods exist under this name; the tool displays its specific rule.'],
 maternal:['Including mother’s name','Add the Abjad value of the mother’s name to the full-name total.','A traditional additional calculation, not a measure of destiny.'],
 expression:['Expression number','Convert all Latin letters using the Pythagorean 1–9 table and sum them.','Modern numerology associates this with expression and abilities, not proven traits.'],
 soul:['Soul urge','Sum the Pythagorean values of the vowels in the name.','A modern symbolic theme of wishes and motivation.'],
 personality:['Personality number','Sum the Pythagorean values of consonants in the name.','A modern symbolic theme of outward expression, not a psychological assessment.'],
 life:['Life path','Reduce and combine the day, month and year of birth using the stated numerology rule.','Associated with broad life themes in modern numerology, not a fixed life path.'],
 year:['Personal year','Combine birth day and month with the current calendar year, then reduce.','A symbolic yearly theme, not a forecast.'],
 raw:'Initial total',root:'Final number',how:'How it is calculated',meaning:'Traditional / symbolic interpretation',theme:'This number’s numerology theme',note:'The arithmetic is verifiable; interpretations come from historical or modern symbolic traditions.',
 summaryTitle:'Your Results at a Glance',summaryIntro:'What do these numbers mean?',summaryEnding:'These are symbolic readings; they cannot reliably predict events or establish personality.',
 compareTitle:'Understanding Your Two-Person Results',compareNote:'A combined name number does not measure feelings or relationship outcomes. It may offer subjects for reflection.'
 },
 el:{
 title:'Τι σημαίνουν οι αριθμοί;',intro:'Δείτε τι σημαίνει κάθε αποτέλεσμα και πώς υπολογίστηκε.',
 greater:['Μεγάλο Αμπτζάντ','Προστίθενται οι αριθμητικές τιμές των αραβικών γραμμάτων.','Ιστορικός υπολογισμός, όχι πρόβλεψη χαρακτήρα ή μέλλοντος.'],
 lesser:['Μικρό Αμπτζάντ','Κάθε τιμή γράμματος ανάγεται σε 1–9 και αθροίζεται.','Υπάρχουν διαφορετικές μέθοδοι· αυτή είναι η συγκεκριμένη επιλογή.'],
 maternal:['Με το όνομα μητέρας','Η τιμή του ονόματος της μητέρας προστίθεται στο πλήρες όνομα.','Παραδοσιακός συμβολικός υπολογισμός, όχι ένδειξη πεπρωμένου.'],
 expression:['Αριθμός έκφρασης','Προστίθενται οι τιμές όλων των λατινικών γραμμάτων στον Πυθαγόρειο πίνακα.','Στη σύγχρονη αριθμολογία συνδέεται συμβολικά με την έκφραση.'],
 soul:['Εσωτερική επιθυμία','Προστίθενται οι τιμές των φωνηέντων.','Συμβολική ερμηνεία επιθυμιών και κινήτρων.'],
 personality:['Προσωπικότητα','Προστίθενται οι τιμές των συμφώνων.','Συμβολική ερμηνεία, όχι ψυχολογική αξιολόγηση.'],
 life:['Πορεία ζωής','Συνδυάζονται τα ψηφία ημέρας, μήνα και έτους γέννησης.','Σύγχρονη αριθμολογική ερμηνεία, όχι προορισμός ζωής.'],
 year:['Προσωπικό έτος','Συνδυάζονται ημέρα και μήνας γέννησης με το τρέχον έτος.','Συμβολική θεματική και όχι πρόβλεψη.'],
 raw:'Αρχικό άθροισμα',root:'Τελικός αριθμός',how:'Υπολογισμός',meaning:'Συμβολική ερμηνεία',theme:'Αριθμολογικό θέμα',note:'Οι υπολογισμοί ελέγχονται μαθηματικά· οι ερμηνείες είναι συμβολικές.',
 summaryTitle:'Συνοπτική Ερμηνεία',summaryIntro:'Τι δείχνουν οι αριθμοί;',summaryEnding:'Δεν προβλέπουν αξιόπιστα προσωπικότητα ή γεγονότα.',
 compareTitle:'Ερμηνεία Σύγκρισης',compareNote:'Ο κοινός αριθμός δεν μετρά συναισθήματα ούτε προβλέπει το μέλλον μιας σχέσης.'
 },
 es:{
 title:'Comprende tus números',intro:'Consulta qué significa cada resultado y cómo se calcula.',
 greater:['Ábyad mayor','Se suman los valores clásicos de las letras árabes.','Cálculo histórico, no predicción de personalidad o futuro.'],
 lesser:['Ábyad menor','Cada valor del Ábyad mayor se reduce a 1–9 antes de sumarlos.','Existen otros métodos; este es el que aplica la herramienta.'],
 maternal:['Con el nombre de la madre','Se suma el valor Ábyad del nombre materno al nombre completo.','Cálculo simbólico tradicional, no una medida del destino.'],
 expression:['Número de expresión','Se suman los valores de todas las letras con la tabla pitagórica.','La numerología moderna lo vincula simbólicamente con la expresión.'],
 soul:['Deseo del alma','Se suman los valores de las vocales.','Interpretación simbólica de deseos y motivaciones.'],
 personality:['Personalidad','Se suman los valores de las consonantes.','Interpretación simbólica, no evaluación psicológica.'],
 life:['Camino de vida','Se combinan y reducen día, mes y año de nacimiento.','Tema de numerología moderna, no un destino fijo.'],
 year:['Año personal','Se combinan día y mes de nacimiento con el año actual.','Tema simbólico anual, no pronóstico.'],
 raw:'Total inicial',root:'Número final',how:'Cómo se calcula',meaning:'Interpretación simbólica',theme:'Tema numerológico',note:'Los cálculos son verificables; las interpretaciones son simbólicas.',
 summaryTitle:'Resumen de tus resultados',summaryIntro:'¿Qué significan estos números?',summaryEnding:'No permiten predecir eventos ni determinar la personalidad.',
 compareTitle:'Cómo leer la comparación',compareNote:'El número conjunto no mide sentimientos ni predice el futuro de una relación.'
 }
};
function summaryMetric(key, label, value, total, root, item, locale) {
 const t=EXPLAINED_METRICS[locale]||EXPLAINED_METRICS.tr;
 const isModern=['expression','soul','personality','life','year'].includes(key);
 const theme=isModern&&(THEMES[reduce(Number(value),false)]||{})[locale] || (isModern&&(THEMES[reduce(Number(value),false)]||{}).tr);
 const interpretation=theme?`<p><b>${esc(t.theme)}</b> ${esc(theme.title)}. ${esc(theme.positive)} ${esc(theme.care)}</p>`:'';
 return `<details class="meaning-row"><summary><span>${esc(label)}</span><strong>${esc(value)}</strong><span class="meaning-chevron" aria-hidden="true">⌄</span></summary><div class="meaning-answer"><p><b>${esc(t.how)}</b> ${esc(item[1])} ${total!==null?`${esc(t.raw)}: <strong>${esc(total)}</strong>. ${root!==null?`${esc(t.root)}: <strong>${esc(root)}</strong>.`:''}`:''}</p><p><b>${esc(t.meaning)}</b> ${esc(item[2])}</p>${interpretation}</div></details>`;
}
function renderReadableExplanation(p,loc){
 const t=EXPLAINED_METRICS[loc]||EXPLAINED_METRICS.tr,n=p.numerology;
 const blocks=[
  ['greater',p.a.total,p.a.total,null],
  ['lesser',p.a.totalSmall,p.a.totalSmall,null],
  ...(p.m.parts.length?[['maternal',p.full,p.full,null]]:[]),
  ['expression',n.expressionRoot,n.expression,n.expressionRoot],
  ['soul',n.soulUrgeRoot,n.soulUrge,n.soulUrgeRoot],
  ['personality',n.personalityRoot,n.personality,n.personalityRoot],
  ...(n.lifePath!==null?[['life',n.lifePath,null,null],['year',n.personalYear,null,null]]:[])
 ];
 const explanations=blocks.map(([key,value,total,root])=>summaryMetric(key,t[key][0],value,total,root,t[key],loc)).join('');
 return `<section class="result-card meaning-card"><div class="meaning-header"><span class="meaning-kicker">MYTHBORN · EBCED / NUMEROLOGY</span><h3>${esc(t.title)}</h3><p>${esc(t.intro)}</p></div><div class="meaning-grid">${explanations}</div><p class="meaning-disclaimer">${esc(t.note)}</p></section>`;
}
function renderPlainSummary(p,loc,other=null){
 const t=EXPLAINED_METRICS[loc]||EXPLAINED_METRICS.tr;
 const n=p.numerology,root=reduce(p.a.total,true);
 const theme=(THEMES[root]&&THEMES[root][loc])||(THEMES[root]||THEMES[1]).tr;
 const meaningful=`<p>${esc(t.greater[0])}: <strong>${p.a.total}</strong>. ${esc(t.greater[1])}</p>`;
 const numerology=`<p>${esc(t.expression[0])}: <strong>${n.expressionRoot}</strong>. ${esc(t.expression[2])}</p>`;
 const dateBlock=n.lifePath!==null?`<p>${esc(t.life[0])}: <strong>${n.lifePath}</strong>. ${esc(t.life[2])}</p>`:'';
 const otherPart=other?`<p>${esc(t.compareNote)}</p>`:'';
 return `<section class="result-card readable-summary"><span class="summary-eyebrow">${esc(t.summaryIntro)}</span><h2>${esc(other?t.compareTitle:t.summaryTitle)}</h2>${meaningful}${numerology}${dateBlock}<p><strong>${esc(theme.title)}:</strong> ${esc(theme.positive)}</p>${otherPart}<p class="meaning-disclaimer">${esc(t.summaryEnding)}</p></section>`;
}

// Render letter breakdown table
function renderAbjadLedger(p, label, loc) {
  const t = I18N[loc] || I18N.tr;
  if (!p.parts.length) return '';

  const rows = p.parts.map((item, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td class="ar-cell" lang="ar" dir="rtl">${esc(item.letter)}</td>
      <td class="num-cell"><strong>${item.value}</strong></td>
      <td class="num-cell muted-cell">${item.small}</td>
      <td class="num-cell gold-cell">${item.running}</td>
    </tr>
  `).join('');

  return `
    <details class="ledger-details">
      <summary class="ledger-summary">
        <span>✦ ${esc(label)} (${p.parts.length} ${t.char} · Toplam: <strong>${p.total}</strong>)</span>
      </summary>
      <div class="table-responsive">
        <table class="ledger-table">
          <thead>
            <tr>
              <th>#</th>
              <th>${t.char}</th>
              <th>${t.val}</th>
              <th>${t.smallVal}</th>
              <th>${t.cumulative}</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </details>
  `;
}

// Render three-layer explanatory engine
function renderThreeLayerInterpretation(p, loc) {
  const t = I18N[loc] || I18N.tr;
  const root = reduce(p.a.total, true);
  const theme = (THEMES[root] && THEMES[root][loc]) || THEMES[root].tr;
  const elDesc = t.elementDesc[p.elementIndex];
  const elName = t.elementNames[p.elementIndex];
  const zodName = t.zodiacNames[p.zodiacIndex];

  return `
    <section class="result-card interpretation-card">
      <h3 class="interp-heading">✦ ${t.threeLayerTitle}</h3>

      <!-- Layer A: Mathematical Verification -->
      <div class="interp-layer layer-math">
        <h4 class="layer-title">${t.layerA}</h4>
        <p class="layer-body">
          <strong>${esc(p.arabic)}</strong> metninin harf toplamı <strong>${p.a.total}</strong> olarak hesaplanmıştır.
          Rakamlar tek basamağa indirgendiğinde temel sayısal kök <strong>${reduce(p.a.total, false)}</strong> 
          ${root !== reduce(p.a.total, false) ? `(Usta Sayı potansiyeli: <strong>${root}</strong>)` : ''} değerine ulaşır.
          ${p.m.parts.length ? `Anne adıyla birleşik ebced toplamı: <strong>${p.full}</strong>.` : ''}
        </p>
      </div>

      <!-- Layer B: Traditional Symbolic Archetype -->
      <div class="interp-layer layer-symbolic">
        <h4 class="layer-title">${t.layerB}</h4>
        <p class="layer-body">
          ${(SYMBOL_INFO[loc]||SYMBOL_INFO.tr).answer}
          <strong>${elName}</strong> · <strong>${zodName}</strong>.
          <em>${elDesc}</em>
        </p>
      </div>

      <!-- Layer C: Modern Numerological Perspective -->
      <div class="interp-layer layer-modern">
        <h4 class="layer-title">${t.layerC} (${root})</h4>
        <h5 class="theme-subtitle">${esc(theme.title)}</h5>
        <div class="theme-content">
          <p><strong>Geleneksel Güçlü Yön:</strong> ${esc(theme.positive)}</p>
          <p><strong>Denge Alanı / Dikkat Teması:</strong> ${esc(theme.care)}</p>
          <div class="reflection-box">
            <strong>Tefekkür Sorusu:</strong>
            <em>"${esc(theme.question)}"</em>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render two-person comparison matrix
function renderComparisonSection(p1, p2, loc) {
  const t = I18N[loc] || I18N.tr;
  const totalCombined = p1.a.total + p2.a.total;
  const rootCombined = reduce(totalCombined, true);
  const theme = (THEMES[rootCombined] && THEMES[rootCombined][loc]) || THEMES[rootCombined].tr;

  const combinedMother = (p1.m.parts.length && p2.m.parts.length)
    ? (p1.full + p2.full)
    : null;

  // Elemental relationship dynamic
  const el1 = p1.elementIndex;
  const el2 = p2.elementIndex;
  let elementDynamic = '';

  if (el1 === el2) {
    elementDynamic = 'Aynı element uyumu: İki kişi benzer algı, benzer tepki hızları ve ortak bir sezgisel mizaç paylaşır. Birbirini hızla anlama kolaylığı sunarken, benzer eksikliklerde ortak farkındalık gerektirir.';
  } else if ((el1 === 1 && el2 === 3) || (el1 === 3 && el2 === 1)) {
    elementDynamic = 'Ateş ve Hava dengesi: Biri diğerine ilham, fikir ve zihinsel canlılık sunarken diğeri bu fikirleri harekete, coşkuya ve eyleme döker.';
  } else if ((el1 === 2 && el2 === 4) || (el1 === 4 && el2 === 2)) {
    elementDynamic = 'Toprak ve Su bereketi: Biri güven, sağlam bir zemin ve kalıcılık sağlarken diğeri derin empati, şefkat ve duygusal besleyicilik getirir.';
  } else {
    elementDynamic = 'Farklı elementlerin zenginliği: Karşıt kutupların birbirini tamamlaması gibi; biri diğerinin alışık olmadığı bakış açılarını geliştirir. Sabırlı iletişim ve karşılıklı kabul zenginleştirici bir denge oluşturur.';
  }

  return `
    <article class="result-card comparison-card">
      <div class="card-head">
        <div>
          <span class="card-prefix">✦ ${esc(p1.name)} &amp; ${esc(p2.name)}</span>
          <h2 class="person-title">${t.comparisonTitle}</h2>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-pill highlight-pill">
          <span class="stat-label">${t.combinedAbjad}</span>
          <strong class="stat-val">${totalCombined}</strong>
        </div>
        <div class="stat-pill">
          <span class="stat-label">${t.combinedReduction}</span>
          <strong class="stat-val">${rootCombined}</strong>
        </div>
        ${combinedMother !== null ? `
          <div class="stat-pill">
            <span class="stat-label">${t.combinedMother}</span>
            <strong class="stat-val">${combinedMother}</strong>
          </div>
        ` : ''}
      </div>

      <div class="comparison-sections">
        <div class="comp-block">
          <h4>✦ ${t.sharedThemes}</h4>
          <p><strong>${esc(theme.title)}:</strong> ${esc(theme.symb)} İki ismin birleşen sayısal frekansı, müşterek yaşam alanında bu temel temayı görünür kılar.</p>
        </div>

        <div class="comp-block">
          <h4>✦ Mizaç ve Element Dinamiği</h4>
          <p>${elementDynamic}</p>
        </div>

        <div class="comp-block">
          <h4>✦ ${t.strengths}</h4>
          <p>${esc(theme.positive)} İlişkide birbirini motive eden ve yapıcı birlikteliği besleyen doğal alan burasıdır.</p>
        </div>

        <div class="comp-block">
          <h4>✦ ${t.caution}</h4>
          <p>${esc(theme.care)} Karşılıklı beklentilerin zorlandığı anlarda bu hassasiyet gözetilmelidir.</p>
        </div>

        <div class="comp-block">
          <h4>✦ ${t.communication}</h4>
          <p>İletişimde kesin yargılardan kaçınarak şu ortak tefekkür sorusu üzerinde durulabilir:</p>
          <div class="reflection-box">
            <em>"${esc(theme.question)}"</em>
          </div>
        </div>

        <div class="comp-block conclusion-block">
          <h4>✦ ${t.neutralConclusion}</h4>
          <p>Sayılar ve harfler insan iradesinin yerine geçmez; ilişkinin başarısını tarafların karşılıklı saygısı, sabrı ve emeği belirler.</p>
          <p class="ethical-notice-badge">⚖ ${t.ethicalDisclaimer}</p>
        </div>
      </div>
    </article>
  `;
}

// Separate comparison journey: each person has an independent form step.
const isComparePage = form?.dataset.analysisMode === 'compare';
const firstBox = document.querySelector('#first-person-container');
const nextButton = document.querySelector('#comparison-next');
const backButton = document.querySelector('#comparison-back');
const submitButton = form?.querySelector('[type="submit"]');
const steps = [...document.querySelectorAll('[data-step-marker]')];
let comparisonStep = 1;
function displayComparisonStep(number) {
  if (!isComparePage) return;
  comparisonStep = number;
  firstBox.hidden = number === 2;
  firstBox.classList.toggle('hidden', number === 2);
  secondBox.hidden = number !== 2;
  secondBox.classList.toggle('hidden', number !== 2);
  nextButton.hidden = number === 2;
  nextButton.classList.toggle('hidden', number === 2);
  backButton.hidden = number === 1;
  backButton.classList.toggle('hidden', number === 1);
  submitButton.hidden = number === 1;
  submitButton.classList.toggle('hidden', number === 1);
  steps.forEach((item,i)=>item.classList.toggle('is-active',i+1 === number));
}
function validateFirstPerson() {
  const name = document.getElementById('aName');
  const arabic = document.getElementById('aArabic');
  if (!name.value.trim()) { name.focus(); name.reportValidity(); return false; }
  if (!arabic.value.trim()) { arabic.focus(); arabic.setCustomValidity('Please provide Arabic spelling.'); arabic.reportValidity(); arabic.setCustomValidity(''); return false; }
  return true;
}
if (isComparePage && nextButton && backButton && secondBox) {
  displayComparisonStep(1);
  nextButton.addEventListener('click',()=>{if(validateFirstPerson()){displayComparisonStep(2);secondBox.querySelector('input')?.focus();}});
  backButton.addEventListener('click',()=>{displayComparisonStep(1);firstBox.querySelector('input')?.focus();});
}

// Form submission handler
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    try {
      const isCompare = isComparePage;
      const getOpt = id => (document.getElementById(id) || {}).value;

      const options = {
        system: getOpt('abjadSystem') || 'mashriqi',
        ta: Number(getOpt('taValue')) || 5,
        shadda: getOpt('shadda') || 'once'
      };

      const path = window.location.pathname;
      const loc = path.startsWith('/en/') ? 'en'
        : path.startsWith('/gr/') ? 'el'
        : path.startsWith('/es/') ? 'es'
        : 'tr';

      const p1 = person('a', options);
      const p2 = isCompare ? person('b', options) : null;

      let html = '';

      // 1. Person A
      html += renderPersonCard(p1, loc, isCompare ? '1. Kişi / Person 1' : '');
      html += renderAbjadLedger(p1.a, 'Ebced Dökümü (Ad Soyad)', loc);
      if (p1.m.parts.length) {
        html += renderAbjadLedger(p1.m, 'Ebced Dökümü (Anne Adı)', loc);
      }
      html += renderReadableExplanation(p1, loc);
      html += renderThreeLayerInterpretation(p1, loc);

      // 2. Person B (if comparison)
      if (p2) {
        html += '<hr class="person-divider">';
        html += renderPersonCard(p2, loc, '2. Kişi / Person 2');
        html += renderAbjadLedger(p2.a, 'Ebced Dökümü (2. Kişi Ad Soyad)', loc);
        if (p2.m.parts.length) {
          html += renderAbjadLedger(p2.m, 'Ebced Dökümü (2. Kişi Anne Adı)', loc);
        }
        html += renderReadableExplanation(p2, loc);
        html += renderThreeLayerInterpretation(p2, loc);

        // 3. Comparison
        html += renderComparisonSection(p1, p2, loc);
      }

      // Human-readable summary is intentionally the last interpretation before printing.
      html += renderPlainSummary(p1, loc, p2);

      // 4. Print / PDF action button
      const t = I18N[loc] || I18N.tr;
      html += `
        <div class="print-action-bar">
          <button type="button" class="btn-print" onclick="window.print()">
            ${t.printBtn}
          </button>
        </div>
      `;

      out.innerHTML = html;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      out.innerHTML = `<div class="error-banner" role="alert"><span>⚠</span> <span>${esc(err.message)}</span></div>`;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

})();
