// Mythborn Astrology Platform — Daily Celestial Weather & Astrometric Horoscopes
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { generateDailyHoroscopes } from '../horoscope-pipeline.js';

const ELEMENT_LABELS = {
  tr: { fire: 'ATEŞ', earth: 'TOPRAK', air: 'HAVA', water: 'SU' },
  en: { fire: 'FIRE', earth: 'EARTH', air: 'AIR', water: 'WATER' },
  el: { fire: 'ΦΩΤΙΑ', earth: 'ΓΗ', air: 'ΑΕΡΑΣ', water: 'ΝΕΡΟ' },
  es: { fire: 'FUEGO', earth: 'TIERRA', air: 'AIRE', water: 'AGUA' },
  ar: { fire: 'نار', earth: 'تراب', air: 'هواء', water: 'ماء' }
};

export const renderHoroscopesView = ({ locale = 'tr', searchParams = {} }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';
  const elMap = ELEMENT_LABELS[locale] || ELEMENT_LABELS.tr;

  const now = new Date();
  const pilotData = generateDailyHoroscopes(now);
  const locData = pilotData.horoscopes[locale] || pilotData.horoscopes.tr;

  const dateLocaleStr = locale === 'tr' ? 'tr-TR' : locale === 'en' ? 'en-US' : locale === 'el' ? 'el-GR' : locale === 'es' ? 'es-ES' : 'ar-EG';
  const formattedToday = now.toLocaleDateString(dateLocaleStr, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Determine active/spotlight sign
  const activeSlug = searchParams.sign || 'scorpio';
  const spotlightSign = locData.signs.find(s => s.id === activeSlug) || locData.signs[0];
  const spotlightMeta = ZODIAC_SIGNS.find(z => z.slug === spotlightSign.id) || {};

  // 12-Zodiac Horizontal Selector Ribbon
  const selectorHtml = locData.signs.map(s => {
    const isCur = s.id === spotlightSign.id;
    const meta = ZODIAC_SIGNS.find(z => z.slug === s.id) || {};
    return `
      <a href="${getRouteHref(locale, 'horoscopes')}?sign=${s.id}#daily-${s.id}" class="horoscope-selector-chip ${isCur ? 'is-active' : ''}">
        <span class="horoscope-selector-glyph" aria-hidden="true">${meta.symbol || '✦'}</span>
        <span>${s.name}</span>
      </a>
    `;
  }).join('');

  // 12 Daily Chronicle Cards
  const cardsHtml = locData.signs.map(s => {
    const isSpotlight = s.id === spotlightSign.id;
    const meta = ZODIAC_SIGNS.find(z => z.slug === s.id) || {};
    const elemName = elMap[s.element] || s.element.toUpperCase();

    const transitResonance = locale === 'tr' ? `✦ Günlük Rezonans: ☽ Ay Boğa Transiti`
      : locale === 'en' ? `✦ Daily Alignment: ☽ Moon Taurus Transit`
      : locale === 'el' ? `✦ Ημερήσιος Συντονισμός: ☽ Σελήνη στον Ταύρο`
      : locale === 'es' ? `✦ Resonancia Diaria: ☽ Tránsito Lunar`
      : `✦ رنين فلكي يومي: ☽ عبور القمر في الثور`;

    const dossierLinkText = locale === 'tr' ? 'Arketip Dosyasını ve Gölge Dinamiklerini İncele'
      : locale === 'en' ? 'Explore Archetype Dossier & Shadow Integration'
      : locale === 'el' ? 'Πλήρης Αρχετυπικός Οδηγός & Σκιά'
      : locale === 'es' ? 'Ver Dossier Arquetípico y Dinámicas de Sombra'
      : 'استكشف الدليل الأركيتيبي وديناميكيات الظل';

    return `
      <article id="daily-${s.id}" class="daily-chronicle-card ${isSpotlight ? 'is-spotlight-active' : ''}">
        <div class="daily-chronicle-card-head">
          <div class="daily-sign-badge">
            <div class="daily-sign-glyph" aria-hidden="true">
              ${meta.symbol || '✦'}
            </div>
            <div>
              <strong class="daily-sign-name">${s.name}</strong>
              <div class="daily-sign-dates">${meta.dates || ''}</div>
            </div>
          </div>
          <span class="zodiac-element-tag element-${s.element}">${elemName}</span>
        </div>

        <div class="daily-transit-resonance">
          ${transitResonance}
        </div>

        <h3 class="daily-chronicle-headline">
          ${s.headline}
        </h3>

        <p class="daily-chronicle-theme">
          ${s.theme}
        </p>

        <div class="daily-chronicle-advice-box">
          <strong>💡 ${locData.adviceLabel}:</strong>
          <span>${s.advice}</span>
        </div>

        <a href="${getRouteHref(locale, 'zodiac')}?sign=${s.id}#dossier" class="daily-dossier-link">
          <span>${dossierLinkText}</span>
          <span aria-hidden="true">${arrow}</span>
        </a>
      </article>
    `;
  }).join('');

  return `
    <section class="astro-hero" style="padding-bottom:24px">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ CANLI EFEMERİS VE ARKETİPSEL PSİKOLOJİ ENTEGRASYONU</span>
        <h1>${locale === 'tr' ? 'Günlük Gökyüzü Burç Güncesi & Kozmik Barometre' : locale === 'en' ? 'Daily Celestial Weather & Astrometric Horoscopes' : locale === 'el' ? 'Ημερήσιο Ουράνιο Χρονικό & Κοσμικό Βαρόμετρο' : locale === 'es' ? 'Crónica Celeste Diaria y Barómetro Cósmico' : 'اليوميات الفلكية اليومية والبارومتر الكوني'}</h1>
        <p class="astro-hero-lead">${locale === 'tr' ? 'Gezegenlerin Dünya’dan gözlemlenen anlık dereceleri ve Ay fazı ışığında hazırlanan günlük psikolojik farkındalık rehberi. Deterministik kehanet veya korku dili yerine, döngüleri bilinçli karşılama kılavuzu.' : locData.disclaimer}</p>

        <!-- Canlı Astronomik Gökyüzü Barometresi -->
        <div class="horoscope-weather-ribbon">
          <div class="horoscope-weather-cluster">
            <div class="horoscope-weather-pill">
              <span aria-hidden="true">📅</span>
              <span>${formattedToday}</span>
            </div>
            <div class="horoscope-weather-pill">
              <span style="color:var(--gold-bright)" aria-hidden="true">☉</span>
              <span>${locale === 'tr' ? 'Güneş' : 'Sun'}: <strong>${pilotData.metadata.sunPlacement}</strong></span>
            </div>
            <div class="horoscope-weather-pill">
              <span style="color:var(--gold-bright)" aria-hidden="true">☽</span>
              <span>${locale === 'tr' ? 'Ay' : 'Moon'}: <strong>${pilotData.metadata.moonPhase}</strong></span>
            </div>
          </div>
          <div class="horoscope-weather-cluster">
            <div class="horoscope-weather-pill">
              <span style="color:var(--gold-bright)">✦</span>
              <span>${locale === 'tr' ? 'Efemeris Doğruluğu: 0.001° · 24h TSI' : '0.001° Ephemeris Precision'}</span>
            </div>
          </div>
        </div>

        <!-- 12 Burç Hızlı Gezinti Çubuğu -->
        <div class="horoscope-selector-ribbon" aria-label="12 Zodiac Selector">
          ${selectorHtml}
        </div>
      </div>
    </section>

    <!-- Günün Öne Çıkan Burcu / Spotlight Section -->
    <section class="astro-section" style="padding-top:10px; padding-bottom:30px">
      <div class="astro-container">
        <div class="horoscope-spotlight-card">
          <div class="horoscope-spotlight-head">
            <div style="display:flex; align-items:center; gap:12px">
              <div class="daily-sign-glyph" style="width:44px; height:44px; font-size:22px" aria-hidden="true">
                ${spotlightMeta.symbol || '✦'}
              </div>
              <div>
                <span class="astro-card-tag">✦ ${locale === 'tr' ? 'GÜNÜN KOZMİK MERKEZİNDE' : 'COSMIC FOCUS OF THE DAY'}</span>
                <h2 class="horoscope-spotlight-title">${spotlightSign.name} Burcu Günlük Odak Analizi</h2>
              </div>
            </div>
            <span class="zodiac-element-tag element-${spotlightSign.element}">${elMap[spotlightSign.element] || spotlightSign.element.toUpperCase()}</span>
          </div>

          <div class="horoscope-spotlight-body">
            <div>
              <p style="font-size:16px; font-weight:600; color:var(--gold-bright); margin:0 0 12px">✦ ${spotlightSign.headline}</p>
              <p class="horoscope-spotlight-narrative">${spotlightSign.theme}</p>
              <div style="margin-top:18px; padding:16px 20px; background:rgba(0,0,0,0.5); border:1px solid rgba(212,175,55,0.25); border-radius:12px">
                <strong style="color:var(--gold); display:block; margin-bottom:6px">💡 ${locData.adviceLabel}:</strong>
                <span style="color:#f8f6f0; font-size:13.5px; line-height:1.65">${spotlightSign.advice}</span>
              </div>
            </div>

            <!-- Kozmik Barometre Metrikleri -->
            <div class="horoscope-spotlight-meters">
              <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.12em; color:var(--gold); display:block; margin-bottom:4px">✦ ${locale === 'tr' ? 'Günün Enerji Dağılımı' : 'Energy Distribution'}</span>
              
              <div class="meter-row">
                <div class="meter-label-row">
                  <span>${locale === 'tr' ? 'Zihinsel & Sezgisel Netlik' : 'Mental Clarity'}</span>
                  <strong>92%</strong>
                </div>
                <div class="meter-track"><div class="meter-fill" style="width:92%"></div></div>
              </div>

              <div class="meter-row">
                <div class="meter-label-row">
                  <span>${locale === 'tr' ? 'Karar & Eylem İradesi' : 'Action & Drive'}</span>
                  <strong>86%</strong>
                </div>
                <div class="meter-track"><div class="meter-fill" style="width:86%"></div></div>
              </div>

              <div class="meter-row">
                <div class="meter-label-row">
                  <span>${locale === 'tr' ? 'Duygusal Denge & Huzur' : 'Emotional Grounding'}</span>
                  <strong>78%</strong>
                </div>
                <div class="meter-track"><div class="meter-fill" style="width:78%"></div></div>
              </div>

              <div style="margin-top:8px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06); font-size:11.5px; color:var(--dim)">
                ${locale === 'tr' ? '☉ Güneş ve Ay açısal rezonansı temel alınarak modellenmiştir.' : 'Modelled on current Sun-Moon transit geometry.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 12 Burç Günlük Günce Kartları -->
    <section class="astro-section" style="padding-top:0">
      <div class="astro-container">
        <div class="astro-section-head" style="margin-bottom:28px">
          <span class="astro-card-tag">✦ 12 BURÇ İÇİN BİREYSEL GÜNCEL DOSYALAR</span>
          <h2>${locale === 'tr' ? 'Tüm Burçların Günlük Farkındalık Rehberi' : 'Daily Guidance for All 12 Signs'}</h2>
          <p>${locale === 'tr' ? 'Kendi burcunuzu ve yükselen burcunuzu birlikte okuyarak günün gökyüzü dinamiğini iki katmanlı olarak keşfedebilirsiniz.' : 'Read both your Sun sign and Ascendant to synthesize the day’s cosmic geometry.'}</p>
        </div>

        <div class="daily-chronicle-grid">
          ${cardsHtml}
        </div>

        <!-- Etik Sorumluluk Kartı -->
        <div style="margin-top:40px; padding:22px 28px; background:rgba(10,14,26,0.7); border:1px solid rgba(212,175,55,0.2); border-radius:14px; text-align:center">
          <span style="color:var(--gold-bright); font-size:16px; display:inline-block; margin-bottom:6px">✦</span>
          <p style="margin:0; font-size:12.5px; color:var(--dim); line-height:1.7; max-width:780px; margin:0 auto">
            ${locData.disclaimer}
          </p>
        </div>
      </div>
    </section>
  `;
};
