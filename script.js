/* ===== Tenure — site script =====
   To set prices, fill in the `price` field for each product below (e.g. price: 1850).
   Leave it as null to show "Price coming soon". */

const PRODUCTS = [
  { id:'overcoat', name:'The Tenure Overcoat', cat:'Outerwear', colour:'Camel', hex:'#B08A5E', fabric:'Wool-cashmere, 80/20', price:null,
    img:'images/products/overcoat.jpg', look:'images/looks/look-overcoat.jpg', sizes:'suit',
    desc:'Double-breasted with a suppressed waist that flares into the skirt. Soft natural shoulder, hand-finished lapels. The piece the house is named for.' },
  { id:'envoy-suit', name:'The Envoy Suit', cat:'Tailoring', colour:'Midnight navy', hex:'#1F2A3D', fabric:'Super 120s wool', price:null,
    img:'images/products/envoy-suit.jpg', look:'images/looks/look-envoy.jpg', sizes:'suit',
    desc:'Two-button with a sharply suppressed waist, high armhole and slim notch lapel. Half-canvassed front, working cuffs, pick-stitched edges. Built for the entrance.' },
  { id:'ike-jacket', name:'The Ike Jacket', cat:'Outerwear', colour:'Black', hex:'#1E1D1B', fabric:'Heavy cotton twill', price:null,
    img:'images/products/ike-jacket.jpg', look:'images/looks/look-ike.jpg', sizes:'alpha',
    desc:'A cropped Eisenhower work jacket, tailored: back darts and a waistband with button side tabs that cinch it to your waist. Point collar, two-way zip, two slant side pockets.' },
  { id:'harrington', name:'The Suede Harrington', cat:'Outerwear', colour:'Tobacco', hex:'#8B5E3C', fabric:'Goat suede, silk lining', price:null,
    img:'images/products/harrington.jpg', look:'images/looks/look-harrington-villa.jpg', sizes:'alpha',
    desc:'Shaped through the waist and cropped to sit at the belt line. Funnel collar, two-way zip, silk-lined. Effortless, a little dangerous.' },
  { id:'field-jacket', name:'The Field Jacket', cat:'Outerwear', colour:'Olive', hex:'#5E6247', fabric:'Waxed cotton twill', price:null,
    img:'images/products/field-jacket.jpg', look:'images/looks/look-field.jpg', sizes:'alpha',
    desc:'Four-pocket field jacket with an internal drawcord that cinches the waist. Stand collar, set-in sleeves, tailored shoulder. Made for long weekends away.' },
  { id:'oxford', name:'The Oxford', cat:'Shirts & Knits', colour:'Pale blue', hex:'#B9CBE0', fabric:'Heavy cotton oxford', price:null,
    img:'images/products/oxford.jpg', look:'images/looks/look-arrival.jpg', sizes:'alpha',
    desc:'Darted back for a tapered waist, so it tucks clean with no billowing. Button-down collar, single-needle stitching, mother-of-pearl buttons.' },
  { id:'harbour-polo', name:'The Harbour Polo', cat:'Shirts & Knits', colour:'Cream', hex:'#EFE6D2', fabric:'Cashmere-cotton knit', price:null,
    img:'images/products/harbour-polo.jpg', look:'images/looks/look-harbour.jpg', sizes:'alpha',
    desc:'Fully-fashioned knit, shaped through the waist so it sits close, never boxy. Two-button placket. Wears under a blazer or alone on a boat.' },
  { id:'heritage-cable', name:'The Heritage Cable', cat:'Shirts & Knits', colour:'Oatmeal', hex:'#D9CBB2', fabric:'Merino lambswool', price:null,
    img:'images/products/heritage-cable.jpg', look:'images/looks/look-weekend.jpg', sizes:'alpha',
    desc:'Heavyweight cable-knit crewneck, cut trim through the body with a fitted rib hem. Thrown over an oxford, it is the off-duty uniform.' },
  { id:'tee-white', name:'The Tenure Tee', cat:'Tees', colour:'White', hex:'#FBFAF7', fabric:'Heavyweight Supima cotton jersey', price:null,
    img:'images/products/tee-white.jpg', look:'images/looks/look-harrington-studio.jpg', sizes:'alpha',
    desc:'The base layer of everything, cut like a shirt: fitted shoulder, tapered waist, sleeves that hug the arm. A neck rib that holds its shape wash after wash.' },
  { id:'tee-grey', name:'The Tenure Tee', cat:'Tees', colour:'Heather grey', hex:'#9B9B98', fabric:'Heavyweight Supima cotton jersey', price:null,
    img:'images/products/tee-grey.jpg', look:null, sizes:'alpha',
    desc:'The base layer of everything, cut like a shirt: fitted shoulder, tapered waist, sleeves that hug the arm. A neck rib that holds its shape wash after wash.' },
  { id:'tee-navy', name:'The Tenure Tee', cat:'Tees', colour:'Navy', hex:'#22304A', fabric:'Heavyweight Supima cotton jersey', price:null,
    img:'images/products/tee-navy.jpg', look:null, sizes:'alpha',
    desc:'The base layer of everything, cut like a shirt: fitted shoulder, tapered waist, sleeves that hug the arm. A neck rib that holds its shape wash after wash.' },
  { id:'tee-black', name:'The Tenure Tee', cat:'Tees', colour:'Black', hex:'#1E1D1B', fabric:'Heavyweight Supima cotton jersey', price:null,
    img:'images/products/tee-black.jpg', look:'images/looks/look-ike.jpg', sizes:'alpha',
    desc:'The base layer of everything, cut like a shirt: fitted shoulder, tapered waist, sleeves that hug the arm. A neck rib that holds its shape wash after wash.' },
  { id:'pleated-trouser', name:'The Pleated Trouser', cat:'Trousers', colour:'Mid grey', hex:'#8E8C88', fabric:'Wool flannel', price:null,
    img:'images/products/pleated-trouser.jpg', look:'images/looks/look-overcoat.jpg', sizes:'waist',
    desc:'High rise with side adjusters instead of belt loops, so the waist is clean and exact. Single forward pleat, pressed crease, tapered to the ankle.' },
  { id:'work-trouser', name:'The Work Trouser', cat:'Trousers', colour:'Black', hex:'#1E1D1B', fabric:'Heavy cotton twill', price:null,
    img:'images/products/work-trouser.jpg', look:'images/looks/look-harrington-studio.jpg', sizes:'waist',
    desc:'The everyday work pant, re-cut by a tailor: a shaped waistband with an extended tab, a mid rise and a clean straight leg with a crease that stays.' },
  { id:'loafer', name:'The Tenure Loafer', cat:'Shoes', colour:'Chocolate', hex:'#4A3426', fabric:'Calf suede, leather sole', price:null,
    img:'images/products/loafer.jpg', look:'images/looks/look-arrival.jpg', sizes:'shoe',
    desc:'Hand-stitched penny loafer on a Blake-stitched leather sole, built on a slim last. Worn with a suit, with flannel, without socks.' }
];

const SIZE_SETS = {
  alpha:['XS','S','M','L','XL','XXL'],
  suit:['36','38','40','42','44','46'],
  waist:['28','30','32','34','36','38'],
  shoe:['7','8','9','10','11','12']
};
const CATEGORIES = ['All','Outerwear','Tailoring','Shirts & Knits','Tees','Trousers','Shoes'];
const ESSENTIALS = ['overcoat','envoy-suit','harrington','heritage-cable','oxford','ike-jacket','pleated-trouser','loafer'];

const $ = (s, el=document) => el.querySelector(s);
const byId = id => PRODUCTS.find(p => p.id === id);
const fmtPrice = p => p.price == null ? 'Price coming soon' : '$' + p.price.toLocaleString('en-US');
const displayName = p => p.cat === 'Tees' ? `${p.name}, ${p.colour}` : p.name;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- Product cards ---------- */
function cardHTML(p){
  const alt = p.look ? `<img class="alt" src="${p.look}" alt="" loading="lazy">` : '';
  return `<button class="card" data-open="${p.id}" aria-label="${esc(displayName(p))}, ${esc(p.colour)}. View details">
    <div class="card-media">
      <img src="${p.img}" alt="${esc(displayName(p))} in ${esc(p.colour.toLowerCase())}" loading="lazy">
      ${alt}
      ${p.look ? '<span class="card-tag">Shop the look</span>' : ''}
    </div>
    <span class="card-name">${esc(p.name)}</span>
    <span class="card-meta"><span><span class="swatch" style="background:${p.hex}"></span>${esc(p.colour)}</span><span>${fmtPrice(p)}</span></span>
  </button>`;
}

function renderCarousel(){
  $('#carousel').innerHTML = ESSENTIALS.map(id => cardHTML(byId(id))).join('');
}

let activeCat = 'All';
try { activeCat = sessionStorage.getItem('tenure-cat') || 'All'; } catch(e){}

function renderFilters(){
  $('#filters').innerHTML = CATEGORIES.map(c =>
    `<button class="filter" data-cat="${esc(c)}" aria-pressed="${c===activeCat}">${esc(c)}</button>`).join('');
}
function renderGrid(){
  const list = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
  $('#productGrid').innerHTML = list.map(cardHTML).join('');
  $('#shopCount').textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;
}
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('.filter'); if(!b) return;
  activeCat = b.dataset.cat;
  try { sessionStorage.setItem('tenure-cat', activeCat); } catch(e){}
  renderFilters(); renderGrid();
});

/* ---------- Carousel arrows ---------- */
function scrollCarousel(dir){
  const c = $('#carousel'); const card = c.querySelector('.card');
  const step = card ? card.getBoundingClientRect().width + 20 : 300;
  c.scrollBy({ left: dir * step * 2, behavior:'smooth' });
}
$('#carPrev').addEventListener('click', () => scrollCarousel(-1));
$('#carNext').addEventListener('click', () => scrollCarousel(1));

/* ---------- Product dialog ---------- */
const dialog = $('#productDialog'), overlay = $('#overlay');
let current = null, selectedSize = null, lastFocus = null;

function openProduct(id){
  const p = byId(id); if(!p) return;
  current = p; selectedSize = null; lastFocus = document.activeElement;
  closeSearch();
  $('#dlgCat').textContent = p.cat;
  $('#dlgName').textContent = displayName(p);
  $('#dlgPrice').textContent = fmtPrice(p);
  $('#dlgDesc').textContent = p.desc;
  $('#dlgFabric').textContent = p.fabric;
  $('#dlgColour').innerHTML = `<span class="swatch" style="background:${p.hex}"></span>${esc(p.colour)}`;
  $('#dlgMsg').textContent = '';
  const imgs = [{src:p.img, alt:`${displayName(p)}, product view`}];
  if(p.look) imgs.push({src:p.look, alt:`${displayName(p)}, styled in a look`});
  setDialogImage(imgs[0]);
  $('#dlgThumbs').innerHTML = imgs.length > 1 ? imgs.map((im,i) =>
    `<button data-i="${i}" aria-label="Show ${i===0?'product view':'styled look'}" aria-pressed="${i===0}"><img src="${im.src}" alt=""></button>`).join('') : '';
  $('#dlgThumbs').onclick = e => {
    const b = e.target.closest('button'); if(!b) return;
    setDialogImage(imgs[+b.dataset.i]);
    [...$('#dlgThumbs').children].forEach(x => x.setAttribute('aria-pressed', x === b));
  };
  $('#sizeOptions').innerHTML = SIZE_SETS[p.sizes].map(s =>
    `<button type="button" aria-pressed="false" data-size="${s}">${s}</button>`).join('');
  overlay.hidden = false; dialog.hidden = false;
  document.body.style.overflow = 'hidden';
  $('#dialogClose').focus();
}
function setDialogImage(im){ const el = $('#dlgImg'); el.src = im.src; el.alt = im.alt; }
function closeProduct(){
  dialog.hidden = true;
  if($('#bagDrawer').hidden) { overlay.hidden = true; document.body.style.overflow = ''; }
  if(lastFocus) lastFocus.focus();
}
$('#sizeOptions').addEventListener('click', e => {
  const b = e.target.closest('button'); if(!b) return;
  selectedSize = b.dataset.size;
  [...$('#sizeOptions').children].forEach(x => x.setAttribute('aria-pressed', x === b));
  $('#dlgMsg').textContent = '';
});
$('#addToBag').addEventListener('click', () => {
  if(!selectedSize){ $('#dlgMsg').textContent = 'Please choose a size.'; return; }
  addToBag(current.id, selectedSize);
  closeProduct();
  toast(`${displayName(current)} (${selectedSize}) added to your bag`);
});
$('#dialogClose').addEventListener('click', closeProduct);

document.addEventListener('click', e => {
  const t = e.target.closest('[data-open]');
  if(t){ e.preventDefault(); openProduct(t.dataset.open); }
});

/* ---------- Bag ---------- */
let bag = [];
try { bag = JSON.parse(localStorage.getItem('tenure-bag') || '[]'); } catch(e){ bag = []; }
function saveBag(){ try { localStorage.setItem('tenure-bag', JSON.stringify(bag)); } catch(e){} }
function addToBag(id, size){
  const hit = bag.find(i => i.id === id && i.size === size);
  hit ? hit.qty++ : bag.push({id, size, qty:1});
  saveBag(); renderBag();
}
function renderBag(){
  const count = bag.reduce((n,i) => n + i.qty, 0);
  $('#bagCount').textContent = count;
  $('#bagBtn').setAttribute('aria-label', `Shopping bag, ${count} ${count===1?'item':'items'}`);
  $('#bagEmpty').hidden = count > 0;
  $('#bagItems').innerHTML = bag.map((i,idx) => {
    const p = byId(i.id); if(!p) return '';
    return `<li class="bag-item">
      <img src="${p.img}" alt="">
      <div><p class="bi-name">${esc(displayName(p))}</p><p>${esc(p.colour)} · Size ${esc(i.size)} · Qty ${i.qty}</p><p>${fmtPrice(p)}</p></div>
      <button class="text-link" data-remove="${idx}" aria-label="Remove ${esc(displayName(p))}">Remove</button>
    </li>`;
  }).join('');
}
$('#bagItems').addEventListener('click', e => {
  const b = e.target.closest('[data-remove]'); if(!b) return;
  bag.splice(+b.dataset.remove, 1); saveBag(); renderBag();
});
function openBag(){ closeSearch(); $('#bagDrawer').hidden = false; overlay.hidden = false; document.body.style.overflow='hidden'; $('#bagClose').focus(); }
function closeBag(){ $('#bagDrawer').hidden = true; if(dialog.hidden){ overlay.hidden = true; document.body.style.overflow=''; } $('#bagBtn').focus(); }
$('#bagBtn').addEventListener('click', openBag);
$('#bagClose').addEventListener('click', closeBag);
overlay.addEventListener('click', () => { if(!dialog.hidden) closeProduct(); if(!$('#bagDrawer').hidden) closeBag(); });
document.addEventListener('keydown', e => {
  if(e.key !== 'Escape') return;
  if(!dialog.hidden) closeProduct();
  else if(!$('#bagDrawer').hidden) closeBag();
  else if(!$('#searchPanel').hidden) closeSearch();
});

/* ---------- Search ---------- */
function closeSearch(){ $('#searchPanel').hidden = true; $('#searchBtn').setAttribute('aria-expanded','false'); updateHeader(); }
$('#searchBtn').setAttribute('aria-expanded','false');
$('#searchBtn').addEventListener('click', () => {
  const p = $('#searchPanel'); p.hidden = !p.hidden;
  $('#searchBtn').setAttribute('aria-expanded', String(!p.hidden));
  updateHeader();
  if(!p.hidden){ $('#searchInput').value=''; runSearch(''); $('#searchInput').focus(); }
});
function runSearch(q){
  q = q.trim().toLowerCase();
  const res = q ? PRODUCTS.filter(p => [p.name,p.cat,p.colour,p.fabric].join(' ').toLowerCase().includes(q)) : [];
  $('#searchResults').innerHTML = !q ? '' : res.length
    ? res.map(p => `<button data-open="${p.id}">${esc(displayName(p))}</button>`).join('')
    : '<p class="none">No pieces match that search.</p>';
}
$('#searchInput').addEventListener('input', e => runSearch(e.target.value));

/* ---------- Header + mobile menu ---------- */
const header = $('#siteHeader');
function updateHeader(){
  const solid = window.scrollY > window.innerHeight * 0.6 || !$('#searchPanel').hidden || !$('#mobileMenu').hidden;
  header.classList.toggle('solid', solid);
}
window.addEventListener('scroll', updateHeader, {passive:true});
$('#menuToggle').addEventListener('click', () => {
  const m = $('#mobileMenu'); m.hidden = !m.hidden;
  $('#menuToggle').setAttribute('aria-expanded', String(!m.hidden));
  header.classList.toggle('menu-open', !m.hidden);
  updateHeader();
});
$('#mobileMenu').addEventListener('click', e => {
  if(e.target.closest('a')){ $('#mobileMenu').hidden = true; $('#menuToggle').setAttribute('aria-expanded','false'); header.classList.remove('menu-open'); updateHeader(); }
});

/* ---------- Newsletter ---------- */
$('#newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#newsEmail').value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  $('#newsMsg').textContent = ok
    ? 'Thank you. Sign-ups open when the store launches, so your email has not been stored yet.'
    : 'Please enter a valid email address.';
  if(ok) $('#newsEmail').value = '';
});

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---------- Reveal on scroll ---------- */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
}, {threshold:.12}) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

/* ---------- Init ---------- */
renderCarousel(); renderFilters(); renderGrid(); renderBag(); updateHeader();
