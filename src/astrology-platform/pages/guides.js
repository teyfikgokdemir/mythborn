// Mythborn 2027 — Consciousness, Carl Jung, Meditation & Sound Resonance Educational Library
// Hub (/rehber) + 4 Deep Long-Form Educational Guides
import { renderReadingCuration } from './jung.js';

const GUIDES_TR = [
  {
    slug: 'rezonans-kanunu-nedir',
    tag: 'REZONANS & BİLİNÇLİ UYUM',
    readTime: '5 dk okuma',
    title: 'Rezonans Kanunu Nedir? Kalp, Zihin ve Bilinçli Uyumun Özeti',
    lead: 'Fizikte titreşimsel uyum olarak başlayan rezonans kavramı, kişisel farkındalıkta içsel inançların dışsal seçimlerle nasıl örtüştüğünü anlatan güçlü bir aynadır.',
    ctaHref: '/meditasyon-ve-frekans#ses-mikseri',
    ctaLabel: '432 Hz & Doğa Rezonansı Stüdyosunu Aç →',
    sections: [
      {
        h: 'Rezonans Kanunu Özeti',
        p: 'Fizikte rezonans, aynı veya uyumlu frekanstaki iki sistemin birbirini etkilemesi ve güçlendirmesidir (örneğin bir diyapazon titreştiğinde yakındaki aynı frekanslı diğer diyapazonun da ses vermesi). Pierre Franckh’ın popülerleştirdiği “Rezonans Kanunu” yaklaşımı ise bu metaforu insan psikolojisine taşır: Dünyayı olduğu gibi değil, içsel inanç kalıplarımızın ve duygusal odaklarımızın filtresinden görür ve o filtreye uygun seçimler yaparız.'
      },
      {
        h: 'Rezonans ve Carl Jung’un Gölge Kavramı',
        p: 'Sadece yüzeyde olumlu cümleler tekrarlamak (Persona) tek başına yeterli olmaz; çünkü bilinç dışındaki bastırılmış korku, yetersizlik veya savunma kalıpları (Gölge) kararlarımızı sessizce yönlendirir. Gerçek içsel uyum, zihnin istediği ile kalbin inandığının çelişmediği noktada başlar.'
      },
      {
        h: 'Günlük Hayatta Bilinçli Uyum İçin 4 Adım',
        bullets: [
          'İçsel Gürültüyü Azalt: Günde 5–10 dakika nefes veya 432 Hz / doğa sesleriyle sinir sistemini sakinleştir; gergin zihin berrak seçim yapamaz.',
          'Tekrarlayan İnançları Fark Et: “Hep benim başıma geliyor” dediğin kalıpları yazıya dök ve bunun hangi eski inançtan beslendiğini gözlemle.',
          'Niyetini Netleştir: İstemediğin şeye odaklanmak yerine, inşa etmek istediğin dinginlik veya yönü şimdiki zamanda sade bir cümleyle tanımla.',
          'Niyeti Somut Eylemle Birleştir: Rezonans pasif bekleyiş değildir; berrak bir içsel tutumu her gün küçük, tutarlı ve gerçekçi adımlarla desteklemekle çalışır.'
        ]
      },
      {
        h: 'Etik Sınır: Sihirli Düşünce Değil, Öz-Farkındalık',
        p: 'Rezonans yaklaşımı; yaşanan zorluklar veya hastalıklar için kişinin kendini suçlaması (“bunu ben çektim”) anlamına gelmez. Bilimsel ve etik açıdan sağlıklı bakış; kontrol edemediğimiz dış koşulları kabul edip kontrol edebildiğimiz tek alana — kendi dikkatimize, sınırlarımıza ve eylemlerimize — sahip çıkmaktır.'
      }
    ],
    faqs: [
      { question: 'Rezonans Kanunu bilimsel bir fizik yasası mıdır?', answer: 'Akustik ve elektromanyetik rezonans kanıtlanmış fizik olgularıdır. Kişisel gelişimdeki “Rezonans Kanunu” ise bu fiziksel kavramın dikkat, inanç kalıpları ve seçici algı üzerine kurulmuş sembolik bir yorumudur.' },
      { question: 'Sadece olumlu düşünmek rezonans için yeterli midir?', answer: 'Hayır. Bilinç dışındaki korkuları görmezden gelmeden dürüst öz-gözlem yapmak ve niyeti somut eylemle desteklemek gerekir.' }
    ]
  },
  {
    slug: 'spirituel-yasam-nedir',
    tag: 'BİLİNÇLİ FARKINDALIK REHBERİ',
    readTime: '6 dk okuma',
    title: 'Spiritüel Yaşam ve Bilinçli Farkındalık Nedir?',
    lead: 'Spiritüel yaşam; dogmalardan veya mucize vaatlerinden bağımsız olarak insanın kendi iç sesini duyması, anda kalması ve yaşamla anlamlı bir bağ kurmasıdır.',
    ctaHref: '/meditasyon-ve-frekans',
    ctaLabel: 'Canlı Meditasyon Sığınağını Dene →',
    sections: [
      {
        h: 'Spiritüel Yaşam Ne Anlama Gelir?',
        p: 'Spiritüel yaşam, günlük hayatın gürültüsü ve otomatik tepkileri arasında durup “Şu an ne hissediyorum, neye tepki veriyorum ve neye değer veriyorum?” sorusunu sorabilme kapasitesidir. Belirli bir inanç sistemine bağlı olmak zorunda değildir; özü, insanın zihin, beden ve anlam dünyası arasında sakin bir bütünlük kurmasıdır.'
      },
      {
        h: 'Spiritüel Yaşamın Beş Temel İlkesi',
        bullets: [
          'Şimdi ve Burada Kalmak (Farkındalık): Geçmiş pişmanlıklar ile gelecek kaygıları arasındaki zihinsel sarkaçtan çıkıp nefesin ve anın gerçekliğine dönmek.',
          'Kendini Tanıma ve Dürüst Öz-Gözlem: Yalnızca hoşumuza giden yanlarımızı değil, Carl Jung’un “Gölge” dediği bastırılmış duyguları da yargılamadan görebilmek.',
          'Doğa ve Ritimle Bağ: Mevsim döngüleri, gece-gündüz ritmi, yağmur ve okyanus gibi doğal seslerle sinir sistemini yeniden dengelemek.',
          'Şefkat ve Sınır Dengesi: Hem kendine hem başkalarına nazik olurken sağlıklı kişisel sınırları koruyabilmek.',
          'Sürekli Öğrenme ve Tefekkür: Okuma, günlük tutma (journaling) ve sessiz gözlemle içsel berraklığı her gün beslemek.'
        ]
      },
      {
        h: 'Günlük 15 Dakikalık Başlangıç Protokolü',
        bullets: [
          'İlk 3 Dakika — Nefes Koheransı: Sabah veya akşam 4-4-4-4 Kutu Nefesi ile sinir sistemini sakinleştir.',
          'Orta 7 Dakika — Mum (Trataka) veya Sessiz Oturma: Gözlerini tek bir ışık noktasına ya da nefesine bırak; gelen düşünceleri itmeden izle.',
          'Son 5 Dakika — Eşzamanlılık ve Farkındalık Günlüğü: Gün içinde seni en çok etkileyen tek duyguyu, rüyayı veya anlamlı tesadüfü üç cümleyle yaz.'
        ]
      },
      {
        h: 'Yanlış Bilinenler ve Etik Sınırlar',
        p: 'Bilinçli spiritüel yaşam; gerçeklikten kopmak, zor duyguları bastırıp “sürekli pozitif kalmaya” çalışmak veya tıbbi/psikolojik desteği reddetmek değildir. Gerçek farkındalık ayakları yere sağlam basan, bilimsel gerçekliğe saygılı ve insanın özgür iradesini merkeze alan sakin bir olgunluktur.'
      }
    ],
    faqs: [
      { question: 'Spiritüel yaşama başlamak için günde ne kadar süre gerekir?', answer: 'Başlangıç için günde 10–15 dakikalık düzenli nefes, sessiz odaklanma ve kısa günlük tutma rutini yeterlidir; önemli olan süre uzunluğu değil sürekliliktir.' },
      { question: 'Spiritüel yaşam belirli bir dine bağlı mıdır?', answer: 'Hayır. Farkındalık, nefes, öz-gözlem ve anlam arayışı her kültürde ve inançtan bağımsız olarak uygulanabilir.' }
    ]
  },
  {
    slug: 'carl-jung-golge-ve-arketip',
    tag: 'DERİNLİK PSİKOLOJİSİ',
    readTime: '7 dk okuma',
    title: 'Carl Jung: Gölge Çalışması, Arketipler ve Bireyleşme Rehberi',
    lead: 'Carl Gustav Jung’un derinlik psikolojisi; sembolleri, rüyaları ve içsel çatışmaları kehanet olarak değil, ruhsal bütünleşmenin haritası olarak okur.',
    ctaHref: '/jung',
    ctaLabel: 'Carl Jung Arketip & Gölge Aynasını Aç →',
    sections: [
      {
        h: 'Persona ve Gölge (Shadow) Nedir?',
        p: 'Persona, toplumsal hayatta uyum sağlamak için taktığımız sosyal maskedir. Gölge ise çocukluktan itibaren “kabul görmez” diyerek bilinç dışına ittiğimiz canlılık, öfke, kırılganlık veya yaratıcı güçtür. Jung’a göre gölgeyle yüzleşmeyen kişi, kendi bastırılmış parçalarını sürekli başkalarında yargılar (yansıtma / projeksiyon).'
      },
      {
        h: 'Gölge Çalışmasına Nasıl Başlanır?',
        bullets: [
          'Tetikleyicileri Fark Et: Başka birinde seni orantısız biçimde öfkelendiren veya kıskandıran davranışları not al.',
          'Yargılamadan Sor: “Bu davranış benim kendime yasakladığım hangi ihtiyacı ya da gücü hatırlatıyor?” sorusunu yaz.',
          'Aktif İmgelem (Active Imagination): Zihninde beliren rüya sembolü veya duyguyla sessiz bir odada (örneğin Mythborn Sığınak’ta) diyalog kur.',
          'Küçük Somut Adım: Bastırdığın sağlıklı bir ihtiyacı (örneğin “hayır” demek veya dinlenmek) o gün küçük bir eylemle onurlandır.'
        ]
      },
      {
        h: 'Kolektif Bilinç Dışı, Arketipler ve Eşzamanlılık',
        p: 'Jung, tüm insanlığın ortak mitlerinde ve rüyalarında tekrar eden evrensel kalıplara “Arketip” adını verir (Bilge, Gölge, Anima/Animus, Kaşif, Yaratıcı, Öz). Eşzamanlılık (Synchronicity) ise aralarında fiziksel neden-sonuç bağı olmasa da içsel bir ruh haliyle dışsal bir olayın anlamlı biçimde kesişmesidir.'
      },
      {
        h: 'Bireyleşme (Individuation) Yolculuğu',
        p: 'Bireyleşme, kusursuz olmak değil “bütün” olmaktır. Başkalarının beklentilerinden sıyrılıp hem aydınlık hem gölge yanlarını bilinçli bir merkezde (Self / Öz) toplayabilme sürecidir.'
      }
    ],
    faqs: [
      { question: 'Gölge çalışması terapi yerine geçer mi?', answer: 'Hayır. Gölge ve arketip çalışması güçlü bir öz-farkındalık aracıdır ancak klinik psikoterapi veya tıbbi destek yerine geçmez.' },
      { question: 'Eşzamanlılık (Synchronicity) ne demektir?', answer: 'Jung’un tanımladığı biçimiyle içsel bir psikolojik durumun dış dünyadaki bir olayla anlamlı fakat nedensel olmayan biçimde örtüşmesidir.' }
    ]
  },
  {
    slug: 'meditasyon-ve-nefes-rehberi',
    tag: 'PRATİK MEDİTASYON',
    readTime: '6 dk okuma',
    title: 'Meditasyon Türleri: Mum (Trataka), İç Benlik Nefesi, Theta ve 108 Mantra',
    lead: 'Zihni zorla susturmaya çalışmadan dinginliğe ulaşmak için dört kadim pratiğin adım adım uygulanış rehberi.',
    ctaHref: '/meditasyon-ve-frekans',
    ctaLabel: 'Dört Meditasyon Odasını Şimdi Deneyimle →',
    sections: [
      {
        h: '1. Mum Meditasyonu (Trataka)',
        p: 'Trataka, gözleri tek bir sabit ışık noktasına (mum alevine) yumuşakça odaklayarak görsel ve zihinsel dağınıklığı azaltma pratiğidir. Düşünceleri kovmak yerine dikkati nazikçe alevin parlak çekirdeğine geri getirmek yeterlidir.'
      },
      {
        h: '2. İç Benlik ve Nefes Koheransı',
        bullets: [
          '4-4-4-4 Kutu Nefesi: 4 sn al, 4 sn tut, 4 sn ver, 4 sn bekle. Zihinsel berraklık ve denge için idealdir.',
          '4-7-8 Sakinleştirici Nefes: Nefes verişi uzatarak parasempatik sinir sistemini (dinlen-sindir modu) aktive eder.',
          '5-5 Kalp Koheransı: Eşit ve yumuşak akışla kalp-nefes ritmini uyumlu hale getirir.'
        ]
      },
      {
        h: '3. Theta Eşiği ve Derin Gevşeme',
        p: 'Uyku ile uyanıklık arasındaki sakin eşik (Theta) durumunda beden tamamen gevşerken farkındalık uyanık kalır. Aşamalı beden taraması ve kulaklıkla dinlenen 6 Hz binaural ritim bu sakin gözlem alanını destekler.'
      },
      {
        h: '4. 108 Mantra ve Niyet Tekrarı',
        p: '108 boncuklu mala veya dijital tespih ritmi, zihne dokunsal bir çapa sunar. Kısa, olumlu ve şimdiki zamanda kurulan tek bir niyet cümlesini her çan tınısında tekrarlamak dikkati sakinleştirir.'
      }
    ],
    faqs: [
      { question: 'Meditasyon yaparken aklıma sürekli düşünceler geliyor, yanlış mı yapıyorum?', answer: 'Hayır. Meditasyonun amacı düşünceyi sıfırlamak değil, düşüncenin geldiğini fark edip yargılamadan nefese veya muma geri dönmektir.' }
    ]
  },
  {
    slug: 'frekans-rezonans-ve-beyin-dalgalari',
    tag: 'SES & REZONANS FİZİĞİ',
    readTime: '6 dk okuma',
    title: 'Frekans, Rezonans ve Beyin Dalgaları (Alpha, Theta, Delta, Solfeggio)',
    lead: 'Hertz nedir, binaural vuruşlar kulaklıkta nasıl oluşur, 432 Hz ile 440 Hz arasındaki fark nedir ve güvenli dinleme sınırları nelerdir?',
    ctaHref: '/meditasyon-ve-frekans#ses-mikseri',
    ctaLabel: 'Kymatik & Stereo Yankılı Ses Stüdyosunu Aç →',
    sections: [
      {
        h: 'Hertz (Hz) ve Rezonans Fiziği',
        p: 'Hertz, bir ses dalgasının saniyede kaç kez titreştiğini ölçen fiziksel birimdir. Düşük Hz değerleri daha pes (kalın), yüksek Hz değerleri daha tiz (ince) duyulur. Sesin perdesi ile ses şiddeti (desibel) birbirinden farklı kavramlardır.'
      },
      {
        h: 'Binaural Beyin Dalgaları Nasıl Çalışır?',
        bullets: [
          'Alpha (8–12 Hz fark, ör. 10 Hz): Sakin uyanıklık, rahat odaklanma ve yaratıcı akış ritmiyle ilişkilendirilir.',
          'Theta (4–7 Hz fark, ör. 6 Hz): Derin meditasyon, rüya eşiği ve aktif imgelem sırasında öne çıkan yavaş dalga bandıdır.',
          'Delta (1–3 Hz fark, ör. 2 Hz): Derin gece dinlenmesi ve zihinsel sükûnet için kullanılan en yavaş ritimdir.',
          'Neden Kulaklık Gerekir?: Sol kulağa 432 Hz, sağ kulağa 438 Hz verildiğinde iki dalga beyinde 6 Hz’lik yumuşak bir ritmik fark olarak algılanır.'
        ]
      },
      {
        h: 'Solfeggio Tonları ve 432 Hz vs 440 Hz',
        p: '174–963 Hz arasındaki Solfeggio dizisi modern farkındalık kültüründe sembolik temalarla (topraklanma, arınma, sezgi) anılır. 432 Hz ise standart 440 Hz’e göre biraz daha sıcak duyulan alternatif bir müzikal akort referansıdır. Mythborn, bilimsel fizik ile kültürel sembolizmi şeffaf biçimde ayırır.'
      },
      {
        h: 'Güvenli ve Zengin Dinleme İlkeleri',
        p: 'Kuru bir sinüs dalgası uzun süre dinlendiğinde kulağı yorabilir. Mythborn Sığınak’taki stereo tapınak yankısı, alt harmonikler ve canlı yağmur/okyanus/rüzgar/ateş katmanları dinlemeyi yumuşatır. Her zaman düşük sesle başlayın; kulak çınlaması veya rahatsızlık olursa seansı durdurun.'
      }
    ],
    faqs: [
      { question: 'Frekans dinlemek tıbbi tedavi yerine geçer mi?', answer: 'Hayır. Frekanslar, doğa sesleri ve meditasyon müziği kişisel dinginlik ve odaklanma alanı sunar; tıbbi tedavi veya klinik terapi değildir.' }
    ]
  }
];

const GUIDES_EN = [
  {
    slug: 'rezonans-kanunu-nedir',
    tag: 'RESONANCE & CONSCIOUS ALIGNMENT',
    readTime: '5 min read',
    title: 'What Is the Law of Resonance? A Clear Summary of Heart, Mind & Alignment',
    lead: 'Rooted in acoustic physics as a metaphor, the Law of Resonance explores how inner beliefs, emotional coherence and daily choices shape what we notice and build.',
    ctaHref: '/en/meditation-and-frequencies#ses-mikseri',
    ctaLabel: 'Open 432 Hz & Nature Resonance Studio →',
    sections: [
      {
        h: 'The Core Idea in Plain Language',
        p: 'In physics, resonance occurs when two systems vibrating at compatible frequencies amplify one another. In modern mindfulness (popularized by Pierre Franckh), resonance serves as a psychological lens: we filter reality through our deepest beliefs and emotional habits, consistently gravitating toward choices that match them.'
      },
      {
        h: 'Four Grounded Steps for Conscious Alignment',
        bullets: [
          'Quiet the Nervous System: Use 5–10 minutes of breathwork or 432 Hz soundscapes to step out of reactive stress.',
          'Examine Hidden Beliefs: Notice repeating emotional patterns and Carl Jung’s Shadow triggers rather than masking them.',
          'Clarify Intention: Articulate what you are building in calm, present language rather than rehearsing what you fear.',
          'Pair Clarity with Action: Alignment is not passive wishing; it matures through consistent, grounded daily choices.'
        ]
      }
    ],
    faqs: [
      { question: 'Is the Law of Resonance a literal medical or physical guarantee?', answer: 'No. Acoustic resonance is real physics, while the personal-growth Law of Resonance is a reflective framework for attention, belief awareness and intentional action.' }
    ]
  },
  {
    slug: 'spirituel-yasam-nedir',
    tag: 'MINDFUL LIVING GUIDE',
    readTime: '6 min read',
    title: 'What Is Mindful & Spiritual Living?',
    lead: 'Independent of dogma or miracle claims, spiritual living is the quiet art of presence, self-honesty and meaningful connection with life.',
    ctaHref: '/en/meditation-and-frequencies',
    ctaLabel: 'Enter the Live Meditation Sanctuary →',
    sections: [
      {
        h: 'Five Core Principles of Mindful Living',
        bullets: [
          'Presence in the Now: Returning from mental loops to breath and sensory clarity.',
          'Honest Self-Observation: Witnessing both strengths and Jungian Shadow emotions without harsh judgment.',
          'Connection with Nature & Rhythm: Grounding the nervous system through natural acoustics and cycles.',
          'Compassion with Healthy Boundaries: Balancing kindness toward others with clear inner sovereignty.',
          'Continuous Contemplation: Nourishing inner clarity through reading, journaling and daily stillness.'
        ]
      },
      {
        h: 'A 15-Minute Daily Practice Protocol',
        bullets: [
          'Minutes 1–3: Box Breathing (4-4-4-4) to settle the nervous system.',
          'Minutes 4–10: Candle Gazing (Trataka) or silent sitting with gentle ambient sound.',
          'Minutes 11–15: Record one dream motif, emotion or synchronicity in your private local journal.'
        ]
      }
    ],
    faqs: [
      { question: 'How much time is needed daily to begin?', answer: 'Just 10–15 minutes of consistent breathwork, stillness and brief journaling is enough to build steady awareness.' }
    ]
  },
  {
    slug: 'carl-jung-golge-ve-arketip',
    tag: 'DEPTH PSYCHOLOGY',
    readTime: '7 min read',
    title: 'Carl Jung: Shadow Work, Archetypes & Individuation',
    lead: 'Reading dreams, symbols and inner tensions not as superstition, but as Carl Gustav Jung’s living map of psychological wholeness.',
    ctaHref: '/en/jung',
    ctaLabel: 'Open the Carl Jung Archetype Mirror →',
    sections: [
      {
        h: 'Persona vs. Shadow',
        p: 'The Persona is the social mask we present to the world; the Shadow holds the unlived vitality, anger or sensitivity pushed out of conscious view. Individuation begins by recognizing rather than projecting our shadow.'
      },
      {
        h: 'How to Practice Shadow Reflection',
        bullets: [
          'Notice strong sudden irritation toward someone else—ask what disowned need inside you it mirrors.',
          'Use Active Imagination in a calm space to dialogue with recurring dream images.',
          'Record meaningful coincidences (Synchronicity) privately to notice recurring symbolic themes.'
        ]
      }
    ],
    faqs: [
      { question: 'Does Shadow work replace psychotherapy?', answer: 'No. It is an educational self-reflection framework and never replaces clinical therapy or medical care.' }
    ]
  },
  {
    slug: 'meditasyon-ve-nefes-rehberi',
    tag: 'MEDITATION PRACTICE',
    readTime: '6 min read',
    title: 'Meditation Guide: Candle (Trataka), Breath, Theta & 108 Mala',
    lead: 'Step-by-step guidance for four timeless practices that calm the mind without forcing silence.',
    ctaHref: '/en/meditation-and-frequencies',
    ctaLabel: 'Experience All Four Sanctuary Rooms →',
    sections: [
      {
        h: 'Four Complementary Doors to Stillness',
        bullets: [
          'Candle Meditation (Trataka): Softly resting gaze on a steady flame gathers scattered visual attention.',
          'Inner-Self Breath Coherence: 4-4-4-4 Box, 4-7-8 Relaxing, or 5-5 Coherence rhythms calm autonomic tension.',
          'Theta Threshold Relaxation: Progressive body release paired with 6 Hz binaural sound supports lucid rest.',
          '108 Mala Intention Counter: Tactile repetition with soft Tibetan bowl chimes anchors wandering thoughts.'
        ]
      }
    ],
    faqs: [
      { question: 'Is it normal for thoughts to keep appearing during meditation?', answer: 'Yes. The practice is simply noticing thoughts without judgment and gently returning to the flame or breath.' }
    ]
  },
  {
    slug: 'frekans-rezonans-ve-beyin-dalgalari',
    tag: 'SOUND & RESONANCE',
    readTime: '6 min read',
    title: 'Frequencies, Resonance & Brainwaves (Alpha, Theta, Delta)',
    lead: 'Understanding Hertz physics, stereo binaural beats, 432 Hz vs 440 Hz tuning and safe-listening guidelines.',
    ctaHref: '/en/meditation-and-frequencies#ses-mikseri',
    ctaLabel: 'Open Cymatics & Stereo Reverb Studio →',
    sections: [
      {
        h: 'How Binaural Beats & Stereo Temple Reverb Work',
        bullets: [
          'Alpha (10 Hz difference): Associated with calm focus and relaxed alertness.',
          'Theta (6 Hz difference): Associated with deep meditation, liminal rest and active imagination.',
          'Delta (2 Hz difference): Slow nocturnal cadence suited for deep rest.',
          'Safe Listening: Start at low volume, use headphones for binaural stereo separation, and pause if you notice fatigue.'
        ]
      }
    ],
    faqs: [
      { question: 'Are sound frequencies a medical treatment?', answer: 'No. They are personal acoustic relaxation and reflection tools, not clinical treatments.' }
    ]
  }
];

export const GUIDE_SLUGS = GUIDES_TR.map((g) => g.slug);

const GUIDE_IMAGES = {
  'rezonans-kanunu-nedir': '/images/Mythborn_02_Altin_Kutsal_Geometri.webp',
  'spirituel-yasam-nedir': '/images/sanctuary-hero-2027.jpg',
  'carl-jung-golge-ve-arketip': '/images/jung-hero-2027.jpg',
  'meditasyon-ve-nefes-rehberi': '/images/Mythborn_01_Kozmik_Usturlap.webp',
  'frekans-rezonans-ve-beyin-dalgalari': '/images/Mythborn_03_Usturlap_ve_Kadim_Kitap.webp'
};

const GUIDE_CATEGORIES = {
  'rezonans-kanunu-nedir': 'resonance',
  'spirituel-yasam-nedir': 'mindfulness',
  'carl-jung-golge-ve-arketip': 'psychology',
  'meditasyon-ve-nefes-rehberi': 'mindfulness',
  'frekans-rezonans-ve-beyin-dalgalari': 'resonance'
};

export const getGuidesList = (locale = 'tr') =>
  (locale === 'tr' ? GUIDES_TR : GUIDES_EN).map((g, idx) => ({
    ...g,
    indexLabel: String(idx + 1).padStart(2, '0'),
    category: GUIDE_CATEGORIES[g.slug] || 'mindfulness',
    image: GUIDE_IMAGES[g.slug] || '/images/cinematic/knowledge/celestial-knowledge-library-960.webp'
  }));

export const getGuideBySlug = (locale = 'tr', slug = '') =>
  getGuidesList(locale).find((g) => g.slug === slug) || null;

export const getGuideFaqItems = (locale = 'tr', slug = '') => {
  const g = getGuideBySlug(locale, slug);
  if (g && Array.isArray(g.faqs)) return g.faqs;
  return locale === 'tr'
    ? [
        { question: 'Mythborn rehberleri bilimsel ve etik sınırları koruyor mu?', answer: 'Evet. Tüm farkındalık, Carl Jung psikolojisi, meditasyon ve ses rezonansı rehberleri şeffaf biçimde eğitim ve kişisel tefekkür amaçlıdır; tıbbi veya klinik iddia içermez.' },
        { question: 'Yeni başlayan biri hangi sırayla okumalı?', answer: 'Önce Meditasyon & Nefes rehberiyle zihinsel dinginliği kurup ardından Carl Jung Gölge Çalışması ve Rezonans Kanunu özetine geçmeniz en verimli sıradır.' },
        { question: 'Rehberlerdeki pratikleri sitede doğrudan uygulayabilir miyim?', answer: 'Evet. Her rehberin sonunda ilgili canlı araca (Meditasyon & Frekans Stüdyosu veya Carl Jung Arketip Aynası) tek tıkla geçebilirsiniz.' }
      ]
    : [
        { question: 'Do Mythborn guides respect scientific and ethical boundaries?', answer: 'Yes. All mindfulness, Carl Jung depth psychology, meditation and sound resonance guides are strictly educational and reflective with zero medical claims.' },
        { question: 'What is the recommended reading order for beginners?', answer: 'Start with the Meditation & Breath guide to establish calm focus, then continue with Carl Jung Shadow Work and the Law of Resonance summary.' },
        { question: 'Can I practice these methods directly on Mythborn?', answer: 'Yes. Each guide links directly to our interactive Meditation & Frequency Studio or the Carl Jung Archetype Mirror.' }
      ];
};

export const renderGuidesHubView = ({ locale = 'tr', guideBaseHref = '/rehber' } = {}) => {
  const isTr = locale === 'tr';
  const homeHref = locale === 'tr' ? '/' : locale === 'el' ? '/gr' : `/${locale}`;
  const sanctuaryHref = isTr ? '/meditasyon-ve-frekans' : '/en/meditation-and-frequencies';
  const jungHref = isTr ? '/jung' : '/en/jung';
  const items = getGuidesList(locale);
  const [featured, ...rest] = items;
  const hubFaqs = getGuideFaqItems(locale, '');

  const filters = isTr
    ? [
        { key: 'all', label: 'Tüm Rehberler' },
        { key: 'resonance', label: 'Rezonans & Ses' },
        { key: 'psychology', label: 'Derinlik Psikolojisi' },
        { key: 'mindfulness', label: 'Meditasyon & Farkındalık' }
      ]
    : [
        { key: 'all', label: 'All Guides' },
        { key: 'resonance', label: 'Resonance & Sound' },
        { key: 'psychology', label: 'Depth Psychology' },
        { key: 'mindfulness', label: 'Meditation & Mindful Living' }
      ];

  const pathSteps = isTr
    ? [
        { num: 'I', tag: 'SİNİR SİSTEMİ & DİNGİNLİK', title: 'Önce Zihni Sakinleştir', desc: 'Mum meditasyonu (Trataka), kutu nefesi ve 432 Hz stüdyo frekanslarıyla içsel gürültüyü azalt.', href: sanctuaryHref, cta: 'Stüdyoyu Aç →' },
        { num: 'II', tag: 'DERİNLİK PSİKOLOJİSİ', title: 'Gölge ve Arketipleri Tanı', desc: 'Carl Jung’un bilinç dışı haritasıyla tekrarlayan tetikleyicileri ve içsel kalıpları dürüstçe gözlemle.', href: jungHref, cta: 'Jung Aynasını Aç →' },
        { num: 'III', tag: 'BİLİNÇLİ UYUM', title: 'Niyeti Eylemle Birleştir', desc: 'Rezonans Kanunu özetiyle soyut dilekleri değil, berrak niyet ve tutarlı günlük adımları inşa et.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'Özeti Oku →' }
      ]
    : [
        { num: 'I', tag: 'NERVOUS SYSTEM & STILLNESS', title: 'Settle the Mind First', desc: 'Quiet mental noise with Trataka candle focus, box breathing and 432 Hz acoustic resonance.', href: sanctuaryHref, cta: 'Open Studio →' },
        { num: 'II', tag: 'DEPTH PSYCHOLOGY', title: 'Meet Shadow & Archetypes', desc: 'Use Carl Jung’s psychological map to observe repeating triggers and unconscious patterns honestly.', href: jungHref, cta: 'Open Jung Mirror →' },
        { num: 'III', tag: 'CONSCIOUS ALIGNMENT', title: 'Pair Clarity with Action', desc: 'Read the Law of Resonance summary to unite clear inner intention with grounded daily choices.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'Read Summary →' }
      ];

  return `
  <div class="sanc-page guides-elite-page">
    <section class="sanc-hero sanc-hero-fullbleed guides-elite-hero">
      <img class="sanc-hero-bg" src="/images/cinematic/knowledge/celestial-knowledge-library-1440.webp" alt="" width="1440" height="900" fetchpriority="high" decoding="async" aria-hidden="true">
      <div class="astro-container sanc-center sanc-hero-content">
        <span class="sanc-eyebrow">✦ ${isTr ? 'BİLİNÇ & FARKINDALIK AKADEMİSİ · EDİTÖRYAL MONOGRAFİLER' : 'CONSCIOUSNESS & AWARENESS ACADEMY · EDITORIAL MONOGRAPHS'}</span>
        <h1 class="sanc-h1">${isTr ? 'Bilinç, Jung & Farkındalık Rehberleri.' : 'Consciousness, Jung & Awareness Guides.'}</h1>
        <p class="sanc-lead">${isTr ? 'Rezonans Kanunu, spiritüel yaşam ilkeleri, Carl Jung gölge çalışması ve ses fiziği üzerine rafine kütüphane.' : 'A curated library on the Law of Resonance, mindful living, Carl Jung shadow work and acoustic physics.'}</p>
        <div class="guides-hero-telemetry" aria-label="Library overview">
          <span>✦ ${isTr ? '05 Derinlik Rehberi' : '05 In-Depth Guides'}</span>
          <span class="guides-tel-dot" aria-hidden="true">·</span>
          <span>${isTr ? '30 dk Toplam Okuma' : '30 min Total Reading'}</span>
          <span class="guides-tel-dot" aria-hidden="true">·</span>
          <span>${isTr ? 'Reklamsız & Etik Sınırlar' : 'Ad-Free & Ethical Boundaries'}</span>
        </div>
      </div>
    </section>

    <section class="sanc-section guides-catalog-section">
      <div class="astro-container">
        <div class="guides-toolbar">
          <div class="guides-toolbar-head">
            <span class="sanc-kicker">✦ ${isTr ? 'KÜRATÖRLÜ ARŞİV' : 'CURATED ARCHIVE'}</span>
            <h2 class="guides-section-h2">${isTr ? 'Konuya Göre Keşfet' : 'Explore by Discipline'}</h2>
          </div>
          <div class="guides-filter-bar" role="tablist" aria-label="${isTr ? 'Rehber kategorileri' : 'Guide categories'}">
            ${filters.map((f, i) => `
              <button type="button" class="guides-filter-pill${i === 0 ? ' is-active' : ''}" data-guide-filter="${f.key}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}">${f.label}</button>
            `).join('')}
          </div>
        </div>

        ${featured ? `
        <article class="guide-featured-card guide-elite-featured" data-guide-item data-guide-cat="${featured.category}" data-spotlight>
          <a class="guide-featured-media" href="${guideBaseHref}/${featured.slug}">
            <span class="guide-index-badge">${featured.indexLabel}</span>
            <img src="${featured.image}" alt="${featured.title}" loading="eager" decoding="async">
          </a>
          <div class="guide-featured-body">
            <div>
              <div class="guide-meta-row">
                <span class="guide-featured-kicker">✦ ${isTr ? 'ÖNE ÇIKAN MONOGRAFİ' : 'FEATURED MONOGRAPH'} · ${featured.tag}</span>
                <span class="guide-read-pill">${featured.readTime}</span>
              </div>
              <h2><a href="${guideBaseHref}/${featured.slug}">${featured.title}</a></h2>
              <div class="guide-gold-rule" aria-hidden="true"></div>
              <p>${featured.lead}</p>
            </div>
            <div class="guide-featured-actions">
              <a class="sanc-btn-gold" href="${guideBaseHref}/${featured.slug}">
                <span>${isTr ? 'Özet Rehberi Oku' : 'Read Summary Guide'}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a class="guide-inline-cta" href="${featured.ctaHref}">
                <span>${isTr ? 'Stüdyoda Deneyimle' : 'Try in Studio'}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>` : ''}

        <div class="guides-hub-grid guides-elite-grid">
          ${rest.map((g) => `
            <article class="guide-hub-card mb27-card-has-media guide-elite-card" data-guide-item data-guide-cat="${g.category}" data-spotlight>
              <a class="mb27-card-media" href="${guideBaseHref}/${g.slug}">
                <span class="guide-index-badge">${g.indexLabel}</span>
                <img src="${g.image}" alt="${g.title}" loading="lazy" decoding="async">
              </a>
              <div class="mb27-card-body">
                <div>
                  <div class="guide-meta-row">
                    <span>${g.tag}</span>
                    <span class="guide-read-pill">${g.readTime}</span>
                  </div>
                  <h3><a href="${guideBaseHref}/${g.slug}">${g.title}</a></h3>
                  <p>${g.lead}</p>
                </div>
                <a class="guide-inline-cta" href="${guideBaseHref}/${g.slug}">
                  <span>${isTr ? 'Rehberi Oku' : 'Read Guide'}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="sanc-section guides-path-section">
      <div class="astro-container">
        <div class="sanc-head sanc-center">
          <span class="sanc-kicker">✦ ${isTr ? 'ÖNERİLEN OKUMA & UYGULAMA ROTASI' : 'CURATED READING & PRACTICE PATH'}</span>
          <h2>${isTr ? 'Nereden Başlamalı?' : 'Where to Begin?'}</h2>
          <p>${isTr ? 'Teoride bırakmadan, sakinlikten derin öz-farkındalığa uzanan üç adımlı Mythborn akışı.' : 'A three-step Mythborn progression moving from stillness to deep self-awareness.'}</p>
        </div>
        <div class="guides-path-grid">
          ${pathSteps.map((step) => `
            <article class="guides-path-card" data-spotlight>
              <div class="guides-path-num">${step.num}</div>
              <span class="guides-path-tag">${step.tag}</span>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
              <a class="guide-inline-cta" href="${step.href}">${step.cta}</a>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderReadingCuration(locale, { id: 'okuma-listesi' })}

    <section class="sanc-section guides-faq-section">
      <div class="astro-container">
        <div class="sanc-head sanc-center">
          <span class="sanc-kicker">✦ ${isTr ? 'ETİK SINIRLAR & SIK SORULANLAR' : 'ETHICAL BOUNDARIES & FAQ'}</span>
          <h2>${isTr ? 'Rehberler Hakkında Merak Edilenler' : 'Frequently Asked Questions'}</h2>
        </div>
        <div class="guides-faq-list">
          ${hubFaqs.map((f, i) => `
            <details class="guides-faq-item"${i === 0 ? ' open' : ''}>
              <summary><span>${f.question}</span><span class="guides-faq-plus" aria-hidden="true">+</span></summary>
              <p>${f.answer}</p>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  </div>
  <script>
    (function(){
      var pills = document.querySelectorAll('[data-guide-filter]');
      var cards = document.querySelectorAll('[data-guide-item]');
      if (!pills.length || !cards.length) return;
      pills.forEach(function(pill){
        pill.addEventListener('click', function(){
          var cat = pill.getAttribute('data-guide-filter');
          pills.forEach(function(p){
            var active = p === pill;
            p.classList.toggle('is-active', active);
            p.setAttribute('aria-selected', active ? 'true' : 'false');
          });
          cards.forEach(function(card){
            var show = cat === 'all' || card.getAttribute('data-guide-cat') === cat;
            card.style.display = show ? '' : 'none';
          });
        });
      });
    })();
  </script>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};

export const renderGuideArticleView = ({ locale = 'tr', slug = '', guideBaseHref = '/rehber' } = {}) => {
  const isTr = locale === 'tr';
  const homeHref = locale === 'tr' ? '/' : locale === 'el' ? '/gr' : `/${locale}`;
  const allGuides = getGuidesList(locale);
  const g = getGuideBySlug(locale, slug) || allGuides[0];
  const related = allGuides.filter((item) => item.slug !== g.slug).slice(0, 2);

  return `
  <div class="guide-read-progress-track" aria-hidden="true"><div id="guide-read-progress" class="guide-read-progress-bar"></div></div>
  <div class="sanc-page guides-elite-page">
    <section class="sanc-hero sanc-hero-fullbleed guides-elite-hero">
      <img class="sanc-hero-bg" src="${g.image}" alt="" width="1408" height="768" fetchpriority="high" decoding="async" aria-hidden="true">
      <div class="astro-container sanc-center sanc-hero-content">
        <nav class="guide-breadcrumb" aria-label="Breadcrumb">
          <a href="${homeHref}">${isTr ? 'Ana Sayfa' : 'Home'}</a>
          <span aria-hidden="true">›</span>
          <a href="${guideBaseHref}">${isTr ? 'Rehberler' : 'Guides'}</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${g.indexLabel}</span>
        </nav>
        <span class="sanc-eyebrow">✦ ${g.tag} · ${g.readTime}</span>
        <h1 class="sanc-h1">${g.title}</h1>
        <p class="sanc-lead">${g.lead}</p>
      </div>
    </section>

    <section class="sanc-section">
      <div class="astro-container">
        <article class="guide-article-shell guide-article-elite" data-spotlight>
          ${g.sections.map((sec, idx) => `
            <section class="guide-article-sec">
              <div class="guide-sec-num">${String(idx + 1).padStart(2, '0')}</div>
              <h2>${sec.h}</h2>
              ${sec.p ? `<p>${sec.p}</p>` : ''}
              ${sec.bullets ? `<ul class="guide-article-list">${sec.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : ''}
            </section>
          `).join('')}

          ${g.faqs && g.faqs.length ? `
          <section class="guide-article-sec guide-article-faq-wrap">
            <div class="guide-sec-num">FAQ</div>
            <h2>${isTr ? 'Kısa Sorular & Etik Netlik' : 'Quick Questions & Ethical Clarity'}</h2>
            <div class="guides-faq-list" style="margin-top:16px">
              ${g.faqs.map((f, i) => `
                <details class="guides-faq-item"${i === 0 ? ' open' : ''}>
                  <summary><span>${f.question}</span><span class="guides-faq-plus" aria-hidden="true">+</span></summary>
                  <p>${f.answer}</p>
                </details>
              `).join('')}
            </div>
          </section>` : ''}

          <div class="guide-article-foot">
            <a class="sanc-btn-gold" href="${g.ctaHref}">${g.ctaLabel}</a>
            <a class="sanc-btn-ghost" href="${guideBaseHref}">${isTr ? '← Tüm Rehberler' : '← All Guides'}</a>
          </div>
        </article>

        ${related.length ? `
        <div class="guides-related-wrap">
          <div class="guides-related-head">
            <span class="sanc-kicker">✦ ${isTr ? 'OKUMAYA DEVAM ET' : 'CONTINUE READING'}</span>
            <h2>${isTr ? 'Sıradaki Önerilen Rehberler' : 'Recommended Next Guides'}</h2>
          </div>
          <div class="guides-hub-grid guides-elite-grid">
            ${related.map((r) => `
              <article class="guide-hub-card mb27-card-has-media guide-elite-card" data-spotlight>
                <a class="mb27-card-media" href="${guideBaseHref}/${r.slug}">
                  <span class="guide-index-badge">${r.indexLabel}</span>
                  <img src="${r.image}" alt="${r.title}" loading="lazy" decoding="async">
                </a>
                <div class="mb27-card-body">
                  <div>
                    <div class="guide-meta-row">
                      <span>${r.tag}</span>
                      <span class="guide-read-pill">${r.readTime}</span>
                    </div>
                    <h3><a href="${guideBaseHref}/${r.slug}">${r.title}</a></h3>
                    <p>${r.lead}</p>
                  </div>
                  <a class="guide-inline-cta" href="${guideBaseHref}/${r.slug}">
                    <span>${isTr ? 'Rehberi Oku' : 'Read Guide'}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>` : ''}
      </div>
    </section>
    ${renderReadingCuration(locale, { id: 'okuma-listesi' })}
  </div>
  <script>
    (function(){
      var bar = document.getElementById('guide-read-progress');
      if (!bar) return;
      function update(){
        var h = document.documentElement.scrollHeight - window.innerHeight;
        var pct = h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0;
        bar.style.width = pct + '%';
      }
      window.addEventListener('scroll', update, { passive: true });
      update();
    })();
  </script>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
