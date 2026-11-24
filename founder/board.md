# Yönetim kurulu kararı, 2. tur: demo + Türkiye (24 Kasım 2026)

Kurucu bir düzeltme yaptı: **iki sistem de bilerek yapılmış demo ve Türkiye pazarı için.** Bu turda demo verisi, senaryolu yapay zekâ, "Demo modu" entegrasyonları ve yer tutucu kanıtlar kusur sayılmadı. Üç soru soruldu:

1. Demo, Türk alıcıya satış ve doğrulama aracı olarak işe yarıyor mu?
2. Arkasındaki iş Türkiye'ye uygun mu?
3. Canlıya geçmeden önce neyin doğru olması gerekiyor?

Üye notları `founder/board/offers.md`, `monopoly.md` ve `product.md` dosyalarında. 1. turun notları `founder/board/v1/` klasöründe.

## 1. Oylar

| | Offers lens | Monopoly lens | Product lens | Sonuç | Ortalama | 1. tur |
| --- | --- | --- | --- | --- | ---: | ---: |
| **A: Callypso Engage** | 4 · PASS | 3 · PASS | 4 · FUND IF | **2 PASS, 1 FUND IF** | **3,7 / 10** | 3,3 |
| **B: Callypso Export Agent** | 7 · FUND IF | 6 · FUND IF | 7 · FUND IF | **3 FUND IF** | **6,7 / 10** | 5,7 |

Üç üye de tek ürün seçilecekse **Export Agent**'ı seçti.

**Neden puanlar değişti?**
- **Export Agent bir puan yükseldi.** "Yapay zekâ bağlı değil" artık bir ret gerekçesi değil, canlıya geçiş koşulu. Türkiye odağı bu üründe bir avantaj olarak görüldü: kümeler, döviz kazanan alıcı ve global oyuncuların uğraşmayacağı bir iş akışı.
- **Engage neredeyse yerinde kaldı.** Ona yönelik itirazlar demonun eksikleriyle ilgili değildi, pazarın kendisiyle ilgiliydi: kalabalık bir alan, fiyat üzerinden konumlanma ve kopyalanabilir yerel özellikler. Türkiye odağı bunu değiştirmiyor. Yerel rakipler (Insider, Netmera, Segmentify ve SMS firmaları) zaten aynı yerelleştirmeyi yapıyor.

## 2. Birden fazla üyenin dile getirdiği riskler

**Engage**
1. **Kalabalık pazar, fiyatla konumlanma (3/3).** Teklif "Mailchimp'ten ucuz" diye okunuyor. Türk D2C markası için Insider veya Netmera yerine Engage'i seçmenin tek cümlelik bir nedeni henüz yok.
2. **Pazaryeri gerçeği (3/3).** Satışın büyük kısmı Trendyol veya Hepsiburada'dan geliyorsa marka müşterisinin iletişim verisine sahip olmayabilir. O zaman ürünün üzerinde çalışacağı kitle küçülür. Bu bir hipotez; `/founder-consumer` doğrulamalı.
3. **Değer, yerel entegrasyonlara bağlı (2/3: Offers, Product).** Ürünün değeri gerçekte ikas, Ticimax, IdeaSoft ve T-Soft senkronuna, İYS'ye ve WhatsApp şablon onayına bağlı. Bunları alıcı kendisi kurmak zorunda kalırsa harcadığı efor kazanacağı sonucu yutar.

**Export Agent**
1. **Gerçek yapay zekânın kalitesi (3/3).** Dağınık gerçek taleplerde (Almanca ve Arapça yazışmalar, PDF ekler, eksik Incoterm) yanlış fiyatlı bir teklif, ihracatçı için doğrudan para kaybıdır.
2. **Fiyat ve ödeme isteği belirsiz (3/3).** Ne satıldığı, kaça satıldığı ve ödemenin TL mi EUR mu olacağı belli değil.
3. **Gelen kutusu ve katalog bağlantısı (2/3: Offers, Product).** Talepler e-postada, fiyatlar Excel'de veya ERP'de duruyor. Ajan bunlara bağlanmazsa kullanıcı kopyala-yapıştır yapar.
4. **Kapsam kayması ve iki ürün arasında bölünme (2/3: Product, Monopoly).** Müşteri bulma modülü ayrı ve zor bir ürün. Kurucunun iki ürün arasında bölünmesi, kümeyi sahada kazanmak için gereken zamanı yer.

## 3. Koşullar (paketin geri kalanı bunları işaretleyecek)

**Export Agent: FUND IF**
- [ ] İnegöl'den başlayarak 3–5 Türk üreticiyle, kendi gerçek talepleri üzerinde pilot yapılmalı ve en az biri para ödemeli. *(3/3)*
- [ ] Pilotta şunlar ölçülmeli: yanıt süresi, düzeltme gerektirmeden onaylanan taslak oranı, hata oranı ve teklife dönüşen talep sayısı. *(Offers, Product)*
- [ ] Gerçek yapay zekâ tek bir dar akışta bağlanmalı: e-postadan gelen talep → onaylı teklif. *(Product, Monopoly)*
- [ ] Bir fiyat belirlenmeli. Fiyat; çevirmen, ek satış elemanı veya ajans gibi alternatiflerin maliyetine göre konmalı, yazılım fiyatlarına göre değil. TL mi EUR mu kararı da verilmeli. *(3/3)* → `/founder-pricing`, `/founder-cfo`
- [ ] İsimli bir teklif paketi hazırlanmalı: talep yanıtı + teklif + takip + "kataloğunuzu biz yüklüyoruz" kurulumu + sonuç garantisi (ör. 90 günde belirli sayıda nitelikli teklif çıkmazsa iade). *(Offers)* → garantinin maliyeti `/founder-cfo`
- [ ] Müşteri bulma modülü ilk sürümden çıkarılmalı ya da dondurulmalı. *(Product)*
- [ ] Veri hendeği için yazılı bir plan olmalı: katalog, teklif geçmişi ve alıcı yanıtları nasıl birikecek, bu birikim müşterinin ayrılmasını neden zorlaştıracak. *(Monopoly)*
- [ ] Canlıya geçmeden önce gerçek e-posta gönderimi ve KVKK uyumu hazır olmalı. *(Monopoly)*
- [ ] Demonun sonuna bir sonraki adım eklenmeli: "kendi talebinizi deneyin" ya da bir pilot çağrısı. *(Product)*

**Engage'in yeniden masaya gelme eşiği** (Product lens FUND IF verdi, diğer iki üye aynı yöne işaret ediyor)
- [ ] Ürün tek kanala ve tek akışa indirilmeli. Kurulun örneği: "ikas mağazası için WhatsApp + İYS uyumlu terk edilen sepet akışı". *(Product, Monopoly)*
- [ ] Ürün yazılım olarak değil, "kurulumu biz yapıyoruz, gelir garantili" bir hizmet olarak satılmalı. Örnek: İYS kaydı, WhatsApp kurulumu ve 5 otomasyon Callypso'dan; 60 günde ölçülebilir ek gelir yoksa ücret iade. *(Offers)*
- [ ] 3 gerçek Türk markasında ölçülebilir bir geri kazanım sonucu elde edilmeli. *(Product)*
- [ ] Rakiplerin yeterince hizmet vermediği bir yerel platform segmenti belgelenmeli. *(Monopoly)* → `/founder-competitors`

**Canlıya geçmeden önce: Engage demosu için Türkiye hazırlığı** (3/3 üye bunu istedi)
- [ ] Uydurma logolar, isimli referanslar ve "4.9/5 · 2.400+ marka" ifadesi kaldırılmalı. Gerçek bir Türk müşteri adayına bunlar hiçbir zaman gerçekmiş gibi gösterilmemeli.
- [ ] Fiyatlar $ yerine ₺ olmalı. Enflasyon karşısında kur riskinin kimde kalacağına da karar verilmeli.
- [ ] "Alex Jordan" yerine bir Türk persona kullanılmalı. "LTV > $250" ifadesi ₺'ye çevrilmeli. Grafik ayları ve Ayarlar sayfasındaki açıklamalar Türkçeleştirilmeli. Landing'deki "$14.8K" ve İngilizce e-posta konusu değiştirilmeli.
- [ ] İYS ve KVKK uyumu yalnızca Scale planında değil, her planda olmalı. Türkiye'de bu bir giriş koşulu.
- [ ] Panel ilk açılışta 14 menü öğesiyle karşılıyor. Yerine rehberli tek bir "aha" akışı konmalı.

**Açık sorular (kimse araştırmadı)**
- Türk D2C markalarının cirosunun yüzde kaçı kendi sitesinden geliyor? Altyapı payları nasıl dağılıyor (ikas, Ticimax, IdeaSoft, T-Soft, Shopify)? → `/founder-competitors`, `/founder-consumer`
- Export Agent'ın Türkiye'de veya globalde doğrudan bir muadili var mı? → `/founder-competitors`
- Devlet ihracat destek programları bu tür bir yazılımın ya da pazara giriş hizmetinin maliyetini ortak finanse edebilir mi? Bu doğrulanırsa alıcının fiyat engelini kırar. → `/founder-competitors`, `/founder-cfo`
- Bir ihracat müdürü ayda kaç talep alıyor, kaçını cevapsız bırakıyor? Kaybedilen bir sipariş ortalama kaç euro? → `/founder-consumer`
- Kremi Beauty görüşmesinde ne oldu: demo gösterildi mi, ödeme teklifi geldi mi? → kurucu biliyor

## 4. Kurulun görebildiği en güçlü versiyon

Bu tur kurulun tablosunu değiştirmedi, sadece netleştirdi.

En güçlü versiyon, **Türk ihracatçı üreticiler için bir "ihracat talebi → onaylı teklif" asistanı**. Kullanıcı Türkçe çalışır, alıcıya İngilizce, Almanca ya da Arapça yazılır. Başlangıç noktası İnegöl ofis mobilyası kümesi. Satış kanalları ihracatçı birlikleri, fuarlar ve küme içindeki tavsiye. İlk müşterilerde katalog ve fiyat listesini Callypso yükler, talepler e-posta yönlendirmesiyle gelir ve her taslak onaydan geçer. Fiyat, alternatiflerin maliyetine (çevirmen veya ek eleman) ve ölçülen sonuca göre konur.

Genişleme sırası şöyle: önce İnegöl'de birkaç ödeyen müşteri, sonra Bursa, Denizli, Kayseri, Konya ve Gaziantep kümeleri. Biriken katalog, teklif ve alıcı verisi zamanla hendeği oluşturur. Bu üründe Türkiye'ye özgü olmak bir avantaj; Engage'de değil.

Engage için kurulun önerisi bekletmek. Masaya geri gelmesinin tek yolu, dar ve hizmet ağırlıklı bir teklif olarak dönmesi ("ikas + WhatsApp + İYS sepet kurtarma, kurulumu bizden, gelir garantili"). Bu durumda ürün bir SaaS platformu değil, bir ajans hizmeti gibi çalışır.

Kremi Beauty analizi gibi markaya özel fırsat raporları, üç üyeye göre de iki ürün için en güçlü satış aracı. Bu yaklaşımı Export Agent'a taşımak gerekiyor: üreticinin kendi kataloğu ve gerçek bir gelen talebiyle hazırlanmış bir demo.

## Üyeler arasındaki ayrılıklar

- **Engage'e oy:** Product lens FUND IF dedi. Gerekçesi, dar bir akışa (WhatsApp + İYS + ikas) indirilirse deneyimin işe yarayacağı. Monopoly lens PASS'ta kaldı: o dar akış da birkaç ayda kopyalanabilir, ortada bir hendek yok. Offers lens de PASS dedi, ama ürün hizmete dönüşür ve garanti verilirse yeniden bakacağını belirtti.
- **Export Agent'ta önce ne gelmeli:** Monopoly lens veri hendeği için yazılı bir planı şimdiden istiyor. Product lens ise kapsamı daraltmayı (müşteri bulmayı kesmeyi) öne koyuyor. İkisi çelişmiyor, sıralama şöyle: önce dar akış ve pilot; hendek planı pilotla birlikte yazılır, entegrasyon kanıttan sonra gelir.
- **Fiyatlama:** Offers lens sonuca bağlı bir fiyat istiyor (ör. kazanılan siparişten pay, garanti). Monopoly ve Product lensleri yalnızca bir fiyat belirlenip ödeme alınarak test edilmesini istiyor. Hangi modelin seçileceği `/founder-pricing` ile `/founder-cfo`'nun işi.
