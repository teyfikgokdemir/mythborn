// Mythborn 2027 — Carl Gustav Jung Depth Psychology Monograph, Interactive Archetype & Shadow Mirror
// Localized across tr, en, el, es, ar — Deep Night Indigo (#080b12) & Pale Moon Gold (#d6be92)

const JUNG_COPY = {
  tr: {
    eyebrow: 'CARL JUNG DERİNLİK PSİKOLOJİSİ · ARKETİP & GÖLGE AYNASI',
    title: 'Bilinç Dışını Görünür Kıl, Bütünlüğe Dön.',
    lead: 'Carl Gustav Jung’un arketip, gölge çalışması, aktif imgelem ve eşzamanlılık ilkeleriyle derin öz-farkındalık alanı.',
    intro: {
      eyebrow: 'ANALİTİK PSİKOLOJİNİN TEMELİ',
      title: 'Carl Gustav Jung ve İnsan Ruhunun Haritası',
      p1: 'İsviçreli psikiyatrist Carl Gustav Jung (1875–1961), insan zihnini yalnızca bastırılmış travmaların deposu olarak değil; anlam, yaratıcılık ve bütünlük arayan canlı bir sembol sistemi olarak okudu. Sigmund Freud ile başlayan derinlik yolculuğunu “Kolektif Bilinç Dışı”, “Arketipler”, “Gölge”, “Eşzamanlılık” ve “Bireyleşme” kavramlarıyla bambaşka bir ufka taşıdı.',
      p2: 'Jung’a göre hayatın ilk yarısı toplumsal uyum, başarı ve kimlik (Persona) inşa etmekle geçer; ikinci yarısı ise taktığımız maskelerin ötesine geçip kendi özgün merkezimize (Self / Öz) dönme çağrısıdır. Bu yüzden rüyalar, tekrar eden ilişki kalıpları ve güçlü duygusal tetiklenmeler düşman değil; bilinç dışının bize gönderdiği dürüst mektuplardır.',
      facts: [
        ['Analitik Psikoloji', 'Zürih Burghölzli’deki klinik gözlemler ve mitoloji araştırmalarıyla kuruldu.'],
        ['Kırmızı Kitap (Liber Novus)', 'Jung’un kendi bilinç dışıyla kurduğu 16 yıllık Aktif İmgelem günlüğü.'],
        ['Bireyleşme (Individuation)', 'Kusursuz olmak değil; aydınlık ve gölge tüm parçaları bilinçli merkezde bütünleştirmek.']
      ]
    },
    compare: {
      eyebrow: 'DERİNLİK PSİKOLOJİSİNİN ÜÇ BÜYÜK MİMARI',
      title: '<span class="mb-nowrap">Carl&nbsp;Jung</span> · <span class="mb-nowrap">Sigmund&nbsp;Freud</span> · <span class="mb-nowrap">Alfred&nbsp;Adler</span>',
      sub: 'Aynı insan ruhuna üç farklı pencereden bakan üç büyük ekolün özeti.',
      items: [
        {
          name: 'Carl Gustav Jung',
          school: 'Analitik Psikoloji',
          drive: 'Anlam arayışı ve Bireyleşme (Öz’e ulaşma).',
          unconscious: 'Kişisel bilinç dışına ek olarak tüm insanlığın paylaştığı Kolektif Bilinç Dışı ve Arketipler.',
          dreams: 'Rüyalar yalnızca geçmişi gizlemez; geleceğe ve ruhsal dengeye işaret eden sembolik mesajlardır.',
          quote: '“Bilinç dışını bilinçli hale getirmedikçe o senin hayatını yönlendirecek ve sen buna kader diyeceksin.”'
        },
        {
          name: 'Sigmund Freud',
          school: 'Psikanaliz',
          drive: 'Bilinç dışı dürtüler, haz ilkesi ve erken çocukluk çatışmaları.',
          unconscious: 'Bastırılmış anılar, yasak arzular ve savunma mekanizmalarının saklandığı kişisel katman.',
          dreams: 'Rüyalar bastırılmış isteklerin sembolik kılık değiştirmiş ifadesidir (“bilinç dışına giden kral yolu”).',
          quote: '“İfade edilmemiş duygular asla ölmez; yalnızca diri diri gömülür ve daha sonra daha karmaşık biçimlerde geri döner.”'
        },
        {
          name: 'Alfred Adler',
          school: 'Bireysel Psikoloji',
          drive: 'Ait olma duygusu, anlam üretme ve eksiklik hissini gelişime dönüştürme.',
          unconscious: 'İnsanı geçmişten çok geleceğe dönük hedefleri, yaşam tarzı ve sosyal ilgisi yönlendirir.',
          dreams: 'Rüyalar kişinin güncel yaşam sorunlarına karşı prova yaptığı ve yön aradığı zihinsel alanlardır.',
          quote: '“İnsan geçmişinin kurbanı değil; deneyimlerine yüklediği anlamın mimarıdır.”'
        }
      ]
    },
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
    psyche: {
      eyebrow: 'PSİŞE MİMARİSİ · RUHUN DÖRT KATMANI',
      title: 'Bilinçten Kolektif Derinliğe İniş',
      sub: 'Jung’un haritasında insan ruhu birbirini besleyen dört ana katmandan oluşur.',
      layers: [
        ['Persona (Sosyal Maske)', 'Toplumsal hayatta uyum sağlamak için taktığımız rol. Esnek kaldığında sağlıklıdır; ancak kişi kendini yalnızca unvanı veya “iyi insan” maskesiyle özdeşleştirdiğinde ruhsal yorgunluk başlar.'],
        ['Ego (Bilinç Merkezi)', '“Ben” dediğimiz günlük farkındalık ve karar alma alanı. Ego geminin kaptanıdır ama okyanusun tamamı değildir; bilinç dışıyla iş birliği yaptığında olgunlaşır.'],
        ['Kişisel Bilinç Dışı & Altın Gölge', 'Reddedilen öfke ve korkuların yanında, küçükken bastırdığımız yaratıcılık ve cesaret (“Altın Gölge”) de burada saklanır. Başkalarına aşırı hayranlık duymak çoğu zaman kendi Altın Gölge’ni görmektir.'],
        ['Kolektif Bilinç Dışı & Öz (Self)', 'Tüm insanlıkta ortak olan mitolojik sembollerin kaynağı ve ruhun merkez noktası. Bireyleşme yolculuğu, Ego’nun bu daha geniş bütünlükle uyumlanmasıdır.']
      ]
    },
    protocol: {
      eyebrow: 'UYGULAMALI DERİNLİK PROTOKOLÜ',
      title: 'Gölge Çalışması ve Aktif İmgelem Nasıl Yapılır?',
      sub: 'Teoride bırakmadan, günde 10 dakikalık sakin öz-gözlemle uygulayabileceğin 4 aşama.',
      steps: [
        ['Tetikleyiciyi Yakala (Yansıtma Aynası)', 'Birine karşı aniden yükselen öfke, küçümseme veya kıskançlık hissettiğinde dur. “Bu tepki neden bu kadar yüksek?” sorusu gölgeye açılan ilk kapıdır.'],
        ['Bedendeki Duyguyu Adlandır', 'Duyguyu hemen mantıkla bastırma. Göğüste sıkışma, çenede kasılma veya midede ağırlık gibi bedensel işareti yargılamadan 3 nefes boyunca izle.'],
        ['Aktif İmgelemle Diyalog Kur', 'Sessiz bir alanda (istersen Mythborn Sığınak’ta 432 Hz eşliğinde) bu duyguyu karşına bir figür gibi oturt ve sor: “Beni neyden korumaya çalışıyorsun?”'],
        ['Küçük Somut Bir Bütünleştirme Yap', 'Fark ettiğin ihtiyacı (örneğin net bir sınır koymak, dinlenmek veya dürüstçe hayır demek) o gün küçük ve gerçek bir adımla hayata geçir.']
      ]
    },
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
    faqTitle: 'Derinlik Psikolojisi Hakkında Sık Sorulanlar',
    books: {
      eyebrow: 'KÜRATÖRLÜ OKUMA KÜLLİYATI · 9 TEMEL ESER',
      title: 'Derinleşmek İsteyenler İçin Başyapıtlar.',
      sub: 'Carl Jung, Sigmund Freud ve Alfred Adler’in dünyasını ilk elden tanımak için özgün okuma rehberi ve eser özetleri.',
      authors: [
        {
          author: 'Carl Gustav Jung',
          school: 'Analitik Psikoloji',
          items: [
            ['İnsan ve Sembolleri', 'Jung’un geniş okur kitlesi için hazırladığı en erişilebilir giriş; rüya dili, arketipler ve kolektif bilinç dışının temel haritası.'],
            ['Dört Arketip', 'Anne, Yeniden Doğuş, Ruh ve Hilebaz arketipleri üzerinden bilinç dışının sembolik kalıplarını çözümler.'],
            ['Anılar, Düşler, Düşünceler', 'Jung’un kendi içsel yolculuğunu, rüyalarını ve bireyleşme sürecini birinci ağızdan anlattığı otobiyografik başyapıt.']
          ]
        },
        {
          author: 'Sigmund Freud',
          school: 'Psikanaliz',
          items: [
            ['Düşlerin Yorumu', 'Rüyaları bilinç dışına açılan sembolik bir kapı olarak ele alan ve modern psikolojinin yönünü değiştiren temel eser.'],
            ['Günlük Yaşamın Psikopatolojisi', 'Dil sürçmeleri, unutkanlıklar ve küçük günlük hataların ardındaki bilinç dışı dinamikleri sade örneklerle inceler.'],
            ['Uygarlığın Huzursuzluğu', 'Bireyin içsel dürtüleri ile toplumsal düzen arasındaki gerilimi felsefi ve psikolojik derinlikle tartışır.']
          ]
        },
        {
          author: 'Alfred Adler',
          school: 'Bireysel Psikoloji',
          items: [
            ['İnsanı Tanıma Sanatı', 'Karakter gelişimi, sosyal ilgi, aile içi konum ve insan davranışlarının amaca dönük doğasını anlaşılır bir dille anlatır.'],
            ['Yaşamın Anlam ve Amacı', 'Geçmiş travmaların mahkûmu olmak yerine deneyimlere yeni bir anlam ve yön kazandırma cesaretini işler.'],
            ['Yaşama Sanatı', 'Eksiklik hissini sağlıklı gelişim ve toplumsal katkıya dönüştürmenin pratik ilkelerini sunar.']
          ]
        }
      ]
    },
    ctaSanctuary: 'Meditasyon & Frekans Stüdyosuna Geç →',
    ctaGuide: 'Carl Jung Uzun-Form Rehberini Oku →',
    ethics: 'Bu alan Carl Gustav Jung’un derinlik psikolojisi kavramlarını kişisel farkındalık ve editoryal tefekkür amacıyla sunar; klinik psikoterapi veya tıbbi tanı yerine geçmez.'
  },
  en: {
    eyebrow: 'CARL JUNG DEPTH PSYCHOLOGY · ARCHETYPE & SHADOW MIRROR',
    title: 'Make the Unconscious Visible, Return to Wholeness.',
    lead: 'A quiet reflection space built around Carl Gustav Jung’s archetypes, shadow work, active imagination and synchronicity.',
    intro: {
      eyebrow: 'FOUNDATIONS OF ANALYTICAL PSYCHOLOGY',
      title: 'Carl Gustav Jung and the Architecture of the Psyche',
      p1: 'Swiss psychiatrist Carl Gustav Jung (1875–1961) viewed the human psyche not merely as a vault of repressed trauma, but as a living symbolic system seeking meaning, balance and wholeness. Expanding beyond early psychoanalysis, he introduced the Collective Unconscious, Archetypes, the Shadow, Synchronicity and Individuation.',
      p2: 'According to Jung, the first half of life builds social identity (the Persona), while the second half invites us to look beneath our masks and reunite with the authentic Self. Dreams, recurring relational patterns and emotional triggers are honest letters from the unconscious.',
      facts: [
        ['Analytical Psychology', 'Born from clinical observation in Zurich and comparative world mythology.'],
        ['The Red Book (Liber Novus)', 'Jung’s 16-year private Active Imagination journal dialoguing with inner symbols.'],
        ['Individuation', 'Becoming whole rather than perfect—integrating both light and shadow consciously.']
      ]
    },
    compare: {
      eyebrow: 'THREE PILLARS OF DEPTH PSYCHOLOGY',
      title: '<span class="mb-nowrap">Carl&nbsp;Jung</span> · <span class="mb-nowrap">Sigmund&nbsp;Freud</span> · <span class="mb-nowrap">Alfred&nbsp;Adler</span>',
      sub: 'Three foundational lenses on the human unconscious, dreams and transformation.',
      items: [
        {
          name: 'Carl Gustav Jung',
          school: 'Analytical Psychology',
          drive: 'Search for meaning, wholeness and Individuation.',
          unconscious: 'Personal unconscious plus the universal Collective Unconscious and Archetypes.',
          dreams: 'Symbolic compensations pointing toward psychological balance and future growth.',
          quote: '“Until you make the unconscious conscious, it will direct your life and you will call it fate.”'
        },
        {
          name: 'Sigmund Freud',
          school: 'Psychoanalysis',
          drive: 'Unconscious drives, pleasure principle and early childhood conflict.',
          unconscious: 'Personal reservoir of repressed memories, desires and defense mechanisms.',
          dreams: 'Disguised fulfillment of repressed wishes (“the royal road to the unconscious”).',
          quote: '“Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.”'
        },
        {
          name: 'Alfred Adler',
          school: 'Individual Psychology',
          drive: 'Belonging, purpose and transforming feelings of inadequacy into contribution.',
          unconscious: 'Shaped by future-oriented goals, lifestyle choices and social interest.',
          dreams: 'Mental rehearsals preparing the individual for current life challenges.',
          quote: '“We do not suffer from the shock of our experiences; we make out of them what aligns with our chosen meaning.”'
        }
      ]
    },
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
    psyche: {
      eyebrow: 'ARCHITECTURE OF THE PSYCHE · FOUR LAYERS',
      title: 'From Social Mask to Collective Depth',
      sub: 'Jung mapped the psyche across four interacting layers.',
      layers: [
        ['Persona (Social Mask)', 'The adaptive role we show society. Healthy when flexible, exhausting when mistaken for our entire identity.'],
        ['Ego (Center of Consciousness)', 'Our waking sense of “I”. Essential for navigation, yet only a small island atop a vast psychic ocean.'],
        ['Personal Unconscious & Golden Shadow', 'Holds repressed fears alongside disowned creativity and courage (the Golden Shadow we often admire in others).'],
        ['Collective Unconscious & Self', 'Universal symbolic patterns shared across humanity, oriented toward wholeness (Individuation).']
      ]
    },
    protocol: {
      eyebrow: 'PRACTICAL REFLECTION PROTOCOL',
      title: 'Four Grounded Steps for Shadow Work & Active Imagination',
      sub: 'A calm 10-minute reflective sequence you can practice without dogma.',
      steps: [
        ['Catch the Trigger (Projection Mirror)', 'Notice sudden, disproportionate irritation or envy toward someone else—that emotional charge marks a shadow edge.'],
        ['Name the Somatic Sensation', 'Pause before rationalizing. Observe tightness in chest, jaw or breath for three calm cycles.'],
        ['Dialogue via Active Imagination', 'In stillness (optionally with 432 Hz in Mythborn Sanctuary), ask the emotion: “What are you trying to protect in me?”'],
        ['Integrate with One Honest Action', 'Honor the underlying healthy need—such as setting a clear boundary or resting—through one concrete step today.']
      ]
    },
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
    faqTitle: 'Frequently Asked Questions on Depth Psychology',
    books: {
      eyebrow: 'CURATED READING LIBRARY · 9 ESSENTIAL WORKS',
      title: 'Timeless Books for Deeper Exploration.',
      sub: 'An original curated reading guide to the most influential works of Carl Jung, Sigmund Freud and Alfred Adler.',
      authors: [
        {
          author: 'Carl Gustav Jung',
          school: 'Analytical Psychology',
          items: [
            ['Man and His Symbols', 'Jung’s most accessible introduction to dream symbolism, archetypes and the collective unconscious.'],
            ['Four Archetypes', 'A focused examination of the Mother, Rebirth, Spirit and Trickster patterns in psyche and culture.'],
            ['Memories, Dreams, Reflections', 'Jung’s luminous inner autobiography recounting his visions, dreams and path of individuation.']
          ]
        },
        {
          author: 'Sigmund Freud',
          school: 'Psychoanalysis',
          items: [
            ['The Interpretation of Dreams', 'The landmark treatise framing dreams as the royal road to understanding unconscious dynamics.'],
            ['The Psychopathology of Everyday Life', 'Explores slips of the tongue, forgetting and subtle everyday parapraxes through accessible case notes.'],
            ['Civilization and Its Discontents', 'Examines the enduring tension between individual instinctual freedom and collective social order.']
          ]
        },
        {
          author: 'Alfred Adler',
          school: 'Individual Psychology',
          items: [
            ['Understanding Human Nature', 'Explains goal-directed behavior, social interest and how personality forms in relation to community.'],
            ['What Life Could Mean to You', 'Focuses on agency—how the meaning we assign to experience shapes courage and direction.'],
            ['The Science of Living', 'A practical guide to turning feelings of inferiority into constructive growth and contribution.']
          ]
        }
      ]
    },
    ctaSanctuary: 'Enter the Meditation & Frequency Studio →',
    ctaGuide: 'Read the Full Carl Jung Guide →',
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
        question: '“Altın Gölge” (Golden Shadow) ne anlama gelir?',
        answer: 'Gölge yalnızca karanlık veya öfkeli yanlarımızı değil; cesaret, yaratıcılık veya liderlik gibi küçükken bastırdığımız parlak potansiyelleri de barındırır. Başkalarına duyduğumuz yoğun hayranlık çoğu zaman kendi Altın Gölge’mizin yansımasıdır.'
      },
      {
        question: 'Eşzamanlılık (Synchronicity) sıradan tesadüften nasıl ayrılır?',
        answer: 'Eşzamanlılıkta aralarında nedensel bir bağ olmayan içsel bir ruh hali ile dışsal bir olay, kişi için derin bir anlam ve içgörü taşıyacak biçimde örtüşür.'
      },
      {
        question: 'Aktif İmgelem (Active Imagination) nasıl yapılır?',
        answer: 'Zihni sakinleştirdikten sonra rüyadan veya güçlü bir duygudan gelen sembolü yargılamadan gözlemleyip ona sorular sorarak uyanık bilinçte diyalog kurma ve yazıya dökme pratiğidir.'
      },
      {
        question: 'Eşzamanlılık günlüğü verilerim sunucuya kaydediliyor mu?',
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
      question: 'What is the Golden Shadow?',
      answer: 'The Shadow does not only hold difficult emotions; it also carries unlived strengths, creativity and courage that we often project onto people we intensely admire.'
    },
    {
      question: 'Are Synchronicity Journal notes sent to a server?',
      answer: 'No. Your notes remain strictly in your browser’s localStorage on your own device and are never transmitted.'
    }
  ];
};

export const renderJungView = ({ locale = 'tr', sanctuaryHref = '/meditasyon-ve-frekans' } = {}) => {
  const c = getJungCopy(locale);
  const first = c.archetypes[0];
  const faqs = getJungFaqItems(locale);
  const guideHref = locale === 'tr' ? '/rehber/carl-jung-golge-ve-arketip' : '/en/guides/carl-jung-golge-ve-arketip';

  return `
  <div class="sanc-page" data-jung-app>
    <!-- 1. Full-Bleed Vibrant Carl Jung Hero -->
    <section class="sanc-hero sanc-hero-fullbleed">
      <img class="sanc-hero-bg" src="/images/jung-hero-2027.jpg" alt="" width="1408" height="768" fetchpriority="high" decoding="async" aria-hidden="true">
      <div class="astro-container sanc-center sanc-hero-content">
        <span class="sanc-eyebrow">✦ ${c.eyebrow}</span>
        <h1 class="sanc-h1">${c.title}</h1>
        <p class="sanc-lead">${c.lead}</p>
      </div>
    </section>

    <!-- 2. Analytical Psychology Monograph Intro -->
    <section class="sanc-section">
      <div class="astro-container">
        <div class="jung-monograph-grid">
          <div class="jung-monograph-copy">
            <span class="sanc-eyebrow">✦ ${c.intro.eyebrow}</span>
            <h2>${c.intro.title}</h2>
            <p>${c.intro.p1}</p>
            <p>${c.intro.p2}</p>
          </div>
          <aside class="jung-monograph-facts" data-spotlight>
            ${c.intro.facts.map(([fTitle, fDesc]) => `
              <div class="jung-fact-row">
                <strong>${fTitle}</strong>
                <span>${fDesc}</span>
              </div>
            `).join('')}
          </aside>
        </div>
      </div>
    </section>

    <!-- 3. Jung · Freud · Adler Comparison -->
    <section class="sanc-section" id="uc-ekol">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.compare.eyebrow}</span>
          <h2>${c.compare.title}</h2>
          <p>${c.compare.sub}</p>
        </div>
        <div class="jung-compare-grid">
          ${c.compare.items.map((item) => `
            <article class="jung-compare-card" data-spotlight>
              <div>
                <span class="mb27-card-tag">${item.school}</span>
                <h3>${item.name}</h3>
                <dl class="jung-compare-dl">
                  <dt>${locale === 'tr' ? 'Temel İtici Güç' : 'Core Drive'}</dt>
                  <dd>${item.drive}</dd>
                  <dt>${locale === 'tr' ? 'Bilinç Dışı' : 'Unconscious'}</dt>
                  <dd>${item.unconscious}</dd>
                  <dt>${locale === 'tr' ? 'Rüyaların Anlamı' : 'Role of Dreams'}</dt>
                  <dd>${item.dreams}</dd>
                </dl>
              </div>
              <blockquote class="jung-compare-quote">${item.quote}</blockquote>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. Interactive Archetype & Shadow Mirror -->
    <section class="sanc-section" id="arketip-aynasi">
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

    <!-- Quote Interlude — Carl Gustav Jung -->
    <section class="mb27-quote-band" aria-label="Carl Gustav Jung">
      <div class="astro-container">
        <blockquote class="mb27-quote">
          <p>${locale === 'tr' ? '“Dışarı bakan rüya görür, içeri bakan uyanır.”' : '“Who looks outside, dreams; who looks inside, awakes.”'}</p>
          <cite>— Carl Gustav Jung</cite>
        </blockquote>
      </div>
    </section>

    <!-- 5. Four Layers of the Psyche -->
    <section class="sanc-section" id="psise-mimarisi">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.psyche.eyebrow}</span>
          <h2>${c.psyche.title}</h2>
          <p>${c.psyche.sub}</p>
        </div>
        <div class="sanc-guide-grid">
          ${c.psyche.layers.map(([lTitle, lDesc]) => `
            <article class="sanc-guide-card" data-spotlight>
              <h3>${lTitle}</h3>
              <p>${lDesc}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 6. 4-Step Shadow Work & Active Imagination Protocol -->
    <section class="sanc-section" id="golge-protokolu">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.protocol.eyebrow}</span>
          <h2>${c.protocol.title}</h2>
          <p>${c.protocol.sub}</p>
        </div>
        <div class="sanc-guide-grid">
          ${c.protocol.steps.map(([sTitle, sDesc]) => `
            <article class="sanc-guide-card" data-spotlight>
              <h3>${sTitle}</h3>
              <p>${sDesc}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 7. Private Local Synchronicity Journal -->
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

    <!-- 7b. Curated Reading Library (Jung, Freud & Adler — 9 Essential Works) -->
    ${c.books ? `
    <section class="sanc-section" id="okuma-listesi">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.books.eyebrow}</span>
          <h2>${c.books.title}</h2>
          <p>${c.books.sub}</p>
        </div>
        <div class="jung-compare-grid">
          ${c.books.authors.map((group) => `
            <article class="jung-compare-card" data-spotlight>
              <div>
                <span class="mb27-card-tag">${group.school}</span>
                <h3>${group.author}</h3>
                <ul class="jung-book-list">
                  ${group.items.map(([bTitle, bSummary]) => `
                    <li>
                      <strong>${bTitle}</strong>
                      <span>${bSummary}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <!-- 8. Visible Depth Psychology FAQ + Sanctuary Bridge -->
    <section class="sanc-section" id="jung-sss">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${locale === 'tr' ? 'SIK SORULANLAR' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          <h2>${c.faqTitle}</h2>
        </div>
        <div class="jung-faq-grid">
          ${faqs.map((f) => `
            <article class="jung-faq-card" data-spotlight>
              <h3>${f.question}</h3>
              <p>${f.answer}</p>
            </article>
          `).join('')}
        </div>
        <div class="sanc-center" style="margin-top:36px">
          <div class="sanc-btn-row" style="justify-content:center">
            <a href="${sanctuaryHref}" class="sanc-btn-gold">${c.ctaSanctuary}</a>
            <a href="${guideHref}" class="sanc-btn-ghost">${c.ctaGuide}</a>
          </div>
          <p class="sanc-ethics-note">${c.ethics}</p>
        </div>
      </div>
    </section>
  </div>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
