import assert from 'node:assert';
import {
  ENGINE_METADATA,
  lookupCity,
  geocodeWithFallback,
  getZodiacSign,
  calculatePlanetaryPositions,
  calculateAnglesAndHouses,
  calculateAspects,
  getMoonPhaseData,
  calculateSkySnapshot,
  format24HourTime,
  formatIsoDate24h
} from '../src/astrology-platform/data-core.js';

console.log('🧪 Starting Astrology Data Core Test Suite...');

// Test 1: Metadata & License Integrity (No fake claims)
console.log('Test 1: Engine metadata and non-deterministic disclaimer verification');
assert.strictEqual(ENGINE_METADATA.name, 'astronomy-engine');
assert.strictEqual(ENGINE_METADATA.version, '2.1.19');
assert.strictEqual(ENGINE_METADATA.license, 'MIT');
assert(!ENGINE_METADATA.precision.includes('NASA JPL standardı'), 'Must not make unverified NASA JPL marketing claims');

// Test 2: Offline City Dictionary & Normalization
console.log('Test 2: Offline city dictionary lookup (no network)');
const ist1 = lookupCity('İstanbul');
const ist2 = lookupCity('istanbul');
const ist3 = lookupCity('ISTANBUL');
const ank = lookupCity('Ankara');
const izm = lookupCity('İzmir');
const lon = lookupCity('London');

assert(ist1 && ist1.country === 'TR' && ist1.timezone === 'Europe/Istanbul', 'İstanbul lookup must succeed');
assert.strictEqual(ist1.lat, ist2.lat, 'Accented and non-accented queries must produce identical results');
assert.strictEqual(ist1.lng, ist3.lng, 'Uppercase and lowercase queries must produce identical results');
assert(ank && ank.name === 'Ankara', 'Ankara lookup must succeed');
assert(izm && izm.name === 'İzmir', 'İzmir lookup must succeed');
assert(lon && lon.country === 'GB', 'Global city London lookup must succeed');

// Test 3: Geocoding Fallback with Invalid / Unknown City
console.log('Test 3: Graceful fallback for unknown cities');
const unknownResult = await geocodeWithFallback('BilinmeyenHayaliKoyXYZ123', 'tr', 100);
assert(unknownResult, 'Fallback result must not be null');
assert.strictEqual(unknownResult.isFallback, true, 'Fallback flag must be set');
assert.strictEqual(unknownResult.timezone, 'Europe/Istanbul', 'Fallback timezone must default to Europe/Istanbul');

// Test 4: Strict 24-Hour Time Format Verification (No AM/PM)
console.log('Test 4: Strict 24-hour time formatting across timezones');
const testDate = new Date('2026-11-04T15:45:00Z');
const istTime = format24HourTime(testDate, 'Europe/Istanbul');
const utcTime = format24HourTime(testDate, 'UTC');

assert(!istTime.toLowerCase().includes('am'), 'Must not contain AM in Istanbul time');
assert(!istTime.toLowerCase().includes('pm'), 'Must not contain PM in Istanbul time');
assert(!utcTime.toLowerCase().includes('am'), 'Must not contain AM in UTC time');
assert(!utcTime.toLowerCase().includes('pm'), 'Must not contain PM in UTC time');
assert.strictEqual(utcTime, '15:45', 'UTC time must be 15:45');
assert.strictEqual(istTime, '18:45', 'Europe/Istanbul time must be 18:45 (UTC+3)');

// Test 5: Known Date & Planetary Positions (Deterministic test)
console.log('Test 5: Known date planetary calculations and deterministic repeatability');
const testInstant = new Date('2026-11-04T00:00:00Z');
const planetsRun1 = calculatePlanetaryPositions(testInstant, 'tr');
const planetsRun2 = calculatePlanetaryPositions(testInstant, 'tr');

assert.strictEqual(planetsRun1.length, 10, 'Must calculate 10 celestial bodies');
assert.deepStrictEqual(planetsRun1, planetsRun2, 'Calculations must be 100% deterministic on identical input');

const sun = planetsRun1.find(p => p.id === 'sun');
const moon = planetsRun1.find(p => p.id === 'moon');
assert(sun && sun.sign === 'Akrep', 'Sun in early November must be in Scorpio (Akrep)');
assert.strictEqual(sun.isRetrograde, false, 'Sun must never be retrograde');
assert.strictEqual(moon.isRetrograde, false, 'Moon must never be retrograde');

// Test 6: Retrograde Detection
console.log('Test 6: Retrograde detection via apparent daily speed');
const mercury = planetsRun1.find(p => p.id === 'mercury');
assert(mercury, 'Mercury must be calculated');
assert(typeof mercury.isRetrograde === 'boolean', 'Retrograde status must be boolean');
assert(typeof mercury.dailySpeed === 'number', 'Daily speed must be numerical');

// Test 7: Angles & Houses with Known Time vs Unknown Time
console.log('Test 7: Ascendant and Equal Houses for known vs unknown birth time');
const anglesKnown = calculateAnglesAndHouses(testInstant, 41.0082, 28.9784, 'tr');
assert(anglesKnown.angles, 'Angles must be computed when time and coordinates are provided');
assert(anglesKnown.angles.ascendant, 'Ascendant must be calculated');
assert.strictEqual(anglesKnown.houses.length, 12, 'Must calculate exactly 12 houses');
assert.strictEqual(anglesKnown.angles.houseSystem, 'Equal House', 'House system must be Equal House');

const anglesUnknown = calculateAnglesAndHouses(new Date(NaN), 41.0082, 28.9784, 'tr');
assert.strictEqual(anglesUnknown.angles, null, 'Angles must be null when birth time is unknown');
assert.strictEqual(anglesUnknown.houses.length, 0, 'Houses must be empty when birth time is unknown');
assert(anglesUnknown.note.includes('Doğum saati bilinmediği için'), 'Must explain why angles are omitted');

// Test 8: Major Aspects
console.log('Test 8: Planetary aspects calculation');
const aspects = calculateAspects(planetsRun1);
assert(Array.isArray(aspects), 'Aspects must return an array');
for (const asp of aspects) {
  assert(['Kavuşum', 'Sekstil', 'Kare', 'Üçgen', 'Karşıt'].includes(asp.type), 'Aspect type must be valid');
  assert(asp.orb <= 8.5, 'Aspect orb must respect defined limits');
}

// Test 9: Moon Phase and Lunations
console.log('Test 9: Moon phase and lunation calculations');
const moonPhase = getMoonPhaseData(testInstant, 'tr');
assert(moonPhase.phaseId, 'Phase ID must exist');
assert(moonPhase.name, 'Phase localized name must exist');
assert(typeof moonPhase.illuminationPct === 'number' && moonPhase.illuminationPct >= 0 && moonPhase.illuminationPct <= 100, 'Illumination must be 0-100%');
assert(moonPhase.nextNewMoonUtc, 'Next new moon UTC date must be calculated');
assert(moonPhase.nextFullMoonUtc, 'Next full moon UTC date must be calculated');

// Test 10: Multilingual Support in Data Core (5 languages)
console.log('Test 10: 5-language zodiac sign output verification');
const lonTest = 45.5; // Taurus (Boğa)
const signTr = getZodiacSign(lonTest, 'tr');
const signEn = getZodiacSign(lonTest, 'en');
const signEl = getZodiacSign(lonTest, 'el');
const signEs = getZodiacSign(lonTest, 'es');
const signAr = getZodiacSign(lonTest, 'ar');

assert.strictEqual(signTr.sign, 'Boğa');
assert.strictEqual(signEn.sign, 'Taurus');
assert.strictEqual(signEl.sign, 'Ταύρος');
assert.strictEqual(signEs.sign, 'Tauro');
assert.strictEqual(signAr.sign, 'الثور');

// Test 11: Full Sky Snapshot Output
console.log('Test 11: Full sky snapshot metadata and payload structure');
const snapshot = calculateSkySnapshot(testInstant, 'tr');
assert(snapshot.metadata.generated_at, 'Snapshot must have generated_at');
assert(snapshot.metadata.data_as_of, 'Snapshot must have data_as_of');
assert(snapshot.metadata.time_istanbul_24h, 'Snapshot must have time_istanbul_24h');
assert(snapshot.planets.length === 10, 'Snapshot must have 10 planets');
assert(snapshot.moonPhase.name, 'Snapshot must have moon phase');

console.log('✅ ALL 11 ASTRONOMY DATA CORE TESTS PASSED SUCCESSFULLY!');
