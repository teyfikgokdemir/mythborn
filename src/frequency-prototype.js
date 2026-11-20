export const frequencyPrototypePath = (path) => path === '/frekans-studyo' || path === '/frequency-studio';

const TRACK_CARDS = [
  { key: '432', hz: '432', unit: 'Hz', label: 'Derin Gevşeme & Denge', note: 'Akort referansı · Akşam dinginliği', active: true },
  { key: '528', hz: '528', unit: 'Hz', label: 'Dönüşüm & Berraklık', note: 'Solfeggio · Ferah başlangıç' },
  { key: '396', hz: '396', unit: 'Hz', label: 'Köklenme & Gölge Bırakma', note: 'Solfeggio · Derin pes doku' },
  { key: '174', hz: '174', unit: 'Hz', label: 'Topraklanma & Sükûnet', note: 'Solfeggio · Bedensel dinginlik' },
  { key: '639', hz: '639', unit: 'Hz', label: 'Kalp Uyumu & Bağ', note: 'Solfeggio · Yumuşak harmoni' },
  { key: '852', hz: '852', unit: 'Hz', label: 'Sezgi & İçsel Netlik', note: 'Solfeggio · Gece tefekkürü' },
  { key: '963', hz: '963', unit: 'Hz', label: 'Yüksek Sessizlik & Bütünlük', note: 'Solfeggio · Meditatif açıklık' },
  { key: 'alpha-10', hz: '10', unit: 'Hz', label: 'Alpha Binaural Odak', note: 'Kulaklık önerilir · Sakin akış' }
];

export const frequencyPrototypePage = (isPreview = false) => `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="${isPreview ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'}">
<link rel="canonical" href="https://mythborn.co/frekans-studyo">
<meta name="theme-color" content="#080b12">
<meta name="description" content="Mythborn Frekans Stüdyosu: 432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz ve Alpha 10 Hz stüdyo kayıtları, canlı kymatik rezonans ve güvenli dinleme rehberi.">
<title>Frekans Stüdyosu — Mythborn</title>
<link rel="icon" type="image/svg+xml" href="/assets/astrology/mythborn-symbol.svg">
<style>
:root{
  color-scheme:dark;
  --bg:#080b12;
  --surface:#0f1522;
  --gold:#d6be92;
  --gold-bright:#ead7b2;
  --cream:#f4f1ea;
  --muted:#a6b0c4;
  --dim:#6f7a90;
  --border:rgba(214,190,146,.2);
  --serif:"Cinzel","Playfair Display",Georgia,"Times New Roman",serif;
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;background:var(--bg);color:var(--cream);font-family:var(--sans);-webkit-font-smoothing:antialiased}
body{min-height:100vh;background:radial-gradient(circle at 50% -18%,#151e34 0%,#0b101b 55%,#080b12 100%);color:var(--cream)}
a{color:inherit;text-decoration:none}
button,select,input{font:inherit}
button:focus-visible,a:focus-visible,select:focus-visible,input:focus-visible{outline:2px solid var(--gold-bright);outline-offset:3px}

/* Unified 2027 Top Navigation */
.mb-nav{position:sticky;top:0;z-index:100;background:rgba(8,11,18,.86);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid rgba(214,190,146,.16)}
.mb-nav-inner{width:min(1240px,calc(100% - 48px));margin:0 auto;height:74px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.mb-brand{display:flex;align-items:center;gap:12px;font-family:var(--serif);letter-spacing:.2em;font-size:17px;color:var(--gold-bright)}
.mb-brand img{width:28px;height:28px}
.mb-links{display:flex;align-items:center;gap:24px;font-size:11.5px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:var(--muted)}
.mb-links a:hover,.mb-links a[aria-current="page"]{color:var(--gold-bright)}
.mb-links a[aria-current="page"]{border-bottom:1px solid var(--gold);padding-bottom:4px}

.mb-wrap{width:min(1200px,calc(100% - 48px));margin:0 auto}
.mb-center{text-align:center}

/* Full-Bleed Luminous Cinema Hero */
.fs-hero{position:relative;isolation:isolate;width:100%;min-height:clamp(360px,48svh,500px);display:flex;align-items:center;padding:clamp(56px,7vw,92px) 0;border-bottom:1px solid rgba(214,190,146,.2);overflow:hidden}
.fs-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 46%;opacity:.82;filter:saturate(1.22) contrast(1.08) brightness(.94);z-index:0;pointer-events:none}
.fs-hero::after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(8,11,18,.5) 0%,rgba(8,11,18,.26) 48%,rgba(8,11,18,.92) 100%),radial-gradient(ellipse 68% 60% at 50% 50%,rgba(8,11,18,.42) 0%,transparent 78%);pointer-events:none}
.fs-hero-inner{position:relative;z-index:2;text-align:center}
.fs-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;border-radius:999px;border:1px solid rgba(234,215,178,.4);background:rgba(8,11,18,.56);backdrop-filter:blur(10px);font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-bright);margin-bottom:20px}
.fs-h1{font-family:var(--serif);font-weight:400;font-size:clamp(34px,4.4vw,60px);line-height:1.1;letter-spacing:-.025em;color:#f6f2ea;margin:0 auto 16px;text-shadow:0 4px 26px rgba(4,7,14,.84)}
.fs-lead{font-size:clamp(14.5px,1.18vw,17px);line-height:1.72;color:#e4e9f2;max-width:860px;margin:0 auto;text-shadow:0 2px 16px rgba(4,7,14,.84)}
@media(min-width:1120px){.fs-lead{max-width:none;white-space:nowrap}}

/* Studio Section */
.fs-section{padding:clamp(46px,6vw,80px) 0}
.fs-head{max-width:820px;margin:0 auto 34px;text-align:center}
.fs-head h2{font-family:var(--serif);font-weight:400;font-size:clamp(26px,3vw,42px);color:#f6f2ea;margin:10px 0 10px}
.fs-head p{font-size:14.5px;line-height:1.74;color:var(--muted)}

[data-spotlight]{position:relative;overflow:hidden}
[data-spotlight]::before{content:'';position:absolute;inset:0;background:radial-gradient(420px circle at var(--mx,50%) var(--my,0%),rgba(214,190,146,.11),transparent 62%);opacity:0;transition:opacity .35s ease;pointer-events:none}
[data-spotlight]:hover::before{opacity:1}

.fs-deck{border-radius:22px;border:1px solid rgba(214,190,146,.24);background:linear-gradient(155deg,rgba(15,21,34,.92),rgba(8,11,18,.98));padding:clamp(24px,3.2vw,42px)}
.fs-deck-top{display:grid;grid-template-columns:minmax(260px,.9fr) minmax(0,1.1fr);gap:28px;align-items:center;padding-bottom:28px;border-bottom:1px solid rgba(214,190,146,.16)}
.fs-cymatics-box{border-radius:16px;border:1px solid rgba(214,190,146,.18);background:radial-gradient(circle at 50% 50%,rgba(16,23,38,.92),rgba(8,11,18,.99));padding:16px;text-align:center}
.fs-cymatics-box canvas{display:block;width:100%;height:220px}
.fs-player-row{display:flex;align-items:center;gap:18px;margin-bottom:20px}
.fs-play-btn{width:68px;height:68px;flex:0 0 68px;border-radius:50%;border:1px solid var(--gold-bright);background:linear-gradient(135deg,#efe0c0 0%,#d6be92 52%,#b09565 100%);color:#080b12;font-size:21px;display:grid;place-items:center;cursor:pointer;transition:transform .2s,filter .2s}
.fs-play-btn:hover{transform:translateY(-1px);filter:brightness(1.06)}
.fs-state{font-size:11px;font-weight:700;letter-spacing:.16em;color:var(--gold)}
.fs-now-title{font-family:var(--serif);font-size:clamp(22px,2.3vw,30px);font-weight:400;color:#f6f2ea;margin-top:4px}
.fs-timer{margin-left:auto;font-family:var(--serif);font-size:28px;color:var(--gold-bright)}

.fs-controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:18px}
.fs-ctrl label{display:block;font-size:11.5px;letter-spacing:.06em;color:var(--gold);margin-bottom:7px}
.fs-ctrl select{width:100%;padding:11px 12px;border-radius:10px;border:1px solid rgba(214,190,146,.28);background:rgba(8,11,18,.88);color:var(--cream);font-size:13.5px}
.fs-ctrl input[type=range]{width:100%;accent-color:#d6be92;margin-top:10px}
.fs-vol-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--dim);margin-top:4px}
.fs-status{font-size:12.5px;color:#c9d1e0;min-height:19px}

/* Live Explainer Strip */
.fs-explainer{margin:24px 0 28px;padding:22px 24px;border-radius:16px;border:1px solid rgba(214,190,146,.18);background:rgba(8,11,18,.68);display:grid;grid-template-columns:minmax(160px,.45fr) minmax(0,1fr);gap:24px;align-items:start}
.fs-exp-type{display:block;font-size:10px;font-weight:700;letter-spacing:.16em;color:var(--gold);margin-bottom:8px}
.fs-exp-hz{display:block;font-family:var(--serif);font-size:clamp(30px,3vw,42px);color:var(--gold-bright);line-height:1.1}
.fs-exp-title{display:block;font-size:14px;color:var(--cream);margin-top:6px}
.fs-exp-copy p{font-size:13.5px;line-height:1.76;color:#cbd3e3;margin:0 0 8px}
.fs-exp-copy strong{color:var(--gold-bright)}
.fs-exp-evidence{font-size:12px!important;color:var(--dim)!important;margin:10px 0 0!important;padding-top:10px;border-top:1px solid rgba(214,190,146,.12)}

/* Symmetrical 4x2 Studio Track Grid */
.fs-grid-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:10px;margin-bottom:16px}
.fs-grid-head h3{font-family:var(--serif);font-weight:400;font-size:22px;color:#f6f2ea}
.fs-grid-head span{font-size:11.5px;color:var(--muted)}
.fs-choices{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.frequency-choice{text-align:left;padding:20px 18px;border-radius:14px;border:1px solid rgba(214,190,146,.18);background:rgba(8,11,18,.74);color:var(--cream);cursor:pointer;display:flex;flex-direction:column;gap:6px;transition:border-color .22s,background .22s,transform .22s}
.frequency-choice strong{font-family:var(--serif);font-size:28px;font-weight:400;color:var(--gold-bright);line-height:1.1}
.frequency-choice strong span{font-family:var(--sans);font-size:12px;color:var(--muted);margin-left:3px}
.frequency-choice b{font-size:13.5px;font-weight:600;color:#f4f1ea;margin-top:4px}
.frequency-choice small{font-size:11.5px;color:var(--muted);line-height:1.5}
.frequency-choice:hover{border-color:rgba(214,190,146,.5);transform:translateY(-2px)}
.frequency-choice[aria-pressed="true"]{border-color:var(--gold);background:rgba(214,190,146,.14)}

/* Scientific Safe-Listening Guide */
.fs-science-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.fs-science-card{padding:28px 24px;border-radius:18px;border:1px solid rgba(214,190,146,.18);background:linear-gradient(160deg,rgba(15,21,34,.88),rgba(8,11,18,.97))}
.fs-science-tag{display:block;font-size:10px;font-weight:700;letter-spacing:.18em;color:var(--gold);margin-bottom:12px}
.fs-science-card h3{font-family:var(--serif);font-weight:400;font-size:22px;color:#f6f2ea;margin:0 0 12px}
.fs-science-card p{font-size:13.5px;line-height:1.78;color:var(--muted)}
.fs-science-card strong{color:var(--gold-bright)}
.fs-sources{display:flex;justify-content:center;flex-wrap:wrap;gap:18px;margin-top:26px;font-size:12.5px;color:var(--muted)}
.fs-sources a{color:var(--gold-bright);border-bottom:1px solid rgba(214,190,146,.4);padding-bottom:3px}

/* Footer */
.fs-footer{border-top:1px solid rgba(214,190,146,.16);padding:34px 0 46px;margin-top:20px}
.fs-footer-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;font-size:12px;color:var(--dim)}
.fs-footer-links{display:flex;gap:18px;flex-wrap:wrap;color:var(--muted)}
.fs-footer-links a:hover{color:var(--gold-bright)}

@media(max-width:1024px){
  .fs-deck-top,.fs-explainer,.fs-science-grid{grid-template-columns:1fr}
  .fs-choices{grid-template-columns:repeat(2,minmax(0,1fr))}
  .fs-controls{grid-template-columns:1fr}
}
@media(max-width:760px){
  .mb-links{display:none}
  .fs-choices{grid-template-columns:1fr}
  .fs-player-row{flex-wrap:wrap}
  .fs-timer{margin-left:0}
}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
</style>
</head>
<body>
<header class="mb-nav">
  <div class="mb-nav-inner">
    <a class="mb-brand" href="/"><img src="/assets/astrology/mythborn-symbol.svg" alt="" width="28" height="28"><span>MYTHBORN</span></a>
    <nav class="mb-links" aria-label="Ana gezinme">
      <a href="/siginak">Sığınak</a>
      <a href="/jung">Carl Jung</a>
      <a href="/rehber">Rehberler</a>
      <a href="/ebced">Ebced</a>
      <a href="/frekans-studyo" aria-current="page">Frekans Stüdyosu</a>
      <a href="/iletisim">İletişim</a>
    </nav>
  </div>
</header>

<main>
  <section class="fs-hero" aria-labelledby="hero-title">
    <img class="fs-hero-bg" src="/images/Mythborn_01_Kozmik_Usturlap.webp" alt="" width="1792" height="1024" fetchpriority="high" decoding="async" aria-hidden="true">
    <div class="mb-wrap fs-hero-inner">
      <span class="fs-eyebrow">✦ FREQUENCY STUDIO · 8 STÜDYO FREKANS KAYDI</span>
      <h1 id="hero-title" class="fs-h1">Görünmeyeni Dinle, Ritmine Dön.</h1>
      <p class="fs-lead">432 Hz, 528 Hz, 396 Hz, 174 Hz, 639 Hz, 852 Hz, 963 Hz ve Alpha 10 Hz stüdyo kayıtları canlı kymatik rezonansla tek stüdyoda.</p>
    </div>
  </section>

  <section class="fs-section" id="studio" aria-label="Frekans stüdyosu">
    <div class="mb-wrap">
      <div class="fs-deck" data-spotlight>
        <div class="fs-deck-top">
          <div class="fs-cymatics-box">
            <canvas id="freq-cymatics" aria-hidden="true"></canvas>
          </div>
          <div>
            <div class="fs-player-row">
              <button id="play-toggle" class="fs-play-btn" type="button" aria-label="Sesi başlat" aria-pressed="false">▶</button>
              <div>
                <div class="fs-state" id="play-state" aria-live="polite">HAZIR · SES KAPALI</div>
                <div class="fs-now-title" id="play-label">432 Hz · Derin Gevşeme &amp; Denge</div>
              </div>
              <div class="fs-timer" id="timer-display">10:00</div>
            </div>

            <div class="fs-controls">
              <div class="fs-ctrl">
                <label for="duration">Oturum Süresi</label>
                <select id="duration">
                  <option value="300">5 dakika</option>
                  <option value="600" selected>10 dakika</option>
                  <option value="900">15 dakika</option>
                  <option value="1200">20 dakika</option>
                </select>
              </div>
              <div class="fs-ctrl">
                <label for="nature-layer">Doğa Sesi Katmanı</label>
                <select id="nature-layer">
                  <option value="off" selected>Sadece Stüdyo Kaydı</option>
                  <option value="rain">+ Gece Yağmuru</option>
                  <option value="ocean">+ Okyanus Dalgaları</option>
                  <option value="wind">+ Gece Rüzgarı</option>
                  <option value="fire">+ Sıcak Ateş</option>
                </select>
              </div>
              <div class="fs-ctrl">
                <label for="volume">Ses Seviyesi</label>
                <input id="volume" type="range" min="0" max="100" step="1" value="68" aria-label="Ses seviyesi">
                <div class="fs-vol-meta"><span>SESSİZ</span><span id="volume-value">%68</span><span>GÜVENLİ</span></div>
              </div>
            </div>
            <p class="fs-status" id="session-status" role="status">Bir frekans seç veya oynat düğmesine dokun. Parçalar yalnızca tıkladığında akmaya başlar.</p>
          </div>
        </div>

        <div class="fs-explainer" aria-live="polite">
          <div>
            <span class="fs-exp-type" id="tone-explainer-type">AKORT REFERANSI · STÜDYO KAYDI</span>
            <strong class="fs-exp-hz" id="tone-explainer-hz">432 Hz</strong>
            <span class="fs-exp-title" id="tone-explainer-title">Derin Gevşeme &amp; Denge</span>
          </div>
          <div class="fs-exp-copy">
            <p id="tone-explainer-meaning">432 Hz, klasik 440 Hz standardına kıyasla daha sıcak ve yumuşak algılanan alternatif A4 akort referansıdır.</p>
            <p id="tone-explainer-listen"><strong>Ne zaman dinlemeli?</strong> Akşam dinginliği, mum odağı ve zihinsel gürültüyü azaltmak için idealdir.</p>
            <p class="fs-exp-evidence" id="tone-explainer-evidence">Not: Kişisel dinleme ve dinginlik amaçlıdır; tıbbi tedavi yerine geçmez.</p>
          </div>
        </div>

        <div class="fs-grid-head">
          <h3>8 Stüdyo Frekans Kaydı</h3>
          <span>Tek tıkla anında akış · iPhone, Android ve Masaüstü uyumlu</span>
        </div>
        <div class="fs-choices" role="group" aria-label="Stüdyo frekans kayıtları">
          ${TRACK_CARDS.map((t) => `
            <button class="frequency-choice" type="button" data-spotlight data-frequency="${t.key}" aria-pressed="${t.active ? 'true' : 'false'}">
              <strong>${t.hz}<span>${t.unit}</span></strong>
              <b>${t.label}</b>
              <small>${t.note}</small>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="fs-section" id="bilimsel-dinleme" aria-labelledby="listening-science-title">
    <div class="mb-wrap">
      <div class="fs-head">
        <span class="fs-eyebrow">✦ BİLİMSEL DİNLEME &amp; İŞİTME GÜVENLİĞİ</span>
        <h2 id="listening-science-title">Ne Kadar Süre ve Nasıl Dinlemeli?</h2>
        <p>Buradaki kayıtlar tıbbi tedavi protokolü değildir; güvenli dinleme sınırları ses şiddetine ve kişisel konfora bağlıdır.</p>
      </div>
      <div class="fs-science-grid">
        <article class="fs-science-card" data-spotlight>
          <span class="fs-science-tag">DOZ KANITI</span>
          <h3>Şifa için belirlenmiş bir süre yok.</h3>
          <p>Solfeggio veya 432 Hz kayıtlarının belirli bir hastalığı tedavi ettiğini gösteren klinik bir reçete bulunmaz. Süre seçiciler yalnızca kişisel odak ve dinlenme kolaylığı içindir.</p>
        </article>
        <article class="fs-science-card" data-spotlight>
          <span class="fs-science-tag">İŞİTME GÜVENLİĞİ</span>
          <h3>Sesi düşük tut; kulak sağlığını koru.</h3>
          <p>Dünya Sağlık Örgütü’ne göre <strong>80 dB(A)</strong> için haftalık 40 saat, <strong>90 dB(A)</strong> için yaklaşık 4 saat referans sınırıdır. Tarayıcı kulaklığından çıkan gerçek dB(A) düzeyini ölçemez; düşük sesle başla.</p>
        </article>
        <article class="fs-science-card" data-spotlight>
          <span class="fs-science-tag">ETİK SINIR</span>
          <h3>Kişisel dinginlik alanıdır.</h3>
          <p>Bu kayıtlar <strong>tıbbi tedavi frekansları değildir</strong>. Kulak çınlaması, baş ağrısı veya rahatsızlık hissedersen hemen durdur. Daha derin nefes ve mum pratiği için Sığınak odalarına geçebilirsin.</p>
        </article>
      </div>
      <div class="fs-sources">
        <a href="https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening" rel="noopener noreferrer" target="_blank">DSÖ · Güvenli Dinleme ↗</a>
        <a href="https://www.nccih.nih.gov/health/music-and-health-what-you-need-to-know" rel="noopener noreferrer" target="_blank">NIH/NCCIH · Müzik ve Sağlık ↗</a>
        <a href="/siginak">Canlı Meditasyon Sığınağı →</a>
        <a href="/rehber/rezonans-kanunu-nedir">Rezonans Kanunu Özeti →</a>
      </div>
    </div>
  </section>
</main>

<footer class="fs-footer">
  <div class="mb-wrap fs-footer-inner">
    <span>© MYTHBORN · FREQUENCY STUDIO</span>
    <div class="fs-footer-links">
      <a href="/">Ana Sayfa</a>
      <a href="/siginak">Sığınak</a>
      <a href="/jung">Carl Jung</a>
      <a href="/rehber">Rehberler</a>
      <a href="/iletisim">İletişim</a>
    </div>
  </div>
</footer>
<script src="/frequency-studio.js" defer></script>
</body>
</html>`;
