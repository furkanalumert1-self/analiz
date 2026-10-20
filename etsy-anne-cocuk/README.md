# Etsy Anne-Bebek Fırsat Haritası ve Talep Haritası

- `index.html`: ABD, Almanya ve İngiltere Etsy pazarlarında 40 anne-bebek arama terimi için rekabet, zayıf rakip ve olumsuz yorum analizi.
- `talep.html`: 12 kategoride 60 ürün terimi için Google Ads arama hacmi ile Etsy rakip ilan sayısının karşılaştırılması.
- `kisisel.html`: kişiselleştirilmiş ürünlerde talep, rakip mağaza ve kişiselleştirme boşluğu analizi.
- `pers-data.json`: kişiselleştirme sayfasının ham verisi.
- `inovasyon.html`: talebi doğrulanan 30 üründe şikâyet oranı, rekabet ve inovasyon önerileri.
- `inovasyon-data.json`: inovasyon sayfasının ham verisi.
- `canta.html` + `img/`: tığ işi kâğıt ip hasır çantalar için pazar, rekabet ve şikâyet analizi.
- `canta-data.json`: çanta sayfasının ham verisi.
- `demand-data.json`: talep sayfasının ham verisi.

Veriler Apify ile 18 Ekim 2026 tarihinde toplandı.

Vercel: bu klasörü proje kökü (Root Directory = `etsy-anne-cocuk`) seçerek içe aktarın ya da klasör içinden `npx vercel --prod` çalıştırın. Sayfalar `/`, `/talep`, `/kisisel`, `/inovasyon` ve `/canta` adreslerinde açılır.
