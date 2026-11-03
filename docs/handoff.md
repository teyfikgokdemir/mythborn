# Mythborn.co — Devralma ve Süreklilik Dokümanı (Handoff)

Bu doküman, Mythborn platformunun başka bir yapay zekâ ajanı, yazılım mühendisi veya proje yöneticisi tarafından sıfır bilgi kaybıyla devralınabilmesi için hazırlanmıştır.

---

## 1. Temel Proje ve Git Bilgileri

- **Canlı URL:** `https://mythborn.co`
- **Önizleme URL:** `https://mythborn-preview.tevfikgokdemir.workers.dev`
- **Son Çalışan Commit:** `18484f3` (Fix video sitemap player_loc error for Google Search Console and implement comprehensive 301 redirects for all legacy pages)
- **Aktif Geliştirme Dalı:** `work/astrology-platform-phase0`
- **Canlı Dağıtım Motoru:** Cloudflare Workers + Cloudflare D1 Database (`mythborn-membership`)

---

## 2. Çalıştırma, Test ve Dağıtım Komutları

```bash
# Kurulum
npm install

# Test ve Denetim (Tüm suit geçmek zorundadır)
npm run audit

# Yerel Çalıştırma
npm run dev

# Önizleme Ortamına Dağıtım (Dry-run / Preview)
npm run preview

# Canlı Ortama Dağıtım (Yalnızca onaylı checkpoint sonrası)
npm run deploy

# İndeksleme Sinyali Gönderimi
npm run indexnow:submit
```

---

## 3. Aşamaların Anlık Durumu

- **Tamamlanan Aşama:** `Aşama 0` (Durum tespiti, koruma, envanter, `.env.example`, dokümantasyon ve izole git dalı).
- **Devam Eden Aşama:** `Aşama 1` için planlama ve kullanıcı onayı bekleme.
- **Bekleyen Aşamalar:** Aşama 2 (Veri Çekirdeği), Aşama 3 (Burç Yorumları), Aşama 4 (SEO / 301), Aşama 5 (Ek Modüller).

---

## 4. Değişen ve Oluşturulan Dosyalar (Aşama 0)

1. `README.md`: Çalıştırma, test, mimari ve güvenlik ilkeleri dokümanı.
2. `.env.example`: Çevre değişkenleri, secrets ve entegrasyon şablonu (gerçek gizli veri içermez).
3. `docs/current-site-audit.md`: Derinlemesine sistem, veritabanı, API ve güvenlik denetimi.
4. `docs/current-url-inventory.csv`: 150 kanonik sayfa, legacy 301 yönlendirmeleri ve 410 silinen URL envanteri.
5. `docs/progress.md`: Proje aşama takip tablosu.
6. `docs/handoff.md`: Bu devralma rehberi.
7. `docs/rollback-plan.md`: Tek komutla geri dönüş ve güvenlik kurtarma planı.

---

## 5. Beş Dilin (TR, EN, EL/GR, ES, AR) Durumu

- **TR (Kaynak):** Tüm sayfalar, blog rehberleri, formlar ve yasal metinler aktif ve %100 kapsanmaktadır.
- **EN (`/en`):** Tüm karşılıklar mevcut, başvuru ve keşif sayfaları İngilizceye yerelleştirilmiştir.
- **EL (`/gr`):** Yunanca rotalar `/gr` ön ekiyle tanımlıdır (eski `/el` rotaları 301 ile `/gr`'ye yönlendirilir).
- **ES (`/es`):** İspanyolca sayfalar ve blog içerikleri aktiftir.
- **AR (`/ar`):** Arapça sayfalar `dir="rtl"` ve Arapça font/tipografi hiyerarşisiyle korunmaktadır.
- **Kural:** Yeni aşamalarda hiçbir dil rotası kaldırılmayacak veya eksik bırakılmayacaktır.

---

## 6. Otomatik Gökyüzü Veri Sisteminin Durumu

- **Kullanılan Kütüphane:** `astronomy-engine` (`^2.1.19`) — Açık kaynaklı, npm üzerinden yerel çalışan bağımsız matematik motoru.
- **Ücretli API Durumu:** **HİÇBİR ÜCRETLİ API KULLANILMAMAKTADIR.** Harici Swiss Ephemeris servisi veya ücretli gökyüzü aboneliği yoktur.
- **Mevcut Yetenekler:** `src/astrology.js` içerisinde Güneş, Ay, gezegen ekliptik boylamları, açılar (kavuşum, sekstil, kare, üçgen, karşıt), yükselen/MC açıları, tropikal ve sidereal (Lahiri) koordinatlar yerel olarak hesaplanabilmektedir.
- **Aşama 2 Hedefi:** Bu hesaplamaların günlük Europe/Istanbul ve UTC zaman damgasıyla önbelleklenen, duplicate üretmeyen kurallı bir veri tabanına bağlanması.

---

## 7. 301 Geçişinin ve SEO'nun Durumu

- **Eski Shopify Sayfaları:** `/products/*`, `/collections/*`, `/cart` vb. 410 Gone ile dizinden düşürülmektedir.
- **Eski Fal ve Tarot Sayfaları:** Tek adımda (`single-step`) HTTP 301 ile `/kesif-alanlari` sayfasına yönlendirilmektedir.
- **Sitemap & Video Sitemap:** `sitemap.xml` 150 geçerli kanonik URL döndürür. `sitemap-video.xml` ham MP4 video kaynağını barındırır (`player_loc` çakışması giderilmiştir).
- **Kural:** Semantik olarak uyuşmayan sayfalar topluca ana sayfaya yönlendirilmeyecektir.

---

## 8. Bilinen Hatalar ve Riskler

- **Bilinen Hata Yok:** `npm run audit` komutu 71 dosya kontrolü ve regresyon testlerinde %100 başarıyla geçmektedir.
- **Potansiyel Risk:** Kullanıcı onayı alınmadan ana sayfa veya rota mimarisinde toplu değişiklik yapılması durumunda arama motoru indeks kaybı riski (bu nedenle Aşama 0'da hiçbir canlı kod silinmemiştir).

---

## 9. Geri Dönüş (Rollback) Yöntemi

Olası bir sorun anında aşağıdaki adımla anında bilinen son çalışan sürüme dönülebilir:
```bash
git checkout main
git reset --hard 18484f3
npm run deploy
```

---

## 10. Bir Sonraki En Küçük ve Güvenli Adım

**Aşama 1 Onayı:** Kullanıcıdan onay alındıktan sonra:
1. `src/` altındaki astroloji rotalarını (Doğum haritası, yükselen burç, gökyüzü takvimi, transitler) planlayan tip ve arayüz sözleşmesini (interface contract) oluşturmak.
2. 5 dilde temel layout ve header/footer'da astroloji odaklı yeni bilgi mimarisini güvenli bir draft bileşen olarak entegre etmek.
3. Eski Gözde sayfalarını silmeden, yeni rotaları paralel olarak erişilebilir kılmak.
