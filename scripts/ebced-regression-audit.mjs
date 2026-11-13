import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const src=readFileSync(new URL('../public/ebced.js',import.meta.url),'utf8');
const table=src.slice(src.indexOf('const values='),src.indexOf('const special='));
const routine=src.slice(src.indexOf('function abjad('),src.indexOf('function person('));
assert.ok(table.includes('const values='),'value table not found');
assert.ok(routine.includes('function abjad('),'calculator not found');
const calculate=vm.runInNewContext(table+routine+';abjad');
const cases=[
  ['بسم الله الرحمن الرحيم',{},786],
  ['محمد',{},92],
  ['توفيق',{},596],
  ['گوكدمير',{},300],
  ['جانسو',{},120],
  ['گور',{},226],
  ['امينه',{},106],
  ['ش',{},300],
  ['ش',{system:'maghribi'},1000],
  ['ص',{system:'maghribi'},60],
  ['ة',{ta:400},400],
  ['مّ',{shadda:'once'},40],
  ['مّ',{shadda:'twice'},80],
  ['ؤئٱی',{},27],
];
for(const [input,options,expected] of cases){
  assert.equal(calculate(input,options).total,expected,`Unexpected abjad: ${input}`);
}
assert.ok(calculate('توفيق ABC',{}).ignored.length>=3,'unrecognized Latin characters must be reported');
const page=readFileSync(new URL('../src/ebced-page.js',import.meta.url),'utf8');
for(const route of ['/ebced','/en/ebced','/gr/ebced','/es/ebced']){
  const definition=page.match(/export const ebcedPath=p=>(.*);/);
  assert.ok(definition && new RegExp('^\\/(?:(?:en|gr|es)\\/)?ebced\\/?$').test(route),`route ${route}`);
}
assert.match(page,/name="abjadSystem"/);
assert.match(page,/name="taValue"/);
assert.match(page,/name="shadda"/);
assert.match(page,/noindex,follow/);
console.log(`ebced-regression-audit: ${cases.length} arithmetic examples and route assertions PASS`);
