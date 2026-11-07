// Mythborn SEO and AI-answer content helpers.
import { getRouteHref } from './layout.js';
import { ASTROLOGY_LOCALES } from './i18n.js';

const labels = {
  tr: {
    answerTag: 'DOĞRUDAN YANIT',
    answerTitle: 'Mythborn astrolojiyi nasıl ele alır?',
    faqTitle: 'Sık Sorulan Sorular',
    updated: 'Son güncelleme: 7 Kasım 2026',
    relatedTitle: 'İlgili kaynaklar',
    birthChart: 'Doğum haritasını hesapla',
    glossary: 'Astroloji sözlüğünü oku',
    learning: 'Astrolojiyi öğren',
    questions: [
      'Mythborn doğum haritasını nasıl hesaplar?',
      'Astronomi ile astrolojik yorum arasındaki fark nedir?',
      'Mythborn tıbbi veya finansal tavsiye verir mi?',
      'Doğum bilgilerim nasıl korunur?'
    ]
  },
  en: {
    answerTag: 'DIRECT ANSWER',
    answerTitle: 'How does Mythborn approach astrology?',
    faqTitle: 'Frequently Asked Questions',
    updated: 'Last updated: 7 November 2026',
    relatedTitle: 'Related resources',
    birthChart: 'Calculate a birth chart',
    glossary: 'Read the astrology glossary',
    learning: 'Learn astrology',
    questions: [
      'How does Mythborn calculate a birth chart?',
      'What is the difference between astronomy and astrological interpretation?',
      'Does Mythborn provide medical or financial advice?',
      'How does Mythborn protect birth data?'
    ]
  },
  el: {
    answerTag: 'ΑΜΕΣΗ ΑΠΑΝΤΗΣΗ',
    answerTitle: 'Πώς προσεγγίζει το Mythborn την αστρολογία;',
    faqTitle: 'Συχνές ερωτήσεις',
    updated: 'Τελευταία ενημέρωση: 7 Νοεμβρίου 2026',
    relatedTitle: 'Σχετικές πηγές',
    birthChart: 'Υπολογισμός γενέθλιου χάρτη',
    glossary: 'Διαβάστε το λεξικό αστρολογίας',
    learning: 'Μάθετε αστρολογία',
    questions: [
      'Πώς υπολογίζει το Mythborn έναν γενέθλιο χάρτη;',
      'Ποια είναι η διαφορά μεταξύ αστρονομίας και συμβολικής ερμηνείας;',
      'Παρέχει το Mythborn ιατρικές ή οικονομικές συμβουλές;',
      'Πώς προστατεύει το Mythborn τα δεδομένα γέννησης;'
    ]
  },
  es: {
    answerTag: 'RESPUESTA DIRECTA',
    answerTitle: '¿Cómo aborda Mythborn la astrología?',
    faqTitle: 'Preguntas frecuentes',
    updated: 'Última actualización: 7 de noviembre de 2026',
    relatedTitle: 'Recursos relacionados',
    birthChart: 'Calcular una carta natal',
    glossary: 'Leer el glosario astrológico',
    learning: 'Aprender astrología',
    questions: [
      '¿Cómo calcula Mythborn una carta natal?',
      '¿Cuál es la diferencia entre astronomía e interpretación astrológica?',
      '¿Ofrece Mythborn consejos médicos o financieros?',
      '¿Cómo protege Mythborn los datos de nacimiento?'
    ]
  },
  ar: {
    answerTag: 'إجابة مباشرة',
    answerTitle: 'كيف تتعامل Mythborn مع علم التنجيم؟',
    faqTitle: 'الأسئلة الشائعة',
    updated: 'آخر تحديث: 7 نوفمبر 2026',
    relatedTitle: 'مصادر ذات صلة',
    birthChart: 'احسب خريطة الميلاد',
    glossary: 'اقرأ قاموس الفلك',
    learning: 'تعلّم علم التنجيم',
    questions: [
      'كيف تحسب Mythborn خريطة الميلاد؟',
      'ما الفرق بين علم الفلك والتفسير الرمزي؟',
      'هل تقدم Mythborn نصائح طبية أو مالية؟',
      'كيف تحمي Mythborn بيانات الميلاد؟'
    ]
  }
};

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

export const getApproachFaqItems = ({ locale = 'tr' } = {}) => {
  const loc = labels[locale] ? locale : 'tr';
  const t = ASTROLOGY_LOCALES[loc] || ASTROLOGY_LOCALES.tr;
  const answers = [
    t.hero.lead,
    t.sections.ethicsSub,
    t.disclaimer,
    t.sections.ethicsSub
  ];
  return labels[loc].questions.map((question, index) => ({
    question,
    answer: answers[index] || ''
  }));
};

export const getApproachSeo = ({ locale = 'tr', content, routeHref }) => {
  const loc = labels[locale] ? locale : 'tr';
  const l = labels[loc];
  const sections = content[loc]?.sections || content.tr.sections;
  const answers = sections.map(section => section.p);
  const faqItems = l.questions.map((question, index) => ({
    question,
    answer: answers[index] || ''
  }));

  const related = [
    `<a href="${routeHref('natal')}">${escapeHtml(l.birthChart)}</a>`,
    `<a href="${routeHref('glossary')}">${escapeHtml(l.glossary)}</a>`,
    `<a href="${routeHref('learning')}">${escapeHtml(l.learning)}</a>`
  ].join(' · ');

  const html = `
    <section class="seo-answer-block" aria-labelledby="seo-answer-title">
      <span class="astro-card-tag">✦ ${escapeHtml(l.answerTag)}</span>
      <h2 id="seo-answer-title">${escapeHtml(l.answerTitle)}</h2>
      <p>${escapeHtml(content[loc]?.lead || content.tr.lead)}</p>
      <p>${escapeHtml(sections[0]?.p || '')}</p>
    </section>
    <section class="seo-faq-block" aria-labelledby="seo-faq-title">
      <div class="astro-section-head">
        <span class="astro-card-tag">✦ FAQ</span>
        <h2 id="seo-faq-title">${escapeHtml(l.faqTitle)}</h2>
      </div>
      <div class="seo-faq-list">
        ${faqItems.map((item) => `<details class="seo-faq-item"><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}
      </div>
    </section>
    <section class="seo-related-block" aria-label="${escapeHtml(l.relatedTitle)}">
      <strong>${escapeHtml(l.relatedTitle)}:</strong> ${related}
      <span class="seo-updated">${escapeHtml(l.updated)}</span>
    </section>`;

  return { html, faqItems };
};

const toolLabels = {
  tr: {
    natal: ['Doğum haritası nedir?', 'Doğum haritası için hangi bilgiler gerekir?', 'Doğum saatimi bilmiyorsam ne olur?'],
    zodiac: ['Burç nedir?', 'Güneş, Ay ve Yükselen burç arasındaki fark nedir?', 'Mythborn burç yorumlarını nasıl sunar?']
  },
  en: {
    natal: ['What is a birth chart?', 'What information is needed for a birth chart?', 'What if I do not know my birth time?'],
    zodiac: ['What is a zodiac sign?', 'What is the difference between Sun, Moon and Rising signs?', 'How does Mythborn present zodiac guidance?']
  },
  el: {
    natal: ['Τι είναι ο γενέθλιος χάρτης;', 'Ποια στοιχεία χρειάζονται για έναν γενέθλιο χάρτη;', 'Τι γίνεται αν δεν γνωρίζω την ώρα γέννησης;'],
    zodiac: ['Τι είναι ένα ζώδιο;', 'Ποια είναι η διαφορά Ήλιου, Σελήνης και Ωροσκόπου;', 'Πώς παρουσιάζει το Mythborn τις οδηγίες των ζωδίων;']
  },
  es: {
    natal: ['¿Qué es una carta natal?', '¿Qué datos se necesitan para una carta natal?', '¿Qué ocurre si no conozco mi hora de nacimiento?'],
    zodiac: ['¿Qué es un signo zodiacal?', '¿Cuál es la diferencia entre Sol, Luna y Ascendente?', '¿Cómo presenta Mythborn la guía zodiacal?']
  },
  ar: {
    natal: ['ما هي خريطة الميلاد؟', 'ما البيانات المطلوبة لخريطة الميلاد؟', 'ماذا يحدث إذا لم أعرف وقت ميلادي؟'],
    zodiac: ['ما هو البرج الفلكي؟', 'ما الفرق بين برج الشمس والقمر والطالع؟', 'كيف تقدم Mythborn إرشادات الأبراج؟']
  }
};

export const getToolSeo = ({ locale = 'tr', type = 'natal', t, routeHref }) => {
  const loc = toolLabels[locale] ? locale : 'tr';
  const l = labels[loc];
  const questions = toolLabels[loc][type] || toolLabels.tr[type];
  const isNatal = type === 'natal';
  const answerTitle = isNatal ? t.menu.natal : t.sections.zodiacTitle;
  const answer = isNatal ? t.hero.lead : t.sections.zodiacSub;
  const answers = isNatal
    ? [t.quickNatal.sub, t.quickNatal.unknownTime, t.sections.ethicsSub]
    : [t.sections.zodiacSub, t.bigThree.sub, t.sections.ethicsSub];
  const faqItems = questions.map((question, index) => ({ question, answer: answers[index] || '' }));
  const html = `
    <section class="seo-answer-block" aria-labelledby="${type}-seo-answer-title">
      <span class="astro-card-tag">✦ ${escapeHtml(l.answerTag)}</span>
      <h2 id="${type}-seo-answer-title">${escapeHtml(answerTitle)}</h2>
      <p>${escapeHtml(answer)}</p>
    </section>
    <section class="seo-faq-block" aria-labelledby="${type}-seo-faq-title">
      <div class="astro-section-head">
        <span class="astro-card-tag">✦ FAQ</span>
        <h2 id="${type}-seo-faq-title">${escapeHtml(l.faqTitle)}</h2>
      </div>
      <div class="seo-faq-list">
        ${faqItems.map((item) => `<details class="seo-faq-item"><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}
      </div>
    </section>
    <section class="seo-related-block" aria-label="${escapeHtml(l.relatedTitle)}">
      <strong>${escapeHtml(l.relatedTitle)}:</strong>
      <a href="${routeHref('approach')}">${escapeHtml(l.learning)}</a> ·
      <a href="${routeHref('glossary')}">${escapeHtml(l.glossary)}</a>
      <span class="seo-updated">${escapeHtml(l.updated)}</span>
    </section>`;
  return { html, faqItems };
};
