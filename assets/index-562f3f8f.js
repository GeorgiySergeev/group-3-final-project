(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open")})})();var i=document.querySelectorAll(".js-open-modal"),a=document.querySelector(".js-overlay-modal"),u=document.querySelectorAll(".js-modal-close");i.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var c=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+c+'"]');s.classList.add("active"),a.classList.add("active")})});u.forEach(function(e){e.addEventListener("click",function(t){var c=this.closest(".modal");c.classList.remove("active"),a.classList.remove("active")})});document.body.addEventListener("keyup",function(e){var t=e.keyCode;t==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1);a.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")});(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();const r=document.querySelector(".go-top");window.addEventListener("scroll",m);r.addEventListener("click",d);function m(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?r.classList.add("go-top--show"):r.classList.remove("go-top--show")}function d(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(d,0))}
