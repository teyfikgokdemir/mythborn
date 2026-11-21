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
      title: '<span class="jung-trio-title"><span class="jung-trio-name">Carl Jung</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Sigmund Freud</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Alfred Adler</span></span>',
      sub: 'Aynı insan ruhuna üç farklı pencereden bakan üç büyük ekolün özeti.',
      items: [
        {
          name: 'Carl Gustav Jung',
          school: 'Analitik Psikoloji',
          drive: 'Anlam arayışı ve Bireyleşme (Öz’e ulaşma).',
          unconscious: 'Kişisel bilinç dışına ek olarak tüm insanlığın paylaştığı Kolektif Bilinç Dışı ve Arketipler.',
          dreams: 'Rüyalar yalnızca geçmişi gizlemez; geleceğe ve ruhsal dengeye işaret eden sembolik mesajlardır.',
          quote: '“Bilinç dışını bilinçli kılmazsan, o seni yönetir — buna kader dersin.”'
        },
        {
          name: 'Sigmund Freud',
          school: 'Psikanaliz',
          drive: 'Bilinç dışı dürtüler, haz ilkesi ve erken çocukluk çatışmaları.',
          unconscious: 'Bastırılmış anılar, yasak arzular ve savunma mekanizmalarının saklandığı kişisel katman.',
          dreams: 'Rüyalar bastırılmış isteklerin sembolik kılık değiştirmiş ifadesidir (“bilinç dışına giden kral yolu”).',
          quote: '“İfade edilmemiş duygular ölmez; gömülür ve daha karmaşık biçimde geri döner.”'
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
    ethics: 'Bu alan Carl Gustav Jung’un derinlik psikolojisi kavramlarını kişisel farkındalık ve editoryal tefekkür amacıyla sunar; klinik psikoterapi veya tıbbi tanı yerine geçmez.',
    dlLabels: { drive: 'Temel İtici Güç', unconscious: 'Bilinç Dışı', dreams: 'Rüyaların Anlamı' },
    quoteInterlude: '“Dışarı bakan rüya görür, içeri bakan uyanır.”',
    faqEyebrow: 'SIK SORULANLAR'
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
      title: '<span class="jung-trio-title"><span class="jung-trio-name">Carl Jung</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Sigmund Freud</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Alfred Adler</span></span>',
      sub: 'Three foundational lenses on the human unconscious, dreams and transformation.',
      items: [
        {
          name: 'Carl Gustav Jung',
          school: 'Analytical Psychology',
          drive: 'Search for meaning, wholeness and Individuation.',
          unconscious: 'Personal unconscious plus the universal Collective Unconscious and Archetypes.',
          dreams: 'Symbolic compensations pointing toward psychological balance and future growth.',
          quote: '“Until you make the unconscious conscious, you will call it fate.”'
        },
        {
          name: 'Sigmund Freud',
          school: 'Psychoanalysis',
          drive: 'Unconscious drives, pleasure principle and early childhood conflict.',
          unconscious: 'Personal reservoir of repressed memories, desires and defense mechanisms.',
          dreams: 'Disguised fulfillment of repressed wishes (“the royal road to the unconscious”).',
          quote: '“Unexpressed emotions never die; they are buried alive and return in uglier ways.”'
        },
        {
          name: 'Alfred Adler',
          school: 'Individual Psychology',
          drive: 'Belonging, purpose and transforming feelings of inadequacy into contribution.',
          unconscious: 'Shaped by future-oriented goals, lifestyle choices and social interest.',
          dreams: 'Mental rehearsals preparing the individual for current life challenges.',
          quote: '“We do not suffer from our experiences; we make them align with our chosen meaning.”'
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
    ethics: 'This page explores Carl Gustav Jung’s depth psychology concepts for personal reflection and education. It is not clinical psychotherapy or medical advice.',
    dlLabels: { drive: 'Core Drive', unconscious: 'Unconscious', dreams: 'Role of Dreams' },
    quoteInterlude: '“Who looks outside, dreams; who looks inside, awakes.”',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS'
  },
  el: {
    eyebrow: 'ΒΑΘΙΑ ΨΥΧΟΛΟΓΙΑ CARL JUNG · ΚΑΘΡΕΦΤΗΣ ΑΡΧΕΤΥΠΩΝ & ΣΚΙΑΣ',
    title: 'Κάνε το Ασυνείδητο Ορατό, Επίστρεψε στην Ολότητα.',
    lead: 'Ένας ήρεμος χώρος ενδοσκόπησης βασισμένος στα αρχέτυπα, την εργασία με τη σκιά, την ενεργητική φαντασία και τη συγχρονικότητα του Carl Gustav Jung.',
    intro: {
      eyebrow: 'ΘΕΜΕΛΙΑ ΤΗΣ ΑΝΑΛΥΤΙΚΗΣ ΨΥΧΟΛΟΓΙΑΣ',
      title: 'Ο Carl Gustav Jung και η Αρχιτεκτονική της Ψυχής',
      p1: 'Ο Ελβετός ψυχίατρος Carl Gustav Jung (1875–1961) είδε την ανθρώπινη ψυχή όχι μόνο ως αποθήκη απωθημένων τραυμάτων, αλλά ως ζωντανό συμβολικό σύστημα που αναζητά νόημα, ισορροπία και ολότητα. Πέρα από την πρώιμη ψυχανάλυση, ανέπτυξε έννοιες όπως το Συλλογικό Ασυνείδητο, τα Αρχέτυπα, τη Σκιά, τη Συγχρονικότητα και την Εξατομίκευση.',
      p2: 'Κατά τον Jung, το πρώτο μισό της ζωής χτίζει την κοινωνική ταυτότητα (Persona), ενώ το δεύτερο μας καλεί να κοιτάξουμε πίσω από τη μάσκα και να συναντήσουμε τον αυθεντικό Εαυτό. Τα όνειρα, οι επαναλαμβανόμενες σχέσεις και οι συναισθηματικές εντάσεις είναι ειλικρινή μηνύματα του ασυνειδήτου.',
      facts: [
        ['Αναλυτική Ψυχολογία', 'Γεννήθηκε μέσα από κλινική παρατήρηση στη Ζυρίχη και τη συγκριτική παγκόσμια μυθολογία.'],
        ['Το Κόκκινο Βιβλίο (Liber Novus)', 'Το 16ετές προσωπικό ημερολόγιο Ενεργητικής Φαντασίας του Jung σε διάλογο με εσωτερικά σύμβολα.'],
        ['Εξατομίκευση (Individuation)', 'Το ταξίδι προς την ψυχική πληρότητα — συνειδητή ένωση φωτός και σκιάς.']
      ]
    },
    compare: {
      eyebrow: 'ΤΡΕΙΣ ΠΥΛΩΝΕΣ ΤΗΣ ΨΥΧΟΛΟΓΙΑΣ ΒΑΘΟΥΣ',
      title: '<span class="jung-trio-title"><span class="jung-trio-name">Carl Jung</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Sigmund Freud</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Alfred Adler</span></span>',
      sub: 'Τρεις θεμελιώδεις οπτικές για το ανθρώπινο ασυνείδητο, τα όνειρα και την εσωτερική μεταμόρφωση.',
      items: [
        {
          name: '<span class="mb-nowrap">Carl Gustav Jung</span>',
          school: 'Αναλυτική Ψυχολογία',
          drive: 'Αναζήτηση νοήματος, ολότητας και Εξατομίκευσης.',
          unconscious: 'Προσωπικό ασυνείδητο μαζί με το παγκόσμιο Συλλογικό Ασυνείδητο και τα Αρχέτυπα.',
          dreams: 'Συμβολικά αντισταθμιστικά μηνύματα που δείχνουν προς την ισορροπία και την εξέλιξη.',
          quote: '«Όσο δεν κάνεις το ασυνείδητο συνειδητό, θα κατευθύνει τη ζωή σου και θα το αποκαλείς μοίρα.»'
        },
        {
          name: '<span class="mb-nowrap">Sigmund Freud</span>',
          school: 'Ψυχανάλυση',
          drive: 'Ασυνείδητες ενορμήσεις, αρχή της ηδονής και πρώιμες παιδικές συγκρούσεις.',
          unconscious: 'Προσωπική δεξαμενή απωθημένων αναμνήσεων, επιθυμιών και μηχανισμών άμυνας.',
          dreams: 'Κεκαλυμμένη εκπλήρωση απωθημένων επιθυμιών («η βασιλική οδός προς το ασυνείδητο»).',
          quote: '«Τα ανέκφραστα συναισθήματα δεν πεθαίνουν ποτέ· θάβονται ζωντανά και επιστρέφουν αργότερα.»'
        },
        {
          name: '<span class="mb-nowrap">Alfred Adler</span>',
          school: 'Ατομική Ψυχολογία',
          drive: 'Ανάγκη για το ανήκειν, σκοπός και μετατροπή της ανεπάρκειας σε κοινωνική προσφορά.',
          unconscious: 'Διαμορφώνεται από μελλοντικούς στόχους, στάση ζωής και κοινωνικό ενδιαφέρον.',
          dreams: 'Νοητικές πρόβες που προετοιμάζουν το άτομο για τις τρέχουσες προκλήσεις ζωής.',
          quote: '«Δεν υποφέρουμε από το σοκ των εμπειριών μας· πλάθουμε από αυτές ό,τι ταιριάζει με το νόημά μας.»'
        }
      ]
    },
    mirrorEyebrow: 'ΔΙΑΔΡΑΣΤΙΚΟΣ ΚΑΘΡΕΦΤΗΣ ΑΡΧΕΤΥΠΩΝ & ΣΚΙΑΣ',
    mirrorTitle: 'Ποιο Αρχέτυπο σε Καλεί Σήμερα;',
    mirrorSub: 'Επίλεξε ένα αρχέτυπο για να δεις το φωτεινό του δώρο, τον πόλο της σκιάς και μια ερώτηση ενεργητικής φαντασίας.',
    labels: {
      gift: 'Φωτεινό Δώρο',
      shadow: 'Πόλος της Σκιάς',
      prompt: 'Ερώτηση Σκιάς & Ενεργητικής Φαντασίας'
    },
    archetypes: [
      {
        id: 'shadow',
        name: 'Η Σκιά (Shadow)',
        motto: '«Δεν φωτίζεται κανείς φανταζόμενος μορφές φωτός, αλλά κάνοντας το σκοτάδι συνειδητό.»',
        gift: 'Ανέκφραστη ζωτικότητα, αυθεντικότητα, υγιή όρια και ειλικρίνεια.',
        shadow: 'Προβολή αποκηρυγμένων εσωτερικών στοιχείων στους άλλους ως αιφνίδιος εκνευρισμός ή σκληρή κριτική.',
        prompt: 'Ποια συμπεριφορά κάποιου άλλου σε ενόχλησε πρόσφατα; Ποια απωθημένη σου ανάγκη αντανακλά;'
      },
      {
        id: 'sage',
        name: 'Ο Σοφός (Sage)',
        motto: '«Η διαύγεια έρχεται όταν ο θόρυβος του νου πέφτει αρκετά ώστε να ακούσεις την αλήθεια.»',
        gift: 'Καθαρή διάκριση, αναγνώριση μοτίβων, ψύχραιμη προοπτική και στοχαστική σοφία.',
        shadow: 'Υπερανάλυση συναισθημάτων και αποφυγή απόφασης πίσω από διαρκή αναζήτηση δεδομένων.',
        prompt: 'Ποια απόφαση γνωρίζεις ήδη μέσα σου αλλά την αναβάλλεις ζητώντας κι άλλες πληροφορίες;'
      },
      {
        id: 'anima',
        name: 'Anima / Animus',
        motto: '«Η εσωτερική ένωση γεφυρώνει τη συνειδητή σκέψη με τη βαθύτερη ψυχή.»',
        gift: 'Ισορροπία ανάμεσα στη συναισθηματική δεκτικότητα και τη γειωμένη εσωτερική σταθερότητα.',
        shadow: 'Προσδοκία να συμπληρώσει ένας εξωτερικός σύντροφος ένα ανεκπλήρωτο κομμάτι σου.',
        prompt: 'Πώς μπορείς σήμερα να προσφέρεις στον εαυτό σου τη σταθερότητα που περιμένεις από τους άλλους;'
      },
      {
        id: 'magician',
        name: 'Ο Μάγος (Magician)',
        motto: '«Με συνειδητό βλέμμα, η κρίση είναι το χωνευτήρι όπου η παλιά μορφή δίνει χώρο στην ανανέωση.»',
        gift: 'Εσωτερική αλχημεία, συμβολική όραση και μετατροπή της τριβής σε ωρίμανση.',
        shadow: 'Ανάγκη για έλεγχο ή φόβος παράδοσης στην αβεβαιότητα της αλλαγής.',
        prompt: 'Σε ποια μετάβαση αντιστέκεσαι τώρα, που θα διεύρυνε την επίγνωσή σου αν την αποδεχόσουν;'
      },
      {
        id: 'explorer',
        name: 'Ο Εξερευνητής (Explorer)',
        motto: '«Το να περπατάς στον δρόμο κάποιου άλλου κουράζει την ψυχή πιο πολύ από κάθε βουνό.»',
        gift: 'Αυτονομία, περιέργεια, αυθεντικότητα και θάρρος πέρα από τη συμβατικότητα.',
        shadow: 'Ανήσυχη φυγή από τη δέσμευση ή το βάθος κάθε φορά που η σιωπή δυσκολεύει.',
        prompt: 'Κατευθύνεσαι αληθινά προς έναν νέο ορίζοντα ή αποφεύγεις μια ήρεμη αλήθεια εκεί όπου στέκεσαι;'
      },
      {
        id: 'creator',
        name: 'Ο Δημιουργός (Creator)',
        motto: '«Η φαντασία είναι η ψυχή που μιλά πριν προλάβουν οι λέξεις.»',
        gift: 'Πρωτότυπη έκφραση, αισθητική διαίσθηση και υλοποίηση του εσωτερικού οράματος.',
        shadow: 'Τελειομανία που παραλύει τη δημιουργία πριν χαραχθεί η πρώτη γραμμή.',
        prompt: 'Ποιο μικρό, ειλικρινές έργο μπορείς να ολοκληρώσεις σήμερα χωρίς να απαιτείς τελειότητα;'
      },
      {
        id: 'ruler',
        name: 'Ο Ηγεμόνας (Ruler)',
        motto: '«Η αληθινή κυριαρχία ξεκινά βάζοντας τάξη στο δικό σου εσωτερικό βασίλειο.»',
        gift: 'Υπευθυνότητα, ήρεμη καθοδήγηση, καθαρά όρια και συνεκτικό όραμα.',
        shadow: 'Ακαμψία, φόβος ευαλωτότητας και προσπάθεια να κουβαλάς τα πάντα μόνος.',
        prompt: 'Πού μπορείς να χαλαρώσεις λίγο τον έλεγχο και να εμπιστευτείς τη σταθερότητα;'
      },
      {
        id: 'self',
        name: 'Ο Εαυτός (The Self / Ολότητα)',
        motto: '«Η εξατομίκευση είναι η ήρεμη επιστροφή των διάσπαρτων μερών σε ένα κέντρο.»',
        gift: 'Κεντραρισμένη ολότητα, εσωτερική ειρήνη και ικανότητα αποδοχής των αντιθέσεων.',
        shadow: 'Ταύτιση των κοινωνικών ρόλων (Persona) με αυτό που πραγματικά είσαι.',
        prompt: 'Αν άφηνες για ένα λεπτό κάθε τίτλο και προσδοκία, ποια ήρεμη αλήθεια θα έμενε;'
      }
    ],
    psyche: {
      eyebrow: 'ΑΡΧΙΤΕΚΤΟΝΙΚΗ ΤΗΣ ΨΥΧΗΣ · ΤΕΣΣΕΡΑ ΕΠΙΠΕΔΑ',
      title: 'Από την Κοινωνική Μάσκα στο Συλλογικό Βάθος',
      sub: 'Ο Jung χαρτογράφησε την ψυχή μέσα από τέσσερα αλληλεπιδρώντα επίπεδα.',
      layers: [
        ['Persona (Κοινωνική Μάσκα)', 'Ο προσαρμοστικός ρόλος προς την κοινωνία. Υγιής όταν είναι ευέλικτος, εξαντλητικός όταν τον νομίζουμε για όλη μας την ταυτότητα.'],
        ['Εγώ (Κέντρο της Συνείδησης)', 'Η αφυπνισμένη αίσθηση του «Εγώ». Απαραίτητο για πλοήγηση, αλλά μόνο ένα μικρό νησί πάνω σε έναν απέραντο ψυχικό ωκεανό.'],
        ['Προσωπικό Ασυνείδητο & Χρυσή Σκιά', 'Κρατά απωθημένους φόβους μαζί με ανεκδήλωτη δημιουργικότητα και θάρρος (τη Χρυσή Σκιά που συχνά θαυμάζουμε στους άλλους).'],
        ['Συλλογικό Ασυνείδητο & Εαυτός', 'Παγκόσμια συμβολικά μοτίβα που μοιράζεται όλη η ανθρωπότητα με προσανατολισμό προς την ολότητα.']
      ]
    },
    protocol: {
      eyebrow: 'ΠΡΑΚΤΙΚΟ ΠΡΩΤΟΚΟΛΛΟ ΕΝΔΟΣΚΟΠΗΣΗΣ',
      title: 'Τέσσερα Βήματα για Σκιά & Ενεργητική Φαντασία',
      sub: 'Μια ήρεμη 10λεπτη πρακτική αυτοπαρατήρησης χωρίς δογματισμό.',
      steps: [
        ['Εντόπισε το Ερέθισμα (Καθρέφτης Προβολής)', 'Παρατήρησε τον ξαφνικό, δυσανάλογο εκνευρισμό ή ζήλια προς κάποιον — αυτό το φορτίο δείχνει ένα όριο της σκιάς.'],
        ['Ονόμασε τη Σωματική Αίσθηση', 'Σταμάτα πριν εκλογικεύσεις. Νιώσε το σφίξιμο στο στήθος, στο σαγόνι ή στην αναπνοή για τρεις ήρεμες αναπνοές.'],
        ['Διάλογος με Ενεργητική Φαντασία', 'Στη σιωπή (προαιρετικά με 432 Hz στο Καταφύγιο Mythborn), ρώτησε το συναίσθημα: «Από τι προσπαθείς να με προστατεύσεις;»'],
        ['Ενσωμάτωσε με Ένα Συγκεκριμένο Βήμα', 'Τίμησε την υποκείμενη υγιή ανάγκη — όπως το να θέσεις ένα όριο ή να ξεκουραστείς — με μια πράξη σήμερα.']
      ]
    },
    sync: {
      eyebrow: 'ΗΜΕΡΟΛΟΓΙΟ ΣΥΓΧΡΟΝΙΚΟΤΗΤΑΣ · 100% ΤΟΠΙΚΟ & ΙΔΙΩΤΙΚΟ',
      title: 'Κατέγραψε Σημαδιακές Συμπτώσεις.',
      sub: 'Σημείωσε τις συναντήσεις εσωτερικής κατάστασης και εξωτερικών γεγονότων. Οι εγγραφές μένουν αποκλειστικά στον περιηγητή σου και δεν αποστέλλονται σε κανέναν διακομιστή.',
      selectLabel: 'Σχετικό Αρχέτυπο / Θέμα',
      noteLabel: 'Σύμβολο, όνειρο ή συγχρονικότητα που πρόσεξες σήμερα',
      notePlaceholder: 'Παράδειγμα: Ενώ σκεφτόμουν μια αλλαγή, συνάντησα δύο φορές την ίδια φράση μέσα στην ίδια μέρα...',
      saveBtn: 'Αποθήκευση Τοπικά',
      clearBtn: 'Εκκαθάριση',
      empty: 'Δεν υπάρχουν ακόμη καταχωρήσεις συγχρονικότητας. Κατέγραψε την πρώτη σου παρατήρηση παραπάνω.'
    },
    faqTitle: 'Συχνές Ερωτήσεις για την Ψυχολογία Βάθους',
    books: {
      eyebrow: 'ΕΠΙΜΕΛΗΜΕΝΗ ΒΙΒΛΙΟΘΗΚΗ ΑΝΑΓΝΩΣΗΣ · 9 ΘΕΜΕΛΙΩΔΗ ΕΡΓΑ',
      title: 'Διαχρονικά Βιβλία για Βαθύτερη Εξερεύνηση.',
      sub: 'Πρωτότυπος οδηγός ανάγνωσης για τα σημαντικότερα έργα των Carl Jung, Sigmund Freud και Alfred Adler.',
      authors: [
        {
          author: 'Carl Gustav Jung',
          school: 'Αναλυτική Ψυχολογία',
          items: [
            ['Ο Άνθρωπος και τα Σύμβολά του', 'Η πιο προσιτή εισαγωγή του Jung στη συμβολολογία των ονείρων, στα αρχέτυπα και στο συλλογικό ασυνείδητο.'],
            ['Τέσσερα Αρχέτυπα', 'Εστιασμένη μελέτη των μοτίβων της Μητέρας, της Αναγέννησης, του Πνεύματος και του Κατεργάρη στην ψυχή και στον πολιτισμό.'],
            ['Αναμνήσεις, Όνειρα, Σκέψεις', 'Η φωτεινή εσωτερική αυτοβιογραφία του Jung που αφηγείται όνειρα, οράματα και τη διαδρομή της εξατομίκευσης.']
          ]
        },
        {
          author: 'Sigmund Freud',
          school: 'Ψυχανάλυση',
          items: [
            ['Η Ερμηνεία των Ονείρων', 'Το θεμελιώδες έργο που ανέδειξε τα όνειρα ως τη βασιλική οδό για την κατανόηση του ασυνειδήτου.'],
            ['Η Ψυχοπαθολογία της Καθημερινής Ζωής', 'Εξετάζει τα σαρδάμ, τη λήθη και τις μικρές καθημερινές αστοχίες μέσα από ζωντανά παραδείγματα.'],
            ['Ο Πολιτισμός Πηγή Δυστυχίας', 'Αναλύει τη διαρκή ένταση ανάμεσα στις ατομικές ενορμήσεις ελευθερίας και στην κοινωνική τάξη.']
          ]
        },
        {
          author: 'Alfred Adler',
          school: 'Ατομική Ψυχολογία',
          items: [
            ['Κατανοώντας την Ανθρώπινη Φύση', 'Εξηγεί τη στοχευμένη συμπεριφορά, το κοινωνικό ενδιαφέρον και το πώς διαμορφώνεται ο χαρακτήρας στην κοινότητα.'],
            ['Το Νόημα της Ζωής', 'Εστιάζει στην προσωπική ευθύνη — πώς το νόημα που δίνουμε στις εμπειρίες πλάθει το θάρρος μας.'],
            ['Η Επιστήμη της Ζωής', 'Πρακτικός οδηγός μετατροπής του αισθήματος ανεπάρκειας σε δημιουργική ανάπτυξη και προσφορά.']
          ]
        }
      ]
    },
    ctaSanctuary: 'Μετάβαση στο Στούντιο Διαλογισμού & Συχνοτήτων →',
    ctaGuide: 'Ανάγνωση Πλήρους Οδηγού Carl Jung →',
    ethics: 'Αυτή η σελίδα παρουσιάζει τις έννοιες ψυχολογίας βάθους του Carl Gustav Jung για προσωπικό στοχασμό και εκπαίδευση· δεν αποτελεί κλινική ψυχοθεραπεία ή ιατρική συμβουλή.',
    dlLabels: { drive: 'Κεντρική Κινητήρια Δύναμη', unconscious: 'Ασυνείδητο', dreams: 'Ρόλος των Ονείρων' },
    quoteInterlude: '«Όποιος κοιτά έξω, ονειρεύεται· όποιος κοιτά μέσα, ξυπνά.»',
    faqEyebrow: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ'
  },
  es: {
    eyebrow: 'PSICOLOGÍA PROFUNDA DE CARL JUNG · ESPEJO DE ARQUETIPOS Y SOMBRA',
    title: 'Haz Visible lo Inconsciente, Regresa a la Plenitud.',
    lead: 'Un espacio sereno de reflexión construido en torno a los arquetipos, el trabajo con la sombra, la imaginación activa y la sincronicidad de Carl Gustav Jung.',
    intro: {
      eyebrow: 'FUNDAMENTOS DE LA PSICOLOGÍA ANALÍTICA',
      title: 'Carl Gustav Jung y la Arquitectura de la Psique',
      p1: 'El psiquiatra suizo Carl Gustav Jung (1875–1961) concibió la psique humana no solo como un archivo de traumas reprimidos, sino como un sistema simbólico vivo que busca sentido, equilibrio e integridad. Más allá del psicoanálisis temprano, formuló el Inconsciente Colectivo, los Arquetipos, la Sombra, la Sincronicidad y la Individuación.',
      p2: 'Para Jung, la primera mitad de la vida construye la identidad social (Persona), mientras que la segunda nos invita a mirar detrás de la máscara y reunirnos con el Sí-Mismo auténtico. Los sueños, los patrones relacionales y los detonantes emocionales son cartas honestas del inconsciente.',
      facts: [
        ['Psicología Analítica', 'Nacida de la observación clínica en Zúrich y la mitología comparada universal.'],
        ['El Libro Rojo (Liber Novus)', 'Diario privado de 16 años donde Jung dialogó mediante Imaginación Activa con símbolos internos.'],
        ['Individuación', 'Llegar a estar completo antes que perfecto: integrar conscientemente tanto la luz como la sombra.']
      ]
    },
    compare: {
      eyebrow: 'TRES PILARES DE LA PSICOLOGÍA PROFUNDA',
      title: '<span class="jung-trio-title"><span class="jung-trio-name">Carl Jung</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Sigmund Freud</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Alfred Adler</span></span>',
      sub: 'Tres miradas fundacionales sobre el inconsciente humano, los sueños y la transformación interior.',
      items: [
        {
          name: '<span class="mb-nowrap">Carl Gustav Jung</span>',
          school: 'Psicología Analítica',
          drive: 'Búsqueda de sentido, totalidad e Individuación.',
          unconscious: 'Inconsciente personal junto con el Inconsciente Colectivo universal y los Arquetipos.',
          dreams: 'Compensaciones simbólicas orientadas al equilibrio psicológico y al crecimiento futuro.',
          quote: '«Hasta que no hagas consciente lo inconsciente, dirigirá tu vida y lo llamarás destino.»'
        },
        {
          name: '<span class="mb-nowrap">Sigmund Freud</span>',
          school: 'Psicoanálisis',
          drive: 'Pulsiones inconscientes, principio de placer y conflictos tempranos de la infancia.',
          unconscious: 'Reservorio personal de recuerdos reprimidos, deseos y mecanismos de defensa.',
          dreams: 'Cumplimiento disfrazado de deseos reprimidos («la vía regia hacia el inconsciente»).',
          quote: '«Las emociones inexpresadas nunca mueren; son enterradas vivas y regresan más tarde.»'
        },
        {
          name: '<span class="mb-nowrap">Alfred Adler</span>',
          school: 'Psicología Individual',
          drive: 'Pertenencia, propósito y transformación de la insuficiencia en contribución social.',
          unconscious: 'Moldeado por metas futuras, estilo de vida e interés comunitario.',
          dreams: 'Ensayos mentales que preparan al individuo para los retos actuales de la vida.',
          quote: '«No sufrimos por el impacto de nuestras experiencias; construimos con ellas lo que sirve a nuestro sentido.»'
        }
      ]
    },
    mirrorEyebrow: 'ESPEJO INTERACTIVO DE ARQUETIPOS Y SOMBRA',
    mirrorTitle: '¿Qué Arquetipo Te Llama Hoy?',
    mirrorSub: 'Selecciona un arquetipo para explorar su don luminoso, su polo de sombra y una pregunta de imaginación activa.',
    labels: {
      gift: 'Don Luminoso',
      shadow: 'Polo de Sombra',
      prompt: 'Pregunta de Sombra e Imaginación Activa'
    },
    archetypes: [
      {
        id: 'shadow',
        name: 'La Sombra (Shadow)',
        motto: '«Uno no se ilumina imaginando figuras de luz, sino haciendo consciente la oscuridad.»',
        gift: 'Vitalidad no vivida, autenticidad, límites sanos y honestidad profunda.',
        shadow: 'Proyectar cualidades internas rechazadas sobre los demás como irritación súbita o juicio severo.',
        prompt: '¿Qué conducta ajena te irritó recientemente más de lo normal? ¿Qué necesidad negada refleja en ti?'
      },
      {
        id: 'sage',
        name: 'El Sabio (Sage)',
        motto: '«La claridad llega cuando el ruido mental baja lo suficiente para escuchar la verdad.»',
        gift: 'Discernimiento lúcido, lectura de patrones, perspectiva serena y sabiduría reflexiva.',
        shadow: 'Intelectualizar emociones y posponer decisiones detrás de un análisis interminable.',
        prompt: '¿Qué decisión ya conoces interiormente, pero sigues aplazando con la excusa de reunir más datos?'
      },
      {
        id: 'anima',
        name: 'Ánima / Ánimus',
        motto: '«La unión interior tiende un puente entre el intelecto consciente y el alma profunda.»',
        gift: 'Armonía equilibrada entre la receptividad emocional y la firmeza serena interior.',
        shadow: 'Esperar que una pareja externa complete una parte aún no habitada de ti mismo.',
        prompt: '¿Cómo puedes darte hoy esa misma estabilidad o comprensión que sigues esperando de otra persona?'
      },
      {
        id: 'magician',
        name: 'El Mago (Magician)',
        motto: '«Vista con consciencia, la crisis es el crisol donde una forma antigua da paso a lo nuevo.»',
        gift: 'Alquimia interior, visión simbólica y transformación del roce en madurez consciente.',
        shadow: 'Control compulsivo o temor a soltar certezas ante la transformación.',
        prompt: '¿Qué transición estás resistiendo ahora mismo que ampliaría tu lucidez si decidieras aceptarla?'
      },
      {
        id: 'explorer',
        name: 'El Explorador (Explorer)',
        motto: '«Caminar por el sendero de otro agota el alma más rápido que cualquier montaña.»',
        gift: 'Autonomía, curiosidad, autenticidad y valentía más allá de lo convencional.',
        shadow: 'Huida inquieta del compromiso o de la profundidad cada vez que incomoda el silencio.',
        prompt: '¿Te llama realmente un horizonte nuevo o estás evitando una verdad serena donde ahora estás?'
      },
      {
        id: 'creator',
        name: 'El Creador (Creator)',
        motto: '«La imaginación es la psique hablando antes de que las palabras alcancen.»',
        gift: 'Expresión original, intuición estética y capacidad de dar forma a la visión interior.',
        shadow: 'Perfeccionismo que paraliza la obra antes de trazar la primera línea.',
        prompt: '¿Qué pequeña creación honesta puedes terminar hoy sin exigirle perfección absoluta?'
      },
      {
        id: 'ruler',
        name: 'El Soberano (Ruler)',
        motto: '«La verdadera soberanía comienza ordenando tu propio reino interior.»',
        gift: 'Cuidado responsable, serenidad, límites claros y visión coherente.',
        shadow: 'Rigidez, temor a mostrar vulnerabilidad y cargar solo con todas las responsabilidades.',
        prompt: '¿En qué ámbito puedes soltar un poco el agarre rígido y confiar en la estabilidad real?'
      },
      {
        id: 'self',
        name: 'El Sí-Mismo (The Self / Totalidad)',
        motto: '«La individuación es el regreso sereno de las partes dispersas hacia un solo centro.»',
        gift: 'Totalidad centrada, paz interior y capacidad de sostener paradojas sin dividirse.',
        shadow: 'Confundir los roles sociales (Persona) con lo que verdaderamente eres.',
        prompt: 'Si dejaras a un lado por un minuto cada título y expectativa, ¿qué verdad silenciosa permanecería?'
      }
    ],
    psyche: {
      eyebrow: 'ARQUITECTURA DE LA PSIQUE · CUATRO CAPAS',
      title: 'De la Máscara Social a la Profundidad Colectiva',
      sub: 'Jung cartografió la psique a través de cuatro capas en diálogo constante.',
      layers: [
        ['Persona (Máscara Social)', 'El papel adaptativo que mostramos al entorno. Sano cuando es flexible; agotador si se confunde con nuestra identidad total.'],
        ['Yo (Centro de la Consciencia)', 'Nuestro sentido despierto del «yo». Indispensable para orientarnos, aunque solo una isla sobre un vasto océano psíquico.'],
        ['Inconsciente Personal y Sombra Dorada', 'Guarda miedos reprimidos junto con creatividad y coraje no vividos (la Sombra Dorada que solemos admirar en otros).'],
        ['Inconsciente Colectivo y Sí-Mismo', 'Patrones simbólicos universales compartidos por la humanidad, orientados hacia la integridad (Individuación).']
      ]
    },
    protocol: {
      eyebrow: 'PROTOCOLO PRÁCTICO DE REFLEXIÓN',
      title: 'Cuatro Pasos para Trabajar la Sombra e Imaginación Activa',
      sub: 'Una secuencia serena de 10 minutos para practicar sin dogmatismos.',
      steps: [
        ['Detecta el Detonante (Espejo de Proyección)', 'Observa una irritación o envidia repentina y desproporcionada: esa carga marca un borde de tu sombra.'],
        ['Nombra la Sensación Corporal', 'Detente antes de racionalizar. Observa tensión en el pecho, mandíbula o respiración durante tres ciclos tranquilos.'],
        ['Dialoga mediante Imaginación Activa', 'En silencio (opcionalmente con 432 Hz en el Santuario Mythborn), pregunta a la emoción: «¿De qué intentas protegerme?»'],
        ['Integra con Una Acción Concreta', 'Honra la necesidad sana detrás del impulso —poner un límite claro o descansar— con un gesto real hoy.']
      ]
    },
    sync: {
      eyebrow: 'DIARIO DE SINCRONICIDAD · 100% LOCAL Y PRIVADO',
      title: 'Registra Coincidencias Significativas.',
      sub: 'Anota cruces entre tu estado interior y hechos externos. Tus notas permanecen exclusivamente en tu navegador y nunca se envían a ningún servidor.',
      selectLabel: 'Arquetipo / Tema Relacionado',
      noteLabel: 'Símbolo, sueño o sincronicidad observada hoy',
      notePlaceholder: 'Ejemplo: Mientras reflexionaba sobre un cambio, la misma frase inesperada apareció dos veces en el día...',
      saveBtn: 'Guardar en Registro Local',
      clearBtn: 'Borrar Todo',
      empty: 'Aún no hay registros de sincronicidad. Anota tu primera observación arriba.'
    },
    faqTitle: 'Preguntas Frecuentes sobre Psicología Profunda',
    books: {
      eyebrow: 'BIBLIOTECA CURADA DE LECTURA · 9 OBRAS ESENCIALES',
      title: 'Libros Imprescindibles para Profundizar.',
      sub: 'Guía original de lectura comentada sobre las obras más influyentes de Carl Jung, Sigmund Freud y Alfred Adler.',
      authors: [
        {
          author: 'Carl Gustav Jung',
          school: 'Psicología Analítica',
          items: [
            ['El Hombre y sus Símbolos', 'La introducción más accesible de Jung al simbolismo de los sueños, los arquetipos y el inconsciente colectivo.'],
            ['Arquetipos e Inconsciente Colectivo', 'Estudio preciso de los motivos universales de la Madre, el Renacimiento, el Espíritu y el Embaucador.'],
            ['Recuerdos, Sueños, Pensamientos', 'Autobiografía interior de Jung donde narra visiones, sueños y su propio camino de individuación.']
          ]
        },
        {
          author: 'Sigmund Freud',
          school: 'Psicoanálisis',
          items: [
            ['La Interpretación de los Sueños', 'El tratado fundacional que presenta el sueño como la vía regia para comprender las dinámicas inconscientes.'],
            ['Psicopatología de la Vida Cotidiana', 'Analiza lapsus verbales, olvidos y pequeños actos fallidos mediante casos claros y cotidianos.'],
            ['El Malestar en la Cultura', 'Examina la tensión constante entre los impulsos individuales y el orden colectivo social.']
          ]
        },
        {
          author: 'Alfred Adler',
          school: 'Psicología Individual',
          items: [
            ['El Conocimiento del Hombre', 'Explica la conducta orientada a metas, el sentido comunitario y cómo se forja el carácter en sociedad.'],
            ['El Sentido de la Vida', 'Se centra en la responsabilidad personal: cómo el significado que otorgamos a lo vivido define nuestro coraje.'],
            ['La Ciencia de Vivir', 'Guía práctica para transformar los sentimientos de inferioridad en crecimiento constructivo y aporte común.']
          ]
        }
      ]
    },
    ctaSanctuary: 'Entrar al Estudio de Meditación y Frecuencias →',
    ctaGuide: 'Leer la Guía Completa de Carl Jung →',
    ethics: 'Esta página explora conceptos de la psicología profunda de Carl Gustav Jung con fines educativos y de reflexión personal; no sustituye psicoterapia clínica ni consejo médico.',
    dlLabels: { drive: 'Impulso Principal', unconscious: 'Inconsciente', dreams: 'Función de los Sueños' },
    quoteInterlude: '«Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta.»',
    faqEyebrow: 'PREGUNTAS FRECUENTES'
  },
  ar: {
    eyebrow: 'علم نفس الأعماق لكارل يونغ · مرآة النماذج الأصلية والظل',
    title: 'اجعل اللاوعي مرئياً، وعُد إلى الاكتمال.',
    lead: 'مساحة هادئة للتأمل الذاتي مبنية حول النماذج الأصلية، والعمل مع الظل، والتخيل النشط، والتزامن في فكر كارل غوستاف يونغ.',
    intro: {
      eyebrow: 'أسس علم النفس التحليلي',
      title: 'كارل غوستاف يونغ وبنية النفس الإنسانية',
      p1: 'رأى الطبيب النفسي السويسري كارل غوستاف يونغ (1875–1961) النفس الإنسانية لا كمجرد مخزن للصدمات المكبوتة، بل كمنظومة رمزية حية تبحث عن المعنى والتوازن والاكتمال. ومن هنا قدم مفاهيم اللاوعي الجمعي، والنماذج الأصلية، والظل، والتزامن، والتفرد.',
      p2: 'بحسب يونغ، يبني النصف الأول من العمر الهوية الاجتماعية (القناع / البيرسونا)، بينما يدعونا النصف الثاني إلى النظر خلف الأقنعة والاتحاد مع الذات الحقيقية. فالأحلام والأنماط المتكررة رسائل صادقة من اللاوعي.',
      facts: [
        ['علم النفس التحليلي', 'نشأ من الملاحظة السريرية في زيورخ والدراسة المقارنة للأساطير العالمية.'],
        ['الكتاب الأحمر (Liber Novus)', 'مذكرة يونغ الخاصة لمدة 16 عاماً من الحوار الرمزي عبر التخيل النشط.'],
        ['التفرّد (Individuation)', 'أن يصبح الإنسان متكاملاً لا مثالياً؛ عبر احتضان النور والظل بوعي.']
      ]
    },
    compare: {
      eyebrow: 'الأعمدة الثلاثة لعلم نفس الأعماق',
      title: '<span class="jung-trio-title"><span class="jung-trio-name">Carl Jung</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Sigmund Freud</span><span class="jung-trio-sep" aria-hidden="true">·</span><span class="jung-trio-name">Alfred Adler</span></span>',
      sub: 'ثلاث مدارس تأسيسية تنظر إلى اللاوعي البشري والأحلام ومسار التحول الداخلي.',
      items: [
        {
          name: '<span class="mb-nowrap">Carl Gustav Jung</span>',
          school: 'علم النفس التحليلي',
          drive: 'البحث عن المعنى والاكتمال ومسار التفرّد (الذات).',
          unconscious: 'اللاوعي الشخصي مضافاً إليه اللاوعي الجمعي الكوني والنماذج الأصلية.',
          dreams: 'تعويضات رمزية توجّه الوعي نحو التوازن النفسي والنمو المستقبلي.',
          quote: '«ما لم تجعل اللاوعي واعياً، فسيظل يوجّه حياتك وستسمّيه قدراً.»'
        },
        {
          name: '<span class="mb-nowrap">Sigmund Freud</span>',
          school: 'التحليل النفسي',
          drive: 'الدوافع اللاواعية، ومبدأ اللذة، وصراعات الطفولة المبكرة.',
          unconscious: 'مستودع شخصي للذكريات المكبوتة والرغبات وآليات الدفاع النفسية.',
          dreams: 'تحقيق مقنّع للرغبات المكبوتة («الطريق الملكي إلى اللاوعي»).',
          quote: '«المشاعر غير المعبَّر عنها لا تموت أبداً؛ بل تُدفن حيّة وتعود بصور أعقد.»'
        },
        {
          name: '<span class="mb-nowrap">Alfred Adler</span>',
          school: 'علم النفس الفردي',
          drive: 'الانتماء والهدف وتحويل مشاعر النقص إلى إسهام بناء.',
          unconscious: 'يتشكل عبر الأهداف المستقبلية وأسلوب الحياة والاهتمام الاجتماعي.',
          dreams: 'بروفات ذهنية تهيّئ الفرد لمواجهة تحديات الحياة الراهنة.',
          quote: '«لا نعاني من صدمة تجاربنا، بل نصنع منها ما ينسجم مع المعنى الذي نختاره.»'
        }
      ]
    },
    mirrorEyebrow: 'مرآة النماذج الأصلية والظل التفاعلية',
    mirrorTitle: 'أي نموذج أصلي يناديك اليوم؟',
    mirrorSub: 'اختر نموذجاً أصلياً لاستكشاف عطيته المضيئة وقطب ظله وسؤال التخيل النشط الخاص به اليوم.',
    labels: {
      gift: 'العطية المضيئة',
      shadow: 'قطب الظل',
      prompt: 'سؤال الظل والتخيل النشط'
    },
    archetypes: [
      {
        id: 'shadow',
        name: 'الظل (The Shadow)',
        motto: '«لا يستنير المرء بتخيل صور النور، بل بجعل الظلام واعياً.»',
        gift: 'حيوية غير معاشة، أصالة، حدود صحية، وصدق عميق مع الذات.',
        shadow: 'إسقاط الصفات المرفوضة على الآخرين في صورة غضب مفاجئ أو حكم قاسٍ.',
        prompt: 'أي سلوك لدى شخص آخر أزعجك بشدة مؤخراً؟ وما الحاجة الخفية داخلك التي يعكسها؟'
      },
      {
        id: 'sage',
        name: 'الحكيم (The Sage)',
        motto: '«يصل الصفاء عندما يهدأ ضجيج الفكر بما يكفي لسماع الحقيقة.»',
        gift: 'تمييز صافٍ، إدراك للأنماط، رؤية هادئة، وحكمة تأملية.',
        shadow: 'تغليب التحليل المفرط على الشعور والاختباء من الحسم خلف جمع مزيد من المعلومات.',
        prompt: 'ما القرار الذي تعرف إجابته داخلك بالفعل ولكنك تؤجله بحجة انتظار مزيد من المعطيات؟'
      },
      {
        id: 'anima',
        name: 'الأنيما / الأنيموس',
        motto: '«الاتحاد الداخلي يصل العقل الواعي بأعماق الروح.»',
        gift: 'توازن متناغم بين الرهافة العاطفية والصلابة الداخلية الهادئة.',
        shadow: 'انتظار أن يُكمل شريك خارجي جزءاً لم تعشه بعد داخل نفسك.',
        prompt: 'كيف يمكنك أن تمنح نفسك اليوم نفس الثبات أو التفهم الذي تنتظره من شخص آخر؟'
      },
      {
        id: 'magician',
        name: 'الساحر / المحوِّل (The Magician)',
        motto: '«حين تُرى بوعي، تصبح الأزمة بوتقة يتنحى فيها الشكل القديم لصالح التجدد.»',
        gift: 'خيمياء داخلية، رؤية رمزية، وتحويل الاحتكاك إلى نضج واعٍ.',
        shadow: 'التشبث بالسيطرة القهرية أو الخوف من التسليم للمجهول أثناء التغيير.',
        prompt: 'ما التحول الذي تقاومه الآن وقد يوسّع وعيك متى ما قبلت عبوره؟'
      },
      {
        id: 'explorer',
        name: 'المستكشف (The Explorer)',
        motto: '«السير في طريق شخص آخر يستنزف الروح أسرع من تسلق أي جبل.»',
        gift: 'استقلالية، فضول أصيل، وشجاعة تتجاوز القوالب المألوفة.',
        shadow: 'هروب مضطرب من الالتزام أو العمق كلما صار الصمت غير مريح.',
        prompt: 'هل يناديك أفق جديد بحق، أم أنك تتجنب مواجهة حقيقة هادئة في مكانك الحالي؟'
      },
      {
        id: 'creator',
        name: 'المبدع (The Creator)',
        motto: '«الخيال هو حديث النفس قبل أن تلحق به الكلمات.»',
        gift: 'تعبير أصيل، حدس جمالي، وإخراج الرؤية الداخلية إلى الشكل.',
        shadow: 'مثالية مفرطة تشلّ الإبداع قبل رسم الخط الأول.',
        prompt: 'ما العمل الصادق الصغير الذي يمكنك إنجازه اليوم دون اشتراط الكمال؟'
      },
      {
        id: 'ruler',
        name: 'الحاكم / القيّم (The Ruler)',
        motto: '«تبدأ السيادة الحقيقية بترتيب مملكتك الداخلية أولاً.»',
        gift: 'مسؤولية هادئة، رعاية، حدود واضحة، ورؤية متماسكة.',
        shadow: 'جمود، خوف من إظهار الهشاشة، وحمل كل الأعباء وحدك.',
        prompt: 'في أي مجال يمكنك تخفيف قبضتك قليلاً والثقة باستمرار التوازن؟'
      },
      {
        id: 'self',
        name: 'الذات الكلية (The Self)',
        motto: '«التفرد هو العودة الهادئة للأجزاء المتناثرة نحو مركز واحد.»',
        gift: 'تكامل متزن، سلام داخلي، وقدرة على احتضان التناقضات دون انقسام.',
        shadow: 'الخلط بين الأدوار الاجتماعية (القناع) وبين حقيقتك الجوهرية.',
        prompt: 'لو وضعت جانباً كل الألقاب والتوقعات لدقيقة واحدة، ما الحقيقة الصامتة التي تبقى؟'
      }
    ],
    psyche: {
      eyebrow: 'بنية النفس الإنسانية · أربع طبقات',
      title: 'من القناع الاجتماعي إلى الأعماق الجمعية',
      sub: 'رسم يونغ خريطة النفس عبر أربع طبقات متفاعلة.',
      layers: [
        ['القناع الاجتماعي (Persona)', 'الدور التكيفي الذي نعرضه للمجتمع. صحي حين يكون مرناً، ومرهق حين نظنه هويتنا الكاملة.'],
        ['الأنا (مركز الوعي)', 'شعورنا اليقظ بالـ «أنا». ضروري للتوجيه اليومي، لكنه مجرد جزيرة صغيرة فوق محيط نفسي شاسع.'],
        ['اللاوعي الشخصي والظل الذهبي', 'يحوي المخاوف المكبوتة جنباً إلى جنب مع الإبداع والشجاعة غير المعاشين (الظل الذهبي الذي نعجب به في الآخرين).'],
        ['اللاوعي الجمعي والذات', 'أنماط رمزية كونية تشترك فيها البشرية وتتوجه نحو الاكتمال والتفرد.']
      ]
    },
    protocol: {
      eyebrow: 'بروتوكول تأمل عملي',
      title: 'أربع خطوات للعمل مع الظل والتخيل النشط',
      sub: 'تسلسل هادئ لمدة 10 دقائق يمكنك تطبيقه بعيداً عن أي تعصب فكري.',
      steps: [
        ['التقط المحفز (مرآة الإسقاط)', 'لاحظ الانزعاج المفاجئ وغير المتناسب تجاه شخص آخر؛ هذه الشحنة العاطفية تحدد حافة الظل.'],
        ['سمِّ الإحساس الجسدي', 'توقف قبل التبرير العقلي. راقب الشد في الصدر أو الفك أو التنفس لثلاث دورات نفس هادئة.'],
        ['حاور عبر التخيل النشط', 'في السكون (يمكن مع 432 هرتز في ملاذ ميثبورن)، اسأل الشعور: «ممَّ تحاول حمايتي؟»'],
        ['ادمج الخطوة بسلوك ملموس', 'كرِّم الحاجة الصحية الكامنة — مثل وضع حد واضح أو أخذ راحة — بفعل بسيط اليوم.']
      ]
    },
    sync: {
      eyebrow: 'مذكرة التزامن · محلية وخاصة 100%',
      title: 'سجّل المصادفات ذات المعنى.',
      sub: 'دوّن تقاطعات حالتك الداخلية مع الأحداث الخارجية. تبقى ملاحظاتك في متصفحك فقط ولا تُرسل إلى أي خادم.',
      selectLabel: 'النموذج الأصلي / الموضوع المرتبط',
      noteLabel: 'رمز أو حلم أو تزامن لاحظته اليوم',
      notePlaceholder: 'مثال: بينما كنت أفكر في مرحلة انتقالية، ظهرت العبارة نفسها بصورة غير متوقعة مرتين اليوم...',
      saveBtn: 'حفظ في السجل المحلي',
      clearBtn: 'مسح الكل',
      empty: 'لا توجد تدوينات تزامن بعد. سجّل ملاحظتك الأولى أعلاه.'
    },
    faqTitle: 'أسئلة شائعة حول علم نفس الأعماق',
    books: {
      eyebrow: 'مكتبة القراءة المختارة · 9 أعمال أساسية',
      title: 'أمهات الكتب لمن يريد التعمق.',
      sub: 'دليل قراءة أصيل ومختصر لأبرز مؤلفات كارل يونغ وسيغموند فرويد وألفريد أدلر.',
      authors: [
        {
          author: 'Carl Gustav Jung',
          school: 'علم النفس التحليلي',
          items: [
            ['الإنسان ورموزه', 'المدخل الأكثر سلاسة ليونغ إلى لغة الأحلام والنماذج الأصلية واللاوعي الجمعي.'],
            ['النماذج الأصلية واللاوعي الجمعي', 'دراسة مركزة لأنماط الأم والانبعاث والروح والمحتال في النفس والثقافة.'],
            ['ذكريات وأحلام وتأملات', 'السيرة الداخلية المضيئة ليونغ التي يروي فيها رؤاه وأحلامه ومسار التفرد.']
          ]
        },
        {
          author: 'Sigmund Freud',
          school: 'التحليل النفسي',
          items: [
            ['تفسير الأحلام', 'العمل التأسيسي الذي جعل الحلم البوابة الملكية لفهم ديناميكيات اللاوعي.'],
            ['علم النفس المرضي للحياة اليومية', 'يبحث زلات اللسان والنسيان والأخطاء العابرة بأمثلة يومية واضحة.'],
            ['قلق في الحضارة', 'يناقش التوتر الدائم بين الدوافع الفردية ومتطلبات النظام الاجتماعي الجمعي.']
          ]
        },
        {
          author: 'Alfred Adler',
          school: 'علم النفس الفردي',
          items: [
            ['فهم الطبيعة البشرية', 'يشرح السلوك الموجّه بالهدف والاهتمام الاجتماعي وكيفية تشكل الشخصية داخل المجتمع.'],
            ['ما الذي يمكن أن تعنيه الحياة لك', 'يركز على الحرية الداخلية وكيف يشكّل المعنى الذي نمنحه للتجارب شجاعتنا.'],
            ['علم الحياة', 'دليل عملي لتحويل مشاعر النقص إلى نمو بنّاء وإسهام مجتمعي.']
          ]
        }
      ]
    },
    ctaSanctuary: 'انتقل إلى استوديو التأمل والترددات ←',
    ctaGuide: 'اقرأ دليل كارل يونغ الكامل ←',
    ethics: 'تقدم هذه الصفحة مفاهيم علم نفس الأعماق لكارل غوستاف يونغ للتأمل الذاتي والتعليم، ولا تُغني عن العلاج النفسي السريري أو الاستشارة الطبية.',
    dlLabels: { drive: 'الدافع المحرك الأساسي', unconscious: 'اللاوعي', dreams: 'دور الأحلام' },
    quoteInterlude: '«من ينظر إلى الخارج يحلم؛ ومن ينظر إلى الداخل يستيقظ.»',
    faqEyebrow: 'الأسئلة الشائعة'
  }
};

const getJungCopy = (locale) => JUNG_COPY[locale === 'gr' ? 'el' : locale] || JUNG_COPY.en;

// Shared curated reading library (Jung, Freud, Adler — 9 essential works), reusable on every inner page.
export const renderReadingCuration = (locale = 'tr', { compact = true, id = 'okuma-listesi' } = {}) => {
  const c = getJungCopy(locale);
  if (!c.books) return '';
  return `
    <section class="sanc-section jung-reading-curation" id="${id}">
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
                <h3><span class="mb-nowrap">${group.author}</span></h3>
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
    </section>`;
};

const JUNG_FAQS = {
  tr: [
    { question: 'Carl Jung’a göre Gölge (Shadow) çalışması nedir?', answer: 'Gölge çalışması, bilinçli kimliğimizin (Persona) dışında bıraktığımız bastırılmış duygu, ihtiyaç ve potansiyelleri yargılamadan fark edip bütünleştirme sürecidir.' },
    { question: '“Altın Gölge” (Golden Shadow) ne anlama gelir?', answer: 'Gölge yalnızca karanlık veya öfkeli yanlarımızı değil; cesaret, yaratıcılık veya liderlik gibi küçükken bastırdığımız parlak potansiyelleri de barındırır. Başkalarına duyduğumuz yoğun hayranlık çoğu zaman kendi Altın Gölge’mizin yansımasıdır.' },
    { question: 'Eşzamanlılık (Synchronicity) sıradan tesadüften nasıl ayrılır?', answer: 'Eşzamanlılıkta aralarında nedensel bir bağ olmayan içsel bir ruh hali ile dışsal bir olay, kişi için derin bir anlam ve içgörü taşıyacak biçimde örtüşür.' },
    { question: 'Aktif İmgelem (Active Imagination) nasıl yapılır?', answer: 'Zihni sakinleştirdikten sonra rüyadan veya güçlü bir duygudan gelen sembolü yargılamadan gözlemleyip ona sorular sorarak uyanık bilinçte diyalog kurma ve yazıya dökme pratiğidir.' },
    { question: 'Eşzamanlılık günlüğü verilerim sunucuya kaydediliyor mu?', answer: 'Hayır. Günlük notlarınız yalnızca kendi tarayıcınızın yerel belleğinde (localStorage) tutulur; hiçbir sunucuya gönderilmez.' }
  ],
  en: [
    { question: 'What is Shadow work in Carl Jung’s psychology?', answer: 'Shadow work is the reflective practice of recognizing disowned traits, emotions and potentials outside our social Persona so they can be integrated consciously.' },
    { question: 'What is the Golden Shadow?', answer: 'The Shadow does not only hold difficult emotions; it also carries unlived strengths, creativity and courage that we often project onto people we intensely admire.' },
    { question: 'How is Synchronicity different from ordinary coincidence?', answer: 'In Synchronicity, an inner psychological state and an outer event coincide meaningfully without a causal link, offering deep personal insight.' },
    { question: 'How do you practice Active Imagination?', answer: 'After calming the mind, you observe a symbol from a dream or strong emotion without judgment and hold an honest waking dialogue with it.' },
    { question: 'Are Synchronicity Journal notes sent to a server?', answer: 'No. Your notes remain strictly in your browser’s localStorage on your own device and are never transmitted.' }
  ],
  el: [
    { question: 'Τι είναι η εργασία με τη Σκιά (Shadow) κατά τον Carl Jung;', answer: 'Είναι η ενδοσκοπική διαδικασία αναγνώρισης και ενσωμάτωσης καταπιεσμένων συναισθημάτων, αναγκών και δυνατοτήτων που βρίσκονται έξω από την κοινωνική μας Persona.' },
    { question: 'Τι σημαίνει «Χρυσή Σκιά» (Golden Shadow);', answer: 'Η Σκιά δεν κρύβει μόνο δύσκολα συναισθήματα, αλλά και ανεκδήλωτη δημιουργικότητα, θάρρος και χαρίσματα που συχνά θαυμάζουμε έντονα στους άλλους.' },
    { question: 'Πώς ξεχωρίζει η Συγχρονικότητα από μια απλή σύμπτωση;', answer: 'Στη Συγχρονικότητα, μια εσωτερική ψυχική κατάσταση και ένα εξωτερικό γεγονός συναντώνται με βαθύ νόημα χωρίς αιτιώδη σύνδεση.' },
    { question: 'Αποστέλλονται οι σημειώσεις του ημερολογίου σε διακομιστή;', answer: 'Όχι. Οι σημειώσεις μένουν αποκλειστικά στη μνήμη του περιηγητή της συσκευής σας (localStorage) και δεν μεταδίδονται ποτέ.' }
  ],
  es: [
    { question: '¿Qué es el trabajo con la Sombra según Carl Jung?', answer: 'Es la práctica reflexiva de reconocer sin juicios las emociones, necesidades y capacidades reprimidas fuera de nuestra máscara social (Persona) para integrarlas conscientemente.' },
    { question: '¿Qué significa la «Sombra Dorada»?', answer: 'La Sombra no guarda solo emociones difíciles; también alberga fortaleza, creatividad y coraje no vividos que a menudo proyectamos en personas que admiramos intensamente.' },
    { question: '¿En qué se diferencia la Sincronicidad de una coincidencia común?', answer: 'En la Sincronicidad, un estado psicológico interno y un suceso externo coinciden de modo profundamente significativo sin un vínculo causal físico.' },
    { question: '¿Las notas del Diario de Sincronicidad se envían a un servidor?', answer: 'No. Tus notas permanecen únicamente en el almacenamiento local de tu navegador (localStorage) y jamás se envían a ningún servidor.' }
  ],
  ar: [
    { question: 'ما هو العمل مع الظل (Shadow) في علم نفس كارل يونغ؟', answer: 'هو مسار تأمل واعٍ لاكتشاف المشاعر والاحتياجات والطاقات الكامنة خارج القناع الاجتماعي (البيرسونا) واحتضانها دون أحكام قاسية.' },
    { question: 'ما المقصود بالظل الذهبي (Golden Shadow)؟', answer: 'لا يحمل الظل المشاعر الصعبة فحسب، بل يضم أيضاً الإبداع والشجاعة والقيادة التي كبتناها، وغالباً ما نُسقطها على أشخاص نعجب بهم بشدة.' },
    { question: 'كيف يختلف التزامن (Synchronicity) عن الصدفة العادية؟', answer: 'في التزامن تتقاطع حالة نفسية داخلية مع حدث خارجي بلا رابط سببي مادي لكنها تحمل معنى وبصيرة عميقة للشخص.' },
    { question: 'هل تُرسل ملاحظات مذكرة التزامن إلى أي خادم؟', answer: 'لا. تبقى تدويناتك حصرياً في الذاكرة المحلية لمتصفحك (localStorage) على جهازك ولا تُرسل إلى أي خادم.' }
  ]
};

export const getJungFaqItems = (locale = 'tr') => {
  const loc = locale === 'gr' ? 'el' : locale;
  return JUNG_FAQS[loc] || JUNG_FAQS.en;
};

const JUNG_GUIDE_HREFS = {
  tr: '/rehber/carl-jung-golge-ve-arketip',
  en: '/en/guides/carl-jung-golge-ve-arketip',
  el: '/gr/odigoi/carl-jung-golge-ve-arketip',
  es: '/es/guias/carl-jung-golge-ve-arketip',
  ar: '/ar/al-dalil/carl-jung-golge-ve-arketip'
};

export const renderJungView = ({ locale = 'tr', sanctuaryHref = '/meditasyon-ve-frekans' } = {}) => {
  const loc = locale === 'gr' ? 'el' : locale;
  const c = getJungCopy(loc);
  const first = c.archetypes[0];
  const faqs = getJungFaqItems(loc);
  const guideHref = JUNG_GUIDE_HREFS[loc] || JUNG_GUIDE_HREFS.en;

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
                  <dt>${c.dlLabels.drive}</dt>
                  <dd>${item.drive}</dd>
                  <dt>${c.dlLabels.unconscious}</dt>
                  <dd>${item.unconscious}</dd>
                  <dt>${c.dlLabels.dreams}</dt>
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
          <p>${c.quoteInterlude}</p>
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
    ${renderReadingCuration(loc, { id: 'okuma-listesi' })}

    <!-- 8. Visible Depth Psychology FAQ + Sanctuary Bridge -->
    <section class="sanc-section" id="jung-sss">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${c.faqEyebrow}</span>
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
