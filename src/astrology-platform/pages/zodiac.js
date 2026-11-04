// Mythborn Astrology Platform — 12 Zodiac Signs Guide & In-Depth Archetypal Compendium
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS, ZODIAC_LOCALIZED } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { ZODIAC_COMPENDIUM } from '../zodiac-compendium.js';

export const renderZodiacIndexView = ({ locale = 'tr', searchParams = {} }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  const requestedSign = searchParams.sign || 'koc';
  const activeSlug = ZODIAC_COMPENDIUM[requestedSign] ? requestedSign : 'koc';
  const activeData = ZODIAC_COMPENDIUM[activeSlug];
  const activeSignMeta = ZODIAC_SIGNS.find(s => s.slug === activeSlug) || ZODIAC_SIGNS[0];

  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';

  const activeSignName = activeData.names[loc] || activeData.names.tr;
  const activeArchetype = activeData.archetypeTitle[loc] || activeData.archetypeTitle.tr;
  const activeSoul = activeData.soulEssence[loc] || activeData.soulEssence.tr;
  const activeStrengths = activeData.strengths[loc] || activeData.strengths.tr;
  const activeShadows = activeData.shadows[loc] || activeData.shadows.tr;
  const activeLove = activeData.loveStyle[loc] || activeData.loveStyle.tr;
  const activeCareer = activeData.careerVocation[loc] || activeData.careerVocation.tr;
  const activeLesson = activeData.lifeLesson[loc] || activeData.lifeLesson.tr;
  const activeInBigThree = activeData.inBigThree;

  const elementLabel = (ZODIAC_LOCALIZED.elements[activeData.element] && ZODIAC_LOCALIZED.elements[activeData.element][loc]) || activeData.element;
  const qualityLabel = (ZODIAC_LOCALIZED.qualities[activeData.quality] && ZODIAC_LOCALIZED.qualities[activeData.quality][loc]) || activeData.quality;
  const rulerLabel = (ZODIAC_LOCALIZED.rulers[activeSignMeta.ruler] && ZODIAC_LOCALIZED.rulers[activeSignMeta.ruler][loc]) || activeSignMeta.ruler;
  const datesLabel = (ZODIAC_LOCALIZED.dates[activeSlug] && ZODIAC_LOCALIZED.dates[activeSlug][loc]) || activeSignMeta.dates;

  // 12 sign selector pills
  const selectorHtml = ZODIAC_SIGNS.map(s => {
    const isCur = s.slug === activeSlug;
    const sName = s[loc] || s.tr;
    return `
      <a href="${getRouteHref(locale, 'zodiac')}?sign=${s.slug}#dossier" class="zodiac-pill-item ${isCur ? 'is-active' : ''}">
        <span class="zodiac-pill-glyph" aria-hidden="true">${s.symbol}</span>
        <span class="zodiac-pill-label">${sName}</span>
      </a>
    `;
  }).join('');

  // 12 cards grid
  const cardsHtml = ZODIAC_SIGNS.map((sign) => {
    const signName = sign[loc] || sign.tr;
    const comp = ZODIAC_COMPENDIUM[sign.slug] || {};
    const signArchetype = comp.archetypeTitle?.[loc] || comp.archetypeTitle?.tr || '';
    const signSoul = comp.soulEssence?.[loc] || comp.soulEssence?.tr || '';

    const signElementLabel = (ZODIAC_LOCALIZED.elements[sign.element] && ZODIAC_LOCALIZED.elements[sign.element][loc]) || sign.element;
    const signQualityLabel = (ZODIAC_LOCALIZED.qualities[sign.quality] && ZODIAC_LOCALIZED.qualities[sign.quality][loc]) || sign.quality;
    const signRulerLabel = (ZODIAC_LOCALIZED.rulers[sign.ruler] && ZODIAC_LOCALIZED.rulers[sign.ruler][loc]) || sign.ruler;
    const signDatesLabel = (ZODIAC_LOCALIZED.dates[sign.slug] && ZODIAC_LOCALIZED.dates[sign.slug][loc]) || sign.dates;

    const naturalTitle = locale === 'tr' ? `${signName} Burcu`
      : locale === 'en' ? `${signName} Archetype`
      : locale === 'el' ? `Ζώδιο ${signName}`
      : locale === 'es' ? `Signo ${signName}`
      : `برج ${signName}`;

    const isFeatured = sign.slug === activeSlug;

    const upperElement = loc === 'tr' ? signElementLabel.replace(/i/g, 'İ').toUpperCase() : signElementLabel.toUpperCase();

    return `
      <article id="${sign.slug}" class="zodiac-natural-card ${isFeatured ? 'is-featured-border' : ''}">
        <div class="zodiac-natural-header">
          <div class="zodiac-icon-badge" aria-hidden="true">
            <span class="zodiac-glyph-mark">${sign.symbol}</span>
          </div>
          <span class="zodiac-element-tag element-${sign.element}">${upperElement}</span>
        </div>

        <h3 class="zodiac-natural-title">${naturalTitle}</h3>
        <p class="zodiac-archetype-subtitle">✦ ${signArchetype}</p>
        <p class="zodiac-natural-ruler">🪐 ${signRulerLabel} · ${signQualityLabel}</p>
        <div class="zodiac-natural-dates">${signDatesLabel}</div>

        <p class="zodiac-card-desc">
          ${signSoul}
        </p>

        <div class="zodiac-card-footer">
          <a href="${getRouteHref(locale, 'zodiac')}?sign=${sign.slug}#dossier" class="zodiac-deep-link">
            <span>${locale === 'tr' ? 'Detaylı Dosyayı Aç' : locale === 'en' ? 'Open Deep Dossier' : locale === 'el' ? 'Πλήρης Οδηγός' : locale === 'es' ? 'Ver Dossier Profundo' : 'فتح الدليل المفصل'}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="astro-hero" style="padding-bottom:20px">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ 12 BURÇ ARKETİPİ, DERİN PSİKOLOJİ & KOZMİK MİZAÇ</span>
        <h1>${t.sections.zodiacTitle}</h1>
        <p class="astro-hero-lead">${locale === 'tr' ? 'Her burç; yaşamın farklı bir arzusunu, ışığını ve gölgesini temsil eden kadim bir arketiptir. Kendinizi, partnerinizi ve sevdiklerinizi yüzeysel genellemelerle değil, derin psikolojik boyutlarıyla keşfedin.' : t.sections.zodiacSub}</p>

        <!-- 12 Burç Hızlı Gezinti Çubuğu -->
        <div class="zodiac-selector-scroll">
          ${selectorHtml}
        </div>
      </div>
    </section>

    <!-- Seçili Burcun Derinlemesine Arketip Dosyası (Deep-Dive Dossier) -->
    <section class="astro-section" id="dossier" style="padding-top:20px; padding-bottom:40px">
      <div class="astro-container">
        <div class="zodiac-dossier-card">
          <!-- Dosya Başlığı -->
          <div class="zodiac-dossier-hero">
            <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap">
              <div class="zodiac-dossier-icon-box">
                <img src="/assets/astrology/zodiac/${activeSlug}.svg" alt="${activeSignName}" class="zodiac-dossier-img">
              </div>
              <div>
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px">
                  <span class="zodiac-element-tag element-${activeData.element}">${elementLabel.toUpperCase()}</span>
                  <span class="zodiac-quality-tag">${qualityLabel.toUpperCase()}</span>
                  <span class="zodiac-ruler-tag">🪐 ${rulerLabel}</span>
                </div>
                <h2 class="zodiac-dossier-title">${activeSignName} Burcu: ${activeArchetype}</h2>
                <span class="zodiac-dossier-dates">${datesLabel}</span>
              </div>
            </div>
            <a href="${getRouteHref(locale, 'natal')}" class="astro-cta-gold" style="margin-left:auto">
              <span>${locale === 'tr' ? `${activeSignName} Haritanı Çıkar` : t.menu.ctaQuick}</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </div>

          <!-- 1. Ruhsal Öz & Çekirdek Portre -->
          <div class="zodiac-dossier-block">
            <h4 class="zodiac-dossier-block-title">✦ ${locale === 'tr' ? 'Ruhsal Çekirdek & Yaşam Motivasyonu' : 'Soul Essence & Core Drive'}</h4>
            <p class="zodiac-dossier-lead-text">${activeSoul}</p>
          </div>

          <!-- 2. Işık ve Gölge (2 Sütun Yan Yana: İnsanın Kendini Bulduğu Alan) -->
          <div class="zodiac-light-shadow-grid">
            <div class="zodiac-light-box">
              <h4 class="zodiac-light-title">
                <span style="color:#4ade80">✦</span>
                <span>${locale === 'tr' ? 'Işık & Doğuştan Gelen Üstün Yetenekler' : 'Radiance & Natural Gifts'}</span>
              </h4>
              <ul class="zodiac-bullet-list">
                ${activeStrengths.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>

            <div class="zodiac-shadow-box">
              <h4 class="zodiac-shadow-title">
                <span style="color:#f87171">✦</span>
                <span>${locale === 'tr' ? 'Gölge Yönler & Kendini Sabote Ettiği Kör Noktalar' : 'Shadows & Blind Spots'}</span>
              </h4>
              <ul class="zodiac-bullet-list">
                ${activeShadows.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- 3. Aşk, İlişkiler ve Kariyer (2 Sütun) -->
          <div class="zodiac-light-shadow-grid" style="margin-top:20px">
            <div class="zodiac-theme-box">
              <h4 class="zodiac-theme-title">
                <span>❤️</span>
                <span>${locale === 'tr' ? 'Aşk, Bağlanma ve Sevgi Dili' : 'Love & Relational Dynamics'}</span>
              </h4>
              <p class="zodiac-theme-text">${activeLove}</p>
            </div>

            <div class="zodiac-theme-box">
              <h4 class="zodiac-theme-title">
                <span>⚡</span>
                <span>${locale === 'tr' ? 'Kariyer, Üretkenlik ve Başarı Alanı' : 'Vocation, Drive & Mastery'}</span>
              </h4>
              <p class="zodiac-theme-text">${activeCareer}</p>
            </div>
          </div>

          <!-- 4. Ruhsal Tekamül & Yaşam Dersi -->
          <div class="zodiac-dossier-block" style="margin-top:20px; background:rgba(212,175,55,0.04); border-color:rgba(212,175,55,0.2)">
            <h4 class="zodiac-dossier-block-title" style="color:var(--gold-bright)">✦ ${locale === 'tr' ? 'Kozmik Yaşam Dersi & Ruhsal Denge' : 'Evolutionary Life Lesson'}</h4>
            <p class="zodiac-dossier-lead-text" style="color:#f8f6f0">${activeLesson}</p>
          </div>

          <!-- 5. Büyük Üçlüdeki Yeri -->
          <div class="zodiac-big3-role-box">
            <h4 class="zodiac-dossier-block-title">✦ ${locale === 'tr' ? `${activeSignName} Burcunun Büyük Üçlüdeki Rolü` : 'Role in the Cosmic Big Three'}</h4>
            <div class="zodiac-big3-grid">
              <div class="zodiac-big3-col">
                <strong style="color:var(--gold)">☉ ${locale === 'tr' ? 'Güneş Bu Burçtaysa' : 'If Sun is Here'}:</strong>
                <p>${activeInBigThree.sun}</p>
              </div>
              <div class="zodiac-big3-col">
                <strong style="color:var(--gold)">☽ ${locale === 'tr' ? 'Ay Bu Burçtaysa' : 'If Moon is Here'}:</strong>
                <p>${activeInBigThree.moon}</p>
              </div>
              <div class="zodiac-big3-col">
                <strong style="color:var(--gold)">↑ ${locale === 'tr' ? 'Yükselen Bu Burçtaysa' : 'If Ascendant is Here'}:</strong>
                <p>${activeInBigThree.rising}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 12 Burcun Tamamını İnceleme Galerisi -->
    <section class="astro-section" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head" style="margin-bottom:32px">
          <span class="astro-card-tag">✦ TÜM 12 BURÇ KATALOĞU</span>
          <h2>Zodyakın 12 Arketipi</h2>
          <p>Her bir burcun ruhsal kimliğini incelemek için kart üzerindeki detaylı dosyayı açın.</p>
        </div>

        <div class="astro-grid-3">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
};
