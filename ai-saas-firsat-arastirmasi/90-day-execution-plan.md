# 90 Günlük Uygulama Planı: En Güçlü 3 Fırsat

**Tarih:** 16 Kasım 2026
**Varsayım:** 1–3 kişilik ekip; kodlama Claude Code ile; dışarıdan yatırım yok.

## Temel kurallar (üç plan için de geçerli)

1. **Müşteri yoksa özellik de yok.** Her yeni özellik, ödeme yapan veya pilot kullanan bir müşterinin açık talebine dayanmalı. "Olsa iyi olur" listesi tutulur ama geliştirilmez.
2. **Önce elle, sonra otomatik.** İlk müşterilere hizmet yarı manuel verilir ("Wizard of Oz" yöntemi). Ürünleştirme, aynı işin 3. kez tekrarlanmasından sonra başlar.
3. **Haftalık takip edilecek tek metrik:** Gün 1–30 arası yapılan **görüşme sayısı**, Gün 31–60 arası **pilottan ücretliye geçiş sayısı**, Gün 61–90 arası **net yeni MRR**.
4. **Bırakma kriterleri önceden yazılır.** Aşağıdaki kriterler karşılanmazsa ilgili fikir bırakılır, ayrıca savunulmaz.
5. **Seçim:** Gün 15'te üç fikirden **en güçlü sinyal veren biri** seçilir (ekip 2+ kişiyse en fazla ikisi). Planlar paralel yazıldı ama paralel yürütülmemeli.

---

## Plan A: Sağlık turizmi klinikleri için AI hasta danışmanı

### Gün 1–15: Problem ve talep doğrulama
| Görev | Ayrıntı | Çıktı |
|---|---|---|
| Hedef liste | USHAŞ yetki belgeli listesi + Meta Ad Library'de reklam veren İstanbul/Antalya saç, diş ve estetik klinikleri → 150 klinik | Google Sheet |
| Gizli müşteri testi | 40 kliniğe EN/DE/AR dilinde WhatsApp ve Instagram'dan mesaj; **mesai içi ve dışı yanıt süresini** ölç | "Yanıt süresi raporu" (satış kancası) |
| Problem görüşmeleri | 15 klinik sahibi veya koordinatörle 20 dakikalık görüşme. Sorular: Ayda kaç lead geliyor? Kaçı randevuya dönüşüyor? Kaç koordinatör var, maaşları ne? Gece gelen mesajlar ne oluyor? Şu an hangi CRM kullanılıyor? | Görüşme notları |
| Rakip analizi | iriCRM, Connectico, MetoCRM ve Webklinik demo talebi; fiyat ve eksiklerin notu | Karşılaştırma tablosu |
| Hukuki ön görüşme | KVKK avukatıyla 1 saat: açık rıza metni, veri işleme sözleşmesi, yurt dışı aktarım | Yapılacaklar listesi |

**Gün 15 devam kriteri:** ≥10 görüşme, ≥5 klinik "pilot denerim" diyor, ≥2 klinik fiyat aralığına (€290+) itiraz etmiyor. **Karşılanmazsa bırak.**

### Gün 16–30: MVP ve demo
| Görev | Ayrıntı |
|---|---|
| MVP | WhatsApp Cloud API (test numarası) + Claude + bilgi bankası (klinik SSS ve paketleri) + kalifikasyon akışı + insana devir + Google Sheets'e lead aktarımı + günlük e-posta özeti |
| Demo botu | Hayali bir "Demo Klinik" ile EN/DE/AR dillerinde 3 dakikalık Loom videosu |
| Kişiselleştirilmiş demo | Pilot adayı 5 kliniğin web sitesinden bilgi bankası oluşturup **kendi kliniklerinin botunu** göstermek |
| Yasal metinler | Gizlilik bildirimi, "AI asistanı" bildirimi, veri işleme sözleşmesi taslağı |
| **Yapılmayacaklar** | Panel, Instagram, ses, CRM entegrasyonu, faturalama sistemi |

### Gün 31–45: İlk pilot müşteriler
| Görev | Ayrıntı |
|---|---|
| 3–5 pilot | 14 gün ücretsiz (veya €99 sembolik ücret). Kliniğin gerçek numarasında **yalnızca mesai dışında** çalışır, düşük riskle başlanır |
| Günlük denetim | Her gün 20 konuşma okunur; hatalar bilgi bankasına işlenir |
| Ölçüm | İlk yanıt süresi, kalifiye lead sayısı, randevu sayısı, koordinatörün kazandığı saat |
| Haftalık görüşme | Her pilotla 15 dakika: "Neyi eksik buldun? Bunu kaybetsen ne olur?" |

**Gün 45 devam kriteri:** ≥3 aktif pilot; en az 1 pilotta ölçülebilir randevu artışı veya mesai dışı ≥30 kalifiye lead.

### Gün 46–60: İlk ücretli müşteriler
| Görev | Ayrıntı |
|---|---|
| Pilottan ücretliye geçiş | Pilot sonu ROI raporu ve teklif: €290–590/ay + kurulum. Hedef ≥2 ücretli |
| Yeni satış | Gizli müşteri raporu + Loom ile 50 kliniğe kişiselleştirilmiş ulaşım; hedef 10 demo |
| Faturalama | Stripe veya iyzico; yıllık ödemede 2 ay ücretsiz |
| Sadece talep edilen özellik | Örn. 2 müşteri Instagram isterse Instagram eklenir |

**Gün 60 hedefi:** 3–5 ücretli müşteri, **€1.000–2.000 MRR**.

### Gün 61–90: Tekrarlanabilir satış ve büyüme
| Görev | Ayrıntı |
|---|---|
| Satış senaryosu | Gizli müşteri testi → rapor → kişiselleştirilmiş demo → 14 günlük pilot → ücretli. Dönüşüm oranları ölçülür |
| Kanal testi | (a) Klinik reklam ajanslarına %20 yinelenen komisyonla ortaklık; (b) sağlık turizmi fuar/etkinlik; (c) LinkedIn içerikleri ("Türk kliniklerinin %X'i gece mesajlara yanıt vermiyor" gibi araştırma) |
| Ürün | Teklif PDF'i ve takip akışları (talep geldiyse); kendi kendine kurulum sihirbazı |
| Vaka çalışması | En iyi pilotun rakamlarıyla 1 sayfalık vaka çalışması |

**Gün 90 hedefi:** 8–12 ücretli müşteri, **€3.000–5.000 MRR**, en az 1 çalışan kanal ortaklığı.
**Bırakma kriteri:** Gün 90'da <4 ücretli müşteri ve satış döngüsü 45 günden uzunsa → Model 7 (yurt içi diş/estetik) veya Model 8'e geçilir (aynı altyapı).

---

## Plan B: İhracatçılar için AI alıcı bulma ve çok dilli yazışma

### Gün 1–15: Problem ve talep doğrulama
| Görev | Ayrıntı | Çıktı |
|---|---|---|
| Hedef liste | 3 sektör seç (ör. mobilya, gıda ambalajı, yapı malzemesi); ihracatçı birliği üye listeleri + LinkedIn'deki "export manager"lar → 200 firma | Google Sheet |
| Ürünün kendisiyle satış | 10 firma için **ücretsiz örnek liste**: 20 hedef ithalatçı + AI araştırma notu + taslak mesaj (Apify + Claude ile bir akşamda) | 10 örnek paket |
| Problem görüşmeleri | 15 ihracat müdürü veya patronla görüşme. Sorular: Yeni alıcıyı nasıl buluyorsunuz? Fuara yılda ne harcıyorsunuz? Hangi pazara girmek istiyorsunuz? Daha önce danışman veya platform denediniz mi, sonuç ne oldu? | Notlar |
| Rakip analizi | TrueTradeX ve asistanim.ai'den teklif iste; Alibaba ve fuar maliyetlerini karşılaştır | Tablo |
| Mevzuat | AB soğuk e-posta (GDPR/UWG) ve Türkiye 6563 sayılı Kanun için kısa hukuki görüş | Ülke kuralları listesi |

**Gün 15 devam kriteri:** ≥10 görüşme, örnek liste alan firmaların ≥3'ü "bunu her ay isterim" diyor, ≥2 firma €150'lik pilota evet diyor.

### Gün 16–30: MVP ve demo (hizmet olarak)
| Görev | Ayrıntı |
|---|---|
| Hat (pipeline) | Apify (Google Maps, dizinler, web siteleri) → Claude ile firma uygunluk puanı ve araştırma notu → Apollo/Hunter ile karar verici ve e-posta → doğrulama → Google Sheets'te onay sütunu |
| Gönderim | Instantly veya Smartlead; müşteri başına 2 ikincil alan adı, 5 kutu, 14 günlük ısıtma (**ısıtmayı Gün 16'da başlat**) |
| Rapor | Haftalık Google Sheets/PDF raporu: gönderilen, açılan, yanıt veren, olumlu, RFQ |
| Demo | 3 dakikalık Loom: "Ürününüz X; Almanya'da şu 20 distribütör var; onlara şöyle yazacağız" |
| **Yapılmayacaklar** | Web panel, müşterinin kendi kendine kullanacağı arayüz, LinkedIn otomasyonu |

### Gün 31–45: İlk pilot müşteriler
| Görev | Ayrıntı |
|---|---|
| 3–5 pilot | €150 / 30 gün, 1 pazar, 300 alıcı |
| Kalite kontrol | Her mesaj müşteri onayından geçer; ilk hafta yanıt oranına göre mesaj revize edilir |
| Yanıt yönetimi | Gelen yanıtlar sınıflandırılıp 24 saat içinde müşteriye iletilir |
| Ölçüm | Olumlu yanıt sayısı, RFQ sayısı, görüşme sayısı |

**Gün 45 devam kriteri:** Pilotlarda ortalama ≥%2 olumlu yanıt oranı **veya** pilot başına ≥3 nitelikli görüşme/RFQ. Karşılanmazsa ICP veya mesaj değiştirilir; 2. denemede de olmazsa bırakılır.

### Gün 46–60: İlk ücretli müşteriler
| Görev | Ayrıntı |
|---|---|
| Pilottan ücretliye geçiş | €390–790/ay + kurulum; hedef ≥3 ücretli |
| Yeni satış | 50 firmaya örnek liste + Loom; ihracatçı birliği veya dernek etkinliğinde 1 sunum |
| Operasyon | Tekrarlayan adımları scriptleştir (ICP → liste → araştırma → taslak) |

**Gün 60 hedefi:** 3–5 ücretli müşteri, **€1.500–2.500 MRR**.

### Gün 61–90: Tekrarlanabilir satış ve büyüme
| Görev | Ayrıntı |
|---|---|
| Satış senaryosu | Örnek liste → Loom → pilot → ücretli; sektör başına dönüşüm oranı |
| Ortaklık | Dış ticaret danışmanları, gümrük müşavirleri ve fuar organizatörleriyle komisyonlu iş birliği |
| Ürün | Talep varsa basit web onay paneli; RFQ'dan teklif taslağına geçiş (Fırsat #5 ile birleşme) |
| Müşteriyi tutma | Aylık sonuç görüşmesi; 2 ayda sonuç yoksa ücretsiz bir ay ek pazar (müşteri kaybını yönetmek için) |

**Gün 90 hedefi:** 8–12 ücretli müşteri, **€3.500–6.000 MRR**, aylık müşteri kaybı <%10.
**Bırakma kriteri:** 3. ayda müşteri kaybı >%25 ise model yalnızca hizmet olarak sürdürülür ve ürünleştirmeye geçilmez.

---

## Plan C: Mali müşavirler için AI evrak toplama asistanı

### Gün 1–15: Problem ve talep doğrulama
| Görev | Ayrıntı | Çıktı |
|---|---|---|
| Hedef liste | Oda üye listeleri ve Google Maps'ten 80–400 mükellefli olduğu tahmin edilen 150 büro (İstanbul, Ankara, İzmir) | Sheet |
| Problem görüşmeleri | 15 büro sahibiyle görüşme. Sorular: Evrak nasıl geliyor? Ay sonu kaç saat evrak kovalanıyor? Hangi muhasebe programı kullanılıyor? Evrako, DocMach veya Kalfa denendi mi? Personel maliyeti ne? | Notlar |
| Saha gözlemi | 2 büroda ay sonu yarım gün gözlem (izinle): evrak akışının ve WhatsApp yazışmalarının kaydı | Süreç haritası |
| Rakip analizi | Evrako, DocMach ve Kalfa Asist demolarında eksikleri listele (özellikle **evrak tahsilatı** tarafı) | Tablo |
| Format çalışması | Zirve, Luca, Mikro ve Logo'nun Excel içe aktarma şablonlarını topla | Şablon klasörü |

**Gün 15 devam kriteri:** ≥10 görüşme, ≥6 büro "evrak kovalamak en büyük sorunum" diyor, ≥3 büro ₺2.500+/ay'a pilot sonrası ödemeyi kabul ediyor.

### Gün 16–30: MVP ve demo
| Görev | Ayrıntı |
|---|---|
| MVP | Mükellef listesi (CSV) → aylık WhatsApp şablon hatırlatması → gelen görselleri Claude ile okuma (tarih, VKN, tutar, KDV, belge türü) → eksik ve mükerrer tespiti → büro için basit liste ekranı → Excel çıktısı (1 muhasebe programı formatı) |
| Demo | Loom: "Mükellef fişi WhatsApp'tan atıyor, 10 saniye sonra büronun Excel'inde" |
| Doğruluk testi | 300 gerçek (anonimleştirilmiş) fiş ve dekontla alan doğruluğu ölçümü; hedef ≥%95 |
| **Yapılmayacaklar** | Muhasebe programlarına API entegrasyonu, banka eşleştirme, mükellef chatbot'u, mobil uygulama |

### Gün 31–45: İlk pilot müşteriler
| Görev | Ayrıntı |
|---|---|
| 3–5 pilot büro | **Ay sonu kapanışını kapsayacak şekilde** 30 gün ücretsiz; her büroda 20–50 mükellefle başla |
| Ölçüm | Toplanan belge sayısı, zamanında gelen evrak oranı, personel saati tasarrufu (önce/sonra), okuma hata oranı |
| Destek | Büro personeliyle WhatsApp destek grubu; sorunların 24 saatte çözümü |

**Gün 45 devam kriteri:** ≥3 aktif büro, mükelleflerin ≥%50'si belgelerini bot üzerinden gönderiyor, büro "devam etmek istiyorum" diyor.

### Gün 46–60: İlk ücretli müşteriler
| Görev | Ayrıntı |
|---|---|
| Pilottan ücretliye geçiş | ₺2.500–5.000/ay; yıllık ödemede kurulum ücretsiz. Hedef ≥3 ücretli |
| Yeni satış | Görüşülen 150 büroya pilot sonuçlarıyla (ör. "X büro ay sonu evrak takibinde 12 saat kazandı") ulaşım; oda eğitimlerine katılım; mali müşavir YouTube/Instagram içerik üreticileriyle ortaklık teklifi |
| Ürün | 2. ve 3. muhasebe programı formatı (müşteriler talep ettikçe) |

**Gün 60 hedefi:** 4–6 ücretli büro, **₺12.000–25.000 MRR**.

### Gün 61–90: Tekrarlanabilir satış ve büyüme
| Görev | Ayrıntı |
|---|---|
| Satış senaryosu | Görüşme → Loom → ay sonuna denk gelen pilot → ücretli; büro büyüklüğüne göre dönüşüm |
| Tavsiye programı | Getirdiği her büro için 1 ay ücretsiz (mali müşavirler birbirini tanır) |
| Kanal | Oda veya eğitim kurumu iş birliği; muhasebe yazılımı bayileriyle komisyonlu satış |
| Ürün | Talep varsa tahakkuk ve beyanname PDF'lerinin mükellefe otomatik gönderimi |

**Gün 90 hedefi:** 10–15 ücretli büro, **₺35.000–60.000 MRR**, aylık müşteri kaybı <%3.
**Bırakma kriteri:** Pilottan ücretliye geçiş <%30 ise fiyat ve kapsam yeniden değerlendirilir. Rakiplerden biri aynı tahsilat özelliğini daha ucuza sunuyorsa niş daraltılır (ör. yalnızca e-ticaret mükellefi olan bürolar).

---

## Ortak zaman çizelgesi ve karar noktaları

| Gün | Karar noktası |
|---|---|
| 15 | Üç fikrin talep sinyali karşılaştırılır. **En güçlü olan seçilir**, diğerleri arşivlenir (2 kişilik ekipte en fazla 2 fikir) |
| 30 | MVP + demo hazır mı? Hazır değilse kapsam küçültülür, süre uzatılmaz |
| 45 | Pilotlarda ölçülebilir değer var mı? Yoksa ICP veya mesaj değiştirilir (tek bir deneme hakkı) |
| 60 | ≥3 ücretli müşteri var mı? Yoksa fikir değiştirilir |
| 90 | Tekrarlanabilir bir satış kanalı bulundu mu? Varsa ölçeklenir; yoksa hizmet olarak sürdürülüp nakit yaratılır |

## Bütçe tahmini (90 gün, seçilen tek fikir için)

| Kalem | Tahmin |
|---|---|
| LLM API (Claude) | $100–400 |
| WhatsApp çözüm ortağı / Instantly / veri kredileri | $150–600 |
| Altyapı (hosting, veritabanı, alan adları) | $50–150 |
| Hukuki danışmanlık (KVKK, sözleşmeler) | ₺15.000–40.000 |
| Apify (araştırma ve liste oluşturma) | $20–50 |
| **Toplam** | **~$500–1.500 + hukuki danışmanlık** |

## Haftalık ritim

- **Pazartesi:** Geçen haftanın metrikleri (görüşme / pilot / MRR). Bu haftanın tek hedefi.
- **Salı–Perşembe:** %60 satış ve müşteri görüşmesi, %40 ürün (yalnızca müşterinin talep ettiği).
- **Cuma:** Konuşma ve log denetimi, hata düzeltme, kısa bir yazı ya da Loom (içerik pazarlaması).

> **Hatırlatma:** Bu plandaki fiyat, maliyet ve hedefler tahmindir. Gün 1–15'teki görüşmeler, buradaki varsayımların yerine geçecek gerçek veriyi üretmek için yapılır.
