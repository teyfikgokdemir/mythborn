# Mythborn.co — 236 Krediyle Aşama Bazlı Bütçe ve Kredi Tahmini

Bu doküman, projenin toplam 236 kredilik bütçesini aşamalara bölerek her adımın maliyet kontrolünü ve güvenli durma sınırlarını planlar.

---

## ✦ Kredi Kullanım ve Tahmin Tablosu

| Aşama / Alt Görev | Planlanan Kredi | Gerçekleşen Kredi | Kalan Bütçe | Durum |
| :--- | :---: | :---: | :---: | :---: |
| **Başlangıç Bütçesi** | **236** | - | **236** | - |
| **Aşama 0 — Durum Tespiti ve Koruma** | 15 | 12 | 224 | `DONE` |
| **Aşama 0 Ek Doğrulama & Aşama 1 Dokümantasyonu** | 12 | 10 | 214 | `DONE` |
| **Aşama 1 — Yeni Astroloji Mimarisi (Kodlama & Layout)** | 35 | - | 179 | `IN PROGRESS` (Onay Bekliyor) |
| **Aşama 2 — Otomatik Gökyüzü Veri Çekirdeği** | 45 | - | 134 | `BLOCKED` |
| **Aşama 3 — Otomatik Burç Yorumları ve Pilot Akış** | 50 | - | 84 | `BLOCKED` |
| **Aşama 4 — SEO ve 301 Geçişi** | 35 | - | 49 | `BLOCKED` |
| **Aşama 5 — Doğum Haritası UI & Sinastri Modülü** | 35 | - | 14 | `BLOCKED` |
| **Beklenmeyen Durum ve Rollback Güvenlik Rezervi** | 14 | - | 0 | Rezerv |

---

## ✦ Kredi Disiplini ve Erken Durma Kuralları

1. **Bütçe Aşımı Engeli:** Hiçbir aşama kendine ayrılan bütçeyi %20'den fazla aşamaz.
2. **Kredi Azalma Protokolü:** Kalan kredi 30'un altına indiğinde yeni özellik geliştirilmez; mevcut kod test edilip dokümante edilerek güvenli bir devralma commit'iyle kapatılır.
3. **Tek Seferde Bitirmeme:** Büyük sıçramalar yerine doğrulanabilir, test edilebilir küçük adımlarla ilerlenir.
