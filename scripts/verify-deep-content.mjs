import { renderZodiacIndexView } from '../src/astrology-platform/pages/zodiac.js';
import { renderNatalChartView } from '../src/astrology-platform/pages/natal-chart.js';
import { renderSynastryView } from '../src/astrology-platform/pages/synastry.js';
import { generateDailyHoroscopes } from '../src/astrology-platform/horoscope-pipeline.js';
import { ZODIAC_COMPENDIUM } from '../src/astrology-platform/zodiac-compendium.js';

console.log('--- Verifying Deep Content & Self-Resonance ---');

// 1. Check all 12 signs in compendium
const signs = ['koc', 'boga', 'ikizler', 'yengec', 'aslan', 'basak', 'terazi', 'akrep', 'yay', 'oglak', 'kova', 'balik'];
for (const s of signs) {
  const d = ZODIAC_COMPENDIUM[s];
  if (!d) throw new Error(`Missing compendium for ${s}`);
  if (!d.soulEssence?.tr || d.soulEssence.tr.length < 80) throw new Error(`Weak soulEssence for ${s}`);
  if (!d.strengths?.tr || d.strengths.tr.length < 3) throw new Error(`Weak strengths for ${s}`);
  if (!d.shadows?.tr || d.shadows.tr.length < 3) throw new Error(`Weak shadows for ${s}`);
  if (!d.loveStyle?.tr || d.loveStyle.tr.length < 60) throw new Error(`Weak loveStyle for ${s}`);
  if (!d.careerVocation?.tr || d.careerVocation.tr.length < 60) throw new Error(`Weak careerVocation for ${s}`);
  if (!d.lifeLesson?.tr || d.lifeLesson.tr.length < 60) throw new Error(`Weak lifeLesson for ${s}`);
  if (!d.inBigThree?.sun || !d.inBigThree?.moon || !d.inBigThree?.rising) throw new Error(`Missing inBigThree for ${s}`);
}
console.log('✓ All 12 Zodiac deep compendium profiles verified (100% complete)');

// 2. Zodiac index view with deep dossier
const zView = renderZodiacIndexView({ locale: 'tr', searchParams: { sign: 'akrep' } });
if (!zView.includes('zodiac-dossier-card')) throw new Error('Missing dossier card');
if (!zView.includes('Gölge Yönler')) throw new Error('Missing shadows in dossier');
if (!zView.includes('Aşk, Bağlanma ve Sevgi Dili')) throw new Error('Missing love style in dossier');
if (!zView.includes('zodiac-selector-scroll')) throw new Error('Missing zodiac selector scroll');
console.log('✓ Zodiac Deep Dossier View verified');

// 3. Natal Chart report with Personal Big Three Synthesis
const natalView = renderNatalChartView({
  locale: 'tr',
  searchParams: { date: '1995-03-21', time: '14:30', city: 'Istanbul' }
});
if (!natalView.includes('Büyük Üçlü Ruhsal Analiz Raporunuz')) throw new Error('Missing Big Three synthesis report in natal chart');
if (!natalView.includes('Öz Benliğiniz ve Yaşam Amacınız')) throw new Error('Missing Sun interpretation in natal chart');
if (!natalView.includes('Duygusal Güvenlik ve İçsel Dünyanız')) throw new Error('Missing Moon interpretation in natal chart');
console.log('✓ Natal Chart Personal Big Three Synthesis verified');

// 4. Synastry relational synthesis
const synView = renderSynastryView({
  locale: 'tr',
  searchParams: { p1_date: '1990-05-15', p2_date: '1993-11-20' }
});
if (!synView.includes('ARKETİPSEL İLİŞKİ SENTEZİ')) throw new Error('Missing synastry synthesis report');
if (!synView.includes('Yaşam Amaçları & İrade Uyumu')) throw new Error('Missing Sun-Sun relational synthesis');
if (!synView.includes('Duygusal Dil & Mahremiyet Sığınakları')) throw new Error('Missing Moon-Moon relational synthesis');
console.log('✓ Synastry Relational Synthesis verified');

// 5. Horoscope pipeline richness
const daily = generateDailyHoroscopes();
const ariesHoroscope = daily.horoscopes.tr.signs.find(s => s.id === 'aries');
if (ariesHoroscope.theme.length < 100) throw new Error('Horoscope theme too brief');
console.log('✓ Daily Horoscope deep themes verified');

console.log('ALL DEEP CONTENT VERIFICATIONS PASSED!');
