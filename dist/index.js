"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(g,t){
var d=require('@stdlib/blas-ext-base-dapxsum/dist').ndarray;function o(e,r,i){var a;return e<=0?NaN:e===1||i===0?r[0]:(i<0?a=(1-e)*i:a=0,r[a]+d(e-1,-r[a],r,i,a+i)/e)}t.exports=o
});var s=n(function(h,q){
var y=require('@stdlib/blas-ext-base-dapxsum/dist').ndarray;function j(e,r,i,a){return e<=0?NaN:e===1||i===0?r[a]:r[a]+y(e-1,-r[a],r,i,a+i)/e}q.exports=j
});var p=n(function(k,l){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=v(),R=s();f(m,"ndarray",R);l.exports=m
});var _=require("path").join,x=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=p(),u,c=x(_(__dirname,"./native.js"));E(c)?u=O:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
