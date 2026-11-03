# Mythborn.co — Aşama ve İlerleme Takip Tablosu

Bu dosya, projenin kredili ve güvenli yürütülmesini sağlamak için her aşamanın anlık durumunu, tamamlanma kriterlerini ve kontrol noktalarını belgeler.

**Durum Kodları:**
- `DONE`: Aşama eksiksiz tamamlandı, tüm testler ve belgeler hazır.
- `IN PROGRESS`: Üzerinde aktif çalışılan aşama / planlama.
- `BLOCKED`: Başlamadan önce engel veya ön koşul bekleyen aşama / canlı müdahale yasağı.
- `NOT VERIFIED`: Doğrulanmamış veya üçüncü taraf riski taşıyan durum.

---

## ✦ Aşama Takip Tablosu

| Aşama No | Aşama Tanımı | Durum | Git Commit / Checkpoint | Notlar ve Güvenlik Sınırları |
| :--- | :--- | :---: | :--- | :--- |
| **Aşama 0** | Durum Tespiti, Envanter ve Koruma | `DONE` | `5e5d46d` | Sistem denetlendi, 7 çekirdek belge ve `.env.example` üretildi. |
| **Aşama 0.1** | Ek Doğrulama, Bağımlılık Analizi & Aşama 1 Dokümantasyonu | `DONE` | `a3d8c05` | Open-Meteo analizi, D1 yedek denetimi (`BLOCKED`), Aşama 1 mimari belgeleri ve kredi tahmini tamamlandı. |
| **Aşama 1** | Yeni Astroloji Mimarisi (Frontend İskeleti & Preview Deploy) | `DONE` | `a9062ce` / `54a561e` | 5 dilli frontend iskeleti, tasarım token'ları, 8 sayfa kabuğu hazırlandı. |
| **Strateji & Görsel** | Otantik Zodyak Çarkı, Token'lar, Home Yenileme | `DONE` | `786271f` | Obsidian & Celestial Gold sistemi, 3 saniyelik Hero, Big Three Triad, Zodyak SVG çarkı tamamlandı. |
| **Aşama 1 (Veri)** | Çevrimdışı Şehir ve Zaman Dilimi Sözlüğü | `DONE` | `804c871` | 81 Türkiye ili + 20 küresel merkez IANA timezone ve koordinatlarıyla doğrulandı. |
| **Aşama 2** | Ücretsiz Astronomik Veri Çekirdeği | `DONE` | `4cf4c3d` | `astronomy-engine` v2.1.19 entegrasyonu, gezegen boylamları, hız ve retro tespiti, ay fazları, ASC/MC/12 ev, 24 saat formatı, deterministik 11/11 birim testi. |
| **Aşama 3** | P0 Sayfaların Gerçek Veriye Bağlanması | `DONE` | `fd773af` | Doğum haritası, 12 burç rehberi, gökyüzü takvimi, retrolar, transitler, sinastri ve sözlük 5 dilde gerçek hesaplamaya bağlandı. |
| **Aşama 4** | Otomatik Burç Yorumlama Pilotu | `DONE` | `e01a7a6` | 12 burç x 5 dil kural tabanlı günlük yorum motoru, etik kurallar denetleyicisi ve `/api/astrology/daily-horoscope` endpoint'i. |
| **Aşama 5** | Preview Deployment & Canlı Doğrulama | `DONE` | Versiyon `e29be7de` | `https://mythborn-preview.teyfikgokdemir.workers.dev` ortamına yüklendi; 5 dil, RTL, 24 saat formatı ve mock API başarıyla doğrulandı. |

---

## ✦ Canlı Veritabanı ve Production Durumu

- **Production Dağıtımı:** `NOT EXECUTED` (`BLOCKED`) — Kullanıcı onayı olmadan canlıya (`mythborn.co`) kesinlikle deploy yapılmadı.
- **Preview Dağıtımı:** `ACTIVE` (`https://mythborn-preview.teyfikgokdemir.workers.dev`) — Sürüm `e29be7de-2364-4db6-8ea9-8601ab327fbc`.
- **Production D1 Etkisi:** `SIFIR` — Production Worker ve canlı D1 `mythborn-membership` hiçbir şekilde etkilenmedi.

---

## ✦ Kontrol Noktaları ve Kredi Yönetimi

- **Toplam Bütçe:** 236 Kredi
- **Harcanan Kredi:** 74 Kredi
  - Aşama 0 & 0.1: 22 Kredi
  - Aşama 1 & Strateji: 32 Kredi
  - Aşama 2-5 Uygulama & Deployment: 20 Kredi
- **Kalan Kredi:** 162 Kredi
- **Geri Dönüş (Rollback):** Her commit tek komutluk geri dönüş garantisine sahiptir.
