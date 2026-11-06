// Mythborn Astrology Platform — Natal Chart Page
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { calculatePlanetaryPositions, calculateAnglesAndHouses, calculateAspects, lookupCity, ENGINE_METADATA } from '../data-core.js';
import { renderNatalWheelSvg } from '../natal-wheel.js';
import { render24hTimePicker } from '../time-picker.js';
import { getSignCompendium } from '../zodiac-compendium.js';

export const renderNatalChartView = ({ locale = 'tr', searchParams = {} }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';
  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';

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
    <div class="astro-chart-result">
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

      <!-- Kişisel Büyük Üçlü Ruhsal Analiz Raporu -->
      <div class="natal-interpretation-dossier" style="margin-bottom:32px; padding:28px 30px; background:linear-gradient(165deg, rgba(14,18,34,0.92) 0%, rgba(6,8,16,0.98) 100%); border:1px solid rgba(212,175,55,0.35); border-radius:20px; box-shadow:0 20px 50px rgba(0,0,0,0.7)">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:16px; margin-bottom:24px; flex-wrap:wrap; gap:12px">
          <div>
            <span class="astro-card-tag">✦ ${locale === 'tr' ? 'KİŞİYE ÖZEL KOZMİK PORTRE' : 'PERSONAL COSMIC PORTRAIT'}</span>
            <h3 style="font-family:var(--font-serif); font-size:24px; color:#fff; margin:4px 0 0">${locale === 'tr' ? 'Büyük Üçlü Ruhsal Analiz Raporunuz' : 'Your Big Three Archetypal Synthesis'}</h3>
          </div>
          <span style="font-size:12.5px; color:var(--gold-bright)">${birthDate} · ${birthCity}</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:20px">
          <!-- Güneş -->
          <div style="padding:18px 22px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px">
            <h4 style="font-family:var(--font-serif); font-size:17.5px; color:var(--gold); margin:0 0 8px; display:flex; align-items:center; gap:8px">
              <span>☉</span>
              <span>${locale === 'tr' ? `Güneş ${chartResult.sun.sign} Burcunda: Öz Benliğiniz ve Yaşam Amacınız` : `Sun in ${chartResult.sun.sign}: Core Purpose`}</span>
            </h4>
            <p style="font-size:14px; color:rgba(248,246,240,0.88); line-height:1.7; margin:0 0 10px">${getSignCompendium(chartResult.sun?.signId).soulEssence[loc] || getSignCompendium(chartResult.sun?.signId).soulEssence.tr}</p>
            <p style="font-size:13px; color:var(--gold-bright); margin:0"><strong>✦ ${locale === 'tr' ? 'Kozmik Rolünüz' : 'Cosmic Role'}:</strong> ${getSignCompendium(chartResult.sun?.signId).inBigThree.sun}</p>
          </div>

          <!-- Ay -->
          <div style="padding:18px 22px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px">
            <h4 style="font-family:var(--font-serif); font-size:17.5px; color:var(--gold); margin:0 0 8px; display:flex; align-items:center; gap:8px">
              <span>☽</span>
              <span>${locale === 'tr' ? `Ay ${chartResult.moon.sign} Burcunda: Duygusal Güvenlik ve İçsel Dünyanız` : `Moon in ${chartResult.moon.sign}: Emotional Core`}</span>
            </h4>
            <p style="font-size:14px; color:rgba(248,246,240,0.88); line-height:1.7; margin:0 0 10px">${getSignCompendium(chartResult.moon?.signId).soulEssence[loc] || getSignCompendium(chartResult.moon?.signId).soulEssence.tr}</p>
            <p style="font-size:13px; color:var(--gold-bright); margin:0"><strong>✦ ${locale === 'tr' ? 'Duygusal Beslenme İhtiyacınız' : 'Emotional Need'}:</strong> ${getSignCompendium(chartResult.moon?.signId).inBigThree.moon}</p>
          </div>

          <!-- Yükselen -->
          ${chartResult.asc ? `
            <div style="padding:18px 22px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px">
              <h4 style="font-family:var(--font-serif); font-size:17.5px; color:var(--gold); margin:0 0 8px; display:flex; align-items:center; gap:8px">
                <span>↑</span>
                <span>${locale === 'tr' ? `Yükselen ${chartResult.asc.sign} Burcunda: Dünyaya Açılan Maskeniz ve Yaşam Rotanız` : `Ascendant in ${chartResult.asc.sign}: Outer Mask & Aura`}</span>
              </h4>
              <p style="font-size:14px; color:rgba(248,246,240,0.88); line-height:1.7; margin:0 0 10px">${getSignCompendium(chartResult.asc?.signId).soulEssence[loc] || getSignCompendium(chartResult.asc?.signId).soulEssence.tr}</p>
              <p style="font-size:13px; color:var(--gold-bright); margin:0"><strong>✦ ${locale === 'tr' ? 'Dış Dünyadaki Auranız' : 'Outer Aura'}:</strong> ${getSignCompendium(chartResult.asc?.signId).inBigThree.rising}</p>
            </div>
          ` : `
            <div style="padding:14px 18px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; font-size:13px; color:var(--muted)">
              ${locale === 'tr' ? 'Doğum saati girilmediği için Yükselen burç (ASC) ve ev yerleşimleri hesaplanmadı. Tam saat bilindiğinde dünyaya açılan pencereli analiz aktifleşir.' : 'Birth time was omitted; Ascendant and house cusps are omitted.'}
            </div>
          `}
        </div>
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

  const titleMap = {
    tr: 'Doğum Haritası Hesaplama ve Yükselen Analizi',
    en: 'Birth Chart Calculation & Ascendant Synthesis',
    el: 'Υπολογισμός Γενέθλιου Χάρτη & Ανάλυση Ωροσκόπου',
    es: 'Cálculo de Carta Natal y Análisis del Ascendente',
    ar: 'حساب خريطة الميلاد وتحليل الطالع الفلكي'
  };

  const eyebrowMap = {
    tr: '✦ ASTRONOMY ENGINE KORUMALI MATEMATİKSEL DOĞUM HARİTASI',
    en: '✦ ASTRONOMY ENGINE VERIFIED CELESTIAL NATAL CHART',
    el: '✦ ΜΑΘΗΜΑΤΙΚΟΣ ΓΕΝΕΘΛΙΟΣ ΧΑΡΤΗΣ ΜΕ ASTRONOMY ENGINE',
    es: '✦ CARTA NATAL MATEMÁTICA CON ASTRONOMY ENGINE',
    ar: '✦ خريطة ميلاد فلكية دقيقة مدعومة بمحرك الفلك'
  };

  const standardsMap = {
    tr: 'Europe/Istanbul (TSİ) referanslı · Katı 24 saat formatı · Açık kaynaklı efemeris algoritmaları',
    en: 'Local timezone & UTC referenced · Strict 24-hour format · Open-source ephemeris algorithms',
    el: 'Αναφορά τοπικής ώρας & UTC · Αυστηρή 24ωρη μορφή · Αλγόριθμοι εφημερίδων ανοιχτού κώδικα',
    es: 'Referencia horaria local y UTC · Formato estricto de 24 horas · Algoritmos de efemérides abiertas',
    ar: 'مرجع التوقيت المحلي وUTC · نظام 24 ساعة صارم · خوارزميات فلكية مفتوحة المصدر'
  };

  const boxTagMap = {
    tr: '✦ MATEMATİKSEL ENSTRÜMAN',
    en: '✦ MATHEMATICAL INSTRUMENT',
    el: '✦ ΜΑΘΗΜΑΤΙΚΟ ΕΡΓΑΛΕΙΟ',
    es: '✦ INSTRUMENTO MATEMÁTICO',
    ar: '✦ أداة فلكية رياضية'
  };

  const cityHelperMap = {
    tr: '81 İl ve Dünya Koordinat Eşlemesi',
    en: 'Global coordinate & timezone lookup',
    el: 'Αυτόματη εύρεση συντεταγμένων & ζώνης ώρας',
    es: 'Búsqueda global de coordenadas y huso horario',
    ar: 'مطابقة تلقائية للإحداثيات والمنطقة الزمنية عالمياً'
  };

  const cityQuickPicks = {
    tr: [
      ['Istanbul', 'İstanbul'],
      ['Ankara', 'Ankara'],
      ['Izmir', 'İzmir'],
      ['London', 'London'],
      ['Athens', 'Athens']
    ],
    en: [
      ['London', 'London'],
      ['New York', 'New York'],
      ['Los Angeles', 'Los Angeles'],
      ['Paris', 'Paris'],
      ['Sydney', 'Sydney']
    ],
    el: [
      ['Athens', 'Αθήνα'],
      ['Thessaloniki', 'Θεσσαλονίκη'],
      ['Nicosia', 'Λευκωσία'],
      ['Heraklion', 'Ηράκλειο'],
      ['London', 'London']
    ],
    es: [
      ['Madrid', 'Madrid'],
      ['Barcelona', 'Barcelona'],
      ['Buenos Aires', 'Buenos Aires'],
      ['Ciudad de Mexico', 'Ciudad de México'],
      ['Bogota', 'Bogotá']
    ],
    ar: [
      ['Riyadh', 'الرياض'],
      ['Dubai', 'دبي'],
      ['Cairo', 'القاهرة'],
      ['Baghdad', 'بغداد'],
      ['Istanbul', 'إسطنبول']
    ]
  };

  const currentCities = cityQuickPicks[loc] || cityQuickPicks.tr;

  return `
    <!-- Integrated Full-Viewport Console: Editorial Identity + Astrolabe Form in 1 Clean Viewport -->
    <section class="natal-stage-viewport">
      <div class="astro-container">
        <div class="natal-console-grid">
          <!-- Editorial Side -->
          <div class="natal-editorial-side">
            <span class="astro-hero-eyebrow">${eyebrowMap[loc] || eyebrowMap.tr}</span>
            <h1 class="natal-main-title">${titleMap[loc] || titleMap.tr}</h1>
            <p class="natal-main-lead">${t.hero.lead}</p>

            <div class="natal-triad-pills">
              <div class="natal-triad-pill">
                <span class="pill-glyph" aria-hidden="true">☉</span>
                <div>
                  <strong>${loc === 'tr' ? 'Güneş' : loc === 'en' ? 'Sun' : loc === 'el' ? 'Ήλιος' : loc === 'es' ? 'Sol' : 'الشمس'}</strong>
                  <small>${loc === 'tr' ? 'Bilinç & İrade' : loc === 'en' ? 'Conscious Will' : loc === 'el' ? 'Συνείδηση' : loc === 'es' ? 'Voluntad' : 'الوعي والإرادة'}</small>
                </div>
              </div>
              <div class="natal-triad-pill">
                <span class="pill-glyph" aria-hidden="true">☽</span>
                <div>
                  <strong>${loc === 'tr' ? 'Ay' : loc === 'en' ? 'Moon' : loc === 'el' ? 'Σελήνη' : loc === 'es' ? 'Luna' : 'القمر'}</strong>
                  <small>${loc === 'tr' ? 'Duygu & Hafıza' : loc === 'en' ? 'Emotion & Memory' : loc === 'el' ? 'Συναίσθημα' : loc === 'es' ? 'Emoción' : 'العاطفة والذاكرة'}</small>
                </div>
              </div>
              <div class="natal-triad-pill">
                <span class="pill-glyph" aria-hidden="true">↑</span>
                <div>
                  <strong>${loc === 'tr' ? 'Yükselen' : loc === 'en' ? 'Ascendant' : loc === 'el' ? 'Ωροσκόπος' : loc === 'es' ? 'Ascendente' : 'الطالع'}</strong>
                  <small>${loc === 'tr' ? 'Dünyayla Arayüz' : loc === 'en' ? 'Outer Persona' : loc === 'el' ? 'Εξωτερική Εικόνα' : loc === 'es' ? 'Interfaz Externa' : 'الواجهة الخارجية'}</small>
                </div>
              </div>
            </div>

            <div class="natal-standards-box">
              <span style="color:var(--gold-bright)">✦</span>
              <span>${standardsMap[loc] || standardsMap.tr}</span>
            </div>
          </div>

          <!-- Astrolabe Calculation Console Side -->
          <div class="natal-instrument-side">
            <div class="natal-astrolabe-box">
              <div class="natal-box-head">
                <div>
                  <span class="natal-box-tag">${boxTagMap[loc] || boxTagMap.tr}</span>
                  <h2 class="natal-box-title">${t.quickNatal.title}</h2>
                </div>
                <span class="natal-box-badge">24h</span>
              </div>

              <form action="${getRouteHref(locale, 'natal')}" method="get" class="natal-form-inner" autocomplete="off">
                <div class="natal-form-row">
                  <div class="natal-form-field">
                    <label for="birth-date">${t.quickNatal.labelDate} *</label>
                    <input type="date" id="birth-date" name="date" required value="${birthDate || '1995-03-21'}">
                  </div>

                  <div class="natal-form-field">
                    <label for="birth-hour">${t.quickNatal.labelTime} (24h) *</label>
                    ${render24hTimePicker({ idPrefix: 'birth', name: 'time', defaultValue: birthTime || '14:30', locale: loc, ariaLabelHour: t.quickNatal.labelTime })}
                  </div>
                </div>

                <div class="natal-form-field">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px">
                    <label for="birth-place" style="margin:0">${t.quickNatal.labelCity} *</label>
                    <span style="font-size:11px; color:var(--dim)">${cityHelperMap[loc] || cityHelperMap.tr}</span>
                  </div>
                  <input type="text" id="birth-place" name="city" placeholder="${loc === 'tr' ? 'İstanbul, Ankara, İzmir...' : loc === 'en' ? 'London, New York, Paris...' : loc === 'el' ? 'Αθήνα, Θεσσαλονίκη, London...' : loc === 'es' ? 'Madrid, Barcelona, Buenos Aires...' : 'الرياض، دبي، القاهرة...'}" required value="${birthCity || (currentCities[0] && currentCities[0][0]) || 'Istanbul'}" autocomplete="off">
                  <div class="natal-city-quick-picks">
                    ${currentCities.map(([val, label]) => `<button type="button" onclick="document.getElementById('birth-place').value='${val}'">${label}</button>`).join('')}
                  </div>
                </div>

                <div class="natal-options-row">
                  <label class="natal-check-label">
                    <input type="checkbox" id="time-unknown" name="unknown_time" value="1" ${unknownTime ? 'checked' : ''} onchange="var h=document.getElementById('birth-hour'),m=document.getElementById('birth-min');if(h&&m){h.disabled=this.checked;m.disabled=this.checked;}">
                    <span>${t.quickNatal.unknownTime}</span>
                  </label>
                </div>

                <button type="submit" class="natal-submit-btn">
                  <span>${t.quickNatal.submitBtn}</span>
                  <span aria-hidden="true">${arrow}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section (If calculated) -->
    ${chartResult ? `
      <section class="astro-section astro-section-viewport" id="natal-results">
        <div class="astro-container">
          ${resultHtml}
        </div>
      </section>
    ` : ''}
  `;
};
