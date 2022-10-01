// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).dmeanli={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===d(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(b(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function y(){var r=Array.prototype.slice.call(arguments,0);return p(b(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function b(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var d="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},v=/./;function j(r){return"boolean"==typeof r}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return m&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h,O="function"==typeof Symbol?Symbol.toStringTag:"";h=_()?function(r){var t,e,n,o,u;if(null==r)return g.call(r);e=r[O],u=O,t=null!=(o=r)&&w.call(o,u);try{r[O]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[O]=e:delete r[O],n}:function(r){return g.call(r)};var S=h,E=Boolean.prototype.toString;var A=_();function x(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===S(r)))}function P(r){return j(r)||x(r)}function T(){return new Function("return this;")()}s(P,"isPrimitive",j),s(P,"isObject",x);var B="object"==typeof self?self:null,k="object"==typeof window?window:null,N="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},M="object"==typeof N?N:null;var V=function(r){if(arguments.length){if(!j(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(B)return B;if(k)return k;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),C=V.document&&V.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var L,q=/^\s*function\s*([^(]*)/i;s(G,"REGEXP",q),L=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};var I=L;function J(r){return null!==r&&"object"==typeof r}var R=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!I(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(J);function U(r){var t,e,n,o;if(("Object"===(e=S(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=q.exec(n.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(J,"isObjectLikeArray",R);var X="function"==typeof v||"object"==typeof F||"function"==typeof C?function(r){return U(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?U(r).toLowerCase():t};var z,D,H=Object.getPrototypeOf;D=Object.getPrototypeOf,z="function"===X(D)?H:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===S(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var K=z;function Q(r){return null==r?null:(r=Object(r),K(r))}function W(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===S(r))return!0;r=Q(r)}return!1}function Y(r){try{return require(r)}catch(r){return W(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Z;function $(r){return Math.abs(r)}function rr(r,t,e,n){var o,u,i,a,f,c;if(r<=0)return 0;if(1===r||0===n)return t+e[0];for(u=n<0?(1-r)*n:0,o=0,f=0,c=0;c<r;c++)a=o+(i=t+e[u]),$(o)>=$(i)?f+=o-a+i:f+=i-a+o,o=a,u+=n;return o+f}s(rr,"ndarray",(function(r,t,e,n,o){var u,i,a,f,c,l;if(r<=0)return 0;if(1===r||0===n)return t+e[o];for(i=o,u=0,c=0,l=0;l<r;l++)f=u+(a=t+e[i]),$(u)>=$(a)?c+=u-f+a:c+=a-f+u,u=f,i+=n;return u+c}));var tr=Y(y("/home/runner/work/stats-base-dmeanli/stats-base-dmeanli/node_modules/@stdlib/blas-ext-base-dapxsumkbn/lib","./native.js")),er=Z=W(tr)?rr:tr;const{ndarray:nr}=Z;function or(r,t,e,n){return er(r,t,e,n)}var ur;s(or,"ndarray",(function(r,t,e,n,o){return nr(r,t,e,n,o)}));var ir=Y(y("/home/runner/work/stats-base-dmeanli/stats-base-dmeanli/node_modules/@stdlib/blas-ext-base-dapxsum/lib","./native.js"));ur=W(ir)?or:ir;const{ndarray:ar}=ur;function fr(r,t,e){var n;return r<=0?NaN:1===r||0===e?t[0]:t[n=e<0?(1-r)*e:0]+ar(r-1,-t[n],t,e,n+e)/r}function cr(r,t,e,n){return r<=0?NaN:1===r||0===e?t[n]:t[n]+ar(r-1,-t[n],t,e,n+e)/r}s(fr,"ndarray",cr),r.default=fr,r.ndarray=cr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
