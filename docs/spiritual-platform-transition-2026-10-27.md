# Mythborn — Uluslararası spiritüel hizmet platformu dönüşümü

Durum: Tasarım/ürün kapsamı; **yayın onayı verilmedi**. 2026-10-27.

## Kullanıcı tarafından onaylanan kapsam
- Mevcut Mythborn deneyiminin tamamen yeni bir iş modeline dönüştürülmesi.
- Tek kadın uygulayıcıyla ortaklık modeli; gerçek ismi sitede tanıtılmayacak. Kamuya açık uzman ismi yerine Mythborn markası veya profesyonel takma ad kullanılabilir; gerçek kişi/ticari kimlik ve yasal bilgilendirme saklanamaz.
- Hizmet başlıkları (hukuki inceleme bekliyor): bioenerji, tılsım, nazar, enerji çalışmaları, ritüel danışmanlığı.
- Uluslararası çok dilli erişim ve çevrimiçi görüşme.
- **Müşteriler sitede seans/randevu oluşturmayacak.** Her türlü seans ve bilgi talebi yalnızca WhatsApp veya e-posta üzerinden alınacak; site içi rezervasyon takvimi kaldırıldı.
- **Müşteri paneli, site içi mesajlaşma ve hizmet takibi yok.** Talepler dış kanallardan yönetilecek.
- **Açık ücret, checkout ve çevrimiçi tahsilat yapılmayacak.** Hukuken izin verilen iletişim bağlamlarında "Bilgi al" ile WhatsApp veya e-posta yönlendirmesi tasarlanacak. Bu yaklaşım hizmet reklamına ilişkin yasağı kaldırmaz.
- Gelecekte ödeme altyapısı ancak ayrı hukuk/sağlayıcı incelemesiyle karara bağlanacak.

## Mevcut teknik mimariye dayalı notlar
- Cloudflare Workers uygulaması; ana giriş `src/analytics-router.js`, sayfa yönlendirmesi `src/app-router.js`.
- D1 veri tabanı bağlaması mevcut; mevcut üyelik/migrasyon verisini bozma.
- TR, EN, GR(/gr), ES dil yolları mevcut. Sıfırdan framework değiştirme.
- Mevcut içeriklerin indeksleme, redirect ve SEO performansına etkisi ayrıca değerlendirilmeli.
- Canlı `main` ve production bu plan kapsamında değiştirilmez.

## Kritik hukuki durdurucu
Türkiye Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği md. 27/3: "Falcı, medyum, astrolog ve benzerleri tarafından verilen hizmet reklamları ... hiçbir şekilde yapılamaz." Teklif toplama butonu, açık fiyat bulunmaması ya da "eğlence amaçlı" ibaresi ile yasak aşılmış sayılmaz.
Kaynak: https://www.lexpera.com.tr/mevzuat/yonetmelikler/ticari-reklam-ve-haksiz-ticari-uygulamalar-yonetmeligi
Bakanlık duyurusu: https://ticaret.gov.tr/haberler/ticaret-bakanligindan-yasa-disi-sans-oyunlari-reklamlarina-siki-tedbir

**Hukuk değerlendirmesi olmadan hizmetleri satışa yönlendiren tanıtım sayfası, WhatsApp satış CTA'sı veya reklam yayınlanmamalı.**
- Bioenerji hastalık tedavisi/teşhis/sağlık sonucu iddiasına dönüşmemeli.
- Müşteri verisi ve iletişim için KVKK/GDPR, rıza, saklama ve veri minimizasyonu tasarlanmalı.
- Üçüncü kişilerin iradesini kontrol, garantili aşk/para ve korku istismarı iddiaları kapsam dışı.
- Hedef ülkelere göre reklam ve tüketici hukuku ayrı incelenecek.

## Önerilen teslimat sırası (yeni karar değil, uygulama planı)
1. **Hukuki kapsam kapısı:** Uzmanın gerçek hizmet listesi, faaliyet ülkesi, ticari unvanı ve reklamın mümkün olup olmadığı konusunda yazılı görüş.
2. **Tasarım prototipi:** Yeni ana sayfa, kurumsal marka anlatısı, izinli hizmet kategorileri ve kimliği açıklamayan sembolik kadın silüeti veya arkadan portre. Görsel gerçek uygulayıcının fotoğrafı diye gösterilmez. Hukuki onay verilmeden pazarlama CTA yayımlama.
3. **Teknik model:** Kamuya açık kurumsal/çok dilli vitrin; ödeme, müşteri paneli, üyelik veya seans rezervasyon motoru geliştirme. Mevcut üyelik verileri silinmeden ve üretim bozulmadan eski özelliklerin kaldırılma planını yap.
4. **İletişim akışı:** Hukuki onaylı iletişim sayfalarında `Bilgi al` ile doğrulanmış WhatsApp numarası veya doğrulanmış Mythborn e-posta adresine yönlendirme. **`info@mythborn.co` henüz çalıştığı doğrulanmış adres değil.** Kişisel/hassas veri WhatsApp URL parametrelerine aktarılmasın.
5. **Çok dilli içerik:** TR/EN/GR/ES eşitlik, canonical, hreflang, sitemap, mobil/a11y testleri.
6. **QA:** Birim/entegrasyon testleri, veri migrasyonu, yetkilendirme ve gizlilik, statik kontroller, CI, preview.
7. **Ayrı üretim geçişi:** Risk incelemesi + manuel onay sonrası merge/deploy/production doğrulama.

## Bekleyen veriler
- Profesyonel sahne adı (henüz seçilmedi); gerçek isim kamuya açık profilde kullanılmayacak. Silüet/arkadan kadın görseli kullanılabilir, gerçek kişiyi temsil ediyormuş gibi sunulmaz.
- Mythborn için kullanılacak kurumsal WhatsApp numarası (mevcut diğer proje numaralarından **varsayma**).
- Ortaklık sözleşmesi: alan adı, kod, veri, gelir ve ayrılma hakları.
- Hizmet bazında Türkiye ve hedef ülkeler için hukuk değerlendirmesi.
- WhatsApp/e-posta dışındaki platform modülleri kapsam dışı. Veri saklama ve KVKK/GDPR temeli yine değerlendirilir.

## Kabul kriterleri
- Açık fiyat, ödeme, havale talimatı veya checkout yok.
- Bilgi al akışı yalnızca hukuken izinli ve doğrulanmış iletişim kanalına gider; müşteri paneli, rezervasyon, ödeme ya da sahte referans/kadın kimliği oluşturulmaz.
- Hasta iyileştirme, doğaüstü kesin sonuç veya üçüncü kişi irade kontrolü vaadi yok.
- Mevcut üretim verileri, kimlik doğrulaması ve yönlendirmeler korunur.
- Hukuk onayı öncesi ticari hizmet reklamı yayımlanmaz.

## Ek kararlar — 2026-10-27
- Uygulayıcı tarot yorumlaması da yapabiliyor. Tarot, önerilen hizmet envanterine **hukuki incelemeye tabi** kategori olarak eklenecek. Tarot hizmetini tanıtmak veya seans talebine yönlendirmek, Türkiye'deki falcı/medyum/astrolog benzeri hizmet reklamı yasağı sebebiyle özellikle yüksek risklidir; yazılı hukuk görüşü olmadan aktif hizmet CTA'sı yayımlanmaz.
- **Arapça (ar)** yeni hedef dil olarak tasarıma dahil. RTL (dir=rtl, lang=ar), menü hizalamaları, ikon yönü, Arapça tipografi, içerik kalite kontrolü, form alanları, canonical/hreflang/sitemap ve mobil testler birlikte ele alınmalı.
- Dil taslağı: Türkçe, İngilizce, Yunanca, İspanyolca, Arapça (toplam 5).
- Kullanıcı Codex kullanım limitinin dolduğunu belirtti. Codex ile uygulama yapıldığı iddia edilmez; bu kayıt sadece kapsam kararıdır.
