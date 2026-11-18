# 02 — Pushouse Müşterileri ve İdeal Müşteri Profili (ICP)

> Erişim tarihi: **18 Kasım 2026**. Etiketler [01](01-pushouse-rekabet-analizi.md) ile aynı.

## Kısa bulgular

- Pushouse ana sayfasındaki **90 logo** alan adı tarandı. **35 sitede bugün Pushouse script/izi var** (teknik kanıt). Bu, logo duvarından daha güçlü bir güncel kullanım kanıtı.
- İzli 35 sitenin **en az 21'i giyim, ayakkabı veya iç giyim** markası. Altyapı dağılımı: **Ticimax 22**, IdeaSoft 6, Shopify 4, ikas 2, belirsiz 1.
- Pushouse'un **tükenen ürün** kategorilerinde de birkaç müşterisi var: BARF pet maması, X-Amp takviye, Ravza kuruyemiş, Atayname geleneksel gıda, Beyorganik organik gıda. Bu kategoriler ise ana kitlesi değil.
- **Callypso için önerilen birincil segment:** Kendi sitesinden satış yapan **kozmetik ve kişisel bakım D2C markaları**. Alternatifler: **gıda takviyesi/sporcu besini** ve **kahve, çay ve özel/organik gıda**. Gerekçe aşağıdaki puanlama modelinde.

## 1. Yöntem ve sınırlar

1. Ana sayfa görsellerinin `alt` metinlerinden 90 alan adı çıkarıldı.
2. Her alan adının ana sayfası (`https://www.<alan>` veya `https://<alan>`) tek bir GET isteğiyle çekildi.
3. HTML'de `pushouse` dizgisi ve altyapı imzaları (`ticimax`, `myikas`, `ideasoft`, `cdn.shopify`, `tsoft`) arandı.
4. Sektör bilgisi sitenin `<title>` ve `meta description` alanından alındı.

**Sınırlar:**
- Script izi yoksa bu müşteri olmadığını göstermez. Yalnızca WhatsApp modülünü kullanan bir mağaza site içine script koymayabilir. 55 sitede iz bulunmaması "eski müşteri" anlamına gelmez; **doğrulanamadı**.
- Bir script izi ücretli aboneliğin kanıtı değildir. Deneme sürümü veya kaldırılmamış eski kod olabilir.
- Ölçek ve çalışan sayısı hiçbir müşteri için doğrulanamadı.
- Örneklem Pushouse'un kendi seçtiği vitrin. Tüm müşteri tabanını temsil etmeyebilir.

## 2. Doğrulanabilen Pushouse müşteri örnekleri (30)

Kanıt tarihi: tarama günü, 18 Kasım 2026. "Vaka" satırları için ölçüm dönemi 22 Temmuz–4 Ekim 2026 (https://www.pushouse.com/tr/musteri-hikayeleri).

| # | Marka / site | Sektör (kaynak: site başlığı) | Altyapı (tespit) | Kanıt türü | Güven | Muhtemel kullanım [Çıkarım] | Callypso benzerliği |
|---|---|---|---|---|---|---|---|
| 1 | Karum Rouge / karumrouge.com | Kadın giyim | Ticimax (HTML) | Script `ph_ticimax.js` + vaka (%23,1) + logo | Yüksek | Sepet, stok, hoş geldin, doğum günü, kargo | Düşük (Pushouse kalesi) |
| 2 | Ayşenur Dinçer Butik / aysenurdincerbutik.com | Kadın giyim, abiye | Ticimax | Script (`pushouseWeekly`) + vaka (%15,0) | Yüksek | Sepet, stok, ilk alışveriş, çark | Düşük |
| 3 | B&G Store / bgstore.com.tr | Çocuk ve bebek giyim | Ticimax | Script + vaka (%11,9) | Yüksek | Sepet kurtarma | Orta |
| 4 | Unmei / unmeiprojects.com.tr | Premium kırtasiye | Ticimax | Script + vaka (%14,3) | Yüksek | Sepet, stok, doğum günü, çark | Orta (sarf malzemesi alımı) |
| 5 | Rue Les Createurs / rueonline.com | Kadın giyim | Ticimax | Script + site doğrulama etiketi + Shopify yorumu (UK, 10 Eyl 2026) | Yüksek | Sepet, otomasyon | Düşük |
| 6 | Tuba Eken / tubaeken.co | Kadın giyim | Shopify | Script `ph_global_wheel.js` + Shopify yorumu (18 Ağu 2025) | Yüksek | Sepet, kampanya, sipariş durumu | Düşük |
| 7 | Feminen Moda / feminenmoda.com | Tesettür giyim | Ticimax | Script | Orta | Sepet ve kampanya | Düşük |
| 8 | Olcay Store / olcaystore.com | Tesettür giyim | Ticimax | Script | Orta | Sepet ve kampanya | Düşük |
| 9 | Betül Babacan / betulbabacan.com | Kadın giyim | Ticimax | Script (`pushouseWeekly`) | Orta | Haftanın ürünleri, sepet | Düşük |
| 10 | İncetopuk / incetopuk.com | Kadın giyim | Ticimax | Script | Orta | Sepet | Düşük |
| 11 | Inspiration / inspiration.com.tr | Kadın giyim | Ticimax | Script | Orta | Sepet | Düşük |
| 12 | Modamla Butik / modamlabutik.com | Kadın giyim | ikas | Script `ph_ikas.js` | Orta | Sepet | Düşük |
| 13 | Urba Official / urbaofficial.com | Kadın giyim | Shopify | Script (`pushouse-boot.js`, çark) | Orta | Çark ve sepet | Düşük |
| 14 | Suud Collection / suudcollection.com | Kadın giyim | Ticimax | Script | Orta | Sepet | Düşük |
| 15 | Holla Gugu / hollagugu.com | Kadın giyim (fiziksel mağazası da var) | Ticimax | Script | Orta | Sepet | Düşük |
| 16 | Erva'nın Butiği / ervaninbutigi.com | Kadın ayakkabı | Ticimax | Script (`pushouseAnasayfa`) | Orta | Site içi modüller | Düşük |
| 17 | MUPA Shoes / mupashoes.com | Ayakkabı | Ticimax | Script | Orta | Sepet | Düşük |
| 18 | Tamer Tanca / tamertanca.com.tr | Ayakkabı ve deri | Ticimax | Pushouse video CDN `playlist.m3u8` | Orta | Video/Reels modülü | Düşük |
| 19 | Sail Laker's / saillakers.com.tr | Ayakkabı | Ticimax | Script | Orta | Sepet | Düşük |
| 20 | Riccon / riccon.com.tr | Ayakkabı | Shopify | Script `ph_global_wheel.js` | Orta | Çark | Düşük |
| 21 | Wejaar / wejaar.com.tr | Lüks marka giyim (çok markalı) | Ticimax | Script | Orta | Sepet, stok | Düşük–orta |
| 22 | Pierre Cardin Lingerie / pierrecardinlingerie.com.tr | İç giyim | Shopify | `pushouse.com` referansı | Orta | Belirsiz | Orta (iç giyim yeniden alımı) |
| 23 | Byjoje / byjoje.com | Bijuteri | Ticimax | Script | Orta | Sepet, çark | Düşük |
| 24 | So CHIC / sochic.com | Mücevher | Doğrulanamadı | Müşteriye özel `ph_sochic_trendyolcomments.js` | Orta | Trendyol yorum gösterimi | Düşük |
| 25 | Dünyagöz Optik / dunyagozoptik.com | Optik, güneş gözlüğü | Ticimax | Script | Orta | Sepet | Orta (lens yeniden alımı) |
| 26 | Lara Optik / laraoptik.com.tr | Optik | IdeaSoft | `script_tag.js` | Orta | Sepet | Orta |
| 27 | BARF TR / barf.com.tr | Kedi/köpek maması (BARF) | Ticimax | Script | Orta | Sepet, tekrar sipariş [çıkarım] | **Yüksek** (döngüsel mama alımı) |
| 28 | Veteriner Malzeme / veterinermalzeme.com | Veteriner malzemesi | Ticimax | Script (`pushouseWeekly`) | Orta | Sepet | Orta |
| 29 | X-Amp / x-amp.com.tr | Takviye (supplement) | IdeaSoft | `script_tag.js` | Orta | Sepet | **Yüksek** |
| 30 | Ravza / ravza.com | Hurma, kuruyemiş, atıştırmalık | IdeaSoft | `script_tag.js` | Orta | Sepet | **Yüksek** |

**Ek kanıtlar (tabloya girmeyenler):**
- **Gıda:** Atayname (tahin/pekmez, IdeaSoft, script izi).
- **Diğer izli siteler:** Minar Mobilya (IdeaSoft), Elektrikmarket (IdeaSoft), Önder Özsoy ve Vianour (sektör doğrulanamadı).
- **Yalnızca vaka çalışmasında:** Beyorganik (organik gıda, Ticimax, %14,8), HE-QA (tesettür, T-Soft, %12,7).
- **Geçmiş dönem:** FLAW Wear (flawwears.com). Vaka sayfası "geçmiş dönem" diyor ve bugün sitede iz yok → **muhtemelen eski müşteri [çıkarım]**.
- **Alan adı belirsiz Shopify yorumcuları:** Valmenti, parlastores, esintishop, Butik Ceylan Bostancı. Kaynak: https://apps.shopify.com/pushouse/reviews

## 3. Gruplama ve değerlendirme

| Grup (izli 35 site) | Adet | Satın alma ihtimali (Callypso) | Satış döngüsü | Rekabet |
|---|---|---|---|---|
| Kadın giyim, tesettür, iç giyim, çocuk giyim | 16 | Düşük. WhatsApp sepet kurtarmayı zaten kullanıyorlar | Kısa | Çok yüksek (Pushouse kalesi) |
| Ayakkabı | 5 | Düşük | Kısa | Yüksek |
| Takı ve optik | 4 | Orta | Kısa | Orta |
| Pet, gıda, takviye | 5 | Yüksek (email/SMS ile tamamlayıcı yaşam döngüsü) | Kısa–orta | Orta |
| Diğer (mobilya, elektrik, kırtasiye, belirsiz) | 5 | Düşük–orta | Orta | Düşük |

**[Çıkarım]** Pushouse'un müşteri kitlesi Instagram'dan beslenen, yüksek trafikli, sepet terki fazla ve stok/beden derdi olan butiklerden oluşuyor. Bu markaların sorunu **anlık dönüşüm**. Callypso'nun ürün yapısı ise (segmentler, LTV, "tekrar alım zamanı", win-back) **tekrar eden alım** sorununa daha uygun.

## 4. ICP puanlama modeli

**Ağırlıklar (toplam %100):**

| Kriter | Ağırlık | 10 puanın anlamı |
|---|---|---|
| Problem şiddeti ve tekrar alım uyumu | 20 | Ürün düzenli tükeniyor; tekrar alım gelirin önemli kısmı; pasifleşme somut kayıp |
| Entegrasyon kolaylığı | 15 | Sipariş/müşteri verisi CSV veya hazır API ile alınabiliyor; özel geliştirme gerekmiyor |
| Ödeme kapasitesi | 15 | Aylık 2.500–10.000 TL araç bütçesi gerçekçi; marj ve sepet tutarı yeterli |
| Ulaşılabilirlik | 15 | Kurucuya LinkedIn/Instagram/e-posta ile ulaşılabiliyor; liste çıkarmak kolay |
| Rekabet yoğunluğu (düşük = yüksek puan) | 10 | Yerleşik bir rakip aracı kullanmıyor veya mevcut araç bu sorunu çözmüyor |
| Satış döngüsü hızı | 10 | Tek karar verici; 2–4 haftada karar |
| Destek yükü (düşük = yüksek puan) | 10 | Teknik ekip/ajans var veya ihtiyaç basit |
| Kalıcılık / sürdürülebilirlik | 5 | Kategori mevsimsel değil; uzun ömürlü müşteri ilişkisi |

**Puanlar:** 1–10 ölçeği. Kanıt düzeyi: **D** (dış kanıt: rakip izi/pazar verisi), **Ç** (çıkarım), **V** (varsayım). Puanlar yönlendirici. Gerçek görüşmelerle güncellenmeli.

| Sıra | Segment | Problem | Entegr. | Ödeme | Ulaşım | Rekabet | Döngü | Destek | Kalıcılık | **Toplam** | Kanıt |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Kozmetik ve kişisel bakım D2C | 9 | 7 | 7 | 8 | 6 | 7 | 7 | 8 | **7,50** | Ç/V |
| 2 | Gıda takviyesi / sporcu besini | 9 | 7 | 7 | 7 | 6 | 7 | 7 | 8 | **7,35** | Ç, D (X-Amp izi) |
| 3 | Kahve, çay ve özel/organik gıda | 8 | 7 | 6 | 8 | 7 | 7 | 7 | 7 | **7,20** | Ç, D (Beyorganik, Ravza) |
| 4 | Pet mama ve malzeme | 8 | 7 | 6 | 7 | 7 | 7 | 7 | 8 | **7,10** | Ç, D (BARF izi) |
| 5 | Bebek ve çocuk tüketim ürünleri | 7 | 7 | 6 | 6 | 7 | 6 | 6 | 6 | **6,45** | Ç/V |
| 6 | Kadın giyim / tesettür butikleri | 6 | 8 | 6 | 9 | 3 | 7 | 5 | 5 | **6,40** | D (16 iz) |
| 7 | Takı, gümüş ve aksesuar | 5 | 7 | 6 | 8 | 5 | 7 | 6 | 5 | **6,20** | D/Ç |
| 8 | E-ticaret ajansları (yeniden satış kanalı) | 6 | 6 | 7 | 6 | 6 | 4 | 5 | 7 | **5,90** | Ç (Pushouse partner programı) |
| 9 | Optik ve kontakt lens | 6 | 6 | 6 | 5 | 7 | 5 | 6 | 6 | **5,85** | D/Ç |
| 10 | Ev, mobilya ve dekorasyon | 3 | 6 | 7 | 6 | 7 | 5 | 6 | 4 | **5,45** | Ç |

Toplam formülü: Σ(ağırlık × puan) / 100. Örnek, segment 1: (20×9 + 15×7 + 15×7 + 15×8 + 10×6 + 10×7 + 10×7 + 5×8) / 100 = 750 / 100 = **7,50**.

**E-ticaret dışı alanlar neden listede yok?** Restoran, otel, klinik, inşaat ve otomotiv değerlendirildi ama listeye alınmadı. Bu sektörler randevu/rezervasyon, CRM veya satış ekibi akışı gerektiriyor ve Callypso'nun sipariş verisine dayalı yapısıyla uyuşmuyor. Pushouse bu sektörlere sayfa açmış, ancak müşteri izi bulunamadı.

## 5. Segment ayrıntıları (ilk 5)

| Segment | Temel problem ve ekonomik etki | Callypso'nun somut değeri | Karar verici / tetikleyici | Uygunluk göstergeleri | Aylık abonelik hipotezi | Havuz tahmini yöntemi | Risk |
|---|---|---|---|---|---|---|---|
| Kozmetik ve kişisel bakım | Ürün 30–90 günde biter. İkinci siparişe dönmeyen müşteri reklam maliyetini boşa çıkarır | Ürün bazlı "tükenme zamanı" hatırlatması, ikinci alım akışı, VIP ve win-back, holdout ile artımsal ölçüm | Kurucu veya e-ticaret müdürü. Tetikleyici: reklam maliyeti artışı, yeni ürün lansmanı, 11.11/Black Friday sonrası | Kendi sitesi, 300–5.000 sipariş/ay, Instagram'da aktif, e-posta listesi var ama düzenli kullanmıyor | 2.500–7.500 TL [V] | ETBİS kayıtlı 48.201 işletme × kozmetik payı (bilinmiyor). Apollo/LinkedIn'de "kozmetik + e-ticaret + Türkiye" filtresiyle sayılmalı | Pazaryeri (Trendyol) ağırlıklı satıcılar uygun değil; ilaç/dermokozmetik reklam kısıtları |
| Gıda takviyesi / sporcu besini | Protein/vitamin 30 günde biter; marka değiştirme kolay | Tekrar alım zamanı, abonelik benzeri hatırlatma, paket/çapraz satış | Kurucu veya pazarlama sorumlusu. Tetikleyici: rakip indirim, kampanya | Kendi sitesi, sadakat programı yok | 2.500–7.500 TL [V] | Aynı yöntem | Sağlık beyanı içeren mesajlarda reklam mevzuatı; hukuki inceleme gerekir |
| Kahve, çay, özel/organik gıda | Haftalık/aylık tüketim; sadakat yüksek ama hatırlatma yoksa marketten alınıyor | Yeniden sipariş hatırlatması, abonelik daveti, sezonluk ürün duyurusu | Kurucu. Tetikleyici: yeni hasat/ürün, kargo kampanyası | Kendi sitesi, düşük–orta sepet tutarı | 1.500–5.000 TL [V] | Aynı yöntem | Düşük sepet tutarı ödeme kapasitesini sınırlar |
| Pet mama ve malzeme | Mama 3–6 haftada biter; rakip mağazaya kaymak kolay | Hayvan başına tüketim tahmini, mama hatırlatması | Kurucu/işletmeci | Kendi sitesi, tekrar oranı yüksek | 2.000–6.000 TL [V] | Aynı yöntem | Büyük oyuncular (pazaryerleri) fiyatta baskın |
| Bebek tüketim ürünleri | Bez ve mama döngüsel ama çocuk büyüdükçe ürün değişir | Yaşa göre ürün geçişi hatırlatması | Kurucu | Kendi sitesi | 2.000–6.000 TL [V] | Aynı yöntem | Müşteri yaşam döngüsü kısa (1–3 yıl) |

## 6. Karar: ilk 10 ücretli müşteri için üç segment

**Birincil: Kozmetik ve kişisel bakım D2C markaları** (cilt bakımı, saç bakımı, doğal sabun, parfüm/vücut bakımı).
Neden: Problemi en net, Callypso'nun mevcut tasarımına en uygun ("tekrar alım zamanı" segmenti zaten panelde var) ve Pushouse burada görünür değil (90 logonun hiçbiri kozmetik değil). Email görsel ürün anlatımına uygun. Listesi çıkarması kolay.

**Alternatif 1: Gıda takviyesi ve sporcu besini.** En güçlü döngü bu segmentte var, ama sağlık beyanı riski taşıyor.
**Alternatif 2: Kahve, çay ve özel/organik gıda.** Sadakati yüksek. Düşük sepet tutarı nedeniyle fiyatın da düşük olması gerekir.

### Müşteri arama filtreleri

| | Kozmetik (birincil) | Takviye (alt. 1) | Kahve/özel gıda (alt. 2) |
|---|---|---|---|
| Pozitif | Türkiye; kendi alan adında e-ticaret sitesi (ikas/Ticimax/IdeaSoft/Shopify/T-Soft); 2–50 çalışan; Instagram'da 5 bin–300 bin takipçi; üründe "ml/gr" ve tükenen içerik; bülten kayıt kutusu var | Aynısı; protein, vitamin, kolajen | Aynısı; kahve çekirdeği/filtre, çay, kuruyemiş, zeytinyağı |
| Negatif | Yalnız pazaryerinde satan; >200 çalışanlı kurumsal (Insider vb. kullanıyor olabilir); sitesi bakımsız veya son 6 ayda ürün eklemeyen; ilaç/reçeteli ürün; dropshipping | Aynısı; tıbbi iddia odaklı mesaj isteyen | Aynısı; tek seferlik hediye sepeti satanlar |
| Sinyal | Yeni ürün lansmanı, kampanya dönemi, e-ticaret uzmanı iş ilanı, "abonelik" sayfası denemesi | Aynısı | Aynısı |

### Örnek potansiyel müşteri profilleri (gerçek kişi/şirket değil)

1. **"Doğal cilt bakımı markası A":** Kurucu 2 yıl önce Instagram'dan başlamış, ikas'ta sitesi var, ayda yaklaşık 800 sipariş alıyor. E-posta listesi 6 bin kişi, son bülten 4 ay önce gönderilmiş. Tetikleyici: Black Friday sonrası yeni müşteri birikimi.
2. **"Sporcu besini mağazası B":** Ticimax üzerinde, ayda yaklaşık 2.000 sipariş. SMS'i yalnız kampanya duyurusunda kullanıyor. Tekrar alım verisi panelde görülmüyor.
3. **"Nitelikli kahve kavurucusu C":** Shopify veya IdeaSoft üzerinde, abonelik denemiş ama bırakmış. Ayda 400 sipariş, sadık müşteri tabanı var.

### Rakip müşterileri (ayrı liste, farklı yaklaşım)

BARF TR, X-Amp, Ravza, Atayname ve Beyorganik Pushouse kullanıyor (iz veya vaka). Bunlara "Pushouse'u bırakın" denmemeli. **"WhatsApp'ı Pushouse'ta tutun; e-posta ve yaşam döngüsü ölçümünü biz ekleyelim"** gibi tamamlayıcı bir teklif test edilebilir. Mevcut sözleşmelere ve karar sahibinin tercihine saygı gösterilmeli.

### En ucuz doğrulama deneyleri

| Segment | Hipotez | Örneklem | Süre | Ölçüm | Başarı / durdurma eşiği | Sonraki karar |
|---|---|---|---|---|---|---|
| Kozmetik | Kurucular "tekrar alım" problemini öncelikli görüyor ve ücretli pilot için 15 dakikalık görüşme kabul ediyor | 40 kişiselleştirilmiş temas | 2 hafta | Olumlu yanıt, görüşme, pilot kabulü | ≥4 görüşme ve ≥1 pilot = devam. <2 görüşme = mesajı değiştir. İkinci turda da <2 = segmenti değiştir | Pilot kapsamını kesinleştir |
| Takviye | Aynısı | 25 temas | Paralel 2 hafta | Aynı | ≥3 görüşme = devam | Birincil ile karşılaştır |
| Kahve/özel gıda | Aynısı, düşük fiyat paketiyle | 25 temas | Paralel 2 hafta | Aynı + fiyat itirazı sıklığı | ≥3 görüşme ve fiyat itirazı <%50 = devam | Fiyat paketini netleştir |

## Belirsizlikler

- Segment büyüklükleri kategori kırılımlı resmî veriyle doğrulanamadı. ETBİS yalnız toplamı veriyor: 48.201 işletme, 57.291 site (Mayıs 2026; https://www.alomaliye.com/2026/06/09/ic-ticaret-ve-e-ticaret-verilerinde-buyuk-yukselis-mayis-2026-bulteni-yayinlandi/).
- Kozmetik markalarının e-posta listesi büyüklüğü ve onay oranı bilinmiyor; pilot görüşmelerinde ölçülmeli.
- Puanlar çoğunlukla çıkarım. İlk 15 görüşmeden sonra yeniden puanlanmalı.

## Sonraki aksiyonlar

1. Birincil segmentte 60 şirketlik bir liste çıkar (bkz. [05](05-satis-ve-musteri-kazanimi.md)).
2. İlk 15 keşif görüşmesinden sonra puan tablosunu güncelle.
3. Rakip müşteri listesine tamamlayıcı teklifi ayrı bir küçük deneyle test et (en fazla 5 temas).
