const products=[
{name:"CALA",code:"TII-CALA-001",images:["product-p-06.jpg"],cat:"outdoor lounge seating",desc:"Curvaceous, classic and generous outdoor collection with lounge chairs, sofas, day beds, foot stools and side tables."},
{name:"CALICO",code:"TII-CALI-002",images:["product-p-07.jpg","product-p-08.jpg"],cat:"outdoor seating dining lounge",desc:"Elegant, ergonomic and distinctive collection featuring dining chairs, lounge seating, tables, chaise longue and sun lounger pieces."},
{name:"CLASSIC",code:"TII-CLAS-003",images:["product-p-09.jpg"],cat:"outdoor seating dining sun-loungers",desc:"Timeless, versatile and elegant outdoor collection with chairs, dining tables, sun loungers and side tables."},
{name:"CLOUD 9",code:"TII-CLOUD-004",images:["product-p-10.jpg"],cat:"outdoor lounge",desc:"Curvaceous and comfortable day-bed collection with single and double day beds and a side table."},
{name:"ECLIPSE",code:"TII-ECLIP-005",images:["product-p-10.jpg"],cat:"outdoor sun-loungers",desc:"Curvaceous, elegant and graceful outdoor sun lounger collection with matching side table."},
{name:"FIESTA",code:"TII-FIES-006",images:["product-p-11.jpg","product-p-12.jpg"],cat:"outdoor seating dining lounge bar sun-loungers",desc:"Stylish, curvaceous and contemporary classic collection with arm chairs, lounge chairs, sofas, recliner, tables, bar seating and sun loungers."},
{name:"FLO",code:"TII-FLO-007",images:["product-p-13.jpg","product-p-14.jpg"],cat:"outdoor seating lounge dining bar sun-loungers",desc:"Modern, minimal and versatile collection covering chairs, sofas, lounge seating, tables, bar chair and sun loungers."},
{name:"HAVANA",code:"TII-HAVA-008",images:["product-p-15.jpg"],cat:"outdoor seating lounge",desc:"Classic, relaxed and smart outdoor collection with arm chairs, club and lounge chairs, sofas, ottoman and tables."},
{name:"HORIZON",code:"TII-HORI-009",images:["product-p-16.jpg","product-p-17.jpg"],cat:"outdoor lounge",desc:"Slim, elegant and minimal modular outdoor lounge collection with sofas, corner modules, chaise pieces, day bed and tables."},
{name:"INTI",code:"TII-INTI-010",images:["product-p-18.jpg"],cat:"outdoor sun-loungers",desc:"Stylish, sculptured and minimal sun lounger collection with matching side table."},
{name:"ISO",code:"TII-ISO-011",images:["product-p-18.jpg"],cat:"outdoor seating dining bar",desc:"Angular, robust and distinctive collection featuring side chairs and dining tables."},
{name:"KARA",code:"TII-KARA-012",images:["product-p-19.jpg","product-p-20.jpg"],cat:"outdoor seating dining lounge bar sun-loungers tables",desc:"Distinctive, playful and versatile collection with arm and lounge chairs, dining tables, side and coffee tables, bar chair and sun loungers."},
{name:"KEYWEST",code:"TII-KEYW-013",images:["product-p-22.jpg"],cat:"outdoor seating lounge sun-loungers",desc:"Traditionally modern, stylish and versatile collection with arm chairs, lounge chairs, sofas, tables and sun loungers."},
{name:"KOTU",code:"TII-KOTU-014",images:["product-p-23.jpg"],cat:"outdoor tables dining",desc:"Practical, versatile and minimalist table collection with side, coffee and bistro tables."},
{name:"LATITUDES",code:"TII-LATI-015",images:["product-p-24.jpg","product-p-25.jpg"],cat:"outdoor seating dining lounge sun-loungers",desc:"Rectilinear, sleek and modern modular collection with dining tables, chairs, sofas, chaise pieces, coffee tables and sun lounger."},
{name:"LINEAR",code:"TII-LINE-016",images:["product-p-26.jpg"],cat:"outdoor bar tables seating dining",desc:"Minimal, versatile and practical collection with benches, stools and compact 1/2, 2/4 and 4-seater tables."},
{name:"MANTRA",code:"TII-MANT-017",images:["product-p-27.jpg","product-p-28.jpg"],cat:"outdoor lounge",desc:"Rectilinear, industrial and masculine modular lounge collection with sofas, lounge chair, corner and centre modules."},
{name:"MARBELLA",code:"TII-MARB-018",images:["product-p-29.jpg"],cat:"outdoor sun-loungers",desc:"Classic, comfortable and sturdy outdoor sun lounger collection with matching side table."},
{name:"NEST",code:"TII-NEST-019",images:["product-p-30.jpg"],cat:"outdoor lounge",desc:"Outdoor day-bed collection with standard and XL day beds, designed around relaxed lounging."},
{name:"PALM",code:"TII-PALM-020",images:["product-p-31.jpg","product-p-32.jpg"],cat:"outdoor seating dining lounge bar sun-loungers",desc:"Versatile outdoor collection including side and arm chairs, lounge chair, sofa, bar chair, sun loungers and tables."},
{name:"PARTU",code:"TII-PART-021",images:["product-p-33.jpg","product-p-34.jpg"],cat:"outdoor dining tables bar seating",desc:"Outdoor dining and table collection with 2/4 and 4-seater dining tables, side and coffee tables plus bar stool."},
{name:"SALA",code:"TII-SALA-022",images:["product-p-35.jpg","product-p-36.jpg"],cat:"outdoor lounge",desc:"Outdoor modular lounge collection with lounge chair, corner, left and right modules, ottomans and chaise longue pieces."},
{name:"SARO",code:"TII-SARO-023",images:["product-p-37.jpg"],cat:"outdoor tables",desc:"Elegant, practical and versatile outdoor side and coffee table collection."},
{name:"SIESTA",code:"TII-SIES-024",images:["product-p-38.jpg","product-p-39.jpg"],cat:"outdoor seating lounge sun-loungers tables",desc:"Outdoor collection combining side and club chairs, lounge seating, sofas, sun loungers and side tables."},
{name:"SOL",code:"TII-SOL-025",images:["product-p-40.jpg","product-p-41.jpg"],cat:"outdoor lounge tables",desc:"Outdoor lounge collection with lounge chairs, XL lounge chair, day beds and a range of coffee tables."},
{name:"SUMMA",code:"TII-SUMM-026",images:["product-p-42.jpg"],cat:"outdoor lounge",desc:"Outdoor collection with lounge chair, 2-seater sofa and coordinated lounge seating."},
{name:"TAMARU",code:"TII-TAMA-027",images:["product-p-43.jpg"],cat:"outdoor lounge",desc:"Curvaceous, cocooning and pampering outdoor chaise longue collection."},
{name:"TEJIDO",code:"TII-TEJI-028",images:["product-p-44.jpg"],cat:"outdoor lounge",desc:"Outdoor modular sofa collection with 3-seater sofa and corner modules for relaxed project settings."},
{name:"TRES",code:"TII-TRES-029",images:["product-p-46.jpg"],cat:"outdoor dining tables",desc:"Contemporary, minimalistic and versatile outdoor dining table collection with multiple seating capacities."},
{name:"VERANDA",code:"TII-VERA-030",images:["product-p-47.jpg"],cat:"outdoor seating dining lounge tables",desc:"Outdoor collection with arm and lounge chairs, dining tables and 2-seater sofa for verandas and open spaces."},
{name:"VERANO",code:"TII-VERN-031",images:["product-p-48.jpg","product-p-49.jpg"],cat:"outdoor seating dining tables",desc:"Outdoor collection with arm chairs, bistro and dining tables plus side and coffee tables."},
{name:"WAVE",code:"TII-WAVE-032",images:["product-p-50.jpg"],cat:"outdoor sun-loungers",desc:"Curvaceous, flowing and sleek outdoor sun lounger collection with matching side table."},
{name:"YUMA",code:"TII-YUMA-033",images:["product-p-50.jpg"],cat:"outdoor sun-loungers",desc:"Classic, ergonomic and sturdy outdoor sun lounger collection with matching side table."},
{name:"ACCENTO",code:"TII-ACCE-034",images:["product-p-52.jpg"],cat:"outdoor accessories",desc:"Outdoor accessory collection presented in the 2026 catalogue under accessories."},
{name:"LUMA",code:"TII-LUMA-035",images:["product-p-53.jpg"],cat:"outdoor accessories",desc:"Outdoor accessory collection presented in the 2026 catalogue under accessories."},
{name:"HABITAT",code:"TII-HABI-036",images:["product-p-54.jpg"],cat:"outdoor accessories",desc:"Planter and outdoor accessory collection presented in the 2026 catalogue."},
{name:"PLANTA",code:"TII-PLAN-037",images:["product-p-55.jpg"],cat:"outdoor accessories",desc:"Planter collection with tapered and complementary outdoor planter options."},
{name:"PROTEKT",code:"TII-PROT-038",images:["product-p-56.jpg"],cat:"outdoor accessories",desc:"Outdoor accessory and protection collection presented in the 2026 catalogue."},
{name:"PARASOLS",code:"TII-PARA-039",images:["product-p-57.jpg"],cat:"outdoor accessories",desc:"Outdoor parasol and shade collection presented in the 2026 catalogue, including multiple parasol options."}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const grid=$('#grid'); const catalog=products; let filter='all',query='', currentProduct=0,currentImage=0;
function wa(name,code){return 'https://wa.me/919582053344?text='+encodeURIComponent(`Hello TRY IT INDIA, I want details for ${name} (${code}).`)}
function render(){
 grid.innerHTML='';
 const list=catalog.filter(p=>(filter==='all'||p.cat.split(' ').includes(filter))&&(!query||p.name.toLowerCase().includes(query)||p.code.toLowerCase().includes(query)||p.desc.toLowerCase().includes(query)));
 list.forEach((p)=>{
  const i=catalog.indexOf(p), a=document.createElement('article'); a.className='product';
  const labels=p.cat.split(' ').filter(x=>x!=='outdoor').slice(0,3).map(x=>x.replace(/-/g,' ')).join(' · ');
  a.innerHTML=`<div class="product-photo"><button class="product-open" data-i="${i}" aria-label="View ${p.name}"><img src="${p.images[0]}" alt="${p.name} — TRY IT INDIA" loading="lazy">${p.images.length>1?`<span class="image-count">▣ ${p.images.length} catalogue pages</span>`:''}</button><span class="badge">OUTDOOR</span></div><div class="product-info"><div><small>${p.code} / TRY IT INDIA</small><h3>${p.name}</h3><em class="product-type">${labels}</em></div><a class="enq" href="${wa(p.name,p.code)}" target="_blank">Enquire ↗</a></div>`;
  grid.appendChild(a);
 });
 $('#count').textContent=`${list.length} collection${list.length!==1?'s':''}`; $('#empty').hidden=list.length!==0;
}
$('#search').addEventListener('input',e=>{query=e.target.value.toLowerCase().trim();render()});
$$('#chips button').forEach(b=>b.addEventListener('click',()=>{$$('#chips button').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.f;render()}));
$('#reset').addEventListener('click',()=>{$('#search').value='';query='';filter='all';$$('#chips button').forEach(x=>x.classList.toggle('active',x.dataset.f==='all'));render()});
$$('.collection-grid button').forEach(b=>b.addEventListener('click',()=>{$(`[data-f="${b.dataset.filter}"]`)?.click();$('#products').scrollIntoView({behavior:'smooth'})}));
const modal=$('#modal'), mimg=$('#mimg'), thumbs=$('#detail-thumbs');
function openModal(i){
 currentProduct=i; currentImage=0; const p=catalog[i];
 $('#mtitle').textContent=p.name; $('#mcode').textContent=p.code; $('#mdesc').textContent=p.desc;
 $('#mwa').href=wa(p.name,p.code); $('#mcat').textContent='Outdoor'; $('#mimages').textContent=`${p.images.length} catalogue page${p.images.length!==1?'s':''}`;
 thumbs.innerHTML=''; p.images.forEach((src,n)=>{const b=document.createElement('button');b.className='thumb'+(n===0?' active':'');b.dataset.n=n;b.innerHTML=`<img src="${src}" alt="${p.name} catalogue page ${n+1}">`;b.onclick=()=>showDetailImage(n);thumbs.appendChild(b)});
 showDetailImage(0); modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function showDetailImage(n){const p=catalog[currentProduct];if(!p||!p.images.length)return;currentImage=(n+p.images.length)%p.images.length;mimg.src=p.images[currentImage];mimg.alt=`${p.name} — catalogue page ${currentImage+1}`;$('#detail-count').textContent=`${currentImage+1} / ${p.images.length}`;$$('.thumb').forEach((x,i)=>x.classList.toggle('active',i===currentImage))}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.addEventListener('click',e=>{const b=e.target.closest('.product-open');if(!b)return;e.preventDefault();const i=Number(b.dataset.i);if(Number.isInteger(i)&&catalog[i])openModal(i)});
$('#close').onclick=closeModal;$('.modal-bg').onclick=closeModal;$('#detail-prev').onclick=()=>showDetailImage(currentImage-1);$('#detail-next').onclick=()=>showDetailImage(currentImage+1);$('#mimg').onclick=()=>openViewer(currentProduct,currentImage);$('#expand-gallery').onclick=()=>openViewer(currentProduct,currentImage);$('#copy').onclick=async()=>{await navigator.clipboard?.writeText($('#mcode').textContent);toast('Product code copied')};
const viewer=$('#viewer');let vi=0,vii=0;function openViewer(i,n){vi=i;vii=n;viewer.classList.add('show');document.body.style.overflow='hidden';updateViewer()}function updateViewer(){const p=catalog[vi];if(!p||!p.images.length)return;$('#vimg').src=p.images[vii];$('#vcount').textContent=`${p.name} · ${vii+1} / ${p.images.length}`}function vclose(){viewer.classList.remove('show');document.body.style.overflow=''}function vnext(d){const p=catalog[vi];vii=(vii+d+p.images.length)%p.images.length;updateViewer()}
$('#vclose').onclick=vclose;$('#prev').onclick=()=>vnext(-1);$('#next').onclick=()=>vnext(1);document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();vclose()}if(modal.classList.contains('show')&&(e.key==='ArrowRight'||e.key==='ArrowLeft'))showDetailImage(currentImage+(e.key==='ArrowRight'?1:-1));if(viewer.classList.contains('show')&&(e.key==='ArrowRight'||e.key==='ArrowLeft'))vnext(e.key==='ArrowRight'?1:-1)});
$('#form').addEventListener('submit',e=>{e.preventDefault();const text=`Hello TRY IT INDIA, my name is ${$('#name').value}. ${$('#city').value?'I am from '+$('#city').value+'. ':''}I have a ${$('#type').value}. ${$('#msg').value?'Requirement: '+$('#msg').value:''}`;window.open('https://wa.me/919582053344?text='+encodeURIComponent(text),'_blank')});
$('#menu').onclick=()=>{$('#nav').classList.toggle('open');$('#menu').textContent=$('#nav').classList.contains('open')?'×':'☰'};addEventListener('scroll',()=>{$('#header').classList.toggle('scrolled',scrollY>30);$('#top').classList.toggle('show',scrollY>700)},{passive:true});$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),1600)}addEventListener('load',()=>{setTimeout(()=>$('#loader').classList.add('hide'),450);render()});
