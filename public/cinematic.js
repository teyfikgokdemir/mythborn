(() => {
  const locale = document.documentElement.lang.startsWith('en')
    ? 'en'
    : document.documentElement.lang.startsWith('el')
      ? 'el'
      : 'tr';
  const path = location.pathname.replace(/^\/(?:en|gr)(?=\/|$)/, '') || '/';

  const assets = {
    hero: {
      base: '/images/cinematic/home/hero-celestial',
      widths: [640, 960, 1440],
      width: 1440,
      height: 900,
      alt: {
        tr: 'Hilal, yıldız haritası ve antik usturlapla aydınlanan gece gözlemevi',
        en: 'Night observatory illuminated by a crescent moon, star map and antique astrolabe',
        el: 'Νυχτερινό παρατηρητήριο φωτισμένο από ημισέληνο, αστρικό χάρτη και αρχαίο αστρολάβο'
      }
    },
    daily: {
      base: '/images/cinematic/daily/daily-card-altar',
      widths: [480, 720, 960],
      width: 960,
      height: 1200,
      alt: {
        tr: 'Altın ay fazlarıyla işlenmiş tek Tarot kartı, dumanlı kuvars ve hilal',
        en: 'A single Tarot card embossed with golden moon phases beside smoky quartz and a crescent',
        el: 'Μία κάρτα Ταρώ με χρυσές φάσεις της Σελήνης, καπνία χαλαζία και ημισέληνο'
      }
    },
    tarot: {
      base: '/images/cinematic/tarot/tarot-three-card',
      widths: [480, 720, 960],
      width: 960,
      height: 1200,
      alt: {
        tr: 'Lacivert kadife üzerinde göksel arketiplerle işlenmiş üç zarif Tarot kartı',
        en: 'Three elegant Tarot cards with celestial archetypes arranged on midnight-blue velvet',
        el: 'Τρεις κομψές κάρτες Ταρώ με ουράνια αρχέτυπα πάνω σε βελούδο βαθύ μπλε'
      }
    },
    katina: {
      base: '/images/cinematic/katina/katina-relationship',
      widths: [480, 720, 960],
      width: 960,
      height: 1200,
      alt: {
        tr: 'Altın ışık bağıyla birbirine bağlanan bordo ve gece mavisi iki Katina kartı',
        en: 'Two burgundy and midnight-blue Katina cards connected by a fine thread of golden light',
        el: 'Δύο κάρτες Κατίνα σε μπορντό και βαθύ μπλε ενωμένες με λεπτή χρυσή ακτίνα'
      }
    },
    astrology: {
      base: '/images/cinematic/astrology/birth-chart-observatory',
      widths: [640, 960, 1440],
      width: 1440,
      height: 900,
      alt: {
        tr: 'Gece gözlemevinde altın çizgilerle aydınlanan saydam doğum haritası diski',
        en: 'A translucent birth-chart disc illuminated with fine gold lines in a night observatory',
        el: 'Διαφανής γενέθλιος χάρτης με λεπτές χρυσές γραμμές σε νυχτερινό παρατηρητήριο'
      }
    },
    membership: {
      base: '/images/cinematic/membership/personal-celestial-archive',
      widths: [640, 960, 1440],
      width: 1440,
      height: 900,
      alt: {
        tr: 'Göksel günlükleri ve kristali koruyan dairesel kişisel arşiv',
        en: 'A circular personal archive safeguarding celestial journals and a crystal',
        el: 'Κυκλικό προσωπικό αρχείο που φυλάσσει ουράνια ημερολόγια και έναν κρύσταλλο'
      }
    },
    knowledge: {
      base: '/images/cinematic/knowledge/celestial-knowledge-library',
      widths: [640, 960, 1440],
      width: 1440,
      height: 900,
      alt: {
        tr: 'Açık yıldız atlası, göksel çizimler ve mor kristalle sakin bilgi arşivi',
        en: 'A quiet knowledge archive with an open star atlas, celestial diagrams and a violet crystal',
        el: 'Ήσυχο αρχείο γνώσης με ανοιχτό αστρικό άτλαντα, ουράνια διαγράμματα και μωβ κρύσταλλο'
      }
    }
  };

  const picture = (key) => {
    const asset = assets[key];
    const figure = document.createElement('figure');
    figure.className = `cinematic-visual cinematic-visual--${key}`;
    const avif = asset.widths.map(width => `${asset.base}-${width}.avif ${width}w`).join(', ');
    const webp = asset.widths.map(width => `${asset.base}-${width}.webp ${width}w`).join(', ');
    const largest = asset.widths.at(-1);
    figure.innerHTML = `<picture>
      <source type="image/avif" srcset="${avif}" sizes="(max-width: 620px) 100vw, (max-width: 1100px) 70vw, 50vw">
      <source type="image/webp" srcset="${webp}" sizes="(max-width: 620px) 100vw, (max-width: 1100px) 70vw, 50vw">
      <img src="${asset.base}-${largest}.webp" width="${asset.width}" height="${asset.height}" alt="${asset.alt[locale]}" loading="${key === 'hero' ? 'eager' : 'lazy'}" decoding="async"${key === 'hero' ? ' fetchpriority="high"' : ''}>
    </picture>`;
    return figure;
  };

  const mount = (target, key) => {
    if (!target || target.querySelector(`:scope > .cinematic-visual--${key}`)) return;
    target.classList.add('cinematic-surface');
    target.prepend(picture(key));
  };

  const enhance = () => {
    if (path === '/') {
      mount(document.querySelector('.premium-home-hero'), 'hero');
      mount(document.querySelector('.home-membership'), 'membership');
      const related = document.querySelectorAll('.home-showcase')[2];
      mount(related, 'knowledge');
      return;
    }
    if (path === '/gunluk-kart') mount(document.querySelector('.daily-stage'), 'daily');
    if (path === '/tarot') mount(document.querySelector('[data-member-reading="tarot"]'), 'tarot');
    if (path === '/katina') mount(document.querySelector('[data-member-reading="katina"]'), 'katina');
    if (path === '/astroloji') mount(document.querySelector('.astrology-hero'), 'astrology');
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance, {once: true});
  else enhance();
})();
