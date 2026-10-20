"""Deda Group toplantı strateji belgesini (PDF) üretir.

Kaynaklar: dashboard veri setleri (../data) ve callypsotech.com ana sayfası
(19.10.2026 incelemesi; Studio ve Decor kapsam dışı).
Kullanım: python3 meeting/build_pdf.py
"""
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle)

HERE = Path(__file__).parent
OUT = HERE / "Deda-Group-Toplanti-Stratejisi.pdf"
FONT_DIR = Path("/usr/share/fonts/truetype/freefont")
pdfmetrics.registerFont(TTFont("Sans", str(FONT_DIR / "FreeSans.ttf")))
pdfmetrics.registerFont(TTFont("Sans-Bold", str(FONT_DIR / "FreeSansBold.ttf")))
pdfmetrics.registerFont(TTFont("Sans-Oblique", str(FONT_DIR / "FreeSansOblique.ttf")))
pdfmetrics.registerFontFamily("Sans", normal="Sans", bold="Sans-Bold", italic="Sans-Oblique", boldItalic="Sans-Bold")

BRAND = colors.HexColor("#1f4e79")
BRAND_SOFT = colors.HexColor("#e7eef6")
AMBER_SOFT = colors.HexColor("#fbf0db")
RED_SOFT = colors.HexColor("#fbe7e5")
GREEN_SOFT = colors.HexColor("#e3f3ea")
GRID = colors.HexColor("#d5dae0")
MUTED = colors.HexColor("#5d6670")

S = {
    "title": ParagraphStyle("title", fontName="Sans-Bold", fontSize=20, leading=25, textColor=BRAND, spaceAfter=4),
    "sub": ParagraphStyle("sub", fontName="Sans", fontSize=10, leading=14, textColor=MUTED, spaceAfter=10),
    "h1": ParagraphStyle("h1", fontName="Sans-Bold", fontSize=13.5, leading=18, textColor=BRAND, spaceBefore=12, spaceAfter=6),
    "h2": ParagraphStyle("h2", fontName="Sans-Bold", fontSize=11, leading=15, spaceBefore=8, spaceAfter=4),
    "body": ParagraphStyle("body", fontName="Sans", fontSize=9.5, leading=13.6, alignment=TA_LEFT, spaceAfter=5),
    "quote": ParagraphStyle("quote", fontName="Sans-Oblique", fontSize=9.8, leading=14.5, leftIndent=8, rightIndent=8),
    "cell": ParagraphStyle("cell", fontName="Sans", fontSize=8.4, leading=11.2),
    "cellb": ParagraphStyle("cellb", fontName="Sans-Bold", fontSize=8.4, leading=11.2),
    "head": ParagraphStyle("head", fontName="Sans-Bold", fontSize=8.4, leading=11, textColor=colors.white),
    "small": ParagraphStyle("small", fontName="Sans", fontSize=7.8, leading=10.5, textColor=MUTED),
    "bullet": ParagraphStyle("bullet", fontName="Sans", fontSize=9.5, leading=13.4, leftIndent=12, bulletIndent=2, spaceAfter=2),
}


def P(text, style="body"):
    return Paragraph(text, S[style])


def bullets(items):
    return [Paragraph(t, S["bullet"], bulletText="•") for t in items]


def box(flowables, bg=BRAND_SOFT, border=BRAND):
    t = Table([[flowables]], colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg), ("LINEBEFORE", (0, 0), (0, -1), 3, border),
        ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def table(header, rows, widths, first_bold=True):
    data = [[P(h, "head") for h in header]]
    for r in rows:
        data.append([P(c, "cellb" if (i == 0 and first_bold) else "cell") for i, c in enumerate(r)])
    t = Table(data, colWidths=[w * mm for w in widths], repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BRAND), ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.4, GRID), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f6f8fa")]),
        ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return t


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Sans", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, "Deda Group · Toplantı Strateji Belgesi · Callypso Tech · İç kullanım")
    canvas.drawRightString(192 * mm, 10 * mm, f"{doc.page}")
    canvas.restoreState()


story = []

# ---------------------------------------------------------------- 1. Kapak / amaç
story += [
    P("Deda Group — Toplantı Strateji Belgesi", "title"),
    P("15–20 dakikalık tanışma toplantısı · Callypso Engage öncelikli · Hazırlanma: Ekim 2026 · "
      "Detaylı analiz: deda-group-growth.vercel.app", "sub"),
    box([P("<b>Toplantının amacı</b>", "h2"),
         P("Ürün satmak değil; Deda'nın <b>kendi ağzından</b> “talepler geliyor ama takip edilmiyor, tekrar sipariş "
           "kişiye bağlı” demesini sağlamak ve toplantıyı <b>Deda Pack için 30 günlük bir Callypso Engage pilotu</b> "
           "üzerine bir keşif görüşmesi tarihiyle kapatmak.")]),
    Spacer(1, 6),
    P("Deda Group kimdir? (30 saniyelik özet)", "h1"),
    *bullets([
        "Adana merkezli, Dönmezoğlu ailesi yönetiminde bir sanayi grubu (1989). İtalyan BT şirketi Dedagroup ile ilgisi yok.",
        "<b>Deda Pack</b>: Baskılı kâğıt çanta üreticisi. 2023'te üretime başladı; günlük 456.361 çanta kapasitesi, 121 çalışan, "
        "8 dilde web sitesi ve 60 ihracat müşterisi hedefi var. <b>Toplantının ana odağı bu şirket.</b>",
        "<b>Deda Makina</b>: Plastik geri dönüşüm makineleri üretiyor (yatırım malı, uzun satış döngüsü).",
        "<b>Deda Gıda</b>: Ice Boom, Jölle ve Iceman markalarını üretiyor; distribütör üzerinden satıyor, mevsimsel çalışıyor.",
        "Hiçbiri e-ticaret yapmıyor. Satış <b>teklif → takip → sipariş → tekrar sipariş</b> zinciriyle yürüyor ve konuşma bu dille kurulmalı.",
    ]),
]

# ---------------------------------------------------------------- 2. Giriş konuşması
story += [
    P("Giriş konuşması (≈ 75–90 saniye)", "h1"),
    box([P(
        "“Biz Callypso Tech'iz. Ürünümüz <b>Engage</b>, işletmelerin müşterileriyle WhatsApp, SMS ve e-posta üzerinden yaptığı "
        "takip mesajlarını otomatikleştiriyor; teklif sonrası hatırlatmalar ya da tekrar sipariş zamanı gelen müşteriye mesaj gibi. "
        "Ama bugün ürün anlatmak yerine sizi dinlemek istiyoruz.", "quote"),
        Spacer(1, 4),
        P("Toplantıdan önce Deda Group'un kamuya açık dijital varlıklarını inceledik: Deda Pack, Deda Makina ve Deda Gıda "
          "siteleri, Google arama sonuçları ve reklam kütüphaneleri. Dışarıdan gördüğümüz birkaç tabloyu paylaşmak ve bunların "
          "içeride gerçekten bir karşılığı olup olmadığını sizden duymak istiyoruz.", "quote"),
        Spacer(1, 4),
        P("Kısaca gördüğümüz şu: Deda Pack günde 450 binin üzerinde çanta üretebilen, ihracat hedefi olan ciddi bir üretici. "
          "Ama web sitesinden teklif isteyen bir alıcının ölçü, adet ve baskı bilgisini toplayan bir yapı yok. Talepler "
          "WhatsApp, üç telefon ve birkaç e-posta adresine dağılıyor. Teklif sonrası takibin ve tekrar siparişin de "
          "kişilere bağlı yürüdüğünü tahmin ediyoruz. Deda Makina'nın teklif formu ise açılmıyor.", "quote"),
        Spacer(1, 4),
        P("Birkaç dakika bunu gösterip size birkaç soru soracağım. Sonunda ilk 30 günde neler yapılabileceğini konuşabiliriz.”", "quote"),
    ], bg=AMBER_SOFT, border=colors.HexColor("#9a6100")),
    Spacer(1, 4),
    P("<b>Engage'den neden ve nasıl bahsediliyor?</b>", "h2"),
    *bullets([
        "Karşı taraf bir yazılım firmasıyla görüştüğünü zaten biliyor. Ürünü hiç anmamak “neyi satmaya çalışıyorlar?” şüphesi yaratır; "
        "uzun anlatmak ise toplantıyı demoya çevirir. Bu yüzden <b>yalnızca tek cümle</b>.",
        "Engage'i <b>kendi iş dilleriyle</b> anlatın: “kampanya”, “pazarlama otomasyonu”, “terk edilen sepet” yerine “takip”, “teklif”, “tekrar sipariş”.",
        "Ürün adını girişte bir kez söyleyin, <b>13. dakikaya kadar tekrarlamayın</b>. Sonra onların söylediği sorunla geri getirin: "
        "“Az önce teklif takibinin temsilciye bağlı olduğunu söylediniz; Engage tam olarak bunu yapıyor.”",
        "Inboxly, Voice Agent ve GeoAdra'dan girişte bahsetmeyin; altı ürünü saymak dikkati dağıtır.",
    ]),
    P("Bu giriş ayrıca hazırlık yaptığınızı gösterir, karşı tarafı savunmaya geçirmez (“dışarıdan gördüğümüz”, "
      "“sizden duymak istiyoruz”) ve onların kendi rakamlarını kullanır (456 bin çanta, 60 ihracat müşterisi).", "small"),
]

# ---------------------------------------------------------------- 3. Sorunlar (sade)
story += [
    KeepTogether([P("Gördüğümüz 5 temel sorun (sade hâli)", "h1"), table(
        ["Sorun", "Kanıt (kamuya açık)", "İş için anlamı"],
        [
            ["1. Teklif talebi toplanmıyor",
             "Deda Pack'in formu “şikayet ve öneri” formu; ölçü, adet ve baskı alanı yok. Deda Makina'nın teklif formu PDF ve bağlantısı 404 veriyor.",
             "Her teklif telefonda veya e-postada birkaç tur yazışma gerektiriyor; talepler önceliklendirilemiyor."],
            ["2. Talepler dağınık",
             "3 telefon, 2 WhatsApp hattı, birden çok e-posta adresi var; iş başvuruları da satış e-postasına geliyor.",
             "Bir talebin kimde olduğu ve cevaplanıp cevaplanmadığı görünmüyor (içeride doğrulanmalı)."],
            ["3. Takip ve tekrar sipariş kişiye bağlı",
             "Sitede mevcut müşterinin tekrar sipariş vermesi için bir yol görünmüyor; fuar sayfası 2023'te kalmış.",
             "Sarf malzemesi satan bir üretici için en kolay gelir (tekrar sipariş) kaçabilir. Bu, toplantıda doğrulanacak hipotez."],
            ["4. Yeni talep yaratılmıyor",
             "Meta ve Google'da reklam yok. “Deda Makina” aramasında kendi siteleri ilk sayfada yok. “baskılı kağıt çanta üretimi” aramasında Deda yok.",
             "Büyük kapasiteye rağmen talep fuar ve referansa bağlı görünüyor."],
            ["5. Ölçüm yok",
             "Makina, Gıda ve grup sitelerinde analitik etiketi bulunamadı; Pack'te çerez onay aracı bulunamadı.",
             "Hangi kanalın iş getirdiği bilinemiyor; hiçbir iyileştirmenin etkisi kanıtlanamaz."],
        ],
        [36, 72, 66],
    )]),
    Spacer(1, 6),
    box([P("<b>Toplantıda topluca gösterilmemeli; sonda birebir iletilmeli:</b> Grup sitesinin “Konteyner Fabrika” olarak "
           "bağlandığı adanakonteyner.com.tr'nin menüsünde bahis temalı ilgisiz bir sayfa var ve ana sayfaları 404 veriyor. "
           "dedaplast.com ise erişilemiyor. Bunu “ayrıca acil bir güvenlik konusu fark ettik” diye iletmek, karşılığında "
           "hiçbir şey istemediğiniz için güven kazandırır.")], bg=RED_SOFT, border=colors.HexColor("#b3261e")),
]

# ---------------------------------------------------------------- 4. Akış
story += [
    P("15–20 dakikalık akış", "h1"),
    table(
        ["Süre", "Bölüm", "Ne yapılacak"],
        [
            ["0–2 dk", "Giriş", "Yukarıdaki konuşma. Karşı tarafın rolünü öğrenin (satış mı, yönetim mi, aile üyesi mi?)."],
            ["2–6 dk", "3 bulgu", "Sorun 1, 2 ve 4'ü ekranda gösterin: Deda Pack formu, Makina'nın 404 veren PDF'i, Google arama tablosu."],
            ["6–13 dk", "Keşif soruları", "Engage soruları 1–5. Soruyu sorun ve susun; sayıyı onlar söylesin. <b>Toplantının asıl değeri burada.</b>"],
            ["13–17 dk", "Çözüm haritası", "Cevaplara göre: önce Engage senaryosu, sonra Inboxly / Voice Agent / GeoAdra köprüsü."],
            ["17–20 dk", "Kapanış", "30/60/90 yol haritasının yalnızca 0–30 gün kısmını özetleyin; 30 günlük Deda Pack pilotu ve keşif görüşmesi için iki tarih seçeneği sunun."],
        ],
        [20, 30, 124],
    ),
]

# ---------------------------------------------------------------- 5. Kritik sorular – Engage
story += [
    P("Kritik sorular — 1. öncelik: Callypso Engage", "h1"),
    P("Amaç, Engage ihtiyacını onların söylemesi. Her sorunun yanında beklenen cevabı ve o cevabın açtığı Engage senaryosunu bulacaksınız.", "small"),
    Spacer(1, 3),
    table(
        ["#", "Soru", "Muhtemel cevap → ne öğreniyoruz", "Engage karşılığı"],
        [
            ["1", "“Geçen ay Deda Pack'e kaç teklif talebi geldi, kaçına teklif gönderildi?”",
             "“Tam bilmiyoruz.” → Huni ölçülmüyor.",
             "Gelen her talebe WhatsApp ile otomatik onay mesajı; talebin listeye düşmesi ve raporlanması."],
            ["2", "“Teklif gönderip cevap alamadığınız müşteriyi kim, kaç gün sonra tekrar arıyor?”",
             "“Temsilci hatırlarsa.” → Takip kişiye bağlı.",
             "<b>Teklif sonrası takip dizisi:</b> 3. gün WhatsApp, 7. gün e-posta (numune önerisi), 14. gün temsilciye hatırlatma."],
            ["3", "“Bir müşterinizin çantası bitmek üzereyken bunu siz mi fark ediyorsunuz, müşteri mi arıyor?”",
             "“Müşteri arıyor.” → Tekrar sipariş kaçıyor olabilir.",
             "<b>Tekrar sipariş hatırlatması:</b> son sipariş tarihine göre WhatsApp mesajı: “Aynı siparişi tekrarlayalım mı?”"],
            ["4", "“Son fuarlarda kaç kartvizit toplandı ve şu an onlarla ne yapılıyor?”",
             "“Excel'de duruyor.” → Fuar yatırımı boşa gidiyor.",
             "<b>Fuar sonrası çok dilli dizi:</b> 1. gün teşekkür ve katalog, 7. gün sektöre uygun ürün, 21. gün teklif daveti."],
            ["5", "“Müşteri ve sipariş bilgileri nerede tutuluyor: CRM, ERP, Excel? WhatsApp Business kullanıyor musunuz?”",
             "Engage'in neye bağlanacağını belirler.",
             "Liste aktarımı veya WhatsApp Business bağlantısı. CRM yoksa pilot Excel aktarımıyla başlar (HubSpot/Zapier sonra)."],
            ["6", "(Zaman kalırsa) “Iceman siparişleri için yaz öncesi distribütörlere nasıl hatırlatma yapılıyor?”",
             "Deda Gıda tarafında mevsimsel ihtiyaç.",
             "<b>Sezon öncesi distribütör kampanyası:</b> sezondan 8 ve 4 hafta önce WhatsApp/SMS hatırlatması."],
        ],
        [7, 52, 48, 67],
        first_bold=False,
    ),
    Spacer(1, 6),
    P("Kaçınılacak soru tipi: “Pazarlama otomasyonu kullanıyor musunuz?” Evet/hayır cevabı alırsınız ve konuşma ürün satışına döner. "
      "Sorular hep <b>süreç ve sayı</b> üzerine kurulmalı.", "small"),
    P("Deda için Engage nasıl anlatılmalı?", "h2"),
    *bullets([
        "Sitedeki Engage özellikleri: WhatsApp ağırlıklı kampanyalar ve otomatik mesaj dizileri, WhatsApp → SMS → e-posta sıralı otomasyon, "
        "sürükle-bırak e-posta ve A/B testi, kanal bazlı dönüşüm ve gelir raporu.",
        "<b>Shopify yok:</b> Deda siteleri WordPress (Pack, Makina, grup, Konteyner) ve eski bir PHP sitesi (Gıda); "
        "e-ticaret, sepet ve ödeme yok. Engage'in Shopify entegrasyonu ve “terk edilen sepet” akışı burada geçersiz. "
        "Liste Excel aktarımı, WhatsApp Business veya CRM (HubSpot/Zapier) ile gelir.",
        "<b>Dil uyarlaması:</b> “Terk edilen sepet” yerine <b>“cevapsız teklif”</b>, “geri kazanım” yerine <b>“tekrar sipariş”</b> deyin.",
        "<b>Neden WhatsApp?</b> Deda Pack zaten WhatsApp hattı kullanıyor (+90 532 131 49 49). Engage'in WhatsApp ağırlığı bu alışkanlığa doğrudan oturuyor.",
        "<b>Çok dillilik:</b> Pack'in sitesi 8 dilde ve ihracat hedefi var. Fuar ve teklif mesajlarının alıcının dilinde gitmesi güçlü bir argüman.",
        "<b>Toplantı öncesi teyit edin:</b> Engage'in CRM/ERP olayıyla tetiklenme şekli (Zapier/HubSpot), B2B liste aktarımı ve "
        "WhatsApp şablonlarının farklı dillerde onayı. Sitede açıkça yazmayan hiçbir şeyi vaat etmeyin.",
    ]),
]

# ---------------------------------------------------------------- 6. Diğer Callypso ürünleri
story += [
    P("Engage'den diğer Callypso ürünlerine köprü", "h1"),
    P("Engage konuşması oturduktan sonra (13–17. dakika) bu ürünlere köprü kurun. Her biri Deda'da gözlenen somut bir soruna karşılık geliyor. "
      "Studio ve Decor bu müşteri için kapsam dışı.", "small"),
    Spacer(1, 3),
    table(
        ["Ürün", "Deda'daki sorun", "Köprü sorusu", "Tek cümlelik öneri"],
        [
            ["<b>Inboxly</b><br/>(WhatsApp, Instagram, web chat tek panelde; AI SSS)",
             "Talepler 2 WhatsApp hattı, Instagram ve telefonlara dağılmış. Ölçü, gramaj ve MOQ soruları tekrar tekrar soruluyor olabilir.",
             "“WhatsApp'a gelen mesajları kaç kişi cevaplıyor, bir mesaj kimde kaldığını nasıl biliyorsunuz?”",
             "“Tüm mesajlar tek ekranda olur; ölçü, gramaj gibi sık soruları AI yanıtlar, teklifi temsilciye devreder.”"],
            ["<b>Voice Agent</b><br/>(7/24 AI telefon karşılama, 50+ dil, CRM kaydı)",
             "Pack Cumartesi 14:00'e kadar açık, Pazar kapalı. Makina'da destek telefonla yürüyor. İhracat alıcıları farklı dillerde arıyor.",
             "“Mesai dışında veya yabancı dilde gelen aramalar ne oluyor? Kaçan arama sayısını biliyor musunuz?”",
             "“Mesai dışı ve yabancı dildeki aramaları AI karşılar, talebi kaydeder, ertesi gün geri arama planlar.”"],
            ["<b>GeoAdra</b><br/>(ChatGPT/Gemini görünürlük skoru, rakip boşluk analizi)",
             "“Deda Makina” ve “plastik geri dönüşüm makinesi üreticisi” aramalarında Deda görünmüyor; aramada öne çıkanlar rakipler.",
             "“Yeni bir müşteri ChatGPT'ye ‘Türkiye'de plastik geri dönüşüm makinesi üreten firmalar’ diye sorsa Deda Makina çıkar mı?”",
             "“Ücretsiz bir AI görünürlük raporu çıkarıp rakiplerin hangi sorularda öne çıktığını gösterelim.” (Düşük eşikli ikinci adım.)"],
        ],
        [32, 46, 48, 48],
        first_bold=False,
    ),
    Spacer(1, 6),
    box([P("<b>Önerilen ürün sırası:</b> 1) Engage, Deda Pack pilotu (teklif takibi + tekrar sipariş) → 2) Inboxly, aynı WhatsApp "
           "hattında talepleri toplamak ve Engage'i beslemek için → 3) GeoAdra, Deda Makina için ücretsiz rapor (kapı açıcı) → "
           "4) Voice Agent, kaçan arama verisi gelirse.")], bg=GREEN_SOFT, border=colors.HexColor("#1d7a4f")),
    KeepTogether([P("Altyapı ön koşulları (ajans / BT ile)", "h1"),
    P("Engage pilotunun çalışması ve sonucunun ölçülebilmesi için gerekenler. Bunları siz yapmasanız da gündeme getirmek güven kazandırır.", "small"),
    table(
        ["İhtiyaç", "Neden gerekli", "Kim yapar"],
        [
            ["Yapılandırılmış teklif formu (Pack) ve makine teklif yapılandırıcı (Makina)",
             "Engage'in takip edeceği talebi doğru yakalar. Bugün iki sitede de bu yapı yok.", "Web ajansı veya Callypso entegrasyon desteği"],
            ["Ölçüm ve çerez onayı (GA4 olayları, KVKK uyumlu çerez yönetimi)",
             "Pilotun sonucunu kanıtlamak için şart: form gönderimi, WhatsApp tıklaması, teklif talebi.", "Ajans / BT"],
            ["Web hijyeni ve güvenlik",
             "Konteyner sitesindeki bahis içeriği, kırık dedaplast.com, 404 veren kataloglar, Makina'daki yanlış ürün tabloları, "
             "Gıda'nın Rusça sitesinde “Dedeman” çevirisi, eksik zorunlu şirket bilgileri.", "Web ajansı (hızlı kazanım)"],
            ["Makina ürün sayfaları ve SEO",
             "13 makine sayfası aynı yanlış tabloyu gösteriyor, 37 sayfada yalnızca başlık var. Bu, GeoAdra raporunun doğal devamı.", "İçerik ajansı + mühendis onayı"],
        ],
        [50, 82, 42],
    )]),
]

# ---------------------------------------------------------------- 6b. Callypso dışı otomasyon fikirleri
story += [
    P("Callypso ürünleri dışında götürebileceğiniz otomasyon fikirleri", "h1"),
    P("Bunlar ürün lisansı değil, <b>proje / hizmet olarak</b> kurulabilecek özel otomasyonlar. Hepsi Deda'da gözlenen bir soruna "
      "dayanıyor; iç süreçle ilgili olanlar toplantıda doğrulanmalı. Tipik araçlar: n8n / Make / Zapier, WhatsApp Business API, "
      "bir LLM (AI) servisi, Google Sheets veya CRM.", "small"),
    Spacer(1, 3),
    table(
        ["Fikir", "Çözdüğü sorun", "Nasıl çalışır", "Zorluk / süre"],
        [
            ["<b>1. Otomatik teklif taslağı (Deda Pack)</b>",
             "Her teklif için ölçü, gramaj, adet ve baskı bilgisi elle hesaplanıyor; teklif süresi uzuyor.",
             "Teklif formu → fiyat tablosu (ölçü × gramaj × adet × renk) → PDF teklif taslağı → temsilci onayı → müşteriye WhatsApp/e-posta. "
             "Engage bu teklifin takibini devralır.",
             "Orta · 3–4 hafta · Deda'nın fiyat tablosu gerekir"],
            ["<b>2. Baskı dosyası ön kontrolü ve onay linki (Deda Pack)</b>",
             "Logo/tasarım dosyaları e-postayla gidip geliyor, prova onayı kayıt altında değil (doğrulanmalı).",
             "Müşteri dosyayı yükler → AI renk sayısı (≤6), ölçü ve çözünürlüğü kontrol eder → grafik ekibine görev → müşteriye tek tıkla onay linki, zaman damgalı.",
             "Orta–yüksek · 4–6 hafta"],
            ["<b>3. Makine hattı ön-teklif asistanı (Deda Makina)</b>",
             "PDF teklif formu kırık; her talep mühendisin telefonla bilgi toplamasını gerektiriyor.",
             "Web formu: malzeme tipi, kapasite (kg/saat), kirlilik → AI, A–H katalogdan uygun modül zincirini önerir (ör. yıkama → kurutma → granür → filtre) → mühendise taslak, onaylı hâli müşteriye.",
             "Orta · 4 hafta · teknik föyler gerekir"],
            ["<b>4. Distribütör siparişlerini AI ile okuyup ERP'ye aktarma (Deda Gıda)</b>",
             "Siparişler e-posta, Excel veya telefonla geliyorsa elle giriliyor (doğrulanmalı).",
             "Sipariş e-postası/eki → AI ürün, gramaj, koli adedi ve tarihi çıkarır → kontrol → ERP'de taslak sipariş → satış destek onayı → distribütöre teyit.",
             "Yüksek · 6–8 hafta · ERP erişimi gerekir"],
            ["<b>5. Web izleme ve uyarı botu (tüm grup)</b>",
             "Kırık dedaplast.com, 404 veren katalog ve teklif PDF'leri, Konteyner sitesindeki bahis içeriği fark edilmemiş.",
             "Günlük kontrol: site ayakta mı, 404 var mı, beklenmeyen bir kelime/bağlantı (ör. “bonus”) eklenmiş mi, alan adı ve SSL süresi → sorun olursa WhatsApp/e-posta uyarısı.",
             "Düşük · 1 hafta · <b>kapı açıcı / hediye</b> olarak önerilebilir"],
            ["<b>6. Haftalık yönetim özeti (grup)</b>",
             "Yönetim lead, teklif ve sipariş durumunu muhtemelen elle derlenen raporlardan görüyor (doğrulanmalı).",
             "Form, WhatsApp, Engage ve (varsa) ERP verisi → her pazartesi tek sayfalık özet: yeni talep, ortalama yanıt süresi, teklif/sipariş, AI yorumu.",
             "Orta · 2–3 hafta (pilot verisiyle başlar)"],
            ["<b>7. Ortak e-posta kutusunun sınıflandırılması (Deda Pack)</b>",
             "info@dedapack.com'a hem teklifler hem iş başvuruları geliyor.",
             "Gelen e-posta → AI sınıflandırır (teklif / iş başvurusu / tedarikçi / şikayet) → ilgili kişiye yönlendirir; CV'lerden aday tablosu oluşturur.",
             "Düşük · 1 hafta"],
            ["<b>8. İhracat hedef müşteri listesi (Deda Pack)</b>",
             "60 ihracat müşterisi hedefi var ama dijitalde görünür bir talep yaratma faaliyeti yok.",
             "Hedef ülke ve sektör (fırın zincirleri, kafe, eczane…) → AI destekli firma ve karar verici listesi → dil bazlı kişiselleştirilmiş ilk temas taslakları (insan onaylı) → yanıt verenler Engage dizisine.",
             "Orta · sürekli hizmet · KVKK/GDPR uyumu gerekir"],
            ["<b>9. Makina teknik föyünden çok dilli ürün sayfası</b>",
             "13 makine sayfasında aynı yanlış tablo var, 37 sayfada yalnızca başlık var, site yalnızca Türkçe.",
             "Mühendisin doldurduğu tek teknik föy tablosu → AI TR/EN/AR sayfa taslağı → mühendis onayı → yayın. GeoAdra raporuyla birlikte önerilebilir.",
             "Düşük–orta · 2–4 hafta"],
        ],
        [38, 40, 70, 26],
        first_bold=False,
    ),
    Spacer(1, 6),
    box([P("<b>Nasıl sunulmalı?</b>", "h2"),
         *bullets([
             "Toplantıda en fazla <b>2–3 fikirden</b> bahsedin. Engage soruları sırasında hangi acı çıkarsa onu seçin: teklif yükü → Fikir 1, "
             "Makina'nın teknik talepleri → Fikir 3, sipariş girişi → Fikir 4.",
             "<b>Fikir 5 (web izleme botu)</b> güvenlik notuyla birlikte ücretsiz veya sembolik bedelle önerilebilir. Güven kazandırır ve kapıyı açar.",
             "<b>Sıralama:</b> Önce Engage pilotu (30 gün). Pilot verisi geldikten sonra Fikir 1 ve 6 ile “otomasyon paketi” olarak genişleyin.",
             "Bu fikirlerde de süre ve tasarruf rakamı vermeyin. Yukarıdaki süreler kaba tahmindir; kapsam keşif görüşmesinden sonra netleşir.",
         ])], bg=BRAND_SOFT, border=BRAND),
]

# ---------------------------------------------------------------- 6c. 30/60/90 yol haritası
def phase(title, theme, items, deliver, need, measure):
    rows = [[P(f"<b>{title}</b> · {theme}", "head")]]
    body = [*bullets(items),
            Spacer(1, 3),
            P(f"<b>Teslim edilen:</b> {deliver}", "cell"),
            P(f"<b>Deda'dan gereken:</b> {need}", "cell"),
            P(f"<b>Başarı ölçüsü:</b> {measure}", "cell")]
    rows.append([body])
    t = Table(rows, colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BRAND), ("BOX", (0, 0), (-1, -1), 0.5, GRID),
        ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return KeepTogether([t, Spacer(1, 7)])


story += [
    P("30 / 60 / 90 günlük yol haritası", "h1"),
    P("Toplantının kapanışında önerilecek pilotun devamı. Önce tek şirket (Deda Pack) ve Engage; sonuç geldikçe diğer Callypso ürünleri, "
      "Deda Makina / Deda Gıda ve Callypso dışı otomasyonlarla genişleme. Süreler kaba plandır; keşif görüşmesinden sonra netleşir.", "small"),
    Spacer(1, 4),
    phase("Gün 0–30", "Keşif, kurulum ve Engage pilotu (Deda Pack)", [
        "<b>1. hafta:</b> Satış sorumlusuyla 1 saatlik keşif görüşmesi. Teklif süreci, mevcut WhatsApp kullanımı ve müşteri listesinin nerede durduğu (Excel/CRM/ERP) netleşir.",
        "<b>1. hafta:</b> Ücretsiz güvenlik notu teslimi: Adana Konteyner sitesi, kırık dedaplast.com, 404 veren katalog ve teklif PDF'leri.",
        "<b>1–2. hafta:</b> Deda Pack sitesine yapılandırılmış teklif formu (ürün, ölçü, gramaj, adet, baskı rengi, ülke); önce TR + EN.",
        "<b>1–2. hafta:</b> Temel ölçüm: form gönderimi, WhatsApp ve telefon tıklaması olayları; çerez onayı.",
        "<b>2. hafta:</b> Engage kurulumu: WhatsApp Business bağlantısı, müşteri listesinin Excel ile aktarımı, WhatsApp şablonlarının onayı, iletişim izinleri (İYS/KVKK).",
        "<b>2–4. hafta:</b> İlk iki Engage akışı canlıda: (1) talebe otomatik onay mesajı, (2) teklif sonrası takip dizisi (3. gün WhatsApp, 7. gün e-posta, 14. gün temsilciye hatırlatma).",
        "<b>4. hafta:</b> Başlangıç ölçümü: kaç talep geldi, ilk yanıt süresi, kaç teklif gönderildi.",
    ], "Teklif formu, ölçüm altyapısı, canlı 2 Engage akışı, güvenlik notu.",
       "Satış sorumlusunun 1 saati, müşteri listesi (Excel), WhatsApp Business hesabı, site yönetici erişimi.",
       "Gelen her talebin kayda girmesi; ilk yanıt süresinin ölçülebilir hâle gelmesi."),
    phase("Gün 30–60", "Genişleme: tekrar sipariş, fuar takibi ve tek gelen kutusu", [
        "<b>Engage:</b> Tekrar sipariş hatırlatması. Son sipariş tarihine göre WhatsApp mesajı: “Aynı siparişi tekrarlayalım mı?”",
        "<b>Engage:</b> Fuar kontakları için çok dilli dizi (1. gün teşekkür + katalog, 7. gün sektöre uygun ürün, 21. gün teklif daveti).",
        "<b>Engage:</b> Sektöre göre segmentler (fırın, kafe, eczane, zincir market…) ve A/B testli ilk mesajlar.",
        "<b>Inboxly:</b> WhatsApp hatları, Instagram ve web sohbeti tek panelde. Ölçü, gramaj ve sipariş miktarı gibi sık sorulara AI yanıt; teklif talebi temsilciye devredilir.",
        "<b>GeoAdra:</b> Deda Makina için ücretsiz AI görünürlük raporu (“plastik geri dönüşüm makinesi üreticisi” sorularında rakip karşılaştırması).",
        "<b>Deda Makina:</b> Kırık PDF yerine çevrim içi makine teklif formu (malzeme, kapasite, modüller).",
        "<b>Callypso dışı:</b> Web izleme ve uyarı botu (uptime, 404, beklenmeyen içerik, alan adı süresi).",
    ], "3 yeni Engage akışı, Inboxly pilotu, GeoAdra raporu, Makina teklif formu, izleme botu.",
       "Sipariş geçmişi (en az 12 ay, Excel yeterli), fuar kontak listeleri, Makina teklif formundaki alanlar.",
       "Cevapsız tekliflerden geri dönüş oranı; tekrar siparişlerin hatırlatma sonrası gelmesi; tek panelden yönetilen mesaj oranı."),
    phase("Gün 60–90", "Ölçüm, optimizasyon ve grup geneline yayılma", [
        "<b>Sonuç raporu:</b> 0. güne göre karşılaştırma. Talep sayısı, ilk yanıt süresi, teklif ve sipariş dönüşümü, tekrar sipariş oranı.",
        "<b>Engage optimizasyonu:</b> Mesaj içeriği, gönderim saati ve kanal (WhatsApp/SMS/e-posta) A/B sonuçlarına göre düzenlenir.",
        "<b>Deda Gıda:</b> Distribütör başvuru formu ve Iceman için sezon öncesi distribütör dizisi (sezondan 8 ve 4 hafta önce).",
        "<b>Deda Makina:</b> Kurulu makineler için bakım/yedek parça hatırlatma akışı (kurulu makine listesi varsa); GeoAdra raporuna göre teknik ürün sayfaları.",
        "<b>Voice Agent (opsiyonel):</b> Kaçan arama verisi anlamlıysa mesai dışı ve yabancı dildeki aramalar için pilot.",
        "<b>Callypso dışı:</b> Otomatik teklif taslağı (fiyat tablosundan PDF teklif) ve haftalık yönetim özeti; uygunsa sipariş belgesi işleme (Gıda).",
        "<b>Karar toplantısı:</b> Yıllık kapsam, hangi şirketlerin ve ürünlerin devam edeceği.",
    ], "Sonuç raporu, optimize edilmiş akışlar, Gıda ve Makina akışları, genişleme teklifi.",
       "Pilot sonuçları üzerine yönetim toplantısı; Gıda ve Makina için birer sorumlu.",
       "Pilot sonuçlarının yönetim tarafından görülmesi ve genişleme kararı."),
    box([P("<b>Toplantıda nasıl anlatılmalı?</b> Yalnızca 0–30 günü ayrıntılı anlatın; 60 ve 90 günü “sonuç geldikçe” diye tek cümleyle geçin. "
           "Karar vericiden istenen tek şey ilk 30 gün için onay ve satış sorumlusunun 1 saati. Yol haritasında süre, tasarruf veya gelir "
           "rakamı vaat etmeyin; başarı ölçüleri pilotta birlikte ölçülecek göstergelerdir.")], bg=AMBER_SOFT, border=colors.HexColor("#9a6100")),
]

story.append(PageBreak())

# ---------------------------------------------------------------- 7. İtirazlar
story += [
    P("Olası itirazlar ve cevaplar", "h1"),
    table(
        ["İtiraz", "Cevap"],
        [
            ["“Bizim işimiz referansla yürüyor, pazarlamaya ihtiyacımız yok.”",
             "“O zaman mevcut müşterinin tekrar siparişini kaçırmamak daha da değerli. Engage'i yeni müşteri bulmak için değil, var olanı tutmak için öneriyoruz.” (Soru 3'e dönün.)"],
            ["“CRM'imiz yok, verimiz Excel'de.”",
             "“Pilot için yeterli. Excel listesiyle başlar, 30 günde hangi verinin gerçekten gerektiğini birlikte görürüz.”"],
            ["“WhatsApp'tan toplu mesaj spam gibi algılanır.”",
             "“Toplu kampanya değil; teklif isteyen veya sipariş vermiş müşteriye, onun konusuyla ilgili tek tek giden hatırlatmalar. Onaylı şablon ve izin yönetimi var.”"],
            ["“Başka bir yazılımı ekip kullanmaz.”",
             "“Ekip yeni bir ekran öğrenmiyor; takipler kendiliğinden gidiyor, temsilci yalnızca cevap gelince devreye giriyor.”"],
            ["“Fiyat nedir?”",
             "“Önce 30 günlük, tek şirketlik pilot kapsamını netleştirelim; keşif görüşmesinden sonra net teklif getireyim.” (Toplantıda rakam vermeyin.)"],
        ],
        [58, 116],
    ),
    P("Dikkat edilecekler", "h1"),
    *bullets([
        "<b>Rakam uydurmayın.</b> Analizde gelir, ROI veya dönüşüm tahmini yok. Sitedeki genel istatistikleri (%60 maliyet azalması gibi) Deda'ya özgü bir vaat gibi sunmayın.",
        "<b>Hipotezi soruyla doğrulayın.</b> “Takip kişiye bağlı” bir tespit değil, bir hipotez. Söylemek yerine Soru 2 ile onlara söyletin.",
        "<b>Odak tek şirkette kalsın.</b> Grubun tamamına aynı anda çözüm önermek kararı yavaşlatır. Pilot Deda Pack ile başlasın; Makina ve Gıda ikinci dalga.",
        "<b>Karar vericiyi belirleyin.</b> Aile şirketi: toplantıdaki kişi karar vermiyorsa kapanışta “bu kararı kiminle birlikte veriyorsunuz?” diye sorun.",
        "<b>Kişisel veri:</b> WhatsApp mesajları için iletişim izni (İYS) ve KVKK aydınlatma metni gerekir. Pilot kapsamına dahil edin.",
    ]),
    P("Kapanış konuşması ve sonraki adım", "h1"),
    box([P("“Önerimiz şu: <b>30 gün, tek şirket: Deda Pack.</b> Teklif talebini düzgün toplayalım, cevapsız tekliflere ve "
           "tekrar siparişe Callypso Engage ile WhatsApp'tan otomatik takip kuralım. 30 gün sonra size şu tabloyu getirelim: "
           "kaç talep geldi, kaç saatte dönüldü, kaçı teklife ve siparişe döndü. Bunun için satış sorumlunuzla bir saatlik bir "
           "keşif görüşmesi yeterli. Bu hafta perşembe mi uygun, gelecek hafta salı mı?”", "quote")],
        bg=AMBER_SOFT, border=colors.HexColor("#9a6100")),
    Spacer(1, 6),
    P("Kapanışı “ilginizi çekti mi?” ile değil, iki tarih seçeneğiyle yapın. Ayrılmadan önce Konteyner ve dedaplast.com güvenlik "
      "notunu birebir iletin ve GeoAdra raporunu “hediye” olarak teklif edin.", "small"),
    P("Toplantıda açılacak dashboard bölümleri", "h2"),
    *bullets([
        "deda-group-growth.vercel.app → <b>Yönetici Özeti</b> (rakamlar)",
        "<b>Sorunlar &amp; Otomasyon</b> → PP01 (Pack teklif formu), PP10 (Makina PDF 404)",
        "<b>Reklam İstihbaratı</b> → Google arama görünürlüğü tablosu",
        "<b>Canlı Simülasyon</b> → “Engage nasıl çalışır?” sorusu gelirse, gerçek bir Deda Pack ürünüyle",
    ]),
    Spacer(1, 8),
    P("Kaynaklar: 19–20 Ekim 2026'da Apify ile taranan grup siteleri (244 sayfa), Meta Reklam Kütüphanesi, Google TR arama sonuçları "
      "ve callypsotech.com ürün sayfası. Tüm kanıtlar dashboard'daki Evidence Explorer'da kaynak bağlantılarıyla yer alıyor. "
      "İç süreçlerle ilgili ifadeler hipotezdir ve toplantıda doğrulanmalıdır.", "small"),
]

doc = SimpleDocTemplate(str(OUT), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=16 * mm, bottomMargin=16 * mm,
                        title="Deda Group — Toplantı Strateji Belgesi", author="Callypso Tech")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
