import{_ as he,o as be,c as xe,b as i,h as B,n as ke,F as Ae,j as ne,k as m,l as d,m as g,p as I,q as Ce,s as Te,u as Ee,x as ee,y as Q,z as me,A as S}from"./index.4bcef562.js";var Me="/assets/img/logo.png";const Ne={name:"navbar",data(){return{show:!1}},methods:{toggleNavbar(){this.show=!this.show}}},Le={class:"navbar navbar-expand-lg bg-white text-uppercase fixed-top",id:"mainNav"},Oe={class:"container"},Be=i("a",{class:"navbar-brand",href:"#page-top"},[i("img",{src:Me,alt:"logo",height:"40"})],-1),Ie=i("i",{class:"fas fa-bars"},null,-1),je={class:"navbar-nav ms-auto"},$e={class:"nav-item mx-0 mx-lg-1"},De={class:"nav-item mx-0 mx-lg-1"};function Pe(e,t,a,r,o,l){return be(),xe("nav",Le,[i("div",Oe,[Be,i("button",{class:"navbar-toggler text-uppercase font-weight-bold bg-secondary text-white rounded",type:"button",onClick:t[0]||(t[0]=u=>l.toggleNavbar())},[B(" Menu "),Ie]),i("div",{class:ke(["collapse navbar-collapse",o.show?"fade show":""]),id:"navbarResponsive"},[i("ul",je,[i("li",$e,[i("a",{class:"nav-link py-3 px-0 px-lg-3 rounded",href:"#header_form",onClick:t[1]||(t[1]=u=>l.toggleNavbar())},"\u8A02\u8CFC\u8868\u55AE")]),i("li",De,[i("a",{class:"nav-link py-3 px-0 px-lg-3 rounded",href:"#product_description",onClick:t[2]||(t[2]=u=>l.toggleNavbar())},"\u5546\u54C1\u8CC7\u8A0A")])])],2)])])}var Ke=he(Ne,[["render",Pe]]);const Re={name:"Footer"},Ve=i("footer",{class:"footer text-center"},[i("div",{class:"container"},[i("div",{class:"row"},[i("div",{class:"col-lg-4 mb-5 mb-lg-0 text-start"},[i("h4",{class:"text-uppercase mb-4"},"\u6CE2\u8D6B\u58EB\u9818\u5730\u7CBE\u54C1\u5496\u5561\u9928"),i("a",{class:"btn btn-outline-dark btn-social mx-1",target:"_blank",href:"https://www.facebook.com/borgesplace"},[i("i",{class:"fab fa-fw align-bottom fa-facebook-f"})]),i("a",{class:"btn btn-outline-dark btn-social mx-1",target:"_blank",href:"https://www.instagram.com/borgesplace"},[i("i",{class:"fab fa-fw align-bottom fa-instagram"})])]),i("div",{class:"col-lg-4 text-start"},[i("h5",{class:"text-uppercase mb-4"},"\u660C\u5409\u5E97"),i("p",{class:"mb-3"},[B(" 103 \u53F0\u5317\u5E02\u5927\u540C\u5340\u660C\u5409\u885722\u865F"),i("br"),B(" (02)2598-3999 ")]),i("iframe",{width:"100%",height:"200",style:{border:"0"},loading:"lazy",allowfullscreen:"",src:"https://www.google.com/maps/embed/v1/place?q=%E6%B3%A2%E8%B5%AB%E5%A3%AB%E9%A0%98%E5%9C%B0%E6%98%8C%E5%90%89%E5%BA%97&key=AIzaSyBFghZfDnoVmaJ0RS06kCPE90XY4oLdU8w"})]),i("div",{class:"col-lg-4 text-start"},[i("h5",{class:"text-uppercase mb-4"}," \u660E\u6C34\u5E97 "),i("p",{class:"mb-3"},[B(" 104 \u53F0\u5317\u5E02\u4E2D\u5C71\u5340\u660E\u6C34\u8DEF441\u865F"),i("br"),B(" (02)2532-9990 ")]),i("iframe",{width:"100%",height:"200",style:{border:"0"},loading:"lazy",allowfullscreen:"",src:"https://www.google.com/maps/embed/v1/place?q=\u6CE2\u8D6B\u58EB\u9818\u5730\u7CBE\u54C1\u5496\u5561\u9928-\u660E\u6C34\u5E97&key=AIzaSyBFghZfDnoVmaJ0RS06kCPE90XY4oLdU8w"})])])])],-1),ze=i("div",{class:"copyright py-4 text-center text-white"},[i("div",{class:"container"},[i("small",null,"Copyright \xA9 BORGES PLACE COFFEE 2023")])],-1);function Fe(e,t,a,r,o,l){return be(),xe(Ae,null,[Ve,ze],64)}var Qe=he(Re,[["render",Fe]]);/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const h={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},ge={itemsToShow:{default:h.itemsToShow,type:Number},itemsToScroll:{default:h.itemsToScroll,type:Number},wrapAround:{default:h.wrapAround,type:Boolean},throttle:{default:h.throttle,type:Number},snapAlign:{default:h.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:h.transition,type:Number},breakpoints:{default:h.breakpoints,type:Object},autoplay:{default:h.autoplay,type:Number},pauseAutoplayOnHover:{default:h.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:h.mouseDrag,type:Boolean},touchDrag:{default:h.touchDrag,type:Boolean},dir:{default:h.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function Xe({config:e,slidesCount:t}){const{snapAlign:a,wrapAround:r,itemsToShow:o=1}=e;if(r)return Math.max(t-1,0);let l;switch(a){case"start":l=t-o;break;case"end":l=t-1;break;case"center":case"center-odd":l=t-Math.ceil((o-.5)/2);break;case"center-even":l=t-Math.ceil(o/2);break;default:l=0;break}return Math.max(l,0)}function Ye({config:e,slidesCount:t}){const{wrapAround:a,snapAlign:r,itemsToShow:o=1}=e;let l=0;if(a||o>t)return l;switch(r){case"start":l=0;break;case"end":l=o-1;break;case"center":case"center-odd":l=Math.floor((o-1)/2);break;case"center-even":l=Math.floor((o-2)/2);break;default:l=0;break}return l}function te({val:e,max:t,min:a}){return t<a?e:Math.min(Math.max(e,a),t)}function We({config:e,currentSlide:t,slidesCount:a}){const{snapAlign:r,wrapAround:o,itemsToShow:l=1}=e;let u=t;switch(r){case"center":case"center-odd":u-=(l-1)/2;break;case"center-even":u-=(l-2)/2;break;case"end":u-=l-1;break}return o?u:te({val:u,max:a-l,min:0})}function He(e){var t,a,r,o;return e?((t=e[0])===null||t===void 0?void 0:t.children)==="v-if"||((r=(a=e[0])===null||a===void 0?void 0:a.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?e.filter(l=>{var u;return((u=l.type)===null||u===void 0?void 0:u.name)==="CarouselSlide"}):((o=e[0])===null||o===void 0?void 0:o.children)||[]:[]}function z({val:e,max:t,min:a=0}){return e>t?z({val:e-(t+1),max:t,min:a}):e<a?z({val:e+(t+1),max:t,min:a}):e}function Ue(e,t){let a;return t?function(...r){const o=this;a||(e.apply(o,r),a=!0,setTimeout(()=>a=!1,t))}:e}function qe(e,t){let a;return function(...r){a&&clearTimeout(a),a=setTimeout(()=>{e(...r),a=null},t)}}var Ge=ne({name:"ARIA",setup(){const e=m("currentSlide",d(0)),t=m("slidesCount",d(0));return()=>g("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${t.value}`)}}),et=ne({name:"Carousel",props:ge,setup(e,{slots:t,emit:a,expose:r}){var o;const l=d(null),u=d([]),b=d(0),f=d(0);let w=d({}),y=Object.assign({},h);const s=I(Object.assign({},y)),c=d((o=e.modelValue)!==null&&o!==void 0?o:0),k=d(0),j=d(0),T=d(0),N=d(0);let E,F;S("config",s),S("slidesCount",f),S("currentSlide",c),S("maxSlide",T),S("minSlide",N),S("slideWidth",b);function X(){const n=Object.assign(Object.assign({},e),e.settings);w=d(Object.assign({},n.breakpoints)),y=Object.assign(Object.assign({},n),{settings:void 0,breakpoints:void 0}),le(y)}function $(){const n=Object.keys(w.value).map(p=>Number(p)).sort((p,_)=>+_-+p);let v=Object.assign({},y);n.some(p=>window.matchMedia(`(min-width: ${p}px)`).matches?(v=Object.assign(Object.assign({},v),w.value[p]),!0):!1),le(v)}function le(n){Object.entries(n).forEach(([v,p])=>s[v]=p)}const oe=qe(()=>{Object.keys(w.value).length&&($(),L()),D()},16);function D(){if(!l.value)return;const n=l.value.getBoundingClientRect();b.value=n.width/s.itemsToShow}function L(){f.value<=0||(j.value=Math.ceil((f.value-1)/2),T.value=Xe({config:s,slidesCount:f.value}),N.value=Ye({config:s,slidesCount:f.value}),s.wrapAround||(c.value=te({val:c.value,max:T.value,min:N.value})))}Ce(()=>{Object.keys(w.value).length&&$(),Te(()=>{L(),D(),Se(),a("init")}),re(),window.addEventListener("resize",oe,{passive:!0})}),Ee(()=>{F&&clearTimeout(F),E&&clearInterval(E),window.removeEventListener("resize",oe,{passive:!0})});let x=!1;const P={x:0,y:0},R={x:0,y:0},A=I({x:0,y:0}),Y=d(!1),we=()=>{Y.value=!0},_e=()=>{Y.value=!1};function se(n){["INPUT","TEXTAREA"].includes(n.target.tagName)||(x=n.type==="touchstart",!(!x&&n.button!==0||M.value)&&(x||n.preventDefault(),P.x=x?n.touches[0].clientX:n.clientX,P.y=x?n.touches[0].clientY:n.clientY,document.addEventListener(x?"touchmove":"mousemove",W,!0),document.addEventListener(x?"touchend":"mouseup",ie,!0)))}let W=()=>{};function Se(){var n;W=Ue(v=>{R.x=x?v.touches[0].clientX:v.clientX,R.y=x?v.touches[0].clientY:v.clientY;const p=R.x-P.x,_=R.y-P.y;A.y=_,A.x=p},(n=s.throttle)!==null&&n!==void 0?n:16)}function ie(){const n=s.dir==="rtl"?-1:1,v=Math.sign(A.x)*.4,p=Math.round(A.x/b.value+v)*n;if(p&&!x){const _=G=>{G.stopPropagation(),window.removeEventListener("click",_,!0)};window.addEventListener("click",_,!0)}C(c.value-p),A.x=0,A.y=0,document.removeEventListener(x?"touchmove":"mousemove",W,!0),document.removeEventListener(x?"touchend":"mouseup",ie,!0)}function re(){!s.autoplay||s.autoplay<=0||(E=setInterval(()=>{s.pauseAutoplayOnHover&&Y.value||V()},s.autoplay))}function ue(){E&&(clearInterval(E),E=null),re()}const M=d(!1);function C(n){const v=s.wrapAround?n:te({val:n,max:T.value,min:N.value});c.value===v||M.value||(a("slide-start",{slidingToIndex:n,currentSlideIndex:c.value,prevSlideIndex:k.value,slidesCount:f.value}),M.value=!0,k.value=c.value,c.value=v,F=setTimeout(()=>{if(s.wrapAround){const p=z({val:v,max:T.value,min:0});p!==c.value&&(c.value=p,a("loop",{currentSlideIndex:c.value,slidingToIndex:n}))}a("update:modelValue",c.value),a("slide-end",{currentSlideIndex:c.value,prevSlideIndex:k.value,slidesCount:f.value}),M.value=!1,ue()},s.transition))}function V(){C(c.value+s.itemsToScroll)}function H(){C(c.value-s.itemsToScroll)}const ce={slideTo:C,next:V,prev:H};S("nav",ce),S("isSliding",M);const de=ee(()=>We({config:s,currentSlide:c.value,slidesCount:f.value}));S("slidesToScroll",de);const ye=ee(()=>{const n=s.dir==="rtl"?-1:1,v=de.value*b.value*n;return{transform:`translateX(${A.x-v}px)`,transition:`${M.value?s.transition:0}ms`,margin:s.wrapAround?`0 -${f.value*b.value}px`:"",width:"100%"}});function ve(){X(),$(),L(),D(),ue()}Object.keys(ge).forEach(n=>{["modelValue"].includes(n)||Q(()=>e[n],ve)}),Q(()=>e.modelValue,n=>{n!==c.value&&C(Number(n))}),Q(f,L),X();const fe={config:s,slidesCount:f,slideWidth:b,next:V,prev:H,slideTo:C,currentSlide:c,maxSlide:T,minSlide:N,middleSlide:j};r({updateBreakpointsConfigs:$,updateSlidesData:L,updateSlideWidth:D,initDefaultConfigs:X,restartCarousel:ve,slideTo:C,next:V,prev:H,nav:ce,data:fe});const U=t.default||t.slides,q=t.addons,pe=I(fe);return()=>{const n=He(U==null?void 0:U(pe)),v=(q==null?void 0:q(pe))||[];n.forEach((J,Z)=>J.props.index=Z);let p=n;if(s.wrapAround){const J=n.map((K,O)=>me(K,{index:-n.length+O,isClone:!0,key:`clone-before-${O}`})),Z=n.map((K,O)=>me(K,{index:n.length+O,isClone:!0,key:`clone-after-${O}`}));p=[...J,...n,...Z]}u.value=n,f.value=Math.max(n.length,1);const _=g("ol",{class:"carousel__track",style:ye.value,onMousedownCapture:s.mouseDrag?se:null,onTouchstartPassiveCapture:s.touchDrag?se:null},p),G=g("div",{class:"carousel__viewport"},_);return g("section",{ref:l,class:{carousel:!0,"carousel--rtl":s.dir==="rtl"},dir:s.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:we,onMouseleave:_e},[G,v,g(Ge)])}}});const Je={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},ae=e=>{const t=e.name;if(!t||typeof t!="string")return;const a=Je[t],r=g("path",{d:a}),o=e.title||t,l=g("title",o);return g("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[l,r])};ae.props={name:String,title:String};const tt=(e,{slots:t,attrs:a})=>{const{next:r,prev:o}=t||{},l=m("config",I(Object.assign({},h))),u=m("maxSlide",d(1)),b=m("minSlide",d(1)),f=m("currentSlide",d(1)),w=m("nav",{}),{dir:y,wrapAround:s}=l,c=y==="rtl",k=g("button",{type:"button",class:["carousel__prev",!s&&f.value<=b.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:w.prev},(o==null?void 0:o())||g(ae,{name:c?"arrowRight":"arrowLeft"})),j=g("button",{type:"button",class:["carousel__next",!s&&f.value>=u.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:w.next},(r==null?void 0:r())||g(ae,{name:c?"arrowLeft":"arrowRight"}));return[k,j]},at=()=>{const e=m("maxSlide",d(1)),t=m("minSlide",d(1)),a=m("currentSlide",d(1)),r=m("nav",{}),o=u=>z({val:a.value,max:e.value,min:0})===u,l=[];for(let u=t.value;u<e.value+1;u++){const b=g("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(u)},"aria-label":`Navigate to slide ${u+1}`,onClick:()=>r.slideTo(u)}),f=g("li",{class:"carousel__pagination-item",key:u},b);l.push(f)}return g("ol",{class:"carousel__pagination"},l)};var nt=ne({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const a=m("config",I(Object.assign({},h))),r=m("currentSlide",d(0)),o=m("slidesToScroll",d(0)),l=m("slideWidth",d(0)),u=m("isSliding",d(!1)),b=ee(()=>({width:l.value?`${l.value}px`:"100%"})),f=()=>e.index===r.value,w=()=>e.index===r.value-1,y=()=>e.index===r.value+1,s=()=>{const c=Math.floor(o.value),k=Math.ceil(o.value+a.itemsToShow-1);return e.index>=c&&e.index<=k};return()=>{var c;return g("li",{style:b.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":s(),"carousel__slide--active":f(),"carousel__slide--prev":w(),"carousel__slide--next":y(),"carousel__slide--sliding":u.value},"aria-hidden":!s()},(c=t.default)===null||c===void 0?void 0:c.call(t))}}});export{et as C,Qe as F,tt as N,at as P,nt as S,Ke as n};
