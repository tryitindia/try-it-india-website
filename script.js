const products=[{"name": "Armchair With Cushion", "code": "TII-AC-001", "images": ["catalog-01.jpg", "catalog-05.jpg"], "cat": "seating dining", "desc": "A refined outdoor armchair with a comfortable cushion and a woven profile, suited to dining and relaxed outdoor spaces."}, {"name": "Outdoor Dining Collection", "code": "TII-DS-002", "images": ["catalog-06.jpg"], "cat": "dining featured", "desc": "A complete outdoor dining setting designed for terraces, gardens, hospitality and open-air gatherings."}, {"name": "Beachside Lounge Set", "code": "TII-LS-003", "images": ["catalog-08.jpg"], "cat": "lounge featured", "desc": "A relaxed lounge composition created for resort, poolside and premium outdoor settings."}, {"name": "Outdoor Bar Collection", "code": "TII-BR-004", "images": ["catalog-02.webp"], "cat": "dining featured", "desc": "A compact bar-height outdoor setting for entertaining, hospitality and contemporary terraces."}, {"name": "Woven Bar Stool", "code": "TII-BS-005", "images": ["catalog-09.webp", "catalog-11.webp"], "cat": "seating dining", "desc": "A woven bar stool with a clean elevated frame, designed for outdoor counters and bar settings."}, {"name": "Curved Outdoor Sofa", "code": "TII-SF-006", "images": ["catalog-10.jpg", "catalog-12.jpg"], "cat": "lounge featured", "desc": "A sculptural outdoor sofa with a generous silhouette and soft cushions for relaxed seating."}, {"name": "Classic Outdoor Chair", "code": "TII-CH-007", "images": ["catalog-13.webp"], "cat": "seating", "desc": "A clean, versatile outdoor chair that works naturally across dining, balcony and hospitality spaces."}, {"name": "Woven Outdoor Sofa", "code": "TII-SF-008", "images": ["catalog-14.jpg"], "cat": "lounge", "desc": "A warm woven-frame sofa with a generous cushion, designed for comfortable outdoor living."}, {"name": "Woven Outdoor Armchair", "code": "TII-AC-009", "images": ["catalog-15.jpg"], "cat": "seating featured", "desc": "A compact armchair combining a woven body with a comfortable upholstered seat and back."}, {"name": "Outdoor Lounge Chair", "code": "TII-LC-010", "images": ["catalog-16.jpg"], "cat": "lounge seating", "desc": "A relaxed lounge chair with a broad cushioned seat, ideal for patios, terraces and resorts."}, {"name": "Adjustable Sun Lounger", "code": "TII-SL-011", "images": ["catalog-17.jpg"], "cat": "lounge featured", "desc": "A clean-lined sun lounger for poolside and resort environments, designed around relaxed outdoor use."}, {"name": "Outdoor Storage Box", "code": "TII-ST-012", "images": ["catalog-03.jpg"], "cat": "storage featured", "desc": "A woven outdoor storage box for cushions, accessories and everyday outdoor organisation."}, {"name": "Round Woven Lounge Chair", "code": "TII-RL-013", "images": ["catalog-04.jpg"], "cat": "lounge seating", "desc": "A rounded woven lounge chair with soft cushions, made for relaxed premium outdoor settings."}, {"name": "Coastal Lounge Dining Set", "code": "TII-CD-014", "images": ["catalog-07.webp"], "cat": "dining lounge", "desc": "A coastal outdoor dining composition with a light, refined profile for resort and leisure spaces."},{"name":"Bar Stool Without Arms","code":"TII-BS-015","images":["bar-stool-01.jpg"],"cat":"seating dining bar featured","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Bar Stool With Cushion","code":"TII-BS-016","images":["bar-stool-02.jpg"],"cat":"seating dining bar","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Woven Bar Stool With Cushion","code":"TII-BS-017","images":["bar-stool-03.jpg"],"cat":"seating dining bar","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Bar Stool With Arms","code":"TII-BS-018","images":["bar-stool-04.jpg"],"cat":"seating dining bar featured","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Classic Bar Stool","code":"TII-BS-019","images":["bar-stool-05.jpg"],"cat":"seating dining bar","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Woven Back Bar Stool","code":"TII-BS-020","images":["bar-stool-06.jpg"],"cat":"seating dining bar","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Tall Woven Bar Stool","code":"TII-BS-021","images":["bar-stool-07.jpg"],"cat":"seating dining bar featured","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},{"name":"Woven Bar Stool With Arms","code":"TII-BS-022","images":["bar-stool-08.jpg"],"cat":"seating dining bar","desc":"A premium outdoor bar stool with a clean woven profile, suited to bars, caf\u00e9s, terraces and hospitality spaces."},
{"name":"Premium Garden Lounge Set","code":"TII-LS-023","images":["lounge-01.jpeg"],"cat":"lounge seating featured","desc":"A sophisticated outdoor lounge arrangement designed for premium gardens, patios and resort spaces."},
{"name":"Cushioned Outdoor Armchair","code":"TII-AC-024","images":["lounge-02.jpeg","lounge-11.jpeg"],"cat":"seating lounge","desc":"A refined cushioned armchair with a modern outdoor frame, ideal for terraces and relaxed seating."},
{"name":"Contemporary Patio Lounge","code":"TII-LS-025","images":["lounge-03.jpeg","lounge-10.jpeg"],"cat":"lounge seating featured","desc":"A contemporary patio lounge composition with sculpted seating and premium outdoor comfort."},
{"name":"Courtyard Lounge Collection","code":"TII-LS-026","images":["lounge-04.jpeg"],"cat":"lounge seating featured","desc":"A welcoming courtyard seating collection designed for elegant residential and hospitality spaces."},
{"name":"Rooftop Dining Chair Set","code":"TII-DS-027","images":["lounge-05.jpeg"],"cat":"dining seating","desc":"A stylish outdoor dining arrangement suited to rooftops, terraces, cafés and modern hospitality settings."},
{"name":"Outdoor Canopy Sofa","code":"TII-SF-028","images":["lounge-06.jpeg"],"cat":"sofas lounge featured","desc":"A relaxed outdoor sofa composition created for covered patios, verandas and premium leisure areas."},
{"name":"Woven Patio Armchair","code":"TII-AC-029","images":["lounge-07.jpeg"],"cat":"seating lounge","desc":"A handcrafted woven armchair with a warm natural character for patios, balconies and resort spaces."},
{"name":"Modern Outdoor Seating Set","code":"TII-LS-030","images":["lounge-08.jpeg"],"cat":"lounge seating featured","desc":"A coordinated outdoor seating collection with a clean contemporary profile for premium spaces."},
{"name":"Green Woven Accent Chair","code":"TII-AC-031","images":["lounge-09.jpeg"],"cat":"seating lounge","desc":"A distinctive woven accent chair that adds colour and character to balconies, terraces and outdoor lounges."}];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const grid=$('#grid'); const catalog=products.flat(Infinity); let filter='all',query='', currentProduct=0,currentImage=0;
function wa(name,code){return 'https://wa.me/919582053344?text='+encodeURIComponent(`Hello TRY IT INDIA, I want details for ${name} (${code}).`)}
function render(){
 grid.innerHTML='';
 const list=catalog.filter(p=>(filter==='all'||p.cat.split(' ').includes(filter))&&(!query||p.name.toLowerCase().includes(query)||p.code.toLowerCase().includes(query)));
 list.forEach((p)=>{
  const i=catalog.indexOf(p), a=document.createElement('article'); a.className='product';
  a.innerHTML=`<div class="product-photo"><button class="product-open" data-i="${i}" aria-label="View ${p.name}"><img src="${p.images[0]}" alt="${p.name} — TRY IT INDIA" loading="lazy">${p.images.length>1?`<span class="image-count">▣ ${p.images.length} images</span>`:''}</button>${p.cat.includes('featured')?'<span class="badge">FEATURED</span>':''}</div><div class="product-info"><div><small>${p.code} / TRY IT INDIA</small><h3>${p.name}</h3></div><a class="enq" href="${wa(p.name,p.code)}" target="_blank">Enquire ↗</a></div>`;
  grid.appendChild(a);
 });
 $('#count').textContent=`${list.length} piece${list.length!==1?'s':''}`; $('#empty').hidden=list.length!==0;
}
$('#search').addEventListener('input',e=>{query=e.target.value.toLowerCase().trim();render()});
$$('#chips button').forEach(b=>b.addEventListener('click',()=>{$$('#chips button').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.f;render()}));
$('#reset').addEventListener('click',()=>{$('#search').value='';query='';filter='all';$$('#chips button').forEach(x=>x.classList.toggle('active',x.dataset.f==='all'));render()});
$$('.collection-grid button').forEach(b=>b.addEventListener('click',()=>{$(`[data-f="${b.dataset.filter}"]`)?.click();$('#products').scrollIntoView({behavior:'smooth'})}));

const modal=$('#modal'), mimg=$('#mimg'), thumbs=$('#detail-thumbs');
function openModal(i){
 currentProduct=i; currentImage=0; const p=catalog[i];
 $('#mtitle').textContent=p.name; $('#mcode').textContent=p.code; $('#mdesc').textContent=p.desc;
 $('#mwa').href=wa(p.name,p.code); $('#mcat').textContent=p.cat.split(' ')[0].replace(/^./,x=>x.toUpperCase());
 $('#mimages').textContent=`${p.images.length} view${p.images.length!==1?'s':''}`;
 thumbs.innerHTML='';
 p.images.forEach((src,n)=>{const b=document.createElement('button');b.className='thumb'+(n===0?' active':'');b.dataset.n=n;b.innerHTML=`<img src="${src}" alt="${p.name} view ${n+1}">`;b.onclick=()=>showDetailImage(n);thumbs.appendChild(b)});
 showDetailImage(0); modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function showDetailImage(n){const p=catalog[currentProduct];if(!p||!p.images||!p.images.length)return;currentImage=(n+p.images.length)%p.images.length;mimg.src=p.images[currentImage];mimg.alt=`${p.name} — view ${currentImage+1}`;$('#detail-count').textContent=`${currentImage+1} / ${p.images.length}`;$$('.thumb').forEach((x,i)=>x.classList.toggle('active',i===currentImage))}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.addEventListener('click',e=>{
  const b=e.target.closest('.product-open');
  if(!b) return;
  e.preventDefault();
  const i=Number(b.dataset.i);
  if(Number.isInteger(i) && catalog[i]) openModal(i);
});
$('#close').onclick=closeModal;$('.modal-bg').onclick=closeModal;
$('#detail-prev').onclick=()=>showDetailImage(currentImage-1);$('#detail-next').onclick=()=>showDetailImage(currentImage+1);
$('#mimg').onclick=()=>openViewer(currentProduct,currentImage);
$('#expand-gallery').onclick=()=>openViewer(currentProduct,currentImage);
$('#copy').onclick=async()=>{await navigator.clipboard?.writeText($('#mcode').textContent);toast('Product code copied')};

const viewer=$('#viewer');let vi=0,vii=0;
function openViewer(i,n){vi=i;vii=n;viewer.classList.add('show');document.body.style.overflow='hidden';updateViewer()}
function updateViewer(){const p=catalog[vi];if(!p||!p.images||!p.images.length)return;$('#vimg').src=p.images[vii];$('#vcount').textContent=`${p.name} · ${vii+1} / ${p.images.length}`}
function vclose(){viewer.classList.remove('show');document.body.style.overflow=''}
function vnext(d){const p=catalog[vi];vii=(vii+d+p.images.length)%p.images.length;updateViewer()}
$('#vclose').onclick=vclose;$('#prev').onclick=()=>vnext(-1);$('#next').onclick=()=>vnext(1);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();vclose()}if(modal.classList.contains('show')&&(e.key==='ArrowRight'||e.key==='ArrowLeft'))showDetailImage(currentImage+(e.key==='ArrowRight'?1:-1));if(viewer.classList.contains('show')&&(e.key==='ArrowRight'||e.key==='ArrowLeft'))vnext(e.key==='ArrowRight'?1:-1)});

$('#form').addEventListener('submit',e=>{e.preventDefault();const text=`Hello TRY IT INDIA, my name is ${$('#name').value}. ${$('#city').value?'I am from '+$('#city').value+'. ':''}I have a ${$('#type').value}. ${$('#msg').value?'Requirement: '+$('#msg').value:''}`;window.open('https://wa.me/919582053344?text='+encodeURIComponent(text),'_blank')});
$('#menu').onclick=()=>{$('#nav').classList.toggle('open');$('#menu').textContent=$('#nav').classList.contains('open')?'×':'☰'};
addEventListener('scroll',()=>{$('#header').classList.toggle('scrolled',scrollY>30);$('#top').classList.toggle('show',scrollY>700)},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),1600)}
addEventListener('load',()=>{setTimeout(()=>$('#loader').classList.add('hide'),450);render()});
