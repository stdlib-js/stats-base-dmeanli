"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(h,s){
var l=require('@stdlib/blas-ext-base-dapxsum/dist').ndarray;function p(e,r,a,i){return e<=0?NaN:e===1||a===0?r[i]:r[i]+l(e-1,-r[i],r,a,i+a)/e}s.exports=p
});var q=n(function(k,v){
var y=require('@stdlib/strided-base-stride2offset/dist'),j=u();function x(e,r,a){return j(e,r,a,y(e,a))}v.exports=x
});var o=n(function(w,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=u();R(d,"ndarray",_);m.exports=d
});var f=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,c=E(f(__dirname,"./native.js"));O(c)?t=b:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
