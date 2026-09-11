const btn=document.querySelector('.hamb'),nav=document.querySelector('.nav');if(btn)btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.textContent=nav.classList.contains('open')?'✕':'☰'});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));


// Product details + image zoom modal
(() => {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  const modalImg = document.getElementById('modalProductImage');
  const title = document.getElementById('modalProductTitle');
  const desc = document.getElementById('modalProductDescription');
  const wa = document.getElementById('modalWhatsApp');
  let zoom = 1;
  let activeProduct = '';

  const openModal = (card) => {
    activeProduct = card.dataset.productName || 'Product';
    const image = card.dataset.productImage || '';
    modalImg.src = image;
    modalImg.alt = card.dataset.productAlt || activeProduct;
    title.textContent = activeProduct;
    desc.textContent = `${activeProduct} from TRY IT INDIA. Enquire with us for product details, sizes, colours, availability and your requirement.`;
    wa.href = `https://wa.me/919582053344?text=${encodeURIComponent(`Hello TRY IT INDIA, I want details for ${activeProduct}.`)}`;
    zoom = 1;
    modalImg.style.transform = 'scale(1)';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };
  const closeModal = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalImg.style.transform = 'scale(1)';
  };
  document.querySelectorAll('.product-open').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.closest('.product')));
  });
  modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  modal.querySelector('.zoom-in').addEventListener('click', () => {
    zoom = Math.min(2.5, zoom + .25); modalImg.style.transform = `scale(${zoom})`;
  });
  modal.querySelector('.zoom-out').addEventListener('click', () => {
    zoom = Math.max(1, zoom - .25); modalImg.style.transform = `scale(${zoom})`;
  });
  modalImg.addEventListener('click', () => {
    zoom = zoom === 1 ? 1.75 : 1; modalImg.style.transform = `scale(${zoom})`;
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
})();
