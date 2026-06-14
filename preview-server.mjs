import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 3000);

const mime = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const products = [
  "Inflatable Water Parks",
  "Inflatable Water Slides",
  "Water Obstacle Courses",
  "Inflatable Buoys",
  "PVC Inflatable Mirror Ball",
  "Inflatable Bouncer Slides",
  "Inflatable Paintball Bunkers",
  "Air Track / Inflatable Gym Mat"
];

const faqs = [
  ["How much does a commercial inflatable water park cost?", "The cost depends on layout size, module quantity, material, accessories, packing and shipping destination."],
  ["Can you customize the size, color and layout?", "Yes. Huayue Toys supports OEM/ODM customization for size, color, logo, theme and product combinations."],
  ["What material do you use?", "Commercial products use durable PVC tarpaulin with reinforced seams. Material details can be confirmed by product type."],
  ["How long does production take?", "Production time depends on order quantity and customization complexity. Our sales team confirms timing after final design."],
  ["Do you support shipping to UAE, Saudi Arabia, Nigeria and South Africa?", "Yes. Huayue Toys supports global delivery and project communication for international buyers."]
];

const whatsappHref = "https://wa.me/8618688894785?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";
const floatingWhatsApp = `<a class="floatWa" href="${whatsappHref}" target="_blank" rel="noreferrer" aria-label="Chat with Huayue Toys on WhatsApp"><svg viewBox="0 0 24 24" width="31" height="31" fill="none" stroke="currentColor" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L4 20.2l1-3.8a8.5 8.5 0 1 1 15.5-4.6Z"/><path d="M8.7 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4-.1.6.4.8 1.3 1.9 2.4 2.4.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.6.4-1.5.6-3.2-.1-2.8-1.1-5.2-3.8-5.8-6.1-.3-1.1.1-1.9.4-2.4Z"/></svg></a>`;
const floatingCss = `.floatWa{position:fixed;right:26px;bottom:26px;z-index:80;display:inline-flex;align-items:center;justify-content:center;width:66px;height:66px;border-radius:999px;background:linear-gradient(145deg,#29d366,#13a94f);color:#fff;box-shadow:0 18px 42px rgba(19,169,79,.35),0 0 0 8px rgba(41,211,102,.12);transition:transform .18s ease,box-shadow .18s ease}.floatWa:hover{transform:translateY(-3px) scale(1.06);box-shadow:0 22px 50px rgba(19,169,79,.42),0 0 0 10px rgba(41,211,102,.16)}@media(max-width:720px){.floatWa{right:18px;bottom:18px;width:58px;height:58px}}`;

function page() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Huayue Toys | Commercial Inflatable Water Park Manufacturer</title>
  <meta name="description" content="OEM/ODM inflatable water parks, slides, buoys and custom aqua park solutions for global B2B buyers." />
  <style>
    :root{--ink:#121212;--muted:#62666f;--line:#e7e9ee;--soft:#f6f8fb;--dark:#101114;--dark2:#1b1d22;--yellow:#f7c600;--blue:#0076c9;--shadow:0 24px 70px rgba(15,23,42,.12)}
    *{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:#fff}a{text-decoration:none;color:inherit}.container{width:min(1180px,calc(100% - 40px));margin:auto}
    header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.93);border-bottom:1px solid var(--line);backdrop-filter:blur(16px)}.head{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:flex;align-items:center;gap:12px;font-weight:900}.brand img{width:52px;height:52px;border-radius:50%}.brand small{display:block;color:var(--muted);font-size:12px;margin-top:3px}.nav{display:flex;gap:24px;font-size:14px;font-weight:800}.actions{display:flex;gap:10px;align-items:center}
    .btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 22px;border-radius:999px;background:var(--yellow);font-weight:900;border:1px solid transparent}.btn.ghost{background:#fff;border-color:var(--line);color:var(--ink)}.btn.dark{background:var(--dark);color:#fff}.whatsapp{border:1px solid var(--line);border-radius:999px;padding:12px 16px;color:#1b5f32;font-weight:900}
    .hero{overflow:hidden;padding:56px 0 44px;background:radial-gradient(circle at 15% 12%,rgba(247,198,0,.18),transparent 28%),radial-gradient(circle at 92% 10%,rgba(0,118,201,.22),transparent 32%),linear-gradient(180deg,#111317 0%,#191d24 62%,#fff 62%,#fff 100%);color:#fff}.heroGrid{display:grid;grid-template-columns:1.1fr .55fr;align-items:end;gap:42px}.hero h1{max-width:820px;margin:0;font-size:clamp(54px,7vw,108px);line-height:.9}.hero p{max-width:660px;color:rgba(255,255,255,.75);font-size:18px;line-height:1.72}.heroActions,.chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.chips span{display:inline-flex;gap:7px;align-items:center;padding:10px 13px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:rgba(255,255,255,.08);font-size:13px;font-weight:900;color:rgba(255,255,255,.9)}
    .quick{padding:28px;border:1px solid rgba(255,255,255,.14);border-radius:24px;background:#fff;color:var(--ink);box-shadow:0 24px 70px rgba(0,0,0,.24)}.quick h2{margin:0 0 10px;font-size:32px}.quick p{margin:0;color:var(--muted);line-height:1.65}.quoteRows{display:grid;gap:12px;margin:22px 0}.quoteRows span{display:flex;gap:10px;color:#333842;font-weight:800;line-height:1.45}
    .heroImage{position:relative;min-height:470px;margin-top:42px;border:8px solid #fff;border-radius:30px;overflow:hidden;background:#0f172a;box-shadow:var(--shadow)}.heroImage img{width:100%;height:100%;object-fit:cover;object-position:66% center}.market{position:absolute;left:20px;right:20px;bottom:18px;display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.market span{min-height:54px;display:flex;align-items:center;justify-content:center;padding:10px;border-radius:14px;background:rgba(16,17,20,.82);color:#fff;font-size:14px;font-weight:900;text-align:center;backdrop-filter:blur(10px)}
    .buyers{padding:32px 0;border-bottom:1px solid var(--line);background:#fff}.buyerGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.buyerGrid div{padding:22px 24px;border-left:4px solid var(--yellow);background:var(--soft);border-radius:16px}.buyerGrid strong{display:block;margin-bottom:8px}.buyerGrid p{margin:0;color:var(--muted);line-height:1.6}
    section{padding:86px 0}.sectionHeader{display:flex;align-items:end;justify-content:space-between;gap:32px;margin-bottom:34px}.sectionHeader h2{margin:0;font-size:clamp(32px,4vw,54px);line-height:1.02;max-width:760px}.sectionHeader p{max-width:420px;color:var(--muted);line-height:1.7}.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.card{min-height:230px;padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff}.card strong{color:var(--blue)}.card h3{margin:42px 0 12px;font-size:20px}.card p{color:var(--muted);line-height:1.58}
    .darkBand{background:var(--dark);color:#fff}.darkBand .sectionHeader p,.darkBand .adv p{color:rgba(255,255,255,.68)}.advGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.adv{padding:26px;border:1px solid rgba(255,255,255,.13);border-radius:18px;background:var(--dark2)}.adv b{color:var(--yellow);font-size:28px}
    .appGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.app{min-height:290px;padding:28px;border-radius:24px;background:linear-gradient(145deg,#f7f9fc,#eef3fa)}.app h3{margin:0;font-size:32px;line-height:1.06}.app p{color:var(--muted);line-height:1.7}.process{background:var(--yellow);padding:72px 0}.process h2{font-size:clamp(32px,4vw,58px);line-height:1;margin:0 0 28px}.rail{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}.rail span{min-height:82px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.72);border-radius:16px;font-weight:900;text-align:center}
    .lead{background:var(--soft)}.leadGrid{display:grid;grid-template-columns:.82fr 1fr;gap:54px;align-items:start}.lead h2{margin:0 0 18px;font-size:clamp(38px,5vw,72px);line-height:.98}.lead p,.lead li{color:var(--muted);line-height:1.75}.form{display:grid;gap:16px;padding:26px;border-radius:22px;background:#fff;box-shadow:var(--shadow)}.formGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.form label{display:grid;gap:8px;color:#3a3f49;font-size:13px;font-weight:900}.form input,.form textarea{width:100%;border:1px solid var(--line);border-radius:13px;padding:13px 14px;outline:none}.faq article{padding:24px 28px;border:1px solid var(--line);border-radius:18px;background:#fff;margin-bottom:14px}.faq h3{margin:0 0 10px}.faq p{margin:0;color:var(--muted);line-height:1.7}
    footer{background:var(--dark);color:#fff;padding:72px 0 26px}.foot{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:42px}footer p,footer a{display:block;color:rgba(255,255,255,.68);line-height:1.65;margin:0 0 10px}.bottom{border-top:1px solid rgba(255,255,255,.13);margin-top:42px;padding-top:22px;color:rgba(255,255,255,.5);display:flex;justify-content:space-between;gap:20px}
    @media(max-width:1040px){.nav{display:none}.heroGrid,.leadGrid{grid-template-columns:1fr}.grid4,.advGrid,.buyerGrid{grid-template-columns:repeat(2,1fr)}.rail,.market{grid-template-columns:repeat(3,1fr)}}@media(max-width:720px){.container{width:calc(100% - 28px)}.whatsapp{display:none}.hero h1{font-size:clamp(46px,15vw,67px)}.heroImage{min-height:290px;border-width:5px}.grid4,.advGrid,.appGrid,.rail,.formGrid,.foot,.market,.buyerGrid{grid-template-columns:1fr}.market{position:static;padding:10px;background:var(--dark)}.sectionHeader{display:block}.bottom{display:block}}
    ${floatingCss}
  </style>
</head>
<body>
  ${headerHtml()}
  <main>
    <section class="hero"><div class="heroGrid container"><div><h1>Build a Profitable Inflatable Water Park Project</h1><p>Huayue Toys provides factory-direct OEM/ODM aqua park systems for resorts, beaches, lakes, rental companies and tourism investors. Get a practical layout, product mix and export quotation.</p><div class="heroActions"><a class="btn" href="#quote">Get a Project Quote &rarr;</a><a class="btn ghost" href="#download">Download Catalog</a></div><div class="chips"><span>&#10003; 6250+ m&sup2; Factory</span><span>&#10003; OEM/ODM Custom Design</span><span>&#10003; Global Delivery</span><span>&#10003; CE / EN14960</span></div></div><aside class="quick"><h2>Quick Quote</h2><p>Send us your water area size, country and preferred modules.</p><div class="quoteRows"><span>Markets: UAE, Saudi Arabia, Nigeria, South Africa</span><span>Email: admin@huayueinflatable.com</span></div><a class="btn dark" href="#quote">Send Requirement</a></aside></div><div class="heroImage container"><img src="/assets/hero-water-park.png" alt="Commercial inflatable water park"><div class="market"><span>Resort Projects</span><span>Rental Business</span><span>Beach & Lake</span><span>Theme Parks</span><span>Event Operators</span></div></div></section>
    <section class="buyers"><div class="buyerGrid container"><div><strong>Target Buyers</strong><p>Importers, distributors, resort owners, rental businesses and tourism project buyers.</p></div><div><strong>Core Markets</strong><p>Middle East, Africa, North America, Europe, Southeast Asia and Russia.</p></div><div><strong>Main Conversion</strong><p>Get a quote, WhatsApp consultation and catalog download for qualified project leads.</p></div></div></section>
    <section><div class="container"><div class="sectionHeader"><h2>Choose the right inflatable products for your business model.</h2><p>Start from high-demand commercial categories, then customize dimensions, colors, logo and layout.</p></div><div class="grid4">${products.map((p, i) => `<article class="card"><strong>${String(i + 1).padStart(2, "0")}</strong><h3>${p}</h3><p>OEM/ODM commercial inflatable product for resorts, rental businesses, events and tourism projects.</p></article>`).join("")}</div></div></section>
    <section class="darkBand"><div class="container"><div class="sectionHeader"><h2>Factory support for overseas project buyers.</h2><p>Turn a rough water area or rental idea into a shippable commercial inflatable solution.</p></div><div class="advGrid">${["OEM/ODM Customization","Industrial-grade Quality Control","Global Delivery & Project Support","3D Design Before Production","Heat Welding, Cutting, Sewing & Sealing Equipment","12+ Years Inflatable Production Experience"].map((a) => `<article class="adv"><b>*</b><h3>${a}</h3><p>Practical production and project support for international commercial inflatable buyers.</p></article>`).join("")}</div></div></section>
    <section><div class="container"><div class="sectionHeader"><h2>Solutions by application scenario.</h2><p>Each application page is designed for SEO, AIO/GEO answers and advertising landing traffic.</p></div><div class="appGrid">${["Resort & Hotel Water Parks","Beach & Lake Tourism Projects","Rental Business"].map((a) => `<article class="app"><h3>${a}</h3><p>Commercial inflatable solutions planned around buyer scenario, venue size and operation goals.</p><strong>Discuss your project -></strong></article>`).join("")}</div></div></section>
    <section class="process"><div class="container"><h2>Factory process from design to global shipping.</h2><div class="rail">${["3D design","Material cutting","Welding / sewing","Inflation test","Packing","Global shipping"].map((s) => `<span>${s}</span>`).join("")}</div></div></section>
    <section class="lead" id="quote"><div class="leadGrid container"><div><h2>Get Your Custom Inflatable Water Park Solution</h2><p>Send your layout, water area size, product requirement or target country. Huayue Toys will recommend a practical product combination for quotation.</p><ul><li>Factory direct OEM/ODM support</li><li>Commercial water park and rental business recommendations</li><li>Global delivery communication</li></ul></div><form class="form" onsubmit="event.preventDefault();document.querySelector('#thanks').style.display='block';"><div class="formGrid"><label>Name<input required></label><label>Email<input required type="email"></label><label>Country<input required></label><label>WhatsApp<input></label></div><label>Product Requirement<input required placeholder="Inflatable water park, water slide, buoy..."></label><label>Message<textarea required rows="5" placeholder="Tell us your water area size, target country, quantity and expected use."></textarea></label><button class="btn dark" type="submit">Send Layout or Water Area Size for Recommendation</button><p id="thanks" style="display:none;color:#116b37;font-weight:900">Thank you. Our sales team will contact you soon.</p></form></div></section>
    <section><div class="container"><div class="sectionHeader"><h2>FAQ for commercial inflatable water park buyers.</h2><p>Useful answers for procurement, SEO and AI search visibility.</p></div><div class="faq">${faqs.map(([q, a]) => `<article><h3>${q}</h3><p>${a}</p></article>`).join("")}</div></div></section>
  </main>
  <footer><div class="container"><div class="foot"><div><h2>Huayue Toys</h2><p>Guangzhou Huayue Inflatable Products Co., Ltd.</p><p>OEM/ODM commercial inflatable water parks, slides, buoys and custom aqua park solutions.</p></div><div><h3>Products</h3>${products.slice(0, 5).map((p) => `<a>${p}</a>`).join("")}</div><div><h3>Company</h3><a>Factory</a><a>About</a><a>Blog</a><a>Contact</a></div><div><h3>Contact</h3><p>Email: admin@huayueinflatable.com</p><p>WhatsApp: +86 18688894785</p><p>Guangzhou City, Guangdong Province, China</p></div></div><div class="bottom"><span>Copyright 2026 Guangzhou Huayue Inflatable Products Co., Ltd.</span><span>CE / EN14960 information shown only where applicable.</span></div></div></footer>
  ${floatingWhatsApp}
</body>
</html>`;
}

function contactPage() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact Huayue Toys</title>
  <style>
    :root{--ink:#121212;--muted:#62666f;--line:#e7e9ee;--soft:#f6f8fb;--dark:#101114;--yellow:#f7c600;--blue:#0076c9;--shadow:0 24px 70px rgba(15,23,42,.12)}
    *{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:#fff}a{text-decoration:none;color:inherit}.container{width:min(1180px,calc(100% - 40px));margin:auto}
    header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.93);border-bottom:1px solid var(--line);backdrop-filter:blur(16px)}.head{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:flex;align-items:center;gap:12px;font-weight:900}.brand img{width:52px;height:52px;border-radius:50%}.brand small{display:block;color:var(--muted);font-size:12px;margin-top:3px}.nav{display:flex;gap:24px;font-size:14px;font-weight:800}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 22px;border-radius:999px;background:var(--yellow);font-weight:900;border:1px solid transparent}.btn.dark{background:var(--dark);color:#fff}.whatsapp{border:1px solid var(--line);border-radius:999px;padding:12px 16px;color:#1b5f32;font-weight:900}
    .pageHero{background:linear-gradient(135deg,#101114,#20242c);color:#fff;padding:86px 0 70px}.pageHero h1{max-width:860px;margin:0 0 18px;font-size:clamp(48px,6vw,80px);line-height:.98}.pageHero p{max-width:760px;color:rgba(255,255,255,.78);font-size:18px;line-height:1.75}
    section{padding:86px 0}.contactGrid{display:grid;grid-template-columns:.9fr 1.1fr;align-items:start;gap:24px}.panel{padding:32px;border:1px solid var(--line);border-radius:22px;background:radial-gradient(circle at top right,rgba(247,198,0,.16),transparent 34%),#fff;box-shadow:var(--shadow)}.panel h2{margin:0 0 14px;font-size:clamp(32px,4vw,54px);line-height:1}.panel p{color:var(--muted);line-height:1.7}.cards{display:grid;gap:12px;margin:24px 0}.cards div{padding:16px;border:1px solid var(--line);border-radius:16px;background:rgba(255,255,255,.82)}.cards span,.cards small{display:block;color:var(--muted);font-size:13px;line-height:1.5}.cards strong{display:block;margin:4px 0;line-height:1.45}
    .form{display:grid;gap:16px;padding:26px;border-radius:22px;background:#fff;box-shadow:var(--shadow)}.formGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.form label{display:grid;gap:8px;color:#3a3f49;font-size:13px;font-weight:900}.form input,.form textarea{width:100%;border:1px solid var(--line);border-radius:13px;padding:13px 14px;outline:none}
    .sectionHeader{display:flex;align-items:end;justify-content:space-between;gap:32px;margin-bottom:34px}.sectionHeader h2{margin:0;font-size:clamp(32px,4vw,54px);line-height:1.02;max-width:760px}.sectionHeader p{max-width:420px;color:var(--muted);line-height:1.7}.mapSection{background:var(--soft)}.mapCard{overflow:hidden;border:1px solid var(--line);border-radius:26px;background:#fff;box-shadow:var(--shadow)}.mapCard iframe{display:block;width:100%;height:480px;border:0;filter:saturate(1.06) contrast(1.02)}.mapInfo{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px;border-top:1px solid var(--line)}.mapInfo span{display:block;color:var(--blue);font-size:13px;font-weight:900;text-transform:uppercase}.mapInfo strong{display:block;margin:6px 0;font-size:20px}.mapInfo p{margin:0;color:var(--muted);line-height:1.6}
    footer{background:var(--dark);color:#fff;padding:52px 0}footer p{color:rgba(255,255,255,.68);line-height:1.65}
    @media(max-width:900px){.nav{display:none}.contactGrid,.formGrid{grid-template-columns:1fr}.mapInfo{display:block}.mapInfo a{margin-top:18px}.mapCard iframe{height:360px}}@media(max-width:720px){.container{width:calc(100% - 28px)}.whatsapp{display:none}.sectionHeader{display:block}}
    ${floatingCss}
  </style>
</head>
<body>
  ${headerHtml()}
  <main>
    <section class="pageHero"><div class="container"><h1>Contact Huayue Toys</h1><p>Send your product requirement, water area size, country and WhatsApp. Our sales team will help you plan a practical inflatable water park solution and export quotation.</p></div></section>
    <section id="quote"><div class="contactGrid container"><article class="panel"><h2>Talk to our sales team</h2><p>For faster quotation, please include product type, target country, quantity, expected use and project launch time.</p><div class="cards"><div><span>Email</span><strong>admin@huayueinflatable.com</strong></div><div><span>WhatsApp / Phone</span><strong>+86 18688894785</strong></div><div><span>Factory Address</span><strong>No.83, Zhenhua North Road, Shenshan Industrial Park, Jianggao Town, Baiyun District, Guangzhou, Guangdong Province, China</strong><small>Guangdong Province, Guangzhou City, Baiyun District, Jianggao Town, Shenshan Industrial Park, No.83 Zhenhua North Road</small></div></div><a class="btn dark" href="https://wa.me/8618688894785">Chat on WhatsApp</a></article><form class="form" onsubmit="event.preventDefault();document.querySelector('#thanks').style.display='block';"><div class="formGrid"><label>Name<input required></label><label>Email<input required type="email"></label><label>Country<input required></label><label>WhatsApp<input></label></div><label>Product Requirement<input required placeholder="Inflatable water park, water slide, buoy..."></label><label>Message<textarea required rows="5" placeholder="Tell us your water area size, target country, quantity and expected use."></textarea></label><button class="btn dark" type="submit">Send Layout or Water Area Size for Recommendation</button><p id="thanks" style="display:none;color:#116b37;font-weight:900">Thank you. Our sales team will contact you soon.</p></form></div></section>
    <section class="mapSection"><div class="container"><div class="sectionHeader"><h2>Visit our factory in Guangzhou.</h2><p>OpenStreetMap view of Huayue Toys factory area in Shenshan Industrial Park, Baiyun District.</p></div><div class="mapCard"><iframe title="Huayue Toys factory location on OpenStreetMap" src="https://www.openstreetmap.org/export/embed.html?bbox=113.1754%2C23.3318%2C113.1954%2C23.3518&layer=mapnik&marker=23.3417978%2C113.1854169" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="mapInfo"><div><span>Factory Location</span><strong>No.83, Zhenhua North Road</strong><p>Shenshan Industrial Park, Jianggao Town, Baiyun District, Guangzhou, Guangdong Province, China</p></div><a class="btn" target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/?mlat=23.3417978&mlon=113.1854169#map=16/23.3417978/113.1854169">Open in OpenStreetMap</a></div></div></div></section>
  </main>
  <footer><div class="container"><h2>Huayue Toys</h2><p>Guangzhou Huayue Inflatable Products Co., Ltd. | Email: admin@huayueinflatable.com | WhatsApp: +86 18688894785</p></div></footer>
  ${floatingWhatsApp}
</body>
</html>`;
}

function simplePage({ title, description, body }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} | Huayue Toys</title>
  <style>
    :root{--ink:#121212;--muted:#62666f;--line:#e7e9ee;--soft:#f6f8fb;--dark:#101114;--yellow:#f7c600;--blue:#0076c9}
    *{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:#fff}a{text-decoration:none;color:inherit}.container{width:min(1180px,calc(100% - 40px));margin:auto}
    header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.93);border-bottom:1px solid var(--line);backdrop-filter:blur(16px)}.head{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:flex;align-items:center;gap:12px;font-weight:900}.brand img{width:52px;height:52px;border-radius:50%}.brand small{display:block;color:var(--muted);font-size:12px;margin-top:3px}.nav{display:flex;gap:24px;font-size:14px;font-weight:800}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 22px;border-radius:999px;background:var(--yellow);font-weight:900}.whatsapp{border:1px solid var(--line);border-radius:999px;padding:12px 16px;color:#1b5f32;font-weight:900}
    .pageHero{background:linear-gradient(135deg,#101114,#20242c);color:#fff;padding:86px 0 70px}.pageHero h1{max-width:860px;margin:0 0 18px;font-size:clamp(48px,6vw,80px);line-height:.98}.pageHero p{max-width:760px;color:rgba(255,255,255,.78);font-size:18px;line-height:1.75}
    section{padding:76px 0}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{min-height:220px;padding:28px;border:1px solid var(--line);border-radius:20px;background:var(--soft)}.card h2{margin:0 0 12px;font-size:26px}.card p{color:var(--muted);line-height:1.7}.cta{padding:54px 0;background:var(--yellow)}.cta h2{margin:0 0 14px;font-size:44px;line-height:1}.cta p{max-width:680px;line-height:1.7}
    footer{background:var(--dark);color:#fff;padding:52px 0}footer p{color:rgba(255,255,255,.68);line-height:1.65}@media(max-width:900px){.nav{display:none}.grid{grid-template-columns:1fr}}@media(max-width:720px){.container{width:calc(100% - 28px)}.whatsapp{display:none}}
    ${floatingCss}
  </style>
</head>
<body>
  ${headerHtml()}
  <main>
    <section class="pageHero"><div class="container"><h1>${title}</h1><p>${description}</p></div></section>
    ${body}
    <section class="cta"><div class="container"><h2>Need a project quotation?</h2><p>Send your water area size, target country, product type and quantity. Huayue Toys will recommend a practical inflatable solution.</p><a class="btn" href="/contact">Get a Quote</a></div></section>
  </main>
  <footer><div class="container"><h2>Huayue Toys</h2><p>Guangzhou Huayue Inflatable Products Co., Ltd. | Email: admin@huayueinflatable.com | WhatsApp: +86 18688894785</p></div></footer>
  ${floatingWhatsApp}
</body>
</html>`;
}

function headerHtml() {
  return `<header><div class="head container"><a class="brand" href="/"><img src="/assets/huayue-logo.png" alt="Huayue Toys logo"><span>Huayue Toys<small>Inflatable Products Manufacturer</small></span></a><nav class="nav"><a href="/">Home</a><a href="/products">Products</a><a href="/applications">Applications</a><a href="/factory">Factory</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav><div><a class="whatsapp" href="${whatsappHref}" target="_blank" rel="noreferrer">WhatsApp</a> <a class="btn" href="/contact">Get a Quote</a></div></div></header>`;
}

function routePage(pathname) {
  if (pathname === "/contact") return contactPage();
  if (pathname === "/products") {
    return simplePage({
      title: "Commercial Inflatable Products",
      description: "Explore Huayue Toys inflatable water parks, slides, obstacle courses, buoys and custom inflatable products.",
      body: `<section><div class="grid container">${products.map((p) => `<article class="card"><h2>${p}</h2><p>OEM/ODM commercial inflatable product category for resorts, rental businesses and tourism projects.</p></article>`).join("")}</div></section>`
    });
  }
  if (pathname === "/applications") {
    return simplePage({
      title: "Inflatable Water Park Applications",
      description: "Solutions for resorts, hotels, rental businesses, beaches, lakes and tourism projects.",
      body: `<section><div class="grid container">${["Resort & Hotel Water Parks", "Beach & Lake Tourism Projects", "Rental Business"].map((p) => `<article class="card"><h2>${p}</h2><p>Commercial inflatable solution planned around buyer scenario, venue size and operation goals.</p></article>`).join("")}</div></section>`
    });
  }
  if (pathname === "/factory") {
    return simplePage({
      title: "Factory Strength",
      description: "OEM/ODM customization, quality control, inflation testing, packing and global shipping support.",
      body: `<section><div class="grid container">${["3D design", "Material cutting", "Welding / sewing", "Inflation test", "Packing", "Global shipping"].map((p) => `<article class="card"><h2>${p}</h2><p>Factory process support for commercial inflatable products.</p></article>`).join("")}</div></section>`
    });
  }
  if (pathname === "/about") {
    return simplePage({
      title: "About Huayue Toys",
      description: "Guangzhou Huayue Inflatable Products Co., Ltd. is a source manufacturer and OEM/ODM solution provider.",
      body: `<section><div class="container"><article class="card"><h2>Company profile</h2><p>Huayue Toys serves overseas buyers who need professional inflatable products for resort projects, tourism venues, water parks, rental businesses and events.</p></article></div></section>`
    });
  }
  if (pathname === "/blog") {
    return simplePage({
      title: "Inflatable Water Park Buyer Guides",
      description: "SEO content cluster for cost, installation, safety, ROI, country pages and buying questions.",
      body: `<section><div class="grid container">${faqs.slice(0, 3).map(([q, a]) => `<article class="card"><h2>${q}</h2><p>${a}</p></article>`).join("")}</div></section>`
    });
  }
  return page();
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  if (url.pathname.startsWith("/assets/")) {
    const safe = normalize(url.pathname).replace(/^[/\\]+/, "");
    const file = join(root, "public", safe);
    if (!file.startsWith(join(root, "public"))) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    try {
      const data = await readFile(file);
      response.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
      response.end(data);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
    return;
  }
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(routePage(url.pathname));
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Huayue preview server running at http://localhost:${port}`);
});
