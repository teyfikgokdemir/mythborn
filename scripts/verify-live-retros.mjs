import https from 'node:https';

https.get('https://mythborn.co/retrolar', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log({
      status: res.statusCode,
      hasLiveRadarInHero: d.includes('ŞU AN GÖKYÜZÜNDE AKTİF RETROLAR'),
      hasHauteHorlogerieHeader: d.includes('astro-header'),
      hasCtaGold: d.includes('astro-cta-gold'),
      hasRetroCalendarSection: d.includes('id="retro-calendar"')
    });
  });
});
