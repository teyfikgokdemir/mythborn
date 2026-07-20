const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#08070b">
  <meta name="robots" content="index,follow">
  <meta name="description" content="Mythborn is coming. Follow the clues, make your guess and request early access to the first release.">
  <link rel="canonical" href="https://mythborn.co/">
  <title>Mythborn — What is being born?</title>
  <style>
    :root {
      color-scheme: dark;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --ink: #f4efe7;
      --muted: #aaa2b0;
      --line: rgba(255,255,255,.14);
      --violet: #a689ff;
      --ember: #ff6b5d;
      --panel: rgba(255,255,255,.035);
    }
    * { box-sizing: border-box; }
    html { min-height: 100%; background: #08070b; scroll-behavior: smooth; }
    body {
      min-height: 100vh;
      margin: 0;
      overflow-x: hidden;
      background:
        radial-gradient(circle at 50% 23%, rgba(97, 62, 159, .23), transparent 31rem),
        radial-gradient(circle at 12% 62%, rgba(255, 107, 93, .1), transparent 25rem),
        radial-gradient(circle at 88% 12%, rgba(140, 102, 255, .12), transparent 23rem),
        #08070b;
      color: var(--ink);
    }
    body::before,
    body::after {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
    }
    body::before {
      opacity: .14;
      background-image:
        linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
      background-size: 54px 54px;
      mask-image: radial-gradient(circle at center, black 0 45%, transparent 82%);
    }
    body::after {
      opacity: .23;
      background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(255,255,255,.012) 4px);
      mix-blend-mode: screen;
    }
    a { color: inherit; }
    .shell {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      padding: 26px clamp(20px, 4vw, 58px) 24px;
    }
    header,
    footer {
      width: min(1180px, 100%);
      margin-inline: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: #77717f;
      font-size: 11px;
      letter-spacing: .18em;
      text-transform: uppercase;
    }
    .brand {
      color: var(--ink);
      font-weight: 800;
      letter-spacing: .22em;
    }
    .signal {
      display: inline-flex;
      align-items: center;
      gap: 9px;
    }
    .signal::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--ember);
      box-shadow: 0 0 18px var(--ember);
      animation: pulse 2.4s ease-in-out infinite;
    }
    main {
      width: min(1120px, 100%);
      margin: auto;
      padding: 58px 0 78px;
      text-align: center;
    }
    .hero { min-height: calc(100vh - 136px); display: grid; place-content: center; }
    .sigil-wrap {
      width: min(35vw, 210px);
      aspect-ratio: 1;
      margin: 0 auto 24px;
      display: grid;
      place-items: center;
      position: relative;
    }
    .sigil-wrap::before,
    .sigil-wrap::after {
      content: "";
      position: absolute;
      inset: 10%;
      border: 1px solid rgba(255,255,255,.18);
      transform: rotate(45deg);
      animation: drift 14s linear infinite;
    }
    .sigil-wrap::after {
      inset: 22%;
      border-color: rgba(166,137,255,.34);
      animation-direction: reverse;
      animation-duration: 10s;
    }
    .sigil {
      position: relative;
      z-index: 2;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(76px, 10vw, 132px);
      line-height: 1;
      letter-spacing: -.12em;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,.82);
      text-shadow: 0 0 45px rgba(166,137,255,.22);
    }
    .eyebrow,
    .section-label {
      margin: 0 0 18px;
      color: #9d94a6;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .34em;
      text-transform: uppercase;
    }
    h1,
    h2 {
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 400;
      text-wrap: balance;
    }
    h1 {
      max-width: 980px;
      margin: 0 auto;
      font-size: clamp(58px, 9vw, 132px);
      line-height: .88;
      letter-spacing: -.065em;
    }
    h1 em {
      display: block;
      font-style: italic;
      color: transparent;
      background: linear-gradient(105deg, #fff 10%, #c4b0ff 55%, #ff8d7d 92%);
      -webkit-background-clip: text;
      background-clip: text;
    }
    h2 {
      max-width: 780px;
      margin: 0 auto;
      font-size: clamp(38px, 6vw, 76px);
      line-height: .98;
      letter-spacing: -.045em;
    }
    .intro,
    .section-copy {
      max-width: 650px;
      margin: 28px auto 0;
      color: var(--muted);
      font-size: clamp(16px, 1.8vw, 20px);
      line-height: 1.65;
      text-wrap: balance;
    }
    .clue-label {
      margin: 42px 0 14px;
      color: #6f6875;
      font-size: 10px;
      letter-spacing: .28em;
      text-transform: uppercase;
    }
    .clues {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .clue {
      padding: 11px 15px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--panel);
      color: #d6cfda;
      font-size: 12px;
      letter-spacing: .08em;
      backdrop-filter: blur(10px);
      transition: transform .3s ease, border-color .3s ease, background .3s ease;
    }
    .clue:hover {
      transform: translateY(-3px);
      border-color: rgba(166,137,255,.5);
      background: rgba(166,137,255,.09);
    }
    .question {
      margin: 34px 0 0;
      color: #ece5ef;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(21px, 2.5vw, 32px);
      font-style: italic;
    }
    .scroll-cue {
      display: inline-block;
      margin-top: 34px;
      color: #706978;
      font-size: 10px;
      letter-spacing: .24em;
      text-decoration: none;
      text-transform: uppercase;
    }
    .reveal-section,
    .access-section {
      padding: clamp(78px, 11vw, 150px) 0;
      border-top: 1px solid rgba(255,255,255,.08);
    }
    .guess-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 44px;
    }
    .guess-card {
      min-height: 190px;
      padding: 28px;
      display: grid;
      align-content: end;
      text-align: left;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.015));
      transition: transform .35s ease, border-color .35s ease, background .35s ease;
    }
    .guess-card:hover {
      transform: translateY(-5px);
      border-color: rgba(166,137,255,.52);
      background: linear-gradient(145deg, rgba(166,137,255,.11), rgba(255,107,93,.035));
    }
    .guess-card span {
      color: #756d7d;
      font-size: 10px;
      letter-spacing: .22em;
      text-transform: uppercase;
    }
    .guess-card strong {
      margin-top: 12px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 28px;
      font-weight: 400;
    }
    .hint-stack {
      max-width: 760px;
      margin: 48px auto 0;
      text-align: left;
    }
    details {
      border-top: 1px solid var(--line);
    }
    details:last-child { border-bottom: 1px solid var(--line); }
    summary {
      min-height: 72px;
      padding: 22px 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      cursor: pointer;
      list-style: none;
      color: #ddd5e1;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .18em;
      text-transform: uppercase;
    }
    summary::-webkit-details-marker { display: none; }
    summary::after {
      content: "+";
      color: var(--violet);
      font-size: 20px;
      font-weight: 400;
    }
    details[open] summary::after { content: "−"; }
    details p {
      margin: 0;
      padding: 0 4px 26px;
      color: var(--muted);
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(20px, 3vw, 28px);
      line-height: 1.45;
    }
    .access-box {
      max-width: 900px;
      margin: 0 auto;
      padding: clamp(34px, 7vw, 78px);
      border: 1px solid rgba(166,137,255,.28);
      border-radius: 28px;
      background:
        radial-gradient(circle at 50% 0, rgba(166,137,255,.16), transparent 55%),
        rgba(255,255,255,.025);
      box-shadow: 0 30px 100px rgba(0,0,0,.28);
    }
    .cta {
      min-height: 52px;
      margin-top: 34px;
      padding: 0 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.22);
      border-radius: 999px;
      background: var(--ink);
      color: #0b0910;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .14em;
      text-decoration: none;
      text-transform: uppercase;
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .cta:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 50px rgba(166,137,255,.22);
    }
    .contact-note {
      margin: 22px 0 0;
      color: #797180;
      font-size: 12px;
    }
    .contact-note a { color: #bdb3c5; text-underline-offset: 4px; }
    .coordinates { font-variant-numeric: tabular-nums; }
    @keyframes pulse { 50% { transform: scale(.7); opacity: .55; } }
    @keyframes drift { to { transform: rotate(405deg); } }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      .signal::before,
      .sigil-wrap::before,
      .sigil-wrap::after { animation: none; }
      *, *::before, *::after { transition-duration: .01ms !important; }
    }
    @media (max-width: 760px) {
      .shell { padding: 20px 18px; }
      header span:last-child { display: none; }
      main { padding: 38px 0 54px; }
      .hero { min-height: calc(100vh - 106px); }
      .sigil-wrap { width: 145px; margin-bottom: 18px; }
      .intro, .section-copy { line-height: 1.55; }
      .guess-grid { grid-template-columns: 1fr; }
      .guess-card { min-height: 138px; }
      footer { justify-content: center; text-align: center; }
      footer span:nth-child(2) { display: none; }
    }
    @media (max-width: 420px) {
      h1 { font-size: clamp(52px, 16vw, 72px); }
      .clue { width: 100%; }
      .access-box { border-radius: 20px; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <header>
      <span class="brand">MYTHBORN</span>
      <span class="signal">Signal detected</span>
      <span>Chapter 00</span>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div>
          <div class="sigil-wrap" aria-hidden="true">
            <div class="sigil">M</div>
          </div>
          <p class="eyebrow">Something uncommon is taking form</p>
          <h1 id="hero-title">You will not need it.<em>You will want it.</em></h1>
          <p class="intro">Not fashion. Not art. Not merely an object. Somewhere between identity, ritual and obsession, Mythborn is preparing its first release.</p>

          <p class="clue-label">Fragments recovered</p>
          <div class="clues" aria-label="Clues about the upcoming collection">
            <span class="clue">WORN OR DISPLAYED?</span>
            <span class="clue">NUMBERED</span>
            <span class="clue">BUILT TO BE KEPT</span>
            <span class="clue">BORN FROM A STORY</span>
          </div>

          <p class="question">What do you think Mythborn will become?</p>
          <a class="scroll-cue" href="#what-is-mythborn">Enter the speculation ↓</a>
        </div>
      </section>

      <section class="reveal-section" id="what-is-mythborn" aria-labelledby="guess-title">
        <p class="section-label">What is Mythborn?</p>
        <h2 id="guess-title">Everyone sees a different artifact.</h2>
        <p class="section-copy">A collectible. A wearable symbol. A fragment from a world that does not exist yet. One theory may be closer than the others.</p>

        <div class="guess-grid" aria-label="Possible interpretations of Mythborn">
          <article class="guess-card"><span>Theory 01</span><strong>A wearable relic</strong></article>
          <article class="guess-card"><span>Theory 02</span><strong>A numbered collectible</strong></article>
          <article class="guess-card"><span>Theory 03</span><strong>A story made physical</strong></article>
        </div>

        <div class="hint-stack">
          <details>
            <summary>Unlock fragment I</summary>
            <p>It will arrive with a name, a number and a past.</p>
          </details>
          <details>
            <summary>Unlock fragment II</summary>
            <p>Some will choose to wear it. Others will refuse to let anyone touch it.</p>
          </details>
          <details>
            <summary>Unlock fragment III</summary>
            <p>The first release will not return in exactly the same form.</p>
          </details>
        </div>
      </section>

      <section class="access-section" aria-labelledby="access-title">
        <div class="access-box">
          <p class="section-label">The first circle</p>
          <h2 id="access-title">Know before the world does.</h2>
          <p class="section-copy">Request early access to the first artifact, private clues and the reveal. Entry does not guarantee ownership.</p>
          <a class="cta" href="mailto:info@mythborn.co?subject=Mythborn%20Early%20Access&body=I%20want%20to%20enter%20the%20first%20circle.">Request early access</a>
          <p class="contact-note">Signals and inquiries: <a href="mailto:info@mythborn.co">info@mythborn.co</a></p>
        </div>
      </section>
    </main>

    <footer>
      <span>© 2026 Mythborn</span>
      <span class="coordinates">41.0082° N · 28.9784° E</span>
      <span>First artifact pending</span>
    </footer>
  </div>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "www.mythborn.co") {
      url.hostname = "mythborn.co";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: https://mythborn.co/sitemap.xml\n", {
        headers: { "content-type": "text/plain; charset=UTF-8" }
      });
    }

    if (url.pathname === "/sitemap.xml") {
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://mythborn.co/</loc></url></urlset>', {
        headers: { "content-type": "application/xml; charset=UTF-8" }
      });
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin",
        "permissions-policy": "camera=(), microphone=(), geolocation=()",
        "content-security-policy": "default-src 'self'; style-src 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
      }
    });
  }
};