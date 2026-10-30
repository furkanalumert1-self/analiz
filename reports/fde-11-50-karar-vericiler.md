# LinkedIn'de Forward Deployed Engineer ilanı veren 11–50 kişilik şirketler — karar verici e-postaları

_Tarih: 30 Ekim 2026 · Kaynak: Apify (LinkedIn Jobs Scraper + iki B2B lead veritabanı)_

## Yöntem

1. **İlanlar:** `curious_coder/linkedin-jobs-scraper` ile LinkedIn'de `"Forward Deployed Engineer"` araması (Worldwide, son 30 gün). 293 ilan çekildi, 286'sının başlığında gerçekten "Forward Deployed" geçiyor.
2. **Şirket büyüklüğü:** Şirketin LinkedIn sayfasındaki çalışan sayısı 11–50 olanlar seçildi → **18 şirket** (10 doğrudan işveren, 8 işe alım ajansı/recruiter).
3. **Karar vericiler:** Şirket domainleri `microworlds/leads-finder` (doğrulanmış e-posta) ve `olympus/b2b-leads-finder` (veritabanı + pattern tahmini) ile tarandı; Founder / CEO / CTO / COO / CRO / President / VP / Director / Head of Engineering unvanları tutuldu.

**E-posta durumu:** `doğrulanmış` = sağlayıcı tarafından verify edilmiş · `veritabanı` = B2B veritabanında kayıtlı, doğrulama bilgisi yok · `tahmin` = ad.soyad@domain kalıbından üretilmiş, göndermeden önce doğrulayın.

**Özet:** 40 kişi satırı, 31 e-posta, bunların 18 tanesi doğrulanmış. Toplam Apify maliyeti ≈ $0.85.

## Doğrudan işverenler (asıl hedef)

### Constellation Payments — constellationpayments.com (42 çalışan)
İlan: [Forward Deployed Engineer](https://ca.linkedin.com/jobs/view/forward-deployed-engineer-at-constellation-payments-4470497252) · Canada · 2026-10-23

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| Julian Devassy | Chief Technology Officer | jdevassy@constellationpayments.com | veritabanı |
| Clint Blaylock | Chief Operating Officer | cblaylock@constellationpayments.com | veritabanı |
| Tony Autin | Chief Executive Officer | tautin@constellationpayments.com | veritabanı |

### Expertise AI — expertise.ai (20 çalışan)
İlan: [Forward Deployed Engineer](https://ca.linkedin.com/jobs/view/forward-deployed-engineer-at-expertise-ai-4478830048) · Toronto, Ontario, Canada · 2026-10-15

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Hao Sheng](https://www.linkedin.com/in/hao-sheng) | Founder, CEO | hao.sheng@expertise.ai | veritabanı |

### flyboard — flyboard.ai (14 çalışan)
İlan: [Forward Deployed AI Engineer (FDE)](https://es.linkedin.com/jobs/view/forward-deployed-ai-engineer-fde-at-flyboard-4484950296) · Barcelona, Catalonia, Spain · 2026-10-29

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Jaime Farres Rocabert](http://www.linkedin.com/in/jaime-farres-rocabert-96a42742) | Co-Founder | jaime.rocabert@flyboard.ai | tahmin |
| [Maximilian Zoller](http://www.linkedin.com/in/maximilian-zoller) | Co-Founder | maximilian.zoller@flyboard.ai | tahmin |
| [Edu Alvarez De Toledo](http://www.linkedin.com/in/eduardo-alvarez-de-toledo) | Co-Founder | — | — |

### KI performance GmbH — ki-performance.com (44 çalışan)
İlan: [Forward Deployed Engineer (m/f/d)](https://de.linkedin.com/jobs/view/forward-deployed-engineer-m-f-d-at-ki-performance-gmbh-4454395908) · Munich, Bavaria, Germany · 2026-10-09

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Maximilian Hummel](http://www.linkedin.com/in/maximilian-hummel) | Director | Mitglied der Geschäftsleitung | — | — |

### Maincode — maincode.com (20 çalışan)
İlan: [Forward Deployed Engineer (Enterprise)](https://au.linkedin.com/jobs/view/forward-deployed-engineer-enterprise-at-maincode-4478831944) · Melbourne, Victoria, Australia · 2026-10-15

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Dave Lemphers](http://www.linkedin.com/in/dlemphers) | Chief Coder | dave@maincode.com | doğrulanmış |

### Revin — revin.ai (29 çalışan)
İlan: [Forward Deployed Engineer](https://www.linkedin.com/jobs/view/forward-deployed-engineer-at-revin-4477002930) · New York, NY · 2026-10-14

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Stephen Webel](http://www.linkedin.com/in/stephenwebel) | Head of Engineering | webel@revin.ai | doğrulanmış |
| [Quinn Litherland](http://www.linkedin.com/in/quinnlitherland) | Founder & CEO | quinn@revin.ai | doğrulanmış |
| [Jon Epstein](http://www.linkedin.com/in/jonathan-epstein) | Vice President Operations | jon@revin.ai | doğrulanmış |

### SolveAI — solve.ai (23 çalışan)
İlan: [Forward Deployed Engineer](https://uk.linkedin.com/jobs/view/forward-deployed-engineer-at-solveai-4484478095) · London, England, United Kingdom · 2026-10-28

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Steve Basher](https://www.linkedin.com/in/steve-basher) | founder & chief executive officer | steve.basher@solve.ai | tahmin |

### Thorit — thorit.com (35 çalışan)
İlan: [Forward Deployed Engineer (all genders)](https://de.linkedin.com/jobs/view/forward-deployed-engineer-all-genders-at-thorit-4482884656) · Böblingen, Baden-Württemberg, Germany · 2026-10-23

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Marc Gummlich](http://www.linkedin.com/in/marc-gummlich-36a7a2129) | Vice President Design | marc.gummlich@thorit.de | doğrulanmış |
| [Steffen Papke](http://www.linkedin.com/in/steffen-papke) | Vice President Sales & Partnerships | steffen.papke@thorit.de | doğrulanmış |
| [Dennis Bayer](http://www.linkedin.com/in/dennis-bayer-442a3a8b) | COO @ Thorit | dennis.bayer@thorit.de | doğrulanmış |
| [Isabel Gazkow](http://www.linkedin.com/in/isabel-gazkow-a9b2b41b4) | Vice President Digital Marketing | — | — |
| [Michael Huber](http://www.linkedin.com/in/michael-huber-96b76018) | Director of Development | — | — |

### Trail — trailhq.com (40 çalışan)
İlan: [Forward Deployed Engineer](https://www.linkedin.com/jobs/view/forward-deployed-engineer-at-trail-4485240274) · Palo Alto, CA · 2026-10-29

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| — | (bulunamadı) | — | — |

### TribalScale — tribalscale.com (47 çalışan)
İlan: [Forward Deployed Engineer (Fort Lauderdale/Miami)](https://www.linkedin.com/jobs/view/forward-deployed-engineer-fort-lauderdale-miami-at-tribalscale-4480995155) · Miami, FL · 2026-10-14

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Jason Mills](http://www.linkedin.com/in/jason-mills-3b0377165) | Head of Engineering | jmills@tribalscale.com | doğrulanmış |
| [Rich Gigante](http://www.linkedin.com/in/richgigante) | Chief Revenue Officer (CRO) | rich@tribalscale.com | doğrulanmış |
| [David Ferreira](http://www.linkedin.com/in/david-ferreira-a8b14947) | Director of Engineering - Media | dferreira@tribalscale.com | doğrulanmış |

## İşe alım ajansları (müşterileri adına FDE arıyorlar)

### Fonzi AI — fonzi.ai (18 çalışan)
İlan: [Forward Deployed Engineer](https://www.linkedin.com/jobs/view/forward-deployed-engineer-at-fonzi-ai-4484145486) · New York City Metropolitan Area · 2026-10-28

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| — | (bulunamadı) | — | — |

### Ikuto — ikutogroup.com (11 çalışan)
İlan: [Forward Deployed Engineer - AI Agents](https://uk.linkedin.com/jobs/view/forward-deployed-engineer-ai-agents-at-ikuto-4481219812) · London Area, United Kingdom · 2026-10-19

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| — | (bulunamadı) | — | — |

### Key Talent Solutions — kts-group.co (29 çalışan)
İlan: [Forward Deployed Engineer](https://www.linkedin.com/jobs/view/forward-deployed-engineer-at-key-talent-solutions-4476349081) · San Francisco Bay Area · 2026-10-06

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Terry Williams](http://www.linkedin.com/in/terry-williams-a6149a89) | Partner | terry.williams@kts-group.co | tahmin |
| [Thomas Roberts](https://www.linkedin.com/in/thomasrobertssfdc) | Partner - Global Head of Salesforce | thomas.roberts@kts-group.co | tahmin |
| [Franco Salinas](https://www.linkedin.com/in/francosalinas96) | Partner and Recruiter | franco.salinas@kts-group.co | tahmin |
| [Mike Whatman](http://www.linkedin.com/in/mike-whatman-687018153) | Group Performance Director | — | — |

### MBN Solutions — mbnsolutions.com (22 çalışan)
İlan: [Forward Deployed Engineer](https://uk.linkedin.com/jobs/view/forward-deployed-engineer-at-mbn-solutions-4476465827) · London Area, United Kingdom · 2026-10-13

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Michael Young](https://www.linkedin.com/in/michaelyoung08) | Founder - High Level Data Talent Expert & Executive Recruiter | michael@mbnsolutions.com | veritabanı |

### Pivotal Partners — pivotalpartners.io (38 çalışan)
İlan: [Forward Deployed Engineer](https://uk.linkedin.com/jobs/view/forward-deployed-engineer-at-pivotal-partners-4481535945) · England, United Kingdom · 2026-10-29

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [James Cato](http://www.linkedin.com/in/james-cato-aa1569148) | Partner | Head of US | james@pivotalpartners.io | doğrulanmış |
| [James Whipp](http://www.linkedin.com/in/james-whipp-5b4752179) | COO & Founder | james@pivotalpartners.io | doğrulanmış |
| [Harry Thornton](http://www.linkedin.com/in/harrythorntonn) | Founder & CEO | harry@pivotalpartners.io | doğrulanmış |
| [Doug Nabors](https://www.linkedin.com/in/doug-nabors-0b13b819) | Co-Founder, President of Sales and Operations | — | — |

### ProFound People — profoundpeople.com.au (13 çalışan)
İlan: [Forward Deployed Engineer](https://au.linkedin.com/jobs/view/forward-deployed-engineer-at-profound-people-4484453235) · Australia · 2026-10-28

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Richard Center](http://www.linkedin.com/in/richard-center-80b0351) | Director, Technology | richard@profoundpeople.com.au | doğrulanmış |

### Salient Group — salientgroup.com.au (38 çalışan)
İlan: [Forward Deployed Engineer(AI Agents)](https://kr.linkedin.com/jobs/view/forward-deployed-engineer-ai-agents-at-salient-group-4481625912) · Seoul, South Korea · 2026-10-23

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Yvette Midwinter](http://www.linkedin.com/in/ymidwinter) | Director | yvette.midwinter@salientgroup.com.au | doğrulanmış |
| [Salient Group](https://www.linkedin.com/in/salient-group-709532a9) | Founder & President | salient@salientgroup.com.au | veritabanı |
| [Jerameel Ramos](https://www.linkedin.com/in/jerameel-ramos-01557854) | Partner | jerameel.ramos@salientgroup.com.au | tahmin |

### Talent Forge Group — talentforge.com.au (13 çalışan)
İlan: [Forward Deployed Engineer](https://au.linkedin.com/jobs/view/forward-deployed-engineer-at-talent-forge-group-4475149772) · Sydney, New South Wales, Australia · 2026-10-07

| Karar verici | Unvan | E-posta | Durum |
|---|---|---|---|
| [Tim West](http://www.linkedin.com/in/tim-west-31982b25) | Chief Revenue Officer (CRO) | tim@talentforge.com.au | doğrulanmış |
| [Sam Hely](http://www.linkedin.com/in/sam-hely-829876172) | Director - Technology | Sam@talentforge.com.au | doğrulanmış |
| [Matt Barker](http://www.linkedin.com/in/mattbarker78) | CEO - Offshore Talent | matt@talentforge.com.au | doğrulanmış |

## Notlar

- **Trail (trailhq.com)**, **Fonzi AI** ve **Ikuto** için veritabanlarında karar verici bulunamadı; LinkedIn'den kurucuları manuel bakılabilir.
- **flyboard**: Jaime Farres Rocabert için doğrulanmış tek adres eski şirketine (saivo.com) ait çıktı; flyboard adresi tahmindir. Edu Alvarez De Toledo ve KI performance (Maximilian Hummel) için e-posta yok.
- **Thorit** e-postaları `thorit.de` domaininde (şirket sitesi thorit.com).
- **Pivotal Partners**'ta James Cato ve James Whipp aynı adresle (james@) döndü; hangisine ait olduğu belirsiz.
- Jobs scraper 290 sn zaman aşımına uğradı ve Apify free plan proxy bant genişliği limitine takıldı; tüm ilanlar çekilemedi. Daha fazla şirket için ülke bazlı (ör. United States) ek arama yapılabilir.
- Çalışan sayısı LinkedIn'deki "çalışan" sayısıdır; resmi şirket büyüklüğü aralığıyla birebir aynı olmayabilir.

Ham tablo: [`fde-11-50-karar-vericiler.csv`](fde-11-50-karar-vericiler.csv)
