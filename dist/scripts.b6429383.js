parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jY3V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.open=e,exports.hideMenu=s;var t=document.querySelector(".navigation__list");function e(){this.classList.toggle("is-active"),"translateX(0%)"==t.style.transform&&window.screen.width<769?t.style.transform="translateX(100%)":t.style.transform="translateX(0%)"}function s(){var e=document.querySelector(".hamburger");window.screen.width<768&&(e.classList.remove("is-active"),"translateX(0%)"==t.style.transform?t.style.transform="translateX(100%)":t.style.transform="translateX(0%)")}
},{}],"moGU":[function(require,module,exports) {
"use strict";function e(){this.nextElementSibling.classList.toggle("active"),this.classList.toggle("highlighted"),this.childNodes[1].childNodes[1].classList.toggle("sign-open")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"iyF3":[function(require,module,exports) {
"use strict";function t(t){t.preventDefault();var e=document.querySelector(".status"),o=new FormData(t.target);fetch(t.target.action,{method:form.method,body:o,headers:{Accept:"application/json"}}).then(function(t){if(!t.ok)throw new Error("Niestety nie udało się wysłać wiadomości. Spróbuj jeszcze raz!");e.classList.add("show"),e.textContent="Udało się wysłać wiadomość. Dziękujemy!",setTimeout(function(){e.classList.remove("show"),e.textContent=""},5e3),form.reset()}).catch(function(t){e.classList.add("show"),e.textContent="Niestety nie udało się wysłać wiadomości. Spróbuj jeszcze raz!",setTimeout(function(){e.classList.remove("show"),e.textContent=""},5e3)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"g2Hq":[function(require,module,exports) {
"use strict";var e=require("./hamburger"),r=n(require("./menu")),t=n(require("./form"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=a(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw i}}}}function a(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var u=document.querySelector(".hamburger"),c=document.querySelectorAll(".accordion__title"),l=document.querySelectorAll(".navigation__item-link"),f=document.querySelector(".form");u.addEventListener("click",e.open),f.addEventListener("submit",t.default),c.forEach(function(e){return e.addEventListener("click",r.default)}),l.forEach(function(r){return r.addEventListener("click",e.hideMenu)});var d={root:null,rootMargin:"0px",threshold:.3},s=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(e.target.classList.add("in-view"),s.unobserve(e.target))})},d);window.addEventListener("DOMContentLoaded",function(e){var r,t=document.querySelectorAll(".fade"),n=document.querySelectorAll(".fade__titles"),a=o(t);try{for(a.s();!(r=a.n()).done;){var i=r.value;s.observe(i)}}catch(f){a.e(f)}finally{a.f()}var u,c=o(n);try{for(c.s();!(u=c.n()).done;){var l=u.value;s.observe(l)}}catch(f){c.e(f)}finally{c.f()}});
},{"./hamburger":"jY3V","./menu":"moGU","./form":"iyF3"}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.b6429383.js.map