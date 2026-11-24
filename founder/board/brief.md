# Callypso: two products (Callypso Engage and Callypso Export Agent)

The founder has built two working demos under the Callypso name and wants a review of both.
Neither has real customers yet as far as the demos show; both run on demo data.

## Product A: Callypso Engage
- What it is: an e-commerce retention platform. Behavioral segments, Email + SMS + WhatsApp campaigns and automations (welcome, abandoned cart, win-back, VIP, second purchase), Customer 360, revenue attribution, forms, deliverability panel.
- Who it is for: the site says e-commerce brands (Shopify-style stores), content creators, local businesses and agencies. Turkish-market features (İYS consent registry, Netgsm, TL figures, Turkish operators) point at Turkish D2C e-commerce brands. An earlier analysis in the founder's repo targets a Turkish cosmetics brand (Kremi Beauty) as a prospect.
- What it sells, at what price: SaaS, priced by customer count. Free $0 (1,000 customers, 12,000 emails/mo, 1 automation); Growth $49/mo (25,000 customers, unlimited email + SMS campaigns, unlimited automations); Scale custom (100k+, İYS integration support, SSO, account manager).
- Where and how: online, self-serve signup plus a live demo. Delivery via Resend (email), Twilio/Netgsm (SMS), Meta Cloud API or a BSP (WhatsApp), Supabase (data/auth), Shopify-style store sync. Demo URL: callypso-engage.vercel.app
- State: every integration is in demo mode. The landing page shows customer logos, named testimonials, "4.9/5 · 2,400+ brands" and a comparison table versus Mailchimp.

## Product B: Callypso Export Agent
- What it is: an AI export-sales assistant for manufacturers. It reads incoming buyer inquiries (e.g. "200 office chairs, DAP Germany"), extracts product/quantity/country/Incoterm and what is missing, drafts English replies and quotations from the catalog price list, tracks open quotes and follow-ups, suggests prospects in target markets, and puts every outgoing message through a human approval step.
- Who it is for: Turkish export manufacturers. The demo persona is an office-furniture maker in İnegöl, Bursa with an export manager, selling in EUR to dealers and project buyers in Germany, the Netherlands, France, Sweden and the UAE.
- What it sells, at what price: not stated anywhere in the demo.
- Where and how: online web app. Demo URL: callypsoagent-callypso-export-agent.vercel.app
- State: "Real AI is not connected; replies follow a predefined demo scenario." Prospect search uses 6 fictional candidates. No email, ERP or catalog editing yet.

## Budget and constraints
- Not stated. The founder appears to be building alone (same Callypso brand, both on Vercel, a companion repo of market reports for Etsy/Turkish e-commerce).
- Open: which product to focus on, the Export Agent's price, the founder's time and money.

---

## Extra detail a board member needs (observed in the demos, 24 Nov 2026)

### Engage demo (logged in as a demo user, store "UrbanCase")
- Dashboard: 48,920 customers, 18.4% repeat purchase, avg LTV ₺286, automation revenue ₺38,140 this month; avg order value ₺96.
- Channels: Email (42.6% open, 6.9% click), SMS (97.8% delivery, 11.3% click, 65% of sample audience gave SMS consent), WhatsApp (88.2% read, 19.6% click; Meta template approvals are simulated).
- Six automations with conversion 11.6%–34.8%; Analytics shows "Engage-sourced revenue ₺173,740" with a footnote that values come from a demo data layer.
- Settings page: Resend, SMS provider, WhatsApp, Supabase, e-commerce sync and İYS are all "Demo mode"; brand settings come from an app.config.ts file and "re-run setup" — suggests it is built from a template/starter.
- Landing page: logos (Northwind, Parable, Formwork, Cedarworks, Lumen, Harvest, Brightline, Meridian), six named testimonials with metrics, "4.9/5 · 2,400+ brands". These are demo/placeholder content; no real customers are shown anywhere else.
- Competitors named on the site: Mailchimp. Known players in the same space that a board would think of: Klaviyo, Omnisend, and in Turkey Insider, Netmera, Segmentify, local SMS vendors (Netgsm, İleti Merkezi). Their prices and share were not researched yet (that is /founder-competitors).

### Export Agent demo (company "Atlas Office Furniture", İnegöl)
- Pages: Overview, Agent (chat with sample commands), Inquiries, Prospect search, Customers (CRM with contact history, e.g. met at Orgatec Köln), Quotes (4 quotes, €8.7k–€16.6k each, statuses: no reply / sent / accepted / rejected), Products (7 SKUs, EXW EUR prices, MOQ, lead time), Approvals.
- Flow shown: 7 steps from inquiry → missing info identified → English reply draft → customer reply → quote from catalog price → draft edited and approved → quote updated and follow-up task created.
- Human-in-the-loop: nothing is sent without approval.
- Out of scope in the demo: real AI, email sending, ERP sync, catalog editing, real prospect research.
