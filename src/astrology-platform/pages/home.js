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
    soundPureLink: 'Saf 11 Solfeggio Tonu Laboratuvarı (/frekans-studyo) ↗',
    soundFullLink: 'Tüm Ses Mikseri & 4 Meditasyon Odası →',
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
    soundPureLink: 'Open Pure 11-Tone Solfeggio Lab (/frekans-studyo) ↗',
    soundFullLink: 'Open Full Mixer & 4 Meditation Rooms →',
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
                  <div class="sanc-state" data-sanc-state data-label-idle="${loc === 'tr' ? 'HAZIR · SES KAPALI' : 'READY · SILENT'}" data-label-playing="${loc === 'tr' ? 'AKTİF · STEREO REZONANS' : 'ACTIVE · STEREO RESONANCE'}">${loc === 'tr' ? 'HAZIR · SES KAPALI' : 'READY · SILENT'}</div>
                  <div class="sanc-timer-readout" data-sanc-timer-display>10:00</div>
                </div>
              </div>
            </div>
            <div class="sanc-scenes-grid">
              <button type="button" class="sanc-scene-card is-active" data-spotlight data-scene-card="temple" aria-pressed="true">
                <strong>${loc === 'tr' ? 'Gece Tapınağı' : 'Night Temple'}</strong>
                <span>${loc === 'tr' ? '432 Hz Harmoni · Yankılı Tibet Çanağı · Gece Yağmuru' : '432 Hz Harmonics · Temple Bowls · Night Rain'}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="theta" aria-pressed="false">
                <strong>${loc === 'tr' ? 'Theta Eşiği & Astral' : 'Theta Threshold & Astral'}</strong>
                <span>${loc === 'tr' ? '6 Hz Binaural · Derin Pad · Okyanus Dalgaları' : '6 Hz Binaural · Deep Pad · Ocean Waves'}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="shadow" aria-pressed="false">
                <strong>${loc === 'tr' ? 'Gölge & İç Benlik' : 'Shadow & Inner Self'}</strong>
                <span>${loc === 'tr' ? '396 Hz Derin Kök · Tapınak Drone · Sıcak Ateş' : '396 Hz Deep Root · Temple Drone · Warm Hearth'}</span>
              </button>
              <button type="button" class="sanc-scene-card" data-spotlight data-scene-card="dawn" aria-pressed="false">
                <strong>${loc === 'tr' ? 'Şafak Berraklığı' : 'Dawn Clarity'}</strong>
                <span>${loc === 'tr' ? '528 Hz Parlak Harmoni · Tibet Çanağı · Gece Rüzgarı' : '528 Hz Clear Harmonics · Bowls · Night Wind'}</span>
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
            <a href="${sanctuaryHref}#odalar" class="sanc-link">${loc === 'tr' ? '4 Canlı Meditasyon Odası →' : '4 Live Meditation Rooms →'}</a>
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
                  <span>${loc === 'tr' ? 'Rehberi Oku' : 'Read Guide'}</span>
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
