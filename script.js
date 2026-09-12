document.addEventListener('DOMContentLoaded', () => {
const btn=document.querySelector('.hamb'),nav=document.querySelector('.nav');
if(btn)btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.textContent=nav.classList.contains('open')?'✕':'☰'});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

(() => {
  const modal=document.getElementById('productModal');
  const viewer=document.getElementById('imageViewer');
  if(!modal || !viewer) return;
  const modalImg=document.getElementById('modalProductImage');
  const title=document.getElementById('modalProductTitle');
  const desc=document.getElementById('modalProductDescription');
  const wa=document.getElementById('modalWhatsApp');
  const viewerImg=document.getElementById('viewerImage');
  const count=document.getElementById('viewerCount');
  let productName='', zoom=1, startX=0, startY=0, panX=0, panY=0, dragging=false;
  const images=Array.from(document.querySelectorAll('.product img')).map(i=>i.src);
  let index=0;
  function applyViewerTransform(){viewerImg.style.transform=`translate(${panX}px,${panY}px) scale(${zoom})`; viewerImg.style.cursor=zoom>1?'grab':'zoom-in'}
  function openViewer(i){index=(i+images.length)%images.length; zoom=1; panX=panY=0; viewerImg.src=images[index]; count.textContent=`${index+1} / ${images.length}`; applyViewerTransform(); viewer.classList.add('show'); viewer.setAttribute('aria-hidden','false'); document.body.classList.add('viewer-open')}
  function closeViewer(){viewer.classList.remove('show');viewer.setAttribute('aria-hidden','true');document.body.classList.remove('viewer-open');}
  function next(){openViewer(index+1)} function prev(){openViewer(index-1)}
  function openProduct(card){
    productName=card.dataset.productName||'TRY IT INDIA Product';
    const image=card.dataset.productImage||'';
    modalImg.src=image; modalImg.alt=card.dataset.productAlt||productName; modalZoom=1; modalImg.style.transform='scale(1)';
    title.textContent=productName;
    desc.textContent=`${productName} from TRY IT INDIA. Contact us for product specifications, size, colour, availability and your requirement.`;
    wa.href=`https://wa.me/919582053344?text=${encodeURIComponent(`Hello TRY IT INDIA, I want details for ${productName}.`)}`;
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
  }
  document.querySelectorAll('.product').forEach(card=>{
    card.addEventListener('click',e=>{if(e.target.closest('a')) return; openProduct(card)});
  });
  modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}));
  modalImg.addEventListener('click',()=>{const src=modalImg.src; const i=Math.max(0,images.indexOf(src)); openViewer(i)});
  const zoomIn=document.querySelector('.zoom-in'); const zoomOut=document.querySelector('.zoom-out');
  let modalZoom=1;
  function applyModalZoom(){ modalImg.style.transform=`scale(${modalZoom})`; }
  zoomIn?.addEventListener('click',e=>{e.stopPropagation(); modalZoom=Math.min(2.8,modalZoom+.25); applyModalZoom();});
  zoomOut?.addEventListener('click',e=>{e.stopPropagation(); modalZoom=Math.max(1,modalZoom-.25); applyModalZoom();});
  modalImg.addEventListener('dblclick',e=>{e.stopPropagation(); modalZoom=modalZoom===1?2:1; applyModalZoom();});
  document.querySelector('.viewer-close').addEventListener('click',closeViewer);
  document.querySelector('.viewer-next').addEventListener('click',next);
  document.querySelector('.viewer-prev').addEventListener('click',prev);
  viewer.addEventListener('click',e=>{if(e.target===viewer || e.target.classList.contains('viewer-stage')) closeViewer()});
  viewerImg.addEventListener('wheel',e=>{e.preventDefault(); zoom=Math.min(4,Math.max(1,zoom+(e.deltaY<0?.25:-.25))); if(zoom===1)panX=panY=0; applyViewerTransform()},{passive:false});
  viewerImg.addEventListener('dblclick',()=>{zoom=zoom===1?2:1;if(zoom===1)panX=panY=0;applyViewerTransform()});
  viewerImg.addEventListener('pointerdown',e=>{if(zoom<=1)return; dragging=true;startX=e.clientX-panX;startY=e.clientY-panY;viewerImg.setPointerCapture(e.pointerId)});
  viewerImg.addEventListener('pointermove',e=>{if(!dragging)return;panX=e.clientX-startX;panY=e.clientY-startY;applyViewerTransform()});
  viewerImg.addEventListener('pointerup',()=>dragging=false);
  let touchStart=0;
  viewerImg.addEventListener('touchstart',e=>{if(e.touches.length===1)touchStart=e.touches[0].clientX},{passive:true});
  viewerImg.addEventListener('touchend',e=>{if(zoom>1||!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>55)(dx<0?next:prev)();touchStart=0},{passive:true});
  document.addEventListener('keydown',e=>{if(viewer.classList.contains('show')){if(e.key==='Escape')closeViewer();if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev();}else if(modal.classList.contains('show')&&e.key==='Escape'){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}});
})();

});


/* Premium V5 interactions */
document.addEventListener('DOMContentLoaded',()=>{
  const search=document.getElementById('productSearch');
  const products=[...document.querySelectorAll('.product')];
  const chips=[...document.querySelectorAll('.filter-chip')];
  let filter='all';
  function render(){
    const q=(search?.value||'').trim().toLowerCase();
    products.forEach(card=>{
      const name=(card.dataset.productName||'').toLowerCase();
      const cats=(card.dataset.category||'').toLowerCase();
      const okFilter=filter==='all'||cats.includes(filter);
      const okSearch=!q||name.includes(q);
      card.style.display=okFilter&&okSearch?'':'none';
    });
  }
  search?.addEventListener('input',render);
  chips.forEach(c=>c.addEventListener('click',()=>{chips.forEach(x=>x.classList.remove('active'));c.classList.add('active');filter=c.dataset.filter;render()}));
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});
