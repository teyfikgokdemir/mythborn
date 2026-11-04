import https from 'node:https';

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          has24hPicker: data.includes('astro-time-24h'),
          hasNativeTime: data.includes('type="time"'),
          hasViewport: data.includes('astro-section-viewport'),
          hasArchetypeWrap: data.includes('archetype-art-wrap'),
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  const home = await checkUrl('https://mythborn.co');
  console.log('Home:', home);
  const natal = await checkUrl('https://mythborn.co/dogum-haritasi');
  console.log('Natal:', natal);
}

run();
