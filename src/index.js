const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#08070b">
  <meta name="robots" content="index,follow">
  <meta name="description" content="Mythborn is coming. A new object of desire is taking shape.">
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
    }
    * { box-sizing: border-box; }
    html { min-height: 100%; background: #08070b; }
    body {
      min-height: 100vh;
      margin: 0;
      overflow-x: hidden;
      background:
        radial-gradient(circle at 50% 38%, rgba(97, 62, 159, .23), transparent 31rem),
        radial-gradient(circle at 12% 80%, rgba(255, 107, 93, .11), transparent 25rem),
        radial-gradient(circle at 88% 15%, rgba(140, 102, 255, .12), transparent 23rem),
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
    .shell {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      padding: 26px clamp(20px, 4vw, 58px) 24px;
    }
    header,
    footer {
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
      padding: 58px 0 52px;
      text-align: center;
    }
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
    .eyebrow {
      margin: 0 0 18px;
      color: #9d94a6;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .34em;
      text-transform: uppercase;
    }
    h1 {
      max-width: 980px;
      margin: 0 auto;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(58px, 9vw, 132px);
      font-weight: 400;
      line-height: .88;
      letter-spacing: -.065em;
      text-wrap: balance;
    }
    h1 em {
      display: block;
      font-style: italic;
      color: transparent;
      background: linear-gradient(105deg, #fff 10%, #c4b0ff 55%, #ff8d7d 92%);
      -webkit-background-clip: text;
      background-clip: text;
    }
    .intro {
      max-width: 630px;
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
      background: rgba(255,255,255,.035);
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
    .coordinates {
      font-variant-numeric: tabular-nums;
    }
    @keyframes pulse {
      50% { transform: scale(.7); opacity: .55; }
    }
    @keyframes drift {
      to { transform: rotate(405deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .signal::before,
      .sigil-wrap::before,
      .sigil-wrap::after { animation: none; }
    }
    @media (max-width: 640px) {
      .shell { padding: 20px 18px; }
      header span:last-child { display: none; }
      main { padding: 38px 0 44px; }
      .sigil-wrap { width: 145px; margin-bottom: 18px; }
      .intro { line-height: 1.55; }
      footer { justify-content: center; text-align: center; }
      footer span:last-child { display: none; }
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
      <div class="sigil-wrap" aria-hidden="true">
        <div class="sigil">M</div>
      </div>
      <p class="eyebrow">Something uncommon is taking form</p>
      <h1>You will not need it.<em>You will want it.</em></h1>
      <p class="intro">Not fashion. Not art. Not merely an object. Somewhere between identity, ritual and obsession, Mythborn is preparing its first release.</p>

      <p class="clue-label">Fragments recovered</p>
      <div class="clues" aria-label="Clues about the upcoming collection">
        <span class="clue">WORN OR DISPLAYED?</span>
        <span class="clue">NUMBERED</span>
        <span class="clue">BUILT TO BE KEPT</span>
        <span class="clue">BORN FROM A STORY</span>
      </div>

      <p class="question">What do you think Mythborn will become?</p>
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