import assert from 'node:assert/strict';

const BASE = 'https://mythborn.co';

const testUrls = [
  // 1. Home (5 locales)
  ['/', 'tr', 'Türkçe Ana Sayfa'],
  ['/en', 'en', 'English Home'],
  ['/gr', 'el', 'Greek Home'],
  ['/es', 'es', 'Spanish Home'],
  ['/ar', 'ar', 'Arabic Home'],

  // 2. Jung & Depth Psychology (5 locales)
  ['/jung', 'tr', 'Türkçe Jung'],
  ['/en/jung', 'en', 'English Jung'],
  ['/gr/jung', 'el', 'Greek Jung'],
  ['/es/jung', 'es', 'Spanish Jung'],
  ['/ar/jung', 'ar', 'Arabic Jung'],

  // 3. Meditation & Frequencies (5 locales)
  ['/meditasyon-ve-frekans', 'tr', 'Türkçe Meditasyon'],
  ['/en/meditation-and-frequencies', 'en', 'English Meditation'],
  ['/gr/dialogismos-kai-sychnotites', 'el', 'Greek Meditation'],
  ['/es/meditacion-y-frecuencias', 'es', 'Spanish Meditation'],
  ['/ar/altaamul-waltaraddudat', 'ar', 'Arabic Meditation'],

  // 4. Guides Hub (5 locales)
  ['/rehber', 'tr', 'Türkçe Rehber'],
  ['/en/guides', 'en', 'English Guides'],

  // 5. Guides Monographs
  ['/rehber/rezonans-kanunu-nedir', 'tr', 'Rezonans Rehberi'],
  ['/rehber/spirituel-yasam-nedir', 'tr', 'Spiritüel Yaşam Rehberi'],
  ['/rehber/carl-jung-golge-ve-arketip', 'tr', 'Jung Gölge Rehberi'],
  ['/rehber/meditasyon-ve-nefes-rehberi', 'tr', 'Meditasyon Nefes Rehberi'],
  ['/rehber/frekans-rezonans-ve-beyin-dalgalari', 'tr', 'Frekans Rehberi'],

  // 6. Ebced (Individual + Comparison in 5 locales)
  ['/ebced', 'tr', 'Türkçe Ebced'],
  ['/ebced/uyum', 'tr', 'Türkçe Ebced Uyum'],
  ['/en/ebced', 'en', 'English Abjad'],
  ['/en/ebced/compatibility', 'en', 'English Abjad Compatibility'],
  ['/gr/ebced', 'el', 'Greek Abjad'],
  ['/gr/ebced/symvatotita', 'el', 'Greek Abjad Compatibility'],
  ['/es/ebced', 'es', 'Spanish Abjad'],
  ['/es/ebced/compatibilidad', 'es', 'Spanish Abjad Compatibility'],
  ['/ar/ebced', 'ar', 'Arabic Abjad'],
  ['/ar/ebced/tawafuq', 'ar', 'Arabic Abjad Tawafuq'],

  // 7. Core Tools (5 locales)
  ['/dogum-haritasi', 'tr', 'Doğum Haritası'],
  ['/en/birth-chart', 'en', 'Birth Chart'],
  ['/sinastri', 'tr', 'Sinastri (Burç Uyumu)'],
  ['/en/synastry', 'en', 'Synastry'],
  ['/burclar', 'tr', 'Burçlar'],
  ['/en/zodiac-signs', 'en', 'Zodiac Signs'],
  ['/gokyuzu-takvimi', 'tr', 'Gökyüzü Takvimi'],
  ['/en/sky-calendar', 'en', 'Sky Calendar'],

  // 8. Legal Pages (5 locales)
  ['/kvkk', 'tr', 'KVKK'],
  ['/en/kvkk', 'en', 'KVKK EN'],
  ['/gizlilik', 'tr', 'Gizlilik'],
  ['/en/privacy', 'en', 'Privacy EN'],
  ['/kullanim-kosullari', 'tr', 'Kullanım Koşulları'],
  ['/en/terms', 'en', 'Terms EN'],
  ['/cerezler', 'tr', 'Çerez Politikası'],
  ['/en/cookies', 'en', 'Cookies EN']
];

console.log(`Starting live production inspection across ${testUrls.length} key URLs...`);

let passed = 0;
let errors = [];

for (const [path, expectedLang, label] of testUrls) {
  const url = `${BASE}${path}`;
  try {
    const res = await fetch(url, {
      headers: {
        'cache-control': 'no-cache',
        'user-agent': 'Mythborn-Verification-Agent/2027'
      }
    });

    if (res.status !== 200) {
      errors.push(`[${res.status}] ${label} at ${url}`);
      continue;
    }

    const html = await res.text();

    // Check lang
    if (!html.includes(`lang="${expectedLang}"`)) {
      errors.push(`[LANG MISMATCH] ${label} at ${url} expected lang="${expectedLang}"`);
      continue;
    }

    // Check RTL for Arabic
    if (expectedLang === 'ar' && !html.includes('dir="rtl"')) {
      errors.push(`[RTL MISSING] ${label} at ${url} missing dir="rtl"`);
      continue;
    }

    // Check header
    if (!html.includes('class="astro-header"') && !html.includes('astro-header')) {
      errors.push(`[HEADER MISSING] ${label} at ${url}`);
      continue;
    }

    // Check mobile menu hamburger
    if (!html.includes('astro-menu-btn') && !html.includes('data-drawer-open')) {
      errors.push(`[MOBILE TOGGLE MISSING] ${label} at ${url}`);
      continue;
    }

    // Check scroll-to-top button
    if (!html.includes('astro-scroll-top')) {
      errors.push(`[SCROLL TOP MISSING] ${label} at ${url}`);
      continue;
    }

    // Check no undefined
    if (/\bundefined\b/i.test(html) && !html.includes('typeof undefined')) {
      errors.push(`[UNDEFINED LEAK] ${label} at ${url}`);
      continue;
    }

    passed++;
    console.log(`✓ PASS: ${label} (${path})`);
  } catch (err) {
    errors.push(`[EXCEPTION] ${label} at ${url}: ${err.message}`);
  }
}

console.log(`\n========================================`);
console.log(`Live Inspection Result: ${passed}/${testUrls.length} passed.`);
if (errors.length > 0) {
  console.log('ERRORS:');
  errors.forEach(e => console.log(' - ' + e));
  process.exit(1);
} else {
  console.log('ALL LIVE PAGES VERIFIED SUCCESSFULLY!');
}
