# Yönetim kurulu kararı: Callypso (24 Kasım 2026)

İncelenen: iki canlı demo (callypso-engage.vercel.app ve callypsoagent-callypso-export-agent.vercel.app).
Üyelerin notları: `founder/board/offers.md`, `monopoly.md`, `product.md`.

## 1. Oylar

| | Offers lens | Monopoly lens | Product lens | Sonuç | Ortalama |
| --- | --- | --- | --- | --- | ---: |
| **A: Callypso Engage** | 3 · PASS | 3 · PASS | 4 · PASS | **3 PASS** | **3,3 / 10** |
| **B: Callypso Export Agent** | 6 · FUND IF | 5 · FUND IF | 6 · FUND IF | **3 FUND IF** | **5,7 / 10** |

Tek ürün seçilecekse üç üye de aynı ürünü seçti: **Export Agent.**

## 2. Birden fazla üyenin dile getirdiği riskler

**Engage**
1. **Uydurma sosyal kanıt (3/3 üye).** Sitede logolar, isimli referanslar ve "4.9/5 · 2.400+ marka" yazıyor, ama tek bir gerçek müşteri yok. Kurul bunu bir numaralı risk sayıyor: güveni bitirir ve tüketici/reklam mevzuatı açısından da risklidir. Ürünün geleceğinden bağımsız olarak hemen kaldırılmalı.
2. **Kalabalık pazar, farklılaşma yok (3/3 üye).** Klaviyo, Omnisend, Mailchimp, Insider, Netmera, Segmentify ve yerel SMS firmaları aynı alıcıya satıyor. Sitedeki ana argüman "Mailchimp'ten ucuz" ve bu ürünü bir emtiaya dönüştürüyor. Rakiplerin fiyatları henüz araştırılmadı.
3. **Zor kısım yapılmamış (2/3 üye: Product, Monopoly).** Ekranlar hazır ama değerin asıl yaşandığı yerler hâlâ demo modunda: gerçek gönderim, İYS, Meta şablon onayı ve mağaza senkronu. Ayarlardaki `app.config.ts` ve "re-run setup" bir starter şablonundan türetildiğini gösteriyor; kopyalanmasını engelleyecek bir şey yok.

**Export Agent**
1. **Sihirli an henüz gerçek değil (3/3 üye).** Yapay zekâ bağlı değil, yanıtlar senaryodan geliyor. Ürünün tüm değeri, dağınık gerçek taleplerde doğru taslak üretebilmesine bağlı.
2. **Fiyat, ödeme isteği ve pazar büyüklüğü bilinmiyor (3/3 üye).** Fiyat hiçbir yerde yok. Kaç üreticinin bu acıyı ödeyecek kadar hissettiği de bilinmiyor.
3. **Kurulum ve entegrasyon yükü (3/3 üye).** Katalog, gelen kutusu ve ERP bağlantısı yok. Talepler kopyala-yapıştırla girilirse deneyim çöker.

## 3. Koşullar (paketin geri kalanı bunları tek tek işaretleyecek)

Engage için koşul yok: oy PASS. Engage'in yeniden masaya gelmesi için kurulun istediği eşik aşağıda ayrıca yazılı.

**Export Agent: FUND IF koşulları**
- [ ] Gerçek yapay zekâ bağlanmış olmalı. En az bir gerçek üreticinin son ~20 gerçek talebi sistemden geçirilmeli ve **düzeltmesiz onay oranı** ölçülmeli. *(Offers, Monopoly, Product)*
- [ ] Talepler gelen kutusundan gelmeli, en azından e-posta yönlendirmeyle. Kopyala-yapıştır olmamalı. *(Product)*
- [ ] Tek dikey ve tek kümeyle başlanmalı. Kurulun önerisi İnegöl ofis mobilyası. *(Offers, Monopoly)*
- [ ] İlk müşterilerde kurulum "biz yaparız" teklifiyle sunulmalı: katalog, fiyat listesi ve şablonları ekip yükler. *(Offers)*
- [ ] Bir fiyat belirlenmeli ve gerçek bir alıcıdan ödeme ya da imzalı niyet beyanı istenerek test edilmeli. *(Offers, Monopoly, Product)* → `/founder-consumer`, `/founder-pricing`
- [ ] Fiyat mümkünse sonuca bağlanmalı (yanıt süresi, teklife dönen talep sayısı) ve CFO'nun karşılayabileceği bir garantiyle desteklenmeli. *(Offers)* → `/founder-cfo`
- [ ] Müşteri bulma ve CRM genişlemesi, çekirdek talep→teklif akışı gerçek kullanımda kanıtlanana kadar dondurulmalı. *(Product)*
- [ ] Kalıcılık için bir plan olmalı: ERP/katalog entegrasyonu ve müşteri içinde biriken teklif verisi. *(Monopoly)*

**Kurulun açık soruları (cevabı bilinmiyor)**
- Rakipler ve fiyatları: ihracatçılar bugün bu işi ChatGPT + Excel + Gmail ile mi, tercümanla mı, bir CRM ile mi yapıyor? → `/founder-competitors`
- Hedef kümede kaç üretici var, ne öderler, ilk 100 müşterinin edinme maliyeti ne? → `/founder-consumer`, `/founder-cfo`

**Engage'in yeniden değerlendirilme eşiği**
- [ ] Uydurma logo, referans ve puanlar siteden kalkmalı. *(Bu, ürünün akıbetinden bağımsız olarak hemen yapılmalı.)*
- [ ] Ürün tek bir kanala ve tek bir akışa indirilmeli (ör. İYS uyumlu WhatsApp sepet hatırlatması) ve bu akış gerçek bir mağazada uçtan uca çalışmalı.
- [ ] Fiyat yerine sonuca dayalı bir teklif kurulmalı ve birkaç gerçek mağazada ölçülmüş sonuç olmalı.

## 4. Kurulun görebildiği en güçlü versiyon

Bu, kurucunun sunduğundan farklı. Kurul iki ürünü değil, **tek bir ürünü** destekliyor.

En güçlü versiyon, Türk ihracatçı üreticilere **"gelen ihracat talebine aynı gün, doğru fiyatlı, İngilizce teklif taslağı"** satan dar bir hizmet-yazılım melezi. Başlangıç noktası İnegöl ofis mobilyası kümesi. İlk müşterilerde katalog ve fiyat listesini Callypso yükler, talepler e-posta yönlendirmeyle girer ve her taslak insan onayından geçer. Fiyat, kurulan sistemin getirdiği sonuca bağlanır: yanıt süresi ve teklife dönen talep sayısı.

Kümede birkaç ödeyen müşteri ve ölçülmüş bir onay oranı olduğunda genişleme sırası şöyle olur: aynı kümede komşu ürünler, sonra başka mobilya kümeleri, sonra tekstil ve makine. Bu aşamada ERP entegrasyonu ve biriken teklif verisi rakiplere karşı kalıcılığı sağlar.

Engage bu tabloda yer almıyor. Kurul onu bekletmeyi ya da bırakmayı öneriyor. Ondan kalan değerli parçalar ise Türkiye'ye özgü bilgi birikimi (İYS, WhatsApp, yerel operatörler) ve kurucunun hızlı, eksiksiz demo çıkarabilme becerisi.

## Üyeler arasındaki ayrılıklar

- **Export Agent'ın kopyalanabilirliği:** Monopoly lens 5 verdi ve "genel yapay zekâ asistanları ile CRM'ler bunu ekleyebilir" diyor. Ona göre kalıcılık ERP entegrasyonu ve veri birikimiyle kurulmalı. Product lens ise aynı entegrasyon genişlemesini çekirdek akış kanıtlanana kadar **dondurmak** istiyor. Sıralamada uzlaşma şu: önce çekirdek akış kanıtlanır, sonra entegrasyon.
- **Engage'e bakış:** Product lens 4 verdi; Türkiye'ye özgü ayrıntıları "doğru içgüdü" olarak görüyor. Offers ve Monopoly lensleri bu avantajı fiyat odaklı konumlandırma ve şablon kökeni yüzünden çok küçük buluyor.
- **Neyin önce gelmesi gerektiği:** Offers lens teklifin yapısını öne koyuyor (garanti, sonuca bağlı fiyat, "biz kurarız"). Product lens ise ürün kalitesini (düzeltmesiz onay oranı, gelen kutusu entegrasyonu). İkisi de pilotta birlikte ölçülebilir.
