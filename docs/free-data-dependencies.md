# Mythborn.co — Ücretsiz ve Açık Veri Bağımlılıkları Analizi

Bu doküman, projede dış dünyaya yapılan tek ücretsiz ağ çağrısı olan Open-Meteo Geocoding servisinin teknik analizini, risklerini ve offline fallback stratejisini belgeler.

---

## 1. Kullanıldığı Dosya ve Satır

- **Dosya:** [`src/astrology.js`](file:///C:/Users/teyfi/mythborn/src/astrology.js#L15)
- **Fonksiyon:** `geocode(place, locale = 'tr')`
- **Çağıran Yerler:** 
  - `buildChart(raw)` (Doğum haritası hesaplama)
  - `buildVedicChart(raw)` (Vedik doğum haritası hesaplama)
  - `calculateNatalChart(request)` (`POST /api/natal-chart` - pasif API)
  - `calculateSynastry(request)` (`POST /api/synastry` - pasif API)

---

## 2. İstek Biçimi (Request Format)

- **Protokol / URL:**
  ```http
  GET https://geocoding-api.open-meteo.com/v1/search?name={encodeURIComponent(query)}&count=5&language={language}&format=json
  ```
- **Başlıklar (Headers):** `accept: application/json`
- **Sorgu Mantığı:**
  1. Önce tam `place` dizesini (ör. `"Kadıköy, İstanbul"`),
  2. Sonra virgülle ayrılmış ilk parçayı (ör. `"Kadıköy"`) arar.
  3. Dönen sonuç listesinden ülke/şehir eşleşmesine göre `latitude`, `longitude`, `timezone` ve `name` döner.

---

## 3. Timeout Durumu

- **Mevcut Durum:** Kodda `AbortController` veya fetch timeout parametresi **YOKTUR**.
- **Risk:** Open-Meteo servisinde gecikme veya paket kaybı yaşanırsa, Cloudflare Worker varsayılan fetch zaman aşımına (genelde 30-50 saniye) kadar asılı kalabilir.
- **Düzeltme Önerisi:** 3.5 saniyelik bir `AbortSignal.timeout(3500)` koruması eklenmelidir.

---

## 4. Rate Limit (Hız Sınırı) ve Kesinti Riski

- **Open-Meteo Ücretsiz Kullanım Politikası:**
  - Ticari olmayan ve adil kullanım (fair use) kapsamında ücretsizdir.
  - Sınır: Dakikada en fazla ~600 istek, günde ~10.000 istek.
  - HTTP 429 ("Too Many Requests") döndürebilir.
- **Risk Analizi:** Yoğun anlık kullanıcı trafiğinde veya bot taramasında Open-Meteo geçici olarak engellenebilir ya da HTTP 429 döndürebilir. Bu durumda doğum haritası hesaplaması `Doğum yeri bulunamadı` hatası vererek kullanıcıyı mağdur edebilir.

---

## 5. Offline Cache ve Fallback Önerisi

Aşama 2 veri çekirdeği geliştirilirken şu mimari uygulanmalıdır:

1. **Önceden Hesaplanmış Statik Şehir Veritabanı (Offline JSON Dict):**
   - Türkiye'nin 81 ili ve büyük ilçeleri (İstanbul, Ankara, İzmir, Bursa, Antalya vb.)
   - Dünyanın başlıca 100 başkenti/metropolü (Londra, Atina, Madrid, Berlin, New York, Kahire vb.)
   - Bu şehirlerin enlem, boylam ve IANA `timezone` bilgileri (ör. `Europe/Istanbul`) yerel statik bir JSON sözlüğünde (`src/data/major-cities.json`) tutulur.
2. **Öncelikli Yerel Arama (Local-First):**
   - Kullanıcı "İstanbul" yazdığında ağ çağrısı yapılmadan doğrudan yerel sözlükten milisaniyeler içinde koordinat ve saat dilimi çözülür.
3. **KV / D1 Dinamik Önbellek (Dynamic Geocode Cache):**
   - Yerel sözlükte bulunmayan ve Open-Meteo'dan bir kez başarıyla sorgulanan şehirler D1 veya Worker Cache API'de saklanır; aynı şehir için ikinci kez dış ağa çıkılmaz.
4. **Fallback:** Open-Meteo çökerse veya timeout olursa, kullanıcıya en yakın büyük metropol önerilir veya saat dilimi varsayılanı (`Europe/Istanbul`) sunulur.
