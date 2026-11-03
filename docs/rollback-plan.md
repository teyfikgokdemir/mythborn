# Mythborn.co — Geri Alınabilirlik ve Kurtarma Planı (Rollback Plan)

Bu doküman, herhangi bir aşamada beklenmeyen bir hata, veri uyuşmazlığı, test başarısızlığı veya arama motoru anomalisinde sistemin güvenle bilinen en son stabil duruma geri döndürülmesini garanti altına alır.

---

## 1. Altın Kural ve Güvenlik Çerçevesi

- Canlı ortama (`https://mythborn.co`) hiçbir deneysel veya tamamlanmamış kod dağıtılmaz.
- Her aşama bağımsız bir git commit'ine bağlanır.
- Geri dönüş adımları yıkıcı değildir ve veri kaybına yol açmaz.

---

## 2. Bilinen En Son Kararlı Dağıtım Durumu (Baseline)

- **Commit SHA:** `18484f32eb4a796c568c8188166d7ad45e7e07a6` (Kısa: `18484f3`)
- **Tarih:** 2026-10-30
- **Doğrulanmış Özellikler:**
  - 5 dilli Gözde platformu aktif.
  - PageSpeed Insights: 100/100/100/100.
  - ARD Manifest v1.0 ve RFC 8141 URN uyumlu.
  - Google Video Sitemap `player_loc` çakışması sıfır.
  - Eski 1.000+ sayfa için tek adımlı 301 yönlendirmeleri aktif.
  - GA4, GTM, Clarity ve Umami ölçüm araçları Consent Mode v2 ile çalışıyor.

---

## 3. Senaryo Bazlı Geri Dönüş Adımları

### Senaryo A: Yerel Geliştirme Hatası veya Test Başarısızlığı
Henüz dağıtılmamış yerel değişiklikleri anında geri almak için:
```bash
# Değiştirilen dosyaları temizle
git restore .
git clean -fd

# Testlerin geçtiğini teyit et
npm run audit
```

---

### Senaryo B: Git Dalını Sıfırlama
`work/astrology-platform-phase0` dalını başlangıç noktasına döndürmek için:
```bash
git checkout work/astrology-platform-phase0
git reset --hard 18484f3
npm run audit
```

---

### Senaryo C: Canlı Üretim Ortamını (Production) Acil Geri Alma
Canlı Cloudflare Worker üzerinde beklenmeyen bir aksama görüldüğünde:
```bash
# 1. Ana dala geçin ve bilinen kararlı commit'e dönün
git checkout main
git reset --hard 18484f3

# 2. Testleri koşturun
npm run audit

# 3. Canlıya derleyip dağıtın
npm run deploy

# 4. Canlı yanıtı doğrulayın
curl -I https://mythborn.co/
```

---

### Senaryo D: D1 Veritabanı Geri Dönüşü
Eğer yeni bir D1 migrasyonu uygulanmış ve geri alınması gerekiyorsa:
1. D1 veritabanı doğrudan `DROP TABLE` ile yıkıcı şekilde silinmez.
2. Ters migrasyon SQL dosyası oluşturulur (Örn: `migrations/0006_revert_feature.sql`).
3. Önce yerel ortamda test edilir:
   ```bash
   npm run db:migrate:local
   ```
4. Yalnızca testler ve denetim geçtikten sonra canlıya uygulanır.

---

## 4. Geri Dönüş Sonrası Doğrulama Kontrol Listesi

- [ ] `npm run audit` komutu 71 dosya için sıfır hatayla tamamlandı mı?
- [ ] `https://mythborn.co/` HTTP 200 dönüyor mu?
- [ ] `https://mythborn.co/sitemap.xml` XML olarak 200 dönüyor mu?
- [ ] `https://mythborn.co/sitemap-video.xml` geçerli XML dönüyor mu?
- [ ] `https://mythborn.co/.well-known/ai-catalog.json` JSON olarak 200 dönüyor mu?
- [ ] `/tarot-kartlari/deli` gibi eski bir URL HTTP 301 dönüyor mu?
- [ ] 5 dil (`/`, `/en`, `/gr`, `/es`, `/ar`) düzgün yükleniyor mu?
