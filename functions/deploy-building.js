!function(e,o){for(var n in o)e[n]=o[n]}(exports,function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";var t=function(e){return e&&e.__esModule?e:{default:e}}(n(1));o.handler=function(e,o,n){console.log("start new stuff");const r=t.default.parse(e.body);console.log("params"+r),console.log(JSON.parse(r)),console.log(JSON.stringify(r)),console.log("end new stuff"),console.log("--\x3e start deploy-building"),console.log("after start something...");const l=JSON.parse(e.body);console.log(l),console.log(Object.keys(l.payload)),console.log(Object.keys(l.site));var s=JSON.stringify(o);console.log("context"+s),console.log(Object.keys(o));const c=l.payload.commit_ref,u=l.payload.branch;if(console.log("commit (just in case) : "+c),console.log("branch (just in case) : "+u),c){var i=process.env.STASH_USER;console.log("STASH_USER: "+i);var a=process.env.STASH_PASSWORD;console.log("STASH_PASSWORD: "+a);l.payload.review_url;console.log("REVIEW_URL: "+a);var d=l.payload.build_id;if(console.log("BUILD_ID: "+d),!i||!stash_password)return void console.log("Could not update bitbucket; STASH_USER or STASH_PASSWORD not defined in BUILD_ENVIRONMENTS")}else console.log("The build has not triggered by PR; no bitbucket update is required...");console.log("--\x3e end deploy-building")}},function(e,o){e.exports=require("querystring")}]));