"use strict";function scrollToY(o){var n=setTimeout(function(){var e=window.pageYOffset;if(o<=e)return window.scrollTo(0,o),void clearTimeout(n);var t=e+10;window.scrollTo(0,t),scrollToY(o)},40)}function Overlay(){var e=document.querySelector(".overlay");return{hide:function(){e.classList.add("hidden")},show:function(){e.classList.remove("hidden")},item:e,isVisible:function(){return!e.classList.contains("hidden")}}}var overlay=new Overlay;function ContactForm(){var e=document.querySelector(".contacts-feedback"),t=document.body;return{show:function(){overlay.isVisible&&aside&&aside.hide(),t.style.overflow="hidden",e.classList.remove("hidden")},hide:function(){t.style.overflow="",e.classList.add("hidden")}}}var contactForm=new ContactForm;function checkmark(){var e=document.querySelectorAll(".checkmark");0!=e.length&&e.forEach(function(t){t.querySelector(".checkmark__input").addEventListener("change",function(e){e.target.checked?t.classList.add("checked"):t.classList.remove("checked")})})}function moreSlider(){var e=document.querySelectorAll(".more-slider__track");0!=e.length&&e.forEach(function(e){e=new Flickity(e,{contain:!0,cellAlign:"left",pageDots:!1})})}function scrollMain(){if("/"==window.location.pathname){var o=window.pageYOffset,n=!1,e=document.querySelector(".header").offsetHeight,c=document.documentElement.clientHeight,i=c-e;document.addEventListener("scroll",function(){var e=o-window.pageYOffset<=0?"bottom":"top";if(o=window.pageYOffset,"top"!=e){var t=window.pageYOffset;n&&t<=i&&(n=!1),!n&&1<=t&&t<=c&&(scrollToY(i),n=!0)}})}}function toTop(){var e=document.querySelector(".to-top");e.onclick=function(){scrollToY(0)},document.addEventListener("scroll",function(){300<=window.pageYOffset?e.classList.remove("hidden"):e.classList.add("hidden")})}function search(){document.querySelector(".search-top").querySelector(".search-top__button");function o(e){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}document.addEventListener("click",function(e){for(var t=e.target;t!=document;){if(t.classList.contains("search-top__button"))return void o(t.closest(".search-top"));t=t.parentNode}})}function thumbnails(){var o=this,e=document.querySelector(".thumbnails");if(e){var t=e.querySelector(".thumbnails__track"),n=e.querySelector(".thumbnails__img img"),c=t.querySelector(".thumbnails__small.active");t.addEventListener("click",function(e){for(var t=e.target;t!=o;){if(t.classList.contains("thumbnails__small"))return void i(t);t=t.parentNode}})}function i(e){var t=e.getElementsByTagName("img")[0];n.src=t.src,function(e){c.classList.remove("active"),(c=e).classList.add("active")}(e)}}function companyFeaturesMobile(){if(!(425<document.documentElement.offsetWidth)){var e=document.querySelector(".num-info");new Flickity(e,{contain:!0,pageDots:!1,prevNextButtons:!1,cellAlign:"left"})}}function asideMobile(){if(!(800<document.documentElement.offsetWidth)){var e=document.querySelector(".aside-menu"),t=document.querySelector(".aside-menu__trigger"),o=document.body;return t.addEventListener("click",function(){c()}),overlay.item.addEventListener("click",function(){n()}),{hide:n,show:c}}function n(){o.style.overflow="",overlay.hide(),e.classList.add("hidden")}function c(){o.style.overflow="hidden",overlay.show(),e.classList.remove("hidden")}}checkmark(),moreSlider(),toTop(),search(),thumbnails(),companyFeaturesMobile();var aside=asideMobile();