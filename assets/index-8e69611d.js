(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();(()=>{const e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]");e.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!r),o.classList.toggle("is-open")})})();var s=document.querySelectorAll(".js-open-modal"),a=document.querySelector(".js-overlay-modal"),d=document.querySelectorAll(".js-modal-close");s.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault();var r=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+r+'"]');c.classList.add("active"),a.classList.add("active")})});d.forEach(function(e){e.addEventListener("click",function(o){var r=this.closest(".modal");r.classList.remove("active"),a.classList.remove("active")})});document.body.addEventListener("keyup",function(e){var o=e.keyCode;o==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1);a.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")});(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();
