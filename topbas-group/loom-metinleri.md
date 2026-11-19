# Loom Demo Metinleri: Topbaş Group

İki alternatif, her biri 60–90 saniye. Kayıt mevcut Callypso Export Agent demo arayüzünde yapılır:
https://callypsoagent-callypso-export-agent.vercel.app/

**Önemli:**
- Uygulama kurgusal "Atlas Office Furniture" verisiyle çalışıyor ve gerçek yapay zekâ ya da araştırma bağlı değil.
- Bu yüzden her iki demo da başta ve sonda **simülasyon** olarak etiketlenir.
- Ekranda görünen mobilya verisi, "akış örneği" olarak anlatılır.
- Topbaş verileri yalnızca konuşmada ve ekrana eklenen bir kartta (Loom'un metin alanı ya da basit bir slayt) gösterilir; uygulamaya girilmez.
- Kayıttan önce "Demoyu sıfırla" düğmesine basın.

---

## Demo 1: Yeni B2B müşteri kazanımı (ZİMAŞ zirai zincir → Polonya)

**Süre:** ~80 sn · **Etiket:** "Simülasyon: örnek veri, gerçek araştırma ve e-posta gönderimi yapılmaz."

### Gösterilecek ekranlar
1. Açılış kartı (5 sn): "ZİMAŞ · Zirai zincir · Hedef: Polonya · Simülasyon"
2. **Müşteri Bulma:** ülke, ürün grubu ve müşteri tipi filtreleri → "Örnek adayları göster"
3. **Müşteriler:** bir aday kartı (iletişim geçmişi alanı)
4. **Onaylar:** e-posta taslağı → Düzenle / Onayla / Reddet
5. **Teklifler:** takip görevleri listesi (geciken görev)
6. Kapanış kartı

### Kullanılacak örnek veriler (karta yazılacak)
- Ürün: ZİMAŞ zirai zincirleri (katalog ürün grubu, sitede yayımlanmış)
- Pazar gerekçesi: Polonya 2023 makaralı zincir ithalatı 48,5 milyon USD, Türkiye payı ~%0,2 (UN Comtrade, HS 731511)
- Segment: tarım makinesi üreticileri ve yedek parça bayileri
- Aday: kurgusal ("Aday A, tarım makinesi üreticisi, ISO 606 tahrik zinciri kullanıyor: doğrulanacak")
- E-posta: İngilizce taslak, gönderilmez

### Konuşma metni (~80 sn)
> "Bu kısa kayıt bir simülasyon; ekrandaki veriler örnek. Amacım, ZİMAŞ için yeni bir ihracat müşterisi bulma akışının nasıl görünebileceğini göstermek.
>
> Ürün olarak ZİMAŞ'ın zirai zincir grubunu seçtim. Hedef pazar Polonya, çünkü Polonya geçen yıl yaklaşık 48 milyon dolarlık makaralı zincir ithal etti ve Türkiye'nin bu pazardaki payı yüzde birin altında. Ülkede güçlü bir tarım makinesi sanayisi de var.
>
> Müşteri Bulma ekranında ülkeyi, ürün grubunu ve müşteri tipini seçiyorum. Gerçek kullanımda burada, kamuya açık kaynaklardan bulunmuş ve neden uygun olduğu kaynağıyla yazılmış adaylar listelenecek. Kanıtı olmayan aday listeye girmeyecek.
>
> Uygun bulunan aday için ajan bir ilk temas e-postası taslağı hazırlıyor: ZİMAŞ'ın ilgili zincir serisi, özel üretim kabiliyeti ve numune teklifi. Bu e-posta kendiliğinden gitmiyor. Satış temsilciniz düzenliyor, onaylıyor ya da reddediyor.
>
> Yanıt gelmezse takip görevi oluşuyor ve süresi geçen görevler burada kırmızıyla görünüyor.
>
> Sonuç olarak araştırma, uygunluk gerekçesi ve ilk taslak tek bir akışta hazırlanıyor. Gönderim kararı ise her zaman ekibinizde kalıyor."

### İzleyicinin göreceği fayda
- Pazar seçiminin veriyle gerekçelendirilmesi
- Aday araştırması ile e-posta taslağının aynı yerde olması
- Hiçbir e-postanın onaysız gitmemesi
- Takiplerin unutulmaması

### Kapanış
> "Bunu tek bir ürün grubu ve tek bir pazarla, 30 günlük kontrollü bir pilotta test etmeyi öneriyoruz. Hangi ürün ve pazarla başlayacağımıza birlikte karar verelim."

---

## Demo 2: Teknik teklif otomasyonu (TOPÇESAN tekerlek göbeği RFQ)

**Süre:** ~85 sn · **Etiket:** "Simülasyon: kurgusal RFQ, gerçek müşteri ya da teknik resim kullanılmaz."

### Gösterilecek ekranlar
1. Açılış kartı: "TOPÇESAN · Direksiyon ve süspansiyon · Ön tekerlek göbeği RFQ · Simülasyon"
2. **Talepler:** gelen e-posta + "Çıkarılan bilgiler" + "Eksikler" paneli
3. **Ajan:** "Talebi incele" komutu → işlem adımları (1/7 → 3/7)
4. **Onaylar:** müşteriye eksik bilgi sorusu taslağı
5. **Teklifler:** teklif durumu ve takip tarihi
6. Kapanış kartı

### Kullanılacak örnek veri (karta yazılacak, kurgusal)
```
From: purchasing@tier1-example.eu   (kurgusal)
Subject: RFQ – Front wheel hub, forged steel
Dear Topçesan team,
please quote a forged and machined front wheel hub.
Estimated volume: 40,000 pcs/year. Delivery FCA.
Drawing will follow. Please reply by end of month.
```
Çıkarılacak bilgiler: parça = ön tekerlek göbeği · süreç = dövme + işleme · hacim = 40.000/yıl · teslim = FCA · son tarih = ay sonu
Eksikler: teknik resim ve revizyonu · malzeme normu · ısıl işlem şartı · SOP tarihi · PPAP seviyesi
Yönlendirme: proje mühendisi (direksiyon ve süspansiyon), satış sorumlusu

### Konuşma metni (~85 sn)
> "Bu da bir simülasyon. Ekranda TOPÇESAN'a gelebilecek bir RFQ örneği var; müşteri ve veriler kurgusal.
>
> TOPÇESAN'ın kendi sitesinde anlattığı süreç teknik resim ve şartnamenin incelenmesiyle başlıyor; ardından fizibilite, maliyet, nominasyon ve PPAP geliyor. Callypso yalnızca bu sürecin en başında, ilk okuma aşamasında yardımcı olmak için tasarlanıyor.
>
> E-posta geldiğinde ajan parça adını, yıllık hacmi, teslim koşulunu ve son yanıt tarihini çıkarıyor. Daha önemlisi, eksik olanları listeliyor: teknik resim yok, malzeme normu belirtilmemiş, SOP tarihi ve PPAP seviyesi bilinmiyor.
>
> Talep, direksiyon ve süspansiyon parçalarından sorumlu mühendise yönlendiriliyor ve son tarih için bir hatırlatma kuruluyor. Müşteriye gidecek eksik bilgi sorusu taslak olarak hazırlanıyor. Satış ekibi onaylamadan hiçbir şey gönderilmiyor.
>
> Burada bir şeyin altını çizmek istiyorum: teknik uygunluk, üretilebilirlik, maliyet, fiyat ve termin kararlarını yapay zekâ vermiyor. Bu kararlar mühendislerinize ve satış ekibinize ait. Ajan yalnızca okuma, eksik kontrolü ve yazışma yükünü hafifletiyor.
>
> Teklif gönderildikten sonra da takip tarihi burada görünüyor; yanıt gelmezse hatırlatma taslağı hazırlanıyor."

### İzleyicinin göreceği fayda
- Eksik bilginin ilk gün tespit edilmesi
- Talebin doğru mühendise gitmesi ve son tarihin kaçmaması
- Fiyat yazılmadan, onaylı bir yazışma taslağı
- Teklif sonrası takibin görünür olması

### Kapanış
> "Teknik resimlerin gizliliği nedeniyle bu senaryoyu, bilgi güvenliği çerçevesini sizinle netleştirdikten sonra ikinci adımda öneriyoruz. İlk adım olarak teklif takibini ve gelen zincir taleplerindeki eksik bilgi kontrolünü pilotlayabiliriz."

---

## Kayıt kontrol listesi
- [ ] "Demoyu sıfırla" basıldı
- [ ] Başta ve sonda "Simülasyon" etiketi görünüyor
- [ ] "Onayla ve demo gönder" tıklanırsa "Demo modunda gerçek e-posta gönderilmez" notu kadrajda
- [ ] Gerçek kişi adı, e-posta veya fiyat söylenmedi
- [ ] Süre 60–90 sn
