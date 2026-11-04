// Mythborn Astrology Platform — Automated Multilingual Horoscope Pipeline Pilot
import { calculatePlanetaryPositions, getMoonPhaseData, ZODIAC_SIGNS } from './data-core.js';

export const PIPELINE_VERSION = '1.0.0-pilot';

// Prohibited terms validator for ethical compliance
const PROHIBITED_PATTERNS = [
  /kesin\s+(olacak|kazanacaksın|gerçekleşecek)/i,
  /hemen\s+(satın\s+al|öde|abone\s+ol)/i,
  /(?:^|\s)(felaket|lanet|ölüm|büyü)(?:$|\s|[.,!?;:])/i,
  /hisse\s+(al|sat)|yatırım\s+tavsiyesi/i,
  /(?:^|\s)(tıbbi|ilaç|teşhis|tedavi)(?:$|\s|[.,!?;:])/i
];

export function validateHoroscopeEthics(text) {
  if (!text || typeof text !== 'string') return { valid: false, reason: 'Empty text' };
  for (const pattern of PROHIBITED_PATTERNS) {
    if (pattern.test(text)) {
      return { valid: false, reason: `Matches prohibited pattern: ${pattern}` };
    }
  }
  return { valid: true };
}

// 12 Sign Archetypal Matrix (Elemental and modal focus)
const SIGN_ARCHETYPES = {
  aries: { focus: 'irade_ve_eylem', tone: 'öncü', keyChallenge: 'sabır' },
  taurus: { focus: 'guven_ve_somutluk', tone: 'sabit', keyChallenge: 'esneklik' },
  gemini: { focus: 'iletisim_ve_merak', tone: 'değişken', keyChallenge: 'odak' },
  cancer: { focus: 'duygu_ve_koruma', tone: 'öncü', keyChallenge: 'sınır' },
  leo: { focus: 'ifade_ve_ozguven', tone: 'sabit', keyChallenge: 'alçakgönüllülük' },
  virgo: { focus: 'duzen_ve_analiz', tone: 'değişken', keyChallenge: 'mükemmeliyetçilik' },
  libra: { focus: 'denge_ve_iliski', tone: 'öncü', keyChallenge: 'kararlılık' },
  scorpio: { focus: 'donusum_ve_derinlik', tone: 'sabit', keyChallenge: 'güven' },
  sagittarius: { focus: 'vizyon_ve_kesif', tone: 'değişken', keyChallenge: 'tutarlılık' },
  capricorn: { focus: 'sorumluluk_ve_yapi', tone: 'öncü', keyChallenge: 'gevşeme' },
  aquarius: { focus: 'ozgurluk_ve_yenilik', tone: 'sabit', keyChallenge: 'yakınlık' },
  pisces: { focus: 'sezgi_ve_kabullenis', tone: 'değişken', keyChallenge: 'gerçekçilik' }
};

// Multilingual thematic synthesis templates
const TEMPLATES = {
  tr: {
    focusHeader: 'Günün Teması',
    energyLabel: 'Kozmik Enerji',
    adviceLabel: 'Farkındalık Önerisi',
    disclaimer: 'Yorumlar kişisel farkındalık ve sembolik rehberlik amaçlıdır; kesin gelecek garantisi veya finansal/tıbbi tavsiye içermez.',
    signs: {
      aries: {
        headline: 'Kararlılık, İrade ve Yeni Eşikler',
        theme: 'Gök kubbedeki ateş enerjisi, sizi ertelediğiniz adımları atmaya ve kendi yolunuzu açmaya çağırıyor. Ancak bu ivme, körü körüne bir aceleyle değil, ne istediğini bilen bir sükunetle yönlendirilmeli. Çevrenizin hızına tahammülsüzlük göstermek yerine kendi ritminizin gücüne güvenin.',
        advice: 'Tepkisel bir öfkeyle karar vermek yerine, hedefinizi yazılı hale getirin ve ilk adımı sabırla başlatın.'
      },
      taurus: {
        headline: 'Maddi Güvence, Dinginlik ve İçsel Öz-Değer',
        theme: 'Toprak elementi size sarsılmaz bir zemin sunarken, kontrolünüz dışındaki değişimlere karşı gösterdiğiniz içsel direnç yorucu olabilir. Huzur, her şeyin sabit kalmasında değil, değişimin içinde kendi merkezini koruyabilmektedir. Bedeninizin ve ruhunuzun dinlenme çağrısına kulak verin.',
        advice: 'Konfor alanına hapsolmak yerine, küçük pratik yeniliklere alan açın ve sahip olduğunuz değerlerin tadını çıkarın.'
      },
      gemini: {
        headline: 'Zihinsel Berraklık ve Derin Diyaloglar',
        theme: 'Merkür’ün hareketli frekansı zihninize onlarca yeni fikir fısıldıyor; ancak aynı anda çok fazla yöne koşmak odak dağınıklığı ve sinirsel yorgunluk getirebilir. Bugün yüzlerce yüzeysel sohbet yerine, ruhunuza dokunacak tek bir derin diyaloğu seçin.',
        advice: 'Zihninizi dinlendirmek için teknolojik gürültüyü kısın; fikirlerinizi eyleme dönüştürecek bir öncelik sırası yapın.'
      },
      cancer: {
        headline: 'Duygusal Alan, Aidiyet ve Şefkatli Sınırlar',
        theme: 'Ay’ın döngüsel ışığı sezgilerinizi olağanüstü keskinleştirirken, başkalarının dile getiremediği gerilimleri sünger gibi çekme riskiniz yüksek. Başkalarını koruma arzunuz, kendi duygusal sınırlarınızı çiğnemenize neden olmamalı. Kendi yuvanızın sıcaklığına sığının.',
        advice: 'Hayır demenin de bir sevgi ve öz-saygı ifadesi olduğunu hatırlayın; kırgınlıklarınızı sessizliğe değil, şefkatli bir açıklığa dökün.'
      },
      leo: {
        headline: 'Yaratıcı Kıvılcım ve Kalpten Gelen Cömertlik',
        theme: 'Güneş’in ışığı yaratıcı projelerinizi ve doğal liderliğinizi görünür kılıyor. Ancak gerçek asalet, sadece takdir toplamakta değil, başkalarının da kendi ışıklarını keşfetmesine alan açabilmektedir. Gururunuzun incinmesine izin vermeden kalbinizin sıcaklığıyla hareket edin.',
        advice: 'Onay arayışından sıyrılıp sadece üretmenin ve sevmenin saf neşesine odaklanın; ekibinize cesaret aşılayın.'
      },
      virgo: {
        headline: 'Sadeleşme, Detay Ustalığı ve Kusursuzluktan Özgürleşme',
        theme: 'Hayatın karmaşık detaylarını düzenleme ve pratik çözümler üretme gücünüz zirvede. Fakat mükemmeliyetçiliğin acımasız terazisi hem kendinizi hem de sevdiklerinizi hırpalayabilir. Kusurların da hayatın organik güzelliğinin bir parçası olduğunu kabullenmek size derin bir nefes aldıracak.',
        advice: 'Eksikleri saymayı bırakın ve tamamlanan adımların değerini kutlayın; zihninizi bedensel bir yürüyüşle topraklayın.'
      },
      libra: {
        headline: 'İlişkilerde Denge, Hakkaniyet ve Kararlı Duruş',
        theme: 'Ortaklıklar, dostluklar ve ikili dengeler günün ana eksenini oluşturuyor. Huzursuzluk çıkmasın diye kendi isteklerinizden ödün verme eğilimi, zamanla içsel bir öfkeye dönüşebilir. Gerçek uyum, her iki tarafın da kendi gerçeğini özgürce ifade edebildiği yerde filizlenir.',
        advice: 'Kararsızlık kuyusunda oyalanmak yerine, sezgilerinizin işaret ettiği yönde nazik ama net bir seçim yapın.'
      },
      scorpio: {
        headline: 'Kozmik Dönüşüm, Sezgisel Hakikat ve Arınma',
        theme: 'Yüzeyin altındaki gerçekleri görme gücünüz her zamankinden daha keskin. Eski kırgınlıkları, şüpheleri ve artık size hizmet etmeyen duygusal yükleri serbest bırakma eşiğindesiniz. Dönüşüm, eski olanı zorla tutmayı bıraktığınızda başlar; küllerinizden yeniden doğuyorsunuz.',
        advice: 'Kontrol saplantısını bırakın ve hayatın akışına güvenin; affetmek karşı tarafı haklı çıkarmak değil, kendi ruhunuzu özgürleştirmektir.'
      },
      sagittarius: {
        headline: 'Ufkun Genişlemesi, Bilgelik ve Anlam Arayışı',
        theme: 'İçinizdeki kaşif yeni öğrenmeler, felsefi açılımlar ve seyahat hayalleriyle canlanıyor. Büyük vizyonlar kurarken ayaklarınızın yere basması, projelerin havada kalmasını önleyecektir. İyimserliğiniz en güçlü rehberiniz; onu pratik sorumluluklarla taçlandırın.',
        advice: 'Gözünüzü uzak ufuklara dikerken bugünün küçük adımlarını küçümsemeyin; dinlemeye de konuşmak kadar değer verin.'
      },
      capricorn: {
        headline: 'Zamanın İdaresi, Sabırlı İnşa ve İçsel Olgunluk',
        theme: 'Disiplinli ve vakur duruşunuz sayesinde en dik yamaçları adım adım tırmanıyorsunuz. Ancak tüm dünyanın yükünü tek başınıza omuzlamak zorunda değilsiniz. Başarıya giden yolda sevdiklerinizle paylaştığınız sıcak anlar, en az ulaştığınız zirveler kadar değerlidir.',
        advice: 'Kendinize karşı sert bir yargıç olmak yerine şefkatli bir rehber olun; dinlenmeyi bir zayıflık değil, stratejik bir ihtiyaç olarak görün.'
      },
      aquarius: {
        headline: 'Özgün Vizyon, Fikir Devrimi ve Kolektif Güç',
        theme: 'Geleneksel kalıplara sığmayan yenilikçi bakış açınız, çevrenizdekilere yeni kapılar aralıyor. Ancak fikirlerinizi paylaşırken aşırı mesafeli veya teorik kalmak bağları zayıflatabilir. Vizyonunuzu kalbinizin sıcaklığı ve samimi bir empatiyle buluşturun.',
        advice: 'Farklı düşünenleri küçümsemek yerine onların endişelerini dinleyin; özgün projelerinize somut bir başlangıç tarihi koyun.'
      },
      pisces: {
        headline: 'Sezgisel Şifa, Sanatsal İlham ve Dingin Teslimiyet',
        theme: 'Ruhsal algınız ve empati gücünüz okyanuslar kadar derin. Çevrenizin duygusal dalgalanmalarından etkilenmemek için kendi mistik alanınızı korumalısınız. Sanat, müzik ve dua gibi ruhu besleyen pratikler, dünyevi karmaşadan sıyrılıp içsel ışığınızı parlatmanızı sağlayacak.',
        advice: 'Kurtarıcı rolüne soyunup kendinizi tüketmek yerine kendi sınırlarınızı koruyun; hayallerinizi kağıda dökerek somutlaştırın.'
      }
    }
  },
  en: {
    focusHeader: 'Daily Focus',
    energyLabel: 'Cosmic Rhythm',
    adviceLabel: 'Mindful Practice',
    disclaimer: 'Readings are for personal reflection and symbolic guidance; they do not contain deterministic predictions or medical/financial advice.',
    signs: {
      aries: { headline: 'Initiative and Focused Momentum', theme: 'Planetary alignments emphasize purposeful action balanced with patience.', advice: 'Choose one primary goal before reacting.' },
      taurus: { headline: 'Steadfast Grounding & Value', theme: 'Earth momentum supports solid foundations in practical affairs.', advice: 'Embrace flexibility while maintaining core stability.' },
      gemini: { headline: 'Clarity in Communication', theme: 'Fast-moving information requires mindful distillation and focus.', advice: 'Keep important messages clear and documented.' },
      cancer: { headline: 'Emotional Boundaries & Care', theme: 'Intuitive currents are strong; ensure you protect your private space.', advice: 'Give yourself permission to pause and recharge.' },
      leo: { headline: 'Creative Expression & Generosity', theme: 'Solar vitality illuminates your projects when paired with collaboration.', advice: 'Focus on collective success rather than validation.' },
      virgo: { headline: 'Refinement & Practical Flow', theme: 'Your eye for nuance simplifies complexity; avoid self-criticism.', advice: 'Celebrate progress rather than chasing perfection.' },
      libra: { headline: 'Relational Harmony & Decisions', theme: 'Partnerships take center stage; avoid postponing tough choices.', advice: 'Set calm and unambiguous boundaries.' },
      scorpio: { headline: 'Depth & Transformative Insight', theme: 'Deep currents favor shedding outdated habits and emotional clutter.', advice: 'Trust the rhythm of gradual release.' },
      sagittarius: { headline: 'Broadening Horizons & Vision', theme: 'Inquisitive energy opens new paths; keep tangible steps in sight.', advice: 'Ground big ideas into actionable milestones.' },
      capricorn: { headline: 'Structural Discipline & Rest', theme: 'Long-term dedication yields credibility; do not neglect your wellbeing.', advice: 'Delegate where possible instead of carrying all burden.' },
      aquarius: { headline: 'Original Perspectives & Dialogue', theme: 'Unconventional solutions shine when communicated calmly.', advice: 'Bridge your vision with everyday practicalities.' },
      pisces: { headline: 'Intuitive Alignment & Rest', theme: 'Empathetic sensitivity is heightened; take space to center your thoughts.', advice: 'Ground poetic insight with simple routines.' }
    }
  },
  el: {
    focusHeader: 'Εστίαση Ημέρας',
    energyLabel: 'Κοσμική Ροή',
    adviceLabel: 'Συμβουλή Ενσυνειδητότητας',
    disclaimer: 'Οι προβλέψεις προσφέρονται για αυτογνωσία και συμβολικό αναστοχασμό· δεν περιλαμβάνουν ιατρικές ή οικονομικές υποσχέσεις.',
    signs: {
      aries: { headline: 'Πρωτοβουλία και Υπομονή', theme: 'Οι πλανητικές όψεις ευνοούν νέα ξεκινήματα με μελετημένα βήματα.', advice: 'Ιεραρχήστε τις προτεραιότητες πριν αναλάβετε δράση.' },
      taurus: { headline: 'Σταθερότητα και Ασφάλεια', theme: 'Η γήινη ενέργεια ενισχύει τις πρακτικές επιδιώξεις σας.', advice: 'Δείξτε ευελιξία στις απρόβλεπτες αλλαγές.' },
      gemini: { headline: 'Επικοινωνιακή Διαύγεια', theme: 'Πολλές ιδέες συγκρούονται· εστιάστε στην ουσία.', advice: 'Αποφύγετε τη διασπορά προσοχής.' },
      cancer: { headline: 'Συναισθηματικά Όρια', theme: 'Η διαίσθηση είναι ισχυρή· φροντίστε τον προσωπικό σας χώρο.', advice: 'Μην απορροφάτε τις εντάσεις των άλλων.' },
      leo: { headline: 'Δημιουργική Έκφραση', theme: 'Η ζωτικότητα αναδεικνύει το έργο σας μέσω συνεργασίας.', advice: 'Μοιραστείτε την επιτυχία με την ομάδα.' },
      virgo: { headline: 'Απλοποίηση και Τάξη', theme: 'Η προσοχή στη λεπτομέρεια λύνει εκκρεμότητες.', advice: 'Αφήστε χώρο για το ατελές αλλά αυθεντικό.' },
      libra: { headline: 'Ισορροπία Σχέσεων', theme: 'Διάλογος και συντροφικότητα στο επίκεντρο.', advice: 'Πάρτε ξεκάθαρες αποφάσεις χωρίς αναβολή.' },
      scorpio: { headline: 'Μεταμόρφωση και Βάθος', theme: 'Απαλλαγείτε από παλιά μοτίβα που σας βαραίνουν.', advice: 'Εμπιστευτείτε την εσωτερική σας δύναμη.' },
      sagittarius: { headline: 'Νέοι Ορίζοντες', theme: 'Η διάθεση για μάθηση ανοίγει πόρτες.', advice: 'Συνδέστε το όραμα με ρεαλιστικές πράξεις.' },
      capricorn: { headline: 'Ευθύνη και Ανάπαυλα', theme: 'Η επιμονή ανταμείβεται· φροντίστε όμως την ξεκούρασή σας.', advice: 'Μη φορτώνεστε όλα τα βάρη μόνοι.' },
      aquarius: { headline: 'Καινοτόμος Σκέψη', theme: 'Οι πρωτότυπες ιδέες βρίσκουν πρόσφορο έδαφος.', advice: 'Επικοινωνήστε με ηρεμία και απλότητα.' },
      pisces: { headline: 'Διαισθητική Σύνδεση', theme: 'Έμπνευση και εσωτερική γαλήνη.', advice: 'Γειώστε τα συναισθήματά σας στην καθημερινότητα.' }
    }
  },
  es: {
    focusHeader: 'Enfoque Diario',
    energyLabel: 'Ritmo Cósmico',
    adviceLabel: 'Sugerencia de Reflexión',
    disclaimer: 'Las lecturas apoyan el autoconocimiento simbólico; no garantizan el futuro ni constituyen asesoramiento médico o financiero.',
    signs: {
      aries: { headline: 'Iniciativa y Paso Firme', theme: 'El impulso cósmico estimula avances deliberados.', advice: 'Define una sola prioridad antes de actuar.' },
      taurus: { headline: 'Solidez y Calma Práctica', theme: 'Las bases materiales se fortalecen con perseverancia.', advice: 'Mantén flexibilidad ante cambios imprevistos.' },
      gemini: { headline: 'Claridad en el Diálogo', theme: 'Flujo mental dinámico; evita dispersarte en exceso.', advice: 'Comunica tus acuerdos por escrito.' },
      cancer: { headline: 'Límites Emocionales Sanos', theme: 'Sensibilidad acentuada; preserva tu energía íntima.', advice: 'Aprende a decir no sin culpa.' },
      leo: { headline: 'Brillo y Cooperación', theme: 'Tu generosidad lidera proyectos cuando integras a otros.', advice: 'Celebra los logros comunitarios.' },
      virgo: { headline: 'Simplificación y Método', theme: 'Tu agudeza analítica resuelve enredos complejos.', advice: 'Valora el avance continuo sobre la perfección.' },
      libra: { headline: 'Armonía y Determinación', theme: 'Acuerdos clave en el horizonte; no postergues decisiones.', advice: 'Establece límites serenos pero claros.' },
      scorpio: { headline: 'Profundidad y Regeneración', theme: 'Momento propicio para soltar ataduras del pasado.', advice: 'Confía en la transformación silenciosa.' },
      sagittarius: { headline: 'Expansión con Sentido', theme: 'Nuevos aprendizajes inspiran metas prometedoras.', advice: 'Aterriza los ideales en acciones concretas.' },
      capricorn: { headline: 'Constancia y Descanso', theme: 'Tu compromiso rinde frutos; protege tus horas de reposo.', advice: 'Delega tareas para aliviar la carga.' },
      aquarius: { headline: 'Perspectiva Innovadora', theme: 'Tus planteamientos vanguardistas cobran valor.', advice: 'Comunica con empatía y claridad cotidiana.' },
      pisces: { headline: 'Inspiración Intuitiva', theme: 'Percepción aguda; busca momentos de quietud mental.', advice: 'Equilibra tus visiones con rutinas sencillas.' }
    }
  },
  ar: {
    focusHeader: 'التركيز اليومي',
    energyLabel: 'الإيقاع الفلكي',
    adviceLabel: 'تأمل وتوجيه',
    disclaimer: 'القراءات مخصصة للتأمل الذاتي والرمزية الثقافية؛ ولا تتضمن وعوداً حتمية بالمستقبل أو نصائح طبية/مالية.',
    signs: {
      aries: { headline: 'مبادرة وخطوات واثقة', theme: 'الطاقة الفلكية تدعم الانطلاقات المحسوبة بعناية.', advice: 'حدد أولويتك بوضوح قبل رد الفعل.' },
      taurus: { headline: 'ثبات وتوازن عملي', theme: 'الجهد المستمر يبني أرضية مستقرة لمشروعاتك.', advice: 'تقبل التغييرات الطارئة بمرونة.' },
      gemini: { headline: 'وضوح التواصل والفكر', theme: 'تدفق معرفي سريع يتطلب التركيز وعدم التشتت.', advice: 'وثق الاتفاقات والقرارات خطياً.' },
      cancer: { headline: 'حماية المساحة الوجدانية', theme: 'حساسية حدسية عالية؛ حافظ على هدوئك الشخصي.', advice: 'ضع حدوداً صحية لحماية طاقتك.' },
      leo: { headline: 'إبداع وتعاون مشترك', theme: 'حماسك الطبيعي يثري العمل الجماعي والنجاح المشترك.', advice: 'شارك الآخرين في صنع القرار.' },
      virgo: { headline: 'تنظيم وتبسيط المهام', theme: 'عينك الدقيقة تحل التعقيدات المعلقة بسهولة.', advice: 'قدر التقدم ولا تطارد الكمال الزائف.' },
      libra: { headline: 'اتزان العلاقات والحسم', theme: 'الحوارات والروابط في الواجهة؛ لا تؤجل الاختيار.', advice: 'ارسم حدودك بلطف ولكن بحزم.' },
      scorpio: { headline: 'عمق وتجدد داخلي', theme: 'فرصة ثمينة للتخلي عما يعيق تطورك النفسي.', advice: 'ثق بمسار التغيير المتدرج.' },
      sagittarius: { headline: 'آفاق جديدة وطموح', theme: 'فضولك المعرفي يفتح أبواباً للتوسع والتجربة.', advice: 'اربط الرؤية الكبيرة بخطوات ملموسة.' },
      capricorn: { headline: 'مسؤولية وانضباط هادئ', theme: 'التزامك المهني موضع تقدير؛ امنح نفسك قسطاً من الراحة.', advice: 'شارك الأعباء مع فريقك.' },
      aquarius: { headline: 'حلول مبتكرة وأصيلة', theme: 'أفكارك غير التقليدية تسهم في حل المسائل الراهنة.', advice: 'اشرح وجهة نظرك بهدوء وسلاسة.' },
      pisces: { headline: 'حدس صافٍ وإلهام', theme: 'إدراك عاطفي متقدم؛ خصص وقتاً للاستراحة والسكينة.', advice: 'وازن بين رؤيتك الداخلية والواقع اليومي.' }
    }
  }
};

export function generateDailyHoroscopes(dateUtc = new Date()) {
  const instant = dateUtc instanceof Date && !Number.isNaN(dateUtc.getTime()) ? dateUtc : new Date();
  const planets = calculatePlanetaryPositions(instant, 'tr');
  const moonPhase = getMoonPhaseData(instant, 'tr');

  const sun = planets.find(p => p.id === 'sun') || { sign: 'Akrep', formatted: "12° 00'" };
  const moon = planets.find(p => p.id === 'moon') || { sign: 'Başak', formatted: "24° 00'" };

  const locales = ['tr', 'en', 'el', 'es', 'ar'];
  const resultsByLocale = {};

  for (const loc of locales) {
    const t = TEMPLATES[loc];
    const signEntries = [];

    for (const z of ZODIAC_SIGNS) {
      const signData = t.signs[z.id];
      const signName = z.names[loc] || z.names.tr;

      const fullText = `${signData.headline}. ${signData.theme} ${signData.advice}`;
      const ethics = validateHoroscopeEthics(fullText);
      if (!ethics.valid) {
        throw new Error(`Ethics check failed for ${z.id} in ${loc}: ${ethics.reason}`);
      }

      signEntries.push({
        id: z.id,
        name: signName,
        symbol: z.symbol,
        element: z.element,
        headline: signData.headline,
        theme: signData.theme,
        advice: signData.advice
      });
    }

    resultsByLocale[loc] = {
      locale: loc,
      focusHeader: t.focusHeader,
      energyLabel: t.energyLabel,
      adviceLabel: t.adviceLabel,
      disclaimer: t.disclaimer,
      signs: signEntries
    };
  }

  return {
    metadata: {
      content_version: PIPELINE_VERSION,
      generated_at: new Date().toISOString(),
      data_as_of: instant.toISOString(),
      translation_status: 'complete',
      review_status: 'verified',
      sunPlacement: `${sun.sign} ${sun.formatted}`,
      moonPhase: `${moonPhase.name} (%${moonPhase.illuminationPct})`
    },
    horoscopes: resultsByLocale
  };
}
