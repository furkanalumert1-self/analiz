import type { CrossSell, Journey, Level, Tag } from "@/lib/types";

// ───────────────────────────── Automation journeys ─────────────────────────────
export const journeys: Journey[] = [
  {
    id: "cart",
    name: "Sepet terk — Müzikli Pinyata Kalp Çikolata",
    trigger: "Sepete eklendi, 30 dk içinde sipariş yok",
    productId: 657,
    goal: "İndirim vermeden 1.499 TL'lik sepeti kurtarmak",
    steps: [
      { delay: "0", channel: "Event", title: "Ürün sepete eklendi", message: "Müzikli Pinyata Kalp Çikolata · 1.499 TL · kişiselleştirme alanı" },
      { delay: "45 dk", channel: "Email", title: "Ürün avantajı hatırlatma", message: "“Kutuyu açınca İyi ki Doğdun çalıyor, kırınca içinden sürpriz çikolatalar çıkıyor 🎶 Mesajını yazmayı unutma.”", noDiscount: true },
      { delay: "20 saat", channel: "SMS", title: "Teslim tarihi güvencesi", message: "“Bugün sipariş verirsen doğum gününe yetişir. Sorun olursa WhatsApp: 0555 099 89 09”", noDiscount: true, condition: "SMS izni var ve sepet ≥ 450 TL" },
      { delay: "48 saat", channel: "Email", title: "Son hatırlatma + alternatifler", message: "Aynı özel gün için Balon Dekorlu Doğum Günü Çikolatası (859 TL) ve Kişiye Özel Pasta Formlu Dubai Çikolatası (756,49 TL)", noDiscount: true },
      { delay: "72 saat", channel: "Email", title: "Kontrollü teklif (opsiyonel)", message: "Yalnızca 'discount-seeker' bayrağı olmayan, daha önce kuponsuz almamış ve sepeti ≥ 900 TL olanlara ücretsiz kargo", condition: "A/B — %20 kontrol grubu" },
    ],
    exitRule: "Sipariş verildiğinde veya ürün sepetten çıkarıldığında akıştan çık",
    tag: "INFERRED",
  },
  {
    id: "personalization",
    name: "Kişiselleştirme yarım kaldı — Yenilebilir Fotoğraflı Çikolata",
    trigger: "Fotoğraf yükleme alanı boş, checkout başlatılmadı",
    productId: 536,
    goal: "Fotoğraf/logo hazırlama sürtünmesini kaldırmak",
    steps: [
      { delay: "0", channel: "Event", title: "Ürün sepette, dosya yok", message: "Yenilebilir Fotoğraflı Çikolata · 959,50 TL · 'Fotoğraf/Logo Yükleyiniz'" },
      { delay: "30 dk", channel: "Email", title: "Nasıl görünecek?", message: "Örnek baskı görseli + 'En iyi sonuç için yüz net, aydınlık bir fotoğraf seç' rehberi", noDiscount: true },
      { delay: "4 saat", channel: "SMS / WhatsApp", title: "Alternatif yükleme yolu", message: "“Fotoğraf telefonunda mı? Siparişi tamamla, fotoğrafı WhatsApp'tan gönder — biz ekleyelim.”", noDiscount: true },
      { delay: "24 saat", channel: "Email", title: "Benzer kişiselleştirilmiş ürünler", message: "Fotoğraflı Madlen Çikolata (999 TL), Kare Kutuda Fotoğraflı Çikolata (525 TL)", noDiscount: true },
    ],
    exitRule: "Sipariş verildiğinde çık",
    tag: "INFERRED",
  },
  {
    id: "browse",
    name: "Browse abandonment — Konuşan Çikolata ''Seni Seviyorum''",
    trigger: "Ürün 7 gün içinde 2. kez görüntülendi, sepete eklenmedi",
    productId: 276,
    goal: "Kararsız hediye alıcısını doğru fiyat bandına yönlendirmek",
    steps: [
      { delay: "0", channel: "Event", title: "2. ürün görüntüleme", message: "Konuşan Çikolata ''Seni Seviyorum'' · 515,39 TL" },
      { delay: "2 saat", channel: "Email", title: "Nasıl çalışıyor?", message: "“10 saniyelik sesini kaydet, kutuyu açınca duysun.” + 6 × 18 g sütlü çikolata bilgisi", noDiscount: true },
      { delay: "3 gün", channel: "Email", title: "3 fiyat bandında alternatif", message: "Tek Gül Çikolata (64,99 TL) · Konuşan ''I Love You'' (515,39 TL) · Kalpli Ayıcıklı Çikolata (949 TL)", noDiscount: true },
      { delay: "Sürekli", channel: "Meta retargeting", title: "Dinamik ürün reklamı", message: "Ürün sayfasına (Trendyol'a değil) giden katalog reklamı" },
    ],
    exitRule: "Sepete ekleme veya sipariş",
    tag: "INFERRED",
  },
  {
    id: "occasion",
    name: "Özel gün hatırlatıcısı — Yıldönümü Çikolata",
    trigger: "Yıldönümü kategorisinden sipariş (veya checkout'ta tarih kaydı)",
    productId: 562,
    goal: "Yıllık tekrar satın alma — tamamen indirimsiz",
    steps: [
      { delay: "0", channel: "Event", title: "Sipariş", message: "Yıldönümü Çikolata · 895 TL · 'Bu tarihi her yıl hatırlat' ✓" },
      { delay: "T-14 gün (ertesi yıl)", channel: "Email", title: "Yıldönümünüz yaklaşıyor", message: "“Geçen yıl Yıldönümü Çikolata göndermiştin — bu yıl anınızı Fotoğraflı Çikolata Pasta (985 TL) ile çikolataya basalım mı?”", noDiscount: true },
      { delay: "T-7 gün", channel: "SMS", title: "Son sipariş tarihi", message: "“Yıldönümüne yetişmesi için son sipariş: Salı 15:00”", noDiscount: true },
      { delay: "T-2 gün", channel: "Email", title: "Son şans", message: "Hızlı teslim edilebilen stoklu ürünler", noDiscount: true },
    ],
    exitRule: "İlgili pencerede sipariş",
    tag: "INFERRED",
  },
  {
    id: "b2b",
    name: "Kurumsal teklif — Konuşan Kurumsal Çikolata",
    trigger: "0 TL kurumsal ürün sepete eklendi / 'Teklif Al' formu",
    productId: 398,
    goal: "Yeni yıl sezonu B2B lead'ini siparişe çevirmek",
    steps: [
      { delay: "0", channel: "Form", title: "Teklif talebi", message: "Adet · teslim tarihi · logo · şirket e-postası" },
      { delay: "5 dk", channel: "Email", title: "Talep alındı", message: "Adet kademeleri (100 / 250 / 500) + üretim takvimi" },
      { delay: "24 saat", channel: "Email", title: "Logo mockup + fiyat", message: "Logonuzla hazırlanmış görsel önizleme" },
      { delay: "3 gün", channel: "Email", title: "Referans / kullanım senaryoları", message: "Bayram ikramı, fuar, yılbaşı çalışan hediyesi" },
      { delay: "7 gün", channel: "SMS", title: "Kapasite hatırlatması", message: "“Yılbaşı üretim takvimimiz doluyor — 1 Aralık'a kadar onaylanan siparişler zamanında.”" },
      { delay: "+11 ay", channel: "Email", title: "Yeniden sipariş", message: "Geçen yılki siparişin tekrar + yeni koleksiyon" },
    ],
    exitRule: "Teklif onayı / red",
    tag: "INFERRED",
  },
  {
    id: "post",
    name: "Post-purchase + yorum — Konuşan Çikolata ''İyi ki Doğdun''",
    trigger: "Sipariş teslim edildi",
    productId: 269,
    goal: "Yorum, UGC ve ikinci sipariş",
    steps: [
      { delay: "0", channel: "Email", title: "Sipariş onayı", message: "Kayıt nasıl yapılır? (2 kayıt tuşuna aynı anda bas)" },
      { delay: "Kargo", channel: "SMS", title: "Kargoda", message: "Takip linki" },
      { delay: "Teslim +3 gün", channel: "Email", title: "Tepkisi nasıldı?", message: "1–5 ★ puan" },
      { delay: "4–5★", channel: "Email", title: "UGC isteği", message: "“Kutuyu açtığı anın videosunu paylaş, bir sonraki siparişte kişiselleştirme bizden.”", condition: "Olumlu yorum" },
      { delay: "1–3★", channel: "Destek", title: "Müdahale", message: "Destek ekibine anında görev + telefonla dönüş", condition: "Olumsuz yorum" },
      { delay: "Teslim +14 gün", channel: "Email", title: "Sıradaki özel gün", message: "Hatırlatıcıya tarih ekle" },
    ],
    exitRule: "—",
    tag: "INFERRED",
  },
];

export const cartTimingOptions = [
  { timing: "30 dk", use: "Kişiselleştirme yarım kaldı, yüksek niyet", pro: "Karar anına en yakın; sepet hâlâ hafızada", con: "Çok erken — alıcı hâlâ fotoğraf arıyor olabilir", recommended: "Kişiselleştirilmiş ürünler" },
  { timing: "45 dk – 1 saat", use: "Standart ilk hatırlatma", pro: "Oturum kapandıktan sonra; rahatsız etmez", con: "—", recommended: "Tüm sepetler (Email)" },
  { timing: "4 saat", use: "Aynı gün içinde ikinci temas", pro: "Mesai sonrası, akşam alışveriş saatine denk gelir", con: "SMS için sık", recommended: "Kişiselleştirme / WhatsApp adımı" },
  { timing: "20–24 saat", use: "Teslim tarihi mesajı", pro: "'Yarın kargoda' vaadi hâlâ geçerli", con: "Özel güne az kaldıysa geç kalabilir", recommended: "SMS (izinli, sepet ≥ 450 TL)" },
  { timing: "48 saat", use: "Son hatırlatma + alternatif ürünler", pro: "Fiyat itirazı olanı daha uygun ürüne yönlendirir", con: "Dönüş oranı düşer", recommended: "Email" },
  { timing: "72 saat", use: "Kontrollü teklif", pro: "Yalnızca indirime duyarlı küçük bir segment", con: "Yanlış kurgulanırsa indirim beklentisi yaratır", recommended: "Holdout grubu ile test" },
];

export const noDiscountLevers = [
  { lever: "Ürün avantajı", example: "“Kutuyu açınca İyi ki Doğdun çalar” (Müzikli Pinyata Kalp)", tag: "VERIFIED" as Tag },
  { lever: "Teslim tarihi / cut-off", example: "“Bugün sipariş = doğum gününe yetişir”", tag: "INFERRED" as Tag },
  { lever: "Gerçek stok uyarısı", example: "Fiyonklu Erkek Bebek Çanta Çikolata — stok: 1", tag: "VERIFIED" as Tag },
  { lever: "Sosyal kanıt / yorum", example: "Şu an 0 yorum → review otomasyonu devreye girince", tag: "REQUIRES DATA" as Tag },
  { lever: "Kişiselleştirme desteği", example: "“Fotoğrafı WhatsApp'tan gönder, biz ekleyelim”", tag: "INFERRED" as Tag },
  { lever: "Kargo bilgisi", example: "Kargo firması, paketleme, hasarsız teslim", tag: "REQUIRES DATA" as Tag },
  { lever: "Alternatif fiyat bandı", example: "515 TL Konuşan → 64,99 TL Tek Gül add-on veya 949 TL Ayıcıklı", tag: "VERIFIED" as Tag },
];

export const browseScenarios = [
  { tactic: "Email", scenario: "Konuşan Çikolata ''I Love You''yu 2 kez gören → 'Sesini 10 sn kaydet' anlatımı", products: [249] },
  { tactic: "SMS", scenario: "Öğretmenler Günü ürününü 3 gün içinde 2 kez gören → 24 Kasım cut-off SMS'i", products: [441] },
  { tactic: "Retargeting", scenario: "Müzikli Pinyata Kalp görüntüleyen → Meta katalog reklamı chocchic.com ürün sayfasına", products: [657] },
  { tactic: "Ürün önerisi", scenario: "Fiyonklu Kız Bebek Çanta (1.499 TL) görüntüleyip almayan → Kalp İçinde Kalp Bebek Pembe (649 TL)", products: [557, 542] },
  { tactic: "Review / sosyal kanıt", scenario: "Mesajlı Çikolata Şişesi görüntüleyen → kutu açılış UGC'si (review otomasyonu sonrası)", products: [641] },
  { tactic: "SSS", scenario: "Logolu Madlen Çikolata görüntüleyen → 'Minimum 250 adet, logo yükleyince 2 iş gününde kargoda'", products: [17] },
  { tactic: "Teşvik (kontrollü)", scenario: "Kız İsteme Çikolatası (2.676,50 TL) 3+ görüntüleme → ücretsiz mesaj revizyonu (indirim değil)", products: [392] },
];

// ───────────────────────────── Recommendations ─────────────────────────────
export const crossSells: CrossSell[] = [
  { sourceId: 269, targets: [{ id: 643, role: "Add-on" }, { id: 450, role: "Upsell" }, { id: 657, role: "Upsell" }], logic: "Frequently bought together + upsell", why: "Aynı doğum günü için 135 TL'lik mini ek hediye; bütçesi olan için müzikli/pinyata premium versiyon.", timing: "Sepette + teslim +14 gün" },
  { sourceId: 633, targets: [{ id: 636, role: "Add-on" }, { id: 638, role: "Upsell" }, { id: 632, role: "Cross-sell" }], logic: "Complementary (gül teması)", why: "Gül buketi alanlara 64,99 TL tek gül ek hediye; aynı temanın daha büyük versiyonları.", timing: "Sepette" },
  { sourceId: 543, targets: [{ id: 161, role: "Cross-sell" }, { id: 542, role: "Upsell" }, { id: 438, role: "Next occasion" }], logic: "Bought after (bebek yaşam döngüsü)", why: "Doğum hediyesinden sonra misafir ikramı (25 adet); 11 ay sonra ilk yaş günü.", timing: "Teslim +7 gün; +330 gün" },
  { sourceId: 293, targets: [{ id: 416, role: "Cross-sell" }, { id: 561, role: "Add-on" }, { id: 438, role: "Next occasion" }], logic: "Category affinity (Bebek)", why: "İsme özel bebek kutusu + hastaneye girebilen çikolatalı çiçek + nazar boncuklu ek hediye.", timing: "Sepette; +330 gün" },
  { sourceId: 18, targets: [{ id: 63, role: "Cross-sell" }, { id: 654, role: "Cross-sell" }, { id: 534, role: "Cross-sell" }], logic: "Viewed together (taraftar)", why: "GS taraftarına alternatif fiyat (849 TL) ve Babalar Günü'nde futbol temalı pinyata.", timing: "Browse + Babalar Günü T-14" },
  { sourceId: 17, targets: [{ id: 525, role: "Cross-sell" }, { id: 624, role: "Cross-sell" }, { id: 258, role: "Next occasion" }], logic: "B2B complementary", why: "Logolu madlen alan firma aynı etkinlikte kartvizit çikolata ve logolu kurabiye kullanabilir; yılbaşında koleksiyon.", timing: "Teklif akışında; bayram/yılbaşı T-60" },
  { sourceId: 441, targets: [{ id: 508, role: "Upsell" }, { id: 440, role: "Bundle" }, { id: 437, role: "Upsell" }], logic: "Quantity / class bundle", why: "Veliler çoğu zaman birden fazla öğretmene alır: adet artırımı + kendi mesajını yazdığı premium versiyon.", timing: "Sepette (Kasım)" },
  { sourceId: 276, targets: [{ id: 585, role: "Upsell" }, { id: 586, role: "Upsell" }, { id: 536, role: "Cross-sell" }], logic: "Upsell (sevgiliye)", why: "Sesli mesaja peluş/ayıcık veya fotoğraflı çikolata eklemek sevgililer gününde AOV'yi artırır.", timing: "Şubat kampanyası" },
  { sourceId: 621, targets: [{ id: 630, role: "Cross-sell" }, { id: 658, role: "Cross-sell" }, { id: 655, role: "Cross-sell" }], logic: "Self-consumption repeat", why: "Atıştırmalık kategorisi gerçek tüketim ürünü: Dubai çikolata alan kendine alıyor — çeşit keşfi.", timing: "+21–30 gün" },
  { sourceId: 562, targets: [{ id: 572, role: "Next occasion" }, { id: 354, role: "Cross-sell" }, { id: 405, role: "Cross-sell" }], logic: "Next occasion (yıllık)", why: "Yıldönümü müşterisi ertesi yıl fotoğraflı pasta; arada sevgililer günü için Konuşan ''6 Dilde Aşk''.", timing: "T-14 gün" },
  { sourceId: 272, targets: [{ id: 142, role: "Upsell" }, { id: 633, role: "Add-on" }], logic: "Complementary (özür)", why: "Sesli özür + 'Özür Dilerim' mesajlı büyük kutu veya gül buketi — duygusal yoğunluk.", timing: "Sepette" },
  { sourceId: 364, targets: [{ id: 361, role: "Cross-sell" }, { id: 640, role: "Add-on" }, { id: 274, role: "Cross-sell" }], logic: "Household cross-sell", why: "Anneler Günü'nde anne + büyükanne aynı siparişte; sesli mesaj alternatifi.", timing: "Mayıs, sepette" },
  { sourceId: 560, targets: [{ id: 318, role: "Cross-sell" }, { id: 170, role: "Cross-sell" }], logic: "Occasion affinity (sağlık)", why: "Doktora teşekkür eden aile hasta yakınına 'Geçmiş Olsun' da gönderir.", timing: "Browse" },
  { sourceId: 606, targets: [{ id: 605, role: "Upsell" }, { id: 640, role: "Upsell" }], logic: "B2B quantity (8 Mart)", why: "99 TL'lik Şeffaf Kutuda Kadınlar Günü tipik ofis toplu alımı — çoklu adette kurumsal teklif.", timing: "Şubat sonu" },
];

// Occasion-based repeat purchase windows (no order history available)
export const repeatWindows = [
  { item: "Atıştırmalık — Çıtır Kadayıflı Dubai Çikolatası / ÇokoStick (10'lu)", productIds: [621, 658], cycle: "≈ 21–30 gün", reminder: "Tüketim bitişi: +21 gün (ÇokoStick kış sezonunda)", basis: "Kendine alım; paket içeriği (10 adet çubuk)", tag: "INFERRED" as Tag },
  { item: "Doğum günü ürünleri (22 ürün)", productIds: [269, 657, 438], cycle: "365 gün", reminder: "Aynı alıcı için T-14 / T-7 / T-2", basis: "Yıllık özel gün", tag: "INFERRED" as Tag },
  { item: "Yıldönümü (9 ürün)", productIds: [562, 572], cycle: "365 gün", reminder: "T-14 gün", basis: "Yıllık özel gün", tag: "INFERRED" as Tag },
  { item: "Öğretmenler Günü (12 ürün)", productIds: [441, 508], cycle: "Sabit tarih: 24 Kasım", reminder: "1 Kasım + 17 Kasım + 21 Kasım", basis: "Okul çağında çocuk sahibi veli — yıllarca tekrar", tag: "INFERRED" as Tag },
  { item: "Anneler / Babalar Günü", productIds: [364, 653], cycle: "Yıllık (Mayıs 2. / Haziran 3. Pazar)", reminder: "T-21 / T-5 / T-2", basis: "Sabit takvim", tag: "INFERRED" as Tag },
  { item: "Bebek (21 ürün)", productIds: [293, 161], cycle: "+7 gün, +40 gün, +330 gün", reminder: "Misafir ikramı → ziyaret → ilk yaş günü", basis: "Yaşam olayı zinciri", tag: "INFERRED" as Tag },
  { item: "Kurumsal Bayram (29 ürün)", productIds: [611, 644], cycle: "≈ 6 ay (Ramazan ↔ Kurban)", reminder: "Bayramdan 60 ve 30 gün önce", basis: "İki bayram döngüsü", tag: "INFERRED" as Tag },
  { item: "Kurumsal Yılbaşı / Logolu", productIds: [17, 577, 627], cycle: "≈ 12 ay", reminder: "1 Ekim ve 1 Kasım", basis: "Yıllık bütçe dönemi", tag: "INFERRED" as Tag },
  { item: "Taraftar (7 ürün)", productIds: [18, 19, 20], cycle: "Sezon başı (Ağustos), derbi haftası, Babalar Günü", reminder: "Maç takvimi tetikleyicisi", basis: "Etkinlik bazlı", tag: "INFERRED" as Tag },
];

// ───────────────────────────── Win-back ─────────────────────────────
export const winback = [
  { window: "30 gün", segment: "İlk siparişi 30 gün önce, 2. sipariş yok", message: "Teşekkür + 'Sıradaki özel gününü kaydet' (hatırlatıcı)", channel: "Email", offer: "Yok", timing: "Gün 30", impact: "Low" as Level },
  { window: "60 gün", segment: "1 sipariş, e-postaları açıyor ama siteye gelmiyor", message: "Yaklaşan özel güne göre 3 ürün (ör. Ekim sonu → Öğretmenler Günü)", channel: "Email", offer: "Yok — ücretsiz kişiselleştirme revizyonu", timing: "Gün 60", impact: "Medium" as Level },
  { window: "90 gün", segment: "Son alışverişinden 90 gün geçen ve en az 2 kez satın almış müşteri", message: "“Seni özledik” + yeni gelenler (Mesajlı Çikolata Şişesi, Pinyata) erken erişim", channel: "Email + SMS", offer: "Ücretsiz kargo (tek kullanımlık, 14 gün)", timing: "Gün 90, +5 gün SMS", impact: "High" as Level },
  { window: "120+ gün", segment: "Tek seferlik alıcı, 120+ gün inaktif", message: "İlk siparişin yıl dönümünden 14 gün önce 'Geçen yıl bu zamanlar …'", channel: "Email", offer: "Son adımda %10 (holdout ile)", timing: "Sipariş tarihi + 351 gün", impact: "Medium" as Level },
  { window: "Bayram −60 gün", segment: "Geçen bayram sipariş vermiş kurumsal müşteri, bu dönem sessiz", message: "“Geçen bayram 250 adet Logolu Madlen — aynı siparişi tekrar edelim mi?”", channel: "Email + telefon", offer: "Erken sipariş: üretim önceliği", timing: "Bayramdan 60 gün önce", impact: "High" as Level },
];

// ───────────────────────────── Segmentation ─────────────────────────────
export const rfmSegments = [
  { name: "Champions", rule: "R ≤ 60 gün · F ≥ 4 · M üst %20", play: "VIP erken erişim, UGC/referral isteği", tone: 700 },
  { name: "Loyal", rule: "F ≥ 3 (12 ay)", play: "Özel gün takvimi, yeni koleksiyon", tone: 600 },
  { name: "Potential Loyalist", rule: "F = 2 · R ≤ 120 gün", play: "3. siparişe köprü: farklı özel gün", tone: 500 },
  { name: "New", rule: "İlk sipariş ≤ 30 gün", play: "Post-purchase + hatırlatıcı kaydı", tone: 400 },
  { name: "At Risk", rule: "F ≥ 2 · R 180–365 gün", play: "Win-back 90 gün akışı", tone: 350 },
  { name: "Lost", rule: "R > 365 gün", play: "Yıl dönümü denemesi, sonra sunset", tone: 250 },
  { name: "High Value", rule: "M üst %10 veya B2B sipariş ≥ 4.000 TL", play: "Kişisel temsilci, teklif önceliği", tone: 650 },
  { name: "Low Value", rule: "Tek sipariş < 450 TL", play: "Add-on / upsell, indirim yok", tone: 300 },
];

export const behaviorSegments = [
  { name: "Product viewers", rule: "Son 7 günde ≥2 ürün görüntüleme, sepet yok" },
  { name: "Cart abandoners", rule: "Sepet, 30 dk içinde sipariş yok" },
  { name: "Personalization abandoners", rule: "Kişiselleştirme alanı boş sepet (ChocChic'e özel)" },
  { name: "Repeat buyers", rule: "≥2 sipariş" },
  { name: "One-time buyers", rule: "1 sipariş, >60 gün" },
  { name: "Discount seekers", rule: "Siparişlerin ≥%50'si kuponlu" },
  { name: "High AOV", rule: "Ortalama sepet ≥ 1.000 TL (katalog medyanı ≈ 650 TL)" },
  { name: "Occasion planners", rule: "Hatırlatıcıya ≥1 tarih kaydetmiş" },
  { name: "B2B / corporate", rule: "Kurumsal kategori ilgisi, 0 TL ürün, şirket e-postası" },
  { name: "Inactive", rule: "180 gün e-posta etkileşimi ve ziyaret yok" },
];

// ───────────────────────────── Lifecycle ─────────────────────────────
export const lifecycle = [
  { stage: "Visitor", goal: "Tanımla", email: "—", sms: "—", whatsapp: "Destek butonu (mevcut wa.me)", onsite: "Gift Finder, 'özel günlerini hatırlatalım' pop-up", kpi: "Lead oranı" },
  { stage: "Lead", goal: "İlk siparişe taşı", email: "Welcome 3'lü seri", sms: "—", whatsapp: "—", onsite: "Kategori bazlı karşılama bandı", kpi: "Lead → alıcı" },
  { stage: "Product View", goal: "Niyeti yakala", email: "Browse abandonment", sms: "Özel gün cut-off", whatsapp: "—", onsite: "Son görüntülenenler", kpi: "View → cart" },
  { stage: "Cart", goal: "Sepeti kurtar", email: "45 dk / 48 saat", sms: "20 saat (izinli)", whatsapp: "Kişiselleştirme dosyası", onsite: "Teslim tarihi bloğu", kpi: "Recovery rate" },
  { stage: "First Purchase", goal: "Deneyim + yorum", email: "Post-purchase + review", sms: "Kargo", whatsapp: "Ses/fotoğraf toplama", onsite: "—", kpi: "Yorum oranı" },
  { stage: "Second Purchase", goal: "Farklı özel güne köprü", email: "Cross-sell +14 gün, hatırlatıcı", sms: "Sezon T-5", whatsapp: "—", onsite: "Geçmişe göre öneri", kpi: "Repeat rate" },
  { stage: "Loyal", goal: "Takvimi sahiplen", email: "Sezon takvimi", sms: "Cut-off", whatsapp: "Öncelikli destek", onsite: "Kişisel koleksiyon", kpi: "Sipariş sıklığı" },
  { stage: "VIP", goal: "Ayrıcalık, indirim değil", email: "Erken erişim", sms: "Lansman", whatsapp: "Kişisel temsilci", onsite: "VIP rozet", kpi: "LTV" },
  { stage: "At Risk", goal: "Beklenen pencereyi yakala", email: "Win-back 90", sms: "1 hatırlatma", whatsapp: "—", onsite: "—", kpi: "Reaktivasyon" },
  { stage: "Churned", goal: "Son deneme → sunset", email: "Yıl dönümü mesajı", sms: "—", whatsapp: "—", onsite: "—", kpi: "Liste sağlığı" },
  { stage: "Win-back", goal: "Yeniden kazan", email: "Kontrollü teklif", sms: "—", whatsapp: "Opsiyonel", onsite: "—", kpi: "Win-back geliri" },
];

// ───────────────────────────── Campaigns / discount governance ─────────────────────────────
export const campaignMatrix = [
  { segment: "New customer", offer: "Hatırlatıcı kaydı + sonraki siparişte ücretsiz kişiselleştirme revizyonu", why: "İlişki kurar, marjı korur" },
  { segment: "VIP", offer: "48 saat erken erişim, lansman ürünü (Mesajlı Çikolata Şişesi)", why: "Ayrıcalık > indirim" },
  { segment: "At Risk", offer: "Ücretsiz kargo (tek kullanım, 14 gün)", why: "Kargo alıcıya ait — somut ama sınırlı maliyet" },
  { segment: "Cart abandoner", offer: "İlk 3 adım indirimsiz; 72. saatte holdout'lu teklif", why: "Çoğu sepet teslim/kişiselleştirme belirsizliğinden terk ediliyor (varsayım)" },
  { segment: "High AOV", offer: "Bundle: Konuşan Çikolata + Gül Buketi + Tek Gül", why: "AOV'yi indirimsiz artırır" },
  { segment: "Discount seeker", offer: "Yalnızca sezon sonu / stok eritme (ör. Paskalya ürünleri, 998 adet stok)", why: "Kontrollü, tam fiyatlı alıcıyı eğitmez" },
  { segment: "B2B", offer: "Adet kademeli fiyat, erken sipariş üretim önceliği", why: "Fiyat pazarlığını yapılandırır" },
];

export const discountGuardrails = [
  "Her akışta %10–20 holdout (kontrol) grubu — artımsal geliri ölç.",
  "Tek kişiye 30 günde en fazla 1 kupon.",
  "Kuponlu siparişi ≥%50 olan müşteriye 'discount-seeker' bayrağı → sepet terkte kupon yok.",
  "Özel güne T-5 günden az kaldıysa asla indirim — tarih baskısı zaten var.",
  "İndirim yerine: ücretsiz kargo, kişiselleştirme revizyonu, erken erişim, hediye paketi.",
];

// ───────────────────────────── VIP / loyalty ─────────────────────────────
export const vipCriteria = [
  { criterion: "Toplam harcama (12 ay)", b2c: "≥ 3.000 TL (≈ katalog medyanının 4–5 katı)", b2b: "≥ 10.000 TL" },
  { criterion: "Sipariş sayısı (12 ay)", b2c: "≥ 4", b2b: "≥ 2 dönem (bayram + yılbaşı)" },
  { criterion: "AOV", b2c: "≥ 1.000 TL", b2b: "≥ 4.000 TL (250 adet logolu madlen seviyesi)" },
  { criterion: "Özel gün çeşitliliği", b2c: "≥ 3 farklı özel gün kategorisi", b2b: "—" },
];

export const vipPlays = [
  "Yeni koleksiyonlara 48 saat erken erişim (Yılbaşı koleksiyonu Kasım başı)",
  "Kişisel WhatsApp hattı ve öncelikli üretim",
  "Yılda 1 ücretsiz kişiselleştirme revizyonu",
  "Doğum gününde sürpriz: Mini Happy Birthday Çikolata (135 TL) siparişe eklenir",
  "Kişiselleştirilmiş öneri: geçmiş özel günlerine göre",
];

export const loyaltyProgram = {
  name: "ChocChic Kalpler (öneri)",
  tiers: [
    { name: "Tatlı", rule: "İlk sipariş", perks: "Özel gün hatırlatıcısı, doğum günü sürprizi" },
    { name: "Spesiyal", rule: "2+ sipariş veya 1.500 TL", perks: "Ücretsiz kişiselleştirme revizyonu, erken erişim" },
    { name: "Gold", rule: "4+ sipariş veya 3.000 TL", perks: "Ücretsiz kargo, kişisel temsilci, lansman hediyesi" },
  ],
  mechanics: [
    "Puan: her 10 TL = 1 kalp; yorum = 20 kalp; fotoğraflı/video yorum = 50 kalp",
    "Referral: mevcut 'Tavsiye Et' butonu → arkadaş ilk siparişte ücretsiz kargo, davet eden 100 kalp",
    "Özel gün kaydı: her kaydedilen tarih = 10 kalp (veri toplama teşviki)",
    "Doğum günü + ilk sipariş yıldönümü mesajı",
  ],
};

// ───────────────────────────── Other AI / automation detail ─────────────────────────────
export const aiSupportExamples = [
  { q: "Konuşan çikolatada ne kadar ses kaydedebilirim?", a: "10 saniye. Kutuda 6 × 18 g sütlü çikolata var, kutu 20 × 8 cm; kutu açılınca mesaj çalar.", tag: "VERIFIED" as Tag },
  { q: "Taraftar çikolatasına marş ekleyebilir miyim?", a: "Evet, 10 saniyeyi geçmeyen müzik/ses kaydı veya marş linki; siparişten sonra 0555 099 89 09'a WhatsApp/SMS ile de gönderilebilir. 32 × 6 g isme yazılı madlen, kutu 20×20×5 cm.", tag: "VERIFIED" as Tag },
  { q: "Logolu madlen çikolatada minimum adet?", a: "250 adet (4.350 TL). Logoyu yükleyince 2 iş günü içinde kargoya verilir; yüksek adetlerde teklif.", tag: "VERIFIED" as Tag },
  { q: "Hastaneye doğum hediyesi gönderebilir miyim?", a: "Erkek Bebek Çikolatalı Çiçek / Kız Bebek Buketi 'hastaneye girebilen' çiçek olarak tasarlandı; 20 fındık dolgulu spesiyal çikolata (899 TL).", tag: "VERIFIED" as Tag },
  { q: "Mesajlı Çikolata Şişesi alkol içeriyor mu?", a: "Hayır, tamamen alkolsüz saf çikolata; her biri 95 g, 5'li set (1.199,99 TL).", tag: "VERIFIED" as Tag },
  { q: "Sevgilime 500 TL altı ne alabilirim?", a: "Tutkulu Renkler (454 TL), Gül Buketi (455 TL), Love You Sevgililer Günü (485,07 TL), Çizgili Kalpler (499 TL).", tag: "VERIFIED" as Tag },
  { q: "Kargo ücreti ne kadar?", a: "Politikaya göre kargo ücreti alıcıya ait; tutar ve süre bilgisi sitede yok → bot için tanımlanmalı.", tag: "REQUIRES DATA" as Tag },
  { q: "Siparişim nerede?", a: "IdeaSoft sipariş/kargo API entegrasyonu ile yanıtlanır.", tag: "REQUIRES DATA" as Tag },
];

export const whatsappScenarios = [
  { name: "Kişiselleştirme dosyası toplama", flow: "Sipariş → 'Ses kaydını / fotoğrafını buraya gönder' → dosya siparişe eklenir", note: "Bugün manuel yapılıyor (ürün açıklamalarında WhatsApp numarası)", tag: "VERIFIED" as Tag },
  { name: "Abandoned cart", flow: "Sepet 4 saat → ürün kartı + 'Soru var mı?' butonu", note: "Sadece WhatsApp izni olanlara", tag: "INFERRED" as Tag },
  { name: "Order update", flow: "Üretimde → kargoda → teslim", note: "SMS maliyetine alternatif", tag: "INFERRED" as Tag },
  { name: "Product recommendation", flow: "Özel gün T-7 → 3 ürün carousel", note: "Hatırlatıcı kaydı olanlara", tag: "INFERRED" as Tag },
  { name: "Back in stock", flow: "Stok girişi → 'Tekrar stokta' + satın al linki", note: "Güllü Öğretmenler Günü Kutlama Çikolatası", tag: "VERIFIED" as Tag },
  { name: "Campaign", flow: "Sezon lansmanı (Yılbaşı, Sevgililer Günü)", note: "Frekans sınırı: ayda 2", tag: "INFERRED" as Tag },
  { name: "Customer support", flow: "AI asistan → insan devri", note: "0555 099 89 09 hattı", tag: "INFERRED" as Tag },
  { name: "B2B", flow: "Teklif → logo mockup onayı → proforma", note: "Kurumsal alıcı hızı", tag: "INFERRED" as Tag },
];

export const reviewFlow = [
  { step: "Teslim", detail: "Kargo 'teslim edildi' statüsü" },
  { step: "+3 gün", detail: "Email: 1–5 ★ tek tıkla puan" },
  { step: "+7 gün", detail: "SMS hatırlatma (yalnızca açmayanlara)" },
  { step: "4–5 ★", detail: "Fotoğraf/video (kutu açılış) isteği → UGC havuzu → reklam creative" },
  { step: "1–3 ★", detail: "Anında destek görevi, 24 saat içinde telefonla dönüş, yayın öncesi çözüm" },
];

export const churnFeatures = [
  { feature: "Son sipariş tarihi", why: "Yıllık hediye döngüsünde beklenen pencereyle kıyaslanır" },
  { feature: "Sipariş sıklığı / özel gün sayısı", why: "Tek özel gün alıcısı ≠ çoklu özel gün alıcısı" },
  { feature: "AOV", why: "Yüksek AOV kaybı daha maliyetli" },
  { feature: "Kategori (B2B / Bebek / Sevgili…)", why: "Her kategorinin doğal döngüsü farklı" },
  { feature: "E-posta açma / tıklama trendi", why: "Erken uyarı sinyali" },
  { feature: "Ürün görüntüleme (son 90 gün)", why: "Niyet devam ediyor mu?" },
  { feature: "Hatırlatıcı tarihleri", why: "Beklenen satın alma penceresi" },
  { feature: "Kanal (site vs Trendyol)", why: "Pazaryerine kayma" },
];

export const analyticsKpis = [
  { kpi: "Revenue", source: "IdeaSoft siparişleri" },
  { kpi: "Orders", source: "IdeaSoft" },
  { kpi: "AOV", source: "IdeaSoft" },
  { kpi: "Conversion Rate", source: "GA4 (şu an yok)" },
  { kpi: "Cart Abandonment Rate", source: "GA4 / Callypso" },
  { kpi: "Repeat Purchase Rate", source: "Sipariş geçmişi" },
  { kpi: "Customer Lifetime Value", source: "Sipariş geçmişi" },
  { kpi: "Customer Acquisition Cost", source: "Meta Ads harcaması + yeni müşteri" },
  { kpi: "Churn", source: "RFM modeli" },
  { kpi: "Revenue per Customer", source: "Sipariş geçmişi" },
  { kpi: "Revenue by Segment", source: "Callypso segmentleri" },
  { kpi: "Revenue by Product / Occasion", source: "Sipariş satırları" },
  { kpi: "Revenue by Channel (site vs Trendyol)", source: "IdeaSoft + Trendyol" },
  { kpi: "Email/SMS attributed revenue", source: "Callypso" },
];

// ───────────────────────────── Occasion calendar ─────────────────────────────
export const occasions = [
  { name: "Öğretmenler Günü", date: "2026-11-24", category: "ÖĞRETMENLER GÜNÜ HEDİYE", approx: false },
  { name: "Yeni Yıl (B2B + B2C)", date: "2026-12-31", category: "YENİ YIL HEDİYE", approx: false },
  { name: "Sevgililer Günü", date: "2027-02-14", category: "SEVGİLİYE HEDİYE", approx: false },
  { name: "Kadınlar Günü", date: "2027-03-08", category: "KADINLAR GÜNÜ HEDİYE", approx: false },
  { name: "Ramazan Bayramı", date: "2027-03-10", category: "BAYRAM HEDİYE", approx: true },
  { name: "Tıp Bayramı", date: "2027-03-14", category: "DOKTORUMA HEDİYE", approx: false },
  { name: "Paskalya", date: "2027-03-28", category: "PASKALYA HEDİYE", approx: false },
  { name: "Avukatlar Günü", date: "2027-04-05", category: "AVUKATLAR GÜNÜ HEDİYE", approx: false },
  { name: "Anneler Günü", date: "2027-05-09", category: "ANNELER GÜNÜ HEDİYE", approx: false },
  { name: "Kurban Bayramı", date: "2027-05-16", category: "BAYRAM HEDİYE", approx: true },
  { name: "Babalar Günü", date: "2027-06-20", category: "BABALAR GÜNÜ HEDİYE", approx: false },
];

// ───────────────────────────── Roadmap ─────────────────────────────
export const roadmap = [
  {
    phase: "0–30 gün",
    title: "Quick Wins",
    window: "Ekim 2026 — Öğretmenler Günü ve Yılbaşı B2B sezonu öncesi",
    items: [
      { id: "O02", text: "GA4 + GTM + Meta ViewContent/AddToCart/Purchase + CAPI" },
      { id: "O03", text: "KVKK / İYS izin akışı + çerez onayı" },
      { id: "C01", text: "Sepet terk (indirimsiz 3 adım)" },
      { id: "C04", text: "Öğretmenler Günü kategori niyeti + cut-off akışı" },
      { id: "C09", text: "0 TL ürünlerde 'Teklif Al' + B2B nurturing (Yılbaşı)" },
      { id: "O01", text: "Meta reklamlarının bir kısmını chocchic.com'a yönlendirme testi" },
      { id: "C06", text: "Post-purchase + review isteği" },
      { id: "C11", text: "Back-in-stock (Güllü Öğretmenler Günü Kutlama)" },
      { id: "O15", text: "Ürün sayfasında teslim tarihi bloğu" },
    ],
  },
  {
    phase: "30–90 gün",
    title: "Growth Layer",
    window: "Kasım 2026 – Ocak 2027 — Yılbaşı ve Sevgililer Günü hazırlığı",
    items: [
      { id: "C02", text: "Kişiselleştirme yarım kaldı akışı" },
      { id: "C03", text: "Browse abandonment" },
      { id: "C05", text: "Özel gün hatırlatıcısı (checkout tarih kaydı)" },
      { id: "C08", text: "Sezon takvimi otomasyonu (Yılbaşı → Sevgililer → 8 Mart)" },
      { id: "C10", text: "Welcome serisi + hatırlatıcı pop-up" },
      { id: "C15", text: "RFM / davranış segmentleri" },
      { id: "C13", text: "Win-back" },
      { id: "C14", text: "VIP" },
      { id: "O06", text: "WhatsApp Business API" },
      { id: "O10", text: "AI destekli SEO içerikleri" },
      { id: "O16", text: "Ücretsiz kargo eşiği / add-on testi" },
    ],
  },
  {
    phase: "90+ gün",
    title: "AI & Predictive Layer",
    window: "Şubat 2027 → — Bayram ve Anneler Günü döngüsü",
    items: [
      { id: "O07", text: "AI Gift Finder" },
      { id: "O08", text: "AI müşteri destek asistanı" },
      { id: "O05", text: "AI teklif asistanı (B2B)" },
      { id: "O09", text: "AI mesaj yazarı" },
      { id: "O11", text: "Loyalty programı" },
      { id: "O14", text: "Churn tahmini" },
      { id: "O18", text: "Sezon talep tahmini" },
      { id: "O13", text: "Satış & müşteri analitiği" },
    ],
  },
];

// ───────────────────────────── Meeting questions ─────────────────────────────
export const questions: { group: string; items: string[] }[] = [
  {
    group: "Data",
    items: [
      "IdeaSoft'tan sipariş ve müşteri verisine API / export ile erişebilir miyiz?",
      "Customer ID var mı; misafir siparişler üyelerle eşleşiyor mu?",
      "Purchase history kaç yıl geriye gidiyor? Sipariş satırında kişiselleştirme (isim/mesaj) tutuluyor mu?",
      "E-posta pazarlama izni olan kontak sayısı? İYS'de kayıtlı SMS izni sayısı?",
      "Checkout'ta telefon zorunlu — bu numaralar için ticari ileti izni alınıyor mu?",
      "WhatsApp (0555 099 89 09) hattına günde kaç mesaj geliyor, ne kadarı kişiselleştirme dosyası?",
    ],
  },
  {
    group: "Marketing",
    items: [
      "Aylık trafik, conversion rate ve AOV (site vs Trendyol ayrı)?",
      "Repeat purchase rate, CAC ve LTV biliniyor mu?",
      "Meta reklamları neden Trendyol'a yönlendiriliyor? Site vs Trendyol ROAS/marj karşılaştırması var mı?",
      "Email ve SMS'ten bugün gelir elde ediliyor mu? Hangi sağlayıcı?",
      "Abandoned cart recovery şu an var mı?",
      "En yüksek ciro getiren 10 ürün ve özel gün hangileri?",
    ],
  },
  {
    group: "Customer",
    items: [
      "En çok tekrar satın alınan ürünler / özel günler?",
      "Ortalama tekrar satın alma süresi (gün)?",
      "En yüksek LTV segmenti: kurumsal mı, bireysel mi?",
      "Churn oranı veya 12 ayda ikinci siparişi veren müşteri oranı?",
      "En sık gelen müşteri soruları ve iade/şikâyet sebepleri?",
    ],
  },
  {
    group: "Technology",
    items: [
      "IdeaSoft paketi ve Callypso Engage ile resmi entegrasyon (sepet, ürün, sipariş, stok eventleri) mümkün mü?",
      "Callypso Engage'in kanal kapsamı: Email, SMS, onsite, WhatsApp — hangileri aktif kullanılacak?",
      "CRM, ERP, CDP kullanılıyor mu? Kurumsal teklifler nerede takip ediliyor?",
      "GA4, GTM, Google Ads, Meta CAPI kurulumu neden yok — engel var mı?",
      "WhatsApp Business (uygulama) mı, API mi kullanılıyor?",
      "Kargo firması ve kesim saatleri? Kişiselleştirilmiş ürünlerde üretim süresi?",
    ],
  },
  {
    group: "Business",
    items: [
      "En önemli ticari hedef: yeni müşteri mi, repeat purchase mı, AOV mi, CAC düşürmek mi, LTV mi?",
      "Ciro dağılımı: B2C / B2B / Trendyol?",
      "0 TL listelenen kurumsal ürünler bilinçli mi? Teklif talepleri nasıl ele alınıyor?",
      "Yılbaşı ve bayram dönemlerinde üretim kapasitesi sınırı var mı?",
      "İndirim politikası: marka indirim vermemeyi mi tercih ediyor?",
    ],
  },
];

// ───────────────────────────── Data sources ─────────────────────────────
export const dataSources = [
  { name: "ChocChic Website", status: "Analiz edildi", detail: "Ana sayfa, 39 kategori, 256 ürün, statik/politika sayfaları, iletişim, mobil user-agent", tag: "VERIFIED" as Tag },
  { name: "Product Catalog", status: "Analiz edildi", detail: "Sitemap + ürün sayfası parse: fiyat, stok adedi, kategori, kişiselleştirme alanları, benzer ürünler", tag: "VERIFIED" as Tag },
  { name: "Apify Website Crawler", status: "Çalıştırıldı", detail: "apify/website-content-crawler · 434 istek · 360 sayfa kaydı · 26.09.2026", tag: "VERIFIED" as Tag },
  { name: "Public Advertising Data — Meta", status: "Çalıştırıldı", detail: "Meta Ad Library (Apify facebook-ads-scraper): 4 aktif reklam", tag: "VERIFIED" as Tag },
  { name: "Public Advertising Data — Google", status: "Sonuç yok", detail: "Google Ads Transparency Center (TR): reklam bulunamadı", tag: "VERIFIED" as Tag },
  { name: "Public Advertising Data — TikTok", status: "Erişilemez", detail: "TikTok Ad Library Türkiye reklamlarını kapsamıyor", tag: "REQUIRES DATA" as Tag },
  { name: "Public Campaign Data", status: "Analiz edildi", detail: "İndirimli / yeni / popüler / sponsor listeleri, paket sayfası (IWF), e-bülten", tag: "VERIFIED" as Tag },
  { name: "Customer Data", status: "Requires Integration", detail: "Müşteri listesi, izinler, segment üyelikleri", tag: "REQUIRES DATA" as Tag },
  { name: "Order Data", status: "Requires Integration", detail: "Sipariş geçmişi — repeat, RFM, LTV, churn için şart", tag: "REQUIRES DATA" as Tag },
  { name: "CRM Data", status: "Requires Integration", detail: "Kurumsal teklifler, destek kayıtları", tag: "REQUIRES DATA" as Tag },
  { name: "Web Analytics (GA4)", status: "Kurulu değil", detail: "Funnel ve dönüşüm verisi yok", tag: "REQUIRES DATA" as Tag },
];
