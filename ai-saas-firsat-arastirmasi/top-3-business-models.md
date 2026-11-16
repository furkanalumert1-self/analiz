# En Güçlü 3 İş Modeli

**Tarih:** 16 Kasım 2026
**Dayanak:** `opportunity-ranking.md` (puanlama) ve `market-research.md` (kaynaklar).

> Fiyatlar, maliyetler ve gelir projeksiyonları **varsayımdır**. Müşteri görüşmeleri yapılmadan doğrulanmış sayılmamalıdır. Kur ve enflasyon nedeniyle Türkiye'deki fiyatlar TL olarak verildi ve her çeyrek güncellenmelidir. Yurt dışına satılan ürünlerde fiyat € bazında verildi.

---

## Model 1: Sağlık turizmi klinikleri için AI hasta danışmanı (82/100)

### 1.1 Tek cümlelik değer önerisi
"Yurt dışından gelen her hasta mesajı, gece 3'te bile, hastanın kendi dilinde 30 saniye içinde yanıtlanır; nitelikli adaylar koordinatörünüze hazır teklifle iletilir."

### 1.2 Kanıt zinciri
| Kanıt | Değer | Etiket |
|---|---|---|
| Talep büyüklüğü | 1,5 milyon sağlık turisti ve $3,0B gelir (2024) | ✅ [Ticaret Bakanlığı](https://ticaret.gov.tr/haberler/ticaret-bakanligindan-hizmetler-ihracati-bilancosu-saglik-hizmeti-ihracatimiz-2024-yilinda-1-5-milyon-saglik-turisti-ile-3-milyar-dolar-gelire-ulasti-20-06-2025) |
| ABD'de aynı model | Podium AI ajanlarında $150M+ ARR; Weave'in klinik iletişiminden $239M gelir | ✅ |
| Doğrudan rakibin fiyatı | Connectico Pro $699/ay + ~$2.000 kurulum | ✅ [Connectico](https://www.connectico.ai/pricing?lang=en) |
| Yerel rakipler | iriCRM, MetoCRM, Planports, Webklinik, Risamed, Projemed | ✅ (siteleri) |
| Kanal | WhatsApp ve Instagram DM (ajans içerikleri bunu doğruluyor) | 🟡 |

### 1.3 İdeal müşteri profili (ICP)
- **Birincil hedef:** İstanbul ve Antalya'da Meta/Google reklamı veren, ayda 200'den fazla yurt dışı lead alan, 2–10 koordinatörle çalışan saç ekimi, diş ve estetik klinikleri.
- **İkincil hedef:** Sağlık turizmi aracı kuruluşları (çok klinikle çalışan acenteler).
- **Kapsam dışı:** Büyük hastane zincirleri (uzun satış döngüsü, kurumsal satın alma süreçleri).

### 1.4 Ürün kapsamı
| Aşama | Özellikler |
|---|---|
| **MVP (Gün 16–30)** | WhatsApp Cloud API; 3 dil (EN, DE, AR); kliniğin SSS ve paket bilgi bankası; kalifikasyon soruları (işlem, bütçe, tarih, fotoğraf); insana devir; günlük e-posta özeti; Google Sheets'e lead satırı |
| **V1 (ödeyen 5 müşteri sonrası)** | Instagram DM; otomatik teklif PDF'i (€/£/$); 24–72 saatte takip mesajları; basit panel |
| **V2 (ödeyen 15 müşteri sonrası)** | CRM entegrasyonları (HubSpot/Pipedrive/yerel CRM'ler); reklam kaynağına göre dönüşüm raporu; sesli karşılama |
| **Yapılmayacak** | Teşhis, tıbbi tavsiye, randevu dışı klinik yönetimi, e-Nabız entegrasyonu |

### 1.5 Fiyatlandırma
| Plan | Fiyat | İçerik |
|---|---|---|
| Başlangıç | €290/ay | 1 WhatsApp hattı, 3 dil, ~1.000 konuşma/ay |
| Pro | €590/ay | Sınırsız dil, Instagram, teklif PDF'i, takip akışları |
| Kurulum | €750–1.500 | Bilgi bankası, akışlar, numara bağlama, eğitim |
| Aşım | Konuşma başına ücret; WhatsApp mesaj maliyeti aynen yansıtılır | 1 Ekim 2026 sonrası servis mesajı ücretleri nedeniyle |

**Konumlandırma:** Connectico'nun ($699 + $2.000) altında. Yerel CRM'lerin ise AI yeteneği açısından üstünde.

### 1.6 Birim ekonomisi (tahmin, müşteri başına aylık)
| Kalem | Tahmin |
|---|---|
| LLM (Claude) | €20–60 |
| WhatsApp (servis + şablon mesajlar) | €10–60 (ülke ve hacme göre; doğrulanmalı) |
| Altyapı payı | €5–10 |
| Destek ve insan kontrolü | €30–60 (ilk aylarda daha yüksek) |
| **Brüt marj** | **~%65–80** (Başlangıç planında daha düşük) |

### 1.7 Rekabet avantajı nasıl korunur?
1. Her klinikten öğrenilen **sağlık turizmine özel konuşma kütüphanesi** (itirazlar, fiyat soruları, ülkelere göre kalıplar).
2. **"Lead'den randevuya" dönüşüm verisi:** sektör kıyaslamaları (benchmark) üretip satış materyali olarak kullanmak.
3. Ajans ortaklıkları: Kliniklere reklam yöneten ajanslara %20 yinelenen komisyon vermek.

### 1.8 Riskler ve önlemler
| Risk | Önlem |
|---|---|
| KVKK: sağlık verisi özel nitelikli | Açık rıza akışı; veri işleme sözleşmesi; yurt dışı aktarım için standart sözleşme ve KVKK'ya bildirim (**avukat teyidi**); veri minimizasyonu (fotoğrafı kliniğin sistemine aktarıp bizde silme) |
| AI'ın tıbbi tavsiye vermesi | Sistem talimatında yasak; riskli sorularda zorunlu insan devri; günlük örnek konuşma denetimi |
| WhatsApp maliyeti ve hesap kapatma | Resmî API ve şablon onayları; maliyeti fiyatlamaya yansıtma; Instagram ve web chat'i yedek kanal olarak tutma |
| AB AI Act Madde 50 | İlk mesajda "Ben bir AI asistanıyım" bildirimi |
| Klinik kendi personeliyle yapmayı seçerse | ROI raporu: yanıt süresi, mesai dışı lead sayısı, randevu sayısı |

### 1.9 AB'ye genişleme
Aynı ürün Macaristan ve Polonya'daki diş turizmi pazarlarına (bilinen, doğrulanmadı) ve AB'deki estetik kliniklerine satılabilir. Dil desteği ürünün doğasında zaten var.

---

## Model 2: İhracatçı KOBİ'ler için AI alıcı bulma ve çok dilli yazışma (80/100)

### 2.1 Tek cümlelik değer önerisi
"Ürününüzü ve hedef ülkeyi söyleyin; her ay o ülkede sizinle çalışabilecek 1.000 ithalatçıyı araştıralım, alıcının dilinde kişiselleştirilmiş mesajları siz onaylayın, biz gönderelim, gelen talepler doğrudan size düşsün."

### 2.2 Kanıt zinciri
| Kanıt | Değer | Etiket |
|---|---|---|
| ABD'de aynı model | Clay $100M ARR, Apollo $150M+, lemlist ve Instantly sermayesiz $10–20M | ✅ / 🟡 |
| Ürünleşmiş hizmet modeli | Smartlead API'si üzerinde 18 ajans $1M+ ARR yapıyor | 🟡 [Smartlead kurucusu](https://www.linkedin.com/posts/vaibhavnamburi_smartlead-grew-1200-last-12-months-despite-activity-7179658958494728192-HYfM) |
| Pazar | ~167 bin ihracatçı firma | ⚠️ (TİM raporuyla teyit edilmeli) |
| Harcama alışkanlığı | Yurt dışı fuar desteği üst limitleri milyonlarca TL düzeyinde | 🟡 [Rota Danışmanlık](https://www.rotadanismanlik.net/duyuru-6) |
| Yerel rakip | TrueTradeX, asistanim.ai (teklif usulü fiyat, hizmet ağırlıklı) | ✅ (siteleri) |
| Önemli uyarı | Tam otonom AI SDR'da kullanıcıların %50–70'i bırakıyor | 🟡 [Reddit](https://www.reddit.com/r/gtmengineering/comments/1pindu0/70_of_ai_sdr_users_quit_within_3_months_what/) |

### 2.3 İdeal müşteri profili (ICP)
- **Birincil hedef:** Yıllık $1–20M ihracat yapan; tekstil, mobilya, gıda, yapı malzemesi veya makine parçası üreten; 1–3 kişilik dış ticaret ekibi olan üreticiler.
- **Tetikleyici olaylar:** Fuar dönüşü, yeni pazara açılma kararı, Turquality/İhracat Destekleri başvurusu.
- **Kapsam dışı:** Yalnızca Alibaba'dan satış yapan mikro firmalar, emtia tüccarları.

### 2.4 Ürün kapsamı
| Aşama | Özellikler |
|---|---|
| **MVP (hizmet olarak)** | Google Sheets + Apify (Google Maps, dizinler, web siteleri) + Claude ile firma araştırması + Apollo/Hunter ile kişi bulma + Instantly ile gönderim + haftalık rapor. **Müşteri yalnızca onay verir.** |
| **V1** | Web panel: alıcı listesi, mesaj onay ekranı, gelen yanıtların sınıflandırılması (ilgili / değil / RFQ) |
| **V2** | LinkedIn adımı, RFQ'dan teklife (Fırsat #5 ile birleşme), çok pazarlı kampanyalar |
| **Yapılmayacak** | Tam otonom yanıt verme, kendi veritabanını kurma |

### 2.5 Fiyatlandırma
| Plan | Fiyat | İçerik |
|---|---|---|
| Pilot | €150 / 30 gün | 1 pazar, 300 alıcı, 1 dizi |
| Pazar | €390/ay | 1 pazar, ~1.000 alıcı/ay, 3 adımlı dizi, yanıt yönetimi |
| Çok Pazar | €790/ay | 3 pazar, LinkedIn adımı, aylık strateji görüşmesi |
| Kurulum | €500–1.000 | Alan adı, 5–10 e-posta kutusu, ısıtma, ICP ve mesaj çalışması |

### 2.6 Birim ekonomisi (tahmin, müşteri başına aylık)
| Kalem | Tahmin |
|---|---|
| Veri (Apollo/Hunter/Apify kredileri) | €30–80 |
| E-posta kutuları + ısıtma aracı payı | €30–50 |
| LLM | €10–30 |
| İnsan kontrolü (mesaj onayı, kalite) | 2–4 saat |
| **Brüt marj** | **~%60–75** |

### 2.7 Rekabet avantajı nasıl korunur?
1. **Sektör + ülke mesaj kütüphanesi:** Hangi mesajın Alman mobilya distribütöründe yanıt aldığı verisi zamanla birikir.
2. Türkçe ve ihracatçının dilinde (HS kodu, MOQ, Incoterms) çalışan arayüz.
3. İhracatçı birlikleri ve danışmanlarla ortaklık; destek programlarına uygun faturalama (**destek kapsamına girip girmediği teyit edilmeli**).

### 2.8 Riskler ve önlemler
| Risk | Önlem |
|---|---|
| Sonuç gelmezse müşteri 3. ayda ayrılır | Satış öncesi gerçekçi beklenti ("ayda X olumlu yanıt"); pilotla başlama; ICP ve mesajı iki haftada bir iyileştirme |
| AB'de soğuk e-posta mevzuatı (GDPR, Almanya'da UWG) | Ülkeye göre kurallar (Almanya'da daha temkinli, LinkedIn ağırlıklı); her mesajda çıkış hakkı; meşru menfaat değerlendirmesi |
| Alan adı itibarı | Müşterinin ana alan adı kullanılmaz; ikincil alan adları; gönderim limitleri |
| Veri kalitesi (Türk firmalarının yurt dışı alıcı verisi) | Waterfall zenginleştirme; doğrulanmamış e-postayı göndermeme |

### 2.9 AB'ye genişleme
Aynı model AB'deki KOBİ ihracatçılara (ör. Polonya, Portekiz, Yunanistan) dil yerelleştirmesiyle satılabilir. Ayrıca AB'deki ithalatçılara "Türk tedarikçi bulma" hizmeti olarak **ters yönde** de sunulabilir.

---

## Model 3: Mali müşavir büroları için AI evrak toplama ve mükellef iletişimi (77/100)

### 3.1 Tek cümlelik değer önerisi
"Mükellefleriniz fişlerini WhatsApp'tan fotoğraflasın; asistan eksikleri kendisi kovalasın, belgeleri okuyup muhasebe programınıza hazır Excel'e çevirsin. Ay sonu kapanışı günler değil saatler sürsün."

### 3.2 Kanıt zinciri
| Kanıt | Değer | Etiket |
|---|---|---|
| Pazar | 136.685 meslek mensubu; ~59.958 aktif serbest SM/SMMM | 🟡 [İktisadi Dayanışma](https://www.iktisadidayanisma.com/SMMM-ve-YMM-sayilari-ve-sorunlarina-bir-bakis/Haber/6b7bdec7-7da0-43cc-be68-bf24ba3f46af.aspx) |
| Dijitalleşme | 1,94 milyon e-Fatura mükellefi (2025 sonu); kâğıt fiş ve dekont hâlâ var | ✅ [AA](https://www.aa.com.tr/tr/ekonomi/mukellefler-dijital-vergi-dairesinde-gecen-yil-20-9-milyona-yakin-islem-yapti/3884692) |
| ABD'de aynı kategori | Nanonets (10 bin+ müşteri), Docsumo (4 bin+), Rossum | 🟡 |
| Yerel rakipler | Evrako (fiş okuma + WhatsApp tahakkuk dağıtımı), DocMach (kontör), Kalfa Asist | ✅ [Evrako](https://evrako.com/) |

### 3.3 İdeal müşteri profili (ICP)
- **Birincil hedef:** 80–400 mükellefi olan, 2–8 personelli SMMM büroları (büyükşehirler).
- **Acı noktası:** Ay sonu evrak yığılması; personel devri; mükellefle WhatsApp'ta dağınık yazışma.
- **Kapsam dışı:** Tek kişilik, 30 mükellefin altındaki bürolar; büyük YMM şirketleri.

### 3.4 Ürün kapsamı
| Aşama | Özellikler |
|---|---|
| **MVP** | Mükellef listesi yükleme; aylık WhatsApp hatırlatma şablonu; gelen fotoğraf ve PDF'leri okuma (tarih, VKN, tutar, KDV oranı, belge türü); eksik ve mükerrer tespiti; büro paneli; Excel çıktısı |
| **V1** | Zirve, Luca, Mikro ve Logo içe aktarma formatları; tahakkuk ve beyanname PDF'lerinin mükellefe otomatik gönderimi |
| **V2** | Banka hesap hareketi eşleştirme; mükellefe AI soru-cevap ("KDV'm ne kadar çıkacak?"); e-Fatura portalından çekme (entegratör API'si) |
| **Yapılmayacak** | Muhasebe programı yazmak; beyanname vermek |

### 3.5 Fiyatlandırma
| Plan | Fiyat | İçerik |
|---|---|---|
| Büro 100 | ₺2.500/ay | 100 mükellef, 1.500 belge/ay |
| Büro 300 | ₺5.000/ay | 300 mükellef, 5.000 belge/ay, 3 kullanıcı |
| Büro+ | ₺9.000/ay | Sınırsız mükellef, kontör paketi, öncelikli destek |
| Kurulum | ₺0 (yıllık ödemede) / ₺3.000 | Mükellef listesi ve şablonlar |

**Fiyat mantığı:** Büronun 1 personel maliyetinin küçük bir kesri olarak konumlanır. Mükellef başına ₺15–25 düzeyine denk gelir (tahmin).

### 3.6 Birim ekonomisi (tahmin, büro başına aylık, Büro 300)
| Kalem | Tahmin |
|---|---|
| Görüntü okuma (LLM) | ₺400–1.000 (belge sayısına bağlı) |
| WhatsApp şablon mesajları (300 mükellef × 2–4 mesaj) | Değişken; şablon ücreti fiyata yansıtılmalı |
| Altyapı ve depolama | ₺150–300 |
| **Brüt marj** | **~%65–80** |

### 3.7 Rekabet avantajı nasıl korunur?
1. **Evrak kovalamaya odaklanma:** Rakipler OCR'a odaklanıyor, bu ürün tahsilatı otomatikleştiriyor.
2. Mükellef tarafında sıfır sürtünme (uygulama yok, yalnızca WhatsApp).
3. Oda ve eğitim kurumu ortaklıkları; mali müşavir içerik üreticileriyle iş birliği.

### 3.8 Riskler ve önlemler
| Risk | Önlem |
|---|---|
| Fiyat hassasiyeti | Personel saati tasarrufu hesaplayıcısı; yıllık ödemede indirim |
| Rakiplerin hızla kopyalaması | Dar odak (evrak tahsilatı) + hızlı müşteri edinimi + oda kanalları |
| KVKK (mükellef verisi) | Büro veri sorumlusu, biz veri işleyen; sözleşme; Türkiye'de barındırma seçeneği (gerekirse) |
| Okuma hataları | Düşük güvenli alanlarda insan onayı; hata oranı raporu |

### 3.9 AB'ye genişleme
Zayıf. Her ülkenin vergi ve muhasebe ekosistemi farklı. Bu model **Türkiye'de nakit akışı yaratan bir iş** olarak düşünülmeli. AB'de karşılığı, Polonya KSeF ve Belçika Peppol sonrası küçük muhasebe bürolarıdır ama ayrı bir proje gerektirir.

---

## Üç modelin karşılaştırması ve öneri

| Ölçüt | Model 1: Sağlık turizmi | Model 2: İhracat | Model 3: Mali müşavir |
|---|---|---|---|
| İlk ödeme ne kadar hızlı gelir? | 3–6 hafta | 2–4 hafta (hizmet olarak MVP) | 4–8 hafta |
| Müşteri başına aylık gelir (ARPU) | Yüksek (€290–590) | Yüksek (€390–790) | Düşük-orta (₺2,5–9 bin) |
| Müşteri kaybı riski | Orta | **Yüksek** | **Düşük** |
| Hukuki risk | **Yüksek** (sağlık verisi) | Orta (soğuk e-posta) | Orta |
| AB potansiyeli | Yüksek | Yüksek | Düşük |
| Altyapının başka ürünlerde kullanımı | #7 ve #8 için de kullanılır | #5 ile birleşir | #4 ile ortak WhatsApp altyapısı |

**Öneri:** 1–2 kişilik bir ekip **tek bir modelle** başlamalı.
- Ekipte satış yapabilecek biri ve **sağlık sektörüne erişimi** varsa → **Model 1**.
- Kurucunun **ihracat ve B2B satış** geçmişi varsa → **Model 2**. Hizmet olarak başlanıp ilk haftadan ödeme alınabilir.
- Daha düşük riskli ve "sıkıcı ama sağlam" bir iş isteniyorsa → **Model 3**.

90 günlük planda üç model paralel anlatıldı. **İlk 15 günde üçünün de talep doğrulaması yapılıp, en güçlü sinyal veren ikisi elenerek** devam edilmesi önerilir.
