// Mythborn Astrology Platform — Astrology Glossary Skeleton
import { ASTROLOGY_LOCALES } from '../i18n.js';

export const renderGlossaryView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  const glossaryTerms = [
    { term: 'Yükselen Burç (Ascendant - ASC)', cat: 'TEMEL NOKTALAR', desc: 'Doğum anında doğu ufkunda yükselen zodyak derecesi. Dış dünyaya verdiğiniz ilk izlenim, beden dili ve hayatı deneyimleme filtreniz.' },
    { term: 'Tepe Noktası (Medium Coeli - MC)', cat: 'TEMEL NOKTALAR', desc: 'Doğum anında güney gök meridyeniyle ekliptiğin kesiştiği en yüksek nokta. Kariyer, toplumsal itibar ve hayattaki hedef.' },
    { term: '1. Ev (Koç Eksenli)', cat: 'EV SİSTEMLERİ', desc: 'Benlik, fiziksel beden, kişisel irade ve bireysel duruş.' },
    { term: '7. Ev (Terazi Eksenli)', cat: 'EV SİSTEMLERİ', desc: 'İkili ilişkiler, evlilik, ortaklıklar ve açık düşmanlıklar.' },
    { term: '10. Ev (Oğlak Eksenli)', cat: 'EV SİSTEMLERİ', desc: 'Meslek, kariyer zirvesi, başarılar ve otorite figürleriyle ilişkiler.' },
    { term: 'Kavuşum (Conjunction - 0°)', cat: 'AÇILAR', desc: 'İki gezegenin enerjisini tek bir odak noktasında birleştirmesi.' },
    { term: 'Karşıtlık (Opposition - 180°)', cat: 'AÇILAR', desc: 'İki kutup arasında denge kurma, farkına varma ve ilişki üzerinden yüzleşme dinamiği.' },
    { term: 'Kare (Square - 90°)', cat: 'AÇILAR', desc: 'Eyleme geçmeye zorlayan içsel sürtünme ve gelişim baskısı.' },
    { term: 'Üçgen (Trine - 120°)', cat: 'AÇILAR', desc: 'Doğal yetenek, zahmetsiz akış ve elementler arası harmoni.' }
  ];

  const cardsHtml = glossaryTerms.map((item) => `
    <article class="astro-card">
      <span class="astro-card-tag">${item.cat}</span>
      <h3>${item.term}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ KAVRAMSAL REHBER & TERMİNOLOJİ</span>
        <h1>${t.menu.glossary} ve Temel Kavramlar</h1>
        <p class="astro-hero-lead">${t.sections.glossarySub}</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-3">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
};
