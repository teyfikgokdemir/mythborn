// Mythborn 2027 — Live Meditation, Sound Resonance & Nature Sanctuary Page
// Localized across tr, en, el, es, ar — Deep Night Indigo (#080b12) & Pale Moon Gold (#d6be92)

const COPY = {
  tr: {
    eyebrow: 'CANLI MEDİTASYON · REZONANS & DOĞA SIĞINAĞI',
    title: 'Sessizliğin İçinde Kendini Duy.',
    lead: 'Mum odağı (Trataka), iç benlik nefesi, Theta gevşemesi, 108 mantra sayacı ve canlı doğa sesleri tek sığınakta.',
    tabsLabel: 'Meditasyon Odaları',
    rooms: {
      candle: {
        tab: 'Mum (Trataka)',
        title: 'Mum Meditasyonu — Trataka Odağı',
        subtitle: 'Gözlerini alevin sabit çekirdeğine yumuşakça bırak; düşünceler geçsin, dikkat merkezde kalsın.',
        guide: 'Alevi 40–60 cm mesafeden zorlamadan izle. Gözlerin yorulduğunda kapaklarını kapatıp zihnindeki sıcak ışık izini 30 saniye gözlemle.',
        preset: 'Ateş + 432 Hz ile Başlat'
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
        preset: 'Alpha 10 Hz + Tibet Çanağı'
      },
      theta: {
        tab: 'Theta & Astral Gevşeme',
        title: 'Theta Eşik Bilinci & Astral Gevşeme',
        subtitle: 'Bedeni derin dinginliğe bırakıp zihni uyanık gözlemde tutan 4 aşamalı somatik eşik pratiği.',
        stages: [
          ['Bedeni Bırak', 'Omuzları, çeneyi ve göz çevresini gevşet; ağırlığını tamamen zemine teslim et.'],
          ['Nefesi İncelt', 'Her nefes verişte bedenin biraz daha ağırlaştığını, zihnin ise berraklaştığını hisset.'],
          ['Eşik Bilinci (Theta)', 'Uyku ile uyanıklık arasındaki sakin boşlukta görüntü ve imgeleri zorlamadan izle.'],
          ['Bedenine Dön', 'Derin bir nefes al, parmak uçlarını hafifçe oynat ve odanın sesine nazikçe geri dön.']
        ],
        note: 'Kulaklık önerilir. Bu pratik kişisel farkındalık ve derin gevşeme amaçlıdır; tıbbi veya klinik bir uygulama değildir.',
        preset: 'Theta 6 Hz + Okyanus ile Başlat'
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
        preset: '528 Hz + Gece Yağmuru'
      }
    },
    mixer: {
      eyebrow: 'HİBRİT SES & DOĞA MİKSERİ · 0 MB CANLI SENTEZ',
      title: 'Kendi Rezonans Atmosferini Kur.',
      sub: 'Frekans, üretken meditasyon müziği ve canlı doğa seslerini bağımsız sürgülerle dilediğin gibi harmanla.',
      idle: 'HAZIR · SES KAPALI',
      playing: 'AKTİF · CANLI REZONANS',
      duration: 'Oturum Süresi',
      toneLabel: 'Frekans & Binaural (Kulaklık)',
      musicLabel: 'Üretken Meditasyon Müziği',
      natureLabel: 'Canlı Doğa Atmosferi',
      tones: {
        off: 'Kapalı',
        '432': '432 Hz · Sakin Akort',
        '528': '528 Hz · Parlak Harmoni',
        '396': '396 Hz · Derin Kök',
        '639': '639 Hz · Yumuşak Bağ',
        '852': '852 Hz · Berrak Sezgi',
        '963': '963 Hz · Yüksek Sessizlik',
        '174': '174 Hz · Topraklama',
        'alpha-10': 'Alpha 10 Hz · Binaural Odak',
        'theta-6': 'Theta 6 Hz · Binaural Derin Eşik',
        'delta-2': 'Delta 2 Hz · Binaural Gece Dinlenmesi'
      },
      musics: {
        off: 'Kapalı',
        bowls: 'Tibet Çanağı & Derin Pad',
        temple: 'Gece Tapınağı Drone & Harmoni'
      },
      natures: {
        off: 'Kapalı',
        rain: 'Gece Yağmuru',
        ocean: 'Okyanus Dalgaları',
        wind: 'Gece Rüzgarı',
        fire: 'Sıcak Ateş & Mum Çıtırtısı'
      },
      pureLink: 'Saf 11 Solfeggio Tonu Laboratuvarı →'
    },
    guide: {
      eyebrow: 'PRATİKLERİN ARDINDAKİ ANLAM',
      title: 'Dört Kadim Pratik, Tek Bilinç Sığınağı.',
      sub: 'Her oda, zihnin farklı bir katmanını zorlamadan dinginleştirmek için tasarlandı.',
      items: [
        ['Mum Meditasyonu (Trataka)', 'Tek bir sabit ışık noktasına bakmak görsel dağınıklığı azaltır ve zihnin sürekli sıçrayan dikkatini tek merkezde toplar.'],
        ['İç Benlik & Nefes Koheransı', 'Yavaş ve düzenli nefes ritmi vagus sinirini sakinleştirir; kaygılı düşünce döngüsünden bedensel farkındalığa geçişi kolaylaştırır.'],
        ['Theta Eşiği & Astral Gevşeme', 'Binaural 6 Hz ritim ve aşamalı beden taraması, uykuya geçmeden derin iç gözlem ve imgelem alanı açar.'],
        ['Doğa Akustiği & Rezonans', 'Tekrarlamayan canlı yağmur, okyanus, rüzgar ve Tibet çanağı katmanları kulakta yorgunluk yaratmadan güvenli bir ses perdesi kurar.']
      ]
    },
    ethics: 'Mythborn Sığınak; kişisel farkındalık, nefes ve dinginlik alanıdır. Tıbbi tanı, psikoterapi veya bilimsel tedavi yerine geçmez. Sesi düşük seviyede başlatın; rahatsızlık hissederseniz durdurun.'
  },
  en: {
    eyebrow: 'LIVE MEDITATION · RESONANCE & NATURE SANCTUARY',
    title: 'Hear Yourself Inside the Stillness.',
    lead: 'Candle gazing (Trataka), inner-self breathwork, Theta relaxation, 108 mala counter and live nature acoustics in one sanctuary.',
    tabsLabel: 'Meditation Rooms',
    rooms: {
      candle: {
        tab: 'Candle (Trataka)',
        title: 'Candle Meditation — Trataka Focus',
        subtitle: 'Rest your gaze softly on the luminous core of the flame; let thoughts pass while attention stays centered.',
        guide: 'Observe the flame effortlessly from a comfortable distance. When your eyes tire, close them and watch the warm afterimage for 30 seconds.',
        preset: 'Start with Hearth + 432 Hz'
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
        preset: 'Alpha 10 Hz + Singing Bowls'
      },
      theta: {
        tab: 'Theta & Astral Rest',
        title: 'Theta Threshold & Astral Relaxation',
        subtitle: 'A four-stage somatic release practice keeping awareness lucid while the body enters deep rest.',
        stages: [
          ['Release the Body', 'Soften shoulders, jaw and eyes; let your full physical weight settle into stillness.'],
          ['Refine the Breath', 'With each exhale feel the body grow heavier while inner awareness stays luminous.'],
          ['Theta Threshold', 'Rest in the quiet liminal space between waking and sleep without forcing imagery.'],
          ['Gentle Return', 'Take a deep breath, move your fingertips slowly and return to the room.']
        ],
        note: 'Headphones recommended for stereo binaural beats. Intended for mindful relaxation, not medical therapy.',
        preset: 'Start with Theta 6 Hz + Ocean'
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
        preset: '528 Hz + Night Rain'
      }
    },
    mixer: {
      eyebrow: 'HYBRID SOUND & NATURE MIXER · 0 MB LIVE SYNTHESIS',
      title: 'Compose Your Resonance Atmosphere.',
      sub: 'Blend pure tones or binaural beats, generative singing bowls and live nature soundscapes independently.',
      idle: 'READY · SILENT',
      playing: 'ACTIVE · LIVE RESONANCE',
      duration: 'Session Timer',
      toneLabel: 'Frequency & Binaural (Headphones)',
      musicLabel: 'Generative Meditation Music',
      natureLabel: 'Live Nature Soundscape',
      tones: {
        off: 'Off',
        '432': '432 Hz · Warm Tuning',
        '528': '528 Hz · Clear Harmony',
        '396': '396 Hz · Deep Root',
        '639': '639 Hz · Soft Connection',
        '852': '852 Hz · Lucid Intuition',
        '963': '963 Hz · High Stillness',
        '174': '174 Hz · Grounding',
        'alpha-10': 'Alpha 10 Hz · Binaural Focus',
        'theta-6': 'Theta 6 Hz · Binaural Threshold',
        'delta-2': 'Delta 2 Hz · Binaural Night Rest'
      },
      musics: {
        off: 'Off',
        bowls: 'Tibetan Singing Bowls & Warm Pad',
        temple: 'Night Temple Drone & Overtones'
      },
      natures: {
        off: 'Off',
        rain: 'Night Rain',
        ocean: 'Ocean Waves',
        wind: 'Night Valley Wind',
        fire: 'Warm Hearth & Candle Crackle'
      },
      pureLink: 'Open Pure 11-Tone Solfeggio Lab →'
    },
    guide: {
      eyebrow: 'THE MEANING BEHIND EACH PRACTICE',
      title: 'Four Timeless Practices, One Quiet Sanctuary.',
      sub: 'Each room settles a different layer of attention without strain or dogma.',
      items: [
        ['Candle Meditation (Trataka)', 'Resting gaze on a single steady flame quiets visual noise and gathers scattered attention into calm focus.'],
        ['Inner-Self Breath Coherence', 'Slow rhythmic breathing calms the nervous system and shifts awareness from mental loops back into bodily presence.'],
        ['Theta Threshold & Astral Rest', 'Stereo 6 Hz binaural pulses paired with progressive body release open a serene space for lucid inner observation.'],
        ['Live Nature Acoustics', 'Non-repeating synthesized rain, ocean waves, night wind and singing bowls create a soft acoustic horizon with zero audio fatigue.']
      ]
    },
    ethics: 'Mythborn Sanctuary is a personal mindfulness and relaxation space. It is not medical diagnosis, psychotherapy or clinical treatment. Begin at low volume and stop if you feel any discomfort.'
  }
};

const getCopy = (locale) => COPY[locale] || COPY.en;

export const getSanctuaryFaqItems = (locale = 'tr') => {
  if (locale === 'tr') {
    return [
      {
        question: 'Binaural frekanslar (Alpha, Theta, Delta) nasıl çalışır?',
        answer: 'Sol ve sağ kulağa milimetrik farkla (örneğin 432 Hz ve 438 Hz) iki saf ton gönderilir. Kulaklık kullanıldığında beyin bu 6 Hz farkı yumuşak bir ritmik nabız olarak algılar.'
      },
      {
        question: 'Doğa sesleri ve meditasyon müziği neden anında açılıyor?',
        answer: 'Tüm frekanslar, Tibet çanağı harmonileri ve yağmur/okyanus/rüzgar/ateş katmanları tarayıcınızın Web Audio API motorunda gerçek zamanlı sentezlenir; büyük ses dosyaları indirmez.'
      },
      {
        question: 'Mum meditasyonu (Trataka) ne kadar süre yapılmalı?',
        answer: 'Yeni başlayanlar için 3–5 dakikalık kısa ve zorlamasız odaklanma yeterlidir. Gözler yorulduğunda kapatıp içsel ışık izini dinlemek pratiğin parçasıdır.'
      }
    ];
  }
  return [
    {
      question: 'How do binaural brainwave frequencies work?',
      answer: 'Two pure sine tones with a subtle difference (such as 432 Hz left and 438 Hz right) are sent to each ear via headphones, creating a gentle perceived 6 Hz rhythmic pulse.'
    },
    {
      question: 'Why do the nature sounds and bowls start instantly?',
      answer: 'All frequencies, generative Tibetan bowls and rain/ocean/wind/hearth soundscapes are synthesized live in your browser using the Web Audio API with zero external audio downloads.'
    }
  ];
};

export const renderSanctuaryView = ({ locale = 'tr' } = {}) => {
  const c = getCopy(locale);
  const loc = ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';

  const durationOptions = loc === 'tr'
    ? [['300', '5 dakika'], ['600', '10 dakika'], ['900', '15 dakika'], ['1200', '20 dakika']]
    : [['300', '5 minutes'], ['600', '10 minutes'], ['900', '15 minutes'], ['1200', '20 minutes']];

  const optionHtml = (map, selected) =>
    Object.entries(map)
      .map(([k, v]) => `<option value="${k}"${k === selected ? ' selected' : ''}>${v}</option>`)
      .join('');

  return `
  <div class="sanc-page" data-sanctuary-app>
    <!-- 1. Centered Single-Scroll Hero -->
    <section class="sanc-hero">
      <div class="astro-container sanc-center">
        <span class="sanc-eyebrow">✦ ${c.eyebrow}</span>
        <h1 class="sanc-h1">${c.title}</h1>
        <p class="sanc-lead">${c.lead}</p>
      </div>
    </section>

    <!-- 2. Interactive 4-Room Meditation Sanctuary -->
    <section class="sanc-section">
      <div class="astro-container">
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
              <div class="trataka-flame">
                <span class="trataka-core"></span>
              </div>
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

        <!-- Room 3: Theta & Astral Relaxation -->
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

    <!-- 3. Hybrid Frequency, Music & Nature Soundscape Mixer with Live Cymatics Canvas -->
    <section class="sanc-section" id="ses-mikseri">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.mixer.eyebrow}</span>
          <h2>${c.mixer.title}</h2>
          <p>${c.mixer.sub}</p>
        </div>

        <div class="sanc-mixer" data-spotlight>
          <!-- Live Cymatics Resonance Visualizer + 4 Curated Atmosphere Scenes -->
          <div class="sanc-cymatics-band">
            <div class="sanc-cymatics-wrap">
              <canvas class="sanc-cymatics-canvas" data-cymatics-canvas aria-hidden="true"></canvas>
              <span class="sanc-cymatics-caption">${loc === 'tr' ? 'CANLI KYMATİK REZONANS · STEREO TAPINAK YANKISI' : 'LIVE CYMATICS RESONANCE · STEREO TEMPLE REVERB'}</span>
            </div>
            <div class="sanc-scenes-grid" role="group" aria-label="${loc === 'tr' ? 'Hazır ses sahneleri' : 'Curated sound scenes'}">
              <button type="button" class="sanc-scene-card is-active" data-spotlight data-scene-card="temple" aria-pressed="true">
                <strong>${loc === 'tr' ? 'Gece Tapınağı' : 'Night Temple'}</strong>
                <span>${loc === 'tr' ? '432 Hz Sıcak Harmoni · Yankılı Tibet Çanağı · Gece Yağmuru' : '432 Hz Warm Harmonics · Temple Bowls · Night Rain'}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="theta" aria-pressed="false">
                <strong>${loc === 'tr' ? 'Theta Eşiği & Astral' : 'Theta Threshold & Astral'}</strong>
                <span>${loc === 'tr' ? '6 Hz Binaural (Kulaklık) · Derin Akor Pad · Okyanus Dalgaları' : '6 Hz Binaural (Headphones) · Deep Pad · Ocean Waves'}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="shadow" aria-pressed="false">
                <strong>${loc === 'tr' ? 'Gölge & İç Benlik' : 'Shadow & Inner Self'}</strong>
                <span>${loc === 'tr' ? '396 Hz Derin Kök · Tapınak Drone · Sıcak Ateş & Mum' : '396 Hz Deep Root · Temple Drone · Warm Hearth'}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="dawn" aria-pressed="false">
                <strong>${loc === 'tr' ? 'Şafak Berraklığı' : 'Dawn Clarity'}</strong>
                <span>${loc === 'tr' ? '528 Hz Parlak Harmoni · Tibet Çanağı · Gece Rüzgarı' : '528 Hz Clear Harmonics · Singing Bowls · Night Wind'}</span>
              </button>
            </div>
          </div>

          <div class="sanc-mixer-top">
            <div class="sanc-player-left">
              <button type="button" class="sanc-play-btn" data-sanc-play aria-pressed="false" aria-label="Play or pause sanctuary audio">▶</button>
              <div class="sanc-ring" data-sanc-ring aria-hidden="true"></div>
              <div>
                <div class="sanc-state" data-sanc-state data-label-idle="${c.mixer.idle}" data-label-playing="${c.mixer.playing}">${c.mixer.idle}</div>
                <div class="sanc-timer-readout" data-sanc-timer-display>10:00</div>
              </div>
            </div>
            <div class="sanc-timer-ctrl">
              <label for="sanc-duration">${c.mixer.duration}</label>
              <select id="sanc-duration" data-sanc-duration>
                ${durationOptions.map(([val, lbl]) => `<option value="${val}"${val === '600' ? ' selected' : ''}>${lbl}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="sanc-mixer-grid">
            <div class="sanc-channel">
              <label for="sanc-tone">${c.mixer.toneLabel}</label>
              <select id="sanc-tone" data-sanc-tone>
                ${optionHtml(c.mixer.tones, '432')}
              </select>
              <input type="range" min="0" max="100" value="42" data-sanc-tone-vol aria-label="${c.mixer.toneLabel}">
            </div>

            <div class="sanc-channel">
              <label for="sanc-music">${c.mixer.musicLabel}</label>
              <select id="sanc-music" data-sanc-music>
                ${optionHtml(c.mixer.musics, 'bowls')}
              </select>
              <input type="range" min="0" max="100" value="48" data-sanc-music-vol aria-label="${c.mixer.musicLabel}">
            </div>

            <div class="sanc-channel">
              <label for="sanc-nature">${c.mixer.natureLabel}</label>
              <select id="sanc-nature" data-sanc-nature>
                ${optionHtml(c.mixer.natures, 'rain')}
              </select>
              <input type="range" min="0" max="100" value="55" data-sanc-nature-vol aria-label="${c.mixer.natureLabel}">
            </div>
          </div>

          <div class="sanc-mixer-foot">
            <span>${c.ethics}</span>
            <a href="/frekans-studyo" class="sanc-link">${c.mixer.pureLink}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Ultra-Elite Editorial Guide (4-Column Symmetrical Grid, NO 01-04 Numbers) -->
    <section class="sanc-section">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.guide.eyebrow}</span>
          <h2>${c.guide.title}</h2>
          <p>${c.guide.sub}</p>
        </div>
        <div class="sanc-guide-grid">
          ${c.guide.items.map(([gTitle, gDesc]) => `
            <article class="sanc-guide-card" data-spotlight>
              <h3>${gTitle}</h3>
              <p>${gDesc}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  </div>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
