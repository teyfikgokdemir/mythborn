// Mythborn 2027 — Ground-Up Ultra-Elite Homepage
// Consciousness, Carl Jung Depth Psychology, Live Meditation & Sound Resonance Sanctuary
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { getGuidesList } from './guides.js';

const HOME_COPY = {
  tr: {
    eyebrow: 'MYTHBORN · BİLİNÇ, ARKETİP & REZONANS SIĞINAĞI',
    h1: 'Sessizliğin İçinde Kendini Duy.',
    lead: 'Carl Jung derinlik psikolojisi, canlı meditasyon odaları, stereo yankılı frekans rezonansı ve kadim gökyüzü matematiği.',
    ctaPrimary: 'Sığınağa Gir',
    ctaSecondary: 'Carl Jung & Gölge',
    telemetry: ['Web Audio Stereo Reverb', '0.001° Açık Astronomi', '%100 Yerel Gizlilik'],
    pillarsEyebrow: 'DÖRT TEMEL DENEYİM ALANI',
    pillarsTitle: 'Gürültüyü Bırak, Merkeze Dön.',
    pillarsSub: 'Zihin, ses ve sembol dünyasını tek bir sakin sığınakta birleştiren dört ana kapı.',
    pillars: [
      {
        tag: 'CANLI MEDİTASYON',
        title: 'Sığınak Odaları',
        desc: 'Mum odağı (Trataka), görsel nefes küresi, Theta gevşemesi ve Tibet çanağı sesli 108 mantra sayacı.',
        cta: 'Sığınağa Gir',
        route: 'sanctuary'
      },
      {
        tag: 'DERİNLİK PSİKOLOJİSİ',
        title: 'Carl Jung & Gölge',
        desc: '8 temel Jung arketipi, Gölge yansıtma soruları, Aktif İmgelem ve %100 yerel Eşzamanlılık günlüğü.',
        cta: 'Aynayı Aç',
        route: 'jung'
      },
      {
        tag: 'SES & DOĞA AKUSTİĞİ',
        title: 'Kymatik Frekans Stüdyosu',
        desc: 'Stereo tapınak yankılı 432/528 Hz, Binaural Alpha/Theta/Delta, Tibet çanağı ve 4 canlı doğa sesi.',
        cta: 'Sesi Deneyimle',
        route: 'sanctuary_mixer'
      },
      {
        tag: 'EĞİTİCİ KÜTÜPHANE',
        title: 'Bilinç & Yaşam Rehberi',
        desc: 'Spiritüel yaşam ilkeleri, gölge çalışması, meditasyon protokolleri ve ses fiziği üzerine derin rehberler.',
        cta: 'Rehberleri Oku',
        route: 'guides'
      }
    ],
    quotes: {
      jung: {
        text: '“Bilinç dışını bilinçli hale getirmedikçe o senin hayatını yönlendirecek ve sen buna kader diyeceksin.”',
        author: 'Carl Gustav Jung'
      },
      freud: {
        text: '“İfade edilmemiş duygular asla ölmez; yalnızca diri diri gömülür ve daha sonra daha karmaşık biçimlerde geri döner.”',
        author: 'Sigmund Freud'
      },
      adler: {
        text: '“İnsan geçmişinin kurbanı değil; deneyimlerine yüklediği anlamın mimarıdır.”',
        author: 'Alfred Adler'
      }
    },
    soundEyebrow: 'CANLI KYMATİK REZONANS · STEREO TAPINAK YANKISI',
    soundTitle: 'Tek Tıkla Atmosferini Seç ve Dinle.',
    soundSub: 'Kuru tonlar yerine stereo salon yankılı harmonikler, Tibet çanakları ve canlı doğa sesleriyle anında dinginlik.',
    soundPureLink: 'Meditasyon & Frekans Stüdyosu (/meditasyon-ve-frekans) ↗',
    soundFullLink: 'Tüm Ses Mikseri & 4 Meditasyon Odası →',
    soundRoomsLink: '4 Canlı Meditasyon Odası →',
    mixerReady: 'HAZIR · SES KAPALI',
    mixerActive: 'AKTİF · STEREO REZONANS',
    scenes: {
      temple: ['Gece Tapınağı', '432 Hz Harmoni · Yankılı Tibet Çanağı · Gece Yağmuru'],
      theta: ['Theta Eşiği & Astral', '6 Hz Binaural · Derin Pad · Okyanus Dalgaları'],
      shadow: ['Gölge & İç Benlik', '396 Hz Derin Kök · Tapınak Drone · Sıcak Ateş'],
      dawn: ['Şafak Berraklığı', '528 Hz Parlak Harmoni · Tibet Çanağı · Gece Rüzgarı']
    },
    readGuide: 'Rehberi Oku',
    guidesEyebrow: 'EĞİTİCİ & ÖĞRETİCİ KÜTÜPHANE',
    guidesTitle: 'Anlamak, Dönüşümün İlk Adımıdır.',
    guidesSub: 'Spiritüel yaşam, Jung psikolojisi, nefes ve rezonans üzerine adım adım uzun-form rehberler.',
    guidesAll: 'Tüm Rehber Kütüphanesi →',
    toolsEyebrow: 'KADİM SEMBOLLER & MATEMATİKSEL ARAÇLAR',
    toolsTitle: 'Gökyüzü Matematiği ve Sembolik Aynalar.',
    toolsSub: 'Gerçek astronomik hesaplamalar ve tarihsel sembol sistemleri; deterministik kehanet olmadan, şeffaf öz-farkındalık için.',
    tools: [
      {
        tag: 'ASTRONOMY-ENGINE',
        title: 'Doğum Haritası',
        desc: 'Güneş, Ay, Yükselen, MC ve gezegen açılarını ±1 yay-dakika hassasiyetle hesapla.',
        cta: 'Haritayı Çıkar',
        route: 'natal'
      },
      {
        tag: 'OSMANLICA & PİSAGOR',
        title: 'Ebced & Numeroloji',
        desc: 'Harf harf Ebced-i Kebîr / Sağîr dökümü ve Pisagor yaşam yolu analizi.',
        cta: 'Hesaplamayı Aç',
        route: 'ebced'
      },
      {
        tag: 'İLİŞKİ GEOMETRİSİ',
        title: 'Sinastri Uyumu',
        desc: 'İki doğum haritası arasındaki açısal temasları, rezonansı ve denge eşiklerini incele.',
        cta: 'Haritaları Karşılaştır',
        route: 'synastry'
      },
      {
        tag: 'GÖKYÜZÜ & 12 ARKETİP',
        title: 'Ay Takvimi & Burçlar',
        desc: 'Canlı Ay fazı, aydınlanma oranı ve 12 zodyak arketipinin ışık-gölge dengesi.',
        cta: 'Gökyüzünü Gör',
        route: 'calendar'
      }
    ],
    ethicsEyebrow: 'ETİK SINIRLAR & YAKLAŞIM',
    ethicsTitle: 'Korku Değil Berraklık. Kehanet Değil Bilinç.',
    ethicsBody: 'Mythborn; tıbbi teşhis, klinik psikoterapi veya kesin gelecek vaadi sunmaz. Tüm meditasyon odaları, Jung arketipleri, ses atmosferleri ve astronomik hesaplamalar; bireyin özgür iradesini ve içsel berraklığını destekleyen şeffaf bir farkındalık alanıdır.',
    ethicsCta: 'Yöntem ve Etik İlkelerimiz →'
  },
  en: {
    eyebrow: 'MYTHBORN · CONSCIOUSNESS, ARCHETYPE & RESONANCE SANCTUARY',
    h1: 'Hear Yourself Inside the Stillness.',
    lead: 'Carl Jung depth psychology, live meditation rooms, stereo-reverb frequency resonance and open-source astronomical precision.',
    ctaPrimary: 'Enter Sanctuary',
    ctaSecondary: 'Carl Jung & Shadow',
    telemetry: ['Web Audio Stereo Reverb', '0.001° Open Ephemeris', '100% Local Privacy'],
    pillarsEyebrow: 'FOUR CORE SANCTUARY DOORS',
    pillarsTitle: 'Step Beyond Noise, Return to Center.',
    pillarsSub: 'Four serene experiences uniting depth psychology, breath, sound resonance and timeless symbolic literacy.',
    pillars: [
      {
        tag: 'LIVE MEDITATION',
        title: 'Sanctuary Rooms',
        desc: 'Candle gazing (Trataka), visual breath orb, Theta relaxation and 108 mala counter with Tibetan bowl strikes.',
        cta: 'Enter Sanctuary',
        route: 'sanctuary'
      },
      {
        tag: 'DEPTH PSYCHOLOGY',
        title: 'Carl Jung & Shadow',
        desc: '8 core Jungian archetypes, Shadow prompts, Active Imagination and a 100% private local Synchronicity journal.',
        cta: 'Open Mirror',
        route: 'jung'
      },
      {
        tag: 'SOUND & NATURE',
        title: 'Cymatics Sound Studio',
        desc: 'Stereo temple-reverb 432/528 Hz, Binaural Alpha/Theta/Delta, Tibetan bowls and 4 live nature soundscapes.',
        cta: 'Open Sound Mixer',
        route: 'sanctuary_mixer'
      },
      {
        tag: 'EDUCATIONAL LIBRARY',
        title: 'Mindful Living Guides',
        desc: 'In-depth guides on spiritual living, shadow work, meditation protocols and the physics of sound resonance.',
        cta: 'Read Guides',
        route: 'guides'
      }
    ],
    quotes: {
      jung: {
        text: '“Until you make the unconscious conscious, it will direct your life and you will call it fate.”',
        author: 'Carl Gustav Jung'
      },
      freud: {
        text: '“Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.”',
        author: 'Sigmund Freud'
      },
      adler: {
        text: '“We do not suffer from the shock of our experiences; we make out of them what aligns with the meaning we choose.”',
        author: 'Alfred Adler'
      }
    },
    soundEyebrow: 'LIVE CYMATICS RESONANCE · STEREO TEMPLE REVERB',
    soundTitle: 'Choose an Atmosphere in One Click.',
    soundSub: 'Instead of dry sine beeps, immerse yourself in stereo temple reverb, warm harmonics, singing bowls and live nature.',
    soundPureLink: 'Open Meditation & Frequency Studio (/en/meditation-and-frequencies) ↗',
    soundFullLink: 'Open Full Mixer & 4 Meditation Rooms →',
    soundRoomsLink: '4 Live Meditation Rooms →',
    mixerReady: 'READY · SILENT',
    mixerActive: 'ACTIVE · STEREO RESONANCE',
    scenes: {
      temple: ['Night Temple', '432 Hz Harmonics · Temple Bowls · Night Rain'],
      theta: ['Theta Threshold & Astral', '6 Hz Binaural · Deep Pad · Ocean Waves'],
      shadow: ['Shadow & Inner Self', '396 Hz Deep Root · Temple Drone · Warm Hearth'],
      dawn: ['Dawn Clarity', '528 Hz Clear Harmonics · Bowls · Night Wind']
    },
    readGuide: 'Read Guide',
    guidesEyebrow: 'IN-DEPTH EDUCATIONAL LIBRARY',
    guidesTitle: 'Understanding Is the First Threshold of Change.',
    guidesSub: 'Clear, structured long-form guides on mindful living, Carl Jung, breathwork and acoustic resonance.',
    guidesAll: 'Browse All Guides →',
    toolsEyebrow: 'ANCIENT SYMBOLS & MATHEMATICAL INSTRUMENTS',
    toolsTitle: 'Celestial Precision & Symbolic Mirrors.',
    toolsSub: 'Real astronomical calculations and historical letter systems—offered for transparent reflection without fatalism.',
    tools: [
      {
        tag: 'ASTRONOMY-ENGINE',
        title: 'Birth Chart',
        desc: 'Compute Sun, Moon, Ascendant, Midheaven and planetary aspects with ±1 arcminute accuracy.',
        cta: 'Calculate Chart',
        route: 'natal'
      },
      {
        tag: 'ABJAD & PYTHAGOREAN',
        title: 'Abjad & Numerology',
        desc: 'Letter-by-letter Greater & Lesser Abjad breakdown paired with Pythagorean life path analysis.',
        cta: 'Open Calculator',
        route: 'ebced'
      },
      {
        tag: 'RELATIONSHIP GEOMETRY',
        title: 'Synastry Analysis',
        desc: 'Compare two natal charts across angular aspects, harmony dynamics and growth thresholds.',
        cta: 'Compare Charts',
        route: 'synastry'
      },
      {
        tag: 'LUNAR & 12 ARCHETYPES',
        title: 'Sky Calendar & Zodiac',
        desc: 'Live moon phase illumination and light-shadow dossiers for all 12 zodiacal archetypes.',
        cta: 'Explore the Sky',
        route: 'calendar'
      }
    ],
    ethicsEyebrow: 'ETHICAL BOUNDARIES & METHODOLOGY',
    ethicsTitle: 'Clarity Over Fear. Awareness Over Fatalism.',
    ethicsBody: 'Mythborn does not offer medical diagnosis, clinical psychotherapy or fatalistic predictions. Every meditation room, Jungian reflection, soundscape and astronomical chart exists to support sovereign human agency and calm self-awareness.',
    ethicsCta: 'Read Our Methodology & Ethics →'
  },
  el: {
    eyebrow: 'MYTHBORN · ΚΑΤΑΦΥΓΙΟ ΣΥΝΕΙΔΗΣΗΣ, ΑΡΧΕΤΥΠΩΝ & ΣΥΝΤΟΝΙΣΜΟΥ',
    h1: 'Άκουσε τον Εαυτό σου Μέσα στη Σιωπή.',
    lead: 'Ψυχολογία βάθους του Carl Jung, ζωντανά δωμάτια διαλογισμού, στερεοφωνικές συχνότητες και αστρονομική ακρίβεια ανοιχτού κώδικα.',
    ctaPrimary: 'Είσοδος στο Καταφύγιο',
    ctaSecondary: 'Carl Jung & Σκιά',
    telemetry: ['Στερεοφωνικός Ήχος Web Audio', '0.001° Ανοιχτή Εφημερίδα', '100% Τοπικό Απόρρητο'],
    pillarsEyebrow: 'ΤΕΣΣΕΡΙΣ ΠΥΛΕΣ ΕΜΠΕΙΡΙΑΣ',
    pillarsTitle: 'Άφησε τον Θόρυβο, Επίστρεψε στο Κέντρο.',
    pillarsSub: 'Τέσσερις γαλήνιες διαδρομές που ενώνουν ψυχολογία βάθους, αναπνοή, ηχητικό συντονισμό και διαχρονικά σύμβολα.',
    pillars: [
      {
        tag: 'ΖΩΝΤΑΝΟΣ ΔΙΑΛΟΓΙΣΜΟΣ',
        title: 'Δωμάτια Καταφυγίου',
        desc: 'Εστίαση σε φλόγα κεριού (Trataka), οπτική αναπνοή, χαλάρωση Theta και μετρητής 108 μάντρα με θιβετιανό κύμβαλο.',
        cta: 'Είσοδος στο Καταφύγιο',
        route: 'sanctuary'
      },
      {
        tag: 'ΨΥΧΟΛΟΓΙΑ ΒΑΘΟΥΣ',
        title: 'Carl Jung & Σκιά',
        desc: '8 βασικά αρχέτυπα του Jung, ερωτήσεις για τη Σκιά, Ενεργητική Φαντασία και 100% τοπικό ημερολόγιο Συγχρονικότητας.',
        cta: 'Άνοιγμα Καθρέφτη',
        route: 'jung'
      },
      {
        tag: 'ΗΧΟΣ & ΑΚΟΥΣΤΙΚΗ ΦΥΣΗΣ',
        title: 'Κυματικό Στούντιο Συχνοτήτων',
        desc: 'Στερεοφωνικές αρμονικές 432/528 Hz, Binaural Alpha/Theta/Delta, κύμβαλα Θιβέτ και 4 ζωντανοί ήχοι φύσης.',
        cta: 'Άνοιγμα Μίκτη Ήχου',
        route: 'sanctuary_mixer'
      },
      {
        tag: 'ΕΚΠΑΙΔΕΥΤΙΚΗ ΒΙΒΛΙΟΘΗΚΗ',
        title: 'Οδηγοί Συνειδητής Ζωής',
        desc: 'Αναλυτικοί οδηγοί για ενσυνείδητη ζωή, εργασία με τη σκιά, πρακτικές διαλογισμού και φυσική του συντονισμού.',
        cta: 'Ανάγνωση Οδηγών',
        route: 'guides'
      }
    ],
    quotes: {
      jung: {
        text: '«Όσο δεν κάνεις το ασυνείδητο συνειδητό, θα κατευθύνει τη ζωή σου και θα το αποκαλείς μοίρα.»',
        author: 'Carl Gustav Jung'
      },
      freud: {
        text: '«Τα ανέκφραστα συναισθήματα δεν πεθαίνουν ποτέ· θάβονται ζωντανά και επιστρέφουν αργότερα με πιο δύσκολες μορφές.»',
        author: 'Sigmund Freud'
      },
      adler: {
        text: '«Ο άνθρωπος δεν καθορίζεται από το σοκ των εμπειριών του, αλλά από το νόημα που επιλέγει να τους δώσει.»',
        author: 'Alfred Adler'
      }
    },
    soundEyebrow: 'ΖΩΝΤΑΝΟΣ ΚΥΜΑΤΙΚΟΣ ΣΥΝΤΟΝΙΣΜΟΣ · ΣΤΕΡΕΟΦΩΝΙΚΗ ΑΝΤΗΧΗΣΗ',
    soundTitle: 'Επίλεξε Ατμόσφαιρα με Ένα Κλικ.',
    soundSub: 'Αντί για ξηρούς τόνους, βυθίσου σε στερεοφωνική αντήχηση ναού, ζεστές αρμονικές, θιβετιανά κύμβαλα και φυσικό ήχο.',
    soundPureLink: 'Στούντιο Διαλογισμού & Συχνοτήτων (/gr/dialogismos-kai-sychnotites) ↗',
    soundFullLink: 'Πλήρης Μίκτης & 4 Δωμάτια Διαλογισμού →',
    soundRoomsLink: '4 Ζωντανά Δωμάτια Διαλογισμού →',
    mixerReady: 'ΕΤΟΙΜΟ · ΣΙΩΠΗ',
    mixerActive: 'ΕΝΕΡΓΟ · ΣΤΕΡΕΟ ΣΥΝΤΟΝΙΣΜΟΣ',
    scenes: {
      temple: ['Νυχτερινός Ναός', '432 Hz Αρμονικές · Κύμβαλα Ναού · Νυχτερινή Βροχή'],
      theta: ['Κατώφλι Theta & Ηρεμία', '6 Hz Binaural · Βαθύ Pad · Κύματα Ωκεανού'],
      shadow: ['Σκιά & Εσωτερικός Εαυτός', '396 Hz Βαθιά Ρίζα · Ηχητικό Drone · Ζεστή Φωτιά'],
      dawn: ['Διαύγεια Αυγής', '528 Hz Καθαρές Αρμονικές · Κύμβαλα · Νυχτερινός Άνεμος']
    },
    readGuide: 'Ανάγνωση Οδηγού',
    guidesEyebrow: 'ΕΚΠΑΙΔΕΥΤΙΚΗ ΒΙΒΛΙΟΘΗΚΗ ΒΑΘΟΥΣ',
    guidesTitle: 'Η Κατανόηση Είναι το Πρώτο Βήμα Αλλαγής.',
    guidesSub: 'Σαφείς οδηγοί για συνειδητή ζωή, ψυχολογία Carl Jung, αναπνοή και ακουστικό συντονισμό.',
    guidesAll: 'Όλη η Βιβλιοθήκη Οδηγών →',
    toolsEyebrow: 'ΑΡΧΑΙΑ ΣΥΜΒΟΛΑ & ΜΑΘΗΜΑΤΙΚΑ ΟΡΓΑΝΑ',
    toolsTitle: 'Ουράνια Ακρίβεια & Συμβολικοί Καθρέφτες.',
    toolsSub: 'Πραγματικοί αστρονομικοί υπολογισμοί και ιστορικά συστήματα γραμμάτων — για διαυγή αυτογνωσία χωρίς μοιρολατρία.',
    tools: [
      {
        tag: 'ASTRONOMY-ENGINE',
        title: 'Γενέθλιος Χάρτης',
        desc: 'Υπολόγισε Ήλιο, Σελήνη, Ωροσκόπο, Μεσουράνημα και όψεις πλανητών με ακρίβεια ±1 λεπτού τόξου.',
        cta: 'Υπολογισμός Χάρτη',
        route: 'natal'
      },
      {
        tag: 'ΑΜΠΤΖΑΝΤ & ΠΥΘΑΓΟΡΑΣ',
        title: 'Αμπτζάντ & Αριθμολογία',
        desc: 'Αναλυτική αποδόμηση Μεγάλου και Μικρού Αμπτζάντ γράμμα-γράμμα μαζί με Πυθαγόρειο μονοπάτι ζωής.',
        cta: 'Άνοιγμα Υπολογιστή',
        route: 'ebced'
      },
      {
        tag: 'ΓΕΩΜΕΤΡΙΑ ΣΧΕΣΕΩΝ',
        title: 'Ανάλυση Συναστρίας',
        desc: 'Σύγκρινε δύο γενέθλιους χάρτες μέσα από γωνιακές όψεις, δυναμικές αρμονίας και σημεία ισορροπίας.',
        cta: 'Σύγκριση Χαρτών',
        route: 'synastry'
      },
      {
        tag: 'ΣΕΛΗΝΗ & 12 ΑΡΧΕΤΥΠΑ',
        title: 'Ουράνιο Ημερολόγιο & Ζώδια',
        desc: 'Ζωντανή φάση Σελήνης και φάκελοι φωτός-σκιάς για όλα τα 12 ζωδιακά αρχέτυπα.',
        cta: 'Εξερεύνηση Ουρανού',
        route: 'calendar'
      }
    ],
    ethicsEyebrow: 'ΗΘΙΚΑ ΟΡΙΑ & ΜΕΘΟΔΟΛΟΓΙΑ',
    ethicsTitle: 'Διαύγεια Αντί για Φόβο. Επίγνωση Αντί για Μοιρολατρία.',
    ethicsBody: 'Το Mythborn δεν προσφέρει ιατρική διάγνωση, κλινική ψυχοθεραπεία ή μοιρολατρικές προβλέψεις. Κάθε δωμάτιο διαλογισμού, αρχετυπικός στοχασμός, ηχητικό τοπίο και αστρονομικός υπολογισμός υποστηρίζει την ελεύθερη ανθρώπινη βούληση και την ήρεμη αυτογνωσία.',
    ethicsCta: 'Διαβάστε τη Μεθοδολογία & Ηθική μας →'
  },
  es: {
    eyebrow: 'MYTHBORN · SANTUARIO DE CONSCIENCIA, ARQUETIPOS Y RESONANCIA',
    h1: 'Escúchate a Ti Mismo Dentro del Silencio.',
    lead: 'Psicología profunda de Carl Jung, salas de meditación en vivo, resonancia sonora con reverberación estéreo y astronomía matemática abierta.',
    ctaPrimary: 'Entrar al Santuario',
    ctaSecondary: 'Carl Jung y Sombra',
    telemetry: ['Reverberación Estéreo Web Audio', '0.001° Efemérides Abiertas', '100% Privacidad Local'],
    pillarsEyebrow: 'CUATRO PUERTAS DE EXPERIENCIA',
    pillarsTitle: 'Deja el Ruido Atrás, Vuelve al Centro.',
    pillarsSub: 'Cuatro espacios serenos que unen psicología profunda, respiración, resonancia acústica y lectura simbólica atemporal.',
    pillars: [
      {
        tag: 'MEDITACIÓN EN VIVO',
        title: 'Salas del Santuario',
        desc: 'Contemplación de vela (Trataka), orbe visual de respiración, relajación Theta y contador de 108 cuentas con cuenco tibetano.',
        cta: 'Entrar al Santuario',
        route: 'sanctuary'
      },
      {
        tag: 'PSICOLOGÍA PROFUNDA',
        title: 'Carl Jung y Sombra',
        desc: '8 arquetipos esenciales de Jung, preguntas sobre la Sombra, Imaginación Activa y diario local privado de Sincronicidad.',
        cta: 'Abrir Espejo',
        route: 'jung'
      },
      {
        tag: 'SONIDO Y NATURALEZA',
        title: 'Estudio Cimático de Frecuencias',
        desc: 'Armónicos estéreo de 432/528 Hz, ritmos binaurales Alpha/Theta/Delta, cuencos tibetanos y 4 paisajes sonoros naturales.',
        cta: 'Abrir Mezclador',
        route: 'sanctuary_mixer'
      },
      {
        tag: 'BIBLIOTECA EDUCATIVA',
        title: 'Guías de Vida Consciente',
        desc: 'Guías detalladas sobre vida consciente, trabajo con la sombra, protocolos de meditación y física de la resonancia sonora.',
        cta: 'Leer Guías',
        route: 'guides'
      }
    ],
    quotes: {
      jung: {
        text: '«Hasta que no hagas consciente lo inconsciente, dirigirá tu vida y lo llamarás destino.»',
        author: 'Carl Gustav Jung'
      },
      freud: {
        text: '«Las emociones inexpresadas nunca mueren; son enterradas vivas y regresan más tarde de formas más difíciles.»',
        author: 'Sigmund Freud'
      },
      adler: {
        text: '«No sufrimos por el impacto de nuestras experiencias; construimos con ellas el sentido que decidimos darles.»',
        author: 'Alfred Adler'
      }
    },
    soundEyebrow: 'RESONANCIA CIMÁTICA EN VIVO · REVERBERACIÓN ESTÉREO',
    soundTitle: 'Elige una Atmósfera en Un Clic.',
    soundSub: 'En lugar de tonos planos y secos, sumérgete en reverberación espacial de templo, armónicos cálidos, cuencos y sonidos de la naturaleza.',
    soundPureLink: 'Abrir Estudio de Meditación y Frecuencias (/es/meditacion-y-frecuencias) ↗',
    soundFullLink: 'Abrir Mezclador Completo y 4 Salas →',
    soundRoomsLink: '4 Salas de Meditación en Vivo →',
    mixerReady: 'LISTO · EN SILENCIO',
    mixerActive: 'ACTIVO · RESONANCIA ESTÉREO',
    scenes: {
      temple: ['Templo Nocturno', 'Armónicos 432 Hz · Cuencos de Templo · Lluvia Nocturna'],
      theta: ['Umbral Theta y Calma', 'Binaural 6 Hz · Pad Profundo · Olas del Océano'],
      shadow: ['Sombra y Ser Interior', '396 Hz Raíz Profunda · Drone de Templo · Fuego Cálido'],
      dawn: ['Claridad del Alba', 'Armónicos 528 Hz · Cuencos · Brisa Nocturna']
    },
    readGuide: 'Leer Guía',
    guidesEyebrow: 'BIBLIOTECA EDUCATIVA EN PROFUNDIDAD',
    guidesTitle: 'Comprender Es el Primer Umbral del Cambio.',
    guidesSub: 'Guías claras y estructuradas sobre vida consciente, Carl Jung, respiración y resonancia acústica.',
    guidesAll: 'Explorar Todas las Guías →',
    toolsEyebrow: 'SÍMBOLOS ANTIGUOS E INSTRUMENTOS MATEMÁTICOS',
    toolsTitle: 'Precisión Celeste y Espejos Simbólicos.',
    toolsSub: 'Cálculos astronómicos reales y sistemas históricos de letras — presentados para una reflexión transparente y libre de fatalismo.',
    tools: [
      {
        tag: 'ASTRONOMY-ENGINE',
        title: 'Carta Natal',
        desc: 'Calcula Sol, Luna, Ascendente, Medio Cielo y aspectos planetarios con precisión de ±1 minuto de arco.',
        cta: 'Calcular Carta',
        route: 'natal'
      },
      {
        tag: 'ÁBYAD Y PITÁGORAS',
        title: 'Ábyad y Numerología',
        desc: 'Desglose letra por letra de Ábyad Mayor y Menor junto con el cálculo pitagórico del camino de vida.',
        cta: 'Abrir Calculadora',
        route: 'ebced'
      },
      {
        tag: 'GEOMETRÍA RELACIONAL',
        title: 'Análisis de Sinastría',
        desc: 'Compara dos cartas natales mediante aspectos angulares, dinámicas de armonía y puntos de equilibrio.',
        cta: 'Comparar Cartas',
        route: 'synastry'
      },
      {
        tag: 'LUNA Y 12 ARQUETIPOS',
        title: 'Calendario Celeste y Zodíaco',
        desc: 'Fase lunar en tiempo real y dosieres de luz y sombra para los 12 arquetipos zodiacales.',
        cta: 'Explorar el Cielo',
        route: 'calendar'
      }
    ],
    ethicsEyebrow: 'LÍMITES ÉTICOS Y METODOLOGÍA',
    ethicsTitle: 'Claridad Sobre el Miedo. Consciencia Sobre el Fatalismo.',
    ethicsBody: 'Mythborn no ofrece diagnósticos médicos, psicoterapia clínica ni predicciones fatalistas. Cada sala de meditación, espejo junguiano, paisaje sonoro y carta astronómica existe para apoyar la autonomía personal y la lucidez serena.',
    ethicsCta: 'Leer Nuestra Metodología y Ética →'
  },
  ar: {
    eyebrow: 'ميثبورن · ملاذ الوعي والنماذج الأصلية والرنين الصوتي',
    h1: 'اسمع صوتك الداخلي في قلب السكون.',
    lead: 'علم نفس الأعماق لكارل يونغ، غرف تأمل مباشرة، رنين ترددي مجسم بصدى المعبد، ودقة فلكية مفتوحة المصدر.',
    ctaPrimary: 'ادخل إلى الملاذ',
    ctaSecondary: 'كارل يونغ والظل',
    telemetry: ['صدى صوتي مجسم Web Audio', 'دقة فلكية مفتوحة 0.001 درجة', 'خصوصية محلية 100%'],
    pillarsEyebrow: 'أربع بوابات رئيسية للتجربة',
    pillarsTitle: 'دع الضجيج جانباً وعُد إلى المركز.',
    pillarsSub: 'أربع مساحات هادئة تجمع بين علم نفس الأعماق والتنفس والرنين الصوتي والفهم الرمزي الرصين.',
    pillars: [
      {
        tag: 'تأمل مباشر',
        title: 'غرف الملاذ الهادئة',
        desc: 'تأمل الشمعة (تراتاكا)، كرة التنفس البصرية، استرخاء ثيتا، وعداد 108 للتكرار مع رنين الوعاء التبتي.',
        cta: 'ادخل إلى الملاذ',
        route: 'sanctuary'
      },
      {
        tag: 'علم نفس الأعماق',
        title: 'كارل يونغ والظل',
        desc: '8 نماذج أصلية ليونغ، أسئلة تأمل الظل، التخيل النشط، ومذكرة التزامن المحلية المحفوظة على جهازك فقط.',
        cta: 'افتح المرآة',
        route: 'jung'
      },
      {
        tag: 'الصوت والطبيعة',
        title: 'استوديو الرنين والترددات',
        desc: 'ترددات متناغمة مجسمة 432 و528 هرتز، إيقاعات ألفا وثيتا ودلتا الثنائية، وأربع طبقات لأصوات الطبيعة.',
        cta: 'افتح مازج الصوت',
        route: 'sanctuary_mixer'
      },
      {
        tag: 'مكتبة تعليمية',
        title: 'أدلة الوعي والحياة',
        desc: 'أدلة مفصلة حول الحياة الواعية، العمل مع الظل، بروتوكولات التأمل، وفيزياء الرنين الصوتي.',
        cta: 'اقرأ الأدلة',
        route: 'guides'
      }
    ],
    quotes: {
      jung: {
        text: '«ما لم تجعل اللاوعي واعياً، فسيظل يوجّه حياتك وستسمّيه قدراً.»',
        author: 'Carl Gustav Jung'
      },
      freud: {
        text: '«المشاعر غير المعبَّر عنها لا تموت أبداً؛ بل تُدفن حيّة وتعود لاحقاً بصور أكثر تعقيداً.»',
        author: 'Sigmund Freud'
      },
      adler: {
        text: '«نحن لا نعاني من صدمة تجاربنا؛ بل نصوغ منها المعنى الذي نختاره لحياتنا.»',
        author: 'Alfred Adler'
      }
    },
    soundEyebrow: 'رنين سيماتيك مباشر · صدى المعبد المجسم',
    soundTitle: 'اختر الأجواء الصوتية بنقرة واحدة.',
    soundSub: 'بدلاً من النغمات الحادة الجافة، استمع إلى توافقيات دافئة مع صدى مكاني وأوعية تبتية وأصوات طبيعة حية.',
    soundPureLink: 'افتح استوديو التأمل والترددات (/ar/altaamul-waltaraddudat) ↗',
    soundFullLink: 'افتح المازج الكامل و4 غرف تأمل ←',
    soundRoomsLink: '4 غرف تأمل مباشرة ←',
    mixerReady: 'جاهز · صامت',
    mixerActive: 'نشط · رنين مجسم',
    scenes: {
      temple: ['معبد الليل', 'توافقيات 432 هرتز · أوعية المعبد · مطر ليلي'],
      theta: ['عتبة ثيتا والصفاء', 'إيقاع 6 هرتز ثنائي · طبقة عميقة · أمواج المحيط'],
      shadow: ['الظل والذات الداخلية', '396 هرتز جذر عميق · صوت معبد · دفء الموقد'],
      dawn: ['صفاء الفجر', 'توافقيات 528 هرتز · أوعية تبتية · نسيم الليل']
    },
    readGuide: 'اقرأ الدليل',
    guidesEyebrow: 'مكتبة تعليمية معمقة',
    guidesTitle: 'الفهم هو العتبة الأولى للتحول.',
    guidesSub: 'أدلة منهجية واضحة حول الحياة الواعية وعلم نفس كارل يونغ والتنفس والرنين الصوتي.',
    guidesAll: 'تصفح جميع الأدلة ←',
    toolsEyebrow: 'رموز عريقة وأدوات حسابية',
    toolsTitle: 'دقة فلكية ومرايا رمزية.',
    toolsSub: 'حسابات فلكية حقيقية وأنظمة حروف تاريخية للتأمل الواعي والشفاف بعيداً عن الحتمية أو الخرافة.',
    tools: [
      {
        tag: 'محرك الفلك الدقيق',
        title: 'خريطة الميلاد',
        desc: 'احسب الشمس والقمر والطالع ووسط السماء والزوايا الكوكبية بدقة فلكية تقارب دقيقة قوسية واحدة.',
        cta: 'احسب الخريطة',
        route: 'natal'
      },
      {
        tag: 'الأبجد وفيثاغورس',
        title: 'حساب الأبجد والأرقام',
        desc: 'تفصيل الأبجد الكبير والصغير حرفاً بحرف مع تحليل مسار الحياة الفيثاغوري.',
        cta: 'افتح الحاسبة',
        route: 'ebced'
      },
      {
        tag: 'هندسة العلاقات',
        title: 'التوافق الفلكي',
        desc: 'قارن بين خريطتي ميلاد لاستكشاف الزوايا الكوكبية وديناميكيات الانسجام والنضج المشترك.',
        cta: 'قارن الخريطتين',
        route: 'synastry'
      },
      {
        tag: 'القمر و12 نموذجاً',
        title: 'التقويم الفلكي والأبراج',
        desc: 'مراحل القمر المباشرة ونسبة الإضاءة وملفات النور والظل لجميع الأبراج الاثني عشر.',
        cta: 'استكشف السماء',
        route: 'calendar'
      }
    ],
    ethicsEyebrow: 'الحدود الأخلاقية والمنهجية',
    ethicsTitle: 'الوضوح بدل الخوف. الوعي بدل التنجيم الحتمي.',
    ethicsBody: 'لا يقدم ميثبورن تشخيصاً طبياً ولا علاجاً نفسياً سريرياً ولا وعوداً حتمية بالمستقبل. كل غرفة تأمل ومرآة يونغ ومشهد صوتي وحساب فلكي يدعم حرية الإرادة الإنسانية والصفاء الذاتي الهادئ.',
    ethicsCta: 'اقرأ المنهجية والمبادئ الأخلاقية ←'
  }
};

export const renderHomeView = ({ locale = 'tr' } = {}) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';
  const c = HOME_COPY[loc] || HOME_COPY.en;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';
  const guides = getGuidesList(loc).slice(0, 4);
  const guideBase = getRouteHref(locale, 'guides');
  const sanctuaryHref = getRouteHref(locale, 'sanctuary');

  const resolveRoute = (key) => {
    if (key === 'sanctuary_mixer') return `${sanctuaryHref}#ses-mikseri`;
    return getRouteHref(locale, key);
  };

  const pillarImages = {
    sanctuary: '/images/sanctuary-hero-2027.jpg',
    jung: '/images/jung-hero-2027.jpg',
    sanctuary_mixer: '/images/Mythborn_02_Altin_Kutsal_Geometri.webp',
    guides: '/images/cinematic/knowledge/celestial-knowledge-library-960.webp'
  };
  const toolImages = {
    natal: '/images/cinematic/astrology/birth-chart-observatory-960.webp',
    ebced: '/images/Mythborn_03_Usturlap_ve_Kadim_Kitap.webp',
    synastry: '/images/cinematic/katina/katina-relationship-960.webp',
    calendar: '/images/astrology/zodiac-celestial-tapestry.jpg'
  };

  return `
  <div class="mb27-home" data-sanctuary-app>
    <!-- 1. Ground-Up 2027 Full-Bleed Vibrant Sanctuary Hero -->
    <section class="mb27-hero">
      <div class="mb27-hero-media" aria-hidden="true">
        <img src="/images/sanctuary-hero-2027.jpg" alt="" width="1408" height="768" fetchpriority="high" decoding="async">
      </div>
      <div class="mb27-hero-aura" aria-hidden="true">
        <div class="mb27-orbit mb27-orbit-1"></div>
        <div class="mb27-orbit mb27-orbit-2"></div>
      </div>
      <div class="astro-container mb27-hero-inner">
        <span class="sanc-eyebrow">✦ ${c.eyebrow}</span>
        <h1 class="mb27-h1">${c.h1}</h1>
        <p class="mb27-lead">${c.lead}</p>
        <div class="mb27-hero-actions">
          <a class="sanc-btn-gold" href="${sanctuaryHref}">
            <span>${c.ctaPrimary}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
          <a class="sanc-btn-ghost" href="${getRouteHref(locale, 'jung')}">
            <span>${c.ctaSecondary}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
        </div>
        <div class="mb27-telemetry" aria-label="Platform standards">
          ${c.telemetry.map((item) => `<span>✦ ${item}</span>`).join('')}
        </div>
      </div>
    </section>

    <!-- 2. Four Flagship Sanctuary Pillars (4-Column Symmetrical Grid, Zero 01-04 Numbers) -->
    <section class="mb27-section" id="pillars">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.pillarsEyebrow}</span>
          <h2>${c.pillarsTitle}</h2>
          <p>${c.pillarsSub}</p>
        </div>
        <div class="mb27-grid-4">
          ${c.pillars.map((p) => `
            <article class="mb27-card mb27-card-has-media" data-spotlight>
              <div class="mb27-card-media">
                <img src="${pillarImages[p.route] || '/images/Mythborn_01_Kozmik_Usturlap.webp'}" alt="${p.title}" loading="lazy" decoding="async">
              </div>
              <div class="mb27-card-body">
                <div>
                  <span class="mb27-card-tag">${p.tag}</span>
                  <h3>${p.title}</h3>
                  <p>${p.desc}</p>
                </div>
                <a class="mb27-card-link" href="${resolveRoute(p.route)}">
                  <span>${p.cta}</span>
                  <span aria-hidden="true">${arrow}</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Quote Interlude I — Carl Gustav Jung -->
    <section class="mb27-quote-band" aria-label="Carl Gustav Jung">
      <div class="astro-container">
        <blockquote class="mb27-quote">
          <p>${c.quotes.jung.text}</p>
          <cite>— ${c.quotes.jung.author}</cite>
        </blockquote>
      </div>
    </section>

    <!-- 3. Interactive Live Cymatics & Stereo Reverb Sound Studio Preview -->
    <section class="mb27-section" id="frequency-studio" aria-labelledby="mb27-sound-title">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.soundEyebrow}</span>
          <h2 id="mb27-sound-title">${c.soundTitle}</h2>
          <p>${c.soundSub}</p>
        </div>

        <div class="sanc-mixer" data-spotlight>
          <div class="sanc-cymatics-band">
            <div class="sanc-cymatics-wrap">
              <canvas class="sanc-cymatics-canvas" data-cymatics-canvas aria-hidden="true"></canvas>
              <div class="mb27-mini-player">
                <button type="button" class="sanc-play-btn" data-sanc-play aria-pressed="false" aria-label="Play or pause resonance">▶</button>
                <div>
                  <div class="sanc-state" data-sanc-state data-label-idle="${c.mixerReady}" data-label-playing="${c.mixerActive}">${c.mixerReady}</div>
                  <div class="sanc-timer-readout" data-sanc-timer-display>10:00</div>
                </div>
              </div>
            </div>
            <div class="sanc-scenes-grid">
              <button type="button" class="sanc-scene-card is-active" data-spotlight data-scene-card="temple" aria-pressed="true">
                <strong>${c.scenes.temple[0]}</strong>
                <span>${c.scenes.temple[1]}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="theta" aria-pressed="false">
                <strong>${c.scenes.theta[0]}</strong>
                <span>${c.scenes.theta[1]}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="shadow" aria-pressed="false">
                <strong>${c.scenes.shadow[0]}</strong>
                <span>${c.scenes.shadow[1]}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="dawn" aria-pressed="false">
                <strong>${c.scenes.dawn[0]}</strong>
                <span>${c.scenes.dawn[1]}</span>
              </button>
            </div>
          </div>

          <!-- Hidden defaults for homepage one-click studio playback -->
          <div hidden>
            <select data-sanc-duration><option value="600" selected>10m</option></select>
            <select data-sanc-tone><option value="off" selected>off</option><option value="432">432</option></select>
            <input type="range" data-sanc-tone-vol value="28">
            <select data-sanc-music>
              <option value="track:432hz" selected>432hz</option>
              <option value="track:528hz">528hz</option>
              <option value="track:396hz">396hz</option>
              <option value="track:852hz">852hz</option>
              <option value="track:963hz">963hz</option>
              <option value="track:174hz">174hz</option>
              <option value="track:639hz">639hz</option>
              <option value="track:alpha-10hz">alpha-10hz</option>
            </select>
            <input type="range" data-sanc-music-vol value="90">
            <select data-sanc-nature><option value="rain" selected>rain</option><option value="ocean">ocean</option><option value="wind">wind</option><option value="fire">fire</option><option value="off">off</option></select>
            <input type="range" data-sanc-nature-vol value="26">
          </div>

          <div class="sanc-mixer-foot">
            <a href="${sanctuaryHref}#ses-mikseri" class="sanc-link">${c.soundFullLink}</a>
            <a href="${sanctuaryHref}#odalar" class="sanc-link">${c.soundRoomsLink}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Interlude II — Sigmund Freud -->
    <section class="mb27-quote-band" aria-label="Sigmund Freud">
      <div class="astro-container">
        <blockquote class="mb27-quote">
          <p>${c.quotes.freud.text}</p>
          <cite>— ${c.quotes.freud.author}</cite>
        </blockquote>
      </div>
    </section>

    <!-- 4. Educational Long-Form Guides Showcase (4-Column Symmetrical Grid) -->
    <section class="mb27-section" id="guides">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.guidesEyebrow}</span>
          <h2>${c.guidesTitle}</h2>
          <p>${c.guidesSub}</p>
        </div>
        <div class="mb27-grid-4">
          ${guides.map((g) => `
            <article class="mb27-card mb27-card-has-media" data-spotlight>
              <div class="mb27-card-media">
                <img src="${g.image || '/images/cinematic/knowledge/celestial-knowledge-library-960.webp'}" alt="${g.title}" loading="lazy" decoding="async">
              </div>
              <div class="mb27-card-body">
                <div>
                  <span class="mb27-card-tag">${g.tag} · ${g.readTime}</span>
                  <h3>${g.title}</h3>
                  <p>${g.lead}</p>
                </div>
                <a class="mb27-card-link" href="${guideBase}/${g.slug}">
                  <span>${c.readGuide}</span>
                  <span aria-hidden="true">${arrow}</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
        <div class="sanc-center" style="margin-top:28px">
          <a class="sanc-btn-ghost" href="${guideBase}">${c.guidesAll}</a>
        </div>
      </div>
    </section>

    <!-- Quote Interlude III — Alfred Adler -->
    <section class="mb27-quote-band" aria-label="Alfred Adler">
      <div class="astro-container">
        <blockquote class="mb27-quote">
          <p>${c.quotes.adler.text}</p>
          <cite>— ${c.quotes.adler.author}</cite>
        </blockquote>
      </div>
    </section>

    <!-- 5. Ancient Symbols & Mathematical Instruments (4-Column Symmetrical Grid) -->
    <section class="mb27-section" id="instruments">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.toolsEyebrow}</span>
          <h2>${c.toolsTitle}</h2>
          <p>${c.toolsSub}</p>
        </div>
        <div class="mb27-grid-4">
          ${c.tools.map((item) => `
            <article class="mb27-card mb27-card-has-media astro-card" data-spotlight>
              <div class="mb27-card-media">
                <img src="${toolImages[item.route] || '/images/Mythborn_01_Kozmik_Usturlap.webp'}" alt="${item.title}" loading="lazy" decoding="async">
              </div>
              <div class="mb27-card-body">
                <div>
                  <span class="mb27-card-tag">${item.tag}</span>
                  <h3>${item.title}</h3>
                  <p>${item.desc}</p>
                </div>
                <a class="mb27-card-link" href="${resolveRoute(item.route)}">
                  <span>${item.cta}</span>
                  <span aria-hidden="true">${arrow}</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 6. Ethical Manifesto & Boundaries -->
    <section class="mb27-section" id="methodology">
      <div class="astro-container">
        <div class="mb27-ethics-panel" data-spotlight>
          <span class="sanc-eyebrow">✦ ${c.ethicsEyebrow}</span>
          <h2>${c.ethicsTitle}</h2>
          <p>${c.ethicsBody}</p>
          <a class="sanc-btn-ghost" href="${getRouteHref(locale, 'approach')}">${c.ethicsCta}</a>
        </div>
      </div>
    </section>
  </div>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
