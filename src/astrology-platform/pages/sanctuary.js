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
    faqTitle: 'Meditasyon & Frekanslar Hakkında Sık Sorulanlar'
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
    faqTitle: 'Frequently Asked Questions on Meditation & Frequencies'
  }
};

const getCopy = (locale) => COPY[locale] || COPY.en;

export const getSanctuaryFaqItems = (locale = 'tr') => {
  if (locale === 'tr') {
    return [
      {
        question: 'Buradaki 8 frekans kaydı hangi cihazlarda çalışır?',
        answer: 'Tüm stüdyo kayıtları (432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz ve Alpha 10 Hz) faststart akışlı AAC (.m4a) formatındadır; iPhone, Android ve masaüstü tarayıcıların tamamında beklemeden açılır.'
      },
      {
        question: 'Meditasyon odaları ile stüdyo frekanslarını aynı anda kullanabilir miyim?',
        answer: 'Evet. Mum (Trataka), İç Benlik Nefes Küresi, Theta Gevşeme ve 108 Mantra odalarının her biri tek tıkla ilgili stüdyo kaydını ve isteğe bağlı doğa sesini (Yağmur, Okyanus, Rüzgar, Ateş) eşzamanlı başlatır.'
      },
      {
        question: 'Frekans dinlemek tıbbi tedavi yerine geçer mi?',
        answer: 'Hayır. Tüm ses kayıtları ve meditasyon odaları kişisel dinginlik, odaklanma ve farkındalık amaçlıdır; tıbbi tanı veya klinik tedavi yerine geçmez.'
      },
      {
        question: 'Güvenli dinleme için nelere dikkat edilmeli?',
        answer: 'Her zaman düşük sesle başlayın; Dünya Sağlık Örgütü 80 dB(A) üzerinde uzun süreli maruziyetten kaçınmayı önerir. Rahatsızlık veya kulak çınlaması olursa oturumu hemen durdurun.'
      }
    ];
  }
  return [
    {
      question: 'Which devices support the 8 studio frequency tracks?',
      answer: 'All 8 tracks (432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz and Alpha 10 Hz) stream in faststart AAC (.m4a) format across iPhone Safari, Android and all desktop browsers.'
    },
    {
      question: 'Can I combine studio tracks with nature sounds and meditation rooms?',
      answer: 'Yes. Every meditation room (Candle Trataka, Inner-Self Breath, Theta Rest and 108 Mala) pairs directly with the studio tracks and optional live Rain, Ocean, Wind or Hearth layers.'
    }
  ];
};

export const renderSanctuaryView = ({ locale = 'tr' } = {}) => {
  const c = getCopy(locale);
  const loc = ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';
  const tracks = loc === 'tr' ? TRACKS_TR : TRACKS_EN;
  const faqs = getSanctuaryFaqItems(locale);

  const durationOptions = loc === 'tr'
    ? [['300', '5 dakika'], ['600', '10 dakika'], ['900', '15 dakika'], ['1200', '20 dakika']]
    : [['300', '5 minutes'], ['600', '10 minutes'], ['900', '15 minutes'], ['1200', '20 minutes']];

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
              <span class="sanc-cymatics-caption">${loc === 'tr' ? 'CANLI KYMATİK REZONANS · 8 STÜDYO KAYDI' : 'LIVE CYMATICS RESONANCE · 8 STUDIO TRACKS'}</span>
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
          <div class="sanc-track-grid" role="group" aria-label="${loc === 'tr' ? '8 Stüdyo Frekans Kaydı' : '8 Studio Frequency Tracks'}">
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
          <a class="sanc-link" href="https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening" rel="noopener noreferrer" target="_blank">DSÖ · Güvenli Dinleme ↗</a>
          &nbsp;·&nbsp;
          <a class="sanc-link" href="https://www.nccih.nih.gov/health/music-and-health-what-you-need-to-know" rel="noopener noreferrer" target="_blank">NIH/NCCIH · Müzik ve Sağlık ↗</a>
        </div>

        <div class="sanc-center sanc-head" style="margin-top:64px">
          <span class="sanc-eyebrow">✦ ${loc === 'tr' ? 'SIK SORULANLAR' : 'FAQ'}</span>
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
