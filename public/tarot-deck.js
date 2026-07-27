(()=>{
const major=[
['Deli','yeni başlangıç, özgürlük ve bilinmeyene güven','Önünde yeni bir yol açılıyor. Her ayrıntıyı bilmeden ilerlemek korkutucu olabilir; yine de merakın ve cesaretin seni canlı tutuyor.','Plansızlık ile özgürlüğü karıştırma. Risk alırken temel güvenliğini koru.'],
['Büyücü','irade, beceri ve yaratım gücü','Elindeki kaynaklar düşündüğünden daha güçlü. Fikirlerini somutlaştırmak için doğru zamanda doğru araçları bir araya getirebilirsin.','Yeteneklerini göstermek yerine yalnızca konuşmak enerjiyi dağıtabilir.'],
['Başrahibe','sezgi, sırlar ve içsel bilgi','Cevap dışarıdaki gürültüde değil, sessizlikte belirginleşiyor. Henüz açıklanmamış bir dinamik olabilir.','Sezgiyi korku ve varsayımla karıştırmamaya dikkat et.'],
['İmparatoriçe','bereket, yaratıcılık ve bakım','Emek verdiğin bir konu büyüme potansiyeli taşıyor. Üretmek, beslemek ve değerini kabul etmek önünü açar.','Başkalarına fazla verip kendi ihtiyaçlarını ihmal etme.'],
['İmparator','düzen, sınırlar ve liderlik','Hayatında yapı kurma ve kontrolü bilinçli biçimde ele alma zamanı. Net planlar güven kazandırır.','Kontrol ihtiyacının katılığa dönüşmesine izin verme.'],
['Aziz','öğreti, gelenek ve manevi rehberlik','Deneyimli birinden öğrenmek veya sağlam bir yönteme dönmek işini kolaylaştırabilir.','Sırf alışılmış diye sana uymayan kurallara teslim olma.'],
['Aşıklar','seçim, bağ ve değer uyumu','Kalbin ile aklın aynı yönde buluşması gereken bir karar gündemde. Seçimin değerlerini görünür kılacak.','Başkalarının beklentisine göre karar vermek içsel gerilim yaratır.'],
['Savaş Arabası','yön, kararlılık ve ilerleme','Dağınık güçlerini tek hedefte topladığında hızlı ilerleyebilirsin. İrade ve odak belirleyici olacak.','Hız uğruna duygularını ve çevrendeki işaretleri ezip geçme.'],
['Güç','özdenetim, sabır ve cesaret','Gerçek avantajın baskı kurmak değil, sakin kalmak ve duygularını bilinçli yönetmek.','Bastırılmış öfkenin birikmesine izin verme.'],
['Ermiş','içe dönüş, bilgelik ve arayış','Kendi yönünü yeniden duymak için dış dünyanın hızından biraz uzaklaşman gerekebilir.','Yalnızlık ihtiyacını insanlardan tamamen kopmaya dönüştürme.'],
['Kader Çarkı','değişim, döngü ve zamanlama','Koşullar hareketleniyor. Plan dışı bir gelişme yeni bir fırsat taşıyabilir.','Her şeyi şansa bırakmak veya değişime direnmek aynı döngüyü tekrarlar.'],
['Adalet','denge, gerçek ve sonuç','Kararlarının sonuçlarıyla yüzleşme ve olaylara tarafsız bakma zamanı. Ayrıntılar önemlidir.','Yalnızca haklı çıkmaya çalışmak çözümü görmeni engelleyebilir.'],
['Asılan Adam','bekleyiş, teslimiyet ve bakış açısı','Zorlayarak ilerleyemediğin konuda yaklaşımını değiştirmek yeni bir kapı açabilir.','Gereğinden fazla beklemek ve kendini feda etmek ilerlemeyi durdurur.'],
['Ölüm','dönüşüm, kapanış ve yeniden doğuş','Eski bir düzen tamamlanıyor. Bu fiziksel ölüm değil, işlevini yitirmiş biçimin bırakılmasıdır.','Biten olana korku nedeniyle tutunmak acıyı uzatabilir.'],
['Denge','uyum, şifa ve ölçülülük','Aşırılıkları azaltıp sürdürülebilir bir ritim kurduğunda iyileşme hızlanır.','Sabırsızlık doğal süreci bozabilir.'],
['Şeytan','bağımlılık, arzu ve gölge','Seni tutan bağın gerçek bir zorunluluk mı yoksa alışkanlık mı olduğunu görme zamanı.','Haz, korku veya kontrol uğruna özgürlüğünden vazgeçme.'],
['Kule','ani farkındalık, yıkım ve özgürleşme','Sağlam görünmeyen bir yapı sarsılabilir. Açığa çıkan gerçek uzun vadede seni özgürleştirir.','Panikle hareket etmek gereksiz kayıp yaratabilir.'],
['Yıldız','umut, ilham ve yenilenme','İçini yoran bir konuda yön duygun yeniden belirginleşiyor. Küçük ama gerçek ihtimali fark et.','Yalnızca umut ederek hareketsiz kalma; niyetini davranışa çevir.'],
['Ay','sezgi, belirsizlik ve bilinçaltı','Her şey henüz görünür değil. Sezgini dinle fakat varsayımlarını gerçek sanma.','Korkuların ve zihinsel senaryoların kararlarını bulanıklaştırmasına izin verme.'],
['Güneş','başarı, canlılık ve açıklık','Görünür olma, üretme ve açık iletişim kurma enerjisi yükseliyor. Emeğin karşılık bulabilir.','Aşırı özgüvenle ayrıntıları kaçırma.'],
['Mahkeme','uyanış, çağrı ve hesaplaşma','Eski bir konu yeniden önüne gelebilir. Bu kez daha bilinçli bir seçim yapma fırsatın var.','Geçmiş suçluluğuna takılı kalmak yenilenmeyi engeller.'],
['Dünya','tamamlanma, bütünlük ve yeni döngü','Uzun süredir emek verdiğin süreç olgunlaşıyor. Bir dönemi kapatmak yeni alan açar.','Bitmesi gereken şeye alışkanlık nedeniyle tutunma.']
].map((x,i)=>({id:`major-${i}`,name:x[0],arcana:'Büyük Arkana',number:i,keywords:x[1],meaning:x[2],shadow:x[3]}));
const suits={
'Değnekler':{element:'Ateş',theme:'eylem, tutku, cesaret ve yaratıcılık',love:'İlişkilerde çekim, hareket ve doğrudanlık öne çıkıyor.',work:'Kariyerde girişim, görünürlük ve cesur adımlar destekleniyor.'},
'Kupalar':{element:'Su',theme:'duygu, ilişki, sezgi ve bağ kurma',love:'Duygusal yakınlık, empati ve karşılıklı hisler önem kazanıyor.',work:'İş yaşamında sezgisel kararlar ve ekip ilişkileri belirleyici olabilir.'},
'Kılıçlar':{element:'Hava',theme:'zihin, iletişim, karar ve çatışma',love:'Açık konuşma ve zihinsel netlik ilişki dinamiğini belirleyecek.',work:'Analiz, strateji ve doğru iletişim kariyer alanında öne çıkıyor.'},
'Tılsımlar':{element:'Toprak',theme:'para, beden, güven ve somut sonuçlar',love:'İlişkide güven, istikrar ve davranışlarla gösterilen bağlılık önemlidir.',work:'Para, kaynaklar ve uzun vadeli emek somut sonuç yaratabilir.'}
};
const ranks=[
['As','yeni bir başlangıç ve saf potansiyel','Önüne gerçek bir fırsat çıkıyor; ilk adım küçük olsa da enerji güçlü.','Fırsatı ertelemek veya hazırlıksız kullanmak potansiyeli zayıflatabilir.'],
['İki','denge, seçim ve iki yön','İki seçenek veya iki enerji arasında bilinçli bir denge kurman gerekiyor.','Kararsızlığı uzatmak hareket alanını daraltabilir.'],
['Üç','büyüme, işbirliği ve gelişim','Başlattığın süreç ilk sonuçlarını veriyor; destek ve ortaklık büyümeyi hızlandırabilir.','Dağınık işbirlikleri odağını kaybettirebilir.'],
['Dört','istikrar, temel ve korunma','Kurulan düzeni sağlamlaştırma, dinlenme ve güvenli alan oluşturma zamanı.','Güvenlik ihtiyacı değişime direnmeye dönüşebilir.'],
['Beş','gerilim, sınav ve değişim','Mevcut düzen seni bir sınavdan geçiriyor; çatışmanın gösterdiği ihtiyacı gör.','Kayba veya rekabete takılı kalmak çözümü geciktirir.'],
['Altı','uyum, ilerleme ve destek','Denge yeniden kuruluyor; yardım almak veya vermek süreci iyileştirebilir.','Geçmiş başarıya fazla tutunmak yeni adımı geciktirebilir.'],
['Yedi','değerlendirme, strateji ve direnç','Emeğini, sınırlarını ve seçeneklerini yeniden değerlendirmen gerekiyor.','Şüphe veya savunma hali fırsatları kapatabilir.'],
['Sekiz','hareket, ustalık ve yoğunlaşma','Enerji hızlanıyor; düzenli tekrar ve odak somut ilerleme getirir.','Aşırı hız ve kontrol hataya açık hale getirebilir.'],
['Dokuz','olgunluk, dayanıklılık ve sonuç','Uzun bir sürecin son aşamasındasın; deneyimin seni koruyor.','Yorgunluk nedeniyle duvarlarını gereğinden fazla yükseltme.'],
['On','tamamlanma, yük ve sonuç','Bir döngü zirveye ulaşıyor; sorumlulukların sonucunu ve bedelini görüyorsun.','Her yükü tek başına taşımaya çalışma.'],
['Uşak','haber, merak ve öğrenme','Yeni bir mesaj, fikir veya öğrenme fırsatı seni harekete geçirebilir.','Acemilik ve sabırsızlık ayrıntıları kaçırabilir.'],
['Şövalye','hareket, arayış ve yönelim','Bir hedefe doğru güçlü biçimde ilerliyorsun; niyetin eyleme dönüşüyor.','Acelecilik ve tek yönlü bakış zarar verebilir.'],
['Kraliçe','içsel ustalık, sezgi ve olgunluk','Bu enerjiyi içeriden, bilinçli ve kapsayıcı biçimde yönetme gücün var.','Aşırı koruyuculuk veya duygusal kontrol dengeyi bozabilir.'],
['Kral','dışsal ustalık, otorite ve sorumluluk','Deneyimini kararlı, adil ve sonuç odaklı biçimde kullanma zamanı.','Otoriteyi katılık veya baskıya dönüştürme.']
];
const minor=[];for(const [suit,meta] of Object.entries(suits)){ranks.forEach((r,i)=>minor.push({id:`${suit.toLowerCase()}-${i+1}`,name:`${suit} ${r[0]}`,arcana:'Küçük Arkana',suit,element:meta.element,number:i+1,keywords:`${r[1]}; ${meta.theme}`,meaning:`${r[2]} ${meta.love} ${meta.work}`,shadow:r[3]}))}
window.MYTHBORN_TAROT=[...major,...minor];
})();