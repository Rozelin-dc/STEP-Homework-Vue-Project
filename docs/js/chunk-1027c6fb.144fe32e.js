(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1027c6fb"],{"11f7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.title))]),n("div",[t._v(t._s(t.validInputExplanation))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),n("br"),n("button",{on:{click:function(e){t.result=t.calculate(t.input.trim())}}},[t._v("計算")]),n("button",{on:{click:function(e){t.result=t.test()}}},[t._v("テスト")]),n("div",[t._v("結果: "+t._s(t.result))])])},i=[],u=n("9ab4"),a=n("1b40"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.input="",e.result="",e}return Object(u["b"])(e,t),Object(u["a"])([Object(a["b"])({required:!0,type:String})],e.prototype,"title",void 0),Object(u["a"])([Object(a["b"])({required:!0,type:String})],e.prototype,"validInputExplanation",void 0),Object(u["a"])([Object(a["b"])({required:!0,type:Function})],e.prototype,"calculate",void 0),Object(u["a"])([Object(a["b"])({required:!0,type:Function})],e.prototype,"test",void 0),e=Object(u["a"])([Object(a["a"])({name:"ExComponent"})],e),e}(a["c"]),l=c,o=l,s=n("2877"),f=Object(s["a"])(o,r,i,!1,null,null,null);e["a"]=f.exports},1956:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){var n=["+"],r=0;while(r<t.length)if(isNaN(+t[r])){var a=u(t,r,e);l=a.token,o=a.idx;if(null===l)return null;n.push(l),r=o}else{var c=i(t,r),l=c.token,o=c.idx;n.push(l),r=o}return n},i=function(t,e){var n=0;while(e<t.length&&!isNaN(+t[e]))n=10*n+ +t[e],e+=1;if("."==t[e]){var r=.1;e+=1;while(e<t.length&&!isNaN(+t[e]))n+=+t[e]*r,r/=10,e+=1}var i=n;return{token:i,idx:e}},u=function(t,e,n){if(n.includes(t[e])){var r=t[e];return e+=1,{token:r,idx:e}}var i=null;return e+=1,{token:i,idx:e}}},"7b5d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Week3")]),n("ex-component",{attrs:{title:"宿題3","valid-input-explanation":"半角数字(小数含む)と+-*/()が入力可能",calculate:t.calculate,test:t.test}})],1)},i=[],u=n("9ab4"),a=n("1b40"),c=n("11f7"),l=n("1956"),o=n("ffee"),s=function(t){var e=l["a"](t,["+","-","*","/","(",")"]);if(null===e)return"error";var n=v(e);return n},f=function(){var t=2,e=s("(1+1)");return e!==t?"NG":(t=2,e=s("2*(1+1)/2"),e!==t?"NG":(e=s("1+(2+3"),"error"!==e?"NG":(e=s("1)+2+3"),"error"!==e?"NG":(t=1.4,e=s("(3+4*(2-1))/5"),e!==t?"NG":(t=18,e=s("((1+1)+1)*(3+3)"),e!==t?"NG":(t=5,e=s("1+(1+(1+1))+1"),e!==t?"NG":"OK"))))))},v=function(t){if(t.includes("(")&&!t.includes(")"))return"error";if(!t.includes("(")&&t.includes(")"))return"error";if(t.includes("(")){var e=0,n=t.indexOf("("),r=n+1;while(0!==e||")"!==t[r])"("===t[r]&&(e+=1),")"===t[r]&&(e-=1),r+=1;var i=t.slice(n+1,r);i.unshift("+");var u=v(i);if("error"===u)return"error";var a=t.slice(0,n);return a.push(u),a=a.concat(t.slice(r+1)),v(a)}return Object(o["a"])(t)},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.calculate=s,e.test=f,e}return Object(u["b"])(e,t),e=Object(u["a"])([Object(a["a"])({name:"Week3Ex3",components:{ExComponent:c["a"]}})],e),e}(a["c"]),d=p,b=d,h=n("2877"),O=Object(h["a"])(b,r,i,!1,null,null,null);e["default"]=O.exports},ffee:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n("1956"),i=function(t){var e=r["a"](t.trim(),["+","-","*","/"]);if(null===e)return"error";var n=u(e);return n},u=function(t){var e=a(t),n=c(e);return n},a=function(t){for(var e=[],n=0;n<t.length;n+=2)if("+"!==t[n]&&"-"!==t[n]){if("*"===t[n]){var r=+e[e.length-1];e[e.length-1]=r*+t[n+1]}if("/"===t[n]){r=+e[e.length-1];e[e.length-1]=r/+t[n+1]}}else e.push(t[n]),e.push(t[n+1]);return e},c=function(t){for(var e=0,n=0;n<t.length;n+=2)"+"===t[n]&&(e+=+t[n+1]),"-"===t[n]&&(e-=+t[n+1]);return e}}}]);
//# sourceMappingURL=chunk-1027c6fb.144fe32e.js.map