/* Deda Group growth dashboard. All figures are derived from window.DEDA_DATA (data/bundle.js).
   Crawled text is untrusted: everything is HTML-escaped before rendering and only http(s)
   links are turned into anchors. */
(() => {
  'use strict';
  const D = window.DEDA_DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const view = $('#view');

  // ---------- helpers ----------
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isHttp = (u) => /^https?:\/\//i.test(u || '');
  const link = (u, label) => isHttp(u) ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer nofollow">${esc(label || u)}</a>` : esc(label || u);
  const byId = (arr) => Object.fromEntries(arr.map((x) => [x.id, x]));
  const ENT = byId(D.ecosystem.entities);
  const SRC = byId(D.sources);
  const PP = D.painPoints.painPoints;
  const PPX = byId(PP);
  const OPP = D.opportunities.opportunities;
  const OPX = byId(OPP);
  const CAT = D.catalog.items;
  const CATX = byId(CAT);
  const entName = (id) => ENT[id]?.name.replace(/ \(.+\)$/, '') ?? id;
  const uniq = (a) => [...new Set(a)];
  const count = (arr, fn) => arr.filter(fn).length;
  const T = {
    Sales: 'Satış', Marketing: 'Pazarlama', Data: 'Veri', Operations: 'Operasyon', 'Customer Support': 'Müşteri desteği',
    Low: 'Düşük', Medium: 'Orta', High: 'Yüksek',
  };
  const tr = (k) => T[k] ?? k;

  const CONF_CLASS = {
    'Verified': 'b-verified', 'Verified Pain Point': 'b-verified', 'Verified ownership': 'b-verified', 'Verified subsidiary or group relationship': 'b-verified',
    'Inferred': 'b-inferred', 'Evidence-Based Hypothesis': 'b-inferred', 'Potential relationship': 'b-inferred',
    'Requires Access': 'b-access', 'Discovery Required': 'b-access', 'Requires CRM / Order / Analytics Data': 'b-access',
  };
  const badge = (t, cls) => `<span class="badge ${cls || CONF_CLASS[t] || ''}">${esc(t)}</span>`;
  const prio = (o) => `<span class="pill-score p-${o.priority}" title="Ağırlıklı skor">${o.score.toFixed(2)}</span>`;
  const srcLinks = (ids) => (ids || []).map((id) => `<a href="#" data-src="${esc(id)}" class="chip">${esc(id)}</a>`).join('');
  const chips = (arr) => (arr || []).map((x) => `<span class="chip">${esc(x)}</span>`).join('');
  const kv = (pairs) => `<dl class="kv">${pairs.filter(([, v]) => v !== undefined && v !== null && v !== '').map(([k, v]) => `<dt>${esc(k)}</dt><dd>${v}</dd>`).join('')}</dl>`;
  const select = (id, label, options, value) => `<select id="${id}" aria-label="${esc(label)}"><option value="">${esc(label)}: tümü</option>${options.map((o) => {
    const [v, l] = Array.isArray(o) ? o : [o, o];
    return `<option value="${esc(v)}"${v === value ? ' selected' : ''}>${esc(l)}</option>`;
  }).join('')}</select>`;
  const head = (title, sub) => `<div class="section-head"><h1>${esc(title)}</h1>${sub ? `<p>${sub}</p>` : ''}</div>`;
  const bars = (rows) => { const max = Math.max(1, ...rows.map((r) => r[1])); return rows.map(([l, n]) => `<div class="bar"><span>${esc(l)}</span><div class="track"><div class="fill" style="width:${(n / max) * 100}%"></div></div><span class="n">${n}</span></div>`).join(''); };

  const ENGAGE_CATS = ['Callypso Engage', 'Engage + Integration'];
  const AI_CATS = ['AI Agent', 'Custom AI Solution'];
  const groupOf = (o) => ENGAGE_CATS.includes(o.solutionCategory) ? 'engage' : o.solutionCategory === 'External Automation' ? 'external' : AI_CATS.includes(o.solutionCategory) ? 'ai' : 'discovery';
  const oppsForPP = (p) => p.opportunityIds.map((id) => OPX[id]).filter(Boolean);
  const okPages = D.pages.filter((p) => p.status === 'ok');

  // ---------- KPIs (all derived) ----------
  const K = {
    companies: count(D.ecosystem.entities, (e) => e.kind !== 'Parent / group umbrella' && e.relationshipStatus.startsWith('Verified')),
    brands: count(D.brands, (b) => b.confidence === 'Verified'),
    websites: uniq(okPages.map((p) => p.domain)).length,
    websitesTried: uniq(D.pages.map((p) => p.domain)).length,
    pages: okPages.length,
    pagesAll: D.pages.length,
    catalog: CAT.length,
    paidAds: D.ads.results.reduce((s, r) => s + r.adsFound, 0),
    adQueries: D.ads.results.length,
    ppVerified: count(PP, (p) => p.classification === 'Verified Pain Point'),
    ppHyp: count(PP, (p) => p.classification === 'Evidence-Based Hypothesis'),
    ppDisc: count(PP, (p) => p.classification === 'Discovery Required'),
    questions: D.questions.length,
    engage: count(OPP, (o) => ENGAGE_CATS.includes(o.solutionCategory)),
    external: count(OPP, (o) => o.solutionCategory === 'External Automation'),
    ai: count(OPP, (o) => AI_CATS.includes(o.solutionCategory)),
    access: count(OPP, (o) => o.requiresAccess) + count(PP, (p) => p.classification === 'Discovery Required'),
    sources: D.sources.length,
  };

  // ---------- drawer ----------
  const drawer = $('#drawer'); const backdrop = $('#drawerBackdrop');
  let lastFocus = null;
  const openDrawer = (title, html) => {
    lastFocus = document.activeElement;
    $('#drawerTitle').textContent = title; $('#drawerBody').innerHTML = html;
    drawer.hidden = false; backdrop.hidden = false; $('#drawerClose').focus();
  };
  const closeDrawer = () => { drawer.hidden = true; backdrop.hidden = true; lastFocus?.focus?.(); };
  $('#drawerClose').onclick = closeDrawer; backdrop.onclick = closeDrawer;
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawer.hidden) closeDrawer(); });

  const chainHtml = (p) => {
    const ints = uniq([...p.requiredData.slice(0, 2), ...p.integrations]);
    return `<div class="chain">
      <div><b>Kanıt</b>${esc(p.evidence.slice(0, 140))}${p.evidence.length > 140 ? '…' : ''}</div>
      <div><b>Sorun</b>${esc(p.title)}</div>
      <div><b>İş sonucu</b>${esc(p.consequence.slice(0, 120))}${p.consequence.length > 120 ? '…' : ''}</div>
      <div><b>Çözüm</b>${esc(p.solution.slice(0, 120))}${p.solution.length > 120 ? '…' : ''}</div>
      <div><b>Otomasyon</b>${esc(p.automation)}</div>
      <div><b>Veri & entegrasyon</b>${esc(ints.join(', '))}</div>
      <div><b>Beklenen etki (tahmin)</b>${esc(tr(p.impact))}</div>
      <div><b>Ölçüm</b>${esc(p.measurement)}</div>
    </div>`;
  };
  const showPP = (id) => {
    const p = PPX[id]; if (!p) return;
    const opps = oppsForPP(p);
    openDrawer(`${p.id} · ${p.title}`, `
      <div class="row">${badge(p.classification)}${badge(entName(p.entityId), 'b-brand')}<span class="chip">${esc(tr(p.function))}</span><span class="chip">${esc(p.journeyStage)}</span></div>
      <div><h4>Kanıt</h4><p class="mt-s">${esc(p.evidence)}</p><div class="mt-s">${srcLinks(p.sourceIds)}</div></div>
      ${kv([['Etkilenen', esc(p.affected)], ['İş sonucu', esc(p.consequence)], ['Doğrulama sorusu', esc(p.validationQuestion)], ['Önerilen çözüm', esc(p.solution)], ['Otomasyon', esc(p.automation)], ['Gerekli veri', chips(p.requiredData)], ['Entegrasyonlar', chips(p.integrations)], ['Karmaşıklık', esc(tr(p.complexity))], ['Beklenen etki', esc(tr(p.impact)) + ' <span class="faint">(nitel tahmin)</span>'], ['Ölçüm', esc(p.measurement)]])}
      <div><h4>Bağlı fırsatlar</h4><div class="mt-s">${opps.map((o) => `<div class="mini" data-opp="${o.id}"><div class="row">${prio(o)}<b>${esc(o.id)}</b> ${esc(o.title)}</div><div class="faint mt-s">${esc(o.solutionCategory)}</div></div>`).join('') || '<span class="faint">—</span>'}</div></div>`);
  };
  const RATIONALE = {
    'Callypso Engage': 'Tetikleyici + segment + çok adımlı mesaj akışı gerektiren yaşam döngüsü problemi; pazarlama otomasyonuna uygun.',
    'Engage + Integration': 'Mesaj akışı Engage ile kurulabilir, ancak tetikleyici veri (form, CRM, ERP, WhatsApp) entegrasyon gerektirir.',
    'External Automation': 'Sorun mesajlaşma değil; web, ölçüm, içerik veya iş akışı altyapısı. Ayrı bir otomasyon/izleme aracı veya web geliştirme daha uygun.',
    'AI Agent': 'Serbest metin/ses sorularını yanıtlama ve bilgi toplama gerektirir; kural tabanlı akış yerine bilgi tabanına bağlı AI ajanı ve insan devri gerekir.',
    'Custom AI Solution': 'Belge/dosya işleme veya sistemler arası veri birleştirme gerektirir; hazır pazarlama aracının kapsamı dışında, özel geliştirme gerekir.',
    'Discovery Required': 'Öneriyi netleştirmek için iç sistem ve süreç bilgisi gerekiyor.',
  };
  const showOpp = (id) => {
    const o = OPX[id]; if (!o) return;
    const w = D.opportunities.scoring.weights;
    const scoreRows = Object.entries(w).map(([k, wt]) => [{ impact: 'Etki', evidence: 'Kanıt gücü', relevance: 'İş ilgisi', feasibility: 'Uygulanabilirlik', fit: 'Stratejik uyum' }[k], o.scores[k], wt]);
    openDrawer(`${o.id} · ${o.title}`, `
      <div class="row">${prio(o)}${badge(o.priority === 'High' ? 'Yüksek öncelik' : o.priority === 'Medium' ? 'Orta öncelik' : 'Düşük öncelik', 'p-' + o.priority)}${badge(o.solutionCategory, 'b-brand')}${badge(o.confidence)}${o.requiresAccess ? badge(o.requiresAccess, 'b-access') : ''}</div>
      <div class="callout brand small"><b>Neden bu çözüm kategorisi?</b> ${esc(RATIONALE[o.solutionCategory])}</div>
      ${ENGAGE_CATS.includes(o.solutionCategory) ? `<div class="callout small">${esc(D.opportunities.engageCapabilityStatus)}</div>` : ''}
      <div><h4>Ele aldığı sorunlar</h4><div class="mt-s">${o.painPointIds.map((pid) => `<div class="mini" data-pp="${pid}"><b>${pid}</b> ${esc(PPX[pid]?.title)} ${badge(PPX[pid]?.classification)}</div>`).join('')}</div></div>
      ${kv([['Şirket', esc(entName(o.entityId))], ['Yolculuk aşaması', esc(o.journeyStage)], ['Tetikleyici', esc(o.trigger)], ['Hedef segment', esc(o.segment)], ['Gerekli veri', chips(o.requiredData)], ['Gerekli olaylar', chips(o.requiredEvents)], ['Entegrasyonlar', chips(o.integrations)], ['Kanal', esc(o.channel)], ['İnsan gözetimi', esc(o.humanOversight)], ['Bağımlılıklar', (o.dependencies || []).map((d) => `<a href="#" data-opp="${d}" class="chip">${d}</a>`).join('') || '—'], ['Karmaşıklık', esc(tr(o.complexity))], ['Beklenen etki', esc(tr(o.impact)) + ' <span class="faint">(nitel tahmin; gelir/ROI hesaplanmadı)</span>'], ['Ölçüm', esc(o.measurement)], ['İlk doğrulama adımı', esc(o.firstStep)]])}
      <div><h4>Otomasyon akışı</h4><ol class="list mt-s">${(o.sequence || []).map((s) => `<li>${esc(s)}</li>`).join('')}</ol></div>
      ${o.exampleMessage && o.exampleMessage !== '—' ? `<div><h4>Örnek mesaj</h4><div class="msg mt-s">${esc(o.exampleMessage)}</div></div>` : ''}
      <div><h4>Skor hesabı</h4><div class="mt-s">${scoreRows.map(([l, v, wt]) => `<div class="bar"><span>${esc(l)} ×${wt}</span><div class="track"><div class="fill" style="width:${v * 20}%"></div></div><span class="n">${v}/5</span></div>`).join('')}<div class="faint">Ağırlıklı toplam = ${o.score.toFixed(2)} → ${esc(o.priority)}</div></div></div>
      <div><h4>Kanıt kaynakları</h4><div class="mt-s">${srcLinks(o.sourceIds)}</div></div>`);
  };
  const showSrc = (id) => {
    const s = SRC[id]; if (!s) return;
    const pps = PP.filter((p) => p.sourceIds.includes(id));
    const opps = OPP.filter((o) => o.sourceIds.includes(id));
    openDrawer(`${s.id} · ${s.type}`, `
      <div class="row">${badge(s.confidence)}${badge(entName(s.entityId), 'b-brand')}</div>
      ${kv([['URL', isHttp(s.url) ? link(s.url) : `<span class="mono">${esc(s.url)}</span>`], ['Toplayan', esc(s.collector)], ['Toplama zamanı', esc(s.collectedAt)], ['Özet', esc(s.summary)]])}
      <div><h4>İlgili sorun noktaları</h4><div class="mt-s">${pps.map((p) => `<div class="mini" data-pp="${p.id}"><b>${p.id}</b> ${esc(p.title)}</div>`).join('') || '<span class="faint">—</span>'}</div></div>
      <div><h4>İlgili otomasyonlar</h4><div class="mt-s">${opps.map((o) => `<div class="mini" data-opp="${o.id}"><b>${o.id}</b> ${esc(o.title)}</div>`).join('') || '<span class="faint">—</span>'}</div></div>`);
  };
  const showCat = (id) => {
    const c = CATX[id]; if (!c) return;
    const rels = D.relationships.relationships.filter((r) => r.from === id || r.to === id);
    openDrawer(c.name, `
      <div class="row">${badge(c.confidence)}${badge(entName(c.entityId), 'b-brand')}<span class="chip">${esc(c.category)}</span></div>
      ${kv([['URL', link(c.url)], ['Açıklama', esc(c.description)], ['Fiyat', '<span class="faint">Kamuya açık değil</span>'], ['Varyantlar', chips(c.variants) || '—'], ['Hedef müşteri', esc(c.intendedCustomer)], ['Tekrar satın alma', esc(c.repeatPurchase)]])}
      ${Object.keys(c.specs).length ? `<div><h4>Spesifikasyon</h4><div class="table-wrap mt-s"><table>${Object.entries(c.specs).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table></div></div>` : ''}
      <div><h4>İlişkili teklifler</h4><div class="mt-s">${rels.map((r) => { const other = r.from === id ? r.to : r.from; return `<div class="mini">${badge(r.confidence)} <b>${esc(r.type)}</b> → ${esc(CATX[other]?.name ?? entName(other))}<div class="faint mt-s">${esc(r.rationale)}</div></div>`; }).join('') || '<span class="faint">—</span>'}</div></div>
      <div><h4>Kaynak</h4><div class="mt-s">${srcLinks(c.sourceIds)}</div></div>
      <button class="btn primary" data-demo="${c.id}">Bu teklifle simülasyonu aç</button>`);
  };
  const showEnt = (id) => {
    const e = ENT[id]; if (!e) return;
    const site = D.websites.find((w) => w.entityId === id);
    openDrawer(e.name, `
      <div class="row">${badge(e.relationshipStatus)}${badge(e.confidence)}${e.businessModels.map((m) => badge(m, 'b-brand')).join('')}</div>
      ${kv([['Web sitesi', link(e.website)], ['Kategori', esc(e.category)], ['İlişki', esc(e.relationship)], ['Hedef müşteri', esc(e.targetCustomers)], ['Coğrafya', esc(e.geography)], ['Satış kanalları', chips(e.salesChannels)], ['Dijital olgunluk', esc(e.digitalMaturity)], ['Teklifler', chips(e.offerings)]])}
      <div><h4>Doğrulanmış bilgiler</h4><ul class="list mt-s">${e.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
      <div><h4>Kanıt</h4><ul class="list mt-s">${e.evidence.map((x) => `<li>${esc(x.text)} <a href="#" data-src="${x.sourceId}" class="chip">${x.sourceId}</a></li>`).join('')}</ul></div>
      ${site ? `<div class="faint">Tarama: ${esc(site.crawlStatus)}</div>` : ''}
      <div><h4>Sorun noktaları</h4><div class="mt-s">${PP.filter((p) => p.entityId === id).map((p) => `<div class="mini" data-pp="${p.id}"><b>${p.id}</b> ${esc(p.title)} ${badge(p.classification)}</div>`).join('') || '<span class="faint">—</span>'}</div></div>`);
  };

  // global delegated clicks
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-pp],[data-opp],[data-src],[data-cat],[data-ent],[data-demo],[data-go]');
    if (!t || e.target.closest('a[target="_blank"]')) return;
    if (t.tagName === 'A' || t.dataset.demo || t.dataset.go) e.preventDefault();
    if (t.dataset.pp) showPP(t.dataset.pp);
    else if (t.dataset.opp) showOpp(t.dataset.opp);
    else if (t.dataset.src) showSrc(t.dataset.src);
    else if (t.dataset.cat) showCat(t.dataset.cat);
    else if (t.dataset.ent) showEnt(t.dataset.ent);
    else if (t.dataset.demo) { closeDrawer(); state.demo.item = t.dataset.demo; state.demo.type = ''; state.demo.step = 0; go('demo'); }
    else if (t.dataset.go) go(t.dataset.go);
  });

  // ---------- state ----------
  const state = {
    pp: { q: '', entity: '', fn: '', cat: '', stage: '', cls: '', sol: '', cx: '', imp: '' },
    cat: { q: '', entity: '', category: '', conf: '', model: '' },
    ev: { q: '', entity: '', conf: '', kind: 'sources' },
    journey: { entity: 'deda-pack', stage: null },
    demo: { item: 'p-pack-sos', type: '', step: 0, timer: null },
    opp: { sort: 'score' },
  };

  // ---------- sections ----------
  const S = {};

  S.overview = () => {
    const top = OPP.slice().sort((a, b) => b.score - a.score).slice(0, 8);
    const verifiedHigh = PP.filter((p) => p.classification === 'Verified Pain Point').sort((a, b) => ['High', 'Medium', 'Low'].indexOf(a.impact) - ['High', 'Medium', 'Low'].indexOf(b.impact)).slice(0, 6);
    const kpi = (v, l, s, go) => `<div class="card kpi${go ? ' click' : ''}"${go ? ` data-go="${go}"` : ''}><div class="v">${v}</div><div class="l">${esc(l)}</div>${s ? `<div class="s">${esc(s)}</div>` : ''}</div>`;
    return head('Yönetici Özeti', `www.dedagroup.com — Adana merkezli, gıda, ambalaj, plastik geri dönüşüm ve makine alanlarında faaliyet gösteren Türk sanayi grubu. Tüm sayılar aşağıdaki veri setlerinden hesaplanır; İtalyan BT şirketi Dedagroup S.p.A. ile karıştırılmamalıdır.`) + `
    <div class="kpis">
      ${kpi(K.companies, 'Doğrulanmış grup şirketi', '+ çatı şirket; 1 olası ilişki', 'ecosystem')}
      ${kpi(K.brands, 'Doğrulanmış marka', 'şirket + ürün markaları', 'ecosystem')}
      ${kpi(`${K.websites}/${K.websitesTried}`, 'Analiz edilen web sitesi', 'okunabilir içerik alınan / denenen', 'websites')}
      ${kpi(K.pages, 'Toplanan benzersiz sayfa', `${K.pagesAll} kayıttan; diğerleri 404 / bot doğrulaması`, 'evidence')}
      ${kpi(K.catalog, 'Ürün & hizmet kaydı', 'fiyat kamuya açık değil', 'catalog')}
      ${kpi(K.paidAds, 'Gözlenen ücretli reklam', `${K.adQueries} Meta Reklam Kütüphanesi sorgusu`, 'ads')}
      ${kpi(K.ppVerified, 'Doğrulanmış sorun noktası', '', 'painpoints')}
      ${kpi(K.ppHyp, 'Kanıta dayalı hipotez', '', 'painpoints')}
      ${kpi(K.questions, 'Keşif sorusu', `${K.ppDisc} sorun keşif gerektiriyor`, 'questions')}
      ${kpi(K.engage, 'Callypso Engage fırsatı', 'Engage + entegrasyon dahil', 'engage')}
      ${kpi(K.external, 'Harici otomasyon fırsatı', '', 'external')}
      ${kpi(K.ai, 'AI ajanı / özel AI fırsatı', '', 'external')}
      ${kpi(K.access, 'İç erişim gerektiren bulgu', 'CRM / sipariş / analitik verisi', 'limits')}
      ${kpi(K.sources, 'Kanıt kaynağı', 'URL + toplama zamanı', 'evidence')}
    </div>
    <div class="grid g2 mt">
      <div class="card"><h2>En güçlü fırsatlar</h2><p class="faint mt-s">Skor = 0.30 Etki + 0.20 Kanıt + 0.20 İlgi + 0.15 Uygulanabilirlik + 0.15 Uyum (bileşenlerden hesaplanır)</p>
        <div class="mt-s">${top.map((o) => `<div class="mini" data-opp="${o.id}"><div class="row">${prio(o)}<b>${esc(o.title)}</b></div><div class="row mt-s faint">${esc(entName(o.entityId))} · ${esc(o.solutionCategory)} · ${o.painPointIds.join(', ')}</div></div>`).join('')}</div>
      </div>
      <div class="stack">
        <div class="card"><h2>Öne çıkan doğrulanmış bulgular</h2><div class="mt-s">${verifiedHigh.map((p) => `<div class="mini" data-pp="${p.id}"><div class="row">${badge(tr(p.impact) + ' etki', p.impact === 'High' ? 'b-red' : '')}<b>${esc(p.title)}</b></div><div class="faint mt-s">${esc(entName(p.entityId))} · ${p.sourceIds.join(', ')}</div></div>`).join('')}</div></div>
        <div class="callout red small"><b>Toplantıda ilk konu:</b> Grup sitesinde 'Konteyner Fabrika' olarak listelenen adanakonteyner.com.tr menüsünde bahis temalı ilgisiz bir öğe var ve ana sayfaları 404 döndürüyor; dedaplast.com ise erişilemiyor. Alan adı kontrolünün doğrulanması önerilir. <a href="#" data-pp="PP21">PP21</a> · <a href="#" data-pp="PP20">PP20</a></div>
      </div>
    </div>
    <div class="grid g3 mt">
      <div class="card"><h3>Sorun noktası güven dağılımı</h3><div class="mt-s">${bars([['Doğrulanmış', K.ppVerified], ['Hipotez', K.ppHyp], ['Keşif gerekli', K.ppDisc]])}</div></div>
      <div class="card"><h3>Çözüm kategorileri</h3><div class="mt-s">${bars(uniq(OPP.map((o) => o.solutionCategory)).map((c) => [c, count(OPP, (o) => o.solutionCategory === c)]))}</div></div>
      <div class="card"><h3>Şirket bazında sorun noktaları</h3><div class="mt-s">${bars(D.ecosystem.entities.map((e) => [entName(e.id), count(PP, (p) => p.entityId === e.id)]).filter((r) => r[1]))}</div></div>
    </div>
    <div class="card mt"><h2>Yönetici özeti</h2><ol class="list mt-s">
      <li><b>Teklif yakalama en büyük ve en hızlı kaldıraç.</b> Deda Pack'te ölçü/adet/baskı bilgisini toplayan bir teklif formu yok (<a href="#" data-pp="PP01">PP01</a>); Deda Makina'nın teklif formu kırık bir PDF (<a href="#" data-pp="PP10">PP10</a>). Yapılandırılmış form + CRM + otomatik onay (<a href="#" data-opp="O01">O01</a>, <a href="#" data-opp="O07">O07</a>).</li>
      <li><b>Web hijyeni ve marka riski acil.</b> Konteyner sitesi, kırık dedaplast.com, ajans demo alanındaki 404 kataloglar, Makina'da Pack metni (<a href="#" data-opp="O15">O15</a>).</li>
      <li><b>Takip ve tekrar sipariş Engage'in doğal alanı</b> — teklif sonrası takip, yenileme hatırlatma, fuar nurture (<a href="#" data-opp="O02">O02</a>, <a href="#" data-opp="O03">O03</a>, <a href="#" data-opp="O04">O04</a>); CRM/ERP verisi ve Engage yetenek teyidi gerekli.</li>
      <li><b>Çok kanallı talepler tek kayda toplanmalı</b> (form, WhatsApp, 3 telefon, birden çok e-posta) (<a href="#" data-opp="O17">O17</a>).</li>
      <li><b>Ölçüm ve rıza altyapısı her şeyin ön koşulu</b>: Makina, Gıda ve grup sitesinde analitik gözlenmedi; Pack'te CMP gözlenmedi (<a href="#" data-opp="O16">O16</a>).</li>
      <li><b>Kapasite (günlük 456.361 çanta) ve 60 ihracat müşterisi hedefi</b> karşısında görünür dijital talep yaratma sınırlı — Meta'da 0 reklam (<a href="#" data-pp="PP07">PP07</a>); önce ölçüm ve teklif formu, sonra pilot kampanya.</li>
      <li><b>AI fırsatları ikinci dalga</b>: çok dilli WhatsApp satış asistanı ve Makina teknik ön-satış asistanı; bilgi tabanı ve insan devri ile (<a href="#" data-opp="O10">O10</a>, <a href="#" data-opp="O11">O11</a>).</li>
    </ol></div>`;
  };

  S.ecosystem = () => {
    const root = D.ecosystem.entities.find((e) => e.kind === 'Parent / group umbrella');
    const kids = D.ecosystem.entities.filter((e) => e !== root);
    const brandsOf = (id) => D.brands.filter((b) => b.entityId === id && b.type === 'Product brand');
    return head('Şirket ve Marka Ekosistemi', 'Deda Group → doğrulanmış şirketler → markalar → web siteleri → ürün/hizmetler. İlişki türü ve güven seviyesi her kartta. Ortak müşteri verisi veya ortak CRM varsayılmadı.') + `
    <div class="callout small">${esc(D.ecosystem.disambiguation)}</div>
    <div class="tree mt">
      <div class="tree-root"><div class="card click" data-ent="${root.id}"><h3>${esc(root.name)}</h3><div class="faint mt-s">${link(root.website, 'dedagroup.com')}</div><div class="row mt-s">${badge(root.relationshipStatus)}</div><ul class="list mt-s small">${root.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div></div>
      <div class="tree-children">${kids.map((e) => `
        <div class="card click" data-ent="${e.id}">
          <div class="row"><h3>${esc(e.name)}</h3><span class="spacer"></span>${badge(e.relationshipStatus)}</div>
          <div class="faint mt-s">${link(e.website, e.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))} · ${esc(e.category)}</div>
          <div class="mt-s">${e.businessModels.map((m) => badge(m, 'b-brand')).join(' ')} ${brandsOf(e.id).map((b) => `<span class="chip">Marka: ${esc(b.name)}</span>`).join('')}</div>
          <div class="mt-s small">${chips(e.offerings.slice(0, 6))}</div>
          <div class="faint mt-s">${count(CAT, (c) => c.entityId === e.id)} katalog kaydı · ${count(PP, (p) => p.entityId === e.id)} sorun noktası · ${count(OPP, (o) => o.entityId === e.id)} fırsat</div>
        </div>`).join('')}</div>
    </div>
    <h2 class="mt">İş modeli özeti</h2>
    <div class="table-wrap mt-s"><table><thead><tr><th>Şirket</th><th>İş modeli</th><th>Hedef müşteri</th><th>Satış kanalları</th><th>Coğrafya</th><th>Dijital olgunluk sinyali</th><th>Kanıt</th></tr></thead><tbody>
      ${D.ecosystem.entities.map((e) => `<tr class="click" data-ent="${e.id}"><td><b>${esc(entName(e.id))}</b><div>${badge(e.confidence)}</div></td><td>${esc(e.businessModels.join(', '))}</td><td>${esc(e.targetCustomers)}</td><td>${esc(e.salesChannels.join(', '))}</td><td>${esc(e.geography)}</td><td>${esc(e.digitalMaturity)}</td><td>${e.evidence.map((x) => x.sourceId).join(', ')}</td></tr>`).join('')}
    </tbody></table></div>
    <h2 class="mt">Markalar</h2>
    <div class="table-wrap mt-s"><table><thead><tr><th>Marka</th><th>Tür</th><th>Şirket</th><th>Sahiplik</th><th>Güven</th><th>Kaynak</th></tr></thead><tbody>
      ${D.brands.map((b) => `<tr><td>${link(b.website, b.name)}</td><td>${esc(b.type)}</td><td>${esc(entName(b.entityId))}</td><td>${esc(b.ownership)}</td><td>${badge(b.confidence)}</td><td>${srcLinks(b.sourceIds)}</td></tr>`).join('')}
    </tbody></table></div>`;
  };

  S.websites = () => {
    const tech = D.technologies.detected;
    return head('Web Sitesi ve Martech Analizi', 'Her site ayrı analiz edildi. "Gözlenmedi", özelliğin var olmadığı anlamına gelmez. Tespit yöntemi: ham HTML imza eşleştirme ve 390px mobil test.') + `
    <div class="grid g2">${D.websites.map((w) => `
      <div class="card">
        <div class="row"><h3>${esc(entName(w.entityId))}</h3><span class="faint">${esc(w.domain)}</span></div>
        <div class="faint mt-s">${esc(w.crawlStatus)}</div>
        ${kv([['Temel sayfalar', chips(w.keyPages) || '—'], ['Güçlü yönler', w.strengths.length ? `<ul class="list">${w.strengths.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : '—'], ['Olası sürtünme', w.friction.length ? `<ul class="list">${w.friction.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : '—'], ['Lead yakalama', esc(w.leadCapture)], ['Güven sinyalleri', esc(w.trust)], ['Mobil', esc(w.mobile)], ['İzleme', esc(w.tracking)], ['İyileştirme', chips(w.improvements)], ['Kanıt', srcLinks(w.sourceIds)]])}
      </div>`).join('')}</div>
    <h2 class="mt">Tespit edilen teknolojiler</h2>
    <div class="table-wrap mt-s"><table><thead><tr><th>Teknoloji</th><th>Kategori</th><th>Şirket</th><th>Kanıt</th><th>Yöntem</th><th>Güven</th></tr></thead><tbody>
      ${tech.map((t) => `<tr><td><b>${esc(t.technology)}</b></td><td>${esc(t.category)}</td><td>${esc(entName(t.entityId))}</td><td class="mono">${esc(t.evidence)}</td><td class="small">${esc(t.detectionMethod)} (${t.detectedOn.length} sayfa)</td><td>${badge(t.confidence)}</td></tr>`).join('')}
    </tbody></table></div>
    <h2 class="mt">Gözlenmeyen temel araçlar</h2>
    <div class="table-wrap mt-s"><table><thead><tr><th>Şirket</th><th>Gözlenmeyen</th><th>Taranan sayfalar</th></tr></thead><tbody>
      ${uniq(D.technologies.notObserved.map((n) => n.entityId)).map((id) => { const rows = D.technologies.notObserved.filter((n) => n.entityId === id); return `<tr><td><b>${esc(entName(id))}</b></td><td>${chips(rows.map((r) => r.technology))}</td><td class="small">${rows[0].scannedPages.length}</td></tr>`; }).join('')}
    </tbody></table></div>
    <h2 class="mt">Mobil kontrol (390×844, tek ölçüm)</h2>
    <div class="table-wrap mt-s"><table><thead><tr><th>Site</th><th>HTTP</th><th>Yükleme (ms)</th><th>Yatay taşma</th><th>Tıklanabilir tel.</th><th>WhatsApp</th><th>Form</th><th>Viewport</th></tr></thead><tbody>
      ${D.mobile.map((m) => `<tr><td>${link(m.url, m.url.replace(/^https?:\/\/(www\.)?/, ''))}</td><td>${esc(m.httpStatus)}</td><td>${esc(m.loadMs)}</td><td>${m.horizontalOverflow ? badge('Var', 'b-red') : 'Yok'}</td><td>${esc(m.telLinks)}</td><td>${esc(m.whatsappLinks)}</td><td>${esc(m.forms)}</td><td class="mono">${esc(m.viewportMeta)}</td></tr>`).join('')}
    </tbody></table></div>`;
  };

  S.catalog = () => {
    const f = state.cat;
    const models = uniq(D.ecosystem.entities.flatMap((e) => e.businessModels));
    const rows = CAT.filter((c) => (!f.entity || c.entityId === f.entity) && (!f.category || c.category === f.category) && (!f.conf || c.confidence === f.conf) && (!f.model || ENT[c.entityId].businessModels.includes(f.model)) && (!f.q || (c.name + c.description + c.category).toLocaleLowerCase('tr').includes(f.q.toLocaleLowerCase('tr'))));
    const rels = D.relationships.relationships;
    const node = (id) => CATX[id]?.name ?? entName(id);
    return head('Ürün ve Hizmet İstihbaratı', 'Doğrulanmış sitelerden çıkarılan ürün/hizmet kataloğu. Fiyat, stok, en çok satan veya satış hacmi kamuya açık değildir ve uydurulmadı.') + `
    <div class="filters">
      <input type="search" id="catQ" placeholder="Ürün ara…" value="${esc(f.q)}">
      ${select('catEntity', 'Şirket', uniq(CAT.map((c) => c.entityId)).map((id) => [id, entName(id)]), f.entity)}
      ${select('catCategory', 'Kategori', uniq(CAT.map((c) => c.category)), f.category)}
      ${select('catModel', 'İş modeli', models, f.model)}
      ${select('catConf', 'Güven', ['Verified', 'Inferred'], f.conf)}
      <span class="faint">${rows.length} kayıt</span>
    </div>
    <div class="table-wrap"><table><thead><tr><th>Ürün / hizmet</th><th>Şirket</th><th>Kategori</th><th>Spesifikasyon</th><th>Fiyat</th><th>Hedef müşteri</th><th>Güven</th></tr></thead><tbody>
      ${rows.map((c) => `<tr class="click" data-cat="${c.id}"><td><b>${esc(c.name)}</b><div class="faint">${esc(c.description.slice(0, 90))}</div></td><td>${esc(entName(c.entityId))}</td><td>${esc(c.category)}</td><td class="small">${Object.entries(c.specs).map(([k, v]) => `${esc(k)}: ${esc(v)}`).join('<br>') || '—'}</td><td class="faint">Yayınlanmamış</td><td class="small">${esc(c.intendedCustomer)}</td><td>${badge(c.confidence)}</td></tr>`).join('') || `<tr><td colspan="7"><div class="empty">Filtreye uyan kayıt yok</div></td></tr>`}
    </tbody></table></div>
    <h2 class="mt">Çapraz satış ve çapraz marka haritası</h2>
    <p class="muted mt-s">${esc(D.relationships.note)}</p>
    <div class="grid g2 mt-s">${uniq(rels.map((r) => r.type)).map((type) => `<div class="card"><h3>${esc(type)}</h3>${rels.filter((r) => r.type === type).map((r) => `<div class="mini"${CATX[r.from] ? ` data-cat="${r.from}"` : ` data-ent="${r.from}"`}><div class="row">${badge(r.confidence)}<b>${esc(node(r.from))}</b> → <b>${esc(node(r.to))}</b></div><div class="faint mt-s">${esc(r.rationale)}</div></div>`).join('')}</div>`).join('')}</div>
    <h2 class="mt">Hizmet ve satış hareketleri</h2>
    <div class="grid g2 mt-s">${D.offerings.map((o) => `<div class="card"><div class="row"><h3>${esc(o.name)}</h3><span class="spacer"></span>${badge(o.confidence)}</div><div class="faint mt-s">${esc(entName(o.entityId))} · ${esc(o.type)}</div><div class="mt-s small">${chips(o.components)}</div><p class="small mt-s"><b>Satış hareketi:</b> ${esc(o.salesMotion)}</p><div class="mt-s">${srcLinks(o.sourceIds)}</div></div>`).join('')}</div>`;
  };

  S.journey = () => {
    const f = state.journey;
    const j = D.journeys.find((x) => x.entityId === f.entity) || D.journeys[0];
    const st = j.stages.find((s) => s.id === f.stage) || j.stages[0];
    return head('Müşteri Yolculuğu', 'Her şirketin doğrulanmış iş modeline uygun yolculuk. Bir aşama seçerek kanıtı, sorun noktalarını ve otomasyon fırsatlarını inceleyin.') + `
    <div class="filters">${select('jEntity', 'Şirket', D.journeys.map((x) => [x.entityId, `${entName(x.entityId)} — ${x.type}`]), j.entityId).replace(/<option value="">[^<]*<\/option>/, '')}</div>
    <div class="stages" role="tablist">${j.stages.map((s) => `<button class="stage${s === st ? ' active' : ''}" data-stage="${esc(s.id)}" role="tab" aria-selected="${s === st}"><div class="t">${esc(s.label)}</div><div class="c">${s.painPointIds.length} sorun · ${s.opportunityIds.length} fırsat</div></button>`).join('')}</div>
    <div class="grid g3 mt">
      <div class="card"><h3>Gözlenen</h3><p class="mt-s">${esc(st.observed)}</p></div>
      <div class="card"><h3>Sorun noktaları</h3><div class="mt-s">${st.painPointIds.map((id) => `<div class="mini" data-pp="${id}"><b>${id}</b> ${esc(PPX[id].title)}<div class="mt-s">${badge(PPX[id].classification)}</div></div>`).join('') || '<span class="faint">Bu aşamada kanıt yok</span>'}</div></div>
      <div class="card"><h3>Otomasyon fırsatları</h3><div class="mt-s">${st.opportunityIds.map((id) => `<div class="mini" data-opp="${id}"><div class="row">${prio(OPX[id])}<b>${id}</b></div><div class="mt-s">${esc(OPX[id].title)}</div></div>`).join('') || '<span class="faint">—</span>'}</div></div>
    </div>`;
  };

  S.painpoints = () => {
    const f = state.pp;
    const solOf = (p) => uniq(oppsForPP(p).map((o) => o.solutionCategory));
    const rows = PP.filter((p) => (!f.entity || p.entityId === f.entity) && (!f.fn || p.function === f.fn) && (!f.cat || p.category === f.cat) && (!f.stage || p.journeyStage === f.stage) && (!f.cls || p.classification === f.cls) && (!f.sol || solOf(p).includes(f.sol)) && (!f.cx || p.complexity === f.cx) && (!f.imp || p.impact === f.imp) && (!f.q || [p.title, p.evidence, p.consequence, p.solution].join(' ').toLocaleLowerCase('tr').includes(f.q.toLocaleLowerCase('tr'))));
    const cols = [['engage', 'Callypso Engage ile ele alınabilir'], ['external', 'Harici otomasyon gerektirir'], ['ai', 'AI ajanı / özel uygulama'], ['discovery', 'Ek keşif gerektirir']];
    return head('Pain Points & Automation Opportunities', 'Kanıt → Sorun → İş sonucu → Önerilen çözüm → Otomasyon → Veri/entegrasyon → Beklenen etki → Ölçüm. Doğrulanmış sorunlar hipotezlerden ayrı işaretlenir.') + `
    <div class="filters">
      <input type="search" id="ppQ" placeholder="Bulgu ara…" value="${esc(f.q)}">
      ${select('ppEntity', 'Şirket', uniq(PP.map((p) => p.entityId)).map((id) => [id, entName(id)]), f.entity)}
      ${select('ppFn', 'Fonksiyon', uniq(PP.map((p) => p.function)).map((x) => [x, tr(x)]), f.fn)}
      ${select('ppCat', 'Kategori', uniq(PP.map((p) => p.category)).sort(), f.cat)}
      ${select('ppStage', 'Aşama', uniq(PP.map((p) => p.journeyStage)), f.stage)}
      ${select('ppCls', 'Güven', Object.keys(D.painPoints.classifications), f.cls)}
      ${select('ppSol', 'Çözüm', uniq(OPP.map((o) => o.solutionCategory)), f.sol)}
      ${select('ppCx', 'Karmaşıklık', ['Low', 'Medium', 'High'].map((x) => [x, tr(x)]), f.cx)}
      ${select('ppImp', 'Etki', ['Low', 'Medium', 'High'].map((x) => [x, tr(x)]), f.imp)}
      <button class="btn" id="ppReset">Sıfırla</button>
      <span class="faint">${rows.length} / ${PP.length}</span>
    </div>
    <div class="stack">${rows.map((p) => `
      <div class="card click" data-pp="${p.id}">
        <div class="row"><b class="mono">${p.id}</b><h3>${esc(p.title)}</h3><span class="spacer"></span>${badge(p.classification)}</div>
        <div class="row mt-s">${badge(entName(p.entityId), 'b-brand')}<span class="chip">${esc(tr(p.function))}</span><span class="chip">${esc(p.category)}</span><span class="chip">${esc(p.journeyStage)}</span><span class="chip">Karmaşıklık: ${esc(tr(p.complexity))}</span>${solOf(p).map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
        ${chainHtml(p)}
        <div class="row mt-s small"><span class="muted">Doğrulama sorusu:</span> ${esc(p.validationQuestion)}</div>
      </div>`).join('') || '<div class="empty">Filtreye uyan bulgu yok</div>'}</div>
    <h2 class="mt">Çözüm yolu karşılaştırması</h2>
    <div class="compare mt-s">${cols.map(([g, label]) => { const list = OPP.filter((o) => groupOf(o) === g).sort((a, b) => b.score - a.score); return `<div class="col"><h3><span>${esc(label)}</span><span class="badge">${list.length}</span></h3>${list.map((o) => `<div class="mini" data-opp="${o.id}"><div class="row">${prio(o)}<b>${o.id}</b>${badge(o.confidence)}</div><div class="mt-s">${esc(o.title)}</div></div>`).join('')}</div>`; }).join('')}</div>`;
  };

  const oppCard = (o, withRationale = false) => `
    <div class="card click" data-opp="${o.id}">
      <div class="row">${prio(o)}<b class="mono">${o.id}</b><h3>${esc(o.title)}</h3><span class="spacer"></span>${badge(o.solutionCategory, 'b-brand')}${badge(o.confidence)}${o.requiresAccess ? badge('Requires CRM / Order / Analytics Data') : ''}</div>
      ${withRationale ? `<div class="callout brand small mt-s"><b>Neden bu yaklaşım?</b> ${esc(RATIONALE[o.solutionCategory])}</div>` : ''}
      ${kv([['Sorun', o.painPointIds.map((id) => `<a href="#" data-pp="${id}">${id}</a> ${esc(PPX[id].title)}`).join('<br>')], ['Tetikleyici', esc(o.trigger)], ['Segment', esc(o.segment)], ['Gerekli veri', chips(o.requiredData)], ['Olaylar', chips(o.requiredEvents)], ['Entegrasyon', chips(o.integrations)], ['Kanal', esc(o.channel)], ['Akış', esc((o.sequence || []).join(' → '))], ['Örnek mesaj', o.exampleMessage && o.exampleMessage !== '—' ? `<div class="msg">${esc(o.exampleMessage)}</div>` : '—'], ['Etki / karmaşıklık', `${esc(tr(o.impact))} (tahmin) / ${esc(tr(o.complexity))}`], ['Ölçüm', esc(o.measurement)]])}
    </div>`;

  S.engage = () => {
    const list = OPP.filter((o) => ENGAGE_CATS.includes(o.solutionCategory)).sort((a, b) => b.score - a.score);
    return head('Callypso Engage Fırsatları', 'Tetikleyici, segment, veri gereksinimi, örnek mesaj ve ölçüm ile yaşam döngüsü otomasyonları. Deda Group\'un e-ticaret satışı yok; öneriler B2B teklif, takip, yenileme ve distribütör akışlarına uyarlandı.') + `
    <div class="callout">${esc(D.opportunities.engageCapabilityStatus)}</div>
    <div class="stack mt">${list.map(oppCard).join('')}</div>
    <h2 class="mt">Segmentler</h2><p class="muted mt-s">${esc(D.segments.note)}</p>
    <div class="table-wrap mt-s"><table><thead><tr><th>Segment</th><th>Şirket</th><th>Amaç</th><th>Dahil etme kriteri</th><th>Gerekli alan/olay</th><th>Otomasyon</th><th>KPI</th><th>Gerekli erişim</th></tr></thead><tbody>
      ${D.segments.segments.map((s) => `<tr><td><b>${esc(s.name)}</b></td><td>${esc(entName(s.entityId))}</td><td>${esc(s.objective)}</td><td class="small">${esc(s.criteria)}</td><td>${chips(s.fields)}</td><td>${s.automation.split(/,\s*/).map((id) => `<a href="#" data-opp="${id}">${id}</a>`).join(', ')}</td><td>${esc(s.kpi)}</td><td>${badge(s.access, 'b-access')}</td></tr>`).join('')}
    </tbody></table></div>`;
  };

  const matrix = () => {
    const pts = OPP.map((o) => ({ o, x: o.scores.feasibility, y: o.scores.impact }));
    const seen = {};
    const color = { engage: 'var(--brand-2)', external: 'var(--green)', ai: 'var(--violet)', discovery: 'var(--amber)' };
    return `<div class="matrix" role="img" aria-label="Etki ve uygulanabilirlik matrisi">
      <span class="q" style="right:10px;top:8px">Hızlı kazanım</span><span class="q" style="left:10px;top:8px">Stratejik proje</span>
      <span class="ax" style="left:50%;bottom:4px;transform:translateX(-50%)">Uygulanabilirlik →</span>
      <span class="ax" style="left:6px;top:50%;transform:rotate(-90deg) translateX(-50%);transform-origin:left">Etki →</span>
      ${pts.map(({ o, x, y }) => { const k = `${x}-${y}`; const n = (seen[k] = (seen[k] || 0) + 1) - 1; const size = 26 + o.score * 3; return `<span class="dot" data-opp="${o.id}" title="${esc(o.id + ' — ' + o.title)}" style="left:${8 + (x - 1) * 21 + (n % 3) * 3}%;bottom:${8 + (y - 1) * 20 + Math.floor(n / 3) * 7 + (n % 3) * 3}%;width:${size}px;height:${size}px;background:${color[groupOf(o)]}">${o.id.slice(1)}</span>`; }).join('')}
    </div><div class="row mt-s small">${Object.entries({ engage: 'Engage', external: 'Harici otomasyon', ai: 'AI / özel', discovery: 'Keşif' }).map(([k, l]) => `<span class="row"><span style="width:10px;height:10px;border-radius:50%;background:${color[k]};display:inline-block"></span>${l}</span>`).join('')}</div>`;
  };

  S.external = () => {
    const list = OPP.filter((o) => !ENGAGE_CATS.includes(o.solutionCategory)).sort((a, b) => b.score - a.score);
    const sorted = OPP.slice().sort((a, b) => state.opp.sort === 'score' ? b.score - a.score : a.id.localeCompare(b.id));
    return head('Harici Otomasyon, AI ve Dijital Dönüşüm', 'Callypso Engage\'in tek başına çözmediği problemler: web/ölçüm altyapısı, AI ajanları, belge işleme, özel uygulamalar. Her kartta neden pazarlama otomasyonundan daha uygun olduğu açıklanır.') + `
    <div class="grid g2"><div class="card"><h3>Öncelik matrisi</h3><p class="faint mt-s">Baloncuk boyutu = ağırlıklı skor. Noktaya tıklayarak detayı açın.</p><div class="mt-s">${matrix()}</div></div>
    <div class="card"><h3>Puanlama yöntemi</h3><p class="small mt-s">${esc(D.opportunities.scoring.method)}</p><p class="small mt-s faint">${esc(D.opportunities.scoring.impactNote)}</p>
      <div class="mt">${bars([['Yüksek öncelik', count(OPP, (o) => o.priority === 'High')], ['Orta öncelik', count(OPP, (o) => o.priority === 'Medium')], ['Düşük öncelik', count(OPP, (o) => o.priority === 'Low')]])}</div></div></div>
    <div class="stack mt">${list.map((o) => oppCard(o, true)).join('')}</div>
    <div class="row mt"><h2>Tüm fırsatların sıralaması</h2><span class="spacer"></span>${select('oppSort', 'Sırala', [['score', 'Skora göre'], ['id', 'ID\'ye göre']], state.opp.sort).replace(/<option value="">[^<]*<\/option>/, '')}</div>
    <div class="table-wrap mt-s"><table><thead><tr><th>Fırsat</th><th>Şirket</th><th>Kategori</th><th>Etki</th><th>Kanıt</th><th>İlgi</th><th>Uyg.</th><th>Uyum</th><th>Skor</th><th>Bağımlılık</th><th>Güven</th></tr></thead><tbody>
      ${sorted.map((o) => `<tr class="click" data-opp="${o.id}"><td><b>${o.id}</b> ${esc(o.title)}</td><td>${esc(entName(o.entityId))}</td><td class="small">${esc(o.solutionCategory)}</td><td>${o.scores.impact}</td><td>${o.scores.evidence}</td><td>${o.scores.relevance}</td><td>${o.scores.feasibility}</td><td>${o.scores.fit}</td><td>${prio(o)}</td><td class="small">${(o.dependencies || []).join(', ') || '—'}</td><td>${badge(o.confidence)}</td></tr>`).join('')}
    </tbody></table></div>`;
  };

  S.demo = () => {
    const f = state.demo;
    const item = CATX[f.item] || CAT[0];
    const types = uniq([item.journey, 'support', 'internal']);
    const type = types.includes(f.type) ? f.type : item.journey;
    const tpl = D.scenarios.templates[type];
    const steps = tpl.steps;
    const cur = Math.min(f.step, steps.length);
    const fill = (s) => s.replaceAll('{offering}', item.name);
    const specs = Object.entries(item.specs).map(([k, v]) => `${k}: ${v}`).join(', ');
    const msg = {
      b2b: item.entityId === 'deda-makina'
        ? `Merhaba, ${item.name} için teklif talebinizi aldık.\nBelirttiğiniz malzeme tipi, kapasite (kg/saat) ve ihtiyaç duyulan modüller satış mühendisimize iletildi; hat önerisi için sizinle iletişime geçecek.`
        : `Merhaba, ${item.name} için teklif talebinizi aldık.${specs ? `\nSitede yayınlanan aralık: ${specs}.` : ''}\nTalebinizdeki ölçü, adet ve baskı bilgilerini temsilcimiz kontrol edip en kısa sürede dönüş yapacak.`,
      distribution: `Merhaba, ${item.name} distribütörlüğü ile ilgilendiğiniz için teşekkürler.${specs ? `\nAmbalaj seçenekleri: ${specs}.` : ''}\nBölge sorumlumuz katalog ve koşullar için sizinle iletişime geçecek.`,
      service: `Merhaba, ${item.name} ile ilgili talebiniz kayda alındı. Teknik ekibimiz sizi arayacak.`,
      support: `(AI yanıtı — yalnızca onaylı bilgi) ${item.name}: ${item.description}${specs ? ` Yayınlanan spesifikasyon: ${specs}.` : ''} Fiyat ve termin için sizi bir temsilcimize aktarıyorum.`,
      internal: `(İç bildirim) Yeni belge: ${item.name} içeren sipariş/talep çıkarıldı; 2 alan doğrulama bekliyor. Onay için satış desteğe atandı.`,
    }[type];
    return head('What Callypso Could Do With Your Data', 'Gerçek bir ürün/hizmet seçin; akış seçilen teklifin iş modeline uyum sağlar. Doğrulanmış bilgiler ile varsayımlar ayrı gösterilir.') + `
    <div class="sim-banner">SIMULATION — Illustrative workflow, not actual customer activity · SİMÜLASYON — Gerçek müşteri faaliyeti değildir</div>
    <div class="filters mt">
      ${select('demoItem', 'Teklif', CAT.map((c) => [c.id, `${entName(c.entityId)} — ${c.name}`]), item.id).replace(/<option value="">[^<]*<\/option>/, '')}
      ${select('demoType', 'Akış', types.map((t) => [t, D.scenarios.templates[t].name]), type).replace(/<option value="">[^<]*<\/option>/, '')}
      <button class="btn primary" id="demoNext"${cur >= steps.length ? ' disabled' : ''}>Sonraki adım ▸</button>
      <button class="btn" id="demoPlay">${f.timer ? 'Durdur' : 'Otomatik oynat'}</button>
      <button class="btn" id="demoReset">Sıfırla</button>
    </div>
    <div class="grid g2">
      <div class="card"><h3>${esc(tpl.name)} · ${esc(item.name)}</h3><div class="steps mt-s">${steps.map((s, i) => `<div class="step ${i < cur ? 'done' : i === cur ? 'current' : ''}"><div class="num">${i < cur ? '✓' : i + 1}</div><div><b>${esc(s.title)}</b><div class="small mt-s">${esc(fill(s.detail))}</div><div class="row mt-s"><span class="chip mono">${esc(s.event)}</span><span class="chip">${esc(s.system)}</span>${badge(s.status, /Doğrulan/.test(s.status) ? 'b-verified' : /İnsan/.test(s.status) ? 'b-brand' : 'b-inferred')}</div></div></div>`).join('')}</div>
        ${cur >= steps.length ? '<div class="callout brand small mt">Akış tamamlandı. Gerçek sonuç ölçümü için CRM/ERP verisi gerekir — bu ekranda hiçbir gerçek satış, müşteri veya gelir gösterilmez.</div>' : ''}
      </div>
      <div class="stack">
        <div class="card"><h3>Örnek mesaj / AI yanıtı</h3><div class="msg mt-s">${cur >= 3 || type === 'support' && cur >= 2 ? esc(msg) : '<span class="faint">Akış ilerledikçe görünür…</span>'}</div></div>
        <div class="card"><h3>Doğrulanmış bilgiler</h3>${kv([['Teklif', link(item.url, item.name)], ['Şirket', esc(entName(item.entityId))], ['Açıklama', esc(item.description)], ['Spesifikasyon', esc(specs || '—')], ['Kaynak', srcLinks(item.sourceIds)]])}</div>
        <div class="card"><h3>Gerekli olaylar ve entegrasyonlar</h3><div class="mt-s">${chips(uniq(steps.map((s) => s.event)))}</div><div class="mt-s">${chips(uniq(steps.map((s) => s.system)))}</div></div>
        <div class="card"><h3>Eksik veri / varsayımlar</h3><ul class="list mt-s">${D.scenarios.missingData[type].map((m) => `<li>${esc(m)}</li>`).join('')}</ul><p class="faint mt-s">Fiyat, stok ve müşteri bilgisi kamuya açık değildir; simülasyon gerçek müşteri veya satın alma içermez.</p></div>
      </div>
    </div>`;
  };

  S.ads = () => head('Reklam ve Müşteri Kazanımı İstihbaratı', esc(D.campaigns.note)) + `
    <div class="kpis"><div class="card kpi"><div class="v">${K.paidAds}</div><div class="l">Meta'da gözlenen reklam</div><div class="s">${K.adQueries} tam ifade sorgusu · ${esc(D.ads.observedAt.slice(0, 10))}</div></div>
      <div class="card kpi"><div class="v">${count(D.campaigns.observations, (c) => c.kind === 'Organic')}</div><div class="l">Organik sinyal</div></div>
      <div class="card kpi"><div class="v">${count(D.technologies.detected, (t) => t.category === 'analytics' || t.category === 'tag-management' || t.category === 'advertising')}</div><div class="l">Ölçüm/reklam etiketi tespiti</div></div></div>
    <div class="table-wrap mt"><table><thead><tr><th>Şirket</th><th>Kaynak</th><th>Tür</th><th>Gözlem</th><th>Sonuç</th><th>Tarih</th><th>Kanıt</th></tr></thead><tbody>
      ${D.campaigns.observations.map((c) => `<tr><td>${esc(entName(c.entityId))}</td><td>${esc(c.source)}</td><td>${badge(c.kind === 'Paid' ? 'Ücretli' : c.kind === 'Organic' ? 'Organik' : 'İzleme', c.kind === 'Paid' ? 'b-brand' : '')}</td><td class="small">${esc(c.description)}</td><td>${esc(c.result)}</td><td>${esc(c.observedAt)}</td><td>${srcLinks(c.sourceIds)}</td></tr>`).join('')}
    </tbody></table></div>
    <h2 class="mt">Reklam → CRM → satış haritası</h2>
    <div class="grid g3 mt-s">${D.campaigns.funnels.map((fn) => `<div class="card"><h3>${esc(entName(fn.entityId))} · ${esc(fn.type)}</h3><ol class="list mt-s small">${fn.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>${kv([['Gerekli olaylar', chips(fn.requiredEvents)], ['Rıza', esc(fn.consent)], ['Atıf sınırı', esc(fn.attributionLimits)]])}</div>`).join('')}</div>`;

  S.roadmap = () => head('30 / 60 / 90 Günlük Yol Haritası', 'Bulgulara ve bağımlılıklara göre uyarlandı. Her madde bir fırsata bağlıdır.') + `
    <div class="grid g3">${D.roadmap.map((ph) => `<div class="card phase"><h4>${esc(ph.label)}</h4><h3 class="mt-s">${esc(ph.theme)}</h3><div class="mt-s">${ph.items.map((it) => `<div class="mini" data-opp="${it.opportunityId}"><b>${esc(it.title)}</b><div class="faint mt-s">${it.opportunityId} · ${esc(it.owner)} · Bağımlılık: ${esc(it.dependency)}</div></div>`).join('')}</div></div>`).join('')}</div>`;

  S.questions = () => {
    const qs = D.questions.slice().sort((a, b) => a.priority - b.priority);
    const qCard = (q) => `<div class="card"><div class="row"><span class="badge b-brand">#${q.priority}</span><span class="chip">${esc(q.theme)}</span></div><h3 class="mt-s">${esc(q.question)}</h3>${kv([['Doğruladığı sorun', q.validates.map((id) => `<a href="#" data-pp="${id}">${id}</a>`).join(', ')], ['Neden önemli', esc(q.why)], ['Açabileceği çözüm', q.unlocks.map((id) => `<a href="#" data-opp="${id}">${id}</a>`).join(', ')]])}</div>`;
    return head('Müşteri Keşif Soruları', 'Araştırma bulgularına ve bilgi boşluklarına göre hazırlandı. İlk beş soru toplantı hazırlığı için önceliklendirildi.') + `
    <div class="callout brand"><b>Toplantı hazırlığı — önce sorulacaklar</b></div>
    <div class="grid g2 mt-s">${qs.slice(0, 5).map(qCard).join('')}</div>
    <h2 class="mt">Tüm sorular</h2>
    <div class="grid g2 mt-s">${qs.slice(5).map(qCard).join('')}</div>`;
  };

  S.evidence = () => {
    const f = state.ev;
    const ql = f.q.toLocaleLowerCase('tr');
    if (f.kind === 'pages') {
      const rows = D.pages.filter((p) => (!f.entity || p.entityId === f.entity) && (!ql || [p.url, p.title, p.excerpt].join(' ').toLocaleLowerCase('tr').includes(ql)));
      return head('Evidence Explorer', 'Taranan tüm sayfa kayıtları (benzersiz URL). Bot doğrulaması ve HTTP hataları ayrıca işaretlenir.') + evFilters(f, rows.length) + `
      <div class="table-wrap"><table><thead><tr><th>Sayfa</th><th>Şirket</th><th>Tür</th><th>Dil</th><th>Durum</th><th>Toplayan</th><th>Zaman</th></tr></thead><tbody>
        ${rows.slice(0, 300).map((p) => `<tr><td>${link(p.url, p.title || p.url)}<div class="faint">${esc((p.excerpt || '').slice(0, 120))}</div></td><td>${esc(entName(p.entityId))}</td><td>${esc(p.pageType)}</td><td>${esc(p.lang)}</td><td>${p.status === 'ok' ? badge('OK', 'b-verified') : p.status === 'bot-check' ? badge('Bot doğrulaması', 'b-inferred') : badge('HTTP ' + p.httpStatus, 'b-red')}</td><td class="small">${esc(p.collector)}</td><td class="small">${esc((p.collectedAt || '').slice(0, 16))}</td></tr>`).join('')}
      </tbody></table></div>`;
    }
    const rows = D.sources.filter((s) => (!f.entity || s.entityId === f.entity) && (!f.conf || s.confidence === f.conf) && (!ql || [s.url, s.type, s.summary].join(' ').toLocaleLowerCase('tr').includes(ql)));
    return head('Evidence Explorer', 'Her bulgunun dayandığı kaynaklar: URL, kaynak türü, toplama zamanı, şirket, güven, ilgili sorun ve otomasyon.') + evFilters(f, rows.length) + `
    <div class="table-wrap"><table><thead><tr><th>ID</th><th>Kaynak</th><th>Tür</th><th>Toplama</th><th>Şirket</th><th>Güven</th><th>İlgili sorun</th><th>İlgili otomasyon</th></tr></thead><tbody>
      ${rows.map((s) => `<tr class="click" data-src="${s.id}"><td class="mono">${s.id}</td><td>${isHttp(s.url) ? link(s.url, s.url.replace(/^https?:\/\//, '').slice(0, 60)) : `<span class="mono">${esc(s.url)}</span>`}<div class="faint">${esc(s.summary.slice(0, 140))}${s.summary.length > 140 ? '…' : ''}</div></td><td class="small">${esc(s.type)}</td><td class="small">${esc(s.collectedAt.slice(0, 16))}</td><td>${esc(entName(s.entityId))}</td><td>${badge(s.confidence)}</td><td class="small">${PP.filter((p) => p.sourceIds.includes(s.id)).map((p) => p.id).join(', ') || '—'}</td><td class="small">${OPP.filter((o) => o.sourceIds.includes(s.id)).map((o) => o.id).join(', ') || '—'}</td></tr>`).join('') || '<tr><td colspan="8"><div class="empty">Sonuç yok</div></td></tr>'}
    </tbody></table></div>`;
  };
  const evFilters = (f, n) => `<div class="filters">
      <select id="evKind" aria-label="Görünüm"><option value="sources"${f.kind === 'sources' ? ' selected' : ''}>Kanıt kaynakları (${D.sources.length})</option><option value="pages"${f.kind === 'pages' ? ' selected' : ''}>Taranan sayfalar (${D.pages.length})</option></select>
      <input type="search" id="evQ" placeholder="URL, başlık veya içerik ara…" value="${esc(f.q)}">
      ${select('evEntity', 'Şirket', D.ecosystem.entities.map((e) => [e.id, entName(e.id)]), f.entity)}
      ${f.kind === 'sources' ? select('evConf', 'Güven', ['Verified', 'Inferred'], f.conf) : ''}
      <span class="faint">${n} sonuç</span></div>`;

  S.limits = () => head('Sınırlamalar ve Veri Erişimi', 'Neyin doğrulandığı, neyin yapılamadığı ve hangi bulguların iç veri gerektirdiği.') + `
    <div class="card"><h3>Sınırlamalar</h3><ul class="list mt-s">${D.limitations.map((l) => `<li><b>${esc(l.area)}:</b> ${esc(l.text)}</li>`).join('')}</ul></div>
    <h2 class="mt">Tarama durumu</h2>
    <div class="table-wrap mt-s"><table><thead><tr><th>Alan adı</th><th>Aktör</th><th>Durum</th><th>Kayıt</th><th>Okunabilir sayfa</th><th>Not</th></tr></thead><tbody>
      ${D.crawlStatus.map((c) => `<tr><td><b>${esc(c.domain)}</b></td><td class="small">${esc(c.actor)}${c.runId ? `<div class="faint mono">${esc(c.runId)}</div>` : ''}</td><td>${badge(c.status, c.status === 'SUCCEEDED' ? 'b-verified' : 'b-red')}</td><td>${esc(c.itemCount)}${c.fallback ? ` + ${esc(c.fallback.itemCount)} yedek` : ''}</td><td>${count(okPages, (p) => p.domain === c.domain)}</td><td class="small">${esc(c.note || c.error || '')}</td></tr>`).join('')}
    </tbody></table></div>
    <div class="grid g2 mt">
      <div class="card"><h3>İç veri gerektiren fırsatlar</h3><div class="mt-s">${OPP.filter((o) => o.requiresAccess).map((o) => `<div class="mini" data-opp="${o.id}"><b>${o.id}</b> ${esc(o.title)}<div class="faint mt-s">${esc(o.requiredData.join(', '))}</div></div>`).join('')}</div></div>
      <div class="card"><h3>Keşif gerektiren sorunlar</h3><div class="mt-s">${PP.filter((p) => p.classification === 'Discovery Required').map((p) => `<div class="mini" data-pp="${p.id}"><b>${p.id}</b> ${esc(p.title)}<div class="faint mt-s">${esc(p.validationQuestion)}</div></div>`).join('')}</div></div>
    </div>`;

  // ---------- navigation ----------
  const SECTIONS = [
    ['Genel', [['overview', 'Yönetici Özeti'], ['ecosystem', 'Ekosistem & İş Modeli', D.ecosystem.entities.length], ['websites', 'Web & Martech', D.websites.length], ['catalog', 'Ürün & Hizmetler', CAT.length], ['journey', 'Müşteri Yolculuğu']]],
    ['Bulgular', [['painpoints', 'Sorunlar & Otomasyon', PP.length], ['engage', 'Callypso Engage', K.engage], ['external', 'Harici, AI & Puanlama', OPP.length - K.engage], ['demo', 'Canlı Simülasyon']]],
    ['Pazar & Plan', [['ads', 'Reklam İstihbaratı'], ['roadmap', '30/60/90 Yol Haritası'], ['questions', 'Keşif Soruları', D.questions.length]]],
    ['Kanıt', [['evidence', 'Evidence Explorer', D.sources.length], ['limits', 'Sınırlamalar & Erişim']]],
  ];
  const LABEL = Object.fromEntries(SECTIONS.flatMap(([, items]) => items.map(([id, l]) => [id, l])));
  $('#nav').innerHTML = SECTIONS.map(([g, items]) => `<div class="group">${esc(g)}</div>${items.map(([id, l, n]) => `<button data-nav="${id}"><span>${esc(l)}</span>${n !== undefined ? `<span class="count">${n}</span>` : ''}</button>`).join('')}`).join('');
  $('#buildInfo').innerHTML = `Veri derlemesi: ${esc(D.builtAt.slice(0, 16).replace('T', ' '))} UTC<br>Kaynaklar: ${D.sources.length} · Sayfalar: ${okPages.length}<br><button class="icon-btn" id="themeBtn" style="margin-top:6px">Tema değiştir</button>`;
  $('#nav').addEventListener('click', (e) => { const b = e.target.closest('[data-nav]'); if (b) { go(b.dataset.nav); $('#sidebar').classList.remove('open'); } });
  $('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
  $('#themeBtn').onclick = () => {
    const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = cur === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('deda-theme', document.documentElement.dataset.theme); } catch { /* storage unavailable */ }
  };
  try { const t = localStorage.getItem('deda-theme'); if (t) document.documentElement.dataset.theme = t; } catch { /* storage unavailable */ }

  let current = 'overview';
  function go(id) { if (!S[id]) id = 'overview'; if (location.hash !== '#' + id) history.pushState(null, '', '#' + id); render(id, true); }
  function render(id = current, scroll = false) {
    current = id;
    view.innerHTML = S[id]();
    $('#pageTitle').textContent = LABEL[id];
    document.title = `${LABEL[id]} · Deda Group Büyüme Analizi`;
    document.querySelectorAll('[data-nav]').forEach((b) => { b.classList.toggle('active', b.dataset.nav === id); b.setAttribute('aria-current', b.dataset.nav === id ? 'page' : 'false'); });
    bind(id);
    if (scroll) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
  }
  window.addEventListener('popstate', () => render((location.hash || '#overview').slice(1)));

  // ---------- per-section bindings ----------
  const onInput = (sel, fn) => { const el = $(sel); if (el) el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', fn); };
  const keepFocus = (sel) => { const el = $(sel); if (el) { el.focus(); el.setSelectionRange?.(el.value.length, el.value.length); } };
  function bind(id) {
    if (id === 'painpoints') {
      const map = { ppEntity: 'entity', ppFn: 'fn', ppCat: 'cat', ppStage: 'stage', ppCls: 'cls', ppSol: 'sol', ppCx: 'cx', ppImp: 'imp' };
      Object.entries(map).forEach(([elId, key]) => onInput('#' + elId, (e) => { state.pp[key] = e.target.value; render(); }));
      onInput('#ppQ', (e) => { state.pp.q = e.target.value; render(); keepFocus('#ppQ'); });
      $('#ppReset').onclick = () => { Object.keys(state.pp).forEach((k) => { state.pp[k] = ''; }); render(); };
    }
    if (id === 'catalog') {
      const map = { catEntity: 'entity', catCategory: 'category', catConf: 'conf', catModel: 'model' };
      Object.entries(map).forEach(([elId, key]) => onInput('#' + elId, (e) => { state.cat[key] = e.target.value; render(); }));
      onInput('#catQ', (e) => { state.cat.q = e.target.value; render(); keepFocus('#catQ'); });
    }
    if (id === 'journey') {
      onInput('#jEntity', (e) => { state.journey.entity = e.target.value; state.journey.stage = null; render(); });
      view.querySelectorAll('[data-stage]').forEach((b) => { b.onclick = () => { state.journey.stage = b.dataset.stage; render(); }; });
    }
    if (id === 'external') onInput('#oppSort', (e) => { state.opp.sort = e.target.value; render(); });
    if (id === 'evidence') {
      onInput('#evKind', (e) => { state.ev.kind = e.target.value; render(); });
      onInput('#evEntity', (e) => { state.ev.entity = e.target.value; render(); });
      onInput('#evConf', (e) => { state.ev.conf = e.target.value; render(); });
      onInput('#evQ', (e) => { state.ev.q = e.target.value; render(); keepFocus('#evQ'); });
    }
    if (id === 'demo') {
      const f = state.demo;
      const stop = () => { clearInterval(f.timer); f.timer = null; };
      const total = () => { const it = CATX[f.item] || CAT[0]; const t = [it.journey, 'support', 'internal'].includes(f.type) ? f.type : it.journey; return D.scenarios.templates[t].steps.length; };
      onInput('#demoItem', (e) => { stop(); f.item = e.target.value; f.type = ''; f.step = 0; render(); });
      onInput('#demoType', (e) => { stop(); f.type = e.target.value; f.step = 0; render(); });
      $('#demoNext').onclick = () => { f.step = Math.min(f.step + 1, total()); render(); };
      $('#demoReset').onclick = () => { stop(); f.step = 0; render(); };
      $('#demoPlay').onclick = () => {
        if (f.timer) { stop(); render(); return; }
        if (f.step >= total()) f.step = 0;
        f.timer = setInterval(() => { f.step += 1; if (f.step >= total()) stop(); if (current === 'demo') render(); else stop(); }, 1100);
        render();
      };
    }
  }

  render((location.hash || '#overview').slice(1));
})();
