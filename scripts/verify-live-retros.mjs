import https from 'node:https';

const url = 'https://mythborn.co/retrolar';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log({
      status: res.statusCode,
      hasRetroGridTriad: data.includes('retro-grid-triad'),
      hasRetroGridQuad: data.includes('retro-grid-quad'),
      hasRetroEliteCard: data.includes('retro-elite-card'),
      hasGuidanceBox: data.includes('retro-guidance-box'),
      cardCount: (data.match(/class="retro-elite-card"/g) || []).length
    });
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
