(function(){
 const headers=[...document.querySelectorAll('.site-header, #asroc-template-refined .ar-header')];
 if(!headers.length)return;
 const update=()=>{const active=window.scrollY>18;headers.forEach(header=>header.classList.toggle('is-scrolled',active));};
 update();window.addEventListener('scroll',update,{passive:true});
})();
