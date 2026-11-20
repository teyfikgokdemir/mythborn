(() => {
  'use strict';

  /* =========================================================================
     MYTHBORN 2027 FREQUENCY STUDIO PLAYER
     - Streams 8 real studio-mastered .m4a tracks (/audio/*.m4a) on user click
     - Live Cymatics Sacred Resonance Canvas
     - Optional real-time Nature Soundscape layering (Rain, Ocean, Wind, Hearth)
     - Safe volume ceiling, session timer, zero autoplay, zero microphone access
     ========================================================================= */

  const TRACKS = {
    '432': {
      url: '/audio/432hz.m4a',
      hz: '432 Hz',
      title: 'Derin Gevşeme & Denge',
      type: 'AKORT REFERANSI · STÜDYO KAYDI',
      meaning: '432 Hz, klasik 440 Hz standardına kıyasla daha sıcak ve yumuşak algılanan alternatif A4 akort referansıdır.',
      listen: 'Akşam dinginliği, mum odağı ve zihinsel gürültüyü azaltmak için idealdir.',
      evidence: 'Not: Kişisel dinleme ve dinginlik amaçlıdır; tıbbi tedavi yerine geçmez.',
      petals: 6
    },
    '528': {
      url: '/audio/528hz.m4a',
      hz: '528 Hz',
      title: 'Dönüşüm & Berraklık',
      type: 'SOLFEGGIO · STÜDYO KAYDI',
      meaning: 'Popüler sembolik gelenekte “dönüşüm ve berraklık” temasıyla anılan parlak, ferah bir ses atmosferidir.',
      listen: 'Sabah niyeti, yaratıcı odaklanma ve taze başlangıç hissi için seçilebilir.',
      evidence: 'Not: Sembolik ve akustik deneyim amaçlıdır; klinik şifa iddiası taşımaz.',
      petals: 8
    },
    '396': {
      url: '/audio/396hz.m4a',
      hz: '396 Hz',
      title: 'Köklenme & Gölge Bırakma',
      type: 'SOLFEGGIO · STÜDYO KAYDI',
      meaning: 'Derin ve sakin pes dokusuyla korku, gerginlik ve suçluluk yüklerini fark edip bırakma temasıyla ilişkilendirilir.',
      listen: 'Carl Jung gölge çalışması, günlük tutma ve akşam gevşemesi için uygundur.',
      evidence: 'Not: Öz-farkındalık ve dinlenme alanıdır; psikoterapi veya tedavi değildir.',
      petals: 5
    },
    '174': {
      url: '/audio/174hz.m4a',
      hz: '174 Hz',
      title: 'Topraklanma & Sükûnet',
      type: 'SOLFEGGIO · STÜDYO KAYDI',
      meaning: 'En düşük pes banttaki sıcak titreşimleriyle bedensel dinginlik ve güven hissi temasıyla anılır.',
      listen: 'Yoğun bir günün ardından omuzları gevşetmek ve sakinleşmek için dinlenebilir.',
      evidence: 'Not: Tıbbi ağrı tedavisi değildir; yalnızca rahatlatıcı ses ortamı sunar.',
      petals: 4
    },
    '639': {
      url: '/audio/639hz.m4a',
      hz: '639 Hz',
      title: 'Kalp Uyumu & Bağ',
      type: 'SOLFEGGIO · STÜDYO KAYDI',
      meaning: 'Yumuşak marimba ve sıcak harmoniklerle empati, uyum ve dingin iletişim temasıyla ilişkilendirilir.',
      listen: 'Nefes koheransı ve sakin içsel diyalog anlarında eşlikçi olarak uygundur.',
      evidence: 'Not: Kültürel sembolizm ve kişisel huzur amaçlıdır.',
      petals: 7
    },
    '852': {
      url: '/audio/852hz.m4a',
      hz: '852 Hz',
      title: 'Sezgi & İçsel Netlik',
      type: 'SOLFEGGIO · STÜDYO KAYDI',
      meaning: 'Derin uzamsal atmosferiyle sezgisel berraklık, aktif imgelem ve gece tefekkürü temasıyla anılır.',
      listen: 'Theta eşiği gevşemesi, rüya günlüğü ve derin odaklanma için tercih edilir.',
      evidence: 'Not: Kişisel tefekkür amaçlıdır; bilimsel veya tıbbi vaat içermez.',
      petals: 9
    },
    '963': {
      url: '/audio/963hz.m4a',
      hz: '963 Hz',
      title: 'Yüksek Sessizlik & Bütünlük',
      type: 'SOLFEGGIO · STÜDYO KAYDI',
      meaning: 'Ferahlık, bütünlük ve geniş farkındalık hissiyle ilişkilendirilen en parlak Solfeggio atmosferidir.',
      listen: '108 mantra sayacı ve sessiz akşam meditasyonları için idealdir.',
      evidence: 'Not: Sembolik ve meditatif dinleme deneyimi içindir.',
      petals: 12
    },
    'alpha-10': {
      url: '/audio/alpha-10hz.m4a',
      hz: 'Alpha 10 Hz',
      title: 'Binaural Odak & Akış',
      type: 'BEYİN DALGASI · KULAKLIK ÖNERİLİR',
      meaning: 'Sakin uyanıklık ve berrak odaklanma bandıyla (8–12 Hz) ilişkilendirilen 10 Hz binaural akış kaydıdır.',
      listen: 'Okuma, yazma, nefes çalışması ve zihinsel berraklık için kulaklıkla dinlenmesi önerilir.',
      evidence: 'Not: Kulaklıkla düşük ses düzeyinde dinleyin; rahatsızlık hissederseniz durdurun.',
      petals: 10
    }
  };

  const MAX_TRACK_VOLUME = 0.80;
  const MAX_NATURE_GAIN = 0.24;

  const init = () => {
    const playBtn = document.getElementById('play-toggle');
    const stateEl = document.getElementById('play-state');
    const labelEl = document.getElementById('play-label');
    const timerEl = document.getElementById('timer-display');
    const durationEl = document.getElementById('duration');
    const volumeEl = document.getElementById('volume');
    const volumeValEl = document.getElementById('volume-value');
    const natureEl = document.getElementById('nature-layer');
    const statusEl = document.getElementById('session-status');
    const canvas = document.getElementById('freq-cymatics');

    const expType = document.getElementById('tone-explainer-type');
    const expHz = document.getElementById('tone-explainer-hz');
    const expTitle = document.getElementById('tone-explainer-title');
    const expMeaning = document.getElementById('tone-explainer-meaning');
    const expListen = document.getElementById('tone-explainer-listen');
    const expEvidence = document.getElementById('tone-explainer-evidence');
    const choices = document.querySelectorAll('.frequency-choice');

    if (!playBtn) return;

    let currentKey = '432';
    let playing = false;
    let audio = null;
    let currentUrl = '';
    let timerId = null;
    let remainingSec = 600;

    // Optional live nature soundscape via Web Audio API
    let ctx = null;
    let natureNodes = [];
    let natureGain = null;

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let phase = 0;

    const drawCymatics = () => {
      if (!canvas) return;
      const g = canvas.getContext('2d');
      if (!g) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(240, Math.floor(rect.width));
      const h = Math.max(180, Math.floor(rect.height));
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const baseR = Math.min(w, h) * 0.35;
      const spec = TRACKS[currentKey] || TRACKS['432'];
      const petals = spec.petals || 6;
      const energy = playing ? 0.55 + Math.sin(phase * 1.4) * 0.16 : 0.10;

      if (!reducedMotion) {
        phase += playing ? 0.016 : 0.004;
      }

      const glow = g.createRadialGradient(cx, cy, 4, cx, cy, baseR * 1.5);
      glow.addColorStop(0, `rgba(214, 190, 146, ${0.18 + energy * 0.24})`);
      glow.addColorStop(0.55, `rgba(148, 169, 201, ${0.08 + energy * 0.09})`);
      glow.addColorStop(1, 'rgba(8, 11, 18, 0)');
      g.fillStyle = glow;
      g.fillRect(0, 0, w, h);

      [1.18, 0.9, 0.6].forEach((m, idx) => {
        g.beginPath();
        g.arc(cx, cy, baseR * m, 0, Math.PI * 2);
        g.strokeStyle = `rgba(214, 190, 146, ${0.13 + idx * 0.05})`;
        g.lineWidth = 1;
        g.stroke();
      });

      for (let layer = 0; layer < 3; layer++) {
        g.beginPath();
        const k = layer === 0 ? petals : layer === 1 ? petals * 2 : petals * 1.5;
        const amp = (7 + energy * 20) * (1 - layer * 0.24);
        const rad = baseR * (0.86 - layer * 0.16);
        const dir = layer % 2 === 0 ? 1 : -1;
        for (let a = 0; a <= Math.PI * 2 + 0.02; a += 0.025) {
          const r = rad + Math.sin(k * a + phase * dir) * amp + Math.cos((k / 2) * a - phase * 1.2 * dir) * (amp * 0.4);
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          if (a === 0) g.moveTo(x, y);
          else g.lineTo(x, y);
        }
        g.closePath();
        g.strokeStyle = layer === 0
          ? `rgba(234, 215, 178, ${0.45 + energy * 0.4})`
          : layer === 1
            ? `rgba(148, 169, 201, ${0.28 + energy * 0.25})`
            : `rgba(214, 190, 146, ${0.18 + energy * 0.22})`;
        g.lineWidth = layer === 0 ? 1.6 : 1;
        g.stroke();
      }

      g.beginPath();
      g.arc(cx, cy, 4 + energy * 4, 0, Math.PI * 2);
      g.fillStyle = 'rgba(246, 238, 220, 0.92)';
      g.fill();

      if (!reducedMotion) requestAnimationFrame(drawCymatics);
    };

    const stopNature = () => {
      natureNodes.forEach((n) => {
        try { if (typeof n.stop === 'function') n.stop(); } catch (_) {}
        try { if (typeof n.disconnect === 'function') n.disconnect(); } catch (_) {}
      });
      natureNodes = [];
    };

    const startNature = () => {
      stopNature();
      const mode = natureEl ? natureEl.value : 'off';
      if (!playing || mode === 'off') return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!ctx) ctx = new AC();
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});

      natureGain = ctx.createGain();
      const volRatio = volumeEl ? Number(volumeEl.value) / 100 : 0.65;
      natureGain.gain.setValueAtTime(volRatio * MAX_NATURE_GAIN * 0.55, ctx.currentTime);
      natureGain.connect(ctx.destination);
      natureNodes.push(natureGain);

      const len = ctx.sampleRate * 4;
      const buf = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let ch = 0; ch < 2; ch++) {
        const d = buf.getChannelData(ch);
        let last = 0;
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < len; i++) {
          const w = Math.random() * 2 - 1;
          if (mode === 'ocean' || mode === 'fire') {
            last = (last + 0.02 * w) / 1.02;
            d[i] = last * 3.0;
          } else {
            b0 = 0.997 * b0 + w * 0.06;
            b1 = 0.985 * b1 + w * 0.08;
            b2 = 0.950 * b2 + w * 0.10;
            d[i] = (b0 + b1 + b2 + w * 0.12) * 0.25;
          }
        }
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      const filt = ctx.createBiquadFilter();
      if (mode === 'rain') { filt.type = 'bandpass'; filt.frequency.setValueAtTime(1120, ctx.currentTime); filt.Q.setValueAtTime(0.45, ctx.currentTime); }
      else if (mode === 'wind') { filt.type = 'bandpass'; filt.frequency.setValueAtTime(420, ctx.currentTime); filt.Q.setValueAtTime(2.2, ctx.currentTime); }
      else { filt.type = 'lowpass'; filt.frequency.setValueAtTime(mode === 'fire' ? 240 : 340, ctx.currentTime); }
      src.connect(filt).connect(natureGain);
      src.start();
      natureNodes.push(src, filt);
    };

    const formatTime = (sec) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

    const syncVolume = () => {
      const v = volumeEl ? Number(volumeEl.value) : 68;
      if (volumeValEl) volumeValEl.textContent = `%${v}`;
      if (audio) audio.volume = Math.max(0, Math.min(1, v / 100)) * MAX_TRACK_VOLUME;
      if (natureGain && ctx) natureGain.gain.setTargetAtTime((v / 100) * MAX_NATURE_GAIN * 0.55, ctx.currentTime, 0.08);
    };

    const updateGuide = (key) => {
      const spec = TRACKS[key] || TRACKS['432'];
      if (labelEl) labelEl.textContent = `${spec.hz} · ${spec.title}`;
      if (expType) expType.textContent = spec.type;
      if (expHz) expHz.textContent = spec.hz;
      if (expTitle) expTitle.textContent = spec.title;
      if (expMeaning) expMeaning.textContent = spec.meaning;
      if (expListen) expListen.innerHTML = `<strong>Ne zaman dinlemeli?</strong> ${spec.listen}`;
      if (expEvidence) expEvidence.textContent = spec.evidence;
    };

    const stopPlayback = () => {
      playing = false;
      if (timerId) { clearInterval(timerId); timerId = null; }
      if (audio) { try { audio.pause(); } catch (_) {} }
      stopNature();
      playBtn.setAttribute('aria-pressed', 'false');
      playBtn.textContent = '▶';
      if (stateEl) stateEl.textContent = 'HAZIR · SES KAPALI';
      if (statusEl) statusEl.textContent = 'Stüdyo kaydı duraklatıldı. Dilediğin frekansı seçip yeniden başlatabilirsin.';
    };

    const startPlayback = () => {
      const spec = TRACKS[currentKey] || TRACKS['432'];
      if (!audio) {
        audio = new Audio();
        audio.loop = true;
        audio.preload = 'none';
      }
      if (currentUrl !== spec.url) {
        audio.src = spec.url;
        currentUrl = spec.url;
      }
      playing = true;
      syncVolume();
      audio.play().catch(() => {});
      startNature();

      remainingSec = Number(durationEl ? durationEl.value : 600) || 600;
      if (timerEl) timerEl.textContent = formatTime(remainingSec);
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        remainingSec -= 1;
        if (timerEl) timerEl.textContent = formatTime(Math.max(0, remainingSec));
        if (remainingSec <= 0) stopPlayback();
      }, 1000);

      playBtn.setAttribute('aria-pressed', 'true');
      playBtn.textContent = '❚❚';
      if (stateEl) stateEl.textContent = 'AKTİF · STÜDYO AKIŞI';
      if (statusEl) statusEl.textContent = `${spec.hz} · ${spec.title} akışta. Rahatsızlık hissedersen sesi kıs veya durdur.`;
    };

    playBtn.addEventListener('click', () => {
      if (playing) stopPlayback();
      else startPlayback();
    });

    choices.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.frequency;
        if (!TRACKS[key]) return;
        currentKey = key;
        choices.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
        updateGuide(key);
        startPlayback();
      });
    });

    if (volumeEl) volumeEl.addEventListener('input', syncVolume);
    if (natureEl) natureEl.addEventListener('change', () => { if (playing) startNature(); });
    if (durationEl) {
      durationEl.addEventListener('change', () => {
        remainingSec = Number(durationEl.value) || 600;
        if (timerEl) timerEl.textContent = formatTime(remainingSec);
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && playing) stopPlayback();
    });

    // Spotlight hover
    if (!reducedMotion) {
      document.querySelectorAll('[data-spotlight]').forEach((el) => {
        el.addEventListener('pointermove', (e) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty('--mx', `${e.clientX - r.left}px`);
          el.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
      });
    }

    updateGuide(currentKey);
    syncVolume();
    drawCymatics();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
