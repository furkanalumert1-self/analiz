(function () {
  "use strict";
  var C = window.CONTENT, P = window.CATALOG;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var tl = function (n) { return n == null ? "–" : Math.round(n).toLocaleString("tr-TR") + " TL"; };
  var BADGE = { V: '<span class="badge b-V">✓ Verified</span>', I: '<span class="badge b-I">≈ Inferred</span>', R: '<span class="badge b-R">🔒 Requires Access</span>' };
  var badge = function (c) { return BADGE[c] || ""; };

  /* ---------- theme ---------- */
  (function () {
    var root = document.documentElement, saved = null;
    try { saved = localStorage.getItem("ae-theme"); } catch (e) {}
    if (saved) root.setAttribute("data-theme", saved);
    $("#themeBtn").addEventListener("click", function () {
      var cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var nx = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", nx);
      try { localStorage.setItem("ae-theme", nx); } catch (e) {}
    });
  })();
  $("#asof").textContent = C.meta.date;

  /* ---------- nav ---------- */
  var nav = $("#nav");
  $$("main > section").forEach(function (s) {
    var a = document.createElement("a"); a.href = "#" + s.id; a.textContent = s.dataset.title; nav.appendChild(a);
  });
  var links = $$("#nav a");
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (l) { l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id); });
        var on = $("#nav a.on"); if (on && on.scrollIntoView && window.innerWidth < 1100) nav.scrollLeft = on.offsetLeft - 40;
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  $$("main > section").forEach(function (s) { io.observe(s); });

  /* ---------- tooltip ---------- */
  var tip = $("#tip");
  document.addEventListener("mousemove", function (e) {
    var t = e.target.closest && e.target.closest("[data-tip]");
    if (!t) { tip.hidden = true; return; }
    tip.innerHTML = t.getAttribute("data-tip"); tip.hidden = false;
    var x = e.clientX + 14, y = e.clientY + 14, w = tip.offsetWidth, h = tip.offsetHeight;
    if (x + w > innerWidth - 8) x = e.clientX - w - 14;
    if (y + h > innerHeight - 8) y = e.clientY - h - 14;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  });

  /* ---------- confidence filter ---------- */
  $$(".conf-filter button").forEach(function (b) {
    b.addEventListener("click", function () {
      $$(".conf-filter button").forEach(function (x) { x.classList.toggle("on", x === b); });
      var f = b.dataset.cf;
      $$("[data-c]").forEach(function (el) { el.classList.toggle("dim", f !== "all" && el.dataset.c !== f); });
    });
  });

  /* ---------- 1. overview ---------- */
  $("#kpis").innerHTML = C.kpis.map(function (k) {
    return '<div class="kpi" data-c="' + k.c + '">' + badge(k.c) + '<div class="k">' + esc(k.k) + '</div><div class="v">' + esc(k.v) + '</div><div class="sub">' + esc(k.sub) + "</div></div>";
  }).join("");
  $("#method").innerHTML = C.meta.method.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");
  $("#topOpps").innerHTML = C.top.map(function (o, i) {
    return '<article class="opp" data-c="' + o.c + '"><div class="opp-h"><h3>' + esc(o.t) + '</h3><span class="num">' + (i + 1) + '</span></div>' +
      '<dl class="ooai"><dt lang="en">Observation</dt><dd>' + esc(o.obs) + '</dd><dt lang="en">Opportunity</dt><dd>' + esc(o.opp) + '</dd><dt lang="en">Automation</dt><dd>' + esc(o.auto) + '</dd><dt lang="en">Expected impact</dt><dd class="imp">' + esc(o.imp) + ' <span class="muted small">(tahmini)</span></dd></dl>' +
      '<div class="meta-row">' + badge(o.c) + '<span class="tag">' + esc(o.stage) + "</span></div></article>";
  }).join("");

  /* ---------- 2. ecosystem ---------- */
  (function () {
    var e = C.eco, h = '<div class="eco-root"><b>' + esc(e.root.n) + "</b>" + esc(e.root.d) + '<br><a href="' + e.root.src + '" target="_blank" rel="noopener">kaynak ↗</a></div><div class="eco-level">';
    e.nodes.forEach(function (n) {
      if (n.brands) {
        h += '<div class="eco-node op" data-c="' + n.c + '"><div class="t">' + esc(n.n) + ' <span class="type B2C">B2C operatör</span> ' + badge(n.c) + '</div><div>' + esc(n.d) + '</div><div class="ev">Kanıt: ' + esc(n.ev) + '</div><div class="brands">';
        n.brands.forEach(function (b) {
          h += '<div class="brand-box"><div class="bh"><b><span class="dot ' + b.n[0] + '"></span>' + esc(b.n) + '</b><a href="' + b.url + '" target="_blank" rel="noopener">' + esc(b.url.replace("https://www.", "").replace(/\/$/, "")) + " ↗</a></div><div class=\"small muted\">" + esc(b.d) + "</div>";
          b.cats.forEach(function (c) { h += '<div class="cat-row"><b>' + esc(c.n) + '</b><span class="c">' + c.cnt + '</span><span class="f">' + esc(c.fam) + "</span></div>"; });
          h += '<div class="brand-opp"><b>Fırsatlar:</b> ' + esc(b.opp) + "</div></div>";
        });
        h += "</div></div>";
      } else {
        h += '<div class="eco-node" data-c="' + n.c + '"><div class="t">' + esc(n.n) + ' <span class="type">' + esc(n.type) + "</span></div><div>" + esc(n.d) + '</div><div class="ev">Kanıt: ' + esc(n.ev) + ' · <a href="' + n.url + '" target="_blank" rel="noopener">site ↗</a></div><div style="margin-top:.4rem">' + badge(n.c) + "</div></div>";
      }
    });
    $("#eco").innerHTML = h + "</div>";
    $("#mkt").innerHTML = e.marketplaces.map(function (m) { return '<li><a href="' + m.url + '" target="_blank" rel="noopener">' + esc(m.n) + ' ↗</a><span class="muted">' + esc(m.b) + "</span></li>"; }).join("");
    $("#excluded").textContent = e.excluded;
  })();

  /* ---------- 3. websites ---------- */
  function catBars(brand) {
    var m = {}; P.forEach(function (p) { if (p.b === brand) m[p.c] = (m[p.c] || 0) + 1; });
    var arr = Object.keys(m).map(function (k) { return [k, m[k]]; }).sort(function (a, b) { return b[1] - a[1]; });
    var max = arr[0][1], col = brand === "Homedius" ? "var(--s1)" : "var(--s2)";
    return '<div class="hbars">' + arr.map(function (a) {
      return '<div class="hb" data-tip="<b>' + esc(a[0]) + "</b><br>" + a[1] + ' ürün"><span class="lbl">' + esc(a[0]) + '</span><span class="track"><span class="bar" style="display:block;width:' + (a[1] / max * 100) + "%;background:" + col + '"></span></span><span class="val">' + a[1] + "</span></div>";
    }).join("") + "</div>";
  }
  function renderSite(name) {
    var s = C.sites[name], X = P.filter(function (p) { return p.b === name; });
    var oos = X.filter(function (p) { return !p.in || p.v.some(function (v) { return v[2] === 0; }); }).length;
    var h = '<div class="two"><div class="card"><h3><span class="dot ' + name[0] + '"></span>' + name + ' – temel bulgular <a class="small" href="' + s.url + '" target="_blank" rel="noopener">site ↗</a></h3><div class="table-wrap"><table class="tbl"><tbody>' +
      s.facts.map(function (f) { return '<tr data-c="' + f[2] + '"><td><b>' + esc(f[0]) + "</b></td><td>" + esc(f[1]) + "</td><td>" + badge(f[2]) + "</td></tr>"; }).join("") + "</tbody></table></div></div>";
    h += '<div><div class="card"><h3>Ürün dağılımı (kategori) ' + badge("V") + '</h3><p class="muted small">' + X.length + " ürün · " + oos + " ürün veya ürün varyantı tükenmiş</p>" + catBars(name) + "</div>";
    h += '<div class="card"><h3>Güçlü yanlar</h3><ul class="plain">' + s.strengths.map(function (x) { return "<li><span>" + esc(x) + "</span></li>"; }).join("") + "</ul></div></div></div>";
    h += '<div class="card"><h3>Conversion ve güven açısından bulgular</h3><div class="table-wrap"><table class="tbl"><thead><tr><th>Bulgu</th><th>Etki alanı</th><th>Güven</th></tr></thead><tbody>' +
      s.issues.map(function (f) { return '<tr data-c="' + f[2] + '"><td>' + esc(f[0]) + "</td><td>" + esc(f[1]) + "</td><td>" + badge(f[2]) + "</td></tr>"; }).join("") + "</tbody></table></div></div>";
    $("#sitePanel").innerHTML = h;
    reapplyConf();
  }
  $$("#siteTabs button").forEach(function (b) { b.addEventListener("click", function () { $$("#siteTabs button").forEach(function (x) { x.classList.toggle("on", x === b); }); renderSite(b.dataset.site); }); });
  renderSite("Homedius");

  function reapplyConf() { var on = $(".conf-filter button.on"); if (on) on.click(); }

  /* ---------- 4. product intelligence ---------- */
  (function ladder() {
    var order = ["Base Visco Sünger Yatak", "Base 7 Zone Visco Yatak", "Hybrid Pocket Yaylı Yatak", "Helix 5 Zone Pocket Yaylı Yatak", "Hybrid 5 Zone Pocket Yaylı Yatak", "Latex Pocket Yaylı Yatak", "Organic Comfort Latex Yatak"];
    var rows = order.map(function (n) { return P.filter(function (p) { return p.n === n; })[0]; }).filter(Boolean);
    var max = Math.max.apply(null, rows.map(function (r) { return r.p; })), prev = null;
    $("#ladder").innerHTML = rows.map(function (r) {
      var diff = prev ? "+" + Math.round(r.p - prev).toLocaleString("tr-TR") : ""; prev = r.p;
      var sizes = r.v.map(function (v) { return v[0] + ": " + tl(v[1]) + " (stok " + v[2] + ")"; }).join("<br>");
      return '<div class="hb" data-tip="<b>' + esc(r.n) + "</b><br>Liste: " + tl(r.lp) + " · Satış: " + tl(r.p) + "<br>" + (r.rc ? "Yorum: " + r.rc + " · " + r.r + "/5<br>" : "") + sizes + '"><span class="lbl">' + esc(r.n.replace(" Yatak", "").replace(" Sünger", "")) + '</span><span class="track"><span class="bar" style="display:block;width:' + (r.p / max * 100) + '%"></span></span><span class="val">' + tl(r.p).replace(" TL", "") + ' <span class="step">' + diff + "</span></span></div>";
    }).join("") + '<p class="muted small" style="margin-top:.5rem">Çubuk üzerine gelin: ölçü bazında fiyat ve stok. Sağdaki küçük sayı bir önceki basamakla farktır (TL).</p>';
  })();
  (function famRange() {
    var m = {};
    P.forEach(function (p) { if (p.b === "Homedius" && p.c === "Mobilya" && p.f && p.f !== "Sırt Dayama Aparatı" && p.f !== "Tüm Mobilya Ürünleri") { (m[p.f] = m[p.f] || []).push(p); } });
    var arr = Object.keys(m).map(function (k) { var ps = m[k].map(function (x) { return x.p; }); return { f: k, min: Math.min.apply(null, ps), max: Math.max.apply(null, ps), n: m[k].length, oos: m[k].filter(function (x) { return !x.in; }).length }; }).sort(function (a, b) { return a.min - b.min; });
    var top = 20000;
    $("#famRange").innerHTML = arr.map(function (a) {
      return '<div class="rg" data-tip="<b>' + esc(a.f) + "</b><br>" + a.n + " ürün/renk · " + tl(a.min) + " – " + tl(a.max) + (a.oos ? "<br>" + a.oos + " renk tükendi" : "") + '"><span class="lbl">' + esc(a.f) + '</span><span class="track"><span class="rgbar" style="left:' + (a.min / top * 100) + "%;width:" + Math.max((a.max - a.min) / top * 100, 1.2) + '%"></span></span><span class="val">' + (a.min === a.max ? tl(a.min) : Math.round(a.min / 100) / 10 + "–" + Math.round(a.max / 100) / 10 + "K TL") + "</span></div>";
    }).join("") + '<div class="axis"><span></span><span class="ticks"><span>0</span><span>5K</span><span>10K</span><span>15K</span><span>20K</span></span><span></span></div>';
  })();

  var PI = [
    ["Homedius", "Mocca", "Katlanır yatak & uzanma koltuğu (tek / çift)", "Küçük ev, öğrenci evi, misafir odası", "Orta", "Sırt Dayama Aparatı · Papatya Kırlent · Visco Yastık", "Magic · Valeria", "Mocca Fitilli Kadife Çift · Muse / Vetta"],
    ["Homedius", "Magic", "Tek hareketle yatağa dönüşen koltuk", "1+1, çocuk odası, okula dönüş", "Giriş–Orta", "Sırt Dayama Aparatı 2'li · Goody Goose Yorgan", "Mila · Melisa", "Magic Çift · Rumy"],
    ["Homedius", "Rumy / Muse / Vetta / Eco Vetta / Loop / Calina", "Çift kişilik yatağa dönüşen çok amaçlı koltuk", "Salon + misafir yatağı arayan hane", "Üst (11.999–18.999 TL)", "Kırlent · Qube Puf · Yorgan", "Sofa Bed Koltuk Puf Seti", "Loop (18.999 TL) en üst basamak"],
    ["Homedius", "Coop / Notre / Bella / Sally", "Berjer, puf seti, sallanan sandalye", "Okuma / dinlenme köşesi kuran", "Orta", "Qube Puf · Kırlent · Poffi Minder", "Fiesta Armut Koltuk", "Sally (10.499 TL) · Sofa Bed (13.999 TL)"],
    ["Homedius", "Sandalye Oturum Minderi", "Su itici, çıkarılabilir kılıflı minder (1 / 2 / 4'lü)", "Mutfak, balkon, bahçe", "Düşük (239–1.299 TL)", "Peştamal · Ayak Havlusu", "Desenli / Renkli seri", "4'lü paket"],
    ["Homedius", "Yataklar (Bedform, Deluxe, Bamboo, Multicomfort)", "Ekonomik / katlanır / yer yatağı", "Misafir, öğrenci, yazlık", "Giriş (1.299–5.899 TL)", "Visco Yastık · Yorgan", "Nevada sünger yatak", "Sleeptown Base Visco (çapraz marka)"],
    ["Homedius", "Visco Yastık / Yorgan", "Uyku tekstili", "Herkes · yenileme ihtiyacı", "Düşük–Orta", "Yorgan ↔ Yastık", "Günlük yastık", "Visco TermoSwitch Techno · Goody Goose Çift"],
    ["Sleeptown", "Base Visco / Base 7 Zone", "Visco sünger yatak", "İlk ev, bütçe odaklı çift, genç", "Giriş–Orta (7.999–14.399 TL)", "HyperSoft Ped · Base Yastık · Celia Nevresim", "Helix 5 Zone", "Hybrid / Hybrid 5 Zone"],
    ["Sleeptown", "Hybrid / Hybrid 5 Zone / Helix / Duplex", "Pocket yaylı + visco hibrit", "Bel/omurga desteği arayan, farklı kilolu çiftler", "Orta–Üst", "Visco Gell Ped · Base Zone Yastık · Kaz Tüyü Yorgan", "Latex Pocket", "Organic Comfort Latex"],
    ["Sleeptown", "Latex Pocket / Organic Comfort Latex", "Doğal içerikli latex yatak", "Alerjik / doğal ürün tercih eden, yüksek bütçe", "Üst (13.999–32.999 TL)", "Organic Comfort Yastık · Visco Gell Ped", "Hybrid 5 Zone", "Daha büyük ölçü (180x200, 200x200)"],
    ["Sleeptown", "Cloud / Nanna / Neva Montessori", "Bebek & çocuk yatağı", "Ebeveyn (0–10 yaş)", "Giriş–Orta (2.799–9.999 TL)", "HyperSoft Ped · Cooly Göz Yastığı", "Homedius bebek yastığı / oyun minderi", "Neva 90x190 → Base (yaşa göre)"],
    ["Sleeptown", "HyperSoft / Visco Gell Ped · Celia Nevresim · Yastıklar", "Uyku aksesuarı", "Mevcut yatak sahibi", "Düşük–Orta", "Yatak ölçüsüyle eşleşen set", "Alez / yatak pedi", "Visco Gell (HyperSoft'tan +1.500 TL)"]
  ];
  (function renderPI() {
    var head = "<thead><tr><th>Marka</th><th>Model ailesi</th><th>Fiyat (gerçek)</th><th>Kullanım amacı</th><th>Hedef müşteri</th><th>Segment</th><th>Tamamlayıcı</th><th>Alternatif</th><th>Upgrade</th></tr></thead>";
    var body = PI.map(function (r) {
      var keys = r[1].split(/\s*[\/·(),]\s*/).map(function (k) { return k.trim(); }).filter(function (k) { return k.length > 2; });
      var ps = P.filter(function (p) { return p.b === r[0] && keys.some(function (k) { return (p.f || "").indexOf(k) === 0 || p.n.indexOf(k) >= 0; }); }).map(function (p) { return p.p; });
      var pr = ps.length ? tl(Math.min.apply(null, ps)) + " – " + tl(Math.max.apply(null, ps)) : "–";
      return '<tr data-c="I"><td><span class="dot ' + r[0][0] + '"></span>' + r[0] + "</td><td><b>" + esc(r[1]) + '</b></td><td class="num-c">' + pr + "</td><td>" + esc(r[2]) + "</td><td>" + esc(r[3]) + "</td><td>" + esc(r[4]) + "</td><td>" + esc(r[5]) + "</td><td>" + esc(r[6]) + "</td><td>" + esc(r[7]) + "</td></tr>";
    }).join("");
    $("#pi").innerHTML = head + "<tbody>" + body + "</tbody>";
  })();

  /* catalog table */
  (function catalog() {
    var cats = {}; P.forEach(function (p) { cats[p.b + " · " + p.c] = 1; });
    $("#fCat").innerHTML += Object.keys(cats).sort().map(function (c) { return "<option>" + esc(c) + "</option>"; }).join("");
    var sortKey = "p", dir = 1;
    var cols = [["n", "Ürün"], ["b", "Marka"], ["c", "Kategori"], ["p", "Satış"], ["lp", "Liste"], ["d", "İnd. %"], ["q", "Stok"], ["rc", "Yorum"], ["v", "Varyant"]];
    function minStock(p) { return p.v.length ? Math.min.apply(null, p.v.map(function (v) { return v[2] == null ? 999 : v[2]; })) : (p.q == null ? (p.in ? 999 : 0) : p.q); }
    function draw() {
      var fb = $("#fBrand").value, fc = $("#fCat").value, fs = $("#fStock").value, q = $("#fQ").value.toLocaleLowerCase("tr");
      var rows = P.filter(function (p) {
        if (fb && p.b !== fb) return false;
        if (fc && p.b + " · " + p.c !== fc) return false;
        if (q && p.n.toLocaleLowerCase("tr").indexOf(q) < 0 && (p.f || "").toLocaleLowerCase("tr").indexOf(q) < 0) return false;
        var ms = minStock(p);
        if (fs === "oos" && !(ms === 0 || !p.in)) return false;
        if (fs === "low" && !(ms > 0 && ms <= 3)) return false;
        return true;
      });
      rows.sort(function (a, b) {
        var x = a[sortKey], y = b[sortKey];
        if (sortKey === "v") { x = a.v.length; y = b.v.length; }
        if (sortKey === "q") { x = minStock(a); y = minStock(b); }
        if (x == null) x = -1; if (y == null) y = -1;
        return (typeof x === "string" ? x.localeCompare(y, "tr") : x - y) * dir;
      });
      $("#catCount").textContent = rows.length + " / " + P.length + " ürün gösteriliyor";
      var head = "<thead><tr>" + cols.map(function (c) { return '<th class="sort" data-k="' + c[0] + '">' + c[1] + (sortKey === c[0] ? (dir > 0 ? " ↑" : " ↓") : "") + "</th>"; }).join("") + "</tr></thead>";
      var body = rows.map(function (p) {
        var ms = minStock(p), sc = ms === 0 || !p.in ? "stock-0" : ms <= 3 ? "stock-low" : "";
        var st = !p.in ? "Tükendi" : p.v.length ? (p.v.filter(function (v) { return v[2] === 0; }).length ? p.v.filter(function (v) { return v[2] === 0; }).length + " ölçü tükendi · min " + ms : "min " + ms) : (p.q == null ? "Stokta" : p.q);
        var vt = p.v.length ? '<span data-tip="' + esc(p.v.map(function (v) { return v[0] + ": " + tl(v[1]) + " · stok " + v[2]; }).join("<br>")) + '">' + p.v.length + " ölçü ⓘ</span>" : "–";
        return '<tr><td><a href="' + p.u + '" target="_blank" rel="noopener">' + esc(p.n) + '</a></td><td><span class="dot ' + p.b[0] + '"></span>' + p.b + "</td><td>" + esc(p.c) + (p.s && p.s !== p.c ? ' <span class="muted">› ' + esc(p.s) + "</span>" : "") + '</td><td class="num-c"><b>' + tl(p.p) + '</b></td><td class="num-c"><span class="strike">' + (p.lp ? tl(p.lp) : "") + '</span></td><td class="num-c">' + (p.d != null ? "%" + p.d : "–") + '</td><td class="num-c ' + sc + '">' + st + '</td><td class="num-c">' + (p.rc ? p.rc + " · " + p.r : "0") + '</td><td class="num-c">' + vt + "</td></tr>";
      }).join("");
      $("#cat").innerHTML = head + "<tbody>" + body + "</tbody>";
      $$("#cat th.sort").forEach(function (th) { th.addEventListener("click", function () { var k = th.dataset.k; if (sortKey === k) dir = -dir; else { sortKey = k; dir = 1; } draw(); }); });
    }
    ["#fBrand", "#fCat", "#fStock"].forEach(function (s) { $(s).addEventListener("change", draw); });
    $("#fQ").addEventListener("input", draw);
    draw();
  })();

  /* ---------- 5. journey ---------- */
  $("#jr").innerHTML = C.journey.map(function (j, i) {
    return '<div class="jstage"><span class="jn">Aşama ' + (i + 1) + "</span><h3>" + j.s + '</h3><span class="lab">Sitede görülen</span><ul>' + j.obs.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + '</ul><span class="lab">Boşluk</span><div class="gap">' + esc(j.gap) + '</div><div class="au">Engage: ' + esc(j.auto) + "</div></div>";
  }).join("");

  /* ---------- 6. automations ---------- */
  function drawAutos(f) {
    $("#autos").innerHTML = C.autos.filter(function (a) { return !f || a.brand === f; }).map(function (a) {
      return '<article class="auto" data-c="' + a.c + '"><div class="auto-h"><div><span class="id">' + a.id + " · " + esc(a.brand) + "</span><h3>" + esc(a.t) + "</h3></div>" + badge(a.c) + '</div><div class="trig"><b>Tetikleyici:</b> ' + esc(a.trig) + '</div><ul class="tl">' +
        a.flow.map(function (s) { return '<li><span class="when">' + esc(s[0] || "•") + "</span>" + esc(s[1]) + "</li>"; }).join("") + '</ul><div class="why"><b>Neden:</b> ' + esc(a.why) + '</div><div class="kv"><div><span>Gerekli veri</span>' + esc(a.data) + "</div><div><span>Entegrasyon</span>" + esc(a.integ) + "</div><div><span>Karmaşıklık</span>" + esc(a.cx) + "</div><div><span>Beklenen etki (tahmini)</span><b>" + esc(a.imp) + "</b></div></div></article>";
    }).join("");
    reapplyConf();
  }
  $$("#autoTabs button").forEach(function (b) { b.addEventListener("click", function () { $$("#autoTabs button").forEach(function (x) { x.classList.toggle("on", x === b); }); drawAutos(b.dataset.ab); }); });
  drawAutos("");

  /* ---------- 7. cross-sell map ---------- */
  function drawX(i) {
    var x = C.xmap[i];
    $$("#xChips .chip").forEach(function (c, j) { c.classList.toggle("on", j === i); });
    var col = function (title, arr, cls) { return '<div class="xcol"><h4>' + title + "</h4>" + arr.map(function (a) { return '<div class="xn ' + cls + '"><div>' + esc(a[0]) + '</div><div class="p">' + esc(a[1]) + "</div>" + (a[2] ? '<div class="r">' + esc(a[2]) + "</div>" : "") + "</div>"; }).join("") + "</div>"; };
    $("#xMap").innerHTML = col("Cross-sell · tamamlayıcı", x.comp, "comp") +
      '<div class="xcenter"><div class="xbase"><span class="muted small">Satın alınan / incelenen</span><b>' + esc(x.base) + "</b>" + badge("V") + '</div><div class="xflow">Satın alma → <b>tamamlayıcı</b> (sepet / +3–7 gün) → <b>upsell</b> (inceleme anında) → <b>alternatif</b> (stok yoksa / fiyat itirazı)</div></div>' +
      '<div class="xcol"><h4>Upsell · üst segment</h4>' + nodes(x.up, "up") + '<h4 style="margin-top:.4rem">Alternatif</h4>' + nodes(x.alt, "alt") + "</div>";
    function nodes(arr, cls) { return arr.map(function (a) { return '<div class="xn ' + cls + '"><div>' + esc(a[0]) + '</div><div class="p">' + esc(a[1]) + "</div></div>"; }).join(""); }
  }
  $("#xChips").innerHTML = C.xmap.map(function (x, i) { return '<button class="chip" data-i="' + i + '">' + esc(x.f) + "</button>"; }).join("");
  $$("#xChips .chip").forEach(function (c) { c.addEventListener("click", function () { drawX(+c.dataset.i); }); });
  drawX(0);

  /* ---------- 8. cross-brand ---------- */
  $("#xbProof").innerHTML = "<tbody>" + C.xbrand.proof.map(function (r) { return '<tr data-c="' + r[2] + '"><td><b>' + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td><td>" + badge(r[2]) + "</td></tr>"; }).join("") + "</tbody>";
  $("#xbOverlap").innerHTML = '<thead><tr><th>Model</th><th class="num-c">Homedius</th><th class="num-c">Sleeptown</th><th class="num-c">Fark</th></tr></thead><tbody>' + C.xbrand.overlap.map(function (r) { return "<tr><td>" + esc(r[0]) + '</td><td class="num-c">' + r[1] + '</td><td class="num-c">' + r[2] + '</td><td class="num-c"><b>' + r[3] + "</b></td></tr>"; }).join("") + "</tbody>";
  $("#xbNote").textContent = C.xbrand.note;
  $("#xbFlows").innerHTML = C.xbrand.flows.map(function (f) {
    return '<div class="xbf" data-c="R"><div class="arrow"><span>' + esc(f.from) + '</span><span class="muted">→</span><span class="to">' + esc(f.to) + '</span></div><div class="ex"><b>Örnek:</b> ' + esc(f.ex) + '</div><div class="why">' + esc(f.why) + '</div><div style="margin-top:.5rem"><span class="tag">Potential Cross-Brand Opportunity</span> ' + badge("R") + "</div></div>";
  }).join("");

  /* ---------- 9. ads ---------- */
  $("#adTbl").innerHTML = "<thead><tr><th>Marka</th><th>Başlangıç</th><th>Tür</th><th>Mesaj</th><th>Öne çıkan ürün</th><th>CTA</th><th>Kütüphane kodu</th></tr></thead><tbody>" + C.ads.meta.map(function (a) {
    return '<tr data-c="V"><td><span class="dot ' + a.b[0] + '"></span>' + a.b + "</td><td style=\"white-space:nowrap\">" + esc(a.start) + "</td><td>" + esc(a.type) + "</td><td>" + esc(a.msg) + "</td><td>" + esc(a.prod) + "</td><td>" + esc(a.cta) + '</td><td class="small muted">' + esc(a.id) + "</td></tr>";
  }).join("") + "</tbody>";
  $("#adThemes").innerHTML = "<tbody>" + C.ads.themes.map(function (r) { return '<tr data-c="' + r[2] + '"><td><b>' + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</tbody>";
  $("#agency").innerHTML = "<b>Ajans sinyali:</b> " + esc(C.ads.agency) + " " + badge("V");
  $("#adOther").innerHTML = "<tbody>" + C.ads.other.map(function (r) { return '<tr data-c="' + r[2] + '"><td><b>' + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td><td>" + badge(r[2]) + "</td></tr>"; }).join("") + "</tbody>";
  var adSteps = [["Meta Ad", "Mocca Fitilli Kadife · %25", 0], ["Product Page", "UTM: utm_source=meta", 0], ["Product Viewed", "Engage web SDK etkinliği", 1], ["No Purchase", "24 saat içinde sipariş yok", 0], ["Engage Audience", "'Reklamdan geldi · Mocca ilgisi'", 1], ["Personalized Follow-Up", "E-posta / SMS / WhatsApp: stoktaki renkler + 7 taksit", 1], ["Purchase", "Sipariş etkinliği", 0], ["Suppress + Cross-Sell", "Reklam kitlesinden çıkar · misafir kiti akışı", 1]];
  $("#adFlow").innerHTML = adSteps.map(function (s) { return '<div class="fstep' + (s[2] ? " eng" : "") + '"><b>' + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></div>"; }).join("");

  /* ---------- 10. tracking ---------- */
  $("#trk").innerHTML = "<thead><tr><th>Teknoloji</th><th>Homedius</th><th>Sleeptown</th><th>Güven</th></tr></thead><tbody>" + C.tracking.map(function (r) { return '<tr data-c="' + r[3] + '"><td><b>' + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + "</td><td>" + badge(r[3]) + "</td></tr>"; }).join("") + "</tbody>";

  /* ---------- 11. AI ---------- */
  $("#aiGrid").innerHTML = C.ai.map(function (a) {
    return '<article class="aicard" data-c="' + a.c + '"><h3>' + esc(a.t) + " " + badge(a.c) + "</h3><div>" + esc(a.d) + '</div><div class="ev"><b>Kanıt:</b> ' + esc(a.ev) + '</div><div class="kv"><div><span>Gerekli veri</span>' + esc(a.data) + "</div><div><span>Karmaşıklık · Etki (tahmini)</span>" + esc(a.cx) + " · <b>" + esc(a.imp) + "</b></div></div></article>";
  }).join("");

  /* ---------- 12. segments ---------- */
  $("#segs").innerHTML = C.segments.map(function (s) { return '<div class="seg" data-c="R"><b>' + esc(s[0]) + "</b><span>" + esc(s[1]) + '</span><span class="sz">🔒 Requires CRM / Order Data</span></div>'; }).join("");

  /* ---------- 13. scoring ---------- */
  (function () {
    var cols = ["Fırsat", "Kanıt", "Yolculuk aşaması", "Gerekli veri", "Gerekli entegrasyon", "Karmaşıklık", "Beklenen etki (tahmini)", "Güven"];
    var rank = { "Düşük": 1, "Orta": 2, "Orta-Yüksek": 2.5, "Yüksek": 3 }, sk = 6, dir = -1;
    function draw() {
      var rows = C.scoring.slice().sort(function (a, b) {
        var x = a[sk], y = b[sk];
        if (sk === 5 || sk === 6) return ((rank[x] || 0) - (rank[y] || 0)) * dir || ((rank[a[5]] || 0) - (rank[b[5]] || 0));
        return String(x).localeCompare(String(y), "tr") * dir;
      });
      $("#score").innerHTML = "<thead><tr>" + cols.map(function (c, i) { return '<th class="sort" data-i="' + i + '">' + c + (sk === i ? (dir > 0 ? " ↑" : " ↓") : "") + "</th>"; }).join("") + "</tr></thead><tbody>" +
        rows.map(function (r) { return '<tr data-c="' + r[7] + '"><td><b>' + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + "</td><td>" + esc(r[3]) + "</td><td>" + esc(r[4]) + "</td><td>" + esc(r[5]) + "</td><td><b>" + esc(r[6]) + "</b></td><td>" + badge(r[7]) + "</td></tr>"; }).join("") + "</tbody>";
      $$("#score th.sort").forEach(function (th) { th.addEventListener("click", function () { var i = +th.dataset.i; if (sk === i) dir = -dir; else { sk = i; dir = -1; } draw(); reapplyConf(); }); });
    }
    draw();
  })();

  /* ---------- 14. roadmap ---------- */
  $("#road").innerHTML = C.roadmap.map(function (r) { return '<div class="phase"><div class="pp">' + r.p + "</div><h3>" + esc(r.t) + "</h3><ul>" + r.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>"; }).join("");

  /* ---------- 15. simulator ---------- */
  var COLORS = ["Antrasit", "Bej", "Kiremit", "Petrol Yeşili", "Hardal", "Açık Gri", "Gri", "Mavi", "Yeşil", "Kahverengi", "Krem", "Pembe"];
  function find(brand, test) { return P.filter(function (p) { return p.b === brand && p.in && test(p); }); }
  function first(brand, test) { return find(brand, test)[0]; }
  function sizeOf(v) { return v ? v[0] : null; }
  function variantFor(p, size) { if (!p || !p.v.length) return null; return p.v.filter(function (v) { return v[0] === size; })[0] || p.v[0]; }
  function priceOf(p, size) { var v = variantFor(p, size); return v ? v[1] : p.p; }
  function recs(p, size) {
    var out = [], up = null, b = p.b, color = COLORS.filter(function (c) { return p.n.indexOf(c) >= 0; }).sort(function (a, b) { return b.length - a.length; })[0];
    if (b === "Sleeptown" && (p.c === "Yatak" || p.c === "Bebek & Çocuk Yatağı")) {
      var ped = first(b, function (x) { return x.n.indexOf("HyperSoft") === 0; });
      if (ped) out.push({ p: ped, size: size, why: "aynı ölçüde (" + (size || "standart") + ") yatak pedi" });
      var w = size ? parseInt(size, 10) : 90;
      var nev = first(b, function (x) { return x.n.indexOf("Celia") === 0; });
      if (nev) out.push({ p: nev, size: nev.v[w >= 140 ? 1 : 0] ? nev.v[w >= 140 ? 1 : 0][0] : null, why: w >= 140 ? "çift kişilik nevresim" : "tek kişilik nevresim" });
      var pil = first(b, function (x) { return x.n === "Base Zone Yastık"; }); if (pil) out.push({ p: pil, why: "yatağa uygun yastık" });
      var ladder = ["Base Visco Sünger Yatak", "Base 7 Zone Visco Yatak", "Hybrid Pocket Yaylı Yatak", "Helix 5 Zone Pocket Yaylı Yatak", "Hybrid 5 Zone Pocket Yaylı Yatak", "Latex Pocket Yaylı Yatak", "Organic Comfort Latex Yatak", "Cloud Bebek ve Çocuk Yatağı", "Nanna Çocuk & Bebek Pocket Yaylı Yatağı", "Neva Montessori Çocuk & Bebek Yatağı"];
      var i = ladder.indexOf(p.n); if (i >= 0 && i + 1 < ladder.length && i !== 6) up = first(b, function (x) { return x.n === ladder[i + 1]; });
    } else if (b === "Sleeptown") {
      var a1 = first(b, function (x) { return x.n.indexOf("Celia") === 0 && x.id !== p.id; }), a2 = first(b, function (x) { return x.n === "Base Zone Yastık" && x.id !== p.id; }), a3 = first(b, function (x) { return x.n.indexOf("Cooly") >= 0 && x.id !== p.id; });
      [a1, a2, a3].forEach(function (x) { if (x) out.push({ p: x, why: "uyku seti tamamlayıcısı" }); });
      if (p.c === "Katlanır Koltuk") up = first(b, function (x) { return x.f === p.f && x.p > p.p; });
      else up = first(b, function (x) { return x.n === "Hybrid 5 Zone Pocket Yaylı Yatak"; });
    } else if (p.c === "Mobilya" && /Katlanır|Yatak|Yataklı|Uzanma|Sofa Bed/i.test(p.n)) {
      var ap = first(b, function (x) { return x.n === "Yataklı Koltuk Sırt Dayama Destek Demiri Aparatı"; }); if (ap) out.push({ p: ap, why: "koltuk modunda sırt desteği" });
      var kr = first(b, function (x) { return x.f === "Kırlent" && color && x.n.indexOf(color) >= 0; }) || first(b, function (x) { return x.f === "Kırlent"; }); if (kr) out.push({ p: kr, why: color && kr.n.indexOf(color) >= 0 ? "koltukla aynı renk (" + color + ")" : "dekoratif tamamlayıcı" });
      var vy = find(b, function (x) { return x.f === "Visco Yastık"; }).sort(function (a, c) { return a.p - c.p; })[0]; if (vy) out.push({ p: vy, why: "yatak modunda yastık" });
      up = find(b, function (x) { return x.c === "Mobilya" && x.p > p.p * 1.15 && /Çift Kişilik/.test(x.n) && (!color || x.n.indexOf(color) >= 0); }).sort(function (a, c) { return a.p - c.p; })[0];
    } else if (p.c === "Mobilya") {
      var q1 = first(b, function (x) { return /Puf Qube/.test(x.n) && (!color || x.n.indexOf(color) >= 0); }) || first(b, function (x) { return /Puf Qube/.test(x.n); });
      var k1 = first(b, function (x) { return x.f === "Kırlent" && color && x.n.indexOf(color) >= 0; }) || first(b, function (x) { return x.f === "Kırlent"; });
      var pf = first(b, function (x) { return x.f === "Poffi"; });
      [q1, k1, pf].forEach(function (x) { if (x) out.push({ p: x, why: "oturma köşesi tamamlayıcısı" }); });
      up = find(b, function (x) { return x.c === "Mobilya" && x.p > p.p * 1.3; }).sort(function (a, c) { return a.p - c.p; })[0];
    } else if (p.c === "Ev Tekstili") {
      var mp = first(b, function (x) { return x.f === p.f && x.id !== p.id && /4'lü|2'li/.test(x.n); });
      if (mp) out.push({ p: mp, why: "çoklu paket" });
      var cp = first(b, function (x) { return x.f === "Coop"; }); if (cp) out.push({ p: cp, why: "minder/kırlent ile uyumlu berjer" });
      var ph = first(b, function (x) { return x.f === "Peştamal" || x.f === "Ayak Havlusu"; }); if (ph) out.push({ p: ph, why: "düşük tutarlı ek ürün" });
      up = first(b, function (x) { return x.f === "Poffi"; });
    } else {
      var yo = first(b, function (x) { return /Yorgan/.test(x.n) && x.id !== p.id; }), ys = find(b, function (x) { return x.f === "Visco Yastık" && x.id !== p.id; })[0];
      [yo, ys].forEach(function (x) { if (x) out.push({ p: x, why: "uyku tekstili tamamlayıcısı" }); });
      var sty = P.filter(function (x) { return x.b === "Sleeptown" && x.n === "Base Visco Sünger Yatak"; })[0];
      if (sty) out.push({ p: sty, why: "Potential Cross-Brand: Sleeptown yatak (ortak izin gerekir)", xb: true });
      up = find(b, function (x) { return x.c === p.c && x.p > p.p * 1.2; }).sort(function (a, c) { return a.p - c.p; })[0];
    }
    return { out: out.slice(0, 3), up: up };
  }
  function fillProducts() {
    var b = $("#sBrand").value;
    var list = P.filter(function (p) { return p.b === b && p.in; }).sort(function (x, y) { return (x.c + x.n).localeCompare(y.c + y.n, "tr"); });
    var groups = {}; list.forEach(function (p) { (groups[p.c] = groups[p.c] || []).push(p); });
    $("#sProd").innerHTML = Object.keys(groups).map(function (g) { return '<optgroup label="' + esc(g) + '">' + groups[g].map(function (p) { return '<option value="' + p.id + '">' + esc(p.n) + " – " + tl(p.p) + "</option>"; }).join("") + "</optgroup>"; }).join("");
    var def = b === "Homedius" ? list.filter(function (p) { return p.n.indexOf("Mocca Tek Kişilik Katlanır Yatak Uzanma Koltuğu Kiremit") === 0; })[0] : list.filter(function (p) { return p.n === "Hybrid 5 Zone Pocket Yaylı Yatak"; })[0];
    if (def) $("#sProd").value = def.id;
    fillVariants();
  }
  function fillVariants() {
    var p = P[+$("#sProd").value];
    var vs = p.v.filter(function (v) { return v[2] !== 0; });
    $("#sVarWrap").style.display = vs.length ? "" : "none";
    $("#sVar").innerHTML = vs.map(function (v) { return '<option value="' + esc(v[0]) + '">' + esc(v[0]) + " – " + tl(v[1]) + " (stok " + v[2] + ")</option>"; }).join("");
    var pref = vs.filter(function (v) { return v[0] === "160x200 cm"; })[0]; if (pref) $("#sVar").value = pref[0];
    buildSteps();
  }
  var timer = null, cur = -1;
  function buildSteps() {
    stop(); cur = -1;
    var p = P[+$("#sProd").value], size = $("#sVarWrap").style.display === "none" ? null : $("#sVar").value;
    var v = variantFor(p, size), price = v ? v[1] : p.p, list = v && p.lp ? Math.round(p.lp * (price / p.p)) : p.lp, stock = v ? v[2] : p.q;
    var r = recs(p, size), first3 = r.out;
    var seg = p.b === "Sleeptown" ? (p.c === "Yatak" ? "Cart Abandoners · Yatak · " + (size || "") : "Cart Abandoners · " + p.c) : "Cart Abandoners · " + (p.f || p.c);
    var inst = Math.round(price / 7);
    $("#sCard").innerHTML = (p.img ? '<img src="' + esc(p.img) + '" alt="" loading="lazy" referrerpolicy="no-referrer">' : "") + '<div><div class="n">' + esc(p.n) + '</div><div class="pr"><b>' + tl(price) + "</b>" + (list && list > price ? ' <span class="strike">' + tl(list) + "</span>" : "") + (size ? " · " + esc(size) : "") + '</div><div class="pr">Stok: ' + (stock == null ? "stokta" : stock) + ' · <a href="' + p.u + '" target="_blank" rel="noopener">ürün sayfası ↗</a></div></div>';
    var urgency = stock != null && stock <= 5 ? "<br><b>Bu " + (size ? "ölçüde" : "üründe") + " son " + stock + " adet</b> (gerçek stok verisi)" : "";
    var recHtml = function (arr) { return '<div class="rec">' + arr.map(function (x) { return "<span>" + esc(x.p.n) + " · " + tl(priceOf(x.p, x.size)) + (x.size ? " (" + esc(x.size) + ")" : "") + "</span>"; }).join("") + "</div>"; };
    var steps = [
      ["👤", "Müşteri", "Ürünü görüntüler", "Meta reklamından (UTM) veya aramadan ürün sayfasına gelir: <b>" + esc(p.n) + "</b> – " + tl(price) + ".", 0],
      ["🛒", "Müşteri", "Sepete ekler", "Sepete ekler" + (size ? " (ölçü: <b>" + esc(size) + "</b>)" : "") + ". Sepet tutarı " + tl(price) + (price >= 1000 ? " → ücretsiz kargo eşiğinin üstünde." : " → 1000 TL ücretsiz kargo eşiğine " + tl(1000 - price) + " kaldı."), 0],
      ["🚪", "Müşteri", "Ödeme yapmadan ayrılır", "60 dakika boyunca ödeme adımı tamamlanmaz.", 0],
      ["📡", "Callypso", "Davranışı yakalar", "Web SDK + T-Soft sepet verisi:<pre>{ \"event\": \"cart_abandoned\",\n  \"brand\": \"" + p.b + "\",\n  \"sku\": \"" + esc(p.u.split("/").pop()) + "\",\n  \"variant\": \"" + esc(size || "-") + "\",\n  \"price\": " + price + ",\n  \"stock\": " + (stock == null ? "null" : stock) + " }</pre>", 1],
      ["🏷️", "Callypso", "Segment güncellenir", "Müşteri <b>" + esc(seg) + "</b> segmentine eklenir; Meta kitlesi senkronlanır.", 1],
      ["✉️", "Callypso", "Kişisel iletişim (1 saat)", '<div class="msg"><div class="mh">E-posta / WhatsApp · ' + p.b + '</div><div class="mb">Sepetindeki <b>' + esc(p.n) + "</b>" + (size ? " (" + esc(size) + ")" : "") + " seni bekliyor.<br>Peşin fiyatına 7 taksit: ayda ~" + tl(inst) + (p.b === "Homedius" ? " · Havale ile %10 ekstra indirim" : "") + urgency + "</div></div>", 1],
      ["🔁", "Müşteri", "Geri döner", "Mesajdaki linkle sepete döner (24 saatlik hatırlatmada yorum ve güven içerikleri de gösterilir).", 0],
      ["✅", "Müşteri", "Satın alır", "Sipariş tamamlanır. Müşteri reklam kitlesinden çıkarılır, <b>First-time Buyers</b> segmentine geçer.", 0],
      ["➕", "Callypso", "Çapraz satış otomasyonu", "+3 gün" + (r.up ? " · inceleme anında upsell: <b>" + esc(r.up.n) + "</b> (" + tl(priceOf(r.up, size)) + ")" : "") + '<div class="msg"><div class="mh">Satın alma +3 / +14 gün</div><div class="mb">Bununla birlikte kullanılabilecek ürünler:' + recHtml(first3) + '<div class="small muted" style="margin-top:.35rem">' + first3.map(function (x) { return esc(x.why); }).join(" · ") + "</div></div></div>", 1],
      ["⭐", "Callypso", "Yorum ve bakım", "+10 gün yorum isteği" + (p.b === "Homedius" ? " (Homedius'ta şu an 0 yorum)" : "") + " · +30 gün bakım içeriği (mevcut blog yazıları).", 1]
    ];
    $("#sSteps").innerHTML = steps.map(function (s, i) {
      return '<li class="st" data-i="' + i + '"><span class="ic">' + s[0] + '</span><div><div class="h"><span class="who' + (s[4] ? " cal" : "") + '">' + s[1] + "</span>" + s[2] + '</div><div class="d">' + s[3] + "</div></div></li>";
    }).join("");
  }
  function show(i) { $$("#sSteps .st").forEach(function (el, j) { el.classList.toggle("on", j === i); el.classList.toggle("done", j < i); }); }
  function stop() { if (timer) clearInterval(timer); timer = null; $("#sPlay").textContent = "▶ Simülasyonu oynat"; }
  $("#sPlay").addEventListener("click", function () {
    if (timer) { stop(); return; }
    if (cur >= 9) cur = -1;
    $("#sPlay").textContent = "❚❚ Duraklat";
    timer = setInterval(function () { cur++; show(cur); if (cur >= 9) stop(); }, 1500);
    cur++; show(cur);
  });
  $("#sStep").addEventListener("click", function () { stop(); cur = Math.min(cur + 1, 9); show(cur); });
  $("#sReset").addEventListener("click", function () { buildSteps(); });
  $("#sBrand").addEventListener("change", fillProducts);
  $("#sProd").addEventListener("change", fillVariants);
  $("#sVar").addEventListener("change", buildSteps);
  fillProducts();
})();
