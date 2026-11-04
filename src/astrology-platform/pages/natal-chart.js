// Mythborn Astrology Platform — Natal Chart Page
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { calculatePlanetaryPositions, calculateAnglesAndHouses, calculateAspects, lookupCity, ENGINE_METADATA } from '../data-core.js';
import { renderNatalWheelSvg } from '../natal-wheel.js';
import { render24hTimePicker } from '../time-picker.js';

export const renderNatalChartView = ({ locale = 'tr', searchParams = {} }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const birthDate = searchParams.date || searchParams.birthDate || '';
  const birthTime = searchParams.time || searchParams.birthTime || '12:00';
  const birthCity = searchParams.city || searchParams.birthPlace || 'Istanbul';
  const unknownTime = searchParams.unknown_time === '1' || searchParams.timeUnknown === 'true' || searchParams.timeUnknown === '1';

  let chartResult = null;
  let chartError = null;

  if (birthDate && /^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    try {
      const cityData = lookupCity(birthCity) || {
        name: birthCity,
        country: 'TR',
        lat: 41.0082,
        lng: 28.9784,
        timezone: 'Europe/Istanbul',
        tz: 'Europe/Istanbul'
      };

      const [y, m, d] = birthDate.split('-').map(Number);
      const [h, min] = (unknownTime ? '12:00' : birthTime).split(':').map(Number);
      const instantUtc = new Date(Date.UTC(y, m - 1, d, h || 12, min || 0, 0));

      const planets = calculatePlanetaryPositions(instantUtc, locale);
      const anglesAndHouses = unknownTime
        ? { angles: null, houses: [], note: t.quickNatal.unknownTime }
        : calculateAnglesAndHouses(instantUtc, cityData.lat, cityData.lng, locale);
      const aspects = calculateAspects(planets);

      const sun = planets.find(p => p.id === 'sun');
      const moon = planets.find(p => p.id === 'moon');
      const asc = anglesAndHouses.angles?.ascendant;

      chartResult = {
        birthDate,
        birthTime: unknownTime ? null : birthTime,
        unknownTime,
        city: cityData.name,
        instantUtc: instantUtc.toISOString(),
        sun,
        moon,
        asc,
        planets,
        angles: anglesAndHouses.angles,
        houses: anglesAndHouses.houses,
        aspects: aspects.slice(0, 12),
        note: anglesAndHouses.note
      };
    } catch (err) {
      chartError = err.message;
    }
  }

  const resultHtml = chartResult ? `
    <div class="astro-chart-result" style="margin-top:40px">
      <!-- Big Three Triad -->
      <div class="big-three-grid" style="margin-bottom:32px">
        <article class="big-three-card" style="border-color:var(--gold)">
          <span class="big-three-glyph" aria-hidden="true">☉</span>
          <h3>${locale === 'tr' ? 'Güneş Burcu' : locale === 'en' ? 'Sun Sign' : locale === 'el' ? 'Ήλιος' : locale === 'es' ? 'Signo Solar' : 'برج الشمس'}</h3>
          <p style="font-size:20px; font-weight:600; color:#fff">${chartResult.sun?.symbol} ${chartResult.sun?.sign}</p>
          <small style="color:var(--gold-bright)">${chartResult.sun?.formatted} (${chartResult.sun?.element?.toUpperCase()})</small>
        </article>
        <article class="big-three-card" style="border-color:var(--gold)">
          <span class="big-three-glyph" aria-hidden="true">☽</span>
          <h3>${locale === 'tr' ? 'Ay Burcu' : locale === 'en' ? 'Moon Sign' : locale === 'el' ? 'Σελήνη' : locale === 'es' ? 'Signo Lunar' : 'برج القمر'}</h3>
          <p style="font-size:20px; font-weight:600; color:#fff">${chartResult.moon?.symbol} ${chartResult.moon?.sign}</p>
          <small style="color:var(--gold-bright)">${chartResult.moon?.formatted} (${chartResult.moon?.element?.toUpperCase()})</small>
        </article>
        <article class="big-three-card" style="border-color:var(--gold)">
          <span class="big-three-glyph" aria-hidden="true">↑</span>
          <h3>${locale === 'tr' ? 'Yükselen Burç' : locale === 'en' ? 'Ascendant (Rising)' : locale === 'el' ? 'Ωροσκόπος' : locale === 'es' ? 'Ascendente' : 'الطالع'}</h3>
          <p style="font-size:20px; font-weight:600; color:#fff">${chartResult.asc ? `${chartResult.asc.symbol} ${chartResult.asc.sign}` : '—'}</p>
          <small style="color:var(--gold-bright)">${chartResult.asc ? chartResult.asc.formatted : (locale === 'tr' ? 'Doğum saati bilinmiyor' : 'Unknown birth time')}</small>
        </article>
      </div>

      <!-- Zodyak Çarkı Görseli & Gezegen Tablosu -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:24px; align-items:start">
        <div style="padding:24px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:16px; text-align:center">
          <h4 style="font-family:var(--font-serif); font-size:18px; color:var(--gold); margin-bottom:16px">
            ✦ ${locale === 'tr' ? 'Matematiksel Zodyak Çarkı & Açılar' : locale === 'en' ? 'Mathematical Zodiac Wheel & Aspects' : locale === 'el' ? 'Ζωδιακός Κύκλος & Όψεις' : locale === 'es' ? 'Rueda Zodiacal y Aspectos' : 'عجلة الأبراج والاتصالات'}
          </h4>
          <div style="max-width:360px; margin:0 auto">
            ${renderNatalWheelSvg({ planets: chartResult.planets, angles: chartResult.angles, aspects: chartResult.aspects, size: 360 })}
          </div>
          <p style="font-size:12px; color:var(--muted); margin-top:16px">
            ${ENGINE_METADATA.precision} · ${ENGINE_METADATA.houseSystem}
          </p>
        </div>

        <div style="padding:24px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:16px">
          <h4 style="font-family:var(--font-serif); font-size:18px; color:#fff; margin-bottom:16px">
            🪐 ${locale === 'tr' ? 'Gezegen Yerleşimleri' : locale === 'en' ? 'Planetary Placements' : locale === 'el' ? 'Πλανητικές Θέσεις' : locale === 'es' ? 'Posiciones Planetarias' : 'مواقع الكواكب'}
          </h4>
          <div style="display:flex; flex-direction:column; gap:8px">
            ${chartResult.planets.map(p => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:13px">
                <span style="display:flex; align-items:center; gap:8px">
                  <span style="color:var(--gold); font-size:16px">${p.symbol}</span>
                  <span style="color:#fff">${p.name}</span>
                  ${p.isRetrograde ? '<span style="color:#f87171; font-size:10px; padding:1px 4px; border:1px solid #f87171; border-radius:4px">Rx</span>' : ''}
                </span>
                <span style="color:var(--muted)">${p.sign} ${p.formatted}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Açı Dinamikleri -->
      ${chartResult.aspects.length > 0 ? `
        <div style="margin-top:24px; padding:24px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:16px">
          <h4 style="font-family:var(--font-serif); font-size:18px; color:#fff; margin-bottom:16px">
            △ ${locale === 'tr' ? 'Temel Gezegen Açıları' : locale === 'en' ? 'Major Planetary Aspects' : locale === 'el' ? 'Κύριες Όψεις' : locale === 'es' ? 'Aspectos Planetarios' : 'الاتصالات الفلكية الرئيسية'}
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:10px">
            ${chartResult.aspects.map(a => `
              <div style="padding:10px 14px; background:rgba(0,0,0,0.3); border-radius:8px; border:1px solid rgba(255,255,255,0.05); font-size:12px; display:flex; justify-content:space-between; align-items:center">
                <span><strong>${a.from}</strong> ${a.type} <strong>${a.to}</strong></span>
                <span style="color:${a.nature === 'harmonious' ? '#4ade80' : a.nature === 'challenging' ? '#fb923c' : 'var(--gold)'}; font-size:11px">
                  ${a.actualAngle}° (±${a.orb}°)
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="margin-top:24px; text-align:center">
        <p style="font-size:12px; color:var(--dim); max-width:600px; margin:0 auto">
          ${t.ethicalDisclaimer}
        </p>
      </div>
    </div>
  ` : '';

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ ASTRONOMY ENGINE KORUMALI MATEMATİKSEL DOĞUM HARİTASI</span>
        <h1>${t.menu.natal} Hesaplama ve Yükselen Analizi</h1>
        <p class="astro-hero-lead">${t.hero.lead}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-form-card" style="max-width:680px; margin:0 auto">
          <h2 style="font-family:var(--font-serif); font-size:24px; color:#fff; margin-bottom:8px; font-weight:400">
            ${t.quickNatal.title}
          </h2>
          <p style="color:var(--muted); font-size:13px; margin-bottom:20px">
            ${t.quickNatal.sub} · <span style="color:var(--gold-bright)">${t.timeStandardNotice}</span>
          </p>

          <form action="${getRouteHref(locale, 'natal')}" method="get">
            <div class="astro-form-group">
              <label for="birth-date">${t.quickNatal.labelDate} *</label>
              <input type="date" id="birth-date" name="date" required value="${birthDate || '1995-03-21'}">
            </div>

            <div class="astro-form-group">
              <label>${t.quickNatal.labelTime} (24h)</label>
              ${render24hTimePicker({ idPrefix: 'birth', name: 'time', defaultValue: birthTime || '14:30', ariaLabelHour: t.quickNatal.labelTime, ariaLabelMinute: 'Dakika' })}
              <label style="display:flex; align-items:center; gap:8px; margin-top:8px; font-weight:400; font-size:13px; color:var(--muted); cursor:pointer">
                <input type="checkbox" id="time-unknown" name="unknown_time" value="1" ${unknownTime ? 'checked' : ''} style="width:auto" onchange="var h=document.getElementById('birth-hour'),m=document.getElementById('birth-min');if(h&&m){h.disabled=this.checked;m.disabled=this.checked;}">
                <span>${t.quickNatal.unknownTime}</span>
              </label>
            </div>

            <div class="astro-form-group">
              <label for="birth-place">${t.quickNatal.labelCity} *</label>
              <input type="text" id="birth-place" name="city" placeholder="İstanbul, Ankara, London, Athens..." required value="${birthCity || 'Istanbul'}">
              <span class="astro-form-note">Çevrimdışı 81 il sözlüğü ve 3500 ms açık kaynaklı koordinat eşlemesi kullanılır.</span>
            </div>

            <div style="margin-top:24px">
              <button type="submit" class="astro-btn-primary" style="width:100%; justify-content:center">
                <span>${t.quickNatal.submitBtn}</span>
                <span aria-hidden="true">${arrow}</span>
              </button>
            </div>
          </form>
        </div>

        ${resultHtml}
      </div>
    </section>
  `;
};
