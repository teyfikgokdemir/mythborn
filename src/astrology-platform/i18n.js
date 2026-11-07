// Mythborn Astrology Platform — 5-Language Dictionary & Localization Core

export const ASTROLOGY_LOCALES = {
  tr: {
    code: 'tr',
    lang: 'tr',
    dir: 'ltr',
    prefix: '',
    navBrand: 'MYTHBORN',
    navTagline: 'Hassas Astronomi ve Kozmik Rehberlik Platformu',
    timeStandardNotice: 'Tüm saatler 24 saat formatında ve Europe/Istanbul (TSI) referanslıdır.',
    menu: {
      home: 'Ana Sayfa',
      natal: 'Doğum Haritası',
      zodiac: '12 Burç Rehberi',
      calendar: 'Gökyüzü Takvimi',
      retros: 'Gezegen Retroları',
      transits: 'Canlı Transitler',
      synastry: 'Sinastri & Uyum',
      glossary: 'Astroloji Sözlüğü',
      approach: 'Yöntem ve Etik',
      ctaQuick: 'Ücretsiz Haritanı Çıkar',
      menuToggle: 'Menü'
    },
    hero: {
      eyebrow: 'AÇIK KAYNAKLI EFEMERİS İLE HESAPLANAN KOZMİK REHBERİNİZ',
      title: 'Gökyüzünün Haritası, Ruhun Pusulası.',
      lead: 'Açık kaynak efemeris modelleri ve matematiksel astronomi hesaplamalarıyla doğum haritanızı çıkarın; Güneş, Ay ve yükselen burcunuzun derin dinamiklerini keşfedin.',
      ctaPrimary: 'Ücretsiz Doğum Haritanı Çıkar',
      ctaSecondary: 'Bugünkü Gökyüzünü İncele'
    },
    quickNatal: {
      title: 'Hızlı Doğum Haritası Başlangıcı',
      sub: 'Doğum tarihinizi, saatinizi (24 saat) ve şehrinizi girerek büyük üçlünüzü saniyeler içinde hesaplayın.',
      labelDate: 'Doğum Tarihi',
      labelTime: 'Doğum Saati (24s: 00:00 - 23:59)',
      labelCity: 'Doğum Şehri',
      unknownTime: 'Doğum saatimi bilmiyorum (Güneş doğumu haritası)',
      submitBtn: 'Haritamı ve Büyük Üçlümü Göster'
    },
    bigThree: {
      title: 'Kozmik Büyük Üçlü: Kimlik, Ruh ve Arayüz',
      sub: 'Astrolojide kişilik sadece Güneş burcundan ibaret değildir; bu üçlü arketip hayatınızın ana koordinatlarını belirler.',
      sunTitle: 'Güneş: Öz Kimlik & İrade',
      sunDesc: 'Bilinçli benliğinizi, yaşama amacınızı ve parladığınız temel yeteneklerinizi simgeler.',
      moonTitle: 'Ay: Duygusal Dünya & Güvenlik',
      moonDesc: 'Bilinçaltı tepkilerinizi, içsel güvenlik ihtiyacınızı ve duygusal hafızanızı yönetir.',
      risingTitle: 'Yükselen (ASC): Dünyayla Temas Arayüzü',
      risingDesc: 'Doğum anınızda doğu ufkunda yükselen burçtur; dış dünyayı karşılama tarzınız ve yaşam filtrenizdir.'
    },
    sections: {
      zodiacTitle: '12 Burç ve Arketipsel Nitelikler',
      zodiacSub: 'Her burcun doğal rehberini, element dengesini ve yönetici gezegen dinamiklerini keşfedin.',
      skyTitle: 'Bugünkü Gökyüzü ve Ay Evreleri',
      skySub: 'Gerçek zamanlı jeosantrik gezegen boylamları ve yaklaşan Ay döngüleri (24 saat formatında).',
      toolsTitle: 'Astrolojik Analiz Araçları',
      toolsSub: 'Kişisel doğum haritanızdan gezegen transitlerine kadar tüm hesaplama modülleri.',
      glossaryTitle: 'Astroloji Sözlüğü ve Kavramlar',
      glossarySub: 'Ev sistemleri, açı kalıpları, elementler ve temel astrolojik terimlerin yalın rehberi.',
      ethicsTitle: 'Yöntemimiz ve Astrolojinin Sınırları',
      ethicsSub: 'Mythborn kaderci kehanet değil, açık astronomi verisine dayalı sembolik öz-farkındalık sunar.'
    },
    tools: [
      { tag: 'NATAL HARİTA', title: 'Doğum Haritası', description: 'Doğum tarihi, kesin saat ve koordinat verisiyle Güneş, Ay, Yükselen, gezegen evleri ve majör açıları keşfedin.', cta: 'Haritayı Çıkar', route: 'natal' },
      { tag: 'İLİŞKİ DİNAMİĞİ', title: 'Sinastri & Uyum', description: 'İki doğum haritasının gezegensel açılarını karşılaştırarak duygusal uyum, çekim ve iletişim temalarını inceleyin.', cta: 'Sinastriyi İncele', route: 'synastry' },
      { tag: 'GÖKYÜZÜ RİTMİ', title: 'Gökyüzü Takvimi', description: 'Gerçek zamanlı Ay fazlarını, aydınlanma oranını, yeniay ve dolunay döngülerini takip edin.', cta: 'Takvimi Gör', route: 'calendar' },
      { tag: 'ANLIK GÖKYÜZÜ', title: 'Canlı Transitler', description: 'Gezegenlerin güncel zodyak derecelerini, hızlarını ve aktif gökyüzü transitlerini inceleyin.', cta: 'Transitleri Gör', route: 'transits' },
      { tag: 'RETRO DÖNEMLERİ', title: 'Gezegen Retroları', description: 'Merkür, Venüs, Mars ve dış gezegenlerin 2026/2027 geri hareket ve gölge dönemlerini keşfedin.', cta: 'Retroları Keşfet', route: 'retros' },
      { tag: 'TERMİNOLOJİ', title: 'Astroloji Sözlüğü', description: 'Ev sistemleri, orb toleransları, apeks, ayanamsha ve astroloji terimleri için başvuru rehberi.', cta: 'Sözlüğü Oku', route: 'glossary' }
    ],
    disclaimer: 'UYARI VE YASAL BİLGİLENDİRME: Mythborn platformunda sunulan tüm astrolojik hesaplamalar, gezegen konumları ve sembolik yorumlar kişisel farkındalık, kültürel araştırma ve eğlence amaçlıdır. Profesyonel psikolojik, hukuki, finansal veya tıbbi tavsiye yerine geçmez.',
    footer: {
      colTools: 'Astroloji Araçları',
      colZodiac: '12 Burç Rehberi',
      colLibrary: 'Kütüphane ve Bilgi',
      colLegal: 'Yasal ve Kurumsal',
      copyright: '© 2026 MYTHBORN. Tüm hakları saklıdır.',
      qctCredit: 'QCT Commerce tarafından geliştirilmiştir'
    }
  },
  en: {
    code: 'en',
    lang: 'en',
    dir: 'ltr',
    prefix: '/en',
    navBrand: 'MYTHBORN',
    navTagline: 'Precision Astronomy & Cosmic Guidance Platform',
    timeStandardNotice: 'All times are in 24-hour format referenced to Europe/Istanbul (TRT) and UTC.',
    menu: {
      home: 'Home',
      natal: 'Birth Chart',
      zodiac: '12 Zodiac Signs',
      calendar: 'Sky Calendar',
      retros: 'Retrogrades',
      transits: 'Current Transits',
      synastry: 'Synastry & Compatibility',
      glossary: 'Astrology Glossary',
      approach: 'Method & Ethics',
      ctaQuick: 'Calculate Free Chart',
      menuToggle: 'Menu'
    },
    hero: {
      eyebrow: 'YOUR COSMIC GUIDE CALCULATED WITH OPEN-SOURCE EPHEMERIS',
      title: 'Map of the Sky, Compass of the Soul.',
      lead: 'Calculate your accurate birth chart using open-source ephemeris models and mathematical astronomy; explore the deep dynamics of your Sun, Moon, and Rising sign.',
      ctaPrimary: 'Generate Your Free Birth Chart',
      ctaSecondary: 'Explore Today’s Sky'
    },
    quickNatal: {
      title: 'Quick Birth Chart Starter',
      sub: 'Enter your birth date, time (24h format), and city to calculate your Big Three in seconds.',
      labelDate: 'Date of Birth',
      labelTime: 'Time of Birth (24h: 00:00 - 23:59)',
      labelCity: 'City of Birth',
      unknownTime: 'I do not know my birth time (Sunrise chart)',
      submitBtn: 'Show My Chart & Big Three'
    },
    bigThree: {
      title: 'The Cosmic Big Three: Identity, Soul & Interface',
      sub: 'In astrology, your personality is never defined by your Sun sign alone; this foundational triad establishes your primary coordinates.',
      sunTitle: 'Sun: Core Identity & Will',
      sunDesc: 'Represents your conscious ego, life purpose, and foundational creative vitality.',
      moonTitle: 'Moon: Emotional Soul & Safety',
      moonDesc: 'Governs subconscious emotional responses, attachment styles, and inner comfort needs.',
      risingTitle: 'Rising (ASC): Interface with the World',
      risingDesc: 'The zodiac sign ascending on the eastern horizon at birth; your perceptual lens and entrance to reality.'
    },
    sections: {
      zodiacTitle: '12 Zodiac Archetypes & Guides',
      zodiacSub: 'Explore authentic guides, elemental balances, and planetary ruler dynamics for each sign.',
      skyTitle: 'Current Sky & Lunar Phases',
      skySub: 'Real-time geocentric planetary longitudes and upcoming lunations displayed in 24-hour format.',
      toolsTitle: 'Astrological Analysis Modules',
      toolsSub: 'From personalized natal calculation to transit dynamics and relationship synastry.',
      glossaryTitle: 'Astrological Glossary & Concepts',
      glossarySub: 'A clear guide to house systems, aspect geometry, polarities, and celestial terminology.',
      ethicsTitle: 'Our Methodology & Ethical Boundaries',
      ethicsSub: 'Mythborn provides symbolic self-reflection and open astronomical data, never fatalistic prophecy.'
    },
    tools: [
      { tag: 'NATAL CHART', title: 'Birth Chart', description: 'Explore the Sun, Moon, Rising sign, planetary houses and major aspects using your birth data and coordinates.', cta: 'Generate Chart', route: 'natal' },
      { tag: 'RELATIONSHIP DYNAMICS', title: 'Synastry & Compatibility', description: 'Compare planetary contacts between two birth charts across emotional, attraction and communication themes.', cta: 'Explore Synastry', route: 'synastry' },
      { tag: 'CELESTIAL RHYTHM', title: 'Sky Calendar', description: 'Follow real-time Moon phases, illumination, New Moon and Full Moon cycles.', cta: 'View Calendar', route: 'calendar' },
      { tag: 'CURRENT SKY', title: 'Current Transits', description: 'Inspect current planetary zodiac degrees, speeds and the day’s active transits.', cta: 'View Transits', route: 'transits' },
      { tag: 'RETROGRADE CYCLES', title: 'Planetary Retrogrades', description: 'Explore the 2026/2027 retrograde and shadow periods of Mercury, Venus, Mars and the outer planets.', cta: 'Explore Retrogrades', route: 'retros' },
      { tag: 'TERMINOLOGY', title: 'Astrology Glossary', description: 'Use a reference guide to house systems, orb tolerances, apexes, ayanamsha and astrological terms.', cta: 'Read Glossary', route: 'glossary' }
    ],
    disclaimer: 'DISCLAIMER & LEGAL NOTICE: All astrological calculations, planetary positions, and symbolic interpretations on Mythborn are provided strictly for self-reflection, educational context, and entertainment. They never substitute for licensed psychological, medical, legal, or financial counsel.',
    footer: {
      colTools: 'Astrology Tools',
      colZodiac: '12 Zodiac Signs',
      colLibrary: 'Library & Guides',
      colLegal: 'Legal & Privacy',
      copyright: '© 2026 MYTHBORN. All rights reserved.',
      qctCredit: 'Engineered by QCT Commerce'
    }
  },
  el: {
    code: 'el',
    lang: 'el',
    dir: 'ltr',
    prefix: '/gr',
    navBrand: 'MYTHBORN',
    navTagline: 'Πλατφόρμα Αστρονομικής Ακρίβειας και Κοσμικής Καθοδήγησης',
    timeStandardNotice: 'Όλες οι ώρες είναι σε 24ωρη μορφή με αναφορά στην ώρα Europe/Istanbul (TSI) και UTC.',
    menu: {
      home: 'Αρχική',
      natal: 'Γενέθλιος Χάρτης',
      zodiac: '12 Ζώδια',
      calendar: 'Ουράνιο Ημερολόγιο',
      retros: 'Ανάδρομοι Πλανήτες',
      transits: 'Διελεύσεις',
      synastry: 'Συναστρία',
      glossary: 'Λεξικό Αστρολογίας',
      approach: 'Μέθοδος & Ηθική',
      ctaQuick: 'Υπολογισμός Χάρτη',
      menuToggle: 'Μενού'
    },
    hero: {
      eyebrow: 'ΚΟΣΜΙΚΟΣ ΟΔΗΓΟΣ ΜΕ ΜΑΘΗΜΑΤΙΚΕΣ ΕΦΗΜΕΡΙΔΕΣ ΑΝΟΙΧΤΟΥ ΚΩΔΙΚΑ',
      title: 'Χάρτης του Ουρανού, Πυξίδα της Ψυχής.',
      lead: 'Υπολογίστε με μαθηματική ακρίβεια τον γενέθλιο χάρτη σας με ανοιχτά αστρονομικά μοντέλα· ανακαλύψτε τις βαθιές δυναμικές του Ήλιου, της Σελήνης και του Ωροσκόπου σας.',
      ctaPrimary: 'Υπολογισμός Γενέθλιου Χάρτη',
      ctaSecondary: 'Εξερευνήστε τον Σημερινό Ουρανό'
    },
    quickNatal: {
      title: 'Γρήγορος Υπολογισμός Γενέθλιου Χάρτη',
      sub: 'Εισάγετε ημερομηνία, ώρα (24ωρη) και πόλη γέννησης για να ανακαλύψετε την κοσμική σας τριάδα.',
      labelDate: 'Ημερομηνία Γέννησης',
      labelTime: 'Ώρα Γέννησης (24ωρη: 00:00 - 23:59)',
      labelCity: 'Πόλη Γέννησης',
      unknownTime: 'Δεν γνωρίζω την ακριβή ώρα (Χάρτης Ανατολής Ήλιου)',
      submitBtn: 'Εμφάνιση Χάρτη & Μεγάλης Τριάδας'
    },
    bigThree: {
      title: 'Η Κοσμική Μεγάλη Τριάδα: Ταυτότητα, Ψυχή & Διεπαφή',
      sub: 'Στην αστρολογία η προσωπικότητα δεν εξαντλείται μόνο στο ζώδιο του Ήλιου σας· αυτή η τριάδα καθορίζει τις βασικές σας συντεταγμένες.',
      sunTitle: 'Ήλιος: Ταυτότητα & Συνειδητή Βούληση',
      sunDesc: 'Αντιπροσωπεύει τη συνειδητή πρόθεση, το σκοπό ζωής και τη ζωτική δημιουργική δύναμη.',
      moonTitle: 'Σελήνη: Συναισθηματική Ασφάλεια & Ψυχή',
      moonDesc: 'Κυβερνά τις υποσυνείδητες αντιδράσεις, τις εσωτερικές ανάγκες φροντίδας και τη συναισθηματική μνήμη.',
      risingTitle: 'Ωροσκόπος (ASC): Η Διεπαφή με τον Κόσμο',
      risingDesc: 'Το ζώδιο που ανέτειλε στον ανατολικό ορίζοντα τη στιγμή της γέννησής σας· ο τρόπος που εισέρχεστε στην πραγματικότητα.'
    },
    sections: {
      zodiacTitle: 'Τα 12 Ζώδια & Αρχέτυποι Οδηγοί',
      zodiacSub: 'Ανακαλύψτε τα στοιχεία, τις ποιότητες και τους πλανητικούς κυβερνήτες κάθε ζωδίου.',
      skyTitle: 'Ζωντανός Ουρανός & Φάσεις Σελήνης',
      skySub: 'Πραγματικές γεωκεντρικές θέσεις πλανητών και επερχόμενες σεληνιακές φάσεις σε 24ωρη ώρα.',
      toolsTitle: 'Εργαλεία Αστρολογικής Ανάλυσης',
      toolsSub: 'Από τον προσωπικό χάρτη μέχρι τις διελεύσεις και τη συναστρία σχέσεων.',
      glossaryTitle: 'Λεξικό Αστρολογίας & Έννοιες',
      glossarySub: 'Ένας σαφής οδηγός για τα συστήματα οίκων, τις γωνιακές όψεις και τους αστρονομικούς όρους.',
      ethicsTitle: 'Η Μεθοδολογία μας & Ηθικά Όρια',
      ethicsSub: 'Το Mythborn προσφέρει συμβολική αυτογνωσία με ανοιχτά δεδομένα, όχι μοιρολατρική πρόβλεψη.'
    },
    tools: [
      { tag: 'ΓΕΝΕΘΛΙΟΣ ΧΑΡΤΗΣ', title: 'Γενέθλιος Χάρτης', description: 'Εξερευνήστε Ήλιο, Σελήνη, Ωροσκόπο, πλανητικούς οίκους και κύριες όψεις με τα στοιχεία γέννησής σας.', cta: 'Υπολογισμός Χάρτη', route: 'natal' },
      { tag: 'ΔΥΝΑΜΙΚΗ ΣΧΕΣΕΩΝ', title: 'Συναστρία & Συμβατότητα', description: 'Συγκρίνετε τις πλανητικές επαφές δύο χαρτών σε συναισθηματικά και επικοινωνιακά θέματα.', cta: 'Εξερευνήστε τη Συναστρία', route: 'synastry' },
      { tag: 'ΟΥΡΑΝΙΟΣ ΡΥΘΜΟΣ', title: 'Ουράνιο Ημερολόγιο', description: 'Παρακολουθήστε τις φάσεις της Σελήνης, τον φωτισμό και τους κύκλους Νέας Σελήνης και Πανσελήνου.', cta: 'Προβολή Ημερολογίου', route: 'calendar' },
      { tag: 'ΖΩΝΤΑΝΟΣ ΟΥΡΑΝΟΣ', title: 'Διελεύσεις', description: 'Δείτε τις τρέχουσες πλανητικές θέσεις, ταχύτητες και τις ενεργές διελεύσεις της ημέρας.', cta: 'Προβολή Διελεύσεων', route: 'transits' },
      { tag: 'ΑΝΑΔΡΟΜΟΙ ΚΥΚΛΟΙ', title: 'Ανάδρομοι Πλανήτες', description: 'Εξερευνήστε τις ανάδρομες και σκιώδεις περιόδους των πλανητών για το 2026/2027.', cta: 'Εξερεύνηση Αναδρόμων', route: 'retros' },
      { tag: 'ΟΡΟΛΟΓΙΑ', title: 'Λεξικό Αστρολογίας', description: 'Ένας οδηγός για συστήματα οίκων, ανοχές όψεων, ακμές, ayanamsha και αστρολογικούς όρους.', cta: 'Ανάγνωση Λεξικού', route: 'glossary' }
    ],
    disclaimer: 'ΝΟΜΙΚΗ ΣΗΜΕΙΩΣΗ & ΑΠΟΠΟΙΗΣΗ ΕΥΘΥΝΗΣ: Όλοι οι υπολογισμοί και οι συμβολικές ερμηνείες στο Mythborn παρέχονται αποκλειστικά για αυτογνωσία, πολιτιστική μελέτη και ψυχαγωγία. Σε καμία περίπτωση δεν υποκαθιστούν ιατρικές, ψυχολογικές, νομικές ή οικονομικές συμβουλές.',
    footer: {
      colTools: 'Εργαλεία',
      colZodiac: '12 Ζώδια',
      colLibrary: 'Βιβλιοθήκη',
      colLegal: 'Όροι & Νομικά',
      copyright: '© 2026 MYTHBORN. Με επιφύλαξη παντός δικαιώματος.',
      qctCredit: 'Αναπτύχθηκε από την QCT Commerce'
    }
  },
  es: {
    code: 'es',
    lang: 'es',
    dir: 'ltr',
    prefix: '/es',
    navBrand: 'MYTHBORN',
    navTagline: 'Plataforma de Astronomía de Precisión y Guía Cósmica',
    timeStandardNotice: 'Todas las horas se muestran en formato de 24 horas referenciadas a Europe/Istanbul (TSI) y UTC.',
    menu: {
      home: 'Inicio',
      natal: 'Carta Natal',
      zodiac: '12 Signos del Zodiaco',
      calendar: 'Calendario Celeste',
      retros: 'Retrógrados',
      transits: 'Tránsitos Actuales',
      synastry: 'Sinastría de Pareja',
      glossary: 'Glosario Astral',
      approach: 'Método y Ética',
      ctaQuick: 'Calcular Carta Gratis',
      menuToggle: 'Menú'
    },
    hero: {
      eyebrow: 'TU GUÍA CÓSMICA CALCULADA CON EFEMÉRIDES DE CÓDIGO ABIERTO',
      title: 'Mapa del Cielo, Brújula del Alma.',
      lead: 'Calcula tu carta natal exacta utilizando modelos matemáticos de efemérides de código abierto; descubre las profundas dinámicas de tu Sol, Luna y Ascendente.',
      ctaPrimary: 'Calcula Tu Carta Natal Gratis',
      ctaSecondary: 'Explora el Cielo de Hoy'
    },
    quickNatal: {
      title: 'Inicio Rápido de Carta Natal',
      sub: 'Ingresa tu fecha de nacimiento, hora (24 horas) y ciudad para calcular tu Gran Tríada en segundos.',
      labelDate: 'Fecha de Nacimiento',
      labelTime: 'Hora de Nacimiento (24h: 00:00 - 23:59)',
      labelCity: 'Ciudad de Nacimiento',
      unknownTime: 'No conozco mi hora exacta (Carta de amanecer solar)',
      submitBtn: 'Ver Mi Carta y la Gran Tríada'
    },
    bigThree: {
      title: 'La Gran Tríada Cósmica: Identidad, Alma e Interfaz',
      sub: 'En astrología, tu personalidad no se reduce únicamente a tu signo solar; esta tríada define tus coordenadas esenciales.',
      sunTitle: 'Sol: Identidad y Voluntad Consciente',
      sunDesc: 'Representa tu propósito vital, tu ego consciente y tu vitalidad creadora fundamental.',
      moonTitle: 'Luna: Seguridad Emocional y Alma',
      moonDesc: 'Gobierna tus respuestas inconscientes, memoria afectiva y necesidades de confort interno.',
      risingTitle: 'Ascendente (ASC): Interfaz con el Mundo',
      risingDesc: 'El signo que ascendía por el horizonte oriental al nacer; tu filtro perceptivo ante la realidad.'
    },
    sections: {
      zodiacTitle: 'Los 12 Signos y Arquetipos Zodiacales',
      zodiacSub: 'Explora guías auténticas, balance de elementos y gobernantes planetarios para cada signo.',
      skyTitle: 'Cielo Actual y Fases Lunares',
      skySub: 'Coordenadas geocéntricas en tiempo real y lunaciones próximas en formato 24 horas.',
      toolsTitle: 'Herramientas de Análisis Astral',
      toolsSub: 'Desde el cálculo natal personalizado hasta tránsitos dinámicos y sinastría vincular.',
      glossaryTitle: 'Glosario y Conceptos Astrológicos',
      glossarySub: 'Una guía clara de casas astrales, geometría de aspectos y terminología celeste.',
      ethicsTitle: 'Nuestra Metodología y Límites Éticos',
      ethicsSub: 'Mythborn ofrece autorreflexión simbólica con datos astronómicos abiertos, nunca adivinación fatalista.'
    },
    tools: [
      { tag: 'CARTA NATAL', title: 'Carta Natal', description: 'Explora el Sol, la Luna, el Ascendente, las casas planetarias y los aspectos principales con tus datos de nacimiento.', cta: 'Calcular Carta', route: 'natal' },
      { tag: 'DINÁMICA RELACIONAL', title: 'Sinastría y Compatibilidad', description: 'Compara los contactos planetarios de dos cartas en temas emocionales, de atracción y comunicación.', cta: 'Explorar Sinastría', route: 'synastry' },
      { tag: 'RITMO CELESTE', title: 'Calendario Celeste', description: 'Sigue las fases de la Luna, la iluminación y los ciclos de Luna Nueva y Luna Llena.', cta: 'Ver Calendario', route: 'calendar' },
      { tag: 'CIELO ACTUAL', title: 'Tránsitos Actuales', description: 'Consulta los grados zodiacales, velocidades y tránsitos activos de los planetas.', cta: 'Ver Tránsitos', route: 'transits' },
      { tag: 'CICLOS RETRÓGRADOS', title: 'Planetas Retrógrados', description: 'Explora los periodos retrógrados y de sombra de 2026/2027.', cta: 'Explorar Retrógrados', route: 'retros' },
      { tag: 'TERMINOLOGÍA', title: 'Glosario Astrológico', description: 'Consulta sistemas de casas, orbes, cúspides, ayanamsha y términos astrológicos.', cta: 'Leer Glosario', route: 'glossary' }
    ],
    disclaimer: 'AVISO LEGAL: Todos los cálculos astronómicos y lecturas simbólicas en Mythborn se ofrecen estrictamente para autorreflexión, contexto cultural y entretenimiento. Nunca sustituyen el consejo psicológico, médico, legal o financiero.',
    footer: {
      colTools: 'Herramientas',
      colZodiac: '12 Signos Zodiacales',
      colLibrary: 'Biblioteca Astral',
      colLegal: 'Legal y Privacidad',
      copyright: '© 2026 MYTHBORN. Todos los derechos reservados.',
      qctCredit: 'Desarrollado por QCT Commerce'
    }
  },
  ar: {
    code: 'ar',
    lang: 'ar',
    dir: 'rtl',
    prefix: '/ar',
    navBrand: 'MYTHBORN',
    navTagline: 'منصة الحسابات الفلكية الدقيقة والإرشاد الكوني',
    timeStandardNotice: 'جميع الأوقات معروضة بنظام 24 ساعة وفق توقيت Europe/Istanbul (TSI) و UTC.',
    menu: {
      home: 'الرئيسية',
      natal: 'خريطة الولادة',
      zodiac: 'دليل الأبراج الـ12',
      calendar: 'التقويم الفلكي',
      retros: 'التراجع الكوكبي',
      transits: 'العبور الفلكي',
      synastry: 'التوافق الفلكي',
      glossary: 'قاموس الفلك',
      approach: 'المنهج والأخلاقيات',
      ctaQuick: 'احسب خريطتك مجاناً',
      menuToggle: 'القائمة'
    },
    hero: {
      eyebrow: 'دليلك الكوني بحسابات فلكية مفتوحة المصدر',
      title: 'خريطة السماء، بوصلة الروح.',
      lead: 'احسب خريطة ميلادك الدقيقة عبر نماذج حسابات فلكية رياضية مفتوحة المصدر؛ واستكشف الأبعاد العميقة لشمسك وقمرك وبرجك الطالع.',
      ctaPrimary: 'احسب خريطة ميلادك مجاناً',
      ctaSecondary: 'استكشف حركة السماء اليوم'
    },
    quickNatal: {
      title: 'البدء السريع بحساب خريطة الولادة',
      sub: 'أدخل تاريخ ميلادك، ووقتك (بنظام 24 ساعة)، ومدينتك لحساب ثلاثيتك الكونية الكبرى في ثوانٍ.',
      labelDate: 'تاريخ الميلاد',
      labelTime: 'وقت الميلاد (24 ساعة: 00:00 - 23:59)',
      labelCity: 'مدينة الميلاد',
      unknownTime: 'لا أعرف وقت ولادتي بالتحديد (خريطة شروق الشمس)',
      submitBtn: 'عرض خريطتي والثلاثية الكبرى'
    },
    bigThree: {
      title: 'الثلاثية الكونية الكبرى: الهوية، الروح والواجهة',
      sub: 'في علم الفلك الرمزي، لا تقتصر شخصيتك على برجك الشمسي وحده؛ هذه الثلاثية تحدد إحداثياتك الأساسية.',
      sunTitle: 'الشمس: الهوية الجوهرية والإرادة',
      sunDesc: 'تمثل وعيك الذاتي، وهدفك في الحياة، وحيويتك الإبداعية الأساسية.',
      moonTitle: 'القمر: الأمان العاطفي والنفسي',
      moonDesc: 'يحكم استجاباتك اللاواعية، وذاكرتك الشعورية، واحتياجك للأمان الداخلي.',
      risingTitle: 'الطالع (ASC): واجهة التواصل مع العالم',
      risingDesc: 'البرج الذي كان يصعد في الأفق الشرقي لحظة ولادتك؛ وهو نافذتك لرؤية الواقع والتفاعل معه.'
    },
    sections: {
      zodiacTitle: 'الأبراج الـ12 والأدلة الرمزية',
      zodiacSub: 'اكتشف الدليل الأصيل، وتوازن العناصر، والكواكب الحاكمة لكل برج.',
      skyTitle: 'السماء المباشرة ومنازل القمر',
      skySub: 'إحداثيات الكواكب في الوقت الحقيقي وأوجه القمر المعروضة بنظام 24 ساعة.',
      toolsTitle: 'أدوات التحليل الفلكي',
      toolsSub: 'من الخريطة الشخصية وحساب التوافق إلى عبور الكواكب وتقويم التراجع.',
      glossaryTitle: 'قاموس المصطلحات الفلكية',
      glossarySub: 'مرجع مبسط للبيوت الفلكية، والاتصالات الهندسية، والعناصر، والمفاهيم الكونية.',
      ethicsTitle: 'منهجيتنا والحدود الأخلاقية',
      ethicsSub: 'تقدم Mythborn تأملاً ذاتياً مبنياً على بيانات فلكية صريحة، بعيداً عن الادعاءات الغيبية أو التكهنات.'
    },
    tools: [
      { tag: 'خريطة الميلاد', title: 'خريطة الميلاد', description: 'استكشف الشمس والقمر والطالع والبيوت الفلكية والاتصالات الرئيسية باستخدام بيانات ميلادك.', cta: 'احسب الخريطة', route: 'natal' },
      { tag: 'ديناميكيات العلاقات', title: 'التوافق الفلكي', description: 'قارن الاتصالات الكوكبية بين خريطتي ميلاد في موضوعات المشاعر والجذب والتواصل.', cta: 'استكشف التوافق', route: 'synastry' },
      { tag: 'الإيقاع السماوي', title: 'التقويم الفلكي', description: 'تابع أطوار القمر ونسبة الإضاءة ودورات القمر الجديد والبدر.', cta: 'عرض التقويم', route: 'calendar' },
      { tag: 'السماء الحالية', title: 'العبور الفلكي', description: 'اطلع على درجات الكواكب الحالية وسرعاتها والعبور النشط اليوم.', cta: 'عرض العبور', route: 'transits' },
      { tag: 'دورات التراجع', title: 'التراجع الكوكبي', description: 'استكشف فترات التراجع والظل للكواكب خلال عامي 2026 و2027.', cta: 'استكشف التراجع', route: 'retros' },
      { tag: 'المصطلحات', title: 'قاموس الفلك', description: 'مرجع للبيوت الفلكية ومدى الاتصالات والعقد والايانامشا والمصطلحات الفلكية.', cta: 'قراءة القاموس', route: 'glossary' }
    ],
    disclaimer: 'إخلاء مسؤولية وتنويه قانوني: جميع الحسابات الفلكية وقراءات الخرائط والرموز المقدمة على منصة Mythborn مخصصة للتأمل الذاتي والتوعية الثقافية فقط. ولا تعتبر بأي شكل بديلاً عن الاستشارات النفسية أو الطبية أو القانونية أو المالية المرخصة.',
    footer: {
      colTools: 'أدوات الفلك',
      colZodiac: 'دليل الأبراج الـ12',
      colLibrary: 'المكتبة والدلائل',
      colLegal: 'الشروط والخصوصية',
      copyright: '© 2026 MYTHBORN. جميع الحقوق محفوظة.',
      qctCredit: 'تم التطوير بواسطة QCT Commerce'
    }
  }
};

export const ZODIAC_LOCALIZED = {
  elements: {
    fire: { tr: 'Ateş', en: 'Fire', el: 'Φωτιά', es: 'Fuego', ar: 'نار' },
    earth: { tr: 'Toprak', en: 'Earth', el: 'Γη', es: 'Tierra', ar: 'تراب' },
    air: { tr: 'Hava', en: 'Air', el: 'Αέρας', es: 'Aire', ar: 'هواء' },
    water: { tr: 'Su', en: 'Water', el: 'Νερό', es: 'Agua', ar: 'ماء' },
  },
  qualities: {
    cardinal: { tr: 'Öncü', en: 'Cardinal', el: 'Παρορμητικό', es: 'Cardinal', ar: 'منقلب' },
    fixed: { tr: 'Sabit', en: 'Fixed', el: 'Σταθερό', es: 'Fijo', ar: 'ثابت' },
    mutable: { tr: 'Değişken', en: 'Mutable', el: 'Μεταβλητό', es: 'Mutable', ar: 'متبدل' },
  },
  rulers: {
    'Mars': { tr: 'Mars', en: 'Mars', el: 'Άρης', es: 'Marte', ar: 'المريخ' },
    'Venus': { tr: 'Venüs', en: 'Venus', el: 'Αφροδίτη', es: 'Venus', ar: 'الزهرة' },
    'Mercury': { tr: 'Merkür', en: 'Mercury', el: 'Ερμής', es: 'Mercurio', ar: 'عطارد' },
    'Moon': { tr: 'Ay', en: 'Moon', el: 'Σελήνη', es: 'Luna', ar: 'القمر' },
    'Sun': { tr: 'Güneş', en: 'Sun', el: 'Ήλιος', es: 'Sol', ar: 'الشمس' },
    'Mars / Pluto': { tr: 'Mars · Plüton', en: 'Mars / Pluto', el: 'Άρης / Πλούτων', es: 'Marte / Plutón', ar: 'المريخ / بلوتو' },
    'Jupiter': { tr: 'Jüpiter', en: 'Jupiter', el: 'Δίας', es: 'Júpiter', ar: 'المشتري' },
    'Saturn': { tr: 'Satürn', en: 'Saturn', el: 'Κρόνος', es: 'Saturno', ar: 'زحل' },
    'Saturn / Uranus': { tr: 'Satürn · Uranüs', en: 'Saturn / Uranus', el: 'Κρόνος / Ουρανός', es: 'Saturno / Urano', ar: 'زحل / أورانوس' },
    'Jupiter / Neptune': { tr: 'Jüpiter · Neptün', en: 'Jupiter / Neptune', el: 'Δίας / Ποσειδών', es: 'Jüpiter / Neptuno', ar: 'المشتري / نبتون' },
  },
  dates: {
    koc: { tr: '21 Mart – 19 Nisan', en: 'March 21 – April 19', el: '21 Μαρτίου – 19 Απριλίου', es: '21 de marzo – 19 de abril', ar: '21 مارس – 19 أبريل' },
    boga: { tr: '20 Nisan – 20 Mayıs', en: 'April 20 – May 20', el: '20 Απριλίου – 20 Μαΐου', es: '20 de abril – 20 de mayo', ar: '20 أبريل – 20 مايو' },
    ikizler: { tr: '21 Mayıs – 20 Haziran', en: 'May 21 – June 20', el: '21 Μαΐου – 20 Ιουνίου', es: '21 de mayo – 20 de junio', ar: '21 مايو – 20 يونيو' },
    yengec: { tr: '21 Haziran – 22 Temmuz', en: 'June 21 – July 22', el: '21 Ιουνίου – 22 Ιουλίου', es: '21 de junio – 22 de julio', ar: '21 يونيو – 22 يوليو' },
    aslan: { tr: '23 Temmuz – 22 Ağustos', en: 'July 23 – August 22', el: '23 Ιουλίου – 22 Αυγούστου', es: '23 de julio – 22 de agosto', ar: '23 يوليو – 22 أغسطس' },
    basak: { tr: '23 Ağustos – 22 Eylül', en: 'August 23 – September 22', el: '23 Αυγούστου – 22 Σεπτεμβρίου', es: '23 de agosto – 22 de septiembre', ar: '23 أغسطس – 22 سبتمبر' },
    terazi: { tr: '23 Eylül – 22 Ekim', en: 'September 23 – October 22', el: '23 Σεπτεμβρίου – 22 Οκτωβρίου', es: '23 de septiembre – 22 de octubre', ar: '23 سبتمبر – 22 أكتوبر' },
    akrep: { tr: '23 Ekim – 21 Kasım', en: 'October 23 – November 21', el: '23 Οκτωβρίου – 21 Νοεμβρίου', es: '23 de octubre – 21 de noviembre', ar: '23 أكتوبر – 21 نوفمبر' },
    yay: { tr: '22 Kasım – 21 Aralık', en: 'November 22 – December 21', el: '22 Νοεμβρίου – 21 Δεκεμβρίου', es: '22 de noviembre – 21 de diciembre', ar: '22 نوفمبر – 21 ديسمبر' },
    oglak: { tr: '22 Aralık – 19 Ocak', en: 'December 22 – January 19', el: '22 Δεκεμβρίου – 19 Ιανουαρίου', es: '22 de diciembre – 19 de enero', ar: '22 ديسمبر – 19 يناير' },
    kova: { tr: '20 Ocak – 18 Şubat', en: 'January 20 – February 18', el: '20 Ιανουαρίου – 18 Φεβρουαρίου', es: '20 de enero – 18 de febrero', ar: '20 يناير – 18 فبراير' },
    balik: { tr: '19 Şubat – 20 Mart', en: 'February 19 – March 20', el: '19 Φεβρουαρίου – 20 Μαρτίου', es: '19 de febrero – 20 de marzo', ar: '19 فبراير – 20 مارس' }
  }
};

export const ZODIAC_SIGNS = [
  { slug: 'koc', icon: 'aries', symbol: '♈', tr: 'Koç', en: 'Aries', el: 'Κριός', es: 'Aries', ar: 'الحمل', element: 'fire', quality: 'cardinal', ruler: 'Mars', dates: '21 Mart – 19 Nisan' },
  { slug: 'boga', icon: 'taurus', symbol: '♉', tr: 'Boğa', en: 'Taurus', el: 'Ταύρος', es: 'Tauro', ar: 'الثور', element: 'earth', quality: 'fixed', ruler: 'Venus', dates: '20 Nisan – 20 Mayıs' },
  { slug: 'ikizler', icon: 'gemini', symbol: '♊', tr: 'İkizler', en: 'Gemini', el: 'Δίδυμοι', es: 'Géminis', ar: 'الجوزاء', element: 'air', quality: 'mutable', ruler: 'Mercury', dates: '21 Mayıs – 20 Haziran' },
  { slug: 'yengec', icon: 'cancer', symbol: '♋', tr: 'Yengeç', en: 'Cancer', el: 'Καρκίνος', es: 'Cáncer', ar: 'السرطان', element: 'water', quality: 'cardinal', ruler: 'Moon', dates: '21 Haziran – 22 Temmuz' },
  { slug: 'aslan', icon: 'leo', symbol: '♌', tr: 'Aslan', en: 'Leo', el: 'Λέων', es: 'Leo', ar: 'الأسد', element: 'fire', quality: 'fixed', ruler: 'Sun', dates: '23 Temmuz – 22 Ağustos' },
  { slug: 'basak', icon: 'virgo', symbol: '♍', tr: 'Başak', en: 'Virgo', el: 'Παρθένος', es: 'Virgo', ar: 'العذراء', element: 'earth', quality: 'mutable', ruler: 'Mercury', dates: '23 Ağustos – 22 Eylül' },
  { slug: 'terazi', icon: 'libra', symbol: '♎', tr: 'Terazi', en: 'Libra', el: 'Ζυγός', es: 'Libra', ar: 'الميزان', element: 'air', quality: 'cardinal', ruler: 'Venus', dates: '23 Eylül – 22 Ekim' },
  { slug: 'akrep', icon: 'scorpio', symbol: '♏', tr: 'Akrep', en: 'Scorpio', el: 'Σκορπιός', es: 'Escorpio', ar: 'العقرب', element: 'water', quality: 'fixed', ruler: 'Mars / Pluto', dates: '23 Ekim – 21 Kasım' },
  { slug: 'yay', icon: 'sagittarius', symbol: '♐', tr: 'Yay', en: 'Sagittarius', el: 'Τοξότης', es: 'Sagitario', ar: 'القوس', element: 'fire', quality: 'mutable', ruler: 'Jupiter', dates: '22 Kasım – 21 Aralık' },
  { slug: 'oglak', icon: 'capricorn', symbol: '♑', tr: 'Oğlak', en: 'Capricorn', el: 'Αιγόκερως', es: 'Capricornio', ar: 'الجدي', element: 'earth', quality: 'cardinal', ruler: 'Saturn', dates: '22 Aralık – 19 Ocak' },
  { slug: 'kova', icon: 'aquarius', symbol: '♒', tr: 'Kova', en: 'Aquarius', el: 'Υδροχόος', es: 'Acuario', ar: 'الدلو', element: 'air', quality: 'fixed', ruler: 'Saturn / Uranus', dates: '20 Ocak – 18 Şubat' },
  { slug: 'balik', icon: 'pisces', symbol: '♓', tr: 'Balık', en: 'Pisces', el: 'Ιχθύες', es: 'Piscis', ar: 'الحوت', element: 'water', quality: 'mutable', ruler: 'Jupiter / Neptune', dates: '19 Şubat – 20 Mart' }
];
