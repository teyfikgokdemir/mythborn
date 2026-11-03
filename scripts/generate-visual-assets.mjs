import fs from 'node:fs';
import path from 'node:path';

const ZODIAC_DATA = [
  { id: 'aries', symbol: '♈', name: 'Aries', el: 'fire', color: '#ff7b72', path: 'M 30,70 C 30,40 45,25 60,35 C 75,45 60,80 60,90 M 90,70 C 90,40 75,25 60,35' },
  { id: 'taurus', symbol: '♉', name: 'Taurus', el: 'earth', color: '#7ee787', path: 'M 30,30 C 40,50 80,50 90,30 M 60,50 C 40,50 35,70 35,80 C 35,95 85,95 85,80 C 85,70 80,50 60,50 Z' },
  { id: 'gemini', symbol: '♊', name: 'Gemini', el: 'air', color: '#79c0ff', path: 'M 35,25 L 85,25 M 35,95 L 85,95 M 50,25 L 50,95 M 70,25 L 70,95' },
  { id: 'cancer', symbol: '♋', name: 'Cancer', el: 'water', color: '#a5d6ff', path: 'M 40,40 A 15,15 0 1,1 55,55 C 55,65 35,65 30,50 M 80,80 A 15,15 0 1,1 65,65 C 65,55 85,55 90,70' },
  { id: 'leo', symbol: '♌', name: 'Leo', el: 'fire', color: '#ffa657', path: 'M 30,75 A 12,12 0 1,1 42,63 C 50,50 65,30 75,50 C 82,65 80,85 92,85 A 6,6 0 1,0 92,73' },
  { id: 'virgo', symbol: '♍', name: 'Virgo', el: 'earth', color: '#7ee787', path: 'M 30,85 L 30,35 C 30,25 45,25 45,45 L 45,85 M 45,35 C 45,25 60,25 60,45 L 60,85 M 60,35 C 60,25 75,25 75,45 L 75,85 C 75,95 85,95 90,80 L 70,95' },
  { id: 'libra', symbol: '♎', name: 'Libra', el: 'air', color: '#79c0ff', path: 'M 25,85 L 95,85 M 25,65 L 40,65 A 20,20 0 1,1 80,65 L 95,65' },
  { id: 'scorpio', symbol: '♏', name: 'Scorpio', el: 'water', color: '#a5d6ff', path: 'M 25,85 L 25,35 C 25,25 40,25 40,45 L 40,85 M 40,35 C 40,25 55,25 55,45 L 55,85 M 55,35 C 55,25 70,25 70,45 L 70,75 C 70,90 90,85 95,75 M 88,70 L 96,75 L 93,83' },
  { id: 'sagittarius', symbol: '♐', name: 'Sagittarius', el: 'fire', color: '#ff7b72', path: 'M 30,90 L 90,30 M 90,30 L 60,30 M 90,30 L 90,60 M 45,75 L 75,45' },
  { id: 'capricorn', symbol: '♑', name: 'Capricorn', el: 'earth', color: '#7ee787', path: 'M 30,35 L 45,85 L 60,35 C 65,45 70,60 70,75 A 15,15 0 1,0 90,65 C 90,55 75,55 70,75' },
  { id: 'aquarius', symbol: '♒', name: 'Aquarius', el: 'air', color: '#79c0ff', path: 'M 25,45 L 40,35 L 55,45 L 70,35 L 85,45 L 95,35 M 25,75 L 40,65 L 55,75 L 70,65 L 85,75 L 95,65' },
  { id: 'pisces', symbol: '♓', name: 'Pisces', el: 'water', color: '#a5d6ff', path: 'M 40,25 C 50,55 50,65 40,95 M 80,25 C 70,55 70,65 80,95 M 30,60 L 90,60' }
];

console.log('Generating 12 Zodiac SVGs...');
for (const z of ZODIAC_DATA) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="${z.name} Zodiac Glyph">
  <defs>
    <radialGradient id="bg-${z.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#141824" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#07090e" stop-opacity="0.95"/>
    </radialGradient>
    <linearGradient id="gold-${z.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5e6a8"/>
      <stop offset="50%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#997a15"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="56" fill="url(#bg-${z.id})" stroke="url(#gold-${z.id})" stroke-width="1.5"/>
  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(212,175,55,0.2)" stroke-dasharray="2 4"/>
  <path d="${z.path}" fill="none" stroke="url(#gold-${z.id})" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  fs.writeFileSync(path.join('public/assets/astrology/zodiac', `${z.id}.svg`), svg);
}

console.log('Generating 4 Elements SVGs...');
const ELEMENTS = [
  { id: 'fire', name: 'Fire', glyph: '△', color: '#ff7b72', d: 'M 60,25 L 95,85 L 25,85 Z' },
  { id: 'earth', name: 'Earth', glyph: '▽', color: '#7ee787', d: 'M 25,35 L 95,35 L 60,95 Z M 20,70 L 100,70' },
  { id: 'air', name: 'Air', glyph: '△', color: '#79c0ff', d: 'M 60,25 L 95,85 L 25,85 Z M 20,50 L 100,50' },
  { id: 'water', name: 'Water', glyph: '▽', color: '#a5d6ff', d: 'M 25,35 L 95,35 L 60,95 Z' }
];

for (const el of ELEMENTS) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="${el.name} Element Symbol">
  <defs>
    <linearGradient id="grad-${el.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5e6a8"/>
      <stop offset="100%" stop-color="${el.color}"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="56" fill="#080a10" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
  <path d="${el.d}" fill="none" stroke="url(#grad-${el.id})" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  fs.writeFileSync(path.join('public/assets/astrology/elements', `${el.id}.svg`), svg);
}

console.log('Generating 8 Moon Phase SVGs...');
const MOON_PHASES = [
  { id: 'new-moon', name: 'New Moon', fill: 'none', stroke: 'rgba(212,175,55,0.6)' },
  { id: 'waxing-crescent', name: 'Waxing Crescent', path: 'M 60,20 A 40,40 0 0,1 60,100 A 30,40 0 0,0 60,20' },
  { id: 'first-quarter', name: 'First Quarter', path: 'M 60,20 A 40,40 0 0,1 60,100 Z' },
  { id: 'waxing-gibbous', name: 'Waxing Gibbous', path: 'M 60,20 A 40,40 0 0,1 60,100 A 30,40 0 0,1 60,20' },
  { id: 'full-moon', name: 'Full Moon', path: 'M 60,20 A 40,40 0 1,1 59.9,20 Z' },
  { id: 'waning-gibbous', name: 'Waning Gibbous', path: 'M 60,20 A 40,40 0 0,0 60,100 A 30,40 0 0,0 60,20' },
  { id: 'last-quarter', name: 'Last Quarter', path: 'M 60,20 A 40,40 0 0,0 60,100 Z' },
  { id: 'waning-crescent', name: 'Waning Crescent', path: 'M 60,20 A 40,40 0 0,0 60,100 A 30,40 0 0,1 60,20' }
];

for (const m of MOON_PHASES) {
  const inner = m.path
    ? `<path d="${m.path}" fill="#f5e6a8" opacity="0.95"/>`
    : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="${m.name}">
  <circle cx="60" cy="60" r="48" fill="#0c101c" stroke="#d4af37" stroke-width="1.5"/>
  ${inner}
</svg>
`;
  fs.writeFileSync(path.join('public/assets/astrology/moon', `${m.id}.svg`), svg);
}

console.log('Generating Mythborn Celestial Compass Logo...');
const emblemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="Mythborn Celestial Emblem">
  <defs>
    <radialGradient id="nebula-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#19223c" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#06080d" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff5cc"/>
      <stop offset="45%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#8a6d1b"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="94" fill="url(#nebula-bg)" stroke="url(#gold-grad)" stroke-width="2.5"/>
  <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(212,175,55,0.3)" stroke-dasharray="3 4"/>
  <!-- 8-Pointed Celestial Star -->
  <polygon points="100,20 112,88 180,100 112,112 100,180 88,112 20,100 88,88" fill="none" stroke="url(#gold-grad)" stroke-width="2"/>
  <polygon points="100,45 108,92 155,100 108,108 100,155 92,108 45,100 92,92" fill="url(#gold-grad)" opacity="0.8"/>
  <circle cx="100" cy="100" r="10" fill="#06080d" stroke="url(#gold-grad)" stroke-width="2"/>
  <circle cx="100" cy="100" r="4" fill="#fff5cc"/>
</svg>
`;
fs.writeFileSync('public/assets/astrology/mythborn-symbol.svg', emblemSvg);

console.log('Generating 5-Language Open Graph Social Cards...');
const OG_LOCALES = [
  { code: 'tr', title: 'Mythborn — Ultra Elit Astroloji', sub: 'Matematiksel Doğum Haritası & Kozmik Öz-Farkındalık' },
  { code: 'en', title: 'Mythborn — Ultra-Elite Astrology', sub: 'Mathematical Birth Chart & Conscious Cosmic Alignment' },
  { code: 'el', title: 'Mythborn — Αστρολογία Υψηλού Επιπέδου', sub: 'Μαθηματικός Γενέθλιος Χάρτης & Κοσμική Αυτογνωσία' },
  { code: 'es', title: 'Mythborn — Astrología Ultra Élite', sub: 'Carta Natal Matemática y Autoconocimiento Cósmico' },
  { code: 'ar', title: 'Mythborn — منصة الفلك الرفيعة', sub: 'خريطة الميلاد الفلكية الدقيقة والتأمل الذاتي' }
];

for (const og of OG_LOCALES) {
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <radialGradient id="og-glow-${og.code}" cx="80%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#243358" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#06080e" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="og-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdf4cf"/>
      <stop offset="60%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#8b6e16"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#og-glow-${og.code})"/>
  <circle cx="950" cy="315" r="280" fill="none" stroke="rgba(212,175,55,0.25)" stroke-width="2"/>
  <circle cx="950" cy="315" r="220" fill="none" stroke="rgba(212,175,55,0.15)" stroke-dasharray="4 6"/>
  
  <text x="80" y="160" font-family="serif" font-size="24" fill="#d4af37" letter-spacing="4">MYTHBORN.CO · 24H ASTRONOMICAL PRECISION</text>
  <text x="80" y="270" font-family="serif" font-size="56" font-weight="bold" fill="#ffffff">${og.title}</text>
  <text x="80" y="340" font-family="sans-serif" font-size="28" fill="#a0aec0">${og.sub}</text>
  <text x="80" y="520" font-family="sans-serif" font-size="20" fill="#d4af37">✦ Güneş · Ay · Yükselen · 12 Burç · Transitler · 5 Dil</text>
</svg>
`;
  fs.writeFileSync(path.join('public/assets/astrology/og', `og-${og.code}.svg`), ogSvg);
}

console.log('✅ ALL VISUAL ASSETS GENERATED SUCCESSFULLY!');
