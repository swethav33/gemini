// Mobile menu toggle for the main navigation.
(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
})();

/* Accessible GEMINI feature carousel; rotation pauses on hover and focus. */
(function(){var root=document.querySelector(".feature-carousel");if(!root)return;var slides=Array.prototype.slice.call(root.querySelectorAll(".feature-slide"));var dots=Array.prototype.slice.call(root.querySelectorAll(".carousel-dots button"));var prev=root.querySelector(".carousel-prev"),next=root.querySelector(".carousel-next");if(!slides.length||slides.length!==dots.length||!prev||!next)return;var current=0,timer=null;var reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function show(n){current=(n+slides.length)%slides.length;slides.forEach(function(s,i){s.hidden=i!==current;s.classList.toggle("is-active",i===current);s.setAttribute("aria-label",(i+1)+" of "+slides.length)});dots.forEach(function(d,i){d.classList.toggle("is-active",i===current);d.setAttribute("aria-pressed",String(i===current))})}function stop(){if(timer)window.clearInterval(timer);timer=null}function start(){stop();if(!reduced&&!document.hidden)timer=window.setInterval(function(){show(current+1)},6500)}prev.addEventListener("click",function(){show(current-1);start()});next.addEventListener("click",function(){show(current+1);start()});dots.forEach(function(d,i){d.addEventListener("click",function(){show(i);start()})});root.addEventListener("mouseenter",stop);root.addEventListener("mouseleave",start);root.addEventListener("focusin",stop);root.addEventListener("focusout",function(e){if(!root.contains(e.relatedTarget))start()});document.addEventListener("visibilitychange",function(){if(document.hidden)stop();else start()});show(0);start()})();
