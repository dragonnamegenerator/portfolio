const observer=new IntersectionObserver((entries)=>{entries.forEach((e)=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('contactForm');const statusEl=document.getElementById('formStatus');
form.addEventListener('submit',async(e)=>{e.preventDefault();statusEl.textContent='Sending…';const payload=Object.fromEntries(new FormData(form).entries());try{const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await res.json();if(!res.ok)throw new Error(data.error||'Unable to send message.');form.reset();statusEl.textContent='Thanks — your message has been received.'}catch(err){statusEl.textContent=err.message||'Something went wrong. Please email Ahmed directly.'}});
