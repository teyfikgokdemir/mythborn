// Mythborn Astrology Platform — Homepage View
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS, ZODIAC_LOCALIZED } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { renderEbcedPromo } from '../ebced-promo.js';
import { render24hTimePicker } from '../time-picker.js';

const safe = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const renderHomeView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';
  const clean = (txt) => (txt || '').replace(/[→←\s]+$/, '');

  // 12 Zodiac Cards — Fully Localized (Zero English in TR) + Radiant Astronomical Glyph Badges
  const zodiacCardsHtml = ZODIAC_SIGNS.map((sign) => {
    const signName = sign[loc] || sign.tr;
    const titleText = locale === 'tr' ? `${signName} Burcu`
      : locale === 'en' ? `${signName} Sign`
      : locale === 'el' ? `Ζώδιο: ${signName}`
      : locale === 'es' ? `Signo ${signName}`
      : `برج ${signName}`;

    const linkText = locale === 'tr' ? 'Detaylı İncele'
      : locale === 'en' ? 'Explore Archetype'
      : locale === 'el' ? 'Ανάλυση'
      : locale === 'es' ? 'Explorar'
      : 'استكشاف';

    const elementLabel = (ZODIAC_LOCALIZED.elements[sign.element] && ZODIAC_LOCALIZED.elements[sign.element][loc]) || sign.element;
    const qualityLabel = (ZODIAC_LOCALIZED.qualities[sign.quality] && ZODIAC_LOCALIZED.qualities[sign.quality][loc]) || sign.quality;
    const rulerLabel = (ZODIAC_LOCALIZED.rulers[sign.ruler] && ZODIAC_LOCALIZED.rulers[sign.ruler][loc]) || sign.ruler;
    const datesLabel = (ZODIAC_LOCALIZED.dates[sign.slug] && ZODIAC_LOCALIZED.dates[sign.slug][loc]) || sign.dates;

    const upperElement = loc === 'tr' ? elementLabel.replace(/i/g, 'İ').toUpperCase() : elementLabel.toUpperCase();

    return `
      <article class="zodiac-natural-card">
        <div class="zodiac-natural-header">
          <div class="zodiac-icon-badge" aria-hidden="true">
            <span class="zodiac-glyph-mark">${sign.symbol}</span>
          </div>
          <span class="zodiac-element-tag element-${sign.element}">${upperElement}</span>
        </div>
        <h3 class="zodiac-natural-title">${titleText}</h3>
        <p class="zodiac-natural-ruler">🪐 ${rulerLabel} · ${qualityLabel}</p>
        <div class="zodiac-natural-dates">${datesLabel}</div>
        <a class="astro-card-link" style="margin-top:10px" href="${getRouteHref(locale, 'zodiac')}?sign=${sign.slug}#dossier">
          <span>${clean(linkText)}</span>
          <span aria-hidden="true">${arrow}</span>
        </a>
      </article>
    `;
  }).join('');

  const quickCityHelperMap = {
    tr: 'Türkiye’nin 81 ili ve tüm dünya şehirleri için anında koordinat ve saat dilimi eşlemesi.',
    en: 'Instant coordinate and timezone lookup for global cities.',
    el: 'Άμεσος εντοπισμός συντεταγμένων και ζώνης ώρας για πόλεις παγκοσμίως.',
    es: 'Búsqueda instantánea de coordenadas y huso horario para ciudades globales.',
    ar: 'تحديد فوري للإحداثيات والمنطقة الزمنية للمدن حول العالم.'
  };

  const quickCityPlaceholderMap = {
    tr: 'İstanbul, Ankara, İzmir...',
    en: 'London, New York, Paris...',
    el: 'Αθήνα, Θεσσαλονίκη, London...',
    es: 'Madrid, Barcelona, Buenos Aires...',
    ar: 'الرياض، دبي، القاهرة...'
  };

  const quickCityDefaultMap = {
    tr: 'Istanbul',
    en: 'London',
    el: 'Athens',
    es: 'Madrid',
    ar: 'Riyadh'
  };

  const toolCards = t.tools || [];

  return `
    <!-- 1. Hero: Ultra-Luxury Celestial Cosmos Artwork & Clear CTAs -->
    <section class="astro-hero astro-section-viewport">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ ${t.hero.eyebrow}</span>
        <h1>${t.hero.title}</h1>
        <p class="astro-hero-lead">${t.hero.lead}</p>
        <div class="astro-hero-actions">
          <a class="astro-btn-primary" href="${getRouteHref(locale, 'natal')}">
            <span>${clean(t.hero.ctaPrimary)}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
          <a class="astro-btn-ghost" href="${getRouteHref(locale, 'calendar')}">
            <span>${clean(t.hero.ctaSecondary)}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
        </div>

        <!-- 2. Hızlı Doğum Haritası Başlangıç Akışı -->
        <div class="astro-quick-box" id="quick-chart">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:10px">
            <h3 style="font-family:var(--font-serif); font-size:20px; color:#fff">
              ✦ ${t.quickNatal.title}
            </h3>
            <span style="font-size:11.5px; color:var(--gold); letter-spacing:0.04em">
              ${t.timeStandardNotice}
            </span>
          </div>
          <p style="font-size:13px; color:var(--muted); margin-bottom:16px; line-height:1.5">
            ${t.quickNatal.sub}
          </p>
          <form action="${getRouteHref(locale, 'natal')}" method="get" autocomplete="off">
            <div class="astro-quick-grid">
              <div class="astro-quick-field">
                <label for="qk-date">${t.quickNatal.labelDate}</label>
                <input id="qk-date" name="date" type="date" required value="1995-03-21">
              </div>
              <div class="astro-quick-field">
                <label for="qk-hour">${t.quickNatal.labelTime} (24h)</label>
                ${render24hTimePicker({ idPrefix: 'qk', name: 'time', defaultValue: '14:30', locale: loc, ariaLabelHour: t.quickNatal.labelTime })}
              </div>
              <div class="astro-quick-field">
                <label for="qk-city">${t.quickNatal.labelCity}</label>
                <input id="qk-city" name="city" type="text" required placeholder="${quickCityPlaceholderMap[loc] || quickCityPlaceholderMap.tr}" value="${quickCityDefaultMap[loc] || quickCityDefaultMap.tr}" autocomplete="off">
              </div>
            </div>
            <div style="font-size:10.5px; color:var(--dim); margin:-6px 0 14px 0">${quickCityHelperMap[loc] || quickCityHelperMap.tr}</div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap">
              <label style="font-size:12.5px; color:var(--dim); display:inline-flex; align-items:center; gap:8px; cursor:pointer">
                <input type="checkbox" name="unknown_time" value="1" onchange="var h=document.getElementById('qk-hour'),m=document.getElementById('qk-min');if(h&&m){h.disabled=this.checked;m.disabled=this.checked;}">
                <span>${t.quickNatal.unknownTime}</span>
              </label>
              <button type="submit" class="astro-quick-btn">
                <span>${clean(t.quickNatal.submitBtn)}</span>
                <span aria-hidden="true">${arrow}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    ${renderEbcedPromo(locale)}

    <!-- 3. Kozmik Büyük Üçlü (Foundational Triad) with Generated Editorial Artworks -->
    <section class="astro-section astro-section-viewport" id="archetypes">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ${locale === 'tr' ? 'KOZMİK BÜYÜK ÜÇLÜ' : 'THE FOUNDATIONAL TRIAD'}</span>
          <h2>${t.bigThree.title}</h2>
          <p>${t.bigThree.sub}</p>
        </div>
        <div class="archetype-grid">
          <!-- Sun Archetype Card -->
          <article class="archetype-card">
            <div class="archetype-art-wrap">
              <img src="/images/astrology/sun-archetype.jpg" alt="${t.bigThree.sunTitle}" class="archetype-art-img" loading="lazy">
            </div>
            <div class="archetype-card-body">
              <span class="archetype-card-glyph" aria-hidden="true">☉</span>
              <h3 class="archetype-card-title">${t.bigThree.sunTitle}</h3>
              <p class="archetype-card-desc">${t.bigThree.sunDesc}</p>
            </div>
          </article>

          <!-- Moon Archetype Card -->
          <article class="archetype-card">
            <div class="archetype-art-wrap">
              <img src="/images/astrology/moon-archetype.jpg" alt="${t.bigThree.moonTitle}" class="archetype-art-img" loading="lazy">
            </div>
            <div class="archetype-card-body">
              <span class="archetype-card-glyph" aria-hidden="true">☽</span>
              <h3 class="archetype-card-title">${t.bigThree.moonTitle}</h3>
              <p class="archetype-card-desc">${t.bigThree.moonDesc}</p>
            </div>
          </article>

          <!-- Ascendant Archetype Card -->
          <article class="archetype-card">
            <div class="archetype-art-wrap">
              <img src="/images/astrology/ascendant-archetype.jpg" alt="${t.bigThree.risingTitle}" class="archetype-art-img" loading="lazy">
            </div>
            <div class="archetype-card-body">
              <span class="archetype-card-glyph" aria-hidden="true">↑</span>
              <h3 class="archetype-card-title">${t.bigThree.risingTitle}</h3>
              <p class="archetype-card-desc">${t.bigThree.risingDesc}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 4. 12 Zodiac Constellations Section with Tapestry Banner -->
    <section class="astro-section astro-section-viewport" id="zodiac" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ${locale === 'tr' ? '12 ZODYAK ARKETİPİ' : 'ZODIACAL ARCHETYPES'}</span>
          <h2>${t.sections.zodiacTitle}</h2>
          <p>${t.sections.zodiacSub}</p>
        </div>

        <!-- Editorial Celestial Tapestry Showcase -->
        <div class="zodiac-tapestry-wrap">
          <img src="/images/astrology/zodiac-celestial-tapestry.jpg" alt="12 Zodiac Celestial Tapestry" class="zodiac-tapestry-img" loading="lazy">
          <div class="zodiac-tapestry-overlay">
            <h3 class="zodiac-tapestry-title">${locale === 'tr' ? '12 Burç ve Gökyüzü Arketipleri' : 'The 12 Zodiac Archetypes'}</h3>
            <p class="zodiac-tapestry-sub">${locale === 'tr' ? 'Kozmik zodyak çemberinde her burç, insanın evrenle kurduğu temel sembolik diyaloğu ve ruhsal potansiyeli temsil eder.' : 'Every archetype embodies a distinct human potential within the celestial sphere.'}</p>
          </div>
        </div>

        <div class="astro-grid-4">
          ${zodiacCardsHtml}
        </div>
      </div>
    </section>

    <!-- 5. Astrological Analysis Instruments Grid -->
    <section class="astro-section astro-section-viewport" id="instruments" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ${locale === 'tr' ? 'HASSAS ANALİZ ARAÇLARI' : t.sections.toolsTitle.toUpperCase()}</span>
          <h2>${safe(t.sections.toolsTitle)}</h2>
          <p>${safe(t.sections.toolsSub)}</p>
        </div>
        <div class="astro-grid-3">
          ${toolCards.map((tool) => `
          <article class="astro-card">
            <span class="astro-card-tag">✦ ${safe(tool.tag)}</span>
            <h3>${safe(tool.title)}</h3>
            <p>${safe(tool.description)}</p>
            <a class="astro-card-link" href="${getRouteHref(locale, tool.route)}">
              <span>${safe(tool.cta)}</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>`).join('')}
        </div>
      </div>
    </section>

    <!-- 6. Arketip Külliyatı & Derin Psikoloji Köprüsü -->
    <section class="astro-section astro-section-viewport" id="archetype-bridge" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-bridge-card">
          <div class="astro-bridge-copy">
            <span class="astro-card-tag">✦ ${loc === 'tr' ? 'MATEMATİKSEL ASTRONOMİ & DERİN PSİKOLOJİ' : loc === 'en' ? 'MATHEMATICAL ASTRONOMY & DEPTH PSYCHOLOGY' : loc === 'el' ? 'ΜΑΘΗΜΑΤΙΚΗ ΑΣΤΡΟΝΟΜΙΑ & ΨΥΧΟΛΟΓΙΑ' : loc === 'es' ? 'ASTRONOMÍA MATEMÁTICA Y PSICOLOGÍA' : 'الفلك الرياضي وعلم النفس الرمزي'}</span>
            <h3>${loc === 'tr' ? '12 Burç Arketip Külliyatı ve Kişisel Portreler' : loc === 'en' ? '12 Zodiac Archetype Dossiers & Cosmic Portraits' : loc === 'el' ? '12 Ζωδιακά Αρχέτυπα & Κοσμικά Πορτρέτα' : loc === 'es' ? 'Dossiers de los 12 Arquetipos Zodiacales' : 'ملفات الأنماط الفلكية الـ 12 والبورتريه الكوني'}</h3>
            <p>${loc === 'tr' ? 'Gök kubbedeki matematiksel devinimleri kişisel farkındalığa dönüştürün. Yüzeysel burç genellemelerinin ötesinde; Güneş, Ay ve Yükselen arketipinizin ışık ve gölge dengesini bilimsel şeffaflıkla inceleyin.' : loc === 'en' ? 'Translate cosmic geometry into authentic self-awareness. Transcending superficial horoscopes, discover the light and shadow dynamics of your Sun, Moon, and Ascendant.' : loc === 'el' ? 'Μετατρέψτε την ουράνια γεωμετρία σε ουσιαστική αυτογνωσία. Ανακαλύψτε τις δυναμικές φωτός και σκιάς του Ήλιου, της Σελήνης και του Ωροσκόπου σας.' : loc === 'es' ? 'Transforme la geometría celeste en autoconocimiento auténtico. Descubra las dinámicas de luz y sombra de su Sol, Luna y Ascendente.' : 'حول الحسابات الفلكية إلى وعي ذاتي حقيقي بعيداً عن التنبؤات السطحية. اكتشف توازن النور والظل لشمسك، قمرك، وطالعك.'}</p>
            <div style="display:flex; gap:14px; flex-wrap:wrap">
              <a class="astro-btn-primary" href="${getRouteHref(locale, 'zodiac')}">
                <span>${loc === 'tr' ? '12 Burç Arketipini Keşfet' : loc === 'en' ? 'Explore 12 Archetypes' : loc === 'el' ? 'Εξερεύνηση 12 Ζωδίων' : loc === 'es' ? 'Explorar 12 Arquetipos' : 'استكشف الأبراج الـ 12'}</span>
                <span aria-hidden="true">${arrow}</span>
              </a>
              <a class="astro-btn-ghost" href="${getRouteHref(locale, 'approach')}">
                <span>${loc === 'tr' ? 'Etik İlkelerimiz' : loc === 'en' ? 'Ethical Principles' : loc === 'el' ? 'Ηθικές Αρχές' : loc === 'es' ? 'Principios Éticos' : 'المبادئ الأخلاقية'}</span>
              </a>
            </div>
          </div>
          <div class="astro-bridge-media">
            <img src="/images/astrology/zodiac-celestial-tapestry.jpg" alt="12 Zodiac Archetypes" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Yöntemimiz ve Astroloji Sınırları -->
    <section class="astro-section astro-section-viewport" id="methodology" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ${safe(t.sections.ethicsTitle)}</span>
          <h2>${safe(t.sections.ethicsTitle)}</h2>
          <p>${safe(t.sections.ethicsSub)}</p>
        </div>
        <div class="astro-card" style="max-width:860px; margin:0 auto; background:linear-gradient(180deg, rgba(16, 21, 38, 0.6) 0%, rgba(9, 12, 22, 0.9) 100%)">
          <ul style="list-style:none; display:flex; flex-direction:column; gap:16px; font-size:14.5px; line-height:1.7; color:var(--muted)">
            <li style="display:flex; gap:12px; align-items:flex-start">
              <span style="color:var(--gold-bright); font-size:16px">✦</span>
              <span><strong style="color:#fff">Matematiksel Açıklık:</strong> Tüm gezegen boylamları açık kaynaklı efemeris algoritmalarıyla ve milisaniye hassasiyetinde hesaplanır.</span>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start">
              <span style="color:var(--gold-bright); font-size:16px">✦</span>
              <span><strong style="color:#fff">Determinizmin Reddi:</strong> Astroloji geleceği önceden haber veren bir kehanet değil, kişinin iç dinamiklerini anlamasına yardımcı olan arketipsel bir dildir.</span>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start">
              <span style="color:var(--gold-bright); font-size:16px">✦</span>
              <span><strong style="color:#fff">Etik Sınırlar:</strong> Tıbbi teşhis, kesin finansal tavsiye ve korku odaklı kaderci iddialara platformumuzda kesinlikle yer verilmez.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
};
