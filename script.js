const groups={}; PRODUCTS.forEach(p=>(groups[p.category]??=[]).push(p));
const tabs=document.getElementById('category-tabs'), sections=document.getElementById('product-sections');
Object.keys(groups).forEach((cat,i)=>{
 const t=document.createElement('button'); t.className='tab'+(i===0?' active':''); t.textContent=cat; t.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.getElementById('cat-'+i).scrollIntoView({behavior:'smooth',block:'start'})}; tabs.appendChild(t);
 const s=document.createElement('section'); s.className='category'; s.id='cat-'+i;
 s.innerHTML='<div class="category-head"><h3>'+cat+'</h3><span>'+groups[cat].length+' PRODUCTS</span></div><div class="grid"></div>';
 const grid=s.querySelector('.grid');
 groups[cat].forEach(p=>{const card=document.createElement('article');card.className='card';const msg=encodeURIComponent('Hello TRY IT INDIA, I am interested in '+p.name+'. Please share details.');card.innerHTML='<div class="pic"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"><span class="tag">TRY IT INDIA</span></div><div class="body"><div class="num">PRODUCT '+String(p.id).padStart(2,'0')+'</div><h4>'+p.name+'</h4><p>Product details can be updated here later.</p><a class="enq" target="_blank" href="https://wa.me/918076487501?text='+msg+'">WhatsApp Enquiry →</a></div>';grid.appendChild(card)});sections.appendChild(s);
});