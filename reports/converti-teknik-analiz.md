# Converti teknik analizi: nasıl çalışıyor, Claude Code ile yapılır mı, pazar ne kadar büyük?

**Tarih:** 26 Eylül 2026 · **Kaynaklar:** converti.ai, trustmrr.com, Vapi/Retell fiyat sayfaları, speed-to-lead araştırmaları

## 1. Converti ne yapıyor?

Ajanslar ve hizmet işletmeleri için **"speed-to-lead"** (lead'e ilk yanıt süresini kısaltma) platformu. İşleyiş şöyle:

1. Reklamdan veya formdan yeni bir lead düşer.
2. Yapay zekâ ajanı lead'i **saniyeler içinde telefonla arar.**
3. Ulaşamazsa **SMS, e-posta, WhatsApp ve Instagram/LinkedIn DM** ile takip eder.
4. Görüşmede lead'i ön elemeden geçirir ve **takvime randevu koyar.** Lead gelemezse randevuyu yeniden planlar.
5. Tüm konuşmalar, sorunlu aramalar ve sonuçlar tek bir panelde görünür. Ajanslar bu paneli **kendi markalarıyla** müşterilerine sunabilir.

| Özellik | Detay |
|---------|-------|
| Kanallar | Sesli arama, SMS, WhatsApp, e-posta, Instagram/LinkedIn DM |
| Kullandığı altyapılar | **Vapi** (ses), **OpenAI** ve **Claude** (dil modeli). Kullanıcı kendi API anahtarını da bağlayabiliyor |
| Entegrasyonlar | Google Calendar, Calendly, webhook, API (Pro ve üstü planlarda) |
| Fiyat | Starter $75 · Pro $208 · Agency $291 (beyaz etiket). Aylık kredi dahil, aşımda kullanılan servislerin maliyeti + %20 kâr payı |
| Ölçek | "2.000+ ajan oluşturuldu", trustmrr'da doğrulanmış **$11.9K MRR** (30 günde -9%). Bu MRR ile ~60–150 ödeme yapan müşteri tahmin ediliyor |

**Kilit nokta:** Converti sesli yapay zekâyı **kendisi geliştirmiyor.** Vapi, OpenAI ve Claude gibi hazır servisleri bir araya getiren bir **orkestrasyon ve arayüz katmanı**. Değeri; akış kurucusu, çok kanallı takip, ajans paneli ve kolay kurulumdan geliyor.

---

## 2. Teknik mimari ve her parçanın zorluğu

```
Lead kaynağı ──► Webhook alıcı ──► İş akışı motoru (kuyruk + zamanlayıcı)
(Meta Lead Ads,                          │
 form, Zapier,                           ├─► Sesli ajan (Vapi/Retell) ──► Telefon (Twilio numarası)
 CRM)                                    ├─► SMS (Twilio)
                                         ├─► WhatsApp (Meta Cloud API)
                                         ├─► E-posta (Resend/SES)
                                         └─► Takvim (Cal.com / Google Calendar)
                                                    │
                  Sonuç webhook'ları ◄───────────────┘
                  (arama bitti, transkript, randevu alındı)
                          │
                          ▼
             Panel: çok kiracılı (ajans → alt hesaplar), beyaz etiket, analiz, faturalama
```

| Parça | Nasıl yapılır | Teknik zorluk | Claude Code yazabilir mi? |
|-------|---------------|---------------|---------------------------|
| **Sesli yapay zekâ ajanı** | Vapi veya Retell API'si: asistan tanımı (prompt, ses, araçlar) + giden arama başlatma + arama sonu webhook'u | **Düşük** (hazır platformla). Kendin yaparsan (Twilio Media Streams + Deepgram + LLM + ElevenLabs, <1 sn gecikme, araya girme desteği) **çok yüksek** | ✅ Evet. Vapi/Retell entegrasyonu birkaç gün sürer |
| **Arama sırasında randevu alma** | Ses ajanına "tool/function" tanımlanır: `check_availability`, `book_appointment` → kendi API'n → Cal.com/Google Calendar | Orta | ✅ Evet |
| **SMS** | Twilio Messaging API | Kod düşük, **operasyon orta**: ABD'de A2P 10DLC marka ve kampanya kaydı gerekiyor (1–3 hafta onay) | ✅ Kod evet, kayıt işlemi senin işin |
| **WhatsApp** | Meta WhatsApp Cloud API: şablon mesaj + 24 saatlik oturum penceresi | Kod düşük, **operasyon orta**: Meta işletme doğrulaması ve şablon onayı gerekiyor | ✅ Evet |
| **E-posta** | Resend / Amazon SES + alan adı doğrulama | Düşük | ✅ Evet |
| **Instagram DM** | Instagram Graph API (Messaging) | Orta: Meta uygulama incelemesi gerekiyor | ✅ Evet, onay süreci senin işin |
| **LinkedIn DM** | Resmî bir API yok; Unipile gibi resmî olmayan servisler kullanılıyor | **Riskli** (hesap kısıtlanabilir) | ⚠️ MVP'de atla |
| **Lead alma** | Genel webhook + Meta Lead Ads webhook'u (`leads_retrieval` izni için uygulama incelemesi) + Zapier | Orta | ✅ Evet |
| **İş akışı motoru** ("5 dk bekle → ara → cevap yoksa SMS at → 1 gün sonra tekrar dene") | Inngest veya Trigger.dev (zamanlanmış adımlar, tekrar denemeler) + durum makinesi | **Orta–yüksek.** Ürünün kalbi; güvenilir olması şart | ✅ Evet, ama iyi test gerektirir |
| **Görsel akış editörü** | React Flow + akışı JSON'a çevirip motorda çalıştırma | Orta | ✅ Evet (MVP'de hazır şablonlar yeterli) |
| **Çok kiracılı yapı ve beyaz etiket** | Ajans → müşteri hesapları, rol yetkileri, özel logo/renk, özel alan adı (Vercel Domains API) | Orta | ✅ Evet |
| **Kredi ve kullanım faturalaması** | Stripe abonelik + kullanım bazlı ücretlendirme, dakika ve mesaj sayacı, %20 kâr payı | Orta | ✅ Evet |
| **Panel ve analiz** | Aramalar, transkriptler, dönüşüm hunisi, "sorunlu arama" işaretleme (Claude ile otomatik sınıflandırma) | Düşük–orta | ✅ Evet |

### Özet: zorluk koddan çok bu üç noktada
1. **Onaylar ve kayıtlar:** A2P 10DLC, Meta işletme doğrulaması, WhatsApp şablon onayları, Meta Lead Ads uygulama incelemesi. Bunlar haftalar sürebilir ve Claude Code'un yapabileceği işler değil.
2. **Hukuki uyum:**
   - **ABD:** FCC, Şubat 2024'te yapay zekâ sesini TCPA kapsamındaki "yapay ses" olarak tanımladı. Lead'in **önceden açık onayı** olmadan yapay zekâ ile aramak ağır cezaya yol açabilir. Formlara onay kutusu eklemek şart.
   - **Türkiye:** Ticari elektronik iletiler için İYS kaydı ve onayı, KVKK kapsamında aydınlatma metni ve ses kaydı onayı gerekli.
3. **Ses kalitesi ve güvenilirlik:** Doğal konuşma, gecikme, telesekretere denk gelme (voicemail detection) ve prompt ayarı ürünün satılıp satılmayacağını belirler. Bunlar deneme-yanılma ister.

---

## 3. Claude Code ile yol haritası

| Aşama | Kapsam | Tahmini süre (tek geliştirici + Claude Code) |
|-------|--------|---------------------------------------------|
| **MVP (satılabilir ilk sürüm)** | Webhook ile lead alma → Vapi/Retell ile 60 sn içinde arama → Cal.com'a randevu → ulaşılamazsa SMS/WhatsApp takibi → basit panel (arama listesi, transkript, sonuç) → Stripe abonelik. Tek dil, hazır akış şablonları | **3–5 hafta** |
| **v1 (ajanlara satış)** | Çok kiracılı yapı, beyaz etiket (logo, renk, alan adı), Meta Lead Ads entegrasyonu, e-posta kanalı, kredi ve kullanım faturalaması | +4–6 hafta |
| **v2 (Converti ile eşit)** | Görsel akış editörü, Instagram DM, analiz ve sorunlu arama tespiti, API erişimi, kendi API anahtarını bağlama | +6–8 hafta |

**Önerilen teknoloji yığını:** Next.js + Supabase (Postgres, auth, Row Level Security ile çok kiracılı yapı) + Inngest/Trigger.dev (akış motoru) + Vapi veya Retell (ses) + Twilio (numara ve SMS) + WhatsApp Cloud API + Resend + Cal.com API + Stripe + Claude API (konuşma özeti, lead puanlama, sınıflandırma).

### Maliyet ve kâr hesabı
- Tam donanımlı sesli arama maliyeti (platform + konuşmadan metne + dil modeli + metinden sese + telefon hattı): **dakika başına ~$0,10–0,30.**
- Ortalama 2–3 dakikalık bir arama ≈ **$0,30–0,90.** SMS ≈ $0,01, WhatsApp şablon mesajı ülkeye göre ~$0,01–0,06.
- Converti modelinde (kullanıcı kendi anahtarını bağlar veya maliyet + %20 ödenir) **aylık abonelik ücreti neredeyse tamamen kâr.** Değişken maliyet müşteriye yansıtılıyor.

---

## 4. Müşteri kitlesi büyük mü?

**Evet. Ama kalabalık bir pazar.**

**Talebi destekleyen veriler:**
- **Speed-to-lead etkisi kanıtlanmış:** MIT/InsideSales araştırmasına göre 5 dakika içinde aranan bir lead'e ulaşma olasılığı 30 dakikaya göre **100 kat**, lead'i nitelikli hale getirme olasılığı **21 kat** daha yüksek. Buna karşın işletmelerin ortalama yanıt süresi **47 saat** civarında.
- **Ajans ekosistemi büyük:** Yalnızca GoHighLevel'i kullanan **20.000'den fazla ajans** var. Her ajansın onlarca müşterisi var ve hepsi reklamdan gelen lead'in soğumasıyla boğuşuyor.
- **Hedef dikeyler geniş:** Estetik ve diş klinikleri, emlak, sigorta, güneş paneli, ev hizmetleri (çatı, klima), hukuk, eğitim kurumları. Hepsi yüksek değerli lead'e para ödüyor ve lead başına maliyetleri yüksek.
- **Apollo'da hedeflenmesi kolay:** `Marketing & Advertising` + `Owner/Founder` + 1–50 çalışan + *Tech: Facebook Ads, GoHighLevel*. Doğrudan dikeyler için de `Medical Practice`, `Real Estate`, `Insurance` gibi sektör filtreleri kullanılabilir.

**Riskler ve rekabet:**
- **Rekabet yoğun:** Synthflow, Bland, Retell ve Vapi'nin kendi beyaz etiketli çözümleri, VoiceAIWrapper ve GoHighLevel'in kendi yapay zekâ özellikleri aynı pazarda. Converti'nin son 30 günde %9 gelir kaybetmesi bu baskıyı gösteriyor olabilir.
- **Farklılaşmadan girmek zor:** Genel bir "ajanslar için yapay zekâ arayıcı" olmak kalabalık bir alana girmek demek.

### Farklılaşma önerisi (senin için en güçlü açı)
1. **Türkçe ve yerel pazar:** Türkçe doğal sesli ajan + **WhatsApp öncelikli** takip (Türkiye'de WhatsApp baskın kanal) + İYS/KVKK uyumlu onay akışı. Yerel rakip yok denecek kadar az.
2. **Tek dikey ile başlama:** Örneğin yalnızca **estetik, saç ekimi ve diş klinikleri** (yurt dışından sağlık turizmi lead'leri; çok dilli arama büyük avantaj) ya da yalnızca **emlak ofisleri.** Dikeye özel hazır senaryo, itiraz yanıtları ve CRM entegrasyonu ile "kurulumu 10 dakika" vaadi verilebilir.
3. **Sonuç odaklı fiyatlama:** Aylık ücret + "alınan randevu başına" prim. Değer hemen anlaşılır.

**Sonuç:** Converti teknik olarak **Claude Code ile yapılabilir bir ürün.** En zor kısımlar (gerçek zamanlı ses, konuşma tanıma, ses sentezi) Vapi/Retell gibi hazır servislerden alınıyor. Asıl iş; güvenilir bir akış motoru, çok kiracılı panel, onay ve kayıt süreçleri ve hukuki uyum. Pazar büyük ama kalabalık. En mantıklı yol **dikey ve/veya dil odaklı** (ör. Türkçe + WhatsApp + sağlık turizmi) girmek ve ilk 10 müşteriyle ses kalitesini iyileştirmek.
