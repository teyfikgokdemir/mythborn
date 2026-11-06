import { Body, GeoVector, Ecliptic, SiderealTime, MoonPhase, SearchMoonPhase, Illumination } from 'astronomy-engine';
import majorCities from '../data/major-cities.json' with { type: 'json' };

export const ENGINE_METADATA = {
  name: 'astronomy-engine',
  version: '2.1.19',
  license: 'MIT',
  precision: 'Geocentric ecliptic coordinates with apparent motion delta',
  anglesMethod: 'Local sidereal time and ecliptic obliquity (eps=23.4392911°)',
  houseSystem: 'Equal House',
  disclaimer: 'Astronomical calculations provide mathematical planetary coordinates. Interpretations are symbolic and non-deterministic.'
};

export const ZODIAC_SIGNS = [
  { id: 'aries', symbol: '♈', degreeStart: 0, element: 'fire', mode: 'cardinal', ruler: 'Mars',
    names: { tr: 'Koç', en: 'Aries', el: 'Κριός', es: 'Aries', ar: 'الحمل' } },
  { id: 'taurus', symbol: '♉', degreeStart: 30, element: 'earth', mode: 'fixed', ruler: 'Venus',
    names: { tr: 'Boğa', en: 'Taurus', el: 'Ταύρος', es: 'Tauro', ar: 'الثور' } },
  { id: 'gemini', symbol: '♊', degreeStart: 60, element: 'air', mode: 'mutable', ruler: 'Mercury',
    names: { tr: 'İkizler', en: 'Gemini', el: 'Δίδυμοι', es: 'Géminis', ar: 'الجوزاء' } },
  { id: 'cancer', symbol: '♋', degreeStart: 90, element: 'water', mode: 'cardinal', ruler: 'Moon',
    names: { tr: 'Yengeç', en: 'Cancer', el: 'Καρκίνος', es: 'Cáncer', ar: 'السرطان' } },
  { id: 'leo', symbol: '♌', degreeStart: 120, element: 'fire', mode: 'fixed', ruler: 'Sun',
    names: { tr: 'Aslan', en: 'Leo', el: 'Λέων', es: 'Leo', ar: 'الأسد' } },
  { id: 'virgo', symbol: '♍', degreeStart: 150, element: 'earth', mode: 'mutable', ruler: 'Mercury',
    names: { tr: 'Başak', en: 'Virgo', el: 'Παρθένος', es: 'Virgo', ar: 'العذراء' } },
  { id: 'libra', symbol: '♎', degreeStart: 180, element: 'air', mode: 'cardinal', ruler: 'Venus',
    names: { tr: 'Terazi', en: 'Libra', el: 'Ζυγός', es: 'Libra', ar: 'الميزان' } },
  { id: 'scorpio', symbol: '♏', degreeStart: 210, element: 'water', mode: 'fixed', ruler: 'Pluto',
    names: { tr: 'Akrep', en: 'Scorpio', el: 'Σκορπιός', es: 'Escorpio', ar: 'العقرب' } },
  { id: 'sagittarius', symbol: '♐', degreeStart: 240, element: 'fire', mode: 'mutable', ruler: 'Jupiter',
    names: { tr: 'Yay', en: 'Sagittarius', el: 'Τοξότης', es: 'Sagitario', ar: 'القوس' } },
  { id: 'capricorn', symbol: '♑', degreeStart: 270, element: 'earth', mode: 'cardinal', ruler: 'Saturn',
    names: { tr: 'Oğlak', en: 'Capricorn', el: 'Αιγόκερως', es: 'Capricornio', ar: 'الجدي' } },
  { id: 'aquarius', symbol: '♒', degreeStart: 300, element: 'air', mode: 'fixed', ruler: 'Uranus',
    names: { tr: 'Kova', en: 'Aquarius', el: 'Υδροχόος', es: 'Acuario', ar: 'الدلو' } },
  { id: 'pisces', symbol: '♓', degreeStart: 330, element: 'water', mode: 'mutable', ruler: 'Neptune',
    names: { tr: 'Balık', en: 'Pisces', el: 'Ιχθύες', es: 'Piscis', ar: 'الحوت' } }
];

export const PLANETS = [
  { id: 'sun', body: Body.Sun, symbol: '☉', names: { tr: 'Güneş', en: 'Sun', el: 'Ήλιος', es: 'Sol', ar: 'الشمس' } },
  { id: 'moon', body: Body.Moon, symbol: '☽', names: { tr: 'Ay', en: 'Moon', el: 'Σελήνη', es: 'Luna', ar: 'القمر' } },
  { id: 'mercury', body: Body.Mercury, symbol: '☿', names: { tr: 'Merkür', en: 'Mercury', el: 'Ερμής', es: 'Mercurio', ar: 'عطارد' } },
  { id: 'venus', body: Body.Venus, symbol: '♀', names: { tr: 'Venüs', en: 'Venus', el: 'Αφροδίτη', es: 'Venus', ar: 'الزهرة' } },
  { id: 'mars', body: Body.Mars, symbol: '♂', names: { tr: 'Mars', en: 'Mars', el: 'Άρης', es: 'Marte', ar: 'المريخ' } },
  { id: 'jupiter', body: Body.Jupiter, symbol: '♃', names: { tr: 'Jüpiter', en: 'Jupiter', el: 'Δίας', es: 'Júpiter', ar: 'المشتري' } },
  { id: 'saturn', body: Body.Saturn, symbol: '♄', names: { tr: 'Satürn', en: 'Saturn', el: 'Κρόνος', es: 'Saturno', ar: 'زحل' } },
  { id: 'uranus', body: Body.Uranus, symbol: '♅', names: { tr: 'Uranüs', en: 'Uranus', el: 'Ουρανός', es: 'Urano', ar: 'أورانوس' } },
  { id: 'neptune', body: Body.Neptune, symbol: '♆', names: { tr: 'Neptün', en: 'Neptune', el: 'Ποσειδώνας', es: 'Neptuno', ar: 'نبتون' } },
  { id: 'pluto', body: Body.Pluto, symbol: '♇', names: { tr: 'Plüton', en: 'Pluto', el: 'Πλούτωνας', es: 'Plutón', ar: 'بلوتو' } }
];

export const MAJOR_ASPECTS = [
  { name: 'Kavuşum', nameEn: 'Conjunction', angle: 0, orb: 8, nature: 'neutral' },
  { name: 'Sekstil', nameEn: 'Sextile', angle: 60, orb: 5, nature: 'harmonious' },
  { name: 'Kare', nameEn: 'Square', angle: 90, orb: 7, nature: 'challenging' },
  { name: 'Üçgen', nameEn: 'Trine', angle: 120, orb: 7, nature: 'harmonious' },
  { name: 'Karşıt', nameEn: 'Opposition', angle: 180, orb: 8, nature: 'challenging' }
];

export const normalizeLongitude = n => ((n % 360) + 360) % 360;
const rad = d => d * Math.PI / 180;
const deg = r => r * 180 / Math.PI;

export function format24HourTime(date, timeZone = 'Europe/Istanbul') {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '--:--';
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(date);
  const hour = parts.find(p => p.type === 'hour')?.value || '00';
  const min = parts.find(p => p.type === 'minute')?.value || '00';
  return `${hour}:${min}`;
}

export function formatIsoDate24h(date, timeZone = 'Europe/Istanbul') {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  const dParts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
  return `${dParts} ${format24HourTime(date, timeZone)}`;
}

export function normalizeSearchText(text) {
  if (!text) return '';
  return String(text)
    .trim()
    .replace(/İ/g, 'i')
    .replace(/I/g, 'i')
    .replace(/ı/g, 'i')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[\s,\.\-_]+/g, '');
}

export function lookupCity(query) {
  if (!query || typeof query !== 'string') return null;
  const clean = normalizeSearchText(query);
  if (!clean) return null;

  for (const city of majorCities) {
    const cName = normalizeSearchText(city.name);
    if (cName === clean || clean.startsWith(cName) || cName.startsWith(clean)) {
      return {
        name: city.name,
        country: city.country,
        lat: city.lat,
        lng: city.lng,
        timezone: city.timezone || city.tz || 'Europe/Istanbul',
        tz: city.timezone || city.tz || 'Europe/Istanbul',
        source: 'offline-dictionary'
      };
    }
  }
  return null;
}

export async function geocodeWithFallback(place, locale = 'tr', timeoutMs = 3500) {
  const offlineMatch = lookupCity(place);
  if (offlineMatch) {
    return offlineMatch;
  }

  const defaultCity = {
    name: 'İstanbul',
    country: 'TR',
    lat: 41.0082,
    lng: 28.9784,
    timezone: 'Europe/Istanbul',
    tz: 'Europe/Istanbul',
    isFallback: true,
    query: place
  };

  const cleanPlace = String(place || '').trim();
  if (!cleanPlace) return defaultCity;

  const queries = [cleanPlace, cleanPlace.split(',')[0].trim()].filter((v, i, a) => v && a.indexOf(v) === i);
  const lang = locale === 'en' ? 'en' : locale === 'el' || locale === 'gr' ? 'el' : locale === 'es' ? 'es' : 'tr';

  for (const q of queries) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=5&language=${lang}&format=json`, {
        headers: { accept: 'application/json' },
        signal: controller.signal
      });
      clearTimeout(timer);

      if (!res.ok) continue;
      const data = await res.json();
      const results = data?.results || [];
      if (results.length > 0) {
        const top = results[0];
        return {
          name: [top.name, top.admin1, top.country].filter(Boolean).join(', '),
          country: top.country_code || '',
          lat: top.latitude,
          lng: top.longitude,
          timezone: top.timezone || 'UTC',
          tz: top.timezone || 'UTC',
          source: 'open-meteo'
        };
      }
    } catch {
      // Graceful fallback on network timeout or 429
    }
  }

  return defaultCity;
}

export function getZodiacSign(longitude, lang = 'tr') {
  const l = normalizeLongitude(longitude);
  const signIndex = Math.floor(l / 30);
  const signMeta = ZODIAC_SIGNS[signIndex] || ZODIAC_SIGNS[0];
  const degreeInSign = l - signIndex * 30;
  const degInt = Math.floor(degreeInSign);
  const minInt = Math.floor((degreeInSign - degInt) * 60);

  const locKey = lang === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(lang) ? lang : 'tr';
  const name = signMeta.names[locKey] || signMeta.names.tr;

  return {
    signId: signMeta.id,
    sign: name,
    symbol: signMeta.symbol,
    degree: Number(degreeInSign.toFixed(2)),
    degreeInt: degInt,
    minuteInt: minInt,
    formatted: `${degInt}° ${String(minInt).padStart(2, '0')}'`,
    element: signMeta.element,
    mode: signMeta.mode,
    ruler: signMeta.ruler,
    longitude: Number(l.toFixed(4))
  };
}

export function calculatePlanetaryPositions(dateUtc, lang = 'tr') {
  if (!(dateUtc instanceof Date) || Number.isNaN(dateUtc.getTime())) {
    throw new TypeError('Geçerli bir UTC Date objesi gerekli.');
  }

  const d1 = dateUtc;
  const d2 = new Date(dateUtc.getTime() + 3600 * 1000); // +1 hour for daily motion delta

  return PLANETS.map(p => {
    const vec1 = GeoVector(p.body, d1, true);
    const ecl1 = Ecliptic(vec1);
    const lon1 = normalizeLongitude(ecl1.elon);

    const vec2 = GeoVector(p.body, d2, true);
    const ecl2 = Ecliptic(vec2);
    const lon2 = normalizeLongitude(ecl2.elon);

    let diff = lon2 - lon1;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    const dailySpeed = diff * 24;

    const isSunOrMoon = p.id === 'sun' || p.id === 'moon';
    const isRetrograde = !isSunOrMoon && dailySpeed < 0;

    const signData = getZodiacSign(lon1, lang);
    const locKey = lang === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(lang) ? lang : 'tr';

    return {
      id: p.id,
      planetId: p.id,
      name: p.names[locKey] || p.names.tr,
      symbol: p.symbol,
      longitude: Number(lon1.toFixed(4)),
      latitude: Number(ecl1.elat.toFixed(4)),
      dailySpeed: Number(dailySpeed.toFixed(4)),
      isRetrograde,
      ...signData
    };
  });
}

export function calculateAnglesAndHouses(dateUtc, lat, lng, lang = 'tr') {
  if (!(dateUtc instanceof Date) || Number.isNaN(dateUtc.getTime())) {
    return { angles: null, houses: [], note: 'Doğum saati bilinmediği için Yükselen ve evler hesaplanmadı.' };
  }
  if (!Number.isFinite(lat) || lat <= -90 || lat >= 90) {
    throw new RangeError('Enlem -90° ile 90° arasında olmalı.');
  }
  if (!Number.isFinite(lng) || lng < -180 || lng > 180) {
    throw new RangeError('Boylam -180° ile 180° arasında olmalı.');
  }

  const theta = rad(normalizeLongitude(SiderealTime(dateUtc) * 15 + lng));
  const eps = rad(23.4392911);
  const phi = rad(lat);

  const westernHorizon = deg(Math.atan2(-Math.cos(theta), Math.sin(theta) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps)));
  const asc = normalizeLongitude(westernHorizon + 180);
  const mc = normalizeLongitude(deg(Math.atan2(Math.sin(theta), Math.cos(theta) * Math.cos(eps))));
  const dsc = normalizeLongitude(asc + 180);
  const ic = normalizeLongitude(mc + 180);

  const houses = Array.from({ length: 12 }, (_, i) => {
    const cuspLon = normalizeLongitude(asc + i * 30);
    return {
      house: i + 1,
      cusp: cuspLon,
      ...getZodiacSign(cuspLon, lang)
    };
  });

  return {
    angles: {
      ascendant: { id: 'asc', symbol: 'ASC', ...getZodiacSign(asc, lang) },
      midheaven: { id: 'mc', symbol: 'MC', ...getZodiacSign(mc, lang) },
      descendant: { id: 'dsc', symbol: 'DSC', ...getZodiacSign(dsc, lang) },
      imumCoeli: { id: 'ic', symbol: 'IC', ...getZodiacSign(ic, lang) },
      houseSystem: ENGINE_METADATA.houseSystem
    },
    houses,
    note: 'Yükselen, MC ve 12 eşit ev yerel yıldız zamanı ve coğrafi koordinatlarla hesaplanmıştır.'
  };
}

export function calculateAspects(planets) {
  const out = [];
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const a = planets[i];
      const b = planets[j];
      const rawDist = Math.abs(normalizeLongitude(a.longitude) - normalizeLongitude(b.longitude));
      const dist = rawDist > 180 ? 360 - rawDist : rawDist;

      for (const aspect of MAJOR_ASPECTS) {
        const delta = Math.abs(dist - aspect.angle);
        if (delta <= aspect.orb) {
          out.push({
            from: a.name,
            fromId: a.id,
            to: b.name,
            toId: b.id,
            type: aspect.name,
            typeEn: aspect.nameEn,
            angle: aspect.angle,
            actualAngle: Number(dist.toFixed(2)),
            orb: Number(delta.toFixed(2)),
            nature: aspect.nature
          });
          break;
        }
      }
    }
  }
  return out.sort((a, b) => a.orb - b.orb);
}

export function getMoonPhaseData(dateUtc, lang = 'tr') {
  if (!(dateUtc instanceof Date) || Number.isNaN(dateUtc.getTime())) {
    dateUtc = new Date();
  }

  const phaseDeg = normalizeLongitude(MoonPhase(dateUtc));
  const illum = Illumination(Body.Moon, dateUtc);
  const frac = Number(illum.phase_fraction.toFixed(3));

  let phaseId = 'new_moon';
  if (phaseDeg >= 337.5 || phaseDeg < 22.5) phaseId = 'new_moon';
  else if (phaseDeg < 67.5) phaseId = 'waxing_crescent';
  else if (phaseDeg < 112.5) phaseId = 'first_quarter';
  else if (phaseDeg < 157.5) phaseId = 'waxing_gibbous';
  else if (phaseDeg < 202.5) phaseId = 'full_moon';
  else if (phaseDeg < 247.5) phaseId = 'waning_gibbous';
  else if (phaseDeg < 292.5) phaseId = 'last_quarter';
  else phaseId = 'waning_crescent';

  const phaseNames = {
    new_moon: { tr: 'Yeniay', en: 'New Moon', el: 'Νέα Σελήνη', es: 'Luna Nueva', ar: 'محاق' },
    waxing_crescent: { tr: 'Hilal (Büyüyen)', en: 'Waxing Crescent', el: 'Αύξων Μηνίσκος', es: 'Luna Creciente', ar: 'هلال متزايد' },
    first_quarter: { tr: 'İlk Dördün', en: 'First Quarter', el: 'Πρώτο Τέταρτο', es: 'Cuarto Creciente', ar: 'التربيع الأول' },
    waxing_gibbous: { tr: 'Şişkin Ay (Büyüyen)', en: 'Waxing Gibbous', el: 'Αύξων Αμφίκυρτος', es: 'Gibosa Creciente', ar: 'أحدب متزايد' },
    full_moon: { tr: 'Dolunay', en: 'Full Moon', el: 'Πανσέληνος', es: 'Luna Llena', ar: 'بدر' },
    waning_gibbous: { tr: 'Şişkin Ay (Küçülen)', en: 'Waning Gibbous', el: 'Φθίνων Αμφίκυρτος', es: 'Gibosa Menguante', ar: 'أحدب متناقص' },
    last_quarter: { tr: 'Son Dördün', en: 'Last Quarter', el: 'Τελευταίο Τέταρτο', es: 'Cuarto Menguante', ar: 'التربيع الأخير' },
    waning_crescent: { tr: 'Hilal (Küçülen)', en: 'Waning Crescent', el: 'Φθίνων Μηνίσκος', es: 'Luna Menguante', ar: 'هلال متناقص' }
  };

  const locKey = lang === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(lang) ? lang : 'tr';
  const phaseName = phaseNames[phaseId][locKey] || phaseNames[phaseId].tr;

  const nextNew = SearchMoonPhase(0, dateUtc, 45);
  const nextFull = SearchMoonPhase(180, dateUtc, 45);

  return {
    phaseId,
    name: phaseName,
    degrees: Number(phaseDeg.toFixed(2)),
    illuminationPct: Math.round(frac * 100),
    nextNewMoonUtc: nextNew ? nextNew.date.toISOString() : null,
    nextNewMoon24h: nextNew ? formatIsoDate24h(nextNew.date, 'Europe/Istanbul') : '',
    nextFullMoonUtc: nextFull ? nextFull.date.toISOString() : null,
    nextFullMoon24h: nextFull ? formatIsoDate24h(nextFull.date, 'Europe/Istanbul') : ''
  };
}

export function calculateSkySnapshot(dateUtc = new Date(), lang = 'tr') {
  const planets = calculatePlanetaryPositions(dateUtc, lang);
  const aspects = calculateAspects(planets);
  const moonPhase = getMoonPhaseData(dateUtc, lang);

  const activeRetrogrades = planets.filter(p => p.isRetrograde).map(p => ({
    id: p.id,
    name: p.name,
    symbol: p.symbol,
    sign: p.sign,
    dailySpeed: p.dailySpeed
  }));

  const elementCounts = planets.reduce((acc, p) => {
    acc[p.element] = (acc[p.element] || 0) + 1;
    return acc;
  }, {});

  const dominantElement = Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'balanced';

  return {
    metadata: {
      generated_at: new Date().toISOString(),
      data_as_of: dateUtc.toISOString(),
      time_istanbul_24h: format24HourTime(dateUtc, 'Europe/Istanbul'),
      time_utc_24h: format24HourTime(dateUtc, 'UTC'),
      engine: ENGINE_METADATA
    },
    planets,
    aspects: aspects.slice(0, 10),
    moonPhase,
    activeRetrogrades,
    dominantElement
  };
}
