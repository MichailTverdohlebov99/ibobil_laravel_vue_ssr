webpackJsonp([34],{12:function(n,t){},15:function(n,t,e){"use strict";function r(n){var t=n.replace(/^https?:\/\//,"").replace(/\/.*$/,""),e=t.split(".").slice(-3);return"www"===e[0]&&e.shift(),e.join(".")}function a(n){var t=Date.now()/1e3-Number(n);return t<3600?o(~~(t/60)," minute"):t<86400?o(~~(t/3600)," hour"):o(~~(t/86400)," day")}function o(n,t){return 1===n?n+t:n+t+"s"}Object.defineProperty(t,"__esModule",{value:!0}),t.host=r,t.timeAgo=a},16:function(n,t,e){"use strict";function r(){return new p.a.Store({state:{homeData:null,products:null,product:null,entries:null,caravans:null,bobil:null,brands:null,brand:null,item:null,additionalInfo:null,activeType:null,itemsPerPage:20,items:{},users:{},lists:{top:[],new:[],show:[],ask:[],job:[]}},actions:T,mutations:_,getters:v})}function a(){return new A.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:1e3}},routes:[{path:"/",components:{default:E,header:W,footer:X}},{path:"/merker",components:{default:g,header:W,footer:X}},{path:"/merker/:id",components:{default:S,header:W,footer:X},name:"BrandItem",props:!0},{path:"/campingvogn",components:{default:O,header:W,footer:X}},{path:"/campingvogn/:id",components:{default:D,header:W,footer:X},name:"CaravanItem",props:!0},{path:"/bobil",components:{default:C,header:W,footer:X}},{path:"/bobil/:id",components:{default:M,header:W,footer:X}},{path:"/finansiering",components:{default:w,header:W,footer:X}},{path:"/om-oss",components:{default:I,header:W,footer:X}},{name:"BobilUsedView",path:"/brukte-bobiler",components:{default:y,header:W,footer:X}},{name:"BobilNewView",path:"/nye-bobiler",components:{default:R,header:W,footer:X}},{path:"/form1",components:{default:P},name:"Form1",props:!0},{path:"/form2",components:{default:B},name:"Form2",props:!0},{path:"/form3",components:{default:V},name:"Form3",props:!0},{name:"login",path:"/login",component:j},{path:"*",redirect:"/404"},{name:"Page404",path:"/404",components:{default:N,header:W,footer:X}},{name:"AdminPageView",path:"/admin/page",components:{default:L,header:Z}},{name:"AdminHomeView",path:"/admin/page/home",components:{default:F,header:Z}},{name:"AdminBrandView",path:"/admin/page/brand",components:{default:k,header:Z}},{name:"AdminFinanceView",path:"/admin/page/finance",components:{default:H,header:Z}},{name:"AdminBobilView",path:"/admin/page/bobil",components:{default:G,header:Z}},{name:"AdminCaravanView",path:"/admin/page/caravan",components:{default:$,header:Z}},{name:"AdminAboutView",path:"/admin/page/about",components:{default:x,header:Z}},{name:"AdminTopComponent",path:"/admin/page/top",components:{default:U,header:Z}},{name:"AdminBobilProduct",path:"/admin/bobil",components:{default:q,header:Z}},{name:"AdminEditProduct",path:"/admin/product/:id",components:{default:Y,header:Z},props:!0},{name:"AdminCaravanProduct",path:"/admin/caravan",components:{default:z,header:Z}},{name:"AdminFooterComponent",path:"/admin/footer",components:{default:J,header:Z}},{name:"AdminSettings",path:"/admin/settings",components:{default:K,header:Z}},{name:"AdminLogout",path:"/logout",components:{default:Q,header:Z}}]})}function o(n){var t=n.$options.title;if(t)return"function"==typeof t?t.call(n):t}function i(n){var t=n.$options.description;if(t)return"function"==typeof t?t.call(n):t}Object.defineProperty(t,"__esModule",{value:!0});var u=e(1),c=(e(19),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"header"}}),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{staticClass:"view"})],1),e("router-view",{attrs:{name:"footer"}})],1)}),l=[],d={},s=d,f=(e(21),e(5)),h=Object(f.a)(s,c,l,!1,null,null,null),m=h.exports,p=e(14),b=e(22),T={FETCH_ALL_DATA:function(n){var t=n.commit;return Object(b.a)().then(function(n){return t("SET_ALL_DATA",{data:n})})},FETCH_CARAVAN_DATA:function(n){var t=n.commit;return Object(b.e)().then(function(n){return t("SET_CARAVAN_DATA",{data:n})})},FETCH_BRAND_DATA:function(n){var t=n.commit;return Object(b.c)().then(function(n){return t("SET_BRAND_DATA",{data:n})})},FETCH_BRAND_ITEM:function(n,t){var e=n.commit,r=t.id;return Object(b.d)({id:r}).then(function(n){return e("SET_BRAND_ITEM",{data:n})})},FETCH_RV_DATA:function(n){var t=n.commit;n.state;return Object(b.h)().then(function(n){return t("SET_RV_DATA",{data:n})})},FETCH_RV_ITEM:function(n,t){var e=n.commit,r=(n.state,t.id);return Object(b.i)({id:r}).then(function(n){return e("SET_RV_ITEM",{data:n})})},FETCH_HOME_DATA:function(n){var t=n.commit;n.state;return Object(b.f)().then(function(n){return t("SET_HOME_DATA",{data:n})})},FETCH_BOBIL_DATA:function(n,t){var e=n.commit,r=(n.state,t.token);return Object(b.b)({token:r}).then(function(n){return e("SET_BOBIL_DATA",{data:n})})},FETCH_PRODUCT_ITEM:function(n,t){var e=n.commit,r=(n.state,t.id);return Object(b.g)({id:r}).then(function(n){return e("SET_PRODUCT_ITEM",{data:n})})},POST_LOGIN:function(n,t){var e=n.commit,r=t.credential;return Object(b.j)({credential:r}).then(function(n){return e("SET_LOGIN_DATA",{data:n})})}},_={SET_ACTIVE_TYPE:function(n,t){var e=t.type;n.activeType=e},SET_LIST:function(n,t){var e=t.type,r=t.ids;n.lists[e]=r},SET_ITEMS:function(n,t){t.items.forEach(function(t){t&&u.default.set(n.items,t.id,t)})},SET_USER:function(n,t){var e=t.id,r=t.user;u.default.set(n.users,e,r||!1)},SET_RV_DATA:function(n,t){var e=t.data;n.products=e.products},SET_RV_ITEM:function(n,t){var e=t.data;n.item=e.product,n.additionalInfo=JSON.parse(e.additional)},SET_HOME_DATA:function(n,t){var e=t.data;n.homeData=e.infos},SET_ALL_DATA:function(n,t){var e=t.data;n.products=e.products,n.entries=e.entries},SET_CARAVAN_DATA:function(n,t){var e=t.data;n.caravans=e.products},SET_BRAND_DATA:function(n,t){var e=t.data;n.brands=e.brands},SET_BRAND_ITEM:function(n,t){var e=t.data;n.brand=e},SET_BOBIL_DATA:function(n,t){var e=t.data;n.bobil=e},SET_PRODUCT_ITEM:function(n,t){var e=t.data;n.product=e},SET_LOGIN_DATA:function(n,t){var e=t.data;n.login=e,localStorage&&(localStorage.setItem("token",e.token),localStorage.setItem("user-info",JSON.stringify(e.user)))}},v={activeIds:function(n){var t=n.activeType,e=n.itemsPerPage,r=n.lists;if(!t)return[];var a=Number(n.route.params.page)||1,o=(a-1)*e,i=a*e;return r[t].slice(o,i)},activeItems:function(n,t){return t.activeIds.map(function(t){return n.items[t]}).filter(function(n){return n})}};u.default.use(p.a);var A=e(41);u.default.use(A.a);var E=function(){return e.e(0).then(e.bind(null,198))},g=function(){return e.e(17).then(e.bind(null,199))},S=function(){return e.e(19).then(e.bind(null,200))},I=function(){return e.e(1).then(e.bind(null,201))},w=function(){return e.e(12).then(e.bind(null,202))},O=function(){return e.e(18).then(e.bind(null,203))},D=function(){return e.e(25).then(e.bind(null,204))},C=function(){return e.e(20).then(e.bind(null,205))},y=function(){return e.e(21).then(e.bind(null,206))},R=function(){return e.e(22).then(e.bind(null,207))},M=function(){return e.e(23).then(e.bind(null,208))},P=function(){return e.e(28).then(e.bind(null,209))},B=function(){return e.e(27).then(e.bind(null,210))},V=function(){return e.e(26).then(e.bind(null,211))},j=function(){return e.e(31).then(e.bind(null,212))},N=function(){return e.e(32).then(e.bind(null,213))},L=function(){return e.e(14).then(e.bind(null,214))},k=function(){return e.e(8).then(e.bind(null,215))},F=function(){return e.e(5).then(e.bind(null,216))},H=function(){return e.e(15).then(e.bind(null,217))},G=function(){return e.e(9).then(e.bind(null,218))},$=function(){return e.e(7).then(e.bind(null,219))},x=function(){return e.e(10).then(e.bind(null,220))},U=function(){return e.e(4).then(e.bind(null,221))},J=function(){return e.e(6).then(e.bind(null,222))},q=function(){return e.e(3).then(e.bind(null,223))},z=function(){return e.e(2).then(e.bind(null,224))},Y=function(){return e.e(11).then(e.bind(null,225))},K=function(){return e.e(13).then(e.bind(null,226))},Q=function(){return e.e(29).then(e.bind(null,227))},W=function(){return e.e(16).then(e.bind(null,228))},X=function(){return e.e(30).then(e.bind(null,229))},Z=function(){return e.e(24).then(e.bind(null,230))},nn=e(42),tn={mounted:function(){var n=o(this),t=i(this);n&&(document.title=n),t&&(document.description=t)}},en=tn,rn=e(15),an=e(44);e(45);e(43),u.default.use(an.VLazyImagePlugin),u.default.mixin(en),u.default.mixin({data:function(){return{SERVER_URL:"https://ibobil.fantasylab.io/api/auth/"}}}),Object.keys(rn).forEach(function(n){u.default.filter(n,rn[n])});var on=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"progress",style:{width:n.percent+"%",height:n.height,"background-color":n.canSuccess?n.color:n.failedColor,opacity:n.show?1:0}})},un=[],cn={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#5897CF",failedColor:"#ff0000"}},methods:{start:function(){var n=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){n.increase(n._cut*Math.random()),n.percent>95&&n.finish()},100),this},set:function(n){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(n),this},get:function(){return Math.floor(this.percent)},increase:function(n){return this.percent=this.percent+Math.floor(n),this},decrease:function(n){return this.percent=this.percent-Math.floor(n),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var n=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){n.show=!1,n.$nextTick(function(){setTimeout(function(){n.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},ln=cn,dn=(e(46),Object(f.a)(ln,on,un,!1,null,"94eb8212",null)),sn=dn.exports,fn=u.default.prototype.$bar=new u.default(sn).$mount();document.body.appendChild(fn.$el),u.default.mixin({beforeRouteUpdate:function(n,t,e){var r=this.$options.asyncData;r?r({store:this.$store,route:n}).then(e).catch(e):e()}});var hn=function(){var n=r(),t=a();return Object(nn.sync)(n,t),{app:new u.default({router:t,store:n,render:function(n){return n(m)}}),router:t,store:n}}(),mn=hn.app,pn=hn.router,bn=hn.store;window.__INITIAL_STATE__&&bn.replaceState(window.__INITIAL_STATE__),pn.onReady(function(){pn.beforeResolve(function(n,t,e){var r=pn.getMatchedComponents(n),a=pn.getMatchedComponents(t),o=!1,i=r.filter(function(n,t){return o||(o=a[t]!==n)}),u=i.map(function(n){return n.asyncData}).filter(function(n){return n});if(!u.length)return e();fn.start(),Promise.all(u.map(function(t){return t({store:bn,route:n})})).then(function(){fn.finish(),e()}).catch(e)}),mn.$mount("#app")})},21:function(n,t,e){"use strict";var r=e(6),a=e.n(r);a.a},22:function(n,t,e){"use strict";(function(n){function r(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return p&&console.log("requesting "+child+"..."),new Promise(function(r,a){b({method:n,url:t,data:e}).then(function(n){200===n.status?r(n.data):a("Ibobil API error: "+n.data.message)}).catch(function(n){a("Axios issue: "+n)})})}function a(){return r("GET",T+"getRV")}function o(n){var t=n.id;return r("GET",T+"viewOne/"+t)}function i(n){var t=n.id;return r("GET",T+"viewOne2/"+t)}function u(n){var t=n.id;return r("GET",T+"brandOne/"+t)}function c(){return r("POST",T+"get_home")}function l(){return r("GET",T+"getAll")}function d(){return r("GET",T+"getCaravan")}function s(){return r("GET",T+"getAllBrand")}function f(n){var t=n.token;return r("GET",T+"getBobilerText?token="+t)}function h(n){var t=n.credential;return r("POST",T+"login",t)}t.h=a,t.i=o,t.g=i,t.d=u,t.f=c,t.a=l,t.e=d,t.c=s,t.b=f,t.j=h;var m=e(23),p=!!n.env.DEBUG_API,b=Object(m.a)(),T="https://ibobil.fantasylab.io/api/auth/";b.onServer}).call(t,e(3))},23:function(n,t,e){"use strict";function r(){return o.a}t.a=r;var a=e(13),o=e.n(a)},45:function(n,t){},46:function(n,t,e){"use strict";var r=e(12),a=e.n(r);a.a},50:function(n,t,e){n.exports=e.p+"gallery-banner.png?55d5a779895e615056410a6ec97af948"},6:function(n,t){}},[16]);