# Instagram Reels Otomasyonu — Ana Prompt

> Bu dosyanın tamamını Claude Code session'ına yapıştır. Köşeli parantezli yerleri (`[...]`) kendine göre doldur. API anahtarlarını prompta yazma; `.env` dosyasında tut.

---

## 0. Bağlam

Callypso Engage adında bir SaaS ürünüm var: Türk e-ticaret firmaları için müşteri segmentleme ve Email + SMS ile müşteri geri kazanma (retention / win-back) platformu.

Bu ürünü doğrudan tanıtan videolar ilgi çekmiyor. Bu yüzden ürün adını taşımayan, ayrı bir **medya markası** olarak Instagram hesabı büyütüyoruz. Hesap adı: `[Sepet Röntgeni]`.

Model hesap: **@decoyreport**. Ünlü markaların satış psikolojisi taktiklerini "röntgenliyor". 10 günde 66k takipçiye ulaştı. İki videosu 5.7M ve 1.8M izlendi. Ama kitlesi tüketici, KOBİ değil. Biz aynı paketlemeyi kullanıp konuyu **e-ticaret sahiplerinin derdine** (müşteri neden tekrar alır, neden gider) daraltıyoruz.

Türkiye'de bu alan boş. Türk e-ticaret ve pazarlama hesapları reklam, dropshipping ve motivasyon anlatıyor; hiçbiri 10k takipçiyi geçmiyor ve hiçbiri seri format kullanmıyor. "Elindeki müşteriyi geri getir" konusunu kimse anlatmıyor.

**Görevin:** Her gün 1 Reel üreten ve yayınlayan bir pipeline kurmak. Pipeline şu adımlardan oluşacak: konu seçimi, araştırma ve kaynak doğrulama, senaryo, seslendirme, görseller, video montajı, kapak, açıklama metni, yayın ve performans ölçümü.

## 1. Amaç ve huni

Bu videoların amacı satış değil, **lead toplamak**:

```
Reel (ünlü marka + şaşırtıcı mekanizma)
  → Yorum: "REHBER" yaz
  → DM ile ücretsiz PDF linki ("Türk e-ticaretinde tekrar satış getiren 25 taktik")
  → E-posta + mağaza URL'si + aylık sipariş aralığı (landing form)
  → E-posta serisi → Callypso Engage demo/deneme
```

- Başarı metrikleri, öncelik sırasıyla: **lead sayısı**, 1.000 izlenme başına takipçi, paylaşım + kaydetme, izlenme.
- Viral ama lead getirmeyen konu tipini azalt. Az izlenen ama lead getiren konu tipini artır.

## 2. Konu seçimi

Her video şu formülle kurulur:

**[Bilinen marka] + [somut rakam ya da olgu] + [adı konmuş psikolojik mekanizma] + [e-ticaret mağazasına uygulanabilir tek aksiyon]**

### İçerik sütunları ve oranları

| Sütun | Oran | Örnek |
|---|---|---|
| A. Marka röntgeni: retention mekanizması | %50 | Starbucks yıldızları, Duolingo serisi, Getir "Seni özledik", Amazon Prime batık maliyet, Migros Money kişisel indirim, Spotify Wrapped |
| B. Marka röntgeni: fiyat ve sepet psikolojisi | %25 | Çapa fiyat, tuzak (decoy) seçenek, ücretsiz kargo eşiği, "Son 3 ürün" kıtlığı, ,99 fiyatlar |
| C. "Bunu mağazana kur" (uygulama) | %15 | Terk edilmiş sepet SMS'i neden 1. saatte gitmeli; 90 gün sessiz müşteriye ne yazılır |
| D. Mit kırma / tartışma | %10 | "Yeni müşteri kazanmak eskiyi tutmaktan 5 kat pahalı" doğru mu? |

### Kurallar

- **Marka seçimi:** Türk izleyicinin tanıdığı markalar olsun. Türk ve global markaları karıştır (Trendyol, Getir, Hepsiburada, Migros, LC Waikiki, Starbucks, Apple, Amazon, Zara, IKEA, Duolingo, Netflix).
- **İzleyicide yaratılacak duygu:** "Bunu bana da yapıyorlar" ve hemen ardından "Ben de müşterime yapabilirim". Decoy'un en çok izlenen videoları ilk duyguyu yaratanlardı. Sadece tarih ya da hikâye anlatan videoları (KFC Japonya, New Coke) 10 kat az izlendi. **Saf tarih konusu seçme.**
- **Yasak konular:** Dropshipping, "zengin ol", siyaset, rakip SaaS kötüleme, doğrulanamayan iddialar, bir markayı suçlayan haber (hukuki risk).
- **Konu bankası:** `topics.json` dosyasında tut. Her konu için şu alanları sakla: `marka`, `mekanizma`, `sütun`, `kaynak_url[]`, `callypso_özelliği` (bu konu ileride hangi ürün özelliğine bağlanacak), `durum`, `skor`.

### Başlangıç konu bankası (önce doğrula)

1. Damga kartında 2 damga hazır basılıysa kartı tamamlayanlar artıyor (Nunes & Drèze, 2006, araba yıkama deneyi). Mekanizma: hazır ilerleme etkisi.
2. Duolingo serisi. Mekanizma: kayıptan kaçınma. Uygulama: "Puanların yarın siliniyor" SMS'i.
3. Getir/Yemeksepeti'nin "Seni özledik" bildirimi ve ne zaman gönderildiği. Mekanizma: geri kazanma zamanlaması.
4. Amazon Prime üyelerinin daha fazla harcaması. Mekanizma: batık maliyet.
5. Starbucks Rewards yıldızları. Mekanizma: oyunlaştırma ve kademeler.
6. Spotify Wrapped. Mekanizma: müşteriye kendi verisini içerik olarak geri vermek.
7. Ücretsiz kargo eşiği. Mekanizma: "biraz daha eklersen kargo bedava" ile sepet büyütme.
8. "Son 3 ürün" uyarısı. Mekanizma: kıtlık etkisi.
9. Sephora'nın numuneleri. Mekanizma: karşılıklılık ilkesi.
10. Migros Money'nin herkese farklı indirimi. Mekanizma: segmentleme.
11. Zara'nın neredeyse hiç reklam vermemesi. Mekanizma: az sayıda ve sık yeni ürünle müşteriyi tekrar mağazaya getirmek.
12. Netflix'in iptal ekranı. Mekanizma: müşteri kaybını önleme (churn önleme) akışı.
13. Apple'ın kutu açılışı. Mekanizma: satın alma sonrası deneyim ve tekrar satın alma.
14. IKEA etkisi. Mekanizma: emek verilen ürüne fazla değer biçmek.
15. Sepeti terk edenlere gönderilen e-posta. Mekanizma: zamanlama ve ilk saatin gücü.

## 3. Araştırma ve doğruluk (zorunlu kapı)

- Her rakam ve olgu için **en az 1 güvenilir kaynak URL'si** bul: akademik makale, şirketin resmî açıklaması ya da büyük bir yayın organı. Kaynağı `facts.json` dosyasına yaz.
- Kaynak bulunamayan iddia **senaryoya girmez**. Rakam uydurma; emin değilsen yuvarlak ve yumuşak ifade kullan ("araştırmalara göre neredeyse iki katı").
- Açıklama metninin sonuna kısa kaynak satırı ekle: `Kaynak: Nunes & Drèze (2006)`. Decoy'un yorumlarında "Hope this account is not AI" yorumu 59 beğeni aldı. Kaynak göstermek güveni artırır.
- Markaları tarafsız anlat: "Marka X müşteriyi kandırıyor" değil, "Marka X şunu yapıyor, çünkü beynimiz şöyle çalışıyor".

## 4. Senaryo yapısı (45–55 saniye, yaklaşık 120–140 Türkçe kelime)

```
[0–2 sn]   KANCA: Kapaktaki cümleyle aynı fikir. Çelişkili ya da şaşırtıcı olsun.
           "Starbucks sana yıldız vermiyor. Seni geri çağırıyor."
[2–10 sn]  OLGU: Marka + somut rakam. Tek cümle, tek rakam.
[10–35 sn] MEKANİZMA: Neden işe yarıyor? Psikolojik etkinin adını söyle
           (kayıptan kaçınma, çapa etkisi…). Gündelik bir örnekle somutlaştır.
[35–48 sn] "SENİN MAĞAZAN İÇİN": Tek, uygulanabilir aksiyon.
           "Son siparişinden 45 gün geçen müşteriye şunu yaz: …"
[48–55 sn] CTA: "Bunun gibi 25 taktiği PDF yaptım. Yorumlara REHBER yaz, DM'den atayım."
```

### Kurallar

- İlk cümle 8 kelimeyi geçmesin. "Merhaba", "bugün size" gibi girişler yasak.
- Cümleler kısa olsun. Her 2–3 saniyede yeni bir bilgi gelsin.
- "Siz" değil "sen" diliyle konuş. Samimi ama küçümsemeyen, belgesel anlatıcısı tonu.
- Ürün adı (Callypso) **Faz 1'de hiç geçmez** (bkz. bölüm 9).
- Her senaryo için 3 farklı kanca yaz. Kanca puanını şöyle hesapla: merak boşluğu + somutluk + kısalık. En iyisini seç.

## 5. Seslendirme

- **Motor:** ElevenLabs (Multilingual v2 ya da güncel en iyi Türkçe model) veya muadili. Doğal Türkçe vurgu şart. Ç/ş/ğ telaffuzunu ve marka adlarını test et.
- **Ses:** Tek ve sabit bir anlatıcı. Hesabın imzası olacak, değiştirme. 30–40 yaş aralığında, sakin, kendinden emin bir belgesel/podcast anlatıcısı. Satış sunucusu gibi bağırmasın, aşırı neşeli olmasın.
- **Hız:** Dakikada yaklaşık 150–165 kelime (normalin 1.05–1.1 katı). Kanca cümlesinden sonra kısa bir duraklama olsun.
- **Ses düzeyi:** Konuşma -14 LUFS. Müzik isteğe bağlı ve çok alçak (konuşmanın 18–22 dB altında), telifsiz, ritmi sakin. Decoy müziksiz, tek "original audio" kullanıyor. Önce müziksiz başla, sonra A/B testi yap.
- Yapay zekâ sesi kullanıldığı için Instagram'ın "AI info" etiketini aç. Gizlemeye çalışma.

## 6. Görsel kimlik ve kapak

### Kapak (en kritik varlık: profil grid'inde dergi serisi gibi görünmeli)

- **Boyut:** 1080×1920. Instagram profil grid'i kapağı **3:4** kırpar. Tüm metin ve obje **ortadaki 1080×1440 güvenli alanda** kalmalı.
- **Yerleşim** (Decoy şablonu, kendi renklerimizle):
  - **Üst bölüm (güvenli alanın %15–35'i):** 2 satırlık başlık.
    - 1. satır: Kalın, sıkışık grotesk font (Inter Tight Black / Archivo Black / Satoshi Black), 2–4 kelime. Örnek: **"Bedava değil."**
    - 2. satır: İtalik serif font (Instrument Serif Italic / Playfair Display Italic), 2–4 kelime, vurgu renginde. Örnek: *"Geri çağırıyor."*
  - **Orta bölüm:** Konuyu anlatan **tek bir 3D obje** (kahve kartı, bildirim ekranı, kargo kutusu, fiyat etiketi). Yumuşak stüdyo ışığı, hafif gölge, gerektiğinde bir tane kırmızı vurgu oku ya da daire.
  - **Alt bölüm:** Harf aralığı açık, küçük, büyük harfli marka yazısı: `S E P E T   R Ö N T G E N İ`.
- **Renkler:** Arka plan kırık beyaz/açık gri (#ECEAE6) ya da markanın kendi rengine yakın düz bir renk. Yazı koyu antrasit (#151515). Tek vurgu rengi (örneğin #E8402A kırmızı ya da Callypso marka rengi). Her kapakta en fazla 3 renk.
- **Resmî logo kullanma.** Markayı obje ve renkle çağrıştır, marka adını kendi tipografinle yaz. Bu hem hukuken daha güvenli, hem seri daha tutarlı görünür.
- **Metin sınırı:** Kapakta en fazla 8 kelime. Rakam varsa büyük ve tek başına olsun ("%34").
- Kapak tasarımını HTML/CSS şablonu + Playwright ile render et (Chromium kurulu). Böylece fontlar ve yerleşim her seferinde birebir aynı olur. 3D objeyi görsel üretim modeliyle üret: "isolated 3D render, soft studio lighting, neutral background, no text, no logo".
- **Grid testi:** Her yeni kapağı son 8 kapakla yan yana 3:4 kırpılmış hâlde render et ve göz kontrolünden geçir.

### Video görselleri

- İlk kare kapakla aynı olsun. Kapak ile video bütünlüğü korunur.
- Her 2–3 saniyede görsel değişsin: obje yakınlaşması, rakam animasyonu, basit diyagram, ekran mockup'ı.
- **Yakılmış Türkçe altyazı:** Kalın, ortada ve alt üçte birin üstünde (Instagram arayüzü alttaki alanı kapatıyor). Kelime kelime vurgulu karaoke stili. Aynı anda en fazla 2 satır.
- Rakamlar ekranda büyük ve tek başına görünsün.
- Montaj: ffmpeg veya Remotion. Çıktı: H.264, 1080×1920, 30fps, AAC 48kHz.

## 7. Açıklama metni şablonu

```
[Kanca cümlesi + 1 emoji]
[Tek cümlelik içgörü]
[Mağazana uygulama: 1 cümle]

Bunun gibi 25 taktiği PDF yaptım → yorumlara REHBER yaz, DM'den göndereyim.
[Soru: "Senin mağazanda son sipariş üzerinden kaç gün geçen müşteri 'kayıp' sayılıyor? 👇"]

Kaynak: [kısa kaynak]
#eticaret #müşterideneyimi #pazarlama #[marka] #[mekanizma]
```

- 3–5 hashtag kullan, daha fazla değil. İlk satır Instagram'da kesilmeden önce merak uyandırmalı.

## 8. Yayın ve otomasyon

- **Yayın:** Instagram Graph API Content Publishing ile (Business/Creator hesap gerekli). Akış: `media_type=REELS` ile container oluştur, işlenene kadar durumunu sorgula, sonra `media_publish` çağır. Kapağı `cover_url` ile ver. API limitlerini güncel dokümandan kontrol et.
- **Sıklık:** Günde 1 Reel. Saat 12:30 veya 20:30 (Türkiye saati). İlk 30 gün hiç ara verme. Seri disiplini, Türk rakiplerin büyüyememesinin bir numaralı sebebi.
- **Yorum ve DM otomasyonu:** "REHBER" içeren yorumlara Graph API private reply ile DM gönder (veya ManyChat kullan). DM'de PDF landing linki olsun. Landing form alanları: e-posta, mağaza URL'si, aylık sipariş aralığı. Bunlar ileride segmentleme ve lead puanlama için kullanılacak.
- **İnsan onayı:** İlk 14 gün her video yayından önce onay kuyruğuna düşsün (Slack/e-posta/Telegram ile onay). Doğruluk kapısı ve ton oturduktan sonra tam otomatiğe geç.

## 9. Ürünün görünme fazları

| Faz | Tetikleyici | Ürün görünürlüğü |
|---|---|---|
| 1 | 0–30 gün veya < 5k takipçi | **Sıfır.** Sadece bio linki ve PDF. |
| 2 | 30–90 gün | 5 videodan 1'i C sütunundan: "Bunu mağazana kur". Callypso ekranı sadece araç olarak görünür, satış dili yok. |
| 3 | 90+ gün veya 300+ lead | Gerçek mağaza vaka çalışmaları ("+%18 tekrar satın alma"), "Mağazanı röntgenleyelim" serisi (takipçi mağazası analizi), demo CTA'sı. |

## 10. Ölçüm ve öğrenme döngüsü

- Yayından 48 saat sonra Insights API'den şu metrikleri çek ve `metrics.json` dosyasına yaz: `reach`, `plays`, `ig_reels_avg_watch_time`, `saved`, `shares`, `comments`, `follows`. Ayrıca REHBER yorum sayısını ve landing'den gelen lead sayısını ekle.
- **Videoyu puanla:** `skor = 0.4*lead_per_1k + 0.25*(shares+saves)/reach + 0.2*follows_per_1k + 0.15*avg_watch_ratio`
- **Haftalık rapor:** Hangi sütun, hangi mekanizma, hangi kanca tipi ve hangi marka kategorisi kazandı. Konu bankasını buna göre yeniden sırala.
- En iyi 2 videonun farklı marka ya da açıyla **varyasyonunu** üret. Aynı videoyu tekrar yayınlama.
- 48 saatte hesap ortalamasının %30'unun altında kalan videoyu arşivle (Decoy bunu yapıyor gibi görünüyor). Grid temiz kalsın.
- En iyi performans gösteren 2 videoyu profile sabitle. Ardından 3. sabitleme olarak PDF'i anlatan bir video koy.

## 11. Pipeline çıktı formatı

Her video için `output/YYYY-MM-DD-slug/` klasöründe şu dosyalar olsun:

```
brief.json      # konu, sütun, marka, mekanizma, callypso_özelliği, kaynaklar
script.md       # 3 kanca adayı + seçilen senaryo + kelime sayısı
voice.mp3
captions.srt
cover.png       # 1080x1920 + cover_grid_preview.png (3:4 kırpılmış, son 8 kapakla)
video.mp4
caption.txt
qa.json         # aşağıdaki kontrol listesinin sonucu
```

### Yayın öncesi QA kontrol listesi (hepsi `true` olmadan yayınlama)

- [ ] Her rakamın `facts.json`'da kaynağı var
- [ ] Kanca ≤ 8 kelime ve ilk 2 saniyede söyleniyor
- [ ] Süre 45–58 saniye arasında
- [ ] Kapak metni ≤ 8 kelime, 3:4 güvenli alanın içinde
- [ ] Resmî logo yok
- [ ] Altyazı Instagram arayüzü bölgesine taşmıyor
- [ ] Ses -14 LUFS (±1)
- [ ] Faz 1'deyse Callypso adı hiçbir yerde geçmiyor
- [ ] CTA ve REHBER kelimesi senaryoda ve açıklamada var
- [ ] Yasak konu listesine takılmıyor

## 12. İlk iş

1. Klasör yapısını, `.env` şablonunu (`IG_ACCESS_TOKEN`, `IG_USER_ID`, `ELEVENLABS_API_KEY`, `IMAGE_API_KEY`) ve konu bankasını kur.
2. Kapak HTML şablonunu yap ve 3 örnek kapak render et: Starbucks yıldızı, Duolingo serisi, Getir "Seni özledik". Bana göster.
3. Bu 3 konunun senaryosunu, kaynaklarıyla birlikte yaz.
4. Birini uçtan uca videoya çevir. **Yayınlamadan** önce bana göster.
5. Onayımdan sonra zamanlanmış yayın ve metrik toplama adımlarını ekle.
