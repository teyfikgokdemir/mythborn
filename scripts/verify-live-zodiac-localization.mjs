import https from 'node:https';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  // Test Koc SVG directly
  const iconTr = await get('https://mythborn.co/assets/astrology/zodiac/koc.svg');
  const iconEn = await get('https://mythborn.co/assets/astrology/zodiac/aries.svg');
  
  // Test Home HTML
  const home = await get('https://mythborn.co');
  
  const hasAtes = home.data.includes('>ATEŞ<');
  const hasToprak = home.data.includes('>TOPRAK<');
  const hasHava = home.data.includes('>HAVA<');
  const hasSu = home.data.includes('>SU<');
  const hasEnglishElements = home.data.includes('>FIRE<') || home.data.includes('>WATER<');
  
  const hasOncu = home.data.includes('Öncü');
  const hasSabit = home.data.includes('Sabit');
  const hasDegisken = home.data.includes('Değişken');
  const hasEnglishQualities = home.data.includes('cardinal') || home.data.includes('mutable');
  
  const hasVenusTr = home.data.includes('Venüs · Sabit');
  const hasGunesTr = home.data.includes('Güneş · Sabit');
  const hasAyTr = home.data.includes('Ay · Öncü');

  console.log({
    kocSvgStatus: iconTr.status,
    ariesSvgStatus: iconEn.status,
    turkishElements: { hasAtes, hasToprak, hasHava, hasSu, hasEnglishElements },
    turkishQualities: { hasOncu, hasSabit, hasDegisken, hasEnglishQualities },
    turkishRulers: { hasVenusTr, hasGunesTr, hasAyTr }
  });
}

run();
