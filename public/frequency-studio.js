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
  // Editorial descriptions, not medical claims. One selected frequency === one real sine tone.
  const TONE_GUIDE = Object.freeze({
    174: {type:'MODERN SOLFEGGIO ATFI',title:'Topraklanma',meaning:'Popüler Solfeggio listelerinde 174 Hz, “topraklanma” ve güven hissiyle ilişkilendirilir. Bu modern bir sembolik anlatıdır.',listen:'Daha pes bir saf tonu dinlemek ve yüksek frekanslarla ses perdesi farkını keşfetmek için.',evidence:'174 Hz’in ağrıyı giderdiği veya güven duygusu yarattığı bilimsel olarak kanıtlanmış değildir.'},
    285: {type:'MODERN SOLFEGGIO ATFI',title:'Yenilenme',meaning:'285 Hz, modern frekans içeriklerinde “yenilenme” veya “onarım” temasıyla sunulur. Bu ad, fiziksel bir etki ölçümü değildir.',listen:'Farklı bir orta-alt ses perdesini deneyip kişisel dinleme tercihlerini karşılaştırmak için.',evidence:'285 Hz’in doku yenilediği veya hastalıkları iyileştirdiğine ilişkin güvenilir klinik kanıt yoktur.'},
    396: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'Korku ve suçluluktan özgürleşme',meaning:'396 Hz, Solfeggio içeriklerinde korku ve suçluluğu bırakma fikriyle ilişkilendirilir. Bu, sembolik bir temadır.',listen:'Düşüncelerini gözlemlemek için kısa bir kişisel ritüele eşlik eden sesi keşfetmek için.',evidence:'396 Hz’in korku veya suçluluk duygusunu tedavi ettiği gösterilmiş değildir.'},
    417: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'Değişim ve dönüşüm',meaning:'417 Hz, modern Solfeggio anlatılarında yeni başlangıç ve değişim temalarını temsil eder.',listen:'Bir hedef üzerine düşünürken veya farklı tonları karşılaştırırken kişisel arka plan sesi olarak denemek için.',evidence:'417 Hz’in psikolojik dönüşüm sağladığına yönelik kanıtlanmış bir neden-sonuç ilişkisi yoktur.'},
    432: {type:'AKORT REFERANSI',title:'Alternatif A4 akordu',meaning:'432 Hz, bazı müzisyenlerin kullandığı alternatif A4 akort referansıdır. Tek başına dinlenen ton, 432 Hz’e akortlanmış bir müzik parçası değildir.',listen:'440 Hz ile ses perdesini karşılaştırmak, kişisel dinleme tercihini keşfetmek için.',evidence:'432 Hz sesinin özgün bir şifa etkisi veya başka frekanslara üstünlüğü kanıtlanmış değildir.'},
    440: {type:'AKORT REFERANSI',title:'Yaygın A4 akordu',meaning:'440 Hz, müzikte yaygın kullanılan A4 akort referansıdır. Burada çalınan ses, müziğin tamamı değil tek bir sinüs tonudur.',listen:'432 Hz tonuyla karşılaştırıp küçük bir perde farkını kulağınla tanımak için.',evidence:'440 Hz’in tek başına terapötik bir faydası olduğu iddia edilmez.'},
    528: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'Sevgi ve dönüşüm',meaning:'528 Hz, popüler kaynaklarda “sevgi frekansı” veya “dönüşüm frekansı” olarak anılır. Bu isimler kültürel yorumlardır.',listen:'Daha tiz bir tonu deneyip kendi algını gözlemlemek veya kısa bir dikkat egzersizine ses eklemek için.',evidence:'528 Hz’in DNA onardığı, stres tedavi ettiği veya insanı iyileştirdiği yönündeki iddialar güvenilir biçimde doğrulanmamıştır.'},
    639: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'İlişkiler ve uyum',meaning:'639 Hz, bazı modern Solfeggio listelerinde ilişkiler, empati ve uyum kavramlarıyla eşleştirilir.',listen:'Bağ kurma temasını düşünmek ya da saf tonlar arasındaki perde değişimini keşfetmek için.',evidence:'639 Hz’in ilişkileri veya kişiler arası iletişimi düzelttiği bilimsel olarak gösterilmemiştir.'},
    741: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'İfade ve arınma',meaning:'741 Hz, popüler Solfeggio anlatılarında ifade, netlik ve arınma sembolleriyle birlikte kullanılır.',listen:'Yüksek bir ses perdesini keşfetmek ve kişisel ses tercihlerini karşılaştırmak için.',evidence:'741 Hz’in toksin attığı ya da zihni arındırdığı iddialarına yönelik güvenilir klinik kanıt bulunmuyor.'},
    852: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'Sezgi ve farkındalık',meaning:'852 Hz, popüler anlatılarda sezgi ve farkındalık kavramlarıyla ilişkilendirilir; geleneksel bir bilimsel sınıflandırma değildir.',listen:'Daha tiz bir sinüs tonunu deneyip kısa süreli dikkati ses üzerine yöneltmek için.',evidence:'852 Hz’in sezgiyi veya bilişsel performansı geliştirdiği kanıtlanmış değildir.'},
    963: {type:'POPÜLER SOLFEGGIO SEMBOLİZMİ',title:'Bütünlük ve birlik',meaning:'963 Hz, modern Solfeggio içeriklerinde birlik ve bütünlük temalarının sembolik karşılığı olarak anılır.',listen:'Listedeki en tiz sinüs seslerinden birini deneyip alt frekanslarla algısal farkını karşılaştırmak için.',evidence:'963 Hz’in bilinç seviyesini değiştirdiği ya da özel şifa sağladığına dair güvenilir bilimsel kanıt yoktur.'}
  });
  const toneType = document.getElementById('tone-explainer-type');
  const toneHz = document.getElementById('tone-explainer-hz');
  const toneTitle = document.getElementById('tone-explainer-title');
  const toneMeaning = document.getElementById('tone-explainer-meaning');
  const toneListen = document.getElementById('tone-explainer-listen');
  const toneEvidence = document.getElementById('tone-explainer-evidence');
  const updateToneGuide = (hz) => {
    const guide = TONE_GUIDE[hz];
    if (!guide || !toneHz) return;
    toneType.textContent = guide.type;
    toneHz.textContent = hz + ' Hz';
    toneTitle.textContent = guide.title;
    toneMeaning.textContent = guide.meaning;
    toneListen.textContent = 'Neden dinlemeli? ' + guide.listen;
    toneEvidence.textContent = 'Bilimsel durum: ' + guide.evidence;
  };

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
  updateToneGuide(chosen);
  trigger.addEventListener('click', () => { void start(); });
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const wasPlaying = playing;
      chosen = Number(button.dataset.frequency);
      chosenLabel = button.dataset.label;
      updateToneGuide(chosen);
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
