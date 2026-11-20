# Callypso — B2B Büyüme, Güven, SEO & GEO Analizi

**Analiz tarihi:** 20 Kasım 2026 · **Plan dönemi:** 23–27 Kasım 2026 (5 iş günü)
**Yöntem:** Playwright ile sayfa render + mobil test, REA web-bundle analizi, Apify (Instagram profili, Google TR SERP), dns.google ile DNS/e-posta kayıtları, web araması (rakip fiyatları).
**Etiketler:** ✅ Doğrulandı (doğrudan gözlem) · 🟡 Çıkarım (sahada doğrulanmalı) · 🔵 Örnek/öneri

İnteraktif sürüm: `callypso-growth-os/` (Next.js). Görev işaretleme, notlar, filtreler ve metrik takibi orada.

---

## 1. Sonuç: Ne, kime, nasıl satılacak?

| | **Export Agent (birincil)** | **Callypso Engage (ikincil)** |
|---|---|---|
| Müşteri | Ciroya ihracat katkısı olan 10–150 çalışanlı üretici KOBİ. İlk niş: İnegöl/Bursa/Kayseri mobilya | Shopify kullanan Türk D2C markaları (kozmetik, moda, ev) |
| Değer önerisi | Yabancı talebe aynı gün teklif taslağı, hiçbir teklif takipsiz kalmıyor, her mesaj onayınızdan geçiyor | Ücretsiz “Sepet Röntgeni”: kaçan geri kazanım akışları 48 saatte raporlanır, sonra kurulur |
| Kanal | Outbound e-posta + LinkedIn + ihracatçı birlikleri/fuar listeleri | Instagram @sepetrontgeni + analiz sayfası + kişisel cold e-posta |
| Giriş teklifi | 14 günlük pilot, yazılı başarı ölçütü | Ücretsiz analiz → 14 günlük kurulumlu pilot |

**Neden Export Agent önce (🟡):** Rakipler ya müşteri bulmaya odaklanan veri platformu (Bilvio, Volza) ya da hizmet ajansı (Export Miners). Talep → teklif → takip operasyonunu çözen yerel bir ürün görünmüyor. Sözleşme tutarı yüksek, karar verici az, sorun ölçülebilir. Demo zaten mobilya sektörüne göre kurulu. Engage'in pazarı kalabalık (Klaviyo, Omnisend, Insider, Segmentify, wava) ve şu an yalnızca Shopify'a bağlanıyor.

**Güven problemi test edildi, varsayılmadı.** Kanıtlar aşağıda. Kısaca: Satışı engelleyen şey e-posta metninden çok, olumlu yanıt sonrası alıcının gördükleri.

---

## 2. Uçtan uca durum analizi (öncelik sırasıyla)

Biçim: **Problem → Satışa etkisi → Çözüm · Öncelik · Süre**

### P0 — Satışı doğrudan engelleyenler

1. ✅ **www'suz alan adı bozuk.** `callypsotech.com` Hostinger park sayfası (2.57.91.91) gösteriyor, HTTPS TLS hatası veriyor. Canonical, og:url, JSON-LD ve sitemap bu adresi gösteriyor.
   → Adresi yazan her alıcı güvenlik hatası görüyor, Google çelişkili sinyal alıyor.
   → Vercel'e apex ekle, www'ye 301; DNS A kaydını güncelle; canonical'ları www'ye eşitle. · 30–45 dk
2. ✅ **Kanıtsız sosyal kanıt (ana site).** “50+ işletme kullanıyor ★★★★★ 4.9/5”, baş harfli avatarlar, %94/%60/%98 metrikleri. Altbilgi aynı anda “bireysel bir teknoloji girişimi” diyor.
   → Kontrol eden alıcı çelişki bulursa tüm iddialara güvenmez. Yanıltıcı reklam riski de var.
   → Kaldır. Yerine kurucu kimliği ve “ilk 5 pilot müşteri” programı koy. · 1 saat
3. ✅ **Engage'de gerçek olmadığı izlenimi veren yorumlar.** Maria Gomez/Northwind gibi 6 yorum, 8 marka logosu ve “4.9/5 · 2.400+ marka”. Bunlar için doğrulanabilir bir kaynak bulunamadı.
   → Kaldır veya “örnek senaryo” diye etiketle. · 30 dk
4. ✅ **Kanıtsız uyumluluk iddiası, yasal sayfa yok.** “SOC 2 Type II, GDPR ve KVKK uyumlu” yazıyor ama KVKK aydınlatma metni, gizlilik ve çerez politikası yok.
   → SOC 2 ifadesini kaldır. KVKK, gizlilik ve çerez sayfalarını yayınla. · 2–3 saat
5. ✅ **Export Agent'ta bir sonraki adım yok.** Ürün ana sitede geçmiyor. Demoda CTA, tanıtım ve meta açıklama yok.
   → Demonun üstüne şerit: “Bu demoyu kendi kataloğunuzla görün → 15 dk görüşme”. · 1–2 saat
6. 🟡 **E-posta teslim edilebilirliği.** MX Google, SPF yalnızca Google; `google._domainkey` kaydı bulunamadı (seçici farklı olabilir). DMARC `p=none`, raporlar kişisel bir Gmail adresine gidiyor. Resend DKIM'i yalnızca gönderim alt alan adında var.
   → Workspace'te DKIM'i doğrula/aç. Cold e-posta için ayrı alan adı kur ve ısındır. mail-tester ile ≥ 9/10 hedefle. · 1 saat + 2 hafta ısınma

### P1 — Güven ve dönüşüm

7. ✅ **Odak yok.** Ürün sayısı metinde tutarsız (“altı platform”, “6 ÜRÜN”, “dört platform”). Klinikten e-ticarete herkese satılıyor. → Hero'yu iki ürüne ayır, diğerlerini “erken erişim”e taşı. · 3 saat
8. ✅ **Engage mesaj uyumsuzluğu.** Ana site “WhatsApp ön planda” diyor, ürün sayfası “Email + SMS” diyor ve WhatsApp listelemiyor. Google AI Özeti de Engage'i WhatsApp ürünü olarak anlatıyor. → Tek tanım yaz, her yerde aynısını kullan. · 1 saat
9. ✅ **Engage Türkiye'ye uymuyor.** Fiyatlar $, örnekler İngilizce, karşılaştırma Mailchimp'le, entegrasyon yalnızca Shopify. Altbilgideki `callypsoengage.com` alan adı yanıt vermiyor. → TL fiyat/pilot teklifi ve Türkçe örnek veri koy, alan adını kaldır. · 2 saat
10. ✅ **Engage SSS geliştirici şablonu gibi.** “Teknoloji nedir? Next.js 16…”, “Vercel'e gönder” cevapları var; İYS için gelecek zaman kullanılıyor. → Alıcı soruları ile değiştir. · 30 dk
11. ✅ **Kurucu görünmüyor.** Tüm CTA'lar kişisel bir cal.com takvimine gidiyor. Telefon, LinkedIn, adres ve fotoğraf yok. → “Kurucu ile tanışın” bölümü, WhatsApp ve form ekle. · 2 saat
12. ✅ **Paylaşım görseli ve logo.** og:image SVG (LinkedIn/WhatsApp önizleme göstermez), JSON-LD'deki `logo.png` 404 veriyor. → PNG görsel yükle. · 30 dk
13. ✅ **Instagram ürüne bağlı değil.** @sepetrontgeni: 6 takipçi, 38 gönderi, bio'da bağlantı yok, işletme hesabı değil, Callypso adı hiç geçmiyor. Son videolarda 0–20 beğeni ve 0 yorum var; “yorumlara REHBER yaz” çağrısı karşılıksız kalıyor. → İşletme hesabına geç, bio bağlantısı ve otomatik DM kur. · 2 saat
14. ✅ **Engage “Satışa ulaş” butonu** satışa değil /signup'a gidiyor. → Takvim/form. · 10 dk (P2)

### Olumlu bulgular (✅)
- Performans iyi: Ana sayfa yaklaşık 1,3 sn'de yükleniyor, 8 istek atıyor, konsol hatası yok. Üç sitede de 390 px mobilde yatay taşma yok.
- Export Agent demosu dürüst ve sektöre özel: “Demo modu” ve “Gerçek yapay zekâ bağlı değildir” etiketleri, İnegöl mobilya senaryosu, gönderim öncesi onay akışı. Bu, en güçlü güven varlığı.
- REA bundle analizinde Export Agent demosunda ağ API uç noktası bulunmadı (Evidence `ev_fcd07843…`), yani demo tamamen tarayıcıda çalışan bir senaryo. Engage'de yalnızca `/api/auth/login` adayı görüldü (`ev_e268af36…`). **Sonuç:** Pilotlar yarı manuel (“ekip + ajan”) yürütülmeli ve bu dürüstçe söylenmeli.

### 10 soruya kısa cevap
| Soru | Durum |
|---|---|
| İlk 5 saniyede değer önerisi | ❌ “Her Kanalda Yapay Zeka”, kime ne çözdüğünü söylemiyor |
| Profesyonel/güvenilir görünüm | ⚠️ Tasarım iyi; kanıtsız iddialar, kırık apex alan adı ve yasal sayfa eksikliği güveni düşürüyor |
| Ürünlerin çözdüğü problem | ⚠️ Engage net (retention). Export Agent ana sitede hiç yok |
| Hedef müşteri | ❌ Herkes (klinik, hukuk, restoran, e-ticaret) |
| Demo/toplantı CTA | ⚠️ Ana sitede bol ama tek kanal (cal.com). Export demoda hiç yok |
| Referans/ekip/iletişim | ❌ Gerçek referans, ekip ve telefon yok |
| Fiyat/teklif | ⚠️ Engage'de $ fiyat var. Şirket sitesi ve Export Agent'ta yok |
| Mobil, hız, teknik SEO | ✅ Hız ve mobil iyi. ❌ Apex alan adı, SVG og-image, # sitemap |
| Formlar ve akış | ⚠️ Form yok; tüm akış takvime bağlı |
| Demo satın alma isteği oluşturuyor mu | ✅ Export demo gerçekçi. ⚠️ Engage demo İngilizce ve $ veri kullanıyor |

---

## 3. SEO & GEO (ek odak)

**SEO durumu (✅):**
- Google'da yalnızca 1 sayfa indeksli. Sitemap `#` bağlantılarından oluşuyor ve Google bunları ayrı sayfa saymıyor.
- “callypsotech” aramasında site ilk 9 organik sonuçta yok. “callypso” aramasında Domino's “Callypso Pizza”, callypso.net ve Kalipso çıkıyor. “GeoAdra” aramasında GeoGebra çıkıyor.
- Ürünler `vercel.app` alt alan adlarında: robots/sitemap yok, indekslenmemişler.
- Teknik temel iyi: `lang="tr"`, meta açıklama, robots, canonical (yanlış adrese), hreflang, FAQPage/Organization/SoftwareApplication şemaları mevcut.

**GEO durumu (✅/🟡):**
- Google AI Özeti CallypsoTech'i tanıyor ve ürünleri listeliyor (✅). Ancak Engage'i “WhatsApp Business API platformu” diye anlatıyor; bu, ana sitedeki tutarsız metinden geliyor.
- `llms.txt` yok. Organization şemasında `founder` ve `sameAs` yok. Şirket tanımı başlık, meta ve snippet'te farklı.
- Üçüncü taraf kaynak yok. Rakipler karşılaştırma yazıları (Bilvio: “Volza mı Bilvio mu?”) ve dizin incelemeleri (saasmetre: Segmentify, Netmera) ile AI yanıtlarına giriyor.

**Gelişmesi gereken noktalar (öncelik sırasıyla):**
1. Apex → www 301; canonical, sitemap ve JSON-LD tek adreste (P0)
2. PNG og-image ve logo (P1)
3. Gerçek URL'ler: `/ihracat-ajani`, `/engage`, `/sepet-rontgeni`; sektör sayfaları (P1)
4. Anahtar kelimeli H1 + Search Console kurulumu (P1)
5. `llms.txt` + Organization `founder`/`sameAs` + her yerde aynı tek cümlelik tanım (P1)
6. Engage'in WhatsApp tanımını düzelt; yanlış AI özetinin kaynağı bu (P1)
7. Ürünleri `export.callypsotech.com` / `engage.callypsotech.com`'a taşı. Demo panellerine noindex, açılış sayfalarına index ver (P1–P2)
8. saasmetre, F6S, Product Hunt ve LinkedIn şirket sayfası kayıtları (P2)
9. Soru-cevap formatlı rehberler: “İhracatta teklif takibi nasıl yapılır”, “Klaviyo alternatifi Türkiye”, “Bilvio/Volza ile bulunan alıcıya ilk 48 saatte ne yazılır” (P2)
10. Ayda bir, 10 hedef soruyu ChatGPT, Gemini ve Perplexity'de sor; markanın geçip geçmediğini kaydet (P2)

---

## 4. Rakip ve pazar analizi

### Engage
| Rakip | Hedef | Güven yöntemi | Fiyat (kaynak) | Callypso fırsatı |
|---|---|---|---|---|
| Klaviyo | Shopify D2C | Büyük logolar, ekosistem | Ücretsiz 250 profil; e-posta ~20 $/ay'dan ([3. taraf](https://chatarmin.com/en/blog/klaviyo-pricing)) | TL, İYS, Türkçe kurulum yok |
| Omnisend | KOBİ e-ticaret | Uygulama puanları | Standard ~16 $, Pro ~59 $ ([resmi yardım](https://support.omnisend.com/en/articles/3533018-omnisend-pricing-plans-2026), 3. taraf) | Yerel SMS/İYS yok |
| Insider One | Kurumsal | Kurumsal vakalar (Turkcell, Eureko) | Açık fiyat yok ([site](https://insiderone.com/about-us/)) | KOBİ'ye pahalı ve karmaşık |
| Segmentify | Büyük katalog | IdeaSoft entegrasyonu, karşılaştırma sayfaları | Teklif bazlı ([saasmetre](https://saasmetre.com/arac/segmentify)) | Küçük markaya fazla |
| wava | Shopify WhatsApp | 4.8 puan (70 değerlendirme), Meta Tech Provider | Ücretsiz; 17,99 $/30 gün ([resmi](https://wavacarts.com/)) | Sadece WhatsApp |

### Export Agent
| Rakip | Hedef | Güven yöntemi | Fiyat (kaynak) | Callypso fırsatı |
|---|---|---|---|---|
| Bilvio | İhracatçı | Kendi GTİP kodunla canlı demo, SEO karşılaştırmaları | Açık fiyat bulunamadı ([site](https://bilvio.com/tr/)) | Müşteri buluyor; talep → teklif → takibi çözmüyor |
| Export Miners | Üretici | “2025: 15,2 M USD”, referans, kalite belgesi, KVKK | Firmaya özel ([SSS](https://www.exportminers.com/sikca-sorulan-sorular)) | Ajans; firmada kalıcı sistem bırakmıyor |
| Volza | Veri arayan | Kapsam, deneme | Kademeler var, tutarlar çelişkili 🟡 ([resmi](https://volza.com/pricing/)) | Sadece veri |
| Apollo.io | B2B satış | G2, kullanıcı tabanı | Basic 49 $, Pro 79 $ /kullanıcı/ay yıllık ([3. taraf](https://www.knowlee.ai/blog/tools/apollo-io-pricing-2026)) | İhracata özel teklif/Incoterms yok |

**Rakipler nasıl ikna ediyor?** Kanıtla ikna ediyorlar: kişisel canlı demo, sayısal sonuç ve referans, mağaza puanı, ücretsiz plan. Kanıtsız puan kullanan yok.

**Satın almayı etkileyen özellikler:**
- Export Agent: katalogdan fiyatlı teklif taslağı, alıcının dilinde yanıt, yanıtsız teklif hatırlatması, onay akışı
- Engage: kendi verisiyle kaçan gelir tahmini, İYS uyumu, TL fiyat, kurulumun Callypso tarafından yapılması

**Eklenmesi önerilenler (puanlı):** Tam liste uygulamada; değer, maliyet ve etkiye göre sıralı.
- Export Agent: demo CTA şeridi (4/1/5), açılış sayfası (4/2/5), takip sekansı (5/3/5), proforma PDF (4/2/4), Gmail/Outlook bağlantısı (5/4/4)
- Engage: Sepet Röntgeni sayfası (4/2/5), TL fiyat ve Türkçe demo (3/1/4), ikas entegrasyonu (5/4/4), WhatsApp kanalı (4/5/3)

**Farklılaşan, ölçülebilir teklif:**
- Export: “14 günde yanıtsız tekliflerinizin tamamı takip edilmiş ve yeni taleplere ilk yanıt süreniz ölçülmüş olacak; olmazsa ücret yok.”
- Engage: “48 saatte ücretsiz Sepet Röntgeni; 14 günde 1 akış canlıda ve geliri panelde.”

---

## 5. Satış ve güven sistemi

Her aşama için güven unsuru, materyal, CTA, metrik ve otomasyon uygulamadaki **Satış Hunisi** bölümünde. Özet:

- **Cold Email:** 80 kelimeyi geçmesin, bağlantı içermesin, tek soru sorsun. Ayrı bir cold e-posta alan adı kullan. Hedef olumlu yanıt ≥ %3 (🔵 varsayım).
- **Loom:** Yalnızca olumlu yanıttan sonra gönder. 90–120 sn, alıcının sitesi ekranda, demo verisinin “örnek” olduğunu açıkça söyle.
- **Demo:** Her sayfada “kendi kataloğunla gör” CTA'sı olsun.
- **Teklif:** 1 sayfa, TL, yazılı başarı ölçütü ve ölçüt tutmazsa iade.
- **Referans:** Sahte referans kullanma. İlk 3 pilot “kurucu müşteri” programıyla gerçek referans üretsin.

Hazır metinler (🔵): cold e-posta, gün 3 takibi, Loom senaryosu, pilot teklif şablonu, Sepet Röntgeni mesajı. Hepsi uygulamada, kopyalanabilir.

---

## 6. Inbound

| Kanal | Ürün | Katkı (🟡) | İş yükü |
|---|---|---|---|
| Instagram @sepetrontgeni | Engage | Orta; 60–90 günde ilk başvurular | 4–5 saat/hafta |
| SEO + blog | Engage | Düşük-orta; 3–6 ayda birikir | 2–3 saat/hafta |
| E-posta nurture (5 e-posta) | Engage | Yüksek (analiz → pilot) | Tek seferlik 3 saat |
| LinkedIn kurucu profili | Export | Yüksek; outbound'u ısıtır | 3 saat/hafta |
| Sektörel içerik + SEO | Export | Orta; GEO için kritik | 2 saat/hafta |
| Ücretsiz süreç analizi | Export | Çok yüksek; doğrudan pilota gider | 1 saat/analiz |

---

## 7. 5 iş günlük plan (23–27 Kasım 2026)

| Gün | Görev | Tamamlanma kriteri |
|---|---|---|
| Pzt 23 | 1) Kırık alan adını düzelt · 2) Kanıtsız iddiaları ve yorumları kaldır | https://callypsotech.com → www, hata yok · güven listesi T4/T5/T7/T10 |
| Sal 24 | 1) E-posta teslim testi + DKIM + cold alan adı · 2) Export demo CTA şeridi | mail-tester ≥ 9/10 · demoda görüşme butonu |
| Çar 25 | Ana sayfayı iki ürüne odakla + kurucu bölümü + KVKK/gizlilik/çerez | T1/T2/T8/T9/T19 |
| Per 26 | Export Agent outbound paketi: 50 firmalık liste, sekans, pilot teklifi | 50 satır + gözlem notu |
| Cum 27 | 1) İlk 20 e-posta + LinkedIn · 2) Instagram bağlantısı + llms.txt | 20 gönderim kaydı · /llms.txt 200 |

## 8. 30/60/90 gün

- **30 gün (hedef: 2 ücretli pilot):** Export açılış sayfası (TR/EN), ürün alt alan adları, haftada 100 hedefli e-posta, Sepet Röntgeni sayfası ve nurture, Engage TL fiyat, Search Console ve GEO takibi
- **60 gün (hedef: ilk gerçek vaka çalışması):** Pilot vaka çalışması, Gmail/Outlook bağlantısı, proforma PDF, dizin kayıtları, 4 SEO rehberi, ROI hesaplayıcı
- **90 gün (hedef: tekrarlanabilir sistem):** İkinci niş, ikas entegrasyonu, fuar sonrası takip paketi, referans ve ortaklık programı, fiyatları satış verisiyle güncelleme

---

## 9. Site yapısı, İhracat Teklif Röntgeni, profesyonel görünüm ve form ile lead toplama

**Site yapısı:** Tek ana site (`www.callypsotech.com`) olsun. Ürün tanıtımları `/ihracat-ajani` ve `/engage` altında, ücretsiz analizler `/teklif-rontgeni` ve `/sepet-rontgeni` adreslerinde yer alsın. Demolar `demo.callypsotech.com` altında ve noindex olsun; gerçek müşteri paneli ileride `app.callypsotech.com` olur. Cold e-postada link verilmez. Demo linki yalnızca olumlu yanıttan sonra, Loom videosuyla ve takip edilebilir bir parametreyle (`?firma=…&ref=loom`) gönderilir.

**İhracat Teklif Röntgeni: oluşturulmalı (🟡).** İki kademeli kurulmalı, çünkü ihracatçı teklif dosyalarını paylaşmak istemeyebilir:
1. **Sayfadaki test:** 8 soruluk öz değerlendirme sonunda ekranda bir “Teklif Takip Skoru” (0–100) görünür; detaylı rapor e-postayla gelir. Belge istenmez.
2. **Ücretsiz görüşme:** 30 dakikalık analiz görüşmesinde son 10 talep, dosya alınmadan ekran paylaşımıyla incelenir. 48 saat içinde 1 sayfalık rapor gönderilir.

Takip e-postaları: gün 0 / 2 / 5 / 9 / 14. Cold e-postada ancak 2. veya 3. takipte teklif edilir; LinkedIn'de ve e-posta imzasında doğrudan link verilir.

**Profesyonel görünüm (✅ gözlemler):**
- 12 emoji ikon kullanılıyor → tutarlı bir SVG ikon seti
- Favicon yok, `logo.png` 404 veriyor → favicon ve gerçek logo
- 15 buton aynı takvime gidiyor → tek ana CTA: “Ücretsiz analiz al”
- Sitede hiç görsel yok → “örnek veri” etiketli gerçek ürün ekran görüntüleri
- Sahte “canlı görüşme” ve “847 lead” kartları → “örnek” etiketi
- Kişi ve unvan bilgisi yok → kurucu bölümü ve altbilgide yasal bilgiler
- 404 sayfası Vercel'in markasız hata metni → özel 404 sayfası
- H1 belirsiz → “kime + sonuç” anlatan H1

**Form ile e-posta toplama:**
- **Nereye:** Hero'daki “Ücretsiz analiz al” butonu, iki analiz sayfası, demo şeridi ve rehber yazılarının sonundaki PDF. Açılır pencere (pop-up) kullanılmamalı.
- **Kaç alan:** Başta en fazla 4 alan; ihracat ve e-ticaret için alanlar uygulamada listeli.
- **KVKK:** Formun altına aydınlatma metni linki konur; bu bir bilgilendirmedir, onay kutusu gerekmez. Pazarlama e-postası için ayrı, işaretsiz ve isteğe bağlı bir onay kutusu konur. Onayın kaydı tutulur. Tacir ve esnafa gidecek ticari iletiler ve İYS durumu bir hukukçuya teyit ettirilmeli.
- **Teknik altyapı (önerilen):** Next.js formu → sunucu tarafında API route → Supabase'e kayıt + Resend ile otomatik e-posta. Resend'in DKIM kaydı gönderim alt alan adında zaten mevcut (✅). En hızlı alternatif Tally → Google Sheets.
- **Hedefler (🔵 varsayım):** ziyaret → form ≥ %10, form → görüşme ≥ %20, görüşme → pilot ≥ %30.

---

## 10. İhracat için ayrı Instagram sayfası (kitle toplama amacıyla)

**Soru:** @sepetrontgeni gibi genel gönderilerle ihracatçı kitlesi toplayan bir sayfa açılmalı mı?

**Cevap (🟡): Evet, ama şirket hesabı olarak değil medya/konu sayfası olarak, 90 günlük test şeklinde.**

**Kanıt (✅ Apify, 20.11.2026):**

| Hesap | Takipçi | Gönderi | Etkileşim |
|---|---|---|---|
| @ihracatinmedyasi (konu/medya) | 38.654 | 212 | Ort. 99 beğeni, 2,2 yorum |
| @tradeatlas (şirket) | 2.262 | 967 | Ort. 1,8 beğeni, 0 yorum |
| @exportminers (ajans) | 1.538 | 183 | Ort. 1,8 beğeni, 0 yorum |
| @bilvio (şirket) | 276 | 346 | Son gönderi verisi dönmedi |
| #ihracat (31 gönderi) | — | — | Medyan 44 beğeni. Öne çıkanlar: destek/mevzuat yorumu, gerçek sipariş hikâyesi (240 beğeni, 63 yorum), görüş paylaşımı |
| @sepetrontgeni | 6 | 38 | 0–20 beğeni |

**Yorum:**
- Instagram'da ihracatçı kitlesi var ve konu sayfası formatında toplanabiliyor.
- Ürün tanıtan şirket hesapları ise etkileşim almıyor.
- Ayrışma alanı boş görünüyor: büyük hesap haber veriyor, “tekliften siparişe pratik satış taktikleri” veren bir sayfa görünmüyor.
- Risk: Aynı format e-ticarette henüz tutmadı (@sepetrontgeni: 6 takipçi). Önce aşağıdaki dersler uygulanmalı.

**Nasıl yapılmalı:**
- **İsim:** “İhracat Röntgeni” veya “Teklif Röntgeni”. Kullanıcı adının müsait olup olmadığı kontrol edilmedi.
- **Ritim:** Haftada 3 gönderi, LinkedIn'deki içeriklerden üretilerek:
  1. Gündem/destek yorumu
  2. Sahadan hikâye veya pazar efsanesi
  3. Şablon gönderisi (“ŞABLON” yazana DM ile 3 İngilizce takip e-postası)
- **@sepetrontgeni'den dersler:**
  - İlk 2 saniyede kanca (rakam veya soru)
  - Yüz ya da ses kullanımı
  - Bio'da net bir vaat
  - Otomatik DM
  - İlk 1.000 takipçi için iş birliği ve dış kanallardan yönlendirme (hesap sıfırdan kendiliğinden büyümez)
- **Takipçiden müşteriye akış:** Takip → PDF (DM) → bio linkindeki ücretsiz Teklif Röntgeni testi → 30 dk analiz görüşmesi → Export Agent pilotu.
- **90 gün hedefleri (🔵 varsayım):**
  - 30. gün: 150+ takipçi, 10 PDF talebi
  - 60. gün: 500+ takipçi, ilk 3 test
  - 90. gün: 1.000+ takipçi ve en az 1 görüşme adayı
  - Tutmazsa emek outbound'a kaydırılır.
- **LinkedIn'in rolü:** Karar vericiye doğrudan ulaşan ana satış kanalı olarak kalır.

---

## Doğrulanamayanlar / sınırlar
- Cold e-postaların hangi alan adından ve hangi araçla gönderildiği bilinmiyor. Teslim edilebilirlik bulgusu bu yüzden 🟡.
- Engage dashboard'unun giriş arkası incelenmedi; yalnızca “Demo ile devam et” girişi görüldü.
- ChatGPT, Gemini ve Perplexity doğrudan sorgulanamadı. GEO değerlendirmesi Google AI Özeti ve SERP'e dayanıyor.
- Instagram'da izlenme sayıları scraper'dan dönmedi; yalnızca beğeni ve yorum sayıları var.
- Rakip fiyatlarının bir kısmı üçüncü taraf kaynaklardan; satın alma kararından önce resmi sayfadan teyit edilmeli.
- Gerçek müşteri sayısı, geçmiş dönüşüm oranları ve e-posta metrikleri paylaşılmadı. Hedef oranlar 🔵 başlangıç varsayımı.
