const header=document.querySelector('.site-header');
const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
menuBtn.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
