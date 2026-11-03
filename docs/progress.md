# Mythborn.co — Aşama ve İlerleme Takip Tablosu

Bu dosya, projenin kredili ve güvenli yürütülmesini sağlamak için her aşamanın anlık durumunu, tamamlanma kriterlerini ve kontrol noktalarını belgeler.

**Durum Kodları:**
- `DONE`: Aşama eksiksiz tamamlandı, tüm testler ve belgeler hazır.
- `IN PROGRESS`: Üzerinde aktif çalışılan aşama.
- `BLOCKED`: Başlamadan önce engel veya ön koşul bekleyen aşama.
- `NOT VERIFIED`: Doğrulanmamış veya üçüncü taraf riski taşıyan durum.

---

## ✦ Aşama Takip Tablosu

| Aşama No | Aşama Tanımı | Durum | Git Commit / Checkpoint | Notlar ve Güvenlik Sınırları |
| :--- | :--- | :---: | :--- | :--- |
| **Aşama 0** | Durum Tespiti, Envanter ve Koruma | `DONE` | `work/astrology-platform-phase0` | Sistem denetlendi, testler doğrulandı, 6 çekirdek belge ve `.env.example` üretildi. Canlı siteye yıkıcı işlem yapılmadı. |
| **Aşama 1** | Yeni Astroloji Mimarisi (Bilgi Mimarisi & Rota Planı) | `IN PROGRESS` (Onay Bekliyor) | Beklemede | 5 dil eşitliği, astroloji odaklı rota matrisi ve bileşen planı hazırlanacak. Kullanıcı onayı alınmadan canlı kod değiştirilmez. |
| **Aşama 2** | Otomatik Gökyüzü Veri Çekirdeği (Astronomy Engine) | `BLOCKED` | Beklemede | Ücretli API kullanılmayacak. `astronomy-engine` yerel hesabı, Europe/Istanbul ve UTC saat dilimleri, duplicate önleme ve testler geliştirilecek. |
| **Aşama 3** | Otomatik Burç Yorumları (5 Dilli Kural Tabanlı İçerik) | `BLOCKED` | Beklemede | Yasaklı kehanet kuralları, 12 burç şablonları, 5 dil çeviri denetimi ve pilot çalışma uygulanacak. |
| **Aşama 4** | SEO, Kanonik Yapı ve 301 Geçişi | `BLOCKED` | Beklemede | Semantik 301 yönlendirme matrisi, redirect loop/chain testleri, Search Console ve sitemap doğrulaması. |
| **Aşama 5** | Sonraki Özellikler (Doğum Haritası UI, Sinastri, Transitler) | `BLOCKED` | Beklemede | Kredi ve bütçe elverirse tek tek checkpoint'lerle eklenecek. |

---

## ✦ Kontrol Noktaları ve Kredi Yönetimi

- **Kredi Bütçesi:** 236 Kredi ile sınırlı, kontrollü ve aşamalı yürütme.
- **Durdurma İlkesi:** Her aşama sonunda çalışan ara sürüm bırakılır, `npm run audit` koşturulur, durum raporu kullanıcıya sunulur ve onay alınana kadar durulur.
- **Geri Dönüş (Rollback):** Her aşama `docs/rollback-plan.md` belgesindeki tek komutluk geri dönüş garantisine sahiptir.
