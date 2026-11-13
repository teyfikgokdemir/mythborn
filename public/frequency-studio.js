(() => {
  'use strict';
  const buttons = [...document.querySelectorAll('[data-frequency]')];
  const trigger = document.getElementById('play-toggle');
  const state = document.getElementById('play-state');
  const label = document.getElementById('play-label');
  const status = document.getElementById('session-status');
  const duration = document.getElementById('duration');
  const volume = document.getElementById('volume');
  const volValue = document.getElementById('volume-value');
  const art = document.getElementById('visual-world');
  if (!trigger || !window.AudioContext && !window.webkitAudioContext) {
    if (trigger) {
      trigger.disabled = true;
      status.textContent = 'Bu tarayıcıda Web Audio desteği bulunmuyor.';
    }
    return;
  }
  let chosen = 432;
  let chosenLabel = 'Alternatif Akort (A4)';
  let ctx = null;
  let oscillator = null;
  let masterGain = null;
  let startedAt = 0;
  let sessionTimer = null;
  let ticker = null;
  let playing = false;
  const message = (value) => { status.textContent = value; };
  const setPlaying = (value) => {
    playing = value;
    art.classList.toggle('is-playing', value);
    document.body.classList.toggle('is-playing', value);
    trigger.textContent = value ? 'Ⅱ' : '▶';
    trigger.setAttribute('aria-label', value ? 'Sesi durdur' : 'Sesi başlat');
    trigger.setAttribute('aria-pressed', String(value));
    state.textContent = value ? 'CANLI SES · DİNLENİYOR' : 'HAZIR · SES KAPALI';
    buttons.forEach(button => { button.disabled = false; });
  };
  // Web Audio linear amplitude: capped at 0.25 (-12 dBFS peak) to avoid clipping.
  const MAX_GAIN = 0.25;
  const gainLevel = () => (Number(volume.value) / 30) * MAX_GAIN;
  const stop = async (explanation = 'Ses durduruldu.') => {
    clearTimeout(sessionTimer);
    clearInterval(ticker);
    sessionTimer = null;
    ticker = null;
    if (masterGain && ctx) {
      const now = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setTargetAtTime(0, now, .12);
    }
    const oldCtx = ctx;
    const oldOscillator = oscillator;
    ctx = null;
    oscillator = null;
    masterGain = null;
    setPlaying(false);
    message(explanation);
    if (oldCtx) {
      try {
        // Allow a gentle fade rather than an abrupt audio click.
        await new Promise(resolve => setTimeout(resolve, 380));
        try { oldOscillator?.stop(); } catch { /* Oscillator may have stopped. */ }
        if (oldCtx.state !== 'closed') await oldCtx.close();
      } catch { /* AudioContext may close on navigation. */ }
    }
  };
  const start = async () => {
    if (playing) return stop();
    trigger.disabled = true;
    message('Ses oluşturuluyor…');
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      ctx = new Audio();
      await ctx.resume();
      masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.setTargetAtTime(gainLevel(), ctx.currentTime, .25);
      masterGain.connect(ctx.destination);
      // ONE sine oscillator at the selected frequency: no subharmonics,
      // additional oscillators, detuning or effects. The Hz label matches
      // the generated waveform's only periodic component.
      oscillator = ctx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(chosen, ctx.currentTime);
      oscillator.connect(masterGain);
      oscillator.start();
      setPlaying(true);
      startedAt = Date.now();
      const total = Number(duration.value) * 1000;
      sessionTimer = setTimeout(() => { void stop('Oturum tamamlandı. Ses güvenli şekilde kapatıldı.'); }, total);
      const updateTime = () => {
        const elapsed = Math.min(Number(duration.value), Math.floor((Date.now() - startedAt) / 1000));
        const remaining = Math.max(0, Math.ceil(total / 1000) - elapsed);
        message('Kalan süre: ' + Math.floor(remaining / 60) + ':' + String(remaining % 60).padStart(2, '0') + ' · İstediğin an durdurabilirsin.');
      };
      updateTime();
      ticker = setInterval(updateTime, 1000);
    } catch {
      await stop('Ses başlatılamadı. Tarayıcının ses izinlerini kontrol et.');
    } finally {
      trigger.disabled = false;
    }
  };
  trigger.addEventListener('click', () => { void start(); });
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const wasPlaying = playing;
      chosen = Number(button.dataset.frequency);
      chosenLabel = button.dataset.label;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      label.textContent = chosen + ' Hz · ' + chosenLabel;
      if (wasPlaying) {
        void stop('Frekans değiştirildi. Yeni sesi başlatabilirsin.');
      }
    });
  }
  volume.addEventListener('input', () => {
    const value = Number(volume.value);
    volume.setAttribute('aria-valuetext', 'Yüzde ' + value);
    volValue.textContent = value + ' / 30';
    if (ctx && masterGain && playing) {
      const now = ctx.currentTime;
      masterGain.gain.setTargetAtTime(gainLevel(), now, .14);
    }
  });
  duration.addEventListener('change', () => {
    if (playing) void stop('Süre değiştirildi. Yeni oturumu başlatabilirsin.');
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && playing) void stop('Sekmeden ayrıldığın için ses durduruldu.');
  });
  window.addEventListener('pagehide', () => {
    clearTimeout(sessionTimer);
    clearInterval(ticker);
    if (ctx && ctx.state !== 'closed') void ctx.close();
  });
})();
