const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0a0a0c">
  <meta name="robots" content="index,follow">
  <meta name="description" content="Mythborn is awakening. A new digital world is coming soon.">
  <link rel="canonical" href="https://mythborn.co/">
  <title>Mythborn — Coming Soon</title>
  <style>
    :root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    * { box-sizing: border-box; }
    html, body { min-height: 100%; }
    body {
      margin: 0;
      display: grid;
      place-items: center;
      overflow: hidden;
      background:
        radial-gradient(circle at 18% 18%, rgba(117, 77, 255, .22), transparent 34rem),
        radial-gradient(circle at 82% 72%, rgba(255, 86, 120, .16), transparent 30rem),
        #09090b;
      color: #f7f5ff;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: .18;
      background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: linear-gradient(to bottom, black, transparent 85%);
    }
    main {
      width: min(92vw, 980px);
      padding: 72px 28px;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    .mark {
      width: 68px;
      height: 68px;
      margin: 0 auto 30px;
      border: 1px solid rgba(255,255,255,.22);
      border-radius: 22px;
      display: grid;
      place-items: center;
      background: rgba(255,255,255,.05);
      box-shadow: 0 24px 80px rgba(0,0,0,.36), inset 0 1px rgba(255,255,255,.12);
      backdrop-filter: blur(16px);
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -.08em;
    }
    .eyebrow {
      margin: 0 0 18px;
      color: #b7aecf;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .22em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0;
      font-size: clamp(56px, 12vw, 132px);
      line-height: .86;
      letter-spacing: -.075em;
      text-wrap: balance;
    }
    h1 span {
      display: block;
      background: linear-gradient(110deg, #ffffff 22%, #b8a4ff 58%, #ff91ac 92%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .intro {
      max-width: 610px;
      margin: 30px auto 0;
      color: #aaa6b5;
      font-size: clamp(17px, 2vw, 21px);
      line-height: 1.65;
      text-wrap: balance;
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-top: 38px;
      padding: 11px 16px;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 999px;
      background: rgba(255,255,255,.045);
      color: #d4cfdf;
      font-size: 13px;
      letter-spacing: .04em;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #9a7cff;
      box-shadow: 0 0 20px #9a7cff;
      animation: pulse 2.2s ease-in-out infinite;
    }
    footer {
      position: fixed;
      bottom: 24px;
      left: 0;
      right: 0;
      text-align: center;
      color: #696572;
      font-size: 12px;
      letter-spacing: .12em;
      text-transform: uppercase;
    }
    @keyframes pulse { 50% { transform: scale(.72); opacity: .55; } }
    @media (prefers-reduced-motion: reduce) { .dot { animation: none; } }
    @media (max-width: 560px) {
      main { padding: 56px 18px 90px; }
      .mark { width: 58px; height: 58px; border-radius: 18px; font-size: 26px; }
      .intro { line-height: 1.55; }
    }
  </style>
</head>
<body>
  <main>
    <div class="mark" aria-hidden="true">M</div>
    <p class="eyebrow">A new realm is forming</p>
    <h1>Mythborn<span>is awakening.</span></h1>
    <p class="intro">We are shaping something bold at the edge of myth, identity and digital culture. The first chapter arrives soon.</p>
    <div class="status"><span class="dot" aria-hidden="true"></span>Development in progress</div>
  </main>
  <footer>© 2026 Mythborn</footer>
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