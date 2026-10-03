/* Aydın Endüstri – Growth Analysis content.
   Confidence: V = Verified (website/public source), I = Inferred (analysis built on verified data),
   R = Requires Access (CRM / analytics / ad account needed). */
window.CONTENT = {
  meta: {
    date: "3 Ekim 2026",
    method: [
      "Apify website-content-crawler denendi; hesap aylık kullanım limitini aştığı için (platform-feature-disabled: Monthly usage hard limit exceeded) çalıştırılamadı.",
      "Aynı çıktı yapısında sitemap tabanlı yerel crawler kullanıldı: homedius.com 333 URL, sleeptown.com.tr 239 URL, URL ve ürün bazında deduplicate.",
      "Ürün sayfalarından JSON-LD + T-Soft ürün verisi + varyant (ölçü) fiyat/stok verisi çekildi: 231 benzersiz ürün.",
      "Meta Reklam Kütüphanesi (TR, aktif reklamlar) headless tarayıcı ile okundu. Google Ads Transparency Center bot doğrulamasına takıldı.",
      "Mobil (iPhone 13 viewport) ana sayfa + ürün sayfası probu: yüklenen 3. parti hostlar, sabit (sticky) alanlar, başlıklar."
    ]
  },

  kpis: [
    { k: "Grup varlığı tespit edildi", v: "7", sub: "2 B2C marka · 1 operatör şirket · 3 B2B/kurumsal · 1 belirsiz", c: "V" },
    { k: "Kendi e-ticaret sitesi", v: "2", sub: "homedius.com · sleeptown.com.tr (ikisi de T-Soft)", c: "V" },
    { k: "Analiz edilen ürün", v: "231", sub: "Homedius 192 · Sleeptown 39 · 59 model ailesi", c: "V" },
    { k: "Kategori / koleksiyon URL", v: "118", sub: "Homedius 57 · Sleeptown 61 (sitemap)", c: "V" },
    { k: "Kampanya / teklif", v: "14", sub: "site banner, kampanya sayfası, sepet ve Meta reklamları", c: "V" },
    { k: "Aktif Meta reklamı", v: "19", sub: "Homedius ~14 · Sleeptown ~5 (Ad Library, 3 Eki 2026)", c: "V" },
    { k: "Engage otomasyon fırsatı", v: "15", sub: "gerçek ürün ve stok verisine dayalı", c: "I" },
    { k: "AI / otomasyon fırsatı", v: "8", sub: "Engage dışı", c: "I" }
  ],

  /* Executive summary – top opportunities */
  top: [
    {
      t: "Yorum toplama otomasyonu (Homedius'ta 192 üründe 0 yorum)",
      obs: "Homedius'taki 192 ürün sayfasının hiçbirinde müşteri yorumu yok; yorum modülü açık ama 'Bu ürün için henüz yorum eklenmemiştir' yazıyor. Aynı şirketin Sleeptown sitesinde 22 üründe 83 yorum var (ortalama 4,56/5).",
      opp: "Katlanır koltuk gibi 5.000–19.000 TL'lik, dokunmadan alınan bir üründe sosyal kanıt eksik.",
      auto: "Teslimattan 10 gün sonra yorum isteği → 3 gün sonra fotoğraflı yorum hatırlatması → yorum yazana sonraki alışverişte kullanılacak kupon.",
      imp: "Yüksek", c: "V", stage: "Retention → Discovery"
    },
    {
      t: "Ölçüye göre stok alarmı ve 'stok azaldı' bildirimi",
      obs: "Sleeptown, ölçü bazında stok adedini sayfada gösteriyor: Base Visco 180x200 = 0, Latex Pocket 140x190 = 1, Organic Comfort Yastık = 1. Homedius'ta 23 ürün tükenmiş (ör. Mocca Fitilli Kadife Gri / Çağla Yeşil, Mocca Buklet). Sitede 'Gelince Haber Ver' ve stok alarmı zaten var.",
      opp: "Tükenmiş ürüne gelen talep şu an e-posta/SMS ile geri kazanılmıyor görünüyor.",
      auto: "T-Soft stok alarmı → Engage etkinliği → stok gelince kişiye özel e-posta / SMS / WhatsApp + az stokta aciliyet mesajı.",
      imp: "Yüksek", c: "V", stage: "Product"
    },
    {
      t: "Yatak alana aynı ölçüde ped + nevresim + yastık (Sleeptown)",
      obs: "Sleeptown yatakları 90x190'dan 200x200'e kadar 7–9 ölçüde satılıyor. HyperSoft Yatak Pedi (3.999–6.699 TL) ve Visco Gell Yatak Pedi (5.499–9.499 TL) aynı ölçülerde, Celia nevresim tek/çift seçenekli. Ürün sayfasında sadece 'Benzer Ürünler' var, tamamlayıcı ürün bloğu yok.",
      opp: "Ölçü bilgisi siparişte zaten var; tamamlayıcı ürünler doğru ölçüyle önerilebilir.",
      auto: "Satın alma +3 gün: aynı ölçüde ped → +14 gün: nevresim + yastık eşleşmesi → +30 gün: kaz tüyü yorgan (mevsim).",
      imp: "Yüksek", c: "I", stage: "Post-purchase"
    },
    {
      t: "Katlanır koltukta 'misafir kiti' çapraz satışı (Homedius)",
      obs: "Homedius'un en büyük kategorisi katlanır / yatak olabilen koltuk (106 mobilya ürünü). Aynı sitede 'Yataklı Koltuk Sırt Dayama Destek Demiri Aparatı' (499 TL), Papatya kırlent (619–799 TL), Visco yastık (649–1.549 TL) ve Goody Goose yorgan var. 'Birlikte al %10 indirim' bloğu sadece 31 Mocca/Magic sayfasında görünüyor.",
      opp: "Koltuğu yatağa çeviren müşteri büyük ihtimalle yastık, yorgan ve kırlent de kullanacak.",
      auto: "Sepette / sipariş sonrası 'misafir kiti' önerisi: Sırt Dayama Aparatı + Visco Yastık + Kırlent; 7 gün sonra yorgan.",
      imp: "Orta-Yüksek", c: "I", stage: "Cart → Post-purchase"
    },
    {
      t: "Meta reklamından gelip almayanı yakalama",
      obs: "Homedius ~14, Sleeptown ~5 aktif Meta reklamı yayınlıyor (Magic, Mocca, Rumy, Coop, Hybrid 5 Zone, Organic Comfort; influencer iş birlikleri). Homedius'ta Meta Pixel izin sonrası çalışıyor; Sleeptown'un public HTML'inde Meta Pixel bulunamadı.",
      opp: "Reklamdan gelen ziyaretçi şu an sadece retargeting ile geri çağrılabiliyor; kimliği bilinen ziyaretçi için CRM akışı yok.",
      auto: "UTM + ürün görüntüleme → Engage segmenti 'Reklamdan geldi, almadı' → reklamdaki ürün ve teklifle kişisel takip; satın alanı reklam kitlesinden çıkar.",
      imp: "Yüksek", c: "V", stage: "Discovery → Product"
    },
    {
      t: "E-posta toplama: pop-up kapalı, üyelik teklifi görünmüyor",
      obs: "İki sitede de T-Soft pop-up eklentisi kapalı (PLUGINS_POPUP.IS_ACTIVE = 0). Sleeptown'da 'Üye ol, ilk siparişinde 500 TL indirim' kampanya sayfası var ama ana sayfada görünmüyor. E-bülten formu sadece footer'da.",
      opp: "Yüksek fiyatlı, uzun düşünülen ürünlerde ziyaretçinin iletişim bilgisi alınmadan çıkması, bütün otomasyonların hedef kitlesini küçültüyor.",
      auto: "Çıkışta / 2. sayfada lead formu (500 TL hoş geldin) → hoş geldin serisi (3 e-posta) → ilk sipariş hatırlatması.",
      imp: "Yüksek", c: "V", stage: "Discovery"
    },
    {
      t: "Markalar arası satış: yatak ↔ katlanır koltuk",
      obs: "Homedius ve Sleeptown aynı şirket tarafından işletiliyor: Planet Entegre Yatak Mobilya A.Ş., aynı vergi no ve aynı WhatsApp hattı. Magic ve Mocca koltuklar iki sitede de var. Sleeptown'un yatak, ped ve nevresim çeşitliliği Homedius'ta yok.",
      opp: "Potansiyel çapraz marka fırsatı: Sleeptown'dan yatak alan müşteriye misafir için Homedius katlanır koltuk, Homedius koltuk alan müşteriye Sleeptown ped ve nevresim.",
      auto: "Ortak izin (KVKK) ve tek müşteri kimliği sağlanırsa: marka tercihli ortak segmentler ve markalar arası öneri akışı.",
      imp: "Orta", c: "R", stage: "Retention"
    },
    {
      t: "Site metinlerindeki çelişkileri düzeltip otomasyon mesajlarında kullanmak",
      obs: "Homedius teslimat sayfası 'tüm siparişlerde ücretsiz kargo' derken footer '1000 TL ve üzeri' diyor. Sleeptown 'Hakkımızda' sayfasında '120 gece deneme', influencer reklamında '120 gün deneme' geçiyor; iade sayfasında ve footer'da 15 gün yazıyor. Ekim ayında iki sitede de 'Yaza özel fırsatları kaçırma!' bandı duruyor. Homedius ana sayfasında 'Lorem Ipsum' metni görünüyor.",
      opp: "Otomasyon mesajları (kargo eşiği, iade, deneme süresi) yanlış bilgiye dayanırsa güven ve hukuki risk oluşur.",
      auto: "Önce tek bir doğru politika metni belirlenmeli; sonra sepet terk ve teslimat sonrası mesajlarda bu metin kullanılmalı.",
      imp: "Orta", c: "V", stage: "Product → Cart"
    }
  ],

  /* Brand ecosystem */
  eco: {
    root: { n: "Aydın Endüstri A.Ş.", d: "aydinendustri.com · grup kurumsal sitesi (Nova Sünger tanıtımı)", src: "https://www.aydinendustri.com/" },
    nodes: [
      { n: "Nova Sünger ve Yatak A.Ş.", type: "B2B", d: "Poliüretan sünger, yatak teli/yayı, elyaf · 80 ülke", url: "https://www.novasunger.com/", c: "V", ev: "aydinendustri.com footer linki" },
      { n: "Aydın Tekstil / Aydın Mensucat A.Ş.", type: "B2B", d: "Döşemelik, yatak kumaşı, halı · 30 milyon m/yıl", url: "http://aydinmensucat.com.tr/", c: "V", ev: "Grup KVKK formu aydinmensucat.com.tr'de; Sleeptown KVKK metni de bu siteye link veriyor" },
      { n: "Planet Entegre Yatak Mobilya A.Ş.", type: "Operatör", d: "planetmobilya.com → homedius.com yönlendiriyor · Sakarya/Erenler", url: "https://www.planetmobilya.com/", c: "V", ev: "Homedius ve Sleeptown satış sözleşmesindeki satıcı; vergi no 7300347804 (iki sitede aynı)",
        brands: [
          { n: "Homedius", url: "https://www.homedius.com/", d: "Katlanır koltuk & ev yaşamı", cats: [
            { n: "Mobilya", cnt: 106, fam: "Mocca, Magic, Melisa, Mila, Valeria, Rumy, Muse, Vetta, Eco Vetta, Loop, Calina, Coop, Notre, Bella, Sally, Sofa Bed" },
            { n: "Ev Tekstili", cnt: 63, fam: "Sandalye minderi (1/2/4'lü), Qube puf, Poffi minder, Papatya kırlent, Peştamal" },
            { n: "Yataklar", cnt: 13, fam: "Bedform, Deluxe Kuştüyü, Bamboo, Multicomfort Visco, Nest, Oscar, Nevada" },
            { n: "Uyku Grubu", cnt: 10, fam: "Visco yastıklar, Reflux, Goody Goose kaz tüyü yorgan" } ],
            opp: "Misafir kiti çapraz satışı, yorum toplama, renk bazlı stok alarmı" },
          { n: "Sleeptown", url: "https://www.sleeptown.com.tr/", d: "Yatak & uyku teknolojisi", cats: [
            { n: "Yatak", cnt: 7, fam: "Base Visco, Base 7 Zone, Hybrid, Hybrid 5 Zone, Helix 5 Zone, Latex Pocket, Organic Comfort Latex" },
            { n: "Yastık / Uyku Grubu", cnt: 13, fam: "Base, Base Zone, Cosmic, Dual Comfort, Organic Comfort, Reflux · HyperSoft & Visco Gell ped · Celia nevresim · Kaz tüyü yorgan" },
            { n: "Katlanır Koltuk", cnt: 13, fam: "Magic, Mocca (Homedius ile ortak modeller)" },
            { n: "Bebek & Çocuk / Aksesuar", cnt: 6, fam: "Cloud, Nanna, Neva Montessori · Cozypaws pet yatağı · Cooly göz yastığı" } ],
            opp: "Ölçüye göre ped/nevresim, yatak yükseltme, çocuk yatağında yaşa göre geçiş" }
        ] },
      { n: "Maytrans", type: "Belirsiz", d: "aydinendustri.com'dan link var; site bot doğrulaması arkasında, faaliyet alanı okunamadı", url: "http://www.maytrans.com.tr", c: "I", ev: "aydinendustri.com footer linki" }
    ],
    marketplaces: [
      { n: "Trendyol", b: "Homedius, Sleeptown", url: "https://www.trendyol.com/homedius/magic-tek-kisilik-koyu-gri-katlanir-yatakli-koltuk-p-42011116" },
      { n: "Hepsiburada", b: "Homedius, Sleeptown", url: "https://www.hepsiburada.com/sleeptown" },
      { n: "n11", b: "Homedius", url: "https://www.n11.com/magaza/homedius" },
      { n: "Amazon.com.tr", b: "Sleeptown", url: "https://www.amazon.com.tr/Ev-ve-Ya%C5%9Fam-Sleeptown/s?rh=n:12466667031,p_4:Sleeptown" },
      { n: "Koçtaş", b: "Homedius", url: "https://www.koctas.com.tr/homedius/b/b-1191" }
    ],
    excluded: "Turgut Aydın Holding (A101, English Home, Eveshop) isim benzerliği nedeniyle incelendi; Aydın Endüstri / Nova / Planet ile bağlantı gösteren bir kaynak bulunmadığı için kapsam dışı bırakıldı."
  },

  /* Website analysis per site */
  sites: {
    Homedius: {
      url: "https://www.homedius.com/",
      facts: [
        ["Platform", "T-Soft (Vue tabanlı tema), Cloudflare", "V"],
        ["Katalog", "192 ürün · 36 model ailesi · renkler ayrı ürün olarak listeleniyor", "V"],
        ["Fiyat aralığı", "63 TL (ayak havlusu) – 18.999 TL (Loop çift kişilik koltuk)", "V"],
        ["İndirim", "170 üründe liste fiyatı > satış fiyatı · ortalama %34 · koltuklarda %25", "V"],
        ["Stok", "23 ürün tükendi · ürün bazında adet sayfa kodunda görünüyor", "V"],
        ["Yorum", "0 yorum / 192 ürün (yorum modülü açık)", "V"],
        ["Ödeme", "Peşin fiyatına 7 taksit · havale ile %10 ekstra indirim", "V"],
        ["Kargo", "Footer: 1000 TL üzeri ücretsiz · Teslimat sayfası: tüm siparişlerde ücretsiz · 2–7 iş günü", "V"],
        ["İade", "Footer: 15 gün ücretsiz iade · İade sayfası: yatak 15 gün, diğer ürünler 14 gün · 2 yıl garanti", "V"],
        ["Üyelik / sadakat", "Üyelik, favoriler, fiyat alarmı, stok alarmı, hediye çeki sayfaları var · sadakat programı yok", "V"],
        ["E-posta toplama", "Footer e-bülten formu · pop-up eklentisi kapalı", "V"],
        ["İletişim", "Telefon, e-posta, WhatsApp (0535 652 13 17) · SSS sayfası boş", "V"],
        ["Blog", "Aktif (29.09.2026 tarihli 5 yazı) – bir yazı Sleeptown koltuklarını anlatıyor", "V"],
        ["Mobil", "Taşma yok (390px) · ürün sayfasında sabit 'Sepete Ekle' çubuğu · çerez bandı ekranın ~%25'ini kaplıyor", "V"]
      ],
      issues: [
        ["Ana sayfanın <title> etiketi boş, meta description yok (tarayıcıda document.title = \"\")", "SEO / CTR", "V"],
        ["Ana sayfa blog bloğunda 'Lorem Ipsum is simply dummy text…' metni yayında", "Güven", "V"],
        ["Ekim'de hâlâ 'YAZA ÖZEL FIRSATLARI KAÇIRMA!' bandı; hero görselinde 'Ekinoks Etkisi – Tüm Koltuklarda %25', bantta '%50'ye varan + sepette ek %20' yazıyor (üç farklı mesaj)", "Kampanya tutarlılığı", "V"],
        ["Kargo eşiği çelişkili (ücretsiz kargo / 1000 TL üzeri)", "Sepet terk", "V"],
        ["SSS ve Müşteri Hizmetleri sayfaları boş ('Sonuç bulunamadı')", "Destek yükü", "V"],
        ["192 üründe 0 yorum", "Dönüşüm", "V"],
        ["Ürün sayfasında tamamlayıcı ürün bloğu yok; sadece 'Benzer Ürünler' (aynı modelin diğer renkleri) var", "AOV", "V"],
        ["Blog yazısı ('Küçük Salonlar İçin Katlanır Koltuk Tavsiyeleri') Sleeptown markasını anlatıyor ve Sleeptown blogundaki yazıyla aynı", "SEO / marka", "V"]
      ],
      strengths: ["Fiyat alarmı, stok alarmı ve favoriler hazır: Engage için hazır etkinlik kaynakları", "Birlikte al %10 indirim bloğu (Mocca/Magic)", "Meta Pixel izin sonrası çalışıyor (KVKK uyumlu)", "Video ve influencer içerikleri"]
    },
    Sleeptown: {
      url: "https://www.sleeptown.com.tr/",
      facts: [
        ["Platform", "T-Soft · TR/EN dil · TL/USD/EUR para birimi", "V"],
        ["Katalog", "39 ürün · 23 model ailesi · yataklar ölçüye göre varyantlı (7–9 ölçü)", "V"],
        ["Fiyat aralığı", "699 TL (Cooly göz yastığı) – 32.999 TL (Organic Comfort Latex 200x200)", "V"],
        ["İndirim", "Tüm ürünlerde indirim: yataklar %25, ped/yastık %15, koltuk %20", "V"],
        ["Stok", "Ölçü bazında stok görünür · Base Visco 180x200 = 0 · Latex Pocket 140x190 = 1", "V"],
        ["Yorum", "22 üründe 83 yorum · ortalama 4,56/5 · en çok: Organic Comfort Latex (8)", "V"],
        ["Ödeme", "Peşin fiyatına 7 taksit", "V"],
        ["Kargo", "1000 TL üzeri ücretsiz (footer) · Teslimat sayfası: tüm siparişlerde ücretsiz · SSS: 5 iş günü", "V"],
        ["İade / deneme", "Footer: 15 gün iade · Hakkımızda: '120 gece deneme süresi' · Influencer reklamı: '120 gün deneme'", "V"],
        ["Üyelik", "Üye ol, ilk siparişinde 500 TL indirim kampanyası (sayfa adresinde 'il' yazım hatası var)", "V"],
        ["E-posta toplama", "Footer e-bülten · pop-up kapalı", "V"],
        ["Uluslararası", "Satış noktaları: Viyana, Kosova, Amsterdam Villa Arena", "V"],
        ["Blog", "167 yazı (sitemap) · uyku rehberi içerikleri", "V"],
        ["Sosyal", "Instagram 45K takipçi", "V"]
      ],
      issues: [
        ["Ana sayfa ve ~50 sayfada aynı genel başlık: 'Sleeptown Comfort For You'", "SEO", "V"],
        ["/test sayfası yayında ve sitemap'te", "Kalite", "V"],
        ["Deneme süresi çelişkisi: 120 gece / 120 gün / 15 gün iade", "Güven / hukuki risk", "V"],
        ["SSS: 'Şu anda 4 farklı yatak modelimiz mevcuttur', ama menüde 9 yatak modeli var", "İçerik güncelliği", "V"],
        ["Müşteri hizmetleri alt sayfaları (Sipariş/Kargo, Ödeme, Kampanyalar…) boş", "Destek yükü", "V"],
        ["Ekim'de 'Yaza özel fırsatları kaçırma!' bandı", "Kampanya tutarlılığı", "V"],
        ["Public HTML'de Meta Pixel ve GA4 ölçüm kimliği bulunamadı (yalnızca Google Ads AW-11263851895); aktif Meta reklamları var", "Ölçümleme", "R"]
      ],
      strengths: ["Ölçü bazlı fiyat ve stok: ölçüye göre öneri ve stok alarmı için ideal", "Gerçek yorumlar ve sertifikalar (Oeko-Tex)", "Fiyat merdiveni net: 7.999 → 16.999 TL (90x190)", "Kapsamlı uyku blogu: otomasyon içeriği olarak kullanılabilir"]
    }
  },

  /* Customer journey */
  journey: [
    { s: "Discovery", obs: ["Meta reklamları + influencer iş birlikleri (V)", "Pazaryerlerinde aynı ürünler (V)", "Ana sayfa title boş (Homedius) / genel başlık (Sleeptown) (V)"], gap: "Ziyaretçinin iletişim bilgisi alınmıyor: pop-up kapalı, hoş geldin teklifi görünmüyor.", auto: "Lead formu + hoş geldin serisi · reklam kaynaklı segment" },
    { s: "Product", obs: ["Renk/ölçü bazlı stok görünür (V)", "Fiyat alarmı, stok alarmı, favori butonu var (V)", "Homedius'ta 0 yorum (V)"], gap: "Tamamlayıcı ürün ve sosyal kanıt yok; alarmlar CRM'e bağlı mı bilinmiyor (R).", auto: "Ürün inceleme terk, fiyat düşüşü, stok gelince, az stok" },
    { s: "Cart", obs: ["7 taksit, havale %10 (V)", "Birlikte al %10 (31 Homedius ürünü) (V)", "Kargo eşiği çelişkili (V)"], gap: "Sepet terk sonrası iletişim görünmüyor (R); 1000 TL eşiği yastık/minder sepetlerinde kullanılmıyor.", auto: "Sepet terk 1 saat / 24 saat / 72 saat · kargo eşiğine tamamlayıcı ürün" },
    { s: "Purchase", obs: ["2–7 iş günü teslimat (V)", "Sipariş takip sayfası (V)"], gap: "Teslimat beklentisi metinleri çelişkili (5 iş günü / 2–7 iş günü).", auto: "Sipariş onay + kurulum/kullanım rehberi + teslimat bilgilendirme" },
    { s: "Retention", obs: ["Sadakat programı yok (V)", "Blogda bakım içerikleri var (V)"], gap: "Yorum isteği, bakım hatırlatması, yenileme ve geri kazanım akışı görünmüyor (R).", auto: "Yorum isteği, ped/nevresim çapraz satış, yastık yenileme, geri kazanım, VIP" }
  ],

  /* Callypso Engage scenarios */
  autos: [
    { id: "A1", t: "Browse Abandonment – Katlanır koltuk", brand: "Homedius", trig: "Mocca / Magic / Valeria kategori veya ürün sayfasını 2+ kez görüntüledi, sepete eklemedi",
      flow: [["0 sa", "Görüntülediği modelin iki renk alternatifi + 'Tek hareketle yatağa dönüşür' videosu"], ["+24 sa", "Tek kişilik ↔ çift kişilik karşılaştırma: Magic Tek Kişilik 5.399 TL ↔ Magic Çift Kişilik 6.699–8.999 TL"], ["+72 sa", "7 taksit + havale %10 hatırlatması (indirim kuponu yok)"]],
      why: "Katlanır koltuk ölçü ve renk kararı gerektiriyor. Karşılaştırma içeriği karar vermeyi kolaylaştırır.", data: "Ürün görüntüleme etkinliği, katalog akışı", integ: "T-Soft + Engage web SDK", cx: "Düşük", imp: "Yüksek", c: "I" },
    { id: "A2", t: "Cart Abandonment – Ölçüye göre yatak", brand: "Sleeptown", trig: "Yatak (ölçü seçili) sepete eklendi, 1 saat içinde ödeme yok",
      flow: [["1 sa", "Sepetteki yatak + seçilen ölçü + 7 taksit tutarı (ör. Hybrid 5 Zone 160x200: 21.999 TL)"], ["24 sa", "Yorumlar (Hybrid 5 Zone: 6 yorum, 4,33/5) + Oeko-Tex sertifikası"], ["72 sa", "Stok 10'un altındaysa 'Bu ölçüde son X adet' (gerçek stok verisi)"]],
      why: "Yatak alımı uzun süre düşünülür; güven + taksit + gerçek stok aciliyeti indirim vermeden etkili olabilir.", data: "Sepet etkinliği (ürün+varyant), stok", integ: "T-Soft sepet webhook/feed", cx: "Orta", imp: "Yüksek", c: "I" },
    { id: "A3", t: "Wishlist / Tekrar inceleme", brand: "Homedius", trig: "Ürünü favoriye ekledi veya 7 gün içinde 3+ kez inceledi",
      flow: [["0", "Favorideki ürün + aynı modelin stokta olan renkleri"], ["+5 gün", "Ürünün kullanım videosu / influencer içeriği (ör. Coop, Mocca)"], ["+10 gün", "Favori ürün indirime girerse anında bildirim (A4 ile birleşir)"]],
      why: "Favori, satın alma niyetini gösteren en güçlü sinyallerden biri; T-Soft'ta 'Favorilerim' zaten var.", data: "Favori etkinliği", integ: "T-Soft üye API / etkinlik", cx: "Düşük", imp: "Orta", c: "I" },
    { id: "A4", t: "Price Drop", brand: "Her iki marka", trig: "Fiyat alarmı kurulan veya incelenen ürünün fiyatı düştü",
      flow: [["Anında", "'İlgilendiğin Mocca Tek Kişilik Mavi şimdi X TL' (ör. bugün 7.499 TL, liste fiyatına eşit, indirimsiz)"], ["+48 sa", "Hâlâ almadıysa: aynı fiyattaki alternatif renk"]],
      why: "Katalogda fiyatlar sık değişiyor (ör. Magic Çift Kişilik Bej 6.999 TL, Antrasit 8.999 TL). Fiyat alarmı butonu sitede var.", data: "Fiyat geçmişi (katalog akışı), fiyat alarmı listesi", integ: "Ürün feed'i (saatlik)", cx: "Düşük", imp: "Orta", c: "V" },
    { id: "A5", t: "Back in Stock", brand: "Her iki marka", trig: "Tükenen ürün/varyant tekrar stoğa girdi",
      flow: [["Anında", "Örnekler: Base Visco 180x200 (stok 0) · Mocca Fitilli Kadife Çift Kişilik Gri ve Çağla Yeşil · Mocca Buklet Antrasit / Açık Gri · Qube puf renkleri"], ["+24 sa", "Açmadıysa SMS / WhatsApp"]],
      why: "Gerçek veri: Homedius'ta 23 tükenmiş ürün var; Sleeptown'da ölçü bazında 0 stok görünüyor.", data: "Stok alarmı listesi + stok feed'i", integ: "T-Soft stok alarmı → Engage", cx: "Düşük", imp: "Yüksek", c: "V" },
    { id: "A6", t: "Low Stock Urgency", brand: "Her iki marka", trig: "İncelenen/sepetteki varyant stoğu ≤ 3",
      flow: [["Anında", "Organic Comfort Yastık (stok 1) · Latex Pocket 140x190 (stok 1) · Poffi Petrol Yeşili (stok 1) · Magic İki Renkli Yeşil (stok 2)"]],
      why: "Gerçek stok verisine dayanır; uydurma aciliyet değildir.", data: "Varyant stok", integ: "Ürün feed'i", cx: "Düşük", imp: "Orta", c: "V" },
    { id: "A7", t: "Cross-Sell – Uyku seti", brand: "Sleeptown", trig: "Yatak satın alındı (ölçü biliniyor)",
      flow: [["+3 gün", "Aynı ölçüde HyperSoft Yatak Pedi (90x190: 3.999 TL → 160x200: 5.699 TL)"], ["+14 gün", "Celia Pamuk Luxury nevresim (tek 1.499 / çift 1.899 TL) + Base Zone Yastık 1.899 TL"], ["+45 gün", "Kaz Tüyü Yorgan (5.499–6.999 TL) – mevsim geçişi"]],
      why: "Ped yatağı korur; nevresim ve yastık doğal tamamlayıcıdır. Ölçü eşleşmesi yanlış ürün iadesini azaltır.", data: "Sipariş + varyant", integ: "T-Soft sipariş entegrasyonu", cx: "Orta", imp: "Yüksek", c: "I" },
    { id: "A8", t: "Cross-Sell – Misafir kiti", brand: "Homedius", trig: "Katlanır / yatak olabilen koltuk satın alındı",
      flow: [["Sepette", "Yataklı Koltuk Sırt Dayama Destek Demiri Aparatı (499 TL; 2'li / 4'lü paketleri var)"], ["+5 gün", "Visco yastık (649–1.549 TL) + Goody Goose Tek Kişilik Yorgan"], ["+20 gün", "Dekoratif Papatya Kırlent – koltuk rengine göre (Kiremit koltuk → Kiremit kırlent)"]],
      why: "Ürün yatağa dönüşüyor; misafir kullanımı için yastık ve yorgan, renk uyumu için kırlent gerekir. Hepsi aynı sitede satılıyor.", data: "Sipariş (ürün+renk)", integ: "T-Soft sipariş", cx: "Düşük", imp: "Orta-Yüksek", c: "I" },
    { id: "A9", t: "Upsell – Yatak merdiveni", brand: "Sleeptown", trig: "Base Visco veya Hybrid incelendi / sepete eklendi",
      flow: [["Ürün sayfası / e-posta", "Base Visco 7.999 → Base 7 Zone 8.999 (+1.000 TL: 7 bölgeli destek)"], ["", "Hybrid 11.499 → Hybrid 5 Zone 12.999 → Latex Pocket 13.999 → Organic Comfort Latex 16.999 (90x190)"]],
      why: "Basamaklar arasındaki fark küçük ve açıkça anlatılabilir; 7 taksitle aylık fark daha da azalır.", data: "Katalog + görüntüleme", integ: "Engage öneri bloğu", cx: "Düşük", imp: "Orta", c: "I" },
    { id: "A10", t: "Upsell – Tek kişilikten çift kişiliğe / premium koltuk", brand: "Homedius", trig: "Tek kişilik Magic/Mocca incelendi",
      flow: [["Ürün sayfası / e-posta", "Magic Tek Kişilik 5.399 → Magic Çift Kişilik 6.699–8.999 → Rumy 11.999 → Muse 16.999 / Vetta 18.499 / Loop 18.999"]],
      why: "Gerçek fiyat basamakları; misafir ağırlayan ve küçük evde yaşayan müşteri için 'çift kişilik yatak' değeri anlatılabilir.", data: "Katalog", integ: "Engage öneri", cx: "Düşük", imp: "Orta", c: "I" },
    { id: "A11", t: "Post-Purchase – Kullanım, bakım, yorum", brand: "Her iki marka", trig: "Sipariş teslim edildi",
      flow: [["+1 gün", "Kurulum / kullanım rehberi (yatak açılma süresi, koltuk açma-kapama)"], ["+10 gün", "Yorum isteği (Homedius: 0 yorum)"], ["+30 gün", "Bakım içeriği – mevcut blog: 'Evde Koltuk Temizliği Nasıl Yapılır?', 'Yatak Değiştirmeniz Gerektiğini Gösteren 3 İşaret'"], ["+90 gün", "Yatak çevirme hatırlatması + ped önerisi"]],
      why: "İçerik zaten var. Yorum ve bakım iletişimi iadeyi azaltır ve sosyal kanıt oluşturur.", data: "Teslimat tarihi", integ: "Kargo durumu entegrasyonu", cx: "Orta", imp: "Yüksek", c: "I" },
    { id: "A12", t: "Replenishment", brand: "Her iki marka", trig: "Yenilenen ürün satın alındı (tahmini süre)",
      flow: [["~12 ay", "Yatak pedi / alez yenileme (HyperSoft, Visco Gell)"], ["~18–24 ay", "Visco yastık / Base Yastık yenileme"], ["~6–12 ay", "Sandalye oturum minderi tekli → 2'li / 4'lü paket"]],
      why: "Süreler sektör tahminidir (Inferred). Gerçek tekrar alım süresi sipariş verisiyle kalibre edilmeli.", data: "Sipariş geçmişi", integ: "Sipariş", cx: "Düşük", imp: "Orta", c: "R" },
    { id: "A13", t: "Win-Back", brand: "Her iki marka", trig: "180 / 365 gün alışveriş yok",
      flow: [["180 gün", "Son alınan kategoriye tamamlayıcı ürün (yatak → ped/nevresim, koltuk → kırlent/puf)"], ["365 gün", "Yeni ürünler: Sally sallanan sandalye, Coop puf, Reflux yastık"]],
      why: "Yatak ve koltukta tekrar alım döngüsü uzun; geri kazanım aksesuar ve yeni ürünle yapılmalı.", data: "Sipariş geçmişi", integ: "Sipariş", cx: "Düşük", imp: "Orta", c: "R" },
    { id: "A14", t: "VIP & Category Affinity", brand: "Her iki marka", trig: "Yüksek sepet (ör. Loop, Vetta, Organic Comfort 160x200+) veya kategoriye yoğun ilgi (Bebek & Çocuk, Pet)",
      flow: [["VIP", "Yeni ürünlere erken erişim, kişisel destek hattı (WhatsApp)"], ["Bebek & Çocuk", "Cloud 60x120 → Nanna → Neva Montessori 90x190 → Base (çocuk büyüdükçe)"], ["Pet", "Cozypaws Kedi & Köpek Yatağı (Sleeptown) · Homedius pet yatağı kategorisi"]],
      why: "Çocuk yatağında ölçü yaşla birlikte değişir. Bu, yıllara yayılan bir müşteri döngüsü sağlar.", data: "Sipariş + kategori ilgisi", integ: "Sipariş + web SDK", cx: "Orta", imp: "Orta", c: "R" },
    { id: "A15", t: "Welcome / Lead Capture", brand: "Her iki marka", trig: "İlk ziyaret, 2. sayfa görüntüleme veya çıkış niyeti",
      flow: [["0", "Sleeptown: 'İlk siparişinde 500 TL' (mevcut kampanya) · Homedius: kargo bedava kupon (mevcut kampanya)"], ["+1 gün", "Model seçim rehberi (yatak sertliği / koltuk ölçüsü)"], ["+4 gün", "En çok tercih edilenler + yorumlar"]],
      why: "İki sitede de pop-up kapalı; mevcut teklifler sadece kampanya sayfalarında duruyor.", data: "Form", integ: "Engage form/pop-up", cx: "Düşük", imp: "Yüksek", c: "V" }
  ],

  /* Cross-sell map: by family */
  xmap: [
    { f: "Mocca (Homedius)", base: "Mocca Tek Kişilik Katlanır Yatak Uzanma Koltuğu – 7.499 TL", comp: [["Yataklı Koltuk Sırt Dayama Destek Demiri Aparatı", "499 TL", "Koltuk modunda sırt desteği"], ["Dekoratif Kadife Papatya Kırlent", "619–799 TL", "Renk uyumu (Kiremit / Petrol Yeşili / Bej)"], ["Visco yastık", "649–1.549 TL", "Yatak modunda kullanım"]], up: [["Mocca Çift Kişilik", "8.899–10.999 TL"], ["Mocca Fitilli Kadife Çift Kişilik", "11.999 TL"]], alt: [["Magic Tek Kişilik", "5.399 TL"], ["Valeria Tek Kişilik", "5.199 TL"]] },
    { f: "Magic (Homedius)", base: "Magic Katlanır Yataklı Koltuk Tek Kişilik – 5.399 TL", comp: [["Sırt Dayama Aparatı 2'li", "paket"], ["Goody Goose Tek Kişilik Yorgan", "kaz tüyü"], ["Papatya Kırlent", "619–799 TL"]], up: [["Magic Çift Kişilik", "6.699–8.999 TL"], ["Rumy Çift Kişilik 85x160", "11.999 TL"]], alt: [["Mila Uzanma Minderi", "3.499 TL"], ["Melisa", "4.399–8.699 TL"]] },
    { f: "Coop / Notre / Bella (Homedius)", base: "Coop Puf Kadife Koltuk Berjer – 4.999 TL", comp: [["Çok Amaçlı Puf Qube", "799 TL"], ["Papatya Kırlent", "619–799 TL"], ["Poffi Sırtlı Yer Minderi", "2.599 TL"]], up: [["Sally Minderli Ahşap Sallanan Sandalye", "10.499 TL"], ["Sofa Bed Koltuk Puf Seti", "13.999 TL"]], alt: [["Notre Kadife Koltuk Puf Seti", "5.999 TL"], ["Bella Puf Olabilen Dinlenme Koltuğu", "4.099–5.399 TL"]] },
    { f: "Sandalye Minderi (Homedius)", base: "Çiçekli Sandalye Oturum Minderi 40x40x4 – 239 TL", comp: [["Ayak Havlusu / Peştamal", "63–109 TL"]], up: [["Çiçekli 2'li / 4'lü paket", "multipack"]], alt: [["Desenli / Renkli seri", "aynı ölçü"]] },
    { f: "Base Visco (Sleeptown)", base: "Base Visco Sünger Yatak 90x190 – 7.999 TL", comp: [["HyperSoft Yatak Pedi (aynı ölçü)", "3.999 TL"], ["Base Yastık", "1.659 TL"], ["Celia Pamuk Luxury Nevresim", "1.499 TL"]], up: [["Base 7 Zone Visco", "8.999 TL"], ["Hybrid Pocket Yaylı", "11.499 TL"]], alt: [["Helix 5 Zone Pocket Yaylı", "11.999 TL"]] },
    { f: "Hybrid 5 Zone (Sleeptown)", base: "Hybrid 5 Zone Pocket Yaylı Yatak 90x190 – 12.999 TL", comp: [["Visco Gell Yatak Pedi (aynı ölçü)", "5.499 TL"], ["Base Zone Yastık", "1.899 TL"], ["Yorgan Kaztüyü", "5.499 TL"]], up: [["Latex Pocket Yaylı", "13.999 TL"], ["Organic Comfort Latex", "16.999 TL"]], alt: [["Helix 5 Zone", "11.999 TL"]] },
    { f: "Organic Comfort Latex (Sleeptown)", base: "Organic Comfort Latex Yatak 90x190 – 16.999 TL", comp: [["Organic Comfort Yastık", "1.819 TL (stok 1)"], ["Visco Gell Yatak Pedi", "5.499 TL"], ["Celia nevresim", "1.499–1.899 TL"]], up: [["Daha büyük ölçü: 180x200", "29.999 TL"]], alt: [["Latex Pocket Yaylı", "13.999 TL"]] },
    { f: "Bebek & Çocuk (Sleeptown)", base: "Cloud Bebek ve Çocuk Yatağı 60x120 – 2.799 TL", comp: [["Cooly Göz Yastığı", "699 TL"], ["HyperSoft Yatak Pedi", "ölçüye göre"]], up: [["Nanna Pocket Yaylı", "3.399 TL"], ["Neva Montessori 90x190", "7.999 TL"]], alt: [["Homedius Bebek Yastığı / Oyun Minderi (kategori)", "–"]] }
  ],

  /* Cross-brand */
  xbrand: {
    proof: [
      ["Ortak satıcı ünvanı", "Planet Entegre Yatak Mobilya A.Ş. (iki sitenin satış ve garanti metinleri)", "V"],
      ["Ortak vergi / Mersis no", "7300347804 / 0730034780400017", "V"],
      ["Ortak adres ve WhatsApp", "Bekirpaşa Kozluk Mah. D100 Yan Yol No:10 Erenler/Sakarya · 0535 652 13 17", "V"],
      ["Ortak altyapı", "T-Soft, aynı tema ve aynı çerez onay sistemi", "V"],
      ["Ortak içerik", "Aynı blog yazısı iki sitede; Homedius blogunda Sleeptown koltukları anlatılıyor", "V"],
      ["Ortak CRM / veri paylaşımı", "Bilinmiyor; varsayılmadı", "R"]
    ],
    overlap: [
      ["Magic Tek Kişilik Antrasit", "5.399 TL", "6.299 TL", "+%17"],
      ["Magic Tek Kişilik Bej", "5.399 TL", "6.299 TL", "+%17"],
      ["Magic Çift Kişilik Antrasit", "8.999 TL", "9.499 TL", "+%6"],
      ["Magic Çift Kişilik Bej", "6.999 TL", "9.499 TL", "+%36"],
      ["Mocca Çift Kişilik Antrasit", "9.999 TL", "13.999 TL", "+%40"],
      ["Mocca Çift Kişilik Mavi", "8.899 TL", "13.999 TL", "+%57"]
    ],
    flows: [
      { from: "Sleeptown yatak alıcısı", to: "Homedius katlanır koltuk (misafir yatağı)", ex: "Hybrid 5 Zone alan → Magic Çift Kişilik / Rumy", why: "Ana yatağı yenileyen hane misafir yatağı ihtiyacını da düşünebilir." },
      { from: "Homedius koltuk alıcısı", to: "Sleeptown yatak pedi / nevresim / yastık", ex: "Mocca Çift Kişilik → HyperSoft Ped + Celia nevresim", why: "Yatağa dönüşen koltukta tekstil ihtiyacı doğar; Sleeptown'un ürün yelpazesi bu alanda daha geniş." },
      { from: "Homedius Bebek & Çocuk ilgisi", to: "Sleeptown Cloud / Nanna / Neva", ex: "Bebek yastığı / oyun minderi → Cloud 60x120", why: "Çocuk yatakları Sleeptown'da; çocuk büyüdükçe ölçü değişir." },
      { from: "Sleeptown blog okuru", to: "Homedius ev yaşamı ürünleri", ex: "'Küçük Salonlar İçin Katlanır Koltuk' → Homedius Mila / Magic", why: "İçerik zaten ortak yazılıyor." }
    ],
    note: "Aynı modellerin iki sitede farklı fiyatla satılması, markalar arası bir otomasyonun müşteriye çelişkili fiyat göstermesine yol açabilir. Önce kanal fiyat politikası netleşmeli. KVKK açısından iki marka arasında veri kullanımı için açık rıza / aydınlatma metni kontrol edilmeli."
  },

  /* Ads */
  ads: {
    meta: [
      { b: "Homedius", id: "3642332985905021", start: "2 Eki 2026", type: "Marka · katalog", msg: "Gündüz KOLTUK, gece YATAK. Tek hareket yeter! Katlanır Koltuklarda %25 İndirim", prod: "Mocca Fitilli Kadife Tek Kişilik Gri", cta: "Shop Now", lp: "homedius.com" },
      { b: "Homedius", id: "1099683862606581", start: "2 Eki 2026", type: "Marka", msg: "Bir koltuktan daha fazlası. Gündüz Koltuk, Gece Yatak", prod: "Katlanır koltuk", cta: "Şimdi Sipariş Ver", lp: "homedius.com" },
      { b: "Homedius", id: "2404331746763852", start: "29 Eyl 2026", type: "Yeni ürün · karusel", msg: "Yeni ürün Coop, şimdi farklı renk seçenekleriyle", prod: "Coop Puf Kadife Koltuk", cta: "Order Now", lp: "homedius.com" },
      { b: "Homedius", id: "1581944326186365", start: "23 Eyl 2026", type: "Marka · karusel", msg: "Bir koltuktan fazlası. Çocuk odasında, öğrenci evinde, 1+1'de… Magic. Her eve uyum sağlar.", prod: "Magic", cta: "Order Now", lp: "homedius.com" },
      { b: "Homedius", id: "1652915719738347", start: "14 Eyl 2026", type: "Okula dönüş", msg: "Yeni Dönem, Yeni Oda! İster koltuk ister yatak, odanı yenile!", prod: "Katlanır koltuk", cta: "Order Now", lp: "homedius.com" },
      { b: "Homedius", id: "1385766837087258", start: "14 Eyl 2026", type: "İndirim", msg: "Yatak olabilen koltuklarda NET %25 indirim!", prod: "Katlanır koltuk", cta: "Şimdi Sipariş Ver", lp: "homedius.com" },
      { b: "Homedius", id: "1619019609798494", start: "14 Eyl 2026", type: "Ürün videosu", msg: "Rumy… Misafir geldiğinde ekstra oda aramana gerek yok.", prod: "Rumy Çift Kişilik", cta: "Şimdi Sipariş Ver", lp: "homedius.com" },
      { b: "Homedius", id: "1438806978188608 · 1086024480468246 · 1106163948757365 · 1036204819421460", start: "7 Eyl 2026", type: "Influencer (iş birliği)", msg: "@blogsalbazidurumlar, @gayeincolor, @dokuzuncukat, @nilufercakiralay – Magic / Mocca deneyim videoları", prod: "Magic, Mocca", cta: "Şimdi Sipariş Ver", lp: "homedius.com" },
      { b: "Sleeptown", id: "2034647727236778", start: "29 Eyl 2026", type: "İndirim", msg: "Sonbahar yorgunluğunu yatağında bırak! Sleeptown yataklarda NET %25 İNDİRİM", prod: "Yataklar", cta: "Shop Now", lp: "sleeptown.com.tr" },
      { b: "Sleeptown", id: "1080130067964516", start: "29 Eyl 2026", type: "Influencer (iş birliği)", msg: "@essra.ddogan – Hybrid 5 Zone Pocket… '120 gün deneme süresi' #çeyizhazırlığı", prod: "Hybrid 5 Zone Pocket Yaylı", cta: "Şimdi Sipariş Ver", lp: "sleeptown.com.tr" },
      { b: "Sleeptown", id: "2103358590567463", start: "29 Eyl 2026", type: "Influencer (iş birliği)", msg: "@Damlaltuntas1 – ev yenileme, yatak değişimi", prod: "Yatak", cta: "Şimdi Sipariş Ver", lp: "sleeptown.com.tr" },
      { b: "Sleeptown", id: "1077608051850364", start: "2 Eki 2026", type: "Ürün videosu (etkileşim)", msg: "Bu yatağı sakın almayın… Latex'in konforuna bir kez alışınca gerisi zor.", prod: "Latex yatak", cta: "Detayları Gör", lp: "sleeptown.com.tr" },
      { b: "Sleeptown", id: "1780758669711797", start: "2 Eki 2026", type: "Ürün içeriği", msg: "Organic Comfort; organik kumaş, pamuk vatka, latex sünger ve Micro Torba Yay…", prod: "Organic Comfort Latex", cta: "Order Now", lp: "sleeptown.com.tr" }
    ],
    themes: [
      ["Fonksiyon: 'Gündüz koltuk, gece yatak'", "Homedius reklamlarının çoğu", "V"],
      ["Net %25 indirim", "İki marka; site bandındaki '%50'ye varan' mesajından farklı", "V"],
      ["Influencer / UGC", "Homedius 4+, Sleeptown 2 iş birliği", "V"],
      ["Mevsim ve dönem: okula dönüş, sonbahar, çeyiz", "Eylül–Ekim 2026", "V"],
      ["CTA dili karışık: 'Order Now' / 'Shop Now' ve 'Şimdi Sipariş Ver'", "İki marka", "V"],
      ["Reklamdaki ürün stokta mı?", "Mocca Fitilli Kadife reklamı yayında; aynı serinin Çift Kişilik Gri ve Çağla Yeşil renkleri tükenmiş", "V"]
    ],
    agency: "Iyzads, Homedius'u müşteri referansı olarak kullanan bir reklam yayınlıyor ('Homedius X iyzads'). Reklam yönetiminde bir ajans/araç kullanıldığını gösteriyor.",
    other: [
      ["Google Ads", "Sleeptown sitesinde Google Ads etiketi var (AW-11263851895). Ads Transparency Center bot doğrulamasına takıldı; kreatif okunamadı.", "R"],
      ["Instagram", "@homedius.tr, @sleeptown.tr (45K takipçi)", "V"],
      ["YouTube", "@homedius, @sleeptown.comfortforyou kanalları var; Homedius ana sayfasında Fiesta videosu gömülü", "V"],
      ["TikTok", "Homedius footer'ında TikTok linki var; reklam kütüphanesi okunmadı", "R"],
      ["Harcama, ROAS, CPA, dönüşüm", "Requires Ad Account Access", "R"]
    ]
  },

  /* Tracking */
  tracking: [
    ["E-ticaret altyapısı", "T-Soft", "T-Soft", "V"],
    ["Google tag (gtag.js)", "Var · GA4 G-MFWMQLBLFT", "Var · Google Ads AW-11263851895 (GA4 ID HTML'de bulunamadı; google-analytics.com isteği görüldü)", "V"],
    ["Google Tag Manager", "googletagmanager.com isteği (gtag)", "googletagmanager.com isteği (gtag)", "V"],
    ["Meta Pixel", "Var · çerez onayı sonrası (data-consent=marketing)", "Public HTML'de bulunamadı", "V"],
    ["TikTok Pixel", "Bulunamadı", "Bulunamadı", "V"],
    ["Google Ads etiketi", "Bulunamadı", "AW-11263851895", "V"],
    ["Çerez onay yönetimi", "T-Soft Consent (TSOFT_CONSENT, kategori bazlı)", "T-Soft Consent", "V"],
    ["T-Soft OpenAI Pixel uygulaması", "Var (izin gerektiriyor)", "Bulunamadı", "V"],
    ["Hata izleme / CDN", "Sentry, Cloudflare Insights", "Sentry", "V"],
    ["E-posta pazarlama / CRM aracı", "Bulunamadı (Klaviyo, Insider, Euromsg, Segmentify vb. yok)", "Bulunamadı", "V"],
    ["Yorum aracı", "T-Soft yerleşik (0 yorum)", "T-Soft yerleşik (83 yorum)", "V"],
    ["Canlı sohbet", "Yok · WhatsApp linki", "Yok", "V"],
    ["Kişiselleştirme / öneri", "Bulunamadı · T-Soft 'Benzer Ürünler'", "Bulunamadı", "V"],
    ["Server-side / CAPI kurulumu", "Requires Access", "Requires Access", "R"]
  ],

  /* AI opportunities */
  ai: [
    { t: "AI Uyku & Koltuk Asistanı", d: "Kullanıcıya 'kaç kişi, oda ölçüsü, uyku pozisyonu, sırt ağrısı, misafir sıklığı' sorularını sorup gerçek katalogdan ürün önerir: Base 7 Zone ↔ Hybrid 5 Zone, Magic Tek ↔ Rumy.", ev: "Sleeptown 'İhtiyaca Göre' menüsü (Bel ve Omurga Desteği, Yorgun Uyananlar, Isı Dengeleyici…) zaten bir karar ağacı.", data: "Katalog + ürün özellikleri", cx: "Orta", imp: "Yüksek", c: "I" },
    { t: "AI Müşteri Hizmetleri Botu (WhatsApp + site)", d: "Teslimat, iade, garanti, ölçü ve taksit sorularını politika metinleri ve katalogla cevaplar; sipariş takibine yönlendirir.", ev: "SSS ve müşteri hizmetleri sayfaları boş; WhatsApp hattı iki markada ortak.", data: "Politika metinleri, katalog, sipariş durumu", cx: "Orta", imp: "Yüksek", c: "I" },
    { t: "AI Review Intelligence", d: "Sleeptown (83 yorum) ve pazaryeri yorumlarından sertlik, koku, kargo, ölçü problemlerini çıkarır; ürün ve iletişim ekiplerine raporlar.", ev: "Sleeptown sitede yorum var. Şikayetvar'da 'satıcıya soru' cevapsız kaldığına dair şikayet var.", data: "Site + pazaryeri yorumları", cx: "Düşük", imp: "Orta", c: "I" },
    { t: "AI Campaign Generator", d: "Ürün + kampanya + stok verisinden e-posta, SMS, WhatsApp ve reklam metni üretir; marka sesini (Homedius: pratik ev yaşamı, Sleeptown: uyku bilimi) korur.", ev: "19 aktif Meta reklamı, kampanya metinleri tutarsız (%25 / %50'ye varan / yaza özel).", data: "Katalog, kampanya takvimi", cx: "Düşük", imp: "Orta", c: "I" },
    { t: "AI Merchandising", d: "Stok, indirim ve ilgi verisine göre ana sayfa ve kategori sırasını belirler; tükenen renkleri geri plana alır, stoğu bol olanları öne çıkarır.", ev: "Homedius ana sayfası 'Influencer'ların Tercihleri' bloğunda Mocca'yı öne çıkarıyor; aynı serinin bazı renkleri tükenmiş.", data: "Stok + davranış", cx: "Orta", imp: "Orta", c: "I" },
    { t: "AI SEO & İçerik", d: "Boş title ve meta description'ları, tekrarlanan blog içeriklerini ve 'Sleeptown Comfort For You' gibi genel başlıkları ürün/kategori verisinden düzeltir; 'katlanır koltuk', 'yatak olabilen koltuk', '160x200 yatak' gibi aramalar için kategori metni üretir.", ev: "Homedius ana sayfa title boş; Sleeptown ~50 sayfada aynı başlık; iki blogda aynı yazı.", data: "Katalog, sitemap", cx: "Düşük", imp: "Orta-Yüksek", c: "V" },
    { t: "AI Ürün Öneri Motoru", d: "Renk ve ölçü uyumlu tamamlayıcı ürün öneri bloğu (Benzer Ürünler bloğuna ek).", ev: "Şu an sadece aynı modelin başka renkleri öneriliyor.", data: "Katalog + sipariş", cx: "Orta", imp: "Yüksek", c: "I" },
    { t: "Fiyat ve Kanal Tutarlılığı İzleme", d: "Homedius, Sleeptown ve pazaryerlerinde aynı modelin fiyatını günlük izler, sapmaları raporlar.", ev: "Mocca Çift Kişilik Antrasit: Homedius 9.999 TL, Sleeptown 13.999 TL.", data: "Katalog feed'leri", cx: "Düşük", imp: "Orta", c: "V" }
  ],

  /* Segments */
  segments: [
    ["First-time Buyers", "İlk siparişi veren; hoş geldin + kullanım rehberi"],
    ["Repeat Buyers", "2+ sipariş; aksesuar ve yenileme"],
    ["High AOV Customers", "Loop / Vetta / Organic Comfort 160x200+ alanlar"],
    ["Category Loyalists", "Katlanır koltuk, uyku tekstili, bebek & çocuk"],
    ["Discount Buyers", "Sadece %25+ indirimde alan; kampanya takvimine göre"],
    ["Cart Abandoners", "Ölçü/renk seçip ödeme yapmayanlar"],
    ["Product Viewers", "Ürünü 2+ kez inceleyenler / favoriye ekleyenler"],
    ["Dormant Customers", "180+ gün alışveriş yapmayanlar"],
    ["VIP Customers", "Toplam harcama ve sipariş sıklığı üst %5"],
    ["Cross-Sell Candidates", "Yatak alıp ped/nevresim almamış, koltuk alıp yastık/kırlent almamış"],
    ["Cross-Brand Candidates", "Bir markadan alıp diğerine ilgi gösteren (ortak izinle)"],
    ["Ad-Acquired Non-Buyers", "Meta reklamından gelip satın almayanlar (UTM)"]
  ],

  /* Opportunity scoring (all) */
  scoring: [
    ["Yorum toplama otomasyonu", "Homedius 0 yorum / 192 ürün", "Retention", "Teslimat tarihi, e-posta/telefon", "T-Soft sipariş + Engage", "Düşük", "Yüksek", "V"],
    ["Back in stock + az stok", "23 tükenmiş Homedius ürünü; Sleeptown ölçü bazında 0–1 stok", "Product", "Stok feed'i, alarm listesi", "Ürün feed'i + T-Soft alarm", "Düşük", "Yüksek", "V"],
    ["Lead capture + hoş geldin serisi", "Pop-up kapalı; 500 TL üyelik teklifi görünmüyor", "Discovery", "Form verisi", "Engage form", "Düşük", "Yüksek", "V"],
    ["Sepet terk (ölçü/renk bilgisiyle)", "Varyant ve taksit verisi mevcut", "Cart", "Sepet etkinliği", "T-Soft + web SDK", "Orta", "Yüksek", "I"],
    ["Uyku seti çapraz satışı (ölçü eşleşmeli)", "Ped ve nevresim yatakla aynı ölçülerde", "Post-purchase", "Sipariş + varyant", "Sipariş entegrasyonu", "Orta", "Yüksek", "I"],
    ["Misafir kiti çapraz satışı", "Sırt dayama aparatı, yastık, yorgan, kırlent aynı sitede", "Cart / Post-purchase", "Sipariş", "Sipariş entegrasyonu", "Düşük", "Orta-Yüksek", "I"],
    ["Reklam → CRM takibi", "19 aktif Meta reklamı", "Discovery", "UTM, görüntüleme, e-posta eşleşmesi", "Web SDK + Meta audience sync", "Orta", "Yüksek", "I"],
    ["Ürün inceleme terk", "Yüksek fiyatlı, uzun düşünülen ürünler", "Product", "Görüntüleme etkinliği", "Web SDK", "Düşük", "Yüksek", "I"],
    ["Fiyat düşüşü bildirimi", "Fiyat alarmı butonu var; renkler arası fiyat farkları", "Product", "Fiyat geçmişi", "Ürün feed'i", "Düşük", "Orta", "V"],
    ["Yatak upsell merdiveni", "7.999 → 16.999 TL basamakları", "Product", "Katalog", "Öneri bloğu", "Düşük", "Orta", "I"],
    ["Satın alma sonrası bakım içeriği", "Blogda bakım yazıları var", "Retention", "Teslimat tarihi", "Kargo durumu", "Orta", "Orta", "I"],
    ["Yenileme hatırlatması", "Ped, yastık, minder", "Retention", "Sipariş geçmişi", "Sipariş", "Düşük", "Orta", "R"],
    ["Geri kazanım", "Uzun tekrar alım döngüsü", "Retention", "Sipariş geçmişi", "Sipariş", "Düşük", "Orta", "R"],
    ["VIP ve kategori ilgisi", "Bebek & çocuk ölçü geçişi, premium koltuklar", "Retention", "Sipariş + ilgi", "Sipariş + SDK", "Orta", "Orta", "R"],
    ["Markalar arası öneri", "Ortak şirket, farklı katalog", "Retention", "Ortak müşteri kimliği + rıza", "İki T-Soft mağazası → tek Engage", "Yüksek", "Orta", "R"],
    ["AI uyku/koltuk asistanı", "İhtiyaca göre menü hazır", "Discovery / Product", "Katalog", "Chat widget + katalog", "Orta", "Yüksek", "I"],
    ["AI müşteri hizmetleri botu", "Boş SSS sayfaları, ortak WhatsApp", "Tümü", "Politika + sipariş", "WhatsApp API", "Orta", "Yüksek", "I"],
    ["SEO düzeltmeleri", "Boş title, aynı başlıklar, aynı blog yazısı", "Discovery", "Sitemap", "T-Soft panel", "Düşük", "Orta-Yüksek", "V"],
    ["Politika metinlerini düzeltme", "Kargo / iade / deneme süresi çelişkileri", "Product / Cart", "–", "İçerik", "Düşük", "Orta", "V"]
  ],

  roadmap: [
    { p: "0–30 gün", t: "Temel ve hızlı kazanımlar", items: [
      "Site düzeltmeleri: Homedius ana sayfa title/meta, Lorem Ipsum bloğu, 'Yaza özel' bandı, /test sayfası, boş SSS",
      "Tek politika metni: kargo eşiği, iade süresi, 120 gece deneme (hukuk onayı ile)",
      "Engage kurulumu: iki T-Soft mağazası için web SDK, ürün feed'i (fiyat + varyant stok), sipariş entegrasyonu",
      "Lead capture: Sleeptown 500 TL hoş geldin, Homedius kargo bedava kuponu → hoş geldin serisi",
      "İlk akışlar: Sepet terk, Back in stock (T-Soft stok alarmı), Yorum isteği" ] },
    { p: "30–60 gün", t: "Davranış ve çapraz satış", items: [
      "Ürün inceleme terk (katlanır koltuk) + fiyat düşüşü + az stok",
      "Ölçü eşleşmeli uyku seti (Sleeptown) ve misafir kiti (Homedius) çapraz satış akışları",
      "Reklam → CRM: UTM'li segmentler, Meta kitle senkronu, satın alanı reklam kitlesinden çıkarma",
      "Satın alma sonrası bakım içerikleri (mevcut blog yazılarıyla)",
      "Sleeptown'da Meta Pixel / CAPI kurulumunu kontrol etme (Requires Access)" ] },
    { p: "60–90 gün", t: "Optimizasyon ve AI", items: [
      "Sipariş verisiyle segment büyüklüklerini ve tekrar alım sürelerini kalibre etme",
      "Yenileme, geri kazanım, VIP ve bebek & çocuk yaşam döngüsü akışları",
      "AI uyku/koltuk asistanı ve WhatsApp müşteri hizmetleri botu pilotu",
      "Markalar arası fırsat: rıza modeli ve fiyat politikası netleşirse ortak segment pilotu",
      "A/B testleri: indirimli vs indirimsiz (taksit/güven) sepet terk mesajı" ] }
  ]
};
