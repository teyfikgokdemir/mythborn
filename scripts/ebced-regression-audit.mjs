import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const src = readFileSync(new URL('../public/ebced.js', import.meta.url), 'utf8');
const table = src.slice(src.indexOf('const values='), src.indexOf('const special='));
const dict = src.slice(src.indexOf('const special='), src.indexOf('const letters ='));
const numBlock = src.slice(src.indexOf('function reduce('), src.indexOf('// Master Abjad routine'));
const routine = src.slice(src.indexOf('function abjad('), src.indexOf('function person('));

assert.ok(table.includes('const values='), 'value table not found');
assert.ok(routine.includes('function abjad('), 'calculator not found');

const context = vm.runInNewContext(table + dict + numBlock + routine + '; ({ abjad, special, calculateNumerology, reduce })');
const calculate = context.abjad;
const calculateNumerology = context.calculateNumerology;
const reduce = context.reduce;
const specialDict = context.special;

// 1. Classical 14 test cases
const cases = [
  ['بسم الله الرحمن الرحيم', {}, 786],
  ['محمد', {}, 92],
  ['توفيق', {}, 596],
  ['گوكدمير', {}, 300],
  ['جانسو', {}, 120],
  ['گور', {}, 226],
  ['امينه', {}, 106],
  ['ش', {}, 300],
  ['ش', { system: 'maghribi' }, 1000],
  ['ص', { system: 'maghribi' }, 60],
  ['ة', { ta: 400 }, 400],
  ['مّ', { shadda: 'once' }, 40],
  ['مّ', { shadda: 'twice' }, 80],
  ['ؤئٱی', {}, 27],
];

for (const [input, options, expected] of cases) {
  const res = calculate(input, options);
  assert.equal(res.total, expected, `Unexpected abjad total: ${input} got ${res.total}, expected ${expected}`);
}

// 2. Unrecognized characters reporting
assert.ok(calculate('توفيق ABC', {}).ignored.length >= 3, 'unrecognized Latin characters must be reported');

// 3. Person 1 Fixture Verification: Teyfik Gökdemir, Anne: Gülten, Doğum: 30.06.1975
assert.equal(specialDict['teyfik'], 'توفيق', 'special dict must include teyfik');
assert.equal(specialDict['gökdemir'], 'گوكدمير', 'special dict must include gökdemir');
assert.equal(specialDict['gülten'], 'گولتن', 'special dict must include gülten');

const teyfikAbjad = calculate(specialDict['teyfik']).total;
const gokdemirAbjad = calculate(specialDict['gökdemir']).total;
const gultenAbjad = calculate(specialDict['gülten']).total;

assert.equal(teyfikAbjad, 596, 'Teyfik abjad must be 596');
assert.equal(gokdemirAbjad, 300, 'Gökdemir abjad must be 300');
assert.equal(gultenAbjad, 506, 'Gülten abjad must be 506');

const teyfikFullAbjad = teyfikAbjad + gokdemirAbjad;
assert.equal(teyfikFullAbjad, 896, 'Teyfik Gökdemir full abjad must be 896');
assert.equal(teyfikAbjad + gultenAbjad, 1102, 'Teyfik + Gülten must be 1102');
assert.equal(teyfikFullAbjad + gultenAbjad, 1402, 'Teyfik Gökdemir + Gülten must be 1402');

const numTeyfik = calculateNumerology('Teyfik Gökdemir', '1975-06-30');
assert.equal(numTeyfik.lifePath, 4, 'Teyfik life path must be 4');
assert.equal(numTeyfik.expressionRoot, 5, 'Teyfik expression must reduce to 5 (77 -> 14 -> 5)');
assert.equal(numTeyfik.soulUrgeRoot, 7, 'Teyfik soul urge must be 7 (34 -> 7)');
assert.equal(numTeyfik.personalityRoot, 7, 'Teyfik personality must be 7 (43 -> 7)');

// 4. Person 2 Fixture Verification: Cansu Gür, Anne: Emine, Doğum: 17.03.1995
assert.equal(specialDict['cansu'], 'جانسو', 'special dict must include cansu');
assert.equal(specialDict['gür'], 'گور', 'special dict must include gür');
assert.equal(specialDict['emine'], 'امينه', 'special dict must include emine');

const cansuAbjad = calculate(specialDict['cansu']).total;
const gurAbjad = calculate(specialDict['gür']).total;
const emineAbjad = calculate(specialDict['emine']).total;

assert.equal(cansuAbjad, 120, 'Cansu abjad must be 120');
assert.equal(gurAbjad, 226, 'Gür abjad must be 226');
assert.equal(emineAbjad, 106, 'Emine abjad must be 106');

const cansuFullAbjad = cansuAbjad + gurAbjad;
assert.equal(cansuFullAbjad, 346, 'Cansu Gür full abjad must be 346');
assert.equal(cansuAbjad + emineAbjad, 226, 'Cansu + Emine must be 226');
assert.equal(cansuFullAbjad + emineAbjad, 452, 'Cansu Gür + Emine must be 452');

const numCansu = calculateNumerology('Cansu Gür', '1995-03-17');
assert.equal(numCansu.lifePath, 8, 'Cansu life path must be 8');
assert.equal(numCansu.expressionRoot, 5, 'Cansu expression must reduce to 5 (32 -> 5)');
assert.equal(numCansu.soulUrgeRoot, 7, 'Cansu soul urge must be 7');
assert.equal(numCansu.personalityRoot, 7, 'Cansu personality must be 7');

// 5. Comparison Combined Sums
assert.equal(teyfikAbjad + cansuAbjad, 716, 'Combined first name abjad must be 716');
assert.equal(teyfikFullAbjad + cansuFullAbjad, 1242, 'Combined full name abjad must be 1242');
assert.equal((teyfikFullAbjad + gultenAbjad) + (cansuFullAbjad + emineAbjad), 1854, 'Combined with mothers must be 1854');

// 6. Master numbers (11, 22, 33) retention
assert.equal(reduce(11, true), 11, 'reduce must preserve master number 11');
assert.equal(reduce(22, true), 22, 'reduce must preserve master number 22');
assert.equal(reduce(33, true), 33, 'reduce must preserve master number 33');
assert.equal(reduce(11, false), 2, 'reduce without preserve must reduce 11 to 2');
assert.equal(reduce(22, false), 4, 'reduce without preserve must reduce 22 to 4');
assert.equal(reduce(33, false), 6, 'reduce without preserve must reduce 33 to 6');

// 7. Small Abjad (Ebced-i Sağîr)
const mohammadSmall = calculate('محمد', {}).totalSmall;
// م=4, ح=8, م=4, د=4 => 4 + 8 + 4 + 4 = 20
assert.equal(mohammadSmall, 20, 'Mohammad small abjad must be 20');

// 8. Route assertions across all 4 locales
const page = readFileSync(new URL('../src/ebced-page.js', import.meta.url), 'utf8');
for (const route of ['/ebced', '/en/ebced', '/gr/ebced', '/es/ebced']) {
  const definition = page.match(/export const ebcedPath=p=>(.*);/);
  assert.ok(definition && new RegExp('^\\/(?:(?:en|gr|es)\\/)?ebced\\/?$').test(route), `route ${route}`);
}

// 9. Template markup assertions
assert.match(page, /name="abjadSystem"/, 'markup must include abjadSystem selector');
assert.match(page, /name="taValue"/, 'markup must include taValue selector');
assert.match(page, /name="shadda"/, 'markup must include shadda selector');
assert.match(page, /noindex,follow/, 'markup must include noindex,follow');
assert.match(page, /id="mode-personal"/, 'markup must include mode-personal');
assert.match(page, /id="mode-compare"/, 'markup must include mode-compare');
assert.match(page, /id="second-person-container"/, 'markup must include second-person-container');
assert.match(page, /WebApplication/, 'markup must include WebApplication schema');

console.log(`ebced-regression-audit: ${cases.length} arithmetic cases, Person 1/2 fixtures, Numerology, Master Numbers, and route assertions PASS`);
