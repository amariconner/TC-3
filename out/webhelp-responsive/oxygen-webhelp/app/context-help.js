(()=>{"use strict";var e,t={636:(e,t,n)=>{var r=n(7856),o=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}o().addHook("afterSanitizeAttributes",(function(e){"_blank"==e.target&&e.setAttribute("rel","noopener")}));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"appendHtmlNode",value:function(e,t){var n=o().sanitize(e[0],{ADD_ATTR:["target"]});t.append(n)}},{key:"appendElementNodeToBody",value:function(e){var t=o().sanitize(e,{RETURN_DOM:!0,RETURN_DOM_IMPORT:!0,ADD_ATTR:["target"]});return document.body.appendChild(t.firstChild)}},{key:"sanitize",value:function(e){return o().sanitize(e,{ALLOWED_TAGS:[]})}}],null&&a(t.prototype,null),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l=n(3193);function u(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getParameter",value:function(e){var t,n,r,o=new URLSearchParams(window.location.search),a=new URLSearchParams,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=u(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(o);try{for(i.s();!(t=i.n()).done;){var l=(n=t.value,r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(n,r)||u(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],f=l[1];a.append(c.toLowerCase(),f)}}catch(e){i.e(e)}finally{i.f()}var p=a.get(e.toLowerCase());return p&&(p=(p=decodeURIComponent(p)).replace(/\+/g," ")),p}},{key:"updateSearchParameter",value:function(e,t){var n=window.location.search,r=window.location.href,o=r.substr(0,r.indexOf(n)+1),a=new URLSearchParams(window.location.search);a.delete(e),a.set(e,encodeURIComponent(t)),window.history.pushState(e,document.title,o+a.toString())}},{key:"loadJS",value:function(e,t){var n=document.createElement("script");n.src=e,n.onload=t,n.onreadystatechange=t,document.body.appendChild(n)}},{key:"isLocal",value:function(){this.debug("isLocal()");try{var e=window.location.protocol;if(e.includes("http")||e.includes("https"))return!1}catch(e){this.debug(e)}return!0}},{key:"preventAutocompletePopupToAppear",value:function(){l(window).on("resize",(function(){l("#textToSearch").trigger("blur"),l(".ui-autocomplete").trigger("blur")}))}},{key:"debug",value:function(e,t){}}],null&&f(t.prototype,null),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"init",value:function(e){var t=p.getParameter("contextId"),n=p.getParameter("appname");null!=t&&""!=t?p.loadJS("./oxygen-webhelp/app/context-help/context-help-map.js",(function(){for(var e=!0,r=0;r<contextHelpMap.length;r++){var o=contextHelpMap[r];if(t==o.appid&&(null==n||n==o.appname)){var a=o.path;if(null!=a){var l=decodeURI(window.location.hash),u=i.sanitize(l);window.location=a+u,e=!1}break}}e&&(window.location="index.html")})):"cshelp"===e&&(window.location="index.html")}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());n(3193)((function(){s.init("cshelp")}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,o,a]=e[f],l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j="context-help",(()=>{var e={"context-help":0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,u]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var f=u(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(f)},n=self.webpackChunkwebhelp=self.webpackChunkwebhelp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,["commons"],(()=>r(636)));o=r.O(o)})();
//