!function(e){var t={};function s(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){"use strict";s.r(t);s(2),s(3),s(4),s(5),s(6);var a=document.querySelector("header"),c=document.querySelector("#burger-btn"),i=document.getElementById("menu"),n=document.querySelector("body"),o=document.getElementById("back-burger-btn"),r=document.querySelector("main"),d=document.querySelector(".burger__body-container"),l=document.querySelector(".message"),v=document.querySelector("#header-navbar-btn-message"),u=document.querySelector(".phone"),m=document.querySelector("#header-navbar-btn-phone"),L=document.querySelector(".feedback-menu"),f=document.querySelector(".request-call"),y=document.querySelector(".feedback-menu-btn"),p=document.querySelector("#cancelRequestCallMenu"),b=document.getElementById("more"),g=document.getElementById("read-more"),S=document.getElementById("read-more-text"),w=document.getElementById("icon-dropdown-show"),E=document.getElementById("show-all-brands-section-icon"),q=document.getElementById("read-more-brands"),k=document.getElementById("read-more-brands-text"),h=(document.querySelectorAll(".brands-cards"),document.querySelector("#swiper-brand-section")),x=document.querySelector("#swiper-variety"),B=document.getElementById("read-more-brands-variety"),I=document.getElementById("read-more-brands-variety-text"),_=document.getElementById("show-all-brands-section-icon-variety");B.onclick=function(){0==x.classList.contains("showed")?(x.classList.add("showed"),I.textContent="Скрыть",_.classList.add("rotate")):(x.classList.remove("showed"),I.textContent="Показать все",E.classList.remove("rotate"))},q.onclick=function(){0==h.classList.contains("showed")?(h.classList.add("showed"),k.textContent="Скрыть",E.classList.add("rotate")):(h.classList.remove("showed"),k.textContent="Показать все",E.classList.remove("rotate"))},g.onclick=function(){0==b.classList.contains("active")?(b.classList.add("active"),S.textContent="Скрыть",w.classList.add("rotate")):(b.classList.remove("active"),S.textContent="Читать далее",w.classList.remove("rotate"))},c.addEventListener("click",(function(){i.classList.add("active"),a.classList.add("active"),r.classList.add("active"),n.classList.add("modal-open")})),o.addEventListener("click",(function(){i.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),n.classList.remove("modal-open")})),r.addEventListener("click",(function(e){d.classList.contains(e.target)||(i.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),n.classList.remove("modal-open")),d.classList.contains(e.target)||(L.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),n.classList.remove("modal-open")),d.classList.contains(e.target)||(f.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),n.classList.remove("modal-open"))})),l.addEventListener("click",(function(){a.classList.add("active"),r.classList.add("active"),n.classList.add("modal-open"),!1===f.classList.contains("active")&&L.classList.add("active"),!0===f.classList.contains("active")&&(f.classList.remove("active"),L.classList.add("active"))})),y.addEventListener("click",(function(){L.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),n.classList.remove("modal-open")})),v.addEventListener("click",(function(){n.classList.add("modal-open"),a.classList.add("active"),r.classList.add("active"),!1===f.classList.contains("active")&&L.classList.add("active"),!0===f.classList.contains("active")&&(f.classList.remove("active"),L.classList.add("active"))})),p.addEventListener("click",(function(){f.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),n.classList.remove("modal-open")})),m.addEventListener("click",(function(){a.classList.add("active"),r.classList.add("active"),n.classList.add("modal-open"),!1===L.classList.contains("active")&&f.classList.add("active"),!0===L.classList.contains("active")&&(L.classList.remove("active"),f.classList.add("active"))})),u.addEventListener("click",(function(){a.classList.add("active"),r.classList.add("active"),n.classList.add("modal-open"),!1===L.classList.contains("active")&&f.classList.add("active"),!0===L.classList.contains("active")&&(L.classList.remove("active"),f.classList.add("active"))}));new Swiper(".swiper",{direction:"horizontal",spaceBetween:15,slidesPerView:"auto",breakpoints:{700:{slidesPerView:4,spaceBetween:10,enabled:!1}},pagination:{el:".swiper-pagination",clickable:!0}})},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){}]);
//# sourceMappingURL=bundle.js.map