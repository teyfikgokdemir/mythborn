# Mythborn.co — Devralma ve Süreklilik Dokümanı (Handoff)

Bu doküman, Mythborn platformunun başka bir yapay zekâ ajanı, yazılım mühendisi veya proje yöneticisi tarafından sıfır bilgi kaybıyla devralınabilmesi için hazırlanmıştır.

---

## 1. Temel Proje ve Git Bilgileri

- **Canlı URL:** `https://mythborn.co`
- **Önizleme URL:** `https://mythborn-preview.tevfikgokdemir.workers.dev`
- **Son Çalışan Baseline Commit:** `18484f3` (Canlıdaki sürüm)
- **Son Dokümantasyon Commit:** `5e5d46d` (Aşama 0 tamamlama)
- **Aktif Geliştirme Dalı:** `work/astrology-platform-phase0`
- **Canlı Dağıtım Motoru:** Cloudflare Workers + Cloudflare D1 Database (`mythborn-membership`)

---

## 2. Çalıştırma, Test ve Dağıtım Komutları

```bash
# Kurulum
npm install

# Test ve Denetim (Tüm proje test suiti geçmek zorundadır)
npm run audit

# npm Güvenlik Açığı Taraması (Dependency vulnerability scan)
npm audit

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

- **Tamamlanan Aşama:** `Aşama 0` (Durum tespiti, koruma, envanter, `.env.example`, dokümantasyon, Open-Meteo analizi, Aşama 1 mimari spesifikasyonları).
- **Devam Eden Aşama:** `Aşama 1` kodlama başlangıcı için kullanıcı onayı bekleme.
- **Bekleyen Aşamalar:** Aşama 2 (Veri Çekirdeği), Aşama 3 (Burç Yorumları), Aşama 4 (SEO / 301), Aşama 5 (Ek Modüller).

---

## 4. Değişen ve Oluşturulan Dokümanlar

1. `README.md`: Çalıştırma, test, mimari ve güvenlik ilkeleri dokümanı.
2. `.env.example`: Çevre değişkenleri, secrets ve entegrasyon şablonu (gerçek gizli veri içermez).
3. `docs/current-site-audit.md`: Derinlemesine sistem, veritabanı, API ve güvenlik denetimi.
4. `docs/current-url-inventory.csv`: 150 kanonik sayfa, legacy 301 yönlendirmeleri ve 410 silinen URL envanteri.
5. `docs/progress.md`: Proje aşama takip tablosu.
6. `docs/handoff.md`: Bu devralma rehberi.
7. `docs/rollback-plan.md`: Tek komutla geri dönüş ve güvenlik kurtarma planı.
8. `docs/free-data-dependencies.md`: Open-Meteo bağımlılığı, timeout, rate limit ve offline cache analizi.
9. `docs/phase-1-information-architecture.md`: Astroloji odaklı yeni bilgi mimarisi ve sitemap ağacı.
10. `docs/phase-1-route-plan.csv`: 5 dilli tüm yeni rotaların CSV tablosu.
11. `docs/phase-1-content-model.md`: Harita, gökyüzü, burç ve yasaklı içerik veri modelleri.
12. `docs/phase-1-five-language-strategy.md`: TR, EN, EL/GR, ES, AR (RTL) eşlik politikası.
13. `docs/phase-1-credit-estimate.md`: 236 kredilik aşamalı bütçe dağılımı.

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
- **Ücretsiz Dış Bağımlılık (Geocoding):** `src/astrology.js` içindeki `geocode()` Open-Meteo servisini kullanır. Teknik risk ve offline JSON önbellek stratejisi `docs/free-data-dependencies.md` belgesinde detaylandırılmıştır.
- **Mevcut Yetenekler:** `src/astrology.js` içerisinde Güneş, Ay, gezegen ekliptik boylamları, açılar (kavuşum, sekstil, kare, üçgen, karşıt), yükselen/MC açıları, tropikal ve sidereal (Lahiri) koordinatlar yerel olarak hesaplanabilmektedir.
- **Aşama 2 Hedefi:** Bu hesaplamaların günlük Europe/Istanbul ve UTC zaman damgasıyla önbelleklenen, duplicate üretmeyen kurallı bir veri tabanına bağlanması.

---

## 7. 301 Geçişinin ve SEO'nun Durumu

- **Eski Shopify Sayfaları:** `/products/*`, `/collections/*`, `/cart` vb. 410 Gone ile dizinden düşürülmektedir.
- **Eski Fal ve Tarot Sayfaları:** Tek adımda (`single-step`) HTTP 301 ile `/kesif-alanlari` sayfasına yönlendirilmektedir.
- **Sitemap & Video Sitemap:** `sitemap.xml` 150 geçerli kanonik URL döndürür. `sitemap-video.xml` ham MP4 video kaynağını barındırır (`player_loc` çakışması giderilmiştir).
- **Kural:** Semantik olarak uyuşmayan sayfalar topluca ana sayfaya yönlendirilmeyecektir.

---

## 8. Canlı Veritabanı ve Kritik Blokajlar

- **D1 Veritabanı Değişikliği:** `BLOCKED`. Canlı Cloudflare D1 veritabanı için repoda doğrulanmış bir SQL dump yedeği bulunmadığından canlı veritabanında hiçbir migrasyon veya silme işlemi yapılamaz.
- **Canlı Deploy İşlemi:** `BLOCKED`. Kullanıcı onayı alınana kadar canlıya deploy yapılmaz.

---

## 9. Kredi ve Bütçe Durumu

- **Toplam Bütçe:** 236 Kredi
- **Harcanan Kredi:** 22 Kredi
- **Kalan Kredi:** 214 Kredi

---

## 10. Geri Dönüş (Rollback) Yöntemi

Olası bir sorun anında aşağıdaki adımla anında bilinen son çalışan sürüme dönülebilir:
```bash
git checkout main
git reset --hard 18484f3
npm run deploy
```

---

## 11. Bir Sonraki En Küçük ve Güvenli Adım

**Aşama 1 Kodlama Onayı:** Kullanıcıdan yazılı onay alındığında:
1. `src/` altında yeni rota yapısının paralel şablonlarını (layout ve 5 dilli navigation) canlı sayfaları bozmadan hazırlamak.
2. `npm run audit` testlerinin yeşil kaldığını doğrulamak.
3. Commit oluşturup tekrar onay için durmak.
