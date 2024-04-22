import{A as h,S as u,N as m,K as p,M as v,a as f,i as a}from"./assets/vendor-a4f30973.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-open-btn"),t=document.querySelector(".mobile-menu-wrapper");function o(){t.classList.add("is-open"),e.removeEventListener("click",o)}function r(){t.classList.remove("is-open"),e.addEventListener("click",o)}e.addEventListener("click",o);const n=document.querySelector(".mobile-menu-close-btn"),s=document.querySelectorAll(".mobile-menu-link"),c=document.querySelector(".header-link-mobile");n.addEventListener("click",r),s.forEach(function(I){I.addEventListener("click",r)}),c.addEventListener("click",r)});const C=document.querySelectorAll(".dropdown");C.forEach(function(e){const t=e.nextElementSibling,o=e.parentElement.parentElement;t.classList.remove("is-open"),o.classList.remove("is-open"),e.addEventListener("click",function(r){t.classList.toggle("is-open"),o.classList.toggle("is-open")})});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})});new h(".accordion-container",{duration:500,showMultiple:!0,openOnInit:[0]});const B=document.querySelectorAll(".ac-trigger");document.querySelectorAll(".ac-icon");B.forEach(e=>e.addEventListener("click",()=>{e.querySelector("svg.ac-icon").classList.contains("icon-first")&&(e.querySelector("svg.ac-icon").classList.contains("ac-icon-active-first")?e.querySelector("svg.ac-icon").classList.remove("ac-icon-active-first"):e.querySelector("svg.ac-icon").classList.add("ac-icon-active-first")),e.querySelector("svg.ac-icon").classList.contains("ac-icon-active")?e.querySelector("svg.ac-icon").classList.remove("ac-icon-active"):e.querySelector("svg.ac-icon").classList.add("ac-icon-active")}));new u(".swiper-skills-list-container",{modules:[m,p,v],spaceBetween:0,loop:!0,loopSlides:6,keyboard:{enabled:!0},mousewheel:{invert:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:0},375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-skill-list-button"}});new u(".projects-swiper",{modules:[m,p,v],keyboard:{enabled:!0},mousewheel:{invert:!0},slidesPerView:1,watchOverflow:!0,preloadImages:!1,lazy:!0,navigation:{nextEl:".project-btn-next",prevEl:".project-btn-prev",disabledClass:"swiper-button-projects-disabled"}});document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new h(e,{duration:400,showFirstItem:!1,elementClass:"faq-sector",triggerClass:"faq-accordion",panelClass:"faq-sector-description",headerClass:"faq-sector-title",beforeOpen:t=>{const o=t.querySelector(".faq-sector-description");o.style.display="block"},beforeClose:t=>{const o=t.querySelector(".faq-sector-description");o.style.display="none"}})});const P=document.querySelectorAll(".faq-sector");P.forEach(e=>{e.addEventListener("click",function(){this.querySelector(".faq-arrow").classList.toggle("rotate")})});const M=document.getElementById("covers");function A(){const e=document.querySelector(" .covers-list");e.style.animationPlayState="running"}const O=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&A()})});O.observe(M);f.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function x(){try{return(await f.get("/reviews")).data}catch{throw new Error("Not found")}}const g=document.querySelector(".reviews-swiper");async function V(){try{const e=await x();w(e)}catch(e){console.error(e),w([])}}V();function w(e){if(e.length===0){g.innerHTML="<p>Not found</p>";return}const t=e.map(o=>`<div class="swiper-slide review-carusel-list-item">
  <div class="user-review-outer-wrapper">
    <div class="user-review-inner-wrapper">
      <img
        src="${o.avatar_url}"
        alt="${o.author}"
        width="48"
        height="48"
        loading="lazy"
        class="reviews-item-img"
      />
      <div class="user-data-review-container">
        <h3 class="secondary-title review-user-name">${o.author}</h3>
        <p class="transparent-text review-user-comment">${o.review}</p>
      </div>
    </div>
  </div>
</div>`).join("");g.insertAdjacentHTML("beforeend",t)}new u(".reviews-swiper-container",{modules:[m,p,v],keyboard:{enabled:!0},mousewheel:{invert:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},watchOverflow:!0,preloadImages:!1,lazy:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev",disabledClass:"swiper-button-reviews-disabled"}});function d(e){const t=e.target,o=50;t.value.length>o&&(t.value=t.value.substring(0,o)+"...")}function b(e){const t=e.target,o=50;t.value.length>o?t.value=t.value.substring(0,o)+"...":t.dataset.prevValue=t.value}function q(e){const t=e.target;if((e.keyCode===8||e.keyCode===46)&&t.value.endsWith("..."))t.value=t.value.slice(0,-3);else if(e.keyCode===8||e.keyCode===46){const o=t.dataset.prevValue||"";t.value=o.slice(0,-1),t.dataset.prevValue=t.value}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("client-comment");e.addEventListener("input",d),e.addEventListener("input",b),e.addEventListener("keydown",q)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("client-email");e.addEventListener("input",d),e.addEventListener("input",b),e.addEventListener("keydown",q)});const l=document.getElementById("client-email"),L=document.getElementById("client-comment");l&&L&&(l.addEventListener("input",d),L.addEventListener("input",d));function D(){const e=document.getElementById("client-email"),t=document.getElementById("client-comment"),o=document.querySelector(".work-together-form-error");e&&t&&(e.value="",t.value="",e.style.borderBottomColor="var(--border-color)",o.style.display="none")}function S(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}const i=document.querySelector(".work-together-form-error");l.addEventListener("blur",e=>{S(e.target.value)?(l.style.borderBottomColor="var(--success-text-color)",i.style.color="var(--success-text-color)",i.style.fontSize="",i.textContent="Success!"):(l.style.borderBottomColor="var(--button-color)",i.style.color="var(--button-color)",i.style.fontSize="",i.textContent="Invalid email, try again!")});function j(e,t){const o={email:e,comment:t};f.post("https://portfolio-js.b.goit.study/api/requests",o).then(r=>{if(console.log("Response from server:",r),r.status===201)R(),D(),console.clear();else throw new Error("Unexpected response from server")}).catch(r=>{console.error("Error sending request:",r),r.response?r.response.status===400?a.error({title:"Error",message:"Bad request. Please check your input and try again.",position:"topRight"}):a.error({title:"Error",message:"Server error. Please try again later.",position:"topRight"}):r.request?a.error({title:"Error",message:"No response from server. Please check your internet connection and try again.",position:"topRight"}):a.error({title:"Error",message:"Failed to send request. Please try again.",position:"topRight"})})}function R(){const e=document.querySelector(".backdrop"),t=document.querySelector(".modal");e&&t&&(e.classList.add("active"),t.classList.add("active"),document.body.style.overflow="hidden",document.addEventListener("keydown",k),e.addEventListener("click",y))}function y(){const e=document.querySelector(".backdrop"),t=document.querySelector(".modal");e&&t&&(e.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",k),e.removeEventListener("click",y))}function k(e){e.key==="Escape"&&y()}const E=document.querySelector(".work-together-form");E&&E.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("client-email"),o=document.getElementById("client-comment");t&&o&&S(t.value)&&o.value.trim()!==""?(j(t.value,o.value),t.classList.remove("invalid"),t.classList.add("valid")):(t.classList.remove("valid"),t.classList.add("invalid"),a.error({title:"Error",message:"Invalid email or comment. Please try again.",position:"topRight"}))});
//# sourceMappingURL=commonHelpers.js.map