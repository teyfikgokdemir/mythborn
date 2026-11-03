const BASE = 'https://mythborn.co';

async function testProd() {
  console.log('Testing live production assets and HTML at ' + BASE);
  
  // 1. Check generated images
  for (const img of [
    '/images/astrology/hero-celestial-cosmos.jpg',
    '/images/astrology/sun-archetype.jpg',
    '/images/astrology/moon-archetype.jpg',
    '/images/astrology/ascendant-archetype.jpg',
    '/images/astrology/zodiac-celestial-tapestry.jpg'
  ]) {
    const res = await fetch(BASE + img + '?t=' + Date.now());
    console.log(img, 'status:', res.status, 'size:', res.headers.get('content-length'));
  }
  
  // 2. Check HTML content
  const html = await fetch(BASE + '/?t=' + Date.now()).then(r => r.text());
  console.log('HTML contains hero-celestial-cosmos:', html.includes('hero-celestial-cosmos.jpg'));
  console.log('HTML contains sun-archetype:', html.includes('sun-archetype.jpg'));
  console.log('HTML contains zodiac-celestial-tapestry:', html.includes('zodiac-celestial-tapestry.jpg'));
  console.log('HTML contains astro-nav-dropdown:', html.includes('astro-nav-dropdown'));
  console.log('Brand logo has MYTHBORN:', html.includes('class="astro-brand-name">MYTHBORN</span>'));
}

testProd().catch(console.error);
