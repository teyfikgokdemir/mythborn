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

// 3–5. Synthetic test cases only: do not commit real persons' names or birth dates.
const syntheticFirst = calculate('علي').total; // ع=70 ل=30 ي=10
const syntheticSecond = calculate('مينا').total; // م=40 ي=10 ن=50 ا=1
const syntheticMother = calculate('فاطمة', {ta:5}).total;
assert.equal(syntheticFirst,110);
assert.equal(syntheticSecond,101);
assert.equal(syntheticMother,135);
assert.equal(syntheticFirst+syntheticSecond,211);
assert.equal(syntheticFirst+syntheticSecond+syntheticMother,346);
const exampleOne=calculateNumerology('Ada Deniz','2000-01-01');
assert.equal(exampleOne.lifePath,4);
assert.ok(Number.isInteger(exampleOne.expressionRoot));
const exampleTwo=calculateNumerology('Mina Kara','1995-03-17');
assert.equal(exampleTwo.lifePath,8);
assert.ok(Number.isInteger(exampleTwo.expressionRoot));

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

console.log(`ebced-regression-audit: ${cases.length} arithmetic cases, synthetic fixtures, Numerology, Master Numbers, and route assertions PASS`);
