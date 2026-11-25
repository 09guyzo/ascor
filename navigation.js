(function(){
 document.querySelectorAll('.site-header').forEach(function(header,index){
  var nav=header.querySelector('.main-nav,.nav');if(!nav)return;
  var toggle=header.querySelector('.mobile-menu-toggle');
  if(!toggle){toggle=document.createElement('button');toggle.type='button';toggle.className='mobile-menu-toggle';toggle.setAttribute('aria-label','Ouvrir le menu');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='<span></span><span></span><span></span>';header.appendChild(toggle)}
  if(!nav.id)nav.id='asroc-mobile-nav-'+index;toggle.setAttribute('aria-controls',nav.id);
  function close(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Ouvrir le menu');nav.classList.remove('is-open')}
  toggle.addEventListener('click',function(){var open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');nav.classList.toggle('is-open',open)});
  nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',close)});document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});window.addEventListener('resize',function(){if(innerWidth>720)close()});
 });
})();
