// Compact editorial Ebced feature placed directly after the home hero.
// This is a discovery panel, not a duplicate of the full calculator.
import { getRouteHref } from './layout.js';

const contentByLocale = {
  tr: {
    kicker: 'KADİM HARFLER · SAYISAL GELENEK',
    title: 'İsminin ardındaki sayıları keşfet.',
    lead: 'Ebced geleneği ve numerolojiyle isimlerin harf değerlerini, sembolik anlamlarını ve iki kişilik karşılaştırmaları incele.',
    action: 'Ebced analizimi başlat',
    compare: 'İki Kişilik Uyum Analizi',
    caption: 'Harf harf hesaplama · Anne adı · İlişki karşılaştırması',
    disclaimer: 'Tarihsel ve sembolik yorumlar; kesin gelecek tahmini değildir.'
  },
  en: {
    kicker: 'ANCIENT LETTERS · NUMBER TRADITIONS',
    title: 'Discover the numbers behind your name.',
    lead: 'Explore Abjad letter values, numerology themes and a two-person symbolic comparison.',
    action: 'Explore my Abjad reading',
    compare: 'Compare Two People',
    caption: 'Letter-by-letter · Mother’s name · Two-person comparison',
    disclaimer: 'Historical and symbolic interpretations, not future predictions.'
  },
  el: {
    kicker: 'ΑΡΧΑΙΑ ΓΡΑΜΜΑΤΑ · ΣΥΜΒΟΛΙΚΟΙ ΑΡΙΘΜΟΙ',
    title: 'Ανακάλυψε τους αριθμούς του ονόματός σου.',
    lead: 'Εξερεύνησε αριθμητικές τιμές γραμμάτων, αριθμολογία και συμβολική σύγκριση δύο προσώπων.',
    action: 'Ανακάλυψε το Αμπτζάντ',
    compare: 'Σύγκριση δύο προσώπων',
    caption: 'Ανάλυση γραμμάτων · Όνομα μητέρας · Σύγκριση',
    disclaimer: 'Ιστορικές και συμβολικές ερμηνείες, όχι προβλέψεις.'
  },
  es: {
    kicker: 'LETRAS ANTIGUAS · TRADICIONES NUMÉRICAS',
    title: 'Descubre los números detrás de tu nombre.',
    lead: 'Explora los valores de las letras, la numerología y la comparación simbólica de dos personas.',
    action: 'Explorar mi análisis Ábyad',
    compare: 'Comparar dos personas',
    caption: 'Letra por letra · Nombre materno · Comparación',
    disclaimer: 'Interpretaciones históricas y simbólicas, no predicciones.'
  },
  ar: {
    kicker: 'الحروف القديمة · التقاليد العددية',
    title: 'اكتشف القيم العددية وراء اسمك.',
    lead: 'تعرّف على حساب الأبجد والرموز العددية والمقارنة بين شخصين.',
    action: 'افتح الحاسبة (بالتركية)',
    compare: 'مقارنة شخصين (بالتركية)',
    caption: 'حساب الحروف · اسم الأم · مقارنة شخصين',
    disclaimer: 'تفسيرات ثقافية ورمزية وليست تنبؤات بالمستقبل. الحاسبة متاحة حالياً بالتركية.'
  }
};

export function renderEbcedPromo(locale = 'tr') {
  const t = contentByLocale[locale] || contentByLocale.tr;
  const href = getRouteHref(locale, 'ebced');
  const compareHref = {tr:'/ebced/uyum',en:'/en/ebced/compatibility',el:'/gr/ebced/symvatotita',es:'/es/ebced/compatibilidad',ar:'/ebced/uyum'}[locale] || '/ebced/uyum';
  return `
    <section class="astro-ebced-feature astro-section-viewport" aria-labelledby="astro-ebced-title" id="ebced">
      <div class="astro-container astro-ebced-feature-inner">
        <div class="astro-ebced-feature-copy">
          <span class="astro-card-tag">✦ ${t.kicker}</span>
          <h2 id="astro-ebced-title">${t.title}</h2>
          <p class="astro-ebced-lead">${t.lead}</p>
          <div class="astro-ebced-actions">
            <a class="astro-btn-primary astro-ebced-action" href="${href}"><span>${t.action}</span><span aria-hidden="true">${locale === 'ar' ? '←' : '→'}</span></a>
            <a class="astro-ebced-secondary" href="${compareHref}"><span>${t.compare}</span><span aria-hidden="true">↗</span></a>
          </div>
          <p class="astro-ebced-caption">${t.caption}</p>
          <p class="astro-ebced-disclaimer">${t.disclaimer}</p>
        </div>
        <div class="astro-ebced-art" aria-hidden="true">
          <div class="astro-ebced-orbit astro-ebced-orbit-outer"></div>
          <div class="astro-ebced-orbit astro-ebced-orbit-inner"></div>
          <span class="astro-ebced-glyph astro-ebced-glyph-a">ا</span>
          <span class="astro-ebced-glyph astro-ebced-glyph-b">ب</span>
          <span class="astro-ebced-glyph astro-ebced-glyph-c">ج</span>
          <div class="astro-ebced-art-core"><span>ابجد</span><small>1 · 2 · 3 · 4</small></div>
        </div>
      </div>
    </section>`;
}
