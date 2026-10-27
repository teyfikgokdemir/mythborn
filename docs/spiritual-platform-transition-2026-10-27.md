# Mythborn — Uluslararası spiritüel hizmet platformu dönüşümü

Durum: Tasarım/ürün kapsamı; **yayın onayı verilmedi**. 2026-10-27.

## Kullanıcı tarafından onaylanan kapsam
- Mevcut Mythborn deneyiminin tamamen yeni bir iş modeline dönüştürülmesi.
- Tek uzman ve uzman profili; ortaklık modeli ayrıca sözleşmeye bağlanacak.
- Hizmet başlıkları (hukuki inceleme bekliyor): bioenerji, tılsım, nazar, enerji çalışmaları, ritüel danışmanlığı.
- Uluslararası çok dilli erişim ve çevrimiçi görüşme.
- Rezervasyon takvimi, randevu ve uygunluk yönetimi.
- Müşteri paneli: randevu geçmişi, mesajlaşma, hizmet takibi.
- **Açık ücret, checkout ve çevrimiçi tahsilat yapılmayacak.** Ücret yerine "Bilgi al" iletişim akışı olacak; WhatsApp ve e-posta kanalları üzerinden talep. Bu yaklaşım hizmet reklamına ilişkin yasağı kaldırmaz.
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
2. **Tasarım prototipi:** Mevcut premium Mythborn görsel diliyle yeni ana sayfa, uzman profili, hizmet kategorileri, rezervasyon arayüzü; hukuki onay verilmeden pazarlama CTA yayımlama.
3. **Teknik model:** D1 üzerinde hizmetler, uzman uygunluğu, randevu, müşteri mesajı; rol tabanlı erişim, abuse/rate limit, audit trail.
4. **İletişim akışı:** İzin verilen hizmetlerde fiyat listesi yerine `Bilgi al`; doğrulanmış WhatsApp numarası ve `info@mythborn.co`. Kişisel/hassas veri WhatsApp URL parametrelerine aktarılmasın.
5. **Çok dilli içerik:** TR/EN/GR/ES eşitlik, canonical, hreflang, sitemap, mobil/a11y testleri.
6. **QA:** Birim/entegrasyon testleri, veri migrasyonu, yetkilendirme ve gizlilik, statik kontroller, CI, preview.
7. **Ayrı üretim geçişi:** Risk incelemesi + manuel onay sonrası merge/deploy/production doğrulama.

## Bekleyen veriler
- Uzmanın adı/profil bilgileri ve izinli tanıtım metni.
- Mythborn için kullanılacak kurumsal WhatsApp numarası (mevcut diğer proje numaralarından **varsayma**).
- Ortaklık sözleşmesi: alan adı, kod, veri, gelir ve ayrılma hakları.
- Hizmet bazında Türkiye ve hedef ülkeler için hukuk değerlendirmesi.
- Randevu saat dilimi, görüşme platformu, mesaj saklama süresi, KVKK/GDPR temeli.

## Kabul kriterleri
- Açık fiyat, ödeme, havale talimatı veya checkout yok.
- Bilgi al akışı yalnızca hukuken izinli ve doğrulanmış iletişim kanalına gider.
- Hasta iyileştirme, doğaüstü kesin sonuç veya üçüncü kişi irade kontrolü vaadi yok.
- Mevcut üretim verileri, kimlik doğrulaması ve yönlendirmeler korunur.
- Hukuk onayı öncesi ticari hizmet reklamı yayımlanmaz.
