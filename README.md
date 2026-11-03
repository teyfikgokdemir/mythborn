# Mythborn.co — Astroloji ve Sembolik Farkındalık Platformu

Mythborn (`mythborn.co`), Cloudflare Workers ve Cloudflare D1 üzerinde çalışan, sıfır ücretli harici API bağımlılığıyla tasarlanmış, 5 dilli (Türkçe, İngilizce, Yunanca, İspanyolca, Arapça) yüksek performanslı astroloji ve sembolik danışmanlık platformudur.

---

## ✦ Temel İlkeler ve Mimari Kuralları

1. **Sıfır Ücretli API:** Gökyüzü ve astrolojik hesaplamalar için ücretli harici servisler veya abonelikler kullanılmaz. Tüm gezegen pozisyonları, açılar ve ev sistemleri yerel ve açık kaynaklı `astronomy-engine` kütüphanesiyle jeosantrik ekliptik koordinatlar üzerinden hesaplanır.
2. **5 Dil Eşitliği:** Sistem Türkçe (kaynak dil), İngilizce (`/en`), Yunanca (`/gr`), İspanyolca (`/es`) ve Arapça (`/ar`, tam RTL desteği) olarak çalışır. Dil rotalarının hiçbir koşulda kaybolmasına izin verilmez.
3. **Güvenlik ve Gizlilik:** Kod deposuna veya commit loglarına asla gerçek token, API key, veritabanı şifresi veya kişisel veri yazılmaz. Değişkenler `.dev.vars` veya Cloudflare Worker Secrets üzerinde tutulur.
4. **Geri Alınabilirlik (Rollback):** Her aşama izole bir git branch'inde yürütülür, tüm statik ve regresyon testleri geçmeden ana dala birleştirilmez.

---

## ✦ Gereksinimler

- **Node.js:** `>= 20.0.0`
- **Paket Yöneticisi:** `npm` (v10+)
- **Cloudflare Wrangler CLI:** `^4.153.0` (projede devDependency olarak yüklüdür)

---

## ✦ Kurulum ve Yerel Çalıştırma

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Çevre değişkenlerini yerel geliştirme için hazırlayın
cp .env.example .dev.vars

# 3. Yerel SQLite D1 veritabanı migrasyonlarını uygulayın
npm run db:migrate:local

# 4. Geliştirme sunucusunu başlatın (Cloudflare Worker simülatörü)
npm run dev
```

Sunucu varsayılan olarak `http://localhost:8787` adresinde açılır.

---

## ✦ Test ve Denetim Komutları

Projedeki tüm değişiklikler öncesinde ve sonrasında aşağıdaki test suitleri çalıştırılmalıdır:

```bash
# Tüm denetim suitini (syntax, preview/prod izolasyon, astroloji regresyon, 5 dil, SEO) çalıştırır:
npm run audit

# Temel astroloji ve regresyon testleri:
npm test

# Sözdizimi ve statik AST kontrolü (70+ dosya):
npm run typecheck

# SEO ve kanonik URL kontrolü:
npm run seo:audit

# Arama motorlarına (Bing, Yandex vb.) anlık IndexNow URL gönderimi:
npm run indexnow:submit
```

---

## ✦ Canlı Dağıtım (Deployment)

Dağıtım komutları otomatik olarak `npm run audit` denetimini koşturur; herhangi bir test başarısız olursa derleme durdurulur.

```bash
# Önizleme (Preview / Staging) ortamına dağıtım:
npm run preview

# Canlı (Production) ortama dağıtım:
npm run deploy

# Canlı D1 veritabanı migrasyonları (Dikkat: Onay gerektirir):
npm run db:migrate:production
```

---

## ✦ Dokümantasyon Dizini (`docs/`)

- [`docs/current-site-audit.md`](docs/current-site-audit.md): Mevcut sistem, veritabanı, form ve API analizi
- [`docs/current-url-inventory.csv`](docs/current-url-inventory.csv): Aktif, yönlendirilen ve silinen tüm URL envanteri
- [`docs/progress.md`](docs/progress.md): Aşamalı uygulama takip tablosu
- [`docs/handoff.md`](docs/handoff.md): Başka bir yapay zekânın veya mühendisin projeyi devralma rehberi
- [`docs/rollback-plan.md`](docs/rollback-plan.md): Olası bir hata anında adım adım geri dönüş planı
