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

// 7b. Distinguish the real birth-date Sun sign from a name-based symbolic mapping.
const symbolicBlock = src.slice(src.indexOf('const SYMBOL_INFO ='), src.indexOf('// Render letter breakdown table'));
assert.ok(symbolicBlock.includes('function sunSignByDate'), 'sun sign helper must be present');
const symbolic = vm.runInNewContext(symbolicBlock + '; ({sunSignByDate,renderSymbolicNote})');
assert.equal(symbolic.sunSignByDate('1980-06-30','tr'), 'Yengeç');
assert.equal(symbolic.sunSignByDate('1980-06-30','en'), 'Cancer');
assert.equal(symbolic.sunSignByDate('1980-02-01','tr'), 'Kova');
assert.equal(symbolic.sunSignByDate('1980-11-01','tr'), 'Akrep');
assert.equal(symbolic.sunSignByDate('', 'tr'), null);
const symbolicHtml=symbolic.renderSymbolicNote({date:'1980-06-30',a:{total:896},zodiacIndex:8,elementIndex:4},'tr',{elementNames:{4:'Su (Mâî)'},zodiacNames:{8:'Akrep (Akreb)'}});
assert.match(symbolicHtml,/Güneş burcu/);
assert.match(symbolicHtml,/Yengeç/);
assert.match(symbolicHtml,/Akrep/);
assert.match(symbolicHtml,/896/);
assert.match(symbolicHtml,/Bu sonuçlar neden farklı/);
assert.match(symbolicHtml,/evrensel veya bilimsel/);

// 8. Distinct routes for personal and relationship readings in all four locales.
const page = readFileSync(new URL('../src/ebced-page.js', import.meta.url), 'utf8');
const {ebcedPath,ebcedPage} = await import('../src/ebced-page.js');
for(const [personal,compare] of [
 ['/ebced','/ebced/uyum'],
 ['/en/ebced','/en/ebced/compatibility'],
 ['/gr/ebced','/gr/ebced/symvatotita'],
 ['/es/ebced','/es/ebced/compatibilidad']
]){
 assert.ok(ebcedPath(personal),personal);
 assert.ok(ebcedPath(compare),compare);
 assert.doesNotMatch(ebcedPage(personal,true),/id="second-person-container"/);
 assert.match(ebcedPage(compare,true),/id="comparison-next"/);
 assert.match(ebcedPage(compare,true),/data-analysis-mode="compare"/);
 assert.match(ebcedPage(compare,true),/id="second-person-container"/);
 assert.match(ebcedPage(compare,true),/id="comparison-back"/);
 assert.match(ebcedPage(personal,true),/noindex,follow/);
}
// 8b. Verify explanatory results and styled consent without changing consent actions.
for (const feature of ['renderReadableExplanation','renderPlainSummary','EXPLAINED_METRICS','meaning-row','summaryMetric']) {
  assert.ok(src.includes(feature), 'missing explanation: '+feature);
}
assert.ok(src.includes('html += renderReadableExplanation(p1, loc)'));
assert.ok(src.includes('html += renderReadableExplanation(p2, loc)'));
assert.ok(src.includes('html += renderPlainSummary(p1, loc, p2)'));
for (const item of ['greater','lesser','maternal','expression','soul','personality','life','year']) {
  assert.ok(src.includes(item+':['), 'explanation missing: '+item);
}
for(const token of ['.consent-dialog','[data-consent-reject]','[data-consent-accept]','.meaning-grid','.readable-summary']) {
  assert.ok(page.includes(token), 'style missing: '+token);
}
// Premium UI & guidance: localized interpretation, accessible selector and single-line desktop intro.
for (const lang of ['tr','en','el','es']) {
 const route = {tr:'/ebced',en:'/en/ebced',el:'/gr/ebced',es:'/es/ebced'}[lang];
 const rendered=ebcedPage(route,true);
 assert.match(rendered,/id="ebced-guide-heading"/,`guide missing: ${lang}`);
 assert.match(rendered,/ebced-language-globe/,`language selector missing: ${lang}`);
 assert.match(rendered,/class="ebced-guide-grid"/,`guide layout missing: ${lang}`);
}
assert.match(page,/\.hero \.lead\{max-width:none;width:100%;/);
assert.match(page,/white-space:nowrap/);
assert.match(page,/EBCEd_GUIDE/);
assert.ok(page.includes('Mythborn_04_Isikli_Kitap_Hero.webp'), 'missing Mythborn_04_Isikli_Kitap_Hero asset');
assert.ok(page.includes('Mythborn_05_Ebced_Harf_Tablosu.webp'), 'missing Mythborn_05_Ebced_Harf_Tablosu asset');
assert.ok(page.includes('Mythborn_02_Altin_Kutsal_Geometri.webp'), 'missing Mythborn_02_Altin_Kutsal_Geometri asset');
assert.match(page,/ebced-guide-art/);
assert.match(page,/sayısal değerler atayan tarihsel/);
assert.match(page,/aria-label="Languages"/);

// 9. Template markup assertions
assert.match(page, /name="abjadSystem"/, 'markup must include abjadSystem selector');
assert.match(page, /name="taValue"/, 'markup must include taValue selector');
assert.match(page, /name="shadda"/, 'markup must include shadda selector');
assert.match(page, /noindex,follow/, 'markup must include noindex,follow');
assert.match(page, /analysis-path-nav/, 'markup must include dedicated route tabs');
assert.match(page, /step-progress/, 'markup must include comparison progress');
assert.match(page, /id="second-person-container"/, 'markup must include second-person-container');
assert.match(page, /WebApplication/, 'markup must include WebApplication schema');
assert.match(page, /ebced-header/, 'markup must include approved header');
assert.match(page, /ebced-breadcrumb/, 'markup must include hero breadcrumb');
assert.match(page, /ebced-what/, 'markup must include Ebced Nedir two-column section');
assert.match(page, /ebced-features-row/, 'markup must include 4-icon feature row');
assert.match(page, /ebced-numerology/, 'markup must include Numerology horizontal section');
assert.match(page, /ebced-cta-primary/, 'markup must include primary CTA');
assert.match(page, /ebced-cta-secondary/, 'markup must include secondary CTA');

console.log(`ebced-regression-audit: ${cases.length} arithmetic cases, synthetic fixtures, Numerology, Master Numbers, and route assertions PASS`);
