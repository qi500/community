require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsA/topTips/index"],{"0087":function(t,n,e){},"0d79":function(t,n,e){"use strict";e.r(n);var u=e("85ee"),i=e("2316");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("78db");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],u["b"],u["c"],!1,null,"771c5d08",null,!1,u["a"],r);n["default"]=c.exports},1927:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{duration:2e3,title:"忽如一夜春风来，千树万树梨花开",type:"primary"}},methods:{showTips:function(){this.$refs.uTips.show({duration:this.duration,title:this.title,type:this.type})},typeChange:function(t){this.type=0==t?"primary":1==t?"success":2==t?"error":3==t?"warning":"info",this.showTips()},durationChange:function(t){this.duration=0==t?4e3:1==t?2e3:500,this.showTips()}}};n.default=u},2316:function(t,n,e){"use strict";e.r(n);var u=e("1927"),i=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=i.a},"6ec4":function(t,n,e){"use strict";(function(t){e("e1a2");u(e("66fd"));var n=u(e("0d79"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"78db":function(t,n,e){"use strict";var u=e("0087"),i=e.n(u);i.a},"85ee":function(t,n,e){"use strict";var u={uTopTips:function(){return e.e("uview-ui/components/u-top-tips/u-top-tips").then(e.bind(null,"648e"))},uSubsection:function(){return e.e("uview-ui/components/u-subsection/u-subsection").then(e.bind(null,"7707"))}},i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}))}},[["6ec4","common/runtime","common/vendor"]]]);