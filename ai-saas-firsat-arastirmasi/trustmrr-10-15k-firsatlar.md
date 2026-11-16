# TrustMRR: Aylık $10–15K Gelirli Girişimlerden 10 Fırsat

**Tarih:** 16 Kasım 2026
**Kaynak:** [TrustMRR](https://trustmrr.com). Buradaki gelirler Stripe, Paddle gibi ödeme sağlayıcılarının API'sinden çekilen, **doğrulanmış** rakamlardır. Açıklama metinlerini ise kurucular kendisi yazıyor.

## Yöntem ve sınırlama

- TrustMRR'da yaklaşık 12.700 girişim var. Filtreleme ve sayfalama yalnızca ücretli/anahtarlı API'de mümkün. Site, kendi `llms.txt` dosyasında sitenin toplu olarak kazınmamasını istiyor.
- Bu nedenle yalnızca herkese açık liste sayfalarını taradım: ana sayfa, 25 kategori sayfası, satılık girişimler (acquire), akış (feed), arama ve şampiyona sayfaları. Bu sayfalarda **741 girişim** vardı (toplamın ~%6'sı). Bunların **55'i aylık $9,5–16K bandında**. Bu 55 girişimden B2B ve otomasyonla ilgili 20 tanesinin TrustMRR profilini (`.md` sayfası) tek tek okudum.
- **Örneklem tam değil.** Liste sayfaları daha çok yüksek gelirli ve öne çıkarılan girişimleri gösteriyor. Tam tarama için bir TrustMRR API anahtarı gerekir; filtre `minMrr=1000000&maxMrr=1500000` (değerler cent cinsinden).
- Tüketiciye yönelik veya bu çalışmanın odağı dışında kalan girişimler elendi: VPN, IPTV, yüz puanlama uygulamaları, Discord ve Substack araçları. Ayrıca "fark edilmeden" mülakat kopyası veren AI (Natively) **etik gerekçeyle** elendi.

## Sıralama (aynı 100 puanlık ölçüt)

| # | Fırsat (TR/AB uyarlaması) | ABD/AB'deki doğrulanmış örnek | MRR | 30 günlük MRR büyümesi | Puan |
|---|---|---|---|---|---|
| 1 | Instagram + WhatsApp DM'lerini yanıtlayıp satış görüşmesi ayarlayan AI asistan | AI DM Setter (Fransa, 2–5 kişi) | $14.826 | −%28,9 | **81** |
| 2 | Reklam veren markalar için AI yorum moderasyonu + yanıt + DM'e yönlendirme | Gizli girişim (İtalya, satılık) | $12.167 | −%0,8 | **79** |
| 3 | Seyahat acenteleri için dikey CRM | JourneyFuse (ABD, Mart 2026'da kuruldu) | $12.972 | **+%38,6** | **77** |
| 4 | Müşteri yorumlarından reklam ve ürün içgörüsü üretme (Claude/MCP içinde) | Adlicio (ABD) | $13.545 | +%30,8 | **73** |
| 5 | Ajans ve serbest çalışanlar için "web sitesi olmayan yerel işletmeyi bul + AI ile site yap + teklif yaz" | 1clickwebsite.ai ($13.740, tek kişi) + Prospo | $13.740 | −%8,7 | **71** |
| 6 | Lead yönlendirme ve dağıtım platformu | Juiced Leads (ABD) | $10.500 | +%10,5 | **71** |
| 7 | Asenkron video ön mülakat + AI puanlama | Hirevire (Hindistan, 21 dil) | $14.166 | +%3,3 (30 günlük gelir +%42) | **70** |
| 8 | Şablondan görsel/PDF/video üreten otomasyon API'si | Orshot (İngiltere) | $12.938 | +%39,3 | **69** |
| 9 | Gayrimenkul yatırımcısı için AI değerleme ve fırsat analizi | Leverage (Almanya) | $12.447 | −%1,1 | **67** |
| 10 | AI destekli, insan onaylı LinkedIn içerik hizmeti (paket hizmet) | Redak (Fransa, Eylül 2026'da kuruldu) | $9.662 | yeni | **66** |

## Ayrıntılar

### 1. Instagram + WhatsApp DM'lerinden satış görüşmesi ayarlayan AI asistan (81)
- **Örnek:** [AI DM Setter](https://trustmrr.com/startup/ai-dm-setter). MRR $14.826; son 12 ayda $180.937 ciro; 2–5 kişi, sermaye almamış. Gelen DM'leri kurucunun ağzından yanıtlıyor, adayı kalifiye ediyor, itirazları karşılıyor ve Calendly ya da GoHighLevel'a görüşme ekliyor. Mesaj başına ücret yok, sabit aylık fiyat.
- **Uyarı:** MRR son 30 günde −%28,9. Koç ve ajans segmentinde müşteri kaybı yüksek olabilir.
- **TR uyarlaması:** Türkiye'de satış Instagram DM ve WhatsApp'ta yürüyor. Hedef olarak koçlar ve eğitmenler değil, **daha istikrarlı segmentler** seçilmeli: estetik ve diş klinikleri, emlak ofisleri, özel eğitim kurumları, oto galeriler. Sağlık turizmi fırsatı (önceki rapordaki #1) ile aynı altyapıyı paylaşır.
- **Fiyat:** ₺3.000–7.500/ay sabit. İlk 10 müşteride ~₺50 bin MRR (tahmin).
- **Risk:** Meta API politikaları; 1 Ekim 2026'dan sonra WhatsApp servis mesajlarının ücretli olması.

### 2. AI yorum moderasyonu ve yanıt asistanı (79)
- **Örnek:** [Gizli girişim, İtalya](https://trustmrr.com/startup/confidential-startup-72). MRR $12.167; son 12 ayda $141.531; aylık $29 / $69 / $149 / $249 planlar; 2–5 kişi; $398K'ya satılık. Facebook, Instagram ve TikTok yorumlarında spam ve olumsuz yorumu gizliyor, marka tonunda yanıt veriyor, satın alma niyeti görünce DM açıyor.
- **TR uyarlaması:** Türk e-ticaret markaları yoğun Meta reklamı veriyor ve reklam altındaki yorumlar ("fiyat?", "dolandırıcı mı?") dönüşümü doğrudan etkiliyor. Türkçe argo ve küfür tespiti gerektiği için global araçların zayıf kalması muhtemel (doğrulanmadı). Teknik olarak Meta Graph API ile 2–3 haftada MVP çıkar.
- **Fiyat:** ₺990–4.900/ay. Kendi kendine kayıt + ajanslar üzerinden satış.
- **Neden üst sırada:** Düşük fiyat, düşük destek ihtiyacı, kendi kendine satış (self-serve), Avrupa'ya dil ekleyerek genişleyebilir.

### 3. Seyahat acenteleri için dikey CRM (77)
- **Örnek:** [JourneyFuse](https://trustmrr.com/startup/journeyfuse). Mart 2026'da kurulmuş; MRR $12.972, 30 günde +%38,6. Kullanıcı başına $16–25/ay. Lead, gezi, teklif, ödeme, komisyon ve güzergâh tek panelde.
- **TR uyarlaması:** Butik acenteler, umre/hac acenteleri, MICE ve gezi organizatörleri teklifleri WhatsApp ve Excel ile yürütüyor (gözlem, doğrulanmadı). WhatsApp'tan gelen talebi AI ile teklife çeviren, taksit ve ödeme takibi yapan bir CRM yapılabilir. Avrupa'daki Türk diasporasına hizmet veren acenteler doğal bir genişleme alanı.
- **Fiyat:** Kullanıcı başına ₺750–1.500/ay. 10 acente × 3 kullanıcı ≈ ₺35 bin MRR (tahmin).
- **Risk:** Dikey CRM'de geliştirme ve destek yükü daha fazla.

### 4. Müşteri yorumlarından reklam ve ürün içgörüsü (73)
- **Örnek:** [Adlicio](https://trustmrr.com/startup/private-enterprise-64). MRR $13.545, +%30,8; aylık $49,99 / $99,99. Müşteri yorumlarını reklam briefine çeviriyor ve **Claude veya herhangi bir MCP istemcisi içinde** çalışıyor.
- **TR uyarlaması:** Trendyol, Hepsiburada ve Amazon.com.tr yorumları ile Şikayetvar'dan "müşteri dili", rakip zayıflıkları, reklam metni ve ürün iyileştirme raporu üretilebilir. Önceki rapordaki yorum yönetimi fırsatıyla (#4) birleştirilebilir.
- **Not:** MCP üzerinden dağıtım yeni bir kanal; küçük ekip için ucuz bir başlangıç yolu.

### 5. Yerel işletmeye AI web sitesi + teklif hattı, ajanslar için (71)
- **Örnekler:** [1clickwebsite.ai](https://trustmrr.com/startup/1clickwebsite-ai): MRR $13.740, **tek kişi**, sermaye almamış, $49–197/ay. [Prospo](https://trustmrr.com/startup/prospo): Ağustos 2026'da kurulmuş, son 30 günde $9.601 gelir ama tek seferlik ödemeler ağırlıkta, MRR $0.
- **TR uyarlaması:** Google Maps'te sitesi olmayan esnafı bulan, AI ile Türkçe site taslağı çıkaran ve WhatsApp'tan gönderilecek teklif metnini yazan bir araç. Hedef müşteri serbest çalışanlar ve küçük ajanslar.
- **Risk:** Rekabet hızla artıyor; esnafın web sitesine ödeme isteği düşük.

### 6. Lead yönlendirme ve dağıtım platformu (71)
- **Örnek:** [Juiced Leads](https://trustmrr.com/startup/juiced-leads-llc). MRR $10.500, +%10,5. Lead'i anında doğru alıcıya yönlendiriyor, artan lead'leri otomatik satıyor.
- **TR uyarlaması:** Sigorta, emlak, özel okul, sağlık turizmi aracıları ve oto kredi gibi alanlarda lead satan veya bayilere dağıtan şirketler (lead'i Excel ve WhatsApp ile dağıtıyorlar; doğrulanmadı). Lead'i bölge, kapasite ve hız kuralına göre dağıtan, SLA ve iade yönetimi yapan bir panel.
- **Risk:** Lead ticaretinde KVKK açık rıza zorunluluğu kritik.

### 7. Asenkron video ön mülakat (70)
- **Örnek:** [Hirevire](https://trustmrr.com/startup/hirevire). MRR $14.166; son 30 günde gelir +%42; $49 / $149 / $249; 21 dil; AI puan kartı.
- **TR uyarlaması:** Perakende, çağrı merkezi, otel ve restoran zincirleri gibi çok aday alan işverenler. Kariyer.net gibi ilan platformlarına entegre, Türkçe AI ile değerlendirme.
- **Risk:** AB AI Act'te işe alım AI'ı **yüksek riskli** kategoride; AB'ye genişlemek uyum yükü getirir. Ayrıca KVKK. AI'ın adayı eleme değil, yalnızca özet çıkarma rolüyle sınırlanması önerilir.

### 8. Şablondan görsel/PDF/video üretme API'si (69)
- **Örnek:** [Orshot](https://trustmrr.com/startup/orshot-com). MRR $12.938, +%39,3; $39–349/ay.
- **TR uyarlaması:** Pazaryeri ürün görselleri, kampanya bannerları, e-fatura ve teklif PDF'leri. Ancak bu ürün **yerel değil global** bir geliştirici aracı. Türkiye'den global pazara satılabilir; yerel avantajı düşük.

### 9. Gayrimenkul yatırım analizi (67)
- **Örnek:** [Leverage](https://trustmrr.com/startup/leverage) (Almanya). MRR $12.447; €19 / €29 / €99. İlan arama + AI değerleme + getiri analizi.
- **TR uyarlaması:** Sahibinden ve Hepsiemlak ilanları için kira çarpanı, bölge karşılaştırması ve yatırım raporu. **Risk:** Platform verilerinin kazınması kullanım şartlarına takılabilir; Türkiye'de güvenilir veri kaynağı zayıf.

### 10. AI destekli LinkedIn içerik hizmeti (66)
- **Örnek:** [Redak](https://trustmrr.com/startup/redak) (Fransa). Eylül 2026'da başlamış, ilk ayında ~$9,7K MRR; €490 / €790 aylık paket.
- **TR uyarlaması:** B2B yöneticileri ve danışmanlar için AI taslak + insan editör + yorum yönetimi. **SaaS değil, paket hizmet**; ama en hızlı nakit akışını sağlar ve önceki rapordaki ihracat alıcı bulma fırsatıyla (#2) çapraz satılabilir.

## Elenenler (bant içinde ama uygun değil)
- **ColdSire** ($14.630; soğuk e-posta için hazır e-posta kutusu altyapısı): Gelir düşüşte (−%21,8) ve $149K'ya satılık. Bağımsız ürün olarak değil, ihracat alıcı bulma fırsatının altyapı bileşeni olarak düşünülmeli.
- **Taja AI** (KOBİ video yeniden kullanımı): Türkiye'de ödeme isteği düşük. **Zanfia** (içerik üreticisi platformu, −%78 gelir) ve **MagicSlides** (yatay, düşüşte) da uygun değil.
- **Natively** (görüşmede "fark edilmeyen" AI yardımcısı): Etik gerekçeyle elendi.

## Önceki raporla birlikte genel sonuç
TrustMRR verisi, önceki raporun ana tezini **doğruluyor**: $10–15K MRR bandında küçük ekiplerin (çoğu 1–5 kişi, sermayesiz) en çok kazandığı alanlar şunlar:
- **DM ve yorumları yanıtlayan AI** (#1, #2),
- **dikey CRM** (#3),
- **yorum ve içerik verisini satış materyaline çeviren araçlar** (#4).

Türkiye için en güçlü kesişim: **Instagram/WhatsApp DM + yorum yanıtlayan AI satış asistanı**. Bu fırsat önceki rapordaki sağlık turizmi modeliyle aynı altyapıyı paylaşıyor ve segment olarak klinik, emlak, eğitim ve e-ticaret markalarını hedefleyebilir.
