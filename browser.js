// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(i.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&a&&a.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e){return Math.abs(e)}function _(e,r,t,n){var o,a,i,u,l,f;if(e<=0)return 0;if(1===e||0===n)return r+t[0];for(a=n<0?(1-e)*n:0,o=0,l=0,f=0;f<e;f++)u=o+(i=r+t[a]),c(o)>=c(i)?l+=o-u+i:l+=i-u+o,o=u,a+=n;return o+l}function p(e,r,t,n,o){var a,i,u,l,f,_;if(e<=0)return 0;if(1===e||0===n)return r+t[o];for(i=o,a=0,f=0,_=0;_<e;_++)l=a+(u=r+t[i]),c(a)>=c(u)?f+=a-l+u:f+=u-l+a,a=l,i+=n;return a+f}function d(e,r,t,n,o){return p(e,r,t,n,o)}function y(e,r,t){var n;return e<=0?NaN:1===e||0===t?r[0]:r[n=t<0?(1-e)*t:0]+d(e-1,-r[n],r,t,n+t)/e}return f(_,"ndarray",p),f((function(e,r,t,n){return _(e,r,t,n)}),"ndarray",d),f(y,"ndarray",(function(e,r,t,n){return e<=0?NaN:1===e||0===t?r[n]:r[n]+d(e-1,-r[n],r,t,n+t)/e})),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dmeanli=r();
//# sourceMappingURL=browser.js.map
