(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-icon/u-icon"],{"19e9":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-icon",props:{name:{type:String,default:""},color:{type:String,default:""},size:{type:[Number,String],default:"inherit"},bold:{type:Boolean,default:!1},index:{type:[Number,String],default:""},hoverClass:{type:String,default:""},customPrefix:{type:String,default:"uicon"},label:{type:String,default:""},labelPos:{type:String,default:"right"},labelSize:{type:[String,Number],default:"28"},labelColor:{type:String,default:"#606266"},marginLeft:{type:[String,Number],default:"6"},marginTop:{type:[String,Number],default:"6"},marginRight:{type:[String,Number],default:"6"},marginBottom:{type:[String,Number],default:"6"},imgMode:{type:String,default:"widthFix"},customStyle:{type:Object,default:function(){return{}}}},computed:{customClass:function(){var t=[];return t.push(this.customPrefix+"-"+this.name),"uicon"==this.customPrefix?t.push("u-iconfont"):t.push(this.customPrefix),this.color&&this.$u.config.type.includes(this.color)&&t.push("u-icon__icon--"+this.color),t},iconStyle:function(){var t={};return t={fontSize:"inherit"==this.size?"inherit":this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal"},this.color&&!this.$u.config.type.includes(this.color)&&(t.color=this.color),t},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var t={};return t.width=this.$u.addUnit(this.size),t.height=this.$u.addUnit(this.size),t}},methods:{click:function(){this.$emit("click",this.index)},touchstart:function(){this.$emit("touchstart",this.index)}}};i.default=n},4715:function(t,i,e){},a344:function(t,i,e){"use strict";var n=e("4715"),u=e.n(n);u.a},ad5d:function(t,i,e){"use strict";var n,u=function(){var t=this,i=t.$createElement,e=(t._self._c,t.__get_style([t.customStyle])),n=t.__get_style([t.imgStyle]),u=t.__get_style([t.iconStyle]),r=t.$u.addUnit(t.labelSize),o=t.$u.addUnit(t.marginLeft),a=t.$u.addUnit(t.marginTop),s=t.$u.addUnit(t.marginRight),c=t.$u.addUnit(t.marginBottom);t.$mp.data=Object.assign({},{$root:{s0:e,s1:n,s2:u,g0:r,g1:o,g2:a,g3:s,g4:c}})},r=[];e.d(i,"b",(function(){return u})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))},b1ed:function(t,i,e){"use strict";e.r(i);var n=e("ad5d"),u=e("f965");for(var r in u)"default"!==r&&function(t){e.d(i,t,(function(){return u[t]}))}(r);e("a344");var o,a=e("f0c5"),s=Object(a["a"])(u["default"],n["b"],n["c"],!1,null,"033c9922",null,!1,n["a"],o);i["default"]=s.exports},f965:function(t,i,e){"use strict";e.r(i);var n=e("19e9"),u=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-icon/u-icon-create-component',
    {
        'uview-ui/components/u-icon/u-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b1ed"))
        })
    },
    [['uview-ui/components/u-icon/u-icon-create-component']]
]);
