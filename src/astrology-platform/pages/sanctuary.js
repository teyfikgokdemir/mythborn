// Mythborn 2027 — Unified Meditation & Studio Frequency Sanctuary (/meditasyon-ve-frekans)
// Consolidates Meditation Rooms + 8 Real Studio Frequency Tracks (/audio/*.m4a) + Live Cymatics + Nature Layer
import { renderReadingCuration } from './jung.js';

const TRACKS_TR = [
  { key: 'track:432hz', hz: '432', unit: 'Hz', label: 'Derin Gevşeme & Denge', note: 'Akort referansı · Akşam dinginliği', active: true },
  { key: 'track:528hz', hz: '528', unit: 'Hz', label: 'Dönüşüm & Berraklık', note: 'Solfeggio · Ferah başlangıç' },
  { key: 'track:396hz', hz: '396', unit: 'Hz', label: 'Köklenme & Gölge Bırakma', note: 'Solfeggio · Derin pes doku' },
  { key: 'track:174hz', hz: '174', unit: 'Hz', label: 'Topraklanma & Sükûnet', note: 'Solfeggio · Bedensel dinginlik' },
  { key: 'track:639hz', hz: '639', unit: 'Hz', label: 'Kalp Uyumu & Bağ', note: 'Solfeggio · Yumuşak harmoni' },
  { key: 'track:852hz', hz: '852', unit: 'Hz', label: 'Sezgi & İçsel Netlik', note: 'Solfeggio · Gece tefekkürü' },
  { key: 'track:963hz', hz: '963', unit: 'Hz', label: 'Yüksek Sessizlik & Bütünlük', note: 'Solfeggio · Meditatif açıklık' },
  { key: 'track:alpha-10hz', hz: '10', unit: 'Hz', label: 'Alpha Binaural Odak', note: 'Kulaklık önerilir · Sakin akış' }
];

const TRACKS_EN = [
  { key: 'track:432hz', hz: '432', unit: 'Hz', label: 'Deep Relaxation & Balance', note: 'Tuning reference · Evening stillness', active: true },
  { key: 'track:528hz', hz: '528', unit: 'Hz', label: 'Transformation & Clarity', note: 'Solfeggio · Fresh renewal' },
  { key: 'track:396hz', hz: '396', unit: 'Hz', label: 'Grounding & Shadow Release', note: 'Solfeggio · Deep root warmth' },
  { key: 'track:174hz', hz: '174', unit: 'Hz', label: 'Deep Grounding & Rest', note: 'Solfeggio · Somatic calm' },
  { key: 'track:639hz', hz: '639', unit: 'Hz', label: 'Heart Harmony & Connection', note: 'Solfeggio · Soft warmth' },
  { key: 'track:852hz', hz: '852', unit: 'Hz', label: 'Intuition & Lucid Focus', note: 'Solfeggio · Night contemplation' },
  { key: 'track:963hz', hz: '963', unit: 'Hz', label: 'High Stillness & Wholeness', note: 'Solfeggio · Expansive quiet' },
  { key: 'track:alpha-10hz', hz: '10', unit: 'Hz', label: 'Alpha Binaural Focus', note: 'Headphones · Calm flow' }
];

const TRACKS_EL = [
  { key: 'track:432hz', hz: '432', unit: 'Hz', label: 'Βαθιά Χαλάρωση & Ισορροπία', note: 'Αναφορά συντονισμού · Βραδινή ηρεμία', active: true },
  { key: 'track:528hz', hz: '528', unit: 'Hz', label: 'Μεταμόρφωση & Διαύγεια', note: 'Solfeggio · Φωτεινή ανανέωση' },
  { key: 'track:396hz', hz: '396', unit: 'Hz', label: 'Γείωση & Απελευθέρωση Σκιάς', note: 'Solfeggio · Βαθιά ζεστασιά ρίζας' },
  { key: 'track:174hz', hz: '174', unit: 'Hz', label: 'Βαθιά Γείωση & Ανάπαυση', note: 'Solfeggio · Σωματική γαλήνη' },
  { key: 'track:639hz', hz: '639', unit: 'Hz', label: 'Αρμονία Καρδιάς & Σύνδεση', note: 'Solfeggio · Απαλή αρμονία' },
  { key: 'track:852hz', hz: '852', unit: 'Hz', label: 'Διαίσθηση & Καθαρή Εστίαση', note: 'Solfeggio · Νυχτερινός στοχασμός' },
  { key: 'track:963hz', hz: '963', unit: 'Hz', label: 'Υψηλή Σιωπή & Ολότητα', note: 'Solfeggio · Διαλογιστική ευρύτητα' },
  { key: 'track:alpha-10hz', hz: '10', unit: 'Hz', label: 'Εστίαση Alpha Binaural', note: 'Ακουστικά · Ήρεμη ροή' }
];

const TRACKS_ES = [
  { key: 'track:432hz', hz: '432', unit: 'Hz', label: 'Relajación Profunda y Equilibrio', note: 'Afinación de referencia · Calma nocturna', active: true },
  { key: 'track:528hz', hz: '528', unit: 'Hz', label: 'Transformación y Claridad', note: 'Solfeggio · Renovación serena' },
  { key: 'track:396hz', hz: '396', unit: 'Hz', label: 'Arraigo y Liberación de Sombra', note: 'Solfeggio · Calidez de raíz profunda' },
  { key: 'track:174hz', hz: '174', unit: 'Hz', label: 'Enraizamiento y Descanso', note: 'Solfeggio · Sosiego somático' },
  { key: 'track:639hz', hz: '639', unit: 'Hz', label: 'Armonía del Corazón y Vínculo', note: 'Solfeggio · Suave consonancia' },
  { key: 'track:852hz', hz: '852', unit: 'Hz', label: 'Intuición y Lucidez Interior', note: 'Solfeggio · Contemplación nocturna' },
  { key: 'track:963hz', hz: '963', unit: 'Hz', label: 'Quietud Elevada e Integridad', note: 'Solfeggio · Amplitud meditativa' },
  { key: 'track:alpha-10hz', hz: '10', unit: 'Hz', label: 'Enfoque Binaural Alpha', note: 'Auriculares · Flujo tranquilo' }
];

const TRACKS_AR = [
  { key: 'track:432hz', hz: '432', unit: 'Hz', label: 'استرخاء عميق وتوازن', note: 'مرجع ضبط موسيقي · سكينة المساء', active: true },
  { key: 'track:528hz', hz: '528', unit: 'Hz', label: 'تحوّل وصفاء ذهني', note: 'سولفيجيو · تجدد هادئ' },
  { key: 'track:396hz', hz: '396', unit: 'Hz', label: 'تجذّر وتحرير الظل', note: 'سولفيجيو · دفء الجذر العميق' },
  { key: 'track:174hz', hz: '174', unit: 'Hz', label: 'رسوخ وسكينة جسدية', note: 'سولفيجيو · راحة الأعصاب' },
  { key: 'track:639hz', hz: '639', unit: 'Hz', label: 'انسجام القلب والتواصل', note: 'سولفيجيو · تناغم لطيف' },
  { key: 'track:852hz', hz: '852', unit: 'Hz', label: 'حدس وصفاء داخلي', note: 'سولفيجيو · تأمل ليلي' },
  { key: 'track:963hz', hz: '963', unit: 'Hz', label: 'صمت عميق واكتمال', note: 'سولفيجيو · اتساع تأملي' },
  { key: 'track:alpha-10hz', hz: '10', unit: 'Hz', label: 'تركيز ألفا الثنائي', note: 'سماعات الرأس · تدفق هادئ' }
];

const TRACKS_MAP = { tr: TRACKS_TR, en: TRACKS_EN, el: TRACKS_EL, es: TRACKS_ES, ar: TRACKS_AR };

const COPY = {
  tr: {
    eyebrow: 'MEDİTASYON & FREKANS STÜDYOSU · 8 STÜDYO KAYDI & 4 CANLI ODA',
    title: 'Meditasyon & Frekans Stüdyosu.',
    lead: '8 gerçek stüdyo frekans kaydı, canlı kymatik rezonans, doğa sesleri ve 4 meditasyon odası tek sığınakta.',
    studioEyebrow: '8 GERÇEK STÜDYO FREKANS KAYDI · ANINDA AKIŞ',
    studioTitle: 'Frekansını Seç, Atmosferini Kur.',
    studioSub: 'Herhangi bir stüdyo kaydına dokun; dilersen üzerine canlı Gece Yağmuru, Okyanus, Rüzgar veya Sıcak Ateş ekle.',
    idle: 'HAZIR · SES KAPALI',
    playing: 'AKTİF · STÜDYO AKIŞI',
    duration: 'Oturum Süresi',
    natureLabel: 'Doğa Sesi Katmanı',
    volumeLabel: 'Ses Seviyesi',
    natures: {
      off: 'Sadece Stüdyo Kaydı',
      rain: '+ Gece Yağmuru',
      ocean: '+ Okyanus Dalgaları',
      wind: '+ Gece Rüzgarı',
      fire: '+ Sıcak Ateş & Mum'
    },
    roomsEyebrow: 'DÖRT CANLI MEDİTASYON ODASI',
    roomsTitle: 'Dikkati Topla, Bedeni Gevşet, Özüne Dön.',
    roomsSub: 'Her oda ilgili gerçek stüdyo frekans kaydı ve doğa sesiyle tek tıkla eşleşir.',
    tabsLabel: 'Meditasyon Odaları',
    rooms: {
      candle: {
        tab: 'Mum (Trataka)',
        title: 'Mum Meditasyonu — Trataka Odağı',
        subtitle: 'Gözlerini alevin sabit çekirdeğine yumuşakça bırak; düşünceler geçsin, dikkat merkezde kalsın.',
        guide: 'Alevi 40–60 cm mesafeden zorlamadan izle. Gözlerin yorulduğunda kapaklarını kapatıp zihnindeki sıcak ışık izini 30 saniye gözlemle.',
        preset: '432 Hz Stüdyo + Sıcak Ateş ile Başlat'
      },
      breath: {
        tab: 'İç Benlik & Nefes',
        title: 'İç Benlik Nefes Küresi',
        subtitle: 'Sinir sistemini sakinleştiren ritmik nefes döngüsüyle zihni şimdiki ana geri çağır.',
        patternLabel: 'Nefes ritmi',
        patterns: {
          box: '4-4-4-4 · Kutu Nefesi (Denge)',
          '478': '4-7-8 · Derin Gevşeme',
          coherence: '5-5 · Kalp Koheransı'
        },
        start: 'Nefes Rehberini Başlat',
        stop: 'Duraklat',
        phases: { in: 'NEFES AL', hold: 'TUT', out: 'YAVAŞÇA VER', rest: 'BEKLE' },
        preset: 'Alpha 10 Hz Stüdyo + Gece Rüzgarı'
      },
      theta: {
        tab: 'Theta & Derin Gevşeme',
        title: 'Theta Eşik Bilinci & Somatik Gevşeme',
        subtitle: 'Bedeni derin dinginliğe bırakıp zihni uyanık gözlemde tutan 4 aşamalı somatik eşik pratiği.',
        stages: [
          ['Bedeni Bırak', 'Omuzları, çeneyi ve göz çevresini gevşet; ağırlığını tamamen zemine teslim et.'],
          ['Nefesi İncelt', 'Her nefes verişte bedenin biraz daha ağırlaştığını, zihnin ise berraklaştığını hisset.'],
          ['Eşik Bilinci', 'Uyku ile uyanıklık arasındaki sakin boşlukta görüntü ve imgeleri zorlamadan izle.'],
          ['Bedenine Dön', 'Derin bir nefes al, parmak uçlarını hafifçe oynat ve odanın sesine nazikçe geri dön.']
        ],
        note: 'Kulaklık önerilir. Bu pratik kişisel farkındalık ve derin gevşeme amaçlıdır; tıbbi veya klinik bir uygulama değildir.',
        preset: '852 Hz Stüdyo + Okyanus ile Başlat'
      },
      mantra: {
        tab: '108 Mantra Sayacı',
        title: '108 Mantra & Niyet Tespihi',
        subtitle: 'Her dokunuşta yumuşak Tibet çanağı tınısıyla niyetini tekrarla; her 27. boncukta derin yankı duy.',
        mantras: [
          '“Şimdi buradayım, güvendeyim ve berrakım.”',
          '“Kontrol edemediğimi bırakıyor, özüme dönüyorum.”',
          '“Gördüğüm her gölge, bütünlüğümün bir parçasıdır.”'
        ],
        tap: 'Niyetle Dokun',
        roundsLabel: 'Tamamlanan Tur',
        reset: 'Sıfırla',
        preset: '963 Hz Stüdyo + Gece Yağmuru'
      }
    },
    scienceEyebrow: 'BİLİMSEL DİNLEME & İŞİTME GÜVENLİĞİ',
    scienceTitle: 'Güvenli Dinleme ve Etik Sınırlarımız.',
    scienceSub: 'Mythborn bilimsel işitme güvenliği ile kültürel sembolizmi şeffaf biçimde ayırır.',
    scienceCards: [
      ['DOZ KANITI', 'Şifa için belirlenmiş bir süre yok.', 'Solfeggio veya 432 Hz kayıtlarının belirli bir hastalığı tedavi ettiğini gösteren klinik bir reçete bulunmaz. Süre seçiciler yalnızca kişisel odak kolaylığı içindir.'],
      ['İŞİTME GÜVENLİĞİ', 'Sesi düşük tut; desibeli izle.', 'Dünya Sağlık Örgütü’ne göre 80 dB(A) için haftalık 40 saat, 90 dB(A) için yaklaşık 4 saat referans sınırıdır. Tarayıcı kulaklıktan çıkan gerçek dB(A) düzeyini ölçemez; düşük sesle başla.'],
      ['ETİK SINIR', 'Tıbbi tedavi frekansları değildir.', 'Buradaki tüm stüdyo kayıtları ve meditasyon odaları kişisel dinginlik ve farkındalık içindir. Kulak çınlaması veya rahatsızlık hissedersen hemen durdur.']
    ],
    faqTitle: 'Meditasyon & Frekanslar Hakkında Sık Sorulanlar',
    cymaticsCaption: 'CANLI KYMATİK REZONANS · 8 STÜDYO KAYDI',
    trackGridAria: '8 Stüdyo Frekans Kaydı',
    durationOptions: [['300', '5 dakika'], ['600', '10 dakika'], ['900', '15 dakika'], ['1200', '20 dakika']],
    whoLinkLabel: 'DSÖ · Güvenli Dinleme ↗',
    nihLinkLabel: 'NIH/NCCIH · Müzik ve Sağlık ↗',
    faqEyebrow: 'SIK SORULANLAR'
  },
  en: {
    eyebrow: 'MEDITATION & FREQUENCY STUDIO · 8 STUDIO TRACKS & 4 LIVE ROOMS',
    title: 'Meditation & Frequency Studio.',
    lead: '8 real studio frequency tracks, live cymatics resonance, nature acoustics and 4 meditation rooms in one sanctuary.',
    studioEyebrow: '8 REAL STUDIO FREQUENCY TRACKS · INSTANT STREAMING',
    studioTitle: 'Choose Your Frequency, Shape Your Atmosphere.',
    studioSub: 'Tap any studio recording and optionally layer live Night Rain, Ocean Waves, Night Wind or Warm Hearth.',
    idle: 'READY · SILENT',
    playing: 'ACTIVE · STUDIO STREAM',
    duration: 'Session Timer',
    natureLabel: 'Nature Soundscape Layer',
    volumeLabel: 'Volume',
    natures: {
      off: 'Studio Track Only',
      rain: '+ Night Rain',
      ocean: '+ Ocean Waves',
      wind: '+ Night Wind',
      fire: '+ Warm Hearth & Candle'
    },
    roomsEyebrow: 'FOUR LIVE MEDITATION ROOMS',
    roomsTitle: 'Gather Attention, Soften the Body, Return to Center.',
    roomsSub: 'Each room pairs in one click with its matching real studio frequency track and nature layer.',
    tabsLabel: 'Meditation Rooms',
    rooms: {
      candle: {
        tab: 'Candle (Trataka)',
        title: 'Candle Meditation — Trataka Focus',
        subtitle: 'Rest your gaze softly on the luminous core of the flame; let thoughts pass while attention stays centered.',
        guide: 'Observe the flame effortlessly from a comfortable distance. When your eyes tire, close them and watch the warm afterimage for 30 seconds.',
        preset: 'Start 432 Hz Studio + Warm Hearth'
      },
      breath: {
        tab: 'Inner Self & Breath',
        title: 'Inner-Self Breath Orb',
        subtitle: 'Guide your nervous system back into present stillness with a rhythmic visual breathing sphere.',
        patternLabel: 'Breath cadence',
        patterns: {
          box: '4-4-4-4 · Box Breathing (Balance)',
          '478': '4-7-8 · Deep Relaxation',
          coherence: '5-5 · Heart Coherence'
        },
        start: 'Start Breath Guide',
        stop: 'Pause',
        phases: { in: 'INHALE', hold: 'HOLD', out: 'EXHALE', rest: 'REST' },
        preset: 'Alpha 10 Hz Studio + Night Wind'
      },
      theta: {
        tab: 'Theta & Deep Rest',
        title: 'Theta Threshold & Somatic Relaxation',
        subtitle: 'A four-stage somatic release practice keeping awareness lucid while the body enters deep rest.',
        stages: [
          ['Release the Body', 'Soften shoulders, jaw and eyes; let your full physical weight settle into stillness.'],
          ['Refine the Breath', 'With each exhale feel the body grow heavier while inner awareness stays luminous.'],
          ['Liminal Stillness', 'Rest in the quiet space between waking and sleep without forcing imagery.'],
          ['Gentle Return', 'Take a deep breath, move your fingertips slowly and return to the room.']
        ],
        note: 'Headphones recommended. Intended for mindful relaxation, not medical therapy.',
        preset: 'Start 852 Hz Studio + Ocean Waves'
      },
      mantra: {
        tab: '108 Mala Counter',
        title: '108 Mantra & Intention Mala',
        subtitle: 'Count each contemplation with a soft synthesized Tibetan bowl strike and a deeper chime every 27 beads.',
        mantras: [
          '“I am present, grounded and clear in this moment.”',
          '“I release what I cannot force and return to my center.”',
          '“Every shadow I witness becomes part of my wholeness.”'
        ],
        tap: 'Tap with Intention',
        roundsLabel: 'Completed Rounds',
        reset: 'Reset',
        preset: '963 Hz Studio + Night Rain'
      }
    },
    scienceEyebrow: 'SAFE LISTENING & SCIENTIFIC BOUNDARIES',
    scienceTitle: 'Safe Listening and Our Ethical Boundaries.',
    scienceSub: 'Mythborn transparently separates measurable hearing safety from cultural symbolism.',
    scienceCards: [
      ['NO CLINICAL DOSE', 'No prescribed healing duration.', 'There is no clinical evidence prescribing specific daily minutes of 432 Hz or Solfeggio tracks to cure illness. Timers exist purely for listening convenience.'],
      ['HEARING SAFETY', 'Keep volume low; respect decibels.', 'WHO safe-listening references cite 40 hours/week at 80 dB(A) and 4 hours/week at 90 dB(A). Browsers cannot measure real ear-level dB(A); always start low.'],
      ['ETHICAL BOUNDARY', 'Mindful acoustics, not medical care.', 'All tracks and meditation rooms support calm reflection and focus. Stop immediately if you notice ear ringing or discomfort.']
    ],
    faqTitle: 'Frequently Asked Questions on Meditation & Frequencies',
    cymaticsCaption: 'LIVE CYMATICS RESONANCE · 8 STUDIO TRACKS',
    trackGridAria: '8 Studio Frequency Tracks',
    durationOptions: [['300', '5 minutes'], ['600', '10 minutes'], ['900', '15 minutes'], ['1200', '20 minutes']],
    whoLinkLabel: 'WHO · Safe Listening ↗',
    nihLinkLabel: 'NIH/NCCIH · Music & Health ↗',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS'
  },
  el: {
    eyebrow: 'ΣΤΟΥΝΤΙΟ ΔΙΑΛΟΓΙΣΜΟΥ & ΣΥΧΝΟΤΗΤΩΝ · 8 ΗΧΟΓΡΑΦΗΣΕΙΣ & 4 ΖΩΝΤΑΝΑ ΔΩΜΑΤΙΑ',
    title: 'Στούντιο Διαλογισμού & Συχνοτήτων.',
    lead: '8 αυθεντικές στούντιο συχνότητες, ζωντανός κυματικός συντονισμός, ήχοι φύσης και 4 δωμάτια διαλογισμού σε ένα καταφύγιο.',
    studioEyebrow: '8 ΑΥΘΕΝΤΙΚΕΣ ΗΧΟΓΡΑΦΗΣΕΙΣ ΣΤΟΥΝΤΙΟ · ΑΜΕΣΗ ΡΟΗ',
    studioTitle: 'Επίλεξε τη Συχνότητά σου, Διαμόρφωσε την Ατμόσφαιρα.',
    studioSub: 'Άγγιξε οποιαδήποτε ηχογράφηση στούντιο και πρόσθεσε προαιρετικά Νυχτερινή Βροχή, Ωκεανό, Άνεμο ή Ζεστή Φωτιά.',
    idle: 'ΕΤΟΙΜΟ · ΣΙΩΠΗ',
    playing: 'ΕΝΕΡΓΟ · ΣΤΟΥΝΤΙΟ ΡΟΗ',
    duration: 'Διάρκεια Συνεδρίας',
    natureLabel: 'Επίπεδο Ήχου Φύσης',
    volumeLabel: 'Ένταση Ήχου',
    natures: {
      off: 'Μόνο Ηχογράφηση Στούντιο',
      rain: '+ Νυχτερινή Βροχή',
      ocean: '+ Κύματα Ωκεανού',
      wind: '+ Νυχτερινός Άνεμος',
      fire: '+ Ζεστή Φωτιά & Κερί'
    },
    roomsEyebrow: 'ΤΕΣΣΕΡΑ ΖΩΝΤΑΝΑ ΔΩΜΑΤΙΑ ΔΙΑΛΟΓΙΣΜΟΥ',
    roomsTitle: 'Συγκέντρωσε την Προσοχή, Χαλάρωσε το Σώμα, Επίστρεψε στο Κέντρο.',
    roomsSub: 'Κάθε δωμάτιο συνδέεται με ένα κλικ με την αντίστοιχη ηχογράφηση στούντιο και τον ήχο φύσης.',
    tabsLabel: 'Δωμάτια Διαλογισμού',
    rooms: {
      candle: {
        tab: 'Κερί (Trataka)',
        title: 'Διαλογισμός Κεριού — Εστίαση Trataka',
        subtitle: 'Άφησε απαλά το βλέμμα στον φωτεινό πυρήνα της φλόγας· άφησε τις σκέψεις να περνούν ενώ η προσοχή μένει κεντραρισμένη.',
        guide: 'Παρατήρησε τη φλόγα χωρίς ένταση από άνετη απόσταση. Όταν κουραστούν τα μάτια, κλείσε τα και δες το ζεστό ίχνος φωτός για 30 δευτερόλεπτα.',
        preset: 'Έναρξη 432 Hz Στούντιο + Ζεστή Φωτιά'
      },
      breath: {
        tab: 'Εσωτερικός Εαυτός & Αναπνοή',
        title: 'Σφαίρα Αναπνοής Εσωτερικού Εαυτού',
        subtitle: 'Οδήγησε το νευρικό σου σύστημα ξανά στην ήρεμη παρουσία με μια ρυθμική οπτική σφαίρα αναπνοής.',
        patternLabel: 'Ρυθμός αναπνοής',
        patterns: {
          box: '4-4-4-4 · Κουτί Αναπνοής (Ισορροπία)',
          '478': '4-7-8 · Βαθιά Χαλάρωση',
          coherence: '5-5 · Συνοχή Καρδιάς'
        },
        start: 'Έναρξη Οδηγού Αναπνοής',
        stop: 'Παύση',
        phases: { in: 'ΕΙΣΠΝΟΗ', hold: 'ΚΡΑΤΗΜΑ', out: 'ΕΚΠΝΟΗ', rest: 'ΑΝΑΠΑΥΣΗ' },
        preset: 'Alpha 10 Hz Στούντιο + Νυχτερινός Άνεμος'
      },
      theta: {
        tab: 'Theta & Βαθιά Ανάπαυση',
        title: 'Κατώφλι Theta & Σωματική Χαλάρωση',
        subtitle: 'Μια πρακτική σωματικής χαλάρωσης τεσσάρων σταδίων που διατηρεί τη συνειδητότητα διαυγή καθώς το σώμα αναπαύεται βαθιά.',
        stages: [
          ['Απελευθέρωσε το Σώμα', 'Χαλάρωσε ώμους, σαγόνι και μάτια· άφησε όλο το βάρος σου στη γαλήνη.'],
          ['Λέπτυνε την Αναπνοή', 'Σε κάθε εκπνοή νιώσε το σώμα πιο βαρύ ενώ η εσωτερική επίγνωση παραμένει φωτεινή.'],
          ['Μεταβατική Σιωπή', 'Ξεκουράσου στον ήρεμο χώρο ανάμεσα στον ύπνο και την εγρήγορση χωρίς να πιέζεις εικόνες.'],
          ['Ήπια Επιστροφή', 'Πάρε μια βαθιά ανάσα, κίνησε αργά τα δάχτυλα και επίστρεψε απαλά στο δωμάτιο.']
        ],
        note: 'Προτείνονται ακουστικά. Προορίζεται για ενσυνείδητη χαλάρωση, όχι για ιατρική θεραπεία.',
        preset: 'Έναρξη 852 Hz Στούντιο + Κύματα Ωκεανού'
      },
      mantra: {
        tab: 'Μετρητής 108 Μάντρα',
        title: '108 Μάντρα & Κομπολόι Πρόθεσης',
        subtitle: 'Μέτρησε κάθε στοχασμό με ένα απαλό συνθετικό χτύπημα θιβετιανού κυμβάλου και βαθύτερη αντήχηση ανά 27 χάντρες.',
        mantras: [
          '«Είμαι παρών, γειωμένος και διαυγής σε αυτή τη στιγμή.»',
          '«Αφήνω ό,τι δεν μπορώ να επιβάλω και επιστρέφω στο κέντρο μου.»',
          '«Κάθε σκιά που αντικρίζω γίνεται μέρος της ολότητάς μου.»'
        ],
        tap: 'Άγγιγμα με Πρόθεση',
        roundsLabel: 'Ολοκληρωμένοι Γύροι',
        reset: 'Μηδενισμός',
        preset: '963 Hz Στούντιο + Νυχτερινή Βροχή'
      }
    },
    scienceEyebrow: 'ΑΣΦΑΛΗΣ ΑΚΡΟΑΣΗ & ΕΠΙΣΤΗΜΟΝΙΚΑ ΟΡΙΑ',
    scienceTitle: 'Ασφαλής Ακρόαση και τα Ηθικά μας Όρια.',
    scienceSub: 'Το Mythborn διαχωρίζει με διαφάνεια την ασφάλεια ακοής από τον πολιτισμικό συμβολισμό.',
    scienceCards: [
      ['ΧΩΡΙΣ ΚΛΙΝΙΚΗ ΔΟΣΗ', 'Δεν υπάρχει συνταγογραφημένη διάρκεια.', 'Δεν υπάρχουν κλινικά δεδομένα που να ορίζουν συγκεκριμένα λεπτά ακρόασης 432 Hz ή Solfeggio για θεραπεία νόσων. Οι χρονοδιακόπτες εξυπηρετούν μόνο την άνεσή σου.'],
      ['ΑΣΦΑΛΕΙΑ ΑΚΟΗΣ', 'Κράτησε την ένταση χαμηλά· σεβάσου τα ντεσιμπέλ.', 'Οι οδηγίες του ΠΟΥ αναφέρουν έως 40 ώρες/εβδομάδα στα 80 dB(A) και 4 ώρες/εβδομάδα στα 90 dB(A). Ο περιηγητής δεν μετρά τα πραγματικά dB(A) στο αυτί· ξεκίνα χαμηλά.'],
      ['ΗΘΙΚΟ ΟΡΙΟ', 'Ενσυνείδητη ακουστική, όχι ιατρική φροντίδα.', 'Όλες οι ηχογραφήσεις και τα δωμάτια διαλογισμού στηρίζουν την ηρεμία και την εστίαση. Σταμάτησε αμέσως αν νιώσεις εμβοές ή δυσφορία.']
    ],
    faqTitle: 'Συχνές Ερωτήσεις για Διαλογισμό & Συχνότητες',
    cymaticsCaption: 'ΖΩΝΤΑΝΟΣ ΚΥΜΑΤΙΚΟΣ ΣΥΝΤΟΝΙΣΜΟΣ · 8 ΣΤΟΥΝΤΙΟ ΚΟΜΜΑΤΙΑ',
    trackGridAria: '8 Στούντιο Ηχογραφήσεις Συχνοτήτων',
    durationOptions: [['300', '5 λεπτά'], ['600', '10 λεπτά'], ['900', '15 λεπτά'], ['1200', '20 λεπτά']],
    whoLinkLabel: 'ΠΟΥ · Ασφαλής Ακρόαση ↗',
    nihLinkLabel: 'NIH/NCCIH · Μουσική & Υγεία ↗',
    faqEyebrow: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ'
  },
  es: {
    eyebrow: 'ESTUDIO DE MEDITACIÓN Y FRECUENCIAS · 8 PISTAS DE ESTUDIO Y 4 SALAS',
    title: 'Estudio de Meditación y Frecuencias.',
    lead: '8 grabaciones reales de frecuencias de estudio, resonancia cimática en vivo, acústica natural y 4 salas de meditación en un solo santuario.',
    studioEyebrow: '8 GRABACIONES REALES DE ESTUDIO · REPRODUCCIÓN INMEDIATA',
    studioTitle: 'Elige tu Frecuencia, Crea tu Atmósfera.',
    studioSub: 'Toca cualquier pista de estudio y añade opcionalmente Lluvia Nocturna, Olas del Océano, Brisa Nocturna o Fuego Cálido.',
    idle: 'LISTO · EN SILENCIO',
    playing: 'ACTIVO · FLUJO DE ESTUDIO',
    duration: 'Duración de Sesión',
    natureLabel: 'Capa de Sonido Natural',
    volumeLabel: 'Volumen',
    natures: {
      off: 'Solo Pista de Estudio',
      rain: '+ Lluvia Nocturna',
      ocean: '+ Olas del Océano',
      wind: '+ Brisa Nocturna',
      fire: '+ Fuego Cálido y Vela'
    },
    roomsEyebrow: 'CUATRO SALAS DE MEDITACIÓN EN VIVO',
    roomsTitle: 'Reúne la Atención, Suelta el Cuerpo, Vuelve al Centro.',
    roomsSub: 'Cada sala se enlaza en un clic con su frecuencia de estudio y capa natural correspondiente.',
    tabsLabel: 'Salas de Meditación',
    rooms: {
      candle: {
        tab: 'Vela (Trataka)',
        title: 'Meditación con Vela — Enfoque Trataka',
        subtitle: 'Posa suavemente la mirada en el núcleo estable de la llama; deja pasar los pensamientos mientras la atención permanece centrada.',
        guide: 'Observa la llama sin esfuerzo desde una distancia cómoda. Cuando tus ojos se cansen, ciérralos y observa la estela cálida durante 30 segundos.',
        preset: 'Iniciar 432 Hz Estudio + Fuego Cálido'
      },
      breath: {
        tab: 'Ser Interior y Respiración',
        title: 'Esfera de Respiración del Ser Interior',
        subtitle: 'Guía tu sistema nervioso de regreso a la calma presente con una esfera visual de respiración rítmica.',
        patternLabel: 'Ritmo de respiración',
        patterns: {
          box: '4-4-4-4 · Respiración Cuadrada (Equilibrio)',
          '478': '4-7-8 · Relajación Profunda',
          coherence: '5-5 · Coherencia Cardíaca'
        },
        start: 'Iniciar Guía de Respiración',
        stop: 'Pausar',
        phases: { in: 'INHALA', hold: 'SOSTÉN', out: 'EXHALA', rest: 'PAUSA' },
        preset: 'Alpha 10 Hz Estudio + Brisa Nocturna'
      },
      theta: {
        tab: 'Theta y Descanso Profundo',
        title: 'Umbral Theta y Relajación Somática',
        subtitle: 'Una práctica de distensión corporal en cuatro etapas que mantiene la consciencia lúcida mientras el cuerpo entra en reposo profundo.',
        stages: [
          ['Suelta el Cuerpo', 'Afloja hombros, mandíbula y ojos; deja que todo el peso físico descanse en quietud.'],
          ['Afina la Respiración', 'Con cada exhalación siente el cuerpo más sereno mientras la lucidez interior permanece clara.'],
          ['Quietud Liminal', 'Descansa en el espacio tranquilo entre vigilia y sueño sin forzar imágenes mentales.'],
          ['Regreso Suave', 'Toma una respiración profunda, mueve suavemente los dedos y vuelve al ambiente de la sala.']
        ],
        note: 'Se recomiendan auriculares. Pensado para relajación consciente, no sustituye terapia médica.',
        preset: 'Iniciar 852 Hz Estudio + Olas del Océano'
      },
      mantra: {
        tab: 'Contador 108 Mantras',
        title: 'Mala de 108 Mantras e Intención',
        subtitle: 'Cuenta cada contemplación con un suave toque de cuenco tibetano y una resonancia profunda cada 27 cuentas.',
        mantras: [
          '«Estoy presente, arraigado y lúcido en este instante.»',
          '«Suelto lo que no puedo forzar y regreso a mi centro.»',
          '«Cada sombra que observo pasa a formar parte de mi integridad.»'
        ],
        tap: 'Tocar con Intención',
        roundsLabel: 'Rondas Completadas',
        reset: 'Reiniciar',
        preset: '963 Hz Estudio + Lluvia Nocturna'
      }
    },
    scienceEyebrow: 'ESCUCHA SEGURA Y LÍMITES CIENTÍFICOS',
    scienceTitle: 'Escucha Segura y Nuestros Límites Éticos.',
    scienceSub: 'Mythborn distingue con transparencia entre seguridad auditiva medible y simbolismo cultural.',
    scienceCards: [
      ['SIN DOSIS CLÍNICA', 'No hay duración curativa prescrita.', 'No existe evidencia clínica que prescriba minutos diarios de 432 Hz o pistas Solfeggio para curar enfermedades. Los temporizadores sirven solo a tu comodidad.'],
      ['SEGURIDAD AUDITIVA', 'Mantén el volumen bajo; cuida los decibelios.', 'Las referencias de la OMS señalan 40 h/semana a 80 dB(A) y 4 h/semana a 90 dB(A). El navegador no mide dB(A) reales en el oído; comienza siempre con volumen bajo.'],
      ['LÍMITE ÉTICO', 'Acústica consciente, no atención médica.', 'Todas las pistas y salas apoyan la calma y el enfoque personal. Detente de inmediato si notas zumbidos o molestia auditiva.']
    ],
    faqTitle: 'Preguntas Frecuentes sobre Meditación y Frecuencias',
    cymaticsCaption: 'RESONANCIA CIMÁTICA EN VIVO · 8 PISTAS DE ESTUDIO',
    trackGridAria: '8 Pistas de Frecuencia de Estudio',
    durationOptions: [['300', '5 minutos'], ['600', '10 minutos'], ['900', '15 minutos'], ['1200', '20 minutos']],
    whoLinkLabel: 'OMS · Escucha Segura ↗',
    nihLinkLabel: 'NIH/NCCIH · Música y Salud ↗',
    faqEyebrow: 'PREGUNTAS FRECUENTES'
  },
  ar: {
    eyebrow: 'استوديو التأمل والترددات · 8 تسجيلات استوديو و4 غرف مباشرة',
    title: 'استوديو التأمل والترددات.',
    lead: '8 مقاطع تردد استوديو حقيقية، رنين سيماتيك بصري مباشر، طبقات طبيعة صوتية، و4 غرف تأمل في ملاذ واحد.',
    studioEyebrow: '8 تسجيلات تردد استوديو حقيقية · بث فوري',
    studioTitle: 'اختر ترددك، وشكّل أجواءك الخاصة.',
    studioSub: 'انقر على أي مقطع استوديو وأضف إليه اختيارياً مطر الليل أو أمواج المحيط أو نسيم الليل أو دفء الموقد.',
    idle: 'جاهز · صامت',
    playing: 'نشط · بث الاستوديو',
    duration: 'مدة الجلسة',
    natureLabel: 'طبقة صوت الطبيعة',
    volumeLabel: 'مستوى الصوت',
    natures: {
      off: 'مقطع الاستوديو فقط',
      rain: '+ مطر الليل',
      ocean: '+ أمواج المحيط',
      wind: '+ نسيم الليل',
      fire: '+ موقد دافئ وشمعة'
    },
    roomsEyebrow: 'أربع غرف تأمل مباشرة',
    roomsTitle: 'اجمع انتباهك، أرخِ جسدك، وعُد إلى المركز.',
    roomsSub: 'تقترن كل غرفة بنقرة واحدة بالتردد المناسب وطبقة الصوت الطبيعي المرافقة له.',
    tabsLabel: 'غرف التأمل',
    rooms: {
      candle: {
        tab: 'تأمل الشمعة (تراتاكا)',
        title: 'تأمل الشمعة — تركيز تراتاكا',
        subtitle: 'أسند بصرك برفق إلى نواة اللهب الثابتة؛ دع الأفكار تمر بينما يبقى الانتباه في المركز.',
        guide: 'تأمل الشعلة دون إجهاد من مسافة مريحة. وعندما تتعب عيناك أغمضهما وراقب الأثر الضوئي الدافئ لمدة 30 ثانية.',
        preset: 'ابدأ 432 هرتز استوديو + موقد دافئ'
      },
      breath: {
        tab: 'الذات الداخلية والتنفس',
        title: 'كرة تنفس الذات الداخلية',
        subtitle: 'أعد جهازك العصبي إلى سكون اللحظة الحاضرة عبر إيقاع تنفس بصري متزن.',
        patternLabel: 'إيقاع التنفس',
        patterns: {
          box: '4-4-4-4 · التنفس المربع (توازن)',
          '478': '4-7-8 · استرخاء عميق',
          coherence: '5-5 · تناغم القلب'
        },
        start: 'ابدأ مرشد التنفس',
        stop: 'إيقاف مؤقت',
        phases: { in: 'شهيق', hold: 'احبس', out: 'زفير', rest: 'سكون' },
        preset: 'ألفا 10 هرتز استوديو + نسيم الليل'
      },
      theta: {
        tab: 'ثيتا والراحة العميقة',
        title: 'عتبة ثيتا والاسترخاء الجسدي',
        subtitle: 'ممارسة جسدية من أربع مراحل تبقي الوعي صافياً بينما يدخل الجسد في راحة عميقة.',
        stages: [
          ['أرخِ الجسد', 'حرّر الكتفين والفك والعينين ودع ثقل الجسد يستقر بهدوء على الأرض.'],
          ['نعم التنفس', 'مع كل زفير اشعر بثقل لطيف في الجسد وصفاء متزايد في الانتباه الداخلي.'],
          ['سكون العتبة', 'استقر في المساحة الهادئة بين اليقظة والنوم دون استدعاء صور قسراً.'],
          ['عودة لطيفة', 'خذ نفساً عميقاً وحرّك أطراف أصابعك برفق وعُد إلى أجواء الغرفة.']
        ],
        note: 'يُنصح باستخدام السماعات. مخصص للاسترخاء الذهني الواعي وليس علاجاً طبياً.',
        preset: 'ابدأ 852 هرتز استوديو + أمواج المحيط'
      },
      mantra: {
        tab: 'عداد 108 مانترا',
        title: 'مسبحة النية والتأمل 108',
        subtitle: 'احسب كل تأمل مع نغمة رقيقة للوعاء التبتي ورنين أعمق عند كل 27 حبة.',
        mantras: [
          '«أنا حاضر هنا، متجذّر وصافٍ في هذه اللحظة.»',
          '«أترك ما لا أستطيع فرضه وأعود إلى مركزي.»',
          '«كل ظل أشهده بوعي يصبح جزءاً من اكتمالي.»'
        ],
        tap: 'انقر بنية هادئة',
        roundsLabel: 'الدورات المكتملة',
        reset: 'إعادة ضبط',
        preset: '963 هرتز استوديو + مطر الليل'
      }
    },
    scienceEyebrow: 'الاستماع الآمن والحدود العلمية',
    scienceTitle: 'الاستماع الآمن وحدودنا الأخلاقية.',
    scienceSub: 'يفصل ميثبورن بشفافية تامة بين سلامة السمع القابلة للقياس والرمزية الثقافية.',
    scienceCards: [
      ['لا توجد جرعة علاجية', 'لا توجد مدة طبية موصوفة للشفاء.', 'لا يوجد دليل سريري يصف دقائق يومية من تردد 432 هرتز أو السولفيجيو لعلاج الأمراض. المؤقتات مخصصة لراحتك وتنظيم وقتك فقط.'],
      ['سلامة السمع', 'حافظ على صوت منخفض وراقب الديسيبل.', 'تشير إرشادات منظمة الصحة العالمية إلى حد 40 ساعة أسبوعياً عند 80 ديسيبل و4 ساعات عند 90 ديسيبل. المتصفح لا يقيس الديسيبل الفعلي في الأذن؛ ابدأ دائماً بصوت منخفض.'],
      ['حد أخلاقي واضح', 'صوتيات تأملية وليست رعاية طبية.', 'تهدف جميع المقاطع وغرف التأمل إلى الهدوء والتركيز الذاتي. أوقف الاستماع فوراً إذا شعرت بطنين أو انزعاج.']
    ],
    faqTitle: 'أسئلة شائعة حول التأمل والترددات',
    cymaticsCaption: 'رنين سيماتيك مباشر · 8 مقاطع استوديو',
    trackGridAria: '8 مقاطع تردد استوديو',
    durationOptions: [['300', '5 دقائق'], ['600', '10 دقائق'], ['900', '15 دقيقة'], ['1200', '20 دقيقة']],
    whoLinkLabel: 'منظمة الصحة العالمية · الاستماع الآمن ↗',
    nihLinkLabel: 'NIH/NCCIH · الموسيقى والصحة ↗',
    faqEyebrow: 'الأسئلة الشائعة'
  }
};

const getCopy = (locale) => COPY[locale === 'gr' ? 'el' : locale] || COPY.en;

const SANCTUARY_FAQS = {
  tr: [
    { question: 'Buradaki 8 frekans kaydı hangi cihazlarda çalışır?', answer: 'Tüm stüdyo kayıtları (432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz ve Alpha 10 Hz) faststart akışlı AAC (.m4a) formatındadır; iPhone, Android ve masaüstü tarayıcıların tamamında beklemeden açılır.' },
    { question: 'Meditasyon odaları ile stüdyo frekanslarını aynı anda kullanabilir miyim?', answer: 'Evet. Mum (Trataka), İç Benlik Nefes Küresi, Theta Gevşeme ve 108 Mantra odalarının her biri tek tıkla ilgili stüdyo kaydını ve isteğe bağlı doğa sesini (Yağmur, Okyanus, Rüzgar, Ateş) eşzamanlı başlatır.' },
    { question: 'Frekans dinlemek tıbbi tedavi yerine geçer mi?', answer: 'Hayır. Tüm ses kayıtları ve meditasyon odaları kişisel dinginlik, odaklanma ve farkındalık amaçlıdır; tıbbi tanı veya klinik tedavi yerine geçmez.' },
    { question: 'Güvenli dinleme için nelere dikkat edilmeli?', answer: 'Her zaman düşük sesle başlayın; Dünya Sağlık Örgütü 80 dB(A) üzerinde uzun süreli maruziyetten kaçınmayı önerir. Rahatsızlık veya kulak çınlaması olursa oturumu hemen durdurun.' }
  ],
  en: [
    { question: 'Which devices support the 8 studio frequency tracks?', answer: 'All 8 tracks (432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz and Alpha 10 Hz) stream in faststart AAC (.m4a) format across iPhone Safari, Android and all desktop browsers.' },
    { question: 'Can I combine studio tracks with nature sounds and meditation rooms?', answer: 'Yes. Every meditation room (Candle Trataka, Inner-Self Breath, Theta Rest and 108 Mala) pairs directly with the studio tracks and optional live Rain, Ocean, Wind or Hearth layers.' },
    { question: 'Is listening to sound frequencies a medical treatment?', answer: 'No. Soundscapes and meditation rooms offer personal calm, focus and reflective support; they are not medical diagnosis or clinical care.' },
    { question: 'How do I practice safe listening?', answer: 'Always begin at low volume and avoid prolonged exposure above WHO 80 dB(A) reference levels. Pause immediately if you notice ear ringing or discomfort.' }
  ],
  el: [
    { question: 'Ποιες συσκευές υποστηρίζουν τις 8 ηχογραφήσεις συχνοτήτων;', answer: 'Και τα 8 κομμάτια (432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz και Alpha 10 Hz) μεταδίδονται σε μορφή faststart AAC (.m4a) σε iPhone Safari, Android και κάθε σύγχρονο υπολογιστή.' },
    { question: 'Μπορώ να συνδυάσω τα κομμάτια στούντιο με ήχους φύσης και δωμάτια διαλογισμού;', answer: 'Ναι. Κάθε δωμάτιο διαλογισμού συνδέεται απευθείας με τις ηχογραφήσεις στούντιο και τις επιπλέον στρώσεις Βροχής, Ωκεανού, Ανέμου ή Φωτιάς.' },
    { question: 'Αποτελούν οι συχνότητες ιατρική θεραπεία;', answer: 'Όχι. Τα ηχητικά τοπία και τα δωμάτια προσφέρουν προσωπική γαλήνη και συγκέντρωση· δεν αποτελούν ιατρική διάγνωση ή θεραπεία.' }
  ],
  es: [
    { question: '¿En qué dispositivos funcionan las 8 pistas de frecuencia de estudio?', answer: 'Las 8 grabaciones (432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz y Alpha 10 Hz) se transmiten en formato AAC (.m4a) optimizado para iPhone Safari, Android y navegadores de escritorio.' },
    { question: '¿Puedo combinar las frecuencias con sonidos de naturaleza y salas de meditación?', answer: 'Sí. Cada sala de meditación (Vela Trataka, Respiración, Descanso Theta y 108 Mantras) se vincula al instante con el reproductor de estudio y las capas de Lluvia, Océano, Brisa o Fuego.' },
    { question: '¿Escuchar frecuencias sustituye un tratamiento médico?', answer: 'No. Es una herramienta de serenidad personal, atención plena y calma, nunca un diagnóstico ni tratamiento médico.' }
  ],
  ar: [
    { question: 'ما الأجهزة التي تدعم مقاطع التردد الثمانية؟', answer: 'تعمل جميع المقاطع الثمانية (432 و528 و396 و174 و639 و852 و963 هرتز وألفا 10 هرتز) بصيغة AAC (.m4a) بسلاسة على هواتف آيفون وأندرويد ومتصفحات الحاسوب.' },
    { question: 'هل يمكنني دمج مقاطع الاستوديو مع أصوات الطبيعة وغرف التأمل؟', answer: 'نعم. تقترن كل غرفة تأمل مباشرة بمشغل الاستوديو وطبقات المطر والمحيط والنسيم والموقد الاختيارية.' },
    { question: 'هل يُعد الاستماع للترددات علاجاً طبياً؟', answer: 'لا. الأصوات وغرف التأمل مخصصة للسكينة والتركيز والوعي الذاتي فقط، ولا تُعد تشخيصاً أو علاجاً طبياً.' }
  ]
};

export const getSanctuaryFaqItems = (locale = 'tr') => {
  const loc = locale === 'gr' ? 'el' : locale;
  return SANCTUARY_FAQS[loc] || SANCTUARY_FAQS.en;
};

export const renderSanctuaryView = ({ locale = 'tr' } = {}) => {
  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';
  const c = getCopy(loc);
  const tracks = TRACKS_MAP[loc] || TRACKS_EN;
  const faqs = getSanctuaryFaqItems(loc);
  const durationOptions = c.durationOptions;

  const optionHtml = (map, selected) =>
    Object.entries(map)
      .map(([k, v]) => `<option value="${k}"${k === selected ? ' selected' : ''}>${v}</option>`)
      .join('');

  return `
  <div class="sanc-page" data-sanctuary-app>
    <!-- 1. Full-Bleed Vibrant Sanctuary Hero -->
    <section class="sanc-hero sanc-hero-fullbleed">
      <img class="sanc-hero-bg" src="/images/sanctuary-hero-2027.jpg" alt="" width="1408" height="768" fetchpriority="high" decoding="async" aria-hidden="true">
      <div class="astro-container sanc-center sanc-hero-content">
        <span class="sanc-eyebrow">✦ ${c.eyebrow}</span>
        <h1 class="sanc-h1">${c.title}</h1>
        <p class="sanc-lead">${c.lead}</p>
      </div>
    </section>

    <!-- 2. Unified 8-Track Studio Frequency Deck + Live Cymatics Canvas -->
    <section class="sanc-section" id="ses-mikseri">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.studioEyebrow}</span>
          <h2>${c.studioTitle}</h2>
          <p>${c.studioSub}</p>
        </div>

        <div class="sanc-mixer" data-spotlight>
          <div class="sanc-cymatics-band">
            <div class="sanc-cymatics-wrap">
              <canvas class="sanc-cymatics-canvas" data-cymatics-canvas aria-hidden="true"></canvas>
              <span class="sanc-cymatics-caption">${c.cymaticsCaption}</span>
            </div>
            <div>
              <div class="sanc-mixer-top" style="padding-bottom:18px; margin-bottom:18px">
                <div class="sanc-player-left">
                  <button type="button" class="sanc-play-btn" data-sanc-play aria-pressed="false" aria-label="Play or pause studio track">▶</button>
                  <div class="sanc-ring" data-sanc-ring aria-hidden="true"></div>
                  <div>
                    <div class="sanc-state" data-sanc-state data-label-idle="${c.idle}" data-label-playing="${c.playing}">${c.idle}</div>
                    <div class="sanc-timer-readout" data-sanc-timer-display>10:00</div>
                  </div>
                </div>
              </div>

              <div class="sanc-mixer-grid" style="margin-top:0">
                <div class="sanc-channel">
                  <label for="sanc-duration">${c.duration}</label>
                  <select id="sanc-duration" data-sanc-duration>
                    ${durationOptions.map(([val, lbl]) => `<option value="${val}"${val === '600' ? ' selected' : ''}>${lbl}</option>`).join('')}
                  </select>
                </div>
                <div class="sanc-channel">
                  <label for="sanc-nature">${c.natureLabel}</label>
                  <select id="sanc-nature" data-sanc-nature>
                    ${optionHtml(c.natures, 'off')}
                  </select>
                  <input type="range" min="0" max="100" value="32" data-sanc-nature-vol aria-label="${c.natureLabel}">
                </div>
                <div class="sanc-channel">
                  <label for="sanc-music-vol">${c.volumeLabel}</label>
                  <input id="sanc-music-vol" type="range" min="0" max="100" value="90" data-sanc-music-vol aria-label="${c.volumeLabel}" style="margin-top:12px">
                </div>
              </div>
            </div>
          </div>

          <!-- Hidden sync select for studio engine -->
          <div hidden>
            <select data-sanc-tone><option value="off" selected>off</option></select>
            <input type="range" data-sanc-tone-vol value="0">
            <select data-sanc-music>
              ${tracks.map((tr) => `<option value="${tr.key}"${tr.active ? ' selected' : ''}>${tr.hz} ${tr.unit}</option>`).join('')}
            </select>
          </div>

          <!-- Symmetrical 4x2 Real Studio Track Cards -->
          <div class="sanc-track-grid" role="group" aria-label="${c.trackGridAria}">
            ${tracks.map((tr) => `
              <button type="button" class="sanc-scene-card${tr.active ? ' is-active' : ''}" data-spotlight data-scene-card="${tr.key}" aria-pressed="${tr.active ? 'true' : 'false'}">
                <span class="sanc-track-hz">${tr.hz} <small>${tr.unit}</small></span>
                <strong>${tr.label}</strong>
                <span>${tr.note}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Interactive 4-Room Meditation Sanctuary -->
    <section class="sanc-section" id="odalar">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.roomsEyebrow}</span>
          <h2>${c.roomsTitle}</h2>
          <p>${c.roomsSub}</p>
        </div>

        <div class="sanc-tabs" role="tablist" aria-label="${c.tabsLabel}">
          <button type="button" class="sanc-tab is-active" role="tab" aria-selected="true" data-room-tab="candle">${c.rooms.candle.tab}</button>
          <button type="button" class="sanc-tab" role="tab" aria-selected="false" data-room-tab="breath">${c.rooms.breath.tab}</button>
          <button type="button" class="sanc-tab" role="tab" aria-selected="false" data-room-tab="theta">${c.rooms.theta.tab}</button>
          <button type="button" class="sanc-tab" role="tab" aria-selected="false" data-room-tab="mantra">${c.rooms.mantra.tab}</button>
        </div>

        <!-- Room 1: Candle (Trataka) -->
        <div class="sanc-room-card" data-spotlight data-room-panel="candle">
          <div class="sanc-room-visual">
            <div class="trataka-stage" aria-hidden="true">
              <div class="trataka-halo"></div>
              <div class="trataka-flame"><span class="trataka-core"></span></div>
              <div class="trataka-wick"></div>
              <div class="trataka-wax"></div>
            </div>
          </div>
          <div class="sanc-room-copy">
            <h2>${c.rooms.candle.title}</h2>
            <p class="sanc-room-sub">${c.rooms.candle.subtitle}</p>
            <p class="sanc-room-note">${c.rooms.candle.guide}</p>
            <button type="button" class="sanc-btn-gold" data-sanc-preset="candle">${c.rooms.candle.preset}</button>
          </div>
        </div>

        <!-- Room 2: Inner Self & Breath -->
        <div class="sanc-room-card" data-spotlight data-room-panel="breath" hidden>
          <div class="sanc-room-visual">
            <div class="breath-stage">
              <div class="breath-orb" data-breath-orb>
                <span class="breath-phase" data-breath-phase
                  data-label_in="${c.rooms.breath.phases.in}"
                  data-label_hold="${c.rooms.breath.phases.hold}"
                  data-label_out="${c.rooms.breath.phases.out}"
                  data-label_rest="${c.rooms.breath.phases.rest}">${c.rooms.breath.phases.in}</span>
                <strong class="breath-count" data-breath-count>4</strong>
              </div>
            </div>
          </div>
          <div class="sanc-room-copy">
            <h2>${c.rooms.breath.title}</h2>
            <p class="sanc-room-sub">${c.rooms.breath.subtitle}</p>
            <div class="sanc-inline-ctrl">
              <label for="breath-pattern">${c.rooms.breath.patternLabel}</label>
              <select id="breath-pattern" data-breath-pattern>
                ${optionHtml(c.rooms.breath.patterns, 'box')}
              </select>
            </div>
            <div class="sanc-btn-row">
              <button type="button" class="sanc-btn-gold" data-breath-toggle data-label-start="${c.rooms.breath.start}" data-label-stop="${c.rooms.breath.stop}">${c.rooms.breath.start}</button>
              <button type="button" class="sanc-btn-ghost" data-sanc-preset="breath">${c.rooms.breath.preset}</button>
            </div>
          </div>
        </div>

        <!-- Room 3: Theta & Deep Rest -->
        <div class="sanc-room-card sanc-room-wide" data-spotlight data-room-panel="theta" hidden>
          <div class="sanc-room-copy">
            <h2>${c.rooms.theta.title}</h2>
            <p class="sanc-room-sub">${c.rooms.theta.subtitle}</p>
            <div class="sanc-stages-grid">
              ${c.rooms.theta.stages.map(([stTitle, stDesc]) => `
                <article class="sanc-stage-item">
                  <h3>${stTitle}</h3>
                  <p>${stDesc}</p>
                </article>
              `).join('')}
            </div>
            <p class="sanc-room-note">${c.rooms.theta.note}</p>
            <button type="button" class="sanc-btn-gold" data-sanc-preset="theta">${c.rooms.theta.preset}</button>
          </div>
        </div>

        <!-- Room 4: 108 Mala Counter -->
        <div class="sanc-room-card" data-spotlight data-room-panel="mantra" hidden>
          <div class="sanc-room-visual">
            <div class="mala-stage">
              <div class="mala-counter-value" data-mala-count>0 / 108</div>
              <div class="mala-bar"><span data-mala-progress style="width:0%"></span></div>
              <div class="mala-rounds">${c.rooms.mantra.roundsLabel}: <strong data-mala-rounds>0</strong></div>
              <div class="sanc-btn-row" style="justify-content:center; margin-top:18px">
                <button type="button" class="sanc-btn-gold" data-mala-tap>${c.rooms.mantra.tap}</button>
                <button type="button" class="sanc-btn-ghost" data-mala-reset>${c.rooms.mantra.reset}</button>
              </div>
            </div>
          </div>
          <div class="sanc-room-copy">
            <h2>${c.rooms.mantra.title}</h2>
            <p class="sanc-room-sub">${c.rooms.mantra.subtitle}</p>
            <ul class="sanc-mantra-list">
              ${c.rooms.mantra.mantras.map((m) => `<li>${m}</li>`).join('')}
            </ul>
            <button type="button" class="sanc-btn-ghost" data-sanc-preset="mantra">${c.rooms.mantra.preset}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Safe Listening & Scientific Boundaries + Visible FAQ -->
    <section class="sanc-section" id="bilimsel-dinleme">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.scienceEyebrow}</span>
          <h2>${c.scienceTitle}</h2>
          <p>${c.scienceSub}</p>
        </div>
        <div class="jung-compare-grid">
          ${c.scienceCards.map(([sTag, sTitle, sDesc]) => `
            <article class="sanc-guide-card" data-spotlight>
              <span class="mb27-card-tag">${sTag}</span>
              <h3>${sTitle}</h3>
              <p>${sDesc}</p>
            </article>
          `).join('')}
        </div>
        <div class="sanc-center" style="margin-top:24px; font-size:12.5px; color:var(--muted)">
          <a class="sanc-link" href="https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening" rel="noopener noreferrer" target="_blank">${c.whoLinkLabel}</a>
          &nbsp;·&nbsp;
          <a class="sanc-link" href="https://www.nccih.nih.gov/health/music-and-health-what-you-need-to-know" rel="noopener noreferrer" target="_blank">${c.nihLinkLabel}</a>
        </div>

        <div class="sanc-center sanc-head" style="margin-top:64px">
          <span class="sanc-eyebrow">✦ ${c.faqEyebrow}</span>
          <h2>${c.faqTitle}</h2>
        </div>
        <div class="jung-faq-grid">
          ${faqs.map((f) => `
            <article class="jung-faq-card" data-spotlight>
              <h3>${f.question}</h3>
              <p>${f.answer}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderReadingCuration(locale, { id: 'okuma-listesi' })}
  </div>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
