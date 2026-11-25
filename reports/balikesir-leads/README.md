# Balıkesir müşteri adayları – Callypso Export Agent

Hedef kitle: ihracat yapan veya yapabilecek Balıkesir'deki üreticiler. Callypso Export Agent bu firmalar için ihracat taleplerini inceliyor, teklif ve takip taslakları hazırlıyor.

**Dosyalar**
- `balikesir-leadler.xlsx`: "Balıkesir Leadler" sayfasında 119 firma, "Karar Vericiler" sayfasında 25 kişi var.
- `balikesir-leadler.csv`: firma listesinin aynısı (UTF-8).

**Yöntem (25.11.2026)**
1. Apify Google Maps Scraper ile 12 sektörde Balıkesir ilinde arama yapıldı ve web sitelerinden iletişim bilgisi toplandı: zeytinyağı, süt ürünleri, peynir, mermer, makine, gıda, tekstil, mobilya, ihracat firması, yem, otomotiv yan sanayi, plastik ambalaj. Toplam 180 kayıt geldi.
2. Perakende, tamirci ve mağaza kayıtları elendi, tekrarlar silindi. Geriye 119 firma kaldı.
3. Firma web sitelerinin "hakkımızda", "kurumsal" ve "iletişim" sayfaları tarandı. Buradan ek e-posta, telefon ve yönetici bilgisi çıkarıldı.
4. İlk 40 firma için Apify Google Search ile LinkedIn'de arama yapıldı. Yalnızca karar verici unvanları tutuldu: sahip, kurucu, genel müdür, yönetim kurulu, ihracat, satış ve pazarlama müdürü, fabrika müdürü.
5. Öncelik puanının ölçütleri şunlar: üretici kategorisi, unvanda A.Ş./Ltd./sanayi geçmesi, web sitesi, e-posta, LinkedIn ve yorum sayısı. A = 6 puan ve üstü, B = 4-5, C = 3 ve altı.

**Notlar**
- LinkedIn'den gelen isim ve unvanlar Google özetlerinden alındı. Kişiyle iletişime geçmeden önce güncel olduğunu doğrulayın.
- Bu veriler kamuya açık iş iletişim bilgileridir. İlk e-postada KVKK'ya uygun şekilde iletişim izni alın ve listeden çıkma seçeneği sunun. Ticari elektronik ileti için İYS kurallarına da uyun.
- Döhler bir çok uluslu grup, uyumu düşük. Balıkesir Sanayi Odası müşteri değil, kanal ortağı olarak değerlendirilebilir.
