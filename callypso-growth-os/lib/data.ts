// Callypso Growth OS — araştırma verisi
// Analiz tarihi: 2026-11-20. Durum etiketleri:
//   "dogrulandi" = doğrudan gözlemlendi (sayfa, DNS, SERP, Apify verisi)
//   "cikarim"    = gözleme dayanan yorum; sahada doğrulanmalı
//   "ornek"      = öneri / örnek veri; gerçek sonuç değildir

export type Product = "sirket" | "engage" | "export";
export type Status = "dogrulandi" | "cikarim" | "ornek";
export type Priority = "P0" | "P1" | "P2";

export const META = {
  analysisDate: "2026-11-20",
  analyst: "Claude Code (REA + Playwright + Apify + Web arama)",
  planStart: "2026-11-23",
  planEnd: "2026-11-27",
};

export const PRODUCT_LABEL: Record<Product, string> = {
  sirket: "Şirket sitesi",
  engage: "Callypso Engage",
  export: "Export Agent",
};

export const STATUS_LABEL: Record<Status, string> = {
  dogrulandi: "Doğrulandı",
  cikarim: "Çıkarım",
  ornek: "Örnek/öneri",
};

export const SOURCES = [
  { id: "s-main", label: "callypsotech.com (www)", url: "https://www.callypsotech.com/" },
  { id: "s-apex", label: "callypsotech.com (www'suz, park sayfası)", url: "http://callypsotech.com/" },
  { id: "s-engage", label: "Callypso Engage", url: "https://callypso-engage.vercel.app/" },
  { id: "s-export", label: "Callypso Export Agent demo", url: "https://callypsoagent-callypso-export-agent.vercel.app/" },
  { id: "s-ig", label: "Instagram @sepetrontgeni", url: "https://www.instagram.com/sepetrontgeni/" },
  { id: "s-dns", label: "DNS kayıtları (dns.google)", url: "https://dns.google/resolve?name=callypsotech.com&type=TXT" },
  { id: "s-klaviyo", label: "Klaviyo fiyat özeti (3. taraf)", url: "https://chatarmin.com/en/blog/klaviyo-pricing" },
  { id: "s-omnisend", label: "Omnisend fiyat planları (resmi yardım)", url: "https://support.omnisend.com/en/articles/3533018-omnisend-pricing-plans-2026" },
  { id: "s-wava", label: "wava (Shopify WhatsApp)", url: "https://wavacarts.com/" },
  { id: "s-insider", label: "Insider One", url: "https://insiderone.com/about-us/" },
  { id: "s-segmentify", label: "Segmentify inceleme (saasmetre)", url: "https://saasmetre.com/arac/segmentify" },
  { id: "s-etkin", label: "etkin.ai", url: "https://www.etkin.ai/" },
  { id: "s-bilvio", label: "Bilvio", url: "https://bilvio.com/tr/" },
  { id: "s-exportminers", label: "Export Miners SSS", url: "https://www.exportminers.com/sikca-sorulan-sorular" },
  { id: "s-volza", label: "Volza fiyat sayfası", url: "https://volza.com/pricing/" },
  { id: "s-apollo", label: "Apollo.io fiyat özeti (3. taraf)", url: "https://www.knowlee.ai/blog/tools/apollo-io-pricing-2026" },
];

// ---------------------------------------------------------------------------
// 1) Net cevap: hangi ürün, hangi müşteri, hangi değer önerisi, hangi kanal
// ---------------------------------------------------------------------------
export const STRATEGY = [
  {
    product: "export" as Product,
    role: "Birincil — ilk satış ve referans",
    customer:
      "Türkiye'de 10–150 çalışanlı, ihracat yapan üretici KOBİ'ler. İlk niş: İnegöl/Bursa ve Kayseri mobilya üreticileri (demo senaryosu zaten bu sektör). Karar verici: firma sahibi veya ihracat müdürü.",
    valueProp:
      "Yabancı müşteriden gelen talebe aynı gün teklif taslağı, hiçbir teklif takipsiz kalmıyor — her mesaj gönderilmeden önce sizin onayınızdan geçer.",
    whyFirst:
      "Rakiplerin çoğu müşteri bulmaya (veri: Bilvio, Volza) ya da hizmet ajansına (Export Miners) odaklanıyor; talep → teklif → takip operasyonu boşta. Ticket büyük, karar verici az, sorun ölçülebilir (yanıt süresi, yanıtsız teklif sayısı).",
    channel: "Outbound e-posta + LinkedIn + ihracatçı birlikleri ve fuar ziyaretçi listeleri",
    offer: "14 günlük pilot: son 30 günün yanıtsız teklifleri ve yeni talepler üzerinde birlikte çalışma, başarı ölçütü baştan yazılı.",
    status: "cikarim" as Status,
  },
  {
    product: "engage" as Product,
    role: "İkincil — inbound ile büyütülecek",
    customer:
      "Shopify kullanan Türk D2C e-ticaret markaları (kozmetik, moda, ev). Not: Engage şu an yalnızca Shopify ile bağlanıyor; Türkiye'de yaygın ikas/Ticimax/IdeaSoft entegrasyonu yok.",
    valueProp:
      "Ücretsiz ‘Sepet Röntgeni’: mağazanın kaçırdığı geri kazanım akışlarını (terk sepet, hoş geldin, win-back) 48 saatte raporla, sonra kur.",
    whyFirst:
      "Pazar kalabalık (Klaviyo, Omnisend, Insider, Segmentify, wava). Doğrudan yazılım satışı yerine ücretsiz analiz + kurulum hizmeti ile girmek güveni hızlı kurar. Instagram @sepetrontgeni içeriği bu kitleye zaten konuşuyor.",
    channel: "Instagram @sepetrontgeni + ücretsiz analiz sayfası + kişiselleştirilmiş cold e-posta",
    offer: "Ücretsiz Sepet Röntgeni raporu → 14 günlük kurulumlu pilot (1 akış canlıya).",
    status: "cikarim" as Status,
  },
];

// ---------------------------------------------------------------------------
// 2) Website / SEO / GEO / güven denetimi
// ---------------------------------------------------------------------------
export type Finding = {
  id: string;
  product: Product | "instagram" | "eposta";
  area: "Güven" | "Konumlandırma" | "Dönüşüm" | "SEO" | "GEO" | "Teknik" | "Yasal" | "Teslim edilebilirlik" | "Sosyal";
  problem: string;
  evidence: string;
  impact: string;
  solution: string;
  priority: Priority;
  effort: string;
  status: Status;
  source?: string;
};

export const FINDINGS: Finding[] = [
  {
    id: "F01",
    product: "sirket",
    area: "Teknik",
    problem: "Alan adının www'suz hali (callypsotech.com) Hostinger 'park edilmiş alan adı' sayfası gösteriyor; HTTPS bağlantısı hata veriyor.",
    evidence: "DNS A kaydı 2.57.91.91 (Hostinger). https:// → TLS hatası; http:// → 'Parked Domain name on Hostinger DNS system' (noindex). Sadece www → Vercel.",
    impact: "E-posta imzasına, sunuma ya da tarayıcıya 'callypsotech.com' yazan her potansiyel müşteri güvenlik hatası veya boş park sayfası görür. Canonical, og:url, JSON-LD ve sitemap bu bozuk adresi gösterdiği için Google'a da çelişkili sinyal gider.",
    solution: "Vercel projesine callypsotech.com'u ekle ve www'ye yönlendir; Hostinger DNS'te A kaydını Vercel'in gösterdiği IP ile değiştir. Ardından canonical/sitemap/og:url'yi www ile eşleştir.",
    priority: "P0",
    effort: "30 dk",
    status: "dogrulandi",
    source: "s-apex",
  },
  {
    id: "F02",
    product: "sirket",
    area: "Güven",
    problem: "Doğrulanamayan sosyal kanıt ve metrikler: '50+ işletme kullanıyor ★★★★★ 4.9/5', baş harfli avatarlar, '%94 ilk çözüm', '%60 maliyet azalma', '%98 doğruluk'.",
    evidence: "Ana sayfa hero ve istatistik alanı. Aynı sayfanın altbilgisi şirketi 'bireysel bir teknoloji girişimi' olarak tanımlıyor; referans, vaka ya da kaynak yok.",
    impact: "B2B alıcı LinkedIn/Google'da kontrol ettiğinde kanıt bulamaz; tek bir çelişki tüm iddiaları şüpheli yapar. Ayrıca yanıltıcı reklam riski doğurur.",
    solution: "Kanıtı olmayan sayı ve puanları kaldır. Yerine dürüst sinyaller koy: kurucu adı ve fotoğrafı, 'İlk 5 pilot müşterimizi arıyoruz' teklifi, canlı demo bağlantıları.",
    priority: "P0",
    effort: "1 saat",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F03",
    product: "engage",
    area: "Güven",
    problem: "Engage sayfasında gerçek olmadığı izlenimi veren yorumlar ve logolar: Maria Gomez/Northwind, Liam Chen/Parable vb. 6 yorum, 8 marka logosu ve '4.9/5 · 2.400+ marka'.",
    evidence: "Engage açılış sayfası 'Markalar Callypso Engage'i seviyor' bölümü. Bu marka adları ve kişiler için doğrulanabilir bir kaynak bulunamadı.",
    impact: "Türkiye pazarına satış yapan bir üründe yabancı isimli, doğrulanamayan yorumlar en hızlı güven kaybı nedenidir. Cold e-postadan gelen ziyaretçi bunu fark ederse görüşmeye dönmez.",
    solution: "Bölümü kaldır veya açıkça 'Örnek senaryo — demo verisi' olarak etiketle. Gerçek pilotlardan ilk kanıt gelene kadar 'Nasıl ölçüyoruz' bölümü koy.",
    priority: "P0",
    effort: "30 dk",
    status: "dogrulandi",
    source: "s-engage",
  },
  {
    id: "F04",
    product: "sirket",
    area: "Yasal",
    problem: "Kanıtsız uyumluluk iddiası ('SOC 2 Type II, GDPR ve KVKK uyumlu altyapı') ve eksik yasal sayfalar.",
    evidence: "Özellikler bölümü. Sitede KVKK aydınlatma metni, gizlilik ya da çerez politikası yok: 'Hizmet koşulları ve gizlilik politikası için iletişime geçin.'",
    impact: "SOC 2 Type II, bağımsız denetim raporu gerektirir; satın alma ekibi raporu istediğinde süreç durur. KVKK aydınlatma metninin olmaması, müşteri verisi işleyecek bir B2B tedarikçi için güveni ciddi şekilde düşürür.",
    solution: "SOC 2 ifadesini kaldır. KVKK aydınlatma metni, gizlilik politikası ve çerez sayfası yayınla. 'Veriniz nerede tutulur, kim erişir' başlıklı kısa bir güvenlik sayfası ekle.",
    priority: "P0",
    effort: "2–3 saat",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F05",
    product: "export",
    area: "Dönüşüm",
    problem: "Export Agent'ın ne şirket sitesinde ne demoda bir tanıtımı, fiyatı veya bir sonraki adımı var.",
    evidence: "Ana sitede Export Agent geçmiyor. Demo doğrudan panelle açılıyor; başlık yalnızca 'Callypso Export Agent', meta açıklama, iletişim veya görüşme butonu yok.",
    impact: "Loom videosundan demoya giden ihracat müdürü ürünü beğense bile nereye tıklayacağını bilmiyor; ilgi kayboluyor.",
    solution: "Demonun üstüne sabit bir şerit ekle: 'Bu demoyu kendi kataloğunuzla görün → 15 dk görüşme'. Ana siteye Export Agent bölümü ve ayrı bir açılış sayfası ekle.",
    priority: "P0",
    effort: "1–2 saat",
    status: "dogrulandi",
    source: "s-export",
  },
  {
    id: "F06",
    product: "sirket",
    area: "Konumlandırma",
    problem: "Odak yok: Site 4 mü 6 mı olduğu belirsiz ürünü (Voice Agent, Inboxly, Engage, GeoAdra; metinde 'altı platform', '6 ÜRÜN', 'dört platform') klinik, hukuk bürosu, restoran ve e-ticarete birlikte satıyor.",
    evidence: "Ana sayfa hero, ürünler bölümü ve SSS 'CallypsoTech hangi işletmelere uygundur?' yanıtı.",
    impact: "Ziyaretçi 5 saniyede 'bu firma benim sorunumu çözen uzman' diyemiyor. Tek kişilik bir girişimin 4–6 ürünü aynı anda sunması, alıcıda destek kapasitesi kaygısı yaratır.",
    solution: "Hero'yu iki öncelikli ürüne ayır: 'İhracatçılar için' ve 'E-ticaret markaları için'. Diğer ürünleri 'Laboratuvar / erken erişim' alanına taşı. Ürün sayısını her yerde aynı yaz.",
    priority: "P1",
    effort: "3 saat",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F07",
    product: "engage",
    area: "Konumlandırma",
    problem: "Mesaj uyumsuzluğu: Şirket sitesi Engage'i 'WhatsApp kampanyaları ön planda' diye tanıtıyor, ürün sayfası ise 'Email + SMS' diyor ve WhatsApp özelliği listelemiyor.",
    evidence: "Ana sayfa Engage kartı ve SSS ↔ Engage açılış sayfası başlığı ve özellik listesi. Google AI Özeti de Engage'i 'WhatsApp Business API' ürünü olarak anlatıyor.",
    impact: "WhatsApp için gelen müşteri üründe WhatsApp'ı göremeyince güveni kaybeder. Yapay zekâ yanıtları da yanlış bilgi yaymaya başlamış durumda (GEO sorunu).",
    solution: "Gerçek özellik setine göre tek bir tanım yaz ve her yerde aynısını kullan. WhatsApp yoksa 'yakında' diye etiketle.",
    priority: "P1",
    effort: "1 saat",
    status: "dogrulandi",
    source: "s-engage",
  },
  {
    id: "F08",
    product: "engage",
    area: "Konumlandırma",
    problem: "Türkiye pazarına uymayan ürün sunumu: fiyatlar dolar ($0/$49/Custom), örnek içerik İngilizce ('June Newsletter', '$14.8K'), karşılaştırma Mailchimp ile, entegrasyon yalnızca Shopify.",
    evidence: "Engage fiyat ve demo bölümleri. Altbilgideki 'callypsoengage.com' alan adı yanıt vermiyor (bağlantı kurulamadı).",
    impact: "Türk e-ticaret markası 'bu bana yönelik değil' diye düşünür. Türkiye'de yaygın ikas/Ticimax/IdeaSoft entegrasyonunun olmaması hedef kitleyi daraltır.",
    solution: "TL fiyat veya 'pilot teklifi' göster, örnekleri Türkçe ve TL yap, Türk rakiplerle (İYS, yerel SMS) kıyasla. Çalışmayan alan adını altbilgiden kaldır.",
    priority: "P1",
    effort: "2 saat",
    status: "dogrulandi",
    source: "s-engage",
  },
  {
    id: "F09",
    product: "engage",
    area: "Güven",
    problem: "SSS'de geliştiriciye yönelik şablon cevaplar: 'Teknoloji nedir? Next.js 16, React 19…', 'Yayına alabilir miyim? Standart bir Next.js uygulaması, Vercel'e gönder.' İYS için 'hazır olacak şekilde tasarlandı' (gelecek zaman).",
    evidence: "Engage SSS bölümü (açılmış hali Playwright ile okundu).",
    impact: "Alıcıya ürünün değil bir kod şablonunun satıldığı izlenimini verir.",
    solution: "Bu iki soruyu kaldır; yerine 'Kurulumu kim yapıyor?', 'Verilerim nerede?', 'İYS'ye nasıl bağlanıyor?' sorularını koy.",
    priority: "P1",
    effort: "30 dk",
    status: "dogrulandi",
    source: "s-engage",
  },
  {
    id: "F10",
    product: "engage",
    area: "Dönüşüm",
    problem: "'Satışa ulaş' (Scale planı) butonu satış ekibine değil kayıt sayfasına (/signup) gidiyor.",
    evidence: "Engage fiyat bölümü bağlantıları.",
    impact: "En büyük müşteri adayının iletişim isteği boşa düşüyor.",
    solution: "Takvim bağlantısına veya kısa bir talep formuna yönlendir.",
    priority: "P2",
    effort: "10 dk",
    status: "dogrulandi",
    source: "s-engage",
  },
  {
    id: "F11",
    product: "sirket",
    area: "Güven",
    problem: "Kim olduğunuz görünmüyor: kurucu adı/fotoğrafı, LinkedIn, telefon/WhatsApp, adres ve vergi bilgisi yok. Tüm butonlar kişisel bir cal.com bağlantısına gidiyor.",
    evidence: "Ana sayfadaki tüm CTA'lar kişisel bir cal.com takvimine yeni sekmede açılıyor; iletişim yalnızca support@ adresi.",
    impact: "Tek kişilik girişimde en güçlü güven aracı kurucunun kendisidir; şu an gizli. Takvim linki öncesinde 'kiminle görüşeceğim?' sorusu cevapsız kalıyor.",
    solution: "'Kurucu ile tanışın' bölümü: fotoğraf, 2 cümle hikâye, LinkedIn, 60 sn tanıtım videosu, WhatsApp butonu. Takvim butonunun yanına 'veya formu bırakın' seçeneği ekle.",
    priority: "P1",
    effort: "2 saat",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F12",
    product: "sirket",
    area: "SEO",
    problem: "Paylaşım görseli SVG ve logo 404.",
    evidence: "og:image = og-image.svg (image/svg+xml). JSON-LD logo = logo.png → 404.",
    impact: "LinkedIn, WhatsApp ve e-postada paylaşılan bağlantılar önizleme görseli olmadan görünür; cold e-posta ve LinkedIn paylaşımlarında profesyonellik düşer.",
    solution: "1200×630 PNG/JPG og-image ve gerçek logo.png yükle.",
    priority: "P1",
    effort: "30 dk",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F13",
    product: "sirket",
    area: "SEO",
    problem: "Site tek URL'den oluşuyor; sitemap yalnızca # bağlantıları listeliyor; ürün sayfası ve blog yok.",
    evidence: "sitemap.xml: /, /#products, /#geoadra, /#engage, /#faq. Google site: sorgusu tek sonuç döndürüyor.",
    impact: "Google # bölümlerini ayrı sayfa saymaz. 'ihracat teklif takibi', 'shopify sepet hatırlatma' gibi satın alma niyetli aramalarda görünme şansı yok.",
    solution: "Her öncelikli ürün için ayrı URL (/ihracat-ajani, /engage), sektör sayfaları ve haftada 1 rehber yazısı. Sitemap'i gerçek URL'lerle güncelle.",
    priority: "P1",
    effort: "1 gün (ilk 2 sayfa)",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F14",
    product: "sirket",
    area: "SEO",
    problem: "Marka araması zayıf ve isim çakışması var: 'callypsotech' aramasında site ilk 9 organik sonuçta yok; 'callypso' aramasında Domino's 'Callypso Pizza', callypso.net ve Kalipso öne çıkıyor; 'GeoAdra' aramasında GeoGebra çıkıyor.",
    evidence: "Apify Google SERP (TR, Türkçe), 2026-11-20.",
    impact: "Cold e-postayı alıp firmayı Google'da arayan alıcı sizi bulamıyor; bu 'gerçek bir şirket mi?' şüphesini artırır.",
    solution: "LinkedIn şirket sayfası, Instagram, dizin profilleri (saasmetre, F6S, Product Hunt) ve Organization 'sameAs' ile marka varlığı oluştur. E-postalarda her zaman tam ad 'CallypsoTech' kullan.",
    priority: "P1",
    effort: "3 saat",
    status: "dogrulandi",
  },
  {
    id: "F15",
    product: "export",
    area: "SEO",
    problem: "Ürünler vercel.app alt alan adlarında; robots.txt ve sitemap yok, Google'da indekslenmemiş, demo sayfalarında meta açıklama yok.",
    evidence: "robots.txt/sitemap.xml → 404 (her iki ürün). site: sorguları sonuç vermedi.",
    impact: "'…vercel.app' adresi alıcıya deneme projesi gibi görünür; arama ve AI motorları ürünleri şirkete bağlayamaz.",
    solution: "engage.callypsotech.com ve export.callypsotech.com alt alan adlarına taşı; demo panellerine noindex, açılış sayfalarına index ver.",
    priority: "P1",
    effort: "1 saat",
    status: "dogrulandi",
    source: "s-export",
  },
  {
    id: "F16",
    product: "sirket",
    area: "GEO",
    problem: "AI motorları için varlık (entity) sinyalleri eksik: llms.txt yok, Organization şemasında sameAs/founder yok, şirket tanımı sayfalar arasında değişiyor.",
    evidence: "llms.txt → 404. Başlık 'Voice Agent, Engage & GeoAdra', meta açıklama 'Inboxly' da sayıyor, Google'daki snippet 'ürün görseli' diyor.",
    impact: "Google AI Özeti CallypsoTech'i zaten anlatıyor ama Engage'i yanlış (WhatsApp) tanımlıyor. Tutarsız kaynak, ChatGPT/Perplexity'de yanlış veya hiç alıntılanmama demektir.",
    solution: "llms.txt (şirket, ürünler, hedef müşteri, fiyat yaklaşımı, iletişim), Organization + founder + sameAs şeması ve her yerde aynı 1 cümlelik tanım.",
    priority: "P1",
    effort: "1 saat",
    status: "dogrulandi",
    source: "s-main",
  },
  {
    id: "F17",
    product: "sirket",
    area: "GEO",
    problem: "Üçüncü taraf kaynak yok: değerlendirme, dizin kaydı, basın, vaka çalışması veya karşılaştırma içeriği bulunamadı.",
    evidence: "SERP taraması. Rakipler (Bilvio: 'Volza mı Bilvio mu?' gibi karşılaştırma yazıları; Segmentify ve Netmera: saasmetre incelemeleri) bu kaynaklarla AI yanıtlarına giriyor.",
    impact: "AI asistanları satın alma sorularına yanıt verirken başkalarının yazdığı kaynakları alıntılar; kaynak yoksa öneri de yok.",
    solution: "saasmetre ve benzeri TR SaaS dizinlerine kayıt; 'Klaviyo alternatifi Türkiye', 'Bilvio ile Export Agent birlikte nasıl kullanılır' gibi dürüst karşılaştırma yazıları; ilk pilot sonrası vaka çalışması.",
    priority: "P2",
    effort: "Sürekli (haftada 2 saat)",
    status: "cikarim",
  },
  {
    id: "F18",
    product: "eposta",
    area: "Teslim edilebilirlik",
    problem: "Ana alan adında Google Workspace DKIM kaydı bulunamadı; DMARC 'p=none' ve raporlar kişisel bir Gmail adresine gidiyor.",
    evidence: "MX: SMTP.GOOGLE.com; SPF: include:_spf.google.com ~all; google._domainkey → kayıt yok; resend._domainkey var (Resend). _dmarc: p=none.",
    impact: "'E-postalar gidiyor ama dönüş yok' sorununun bir kısmı spam klasörü olabilir. Cold e-posta ana alan adından atılıyorsa sitenin itibarı da riske girer.",
    solution: "Workspace yönetici panelinden DKIM'i aç (seçici farklı olabilir, önce kontrol et). Cold e-posta için ayrı bir alan adı al, SPF/DKIM/DMARC kur, 2 hafta ısındır, mail-tester ile 9/10 üstünü doğrula.",
    priority: "P0",
    effort: "1 saat + 2 hafta ısınma",
    status: "cikarim",
    source: "s-dns",
  },
  {
    id: "F19",
    product: "instagram",
    area: "Sosyal",
    problem: "@sepetrontgeni şirkete ve ürüne bağlı değil: 6 takipçi, 38 gönderi, bio'da bağlantı yok, işletme hesabı değil, Callypso/Engage hiç geçmiyor.",
    evidence: "Apify instagram-profile-scraper, 2026-11-20. Son 12 videoda 0–20 beğeni, 0 yorum.",
    impact: "Günlük içerik emeği müşteri kazanımına dönüşmüyor. 'Yorumlara REHBER yaz' çağrısı yorum almıyor ve otomatik DM kurgusu görünmüyor.",
    solution: "İşletme hesabına geç, bio'ya ücretsiz Sepet Röntgeni sayfası bağlantısı ve 'by CallypsoTech' ekle, REHBER yorumuna otomatik DM kur, her 3 gönderiden birini 'mağazada nasıl uygulanır' demosu yap.",
    priority: "P1",
    effort: "2 saat",
    status: "dogrulandi",
    source: "s-ig",
  },
  {
    id: "F20",
    product: "export",
    area: "Güven",
    problem: "Olumlu: Export Agent demosu dürüst ve sektöre özel. 'Demo modu', 'Gerçek yapay zekâ bağlı değildir', 'Örnek veri — gerçek araştırma yapılmaz' etiketleri; İnegöl mobilya senaryosu; gönderim öncesi insan onayı.",
    evidence: "Demo sayfaları /ajan, /talepler, /musteri-bulma, /onaylar. REA web-bundle analizi (ev_fcd07843…) demoda ağ API uç noktası bulmadı: demo tamamen tarayıcıda çalışan senaryo.",
    impact: "Bu dürüstlük ve onay akışı güven için en güçlü varlık. Ancak gerçek AI ve entegrasyon olmadığından pilotun yarı manuel (concierge) yürütülmesi gerekecek.",
    solution: "Onay akışını satışın merkezine koy ('AI sizin adınıza hiçbir şey göndermez'). Pilotu dürüstçe 'ekibimiz + ajan birlikte' olarak konumla.",
    priority: "P2",
    effort: "—",
    status: "dogrulandi",
    source: "s-export",
  },
  {
    id: "F21",
    product: "sirket",
    area: "Teknik",
    problem: "Olumlu: Hız ve mobil yapı iyi.",
    evidence: "Playwright: ana sayfa ~1,3 sn load, 8 istek, konsol hatası yok; üç sitede de 390 px mobilde yatay taşma yok. Engage ~1,1 sn, Export ~0,9 sn.",
    impact: "Teknik performans satışın önünde engel değil; öncelik içerik ve güven.",
    solution: "Mevcut yapıyı koru; görsel eklerken WebP ve lazy-load kullan.",
    priority: "P2",
    effort: "—",
    status: "dogrulandi",
    source: "s-main",
  },
];

// ---------------------------------------------------------------------------
// 3) Rakip istihbaratı
// ---------------------------------------------------------------------------
export type Competitor = {
  product: Product;
  name: string;
  url: string;
  region: string;
  target: string;
  value: string;
  trust: string;
  onboarding: string;
  pricing: string;
  pricingStatus: Status;
  content: string;
  gap: string;
};

export const COMPETITORS: Competitor[] = [
  {
    product: "engage",
    name: "Klaviyo",
    url: "https://www.klaviyo.com/pricing",
    region: "Global",
    target: "Shopify odaklı D2C markalar",
    value: "E-posta + SMS, veriye dayalı segment ve akışlar",
    trust: "Büyük marka logoları, Shopify ekosistemi, partner ajans ağı",
    onboarding: "Self-serve ücretsiz plan",
    pricing: "Ücretsiz: 250 aktif profil; E-posta planı ~20 $/ay'dan (3. taraf kaynak, aktif profil bazlı)",
    pricingStatus: "dogrulandi",
    content: "Benchmark raporları, akademi, şablon kütüphanesi",
    gap: "TL fiyat, İYS ve Türkçe destek yok; kurulum ajansa kalıyor",
  },
  {
    product: "engage",
    name: "Omnisend",
    url: "https://www.omnisend.com/pricing/",
    region: "Global",
    target: "Küçük-orta e-ticaret",
    value: "E-posta + SMS hepsi bir arada, kolay",
    trust: "Shopify uygulama puanları, vaka çalışmaları",
    onboarding: "Self-serve, ücretsiz plan",
    pricing: "Standard ~16 $/ay, Pro ~59 $/ay giriş seviyesi (3. taraf); kişi sayısına göre otomatik kademe (resmi yardım sayfası)",
    pricingStatus: "dogrulandi",
    content: "Yoğun SEO blogu ve karşılaştırma içerikleri",
    gap: "Yerel SMS sağlayıcıları ve İYS yok",
  },
  {
    product: "engage",
    name: "Insider One",
    url: "https://insiderone.com/",
    region: "Türkiye kökenli, global",
    target: "Kurumsal markalar (Turkcell, Garanti Emeklilik vb. vakalar)",
    value: "CDP + AI kişiselleştirme + WhatsApp/SMS/e-posta yolculukları",
    trust: "Kurumsal vaka çalışmaları, G2 değerlendirmeleri, analist raporları",
    onboarding: "Satış ekibi + demo",
    pricing: "Herkese açık fiyat bulunamadı",
    pricingStatus: "dogrulandi",
    content: "Raporlar, masterclass, vaka çalışmaları",
    gap: "KOBİ için pahalı ve karmaşık; küçük mağazaya kurulum hizmeti sunmuyor",
  },
  {
    product: "engage",
    name: "Segmentify",
    url: "https://segmentify.com/tr/",
    region: "Türkiye",
    target: "Yüksek trafikli, geniş katalog e-ticaret",
    value: "Ürün önerisi ve kişiselleştirme",
    trust: "IdeaSoft entegrasyonu, '20.000+ site' iddiası (IdeaSoft sayfası), Insider karşılaştırma sayfası",
    onboarding: "Teklif + entegrasyon",
    pricing: "Teklif bazlı (saasmetre incelemesi)",
    pricingStatus: "dogrulandi",
    content: "Rakip karşılaştırma sayfaları, saasmetre gibi dizin incelemeleri",
    gap: "Küçük Shopify markası için fazla; retention akış kurulum hizmeti değil",
  },
  {
    product: "engage",
    name: "wava",
    url: "https://wavacarts.com/",
    region: "Global (Shopify)",
    target: "Shopify mağazaları, WhatsApp sepet kurtarma ve kapıda ödeme onayı",
    value: "Kendi numaranızdan WhatsApp sepet hatırlatma + AI asistan",
    trust: "Shopify'da 4.8 (70 değerlendirme), 'Built for Shopify', Meta Tech Provider",
    onboarding: "7 gün ücretsiz deneme, Shopify uygulaması",
    pricing: "Ücretsiz plan; ücretli plan 17,99 $ / 30 gün (resmi site)",
    pricingStatus: "dogrulandi",
    content: "Uygulama mağazası yorumları",
    gap: "Sadece WhatsApp; e-posta/SMS segment ve gelir atfı yok",
  },
  {
    product: "export",
    name: "Bilvio",
    url: "https://bilvio.com/tr/",
    region: "Türkiye",
    target: "İhracatçı firmalar, dış ticaret ekipleri",
    value: "Gümrük/konşimento verisiyle ithalatçı bulma ve pazar analizi",
    trust: "Kendi GTİP kodunuzla canlı veri demosu, çok dilli site, Chrome eklentisi",
    onboarding: "Online demo toplantısı",
    pricing: "Herkese açık fiyat bulunamadı",
    pricingStatus: "dogrulandi",
    content: "Güçlü SEO: 'Volza mı Bilvio mu?', 'TradeData.pro mu Bilvio mu?', 'İhracatta fiyat teklifi nasıl hazırlanır' yazıları",
    gap: "Müşteriyi buluyor ama gelen talebe yanıt, teklif ve takip operasyonunu çözmüyor",
  },
  {
    product: "export",
    name: "Export Miners",
    url: "https://www.exportminers.com/",
    region: "Türkiye",
    target: "İhracatını büyütmek isteyen üreticiler",
    value: "İhracat ajansı: pazar istihbaratı + müşteri tespiti hizmeti",
    trust: "'2025'te 15,2 M USD ihracat hacmi', referanslar, kalite belgeleri, KVKK sayfaları, telefon",
    onboarding: "Strateji ön görüşmesi, firmaya özel teklif",
    pricing: "Firmaya özel teklif (SSS)",
    pricingStatus: "dogrulandi",
    content: "Instagram, LinkedIn, blog, SSS",
    gap: "Hizmet ajansı; firmanın kendi ekibine kalıcı bir sistem bırakmıyor",
  },
  {
    product: "export",
    name: "Volza",
    url: "https://volza.com/pricing/",
    region: "Global",
    target: "İthalat/ihracat verisi arayan firmalar",
    value: "Ülke bazlı gümrük verisi ve alıcı listeleri",
    trust: "Ülke kapsamı, deneme",
    onboarding: "Deneme + satış görüşmesi",
    pricing: "Startup/SME/Corporate kademeleri; tutarlar kaynaklar arasında çelişkili, resmi sayfada net değil",
    pricingStatus: "cikarim",
    content: "Veri ağırlıklı SEO sayfaları",
    gap: "Sadece veri; Türkçe operasyon yok",
  },
  {
    product: "export",
    name: "Apollo.io",
    url: "https://www.apollo.io/pricing",
    region: "Global",
    target: "B2B satış ekipleri",
    value: "Kişi veritabanı + e-posta sekansları",
    trust: "Büyük kullanıcı tabanı, G2 değerlendirmeleri",
    onboarding: "Self-serve ücretsiz plan",
    pricing: "Basic 49 $, Professional 79 $ / kullanıcı / ay, yıllık (3. taraf kaynaklar)",
    pricingStatus: "dogrulandi",
    content: "Akademi, şablonlar",
    gap: "İhracata özel teklif/proforma, Incoterms, katalog fiyatı ve Türkçe arayüz yok",
  },
];

export const COMPETITOR_ANSWERS = [
  {
    q: "Rakipler müşteriyi nasıl ikna ediyor?",
    a: "Kanıtla: canlı veriyle kişisel demo (Bilvio), sayısal sonuç ve referans (Export Miners), uygulama mağazası puanı (wava), ücretsiz plan (Klaviyo, Omnisend). Hiçbiri kanıtsız puan kullanmıyor.",
  },
  {
    q: "Callypso hangi dar nişte daha hızlı satabilir?",
    a: "Export Agent ile mobilya (İnegöl/Bursa/Kayseri) üreticisi ihracatçılar: talep → teklif → takip operasyonu. Veri platformları ve ajanslar bu adımı çözmüyor, demo zaten bu sektörde kurulu.",
  },
  {
    q: "Hangi özellikler satın alma kararını gerçekten etkiler?",
    a: "Export: kendi kataloğundan fiyatlı teklif taslağı, alıcının dilinde yanıt, yanıtsız teklif hatırlatması, gönderim öncesi onay. Engage: kendi mağaza verisiyle kaçan gelir tahmini, İYS uyumu, TL fiyat, kurulumun sizin tarafınızdan yapılması.",
  },
  {
    q: "Hangi katma değerli özellikler eklenmeli?",
    a: "Export: Gmail/Outlook gelen kutusu bağlantısı, proforma PDF, Incoterms hesaplayıcı, fuar sonrası takip sekansı. Engage: ikas/Ticimax entegrasyonu, WhatsApp (Meta onaylı) kanalı, Sepet Röntgeni raporu.",
  },
  {
    q: "Ölçülebilir, farklı teklif ne olmalı?",
    a: "Export: '14 günde yanıtsız tekliflerinizin tamamı takip edilmiş ve yeni taleplere ilk yanıt süreniz ölçülmüş olacak; olmazsa ücret yok.' Engage: '48 saatte ücretsiz Sepet Röntgeni; 14 günde 1 akış canlı ve geliri panelde.'",
  },
];

// Öneri puanlama: müşteri değeri (1-5), geliştirme maliyeti (1=düşük, 5=yüksek), satış etkisi (1-5)
export const OPPORTUNITIES = [
  { id: "O1", product: "export" as Product, title: "Demo üstüne ‘kendi kataloğunla gör’ CTA şeridi", value: 4, cost: 1, impact: 5 },
  { id: "O2", product: "export" as Product, title: "Export Agent açılış sayfası (TR + EN)", value: 4, cost: 2, impact: 5 },
  { id: "O3", product: "export" as Product, title: "Yanıtsız teklif takip sekansı (onaylı gönderim)", value: 5, cost: 3, impact: 5 },
  { id: "O4", product: "export" as Product, title: "Gmail/Outlook gelen kutusu bağlantısı", value: 5, cost: 4, impact: 4 },
  { id: "O5", product: "export" as Product, title: "Proforma/teklif PDF üretici", value: 4, cost: 2, impact: 4 },
  { id: "O6", product: "export" as Product, title: "Fuar sonrası takip paketi (ör. ORGATEC, INTERMOB)", value: 4, cost: 2, impact: 4 },
  { id: "O7", product: "engage" as Product, title: "Ücretsiz Sepet Röntgeni rapor sayfası", value: 4, cost: 2, impact: 5 },
  { id: "O8", product: "engage" as Product, title: "ikas entegrasyonu", value: 5, cost: 4, impact: 4 },
  { id: "O9", product: "engage" as Product, title: "TL fiyat + Türkçe demo verisi", value: 3, cost: 1, impact: 4 },
  { id: "O10", product: "engage" as Product, title: "WhatsApp kanalı (Meta onaylı)", value: 4, cost: 5, impact: 3 },
  { id: "O11", product: "sirket" as Product, title: "Kurucu bölümü + gerçek iletişim bilgileri", value: 3, cost: 1, impact: 5 },
  { id: "O12", product: "sirket" as Product, title: "ROI hesaplayıcı (yanıt süresi / kaçan teklif)", value: 4, cost: 2, impact: 3 },
];

// ---------------------------------------------------------------------------
// 4) Satış ve güven sistemi
// ---------------------------------------------------------------------------
export const FUNNEL = [
  {
    stage: "Cold Email",
    trust: "Tam ad + unvan + şirket, alıcının sektöründen tek somut gözlem, imzada çalışan www bağlantısı ve LinkedIn",
    material: "3 adımlı sekans (gün 0/3/8). İlk e-posta 80 kelimeyi geçmesin, bağlantı yok, tek soru",
    cta: "‘Size 2 dakikalık, firmanıza özel bir video göndermemi ister misiniz?’",
    metric: "Teslim ≥ %95, olumlu yanıt ≥ %3",
    automation: "Ayrı cold alan adı + sekans aracı; yanıtlar CRM'e otomatik etiketlensin",
  },
  {
    stage: "Reply",
    trust: "24 saat içinde kişisel yanıt; soruya doğrudan cevap",
    material: "Yanıt şablonları: ilgili / fiyat soran / ‘şimdi değil’",
    cta: "Loom için 2 bilgi iste: ürün grubu ve hedef pazar",
    metric: "Yanıt → Loom izlenme ≥ %60",
    automation: "Yanıt sınıflandırma (AI) ve hatırlatma görevi",
  },
  {
    stage: "Loom",
    trust: "Yüzünüz görünsün; alıcının kendi sitesi/ürünü ekranda; demo verisinin ‘örnek’ olduğu açık söylensin",
    material: "90–120 sn: 1) sizin gördüğüm sorununuz 2) demoda çözüm 3) pilot teklifi",
    cta: "Videonun sonunda tek buton: 15 dk görüşme",
    metric: "İzlenme ≥ %70, izleyen → toplantı ≥ %30",
    automation: "Loom izlenince otomatik takip e-postası",
  },
  {
    stage: "Demo",
    trust: "Demo sayfasında ‘kendi kataloğunla gör’ şeridi; dürüst ‘demo modu’ etiketi",
    material: "Firmaya özel demo verisi (3 ürünü ve 1 örnek talebi)",
    cta: "Görüşme butonu demonun her sayfasında",
    metric: "Demo ziyareti → toplantı ≥ %25",
    automation: "Demo ziyaretini (UTM) CRM'e yaz",
  },
  {
    stage: "Meeting",
    trust: "Gündem önceden e-postayla; 5 soruluk keşif; rakamlar alıcıdan",
    material: "Keşif soru listesi + ROI hesaplayıcı (alıcının kendi sayılarıyla)",
    cta: "Toplantı içinde pilot başlangıç tarihi seçtirmek",
    metric: "Toplantı → pilot teklifi ≥ %50",
    automation: "Toplantı notlarından otomatik teklif taslağı",
  },
  {
    stage: "Proposal",
    trust: "1 sayfa: sorun, kapsam, başarı ölçütü, süre, fiyat, ‘ölçüt tutmazsa ne olur’",
    material: "Pilot teklif şablonu (TL), KVKK/veri işleme eki",
    cta: "‘Pazartesi başlayalım mı?’ + e-imza",
    metric: "Teklif → kabul ≥ %40",
    automation: "Teklif açıldığında bildirim",
  },
  {
    stage: "Follow-up",
    trust: "Her takipte yeni değer: mini analiz, sektör verisi, demo güncellemesi",
    material: "Gün 2 / 5 / 10 takip şablonları",
    cta: "Evet/hayır sorusu: ‘Bu ay mı, ocakta mı?’",
    metric: "Takip sonrası yanıt ≥ %50",
    automation: "Sekans aracı; yanıt gelince durur",
  },
  {
    stage: "Closing",
    trust: "Risk tersine çevirme: ölçüt tutmazsa ücret iadesi veya ücretsiz uzatma",
    material: "Sözleşme + veri işleme sözleşmesi",
    cta: "Başlangıç toplantısı takvim daveti",
    metric: "Pilot → ücretli abonelik ≥ %50",
    automation: "Fatura ve hoş geldin e-postası",
  },
  {
    stage: "Onboarding",
    trust: "İlk 48 saatte görünür sonuç; haftalık 15 dk rapor",
    material: "Kurulum kontrol listesi, haftalık rapor şablonu",
    cta: "Hafta 2 sonunda değerlendirme toplantısı",
    metric: "İlk değer süresi ≤ 3 gün",
    automation: "Haftalık rapor e-postası",
  },
  {
    stage: "Reference",
    trust: "Sadece müşterinin onayladığı, gerçek rakamlı vaka",
    material: "Vaka çalışması şablonu, LinkedIn paylaşım taslağı",
    cta: "Referans karşılığında 1 ay indirim veya ek özellik",
    metric: "Her 2 pilottan 1 kullanılabilir referans",
    automation: "Pilot bitiminde referans isteği",
  },
];

export const SALES_ASSETS = [
  { name: "Kişiselleştirilmiş Loom", verdict: "Devam et, ama yalnızca olumlu yanıttan sonra; 2 dk sınırı, alıcının sitesi ekranda.", priority: "P0" as Priority },
  { name: "Ürün bazlı açılış sayfası", verdict: "Export Agent için hemen; Engage için ‘Sepet Röntgeni’ sayfası.", priority: "P0" as Priority },
  { name: "14 günlük pilot", verdict: "Ana teklif. Başarı ölçütü yazılı, kapsam dar (1 ürün grubu / 1 akış).", priority: "P0" as Priority },
  { name: "Ücretsiz analiz/audit", verdict: "Engage'in giriş kapısı (Sepet Röntgeni). Export için ‘yanıtsız teklif analizi’.", priority: "P1" as Priority },
  { name: "ROI hesaplayıcı", verdict: "Toplantıda alıcının kendi sayılarıyla kullan; sitede ikinci aşama.", priority: "P2" as Priority },
  { name: "Örnek vaka analizi", verdict: "Gerçek müşteri yokken ‘Örnek senaryo’ etiketiyle demo şirketi (Atlas Office Furniture) üzerinden anlat.", priority: "P1" as Priority },
  { name: "Demo rezervasyon", verdict: "cal.com kalsın; yanına form ve WhatsApp ekle, takvimi şirket alan adına bağla.", priority: "P1" as Priority },
  { name: "Referans ve sosyal kanıt", verdict: "Sahte referans yok. İlk 3 pilot indirimli ‘kurucu müşteri’ programı ile gerçek referans üret.", priority: "P0" as Priority },
  { name: "Teklif şablonu", verdict: "1 sayfa, TL, başarı ölçütlü. Uygulamada taslağı var.", priority: "P1" as Priority },
  { name: "Follow-up sekansları", verdict: "Gün 2/5/10; her biri yeni değer içersin.", priority: "P1" as Priority },
];

// ---------------------------------------------------------------------------
// 5) Inbound
// ---------------------------------------------------------------------------
export const INBOUND = [
  {
    product: "engage" as Product,
    channel: "Instagram @sepetrontgeni",
    actions: [
      "İşletme hesabına geç; bio: ‘E-ticarette müşteriyi geri getiren taktikler · Ücretsiz Sepet Röntgeni ↓ · by CallypsoTech’",
      "REHBER yorumuna otomatik DM (PDF + analiz formu)",
      "Haftalık ritim: 3 vaka videosu, 1 carousel (‘mağazanda 5 dakikada uygula’), 1 Engage ekran demosu",
      "Reels konuları: terk sepet mesajı örnekleri, hoş geldin e-postası öncesi/sonrası, İYS nedir, ‘indirim bağımlılığı’",
    ],
    contribution: "Orta — 60–90 günde ilk inbound başvurular (çıkarım)",
    workload: "Haftada 4–5 saat",
  },
  {
    product: "engage" as Product,
    channel: "SEO + blog",
    actions: [
      "/engage ve /sepet-rontgeni sayfaları",
      "Yazılar: ‘Shopify sepet hatırlatma kurulumu’, ‘Klaviyo alternatifi Türkiye’, ‘İYS uyumlu SMS nasıl gönderilir’",
      "Her yazının sonunda ücretsiz analiz CTA'sı",
    ],
    contribution: "Düşük-orta, 3–6 ayda birikir",
    workload: "Haftada 2–3 saat",
  },
  {
    product: "engage" as Product,
    channel: "E-posta nurture",
    actions: ["Analiz isteyenlere 5 e-postalık seri: rapor → 1 hızlı kazanım → vaka (örnek etiketli) → pilot teklifi → son çağrı"],
    contribution: "Yüksek (analiz → pilot dönüşümü)",
    workload: "Bir kez 3 saat",
  },
  {
    product: "export" as Product,
    channel: "LinkedIn (kurucu profili)",
    actions: [
      "Haftada 3 paylaşım: ‘yanıtsız teklif’ verisi, Incoterms ipucu, demo ekran kaydı",
      "Hedef: ihracat müdürleri, İnegöl/Bursa mobilya firmaları; günde 10 bağlantı isteği + kişisel not",
      "Ayda 1 ‘ihracat teklif takibi’ mini rehberi (PDF) ile lead toplama",
    ],
    contribution: "Yüksek — outbound'u ısıtır, isminiz tanınır",
    workload: "Haftada 3 saat",
  },
  {
    product: "export" as Product,
    channel: "Sektörel içerik + SEO",
    actions: [
      "/ihracat-ajani sayfası ve ‘İhracatta teklif takibi nasıl yapılır’ rehberi",
      "‘Bilvio/Volza ile bulduğunuz alıcıya ilk 48 saatte ne yazmalı’ — rakibi tamamlayan konumlandırma",
      "Sektör sayfaları: mobilya, tekstil, makine",
    ],
    contribution: "Orta, GEO için kritik (AI'ların alıntılayacağı kaynak)",
    workload: "Haftada 2 saat",
  },
  {
    product: "export" as Product,
    channel: "Ücretsiz süreç analizi",
    actions: ["30 dk: son 20 teklifin yanıt süresi ve takip durumu birlikte çıkarılır; sonuç 1 sayfa rapor"],
    contribution: "Çok yüksek — doğrudan pilot girişi",
    workload: "Analiz başına 1 saat",
  },
  {
    product: "export" as Product,
    channel: "Outbound + inbound kombinasyonu",
    actions: ["Önce LinkedIn bağlantı + 1 beğeni/yorum, 2 gün sonra e-posta, Loom yalnız olumlu yanıta; içerik linki takip e-postasında"],
    contribution: "Yüksek",
    workload: "Günde 45 dk",
  },
];

export const SEO_GEO_ACTIONS = [
  { id: "G1", title: "www'suz alan adını Vercel'e bağla, www'ye 301 yönlendir", type: "SEO", priority: "P0" as Priority },
  { id: "G2", title: "Canonical, og:url, sitemap ve JSON-LD'yi tek adrese (www) eşitle", type: "SEO", priority: "P0" as Priority },
  { id: "G3", title: "PNG og-image (1200×630) ve logo.png yükle", type: "SEO", priority: "P1" as Priority },
  { id: "G4", title: "Ürünler için gerçek URL'ler: /ihracat-ajani, /engage, /sepet-rontgeni", type: "SEO", priority: "P1" as Priority },
  { id: "G5", title: "H1'i anahtar kelimeli yap: ‘İhracatçılar ve e-ticaret markaları için AI satış otomasyonu’", type: "SEO", priority: "P1" as Priority },
  { id: "G6", title: "Google Search Console'a www mülkü + sitemap gönder", type: "SEO", priority: "P1" as Priority },
  { id: "G7", title: "llms.txt yayınla (şirket, ürün, hedef müşteri, iletişim, fiyat yaklaşımı)", type: "GEO", priority: "P1" as Priority },
  { id: "G8", title: "Organization şemasına founder, sameAs (LinkedIn, Instagram), adres ekle", type: "GEO", priority: "P1" as Priority },
  { id: "G9", title: "Tek cümlelik şirket ve ürün tanımını tüm sayfa, profil ve dizinlerde aynı yaz", type: "GEO", priority: "P1" as Priority },
  { id: "G10", title: "Engage'in WhatsApp tanımını düzelt (AI özetlerindeki yanlış bilgi kaynağı)", type: "GEO", priority: "P1" as Priority },
  { id: "G11", title: "saasmetre, F6S, Product Hunt, LinkedIn şirket sayfası kayıtları", type: "GEO", priority: "P2" as Priority },
  { id: "G12", title: "Soru-cevap formatında rehberler (AI motorlarının alıntıladığı format) + FAQPage şeması", type: "GEO", priority: "P2" as Priority },
  { id: "G13", title: "Ayda bir ChatGPT, Gemini, Perplexity'de 10 hedef soruyu sor; markanın geçip geçmediğini kaydet", type: "GEO", priority: "P2" as Priority },
  { id: "G14", title: "Demo panellerine noindex, açılış sayfalarına index ver", type: "SEO", priority: "P2" as Priority },
];

// ---------------------------------------------------------------------------
// 6) Güven & CRO kontrol listesi
// ---------------------------------------------------------------------------
export const TRUST_CHECKLIST: { id: string; group: string; text: string; product: Product }[] = [
  { id: "T1", group: "Kimlik", text: "Kurucu adı, fotoğrafı ve LinkedIn bağlantısı sitede", product: "sirket" },
  { id: "T2", group: "Kimlik", text: "Telefon/WhatsApp ve şehir/adres bilgisi görünür", product: "sirket" },
  { id: "T3", group: "Kimlik", text: "LinkedIn şirket sayfası açık ve siteye bağlı", product: "sirket" },
  { id: "T4", group: "Kanıt", text: "Kanıtsız puan, kullanıcı sayısı ve yüzdeler kaldırıldı", product: "sirket" },
  { id: "T5", group: "Kanıt", text: "Engage'deki örnek yorumlar kaldırıldı veya ‘örnek’ etiketlendi", product: "engage" },
  { id: "T6", group: "Kanıt", text: "Demo verileri her yerde ‘örnek’ olarak etiketli", product: "export" },
  { id: "T7", group: "Kanıt", text: "Entegrasyon logoları yalnızca gerçekten çalışan entegrasyonları gösteriyor", product: "sirket" },
  { id: "T8", group: "Yasal", text: "KVKK aydınlatma metni yayında", product: "sirket" },
  { id: "T9", group: "Yasal", text: "Gizlilik ve çerez politikası yayında", product: "sirket" },
  { id: "T10", group: "Yasal", text: "SOC 2 gibi belgelenemeyen uyumluluk iddiaları kaldırıldı", product: "sirket" },
  { id: "T11", group: "Teknik", text: "callypsotech.com ve www ikisi de HTTPS ile açılıyor", product: "sirket" },
  { id: "T12", group: "Teknik", text: "Ürünler şirket alt alan adında (vercel.app değil)", product: "sirket" },
  { id: "T13", group: "Teknik", text: "Paylaşım önizlemesi (PNG og-image) LinkedIn ve WhatsApp'ta görünüyor", product: "sirket" },
  { id: "T14", group: "Teknik", text: "Cold e-posta alan adında SPF + DKIM + DMARC aktif, mail-tester ≥ 9/10", product: "sirket" },
  { id: "T15", group: "Dönüşüm", text: "Export Agent demosunun her sayfasında görüşme CTA'sı", product: "export" },
  { id: "T16", group: "Dönüşüm", text: "Engage ‘Satışa ulaş’ butonu takvim/forma gidiyor", product: "engage" },
  { id: "T17", group: "Dönüşüm", text: "Takvim butonunun yanında form seçeneği", product: "sirket" },
  { id: "T18", group: "Dönüşüm", text: "Pilot teklifi ve başarı ölçütü sitede yazılı", product: "sirket" },
  { id: "T19", group: "Mesaj", text: "Ürün sayısı ve tanımları tüm sayfalarda aynı", product: "sirket" },
  { id: "T20", group: "Mesaj", text: "Engage TL fiyat / Türkçe örneklerle sunuluyor", product: "engage" },
];

// ---------------------------------------------------------------------------
// 7) 5 iş günlük plan (23–27 Kasım 2026, hafta sonu yok)
// ---------------------------------------------------------------------------
export type Task = {
  id: string;
  day: number;
  date: string;
  product: Product;
  title: string;
  why: string;
  how: string[];
  tools: string;
  duration: string;
  output: string;
  done: string;
  impact: number; // 1-5
};

export const PLAN: Task[] = [
  {
    id: "D1-1",
    day: 1,
    date: "2026-11-23",
    product: "sirket",
    title: "Kırık alan adını düzelt",
    why: "www'suz adres park sayfası ve güvenlik hatası gösteriyor; gönderilen her e-postadaki güveni zedeleyebilir.",
    how: [
      "Vercel → proje → Settings → Domains → callypsotech.com ekle, www'ye yönlendir",
      "Hostinger DNS → @ için A kaydını Vercel'in gösterdiği değerle değiştir; eski 2.57.91.91 kaydını sil",
      "Kod: canonical, og:url, sitemap ve JSON-LD adreslerini https://www.callypsotech.com yap",
      "Telefon ve bilgisayardan https://callypsotech.com aç, yönlendirmeyi kontrol et",
    ],
    tools: "Vercel, Hostinger DNS paneli",
    duration: "45 dk (DNS yayılması birkaç saat)",
    output: "İki adres de HTTPS ile siteyi açıyor",
    done: "https://callypsotech.com tarayıcıda www'ye yönleniyor, hata yok",
    impact: 5,
  },
  {
    id: "D1-2",
    day: 1,
    date: "2026-11-23",
    product: "sirket",
    title: "Kanıtsız iddiaları ve sahte izlenim veren yorumları kaldır",
    why: "En hızlı güven kazancı: alıcının kontrol edip çelişki bulabileceği her şeyi silmek.",
    how: [
      "Ana sayfa: ‘50+ işletme’, ‘4.9/5’, avatarlar, %94/%60/%98, SOC 2 ifadesi, doğrulanamayan entegrasyon logoları",
      "Engage: 6 yorum, marka logoları, ‘2.400+ marka’ → kaldır veya ‘örnek senaryo’ etiketi",
      "Yerine: ‘İlk 5 pilot müşterimizi arıyoruz — kurucu müşteri avantajları’ kutusu",
    ],
    tools: "Site kodu (Next.js), Vercel",
    duration: "1,5 saat",
    output: "Kanıtsız iddia içermeyen ana sayfa ve Engage sayfası",
    done: "Güven kontrol listesinde T4, T5, T7, T10 işaretli",
    impact: 5,
  },
  {
    id: "D2-1",
    day: 2,
    date: "2026-11-24",
    product: "sirket",
    title: "E-posta teslim edilebilirliğini test et ve düzelt",
    why: "Dönüş alamamanın sebebi spam klasörü olabilir; önce kanalın çalıştığını kanıtla.",
    how: [
      "mail-tester.com'a mevcut cold e-postayı gönder, skoru not et",
      "Google Workspace Admin → Gmail → Kimlik doğrulama → DKIM oluştur ve DNS'e ekle",
      "Cold e-posta için ayrı alan adı (ör. callypsotech.co) al; SPF/DKIM/DMARC kur, ısınma başlat",
      "DMARC raporlarını şirket adresine yönlendir",
    ],
    tools: "mail-tester, Google Workspace Admin, Hostinger DNS",
    duration: "1,5 saat",
    output: "Teslim skoru ve DKIM kaydı",
    done: "mail-tester ≥ 9/10 ve ‘DKIM pass’",
    impact: 5,
  },
  {
    id: "D2-2",
    day: 2,
    date: "2026-11-24",
    product: "export",
    title: "Export Agent demosuna CTA şeridi ve kısa tanıtım ekle",
    why: "Loom'dan demoya gelen alıcının bir sonraki adımı yok.",
    how: [
      "Demo üst şeridi: ‘Bu demoyu kendi ürün kataloğunuzla görün → 15 dk görüşme’",
      "Sayfa başlığı ve meta açıklama: ‘İhracatçılar için AI teklif ve takip asistanı’",
      "Ana siteye Export Agent kartı ekle",
    ],
    tools: "Export Agent kodu, Vercel",
    duration: "1,5 saat",
    output: "Her demo sayfasında görüşme butonu",
    done: "Demo sayfalarından görüşme linkine tıklanabiliyor (T15)",
    impact: 5,
  },
  {
    id: "D3-1",
    day: 3,
    date: "2026-11-25",
    product: "sirket",
    title: "Ana sayfayı iki ürüne odakla + kurucu ve yasal sayfalar",
    why: "5 saniyede ‘kime ne satıyor’ anlaşılmalı; kim olduğunuz görünmeli.",
    how: [
      "Hero: ‘İhracatçılar için teklif asistanı’ ve ‘E-ticaret için geri kazanım’ iki kart",
      "Diğer ürünler ‘erken erişim’ bölümüne",
      "‘Kurucu ile tanışın’: fotoğraf, 2 cümle, LinkedIn, WhatsApp",
      "KVKK aydınlatma, gizlilik, çerez sayfaları (şablonu bir hukukçuya kontrol ettir)",
    ],
    tools: "Site kodu, KVKK metin şablonu",
    duration: "3 saat",
    output: "Odaklı ana sayfa + 3 yasal sayfa",
    done: "T1, T2, T8, T9, T19 işaretli",
    impact: 4,
  },
  {
    id: "D4-1",
    day: 4,
    date: "2026-11-26",
    product: "export",
    title: "Export Agent outbound paketi: liste + sekans + pilot teklifi",
    why: "Doğrudan satışa giden iş: doğru kişiye doğru teklif.",
    how: [
      "50 firmalık liste: İnegöl/Bursa/Kayseri mobilya ihracatçıları (firma sitesi, LinkedIn, ihracatçı birlikleri listeleri, fuar katılımcıları)",
      "Her firma için 1 kişisel gözlem notu (ör. ‘sitenizde İngilizce teklif formu yok’)",
      "3 adımlı e-posta sekansı ve Loom senaryosu (uygulamadaki şablon)",
      "1 sayfa pilot teklifi: kapsam, ölçüt, süre, ücret",
    ],
    tools: "Google Sheets, LinkedIn, sekans aracı",
    duration: "4 saat",
    output: "50 kişilik liste + hazır sekans + pilot teklif PDF",
    done: "Listede 50 satır, her satırda karar verici ve gözlem notu",
    impact: 5,
  },
  {
    id: "D5-1",
    day: 5,
    date: "2026-11-27",
    product: "export",
    title: "İlk 20 e-postayı gönder + LinkedIn ısıtma",
    why: "Plan ölçülmeden işe yaramaz; ilk veri bu hafta toplanmalı.",
    how: [
      "Isınan alan adıyla günde en fazla 20 e-posta (alan adı yeniyse önce ana adresten elle 10 kişisel e-posta)",
      "Aynı 20 kişiye LinkedIn bağlantı isteği + not",
      "Dashboard'da gönderim, yanıt ve olumlu yanıt sayısını kaydet",
    ],
    tools: "Gmail/sekans aracı, LinkedIn",
    duration: "2 saat",
    output: "20 gönderim + metrik kaydı",
    done: "Gönderilen 20 e-posta ve 20 bağlantı isteği kayıtlı",
    impact: 4,
  },
  {
    id: "D5-2",
    day: 5,
    date: "2026-11-27",
    product: "engage",
    title: "Instagram'ı Engage'e bağla + GEO temel kurulumu",
    why: "Her gün üretilen içerik şu an müşteriye dönüşmüyor; AI motorları sizi tanımlayamıyor.",
    how: [
      "@sepetrontgeni işletme hesabı, bio + bağlantı (Sepet Röntgeni formu), ‘by CallypsoTech’",
      "REHBER yorumuna otomatik DM kur",
      "llms.txt ve Organization sameAs ekle; Engage tanımını düzelt",
    ],
    tools: "Instagram, ManyChat benzeri DM aracı, site kodu",
    duration: "2 saat",
    output: "Bağlantılı profil + llms.txt yayında",
    done: "Bio'daki bağlantı çalışıyor; /llms.txt 200 dönüyor",
    impact: 3,
  },
];

export const ROADMAP = [
  {
    window: "30 gün",
    goal: "İlk 2 ücretli pilot (Export Agent)",
    items: [
      "Export Agent açılış sayfası (TR + EN) ve /ihracat-ajani URL'si",
      "Ürünleri şirket alt alan adlarına taşı",
      "Haftada 100 hedefli e-posta + LinkedIn ritmi",
      "Engage Sepet Röntgeni sayfası ve 5 e-postalık nurture",
      "Engage TL fiyat ve Türkçe demo verisi",
      "İhracat Teklif Röntgeni sayfası (8 soruluk test + rapor e-postası)",
      "Form altyapısı: Next.js formu + Supabase + Resend, KVKK metinleriyle",
      "Demoları demo.callypsotech.com'a taşı, vercel.app adreslerini yönlendir",
      "Profesyonel görünüm: ikon seti, favicon/logo, ekran görüntüleri, tek ana CTA",
      "Google Search Console ve aylık GEO soru takibi",
    ],
  },
  {
    window: "60 gün",
    goal: "İlk gerçek vaka çalışması",
    items: [
      "Pilot sonuçlarıyla vaka çalışması (müşteri onaylı)",
      "Gmail/Outlook gelen kutusu bağlantısı (Export Agent)",
      "Proforma/teklif PDF üretici",
      "saasmetre ve dizin kayıtları, 4 SEO rehberi",
      "ROI hesaplayıcı sayfası",
    ],
  },
  {
    window: "90 gün",
    goal: "Tekrarlanabilir satış sistemi",
    items: [
      "İkinci niş (tekstil veya makine ihracatçıları)",
      "ikas entegrasyonu (Engage)",
      "Fuar sonrası takip paketi",
      "Referans programı ve ortaklık (ihracatçı birlikleri, danışmanlar)",
      "Fiyatlandırmayı 5+ satış verisiyle güncelle",
    ],
  },
];

// Satış materyali şablonları (örnek metinler)
export const TEMPLATES = [
  {
    id: "TPL1",
    title: "Cold e-posta 1 — Export Agent",
    product: "export" as Product,
    body:
      "Konu: {Firma} teklif takibi\n\nMerhaba {Ad} Bey/Hanım,\n\n{Firma}'nın {pazar} pazarına {ürün} ihraç ettiğini gördüm. Mobilya üreticileriyle konuştuğumda en sık duyduğum sorun, gönderilen tekliflerin bir kısmının takipsiz kalması.\n\nGelen yabancı taleplere aynı gün teklif taslağı hazırlayan ve yanıtsız teklifleri hatırlatan bir asistan geliştirdik; hiçbir mesaj sizin onayınız olmadan gitmiyor.\n\nFirmanıza özel 2 dakikalık bir video göndermemi ister misiniz?\n\n{Adınız Soyadınız}\nCallypsoTech · www.callypsotech.com",
  },
  {
    id: "TPL2",
    title: "Takip e-postası (gün 3)",
    product: "export" as Product,
    body:
      "Merhaba {Ad} Bey/Hanım,\n\nKısa bir ek: İhracat tekliflerinde ilk 48 saatte dönüş yapılan taleplerin daha sıcak kaldığını sahada sık duyuyoruz. Son 30 gündeki tekliflerinizden kaçının yanıt beklediğini biliyor musunuz?\n\nİsterseniz 30 dakikada birlikte çıkaralım; ücretsiz.\n\n{Adınız}",
  },
  {
    id: "TPL3",
    title: "Loom senaryosu (90 sn)",
    product: "export" as Product,
    body:
      "0–15 sn: ‘Merhaba {Ad}, ben {Adınız}. Bu videoyu sadece {Firma} için çektim.’ (sitesi ekranda)\n15–45 sn: ‘Sitenizde şunu gördüm: …’ (1 somut gözlem)\n45–80 sn: Demoda talep → teklif taslağı → onay akışı. ‘Buradaki veriler örnek; sizin kataloğunuzla kurarız.’\n80–90 sn: ‘14 günlük pilot öneriyorum; 15 dakikalık görüşme için aşağıdaki butona tıklayabilirsiniz.’",
  },
  {
    id: "TPL4",
    title: "Pilot teklifi (1 sayfa)",
    product: "export" as Product,
    body:
      "Sorun: Yabancı taleplere yanıt süresi ve yanıtsız teklifler ölçülmüyor.\nKapsam (14 gün): 1 ürün grubu, son 30 günün teklifleri + yeni talepler, haftalık rapor.\nBaşarı ölçütü: Yanıtsız tekliflerin %100'ü takip edilmiş; yeni taleplere ilk yanıt süresi ölçülmüş ve raporlanmış.\nSizden: Katalog/fiyat listesi, 1 e-posta kutusuna okuma izni, haftada 15 dk.\nÜcret: {tutar} TL (ölçüt tutmazsa iade).\nSonrası: Aylık abonelik, istediğiniz zaman iptal.\nVeri: KVKK veri işleme eki, veriler pilot sonunda silinir.",
  },
  {
    id: "TPL5",
    title: "Engage — Sepet Röntgeni DM/e-posta",
    product: "engage" as Product,
    body:
      "Merhaba {Ad},\n\n{Marka}'nın sitesinde sepete ekleyip çıkan müşteriye ne gittiğini test ettim: {gözlem}.\n\nÜcretsiz ‘Sepet Röntgeni’ hazırlıyoruz: mağazanızda eksik olan 3 geri kazanım akışını ve tahmini etkisini 48 saatte tek sayfada çıkarıyoruz. İster misiniz?\n\n{Adınız} · CallypsoTech",
  },
];

// ---------------------------------------------------------------------------
// 8) Site mimarisi, ihracat analiz sayfası, profesyonel görünüm, form ile lead toplama
// ---------------------------------------------------------------------------
export const ARCHITECTURE = {
  tree: [
    "www.callypsotech.com — Şirket: kime ne çözüyoruz, kurucu, iletişim",
    "├── /ihracat-ajani — Export Agent tanıtım sayfası (index)",
    "│   ├── /ihracat-ajani/mobilya — sektör sayfası (ilk niş)",
    "│   ├── /teklif-rontgeni — ücretsiz ihracat analizi (lead sayfası)",
    "│   └── /ihracat-ajani/pilot — 14 günlük pilot teklifi",
    "├── /engage — Engage tanıtım sayfası (index)",
    "│   └── /sepet-rontgeni — ücretsiz e-ticaret analizi (lead sayfası)",
    "├── /rehber/… — SEO/GEO içerikleri",
    "└── /hakkimizda · /iletisim · /kvkk · /gizlilik · /cerez",
    "demo.callypsotech.com/export · /engage — demolar (noindex)",
    "app.callypsotech.com — gerçek müşteri paneli (ileride)",
  ],
  principles: [
    { title: "Tanıtım sayfaları ana alan adında", text: "Google ve AI motorlarının güveni tek alan adında birikir; ‘Callypso’ isim çakışması yüzünden bu birikim kritik." },
    { title: "Demo ve uygulama alt alan adında", text: "Ayrı uygulamalar, noindex olmalı; vercel.app yerine demo.callypsotech.com güven verir. Vercel'de alan adı + DNS'te CNAME yeterli." },
    { title: "Ürün başına ayrı marka/alan adı yok", text: "Tek kişilik girişimde iki marka iki kat iş demek. callypsoengage.com gibi çalışmayan adresleri kaldırın." },
    { title: "Ana sayfa yönlendirir, listelemez", text: "İki büyük kart: ‘İhracatçıysanız →’ ve ‘E-ticaret markasıysanız →’. Diğer ürünler küçük ‘Erken erişim’ alanına." },
  ],
};

export const DEMO_FLOW = [
  { stage: "Cold e-posta", send: "Link yok, tek soru", why: "Teslim oranı ve merak" },
  { stage: "Olumlu yanıt", send: "Kişisel Loom + firmaya özel demo linki (?firma=…&ref=loom)", why: "Bağlamı video verir, demo kanıtlar; kimin açtığını görürsünüz" },
  { stage: "Takip", send: "Tanıtım sayfası + pilot sayfası", why: "Şirket içinde paylaşılabilir, güven veren sayfa" },
  { stage: "Toplantı sonrası", send: "Alıcının 3 ürünü ve 1 örnek talebiyle hazırlanmış demo", why: "‘Bu benim işim’ hissi" },
];

export const DEMO_FIXES = [
  "Sabit üst şerit: ‘Örnek senaryo · Kendi kataloğunuzla görün → 15 dk görüşme’",
  "İlk açılışta 3 adımlık tur: Talep gelir → Ajan teklif hazırlar → Siz onaylarsınız",
  "Linkteki firma adını karşılamada göster (‘Merhaba Nordhaus ekibi’)",
  "Demo ziyaretini UTM/ref ile kaydet; aynı gün takip et",
  "Engage demosunu Türkçe ve TL veriye çevir",
];

export const EXPORT_MAGNET = {
  name: "İhracat Teklif Röntgeni",
  verdict:
    "Evet, oluşturun. Export Agent'ın soğuk satışını ‘yazılım alın’dan ‘ücretsiz sorun tespiti’ne çevirir; Sepet Röntgeni ile aynı mantık, aynı marka dili. Engage'den farkı: ihracatçı teklif dosyalarını paylaşmak istemeyebilir, bu yüzden iki kademeli kurun.",
  tiers: [
    {
      title: "Kademe 1 — 2 dakikalık öz değerlendirme (sayfada)",
      text: "8 soruluk test → ‘Teklif Takip Skoru’ (0–100) ekranda, detaylı rapor e-postaya. Düşük sürtünme, e-posta toplar, belge istemez.",
    },
    {
      title: "Kademe 2 — 30 dk ücretsiz analiz görüşmesi",
      text: "Skoru düşük çıkanlara: son 10 talep/teklif birlikte (ekran paylaşımı, dosya almadan) incelenir; 48 saatte 1 sayfalık rapor. Bu, doğrudan pilot girişidir.",
    },
  ],
  quiz: [
    "Ayda kaç yabancı talep alıyorsunuz? (0–5 / 6–20 / 21–50 / 50+)",
    "Yeni bir talebe ilk yanıtınız ortalama ne kadar sürüyor? (aynı gün / 1–2 gün / 3+ gün / bilmiyorum)",
    "Gönderdiğiniz tekliflerin takibini nerede tutuyorsunuz? (CRM / Excel / e-posta kutusu / tutmuyoruz)",
    "Yanıtsız bir teklifi kaç kez takip ediyorsunuz? (0 / 1 / 2+)",
    "Tekliflerinizde Incoterms, geçerlilik süresi ve termin standart mı? (evet / bazen / hayır)",
    "Teklifleri hangi dillerde hazırlayabiliyorsunuz?",
    "Teklifi kim hazırlıyor ve onaylıyor? (tek kişi / ekip / firma sahibi)",
    "Fuar sonrası kartvizitleri ne kadar sürede takip ediyorsunuz?",
  ],
  pageSections: [
    "Başlık: ‘Tekliflerinizin kaçı cevapsız kalıyor? 2 dakikada öğrenin.’",
    "Alt başlık: ‘İhracatçılar için ücretsiz Teklif Röntgeni — dosya istemiyoruz.’",
    "Test (8 soru, ilerleme çubuğu) → skor ekranı",
    "Raporda ne var: yanıt süresi, takip boşluğu, teklif standardı, 3 hızlı düzeltme",
    "Örnek rapor görseli (‘Örnek’ etiketli, Atlas Office Furniture senaryosu)",
    "Kurucu kutusu: fotoğraf + ‘raporu ben hazırlıyorum’",
    "Gizlilik notu: ‘Teklif dosyası istemiyoruz; verileriniz yalnızca rapor için kullanılır’ + KVKK linki",
    "İkinci CTA: ‘30 dk analiz görüşmesi’",
  ],
  report: [
    "Teklif Takip Skoru ve sektör içi konum (ilk 20 rapordan sonra; öncesinde yalnızca skor)",
    "En büyük 3 boşluk ve her biri için bugün yapılabilecek düzeltme",
    "Hazır takip e-postası şablonu (İngilizce)",
    "Teklif kontrol listesi: Incoterms, geçerlilik, termin, ödeme şekli, numune",
    "Export Agent'ın bu boşlukları nasıl kapattığına dair 1 paragraf + pilot teklifi",
  ],
  followUp: [
    "Gün 0: Rapor e-postası (otomatik)",
    "Gün 2: ‘Raporu inceleme fırsatınız oldu mu?’ + 1 düzeltme örneği",
    "Gün 5: Örnek senaryo (demo şirketi üzerinden, ‘örnek’ etiketli)",
    "Gün 9: 30 dk analiz görüşmesi daveti",
    "Gün 14: Son çağrı — pilot kontenjanı",
  ],
  coldUse:
    "Cold e-postada link yine yok; ikinci veya üçüncü takipte ‘Size özel bir Teklif Röntgeni hazırlayabilirim’ diye teklif edin. LinkedIn paylaşımlarının ve imzanın sonunda ise doğrudan link verin.",
};

export const PRO_LOOK: { id: string; area: string; text: string; evidence: string; status: Status; priority: Priority }[] = [
  { id: "PL1", area: "Kimlik", text: "Emoji ikonları (📞💬📧🔍🤖📅🌙🌍🛡️) tutarlı bir SVG ikon setiyle değiştir (ör. Lucide)", evidence: "Ana sayfa HTML'inde 12 emoji ikon", status: "dogrulandi", priority: "P1" },
  { id: "PL2", area: "Kimlik", text: "Favicon ve gerçek logo (SVG + PNG) ekle", evidence: "favicon.ico 404, sayfada icon etiketi yok; logo.png 404", status: "dogrulandi", priority: "P1" },
  { id: "PL3", area: "Kimlik", text: "Tek ana CTA: ‘Ücretsiz analiz al’; ‘Görüşme planla’ ikincil. Aynı sayfada 15 buton yerine 2 tür", evidence: "Ana sayfada 15 buton, hepsi aynı takvime gidiyor", status: "dogrulandi", priority: "P1" },
  { id: "PL4", area: "Kanıt", text: "Gerçek ürün ekran görüntüleri (Export Agent onay ekranı, Engage akış kurucu), ‘örnek veri’ etiketiyle", evidence: "Ana sitede hiç görsel yok (img: 0)", status: "dogrulandi", priority: "P1" },
  { id: "PL5", area: "Kanıt", text: "Sahte ‘CANLI GÖRÜŞME · 02:34’ ve ‘Q3 SaaS Outreach · 847 lead’ kartlarına ‘örnek’ etiketi", evidence: "Ana sayfa hero ve Engage kartı", status: "dogrulandi", priority: "P0" },
  { id: "PL6", area: "Kanıt", text: "‘Nasıl çalışıyoruz’ bölümü: Analiz → 14 gün pilot → ölçüm → abonelik (süre ve sorumluluklarla)", evidence: "Sitede süreç/teklif yapısı yok", status: "dogrulandi", priority: "P1" },
  { id: "PL7", area: "Kişi", text: "Kurucu fotoğrafı, 60 sn video, LinkedIn; ‘Raporunuzu ben hazırlıyorum’ cümlesi", evidence: "Sitede kişi bilgisi yok", status: "dogrulandi", priority: "P1" },
  { id: "PL8", area: "Kurumsal", text: "Altbilgide yasal unvan, şehir, vergi dairesi/no (varsa), KVKK, gizlilik, çerez linkleri", evidence: "Altbilgide yalnızca ‘bireysel girişim’ ve e-posta", status: "dogrulandi", priority: "P1" },
  { id: "PL9", area: "Kurumsal", text: "Şirket alan adlı e-posta imzası: ad, unvan, telefon, www linki, LinkedIn", evidence: "—", status: "ornek", priority: "P1" },
  { id: "PL10", area: "Mesaj", text: "H1'i somutlaştır: ‘İhracat tekliflerinizi ve e-ticaret gelirinizi kaçırmayın’ gibi, kime + sonuç", evidence: "H1: ‘Her Kanalda Yapay Zeka’", status: "dogrulandi", priority: "P1" },
  { id: "PL11", area: "Mesaj", text: "Ürün sayısını ve adlarını her yerde aynı yaz; ‘ürün görseli’, ‘iç mekan tasarımı’ gibi gösterilmeyen ürünleri kaldır", evidence: "Metinde 4 ve 6 platform birlikte geçiyor", status: "dogrulandi", priority: "P1" },
  { id: "PL12", area: "Teknik", text: "Özel 404 sayfası (ana sayfaya ve analiz sayfalarına link)", evidence: "Olmayan URL → Vercel'in düz ‘NOT_FOUND’ hata metni (markasız)", status: "dogrulandi", priority: "P2" },
  { id: "PL13", area: "Teknik", text: "PNG paylaşım görseli; LinkedIn Post Inspector ile kontrol", evidence: "og-image.svg", status: "dogrulandi", priority: "P1" },
  { id: "PL14", area: "Mesaj", text: "Türkçe-İngilizce karışık ifadeleri azalt (‘Outreach’, ‘lead’, ‘Q3 SaaS’ hedef kitle dili değil)", evidence: "Hero kartlarında İngilizce örnekler", status: "dogrulandi", priority: "P2" },
];

export const LEAD_CAPTURE = {
  placements: [
    { where: "Ana sayfa hero", what: "‘Ücretsiz analiz al’ → iki seçenek: İhracat / E-ticaret", priority: "P0" as Priority },
    { where: "/teklif-rontgeni ve /sepet-rontgeni", what: "Asıl lead formu (test + e-posta)", priority: "P0" as Priority },
    { where: "Demo sayfaları", what: "Üst şerit + ‘Bu demoyu kendi verinizle görün’ kısa formu", priority: "P1" as Priority },
    { where: "Rehber yazılarının sonu", what: "Konuya bağlı PDF (ör. ‘İhracat teklif kontrol listesi’) karşılığında e-posta", priority: "P1" as Priority },
    { where: "Altbilgi", what: "Aylık bülten: ‘Ayda 1 e-posta, ihracat ve e-ticaret satış taktikleri’", priority: "P2" as Priority },
  ],
  avoid: [
    "Açılır pencere (pop-up) ve sayfaya girer girmez form: B2B'de güveni düşürür",
    "‘Bültene abone ol’ gibi değeri belirsiz teklif: karşılığında ne alacağı net olmalı",
    "Uzun form: ilk adımda en fazla 4 alan; gerisini testten veya sonraki adımda al",
    "Ön işaretli onay kutusu: KVKK/İYS açısından geçersiz",
  ],
  fieldsExport: [
    "Ad Soyad *",
    "İş e-postası * (gmail/hotmail uyarısı, engel değil)",
    "Firma web sitesi *",
    "Ürün grubu (seçim)",
    "Aylık yabancı talep sayısı (seçim) — testten otomatik gelir",
  ],
  fieldsEngage: [
    "Ad Soyad *",
    "E-posta *",
    "Mağaza adresi (URL) *",
    "Altyapı: Shopify / ikas / Ticimax / IdeaSoft / diğer",
    "Aylık sipariş aralığı (seçim)",
  ],
  legal: [
    "Formun altında KVKK aydınlatma metni linki: ‘Verileriniz analiz raporunu hazırlamak için işlenir.’ Aydınlatma bir bilgilendirmedir, onay kutusu gerektirmez",
    "Pazarlama e-postası için ayrı, işaretsiz ve isteğe bağlı onay kutusu: ‘Satış ipuçları ve kampanya e-postaları almak istiyorum’",
    "Tacir ve esnafa gönderilen ticari iletilerde önceden onay şartı farklıdır; her iletide ret (abonelikten çıkma) bağlantısı ve İYS durumu için bir hukukçuya teyit ettirin",
    "Onay metni, tarih-saat ve kaynak sayfa kayıt altına alınsın (ispat yükü gönderende)",
  ],
  stack: [
    { option: "En hızlı (bugün)", tools: "Tally veya Google Forms gömülü form → Google Sheets + e-posta bildirimi", note: "Kod gerektirmez; görünüm daha az özel" },
    { option: "Önerilen (2–3 saat)", tools: "Next.js formu → sunucu tarafı API route → Supabase tablo + Resend ile otomatik rapor/teşekkür e-postası", note: "Engage'de Supabase ve Resend zaten kullanılıyor; send alt alan adında Resend DKIM kaydı mevcut (doğrulandı)" },
    { option: "Büyüyünce", tools: "Aynı form → CRM (HubSpot Free / Pipedrive) + nurture sekansı", note: "İlk 50 lead'den sonra" },
  ],
  flow: [
    "Form gönderilir → teşekkür ekranı: skor + ‘raporunuz 48 saat içinde e-postanızda’ + takvim linki (isteğe bağlı)",
    "Anında: teşekkür e-postası (şirket alan adından, kişi imzalı)",
    "Size bildirim: yeni lead + cevaplar + firma sitesi",
    "48 saat içinde: rapor e-postası (elle hazırlanır, şablonla 30 dk)",
    "Nurture: Gün 2 / 5 / 9 / 14 e-postaları; yanıt gelince durur",
    "Dashboard'a haftalık: form görüntülenme, gönderim, rapor, görüşme, pilot",
  ],
  metrics: [
    "Analiz sayfası ziyaret → form gönderimi (hedef ≥ %10, varsayım)",
    "Form → görüşme (hedef ≥ %20, varsayım)",
    "Görüşme → pilot (hedef ≥ %30, varsayım)",
  ],
};
