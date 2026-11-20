// Mythborn 2027 — Carl Jung Depth Psychology: Archetypes, Shadow & Synchronicity Mirror
// Localized across tr, en, el, es, ar — Deep Night Indigo (#080b12) & Pale Moon Gold (#d6be92)

const JUNG_COPY = {
  tr: {
    eyebrow: 'CARL JUNG DERİNLİK PSİKOLOJİSİ · ARKETİP & GÖLGE AYNASI',
    title: 'Bilinçdışını Görünür Kıl, Bütünlüğe Dön.',
    lead: 'Carl Gustav Jung’un arketip, gölge çalışması, aktif imgelem ve eşzamanlılık (synchronicity) ilkeleriyle derin öz-farkındalık alanı.',
    mirrorEyebrow: 'İNTERAKTİF ARKETİP & GÖLGE AYNASI',
    mirrorTitle: 'Bugün Hangi Arketip Seni Çağırıyor?',
    mirrorSub: 'Bir arketip seç; aydınlık armağanını, gölge kutbunu ve bugün kendine sorabileceğin aktif imgelem sorusunu gör.',
    labels: {
      gift: 'Aydınlık Armağan',
      shadow: 'Gölge Kutup',
      prompt: 'Gölge & Aktif İmgelem Sorusu'
    },
    archetypes: [
      {
        id: 'shadow',
        name: 'Gölge (Shadow)',
        motto: '“Aydınlanma, ışık imgeleri hayal ederek değil; karanlığı bilinçli kılarak olur.”',
        gift: 'Bastırılmış canlılık, sahicilik, sınır koyma gücü ve derin dürüstlük.',
        shadow: 'Başkalarında yoğun öfkeyle yargıladığın özelliklerin kendi içindeki reddedilmiş yansıması.',
        prompt: 'Son günlerde başka birinde seni en çok rahatsız eden davranış hangisi? Bunun sende bastırılmış hangi ihtiyaca dokunduğunu yaz.'
      },
      {
        id: 'sage',
        name: 'Bilge (Sage)',
        motto: '“Hakikat, gürültü azaldığında duyulan berrak bir iç sestir.”',
        gift: 'Analitik berraklık, mesafeli gözlem, kalıpları okuma ve dingin sezgi.',
        shadow: 'Aşırı zihinselleştirme, duygudan kopma ve eyleme geçmek yerine sürekli analizde donma.',
        prompt: 'Şu an cevabını aslında bildiğin ama “daha fazla bilgi lazım” diyerek ertelediğin karar hangisi?'
      },
      {
        id: 'anima',
        name: 'Anima / Animus',
        motto: '“İçsel karşıtlıkların uyumu, ruhun kendi derinliğiyle kurduğu köprüdür.”',
        gift: 'Duygusal derinlik ile kararlı iradenin dengeli birliği; yaratıcı sezgi.',
        shadow: 'İçsel eksikliği dışarıdaki bir partnerin tamamlamasını beklemek ve idealize etme döngüsü.',
        prompt: 'Başkasından beklediğin o kurtarıcı anlayış veya gücü bugün kendine nasıl verebilirsin?'
      },
      {
        id: 'magician',
        name: 'Dönüştürücü (Magician)',
        motto: '“Kriz, bilinçli bakıldığında eski kabuğun çatlayıp yeni bilincin doğduğu eşiktir.”',
        gift: 'Zorlu deneyimleri anlama dönüştürme, sembolik bakış ve içsel simya.',
        shadow: 'Her şeyi kontrol etme arzusu veya belirsizliğe tahammülsüzlük.',
        prompt: 'Hayatında direnç gösterdiğin hangi değişim, kabul edildiğinde seni bir üst bilince taşıyabilir?'
      },
      {
        id: 'explorer',
        name: 'Kaşif (Explorer)',
        motto: '“Kendi yolunu yürümeyen kişi, başkasının gölgesinde yorulur.”',
        gift: 'Özgürlük, özgünlük, kalıpların dışına çıkma cesareti ve yeni ufuklar.',
        shadow: 'Kök salmaktan kaçış, sürekli yer veya yön değiştirerek derinlikten uzaklaşma.',
        prompt: 'Şu an gerçekten yeni bir yere mi gitmek istiyorsun, yoksa yüzleşmekten kaçındığın bir duygu mu var?'
      },
      {
        id: 'creator',
        name: 'Yaratıcı (Creator)',
        motto: '“Hayal gücü, ruhun henüz kelimelere dökülmemiş dilidir.”',
        gift: 'Özgün ifade, estetik sezgi, hiç yoktan anlam ve biçim üretme gücü.',
        shadow: 'Mükemmeliyetçilik yüzünden başlamama ve içsel eleştirmenin sesine teslim olma.',
        prompt: 'Kusursuz olmasını beklemeden bugün ortaya koyabileceğin en küçük özgün eser veya adım ne?'
      },
      {
        id: 'ruler',
        name: 'Hükümdar (Ruler)',
        motto: '“Gerçek otorite, başkalarını yönetmek değil; kendi iç krallığına düzen getirmektir.”',
        gift: 'Sorumluluk, vizyon, koruyucu düzen ve kendi hayatının merkezinde durma.',
        shadow: 'Katılık, zayıflık göstermekten korkma ve her yükü tek başına sırtlanma.',
        prompt: 'Kontrolü biraz gevşettiğinde aslında hiçbir şeyin yıkılmayacağını bildiğin alan hangisi?'
      },
      {
        id: 'self',
        name: 'Öz / Bütünlük (Self)',
        motto: '“İnsanın en büyük yolculuğu, dağılmış parçalarını tek merkezde toplamaktır.”',
        gift: 'Bireyleşme (Individuation), içsel barış, çelişkileri kapsayabilen geniş farkındalık.',
        shadow: 'Kendini dışsal rollerle (Persona) özdeşleştirip öz sesini unutmak.',
        prompt: 'Üzerindeki tüm unvanları ve beklentileri bir dakikalığına bıraktığında geriye hangi sessiz hakikat kalıyor?'
      }
    ],
    sync: {
      eyebrow: 'EŞZAMANLILIK (SYNCHRONICITY) GÜNLÜĞÜ · %100 YEREL & GİZLİ',
      title: 'Anlamlı Tesadüfleri Kaydet.',
      sub: 'Jung’un eşzamanlılık dediği içsel durum ile dışsal olay kesişimlerini not al. Kayıtların yalnızca senin tarayıcında saklanır, sunucuya gönderilmez.',
      selectLabel: 'İlgili Arketip / Tema',
      noteLabel: 'Bugün fark ettiğin sembol, rüya veya eşzamanlılık',
      notePlaceholder: 'Örn: Uzun süredir düşündüğüm bir konuda beklenmedik bir kitap cümlesiyle karşılaştım...',
      saveBtn: 'Günlüğe Ekle',
      clearBtn: 'Tümünü Temizle',
      empty: 'Henüz bir eşzamanlılık kaydı eklemedin. İlk gözlemini yukarıdan kaydedebilirsin.'
    },
    essays: {
      eyebrow: 'CARL JUNG DERİNLİK REHBERİ',
      title: 'Dört Temel Kavramla Bilinç Haritası.',
      sub: 'Sembolleri kehanet gibi değil, ruhsal bütünleşmenin dili olarak okumak için temel Jung kavramları.',
      items: [
        ['Persona ve Gölge (Shadow)', 'Persona topluma gösterdiğimiz maskedir; Gölge ise kabul görmediği için bilinçdışına ittiğimiz canlı parçalarımızdır. Bütünlük, gölgeyi yok ederek değil tanıyarak başlar.'],
        ['Bireyleşme (Individuation)', 'Jung’a göre yaşamın ikinci yarısındaki asıl yolculuk, başkalarının beklentilerinden sıyrılıp kendi özgün Öz’üne (Self) ulaşma sürecidir.'],
        ['Eşzamanlılık (Synchronicity)', 'Aralarında nedensel bir bağ olmasa da içsel bir ruh haliyle dışsal bir olayın anlamlı biçimde örtüşmesi; dikkati derinleştiren sembolik bir aynadır.'],
        ['Aktif İmgelem (Active Imagination)', 'Rüya, sembol veya içsel imgelerle uyanık bilinçte diyalog kurma pratiği; Mythborn’daki Sığınak ve Theta odaları bu sakin gözlemi destekler.']
      ]
    },
    ctaSanctuary: 'Sığınak & Theta Odasına Geç →',
    ethics: 'Bu alan Carl Gustav Jung’un derinlik psikolojisi kavramlarını kişisel farkındalık ve editoryal tefekkür amacıyla sunar; klinik psikoterapi veya tıbbi tanı yerine geçmez.'
  },
  en: {
    eyebrow: 'CARL JUNG DEPTH PSYCHOLOGY · ARCHETYPE & SHADOW MIRROR',
    title: 'Make the Unconscious Visible, Return to Wholeness.',
    lead: 'A quiet reflection space built around Carl Gustav Jung’s archetypes, shadow work, active imagination and synchronicity.',
    mirrorEyebrow: 'INTERACTIVE ARCHETYPE & SHADOW MIRROR',
    mirrorTitle: 'Which Archetype Calls to You Today?',
    mirrorSub: 'Select an archetype to inspect its golden gift, shadow pole and an active imagination question for today.',
    labels: {
      gift: 'Golden Gift',
      shadow: 'Shadow Pole',
      prompt: 'Shadow & Active Imagination Prompt'
    },
    archetypes: [
      {
        id: 'shadow',
        name: 'The Shadow',
        motto: '“One does not become enlightened by imagining figures of light, but by making the darkness conscious.”',
        gift: 'Unlived vitality, authenticity, healthy boundaries and radical honesty.',
        shadow: 'Projecting disowned inner qualities onto others as sudden irritation or harsh judgment.',
        prompt: 'Which behavior in someone else irritated you most recently? What unacknowledged need inside you might it mirror?'
      },
      {
        id: 'sage',
        name: 'The Sage',
        motto: '“Clarity arrives when mental noise drops low enough to hear truth.”',
        gift: 'Lucid discernment, pattern recognition, calm perspective and reflective wisdom.',
        shadow: 'Over-intellectualizing emotions and hiding from decisive action inside endless analysis.',
        prompt: 'What decision do you already know the answer to, yet keep postponing under the excuse of needing more data?'
      },
      {
        id: 'anima',
        name: 'Anima / Animus',
        motto: '“Inner union bridges conscious intellect with the deeper soul.”',
        gift: 'Balanced harmony between emotional receptivity and grounded inner resolve.',
        shadow: 'Expecting an external partner to complete an unlived part of yourself.',
        prompt: 'How can you offer yourself today the exact steadiness or understanding you keep waiting for from someone else?'
      },
      {
        id: 'magician',
        name: 'The Magician',
        motto: '“Seen consciously, crisis is the crucible where an old form gives way to renewal.”',
        gift: 'Inner alchemy, symbolic vision and turning friction into conscious growth.',
        shadow: 'Compulsive control or fear of surrendering to uncertainty.',
        prompt: 'Which transition are you resisting right now that could expand your awareness once accepted?'
      },
      {
        id: 'explorer',
        name: 'The Explorer',
        motto: '“Walking someone else’s path exhausts the soul faster than any mountain.”',
        gift: 'Autonomy, curiosity, authenticity and courage beyond convention.',
        shadow: 'Restless flight from commitment or depth whenever stillness feels uncomfortable.',
        prompt: 'Are you genuinely called toward a new horizon right now, or avoiding a quiet truth where you stand?'
      },
      {
        id: 'creator',
        name: 'The Creator',
        motto: '“Imagination is the psyche speaking before words catch up.”',
        gift: 'Original expression, aesthetic intuition and bringing inner vision into form.',
        shadow: 'Perfectionism that paralyzes creation before the first line is drawn.',
        prompt: 'What small honest creation can you finish today without demanding perfection?'
      },
      {
        id: 'ruler',
        name: 'The Ruler',
        motto: '“True sovereignty begins with ordering your own inner kingdom.”',
        gift: 'Stewardship, calm responsibility, clear boundaries and coherent vision.',
        shadow: 'Rigidity, fear of vulnerability and carrying every burden alone.',
        prompt: 'Where can you loosen your grip slightly and trust that stability will remain?'
      },
      {
        id: 'self',
        name: 'The Self (Wholeness)',
        motto: '“Individuation is the quiet return of scattered parts to one center.”',
        gift: 'Centered wholeness, inner peace and capacity to hold paradox without splitting.',
        shadow: 'Mistaking social roles (Persona) for who you truly are.',
        prompt: 'If you set down every title and expectation for one minute, what quiet truth remains?'
      }
    ],
    sync: {
      eyebrow: 'SYNCHRONICITY JOURNAL · 100% LOCAL & PRIVATE',
      title: 'Record Meaningful Coincidences.',
      sub: 'Log intersections between your inner state and outer events. Entries stay strictly in your browser’s local storage and are never sent to any server.',
      selectLabel: 'Related Archetype / Theme',
      noteLabel: 'Symbol, dream motif or synchronicity noticed today',
      notePlaceholder: 'Example: While reflecting on a transition, an unexpected phrase appeared twice in the same day...',
      saveBtn: 'Save to Local Log',
      clearBtn: 'Clear All',
      empty: 'No synchronicity entries yet. Record your first observation above.'
    },
    essays: {
      eyebrow: 'CARL JUNG DEPTH GUIDE',
      title: 'Four Core Pillars of Depth Awareness.',
      sub: 'Reading symbols not as fatalistic predictions, but as a living language of psychological integration.',
      items: [
        ['Persona & Shadow', 'The Persona is our social mask; the Shadow holds the unlived traits pushed out of sight. Wholeness begins by acknowledging rather than denying the shadow.'],
        ['Individuation', 'Jung’s lifelong process of distinguishing your authentic Self from collective expectations and inherited roles.'],
        ['Synchronicity', 'Acausal meaningful coincidence where an inner psychological state resonates with an outer event—inviting deeper attention.'],
        ['Active Imagination', 'Conscious dialogue with dreams, symbols and inner imagery; supported calmly by Mythborn’s Sanctuary and Theta rooms.']
      ]
    },
    ctaSanctuary: 'Enter the Meditation Sanctuary →',
    ethics: 'This page explores Carl Gustav Jung’s depth psychology concepts for personal reflection and education. It is not clinical psychotherapy or medical advice.'
  }
};

const getJungCopy = (locale) => JUNG_COPY[locale] || JUNG_COPY.en;

export const getJungFaqItems = (locale = 'tr') => {
  if (locale === 'tr') {
    return [
      {
        question: 'Carl Jung’a göre Gölge (Shadow) çalışması nedir?',
        answer: 'Gölge çalışması, bilinçli kimliğimizin (Persona) dışında bıraktığımız bastırılmış duygu, ihtiyaç ve potansiyelleri yargılamadan fark edip bütünleştirme sürecidir.'
      },
      {
        question: 'Eşzamanlılık (Synchronicity) günlüğü verilerim sunucuya kaydediliyor mu?',
        answer: 'Hayır. Günlük notlarınız yalnızca kendi tarayıcınızın yerel belleğinde (localStorage) tutulur; hiçbir sunucuya gönderilmez.'
      }
    ];
  }
  return [
    {
      question: 'What is Shadow work in Carl Jung’s psychology?',
      answer: 'Shadow work is the reflective practice of recognizing disowned traits, emotions and potentials outside our social Persona so they can be integrated consciously.'
    },
    {
      question: 'Are Synchronicity Journal notes sent to a server?',
      answer: 'No. Your notes remain strictly in your browser’s localStorage on your own device and are never transmitted.'
    }
  ];
};

export const renderJungView = ({ locale = 'tr', sanctuaryHref = '/siginak' } = {}) => {
  const c = getJungCopy(locale);
  const first = c.archetypes[0];

  return `
  <div class="sanc-page" data-jung-app>
    <!-- 1. Centered Single-Scroll Hero with Real Depth Archive Photography -->
    <section class="sanc-hero">
      <div class="astro-container sanc-center sanc-hero-photo">
        <img class="sanc-hero-bg" src="/images/cinematic/membership/personal-celestial-archive-960.webp" alt="" width="960" height="640" fetchpriority="high" decoding="async" aria-hidden="true">
        <div class="sanc-hero-content">
          <span class="sanc-eyebrow">✦ ${c.eyebrow}</span>
          <h1 class="sanc-h1">${c.title}</h1>
          <p class="sanc-lead">${c.lead}</p>
        </div>
      </div>
    </section>

    <!-- 2. Interactive Archetype & Shadow Mirror -->
    <section class="sanc-section">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.mirrorEyebrow}</span>
          <h2>${c.mirrorTitle}</h2>
          <p>${c.mirrorSub}</p>
        </div>

        <div class="jung-grid">
          ${c.archetypes.map((a, idx) => `
            <button type="button"
              class="jung-arch-card${idx === 0 ? ' is-active' : ''}"
              data-spotlight
              data-jung-archetype="${a.id}"
              data-title="${a.name.replace(/"/g, '&quot;')}"
              data-motto="${a.motto.replace(/"/g, '&quot;')}"
              data-gift="${a.gift.replace(/"/g, '&quot;')}"
              data-shadow="${a.shadow.replace(/"/g, '&quot;')}"
              data-prompt="${a.prompt.replace(/"/g, '&quot;')}"
              aria-pressed="${idx === 0 ? 'true' : 'false'}">
              <strong>${a.name}</strong>
              <span>${a.gift}</span>
            </button>
          `).join('')}
        </div>

        <div class="jung-dossier" data-spotlight aria-live="polite">
          <div class="jung-dossier-head">
            <h3 data-jung-detail-title>${first.name}</h3>
            <blockquote data-jung-detail-motto>${first.motto}</blockquote>
          </div>
          <div class="jung-dossier-cols">
            <div class="jung-col">
              <span class="jung-col-label">${c.labels.gift}</span>
              <p data-jung-detail-gift>${first.gift}</p>
            </div>
            <div class="jung-col">
              <span class="jung-col-label">${c.labels.shadow}</span>
              <p data-jung-detail-shadow>${first.shadow}</p>
            </div>
            <div class="jung-col jung-col-prompt">
              <span class="jung-col-label">${c.labels.prompt}</span>
              <p data-jung-detail-prompt>${first.prompt}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Interlude — Carl Gustav Jung & Alfred Adler -->
    <section class="mb27-quote-band" aria-label="Depth Psychology Quote">
      <div class="astro-container">
        <blockquote class="mb27-quote">
          <p>${locale === 'tr' ? '“Dışarı bakan rüya görür, içeri bakan uyanır.”' : '“Who looks outside, dreams; who looks inside, awakes.”'}</p>
          <cite>— Carl Gustav Jung</cite>
        </blockquote>
      </div>
    </section>

    <!-- 3. Private Local Synchronicity Journal -->
    <section class="sanc-section" id="eszamanlilik">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.sync.eyebrow}</span>
          <h2>${c.sync.title}</h2>
          <p>${c.sync.sub}</p>
        </div>

        <div class="jung-sync-shell" data-spotlight>
          <form class="jung-sync-form" data-sync-form>
            <div class="sanc-inline-ctrl">
              <label for="sync-arch">${c.sync.selectLabel}</label>
              <select id="sync-arch" name="syncArchetype">
                ${c.archetypes.map((a) => `<option value="${a.name}">${a.name}</option>`).join('')}
              </select>
            </div>
            <div class="sanc-inline-ctrl">
              <label for="sync-note">${c.sync.noteLabel}</label>
              <textarea id="sync-note" name="syncNote" rows="3" placeholder="${c.sync.notePlaceholder}" style="resize:none"></textarea>
            </div>
            <div class="sanc-btn-row">
              <button type="submit" class="sanc-btn-gold">${c.sync.saveBtn}</button>
              <button type="button" class="sanc-btn-ghost" data-sync-clear>${c.sync.clearBtn}</button>
            </div>
          </form>
          <div class="jung-sync-list" data-sync-list data-empty-text="${c.sync.empty}"></div>
        </div>
      </div>
    </section>

    <!-- 4. Ultra-Elite Editorial Guide (4-Column Symmetrical Grid) -->
    <section class="sanc-section">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.essays.eyebrow}</span>
          <h2>${c.essays.title}</h2>
          <p>${c.essays.sub}</p>
        </div>
        <div class="sanc-guide-grid">
          ${c.essays.items.map(([eTitle, eDesc]) => `
            <article class="sanc-guide-card" data-spotlight>
              <h3>${eTitle}</h3>
              <p>${eDesc}</p>
            </article>
          `).join('')}
        </div>
        <div class="sanc-center" style="margin-top:34px">
          <a href="${sanctuaryHref}" class="sanc-btn-gold">${c.ctaSanctuary}</a>
          <p class="sanc-ethics-note">${c.ethics}</p>
        </div>
      </div>
    </section>
  </div>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
