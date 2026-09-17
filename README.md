<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Onetime Deals — De Deur</title>
<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
:root{
  --brand:#123a5c; --brand-2:#1b5e8c; --brand-3:#0d2a44;
  --accent:#f59e0b; --accent-dk:#b45309;
  --good:#0e7c66; --danger:#b91c1c;
  --bg:#f2f5f8; --card:#fff; --ink:#111827; --muted:#6b7280; --line:#e3e8ee;
  --r:14px; --shadow:0 1px 2px rgba(16,24,40,.06),0 4px 16px rgba(16,24,40,.06);
}
html,body{margin:0;padding:0}
body{
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  background:var(--bg); color:var(--ink); font-size:15px; line-height:1.45;
  padding-bottom:84px;
}
img{display:block;max-width:100%}
button{font:inherit;cursor:pointer;border:none;background:none;color:inherit}
input,select,textarea{font:inherit;color:inherit}
a{color:var(--brand-2)}
.wrap{max-width:1080px;margin:0 auto;padding:0 14px}

/* ---------- top bar ---------- */
.topbar{position:sticky;top:0;z-index:60;background:linear-gradient(180deg,var(--brand),var(--brand-3));color:#fff;
  box-shadow:0 2px 12px rgba(0,0,0,.18)}
.topbar-in{max-width:1080px;margin:0 auto;padding:10px 14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.brand{display:flex;align-items:center;gap:10px;min-width:0}
.logo{width:38px;height:38px;border-radius:11px;background:linear-gradient(145deg,#f7b733,#e08c00);
  display:grid;place-items:center;flex:0 0 auto;box-shadow:0 2px 8px rgba(0,0,0,.25)}
.logo svg{width:22px;height:22px;stroke:#3b2600}
.brand-txt{display:flex;flex-direction:column;line-height:1.15;min-width:0}
.brand-txt strong{font-size:16px;letter-spacing:.2px;white-space:nowrap}
.brand-txt small{font-size:11px;opacity:.78;white-space:nowrap}
.role-switch{margin-left:auto;display:flex;background:rgba(255,255,255,.13);border-radius:999px;padding:3px;gap:2px}
.role-switch button{padding:6px 13px;border-radius:999px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,.85);white-space:nowrap}
.role-switch button.on{background:#fff;color:var(--brand)}

/* ---------- generic ---------- */
.main{max-width:1080px;margin:0 auto;padding:16px 14px 40px}
h1,h2,h3{margin:0;line-height:1.25}
.sec{margin:26px 0 0}
.sec-head{display:flex;align-items:baseline;gap:10px;margin-bottom:12px}
.sec-head h2{font-size:17px;letter-spacing:-.2px}
.sec-head .sub{font-size:12.5px;color:var(--muted)}
.sec-head .more{margin-left:auto;font-size:13px;font-weight:600;color:var(--brand-2)}
.muted{color:var(--muted)}
.small{font-size:12.5px}
.center{text-align:center}

.grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(210px,1fr))}

/* ---------- cards ---------- */
.card{background:var(--card);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow);
  border:1px solid var(--line);display:flex;flex-direction:column;transition:transform .12s,box-shadow .12s}
.card:active{transform:scale(.985)}
.card .thumb{position:relative;aspect-ratio:4/3;background:#e9eef3;overflow:hidden}
.card .thumb img{width:100%;height:100%;object-fit:cover}
.card .body{padding:11px 12px 13px;display:flex;flex-direction:column;gap:5px;flex:1}
.card h3{font-size:14px;font-weight:600;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:36px}
.card .cat{font-size:11.5px;color:var(--muted)}
.card .price{font-size:16px;font-weight:700;color:var(--brand);margin-top:auto;letter-spacing:-.2px}
.card .price .lbl{font-size:10.5px;font-weight:600;color:var(--muted);display:block;letter-spacing:.4px;text-transform:uppercase}
.card .foot{font-size:12px;font-weight:600;color:var(--muted)}
.card .foot.auction{color:var(--accent-dk)}
.card .foot.closed{color:var(--danger)}
.card .foot.sold{color:var(--danger)}

/* badges */
.badge{position:absolute;top:9px;left:9px;font-size:10.5px;font-weight:700;letter-spacing:.5px;
  text-transform:uppercase;padding:4px 8px;border-radius:6px;color:#fff;display:inline-flex;align-items:center;gap:4px}
.badge.auction{background:linear-gradient(135deg,#f59e0b,#d97706)}
.badge.fixed{background:linear-gradient(135deg,#0e7c66,#0b6353)}
.badge.sold{background:linear-gradient(135deg,#b91c1c,#991b1b)}
.badge.soon{background:linear-gradient(135deg,#dc2626,#b91c1c)}
.fav-btn{position:absolute;top:7px;right:7px;width:34px;height:34px;border-radius:50%;
  background:rgba(255,255,255,.94);display:grid;place-items:center;box-shadow:0 1px 5px rgba(0,0,0,.18)}
.fav-btn svg{width:18px;height:18px;fill:none;stroke:#64748b;stroke-width:2}
.fav-btn.on svg{fill:#e11d48;stroke:#e11d48}

/* ---------- category chips ---------- */
.chips{display:flex;gap:8px;overflow-x:auto;padding:3px 0 8px;scrollbar-width:none}
.chips::-webkit-scrollbar{display:none}
.chip{flex:0 0 auto;padding:8px 14px;border-radius:999px;background:#fff;border:1px solid var(--line);
  font-size:13px;font-weight:600;color:#374151;white-space:nowrap}
.chip.on{background:var(--brand);border-color:var(--brand);color:#fff}

/* ---------- search ---------- */
.search{display:flex;align-items:center;gap:9px;background:#fff;border:1px solid var(--line);
  border-radius:12px;padding:0 13px;box-shadow:var(--shadow)}
.search svg{width:18px;height:18px;stroke:#94a3b8;flex:0 0 auto}
.search input{flex:1;border:none;outline:none;padding:13px 0;background:none;font-size:15px}
.search input::placeholder{color:#9aa5b1}

/* ---------- hero ---------- */
.hero{background:linear-gradient(135deg,var(--brand) 0%,var(--brand-2) 100%);color:#fff;border-radius:18px;
  padding:20px 20px 22px;position:relative;overflow:hidden;box-shadow:var(--shadow)}
.hero:after{content:"";position:absolute;right:-60px;top:-70px;width:220px;height:220px;border-radius:50%;
  background:rgba(255,255,255,.07)}
.hero:before{content:"";position:absolute;right:40px;bottom:-90px;width:150px;height:150px;border-radius:50%;
  background:rgba(245,158,11,.18)}
.hero h1{font-size:22px;letter-spacing:-.4px;position:relative}
.hero p{margin:7px 0 0;font-size:13.5px;opacity:.88;max-width:52ch;position:relative}
.hero .meta{margin-top:14px;display:flex;flex-wrap:wrap;gap:8px;position:relative}
.pill{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);padding:5px 11px;border-radius:999px;
  font-size:12px;font-weight:600;display:inline-flex;align-items:center;gap:6px}

/* ---------- item detail ---------- */
.back{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:600;color:var(--brand-2);
  margin-bottom:14px}
.back svg{width:16px;height:16px;stroke:currentColor;stroke-width:2.2;fill:none}
.detail{display:grid;gap:22px;grid-template-columns:1fr}
@media(min-width:820px){.detail{grid-template-columns:1.05fr .95fr;align-items:start}}
.gallery{background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
.gallery .main-img{aspect-ratio:4/3;background:#e9eef3;position:relative}
.gallery .main-img img{width:100%;height:100%;object-fit:cover}
.thumbs{display:flex;gap:8px;padding:10px;overflow-x:auto}
.thumbs button{flex:0 0 auto;width:62px;height:62px;border-radius:9px;overflow:hidden;border:2px solid transparent;padding:0}
.thumbs button.on{border-color:var(--brand)}
.thumbs img{width:100%;height:100%;object-fit:cover}
.panel{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:18px;box-shadow:var(--shadow)}
.panel + .panel{margin-top:14px}
.d-title{font-size:21px;font-weight:700;letter-spacing:-.4px;margin-bottom:8px}
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px}
.tag{font-size:11.5px;font-weight:600;padding:4px 10px;border-radius:999px;background:#f1f5f9;color:#475569}
.tag.auction{background:#fef3c7;color:#92400e}
.tag.fixed{background:#d1fae5;color:#065f46}
.tag.sold{background:#fee2e2;color:#991b1b}
.pricebox{border-radius:12px;padding:15px 16px;margin-bottom:14px;border:1px solid var(--line);background:#f8fafc}
.pricebox.auction{background:linear-gradient(135deg,#fffbeb,#fef3c7);border-color:#fcd34d}
.pricebox .k{font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;color:var(--muted)}
.pricebox .v{font-size:28px;font-weight:800;letter-spacing:-1px;color:var(--brand);line-height:1.15}
.pricebox.auction .v{color:#92400e}
.pricebox .r{font-size:13px;color:var(--muted);margin-top:3px}
.countdown{font-size:15px;font-weight:700;color:var(--accent-dk);margin-top:6px;font-variant-numeric:tabular-nums}
.countdown.ended{color:var(--danger)}
.row{display:flex;gap:10px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:11px;
  font-size:14px;font-weight:700;background:var(--brand);color:#fff;transition:opacity .12s;flex:1;min-width:130px}
.btn:active{opacity:.85}
.btn.ghost{background:#fff;color:var(--brand);border:1.5px solid var(--line)}
.btn.ghost.on{background:#fff1f2;border-color:#fda4af;color:#be123c}
.btn.accent{background:linear-gradient(135deg,#f59e0b,#d97706)}
.btn.sm{padding:8px 12px;font-size:12.5px;border-radius:9px;flex:0 0 auto;min-width:0}
.btn.danger{background:#fff;color:var(--danger);border:1.5px solid #fecaca}
.btn[disabled]{opacity:.45;pointer-events:none}
.btn svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2}
.specs{display:grid;grid-template-columns:auto 1fr;gap:9px 16px;font-size:13.5px;margin-top:4px}
.specs dt{color:var(--muted);font-weight:600}
.specs dd{margin:0;font-weight:500}
.desc{font-size:14px;line-height:1.6;color:#374151;white-space:pre-wrap}

/* bids */
.bidlist{list-style:none;margin:12px 0 0;padding:0;display:flex;flex-direction:column;gap:7px;max-height:210px;overflow:auto}
.bidlist li{display:flex;align-items:center;gap:10px;font-size:13px;padding:8px 11px;background:#f8fafc;border-radius:9px}
.bidlist li.top{background:#fef3c7;font-weight:700}
.bidlist .who{font-weight:600}
.bidlist .amt{margin-left:auto;font-weight:700;color:var(--brand)}
.bidlist li.top .amt{color:#92400e}
.bidform{display:flex;gap:8px;margin-top:12px}
.bidform input{flex:1;padding:12px 13px;border:1.5px solid var(--line);border-radius:11px;outline:none;font-weight:600}
.bidform input:focus{border-color:var(--brand-2)}
.winner{background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;border-radius:11px;padding:13px 15px;font-size:13.5px;margin-top:12px}
.winner strong{display:block;font-size:15px;margin-bottom:2px}
.notice{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:11px;padding:12px 14px;font-size:13px;margin-top:12px}

/* ---------- list rows (owner / saved) ---------- */
.rows{display:flex;flex-direction:column;gap:11px}
.rowitem{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:11px;display:flex;gap:13px;
  box-shadow:var(--shadow);align-items:flex-start}
.rowitem img{width:78px;height:78px;border-radius:10px;object-fit:cover;flex:0 0 auto;background:#e9eef3}
.rowitem .info{flex:1;min-width:0}
.rowitem .info h3{font-size:14.5px;font-weight:650;margin-bottom:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rowitem .info .m{font-size:12.5px;color:var(--muted)}
.rowitem .info .p{font-size:15px;font-weight:700;color:var(--brand);margin-top:4px}
.rowitem .acts{display:flex;flex-direction:column;gap:6px;flex:0 0 auto}

/* ---------- stats ---------- */
.stats{display:grid;gap:11px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}
.stat{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:14px 15px;box-shadow:var(--shadow)}
.stat .n{font-size:26px;font-weight:800;letter-spacing:-1px;color:var(--brand);line-height:1.1}
.stat .l{font-size:12px;color:var(--muted);font-weight:600;margin-top:3px}
.stat.warn .n{color:var(--accent-dk)}
.stat.bad .n{color:var(--danger)}

/* ---------- messages ---------- */
.thread{display:flex;flex-direction:column;height:calc(100vh - 250px);min-height:340px;
  background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
.thread-head{padding:12px 14px;border-bottom:1px solid var(--line);display:flex;gap:11px;align-items:center;background:#fbfcfe}
.thread-head img{width:44px;height:44px;border-radius:9px;object-fit:cover}
.thread-head h3{font-size:14px;font-weight:650}
.thread-head .s{font-size:12px;color:var(--muted)}
.msgs{flex:1;overflow:auto;padding:15px;display:flex;flex-direction:column;gap:10px;background:#f7f9fb}
.bubble{max-width:78%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.45;box-shadow:0 1px 2px rgba(16,24,40,.05)}
.bubble .t{display:block;font-size:10.5px;opacity:.65;margin-top:4px}
.bubble.them{background:#fff;border:1px solid var(--line);border-bottom-left-radius:4px;align-self:flex-start}
.bubble.me{background:var(--brand);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}
.bubble.me .t{color:rgba(255,255,255,.75)}
.composer{display:flex;gap:8px;padding:11px;border-top:1px solid var(--line);background:#fff}
.composer input{flex:1;padding:11px 13px;border:1.5px solid var(--line);border-radius:11px;outline:none}
.composer input:focus{border-color:var(--brand-2)}
.unread{background:#dc2626;color:#fff;font-size:10.5px;font-weight:700;border-radius:999px;padding:2px 7px;margin-left:auto}

/* ---------- forms ---------- */
.form{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:18px;box-shadow:var(--shadow)}
.field{margin-bottom:15px}
.field > label{display:block;font-size:12.5px;font-weight:700;color:#374151;margin-bottom:6px}
.field input[type=text],.field input[type=number],.field input[type=datetime-local],.field select,.field textarea{
  width:100%;padding:11px 13px;border:1.5px solid var(--line);border-radius:11px;outline:none;background:#fff}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--brand-2)}
.field textarea{resize:vertical;min-height:96px}
.hint{font-size:12px;color:var(--muted);margin-top:5px}
.seg{display:flex;gap:8px}
.seg button{flex:1;padding:12px;border-radius:11px;border:1.5px solid var(--line);background:#fff;font-weight:700;
  font-size:13.5px;color:#475569}
.seg button.on{background:var(--brand);border-color:var(--brand);color:#fff}
.seg button.on.auction{background:linear-gradient(135deg,#f59e0b,#d97706);border-color:#d97706}
.two{display:grid;gap:15px;grid-template-columns:1fr}
@media(min-width:600px){.two{grid-template-columns:1fr 1fr}}
.photostrip{display:flex;gap:9px;flex-wrap:wrap;margin-top:10px}
.photostrip .ph{position:relative;width:82px;height:82px;border-radius:10px;overflow:hidden;border:1px solid var(--line)}
.photostrip .ph img{width:100%;height:100%;object-fit:cover}
.photostrip .ph button{position:absolute;top:3px;right:3px;width:22px;height:22px;border-radius:50%;
  background:rgba(0,0,0,.65);color:#fff;font-size:13px;line-height:1;display:grid;place-items:center}
.upload{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border:1.5px dashed #cbd5e1;border-radius:11px;
  font-size:13px;font-weight:600;color:#475569;background:#f8fafc;cursor:pointer}

/* ---------- tab bar ---------- */
.tabbar{position:fixed;bottom:0;left:0;right:0;z-index:60;background:rgba(255,255,255,.97);
  backdrop-filter:blur(10px);border-top:1px solid var(--line);padding-bottom:env(safe-area-inset-bottom)}
.tabbar-in{max-width:1080px;margin:0 auto;display:flex}
.tabbar button{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px 10px;
  font-size:10.5px;font-weight:650;color:#94a3b8;position:relative}
.tabbar button.on{color:var(--brand)}
.tabbar svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.tabbar .dot{position:absolute;top:6px;right:calc(50% - 18px);min-width:16px;height:16px;border-radius:999px;
  background:#dc2626;color:#fff;font-size:10px;font-weight:700;display:grid;place-items:center;padding:0 4px}

/* ---------- fab ---------- */
.fab{position:fixed;right:18px;bottom:88px;z-index:55;width:56px;height:56px;border-radius:50%;
  background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font-size:26px;font-weight:300;
  display:grid;place-items:center;box-shadow:0 6px 20px rgba(217,119,6,.45)}

/* ---------- toast ---------- */
.toast{position:fixed;left:50%;bottom:100px;transform:translate(-50%,14px);background:#111827;color:#fff;
  padding:11px 18px;border-radius:11px;font-size:13.5px;font-weight:600;z-index:200;opacity:0;
  transition:all .25s;pointer-events:none;max-width:88vw;text-align:center}
.toast.show{opacity:1;transform:translate(-50%,0)}

/* ---------- misc ---------- */
.empty{background:#fff;border:1px dashed #cbd5e1;border-radius:var(--r);padding:44px 22px;text-align:center;color:var(--muted)}
.empty .ico{font-size:34px;margin-bottom:10px;opacity:.65}
.empty h3{font-size:15.5px;color:#374151;margin-bottom:5px}
.empty p{font-size:13px;margin:0 auto;max-width:38ch}
.divider{height:1px;background:var(--line);margin:20px 0}
.noticebar{background:#eff6ff;border:1px solid #bfdbfe;color:#1e40af;border-radius:11px;padding:11px 14px;
  font-size:12.5px;margin-bottom:16px;display:flex;gap:9px;align-items:flex-start}
.noticebar svg{width:16px;height:16px;flex:0 0 auto;margin-top:1px;stroke:currentColor;fill:none;stroke-width:2}
</style>
</head>
<body>
<div id="app"></div>

<script>
/* =========================================================
   ONETIME DEALS — single-file app
   ========================================================= */
const KEY = 'onetime_deals_v1';

const CATS = ['Electronics','Phones & Tablets','Computers','Gaming','Jewellery & Watches',
  'Tools','Music & Instruments','Home Appliances','Sports & Outdoors','Furniture',
  'Vehicles & Parts','Other'];

const CAT_META = {
  'Electronics':        ['📺','#1e3a8a','#3b82f6'],
  'Phones & Tablets':   ['📱','#0f766e','#14b8a6'],
  'Computers':          ['💻','#334155','#64748b'],
  'Gaming':             ['🎮','#4c1d95','#8b5cf6'],
  'Jewellery & Watches':['💍','#78350f','#d97706'],
  'Tools':              ['🔧','#7c2d12','#ea580c'],
  'Music & Instruments':['🎸','#831843','#ec4899'],
  'Home Appliances':    ['🧺','#155e75','#06b6d4'],
  'Sports & Outdoors':  ['🚲','#14532d','#22c55e'],
  'Furniture':          ['🪑','#44403c','#a8a29e'],
  'Vehicles & Parts':   ['🛞','#1f2937','#4b5563'],
  'Other':              ['📦','#374151','#9ca3af']
};

const CONDITIONS = ['New','Like new','Good','Fair','For parts'];
const HOUR = 3600000, DAY = 24*HOUR;

/* ---------- tiny helpers ---------- */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = p => p + Math.random().toString(36).slice(2,9);
const money = n => 'R ' + Math.round(Number(n)||0).toLocaleString('en-ZA').replace(/,/g,' ');

function ph(cat, i=0){
  const [e,c1,c2] = CAT_META[cat] || CAT_META['Other'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="675">
<defs><linearGradient id="g" gradientTransform="rotate(${i*30})" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
<rect width="900" height="675" fill="url(#g)"/>
<circle cx="${190+i*150}" cy="${130+i*80}" r="250" fill="#fff" opacity="0.07"/>
<text x="450" y="385" font-size="235" text-anchor="middle" dominant-baseline="middle">${e}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function countdownText(ms){
  if(ms <= 0) return 'Closed';
  const s = Math.floor(ms/1000);
  const d = Math.floor(s/86400), h = Math.floor((s%86400)/3600),
        m = Math.floor((s%3600)/60), sec = s%60;
  if(d > 0) return `${d}d ${h}h left`;
  if(h > 0) return `${h}h ${m}m left`;
  if(m > 0) return `${m}m ${sec}s left`;
  return `${sec}s left`;
}
function timeAgo(iso){
  const ms = Date.now() - new Date(iso).getTime();
  if(ms < 60000) return 'just now';
  if(ms < HOUR) return Math.floor(ms/60000) + ' min ago';
  if(ms < DAY)  return Math.floor(ms/HOUR) + 'h ago';
  if(ms < 7*DAY) return Math.floor(ms/DAY) + 'd ago';
  return new Date(iso).toLocaleDateString('en-ZA',{day:'numeric',month:'short'});
}
function fmtDateTime(iso){
  return new Date(iso).toLocaleString('en-ZA',
    {weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit', hour12:false});
}
function toLocalInput(iso){
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,16);
}

/* ---------- auction logic ---------- */
const topBid = it => (it.bids && it.bids.length) ? Math.max(...it.bids.map(b=>b.amount)) : 0;
const topBidObj = it => {
  if(!it.bids || !it.bids.length) return null;
  return it.bids.reduce((a,b)=> b.amount > a.amount ? b : a);
};
const minNextBid = it => {
  const t = topBid(it);
  if(t) return t + Math.max(50, Math.round(t*0.05/10)*10);
  return it.startBid || 0;
};
function auctionState(it){
  if(it.type !== 'auction') return null;
  const left = new Date(it.endsAt).getTime() - Date.now();
  if(left <= 0) return 'closed';
  if(left <= 6*HOUR) return 'closing';
  return 'open';
}
const isAvailable = it => it.status === 'available';

/* =========================================================
   STATE
   ========================================================= */
let DB = null;
const state = {
  role:'buyer', tab:'home', itemId:null, threadItemId:null, backTab:'home',
  gallery:0, category:'All', type:'All', q:'', sort:'new', draft:null
};

/* =========================================================
   SEED + PERSISTENCE
   ========================================================= */
function seed(){
  const now = Date.now();
  const iso = ms => new Date(ms).toISOString();

  const mk = (o) => Object.assign({
    id: uid('i'), status:'available', bids:[], createdAt: iso(now - Math.random()*9*DAY),
    photos:[], condition:'Good'
  }, o);

  const items = [
    mk({ title:'Samsung 43" Smart LED TV', category:'Electronics', condition:'Good',
      price:2450, type:'fixed', photos:[ph('Electronics',0), ph('Electronics',1)],
      description:'Samsung 43-inch Full HD smart TV. All ports working, remote included. Screen has no dead pixels. Tested and working — come view it at the shop in De Deur.',
      createdAt: iso(now - 2*DAY) }),

    mk({ title:'Apple iPhone 11 64GB', category:'Phones & Tablets', condition:'Good',
      type:'auction', startBid:1800, endsAt: iso(now + 3*HOUR),
      photos:[ph('Phones & Tablets',0), ph('Phones & Tablets',1)],
      bids:[{amount:2100, bidder:'Sipho N.', at: iso(now-5*HOUR)}, {amount:2350, bidder:'Naledi K.', at: iso(now-40*60000)}],
      description:'iPhone 11 64GB, battery health 84%. Minor scuff on the corner, screen is clean. Face ID and cameras working. No charger box.' }),

    mk({ title:'Dell Latitude 5480 i5 Laptop', category:'Computers', condition:'Good',
      price:3800, type:'fixed', photos:[ph('Computers',0)],
      description:'Intel Core i5, 8GB RAM, 256GB SSD. Windows 11 loaded. Charger included. Good for work or studies.' }),

    mk({ title:'PlayStation 4 Slim 1TB + 2 controllers', category:'Gaming', condition:'Good',
      type:'auction', startBid:1500, endsAt: iso(now + 26*HOUR),
      photos:[ph('Gaming',0), ph('Gaming',1)],
      bids:[{amount:1900, bidder:'Johan V.', at: iso(now-2*HOUR)}],
      description:'PS4 Slim 1TB with two DualShock controllers. Comes with 3 games. Everything tested and working.' }),

    mk({ title:'9ct Gold Rope Chain 45cm', category:'Jewellery & Watches', condition:'Like new',
      price:4200, type:'fixed', photos:[ph('Jewellery & Watches',0)],
      description:'Solid 9ct gold rope chain, 45cm, stamped. Weighed and tested in store. Comes with a small jewellery pouch.' }),

    mk({ title:'Bosch Impact Drill Set', category:'Tools', condition:'Good',
      price:950, type:'fixed', photos:[ph('Tools',0)],
      description:'Bosch corded impact drill with a full drill bit and screwdriver bit set in the case. Works perfectly.' }),

    mk({ title:'Yamaha F310 Acoustic Guitar', category:'Music & Instruments', condition:'Good',
      type:'auction', startBid:900, endsAt: iso(now + 45*60000),
      photos:[ph('Music & Instruments',0)],
      bids:[{amount:1100, bidder:'Sipho N.', at: iso(now-3*HOUR)}, {amount:1250, bidder:'Ayanda P.', at: iso(now-25*60000)}],
      description:'Yamaha F310 dreadnought acoustic. New strings fitted, neck straight, no cracks. Ideal starter guitar.' }),

    mk({ title:'Defy 8kg Front Loader Washing Machine', category:'Home Appliances', condition:'Fair',
      price:2100, type:'fixed', status:'sold', photos:[ph('Home Appliances',0)],
      description:'Defy 8kg front loader. Some cosmetic marks on the body but works 100%. Sold — thanks!' }),

    mk({ title:'Garmin Forerunner 245 GPS Watch', category:'Sports & Outdoors', condition:'Good',
      type:'auction', startBid:800, endsAt: iso(now + 2*DAY + 4*HOUR),
      photos:[ph('Sports & Outdoors',0)],
      description:'Garmin Forerunner 245 running watch. GPS and heart rate working. Charging cable included.' }),

    mk({ title:'Canon EOS 700D + 18-55mm Lens', category:'Electronics', condition:'Good',
      type:'auction', startBid:2500, endsAt: iso(now - 2*HOUR),
      photos:[ph('Electronics',2)],
      bids:[{amount:2800, bidder:'Naledi K.', at: iso(now-20*HOUR)},
            {amount:3100, bidder:'Johan V.', at: iso(now-9*HOUR)},
            {amount:3400, bidder:'Sipho N.', at: iso(now-4*HOUR)}],
      description:'Canon EOS 700D body with 18-55mm kit lens, battery and charger. Shutter count low, sensor clean.' }),

    mk({ title:'Solid Oak Coffee Table', category:'Furniture', condition:'Good',
      price:1350, type:'fixed', photos:[ph('Furniture',0)],
      description:'Solid oak coffee table, 120cm x 60cm. A few surface marks consistent with use. Very sturdy.' }),

    mk({ title:'Honda GX160 Petrol Lawnmower', category:'Tools', condition:'Good',
      price:1750, type:'fixed', photos:[ph('Tools',1)],
      description:'Honda GX160 engine on a steel deck mower. Starts first pull. Blade sharpened recently.' }),

    mk({ title:'Samsung Galaxy A32 128GB', category:'Phones & Tablets', condition:'Good',
      type:'auction', startBid:1200, endsAt: iso(now + 18*HOUR),
      photos:[ph('Phones & Tablets',2)],
      bids:[{amount:1400, bidder:'Ayanda P.', at: iso(now-6*HOUR)}],
      description:'Galaxy A32 128GB, dual SIM. Screen protector on since new. Charger included.' }),

    mk({ title:'Hisense 120L Bar Fridge', category:'Home Appliances', condition:'Good',
      price:1100, type:'fixed', photos:[ph('Home Appliances',1)],
      description:'Hisense 120 litre bar fridge. Cools well, seals are good, no rust. Great for a flat or spaza.' })
  ];

  const iByTitle = t => items.find(i => i.title === t).id;

  const messages = [
    { id: uid('m'), itemId: iByTitle('Dell Latitude 5480 i5 Laptop'), from:'buyer', text:'Hi, is the Dell laptop still available? Can I come look at it on Saturday morning?', at: iso(now - 5*HOUR), readByOwner:false },
    { id: uid('m'), itemId: iByTitle('Dell Latitude 5480 i5 Laptop'), from:'owner', text:'Hi Thabo, yes it is still here. We are open Saturday 8:30 to 13:00. Ask for Pieter.', at: iso(now - 4*HOUR), readByOwner:true },
    { id: uid('m'), itemId: iByTitle('Apple iPhone 11 64GB'), from:'buyer', text:'Is the battery health on the iPhone 11 really 84%? And does it come with a charger?', at: iso(now - 2*HOUR), readByOwner:false }
  ];

  return {
    shop:{ name:'Onetime Deals', area:'De Deur, South Africa',
      phone:'+27 82 555 0147', hours:'Mon–Fri 8:30–17:00 · Sat 8:30–13:00',
      about:'Your local second-hand and pawn shop in De Deur. Buy at a fixed price or bid in our auctions — collection and payment happen in person at the shop.' },
    me:{ name:'Thabo M.' },
    favourites:[], messages, items
  };
}

function load(){
  try{
    const raw = localStorage.getItem(KEY);
    if(raw){ DB = JSON.parse(raw); return; }
  }catch(e){ console.warn('load failed', e); }
  DB = seed();
  save();
}
function save(){
  try{ localStorage.setItem(KEY, JSON.stringify(DB)); }
  catch(e){ toast('Storage full — try removing some photos'); }
}

/* =========================================================
   DERIVED
   ========================================================= */
const findItem = id => DB.items.find(i => i.id === id);
const threadFor = id => DB.messages.filter(m => m.itemId === id).sort((a,b)=> new Date(a.at)-new Date(b.at));
const threadItems = () => {
  const ids = [...new Set(DB.messages.map(m => m.itemId))];
  return ids.map(findItem).filter(Boolean)
    .sort((a,b)=>{
      const la = threadFor(a.id).slice(-1)[0]?.at || 0;
      const lb = threadFor(b.id).slice(-1)[0]?.at || 0;
      return new Date(lb) - new Date(la);
    });
};
const unreadForOwner = () => DB.messages.filter(m => m.from === 'buyer' && !m.readByOwner).length;
const unreadForBuyer = () => DB.messages.filter(m => m.from === 'owner' && !m.readByBuyer).length;
const isFav = id => DB.favourites.includes(id);

function visibleItems(){
  let list = DB.items.filter(i => true);
  if(state.category !== 'All') list = list.filter(i => i.category === state.category);
  if(state.type === 'fixed')   list = list.filter(i => i.type === 'fixed');
  if(state.type === 'auction') list = list.filter(i => i.type === 'auction');
  if(state.q.trim()){
    const q = state.q.trim().toLowerCase();
    list = list.filter(i =>
      i.title.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q));
  }
  switch(state.sort){
    case 'priceLow':  list.sort((a,b)=> (a.price||a.startBid||0)-(b.price||b.startBid||0)); break;
    case 'priceHigh': list.sort((a,b)=> (b.price||b.startBid||0)-(a.price||a.startBid||0)); break;
    case 'ending':
      list = list.filter(i => i.type==='auction' && auctionState(i)!=='closed')
                 .sort((a,b)=> new Date(a.endsAt)-new Date(b.endsAt));
      break;
    default: list.sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
  }
  return list;
}

/* =========================================================
   COMPONENTS
   ========================================================= */
const svgIcons = {
  back:'<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  heart:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.6-9.2-8.4A5.4 5.4 0 0 1 12 6.6a5.4 5.4 0 0 1 9.2 6C19 16.4 12 21 12 21z"/></svg>',
  home:'<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  chat:'<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.6A8 8 0 1 1 21 12z"/></svg>',
  grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  gear:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.5 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 14H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.5l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 3.6V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.5 1.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  tag:'<svg viewBox="0 0 24 24"><path d="M20.6 13.4 12 22l-9-9V4a1 1 0 0 1 1-1h9z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
  info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>'
};

function itemCard(it){
  const fav = isFav(it.id);
  const st = auctionState(it);
  let badge, foot, priceHtml;

  if(it.status === 'sold'){
    badge = '<span class="badge sold">Sold</span>';
    foot = '<div class="foot sold">Sold</div>';
  } else if(it.type === 'auction'){
    const closed = st === 'closed';
    badge = closed
      ? '<span class="badge sold">Closed</span>'
      : (st === 'closing' ? '<span class="badge soon">Closing soon</span>' : '<span class="badge auction">Auction</span>');
    foot = closed
      ? `<div class="foot closed">Closed · ${esc(topBidObj(it)?.bidder || 'no bids')}</div>`
      : `<div class="foot auction" data-countdown="${it.endsAt}" data-open="1">—</div>`;
  } else {
    badge = '<span class="badge fixed">Fixed price</span>';
    foot = it.status === 'unavailable'
      ? '<div class="foot sold">Unavailable</div>'
      : '<div class="foot">Available now</div>';
  }

  if(it.type === 'auction'){
    const t = topBid(it);
    priceHtml = t
      ? `<div class="price"><span class="lbl">Current bid</span>${money(t)}</div>`
      : `<div class="price"><span class="lbl">Starting bid</span>${money(it.startBid)}</div>`;
  } else {
    priceHtml = `<div class="price"><span class="lbl">Price</span>${money(it.price)}</div>`;
  }

  return `<article class="card" data-act="item" data-id="${it.id}">
    <div class="thumb">
      <img src="${it.photos[0] || ph(it.category)}" alt="${esc(it.title)}" loading="lazy">
      ${badge}
      <button class="fav-btn ${fav?'on':''}" data-act="fav" data-id="${it.id}"
        aria-label="Save to favourites">${svgIcons.heart}</button>
    </div>
    <div class="body">
      <h3>${esc(it.title)}</h3>
      <div class="cat">${esc(it.category)} · ${esc(it.condition)}</div>
      ${priceHtml}
      ${foot}
    </div>
  </article>`;
}

function emptyState(ico, title, body, cta){
  return `<div class="empty"><div class="ico">${ico}</div><h3>${esc(title)}</h3>
    <p>${esc(body)}</p>${cta ? `<div style="margin-top:16px">${cta}</div>` : ''}</div>`;
}

/* =========================================================
   VIEWS — BUYER
   ========================================================= */
function viewHome(){
  const live = DB.items.filter(i => i.status === 'available');
  const closing = live.filter(i => i.type==='auction' && auctionState(i)!=='closed')
                      .sort((a,b)=> new Date(a.endsAt)-new Date(b.endsAt)).slice(0,4);
  const fresh = [...live].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)).slice(0,8);

  return `
  <div class="hero">
    <h1>Second-hand deals in De Deur</h1>
    <p>${esc(DB.shop.about)}</p>
    <div class="meta">
      <span class="pill">${svgIcons.tag} ${DB.items.filter(i=>isAvailable(i)).length} items live</span>
      <span class="pill">${svgIcons.clock} ${DB.items.filter(i=>i.type==='auction'&&auctionState(i)!=='closed').length} auctions open</span>
    </div>
  </div>

  <div style="margin-top:16px">
    <form class="search" data-form="search">
      ${svgIcons.search}
      <input type="text" name="q" placeholder="Search TVs, phones, tools, jewellery…" value="${esc(state.q)}">
    </form>
  </div>

  <div class="sec">
    <div class="chips">
      <button class="chip ${state.category==='All'?'on':''}" data-act="cat" data-cat="All">All</button>
      ${CATS.map(c=>`<button class="chip ${state.category===c?'on':''}" data-act="cat" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
    </div>
  </div>

  ${closing.length ? `
  <div class="sec">
    <div class="sec-head">
      <h2>⏳ Closing soon</h2>
      <span class="sub">Auctions ending within hours</span>
    </div>
    <div class="grid">${closing.map(itemCard).join('')}</div>
  </div>` : ''}

  <div class="sec">
    <div class="sec-head">
      <h2>Latest listings</h2>
      <button class="more" data-act="tab" data-tab="browse">Browse all →</button>
    </div>
    ${fresh.length ? `<div class="grid">${fresh.map(itemCard).join('')}</div>`
      : emptyState('📦','Nothing listed yet','The shop has not posted any items. Check back soon.')}
  </div>`;
}

function viewBrowse(){
  const results = visibleItems();
  return `
  <div class="sec-head" style="margin-top:4px">
    <h2>Browse</h2>
    <span class="sub">${results.length} item${results.length===1?'':'s'}</span>
  </div>

  <form class="search" data-form="search" style="margin-bottom:12px">
    ${svgIcons.search}
    <input type="text" name="q" id="browseSearch" placeholder="Search by name or keyword…" value="${esc(state.q)}">
  </form>

  <div class="chips">
    <button class="chip ${state.category==='All'?'on':''}" data-act="cat" data-cat="All">All</button>
    ${CATS.map(c=>`<button class="chip ${state.category===c?'on':''}" data-act="cat" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
  </div>

  <div style="display:flex;gap:9px;flex-wrap:wrap;margin:10px 0 16px">
    <select data-act="filter-type" style="padding:9px 12px;border-radius:10px;border:1.5px solid var(--line);background:#fff;font-weight:600;font-size:13px">
      <option value="All"     ${state.type==='All'?'selected':''}>All types</option>
      <option value="fixed"   ${state.type==='fixed'?'selected':''}>Fixed price</option>
      <option value="auction" ${state.type==='auction'?'selected':''}>Auctions</option>
    </select>
    <select data-act="sort" style="padding:9px 12px;border-radius:10px;border:1.5px solid var(--line);background:#fff;font-weight:600;font-size:13px">
      <option value="new"       ${state.sort==='new'?'selected':''}>Newest first</option>
      <option value="priceLow"  ${state.sort==='priceLow'?'selected':''}>Price: low to high</option>
      <option value="priceHigh" ${state.sort==='priceHigh'?'selected':''}>Price: high to low</option>
      <option value="ending"    ${state.sort==='ending'?'selected':''}>Ending soonest</option>
    </select>
  </div>

  <div id="results">
    ${results.length ? `<div class="grid">${results.map(itemCard).join('')}</div>`
      : emptyState('🔍','No items found','Try a different search word or clear the filters.',
        `<button class="btn ghost" data-act="clear-filters" style="max-width:220px">Clear filters</button>`)}
  </div>`;
}

function viewItem(){
  const it = findItem(state.itemId);
  if(!it) return emptyState('😕','Listing not found','It may have been removed by the shop.');

  const st = auctionState(it);
  const fav = isFav(it.id);
  const closed = it.type === 'auction' && st === 'closed';
  const winner = closed ? topBidObj(it) : null;
  const iWon = winner && winner.bidder === DB.me.name;
  const gallery = it.photos.length ? it.photos : [ph(it.category)];
  const g = Math.min(state.gallery, gallery.length-1);
  const msgs = threadFor(it.id);

  let priceBlock = '';
  if(it.type === 'auction'){
    const t = topBid(it);
    priceBlock = `
      <div class="pricebox auction">
        <div class="k">${t ? 'Current highest bid' : 'Starting bid'}</div>
        <div class="v">${money(t || it.startBid)}</div>
        <div class="r">${it.bids.length} bid${it.bids.length===1?'':'s'} · closes ${fmtDateTime(it.endsAt)}</div>
        <div class="countdown" data-countdown="${it.endsAt}" data-open="${closed?'0':'1'}">—</div>
      </div>`;
  } else {
    priceBlock = `
      <div class="pricebox">
        <div class="k">Asking price</div>
        <div class="v">${money(it.price)}</div>
        <div class="r">Fixed price · pay and collect at the shop</div>
      </div>`;
  }

  let statusBanner = '';
  if(it.status === 'sold') statusBanner = `<div class="winner"><strong>This item is sold</strong>It is no longer available.</div>`;
  else if(it.status === 'unavailable') statusBanner = `<div class="notice">This item is currently unavailable.</div>`;
  else if(closed) statusBanner = winner
    ? `<div class="winner"><strong>${iWon ? '🎉 You won this auction!' : 'Auction closed — winner: ' + esc(winner.bidder)}</strong>
        Winning bid ${money(winner.amount)} · ${esc(DB.shop.name)} will be in touch to arrange collection and payment in person.</div>`
    : `<div class="notice">This auction closed with no bids.</div>`;

  const bidPanel = (it.type === 'auction' && !closed && it.status === 'available' && state.role === 'buyer') ? `
    <div class="panel">
      <h3 style="font-size:15px;margin-bottom:4px">Place your bid</h3>
      <p class="small muted" style="margin:0 0 10px">Minimum next bid: <strong>${money(minNextBid(it))}</strong></p>
      <form class="bidform" data-form="bid" data-id="${it.id}">
        <input type="number" name="amount" min="${minNextBid(it)}" step="10"
               placeholder="${minNextBid(it)}" inputmode="numeric" required>
        <button class="btn accent" style="flex:0 0 auto;min-width:0;padding:12px 20px">Bid</button>
      </form>
      <div class="hint">Bids are final. Collection and payment happen in person at the shop.</div>
      ${it.bids.length ? `<ul class="bidlist">
        ${[...it.bids].sort((a,b)=>b.amount-a.amount).map((b,i)=>`
          <li class="${i===0?'top':''}">
            <span class="who">${esc(b.bidder)}</span>
            <span class="small muted">${timeAgo(b.at)}</span>
            <span class="amt">${money(b.amount)}</span>
          </li>`).join('')}
      </ul>` : ''}
    </div>` : '';

  const ownerPanel = state.role === 'owner' ? `
    <div class="panel">
      <h3 style="font-size:15px;margin-bottom:12px">Manage this listing</h3>
      <div class="row">
        <button class="btn ghost sm" data-act="edit" data-id="${it.id}">Edit listing</button>
        ${it.status === 'available'
          ? `<button class="btn ghost sm" data-act="mark-sold" data-id="${it.id}">Mark as sold</button>`
          : `<button class="btn ghost sm" data-act="mark-available" data-id="${it.id}">Mark available</button>`}
        <button class="btn danger sm" data-act="delete" data-id="${it.id}">Delete</button>
      </div>
      ${it.type==='auction' && it.bids.length ? `
        <div class="divider"></div>
        <div class="small muted" style="margin-bottom:8px;font-weight:700;letter-spacing:.4px;text-transform:uppercase">Bid history</div>
        <ul class="bidlist">
          ${[...it.bids].sort((a,b)=>b.amount-a.amount).map((b,i)=>`
            <li class="${i===0?'top':''}">
              <span class="who">${esc(b.bidder)}</span>
              <span class="small muted">${timeAgo(b.at)}</span>
              <span class="amt">${money(b.amount)}</span>
            </li>`).join('')}
        </ul>` : ''}
    </div>` : '';

  const auctionBadge = it.type === 'auction'
    ? `<span class="tag auction">Auction${closed?' · closed':(st==='closing'?' · closing soon':' · open')}</span>`
    : `<span class="tag fixed">Fixed price</span>`;

  return `
  <button class="back" data-act="back">${svgIcons.back} Back</button>

  <div class="detail">
    <div>
      <div class="gallery">
        <div class="main-img">
          <img src="${gallery[g]}" alt="${esc(it.title)}">
          ${it.status==='sold' ? '<span class="badge sold" style="top:12px;left:12px">Sold</span>' : ''}
        </div>
        ${gallery.length > 1 ? `<div class="thumbs">
          ${gallery.map((p,i)=>`<button class="${i===g?'on':''}" data-act="gallery" data-i="${i}">
            <img src="${p}" alt=""></button>`).join('')}
        </div>` : ''}
      </div>

      <div class="panel" style="margin-top:14px">
        <h3 style="font-size:15px;margin-bottom:10px">Description</h3>
        <div class="desc">${esc(it.description)}</div>
        <div class="divider"></div>
        <dl class="specs">
          <dt>Category</dt><dd>${esc(it.category)}</dd>
          <dt>Condition</dt><dd>${esc(it.condition)}</dd>
          <dt>Type</dt><dd>${it.type==='auction'?'Auction':'Fixed price'}</dd>
          ${it.type==='auction' ? `<dt>Closes</dt><dd>${fmtDateTime(it.endsAt)}</dd>` : ''}
          <dt>Listed</dt><dd>${timeAgo(it.createdAt)}</dd>
        </dl>
      </div>
    </div>

    <div>
      <div class="panel">
        <div class="tags">
          ${auctionBadge}
          <span class="tag">${esc(it.condition)}</span>
          <span class="tag">${esc(it.category)}</span>
        </div>
        <h1 class="d-title">${esc(it.title)}</h1>
        ${priceBlock}
        ${statusBanner}

        ${state.role === 'buyer' ? `
        <div class="row" style="margin-top:14px">
          <button class="btn ghost ${fav?'on':''}" data-act="fav" data-id="${it.id}">
            ${svgIcons.heart} ${fav?'Saved':'Save'}
          </button>
          <button class="btn" data-act="message-item" data-id="${it.id}">
            ${svgIcons.chat} Message the shop
          </button>
        </div>
        <div class="hint" style="margin-top:10px">
          Collection &amp; payment in person at ${esc(DB.shop.name)}, ${esc(DB.shop.area)}. ${esc(DB.shop.hours)}.
        </div>` : ''}
      </div>

      ${bidPanel}
      ${ownerPanel}

      ${msgs.length && state.role === 'buyer' ? `
      <div class="panel">
        <h3 style="font-size:15px;margin-bottom:10px">Your messages about this item</h3>
        <button class="btn ghost sm" data-act="message-item" data-id="${it.id}">Open conversation (${msgs.length})</button>
      </div>` : ''}
    </div>
  </div>`;
}

function viewSaved(){
  const saved = DB.favourites.map(findItem).filter(Boolean);
  if(!saved.length){
    return `<div class="sec-head" style="margin-top:4px"><h2>Saved items</h2></div>` +
      emptyState('♡','Nothing saved yet','Tap the heart on any listing to keep an eye on it.',
        `<button class="btn" data-act="tab" data-tab="browse" style="max-width:200px;margin:0 auto">Browse listings</button>`);
  }

  return `
  <div class="sec-head" style="margin-top:4px">
    <h2>Saved items</h2><span class="sub">${saved.length} saved</span>
  </div>
  <div class="rows">
    ${saved.map(it=>{
      const st = auctionState(it);
      let status, cls = '';
      if(it.status === 'sold'){ status = 'Sold'; cls='sold'; }
      else if(it.status === 'unavailable'){ status = 'Unavailable'; cls='sold'; }
      else if(it.type === 'auction' && st === 'closed'){
        status = 'Auction closed'; cls='sold';
      } else if(it.type === 'auction'){
        status = `<span data-countdown="${it.endsAt}" data-open="1">—</span>`;
        cls='auction';
      } else status = 'Still available';

      const price = it.type === 'auction'
        ? (topBid(it) ? money(topBid(it)) + ' (bid)' : money(it.startBid) + ' (start)')
        : money(it.price);

      return `<div class="rowitem" data-act="item" data-id="${it.id}">
        <img src="${it.photos[0]||ph(it.category)}" alt="">
        <div class="info">
          <h3>${esc(it.title)}</h3>
          <div class="m ${cls}">${it.type==='auction'?'Auction · ':''}${status}</div>
          <div class="p">${price}</div>
        </div>
        <div class="acts">
          <button class="fav-btn on" style="position:static;width:32px;height:32px" data-act="fav" data-id="${it.id}">${svgIcons.heart}</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

/* =========================================================
   VIEWS — MESSAGES (shared)
   ========================================================= */
function viewMessages(){
  if(state.threadItemId) return viewThread();

  const threads = threadItems();
  const isOwner = state.role === 'owner';

  if(!threads.length){
    return `<div class="sec-head" style="margin-top:4px"><h2>Messages</h2></div>` +
      emptyState('💬', isOwner ? 'No buyer messages yet' : 'No conversations yet',
        isOwner ? 'Messages from buyers about specific items will appear here.'
                : 'Open any listing and tap “Message the shop” to ask about it.');
  }

  return `
  <div class="sec-head" style="margin-top:4px">
    <h2>Messages</h2>
    <span class="sub">${threads.length} conversation${threads.length===1?'':'s'}</span>
  </div>
  <div class="rows">
    ${threads.map(it=>{
      const msgs = threadFor(it.id);
      const last = msgs[msgs.length-1];
      const unread = isOwner
        ? msgs.filter(m=>m.from==='buyer' && !m.readByOwner).length
        : msgs.filter(m=>m.from==='owner' && !m.readByBuyer).length;
      return `<div class="rowitem" data-act="open-thread" data-id="${it.id}">
        <img src="${it.photos[0]||ph(it.category)}" alt="">
        <div class="info">
          <h3>${esc(it.title)}</h3>
          <div class="m" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            ${last.from === 'owner' ? '<strong>Shop: </strong>' : (isOwner ? `<strong>${esc(DB.me.name)}: </strong>` : '')}
            ${esc(last.text.slice(0,60))}${last.text.length>60?'…':''}
          </div>
          <div class="m">${timeAgo(last.at)}</div>
        </div>
        ${unread ? `<span class="unread">${unread}</span>` : ''}
      </div>`;
    }).join('')}
  </div>`;
}

function viewThread(){
  const it = findItem(state.threadItemId);
  if(!it) return emptyState('😕','Item not found','This listing may have been removed.');

  const msgs = threadFor(it.id);
  const isOwner = state.role === 'owner';

  // mark read
  let changed = false;
  msgs.forEach(m=>{
    if(isOwner && m.from==='buyer' && !m.readByOwner){ m.readByOwner = true; changed = true; }
    if(!isOwner && m.from==='owner' && !m.readByBuyer){ m.readByBuyer = true; changed = true; }
  });
  if(changed) save();

  return `
  <button class="back" data-act="close-thread">${svgIcons.back} All messages</button>

  <div class="thread">
    <div class="thread-head">
      <img src="${it.photos[0]||ph(it.category)}" alt="">
      <div style="min-width:0;flex:1">
        <h3 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(it.title)}</h3>
        <div class="s">${isOwner ? 'Buyer: ' + esc(DB.me.name) : esc(DB.shop.name) + ' · ' + esc(DB.shop.area)}</div>
      </div>
      <button class="btn ghost sm" data-act="item" data-id="${it.id}">View item</button>
    </div>

    <div class="msgs" id="msgs">
      ${msgs.length ? msgs.map(m=>{
        const mine = (m.from === 'owner') === isOwner;
        return `<div class="bubble ${mine?'me':'them'}">
          ${esc(m.text)}<span class="t">${timeAgo(m.at)}</span>
        </div>`;
      }).join('') : `<div class="small muted center" style="margin:auto">
        No messages yet. ${isOwner ? 'Reply to the buyer below.' : 'Ask about viewing, collection or payment.'}</div>`}
    </div>

    <form class="composer" data-form="send" data-id="${it.id}">
      <input type="text" name="text" placeholder="${isOwner?'Reply to the buyer…':'Type your message…'}"
             autocomplete="off" required>
      <button class="btn" style="flex:0 0 auto;min-width:0;padding:11px 20px">Send</button>
    </form>
  </div>

  <div class="noticebar" style="margin-top:14px">
    ${svgIcons.info}
    <div>Collection and payment happen in person at the shop — this chat is only for arranging it.
    ${esc(DB.shop.phone)} · ${esc(DB.shop.hours)}</div>
  </div>`;
}

/* =========================================================
   VIEWS — OWNER
   ========================================================= */
function viewOwner(){
  const items = [...DB.items].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
  const live = items.filter(i => i.status === 'available');
  const openAuctions = live.filter(i => i.type==='auction' && auctionState(i)!=='closed');
  const closedAuctions = items.filter(i => i.type==='auction' && auctionState(i)==='closed');
  const closedWithWinner = closedAuctions.filter(i => topBidObj(i));
  const sold = items.filter(i => i.status === 'sold');
  const unread = unreadForOwner();

  const row = it => {
    const st = auctionState(it);
    let statusLine, price;
    if(it.type === 'auction'){
      const w = topBidObj(it);
      price = w ? money(w.amount) : money(it.startBid) + ' start';
      if(it.status === 'sold') statusLine = '<span style="color:var(--danger)">Sold</span>';
      else if(st === 'closed') statusLine = w
        ? `<span style="color:var(--accent-dk);font-weight:700">Closed · winner ${esc(w.bidder)} (${money(w.amount)})</span>`
        : '<span style="color:var(--muted)">Closed · no bids</span>';
      else statusLine = `<span style="color:var(--accent-dk)" data-countdown="${it.endsAt}" data-open="1">—</span> · ${it.bids.length} bid${it.bids.length===1?'':'s'}`;
    } else {
      price = money(it.price);
      statusLine = it.status === 'sold' ? '<span style="color:var(--danger)">Sold</span>'
                 : it.status === 'unavailable' ? '<span style="color:var(--muted)">Unavailable</span>'
                 : '<span style="color:var(--good)">Available</span>';
    }

    const canContactWinner = it.type==='auction' && st==='closed' && topBidObj(it);

    return `<div class="rowitem">
      <img src="${it.photos[0]||ph(it.category)}" alt="">
      <div class="info" data-act="item" data-id="${it.id}" style="cursor:pointer">
        <h3>${esc(it.title)}</h3>
        <div class="m">${statusLine}</div>
        <div class="p">${price}</div>
      </div>
      <div class="acts">
        <button class="btn ghost sm" data-act="edit" data-id="${it.id}">Edit</button>
        ${canContactWinner ? `<button class="btn accent sm" data-act="message-item" data-id="${it.id}">Message winner</button>` : ''}
        ${it.status === 'available'
          ? `<button class="btn ghost sm" data-act="mark-sold" data-id="${it.id}">Mark sold</button>`
          : `<button class="btn ghost sm" data-act="mark-available" data-id="${it.id}">Relist</button>`}
      </div>
    </div>`;
  };

  return `
  <div class="sec-head" style="margin-top:4px">
    <h2>Shop dashboard</h2>
    <span class="sub">${esc(DB.shop.name)} · ${esc(DB.shop.area)}</span>
  </div>

  <div class="stats">
    <div class="stat"><div class="n">${live.length}</div><div class="l">Live listings</div></div>
    <div class="stat warn"><div class="n">${openAuctions.length}</div><div class="l">Auctions open</div></div>
    <div class="stat"><div class="n">${closedWithWinner.length}</div><div class="l">Winners to contact</div></div>
    <div class="stat ${unread?'bad':''}"><div class="n">${unread}</div><div class="l">Unread messages</div></div>
    <div class="stat"><div class="n">${sold.length}</div><div class="l">Sold</div></div>
  </div>

  <div style="margin-top:16px">
    <button class="btn" data-act="new" style="width:100%">+ New listing</button>
  </div>

  ${closedWithWinner.length ? `
  <div class="sec">
    <div class="sec-head"><h2>Auctions closed — winners</h2></div>
    <div class="rows">
      ${closedWithWinner.map(it=>{
        const w = topBidObj(it);
        return `<div class="rowitem">
          <img src="${it.photos[0]||ph(it.category)}" alt="">
          <div class="info" data-act="item" data-id="${it.id}" style="cursor:pointer">
            <h3>${esc(it.title)}</h3>
            <div class="m">Winner: <strong>${esc(w.bidder)}</strong> · ${timeAgo(it.endsAt)}</div>
            <div class="p">${money(w.amount)}</div>
          </div>
          <div class="acts">
            <button class="btn accent sm" data-act="message-item" data-id="${it.id}">Message</button>
            ${it.status==='available' ? `<button class="btn ghost sm" data-act="mark-sold" data-id="${it.id}">Sold</button>` : ''}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>` : ''}

  <div class="sec">
    <div class="sec-head"><h2>Open auctions</h2><span class="sub">Ending soonest first</span></div>
    ${openAuctions.length
      ? `<div class="rows">${openAuctions.sort((a,b)=>new Date(a.endsAt)-new Date(b.endsAt)).map(row).join('')}</div>`
      : `<div class="empty" style="padding:26px"><p>No auctions running right now.</p></div>`}
  </div>

  <div class="sec">
    <div class="sec-head"><h2>All listings</h2><span class="sub">${items.length} total</span></div>
    ${items.length ? `<div class="rows">${items.map(row).join('')}</div>`
      : emptyState('📦','No listings yet','Create your first listing to get started.',
        `<button class="btn" data-act="new" style="max-width:200px;margin:0 auto">+ New listing</button>`)}
  </div>`;
}

function viewEditor(){
  const d = state.draft;
  if(!d) return emptyState('⚠️','Nothing to edit','');

  const isAuction = d.type === 'auction';

  return `
  <button class="back" data-act="editor-cancel">${svgIcons.back} Cancel</button>
  <div class="sec-head" style="margin-top:0">
    <h2>${d.id ? 'Edit listing' : 'New listing'}</h2>
  </div>

  <form class="form" data-form="listing">
    <div class="field">
      <label>Listing type</label>
      <div class="seg">
        <button type="button" data-act="set-type" data-type="fixed" class="${!isAuction?'on':''}">Fixed price</button>
        <button type="button" data-act="set-type" data-type="auction" class="${isAuction?'on auction':''}">Auction</button>
      </div>
      <div class="hint">${isAuction
        ? 'Buyers bid until the closing time you set. Highest bid at closing wins.'
        : 'Buyers see one price. Collection and payment in person.'}</div>
    </div>

    <div class="field">
      <label>Item title</label>
      <input type="text" name="title" value="${esc(d.title)}" placeholder="e.g. Samsung 43&quot; Smart TV" required>
    </div>

    <div class="two">
      <div class="field">
        <label>Category</label>
        <select name="category">
          ${CATS.map(c=>`<option ${d.category===c?'selected':''}>${esc(c)}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>Condition</label>
        <select name="condition">
          ${CONDITIONS.map(c=>`<option ${d.condition===c?'selected':''}>${esc(c)}</option>`).join('')}
        </select>
      </div>
    </div>

    <div class="field">
      <label>Description</label>
      <textarea name="description" placeholder="Describe the item honestly — condition, what's included, anything a buyer should know.">${esc(d.description)}</textarea>
    </div>

    ${isAuction ? `
    <div class="two">
      <div class="field">
        <label>Starting bid (R)</label>
        <input type="number" name="startBid" min="1" step="10" value="${esc(d.startBid)}" placeholder="800" required>
      </div>
      <div class="field">
        <label>Auction closes</label>
        <input type="datetime-local" name="endsAt" value="${esc(d.endsAt)}" required>
        <div class="hint">Must be in the future.</div>
      </div>
    </div>` : `
    <div class="field">
      <label>Asking price (R)</label>
      <input type="number" name="price" min="1" step="10" value="${esc(d.price)}" placeholder="1200" required>
    </div>`}

    <div class="field">
      <label>Photos</label>
      <label class="upload">
        📷 Add photos
        <input type="file" accept="image/*" multiple data-act="photos" style="display:none">
      </label>
      <div class="hint">Photos are the main thing buyers look at. Add 2–4 clear shots.</div>
      <div class="photostrip" id="photoStrip">${photoStripHtml()}</div>
    </div>

    <div class="divider"></div>
    <div class="row">
      <button type="button" class="btn ghost" data-act="editor-cancel" style="flex:1">Cancel</button>
      <button type="submit" class="btn" style="flex:2">${d.id ? 'Save changes' : 'Publish listing'}</button>
    </div>
  </form>`;
}

function photoStripHtml(){
  const d = state.draft;
  if(!d.photos.length){
    return `<div class="small muted" style="padding:8px 0">No photos yet — a placeholder will be used.</div>`;
  }
  return d.photos.map((p,i)=>`
    <div class="ph">
      <img src="${p}" alt="">
      <button type="button" data-act="remove-photo" data-i="${i}" aria-label="Remove photo">×</button>
    </div>`).join('');
}

function viewSettings(){
  return `
  <div class="sec-head" style="margin-top:4px"><h2>Shop settings</h2></div>

  <div class="form">
    <div class="field">
      <label>Your name (shown to buyers in chats)</label>
      <input type="text" data-act="me-name" value="${esc(DB.me.name)}">
    </div>
    <div class="field">
      <label>Shop name</label>
      <input type="text" data-act="shop-name" value="${esc(DB.shop.name)}">
    </div>
    <div class="field">
      <label>Location</label>
      <input type="text" data-act="shop-area" value="${esc(DB.shop.area)}">
    </div>
    <div class="field">
      <label>Contact number</label>
      <input type="text" data-act="shop-phone" value="${esc(DB.shop.phone)}">
    </div>
    <div class="field">
      <label>Opening hours</label>
      <input type="text" data-act="shop-hours" value="${esc(DB.shop.hours)}">
    </div>
    <div class="field" style="margin-bottom:0">
      <label>About the shop</label>
      <textarea data-act="shop-about">${esc(DB.shop.about)}</textarea>
    </div>
  </div>

  <div class="form" style="margin-top:16px">
    <h3 style="font-size:15px;margin-bottom:6px">Demo data</h3>
    <p class="small muted" style="margin:0 0 12px">
      This app stores everything in your browser. Resetting restores the sample listings and clears
      your photos, saved items and messages.
    </p>
    <button class="btn danger" data-act="reset" style="width:100%">Reset all data</button>
  </div>`;
}

/* =========================================================
   SHELL
   ========================================================= */
function topbar(){
  const isOwner = state.role === 'owner';
  return `
  <header class="topbar">
    <div class="topbar-in">
      <div class="brand">
        <span class="logo">${svgIcons.tag}</span>
        <span class="brand-txt">
          <strong>${esc(DB.shop.name)}</strong>
          <small>${esc(DB.shop.area)}</small>
        </span>
      </div>
      <div class="role-switch">
        <button class="${!isOwner?'on':''}" data-act="role" data-role="buyer">Shopping</button>
        <button class="${isOwner?'on':''}" data-act="role" data-role="owner">Shop owner</button>
      </div>
    </div>
  </header>`;
}

function tabbar(){
  const isOwner = state.role === 'owner';
  const unread = isOwner ? unreadForOwner() : unreadForBuyer();

  const tabs = isOwner
    ? [['owner','Dashboard',svgIcons.grid],
       ['messages','Messages',svgIcons.chat],
       ['settings','Settings',svgIcons.gear]]
    : [['home','Home',svgIcons.home],
       ['browse','Browse',svgIcons.search],
       ['saved','Saved',svgIcons.heart],
       ['messages','Messages',svgIcons.chat]];

  return `<nav class="tabbar"><div class="tabbar-in">
    ${tabs.map(([id,label,icon])=>{
      const on = state.tab === id || (id==='browse' && state.tab==='item');
      const badge = (id==='messages' && unread) ? `<span class="dot">${unread}</span>` : '';
      return `<button class="${on?'on':''}" data-act="tab" data-tab="${id}">${icon}<span>${label}</span>${badge}</button>`;
    }).join('')}
  </div></nav>`;
}

function viewHtml(){
  switch(state.tab){
    case 'home':     return viewHome();
    case 'browse':   return viewBrowse();
    case 'item':     return viewItem();
    case 'saved':    return viewSaved();
    case 'messages': return viewMessages();
    case 'owner':    return viewOwner();
    case 'editor':   return viewEditor();
    case 'settings': return viewSettings();
    default:         return viewHome();
  }
}

function render(){
  const isOwner = state.role === 'owner';
  const showFab = isOwner && state.tab === 'owner';

  document.getElementById('app').innerHTML = `
    ${topbar()}
    <main class="main">${viewHtml()}</main>
    ${showFab ? `<button class="fab" data-act="new" aria-label="New listing">+</button>` : ''}
    ${tabbar()}
  `;

  tick();

  const msgs = document.getElementById('msgs');
  if(msgs) msgs.scrollTop = msgs.scrollHeight;
}

/* =========================================================
   COUNTDOWN TICKER
   ========================================================= */
let ticking = false;
function tick(){
  if(ticking) return;
  ticking = true;
  let flip = false;

  $$('[data-countdown]').forEach(el=>{
    const iso = el.dataset.countdown;
    const left = new Date(iso).getTime() - Date.now();
    el.textContent = countdownText(left);
    el.classList.toggle('ended', left <= 0);
    if(el.dataset.open === '1' && left <= 0) flip = true;
  });

  ticking = false;
  if(flip) render();
}
setInterval(tick, 1000);

/* =========================================================
   ACTIONS
   ========================================================= */
function goTab(tab){
  if(state.tab === 'item') state.backTab = state.tab;
  state.tab = tab;
  state.threadItemId = null;
  window.scrollTo({top:0});
  render();
}

function goItem(id){
  if(state.tab !== 'item') state.backTab = state.tab;
  state.tab = 'item';
  state.itemId = id;
  state.gallery = 0;
  window.scrollTo({top:0});
  render();
}

function toggleFav(id){
  const i = DB.favourites.indexOf(id);
  if(i >= 0){ DB.favourites.splice(i,1); toast('Removed from saved'); }
  else { DB.favourites.push(id); toast('Saved to favourites ♥'); }
  save();
  render();
}

function openThread(itemId){
  state.threadItemId = itemId;
  if(state.tab !== 'messages'){ state.backTab = state.tab; state.tab = 'messages'; }
  window.scrollTo({top:0});
  render();
}

function openEditor(id){
  if(id){
    const it = findItem(id);
    state.draft = {
      id: it.id, title: it.title, description: it.description, condition: it.condition,
      category: it.category, type: it.type, price: it.price ?? '',
      startBid: it.startBid ?? '', endsAt: it.endsAt ? toLocalInput(it.endsAt) : toLocalInput(new Date(Date.now()+2*DAY).toISOString()),
      photos: [...(it.photos||[])]
    };
  } else {
    state.draft = {
      id:null, title:'', description:'', condition:'Good', category:'Electronics',
      type:'fixed', price:'', startBid:'',
      endsAt: toLocalInput(new Date(Date.now()+2*DAY).toISOString()), photos:[]
    };
  }
  if(state.tab !== 'editor') state.backTab = state.tab;
  state.tab = 'editor';
  window.scrollTo({top:0});
  render();
}

function readImage(file){
  return new Promise(resolve=>{
    const fr = new FileReader();
    fr.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        const MAX = 900;
        let w = img.width, h = img.height;
        if(w > MAX){ h = Math.round(h * MAX / w); w = MAX; }
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        try { resolve(c.toDataURL('image/jpeg', 0.72)); }
        catch(e){ resolve(null); }
      };
      img.onerror = ()=> resolve(null);
      img.src = fr.result;
    };
    fr.onerror = ()=> resolve(null);
    fr.readAsDataURL(file);
  });
}

/* ---------- toasts ---------- */
let toastTimer;
function toast(msg){
  let el = $('.toast');
  if(!el){ el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  requestAnimationFrame(()=> el.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=> el.remove(), 300);
  }, 2200);
}

/* =========================================================
   EVENT DELEGATION
   ========================================================= */
document.addEventListener('click', e=>{
  const t = e.target.closest('[data-act]');
  if(!t) return;
  const act = t.dataset.act;
  const id = t.dataset.id;

  // let native selects / file inputs behave
  if(act === 'photos') return;

  switch(act){
    case 'tab':
      e.preventDefault();
      goTab(t.dataset.tab);
      break;

    case 'role': {
      state.role = t.dataset.role;
      state.threadItemId = null;
      state.tab = state.role === 'owner' ? 'owner' : 'home';
      window.scrollTo({top:0});
      render();
      break;
    }

    case 'item':
      e.preventDefault();
      goItem(id);
      break;

    case 'back':
      e.preventDefault();
      goTab(state.backTab || (state.role==='owner' ? 'owner' : 'home'));
      break;

    case 'fav':
      e.preventDefault();
      e.stopPropagation();
      toggleFav(id);
      break;

    case 'cat':
      e.preventDefault();
      state.category = t.dataset.cat;
      if(state.tab !== 'browse' && state.tab !== 'home') state.tab = 'browse';
      render();
      break;

    case 'clear-filters':
      state.category = 'All'; state.type = 'All'; state.q = ''; state.sort = 'new';
      render();
      break;

    case 'gallery':
      state.gallery = Number(t.dataset.i);
      render();
      break;

    case 'message-item':
      e.preventDefault();
      openThread(id);
      break;

    case 'open-thread':
      openThread(id);
      break;

    case 'close-thread':
      state.threadItemId = null;
      render();
      break;

    case 'new':
      openEditor(null);
      break;

    case 'edit':
      e.preventDefault();
      openEditor(id);
      break;

    case 'editor-cancel':
      e.preventDefault();
      state.draft = null;
      goTab(state.role === 'owner' ? 'owner' : 'home');
      break;

    case 'set-type': {
      captureForm();
      state.draft.type = t.dataset.type;
      render();
      break;
    }

    case 'remove-photo': {
      const i = Number(t.dataset.i);
      state.draft.photos.splice(i,1);
      const strip = document.getElementById('photoStrip');
      if(strip) strip.innerHTML = photoStripHtml();
      break;
    }

    case 'mark-sold': {
      const it = findItem(id);
      if(!it) break;
      it.status = 'sold';
      if(it.type === 'auction'){
        const w = topBidObj(it);
        if(w) it.soldTo = w.bidder;
      }
      save(); toast('Marked as sold'); render();
      break;
    }

    case 'mark-available': {
      const it = findItem(id);
      if(!it) break;
      it.status = 'available';
      delete it.soldTo;
      save(); toast('Listing is live again'); render();
      break;
    }

    case 'delete': {
      const it = findItem(id);
      if(!it) break;
      if(!confirm(`Delete “${it.title}”? This cannot be undone.`)) break;
      DB.items = DB.items.filter(x => x.id !== id);
      DB.favourites = DB.favourites.filter(x => x !== id);
      DB.messages = DB.messages.filter(m => m.itemId !== id);
      save(); toast('Listing deleted');
      goTab(state.role === 'owner' ? 'owner' : 'home');
      break;
    }

    case 'reset': {
      if(!confirm('Reset all data back to the sample listings?')) return;
      localStorage.removeItem(KEY);
      load();
      state.role = 'owner'; state.tab = 'owner'; state.threadItemId = null;
      save(); toast('Data reset'); render();
      break;
    }
  }
});

/* select filters */
document.addEventListener('change', e=>{
  const t = e.target.closest('[data-act]');
  if(!t) return;

  if(t.dataset.act === 'filter-type'){ state.type = t.value; render(); }
  if(t.dataset.act === 'sort'){ state.sort = t.value; render(); }

  if(t.dataset.act === 'photos'){
    const files = [...(t.files || [])].slice(0, 5);
    if(!files.length) return;
    Promise.all(files.map(readImage)).then(imgs=>{
      state.draft.photos.push(...imgs.filter(Boolean));
      const strip = document.getElementById('photoStrip');
      if(strip) strip.innerHTML = photoStripHtml();
      t.value = '';
    });
  }
});

/* shop settings live-save */
document.addEventListener('input', e=>{
  const t = e.target.closest('[data-act]');
  if(!t) return;
  const map = {
    'me-name':'me.name','shop-name':'shop.name','shop-area':'shop.area',
    'shop-phone':'shop.phone','shop-hours':'shop.hours','shop-about':'shop.about'
  };
  const path = map[t.dataset.act];
  if(!path) return;
  const [a,b] = path.split('.');
  DB[a][b] = t.value;
  save();
});

/* live search on browse */
let searchTimer;
document.addEventListener('input', e=>{
  if(e.target.id !== 'browseSearch') return;
  state.q = e.target.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(()=>{
    const results = visibleItems();
    const box = document.getElementById('results');
    if(!box) return;
    box.innerHTML = results.length
      ? `<div class="grid">${results.map(itemCard).join('')}</div>`
      : emptyState('🔍','No items found','Try a different search word or clear the filters.',
          `<button class="btn ghost" data-act="clear-filters" style="max-width:220px">Clear filters</button>`);
    tick();
  }, 180);
});

/* forms */
document.addEventListener('submit', e=>{
  const form = e.target.closest('[data-form]');
  if(!form) return;
  e.preventDefault();
  const kind = form.dataset.form;

  /* ---- search ---- */
  if(kind === 'search'){
    state.q = form.q.value;
    state.tab = 'browse';
    window.scrollTo({top:0});
    render();
    return;
  }

  /* ---- bid ---- */
  if(kind === 'bid'){
    const it = findItem(form.dataset.id);
    if(!it) return;
    const amount = Math.round(Number(form.amount.value));
    const min = minNextBid(it);
    if(!amount || amount < min){ toast(`Bid must be at least ${money(min)}`); return; }
    if(auctionState(it) === 'closed'){ toast('This auction has closed'); render(); return; }

    it.bids.push({ amount, bidder: DB.me.name, at: new Date().toISOString() });
    save();
    toast(`Bid placed: ${money(amount)}`);
    render();
    return;
  }

  /* ---- send message ---- */
  if(kind === 'send'){
    const text = form.text.value.trim();
    if(!text) return;
    DB.messages.push({
      id: uid('m'),
      itemId: form.dataset.id,
      from: state.role === 'owner' ? 'owner' : 'buyer',
      text,
      at: new Date().toISOString(),
      readByOwner: state.role === 'owner',
      readByBuyer: state.role === 'buyer'
    });
    save();
    form.text.value = '';
    render();
    return;
  }

  /* ---- create / edit listing ---- */
  if(kind === 'listing'){
    captureForm();
    const d = state.draft;
    if(!d.title.trim()){ toast('Please add a title'); return; }

    if(d.type === 'auction'){
      if(!d.startBid || Number(d.startBid) <= 0){ toast('Please set a starting bid'); return; }
      if(!d.endsAt){ toast('Please set a closing time'); return; }
      if(new Date(d.endsAt).getTime() <= Date.now()){ toast('Closing time must be in the future'); return; }
    } else {
      if(!d.price || Number(d.price) <= 0){ toast('Please set an asking price'); return; }
    }

    const photos = d.photos.length ? d.photos : [ph(d.category)];

    if(d.id){
      const it = findItem(d.id);
      Object.assign(it, {
        title: d.title.trim(), description: d.description.trim(),
        category: d.category, condition: d.condition, type: d.type,
        photos
      });
      if(d.type === 'auction'){
        it.startBid = Number(d.startBid);
        it.endsAt = new Date(d.endsAt).toISOString();
        delete it.price;
        if(it.status === 'sold' && auctionState(it) !== 'closed') it.status = 'available';
      } else {
        it.price = Number(d.price);
        delete it.startBid;
        it.bids = [];
        delete it.endsAt;
      }
      save(); toast('Listing updated');
    } else {
      const it = {
        id: uid('i'), title: d.title.trim(), description: d.description.trim(),
        category: d.category, condition: d.condition, type: d.type,
        photos, status:'available', bids:[],
        createdAt: new Date().toISOString()
      };
      if(d.type === 'auction'){
        it.startBid = Number(d.startBid);
        it.endsAt = new Date(d.endsAt).toISOString();
      } else {
        it.price = Number(d.price);
      }
      DB.items.unshift(it);
      save(); toast('Listing published');
    }

    state.draft = null;
    goTab(state.role === 'owner' ? 'owner' : 'home');
    return;
  }
});

/* keep editor draft in sync when switching type / re-rendering */
function captureForm(){
  const f = document.querySelector('[data-form="listing"]');
  if(!f || !state.draft) return;
  if(f.title)       state.draft.title = f.title.value;
  if(f.description) state.draft.description = f.description.value;
  if(f.category)    state.draft.category = f.category.value;
  if(f.condition)   state.draft.condition = f.condition.value;
  if(f.price)       state.draft.price = f.price.value;
  if(f.startBid)    state.draft.startBid = f.startBid.value;
  if(f.endsAt)      state.draft.endsAt = f.endsAt.value;
}

/* =========================================================
   BOOT
   ========================================================= */
load();
render();
</script>
</body>
</html>
