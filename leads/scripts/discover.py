"""Step 1: Google discovery via apify/google-search-scraper. Cached per query."""
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from apify import run_actor, usage

CACHE = os.path.join(os.path.dirname(__file__), "..", "cache")
QF = os.path.join(CACHE, "searched_queries.json")

SECTORS_EN = ["fashion brand", "clothing online shop", "cosmetics brand", "jewelry online shop",
              "home textile online shop", "furniture online shop", "food online shop", "coffee online shop",
              "towel brand", "shoes online shop", "baby products online shop", "modest fashion online shop"]

Q = {
    "de": ["türkische Marke Online Shop", "türkische Mode Online Shop", "türkische Lebensmittel online bestellen",
           "türkischer Online Shop Deutschland", "türkische Kosmetik online kaufen", "türkischer Schmuck online shop",
           "türkische Möbel online shop", "türkische Heimtextilien online shop", "türkische Handtücher online kaufen",
           "türkischer Kaffee online kaufen", "türkische Süßigkeiten online shop", "Baklava online bestellen",
           "türkische Brautmode online shop", "Hijab Mode online shop Deutschland", "türkische Babykleidung online",
           "türkischer Tee online kaufen", "türkische Bettwäsche online shop", "Gründer türkische Wurzeln Onlineshop",
           "deutsch-türkisches Startup E-Commerce", "türkische Olivenöl online kaufen", "Turkish brand online shop Germany",
           "Turkish ecommerce company Germany", "Lokum online kaufen", "türkische Gewürze online shop",
           "Sucuk online bestellen", "türkische Keramik online shop", "Hamamtuch online shop", "türkische Teppiche online shop",
           "Mode aus Istanbul online shop", "türkische Kinderbekleidung Onlineshop"],
    "nl": ["Turkse webshop", "Turkse kleding online", "Turkse cosmetica online", "Turkse boodschappen online",
           "Turkse sieraden webshop", "Turkse meubels online", "Turkse handdoeken webshop", "Turkse koffie online kopen",
           "Turkse baklava online bestellen", "hijab webshop Nederland", "Turkse mode webshop", "Turkse thee online",
           "Turkish webshop Netherlands", "Turkse bruidsmode online", "Turkse producten online kopen"],
    "be": ["Turkse webshop België", "boutique en ligne turque Belgique", "Turkse kleding webshop België",
           "produits turcs en ligne Belgique", "hijab boutique en ligne Belgique", "Turkish online shop Belgium"],
    "at": ["türkischer Online Shop Österreich", "türkische Lebensmittel online Österreich", "türkische Mode Österreich online",
           "Turkish ecommerce Austria", "türkische Kosmetik Österreich online"],
    "fr": ["boutique en ligne turque", "produits turcs en ligne", "mode turque boutique en ligne", "cosmétiques turcs en ligne",
           "épicerie turque en ligne", "linge de maison turc en ligne", "marque turque France boutique", "hijab boutique en ligne turque",
           "bijoux turcs en ligne", "loukoum en ligne"],
    "gb": ["Turkish online shop UK", "Turkish fashion brand UK", "Turkish cosmetics UK online", "Turkish grocery online UK",
           "Turkish towels online UK", "Turkish delight online UK", "Turkish furniture online UK", "Turkish jewellery online UK",
           "Turkish-founded DTC brand UK", "Turkish coffee buy online UK", "Turkish modest fashion online UK", "Turkish homeware online UK",
           "Turkish baklava online UK", "Turkish bedding online UK", "Turkish rugs online UK"],
}

Q2 = {
    "de": ["Almanya online mağaza Türk markası", "Almanya'da Türk e-ticaret sitesi", "Avrupa'ya satış yapan Türk markası online",
           "türkische Marke expandiert nach Deutschland Onlineshop", "türkische Modemarke Deutschland Onlineshop eröffnet",
           "türkisches Familienunternehmen Onlineshop", "Deutschtürke gründet Onlineshop", "türkischstämmige Gründerin Onlineshop Kosmetik",
           "türkischstämmiger Gründer Modelabel online", "Naturkosmetik türkische Gründerin", "türkische Naturseife online shop",
           "Kolonya kaufen online", "türkisches Olivenöl Familienbetrieb Onlineshop", "türkischer Honig online kaufen",
           "Pistazien aus Antep online kaufen", "Simit online bestellen", "türkische Tee Gläser online shop", "Cezve online kaufen",
           "türkische Wohnaccessoires online shop", "Kelim Kissen online shop Istanbul", "Tesettür Mode Onlineshop Deutschland",
           "Abaya Onlineshop Deutschland türkische", "Streetwear Label Gründer türkische Wurzeln", "Schmuck Label Gründerin Istanbul",
           "Babykleidung aus der Türkei Onlineshop", "Bio Baumwolle aus der Türkei Label online", "Denim Marke aus Istanbul online kaufen",
           "Lederwaren aus der Türkei online shop", "türkische Schuhe online kaufen", "Nahrungsergänzung türkische Gründer online shop",
           "Tahini online kaufen türkisch", "Pekmez online kaufen", "Dürüm Lavash online bestellen Lieferdienst deutschlandweit",
           "Kunefe online bestellen", "türkisches Porzellan online shop", "Kupfer Geschirr türkisch online kaufen"],
    "nl": ["Turkse ondernemer webshop", "Turks merk webshop Nederland", "Turkse natuurlijke cosmetica webshop", "Turkse olijfolie webshop",
           "Turkse lokum webshop", "Turkse sieraden online kopen goud", "Turkse theeglazen webshop", "Turkse kinderkleding webshop",
           "tesettür webshop Nederland", "Turkse schoenen webshop", "Turkse beddengoed webshop", "Turkse delicatessen webshop",
           "Turkse honing online kopen", "Turks porselein webshop", "hamamdoek webshop Turkse ondernemer"],
    "be": ["Turkse supermarkt online België", "épicerie turque en ligne Bruxelles livraison", "Turkse sieraden België online",
           "bijoux or turc Bruxelles en ligne", "Turkse meubels België webshop", "Turkse baklava België online bestellen"],
    "at": ["türkischer Supermarkt online Wien", "türkische Möbel Wien online shop", "türkischer Schmuck Wien online shop",
           "Hijab Onlineshop Österreich", "Baklava online bestellen Österreich"],
    "fr": ["marque turque cosmétique naturelle en ligne", "meubles turcs en ligne France", "bijoux or turc en ligne France",
           "vêtements turcs en ligne femme", "baklava en ligne livraison France", "thé turc en ligne", "huile d'olive turque en ligne",
           "serviette fouta turque en ligne marque", "marque turque de prêt-à-porter boutique en ligne France", "abaya turque boutique en ligne"],
    "gb": ["Turkish founded brand UK online store", "Turkish-owned fashion brand London online", "Turkish skincare brand UK", "Turkish olive oil online UK",
           "Turkish honey online UK", "Turkish tea glasses online UK", "Turkish ceramics online UK", "Turkish kilim cushions online UK",
           "Turkish sofa online UK", "Turkish bedding brand UK online", "Turkish gold jewellery online London", "Turkish kids clothing online UK",
           "Turkish shoes online UK", "Turkish sweets online UK", "Turkish pistachio online UK", "Turkish natural soap online UK",
           "hammam towel brand UK founder", "Turkish cotton brand UK founder", "Turkish lamp mosaic online UK", "Turkish copper online UK"],
}

Q3 = {'de': ['türkischer Online Shop Berlin Versand deutschlandweit', 'türkischer Online Shop Köln Versand deutschlandweit', 'türkischer Online Shop Hamburg Versand deutschlandweit', 'türkischer Online Shop München Versand deutschlandweit', 'türkischer Online Shop Frankfurt Versand deutschlandweit', 'türkischer Online Shop Stuttgart Versand deutschlandweit', 'türkischer Online Shop Duisburg Versand deutschlandweit', 'türkischer Online Shop Essen Versand deutschlandweit', 'türkischer Online Shop Dortmund Versand deutschlandweit', 'türkischer Online Shop Mannheim Versand deutschlandweit', 'türkischer Online Shop Nürnberg Versand deutschlandweit', 'türkischer Online Shop Hannover Versand deutschlandweit', 'türkischer Juwelier Berlin online shop', 'türkischer Juwelier Köln online shop', 'türkischer Juwelier Hamburg online shop', 'türkischer Juwelier München online shop', 'türkischer Juwelier Frankfurt online shop', 'türkischer Juwelier Stuttgart online shop', 'türkische Möbel Berlin online bestellen', 'türkische Möbel Köln online bestellen', 'türkische Möbel Hamburg online bestellen', 'türkische Möbel München online bestellen', 'türkische Möbel Frankfurt online bestellen', 'türkische Möbel Stuttgart online bestellen', 'türkische Feinkost online shop Versand', 'türkische Brautmode Onlineshop Deutschland Versand', 'Kına Zubehör online shop', 'türkische Bäckerei online shop Versand', 'türkische Tee Marke Deutschland online shop', 'türkisches Label nachhaltige Mode online'], 'nl': ['Turkse webshop Rotterdam', 'Turkse webshop Amsterdam', 'Turkse webshop Den Haag', 'Turkse webshop Utrecht', 'Turkse webshop Eindhoven', 'Turkse webshop Arnhem', 'Turkse webshop Zaandam', 'Turkse webshop Enschede', 'Turkse juwelier online goud kopen', 'Turkse meubelzaak online bestellen'], 'be': ['Turkse winkel Gent online', 'Turkse winkel Antwerpen webshop', 'Turkse juwelier Antwerpen online', 'magasin turc Liège en ligne', 'bijouterie turque Bruxelles'], 'at': ['türkischer Juwelier Wien online', 'türkische Möbel Wien', 'türkische Brautmode Wien online', 'türkischer Online Shop Linz'], 'fr': ['épicerie turque en ligne Paris livraison', 'épicerie turque en ligne Strasbourg', 'meubles turcs Lyon en ligne', 'bijouterie turque Paris en ligne'], 'gb': ['Turkish supermarket online London delivery', 'Turkish furniture London online store', 'Turkish jewellers London online', 'Turkish bakery online delivery UK', 'Turkish deli online Manchester', 'Turkish grocery online Birmingham']}

Q4 = {'de': ['Ülker online kaufen', 'Pınar online kaufen', 'Tat Tarım online kaufen', 'Sütaş online kaufen', 'Yayla Bulgur online kaufen', 'Elvan online kaufen', 'Tukaş online kaufen', 'Eti Browni online kaufen', 'Torku online kaufen', 'Doğadan Tee online kaufen', 'Çaykur Rize online kaufen', 'Koska Helva online kaufen', 'Filiz Makarna online kaufen', 'Tamek online kaufen', 'Kent Boringer online kaufen', 'Ekici Käse online kaufen', 'Namet Sucuk online kaufen', 'Marmarabirlik Oliven online kaufen', 'Seyidoğlu online kaufen', 'Uno Ekmek online kaufen', 'Kolonya Eyüp Sabri Tuncer kaufen', 'Arko Rasierseife online kaufen', 'Duru Seife online kaufen', 'Hacı Şakir Seife online kaufen', 'Paşabahçe Gläser online kaufen', 'Karaca Deutschland online', 'Emsan Topf online kaufen', 'Korkmaz Kochgeschirr online kaufen'], 'nl': ['Ülker online bestellen', 'Pınar online bestellen', 'Tat Tarım online bestellen', 'Sütaş online bestellen', 'Yayla Bulgur online bestellen', 'Elvan online bestellen', 'Tukaş online bestellen', 'Eti Browni online bestellen', 'Torku online bestellen', 'Doğadan Tee online bestellen', 'Çaykur Rize online bestellen', 'Koska Helva online bestellen', 'Eyüp Sabri Tuncer kolonya kopen', 'Korkmaz pannen kopen'], 'gb': ['Ülker buy online UK', 'Pınar buy online UK', 'Tat Tarım buy online UK', 'Sütaş buy online UK', 'Yayla Bulgur buy online UK', 'Elvan buy online UK', 'Tukaş buy online UK', 'Eti Browni buy online UK', 'Torku buy online UK', 'Doğadan Tee buy online UK'], 'fr': ['Ülker acheter en ligne', 'Pınar acheter en ligne', 'Tat Tarım acheter en ligne', 'Sütaş acheter en ligne', 'Yayla Bulgur acheter en ligne', 'Elvan acheter en ligne'], 'be': ['Ülker online bestellen België', 'Pınar online bestellen België'], 'at': ['Ülker online kaufen Österreich', 'türkische Lebensmittel Lieferung Wien online']}


def main():
    done = json.load(open(QF)) if os.path.exists(QF) else {}
    for cc in Q:
        qs = Q[cc] + Q2.get(cc, []) + Q3.get(cc, []) + Q4.get(cc, [])
        todo = [q for q in qs if f"{cc}|{q}" not in done]
        if not todo:
            continue
        run, items = run_actor("apify~google-search-scraper",
                               {"queries": "\n".join(todo), "maxPagesPerQuery": 1, "countryCode": cc,
                                "saveHtmlToKeyValueStore": False, "includeUnfilteredResults": False})
        for it in items:
            term = (it.get("searchQuery") or {}).get("term")
            res = [{"url": r.get("url"), "title": r.get("title"), "desc": (r.get("description") or "")[:200]}
                   for r in it.get("organicResults", [])]
            done[f"{cc}|{term}"] = res
        json.dump(done, open(QF, "w"), ensure_ascii=False)
        print(cc, run["status"], len(items), "usage$", round(usage(), 3))


if __name__ == "__main__":
    main()
