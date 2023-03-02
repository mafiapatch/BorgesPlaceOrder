import{d as l}from"./dataService.7da43da6.js";import{_ as b,o as h,c as u,b as e,w as d,f as v,t as a,F as g,h as p,v as _}from"./index.ac071af6.js";const f={name:"adminOrderList",components:{},data(){return{month:new Date().getMonth()+1,year:new Date().getFullYear(),days:[],orgAmount:[],amount:[],currentAmount:[],amountDateKey:[],product:"tiramisu"}},methods:{setAmount(){var r;new Date(this.year,this.month,0).getDate();for(let t in this.amount)l.setAmount({year:this.year,month:this.month,date:t,amount:this.amount[t],currentAmount:this.amount[t]!=this.orgAmount[t]?this.amount[t]:this.currentAmount[t],product:this.product},(r=this.amountDateKey[t])!=null?r:"");alert("\u65B0\u589E\u6210\u529F")},logOut(){l.auth().signOut().then(()=>{l.auth().onAuthStateChanged(()=>{this.$router.push({name:"adminLogin"})})})},getDaysInMonth(r,t){const m=new Date(t,r,0).getDate();this.days=[],this.amount=[],this.orgAmount=[],this.amountDateKey=[],l.getAllAmounts().orderByChild("date").on("value",i=>{for(let n in i.val()){let o=i.val()[n];typeof o=="object"&&o!==null&&(this.amount[o.date]=o.amount,this.orgAmount[o.date]=o.amount,this.currentAmount[o.date]=o.currentAmount,this.amountDateKey[o.date]=n)}});for(let i=1;i<=m;i++){const o=new Date(t,r-1,i).toLocaleDateString("zh-TW",{weekday:"short"});this.days.push({date:i,day:o})}},getNextMonth(r,t){return t===12?(this.year=r+1,this.month=1,this.getDaysInMonth(this.month,this.year),{year:r+1,month:1}):(this.month=t+1,this.getDaysInMonth(this.month,this.year),{year:r,month:t+1})},getPrevMonth(r,t){return t===1?(this.year=r-1,this.month=12,this.getDaysInMonth(this.month,this.year),{year:r-1,month:12}):(this.month=t-1,this.getDaysInMonth(this.month,this.year),{year:r,month:t-1})}},mounted(){l.checkAuth(),this.getDaysInMonth(this.month,this.year)}},A={class:"container mt-5"},D={class:"row d-flex justify-content-center"},k={class:"col-md-12"},M={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},x=e("a",{class:"nav-link",href:"/admin/orderlist",type:"button",role:"tab","aria-selected":"false"},"\u8A02\u55AE\u8A2D\u5B9A",-1),w=e("a",{class:"nav-link active",href:"/admin/productList",type:"button",role:"tab","aria-selected":"true"},"\u5546\u54C1\u8A2D\u5B9A",-1),C={class:"tab-content",id:"nav-tabContent"},L={class:"tab-pane fade show active mb-5",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},I=e("option",{value:"tiramisu"},"\u63D0\u62C9\u7C73\u8607",-1),O=[I],S=e("br",null,null,-1),B={class:"h4"},K={width:"100%",class:"table mt-3"},N=e("thead",null,[e("tr",null,[e("th",null,"\u65E5\u671F"),e("th",null,"\u8A2D\u5B9A\u53EF\u8CE3\u91CF"),e("th",null,"\u76EE\u524D\u53EF\u8CE3\u91CF")])],-1),V=["onUpdate:modelValue"],F={class:"h4"};function P(r,t,m,i,n,o){return h(),u("div",A,[e("div",D,[e("div",k,[e("nav",null,[e("div",M,[x,w,e("button",{class:"nav-link",type:"button",role:"tab",onClick:t[0]||(t[0]=(...s)=>o.logOut&&o.logOut(...s))},"\u767B\u51FA")])]),e("div",C,[e("div",L,[d(e("select",{class:"form-control my-2","onUpdate:modelValue":t[1]||(t[1]=s=>n.product=s)},O,512),[[v,n.product]]),S,e("span",B,a(n.year)+" / "+a(n.month),1),e("span",{class:"btn btn-light mx-2",role:"button",onClick:t[2]||(t[2]=s=>o.getPrevMonth(n.year,n.month))},"\u4E0A\u500B\u6708\u4EFD"),e("span",{class:"btn btn-light",role:"button",onClick:t[3]||(t[3]=s=>o.getNextMonth(n.year,n.month))},"\u4E0B\u500B\u6708\u4EFD"),e("button",{class:"btn btn-primary mx-3",onClick:t[4]||(t[4]=(...s)=>o.setAmount&&o.setAmount(...s))},"\u5132\u5B58"),e("table",K,[N,e("tbody",null,[(h(!0),u(g,null,p(n.days,(s,c)=>(h(),u("tr",{key:c},[e("td",null,a(n.year)+" / "+a(n.month)+" / "+a(s.date)+" "+a(s.day),1),e("td",null,[d(e("input",{type:"number",class:"form-control","onUpdate:modelValue":y=>n.amount[`${n.year}/${n.month}/${s.date}`]=y},null,8,V),[[_,n.amount[`${n.year}/${n.month}/${s.date}`]]])]),e("td",null,a(n.currentAmount[`${n.year}/${n.month}/${s.date}`]),1)]))),128))])]),e("span",F,a(n.year)+" / "+a(n.month),1),e("span",{class:"btn btn-light mx-2",role:"button",onClick:t[5]||(t[5]=s=>o.getPrevMonth(n.year,n.month))},"\u4E0A\u500B\u6708\u4EFD"),e("span",{class:"btn btn-light",role:"button",onClick:t[6]||(t[6]=s=>o.getNextMonth(n.year,n.month))},"\u4E0B\u500B\u6708\u4EFD"),e("button",{class:"btn btn-primary mx-3",onClick:t[7]||(t[7]=(...s)=>o.setAmount&&o.setAmount(...s))},"\u5132\u5B58")])])])])])}var T=b(f,[["render",P]]);export{T as default};
