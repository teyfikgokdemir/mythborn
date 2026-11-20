import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { frequencyPrototypePage, frequencyPrototypePath } from '../src/frequency-prototype.js';

const html = frequencyPrototypePage();
const script = readFileSync(new URL('../public/frequency-studio.js', import.meta.url), 'utf8');
const router = readFileSync(new URL('../src/app-router.js', import.meta.url), 'utf8');

assert.equal(frequencyPrototypePath('/frekans-studyo'), true);
assert.equal(frequencyPrototypePath('/frequency-studio'), true);
assert.equal(frequencyPrototypePath('/'), false);
assert.match(html, /<html lang="tr">/);
assert.match(html, /name="robots" content="index,follow,max-image-preview:large"/);
assert.match(html, /rel="canonical" href="https:\/\/mythborn\.co\/frekans-studyo"/);
assert.match(frequencyPrototypePage(true), /name="robots" content="noindex,nofollow"/);
assert.match(html, /<meta name="viewport"/);
assert.match(html, /FREQUENCY STUDIO/);

for (const key of ['174', '396', '432', '528', '639', '852', '963', 'alpha-10']) {
  assert.match(html, new RegExp(`data-frequency="${key}"`), `missing studio frequency card: ${key}`);
}

assert.match(html, /id="play-toggle"/);
assert.match(html, /id="volume"/);
assert.match(html, /id="duration"/);
assert.match(html, /id="freq-cymatics"/);
assert.match(html, /prefers-reduced-motion/);
assert.match(html, /tıbbi tedavi frekansları değildir/);
assert.match(html, /script src="\/frequency-studio\.js" defer/);
assert.match(html, /Mythborn_01_Kozmik_Usturlap\.webp/);
assert.match(html, /id="bilimsel-dinleme"/);
assert.match(html, /Şifa için belirlenmiş bir süre yok/);
assert.match(html, /80 dB\(A\).*40 saat/);
assert.match(html, /90 dB\(A\).*4 saat/);
assert.match(html, /Tarayıcı kulaklığından çıkan gerçek dB\(A\) düzeyini ölçemez/);
assert.match(html, /nccih\.nih\.gov\/health\/music-and-health/);
assert.match(html, /who\.int\/news-room\/questions-and-answers\/item\/deafness-and-hearing-loss-safe-listening/);
assert.doesNotMatch(html, /onload=|autoplay/);

assert.match(script, /\/audio\/432hz\.m4a/);
assert.match(script, /\/audio\/528hz\.m4a/);
assert.match(script, /\/audio\/alpha-10hz\.m4a/);
assert.match(script, /document\.addEventListener\('visibilitychange'/);
assert.doesNotMatch(script, /\.getUserMedia\(/);
assert.match(router, /if\(frequencyPrototypePath\(incoming\.pathname\)/);
assert.match(router, /\/meditasyon-ve-frekans/);

new vm.Script(script, { filename: 'public/frequency-studio.js' });
console.log('frequency-prototype-audit: 2027 unified studio redirect & safe playback PASS');
