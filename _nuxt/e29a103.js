(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(t,o,e){var content=e(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(65).default)("447b5b89",content,!0,{sourceMap:!1})},358:function(t,o,e){t.exports=e.p+"img/logo.c3365ca.png"},359:function(t,o,e){"use strict";e(332)},360:function(t,o,e){var n=e(64)(!1);n.push([t.i,".toolbar-transparent{background-color:transparent!important}.toolbar .toolbar-title{font-size:1rem}.toolbar .toolbar-subtitle{font-size:.875rem}.toolbar .toolbar-item{font-size:1rem}.toolbar .toolbar-item:hover{color:#ffc806!important}",""]),t.exports=n},431:function(t,o,e){"use strict";e.r(o);e(28);var n={name:"Toolbar",data:function(){return{drawer:!1,isScrollingToUp:!1,items:[{name:"Strona główna",id:"#home"},{name:"Oferta",id:"#offer"},{name:"O nas",id:"#aboutUs"},{name:"Opinie",id:"#opinions"},{name:"Kontakt",id:"#contact"}]}},methods:{scrollTo:function(t){console.log(t),this.drawer=!1,this.$vuetify.goTo(t,{duration:800,offset:50,easing:"linear"})}},mounted:function(){var t=document.getElementById("toolbar");window.onscroll=function(){console.log(window.scrollY),0===window.scrollY&&(console.log("Pkt"),console.log(t.classList)),window.scrollY<50?(t.classList.add("toolbar-transparent"),t.classList.remove("secondary")):(t.classList.add("secondary"),t.classList.remove("toolbar-transparent"))}}},r=(e(359),e(66)),l=e(150),c=e.n(l),d=e(462),m=e(444),v=e(317),f=e(450),w=e(414),_=e(340),h=e(322),x=e(342),y=e(314),k=e(461),C=e(453),V=e(388),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",[o("v-app-bar",{staticClass:"toolbar py-1 elevation-15 toolbar-transparent",attrs:{id:"toolbar",fixed:"",height:"80px"}},[o("img",{staticClass:"ml-xl-15 mr-xl-10",attrs:{src:e(358),height:"70%",alt:"logo"}}),t._v(" "),o("v-toolbar-title",{staticClass:"my-auto hidden-md-and-down"},[o("p",{staticClass:"toolbar-title my-0 font-weight-bold"},[t._v("Pomoc Drogowa "),o("span",{staticClass:"primary--text"},[t._v("Hol-Trans")])]),t._v(" "),o("p",{staticClass:"toolbar-subtitle my-0"},[t._v("Przemysław Bogusławski")])]),t._v(" "),o("v-spacer",{staticClass:"hidden-sm-and-down"}),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-title",{staticClass:"hidden-sm-and-down"},t._l(t.items,(function(e){return o("a",{key:e.id,staticClass:"toolbar-item mx-2 white--text",on:{click:function(o){return t.scrollTo(e.id)}}},[t._v("\r\n          "+t._s(e.name)+"\r\n        ")])})),0),t._v(" "),o("v-spacer",{staticClass:"hidden-sm-and-down hidden-lg-and-up"}),t._v(" "),o("v-divider",{staticClass:"mx-5 py-0 hidden-md-and-down",attrs:{inset:"",vertical:""}}),t._v(" "),o("div",{staticClass:"mr-xl-10 mr-lg-10"},[o("v-btn",{attrs:{target:"_blank",text:"",fab:"",href:"https://www.facebook.com/POMOCDROGOWABOGUSLAWSKI"}},[o("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),o("v-btn",{attrs:{text:"",fab:"",href:"tel:609049726"}},[o("v-icon",[t._v("mdi-phone")])],1),t._v(" "),o("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(o){o.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),t._v(" "),o("v-navigation-drawer",{staticStyle:{"z-index":"5"},attrs:{fixed:"",clipped:""},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"primary--text"}},t._l(t.items,(function(e,i){return o("v-list-item",{key:e.id,on:{click:function(o){return t.scrollTo(e.id)}}},[o("v-list-item-title",{key:i},[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;c()(component,{VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:v.a,VDivider:f.a,VIcon:w.a,VList:_.a,VListItem:h.a,VListItemGroup:x.a,VListItemTitle:y.a,VNavigationDrawer:k.a,VSpacer:C.a,VToolbarTitle:V.a})}}]);