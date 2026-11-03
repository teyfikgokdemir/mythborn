// Mythborn Astrology Platform — Homepage View
import { ASTROLOGY_LOCALES, ZODIAC_SIGNS } from '../i18n.js';
import { getRouteHref } from '../layout.js';

export const renderHomeView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';

  // 12 Zodiac Cards with NATURAL labels (No "Koç 12 Burç" repeats!)
  const zodiacCardsHtml = ZODIAC_SIGNS.map((sign) => {
    const signName = sign[locale] || sign.tr;
    const titleText = locale === 'tr' ? `${signName} Burcu Rehberi`
      : locale === 'en' ? `${signName} Guide & Archetype`
      : locale === 'el' ? `Οδηγός: ${signName}`
      : locale === 'es' ? `Guía de ${signName}`
      : `دليل برج ${signName}`;

    const linkText = locale === 'tr' ? `${signName} Dinamikleri`
      : locale === 'en' ? `Explore ${signName}`
      : locale === 'el' ? `Ανάλυση ${signName}`
      : locale === 'es' ? `Explorar ${signName}`
      : `استكشف ${signName}`;

    return `
      <article class="zodiac-natural-card">
        <div class="zodiac-natural-header">
          <span class="zodiac-natural-symbol" aria-hidden="true">${sign.symbol}</span>
          <span class="zodiac-element-tag element-${sign.element}">${sign.element.toUpperCase()}</span>
        </div>
        <h3 class="zodiac-natural-title">${titleText}</h3>
        <p class="zodiac-natural-ruler">🪐 ${sign.ruler} · ${sign.quality}</p>
        <div class="zodiac-natural-dates">${sign.dates}</div>
        <a class="astro-card-link" style="margin-top:8px" href="${getRouteHref(locale, 'zodiac')}#${sign.slug}">
          <span>${linkText}</span>
          <span aria-hidden="true">${arrow}</span>
        </a>
      </article>
    `;
  }).join('');

  return `
    <!-- 1. Hero: Net Değer Önerisi & Tek Ana CTA -->
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ ${t.hero.eyebrow}</span>
        <h1>${t.hero.title}</h1>
        <p class="astro-hero-lead">${t.hero.lead}</p>
        <div class="astro-hero-actions">
          <a class="astro-btn-primary" href="${getRouteHref(locale, 'natal')}">
            <span>${t.hero.ctaPrimary}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
          <a class="astro-btn-ghost" href="${getRouteHref(locale, 'calendar')}">
            <span>${t.hero.ctaSecondary}</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
        </div>

        <!-- 2. Hızlı Doğum Haritası Başlangıç Akışı -->
        <div class="astro-quick-box" id="quick-chart">
          <h3 style="font-family:var(--font-serif); font-size:22px; color:#fff; margin-bottom:6px">
            ✦ ${t.quickNatal.title}
          </h3>
          <p style="font-size:13px; color:var(--muted); margin-bottom:14px">
            ${t.quickNatal.sub} · <span style="color:var(--gold-bright)">${t.timeStandardNotice}</span>
          </p>
          <form action="${getRouteHref(locale, 'natal')}" method="get">
            <div class="astro-quick-grid">
              <div class="astro-quick-field">
                <label for="qk-date">${t.quickNatal.labelDate}</label>
                <input id="qk-date" name="date" type="date" required value="1995-03-21">
              </div>
              <div class="astro-quick-field">
                <label for="qk-time">${t.quickNatal.labelTime}</label>
                <input id="qk-time" name="time" type="time" step="60" required value="14:30">
              </div>
              <div class="astro-quick-field">
                <label for="qk-city">${t.quickNatal.labelCity}</label>
                <input id="qk-city" name="city" type="text" required placeholder="İstanbul, İzmir, London..." value="Istanbul">
              </div>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap">
              <label style="font-size:12px; color:var(--dim); display:inline-flex; align-items:center; gap:6px; cursor:pointer">
                <input type="checkbox" name="unknown_time" value="1">
                <span>${t.quickNatal.unknownTime}</span>
              </label>
              <button type="submit" class="astro-quick-btn" style="width:auto; padding:10px 24px">
                <span>${t.quickNatal.submitBtn}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 3. Kozmik Büyük Üçlü (Big Three: Sun, Moon, Rising) -->
    <section class="astro-section" style="border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ THE FOUNDATIONAL TRIAD</span>
          <h2>${t.bigThree.title}</h2>
          <p>${t.bigThree.sub}</p>
        </div>
        <div class="big-three-grid">
          <article class="big-three-card">
            <span class="big-three-glyph" aria-hidden="true">☉</span>
            <h3>${t.bigThree.sunTitle}</h3>
            <p>${t.bigThree.sunDesc}</p>
          </article>
          <article class="big-three-card">
            <span class="big-three-glyph" aria-hidden="true">☽</span>
            <h3>${t.bigThree.moonTitle}</h3>
            <p>${t.bigThree.moonDesc}</p>
          </article>
          <article class="big-three-card">
            <span class="big-three-glyph" aria-hidden="true">↑</span>
            <h3>${t.bigThree.risingTitle}</h3>
            <p>${t.bigThree.risingDesc}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 4. Bugünkü Gökyüzü ve Yaklaşan Ay Döngüleri (24 Saat Formatında) -->
    <section class="astro-section" style="background: rgba(255,255,255,0.015); border-top:1px solid var(--border); border-bottom:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ LIVE SKY & LUNATIONS</span>
          <h2>${t.sections.skyTitle}</h2>
          <p>${t.sections.skySub}</p>
        </div>
        <div class="sky-snapshot-grid">
          <div class="sky-snapshot-card">
            <div class="sky-snapshot-phase" aria-hidden="true">🌑</div>
            <h4>Akrep Yeniayı</h4>
            <time datetime="2026-11-09T18:45">09 Kasım 2026 · 18:45 TSI</time>
            <small>17° Akrep · Dönüşüm ve Derin Niyet</small>
          </div>
          <div class="sky-snapshot-card">
            <div class="sky-snapshot-phase" aria-hidden="true">🌓</div>
            <h4>Kova İlk Dördün</h4>
            <time datetime="2026-11-17T06:20">17 Kasım 2026 · 06:20 TSI</time>
            <small>25° Kova · Harekete Geçiş & Vizyon</small>
          </div>
          <div class="sky-snapshot-card">
            <div class="sky-snapshot-phase" aria-hidden="true">🌕</div>
            <h4>Boğa Dolunayı</h4>
            <time datetime="2026-11-24T21:14">24 Kasım 2026 · 21:14 TSI</time>
            <small>02° Boğa · Hasat ve Maddi Denge</small>
          </div>
          <div class="sky-snapshot-card">
            <div class="sky-snapshot-phase" aria-hidden="true">☿</div>
            <h4>Merkür Yay Retrosu</h4>
            <time datetime="2026-11-26T12:00">26 Kasım – 15 Aralık</time>
            <small>Felsefi Bakış & İletişim İncelemesi</small>
          </div>
        </div>
        <div style="text-align:center; margin-top:24px">
          <a class="astro-btn-ghost" href="${getRouteHref(locale, 'calendar')}">
            <span>Tüm 2026–2027 Gökyüzü Takvimini Gör</span>
            <span aria-hidden="true">${arrow}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 12 Burç Keşif Alanı (Doğal İsimlerle) -->
    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ZODIAC DIRECTORY</span>
          <h2>${t.sections.zodiacTitle}</h2>
          <p>${t.sections.zodiacSub}</p>
        </div>
        <div class="astro-grid-4">
          ${zodiacCardsHtml}
        </div>
      </div>
    </section>

    <!-- 6. Analiz Araçları ve Sözlük -->
    <section class="astro-section" style="background: rgba(255,255,255,0.015); border-top:1px solid var(--border)">
      <div class="astro-container">
        <div class="astro-section-head">
          <span class="astro-card-tag">✦ ANALYSIS ENGINES</span>
          <h2>${t.sections.toolsTitle}</h2>
          <p>${t.sections.toolsSub}</p>
        </div>
        <div class="astro-grid-3">
          <article class="astro-card">
            <span class="astro-card-tag">☉ NATAL ENGINE</span>
            <h3>${t.menu.natal}</h3>
            <p>Açık kaynak astronomi motoru ile 10 gezegen boylamı, yükselen (ASC) ve ev yerleşimlerinin saniyeler içinde hesaplanması.</p>
            <a class="astro-card-link" href="${getRouteHref(locale, 'natal')}">
              <span>${t.menu.natal} Başlat</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>
          <article class="astro-card">
            <span class="astro-card-tag">⚯ SYNASTRY ENGINE</span>
            <h3>${t.menu.synastry}</h3>
            <p>İki doğum haritası arasındaki açı orbları, Venüs-Mars çekim dinamikleri ve duygusal uyum haritası.</p>
            <a class="astro-card-link" href="${getRouteHref(locale, 'synastry')}">
              <span>${t.menu.synastry} İncele</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>
          <article class="astro-card">
            <span class="astro-card-tag">📖 KNOWLEDGE BASE</span>
            <h3>${t.menu.glossary}</h3>
            <p>Ev sistemleri, açı geometrileri, element dengesi ve astrolojik sembolizmin yalın kütüphanesi.</p>
            <a class="astro-card-link" href="${getRouteHref(locale, 'glossary')}">
              <span>Sözlüğü Keşfet</span>
              <span aria-hidden="true">${arrow}</span>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- 7. Yöntem, Bilimsel Temel ve Etik Sınırlar -->
    <section class="astro-section" style="border-top:1px solid var(--border)">
      <div class="astro-container" style="max-width:860px">
        <div class="astro-section-head" style="margin-bottom:24px">
          <span class="astro-card-tag">✦ METHODOLOGY & ETHICS</span>
          <h2>${t.sections.ethicsTitle}</h2>
          <p>${t.sections.ethicsSub}</p>
        </div>
        <div style="background:var(--card); border:1px solid var(--border); border-radius:16px; padding:28px 24px; font-size:14px; line-height:1.7; color:var(--muted)">
          <p style="margin-bottom:14px">
            <strong>Matematiksel Şeffaflık:</strong> Mythborn, uydurma tablolar veya kapalı algoritmalar yerine; açık kaynak astronomik kütüphanelerle (<code style="color:var(--gold)">astronomy-engine</code>) çalışır. Gezegenlerin anlık ekliptik boylamları ve retroları matematiksel olarak türetilir.
          </p>
          <p style="margin-bottom:14px">
            <strong>İradeye Saygı (Kadercilik Reddi):</strong> Gökyüzü bir buyruk verici değil; zamanın kalitesini gösteren kozmik bir saattir. Platformumuzda korku yayan, felaket tellallığı yapan veya "kesin ayrılık/kaza" vaat eden hiçbir içerik barındırılmaz.
          </p>
          <p style="margin:0">
            <strong>Sınırlar:</strong> Astroloji sembolik bir öz-farkındalık ve arketipsel tefekkür aracıdır. Tıbbi teşhis, hukuki mütalaa veya yatırım tavsiyesi yerine geçemez.
          </p>
        </div>
      </div>
    </section>
  `;
};
