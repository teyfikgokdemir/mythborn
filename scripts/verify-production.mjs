const checks = [
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
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
for (const check of checks) {
  let passed = false;
  let last = '';
  for (let attempt = 1; attempt <= 12; attempt++) {
    try {
      const response = await fetch(check.url, { headers: { 'user-agent': 'Mythborn-Production-QA/1.0' } });
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
