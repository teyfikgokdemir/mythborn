// Mythborn 2027 — Consciousness, Carl Jung, Meditation & Sound Resonance Educational Library
// Hub (/rehber) + 5 Deep Long-Form Educational Guides in 5 Locales (tr, en, el, es, ar)
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
        h: 'Resonance and Carl Jung’s Concept of the Shadow',
        p: 'Repeating superficial affirmations (Persona) rarely suffices on its own. Disowned fears, perceived deficiencies, and ingrained defense patterns (the Shadow) quietly steer our choices. Genuine alignment begins when conscious intention and unconscious beliefs cease to contradict each other.'
      },
      {
        h: 'Four Grounded Steps for Conscious Alignment',
        bullets: [
          'Quiet the Nervous System: Use 5–10 minutes of breathwork or 432 Hz soundscapes to step out of reactive stress; a strained mind cannot choose clearly.',
          'Examine Hidden Beliefs: Notice repeating emotional patterns and Carl Jung’s Shadow triggers rather than masking them.',
          'Clarify Intention: Articulate what you are building in calm, present language rather than rehearsing what you fear.',
          'Pair Clarity with Action: Alignment is not passive wishing; it matures through consistent, grounded daily choices.'
        ]
      },
      {
        h: 'Ethical Boundary: Self-Awareness, Not Magical Thinking',
        p: 'The resonance perspective is never an excuse to blame individuals for hardship or illness. A healthy, ethical understanding means accepting uncontrollable circumstances while owning what we can steer: our attention, boundaries, and actions.'
      }
    ],
    faqs: [
      { question: 'Is the Law of Resonance a literal medical or physical guarantee?', answer: 'No. Acoustic resonance is real physics, while the personal-growth Law of Resonance is a reflective framework for attention, belief awareness and intentional action.' },
      { question: 'Is positive thinking alone enough for resonance?', answer: 'No. Authentic self-awareness requires acknowledging hidden fears honestly and backing your intention with grounded everyday steps.' }
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
      },
      {
        h: 'Dispelling Myths & Ethical Boundaries',
        p: 'Conscious spiritual living is not escaping from reality, forcing toxic positivity, or rejecting medical and psychiatric care. Authentic mindfulness is grounded, respectful of empirical science, and centered on human autonomy.'
      }
    ],
    faqs: [
      { question: 'How much time is needed daily to begin?', answer: 'Just 10–15 minutes of consistent breathwork, stillness and brief journaling is enough to build steady awareness.' },
      { question: 'Is spiritual living tied to any specific religion?', answer: 'No. Mindfulness, breath, self-reflection and connection are universally accessible across all cultures and belief backgrounds.' }
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
        p: 'The Persona is the social mask we present to the world; the Shadow holds the unlived vitality, anger, vulnerability, or creative fire pushed out of conscious view. Jung noted that what remains unrecognized in ourselves is repeatedly projected onto others.'
      },
      {
        h: 'How to Practice Shadow Reflection',
        bullets: [
          'Notice Sudden Triggers: When someone’s behavior provokes disproportionate annoyance, ask what denied quality in yourself it mirrors.',
          'Inquire Without Judgment: Write down what boundary, desire, or power this reaction brings to the surface.',
          'Use Active Imagination: Sit in a quiet room (such as Mythborn Sanctuary) and dialogue with recurring dream motifs or emotions.',
          'Take a Grounded Step: Honor an unexpressed, healthy need (such as saying “no” or taking rest) with a small concrete choice.'
        ]
      },
      {
        h: 'Collective Unconscious, Archetypes & Synchronicity',
        p: 'Jung identified Archetypes as timeless psychological blueprints shared across world mythologies (Sage, Shadow, Anima/Animus, Explorer, Creator, Self). Synchronicity describes a meaningful coincidence between an inner state and an outer event without a mechanical causal link.'
      },
      {
        h: 'The Journey of Individuation',
        p: 'Individuation is not about becoming flawless, but about becoming whole. It is the conscious process of integrating both light and shadow around an authentic center (the Self).'
      }
    ],
    faqs: [
      { question: 'Does Shadow work replace psychotherapy?', answer: 'No. It is an educational self-reflection framework and never replaces clinical therapy or medical care.' },
      { question: 'What is Synchronicity in Jungian terms?', answer: 'It is a meaningful, non-causal coincidence between an inner psychological state and an outer occurrence.' }
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
        h: '1. Candle Gazing (Trataka)',
        p: 'Trataka is the practice of gently steadying visual gaze upon a candle flame to reduce mental agitation. Instead of aggressively banishing thoughts, simply return your attention to the flame’s radiant core.'
      },
      {
        h: '2. Inner-Self Breath Coherence',
        bullets: [
          '4-4-4-4 Box Breathing: 4s inhale, 4s hold, 4s exhale, 4s pause. Ideal for mental clarity and poise.',
          '4-7-8 Relaxing Breath: Lengthens the exhalation to activate the parasympathetic rest-and-digest response.',
          '5-5 Heart Coherence: Smooth, equal flow that harmonizes cardiac rhythm with breathing.'
        ]
      },
      {
        h: '3. Theta Threshold Relaxation',
        p: 'In the calm Theta threshold between waking and sleep, the body fully releases tension while awareness remains clear. Progressive somatic scanning paired with a 6 Hz binaural cadence supports this deep restful space.'
      },
      {
        h: '4. 108 Mala Intention Counter',
        p: 'The 108-bead rhythm provides a tactile anchor for attention. Repeating a single positive, present-tense intention with each soft chime settles wandering thoughts.'
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
        h: 'Hertz (Hz) & Acoustic Physics',
        p: 'Hertz measures how many times an acoustic wave oscillates per second. Lower Hz sounds deeper in pitch, higher Hz sounds brighter. Pitch and volume (decibels) are distinct physical dimensions.'
      },
      {
        h: 'How Binaural Beats & Stereo Temple Reverb Work',
        bullets: [
          'Alpha (10 Hz difference): Associated with calm focus and relaxed alertness.',
          'Theta (6 Hz difference): Associated with deep meditation, liminal rest and active imagination.',
          'Delta (2 Hz difference): Slow nocturnal cadence suited for deep rest.',
          'Why Headphones Matter: Feeding 432 Hz to the left ear and 438 Hz to the right prompts the brain to synthesize a 6 Hz difference cadence.'
        ]
      },
      {
        h: 'Solfeggio Tones & 432 Hz vs 440 Hz',
        p: 'Solfeggio intervals (174–963 Hz) are valued in contemporary mindfulness for their symbolic associations (grounding, renewal, intuition). Tuning to 432 Hz offers a slightly warmer acoustic feel compared to the standard 440 Hz concert pitch. Mythborn clearly differentiates physics from cultural symbolism.'
      },
      {
        h: 'Safe & Rich Listening Principles',
        p: 'Continuous raw sine waves can cause ear fatigue. Mythborn Sanctuary layers binaural tones with stereo temple reverb, subtle subharmonics, and live natural textures (rain, ocean, wind, fire). Always begin at a comfortable, low volume.'
      }
    ],
    faqs: [
      { question: 'Are sound frequencies a medical treatment?', answer: 'No. They are personal acoustic relaxation and reflection tools, not clinical treatments.' }
    ]
  }
];

const GUIDES_EL = [
  {
    slug: 'rezonans-kanunu-nedir',
    tag: 'ΣΥΝΤΟΝΙΣΜΟΣ & ΣΥΝΕΙΔΗΤΗ ΕΥΘΥΓΡΑΜΜΙΣΗ',
    readTime: '5 λεπτά ανάγνωση',
    title: 'Τι Είναι ο Νόμος του Συντονισμού; Καρδιά, Νους και Ενσυνείδητη Ευθυγράμμιση',
    lead: 'Ξεκινώντας ως φυσικό φαινόμενο ταλάντωσης, ο συντονισμός λειτουργεί στην αυτογνωσία ως καθρέφτης των εσωτερικών πεποιθήσεων και των καθημερινών μας επιλογών.',
    ctaHref: '/gr/dialogismos-kai-sychnotites#ses-mikseri',
    ctaLabel: 'Άνοιγμα Στούντιο 432 Hz & Φυσικού Συντονισμού →',
    sections: [
      {
        h: 'Σύνοψη του Νόμου του Συντονισμού',
        p: 'Στη φυσική, ο συντονισμός είναι η αμοιβαία ενίσχυση δύο συστημάτων που δονούνται στην ίδια συχνότητα (όπως όταν η δόνηση ενός διαπασών ενεργοποιεί ένα διπλανό). Ο Pierre Franckh μετέφερε αυτή τη μεταφορά στην ψυχολογία: δεν αντιλαμβανόμαστε τον κόσμο όπως ακριβώς είναι, αλλά μέσα από το φίλτρο των βαθύτερων πεποιθήσεων και των συναισθηματικών μας συνηθειών, κάνοντας επιλογές που ευθυγραμμίζονται με αυτό το φίλτρο.'
      },
      {
        h: 'Συντονισμός και η Σκιά κατά τον Carl Jung',
        p: 'Η επιφανειακή επανάληψη θετικών φράσεων (Persona) δεν αρκεί από μόνη της, καθώς οι απωθημένοι φόβοι και οι αμυντικοί μηχανισμοί του ασυνειδήτου (Σκιά) καθοδηγούν σιωπηρά τις αποφάσεις μας. Η πραγματική αρμονία γεννιέται όταν αυτό που επιθυμεί ο νους δεν συγκρούεται με αυτό που πιστεύει η καρδιά.'
      },
      {
        h: 'Τέσσερα Πρακτικά Βήματα για Ενσυνείδητη Ευθυγράμμιση',
        bullets: [
          'Ηρεμήστε το Νευρικό Σύστημα: Αφιερώστε 5–10 λεπτά σε ασκήσεις αναπνοής ή ήχους 432 Hz· ένας ταραγμένος νους δεν μπορεί να κάνει καθαρές επιλογές.',
          'Αναγνωρίστε τις Επαναλαμβανόμενες Πεποιθήσεις: Καταγράψτε τα μοτίβα που επαναλαμβάνονται και παρατηρήστε από ποιες παλιές πεποιθήσεις πηγάζουν.',
          'Αποσαφηνίστε την Πρόθεσή σας: Αντί να εστιάζετε σε ό,τι φοβάστε, ορίστε αυτό που θέλετε να χτίσετε με μια λιτή πρόταση σε ενεστώτα χρόνο.',
          'Συνδέστε την Πρόθεση με Πράξεις: Ο συντονισμός δεν είναι παθητική αναμονή· αναπτύσσεται μέσα από συνεπή, γειωμένα καθημερινά βήματα.'
        ]
      },
      {
        h: 'Ηθικό Όριο: Αυτογνωσία και Όχι Μαγική Σκέψη',
        p: 'Ο συντονισμός δεν σημαίνει ενοχοποίηση του ατόμου για τις δυσκολίες της ζωής. Η ώριμη στάση είναι η αποδοχή των εξωτερικών συνθηκών και η ανάληψη ευθύνης για τη δική μας προσοχή, τα όρια και τις επιλογές μας.'
      }
    ],
    faqs: [
      { question: 'Είναι ο Νόμος του Συντονισμού κυριολεκτικός ιατρικός ή φυσικός νόμος;', answer: 'Ο ακουστικός συντονισμός είναι αποδεδειγμένη φυσική. Στην προσωπική ανάπτυξη, αποτελεί ένα συμβολικό πλαίσιο για την παρατήρηση της προσοχής και των εσωτερικών πεποιθήσεων.' },
      { question: 'Αρκεί η θετική σκέψη για τον συντονισμό;', answer: 'Όχι. Χρειάζεται ειλικρινής αυτοπαρατήρηση, αναγνώριση των ασυνείδητων φόβων και υποστήριξη της πρόθεσης με έμπρακτες πράξεις.' }
    ]
  },
  {
    slug: 'spirituel-yasam-nedir',
    tag: 'ΟΔΗΓΟΣ ΕΝΣΥΝΕΙΔΗΤΟΤΗΤΑΣ',
    readTime: '6 λεπτά ανάγνωση',
    title: 'Τι Είναι η Πνευματική Ζωή και η Ενσυνειδητότητα;',
    lead: 'Ανεξάρτητα από δόγματα ή υποσχέσεις θαυμάτων, η πνευματική ζωή είναι η ήρεμη τέχνη της παρουσίας, της αυτοειλικρίνειας και της ουσιαστικής σύνδεσης με τη ζωή.',
    ctaHref: '/gr/dialogismos-kai-sychnotites',
    ctaLabel: 'Είσοδος στο Ζωντανό Καταφύγιο Διαλογισμού →',
    sections: [
      {
        h: 'Τι Σημαίνει Πνευματική Ζωή;',
        p: 'Είναι η ικανότητα να σταματάμε μέσα στον θόρυβο της καθημερινότητας και να αναρωτιόμαστε με ηρεμία: «Τι νιώθω αυτή τη στιγμή και τι έχει πραγματική αξία για εμένα;». Δεν απαιτεί προσκόλληση σε συγκεκριμένο σύστημα· είναι η αρμονική ισορροπία ανάμεσα στον νου, το σώμα και το νόημα.'
      },
      {
        h: 'Πέντε Βασικές Αρχές της Ενσυνείδητης Ζωής',
        bullets: [
          'Παρουσία στο Εδώ και Τώρα: Επιστροφή από τις νοητικές επαναλήψεις στην πραγματικότητα της αναπνοής και των αισθήσεων.',
          'Ειλικρινής Αυτοπαρατήρηση: Αποδοχή τόσο των φωτεινών πλευρών όσο και της γιουνγκιανής Σκιάς χωρίς σκληρή κριτική.',
          'Σύνδεση με τη Φύση και τον Ρυθμό: Εξισορρόπηση του νευρικού συστήματος μέσα από τους φυσικούς ήχους και κύκλους.',
          'Συμπόνια με Υγιή Όρια: Ευγένεια προς τους άλλους σε συνδυασμό με σαφή προσωπική κυριαρχία.',
          'Συνεχής Αναστοχασμός: Καθημερινή καλλιέργεια της εσωτερικής διαύγειας μέσω ανάγνωσης, καταγραφής και σιωπής.'
        ]
      },
      {
        h: 'Καθημερινό Πρωτόκολλο 15 Λεπτών',
        bullets: [
          'Λεπτά 1–3: Τετράγωνη Αναπνοή (4-4-4-4) για άμεση ηρεμία του νευρικού συστήματος.',
          'Λεπτά 4–10: Διαλογισμός με Κερί (Trataka) ή σιωπηλή παρατήρηση της αναπνοής.',
          'Λεπτά 11–15: Καταγραφή ενός ονείρου, συναισθήματος ή συγχρονικότητας στο ιδιωτικό σας ημερολόγιο.'
        ]
      },
      {
        h: 'Μύθοι και Ηθικά Όρια',
        p: 'Η ενσυνείδητη ζωή δεν σημαίνει αποκοπή από την πραγματικότητα, καταπίεση των δύσκολων συναισθημάτων ή άρνηση της επιστημονικής και ιατρικής φροντίδας. Είναι μια γειωμένη, ώριμη και ελεύθερη στάση ζωής.'
      }
    ],
    faqs: [
      { question: 'Πόσος χρόνος χρειάζεται καθημερινά για να ξεκινήσει κανείς;', answer: 'Αρκούν 10–15 λεπτά σταθερής πρακτικής αναπνοής, σιωπής και σύντομης καταγραφής. Η συνέπεια είναι πιο σημαντική από τη διάρκεια.' },
      { question: 'Συνδέεται η πνευματική ζωή με συγκεκριμένη θρησκεία;', answer: 'Όχι. Η επίγνωση, η αναπνοή και η ενδοσκόπηση είναι πανανθρώπινες πρακτικές προσβάσιμες σε όλους.' }
    ]
  },
  {
    slug: 'carl-jung-golge-ve-arketip',
    tag: 'ΨΥΧΟΛΟΓΙΑ ΤΟΥ ΒΑΘΟΥΣ',
    readTime: '7 λεπτά ανάγνωση',
    title: 'Carl Jung: Εργασία με τη Σκιά, Αρχέτυπα και Εξατομίκευση',
    lead: 'Η ψυχολογία του βάθους του Carl Gustav Jung προσεγγίζει τα σύμβολα, τα όνειρα και τις εσωτερικές εντάσεις όχι ως δεισιδαιμονία, αλλά ως ζωντανό χάρτη ψυχολογικής ολότητας.',
    ctaHref: '/gr/jung',
    ctaLabel: 'Άνοιγμα Καθρέφτη Αρχετύπων & Σκιάς Carl Jung →',
    sections: [
      {
        h: 'Persona και Σκιά (Shadow)',
        p: 'Η Persona είναι η κοινωνική μάσκα που φοράμε για να προσαρμοστούμε στο περιβάλλον. Η Σκιά περιλαμβάνει τα κομμάτια που απωθήσαμε από την παιδική ηλικία ως «μη αποδεκτά»: αυθορμητισμό, οργή, ευαλωτότητα ή δημιουργική δύναμη. Όταν δεν αναγνωρίζουμε τη σκιά μας, τείνουμε να την προβάλλουμε επικριτικά στους άλλους.'
      },
      {
        h: 'Πώς Ξεκινά η Εργασία με τη Σκιά;',
        bullets: [
          'Παρατηρήστε τα Ερεθίσματα: Σημειώστε συμπεριφορές άλλων που σας προκαλούν δυσανάλογο θυμό ή ζήλια.',
          'Ρωτήστε χωρίς Επίκριση: «Ποια δική μου απαγορευμένη ανάγκη ή δύναμη μου θυμίζει αυτή η συμπεριφορά;»',
          'Ενεργητική Φαντασία (Active Imagination): Συνομιλήστε σε έναν ήρεμο χώρο με τα σύμβολα των ονείρων ή τα έντονα συναισθήματά σας.',
          'Μικρό Συγκεκριμένο Βήμα: Τιμήστε μια υγιή απωθημένη ανάγκη (όπως το να πείτε «όχι» ή να ξεκουραστείτε) με μια καθημερινή πράξη.'
        ]
      },
      {
        h: 'Συλλογικό Ασυνείδητο, Αρχέτυπα και Συγχρονικότητα',
        p: 'Ο Jung ονόμασε Αρχέτυπα τα καθολικά μοτίβα που επαναλαμβάνονται στους μύθους και τα όνειρα όλης της ανθρωπότητας (Σοφός, Σκιά, Anima/Animus, Εξερευνητής, Δημιουργός, Εαυτός). Συγχρονικότητα είναι η ουσιαστική σύμπτωση μιας εσωτερικής ψυχικής κατάστασης με ένα εξωτερικό γεγονός χωρίς αιτιώδη σχέση.'
      },
      {
        h: 'Το Ταξίδι της Εξατομίκευσης (Individuation)',
        p: 'Εξατομίκευση δεν σημαίνει να γίνουμε τέλειοι, αλλά «ολόκληροι». Είναι η πορεία απελευθέρωσης από τις προσδοκίες των άλλων και η ενοποίηση του φωτός και της σκιάς σε ένα συνειδητό κέντρο (Self).'
      }
    ],
    faqs: [
      { question: 'Αντικαθιστά η εργασία με τη σκιά την ψυχοθεραπεία;', answer: 'Όχι. Είναι ένα εκπαιδευτικό εργαλείο αυτογνωσίας και δεν υποκαθιστά την κλινική ψυχοθεραπεία ή την ιατρική υποστήριξη.' },
      { question: 'Τι σημαίνει Συγχρονικότητα;', answer: 'Είναι η ουσιαστική, μη αιτιώδης σύμπτωση μιας εσωτερικής ψυχολογικής κατάστασης με ένα εξωτερικό γεγονός.' }
    ]
  },
  {
    slug: 'meditasyon-ve-nefes-rehberi',
    tag: 'ΠΡΑΚΤΙΚΟΣ ΔΙΑΛΟΓΙΣΜΟΣ',
    readTime: '6 λεπτά ανάγνωση',
    title: 'Είδη Διαλογισμού: Κερί (Trataka), Αναπνοή Εαυτού, Theta και 108 Μάντρα',
    lead: 'Βήμα προς βήμα οδηγός για τέσσερις διαχρονικές πρακτικές που ηρεμούν τον νου χωρίς να επιβάλλουν βίαιη σιωπή.',
    ctaHref: '/gr/dialogismos-kai-sychnotites',
    ctaLabel: 'Δοκιμάστε τα Τέσσερα Δωμάτια Διαλογισμού Τώρα →',
    sections: [
      {
        h: '1. Διαλογισμός με Κερί (Trataka)',
        p: 'Το Trataka είναι η πρακτική απαλής εστίασης του βλέμματος στη φλόγα ενός κεριού για τη μείωση της οπτικής και νοητικής διάσπασης. Αντί να διώχνετε τις σκέψεις, επαναφέρετε ευγενικά την προσοχή στον φωτεινό πυρήνα της φλόγας.'
      },
      {
        h: '2. Αναπνοή και Συνοχή του Εσωτερικού Εαυτού',
        bullets: [
          'Τετράγωνη Αναπνοή 4-4-4-4: 4 δευτερόλεπτα εισπνοή, 4 κράτημα, 4 εκπνοή, 4 κράτημα. Ιδανική για διανοητική διαύγεια και ισορροπία.',
          'Καταπραϋντική Αναπνοή 4-7-8: Επιμηκύνει την εκπνοή ενεργοποιώντας το παρασυμπαθητικό νευρικό σύστημα.',
          'Καρδιακή Συνοχή 5-5: Ισόχρονη και ομαλή ροή που συγχρονίζει τον ρυθμό καρδιάς και αναπνοής.'
        ]
      },
      {
        h: '3. Κατώφλι Theta και Βαθιά Χαλάρωση',
        p: 'Στη μεταιχμιακή κατάσταση Theta ανάμεσα στον ύπνο και την εγρήγορση, το σώμα χαλαρώνει πλήρως ενώ η συνείδηση παραμένει άγρυπνη. Η σταδιακή σωματική σάρωση σε συνδυασμό με διωτικά κύματα 6 Hz καλλιεργεί βαθιά ηρεμία.'
      },
      {
        h: '4. 108 Μάντρα και Επανάληψη Πρόθεσης',
        p: 'Ο ρυθμός ενός mala 108 χαντρών προσφέρει μια απτική άγκυρα στον νου. Η επανάληψη μιας λιτής θετικής πρόθεσης σε κάθε απαλό χτύπημα καμπάνας εστιάζει και γαληνεύει τη σκέψη.'
      }
    ],
    faqs: [
      { question: 'Είναι φυσιολογικό να εμφανίζονται συνεχώς σκέψεις κατά τον διαλογισμό;', answer: 'Απολύτως. Σκοπός του διαλογισμού δεν είναι να αδειάσει με το ζόρι το μυαλό, αλλά να παρατηρούμε τις σκέψεις χωρίς κριτική και να επιστρέφουμε απαλά στην αναπνοή ή στη φλόγα.' }
    ]
  },
  {
    slug: 'frekans-rezonans-ve-beyin-dalgalari',
    tag: 'ΗΧΟΣ & ΦΥΣΙΚΗ ΣΥΝΤΟΝΙΣΜΟΥ',
    readTime: '6 λεπτά ανάγνωση',
    title: 'Συχνότητες, Συντονισμός και Εγκεφαλικά Κύματα (Alpha, Theta, Delta, Solfeggio)',
    lead: 'Τι είναι το Hertz, πώς λειτουργούν τα διωτικά κύματα στα ακουστικά, ποια η διαφορά 432 Hz με 440 Hz και ποια τα όρια ασφαλούς ακρόασης;',
    ctaHref: '/gr/dialogismos-kai-sychnotites#ses-mikseri',
    ctaLabel: 'Άνοιγμα Στούντιο Κυματικής & Στερεοφωνικής Αντήχησης →',
    sections: [
      {
        h: 'Hertz (Hz) και Φυσική του Ήχου',
        p: 'Το Hertz μετρά πόσες φορές ταλαντώνεται ένα ηχητικό κύμα ανά δευτερόλεπτο. Οι χαμηλές τιμές Hz ακούγονται βαθιές, ενώ οι υψηλές οξείες. Το τονικό ύψος και η ένταση (ντεσιμπέλ) είναι διαφορετικές έννοιες.'
      },
      {
        h: 'Πώς Λειτουργούν τα Διωτικά Εγκεφαλικά Κύματα;',
        bullets: [
          'Alpha (διαφορά 8–12 Hz, π.χ. 10 Hz): Συνδέεται με ήρεμη εγρήγορση, εστίαση και δημιουργική ροή.',
          'Theta (διαφορά 4–7 Hz, π.χ. 6 Hz): Συνοδεύει τον βαθύ διαλογισμό, την είσοδο στον ύπνο και την ενεργητική φαντασία.',
          'Delta (διαφορά 1–3 Hz, π.χ. 2 Hz): Ο πιο αργός ρυθμός που υποστηρίζει τη νυχτερινή ξεκούραση και σωματική αποκατάσταση.',
          'Γιατί Χρειάζονται Ακουστικά;: Όταν το αριστερό αυτί λαμβάνει 432 Hz και το δεξί 438 Hz, ο εγκέφαλος συνθέτει μια ρυθμική διαφορά 6 Hz.'
        ]
      },
      {
        h: 'Τόνοι Solfeggio και 432 Hz έναντι 440 Hz',
        p: 'Η σειρά Solfeggio (174–963 Hz) συνδέεται στη σύγχρονη κουλτούρα με συμβολικές ποιότητες (γείωση, διαύγεια, διαίσθηση). Το κούρδισμα στα 432 Hz προσφέρει έναν πιο ζεστό ακουστικό χαρακτήρα σε σχέση με το βιομηχανικό πρότυπο 440 Hz. Το Mythborn διαχωρίζει με σαφήνεια την επιστημονική ακουστική από τον πολιτισμικό συμβολισμό.'
      },
      {
        h: 'Αρχές Ασφαλούς Ακρόασης',
        p: 'Ένα απλό ημιτονοειδές κύμα μπορεί να κουράσει την ακοή. Στο Καταφύγιο του Mythborn, η στερεοφωνική αντήχηση ναού, οι υποαρμονικές και τα ζωντανά στρώματα βροχής, ωκεανού και ανέμου δημιουργούν μια οργανική εμπειρία. Ξεκινάτε πάντα με χαμηλή ένταση.'
      }
    ],
    faqs: [
      { question: 'Αποτελούν οι συχνότητες ιατρική θεραπεία;', answer: 'Όχι. Οι συχνότητες, οι ήχοι της φύσης και η μουσική διαλογισμού προσφέρουν έναν προσωπικό χώρο ηρεμίας και συγκέντρωσης και δεν αποτελούν ιατρική πράξη.' }
    ]
  }
];

const GUIDES_ES = [
  {
    slug: 'rezonans-kanunu-nedir',
    tag: 'RESONANCIA Y ALINEACIÓN CONSCIENTE',
    readTime: '5 min de lectura',
    title: '¿Qué es la Ley de Resonancia? Corazón, Mente y Alineación Consciente',
    lead: 'Nacida como una metáfora de la física acústica, la resonancia explora cómo las convicciones interiores, el enfoque emocional y las decisiones moldean aquello que construimos.',
    ctaHref: '/es/meditacion-y-frecuencias#ses-mikseri',
    ctaLabel: 'Abrir Estudio de 432 Hz y Resonancia Natural →',
    sections: [
      {
        h: 'La Idea Central en Términos Claros',
        p: 'En física, la resonancia ocurre cuando dos sistemas que vibran a frecuencias compatibles se influyen y potencian mutuamente. Pierre Franckh trasladó esta metáfora a la psicología humana: no percibimos el mundo de forma neutra, sino filtrado por nuestras creencias y hábitos afectivos, tomando decisiones que concuerdan con ese filtro.'
      },
      {
        h: 'Resonancia y la Sombra de Carl Jung',
        p: 'Repetir afirmaciones positivas superficiales (Persona) no basta si en el inconsciente operan temores reprimidos, complejos de insuficiencia o defensas aprendidas (la Sombra). La alineación interior genuina surge cuando lo que desea la mente consciente no contradice aquello que el corazón siente.'
      },
      {
        h: 'Cuatro Pasos Terrenales para la Coherencia Consciente',
        bullets: [
          'Serenar el Sistema Nervioso: Dedica 5 a 10 minutos a la respiración consciente o a paisajes sonoros de 432 Hz; una mente estresada no puede elegir con lucidez.',
          'Identificar Creencias Repetitivas: Escribe los patrones que se repiten en tu vida y observa de qué relatos antiguos se alimentan.',
          'Clarificar la Intención: En lugar de obsesionarte con lo que temes, define lo que deseas edificar con una frase sencilla en presente.',
          'Unir Claridad con Acción: La resonancia no es una espera pasiva; madura mediante decisiones cotidianas coherentes y realistas.'
        ]
      },
      {
        h: 'Límite Ético: Autoconocimiento, No Pensamiento Mágico',
        p: 'El enfoque de la resonancia jamás debe usarse para culpar a las personas de sus dificultades o enfermedades. La madurez ética consiste en aceptar lo incontrolable y responsabilizarnos del único ámbito que podemos gobernar: nuestra atención, nuestros límites y nuestras acciones.'
      }
    ],
    faqs: [
      { question: '¿Es la Ley de Resonancia una ley física o médica literal?', answer: 'La resonancia acústica es física real comprobada. En el desarrollo personal, es un marco metafórico para observar la atención, las creencias y la acción reflexiva.' },
      { question: '¿Basta el pensamiento positivo para resonar?', answer: 'No. Se requiere autoobservación honesta, reconocer los temores inconscientes y respaldar la intención con pasos concretos.' }
    ]
  },
  {
    slug: 'spirituel-yasam-nedir',
    tag: 'GUÍA DE VIDA CONSCIENTE',
    readTime: '6 min de lectura',
    title: '¿Qué es la Vida Espiritual y el Mindfulness Consciente?',
    lead: 'Lejos de dogmas o promesas milagrosas, la vida espiritual es el arte sereno de la presencia, la honestidad interior y la conexión con el sentido de la existencia.',
    ctaHref: '/es/meditacion-y-frecuencias',
    ctaLabel: 'Entrar al Santuario Vivo de Meditación →',
    sections: [
      {
        h: '¿Qué Significa Vivir de Forma Consciente?',
        p: 'Es la capacidad de detenerse ante el ruido cotidiano y las reacciones automáticas para preguntarse: «¿Qué siento ahora mismo y qué tiene valor auténtico para mí?». No depende de ningún credo formal; su esencia es forjar una armonía entre mente, cuerpo y propósito.'
      },
      {
        h: 'Cinco Principios Clave de la Vida Consciente',
        bullets: [
          'Presencia en el Ahora: Salir de los bucles mentales y volver a la respiración y la percepción directa.',
          'Autoobservación Honesta: Mirar con compasión tanto las virtudes como las emociones de la Sombra junguiana.',
          'Conexión con la Naturaleza y el Ritmo: Equilibrar el sistema nervioso mediante acústica natural y ciclos biológicos.',
          'Compasión con Límites Claros: Tratar con amabilidad a los demás preservando la soberanía personal.',
          'Reflexión Continua: Nutrir la claridad interna mediante lectura pausada, diario íntimo y silencio diario.'
        ]
      },
      {
        h: 'Protocolo Diario de 15 Minutos para Empezar',
        bullets: [
          'Minutos 1 a 3: Respiración Cuadrada (4-4-4-4) para sosegar la agitación mental.',
          'Minutos 4 a 10: Meditación con Vela (Trataka) o escucha atenta de la respiración.',
          'Minutos 11 a 15: Registrar un motivo onírico, emoción o sincronicidad en tu diario privado.'
        ]
      },
      {
        h: 'Desmitificación y Rigor Ético',
        p: 'La espiritualidad consciente no consiste en evadirse del mundo ni en rechazar la ayuda médica o psicológica. Es una madurez reflexiva, con los pies en la tierra y un profundo respeto por el libre albedrío humano.'
      }
    ],
    faqs: [
      { question: '¿Cuánto tiempo se requiere al día para comenzar?', answer: 'Bastan de 10 a 15 minutos diarios de respiración consciente, silencio y escritura breve. La constancia es lo primordial.' },
      { question: '¿Requiere pertenecer a alguna doctrina religiosa?', answer: 'No. La atención plena, la respiración y la reflexión sobre el sentido de la vida son universales.' }
    ]
  },
  {
    slug: 'carl-jung-golge-ve-arketip',
    tag: 'PSICOLOGÍA PROFUNDA',
    readTime: '7 min de lectura',
    title: 'Carl Jung: Trabajo con la Sombra, Arquetipos e Individuación',
    lead: 'La psicología analítica de Carl Gustav Jung descifra símbolos, sueños y conflictos internos no como adivinación, sino como un mapa viviente hacia la plenitud psíquica.',
    ctaHref: '/es/jung',
    ctaLabel: 'Abrir Espejo de Arquetipos y Sombra de Carl Jung →',
    sections: [
      {
        h: 'La Persona y la Sombra (Shadow)',
        p: 'La Persona es la máscara social que adoptamos para encajar en el colectivo. La Sombra alberga los impulsos, la ira, la vulnerabilidad o la creatividad relegados al olvido por miedo al rechazo. Cuando no reconocemos nuestra sombra, tendemos a proyectarla como juicio sobre los demás.'
      },
      {
        h: 'Cómo Iniciar el Trabajo con la Sombra',
        bullets: [
          'Detectar Detonantes Emocionales: Anota conductas ajenas que te provoquen un rechazo desmedido.',
          'Preguntar sin Juicio: «¿Qué necesidad o potencia reprimida en mí me está recordando esta reacción?»',
          'Imaginación Activa: Dialoga en un espacio sereno con las imágenes de tus sueños o tus emociones vivas.',
          'Paso Concreto: Honra una necesidad saludable (como descansar o decir «no») mediante un acto cotidiano sencillo.'
        ]
      },
      {
        h: 'Inconsciente Colectivo, Arquetipos y Sincronicidad',
        p: 'Jung denominó Arquetipos a los patrones universales presentes en los mitos y sueños de todas las culturas (el Sabio, la Sombra, Anima/Animus, el Explorador, el Creador, el Sí-Mismo). La Sincronicidad es la coincidencia significativa entre un estado psíquico interior y un suceso externo sin causa mecánica.'
      },
      {
        h: 'El Proceso de Individuación',
        p: 'Individuarse no significa volverse perfecto, sino «completo». Es la integración lúcida de luces y sombras alrededor de un centro consciente (el Sí-Mismo o Self).'
      }
    ],
    faqs: [
      { question: '¿Reemplaza el trabajo con la sombra a la terapia psicológica?', answer: 'No. Es un recurso de autoconocimiento reflexivo y jamás sustituye a la psicoterapia clínica ni a la atención médica.' },
      { question: '¿Qué es la Sincronicidad?', answer: 'Es la coincidencia no causal pero profundamente significativa entre una experiencia interior y un acontecimiento exterior.' }
    ]
  },
  {
    slug: 'meditasyon-ve-nefes-rehberi',
    tag: 'PRÁCTICA MEDITATIVA',
    readTime: '6 min de lectura',
    title: 'Guía de Meditación: Vela (Trataka), Respiración, Theta y 108 Malas',
    lead: 'Cuatro prácticas atemporales explicadas paso a paso para cultivar el sosiego mental sin forzar un silencio artificial.',
    ctaHref: '/es/meditacion-y-frecuencias',
    ctaLabel: 'Probar las Cuatro Salas de Meditación Ahora →',
    sections: [
      {
        h: '1. Meditación con Vela (Trataka)',
        p: 'Trataka consiste en reposar suavemente la mirada en la llama inmóvil de una vela para reducir la dispersión mental. En lugar de luchar contra los pensamientos, basta con reorientar la atención al núcleo radiante del fuego.'
      },
      {
        h: '2. Respiración de Coherencia Interior',
        bullets: [
          'Respiración en Caja 4-4-4-4: 4s inhalar, 4s retener, 4s exhalar, 4s pausa. Ideal para recuperar claridad y compostura.',
          'Respiración 4-7-8 Calmante: Alarga la exhalación para activar la respuesta parasimpática de relajación.',
          'Coherencia Cardíaca 5-5: Flujo rítmico equilibrado que acompasa el pulso cardíaco y pulmonar.'
        ]
      },
      {
        h: '3. Umbral Theta y Relajación Profunda',
        p: 'En el umbral sereno de Theta, el cuerpo afloja toda tensión mientras la consciencia permanece despierta. La exploración corporal progresiva combinada con pulsos binaurales de 6 Hz sostiene este estado de descanso lúcido.'
      },
      {
        h: '4. Contador de 108 Malas y Enfoque',
        p: 'El ciclo de 108 repeticiones ofrece un anclaje táctil. Repetir una afirmación íntima, en tiempo presente y constructiva al compás de suaves cuencos tibetanos apacigua la dispersión.'
      }
    ],
    faqs: [
      { question: '¿Es normal que sigan surgiendo pensamientos al meditar?', answer: 'Sí. El propósito no es vaciar la mente por la fuerza, sino advertir los pensamientos sin juzgarlos y regresar con suavidad al anclaje.' }
    ]
  },
  {
    slug: 'frekans-rezonans-ve-beyin-dalgalari',
    tag: 'FÍSICA DEL SONIDO Y RESONANCIA',
    readTime: '6 min de lectura',
    title: 'Frecuencias, Resonancia y Ondas Cerebrales (Alpha, Theta, Delta, Solfeggio)',
    lead: 'Qué son los Hertz, cómo actúan los pulsos binaurales en estéreo, la diferencia entre 432 Hz y 440 Hz, y pautas de escucha segura.',
    ctaHref: '/es/meditacion-y-frecuencias#ses-mikseri',
    ctaLabel: 'Abrir Estudio de Cimática y Reverberación Estéreo →',
    sections: [
      {
        h: 'Hertz (Hz) y Acústica Elemental',
        p: 'Un hercio mide el número de oscilaciones por segundo de una onda sonora. Los valores bajos suenan graves y los altos más agudos. Tono y volumen (decibelios) son dimensiones físicas diferentes.'
      },
      {
        h: 'Cómo Funcionan los Pulsos Binaurales Estéreo',
        bullets: [
          'Alpha (diferencia de 10 Hz): Favorece la atención serena, la concentración relajada y el flujo creativo.',
          'Theta (diferencia de 6 Hz): Sintoniza con la meditación profunda, el ensueño consciente y la imaginación activa.',
          'Delta (diferencia de 2 Hz): Cadencia lenta orientada a la recuperación nocturna y el reposo somático.',
          'Por Qué son Necesarios Auriculares: Al emitir 432 Hz por el oído izquierdo y 438 Hz por el derecho, el cerebro genera una percepción de pulso de 6 Hz.'
        ]
      },
      {
        h: 'Tonos Solfeggio y 432 Hz frente a 440 Hz',
        p: 'La escala Solfeggio (174 a 963 Hz) posee un valioso simbolismo cultural en el bienestar contemporáneo. La afinación a 432 Hz brinda una calidez acústica distinta a los 440 Hz industriales. Mythborn deslinda con rigor la física acústica del simbolismo metafórico.'
      },
      {
        h: 'Pautas de Escucha Enriquecida y Segura',
        p: 'Las ondas sinusoidales puras pueden fatigar el oído si se prolongan en exceso. En el Santuario de Mythborn se combinan con reverberación de templo, armónicos suaves y capas de lluvia, mar, viento y fuego. Empieza siempre con un volumen moderado.'
      }
    ],
    faqs: [
      { question: '¿Constituyen las frecuencias un tratamiento médico?', answer: 'No. Son recursos de relajación acústica y concentración introspectiva, no actos terapéuticos ni médicos.' }
    ]
  }
];

const GUIDES_AR = [
  {
    slug: 'rezonans-kanunu-nedir',
    tag: 'الرنين والتوافق الواعي',
    readTime: '٥ دقائق قراءة',
    title: 'ما هو قانون الرنين؟ ملخص القلب والعقل والتوافق الداخلي الواعي',
    lead: 'انطلاقاً من فيزياء الاهتزاز كرمزية عميقة، يوضح قانون الرنين كيف تتقاطع قناعاتنا الداخلية الراسخة مع خياراتنا الحياتية ومسارات انتباهنا اليومي.',
    ctaHref: '/ar/meditation-and-frequencies#ses-mikseri',
    ctaLabel: 'فتح استوديو تردد ٤٣٢ هرتز ورنين الطبيعة ←',
    sections: [
      {
        h: 'خلاصة قانون الرنين بعبارات مبسطة',
        p: 'في الفيزياء، يحدث الرنين عندما يتفاعل نظامان متوافقان في التردد فيعزز أحدهما الآخر (مثلما تهتز شوكة رنانة استجابة لأخرى مجاورة). نقل الكاتب بيير فرانك هذا المفهوم إلى علم النفس: فنحن لا نرى العالم بحياد مجرد، بل نراه عبر مرشح معتقداتنا العميقة وعاداتنا العاطفية، مما يجعلنا نميل تلقائياً للخيارات التي تنسجم مع هذا المرشح.'
      },
      {
        h: 'الرنين ومفهوم الظل عند كارل يونغ',
        p: 'ترديد التوكيدات السطحية الإيجابية (القناع الاجتماعي / البيرسونا) لا يكفي بمفرده؛ إذ تظل المخاوف المكبوتة ومشاعر العجز القديمة في اللاوعي (الظل) توجه قراراتنا بصمت. التوافق الحقيقي يبدأ حين يتوقف ما يرجوه العقل عن التناقض مع ما يصدقه القلب في الأعماق.'
      },
      {
        h: 'أربع خطوات عملية للتوافق الواعي في الحياة',
        bullets: [
          'تهدئة الجهاز العصبي: خصص من ٥ إلى ١٠ دقائق يومياً لتمارين التنفس أو ترددات ٤٣٢ هرتز؛ فالعقل المرهق لا يمكنه اتخاذ قرارات صافية.',
          'ملاحظة القناعات المتكررة: دوّن الأنماط التي تتكرر في مسارك واستكشف المعتقدات القديمة التي تغذيها.',
          'توضيح النية بصفاء: بدلاً من التركيز على ما تخشاه، صِغ ما ترغب في بنائه بعبارة بسيطة وواضحة بصيغة الحاضر.',
          'ربط النية بالعمل الواقعي: الرنين ليس انتظاراً سلبياً؛ بل يكتمل بدعم الموقف الداخلي الصافي بخطوات يومية متسقة وواقعية.'
        ]
      },
      {
        h: 'الحدود الأخلاقية: الوعي الذاتي وليس التفكير السحري',
        p: 'لا ينبغي أبداً استخدام منظور الرنين لتحميل الإنسان لوم مصاعب الحياة أو المشاكل الصحية. النظرة الناضجة هي قبول ما لا يمكننا التحكم فيه من ظروف، والتركيز الكامل على ما نملكه: انتباهنا، وحدودنا، وخياراتنا المسؤولة.'
      }
    ],
    faqs: [
      { question: 'هل قانون الرنين قانون فيزيائي حرفي أو ضمانة طبية؟', answer: 'الرنين الصوتي حقيقة فيزيائية مثبتة. أما استخدامه في التطوير الذاتي فهو إطار تأملي رمزي لإدراك الانتباه والمعتقدات والعمل الواعي.' },
      { question: 'هل يكفي التفكير الإيجابي بمفرده لتحقيق التوافق؟', answer: 'كلا. يحتاج الأمر إلى مراقبة ذاتية صادقة، ومواجهة المخاوف غير الواعية، وتتويج النية بخطوات عملية ملموسة.' }
    ]
  },
  {
    slug: 'spirituel-yasam-nedir',
    tag: 'دليل اليقظة والعيش الواعي',
    readTime: '٦ دقائق قراءة',
    title: 'ما هي الحياة الروحية واليقظة الذهنية الواعية؟',
    lead: 'بعيداً عن الأوهام أو الادعاءات الإعجازية، الحياة الروحية هي الفن الهادئ للحضور الصافي، والصدق الداخلي، والاتصال العميق مع الحياة.',
    ctaHref: '/ar/meditation-and-frequencies',
    ctaLabel: 'الدخول إلى ملاذ التأمل الحي ←',
    sections: [
      {
        h: 'ماذا تعني الحياة الروحية الواعية؟',
        p: 'هي القدرة على التوقف وسط ضوضاء المهام وردود الأفعال التلقائية لنسأل بأنفسنا: «ما الذي أشعر به الآن وما الذي يحمل قيمة حقيقية في حياتي؟». لا ترتبط بنظام محدد، بل جوهرها هو بناء توازن هادئ بين العقل والجسد والمعنى.'
      },
      {
        h: 'المبادئ الخمسة الأساسية للعيش الواعي',
        bullets: [
          'الحضور في اللحظة الآنية: التحرر من فخاخ التفكير المستمر والعودة لواقعية التنفس والإدراك الحسي.',
          'الملاحظة الذاتية الصادقة: رؤية جوانب قوتنا وظلنا النفسي دون قسوة أو أحكام جائرة.',
          'الاتصال بإيقاع الطبيعة: استعادة توازن الجهاز العصبي عبر الأصوات الطبيعية كالمطر والرياح والهدوء.',
          'التعاطف مع حدود واضحة: الجمع بين اللطف مع الآخرين والحفاظ على الاستقلالية الشخصية السليمة.',
          'التأمل والتعلم المستمر: تغذية البصيرة يومياً عبر القراءة الهادئة والتدوين والسكينة.'
        ]
      },
      {
        h: 'بروتوكول البداية اليومي لمدة ١٥ دقيقة',
        bullets: [
          'الدقائق ١–٣: تنفس الصندوق المتوازن (٤-٤-٤-٤) لتهدئة استجابة التوتر العصبي.',
          'الدقائق ٤–١٠: تأمل الشمعة (تراتاكا) أو الجلوس الصامت مع التركيز الهادئ على النفس.',
          'الدقائق ١١–١٥: تدوين رمز حلم أو شعور أو تزامن ذي معنى في مذكرتك المحلية الخاصة.'
        ]
      },
      {
        h: 'تصحيح المفاهيم والحدود الأخلاقية',
        p: 'الحياة الواعية ليست هروباً من الواقع، ولا قمعاً للمشاعر الصعبة تحت مسمى «الإيجابية المطلقة»، ولا استغناءً عن العلاج الطبي أو النفسي المتخصص. بل هي نضج واثق يحترم الحقائق العلمية وحرية الإنسان.'
      }
    ],
    faqs: [
      { question: 'كم من الوقت يلزم يومياً للبدء في الممارسة؟', answer: 'يكفي تخصيص من ١٠ إلى ١٥ دقيقة يومياً للتنفس والهدوء والتدوين؛ فالاستمرارية أهم بكثير من طول المدة.' },
      { question: 'هل تتطلب الحياة الروحية الالتزام بمعتقد محدد؟', answer: 'كلا. الحضور والتنفس ومراقبة الذات ممارسات إنسانية جامعة تتجاوز كل الفروق الثقافية.' }
    ]
  },
  {
    slug: 'carl-jung-golge-ve-arketip',
    tag: 'علم نفس الأعماق',
    readTime: '٧ دقائق قراءة',
    title: 'كارل يونغ: عمل الظل، النماذج الأصلية ومسار التفرد',
    lead: 'يقرأ علم نفس الأعماق لكارل غوستاف يونغ الرموز والأحلام والتوترات الداخلية لا كخرافات، بل كخريطة حية لبلوغ الاكتمال والاتزان النفسي.',
    ctaHref: '/ar/jung',
    ctaLabel: 'فتح مرآة النماذج الأصلية والظل لكارل يونغ ←',
    sections: [
      {
        h: 'القناع الاجتماعي والظل (Persona vs. Shadow)',
        p: 'القناع الاجتماعي هو ما نرتديه لنتلاءم مع المجتمع، بينما يحمل الظل الطاقات المكبوتة التي أُبعدت عن وعينا كالاندفاع أو الغضب أو الحساسية الفائقة. يوضح يونغ أن ما نتجاهله في أنفسنا نسقطه لا إرادياً في صورة انتقاد دائم للآخرين.'
      },
      {
        h: 'كيف تبدأ العمل مع الظل الداخلي؟',
        bullets: [
          'رصد المثيرات المفاجئة: دوّن تصرفات الآخرين التي تثير بداخلك حنقاً أو استياءً غير متناسب.',
          'السؤال النزيه دون تجريح: «أي رغبة أو طاقة كبتها في نفسي يذكرني بها هذا الموقف؟»',
          'الخيال النشط (Active Imagination): الجلوس في مساحة هادئة للحوار الصادق مع مشاعرك أو رموز أحلامك.',
          'خطوة عملية صغيرة: تكريم حاجة صحية مهملة (مثل أخذ قسط من الراحة أو قول كلمة «لا») بفعل يومي ملموس.'
        ]
      },
      {
        h: 'اللاوعي الجمعي، النماذج الأصلية والتزامن',
        p: 'أطلق يونغ اسم «النماذج الأصلية» على الأنماط النفسية الكونية المشتركة في أساطير البشرية وأحلامها (الحكيم، الظل، الأنيما/الأنيموس، المكتشف، الخالق، الذات). والتزامن هو التقاطع ذو المغزى العميق بين حالة نفسية داخلية وحدث خارجي دون رابط سببي ميكانيكي.'
      },
      {
        h: 'مسار التفرد النفسي (Individuation)',
        p: 'التفرد ليس وصولاً لكمال مستحيل، بل هو بلوغ «الاكتمال». إنه مسار الاندماج الواعي لجوانب النور والظل معاً حول مركز متوازن وأصيل (الذات).'
      }
    ],
    faqs: [
      { question: 'هل يغني العمل مع الظل عن الاستشارة النفسية؟', answer: 'كلا. هو أداة تثقيفية للتأمل الذاتي، ولا يحل بديلاً عن العلاج النفسي العيادي أو الرعاية الطبية.' },
      { question: 'ما هو التزامن (Synchronicity) عند يونغ؟', answer: 'هو التقاطع ذو المعنى والعميق بين حالة نفسية داخلية وحدث في العالم الخارجي دون رابط سببي مادي.' }
    ]
  },
  {
    slug: 'meditasyon-ve-nefes-rehberi',
    tag: 'ممارسة التأمل العملية',
    readTime: '٦ دقائق قراءة',
    title: 'أنواع التأمل: الشمعة (تراتاكا)، تنفس الذات، ثيتا ومسبحة ١٠٨',
    lead: 'إرشادات عملية خطوة بخطوة لأربع ممارسات عريقة تمنح السكينة والصفاء الذهني دون إكراه العقل على الصمت الإجباري.',
    ctaHref: '/ar/meditation-and-frequencies',
    ctaLabel: 'تجربة غرف التأمل الأربع الآن ←',
    sections: [
      {
        h: '١. تأمل الشمعة (تراتاكا)',
        p: 'تراتاكا هو التثبيت الهادئ للبصر على شعلة شمعة ثابتة لتسكين التشتت البصري والذهني. بدلاً من مقاومة الأفكار، نكتفي بإعادة الانتباه برفق إلى قلب الشعلة المضيء.'
      },
      {
        h: '٢. التنفس والتناغم القلبي',
        bullets: [
          'تنفس الصندوق ٤-٤-٤-٤: شهيق ٤ث، حبس ٤ث، زفير ٤ث، انتظار ٤ث. مثالي للاستقرار والوضوح الذهني.',
          'تنفس ٤-٧-٨ المهدئ: إطالة الزفير لتحفيز الجهاز العصبي الباراسمبثاوي على الاسترخاء العميق.',
          'التناغم القلبي ٥-٥: تدفق إيقاعي متكافئ يوائم نبض القلب مع تردد الرئتين.'
        ]
      },
      {
        h: '٣. عتبة ثيتا والاسترخاء العميق',
        p: 'في مرحلة ثيتا الهادئة بين اليقظة والنعاس، يسترخي الجسد بالكامل بينما يبقى الإدراك مستيقظاً وصافياً. ويدعم هذا الهدوء المسح الجسدي التدريجي مع دقات ٦ هرتز الصوتية.'
      },
      {
        h: '٤. مسبحة ١٠٨ وتكرار النية',
        p: 'يوفر إيقاع مسبحة ١٠٨ حبات مرساة حسية ملموسة للانتباه. تكرار نية إيجابية موجزة بصيغة الحاضر مع كل رنين ناعم يساعد على ترويض شرود الفكر.'
      }
    ],
    faqs: [
      { question: 'هل من الطبيعي توارد الأفكار باستمرار أثناء التأمل؟', answer: 'نعم تماماً. ليس الهدف إفراغ الذهن بالقوة، بل ملاحظة ورود الفكرة دون حكم وإعادة الانتباه برفق إلى المرساة.' }
    ]
  },
  {
    slug: 'frekans-rezonans-ve-beyin-dalgalari',
    tag: 'فيزياء الصوت والرنين',
    readTime: '٦ دقائق قراءة',
    title: 'الترددات والرنين وموجات الدماغ (ألفا، ثيتا، دلتا، وسولفيجيو)',
    lead: 'ما هو الهرتز، وكيف تعمل النبضات الثنائية في سماعات الرأس، وما الفارق بين ٤٣٢ و٤٤٠ هرتز، وما هي معايير الاستماع الآمن؟',
    ctaHref: '/ar/meditation-and-frequencies#ses-mikseri',
    ctaLabel: 'فتح استوديو الترددات وصدى المعبد ←',
    sections: [
      {
        h: 'الهرتز (Hz) وفيزياء الصوت الأساسية',
        p: 'يقيس الهرتز عدد مرات اهتزاز الموجة الصوتية في الثانية. الترددات المنخفضة تبدو رخيمة وعميقة، بينما تبدو المرتفعة حادة ودقيقة. حدة الصوت تختلف تماماً عن شدته المادية (الديسيبل).'
      },
      {
        h: 'كيف تعمل النبضات الثنائية وموجات الدماغ؟',
        bullets: [
          'ألفا (فرق ١٠ هرتز تقريباً): ترتبط باليقظة الهادئة، والتركيز المريح، وحالة التدفق الإبداعي.',
          'ثيتا (فرق ٦ هرتز تقريباً): تواكب التأمل العميق، وبوابة الأحلام، والخيال النشط.',
          'دلتا (فرق ٢ هرتز تقريباً): إيقاع بطيء ومريح يدعم النوم العميق واستعادة الجسد لحيويته.',
          'أهمية سماعات الرأس: حين تستقبل الأذن اليسرى ٤٣٢ هرتز واليمنى ٤٣٨ هرتز، يدرك الدماغ فارقاً إيقاعياً سلساً قدره ٦ هرتز.'
        ]
      },
      {
        h: 'نغمات سولفيجيو ومقارنة ٤٣٢ مع ٤٤٠ هرتز',
        p: 'تحظى متتالية سولفيجيو برمزية ملهمة في ثقافة العافية المعاصرة. ويوفر ضبط الآلات على ٤٣٢ هرتز دفئاً سمعياً مختلفاً عن المعيار القياسي ٤٤٠ هرتز. ويميز Mythborn بوضوح بين الفيزياء المادية والرمزية الثقافية.'
      },
      {
        h: 'مبادئ الاستماع الغني والآمن',
        p: 'الموجات الصوتية المجردة قد ترهق الأذن إذا طال الاستماع إليها. لذلك يدمج ملاذ Mythborn النغمات بصدى صوتي ناعم، وتوافقيات هادئة، وأصوات طبيعية حية كالمطر والمحيط. ابدأ دائماً بمستوى صوت معتدل ومنخفض.'
      }
    ],
    faqs: [
      { question: 'هل الاستماع للترددات يعتبر علاجاً طبياً؟', answer: 'كلا. هي أدوات للاسترخاء الصوتي وتركيز الانتباه، وليست إجراءات علاجية أو بدائل للرعاية الطبية.' }
    ]
  }
];

const GUIDES_BY_LOCALE = {
  tr: GUIDES_TR,
  en: GUIDES_EN,
  el: GUIDES_EL,
  es: GUIDES_ES,
  ar: GUIDES_AR
};

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

export const getGuidesList = (locale = 'tr') => {
  const list = GUIDES_BY_LOCALE[locale] || GUIDES_BY_LOCALE.tr;
  return list.map((g, idx) => ({
    ...g,
    indexLabel: String(idx + 1).padStart(2, '0'),
    category: GUIDE_CATEGORIES[g.slug] || 'mindfulness',
    image: GUIDE_IMAGES[g.slug] || '/images/cinematic/knowledge/celestial-knowledge-library-960.webp'
  }));
};

export const getGuideBySlug = (locale = 'tr', slug = '') =>
  getGuidesList(locale).find((g) => g.slug === slug) || null;

export const getGuideFaqItems = (locale = 'tr', slug = '') => {
  const g = getGuideBySlug(locale, slug);
  if (g && Array.isArray(g.faqs)) return g.faqs;
  return {
    tr: [
      { question: 'Mythborn rehberleri bilimsel ve etik sınırları koruyor mu?', answer: 'Evet. Tüm farkındalık, Carl Jung psikolojisi, meditasyon ve ses rezonansı rehberleri şeffaf biçimde eğitim ve kişisel tefekkür amaçlıdır; tıbbi veya klinik iddia içermez.' },
      { question: 'Yeni başlayan biri hangi sırayla okumalı?', answer: 'Önce Meditasyon & Nefes rehberiyle zihinsel dinginliği kurup ardından Carl Jung Gölge Çalışması ve Rezonans Kanunu özetine geçmeniz en verimli sıradır.' },
      { question: 'Rehberlerdeki pratikleri sitede doğrudan uygulayabilir miyim?', answer: 'Evet. Her rehberin sonunda ilgili canlı araca (Meditasyon & Frekans Stüdyosu veya Carl Jung Arketip Aynası) tek tıkla geçebilirsiniz.' }
    ],
    en: [
      { question: 'Do Mythborn guides respect scientific and ethical boundaries?', answer: 'Yes. All mindfulness, Carl Jung depth psychology, meditation and sound resonance guides are strictly educational and reflective with zero medical claims.' },
      { question: 'What is the recommended reading order for beginners?', answer: 'Start with the Meditation & Breath guide to establish calm focus, then continue with Carl Jung Shadow Work and the Law of Resonance summary.' },
      { question: 'Can I practice these methods directly on Mythborn?', answer: 'Yes. Each guide links directly to our interactive Meditation & Frequency Studio or the Carl Jung Archetype Mirror.' }
    ],
    el: [
      { question: 'Διατηρούν οι οδηγοί του Mythborn τα επιστημονικά και ηθικά όρια;', answer: 'Ναι. Όλοι οι οδηγοί για την ενσυνειδητότητα, την ψυχολογία του Carl Jung, τον διαλογισμό και τον συντονισμό ήχου έχουν αποκλειστικά εκπαιδευτικό και αναστοχαστικό χαρακτήρα, χωρίς ιατρικούς ισχυρισμούς.' },
      { question: 'Ποια είναι η προτεινόμενη σειρά ανάγνωσης για αρχάριους;', answer: 'Ξεκινήστε με τον οδηγό Διαλογισμού & Αναπνοής για ηρεμία, και συνεχίστε με την Εργασία με τη Σκιά κατά τον Carl Jung και τον Νόμο του Συντονισμού.' },
      { question: 'Μπορώ να εφαρμόσω τις πρακτικές απευθείας στον ιστότοπο;', answer: 'Ναι. Στο τέλος κάθε οδηγού υπάρχει απευθείας σύνδεσμος προς το αντίστοιχο διαδραστικό εργαλείο (Στούντιο Διαλογισμού ή Καθρέφτη Αρχετύπων).' }
    ],
    es: [
      { question: '¿Respetan las guías de Mythborn los límites científicos y éticos?', answer: 'Sí. Todas las guías sobre mindfulness, psicología de Carl Jung, meditación y resonancia acústica son rigurosamente educativas y reflexivas, sin afirmaciones médicas.' },
      { question: '¿Cuál es el orden de lectura sugerido para principiantes?', answer: 'Empieza con la guía de Meditación y Respiración para asentar la serenidad mental, y continúa con el Trabajo con la Sombra de Carl Jung y la Ley de Resonancia.' },
      { question: '¿Puedo experimentar las prácticas directamente en el sitio?', answer: 'Sí. Al pie de cada guía encontrarás acceso directo al Santuario de Meditación o al Espejo de Arquetipos de Carl Jung.' }
    ],
    ar: [
      { question: 'هل تحترم أدلة Mythborn المعايير العلمية والحدود الأخلاقية؟', answer: 'نعم بكل تأكيد. جميع أدلة اليقظة وعلم نفس كارل يونغ والتأمل ورنين الصوت مخصصة للتثقيف والتأمل الذاتي دون أي ادعاءات طبية أو علاجية.' },
      { question: 'ما هو الترتيب الموصى به للمبتدئين في القراءة؟', answer: 'يُفضل البدء بدليل التأمل والتنفس لتحقيق الهدوء النفسي، ثم الانتقال إلى دليل عمل الظل لكارل يونغ وملخص قانون الرنين.' },
      { question: 'هل يمكنني تطبيق هذه الممارسات مباشرة على المنصة؟', answer: 'نعم. يرتبط كل دليل في خاتمته بالأداة التفاعلية الحية المناسبة (استوديو التأمل والترددات أو مرآة نماذج كارل يونغ الأصلية).' }
    ]
  }[locale] || [
    { question: 'Mythborn Guides Overview', answer: 'Educational and introspective library.' }
  ];
};

const GUIDES_UI = {
  tr: {
    heroEyebrow: 'BİLİNÇ & FARKINDALIK AKADEMİSİ · EDİTÖRYAL MONOGRAFİLER',
    heroH1: 'Bilinç, Jung & Farkındalık Rehberleri.',
    heroLead: 'Rezonans Kanunu, spiritüel yaşam ilkeleri, Carl Jung gölge çalışması ve ses fiziği üzerine rafine kütüphane.',
    telemetryGuides: '05 Derinlik Rehberi',
    telemetryReading: '30 dk Toplam Okuma',
    telemetryEthics: 'Reklamsız & Etik Sınırlar',
    kicker: 'KÜRATÖRLÜ ARŞİV',
    sectionH2: 'Konuya Göre Keşfet',
    filterAria: 'Rehber kategorileri',
    filters: [
      { key: 'all', label: 'Tüm Rehberler' },
      { key: 'resonance', label: 'Rezonans & Ses' },
      { key: 'psychology', label: 'Derinlik Psikolojisi' },
      { key: 'mindfulness', label: 'Meditasyon & Farkındalık' }
    ],
    featuredMonograph: 'ÖNE ÇIKAN MONOGRAFİ',
    readSummary: 'Özet Rehberi Oku',
    tryInStudio: 'Stüdyoda Deneyimle',
    exploreGuide: 'Rehberi İncele',
    pathKicker: 'ÖNERİLEN ÇALIŞMA ROTASI',
    pathH2: 'Adım Adım Bilinç ve İçsel Uyum',
    pathSub: 'Kütüphaneyi dağınık değil, sinir sistemini önce sakinleştirip sonra derinleşen yapılandırılmış bir sırayla deneyimleyin.',
    pathSteps: (sanctuaryHref, jungHref, guideBaseHref) => [
      { num: 'I', tag: 'SİNİR SİSTEMİ & DİNGİNLİK', title: 'Önce Zihni Sakinleştir', desc: 'Mum meditasyonu (Trataka), kutu nefesi ve 432 Hz stüdyo frekanslarıyla içsel gürültüyü azalt.', href: sanctuaryHref, cta: 'Stüdyoyu Aç →' },
      { num: 'II', tag: 'DERİNLİK PSİKOLOJİSİ', title: 'Gölge ve Arketipleri Tanı', desc: 'Carl Jung’un bilinç dışı haritasıyla tekrarlayan tetikleyicileri ve içsel kalıpları dürüstçe gözlemle.', href: jungHref, cta: 'Jung Aynasını Aç →' },
      { num: 'III', tag: 'BİLİNÇLİ UYUM', title: 'Niyeti Somut Eyleme Dönüştür', desc: 'Rezonans Kanunu özetiyle netleşen içsel tutumu günlük küçük seçimlerle destekle.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'Özeti Oku →' }
    ],
    faqKicker: 'MERAK EDİLENLER',
    faqH2: 'Sıkça Sorulan Sorular',
    faqSub: 'Rehberlerin yapısı, okuma önerileri ve etik yaklaşımımız hakkında merak edilenler.',
    breadcrumbHome: 'Ana Sayfa',
    breadcrumbGuides: 'Rehberler',
    faqTitle: 'Kısa Sorular & Etik Netlik',
    allGuidesBtn: '← Tüm Rehberler',
    continueKicker: 'OKUMAYA DEVAM ET',
    continueH2: 'Sıradaki Önerilen Rehberler',
    readGuideBtn: 'Rehberi Oku'
  },
  en: {
    heroEyebrow: 'CONSCIOUSNESS & AWARENESS ACADEMY · EDITORIAL MONOGRAPHS',
    heroH1: 'Consciousness, Jung & Awareness Guides.',
    heroLead: 'A curated library on the Law of Resonance, mindful living, Carl Jung shadow work and acoustic physics.',
    telemetryGuides: '05 In-Depth Guides',
    telemetryReading: '30 min Total Reading',
    telemetryEthics: 'Ad-Free & Ethical Boundaries',
    kicker: 'CURATED ARCHIVE',
    sectionH2: 'Explore by Discipline',
    filterAria: 'Guide categories',
    filters: [
      { key: 'all', label: 'All Guides' },
      { key: 'resonance', label: 'Resonance & Sound' },
      { key: 'psychology', label: 'Depth Psychology' },
      { key: 'mindfulness', label: 'Meditation & Mindful Living' }
    ],
    featuredMonograph: 'FEATURED MONOGRAPH',
    readSummary: 'Read Summary Guide',
    tryInStudio: 'Try in Studio',
    exploreGuide: 'Explore Guide',
    pathKicker: 'CURATED PRACTICE ROUTE',
    pathH2: 'Step-by-Step Consciousness & Grounded Wholeness',
    pathSub: 'Experience the library as a coherent progression: ground the nervous system first, explore depth psychology, and translate clarity into action.',
    pathSteps: (sanctuaryHref, jungHref, guideBaseHref) => [
      { num: 'I', tag: 'NERVOUS SYSTEM CALM', title: 'Quiet the Mental Loops First', desc: 'Settle reactive stress through candle gazing (Trataka), box breathing and immersive 432 Hz frequencies.', href: sanctuaryHref, cta: 'Enter Studio →' },
      { num: 'II', tag: 'DEPTH PSYCHOLOGY', title: 'Recognize the Shadow & Archetypes', desc: 'Observe recurring emotional triggers honestly through Carl Jung’s map of the unconscious.', href: jungHref, cta: 'Open Jung Mirror →' },
      { num: 'III', tag: 'CONSCIOUS ALIGNMENT', title: 'Pair Clarity with Action', desc: 'Read the Law of Resonance summary to unite clear inner intention with grounded daily choices.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'Read Summary →' }
    ],
    faqKicker: 'COMMON QUESTIONS',
    faqH2: 'Frequently Asked Questions',
    faqSub: 'Key insights on methodology, reading progression and our non-commercial ethical boundaries.',
    breadcrumbHome: 'Home',
    breadcrumbGuides: 'Guides',
    faqTitle: 'Quick Questions & Ethical Clarity',
    allGuidesBtn: '← All Guides',
    continueKicker: 'CONTINUE READING',
    continueH2: 'Recommended Next Guides',
    readGuideBtn: 'Read Guide'
  },
  el: {
    heroEyebrow: 'ΑΚΑΔΗΜΙΑ ΣΥΝΕΙΔΗΣΗΣ & ΕΠΙΓΝΩΣΗΣ · ΕΚΔΟΤΙΚΕΣ ΜΟΝΟΓΡΑΦΙΕΣ',
    heroH1: 'Οδηγοί Συνείδησης, Jung & Ενσυνειδητότητας.',
    heroLead: 'Επιμελημένη βιβλιοθήκη για τον Νόμο του Συντονισμού, τη συνειδητή ζωή, την εργασία με τη σκιά του Carl Jung και την ακουστική φυσική.',
    telemetryGuides: '05 Αναλυτικοί Οδηγοί',
    telemetryReading: '30 λεπτά Συνολική Ανάγνωση',
    telemetryEthics: 'Χωρίς Διαφημίσεις & Ηθικά Όρια',
    kicker: 'ΕΠΙΜΕΛΗΜΕΝΟ ΑΡΧΕΙΟ',
    sectionH2: 'Εξερεύνηση ανά Θεματική',
    filterAria: 'Κατηγορίες οδηγών',
    filters: [
      { key: 'all', label: 'Όλοι οι Οδηγοί' },
      { key: 'resonance', label: 'Συντονισμός & Ήχος' },
      { key: 'psychology', label: 'Ψυχολογία του Βάθους' },
      { key: 'mindfulness', label: 'Διαλογισμός & Ενσυνειδητότητα' }
    ],
    featuredMonograph: 'ΠΡΟΤΕΙΝΟΜΕΝΗ ΜΟΝΟΓΡΑΦΙΑ',
    readSummary: 'Ανάγνωση Συνοπτικού Οδηγού',
    tryInStudio: 'Δοκιμή στο Στούντιο',
    exploreGuide: 'Εξερεύνηση Οδηγού',
    pathKicker: 'ΠΡΟΤΕΙΝΟΜΕΝΗ ΔΙΑΔΡΟΜΗ ΜΕΛΕΤΗΣ',
    pathH2: 'Βήμα προς Βήμα Συνείδηση & Εσωτερική Αρμονία',
    pathSub: 'Βιώστε τη βιβλιοθήκη με δομημένη σειρά: ηρεμήστε πρώτα το νευρικό σύστημα και εμβαθύνετε σταδιακά στην ψυχολογία του βάθους.',
    pathSteps: (sanctuaryHref, jungHref, guideBaseHref) => [
      { num: 'I', tag: 'ΗΡΕΜΙΑ ΝΕΥΡΙΚΟΥ ΣΥΣΤΗΜΑΤΟΣ', title: 'Κατευνάστε Πρώτα τον Νου', desc: 'Μειώστε τον εσωτερικό θόρυβο με διαλογισμό κεριού (Trataka), τετράγωνη αναπνοή και συχνότητες 432 Hz.', href: sanctuaryHref, cta: 'Άνοιγμα Στούντιο →' },
      { num: 'II', tag: 'ΨΥΧΟΛΟΓΙΑ ΤΟΥ ΒΑΘΟΥΣ', title: 'Αναγνωρίστε τη Σκιά & τα Αρχέτυπα', desc: 'Παρατηρήστε με ειλικρίνεια τα επαναλαμβανόμενα μοτίβα μέσα από τον χάρτη του ασυνειδήτου του Carl Jung.', href: jungHref, cta: 'Καθρέφτης Jung →' },
      { num: 'III', tag: 'ΕΝΣΥΝΕΙΔΗΤΗ ΕΥΘΥΓΡΑΜΜΙΣΗ', title: 'Μετατρέψτε την Πρόθεση σε Πράξη', desc: 'Συνδέστε την εσωτερική διαύγεια με σταθερές καθημερινές επιλογές διαβάζοντας τον Νόμο του Συντονισμού.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'Ανάγνωση Σύνοψης →' }
    ],
    faqKicker: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ',
    faqH2: 'Συχνές Ερωτήσεις',
    faqSub: 'Βασικές απαντήσεις για τη μεθοδολογία, τη σειρά ανάγνωσης και τα διαφανή ηθικά μας όρια.',
    breadcrumbHome: 'Αρχική',
    breadcrumbGuides: 'Οδηγοί',
    faqTitle: 'Σύντομες Ερωτήσεις & Ηθική Σαφήνεια',
    allGuidesBtn: '← Όλοι οι Οδηγοί',
    continueKicker: 'ΣΥΝΕΧΙΣΤΕ ΤΗΝ ΑΝΑΓΝΩΣΗ',
    continueH2: 'Επόμενοι Προτεινόμενοι Οδηγοί',
    readGuideBtn: 'Ανάγνωση Οδηγού'
  },
  es: {
    heroEyebrow: 'ACADEMIA DE CONSCIENCIA Y ATENCIÓN PLENA · MONOGRAFÍAS EDITORIALES',
    heroH1: 'Guías de Consciencia, Jung y Mindfulness.',
    heroLead: 'Una biblioteca selecta sobre la Ley de Resonancia, vida consciente, trabajo con la sombra de Carl Jung y física acústica.',
    telemetryGuides: '05 Guías en Profundidad',
    telemetryReading: '30 min de Lectura Total',
    telemetryEthics: 'Sin Publicidad y con Rigor Ético',
    kicker: 'ARCHIVO CURADO',
    sectionH2: 'Explorar por Disciplina',
    filterAria: 'Categorías de guías',
    filters: [
      { key: 'all', label: 'Todas las Guías' },
      { key: 'resonance', label: 'Resonancia y Sonido' },
      { key: 'psychology', label: 'Psicología Profunda' },
      { key: 'mindfulness', label: 'Meditación y Vida Consciente' }
    ],
    featuredMonograph: 'MONOGRAFÍA DESTACADA',
    readSummary: 'Leer Guía Resumida',
    tryInStudio: 'Probar en el Estudio',
    exploreGuide: 'Explorar Guía',
    pathKicker: 'RUTA DE PRÁCTICA RECOMENDADA',
    pathH2: 'Paso a Paso hacia la Consciencia y Plenitud Interior',
    pathSub: 'Recorre la biblioteca de forma estructurada: sosiega primero el sistema nervioso, comprende la psicología profunda y traduce la claridad en acción.',
    pathSteps: (sanctuaryHref, jungHref, guideBaseHref) => [
      { num: 'I', tag: 'SERENIDAD NERVIOSA', title: 'Calmar Primero los Bucles Mentales', desc: 'Reduce el estrés reactivo con meditación con vela (Trataka), respiración en caja y frecuencias de 432 Hz.', href: sanctuaryHref, cta: 'Abrir Estudio →' },
      { num: 'II', tag: 'PSICOLOGÍA PROFUNDA', title: 'Reconocer la Sombra y los Arquetipos', desc: 'Observa con honestidad los detonantes repetitivos mediante el mapa del inconsciente de Carl Jung.', href: jungHref, cta: 'Espejo de Jung →' },
      { num: 'III', tag: 'ALINEACIÓN CONSCIENTE', title: 'Traducir la Claridad en Acción', desc: 'Respalda una actitud interna despejada con decisiones cotidianas fundamentadas en la Ley de Resonancia.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'Leer Resumen →' }
    ],
    faqKicker: 'PREGUNTAS FRECUENTES',
    faqH2: 'Preguntas Frecuentes',
    faqSub: 'Respuestas esenciales sobre nuestra metodología, orden de lectura sugerido y límites éticos.',
    breadcrumbHome: 'Inicio',
    breadcrumbGuides: 'Guías',
    faqTitle: 'Preguntas Clave y Claridad Ética',
    allGuidesBtn: '← Todas las Guías',
    continueKicker: 'CONTINUAR LEYENDO',
    continueH2: 'Próximas Guías Recomendadas',
    readGuideBtn: 'Leer Guía'
  },
  ar: {
    heroEyebrow: 'أكاديمية الوعي واليقظة الذهنية · دراسات افتتاحية معمقة',
    heroH1: 'أدلة الوعي واليقظة وعلم نفس يونغ.',
    heroLead: 'مكتبة رصينة مختارة تتناول قانون الرنين، وأسس الحياة الواعية، وعمل الظل عند كارل يونغ، وفيزياء الصوت الاهتزازية.',
    telemetryGuides: '٠٥ أدلة معمقة',
    telemetryReading: '٣٠ دقيقة قراءة شاملة',
    telemetryEthics: 'خالية من الإعلانات وبمعايير أخلاقية',
    kicker: 'أرشيف مختار',
    sectionH2: 'استكشاف حسب المجال',
    filterAria: 'أقسام الأدلة',
    filters: [
      { key: 'all', label: 'جميع الأدلة' },
      { key: 'resonance', label: 'الرنين والصوت' },
      { key: 'psychology', label: 'علم نفس الأعماق' },
      { key: 'mindfulness', label: 'التأمل والحياة الواعية' }
    ],
    featuredMonograph: 'دراسة افتتاحية بارزة',
    readSummary: 'قراءة ملخص الدليل',
    tryInStudio: 'تجربة في الاستوديو',
    exploreGuide: 'استكشاف الدليل',
    pathKicker: 'مسار الممارسة المقترح',
    pathH2: 'خطوة بخطوة نحو الوعي والسكينة الداخلية',
    pathSub: 'عِش تجربة المكتبة بتدرج منظم: ابدأ بتهدئة الجهاز العصبي أولاً، ثم تعمق في فهم علم النفس، وترجم الصفاء إلى خطوات عملية.',
    pathSteps: (sanctuaryHref, jungHref, guideBaseHref) => [
      { num: 'I', tag: 'سكينة الجهاز العصبي', title: 'تهدئة التفكير التفاعلي أولاً', desc: 'خفف التوتر عبر تأمل الشمعة (تراتاكا)، وتنفس الصندوق، والترددات المحيطية بتردد ٤٣٢ هرتز.', href: sanctuaryHref, cta: 'فتح الاستوديو ←' },
      { num: 'II', tag: 'علم نفس الأعماق', title: 'إدراك الظل والنماذج الأصلية', desc: 'راقب المثيرات الانفعالية المتكررة بصدق مستعيناً بخريطة اللاوعي لكارل يونغ.', href: jungHref, cta: 'مرآة يونغ ←' },
      { num: 'III', tag: 'التوافق الواعي', title: 'تحويل النية إلى فعل ملموس', desc: 'ادعم الموقف الداخلي الصافي بخيارات يومية واقعية من خلال ملخص قانون الرنين.', href: `${guideBaseHref}/rezonans-kanunu-nedir`, cta: 'قراءة الملخص ←' }
    ],
    faqKicker: 'أسئلة شائعة',
    faqH2: 'الأسئلة الأكثر تداولاً',
    faqSub: 'إيضاحات أساسية حول المنهجية، وترتيب القراءة المقترح، وحدودنا الأخلاقية الشفافة.',
    breadcrumbHome: 'الرئيسية',
    breadcrumbGuides: 'الأدلة',
    faqTitle: 'أسئلة سريعة ووضوح أخلاقي',
    allGuidesBtn: '← جميع الأدلة',
    continueKicker: 'متابعة القراءة',
    continueH2: 'الأدلة التالية المقترحة',
    readGuideBtn: 'قراءة الدليل'
  }
};

export const renderGuidesHubView = ({ locale = 'tr', guideBaseHref = '/rehber' } = {}) => {
  const ui = GUIDES_UI[locale] || GUIDES_UI.tr;
  const homeHref = locale === 'tr' ? '/' : locale === 'el' ? '/gr' : `/${locale}`;
  const sanctuaryHref = locale === 'tr' ? '/meditasyon-ve-frekans' : locale === 'el' ? '/gr/dialogismos-kai-sychnotites' : locale === 'es' ? '/es/meditacion-y-frecuencias' : locale === 'ar' ? '/ar/meditation-and-frequencies' : '/en/meditation-and-frequencies';
  const jungHref = locale === 'tr' ? '/jung' : locale === 'el' ? '/gr/jung' : locale === 'es' ? '/es/jung' : locale === 'ar' ? '/ar/jung' : '/en/jung';
  const items = getGuidesList(locale);
  const [featured, ...rest] = items;
  const hubFaqs = getGuideFaqItems(locale, '');
  const pathSteps = ui.pathSteps(sanctuaryHref, jungHref, guideBaseHref);

  return `
  <div class="sanc-page guides-elite-page">
    <section class="sanc-hero sanc-hero-fullbleed guides-elite-hero">
      <img class="sanc-hero-bg" src="/images/cinematic/knowledge/celestial-knowledge-library-1440.webp" alt="" width="1440" height="900" fetchpriority="high" decoding="async" aria-hidden="true">
      <div class="astro-container sanc-center sanc-hero-content">
        <span class="sanc-eyebrow">✦ ${ui.heroEyebrow}</span>
        <h1 class="sanc-h1">${ui.heroH1}</h1>
        <p class="sanc-lead">${ui.heroLead}</p>
        <div class="guides-hero-telemetry" aria-label="Library overview">
          <span>✦ ${ui.telemetryGuides}</span>
          <span class="guides-tel-dot" aria-hidden="true">·</span>
          <span>${ui.telemetryReading}</span>
          <span class="guides-tel-dot" aria-hidden="true">·</span>
          <span>${ui.telemetryEthics}</span>
        </div>
      </div>
    </section>

    <section class="sanc-section guides-catalog-section">
      <div class="astro-container">
        <div class="guides-toolbar">
          <div class="guides-toolbar-head">
            <span class="sanc-kicker">✦ ${ui.kicker}</span>
            <h2 class="guides-section-h2">${ui.sectionH2}</h2>
          </div>
          <div class="guides-filter-bar" role="tablist" aria-label="${ui.filterAria}">
            ${ui.filters.map((f, i) => `
              <button type="button" class="guides-filter-pill${i === 0 ? ' is-active' : ''}" data-guide-filter="${f.key}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}">${f.label}</button>
            `).join('')}
          </div>
        </div>

        ${featured ? `
        <article class="guide-featured-card guide-elite-featured" data-guide-item data-guide-cat="${featured.category}" data-spotlight>
          <a class="guide-featured-media" href="${guideBaseHref}/${featured.slug}">
            <img src="${featured.image}" alt="${featured.title}" loading="eager" decoding="async">
          </a>
          <div class="guide-featured-body">
            <div>
              <div class="guide-meta-row">
                <span class="guide-featured-kicker">✦ ${ui.featuredMonograph} · ${featured.tag}</span>
                <span class="guide-read-pill">${featured.readTime}</span>
              </div>
              <h2><a href="${guideBaseHref}/${featured.slug}">${featured.title}</a></h2>
              <div class="guide-gold-rule" aria-hidden="true"></div>
              <p>${featured.lead}</p>
            </div>
            <div class="guide-featured-actions">
              <a class="sanc-btn-gold" href="${guideBaseHref}/${featured.slug}">
                <span>${ui.readSummary}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a class="guide-inline-cta" href="${featured.ctaHref}">
                <span>${ui.tryInStudio}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>` : ''}

        <div class="guides-hub-grid guides-elite-grid">
          ${rest.map((g) => `
            <article class="guide-hub-card mb27-card-has-media guide-elite-card" data-guide-item data-guide-cat="${g.category}" data-spotlight>
              <a class="mb27-card-media" href="${guideBaseHref}/${g.slug}">
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
                  <span>${ui.exploreGuide}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Reading Path Section -->
    <section class="sanc-section guides-path-section">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${ui.pathKicker}</span>
          <h2>${ui.pathH2}</h2>
          <p>${ui.pathSub}</p>
        </div>
        <div class="guides-path-grid">
          ${pathSteps.map((step) => `
            <article class="guides-path-card" data-spotlight>
              <span class="guides-path-tag">✦ ${step.tag}</span>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
              <a class="guides-path-link" href="${step.href}"><span>${step.cta}</span> <span aria-hidden="true">→</span></a>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderReadingCuration(locale, { id: 'kulliyat' })}

    <!-- FAQ Section -->
    <section class="sanc-section guides-faq-section">
      <div class="astro-container">
        <div class="sanc-center sanc-head">
          <span class="sanc-eyebrow">✦ ${ui.faqKicker}</span>
          <h2>${ui.faqH2}</h2>
          <p>${ui.faqSub}</p>
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
  const ui = GUIDES_UI[locale] || GUIDES_UI.tr;
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
          <a href="${homeHref}">${ui.breadcrumbHome}</a>
          <span aria-hidden="true">›</span>
          <a href="${guideBaseHref}">${ui.breadcrumbGuides}</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${g.tag}</span>
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
            <h2>${ui.faqTitle}</h2>
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
            <a class="sanc-btn-ghost" href="${guideBaseHref}">${ui.allGuidesBtn}</a>
          </div>
        </article>

        ${related.length ? `
        <div class="guides-related-wrap">
          <div class="guides-related-head">
            <span class="sanc-kicker">✦ ${ui.continueKicker}</span>
            <h2>${ui.continueH2}</h2>
          </div>
          <div class="guides-hub-grid guides-elite-grid">
            ${related.map((r) => `
              <article class="guide-hub-card mb27-card-has-media guide-elite-card" data-spotlight>
                <a class="mb27-card-media" href="${guideBaseHref}/${r.slug}">
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
                    <span>${ui.readGuideBtn}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>` : ''}

        ${renderReadingCuration(locale, { id: 'kulliyat-makale' })}
      </div>
    </section>
  </div>
  <script>
    (function(){
      var bar = document.getElementById('guide-read-progress');
      if (!bar) return;
      window.addEventListener('scroll', function(){
        var h = document.documentElement.scrollHeight - window.innerHeight;
        var p = h > 0 ? (window.scrollY / h) * 100 : 0;
        bar.style.width = Math.min(100, Math.max(0, p)) + '%';
      }, { passive: true });
    })();
  </script>
  <script src="/sanctuary-audio.js" defer></script>
  `;
};
