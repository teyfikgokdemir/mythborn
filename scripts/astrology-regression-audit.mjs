import assert from 'node:assert/strict';
import { Body, Ecliptic, GeoVector } from 'astronomy-engine';
import {
  calculateChartAngles,
  localToUtc,
  normalizeLongitude,
  zodiacPlacement,
  zonedParts
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

console.log(`Astrology regression audit passed: Istanbul 1975 ASC ${exactAngles.ascendant.toFixed(4)}°, DESC ${exactAngles.descendant.toFixed(4)}°, MC ${exactAngles.midheaven.toFixed(4)}°, IC ${exactAngles.imumCoeli.toFixed(4)}°.`);
