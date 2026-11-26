# Türkiye SaaS Fırsat Seçimi — Apify Rakip Taraması ve Karar

Tarih: 26 Kasım 2026 · Yöntem: Apify Google Search Scraper (TR, Türkçe, 30 sorgu, ilk sayfa) + Google Maps örneklemi (İstanbul). Bulgular ilk sayfa SERP'e dayanır; pazar büyüklüğü ölçümü değildir.

## 1. Rakip yoğunluğu (Google TR ilk sayfada doğrudan rakip ürün sayısı)

| Fikir | Doğrudan yerel rakip (ilk sayfa) | Örnekler | Yorum |
|---|---|---|---|
| Su arıtma servis/filtre takibi | 9 | ArıtmaPlus, Servios, Negrum, TeknikPlus | Doymuş |
| Endüstriyel mutfak servis (GastroService) | 9 | ServisPozitif, PeraFix, ESN, AsentTime, Livo | Doymuş |
| Asansör bakım takibi | 8 | Asansorex, AsBakım, LogAPP, Opwire | Doymuş |
| İlaçlama / pest (PestPassport) | 9 | İlaçlamatik, Böcekus, PCOyönetimi, EK-1 PRO | Doymuş |
| Hakediş / ek iş (ExtraWork) | 9 | Konstra, ŞantiyePro, HakedişJet | Doymuş |
| Kiralık ekipman (DamageProof) | 6 | RentInHand, Ekipman360, KiralamaTakip | Kalabalık (hasar AI'ı farklılaşabilir) |
| OSGB / İSG | 9 | OSGBpro, Kontinus, isgai | Doymuş |
| Temizlik kalite/QR (CleanProof) | 9 | Temizlendi, Girin, Odetus, Clened, ProVardix, AhtapotSoft | Doymuş — sadece "müşteriye kanıt portalı" boş değil |
| Yedek parça teklif AI (PartsQuote) | 5 | Intelligence AI "Teklif Robotu", Centoro AI RFQ, Dijitalpi, Averissoft "Teklif Asistanı", Busana | Kategori doğrulanmış ama erken kalabalık |
| Forwarder navlun teklif | 8 | Forwardia, Loadla, Lojisoft, Logiztic, PekVera Quotarix | Kalabalık |
| Tedarikçi belge takibi | 6+ | ISODECK, BuyerSoft, Qolay | Kalabalık |
| Ambalaj artwork onayı | 2 | NNProof, Esko | Az ama pazar dar |
| Garanti alacağı geri kazanımı (WarrantyRecover) | ~0 | Sadece Miyar ERP'de modül | Boş |
| Servis gelir kaybı tespiti (ServiceRevenue) | ~0 | Doğrudan "kayıp gelir bulma" ürünü yok | Boş |
| Konteyner demuraj/D&D itiraz | 1 (yabancı) | Atlas Claims (TR sayfası var) | Az |

**Ana bulgu:** 2026 itibarıyla Türkiye'de "X sektörü için takip programı" kategorisi neredeyse her dikeyde dolmuş (çoğu yeni, küçük, SEO odaklı ürün). Klasik dikey yönetim yazılımı artık farklılaşma değil. Boş kalan alan **"işletmenin kaybettiği parayı bulan ve geri getiren"** katman.

## 2. Lead bulunabilirliği (Google Maps örneklemi, İstanbul)

| Arama | İlk sonuç | Web sitesi oranı | Telefon |
|---|---|---|---|
| Endüstriyel kompresör servisi | 11 | %81 | %91 |
| Jeneratör bakım servisi | 14 | %64 | %93 |
| Kurumsal temizlik şirketi | 21 | %76 | %95 |

Not: Koşu zaman aşımına uğradığı için örneklem kısmi. Hedef firmaların büyük çoğunluğunda web sitesi var → domain üzerinden kurumsal e-posta ve LinkedIn'de karar verici (genel müdür / servis müdürü) bulunabilir.

## 3. Karar: ServiceRevenue AI ("Bakım Geliri Motoru")

**Soru:** İnsanlar zaten düzenli para harcıyor mu, mevcut deneyim kötü mü, yazılım bunu ölçeklenebilir şekilde daha değerli yapar mı?

- **Düzenli harcama:** Jeneratör, kompresör (basınçlı kap), forklift, chiller/HVAC, endüstriyel su arıtma bakımları periyodik; bir kısmı yasal periyodik kontrol zorunluluğuna bağlı. Fabrikalar bu parayı her yıl harcıyor.
- **Kötü deneyim:** Servis firmaları bakım tarihini, sözleşme bitişini ve cevapsız teklifi Excel/WhatsApp ile takip ediyor; müşteri hatırlatılmazsa rakibe ya da "arızalanınca ararım"a kayıyor. Bu gelir görünmeden kayboluyor.
- **Neden bu, diğerleri değil:** Türkiye'de 9+ servis programı var ama hepsi *kayıt* tutar; hiçbiri "geçen yıl şu kadar TL kaçırdınız, işte liste" demiyor. Ürün mevcut sistemin *üzerine* oturur (Excel / Logo / Mikro / Netsis dışa aktarımı) → müşteri sistem değiştirmez, satış sürtünmesi düşer.
- **Lead kolaylığı:** Google Maps + firma siteleri + LinkedIn (servis müdürü, genel müdür). Sektör anahtar kelimeleri net.
- **Satış kancası:** Ücretsiz "Kayıp Gelir Analizi" — firma son 2–3 yılın servis kayıtlarını Excel olarak gönderir, 48 saatte TL cinsinden rapor döner. Cold mail'in teklifi bu rapordur, demo değil.

### MVP kapsamı (3–4 hafta)
1. Excel/CSV yükle → kolon eşleme (müşteri, cihaz, son bakım, sözleşme bitişi, teklif durumu, tutar).
2. Kural motoru: bakımı geçmiş, sözleşmesi bitmiş/bitecek, 30+ gün cevapsız teklif, önerilip yapılmamış işlem.
3. TL bazlı "geri kazanılabilir gelir" paneli.
4. Otomatik takip: e-posta + WhatsApp Business şablonları, tek tıkla teklif PDF'i.
5. "Geri kazanılan gelir" raporu (ürünün değerini aylık kanıtlar → churn düşer).

### Fiyat
4.990–14.990 TL/ay veya düşük sabit ücret + geri kazanılan gelirin %5–10'u (ilk pilotlarda başarı primi satışı kolaylaştırır).

### Genişleme yolu
- Modül 2: **Garanti alacakları** (yetkili servis olan aynı müşteriler üreticiden talep edemediği parça/işçiliği kaybediyor — rakip yok).
- Modül 3: Sözleşme kârlılığı (enflasyonla zarara dönen bakım sözleşmeleri — ContractMargin).
- Sonra aynı motor: su arıtma, asansör, klima, ilaçlama firmalarına (oradaki takip programlarıyla rekabet etmeden, onların üzerine).

## 4. Yedek / alternatif sıralama

1. **ServiceRevenue AI** — seçilen.
2. **PartsQuote AI** — acı çok büyük ve 5 yerel rakip talebi doğruluyor; fakat ürün eşleştirme doğruluğu + ERP entegrasyonu teknik riski yüksek ve pazar erken kalabalıklaşıyor. Girilecekse tek bir alt dikeye (ör. sadece rulman/güç aktarımı) dikey katalog bilgisiyle girilmeli.
3. **WarrantyRecover** — rakip yok, işlem başı para büyük; ama hedef kitle dar (marka yetkili servisleri) ve üretici portallarına veri erişimi zor. Bağımsız ürün değil, ServiceRevenue'nun 2. modülü olarak daha güçlü.
4. **CleanProof** — en kolay MVP ama QR temizlik takibinde 9+ rakip var; ancak "kurumsal müşteriye aylık kalite karnesi ve sözleşme yenileme kanıtı" konumlandırmasıyla niş kalabilir.

## 5. 14 günlük doğrulama (ServiceRevenue odaklı)

- **Gün 1–3:** Apify Google Maps ile 7 bölgede (İstanbul, Kocaeli, Bursa, Ankara, İzmir, Konya, Kayseri) kompresör / jeneratör / chiller / forklift servisleri → 300 firma; web sitesinde "bakım sözleşmesi", "periyodik bakım" geçenleri önceliklendir.
- **Gün 4–5:** LinkedIn'de servis müdürü / genel müdür eşleştirme; KVKK ve ticari elektronik ileti (İYS) kurallarına uygun B2B e-posta.
- **Gün 6–7:** Örnek Excel ile çalışan demo + 90 sn Loom.
- **Gün 8–12:** Cold mail: "Son 2 yılın servis listenizi gönderin, 48 saatte kaçırdığınız bakım gelirini TL olarak çıkaralım."
- **Gün 13–14:** Başarı ölçütü: 300 firmadan ≥10 veri gönderimi ve ≥3 ücretli pilot sözü.

## Sınırlar
- SERP ilk sayfası rakip varlığını gösterir, rakiplerin müşteri sayısı/gelirini göstermez.
- Maps örneklemi kısmi ve yalnızca İstanbul.
- "Boş" görünen alanlarda ürün olmaması, talep olmamasından da kaynaklanabilir — ücretsiz analiz teklifi tam olarak bunu test eder.
