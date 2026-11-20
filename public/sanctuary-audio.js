(() => {
  'use strict';

  /* =========================================================================
     MYTHBORN SANCTUARY ENGINE — Web Audio API Multi-Layer Synthesizer
     Zero external MP3s, zero auto-play, safe gain ceiling, smooth fade-in/out.
     Powers:
       1. /siginak (Frequency/Binaural + Generative Pad/Bowls + 4 Nature Sounds
          + Trataka Candle, Inner-Self Breath Orb, Theta/Astral Stages, 108 Mala)
       2. /jung (Interactive Archetype & Shadow Mirror + Private Synchronicity Log)
     ========================================================================= */

  const MAX_TONE_GAIN = 0.22;
  const MAX_MUSIC_GAIN = 0.20;
  const MAX_NATURE_GAIN = 0.26;

  // --- Shared Web Audio Engine ---
  const initSanctuaryAudio = () => {
    const root = document.querySelector('[data-sanctuary-app]');
    if (!root) return;

    let ctx = null;
    let masterGain = null;
    let playing = false;
    let timerId = null;
    let remainingSec = 0;

    // Layer nodes
    let toneNodes = [];
    let toneGain = null;

    let musicNodes = [];
    let musicGain = null;
    let bowlInterval = null;

    let natureNodes = [];
    let natureGain = null;

    // UI elements
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

    const TONE_MODES = {
      off: { type: 'off' },
      '432': { type: 'sine', hz: 432 },
      '528': { type: 'sine', hz: 528 },
      '396': { type: 'sine', hz: 396 },
      '639': { type: 'sine', hz: 639 },
      '852': { type: 'sine', hz: 852 },
      '963': { type: 'sine', hz: 963 },
      '174': { type: 'sine', hz: 174 },
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
        masterGain.connect(ctx.destination);
      }
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      return ctx;
    };

    const stopNodes = (list) => {
      list.forEach((n) => {
        try {
          if (typeof n.stop === 'function') n.stop();
        } catch (_) {}
        try {
          if (typeof n.disconnect === 'function') n.disconnect();
        } catch (_) {}
      });
      list.length = 0;
    };

    const sliderGain = (el, cap) => {
      const v = el ? Number(el.value) : 0;
      return Math.max(0, Math.min(1, v / 100)) * cap;
    };

    // --- Noise buffer factory for realistic nature synthesis ---
    const createNoiseBuffer = (audioCtx, kind = 'pink', seconds = 4) => {
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
            data[i] = lastOut * 3.2;
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

    // --- Synthesize single Tibetan singing bowl chime ---
    const triggerBowlChime = (freq = 216, gainPeak = 0.11) => {
      if (!ctx || !masterGain) return;
      const now = ctx.currentTime;
      const partials = [
        { mult: 1, amp: 1.0, dur: 5.5 },
        { mult: 2.756, amp: 0.22, dur: 3.4 },
        { mult: 5.404, amp: 0.06, dur: 1.8 }
      ];
      partials.forEach((p) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * p.mult, now);
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainPeak * p.amp), now + 0.045);
        g.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
        osc.connect(g);
        g.connect(musicGain || masterGain);
        osc.start(now);
        osc.stop(now + p.dur + 0.05);
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
      toneGain.connect(masterGain);
      toneNodes.push(toneGain);

      if (spec.type === 'sine') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(spec.hz, ctx.currentTime);
        osc.connect(toneGain);
        osc.start();
        toneNodes.push(osc);
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
          leftPan.pan.setValueAtTime(-0.95, ctx.currentTime);
          rightPan.pan.setValueAtTime(0.95, ctx.currentTime);
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

    const buildMusicLayer = () => {
      if (bowlInterval) {
        clearInterval(bowlInterval);
        bowlInterval = null;
      }
      stopNodes(musicNodes);
      if (!ctx || !playing) return;
      const mode = musicSelect ? musicSelect.value : 'bowls';
      if (mode === 'off') return;

      musicGain = ctx.createGain();
      musicGain.gain.setValueAtTime(sliderGain(musicVol, MAX_MUSIC_GAIN), ctx.currentTime);
      musicGain.connect(masterGain);
      musicNodes.push(musicGain);

      // Warm breathing lowpass-filtered ambient drone
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(mode === 'temple' ? 420 : 320, ctx.currentTime);
      filter.Q.setValueAtTime(0.7, ctx.currentTime);
      filter.connect(musicGain);
      musicNodes.push(filter);

      const chord = mode === 'temple' ? [108, 162, 216, 270] : [136.1, 204.15, 272.2];
      chord.forEach((hz, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(hz, ctx.currentTime);
        g.gain.setValueAtTime(idx === 0 ? 0.34 : 0.16, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.06 + idx * 0.025, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
        lfo.connect(lfoGain).connect(g.gain);

        osc.connect(g).connect(filter);
        osc.start();
        lfo.start();
        musicNodes.push(osc, g, lfo, lfoGain);
      });

      // Gentle pentatonic Tibetan bowl strikes
      const scale = [216, 243, 288, 324, 384, 432];
      triggerBowlChime(scale[0], 0.14);
      bowlInterval = setInterval(() => {
        if (!playing || !ctx) return;
        const note = scale[Math.floor(Math.random() * scale.length)];
        triggerBowlChime(note, 0.11);
      }, mode === 'temple' ? 7500 : 10500);
    };

    const buildNatureLayer = () => {
      stopNodes(natureNodes);
      if (!ctx || !playing) return;
      const mode = natureSelect ? natureSelect.value : 'rain';
      if (mode === 'off') return;

      natureGain = ctx.createGain();
      natureGain.gain.setValueAtTime(sliderGain(natureVol, MAX_NATURE_GAIN), ctx.currentTime);
      natureGain.connect(masterGain);
      natureNodes.push(natureGain);

      const src = ctx.createBufferSource();
      src.buffer = createNoiseBuffer(ctx, mode === 'ocean' || mode === 'fire' ? 'brown' : 'pink', 5);
      src.loop = true;

      const filter = ctx.createBiquadFilter();
      if (mode === 'rain') {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1150, ctx.currentTime);
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
        filter.Q.setValueAtTime(2.6, ctx.currentTime);
        const lfo = ctx.createOscillator();
        const lfoDepth = ctx.createGain();
        lfo.frequency.setValueAtTime(0.09, ctx.currentTime);
        lfoDepth.gain.setValueAtTime(210, ctx.currentTime);
        lfo.connect(lfoDepth).connect(filter.frequency);
        src.connect(filter).connect(natureGain);
        lfo.start();
        natureNodes.push(lfo, lfoDepth);
      } else if (mode === 'fire') {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(240, ctx.currentTime);
        src.connect(filter).connect(natureGain);

        // Soft crackle layer
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
      if (visualRing) {
        visualRing.classList.toggle('is-playing', active);
      }
      if (stateEl) {
        stateEl.textContent = active
          ? (stateEl.dataset.labelPlaying || 'ACTIVE · RESONANCE')
          : (stateEl.dataset.labelIdle || 'READY · SILENT');
      }
    };

    const stopSession = () => {
      playing = false;
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
      if (bowlInterval) {
        clearInterval(bowlInterval);
        bowlInterval = null;
      }
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
      masterGain.gain.setTargetAtTime(1.0, now, 0.45);

      remainingSec = Number(durationSelect ? durationSelect.value : 600) || 600;
      if (timerDisplay) timerDisplay.textContent = formatTime(remainingSec);
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        remainingSec -= 1;
        if (timerDisplay) timerDisplay.textContent = formatTime(Math.max(0, remainingSec));
        if (remainingSec <= 0) {
          stopSession();
        }
      }, 1000);

      updateUiState(true);
    };

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (playing) stopSession();
        else startSession();
      });
    }

    if (toneSelect) toneSelect.addEventListener('change', () => { if (playing) buildToneLayer(); });
    if (musicSelect) musicSelect.addEventListener('change', () => { if (playing) buildMusicLayer(); });
    if (natureSelect) natureSelect.addEventListener('change', () => { if (playing) buildNatureLayer(); });

    if (toneVol) {
      toneVol.addEventListener('input', () => {
        if (toneGain && ctx) toneGain.gain.setTargetAtTime(sliderGain(toneVol, MAX_TONE_GAIN), ctx.currentTime, 0.08);
      });
    }
    if (musicVol) {
      musicVol.addEventListener('input', () => {
        if (musicGain && ctx) musicGain.gain.setTargetAtTime(sliderGain(musicVol, MAX_MUSIC_GAIN), ctx.currentTime, 0.08);
      });
    }
    if (natureVol) {
      natureVol.addEventListener('input', () => {
        if (natureGain && ctx) natureGain.gain.setTargetAtTime(sliderGain(natureVol, MAX_NATURE_GAIN), ctx.currentTime, 0.08);
      });
    }

    // One-click Sanctuary Presets from the 4 rooms
    root.querySelectorAll('[data-sanc-preset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const preset = btn.dataset.sancPreset;
        if (preset === 'candle') {
          if (toneSelect) toneSelect.value = '432';
          if (musicSelect) musicSelect.value = 'off';
          if (natureSelect) natureSelect.value = 'fire';
        } else if (preset === 'breath') {
          if (toneSelect) toneSelect.value = 'alpha-10';
          if (musicSelect) musicSelect.value = 'bowls';
          if (natureSelect) natureSelect.value = 'wind';
        } else if (preset === 'theta') {
          if (toneSelect) toneSelect.value = 'theta-6';
          if (musicSelect) musicSelect.value = 'temple';
          if (natureSelect) natureSelect.value = 'ocean';
        } else if (preset === 'mantra') {
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
      });
    });

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
        panels.forEach((p) => {
          const active = p.dataset.roomPanel === target;
          p.hidden = !active;
        });
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
        const label = breathPhaseEl.dataset['label_' + st.key] || st.key.toUpperCase();
        breathPhaseEl.textContent = label;
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

    // --- Room 4: 108 Mala / Mantra Counter ---
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
      if (malaRingEl) {
        const pct = Math.min(100, (malaCount / 108) * 100);
        malaRingEl.style.width = `${pct}%`;
      }
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
      malaReset.addEventListener('click', () => {
        malaCount = 0;
        malaRounds = 0;
        renderMala();
      });
    }

    // Safety: silence audio when tab is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && playing) stopSession();
    });
  };

  // --- Carl Jung Interactive Archetype, Shadow & Synchronicity Mirror ---
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

    // Private local-only Synchronicity Journal (zero network requests)
    const form = jungRoot.querySelector('[data-sync-form]');
    const list = jungRoot.querySelector('[data-sync-list]');
    const clearBtn = jungRoot.querySelector('[data-sync-clear]');
    const STORAGE_KEY = 'mythborn_jung_synchronicity_v1';

    const loadEntries = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return [];
      }
    };

    const saveEntries = (entries) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, 30)));
      } catch (_) {}
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
        entries.unshift({
          date: new Date().toLocaleDateString(),
          archetype: archInput ? archInput.value : 'Synchronicity',
          note
        });
        saveEntries(entries);
        if (noteInput) noteInput.value = '';
        renderEntries();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        saveEntries([]);
        renderEntries();
      });
    }

    renderEntries();
  };

  // --- Mouse-tracking spotlight sheen for 2027 cards ---
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
