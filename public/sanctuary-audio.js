(() => {
  'use strict';

  /* =========================================================================
     MYTHBORN 2027 SANCTUARY AUDIO & CYMATICS ENGINE
     - Procedural Stereo Temple Reverb (ConvolverNode, 0 KB download)
     - Warm Harmonic Enrichment (fundamental + subtle sub-octave + pure fifth)
     - True Stereo Binaural Brainwaves (Alpha 10 Hz, Theta 6 Hz, Delta 2 Hz)
     - Generative Tibetan Singing Bowls & Breathing Warm Pad
     - 4 Real-Time Nature Soundscapes (Rain, Ocean, Wind, Hearth/Candle)
     - Live Cymatics / Sacred Resonance Canvas (AnalyserNode + 60fps geometry)
     - 4 Curated One-Click Atmosphere Scenes
     - Interactive Rooms: Candle, Breath Orb, Theta, 108 Mala, Jung Mirror
     ========================================================================= */

  const MAX_TONE_GAIN = 0.20;
  const MAX_MUSIC_GAIN = 0.22;
  const MAX_NATURE_GAIN = 0.26;

  // --- Procedural Stereo Temple Reverb Impulse Response ---
  const createReverbImpulse = (audioCtx, duration = 3.2, decay = 2.6) => {
    const rate = audioCtx.sampleRate;
    const length = Math.floor(rate * duration);
    const impulse = audioCtx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        const env = Math.pow(1 - i / length, decay);
        data[i] = (Math.random() * 2 - 1) * env * 0.45;
      }
    }
    return impulse;
  };

  // --- Live Cymatics Sacred Resonance Visualizer ---
  const initCymaticsCanvas = (canvas, getEnergy, isPlayingFn) => {
    if (!canvas) return { setMode: () => {} };
    const c = canvas.getContext('2d');
    if (!c) return { setMode: () => {} };

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let phase = 0;
    let petals = 6;
    let secondary = 12;

    const setMode = (sceneKey) => {
      if (sceneKey === 'temple' || sceneKey === 'candle') { petals = 6; secondary = 12; }
      else if (sceneKey === 'theta') { petals = 8; secondary = 16; }
      else if (sceneKey === 'shadow') { petals = 5; secondary = 10; }
      else { petals = 9; secondary = 18; }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(240, Math.floor(rect.width));
      const h = Math.max(180, Math.floor(rect.height));
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const baseR = Math.min(w, h) * 0.34;
      const active = isPlayingFn();
      const energy = active ? Math.max(0.18, getEnergy()) : 0.08;

      if (!reducedMotion) {
        phase += active ? 0.012 + energy * 0.018 : 0.004;
      }

      // Deep Indigo Glow Core
      const glow = c.createRadialGradient(cx, cy, 4, cx, cy, baseR * 1.45);
      glow.addColorStop(0, `rgba(214, 190, 146, ${0.18 + energy * 0.22})`);
      glow.addColorStop(0.5, `rgba(148, 169, 201, ${0.08 + energy * 0.1})`);
      glow.addColorStop(1, 'rgba(8, 11, 18, 0)');
      c.fillStyle = glow;
      c.fillRect(0, 0, w, h);

      // Outer reference astrolabe rings
      [1.18, 0.92, 0.62].forEach((mult, idx) => {
        c.beginPath();
        c.arc(cx, cy, baseR * mult, 0, Math.PI * 2);
        c.strokeStyle = `rgba(214, 190, 146, ${0.12 + idx * 0.05})`;
        c.lineWidth = 1;
        c.stroke();
      });

      // Harmonic Cymatic Interference Curves
      for (let layer = 0; layer < 3; layer++) {
        c.beginPath();
        const k = layer === 0 ? petals : layer === 1 ? secondary : petals * 1.5;
        const amp = (8 + energy * 24) * (1 - layer * 0.22);
        const radius = baseR * (0.86 - layer * 0.16);
        const dir = layer % 2 === 0 ? 1 : -1;

        for (let a = 0; a <= Math.PI * 2 + 0.02; a += 0.025) {
          const wave = Math.sin(k * a + phase * dir) * amp
            + Math.cos((k / 2) * a - phase * 1.3 * dir) * (amp * 0.45);
          const r = radius + wave;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          if (a === 0) c.moveTo(x, y);
          else c.lineTo(x, y);
        }
        c.closePath();
        c.strokeStyle = layer === 0
          ? `rgba(234, 215, 178, ${0.42 + energy * 0.42})`
          : layer === 1
            ? `rgba(148, 169, 201, ${0.26 + energy * 0.28})`
            : `rgba(214, 190, 146, ${0.18 + energy * 0.24})`;
        c.lineWidth = layer === 0 ? 1.6 : 1.05;
        c.stroke();
      }

      // Luminous Center Point
      c.beginPath();
      c.arc(cx, cy, 4 + energy * 5, 0, Math.PI * 2);
      c.fillStyle = 'rgba(246, 238, 220, 0.9)';
      c.fill();

      if (!reducedMotion) {
        requestAnimationFrame(draw);
      }
    };

    draw();
    return { setMode };
  };

  // --- Shared Web Audio Engine ---
  const initSanctuaryAudio = () => {
    const root = document.querySelector('[data-sanctuary-app]');
    if (!root) return;

    let ctx = null;
    let masterGain = null;
    let dryBus = null;
    let reverbNode = null;
    let reverbWet = null;
    let analyser = null;
    let analyserData = null;
    let playing = false;
    let timerId = null;
    let remainingSec = 0;

    let toneNodes = [];
    let toneGain = null;

    let musicNodes = [];
    let musicGain = null;
    let bowlInterval = null;
    let chordInterval = null;
    let melodyInterval = null;

    let natureNodes = [];
    let natureGain = null;

    const playBtn = root.querySelector('[data-sanc-play]');
    const stateEl = root.querySelector('[data-sanc-state]');
    const timerDisplay = root.querySelector('[data-sanc-timer-display]');
    const durationSelect = root.querySelector('[data-sanc-duration]');
    const toneSelect = root.querySelector('[data-sanc-tone]');
    const toneVol = root.querySelector('[data-sanc-tone-vol]');
    const musicSelect = root.querySelector('[data-sanc-music]');
    const musicVol = root.querySelector('[data-sanc-music-vol]');
    const natureSelect = root.querySelector('[data-sanc-nature]');
    const natureVol = root.querySelector('[data-sanc-nature-vol]');
    const visualRing = root.querySelector('[data-sanc-ring]');
    const cymaticsEl = root.querySelector('[data-cymatics-canvas]');
    const sceneCards = root.querySelectorAll('[data-scene-card]');

    const getEnergy = () => {
      if (!analyser || !analyserData || !playing) return 0;
      analyser.getByteFrequencyData(analyserData);
      let sum = 0;
      for (let i = 0; i < 32; i++) sum += analyserData[i];
      return Math.min(1, sum / (32 * 140));
    };

    const cymatics = initCymaticsCanvas(cymaticsEl, getEnergy, () => playing);

    const TONE_MODES = {
      off: { type: 'off' },
      '432': { type: 'warm-sine', hz: 432 },
      '528': { type: 'warm-sine', hz: 528 },
      '396': { type: 'warm-sine', hz: 396 },
      '639': { type: 'warm-sine', hz: 639 },
      '852': { type: 'warm-sine', hz: 852 },
      '963': { type: 'warm-sine', hz: 963 },
      '174': { type: 'warm-sine', hz: 174 },
      'alpha-10': { type: 'binaural', left: 432, right: 442 },
      'theta-6': { type: 'binaural', left: 432, right: 438 },
      'delta-2': { type: 'binaural', left: 174, right: 176 }
    };

    const ensureCtx = () => {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ctx) {
        ctx = new AC();
        masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);

        analyser = ctx.createAnalyser();
        analyser.fftSize = 128;
        analyserData = new Uint8Array(analyser.frequencyBinCount);

        // Dry + Stereo Temple Reverb Bus
        dryBus = ctx.createGain();
        dryBus.gain.setValueAtTime(0.82, ctx.currentTime);

        reverbNode = ctx.createConvolver();
        reverbNode.buffer = createReverbImpulse(ctx, 3.2, 2.5);
        reverbWet = ctx.createGain();
        reverbWet.gain.setValueAtTime(0.42, ctx.currentTime);

        dryBus.connect(masterGain);
        reverbNode.connect(reverbWet);
        reverbWet.connect(masterGain);

        masterGain.connect(analyser);
        analyser.connect(ctx.destination);
      }
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      return ctx;
    };

    const stopNodes = (list) => {
      list.forEach((n) => {
        try { if (typeof n.stop === 'function') n.stop(); } catch (_) {}
        try { if (typeof n.disconnect === 'function') n.disconnect(); } catch (_) {}
      });
      list.length = 0;
    };

    const sliderGain = (el, cap) => {
      const v = el ? Number(el.value) : 45;
      return Math.max(0, Math.min(1, v / 100)) * cap;
    };

    const createNoiseBuffer = (audioCtx, kind = 'pink', seconds = 5) => {
      const length = audioCtx.sampleRate * seconds;
      const buffer = audioCtx.createBuffer(2, length, audioCtx.sampleRate);
      for (let ch = 0; ch < 2; ch++) {
        const data = buffer.getChannelData(ch);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        let lastOut = 0;
        for (let i = 0; i < length; i++) {
          const white = Math.random() * 2 - 1;
          if (kind === 'brown') {
            lastOut = (lastOut + 0.02 * white) / 1.02;
            data[i] = lastOut * 3.1;
          } else {
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.09;
            b6 = white * 0.115926;
          }
        }
      }
      return buffer;
    };

    const triggerBowlChime = (freq = 216, gainPeak = 0.12) => {
      if (!ctx || !dryBus || !reverbNode) return;
      const now = ctx.currentTime;
      const partials = [
        { mult: 1, amp: 1.0, dur: 6.2 },
        { mult: 2.756, amp: 0.24, dur: 3.8 },
        { mult: 5.404, amp: 0.05, dur: 2.0 }
      ];
      partials.forEach((p) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * p.mult, now);
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainPeak * p.amp), now + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
        osc.connect(g);
        g.connect(musicGain || dryBus);
        g.connect(reverbNode);
        osc.start(now);
        osc.stop(now + p.dur + 0.08);
      });
    };

    const buildToneLayer = () => {
      stopNodes(toneNodes);
      if (!ctx || !playing) return;
      const modeKey = toneSelect ? toneSelect.value : '432';
      const spec = TONE_MODES[modeKey] || TONE_MODES.off;
      if (spec.type === 'off') return;

      toneGain = ctx.createGain();
      toneGain.gain.setValueAtTime(sliderGain(toneVol, MAX_TONE_GAIN), ctx.currentTime);
      toneGain.connect(dryBus);
      toneGain.connect(reverbNode);
      toneNodes.push(toneGain);

      if (spec.type === 'warm-sine') {
        // Rich harmonic bed: fundamental + warm sub-octave + soft fifth
        const harmonics = [
          { hz: spec.hz, amp: 0.62 },
          { hz: spec.hz * 0.5, amp: 0.28 },
          { hz: spec.hz * 1.5, amp: 0.08 }
        ];
        harmonics.forEach((h, idx) => {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(h.hz, ctx.currentTime);
          g.gain.setValueAtTime(h.amp, ctx.currentTime);

          // Slow breathing shimmer
          const lfo = ctx.createOscillator();
          const lfoG = ctx.createGain();
          lfo.frequency.setValueAtTime(0.08 + idx * 0.03, ctx.currentTime);
          lfoG.gain.setValueAtTime(h.amp * 0.12, ctx.currentTime);
          lfo.connect(lfoG).connect(g.gain);

          osc.connect(g).connect(toneGain);
          osc.start();
          lfo.start();
          toneNodes.push(osc, g, lfo, lfoG);
        });
      } else if (spec.type === 'binaural') {
        const leftOsc = ctx.createOscillator();
        const rightOsc = ctx.createOscillator();
        leftOsc.type = 'sine';
        rightOsc.type = 'sine';
        leftOsc.frequency.setValueAtTime(spec.left, ctx.currentTime);
        rightOsc.frequency.setValueAtTime(spec.right, ctx.currentTime);

        if (typeof ctx.createStereoPanner === 'function') {
          const leftPan = ctx.createStereoPanner();
          const rightPan = ctx.createStereoPanner();
          leftPan.pan.setValueAtTime(-0.92, ctx.currentTime);
          rightPan.pan.setValueAtTime(0.92, ctx.currentTime);
          leftOsc.connect(leftPan).connect(toneGain);
          rightOsc.connect(rightPan).connect(toneGain);
          toneNodes.push(leftPan, rightPan);
        } else {
          leftOsc.connect(toneGain);
          rightOsc.connect(toneGain);
        }
        leftOsc.start();
        rightOsc.start();
        toneNodes.push(leftOsc, rightOsc);
      }
    };

    // Soft cinematic ambient piano / harp note drifting into stereo temple reverb
    const triggerAmbientPiano = (freq = 432, peak = 0.085) => {
      if (!ctx || !dryBus || !reverbNode || !playing) return;
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filt = ctx.createBiquadFilter();
      const env = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 2, now);

      filt.type = 'lowpass';
      filt.frequency.setValueAtTime(1400, now);
      filt.frequency.exponentialRampToValueAtTime(380, now + 4.2);

      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.16, now);

      env.gain.setValueAtTime(0.0001, now);
      env.gain.exponentialRampToValueAtTime(peak, now + 0.09);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 5.4);

      osc1.connect(filt);
      osc2.connect(g2).connect(filt);
      filt.connect(env);
      env.connect(musicGain || dryBus);
      env.connect(reverbNode);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 5.5);
      osc2.stop(now + 5.5);
    };

    const buildMusicLayer = () => {
      if (bowlInterval) { clearInterval(bowlInterval); bowlInterval = null; }
      if (chordInterval) { clearInterval(chordInterval); chordInterval = null; }
      if (melodyInterval) { clearInterval(melodyInterval); melodyInterval = null; }
      stopNodes(musicNodes);
      if (!ctx || !playing) return;
      const mode = musicSelect ? musicSelect.value : 'bowls';
      if (mode === 'off') return;

      musicGain = ctx.createGain();
      musicGain.gain.setValueAtTime(sliderGain(musicVol, MAX_MUSIC_GAIN), ctx.currentTime);
      musicGain.connect(dryBus);
      musicGain.connect(reverbNode);
      musicNodes.push(musicGain);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(mode === 'temple' ? 520 : 440, ctx.currentTime);
      filter.Q.setValueAtTime(0.75, ctx.currentTime);
      filter.connect(musicGain);
      musicNodes.push(filter);

      // 432 Hz-tuned evolving cinematic ambient chord progression (Dm9 -> Bbmaj7 -> Fmaj9 -> Csus2)
      const progression = [
        [72.0, 144.0, 216.0, 256.3, 324.0],
        [57.15, 114.3, 171.4, 216.0, 288.0],
        [85.7, 171.4, 216.0, 256.3, 324.0],
        [64.08, 128.15, 192.2, 256.3, 288.0]
      ];
      let chordIdx = 0;
      const padOscs = [];

      progression[0].forEach((hz, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx === 0 ? 'sine' : (idx % 2 === 0 ? 'sine' : 'triangle');
        osc.frequency.setValueAtTime(hz, ctx.currentTime);
        g.gain.setValueAtTime(idx === 0 ? 0.28 : (idx === 1 ? 0.20 : 0.12), ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.05 + idx * 0.018, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.032, ctx.currentTime);
        lfo.connect(lfoGain).connect(g.gain);

        osc.connect(g).connect(filter);
        osc.start();
        lfo.start();
        padOscs.push(osc);
        musicNodes.push(osc, g, lfo, lfoGain);
      });

      // Smooth 4.5-second chord glide every 14 seconds
      chordInterval = setInterval(() => {
        if (!playing || !ctx) return;
        chordIdx = (chordIdx + 1) % progression.length;
        const nextChord = progression[chordIdx];
        const now = ctx.currentTime;
        padOscs.forEach((osc, i) => {
          osc.frequency.cancelScheduledValues(now);
          osc.frequency.setValueAtTime(osc.frequency.value, now);
          osc.frequency.exponentialRampToValueAtTime(nextChord[i], now + 4.5);
        });
      }, 14000);

      // Gentle 432 Hz melodic piano / harp notes drifting through stereo reverb
      const melodyScale = [288.0, 324.0, 342.8, 432.0, 512.6, 576.0, 648.0];
      let noteStep = 0;
      triggerAmbientPiano(melodyScale[3], 0.085);
      melodyInterval = setInterval(() => {
        if (!playing || !ctx) return;
        const pick = melodyScale[(noteStep + Math.floor(Math.random() * 3)) % melodyScale.length];
        noteStep += 1;
        triggerAmbientPiano(pick, 0.07 + Math.random() * 0.03);
      }, 3600);

      // Periodic warm Tibetan singing bowl overtones
      const bowlScale = [216.0, 288.0, 324.0, 432.0];
      bowlInterval = setInterval(() => {
        if (!playing || !ctx) return;
        const note = bowlScale[Math.floor(Math.random() * bowlScale.length)];
        triggerBowlChime(note, 0.09);
      }, mode === 'temple' ? 9200 : 12000);
    };

    const buildNatureLayer = () => {
      stopNodes(natureNodes);
      if (!ctx || !playing) return;
      const mode = natureSelect ? natureSelect.value : 'rain';
      if (mode === 'off') return;

      natureGain = ctx.createGain();
      natureGain.gain.setValueAtTime(sliderGain(natureVol, MAX_NATURE_GAIN), ctx.currentTime);
      natureGain.connect(dryBus);
      natureNodes.push(natureGain);

      const src = ctx.createBufferSource();
      src.buffer = createNoiseBuffer(ctx, mode === 'ocean' || mode === 'fire' ? 'brown' : 'pink', 5);
      src.loop = true;

      const filter = ctx.createBiquadFilter();
      if (mode === 'rain') {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1120, ctx.currentTime);
        filter.Q.setValueAtTime(0.45, ctx.currentTime);
        src.connect(filter).connect(natureGain);
      } else if (mode === 'ocean') {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(340, ctx.currentTime);
        const waveGain = ctx.createGain();
        waveGain.gain.setValueAtTime(0.55, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoDepth = ctx.createGain();
        lfo.frequency.setValueAtTime(0.11, ctx.currentTime);
        lfoDepth.gain.setValueAtTime(0.38, ctx.currentTime);
        lfo.connect(lfoDepth).connect(waveGain.gain);

        const filterLfo = ctx.createOscillator();
        const filterDepth = ctx.createGain();
        filterLfo.frequency.setValueAtTime(0.11, ctx.currentTime);
        filterDepth.gain.setValueAtTime(190, ctx.currentTime);
        filterLfo.connect(filterDepth).connect(filter.frequency);

        src.connect(filter).connect(waveGain).connect(natureGain);
        lfo.start();
        filterLfo.start();
        natureNodes.push(waveGain, lfo, lfoDepth, filterLfo, filterDepth);
      } else if (mode === 'wind') {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(420, ctx.currentTime);
        filter.Q.setValueAtTime(2.4, ctx.currentTime);
        const lfo = ctx.createOscillator();
        const lfoDepth = ctx.createGain();
        lfo.frequency.setValueAtTime(0.085, ctx.currentTime);
        lfoDepth.gain.setValueAtTime(210, ctx.currentTime);
        lfo.connect(lfoDepth).connect(filter.frequency);
        src.connect(filter).connect(natureGain);
        lfo.start();
        natureNodes.push(lfo, lfoDepth);
      } else if (mode === 'fire') {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(240, ctx.currentTime);
        src.connect(filter).connect(natureGain);

        const crackleSrc = ctx.createBufferSource();
        const crackleBuf = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
        const cData = crackleBuf.getChannelData(0);
        for (let i = 0; i < cData.length; i++) {
          cData[i] = Math.random() < 0.00055 ? (Math.random() * 2 - 1) * 0.65 : 0;
        }
        crackleSrc.buffer = crackleBuf;
        crackleSrc.loop = true;
        const crackleFilter = ctx.createBiquadFilter();
        crackleFilter.type = 'highpass';
        crackleFilter.frequency.setValueAtTime(1600, ctx.currentTime);
        const crackleGain = ctx.createGain();
        crackleGain.gain.setValueAtTime(0.32, ctx.currentTime);
        crackleSrc.connect(crackleFilter).connect(crackleGain).connect(natureGain);
        crackleSrc.start();
        natureNodes.push(crackleSrc, crackleFilter, crackleGain);
      }

      src.start();
      natureNodes.push(src, filter);
    };

    const formatTime = (sec) => {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const updateUiState = (active) => {
      if (playBtn) {
        playBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
        playBtn.textContent = active ? '❚❚' : '▶';
      }
      if (visualRing) visualRing.classList.toggle('is-playing', active);
      if (stateEl) {
        stateEl.textContent = active
          ? (stateEl.dataset.labelPlaying || 'ACTIVE · RESONANCE')
          : (stateEl.dataset.labelIdle || 'READY · SILENT');
      }
    };

    const stopSession = () => {
      playing = false;
      if (timerId) { clearInterval(timerId); timerId = null; }
      if (bowlInterval) { clearInterval(bowlInterval); bowlInterval = null; }
      if (chordInterval) { clearInterval(chordInterval); chordInterval = null; }
      if (melodyInterval) { clearInterval(melodyInterval); melodyInterval = null; }
      if (ctx && masterGain) {
        const now = ctx.currentTime;
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.setTargetAtTime(0.0001, now, 0.25);
        setTimeout(() => {
          if (!playing) {
            stopNodes(toneNodes);
            stopNodes(musicNodes);
            stopNodes(natureNodes);
          }
        }, 700);
      }
      updateUiState(false);
    };

    const startSession = () => {
      const audioCtx = ensureCtx();
      if (!audioCtx) return;
      playing = true;
      buildToneLayer();
      buildMusicLayer();
      buildNatureLayer();

      const now = audioCtx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.setTargetAtTime(1.0, now, 0.55);

      remainingSec = Number(durationSelect ? durationSelect.value : 600) || 600;
      if (timerDisplay) timerDisplay.textContent = formatTime(remainingSec);
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        remainingSec -= 1;
        if (timerDisplay) timerDisplay.textContent = formatTime(Math.max(0, remainingSec));
        if (remainingSec <= 0) stopSession();
      }, 1000);

      updateUiState(true);
    };

    const applyScene = (sceneKey) => {
      cymatics.setMode(sceneKey);
      sceneCards.forEach((sc) => {
        const active = sc.dataset.sceneCard === sceneKey;
        sc.classList.toggle('is-active', active);
        sc.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      if (sceneKey === 'temple' || sceneKey === 'candle') {
        if (toneSelect) toneSelect.value = '432';
        if (musicSelect) musicSelect.value = 'bowls';
        if (natureSelect) natureSelect.value = sceneKey === 'candle' ? 'fire' : 'rain';
      } else if (sceneKey === 'theta') {
        if (toneSelect) toneSelect.value = 'theta-6';
        if (musicSelect) musicSelect.value = 'temple';
        if (natureSelect) natureSelect.value = 'ocean';
      } else if (sceneKey === 'shadow') {
        if (toneSelect) toneSelect.value = '396';
        if (musicSelect) musicSelect.value = 'temple';
        if (natureSelect) natureSelect.value = 'fire';
      } else if (sceneKey === 'dawn' || sceneKey === 'breath') {
        if (toneSelect) toneSelect.value = sceneKey === 'breath' ? 'alpha-10' : '528';
        if (musicSelect) musicSelect.value = 'bowls';
        if (natureSelect) natureSelect.value = 'wind';
      } else if (sceneKey === 'mantra') {
        if (toneSelect) toneSelect.value = '528';
        if (musicSelect) musicSelect.value = 'bowls';
        if (natureSelect) natureSelect.value = 'rain';
      }
      if (playing) {
        buildToneLayer();
        buildMusicLayer();
        buildNatureLayer();
      } else {
        startSession();
      }
    };

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (playing) stopSession();
        else startSession();
      });
    }

    sceneCards.forEach((btn) => {
      btn.addEventListener('click', () => applyScene(btn.dataset.sceneCard));
    });

    root.querySelectorAll('[data-sanc-preset]').forEach((btn) => {
      btn.addEventListener('click', () => applyScene(btn.dataset.sancPreset));
    });

    if (toneSelect) toneSelect.addEventListener('change', () => { if (playing) buildToneLayer(); });
    if (musicSelect) musicSelect.addEventListener('change', () => { if (playing) buildMusicLayer(); });
    if (natureSelect) natureSelect.addEventListener('change', () => { if (playing) buildNatureLayer(); });

    if (toneVol) toneVol.addEventListener('input', () => { if (toneGain && ctx) toneGain.gain.setTargetAtTime(sliderGain(toneVol, MAX_TONE_GAIN), ctx.currentTime, 0.08); });
    if (musicVol) musicVol.addEventListener('input', () => { if (musicGain && ctx) musicGain.gain.setTargetAtTime(sliderGain(musicVol, MAX_MUSIC_GAIN), ctx.currentTime, 0.08); });
    if (natureVol) natureVol.addEventListener('input', () => { if (natureGain && ctx) natureGain.gain.setTargetAtTime(sliderGain(natureVol, MAX_NATURE_GAIN), ctx.currentTime, 0.08); });

    // --- Interactive Room Tabs ---
    const tabs = root.querySelectorAll('[data-room-tab]');
    const panels = root.querySelectorAll('[data-room-panel]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.roomTab;
        tabs.forEach((t) => {
          const active = t.dataset.roomTab === target;
          t.setAttribute('aria-selected', active ? 'true' : 'false');
          t.classList.toggle('is-active', active);
        });
        panels.forEach((p) => { p.hidden = p.dataset.roomPanel !== target; });
      });
    });

    // --- Room 2: Inner-Self Breath Orb ---
    const breathBtn = root.querySelector('[data-breath-toggle]');
    const breathSelect = root.querySelector('[data-breath-pattern]');
    const breathOrb = root.querySelector('[data-breath-orb]');
    const breathPhaseEl = root.querySelector('[data-breath-phase]');
    const breathCountEl = root.querySelector('[data-breath-count]');
    let breathTimer = null;
    let breathActive = false;

    const PATTERNS = {
      box: [
        { key: 'in', sec: 4, scale: 1.24 },
        { key: 'hold', sec: 4, scale: 1.24 },
        { key: 'out', sec: 4, scale: 0.84 },
        { key: 'rest', sec: 4, scale: 0.84 }
      ],
      '478': [
        { key: 'in', sec: 4, scale: 1.26 },
        { key: 'hold', sec: 7, scale: 1.26 },
        { key: 'out', sec: 8, scale: 0.82 }
      ],
      coherence: [
        { key: 'in', sec: 5, scale: 1.24 },
        { key: 'out', sec: 5, scale: 0.84 }
      ]
    };

    const runBreath = () => {
      if (!breathOrb || !breathPhaseEl || !breathCountEl) return;
      const steps = PATTERNS[breathSelect ? breathSelect.value : 'box'] || PATTERNS.box;
      let stepIdx = 0;
      let secLeft = steps[0].sec;

      const applyStep = () => {
        const st = steps[stepIdx];
        breathPhaseEl.textContent = breathPhaseEl.dataset['label_' + st.key] || st.key.toUpperCase();
        breathCountEl.textContent = String(secLeft);
        breathOrb.style.transitionDuration = `${st.sec}s`;
        breathOrb.style.transform = `scale(${st.scale})`;
      };

      applyStep();
      breathTimer = setInterval(() => {
        secLeft -= 1;
        if (secLeft <= 0) {
          stepIdx = (stepIdx + 1) % steps.length;
          secLeft = steps[stepIdx].sec;
          applyStep();
        } else {
          breathCountEl.textContent = String(secLeft);
        }
      }, 1000);
    };

    if (breathBtn) {
      breathBtn.addEventListener('click', () => {
        if (breathActive) {
          breathActive = false;
          if (breathTimer) clearInterval(breathTimer);
          breathTimer = null;
          if (breathOrb) breathOrb.style.transform = 'scale(1)';
          breathBtn.textContent = breathBtn.dataset.labelStart || 'Start Breath';
        } else {
          breathActive = true;
          breathBtn.textContent = breathBtn.dataset.labelStop || 'Pause';
          runBreath();
        }
      });
    }

    // --- Room 4: 108 Mala Counter ---
    const malaBtn = root.querySelector('[data-mala-tap]');
    const malaReset = root.querySelector('[data-mala-reset]');
    const malaCountEl = root.querySelector('[data-mala-count]');
    const malaRoundEl = root.querySelector('[data-mala-rounds]');
    const malaRingEl = root.querySelector('[data-mala-progress]');
    let malaCount = 0;
    let malaRounds = 0;

    const renderMala = () => {
      if (malaCountEl) malaCountEl.textContent = `${malaCount} / 108`;
      if (malaRoundEl) malaRoundEl.textContent = String(malaRounds);
      if (malaRingEl) malaRingEl.style.width = `${Math.min(100, (malaCount / 108) * 100)}%`;
    };

    if (malaBtn) {
      malaBtn.addEventListener('click', () => {
        const audioCtx = ensureCtx();
        malaCount += 1;
        if (malaCount >= 108) {
          malaCount = 0;
          malaRounds += 1;
          if (audioCtx) {
            masterGain.gain.setTargetAtTime(1.0, audioCtx.currentTime, 0.02);
            triggerBowlChime(144, 0.18);
          }
        } else if (audioCtx) {
          masterGain.gain.setTargetAtTime(1.0, audioCtx.currentTime, 0.02);
          triggerBowlChime(malaCount % 27 === 0 ? 216 : 324, malaCount % 27 === 0 ? 0.14 : 0.07);
        }
        renderMala();
      });
    }
    if (malaReset) {
      malaReset.addEventListener('click', () => { malaCount = 0; malaRounds = 0; renderMala(); });
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && playing) stopSession();
    });
  };

  // --- Carl Jung Interactive Archetype & Synchronicity Mirror ---
  const initJungMirror = () => {
    const jungRoot = document.querySelector('[data-jung-app]');
    if (!jungRoot) return;

    const cards = jungRoot.querySelectorAll('[data-jung-archetype]');
    const detailTitle = jungRoot.querySelector('[data-jung-detail-title]');
    const detailMotto = jungRoot.querySelector('[data-jung-detail-motto]');
    const detailGift = jungRoot.querySelector('[data-jung-detail-gift]');
    const detailShadow = jungRoot.querySelector('[data-jung-detail-shadow]');
    const detailPrompt = jungRoot.querySelector('[data-jung-detail-prompt]');

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        cards.forEach((c) => {
          const active = c === card;
          c.classList.toggle('is-active', active);
          c.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        if (detailTitle) detailTitle.textContent = card.dataset.title || '';
        if (detailMotto) detailMotto.textContent = card.dataset.motto || '';
        if (detailGift) detailGift.textContent = card.dataset.gift || '';
        if (detailShadow) detailShadow.textContent = card.dataset.shadow || '';
        if (detailPrompt) detailPrompt.textContent = card.dataset.prompt || '';
      });
    });

    const form = jungRoot.querySelector('[data-sync-form]');
    const list = jungRoot.querySelector('[data-sync-list]');
    const clearBtn = jungRoot.querySelector('[data-sync-clear]');
    const STORAGE_KEY = 'mythborn_jung_synchronicity_v1';

    const loadEntries = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) { return []; }
    };
    const saveEntries = (entries) => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, 30))); } catch (_) {}
    };

    const renderEntries = () => {
      if (!list) return;
      const entries = loadEntries();
      if (!entries.length) {
        list.innerHTML = `<p class="jung-empty">${list.dataset.emptyText || 'No entries yet.'}</p>`;
        return;
      }
      list.innerHTML = '';
      entries.forEach((item) => {
        const el = document.createElement('article');
        el.className = 'jung-log-item';
        const meta = document.createElement('div');
        meta.className = 'jung-log-meta';
        meta.textContent = `${item.date} · ${item.archetype}`;
        const body = document.createElement('p');
        body.textContent = item.note;
        el.appendChild(meta);
        el.appendChild(body);
        list.appendChild(el);
      });
    };

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const noteInput = form.querySelector('[name="syncNote"]');
        const archInput = form.querySelector('[name="syncArchetype"]');
        const note = (noteInput ? noteInput.value : '').trim();
        if (!note) return;
        const entries = loadEntries();
        entries.unshift({ date: new Date().toLocaleDateString(), archetype: archInput ? archInput.value : 'Synchronicity', note });
        saveEntries(entries);
        if (noteInput) noteInput.value = '';
        renderEntries();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => { saveEntries([]); renderEntries(); });
    }
    renderEntries();
  };

  // --- Mouse-tracking spotlight sheen ---
  const initSpotlight = () => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('[data-spotlight]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });
  };

  const boot = () => {
    initSanctuaryAudio();
    initJungMirror();
    initSpotlight();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
