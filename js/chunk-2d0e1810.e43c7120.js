(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1810"],{"7b5d":function(r,e,n){"use strict";n.r(e);var t=function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",[n("h2",[r._v("Week3")]),n("ex-component",{attrs:{title:"宿題3","valid-input-explanation":"半角数字(小数含む)と+-*/()が入力可能。()前後の*は省略可能",calculate:r.calculate,test:r.test}})],1)},o=[],u=n("9ab4"),i=n("1b40"),l=n("11f7"),a=n("1956"),c=n("ffee"),s=function(r){var e=a["a"](r,["+","-","*","/","(",")"]);if(null===e)return"error";var n=N(e);return n},f=function(){var r=2,e=s("(1+1)");return"error"!==e&&e.eq(r)?(r=2,e=s("2*(1+1)/2"),"error"!==e&&e.eq(r)?(r=1.4,e=s("(3+4*(2-1))/5"),"error"!==e&&e.eq(r)?(r=18,e=s("((1+1)+1)*(3+3)"),"error"!==e&&e.eq(r)?(r=5,e=s("1+(1+(1+1))+1"),"error"!==e&&e.eq(r)?(r=11.1,e=s("(1.5+2.2)*3"),"error"!==e&&e.eq(r)?(r=-11.1,e=s("(1.5+2.2)*(-3)"),"error"!==e&&e.eq(r)?(r=16,e=s("2(3+5)"),"error"!==e&&e.eq(r)?(r=16,e=s("2(3-1+2)2"),"error"!==e&&e.eq(r)?(r=-.2,e=s("1+(-(0.1+1.1))"),"error"!==e&&e.eq(r)?(e=s("1+(2+3"),"error"!==e?"NG":(e=s("1)+2+3"),"error"!==e?"NG":(e=s("(((3))"),"error"!==e?"NG":(e=s("()*2+1"),"error"!==e?"NG":(e=s("(1+1*)2"),"error"!==e?"NG":"OK"))))):"NG"):"NG"):"NG"):"NG"):"NG"):"NG"):"NG"):"NG"):"NG"):"NG"},N=function(r){if(r.includes("(")&&!r.includes(")"))return"error";if(!r.includes("(")&&r.includes(")"))return"error";if(r.includes("(")){var e=0,n=r.indexOf("("),t=n+1;while((0!==e||")"!==r[t])&&t<r.length)"("===r[t]&&(e+=1),")"===r[t]&&(e-=1),t+=1;if(t>=r.length)return"error";var o=r.slice(n+1,t);if(0===o.length)return"error";"-"!==o[0]&&o.unshift("+");var u=N(o);if("error"===u)return"error";var i=r.slice(0,n);i.length>0&&!isNaN(+i[i.length-1])&&i.push("*"),i.push(u);var l=r.slice(t+1);return l.length>0&&!isNaN(+l[0])&&l.unshift("*"),i=i.concat(l),N(i)}return Object(c["a"])(r)},h=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.calculate=s,e.test=f,e}return Object(u["b"])(e,r),e=Object(u["a"])([Object(i["a"])({name:"Week3Ex3",components:{ExComponent:l["a"]}})],e),e}(i["c"]),p=h,G=p,v=n("2877"),d=Object(v["a"])(G,t,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e1810.e43c7120.js.map