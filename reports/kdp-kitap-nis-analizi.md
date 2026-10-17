# KDP Kurgu Dışı Kitap Niş Analizi

Tarih: 17 Ekim 2026 · Veri: Amazon.com ve Amazon.ca ürün sayfaları, headless tarayıcıyla canlı olarak çekildi (Apify hesabının aylık kotası dolduğu için Apify kullanılamadı).
Ham veri: `reports/kdp-data/amazon-bsr-2026-10-17.csv` (50 arama sonucu), `reports/kdp-data/demans-elestirel-yorumlar.txt` (39 eleştirel yorum).

---

## 1. On yılı aşkın süredir çözülmeyen ve hâlâ para ödenen 20 sorun

Sıralama: duygusal aciliyet (en acil olan en üstte).

| # | Sorun | Tam okuyucu | En büyük hayal kırıklıkları | Tek satırlık kitap açısı |
|---|---|---|---|---|
| 1 | Narsistik ebeveyn veya partner istismarından iyileşme | 30–55 yaş kadınlar, narsist annesi olan kızlar | "Abartıyorum galiba" diye düşünmek, temas kesince duyulan suçluluk, aynı tip partneri tekrar seçmek | Hâlâ temas halindeyken narsist anneyle nasıl sınır konur |
| 2 | Evde demanslı ebeveyne bakmak | 45–65 yaş, çoğunlukla tek başına bakan kız evlat | Ebeveynin öfkesi ve bakımı reddetmesi, kardeş çatışması, tükenmişlik, para | Yardımı olmadan, tek başına bakan evlat için hayatta kalma kılavuzu |
| 3 | Bebek uykusu | İlk kez ebeveyn olanlar, bebek 0–12 ay | Uykusuzluk, çelişkili tavsiyeler, "ağlatma" suçluluğu | Ağlatmadan, adım adım ilk 12 ay uyku planı |
| 4 | Yetişkin DEHB | Geç tanı almış 30–50 yaş kadınlar | Utanç, yarım kalan işler, ilaç kararsızlığı | İlaçsız günlük sistemler, suçluluk duymadan |
| 5 | Boşanma sonrası para | 40–60 yaş, evin parasını eşine bırakmış kadınlar | Panik, bütçe bilgisizliği, kredi notu | "Parayı hep o yönetirdi" diyen kadın için ilk 90 gün |
| 6 | Aldatılmanın ardından toparlanma | Evliliği sürdürmeye karar vermiş eşler | Takıntılı düşünceler, güvenin geri gelmemesi | Kalmaya karar verdikten sonra güven nasıl yeniden kurulur |
| 7 | Panik atak ve kronik kaygı | 25–45 yaş çalışanlar | İlaçtan korkmak, "ölüyorum" hissi | Toplantı ortasında panik atağı 90 saniyede durdurmak |
| 8 | Yas | Ebeveynini ya da eşini kaybeden yetişkinler | "Artık geçmeli" baskısı, yalnızlık | İlk yıl için gün gün yas eşlikçisi |
| 9 | Kronik bel ve boyun ağrısı | Masa başı çalışan 35–60 yaş | Fizyoterapi pahalı, egzersizler işe yaramıyor | Günde 10 dakikalık masa başı ağrı protokolü |
| 10 | Perimenopoz ve menopoz | 40–55 yaş kadınlar | Doktorun ciddiye almaması, kilo, uykusuzluk | Doktora götürülecek semptom takip defteri |
| 11 | Öfkeli ya da içine kapanan ergen | 12–17 yaş çocuğu olan ebeveynler | İletişimin kopması, ekran kavgaları | Konuşmayan ergenle 5 dakikalık konuşma senaryoları |
| 12 | Borç batağı | Maaştan maaşa yaşayan 30–50 yaş | Utanç, nereden başlayacağını bilmemek | Asgari ücretle borç kartopu planı |
| 13 | Yetişkinlerde uykusuzluk | Gece 3'te uyanan 35–60 yaş | Uyku ilacı bağımlılığı | İlaçsız 6 haftalık uykusuzluk programı (BDT-I) |
| 14 | 40 yaş üstü kilo ve insülin direnci | 40–60 yaş, diyetleri denemiş olanlar | Yo-yo etkisi, aç kalmak | Prediyabet tanısı sonrası ilk 30 gün yemek planı |
| 15 | Evlilikte kopukluk | 10 yılı aşmış çiftler | Ev arkadaşı gibi yaşamak, cinsellik | Çocuklu çiftler için "oda arkadaşı" evliliğinden çıkış |
| 16 | Hayır diyememe, insanları memnun etme | 25–50 yaş kadınlar | Sömürülmek, sınır koyunca suçluluk | Aile ve iş için hazır "hayır" cümleleri |
| 17 | Tükenmişlik | Sağlıkçılar, öğretmenler, bakım verenler | Tatil bile işe yaramıyor | Hemşireler için vardiyalar arası toparlanma |
| 18 | 30 yaştan sonra yalnızlık | Yeni şehre taşınanlar, uzaktan çalışanlar | Arkadaşlığın zor kurulması | 30 yaştan sonra 6 ayda arkadaş çevresi kurmak |
| 19 | 50 yaşında emeklilik birikiminin olmaması | 50–62 yaş, birikimi az olanlar | Panik, geç kaldım hissi | 50 yaşında sıfırdan emeklilik planı |
| 20 | Erteleme ve disiplin | Öğrenciler, serbest çalışanlar | Motivasyon kitapları işe yaramıyor | Serbest çalışanlar için yapı kurmak |

---

## 2. İlk 5 sorun: tek bir dar okuyucuya indirgenmiş hâli ve Amazon verisi

Her açıda okuyucunun Amazon'a yazacağı ifade arandı, sponsorsuz ilk 5 sonucun ürün sayfasından BSR (Best Sellers Rank, En Çok Satanlar Sıralaması) okundu.

| Açı | Amazon arama ifadesi (anahtar kelime) | İlk 5 BSR (US) | Bağımsız yazar girebiliyor mu? | Karar |
|---|---|---|---|---|
| **C. Demanslı ebeveyne bakan evlat** | `caring for parent with dementia` · `dementia caregiver book` | 1.688 · 19K · 21K · 62K · 68K · 81K · 169K | **Evet.** "Daughters Caring for a Parent with Dementia" (bağımsız yayın, 21 Eylül 2026) daha 1 ayda 81K sırada. "Dementia Caregiver's Survival Guide" (bağımsız) 21K'da. | **1. sıra: bu niş** |
| A. Narsist annenin kızları | `narcissistic abuse recovery` · `healing from narcissistic mother` | 246 · 1.041 · 10K · 17K · 21K · 107K · 154K · 304K · 625K | Kısmen. Talep çok yüksek, ancak ilk 5 sonucun 3'ü son 4 hafta içinde çıkmış ve ikisi aynı başlıkta ("11 Laws"). Bu yapay zekâ kitabı seli demek. | 2. sıra, yüksek rekabet |
| D. Geç tanı DEHB'li kadınlar | `adhd women book` · `adult adhd book` | 1.978 · 2.188 · 2.851 · 4.798 · 4.807 · 6.345 · 12K · 16K · 21K | Zor. İlk 10'un tamamı büyük yayınevinden (Rodale, Harper, Guilford, Flatiron vb.). | Kaçının |
| B. İlk kez ebeveyn olanlar, bebek uykusu | `sleep training book` · `newborn sleep book for first time parents` | 260 · 870 · 1.085 · 1.136 · 2.089 · 3.028 · 3.458 · 6.073 · 14.765 | Zor. 10–20 yıllık klasikler (Moms on Call, Babywise, Weissbluth) binlerce yorumla rafı tutuyor. | Kaçının |
| E. Boşanma sonrası para (sizin örneğiniz) | `divorce finances for women` · `budgeting after divorce` | 225K · 240K · 514K · 675K · 1,29M · 2,1M · 2,2M · iki kitapta sıralama yok | Giriş kolay ama **talep yok**. 2026'da çıkan 4 bağımsız kitap 1M+ sırada ya da sıralamasız, yani neredeyse sıfır satış. | **Yapmayın** |

> Önemli: Sizin örneğiniz olan "Boşanma Sonrası Bütçeleme" bu yöntemin sınamasından geçemiyor. Kendi kuralınıza göre (1M üstü = kimse almıyor) bu niş ölü.

Not: Bazı ASIN'ler Kindle ya da sesli kitap baskısıdır; o durumda BSR o formatın mağazasına aittir. Tüm satırlar CSV'de.

---

## 3. En iyi açı: demanslı ebeveyne evde tek başına bakan evlat

### 3a. Eleştirel yorumlardan çıkan 10 şikâyet

Amazon 3 yıldız filtreli yorum sayfasını artık giriş yapılmadan göstermiyor. Bu yüzden 38 demans ve bakım kitabının US ve CA ürün sayfalarındaki 1–3 yıldızlı yorumları ve "keşke / ama" içeren 4 yıldızlı yorumları toplandı (39 yorum). Kargo ve baskı şikâyetleri ayıklandı. Kalan içerik şikâyetleri:

1. **"Herkesin yardımı olduğunu varsayıyor. Ya ailen yoksa? Ya bakıcıya paran yetmiyorsa?"** Aynı yorum yorgunluk, tükenmişlik ve uykusuzluğun hiç ele alınmadığını da söylüyor. (*When Your Loved One Has Dementia*, 3★)
2. **"Aktiviteler bölümü… Kimin vakti var buna?"** Çarşaf değiştirip ilaç verirken aktivite önerileri gerçekçi gelmiyor. (aynı yorum)
3. **"Sadece muğlak genellemeler. Bakım veren olarak ne bekleyeceğini yine bilemiyorsun."** (*Alzheimer's Through the Stages*, 2★)
4. **"Hastalığın ilerleyişi ve hastanın bakımı reddetmesi konusunda soruları cevapsız bırakıyor."** (*When Your Loved One Has Dementia*, 4★)
5. **"Ebeveynimin öfkesini ve hasta olduğunu bile bilmemesini (anosognozi) anlatsaydı keşke. İki kardeşime büyük acı verdi."** Kardeş çatışması da aynı yorumda. (*Complete Family Guide to Dementia*, 4★)
6. **"Bilgi harika ama harekete geçecek şekilde özetlenmemiş. Adım adım bir eylem listesi yok."** (*The End of Alzheimer's*, 3★)
7. **"Kitap 11 adımlık bir plandan söz ediyor ama adımlar metinde net değil. Yorum istemek için yalvaran sayfalar sinir bozucu."** (*Dementia Caregiver's Survival Guide*, 2★, bağımsız rakip)
8. **"Çoğunlukla bakım evlerindekiler için yazılmış. Annem benimle yaşıyor, günlük düzeyde işime yaramadı."** (*Creating Moments of Joy*, 4★)
9. **"Aynı hikâyeyi tekrar tekrar anlatıyor"** ve **"bazı bölümler tekrarlı."** (*Loving Someone Who Has Dementia* 3★; *Dementia Care Without Losing Yourself* 4★; *The Unexpected Journey* 4★)
10. **"Kaynaklar sadece ABD için. Kanada'da durum farklı."** (*Survival Guide*, 4★). Diğer yorumlar: "çok teknik" / "çok basit" (seviye uyuşmazlığı), "umut vermiyor, moral bozucu", "dev puntolu, ince kitap; sadece hikâyeler ve ipuçları."

Kitabınızın var olma nedeni: **piyasadaki kitaplar ya ailesi ve parası olan ya da bakım evinde kalan hastayı varsayıyor.** Evde, tek başına, kısıtlı bütçeyle bakan evlat için kriz anında açılacak bir el kitabı yok.

### 3b. Başlık ve anahtar kelime

- **Başlık:** *Caring for a Parent with Dementia at Home — Alone*
- **Alt başlık:** *A Survival Guide for the Adult Child with No Help and No Budget: Handle Refusals, Anger, and Sibling Conflict Without Losing Yourself*
- Kapsanan arama ifadeleri: `caring for parent with dementia`, `dementia care at home`, `dementia caregiver`, `caregiver burnout`.

### 3c. 10 bölümlük taslak (her bölüm bir boşluğu kapatıyor ve okuyucunun hissettiği hayal kırıklığıyla açılıyor)

| Bölüm | Açılış hissi | Kapattığı boşluk |
|---|---|---|
| 1. Kimse gelmiyor: tek başına bakımın gerçek haritası | "Herkes 'yardım iste' diyor. Kimden?" | Ş1: yardımı olmayan bakım veren |
| 2. Önümüzdeki 5 yıl: evre evre somut olarak ne olacak | "Doktor 'herkes farklıdır' dedi ve gitti." | Ş3, Ş4: muğlaklık ve ilerleyiş |
| 3. "Ben hasta değilim": inkâr ve anosognozi | "Bana yalancı diyor." | Ş5 |
| 4. Banyo, ilaç, doktor: bakımı reddettiğinde hazır senaryolar | "Duş yüzünden 40 dakika kavga ettik." | Ş4 |
| 5. Öfke, suçlama ve gün batımı sendromu: 60 saniyelik müdahale kartları | "Bana vurdu ve ben ağladım." | Ş5 |
| 6. Kardeşler: işi yapmayan ama yorum yapanlar | "Kardeşim ayda bir arayıp beni eleştiriyor." | Ş5 |
| 7. Parasız bakım: ücretsiz ve düşük maliyetli destek (US, UK, CA, AU tabloları) | "Bakıcı saatine 30 dolar? Mümkün değil." | Ş1, Ş10 |
| 8. 5 dakikalık bakım: vakti olmayan için gerçekçi rutinler | "Aktivite mi? Ayakta zor duruyorum." | Ş2, Ş8 |
| 9. Kendini kaybetmeden: uyku, öfke, suçluluk ve tükenmişlik | "Annemin ölmesini dilediğim için kendimden nefret ediyorum." | Ş1 |
| 10. Kriz el kitabı: tek sayfalık eylem listeleri ve kontrol listeleri | "Kitap güzel ama gece 2'de ne yapacağımı bilmiyorum." | Ş6, Ş7 |

Yazım kuralları (şikâyetlerden): tekrar yok; her bölüm "bu gece yapacağın 3 şey" kutusuyla bitsin; kitabın ortasında yorum isteyen sayfa olmasın (en sonda tek bir satır yeter); büyük punto ile sayfa şişirilmesin.

---

## 4. Gerçeklik kontrolü: bu yöntemle gelir elde edebilir misiniz?

**Kısa cevap: evet, gelir elde edilebilir. Ama "ayda 10.000 $ basit" iddiası verilerle tutmuyor.** Gerçekçi bir hedef, iyi yapılmış her kitap için ayda 50–400 $.

| İddia | Gerçek |
|---|---|
| "Kitap başı 7 $" | 200 sayfa, 14,99 $ kâğıt kapak: KDP baskı maliyeti yaklaşık 1,00 $ + 0,012 $ × 200 = 3,40 $. Telif %60 × 14,99 − 3,40 ≈ **5,59 $**. 7 $ için yaklaşık 17 $ fiyat ve kısa kitap gerekir. |
| "4 pazarda günde 1'er kopya" | US'te günde 1 kâğıt kapak satışı kabaca BSR 150–250K demek (tahmin). Bu yapılabilir. Ama CA, UK ve AU mağazaları çok daha küçük. Verimizde US'te 81K'da olan bağımsız demans kitabının CA'da hiç sıralaması yoktu. Diğer pazarlar toplamda belki US'in %20–30'unu getirir. |
| "12 kitap = 10.080 $/ay" | Her kitabın ilk %5'lik dilime girmesini varsayıyor. Gerçek dağılım çok çarpık: 12 kitaptan 1–2'si satar, gerisi neredeyse satmaz. |
| "15–25 yorum Amazon'un güvenmesi için yeter" | Yorum gerekli ama tek başına yetmez. Amazon tanıdıklardan gelen yorumları siler ve teşvikli yorum yasaktır. ARC (ücretsiz okuma kopyası) dağıtmak serbesttir, ama olumlu yorum şartı koyulamaz. |
| "0,99 $ ile başlat" | Bu yalnızca Kindle e-kitap için geçerli. Kâğıt kapağın asgari fiyatı baskı maliyetiyle sınırlı. |
| "Yapay zekâ beyanı yeterli" | Beyan zorunludur ve müşteriye gösterilmez. Asıl risk başka: veride pazarın yapay zekâ kitaplarıyla dolduğu görülüyor. Narsist nişinde ilk 5'in 3'ü son 4 haftada çıkmış. Boşanma-finans nişinde 2026'da çıkan 4 kitap satmıyor. Kalite ve özgüllük tek fark yaratan şey. |

**Senaryo: 6 ayda 6 kitap, aynı demans ve bakım nişinde**

- Kötü (çoğu kişi): ayda toplam 0–100 $
- Orta (iyi yazılmış, iyi kapak, 20+ gerçek yorum): kitap başı ayda 100–300 $ → **ayda 600–1.800 $**
- İyi (1 kitap 20K–40K BSR'ye oturur, seri etkisi çalışır): **ayda 2.000–4.000 $**
- 10.000 $/ay: mümkün ama nadir. Genelde 20+ kitap, sesli kitap ve Amazon reklamı (AMS) gerektirir.

**Dikkat edilmesi gerekenler**

1. **İngilizce kalite.** Pazar İngilizce. Yapay zekâ ile yazılmış metni ana dili İngilizce olan bir editöre (Fiverr veya Reedsy, yaklaşık 150–400 $) okutmak, Grammarly'den çok daha değerlidir.
2. **Sağlık konusu.** Demans kitabında tıbbi hata, kötü yorum ve iade getirir. Bir sorumluluk reddi ekleyin, kaynak gösterin, mümkünse bir hemşire veya bakım uzmanına okutun.
3. **Amazon reklamları.** Reklamsız organik keşif yeni hesaplarda yavaş işler. Günde 5–10 $ reklam bütçesi ayırın.
4. **Aynı nişte seri.** Sonraki kitaplar: *Sundowning Survival Guide*, *Siblings and Dementia Care*, *Caregiver Burnout Journal* (düşük içerikli günlük; hızlı üretilir).

## 5. Önerilen 30 günlük plan

1. 1. hafta: Taslak (yukarıda hazır) ve bölüm başına 1.500–2.000 kelime. 1.000 kelime 120 sayfa için azdır, yorumlar da "ince kitap" diye şikâyet ediyor.
2. 2. hafta: Düzenleme, ana dili İngilizce editör, gerçekleri kontrol etme.
3. 3. hafta: Kapak (nişteki ilk 5'in renk ve düzenine uygun, farklı bir başlıkla), KDP yükleme (kâğıt kapak 15,99 $, Kindle 4,99 $; ilk hafta Kindle 0,99 $).
4. 4. hafta: 20–30 ARC okuyucusu (BookSirens, bakım veren Facebook grupları; grup kurallarına uyarak), günde 5 $ Amazon reklamı. Ardından 2. kitaba başlayın.

---
*Not: BSR'den satışa çevirme rakamları sektör tahminleridir. Ham veriler 17.10.2026 itibarıyla anlık görüntüdür.*
