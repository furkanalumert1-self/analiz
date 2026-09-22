"""Step 9: render reports/turk-ecommerce-leads.html from reports/leads-data.json (data embedded, JSON removed)."""
import json, os
H = os.path.dirname(__file__); OUT = os.path.join(H, "..", "..", "reports")
d = json.load(open(os.path.join(OUT, "leads-data.json")))
cost = os.environ.get("APIFY_COST_NOTE", "")
method = [
 "Keşif: apify/google-search-scraper ile 6 ülke × DE/NL/FR/EN/TR sorgular (sektör, şehir, Türk ürün markaları) + en verimli 45 sorguda 2-3. sayfa.",
 "Root-domain dedup (kod ile); marketplace, haber, dizin ve büyük perakendeciler otomatik elendi.",
 "E-ticaret doğrulama: ana sayfa + hakkımızda/impressum HTML'i kod ile tarandı (sepet/checkout, ürün şeması, platform imzası). Ham HTML saklanmadı.",
 "Türk bağlantısı: yalnızca isim değil; resmi 'Türk marketi/Türk markası' beyanı, Türkçe mağaza versiyonu, Türk marka bağlantısı gibi kanıtlar + kanıt URL'si. Sadece ürün menşei yeterli sayılmadı → inceleme listesine.",
 "LinkedIn: harvestapi/linkedin-company, harvestapi/linkedin-company-employees ve site:linkedin.com/in Google sorguları; her aday elle doğrulandı.",
 "E-posta: şirket adresleri şirketin kendi sitesinde (impressum/iletişim) yayınlanmış olanlardır; kişi adresleri harvestapi/linkedin-profile-scraper e-posta aramasından (durum ve skor ile) veya şirket sitesinde yayınlanmış olanlardır. Tahmini adres eklenmedi.",
 "Güven: HIGH = resmi/güvenilir kaynak; MEDIUM = güçlü ama sınırlı kanıt. Öncelik HIGH = deterministik Engage skoru ile ilk üçte bir.",
 f"Hedef 150 şirketti; ~1.200 aday domain taranmasına rağmen kriterleri geçen {d['stats']['verified']} şirket bulundu. {d['stats']['review']} şirket manuel incelemeye ayrıldı.",
] + ([cost] if cost else [])
t = open(os.path.join(H, "page_template.html")).read()
t = t.replace("__DATA__", json.dumps(d, ensure_ascii=False).replace("</", "<\\/")).replace("__METHOD__", json.dumps(method, ensure_ascii=False))
open(os.path.join(OUT, "turk-ecommerce-leads.html"), "w").write(t)
os.remove(os.path.join(OUT, "leads-data.json"))
print("rendered")
