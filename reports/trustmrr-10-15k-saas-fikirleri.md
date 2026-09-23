# TrustMRR: Aylık 10–15 bin $ kazanan, Claude Code ile kolayca kurulabilecek 10 SaaS

**Kaynak:** trustmrr.com (Stripe ile doğrulanmış gelir verileri), 23 Eylül 2026 itibarıyla.
**Yöntem:** Ana sayfa ve 31 kategori sayfasından 917 girişim çekildi. Doğrulanmış MRR'ı yaklaşık 10–15 bin $ olanlar süzüldü. Ardından şu üç kritere uymayanlar elendi:

1. **Kolay kurulum:** Standart web stack'i (Next.js + Supabase/Postgres + Stripe) ve hazır API'lerle (LLM, konuşmadan metne, WhatsApp vb.) yapılabilir olmalı. Donanım, lisans veya ağır altyapı gerektirmemeli.
2. **Ulaşılabilir müşteri:** Hedef kitle net olmalı ve herkese açık listelerde veya topluluklarda bulunabilmeli (dizinler, LinkedIn, Facebook grupları, pazaryerleri).
3. **Gerçek SaaS:** Hizmet satan ajanslar, mobil tüketici uygulamaları, VPN/proxy/IPTV işleri ve kimliğini gizleyen ("Hidden/Stealth") girişimler listeye alınmadı.

| # | Ürün | Doğrulanmış MRR | 30 günlük MRR değişimi | Ne yapıyor | Fiyat | Kurulum zorluğu |
|---|------|-----------------|------------------------|------------|-------|-----------------|
| 1 | [Aila](https://www.withaila.com) | $14.7K | -3,6% | Mortgage uzmanları için yapay zekâ asistanı: görüşme kaydından 1003 başvuru formu, belge kontrol listesi ve gelir hesabı çıkarıyor | $50/kullanıcı/ay | Kolay–Orta |
| 2 | [DM Champ](https://dmchamp.com) | $14.1K | -26% | WhatsApp, Instagram ve Messenger'da çalışan beyaz etiketli yapay zekâ satış temsilcisi; randevu alıyor | $97 / $297 / $497 | Orta |
| 3 | [Hirevire](https://hirevire.com) | $13.9K | +3,1% | Tek yönlü (asenkron) video mülakat: aday telefondan yanıt kaydediyor, yapay zekâ puanlıyor | $49 / $149 / $249 | Kolay |
| 4 | [1ClickWebsite.ai](https://1clickwebsite.ai) | $13.8K | **+14,5%** | Kısa bir formdan tek tıkla SEO uyumlu WordPress sitesi üretiyor; ajanslara beyaz etiketle satılıyor | $49 / $97 / $197 | Kolay |
| 5 | [WriteStack](https://www.writestack.io) | $13.2K | -12% | Substack yazarları için Notes planlama, kendi üslubunda yapay zekâ taslakları ve analiz | $24 / $33 / $100 | Kolay |
| 6 | [Glossa.live](https://glossa.live) | $12.6K | **+7,4%** | Kiliseler ve etkinlikler için 100+ dile anlık sesli çeviri; dinleyici telefondan bir bağlantıyla dinliyor | $5/saat · $99–$499/ay | Kolay–Orta |
| 7 | [Converti (eski adıyla Bookedin)](https://www.converti.ai) | $11.9K | -5,2% | Ajanslar için kod gerektirmeyen yapay zekâ asistanı; potansiyel müşteriyi arıyor, SMS ve e-posta ile takip edip randevu alıyor | $75 / $208 / $291 | Orta |
| 8 | [MagicSlides](https://www.magicslides.app) | $11.1K | -2,2% | Metin, PDF veya URL'den yapay zekâ ile sunum hazırlıyor; Google Slides eklentisi | $29 / $34 | Kolay |
| 9 | [Taja AI](https://www.taja.ai) | $15.3K | -14% | Uzun videoyu shorts, klip, blog ve sosyal medya gönderilerine dönüştürüp otomatik planlıyor (KOBİ, emlakçı, kilise) | Deneme + kredi | Orta |
| 10 | [Comp AI](https://trycomp.ai) | $10.7K | -10% | SOC 2 / ISO 27001 uyumluluğunu otomatikleştiriyor: politika şablonları, kanıt toplama, entegrasyon kontrolleri | Açık kaynak + SaaS | Orta |

> MRR ve 30 günlük değişim trustmrr.com'dan alındı. Fiyatlar ürünlerin kendi sitelerinden.

---

## Her fikir için: nasıl kurulur, müşteriye nasıl ulaşılır

### 1. Aila: mortgage uzmanları için yapay zekâ asistanı
- **Kurulum:** Konuşmadan metne (Deepgram/Whisper), Claude ile yapılandırılmış veri çıkarma (1003 alanları), belge yükleme ve OCR, kontrol listesi arayüzü. CRM entegrasyonu (Zapier/webhook) sonraya bırakılabilir.
- **Müşteriye ulaşma:** ABD'de her mortgage uzmanı **NMLS Consumer Access** üzerinden herkese açık olarak kayıtlı. LinkedIn'de "Loan Officer" unvanıyla milyonlarca profil var. Facebook'ta LO grupları mevcut. Kullanıcı başına fiyat, ekipler içinde yayılmayı kolaylaştırıyor.
- **Yerelleştirme:** Türkiye'de kredi danışmanları ve sigorta acenteleri için benzer bir asistan yapılabilir.

### 2. DM Champ: WhatsApp/Instagram yapay zekâ satış temsilcisi
- **Kurulum:** WhatsApp Cloud API ve Instagram Graph API, web sitesinden bilgi tabanı (RAG), Claude ile konuşma yönetimi, takvim entegrasyonu (Cal.com/Google), çok kiracılı ajans paneli.
- **Müşteriye ulaşma:** Asıl hedef, "AI Automation Agency" (AAA) kitlesi: Skool toplulukları, YouTube, r/AI_Agents ve GoHighLevel grupları. İkinci hedef olan klinikler, estetik merkezleri ve diş hekimlerinin listesi Google Maps'ten çıkarılabilir.
- **Not:** MRR'daki düşüş (-26%) rekabetin sert olduğunu gösteriyor. Tek bir dikeyde uzmanlaşmak (ör. yalnızca estetik klinikleri) avantaj sağlar.

### 3. Hirevire: asenkron video mülakat
- **Kurulum:** Tarayıcıda video kaydı (MediaRecorder), depolama (S3/R2), Whisper ile transkript, Claude ile puanlama rubriği, giriş gerektirmeyen paylaşım bağlantısı. Bu listedeki en yalın MVP.
- **Müşteriye ulaşma:** İşe alım ajansları, KOBİ'ler ve ekip lideri olarak çalışan işe alım uzmanları LinkedIn'de filtrelenebiliyor. Yoğun işe alım yapan sektörler (çağrı merkezi, perakende, BPO) hedeflenebilir. İş ilanı sitelerinde ilan veren şirketler hazır bir lead listesi oluşturuyor.

### 4. 1ClickWebsite.ai: tek tıkla WordPress sitesi (büyüyor: +14,5%)
- **Kurulum:** Formdan Claude ile metin üretimi, hazır bir WordPress teması veya blok şablonu, WP REST API ya da WP-CLI ile otomatik kurulum, görseller için stok API'leri. Beyaz etiketli dışa aktarma.
- **Müşteriye ulaşma:** Web tasarım ajansları ve freelancer'lar: Facebook'taki "WordPress agency owners" grupları, Upwork'teki WordPress freelancer'ları ve GoHighLevel/SaaS ajans toplulukları. Ajanslar siteyi kendi müşterilerine yeniden sattığı için ödeme istekliliği yüksek.

### 5. WriteStack: Substack büyüme aracı
- **Kurulum:** Substack Notes planlama, yazarın geçmiş yazılarından üslup öğrenen Claude ile not ve taslak üretimi, abone ve etkileşim analizi. Proje ayrıca bir MCP sunucusu da sunuyor.
- **Müşteriye ulaşma:** Kitle tamamen Substack içinde ve herkese açık. Substack'in liderlik tablolarında ve kategori sıralamalarında yazarlar listeleniyor, Notes'ta doğrudan etkileşim kurulabiliyor. Kurucu da ürünü kendi Substack'i üzerinden büyütmüş.
- **Benzer fırsat:** Aynı model Beehiiv, Medium veya LinkedIn yazarları için de uygulanabilir.

### 6. Glossa.live: kiliseler için anlık çeviri (büyüyor: +7,4%)
- **Kurulum:** Tarayıcıdan ses akışı (WebRTC), gerçek zamanlı konuşmadan metne dönüştürme, çeviri, metinden sese dönüştürme ve dinleyicilere WebSocket ile yayın. Uygulama indirme veya donanım gerekmiyor, yalnızca QR kod.
- **Müşteriye ulaşma:** Bu listede leadlere **en kolay ulaşılan** fikir. ABD'de 300 binden fazla kilise var ve tamamı Google Maps ile kilise dizinlerinde (church finder vb.) listeleniyor, web siteleri ve e-postaları herkese açık. Çok dilli cemaatler ve göçmen yoğun bölgeler öncelikli hedef.
- **Benzer fırsat:** Aynı altyapı camiler, konferanslar, belediye meclisleri, üniversiteler ve Türkiye'deki uluslararası etkinlikler için de kullanılabilir.

### 7. Converti/Bookedin: ajanslar için yapay zekâ resepsiyonist ve satış asistanı
- **Kurulum:** Sesli arama için Vapi/Retell veya Twilio, SMS/e-posta takip akışları, görsel akış oluşturucu (React Flow), müşterinin göreceği panel. Kullanım bazlı ücrette %20 kâr payı modeli.
- **Müşteriye ulaşma:** DM Champ ile aynı AAA ekosistemi. Ayrıca reklam ajansları hedeflenebilir: gelen leadleri geri arayamıyorlar ve bu sorun doğrudan satış argümanına dönüşüyor. Meta Ad Library'de reklam veren ajanslar listelenebilir.

### 8. MagicSlides: yapay zekâ ile sunum hazırlama
- **Kurulum:** Claude ile sunum iskeleti çıkarma, Google Slides API ya da pptxgenjs ile slayt oluşturma, Google Workspace Marketplace eklentisi.
- **Müşteriye ulaşma:** Dağıtımın büyük kısmını Google Workspace Marketplace sağlıyor (organik trafik). SEO için "PDF to PPT", "YouTube to slides" gibi dönüştürücü sayfalar işe yarıyor. Öğretmen ve öğrenci toplulukları da hedeflenebilir.
- **Not:** Pazar kalabalık. Belirli bir dikeye odaklanmak (ör. yalnızca yatırımcı sunumu veya yalnızca ders planı) farklılaşmayı kolaylaştırır.

### 9. Taja AI: video içeriği yeniden kullanma (repurposing)
- **Kurulum:** FFmpeg ile kesme ve altyazı ekleme, Whisper ile transkript, Claude ile en iyi anları seçme ve gönderi metni yazma, sosyal medya API'leriyle ya da Postiz gibi açık kaynak bir planlayıcıyla zamanlama.
- **Müşteriye ulaşma:** Taja dikey kitleleri hedefliyor: emlakçılar (Zillow ve Realtor dizinleri), kiliseler (vaaz videoları) ve podcast'çiler (Apple/Spotify dizinleri). Bu kitleler herkese açık listelerde bulunabiliyor.

### 10. Comp AI: SOC 2 / ISO 27001 uyumluluk otomasyonu
- **Kurulum:** Politika şablonları (Claude ile şirkete özel hale getirilir), AWS/GitHub/Google Workspace entegrasyonlarıyla otomatik kanıt toplama, görev takibi, denetçi portalı. Comp AI'ın çekirdeği açık kaynak; referans olarak incelenebilir.
- **Müşteriye ulaşma:** Kurumsal müşterilere satış yapmaya başlayan ve SOC 2 raporu istenen B2B startup'lar hedef. Y Combinator dizininde, Crunchbase'deki yeni yatırım haberlerinde ve "SOC 2" içeren iş ilanlarında bulunabilirler. Vanta ve Drata'ya göre çok daha ucuz bir alternatif olarak konumlanabilir.

---

## Ek adaylar: bandın hemen dışında ama değerli (8 adet)

Bu ürünler 10–15 bin $ aralığının biraz altında ya da üstünde kalıyor. Yine de kolay kurulabilir oldukları ve müşterilerine ulaşmak kolay olduğu için listeye eklendi.

| # | Ürün | Doğrulanmış MRR | 30 günlük MRR değişimi | Ne yapıyor | Müşteriye ulaşma | Neden değerli |
|---|------|-----------------|------------------------|------------|------------------|---------------|
| 11 | [SoldComps](https://sold-comps.com) | $17.1K | **+53%** | Anahtar kelimeye göre eBay'de gerçekten satılmış ürünlerin fiyatlarını dönen API (en fazla 200 sonuç) | r/Flipping, reseller Facebook grupları ve Discord'ları, YouTube'daki "flipper" kanalları | En hızlı büyüyen aday. Tek endpoint'lik bir API; Claude Code ile birkaç günde yapılabilir |
| 12 | [SiteJourney](https://sitejourney.ai) | $11.4K | -21% | Kod gerektirmeyen yapay zekâ site oluşturucu; fikirden 60 saniyede site. 4 ayda 40 bin kullanıcı | KOBİ'ler: Google Maps'te web sitesi olmayan işletmeler | 10–15K bandında. 1ClickWebsite'in KOBİ'lere yönelik versiyonu gibi |
| 13 | [Orshot](https://orshot.com) | $8.2K | +8% | Pazarlama görsellerini şablondan otomatik üreten API ve otomasyon aracı (Bannerbear alternatifi) | Zapier, Make ve n8n kullanıcıları, e-ticaret mağazaları, sosyal medya ajansları | Bir şablon motoru ve render API'si. Entegrasyon pazaryerleri ücretsiz dağıtım sağlıyor |
| 14 | [SuperX](https://superx.so) | $19.3K | -3% | X (Twitter) hesabı büyütmek için analiz ve Chrome eklentisi | X'teki içerik üreticileri; herkese açık ve doğrudan DM ile ulaşılabilir | Eklenti ile basit bir panel yeterli. WriteStack'in X versiyonu gibi |
| 15 | [Coldsire](https://coldsire.com) | $16.6K | -6% | Soğuk e-posta için hazır, ısıtılmış e-posta kutuları (DNS/SPF/DKIM kurulumu dahil) | Soğuk e-posta ajansları ve lead gen ajansları (Instantly/Smartlead toplulukları) | Kurulumu otomatikleştirilebilen altyapı işi. Talep sürekli, müşteri kaybı düşük |
| 16 | [Juiced Leads](https://usejuiced.com) | $9.75K | +2,6% | Lead dağıtma ve yönetme platformu (satıcılara lead yönlendirme) | Sigorta, güneş paneli ve ev hizmetleri alanında lead satan şirketler | Klasik bir CRUD ve yönlendirme uygulaması; yerleşik bir B2B nişi |
| 17 | Kısa dönem kiralama misafir otomasyonu (trustmrr'da anonim) | $8.4K | – | Airbnb ve kısa dönem kiralama ev sahipleri için misafir iletişimini ve operasyonu otomatikleştiriyor | Airbnb ev sahibi Facebook grupları, AirDNA verileri, emlak yönetim şirketleri | Hedef kitle kalabalık ve dizinlerden listelenebiliyor; Claude ile otomatik mesajlaşma kolay |
| 18 | [Leverage](https://leverage.immo) | $15.6K | -47% | Emlak yatırımcıları için ilan arama, yatırım analizi ve yapay zekâ ile değerleme (Almanya) | Emlak yatırımcı toplulukları, emlak ilan platformları | Türkiye'de sahibinden.com/emlak verisiyle yerelleştirilebilir. Düşüş sert olduğu için dikkatli olunmalı |

**Kısa yorum:** Ek listede en dikkat çekici olan **SoldComps**: son 30 günde +53% büyümüş, tek bir API'den ibaret ve kitlesi (reseller'lar) çok aktif topluluklarda toplanıyor. **Orshot** ve **SuperX** de kolay yapılabilir ve kendiliğinden yayılabilen ürünler.

---

## Özet ve öneri

- **En hızlı MVP:** Hirevire (#3), 1ClickWebsite (#4), WriteStack (#5) ve MagicSlides (#8). Claude Code ile 1–2 haftada çalışan bir sürüm çıkarılabilir.
- **Leadlere en kolay ulaşılanlar:** Glossa (kilise dizinleri), Aila (NMLS kaydı) ve WriteStack (Substack sıralamaları). Bu üçünde hedef kitle herkese açık ve tek tek listelenebiliyor.
- **Şu anda büyüyenler:** 1ClickWebsite (+14,5%) ve Glossa (+7,4%).
- **Genel çıkarım:** 10–15 bin $ bandındaki başarılı SaaS'ların çoğu **dar bir dikeye** odaklanıyor (kiliseler, mortgage uzmanları, Substack yazarları, WordPress ajansları). Genel amaçlı araçlar yerine, dizinlerden listelenebilen niş bir kitleye yönelik araç yapmak hem kurulumu hem satışı kolaylaştırıyor.
- **Dikkat:** DM Champ (-26%), Taja (-14%) ve WriteStack (-12%) son 30 günde MRR kaybetmiş. Bu, ilgili pazarlarda rekabetin arttığına işaret ediyor olabilir.
