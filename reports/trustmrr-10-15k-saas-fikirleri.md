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

---

# B2B odaklı SaaS'lar: müşteri adayları (lead) kolay bulunanlar

**Seçim kriteri:** Müşteri bir işletme olmalı. Hedef kitle herkese açık bir kayıttan, dizinden, pazaryerinden ya da topluluktan **listelenebilmeli**. Ürün Claude Code ile makul sürede kurulabilmeli. MRR aralığı burada 5–30 bin $ tutuldu.

| # | Ürün | Doğrulanmış MRR | 30 günlük MRR değişimi | Ne yapıyor | Lead kaynağı (nereden listelenir) | Kurulum |
|---|------|-----------------|------------------------|------------|-----------------------------------|---------|
| B1 | [LocalRank](https://localrank.so) | $26.0K | +8,6% | Yerel SEO paketi: Google Haritalar sıralama takibi (grid), dizin kayıtları (citation), Google Business Profile otomasyonu. 500'den fazla ajans kullanıyor. $47'den başlıyor | Yerel SEO ajansları (Facebook "Local SEO" grupları, LinkedIn), Google Maps'teki işletmeler | Orta |
| B2 | [ChatSEO](https://chatseo.app) | $29.2K | **+19,5%** | Search Console, Analytics ve CMS'e bağlanıp siteyi denetleyen, içerik yazıp yayınlayan yapay zekâ SEO asistanı | WordPress, Webflow ve Shopify site sahipleri; BuiltWith/Wappalyzer ile CMS'e göre listelenebilir | Orta |
| B3 | [Pushouse](https://pushouse.com) | $24.8K | +3,5% | E-ticaret için WhatsApp otomasyonu: sepet hatırlatma, sipariş takibi, site içi pazarlama. **Ticimax, İdeasoft ve Shopify** ile entegre | Türk e-ticaret siteleri: Ticimax ve İdeasoft altyapısındaki mağazalar BuiltWith ile listelenebilir | Orta |
| B4 | [Calendesk](https://calendesk.com) | $21.5K | +0,9% | Terapist, psikolog ve hizmet işletmeleri için randevu, ödeme ve danışan yönetimi | Psychology Today dizini, ülkelerin psikolog ve terapist sicilleri, Google Maps | Kolay |
| B5 | [Lancer.app](https://www.lancer.app) | $21.6K | +6,8% | Upwork'te yeni işleri tarayıp yapay zekâ ile kişiselleştirilmiş teklif (proposal) yazan araç; freelancer ve ajanslar için | Upwork ajans profilleri, freelancer toplulukları | Kolay |
| B6 | [ControlResell](https://controlresell.com) | $21.5K | +10,4% | İkinci el satıcılar (Vinted, eBay vb.) için alış, satış, stok ve kâr takibi | Vinted ve eBay mağazaları, reseller Discord ve Facebook grupları | Kolay |
| B7 | [LeadShark](https://leadshark.io) | $21.3K | -1,8% | LinkedIn'de "yorum yapana rehber gönderiyorum" gönderilerini otomatikleştiriyor: yorum yapanlara otomatik DM | LinkedIn içerik üreticileri ve B2B kurucular (görünür, doğrudan ulaşılabilir) | Orta |
| B8 | [Walead](http://www.walead.ai) | $23.2K | -9,4% | LinkedIn'de yapay zekâ ile kişiselleştirilmiş outreach ve satış otomasyonu | B2B satış ekipleri, SDR'lar, ajanslar (LinkedIn Sales Navigator ile) | Orta |
| B9 | [JourneyFuse](https://journeyfuse.com) | $6.8K | **+21,7%** | Seyahat danışmanları için hepsi bir arada CRM: lead, teklif, rota planı, ödeme, komisyon. Koltuk başına $25/ay. **Mart 2026'da kuruldu** | Seyahat acentesi dernekleri, bağımsız seyahat danışmanı ağları, Facebook grupları | Kolay |
| B10 | [Book the Move](https://www.bookthemove.com) | $5.6K | -26% | Nakliye firmalarına, bölgelerinde evini satışa çıkaran ev sahiplerini bulup onlara kişiselleştirilmiş e-posta gönderiyor. $397–$1.197/ay | ABD'de her nakliye firması **FMCSA** kamu kaydında listeli; Google Maps | Kolay–Orta |
| B11 | [Harper](https://askharper.ai) | $6.2K | -1,1% | İngiltere'deki resmî kamu kayıtlarını (tapu ve şirket sicili) uzman kredi kuruluşları ve müteahhitler için yatırım fırsatı listelerine dönüştürüyor | Kredi kuruluşları, broker'lar, geliştiriciler (Companies House kaydı) | Orta |
| B12 | [Karma](https://karmabot.chat) | $6.1K | 0% | Slack ve Teams için çalışan takdir ve ödül botu | Slack App Directory ve Teams mağazası sayesinde organik dağıtım; LinkedIn'deki İK yöneticileri | Kolay |
| B13 | [ConvertLabs](https://convertlabs.io) | $26.3K | -29% | Yerel hizmet işletmeleri için randevu ve pazarlama yazılımı | Google Maps'teki yerel hizmet işletmeleri | Orta |

### Dikkat çeken bulgu: Glossa'nın ikiz ürünü
trustmrr'da **"freetcf"** adıyla listelenen girişim, Glossa.live ile birebir aynı açıklamayı kullanıyor ("#1 Real-time AI Translation for Churches..."). Bu ürün **$25.8K MRR** yapıyor. Yani kilise çeviri nişinde toplam gelir 38 bin $'ı aşıyor. Bu, nişin gerçek ve büyüyen bir pazar olduğunu doğruluyor.

### B2B listesi için öneri
- **Leadlere en kolay ulaşılanlar (kamu kaydı veya dizin var):** Book the Move (FMCSA), Calendesk (terapist dizinleri), Harper (Companies House), JourneyFuse (seyahat acentesi dernekleri), Pushouse (BuiltWith ile Ticimax/İdeasoft mağazaları). Bu kitleler tek tek listelenip doğrudan soğuk e-postayla ulaşılabilir.
- **Türkiye'de hemen uygulanabilecekler:** Pushouse modeli zaten Türk e-ticaret altyapılarına entegre ve rakipleri az. Calendesk ve JourneyFuse benzeri dikey CRM'ler, Türkiye'deki psikologlar, diyetisyenler ve seyahat acenteleri için de yapılabilir (TÜRSAB üye listesi herkese açık).
- **Şu an büyüyenler:** ChatSEO (+19,5%), JourneyFuse (+21,7%, yalnızca 6 aylık), ControlResell (+10,4%), LocalRank (+8,6%).
- **En hızlı MVP:** Lancer.app, Karma, Calendesk ve JourneyFuse. Bunlar CRUD, randevu ve bot ağırlıklı ürünler; Claude Code ile 1–2 haftada ilk sürüme ulaşılabilir.

---

# Nihai liste: 25 B2B SaaS (satış artıran, faydası tek cümlede anlaşılan, müşterisi Apollo'da bulunabilen)

**Seçim kriterleri:**
1. **Fayda tek cümlede anlatılabilmeli:** "Daha fazla randevu, daha fazla müşteri, daha fazla satış" gibi ölçülebilir bir sonuç vaat etmeli.
2. **Satışı doğrudan artırmalı:** Yalnızca zaman kazandıran verimlilik araçları listeye alınmadı.
3. **Apollo'da hedeflenebilmeli:** Müşteri kitlesi Apollo'nun *Industry*, *Job Title*, *# Employees* ve *Technologies* filtreleriyle net biçimde tanımlanabilmeli.

Tüketici uygulamaları, tek kişilik yaratıcılara yönelik araçlar (Substack, reseller vb.) ve Apollo'da zayıf temsil edilen kitleler (kiliseler, bireysel terapistler) bu listeye alınmadı.

**Sütunlar:** MRR = trustmrr'da doğrulanmış aylık gelir; Δ30g = son 30 günlük MRR değişimi.

| # | Ürün | MRR | Δ30g | Müşteriye tek cümlelik fayda (satış mesajı) | Apollo filtresi (Industry · Title · Çalışan sayısı · Technologies) |
|---|------|-----|------|---------------------------------------------|------------------------------------------------------------------|
| 1 | [PipeLime](https://pipelime.ai) | $19.7K | **+298%** | "Yapay zekâ SDR'ınız 7/24, 40 dilde potansiyel müşteri bulur, kişiselleştirilmiş mesaj atar ve toplantı ayarlar." | Computer Software, Marketing & Advertising, Staffing · Founder, CEO, Head of Sales · 5–200 |
| 2 | [Traxy](https://www.traxy.ai) | $43.3K | **+91%** | "LinkedIn'de sektörünüzdeki içeriklerle etkileşime giren alıcıları bulur, e-posta ve telefonlarını çıkarıp HubSpot'a aktarır." | Computer Software, IT Services · Founder, VP Sales, Head of Growth · 10–500 · HubSpot |
| 3 | [Adspirer](https://www.adspirer.com) | $54.7K | **+30%** | "Reklam ajansı tutmadan Google ve Meta reklamlarınızı yapay zekâ yönetir, reklam harcamasının getirisini (ROAS) artırır." | E-commerce, Retail, Consumer Goods · Founder, Marketing Manager · 1–50 · Google Ads, Facebook Ads |
| 4 | [Rank Prompt](https://rankprompt.com) | $38.2K | **+26,5%** | "ChatGPT ve Perplexity müşterilerinize markanızı mı yoksa rakibinizi mi öneriyor? Ölçün ve düzeltin." | Computer Software, E-commerce, Marketing Agencies · CMO, Head of SEO, Marketing Director · 11–500 |
| 5 | [ChatSEO](https://chatseo.app) | $29.2K | **+19,5%** | "Search Console'a bağlanır, siteyi denetler, içerik yazıp yayınlar: SEO ajansı maliyeti olmadan organik trafik." | Marketing & Advertising, E-commerce · Founder, Marketing Manager · 1–50 · WordPress, Webflow, Shopify |
| 6 | [LeadX](https://leadx.com) | $19.1K | **+18,7%** | "Hedeflediğiniz şirketleri ve karar vericileri sürekli güncellenen verilerle belirler ve satış ekibinize iletir." | Computer Software, Professional Services · VP Sales, RevOps, Head of Growth · 20–1000 · Salesforce, HubSpot |
| 7 | [LocalRank](https://localrank.so) | $26.0K | +8,6% | "Müşterilerinizi Google Haritalar'da ilk 3'e taşır; 90 günde yükselmezse para iadesi." | Marketing & Advertising (Local SEO agency) · Owner, Founder, SEO Manager · 1–50 |
| 8 | [Pushouse](https://pushouse.com) | $24.8K | +3,5% | "Terk edilen sepetleri WhatsApp ile geri kazanır, sipariş bildirimleriyle tekrar satışı artırır." | Retail, Apparel & Fashion, Cosmetics · E-commerce Manager, Founder · 5–200 · Shopify, Ticimax, İdeasoft, WooCommerce |
| 9 | [Orion AI](https://orionaisolutions.ai) | $39.1K | -46% | "Yapay zekâ asistanı hayat sigortası leadlerinizi arar, randevu alır ve üç hatlı otomatik arama yapar." $149/acente/ay | **Insurance** · Agency Owner, Principal, Insurance Agent · 1–200 |
| 10 | [Book the Move](https://www.bookthemove.com) | $5.6K | -26% | "Bölgenizde evini satışa çıkaranları bulur ve onlara sizin adınıza kişiselleştirilmiş e-posta gönderir: özel nakliye leadleri." | Transportation/Trucking (Moving & Storage) · Owner, General Manager · 5–100 |
| 11 | [DM Champ](https://dmchamp.com) | $14.1K | -26% | "WhatsApp ve Instagram'dan gelen her mesaja saniyeler içinde yanıt verir, itirazları karşılar ve randevu alır." | Marketing & Advertising, Medical Practice, Health & Wellness · Owner, Founder · 1–50 |
| 12 | [Converti](https://www.converti.ai) | $11.9K | -5% | "Reklamdan gelen leadi 60 saniye içinde arar, SMS ile takip eder ve satış görüşmesine dönüştürür." | Marketing & Advertising (Ad agency) · Owner, Founder, Head of Performance · 1–50 · Facebook Ads |
| 13 | [1ClickWebsite.ai](https://1clickwebsite.ai) | $13.8K | +14,5% | "Tek tıkla SEO uyumlu WordPress sitesi: ajansınız ayda 10 kat daha fazla site teslim edebilir." | Marketing & Advertising, Web Design · Owner, Founder · 1–20 · WordPress |
| 14 | [Stack Influence](https://stackinfluence.com) | $26.8K | -4% | "Yüzlerce mikro influencer ile ürününüz için otomatik UGC ve satış getiren kampanyalar kurar." | E-commerce, Consumer Goods, Cosmetics · Founder, Marketing Director, Amazon Manager · 5–200 · Shopify, Amazon |
| 15 | [Walead](http://www.walead.ai) | $23.2K | -9% | "LinkedIn'de yapay zekâ ile kişiselleştirilmiş outreach: satış ekibi başına haftalık toplantı sayısını artırır." | Computer Software, Staffing, Consulting · Head of Sales, SDR Manager, Founder · 5–200 |
| 16 | [LeadShark](https://leadshark.io) | $21.3K | -2% | "LinkedIn gönderinize yorum yapan herkese otomatik DM gönderir; etkileşimi leade çevirir." | Management Consulting, Marketing, Coaching · Founder, CEO, Consultant · 1–20 |
| 17 | [Coldsire](https://coldsire.com) | $16.6K | -6% | "Hazır ve ısıtılmış soğuk e-posta kutuları: spam klasörüne düşmeden daha fazla yanıt." | Marketing & Advertising (Lead gen agency) · Founder, Head of Outbound · 1–50 · Instantly, Smartlead |
| 18 | [Lancer.app](https://www.lancer.app) | $21.6K | +6,8% | "Upwork'te yeni ilanlara dakikalar içinde yapay zekâ ile kişiselleştirilmiş teklif gönderir; daha fazla iş kazandırır." | IT Services, Software Development, Design · Founder, Business Development · 2–50 |
| 19 | [JourneyFuse](https://journeyfuse.com) | $6.8K | **+21,7%** | "Lead, teklif, rota planı ve ödeme tek yerde: seyahat acenteniz teklifleri daha hızlı satışa çevirir." | Leisure, Travel & Tourism · Owner, Travel Advisor, Agency Manager · 1–100 |
| 20 | [HotelHero.ai](http://www.hotelhero.ai) | $2.5K | -6% | "OTA komisyonu ödemeden, sosyal medya ve itibar yönetimiyle doğrudan rezervasyonları artırır." | Hospitality · General Manager, Revenue Manager, Owner · 10–200 |
| 21 | [ConvertLabs](https://convertlabs.io) | $26.3K | -29% | "Yerel hizmet işletmeleri için online randevu ve otomatik pazarlama: boş saatleri doldurur." | Consumer Services, Health & Wellness, Cosmetics (salon/spa) · Owner, Manager · 1–50 |
| 22 | [Harper](https://askharper.ai) | $6.2K | -1% | "İngiltere kamu kayıtlarından her hafta yeni kredi ve yatırım fırsatı listesi, iletişim bilgileriyle birlikte." | Financial Services, Real Estate (UK) · Director, Broker, BDM · 1–200 |
| 23 | [Juiced Leads](https://usejuiced.com) | $9.75K | +2,6% | "Satın aldığınız leadleri otomatik olarak en uygun satıcıya yönlendirir; lead başına satış oranını artırır." | Insurance, Renewables & Environment (Solar), Construction · Owner, Sales Manager · 5–200 |
| 24 | [ChatDash](https://chat-dash.com) | $20.1K | -46% | "Ajansınızın markasıyla yapay zekâ chatbot paneli: müşterilerinize aylık ek gelir getiren yeni bir hizmet." | Marketing & Advertising · Agency Owner, Founder · 1–50 |
| 25 | [Blabla](https://www.blabla.ai) | $5.7K | -39% | "Instagram ve TikTok'taki her yorum ve DM'i yapay zekâ ile yanıtlar ve satışa dönüştürür." | E-commerce, Consumer Goods, Cosmetics · Social Media Manager, Founder · 5–200 · Shopify |

**Yedek adaylar:** [Aila](https://www.withaila.com) (mortgage uzmanları; Apollo'da *Loan Officer* unvanıyla çok iyi bulunuyor, ama asıl faydası zaman tasarrufu), [Magnetic Funnels](https://go.magneticfunnels.io) ($9.6K), [Dooken](https://www.dooken.de) ($2.5K; e-ticaret için statik reklam görselleri), [ReddGrow](https://reddgrow.ai) ($7K; B2B Reddit pazarlaması).

> Not: trustmrr'da "Stealth Company" adıyla listelenen başka bir girişim, Orion AI ile birebir aynı açıklamayı kullanıyor ve $39.9K MRR (+5,5%) yapıyor. Sigorta acentelerine yapay zekâ ile satış CRM'i nişinde toplam gelir yaklaşık 79 bin $. Bu, pazarın büyük olduğunu gösteriyor.

## Apollo'da en kolay hedeflenen 8 aday

Aşağıdaki adaylarda Apollo'nun *Industry* ve *Job Title* filtreleri tek başına yeterince net bir liste çıkarıyor. Bunlar soğuk e-posta ile satışa en uygun olanlar:

| Aday | Apollo'da tahmini hedef kitle | Neden kolay |
|------|-------------------------------|-------------|
| Orion AI (sigorta) | Insurance + "Agency Owner/Principal" → on binlerce kişi | Tek bir sektör ve tek bir unvan; acentelerin ağrısı (leadleri geri arayamamak) net |
| Book the Move (nakliye) | Moving & Storage + "Owner" | Firma sahibi kararı tek başına veriyor, satış döngüsü kısa |
| HotelHero (otel) | Hospitality + "General Manager/Revenue Manager" | "OTA komisyonu" acısı evrensel ve kolay anlaşılıyor |
| JourneyFuse (seyahat) | Leisure, Travel & Tourism + "Owner" | Küçük acenteler, hızlı karar |
| LocalRank / 1ClickWebsite / ChatDash / Converti (ajanslar) | Marketing & Advertising + 1–50 çalışan + "Owner" | Apollo'nun en yoğun segmenti; ajanslar ürünü kendi müşterilerine yeniden satabiliyor |
| Pushouse / Stack Influence / Blabla / Adspirer (e-ticaret) | *Technologies* = Shopify/WooCommerce + Retail/Apparel | Teknoloji filtresi tam isabet sağlıyor; mağazanın gelirine göre de filtrelenebiliyor |
| PipeLime / Traxy / LeadX / Walead (B2B satış) | Computer Software + "Head of Sales/Founder" + 10–200 çalışan | Alıcı Apollo kullanıcısıyla aynı profilde; outbound'un değerini zaten biliyor |
| Harper (UK finans) | Financial Services + UK + "Broker/Director" | Coğrafya ve sektör filtresiyle dar ve net bir liste |

## Pazarlama önerisi
- **Mesaj formülü:** "[Sektör] firmaları [sorun] yüzünden [kayıp] yaşıyor. [Ürün], [ölçülebilir sonuç] sağlıyor." Örnek: *"Sigorta acenteleri leadlerin %60'ını 5 dakika içinde arayamadığı için kaybediyor. Asistanımız her leadi 60 saniyede arıyor ve randevu alıyor."*
- **Önce doğrulama:** Kodlamaya başlamadan önce Apollo'dan seçtiğin segmentte 200 kişilik bir liste çıkar ve 3 farklı mesajla soğuk e-posta gönder. Yanıt oranı %3'ün üzerindeyse o nişe gir.
- **Önceliğim:** (1) Sigorta acenteleri için yapay zekâ ile satış (Orion modeli). Niş kanıtlanmış (iki ürün toplam ~79 bin $) ve Apollo'da tam isabetle hedeflenebiliyor. (2) Otel doğrudan rezervasyon (HotelHero). Rakip az, acı net. (3) Nakliye veya ev hizmetleri lead üretimi (Book the Move). Firma sahibine doğrudan ulaşılıyor, satış döngüsü kısa.
