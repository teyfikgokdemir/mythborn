# Mythborn.co — Mevcut Sistem, Mimari ve Güvenlik Denetimi (Aşama 0)

**Tarih:** 2026-11-04  
**Denetçi:** Antigravity AI  
**Çalışma Dalı:** `work/astrology-platform-phase0`  
**Canlı Ortam:** `https://mythborn.co` (Cloudflare Workers)

---

## 1. Proje Kökü ve Paket Bağımlılıkları

- **Runtime:** Cloudflare Workers (V8 Isolate tabanlı serverless edge runtime)
- **Node.js Uyumluluğu:** `>= 20.0.0`
- **Modül Tipi:** ECMAScript Modules (`"type": "module"`)
- **Çekirdek Bağımlılıklar:**
  - `astronomy-engine` (`^2.1.19`): Açık kaynaklı, sıfır harici API bağımlı, jeosantrik ve heliosantrik efemeris hesaplayıcı. Güneş, Ay, gezegen koordinatları, tutulmalar, ekinokslar ve açılar için yerel matematik motoru.
- **Geliştirme Bağımlılıkları:**
  - `wrangler` (`^4.153.0`): Cloudflare CLI ve yerel simülatör.
- **Güvenlik Geçersiz Kılmaları (`overrides`):**
  - `undici`: `7.30.1` (bağımlılık güvenlik açığı yaması).

---

## 2. Dağıtım ve Altyapı Yapılandırması

- **Wrangler Yapılandırması:**
  - Üretim: `wrangler.jsonc` (Worker: `mythborn`, Entry: `src/analytics-router.js`)
  - Önizleme: `wrangler.preview.jsonc` (Worker: `mythborn-preview`)
- **Uyumluluk Tarihi:** `2026-07-20`
- **Statik Varlıklar (`assets`):** `./public` dizini.
  - `run_worker_first`: `/sitemap.xml`, `/sitemap-video.xml`, `/llms*.txt`, `/ai-fact-sheet.json`, `/ai-catalog.json`, `/.well-known/*` adresleri Worker üzerinden dinamik ve güvenlik başlıklarıyla sunulur.
- **Veritabanı (`d1_databases`):**
  - Üretim: `mythborn-membership` (`99490fbd-8f6c-4bf9-b5ed-bffdfdbd8771`)
  - Önizleme: `mythborn-membership-preview` (`c99277c0-d3aa-4389-9e87-dfaa486f0590`)
  - Üretim ve önizleme veritabanları birbirine asla erişemez (izolasyon testi `scripts/runtime-config-audit.mjs` tarafından doğrulanır).

---

## 3. Git ve Sürüm Kontrolü Durumu

- **Başlangıç Commit:** `18484f3` (Fix video sitemap player_loc error for Google Search Console and implement comprehensive 301 redirects for all legacy pages)
- **Güvenli Geçiş Dalı:** `work/astrology-platform-phase0`
- **Koruma İlkesi:** Doğrudan `main` dalına yıkıcı müdahale yapılmaz. Her aşama bağımsız commit'lerle bu dalda toplanır.

---

## 4. Veritabanı Şeması ve Tablolar

Cloudflare D1 (SQLite) üzerinde çalışan tablolar:
1. `users`: Kullanıcı kimlikleri, şifre hash/salt, e-posta doğrulama zamanı.
2. `sessions`: Kullanıcı oturum token hash'leri, IP hash'i, son görülme ve son kullanma tarihi.
3. `subscriptions`: Üyelik durumları (`inactive`, `trialing`, `active`, `past_due`, `paused`, `cancelled`), plan kodları.
4. `results`: Test ve açılım skorları, arketip sonuçları JSON formatında.
5. `consents`: 6698 KVKK ve GDPR rıza kayıtları.
6. `action_tokens`: E-posta doğrulama ve şifre sıfırlama tek kullanımlık token'ları.
7. `webhook_events`: Ödeme ve entegrasyon tekil olay logları (idempotency için).
8. `admin_audit_log`: Yönetici aksiyon logları.
9. `auth_attempts`: Kaba kuvvet (brute-force) engelleme tablosu.
10. `rate_limits`: IP/anahtar tabanlı kayan pencere hız sınırlandırma tablosu.
11. `security_events`: Güvenlik olayları ve anomali logları.
12. `oauth_identities`: Google ve Apple federated identity eşleşmeleri.
13. `gozde_inquiries` (Dinamik Tablo): İletişim formu başvuruları (`id`, `locale`, `name`, `contact`, `topic`, `format`, `message`, `created_at`).
14. `gozde_applications` (Dinamik Tablo): Yorumcu başvuru formları (`id`, `locale`, `full_name`, `email`, `phone`, `specialties_json`, `experience`, `modality`, `languages`, `social`, `bio`, `created_at`).

---

## 5. Çevre Değişkenleri ve Gizlilik

- **Worker Vars (`vars`):**
  - `ENVIRONMENT`: `production` / `preview`
  - `ADMIN_EMAILS`: Yönetici e-posta yetkilendirme listesi
  - `PREMIUM_STARTS_AT`: `2026-09-01T00:00:00+03:00`
  - `PREMIUM_GATE_ENABLED`: `false` (içerikler ücretsiz erişime açık)
  - `COMING_SOON_ENABLED`: `false`
  - `GOZDE_LAUNCH_ENABLED`: `true`
- **Zorunlu / Opsiyonel Secrets:**
  - `GOZDE_ADMIN_PASSWORD`: `/api/gozde-submissions` yönetici paneli erişim şifresi
  - `TURNSTILE_SITE_KEY` & `TURNSTILE_SECRET`: Cloudflare Turnstile anti-bot
  - `PAYMENT_WEBHOOK_SECRET`: HMAC-SHA256 imza doğrulama anahtarı
  - `INDEXNOW_KEY`: Arama motoru anlık indeksleme anahtarı
- **Gizlilik Notu:** Hiçbir gerçek secret veya kullanıcı bilgisi kod deposuna yazılmamıştır. Tüm yerel testler `.dev.vars` üzerinden yürütülür.

---

## 6. Formlar, API, Analytics ve Ölçüm Altyapısı

- **İletişim ve Danışmanlık Formu:**
  - Endpoint: `POST /api/gozde-inquiry`
  - Doğrulama: İsim minimum 2 karakter, iletişim minimum 3 karakter, mesaj minimum 10 karakter, KVKK/GDPR açık rıza onayı zorunlu.
  - Veri Kaydı: D1 `gozde_inquiries` tablosuna parametrik SQL ile güvenli kayıt.
- **Yorumcu Ağı Başvuru Formu:**
  - Endpoint: `POST /api/gozde-apply`
  - Doğrulama: Ad-soyad, e-posta, telefon, uzmanlık alanları (en az 1), deneyim süresi, seans formatı, diller, özgeçmiş.
  - Veri Kaydı: D1 `gozde_applications` tablosuna kayıt.
- **Yönetici Sorgu API:**
  - Endpoint: `GET /api/gozde-submissions`
  - Koruma: `x-admin-password` başlığı veya `key` parametresiyle doğrulama.
- **Ölçüm ve Analytics Paketi:**
  - **Google Consent Mode v2:** Varsayılan olarak `analytics_storage: 'denied'`, `ad_storage: 'denied'`. Çerez izni verildiğinde `granted` yapılır.
  - **GA4:** `G-RW928SX37X`
  - **GTM:** `GTM-PKC69D3L`
  - **Google Ads:** `AW-18090583790`
  - **Microsoft Clarity:** `ysacbtdz22`
  - **Cansu & Umami Kaynak İzleme:** `/cansu-source-beacon.js`
- **Content Security Policy (CSP):**
  - Tüm harici analiz sağlayıcıları (Google, Clarity, Cansu, Turnstile) CSP `script-src`, `connect-src` ve `img-src` direktiflerinde tanımlıdır.

---

## 7. Dil Rotaları ve Çok Dilli Mimari

Sistem 5 bağımsız dilde tam içerik eşliğiyle çalışmaktadır:
- **Türkçe (TR - Kaynak):** `/` (Ana sayfa), `/kesif-alanlari`, `/yaklasim`, `/videolar`, `/blog`, `/iletisim`, `/yorumcu-basvuru`, `/kvkk`, `/gizlilik`, `/kullanim-kosullari`
- **İngilizce (EN):** `/en`, `/en/areas`, `/en/approach`, `/en/videos`, `/en/blog`, `/en/contact`, `/en/apply`, `/en/kvkk`, `/en/privacy`, `/en/terms`
- **Yunanca (EL / Prefix: `/gr`):** `/gr`, `/gr/areas`, `/gr/approach`, `/gr/videos`, `/gr/blog`, `/gr/contact`, `/gr/apply`, `/gr/kvkk`, `/gr/privacy`, `/gr/terms` (Eski `/el` rotaları 301 ile `/gr`'ye yönlendirilir)
- **İspanyolca (ES):** `/es`, `/es/areas`, `/es/approach`, `/es/videos`, `/es/blog`, `/es/contact`, `/es/apply`, `/es/kvkk`, `/es/privacy`, `/es/terms`
- **Arapça (AR - Tam RTL):** `/ar`, `/ar/areas`, `/ar/approach`, `/ar/videos`, `/ar/blog`, `/ar/contact`, `/ar/apply`, `/ar/kvkk`, `/ar/privacy`, `/ar/terms` (`dir="rtl"` ve Arapça tipografi korumalı)

---

## 8. SEO, Manifestolar ve Bot Taraması

- **Kanonik URL:** Her sayfa kendi dilindeki URL'yi kanonik olarak gösterir.
- **Hreflang Matrisi:** 5 dil ve `x-default` (`https://mythborn.co/`) tüm sayfalarda eksiksiz tanımlıdır.
- **XML Sitemaps:**
  - `https://mythborn.co/sitemap.xml`: 150 geçerli canonical sayfa (`application/xml`).
  - `https://mythborn.co/sitemap-video.xml`: Haftalık video yayını için Google Video sitemapi (ham MP4 `content_loc` bağlantılı).
- **Yapay Zekâ ve Ajan Keşfi:**
  - `llms.txt` ve `llms-full.txt`: 5 dilde (`.en.txt`, `.gr.txt`, `.es.txt`, `.ar.txt`).
  - `ai-catalog.json` / `ard.json`: Agentic Resource Discovery v1.0 ve RFC 8141 URN uyumlu katalog.
  - `ai-plugin.json` ve `openapi.json`: OpenAPI 3.1.0 spesifikasyonu.
  - `ai-fact-sheet.json` ve `.txt`: Doğrulanabilir marka bilgi föyü.
- **IndexNow:** Bing, Yandex ve diğer arama motorlarına anlık URL bildirimi entegredir.
- **Eski Sayfa Yönlendirmeleri (301):** Tarot, Katina, eski astroloji kütüphanesi, hesap ve politika sayfaları 301 ile doğrudan en yakın Gözde sayfalarına eşlenmiştir. Eski Shopify e-ticaret sayfaları ise 410 Gone döndürür.
