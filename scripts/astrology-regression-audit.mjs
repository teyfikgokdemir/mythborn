import assert from 'node:assert/strict';
import { Body, Ecliptic, GeoVector } from 'astronomy-engine';
import {
  calculateChartAngles,
  localToUtc,
  normalizeLongitude,
  zodiacPlacement,
  zonedParts,
  lahiriAyanamsha,
  siderealLongitude,
  nakshatraPlacement,
  vimshottariTimeline
} from '../src/astrology.js';

const circularDistance=(a,b)=>Math.min(Math.abs(a-b),360-Math.abs(a-b));
const approx=(actual,expected,tolerance,message)=>assert.ok(circularDistance(actual,expected)<=tolerance,`${message}: ${actual}° (expected ${expected}° ±${tolerance}°)`);
const opposition=(first,second,message)=>approx(second,normalizeLongitude(first+180),1e-9,message);
const assertAngleGeometry=(date,latitude,longitude,label)=>{
  const angles=calculateChartAngles(date,latitude,longitude);
  for(const [name,value] of Object.entries(angles)){
    assert.ok(value>=0&&value<360,`${label} ${name} is normalized`);
    const placement=zodiacPlacement(value);
    assert.ok(placement.degree>=0&&placement.degree<30,`${label} ${name} sign degree is normalized`);
    assert.equal(placement.sign,zodiacPlacement(placement.longitude).sign,`${label} ${name} sign matches longitude`);
  }
  opposition(angles.ascendant,angles.descendant,`${label} DESC opposes ASC`);
  opposition(angles.midheaven,angles.imumCoeli,`${label} IC opposes MC`);
  return angles;
};

const istanbul1975=localToUtc('1975-06-30','00:30','Europe/Istanbul');
assert.equal(istanbul1975.toISOString(),'1975-06-29T21:30:00.000Z','1975 Istanbul uses the historical IANA UTC+3 summer offset');
assert.deepEqual(zonedParts(istanbul1975,'Europe/Istanbul'),{month:6,day:30,year:1975,hour:0,minute:30,second:0});

const exactAngles=assertAngleGeometry(istanbul1975,41.01384,28.94966,'Istanbul 1975');
approx(exactAngles.ascendant,357.9,0.35,'Istanbul 1975 ASC');
approx(exactAngles.descendant,177.9,0.35,'Istanbul 1975 DESC');
approx(exactAngles.midheaven,268.9,0.35,'Istanbul 1975 MC');
approx(exactAngles.imumCoeli,88.9,0.35,'Istanbul 1975 IC');
assert.equal(zodiacPlacement(exactAngles.ascendant).sign,'Balık');
assert.equal(zodiacPlacement(exactAngles.descendant).sign,'Başak');
assert.equal(zodiacPlacement(exactAngles.midheaven).sign,'Yay');
assert.equal(zodiacPlacement(exactAngles.imumCoeli).sign,'İkizler');

const planetLongitude=(body,date)=>normalizeLongitude(Ecliptic(GeoVector(body,date,true)).elon);
assert.equal(zodiacPlacement(planetLongitude(Body.Sun,istanbul1975)).sign,'Yengeç','Exact case Sun is Cancer');
assert.equal(zodiacPlacement(planetLongitude(Body.Moon,istanbul1975)).sign,'Balık','Exact case Moon is Pisces');

assert.equal(localToUtc('1975-01-15','00:30','Europe/Istanbul').toISOString(),'1975-01-14T22:30:00.000Z','Historical Istanbul winter offset is UTC+2');
assert.equal(localToUtc('2026-07-28','12:00','Europe/Istanbul').toISOString(),'2026-07-28T09:00:00.000Z','Modern Istanbul is UTC+3');
assert.equal(localToUtc('2024-03-31','01:30','Europe/Berlin').toISOString(),'2024-03-31T00:30:00.000Z','DST boundary before spring jump');
assert.equal(localToUtc('2024-03-31','03:30','Europe/Berlin').toISOString(),'2024-03-31T01:30:00.000Z','DST boundary after spring jump');
assert.throws(()=>localToUtc('2024-03-31','02:30','Europe/Berlin'),/mevcut değil/,'A nonexistent DST wall time is rejected');
assert.equal(localToUtc('2026-01-01','00:15','Asia/Tokyo').toISOString(),'2025-12-31T15:15:00.000Z','UTC-east conversion crosses to the previous UTC day');
assert.equal(localToUtc('2026-01-01','23:45','America/New_York').toISOString(),'2026-01-02T04:45:00.000Z','UTC-west conversion crosses to the next UTC day');

assertAngleGeometry(localToUtc('2026-07-28','23:58','Europe/Istanbul'),41.01384,28.94966,'Northern hemisphere');
assertAngleGeometry(localToUtc('2026-07-28','23:58','Australia/Sydney'),-33.8688,151.2093,'Southern hemisphere');
assert.equal(normalizeLongitude(-0.1),359.9);
assert.equal(normalizeLongitude(360),0);
assert.equal(zodiacPlacement(-0.1).sign,'Balık');
assert.equal(zodiacPlacement(360).sign,'Koç');
assert.equal(zodiacPlacement(-0.1).degree,29.9);
assert.equal(zodiacPlacement(360).degree,0);

const vedicReferences=[
  {label:'Istanbul 1990',date:new Date('1990-01-15T10:00:00.000Z'),ayanamsha:23.71795796,sun:271.27194203,moon:142.73751850,nakshatra:'Purva Phalguni',pada:3},
  {label:'Berlin DST before jump',date:new Date('2024-03-31T00:30:00.000Z'),ayanamsha:24.19578721,sun:346.59143329,moon:230.88556308,nakshatra:'Jyeshtha',pada:2},
  {label:'Sydney southern hemisphere',date:new Date('2026-07-28T13:58:00.000Z'),ayanamsha:24.22828206,sun:101.29081400,moon:269.81925100,nakshatra:'Uttara Ashadha',pada:1},
  {label:'Time-unknown noon proxy',date:new Date('2000-01-01T10:00:00.000Z'),ayanamsha:23.85708917,sun:256.43074800,moon:198.46826800,nakshatra:'Swati',pada:4}
];
for(const reference of vedicReferences){
  approx(lahiriAyanamsha(reference.date),reference.ayanamsha,0.0001,`${reference.label} Lahiri ayanamsha`);
  approx(siderealLongitude(Body.Sun,reference.date),reference.sun,0.02,`${reference.label} sidereal Sun vs Swiss Ephemeris reference`);
  approx(siderealLongitude(Body.Moon,reference.date),reference.moon,0.02,`${reference.label} sidereal Moon vs Swiss Ephemeris reference`);
  const moonPlacement=nakshatraPlacement(siderealLongitude(Body.Moon,reference.date));
  assert.equal(moonPlacement.name,reference.nakshatra,`${reference.label} Moon nakshatra`);
  assert.equal(moonPlacement.pada,reference.pada,`${reference.label} Moon nakshatra pada`);
}

const nakshatraWidth=360/27;
assert.deepEqual(nakshatraPlacement(0),{name:'Ashwini',index:1,pada:1,degree:0,longitude:0},'Nakshatra zero boundary');
assert.equal(nakshatraPlacement(nakshatraWidth-1e-9).name,'Ashwini','Nakshatra upper epsilon stays in Ashwini');
assert.equal(nakshatraPlacement(nakshatraWidth-1e-9).pada,4,'Nakshatra upper epsilon is pada 4');
assert.equal(nakshatraPlacement(nakshatraWidth+1e-12).name,'Bharani','Nakshatra boundary plus epsilon advances to Bharani');
assert.equal(nakshatraPlacement(nakshatraWidth+1e-12).pada,1,'Nakshatra boundary plus epsilon starts pada 1');
assert.equal(nakshatraPlacement(360).name,'Ashwini','Nakshatra 360° normalizes to Ashwini');

const dashaBirth=new Date('1990-01-15T10:00:00.000Z');
const atAshwini=vimshottariTimeline(dashaBirth,0,new Date('1990-01-15T10:00:00.000Z'));
assert.equal(atAshwini.periods[0].lord,'Ketu','Ashwini starts with Ketu mahadasha');
assert.equal(atAshwini.periods[0].durationYears,7,'Ashwini at 0° receives the full Ketu period');
const atBharani=vimshottariTimeline(dashaBirth,nakshatraWidth+1e-12,new Date('1990-01-15T10:00:00.000Z'));
assert.equal(atBharani.periods[0].lord,'Venus','Bharani starts with Venus mahadasha');
assert.equal(atBharani.periods[0].durationYears,20,'Bharani at 0° receives the full Venus period');
assert.equal(atBharani.periods.slice(0,9).reduce((sum,period)=>sum+period.durationYears,0),120,'One Vimshottari cycle totals 120 years');

console.log(`Astrology regression audit passed: Istanbul 1975 ASC ${exactAngles.ascendant.toFixed(4)}°, DESC ${exactAngles.descendant.toFixed(4)}°, MC ${exactAngles.midheaven.toFixed(4)}°, IC ${exactAngles.imumCoeli.toFixed(4)}°; Vedic references ${vedicReferences.length}.`);
