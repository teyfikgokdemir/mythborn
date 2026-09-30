const pageChecks = [
  {
    url: 'https://mythborn.co/',
    label: 'Turkish homepage',
    verify: (response, body) =>
      response.ok &&
      body.includes('lang="tr"') &&
      body.includes('window.MYTHBORN_LOCALE="tr"') &&
      body.includes('"inLanguage":"tr"') &&
      body.includes('<link rel="canonical" href="https://mythborn.co/"'),
  },
  {
    url: 'https://mythborn.co/en',
    label: 'English homepage',
    verify: (response, body) =>
      response.ok &&
      body.includes('lang="en"') &&
      body.includes('window.MYTHBORN_LOCALE="en"') &&
      body.includes('"inLanguage":"en"') &&
      !/\b(?:Ücretsiz|Üyelik|Günlük|Doğum|Gökyüzü|Şifre)\b/.test(body.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || body),
  },
  {
    url: 'https://mythborn.co/gr',
    label: 'Greek homepage',
    verify: (response, body) =>
      response.ok &&
      body.includes('lang="el"') &&
      body.includes('window.MYTHBORN_LOCALE="el"') &&
      body.includes('"inLanguage":"el"') &&
      !body.includes('/el/'),
  },
  {
    url: 'https://mythborn.co/es',
    label: 'Spanish homepage',
    verify: (response, body) =>
      response.ok &&
      body.includes('lang="es"') &&
      body.includes('window.MYTHBORN_LOCALE="es"') &&
      body.includes('"inLanguage":"es"'),
  },
  {
    url: 'https://mythborn.co/es/retro-hareketler',
    label: 'Spanish retrograde page',
    verify: (response, body) => {
      const main = body.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || body;
      return response.ok &&
        body.includes('lang="es"') &&
        body.includes('Movimientos retrógrados') &&
        !/[Α-ωΆ-ώ]/u.test(main);
    },
  },
  {
    url: 'https://mythborn.co/es/transitler',
    label: 'Spanish transit page',
    verify: (response, body) => {
      const main = body.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || body;
      return response.ok &&
        body.includes('lang="es"') &&
        body.includes('Tránsitos') &&
        !/[Α-ωΆ-ώ]/u.test(main);
    },
  },
  {
    url: 'https://mythborn.co/sitemap.xml',
    label: 'production sitemap',
    verify: (response, body) =>
      response.ok &&
      body.includes('<loc>https://mythborn.co/</loc>') &&
      body.includes('https://mythborn.co/en') &&
      body.includes('https://mythborn.co/gr') &&
      body.includes('https://mythborn.co/es'),
  },
  {
    url: 'https://mythborn.co/robots.txt',
    label: 'production robots contract',
    verify: (response, body) =>
      response.ok &&
      body.includes('Sitemap: https://mythborn.co/sitemap.xml') &&
      body.includes('Disallow: /api/') &&
      !body.includes('Disallow: /giris'),
  },
  {
    url: 'https://mythborn.co/llms.es.txt',
    label: 'Spanish llms discovery endpoint',
    verify: (response, body) =>
      response.ok &&
      (response.headers.get('content-type') || '').includes('text/plain') &&
      body.includes('plataforma multilingüe gratuita') &&
      body.includes('https://mythborn.co/es/astroloji'),
  },
  {
    url: 'https://mythborn.co/llms.en.txt',
    label: 'English llms discovery endpoint',
    verify: (response, body) =>
      response.ok &&
      body.includes('78-card Tarot encyclopedia') &&
      body.includes('https://mythborn.co/en/astroloji'),
  },
  {
    url: 'https://mythborn.co/llms.gr.txt',
    label: 'Greek llms discovery endpoint',
    verify: (response, body) =>
      response.ok &&
      body.includes('Εγκυκλοπαίδεια 78 καρτών Ταρώ') &&
      body.includes('https://mythborn.co/gr/astroloji'),
  },
  {
    url: 'https://mythborn.co/non-existent-random-page-12345',
    label: 'custom 404 contract',
    verify: (response, body) =>
      response.status === 404 &&
      body.includes('noindex'),
  },
];

const redirectChecks = [
  {
    url: 'http://mythborn.co/astroloji',
    expected: 'https://mythborn.co/astroloji',
    label: 'HTTP to HTTPS canonical redirect',
  },
  {
    url: 'https://www.mythborn.co/astroloji',
    expected: 'https://mythborn.co/astroloji',
    label: 'www to root canonical redirect',
  },
  {
    url: 'https://mythborn.co/search',
    expected: 'https://mythborn.co/arama',
    label: 'legacy search redirect',
  },
  {
    url: 'https://mythborn.co/astroloji/',
    expected: 'https://mythborn.co/astroloji',
    label: 'trailing slash normalization',
  },
];

const goneChecks = [
  {
    url: 'https://mythborn.co/products',
    label: 'retired Shopify products route',
  },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (const check of pageChecks) {
  let passed = false;
  let last = '';
  for (let attempt = 1; attempt <= 12; attempt++) {
    try {
      const response = await fetch(check.url, {
        redirect: 'follow',
        headers: { 'user-agent': 'Mythborn-Production-QA/2.0', 'cache-control': 'no-cache' },
      });
      const body = await response.text();
      last = `status=${response.status} body=${body.slice(0,180).replace(/\s+/g,' ')}`;
      if (check.verify(response, body)) {
        console.log(`PASS: ${check.label} (attempt ${attempt})`);
        passed = true;
        break;
      }
    } catch (error) {
      last = String(error);
    }
    await wait(10000);
  }
  if (!passed) throw new Error(`Production verification failed: ${check.label}. Last response: ${last}`);
}

for (const check of redirectChecks) {
  const response = await fetch(check.url, {
    redirect: 'manual',
    headers: { 'user-agent': 'Mythborn-Production-QA/2.0', 'cache-control': 'no-cache' },
  });
  const location = response.headers.get('location');
  const absolute = location ? new URL(location, check.url).toString() : '';
  if (response.status !== 301 || absolute !== check.expected) {
    throw new Error(`Production verification failed: ${check.label}. status=${response.status} location=${location}`);
  }
  console.log(`PASS: ${check.label}`);
}

for (const check of goneChecks) {
  const response = await fetch(check.url, {
    redirect: 'manual',
    headers: { 'user-agent': 'Mythborn-Production-QA/2.0', 'cache-control': 'no-cache' },
  });
  if (response.status !== 410) {
    throw new Error(`Production verification failed: ${check.label}. status=${response.status}`);
  }
  console.log(`PASS: ${check.label}`);
}
