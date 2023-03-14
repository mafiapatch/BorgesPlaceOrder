import{d}from"./dataService.50f846ff.js";import{_ as g,o as _,c as h,b as t,d as c,e as p,v as m,t as o,F as f,g as b}from"./index.01211797.js";const O={name:"adminOrderList",components:{},data(){return{email:"",password:"",orderList:[],orderCount:0,searchKey:"pickup_date",startAt:new Date().toISOString().split("T")[0],endAt:new Date().toISOString().split("T")[0]}},methods:{getOrderRealTime(){let l=d.getAllOrder(),e=this.searchKey,r=Date.parse(this.startAt),a=Date.parse(this.endAt);l.orderByChild(e).startAt(r).endAt(a).on("value",n=>{this.processData(n)})},date2str(l,e){var r={M:l.getMonth()+1,d:l.getDate(),h:l.getHours(),m:l.getMinutes(),s:l.getSeconds()};return e=e.replace(/(M+|d+|h+|m+|s+)/g,function(a){return((a.length>1?"0":"")+r[a.slice(-1)]).slice(-2)}),e.replace(/(y+)/g,function(a){return l.getFullYear().toString().slice(-a.length)})},processData(l){let e=[];for(let r in l.val())e.push({...l.val()[r],key:r});this.orderList=e.reverse(),this.orderCount=e.length},updateOrder(){for(let l in this.orderList)d.updateOrder({order_status:this.orderList[l].order_status},this.orderList[l].key);alert("\u4FEE\u6539\u6210\u529F")},logOut(){d.auth().signOut().then(()=>{d.auth().onAuthStateChanged(()=>{this.$router.push({name:"adminLogin"})})})}},created(){this.endAt=new Date(new Date().setMonth(new Date().getMonth()+1)).toISOString().split("T")[0]},mounted(){d.checkAuth(),this.getOrderRealTime()}},k={class:"container mt-5"},y={class:"row d-flex justify-content-center"},A={class:"col-md-12"},S={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},L=t("a",{class:"nav-link active",href:"/admin/orderlist",role:"tab","aria-selected":"true"},"\u8A02\u55AE\u8A2D\u5B9A",-1),D=t("a",{class:"nav-link",href:"/admin/productList",role:"tab","aria-selected":"false"},"\u5546\u54C1\u8A2D\u5B9A",-1),w=t("a",{class:"nav-link",href:"/admin/setting",role:"tab","aria-selected":"false"},"\u7CFB\u7D71\u8A2D\u5B9A",-1),T={class:"row mt-3"},C={class:"col-md-2"},M=t("option",{value:"created_ts"},"\u8A02\u55AE\u5EFA\u7ACB\u6642\u9593",-1),V=t("option",{value:"pickup_date"},"\u53D6\u8CA8\u6642\u9593",-1),I=[M,V],R={class:"col-md-2"},U=t("div",{class:"col-md-1"},[t("p",{class:"text-center"},"\u81F3")],-1),B={class:"col-md-2"},x={class:"col-md-2"},F={class:"col-md-2 text-end"},K={class:"table mt-3"},j=t("thead",null,[t("tr",null,[t("th",null,"\u5546\u54C1\u540D\u7A31"),t("th",null,"\u5206\u5E97"),t("th",null,"\u53D6\u8CA8\u65E5\u671F"),t("th",null,"\u53D6\u8CA8\u6642\u9593"),t("th",null,"\u8A02\u55AE\u5EFA\u7ACB\u65E5\u671F"),t("th",null,"\u8A02\u8CFC\u91CF"),t("th",null,"\u8A02\u55AE\u91D1\u984D"),t("th",null,"\u8A02\u8CFC\u8005\u59D3\u540D"),t("th",null,"\u8A02\u8CFC\u8005\u624B\u6A5F"),t("th",null,"\u8A02\u55AE\u72C0\u614B")])],-1),z=["onUpdate:modelValue"],E=t("option",{value:"\u672A\u53D6\u8CA8"},"\u672A\u53D6\u8CA8",-1),H=t("option",{value:"\u5DF2\u53D6\u8CA8"},"\u5DF2\u53D6\u8CA8",-1),N=[E,H],Y=t("hr",null,null,-1);function q(l,e,r,a,n,i){return _(),h("div",k,[t("div",y,[t("div",A,[t("nav",null,[t("div",S,[L,D,w,t("button",{class:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab",type:"button",role:"tab",onClick:e[0]||(e[0]=(...s)=>i.logOut&&i.logOut(...s))},"\u767B\u51FA")])]),t("div",T,[t("div",C,[c(t("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>n.searchKey=s),class:"form-control"},I,512),[[p,n.searchKey]])]),t("div",R,[c(t("input",{type:"date",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=s=>n.startAt=s)},null,512),[[m,n.startAt]])]),U,t("div",B,[c(t("input",{type:"date",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=s=>n.endAt=s)},null,512),[[m,n.endAt]])]),t("div",x,[t("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=(...s)=>i.getOrderRealTime&&i.getOrderRealTime(...s))},"\u9001\u51FA")]),t("div",F," \u5171 "+o(n.orderCount)+" \u7B46\u8CC7\u6599 ",1)]),t("table",K,[j,t("tbody",null,[(_(!0),h(f,null,b(n.orderList,(s,u)=>(_(),h("tr",{key:u},[t("td",null,o(s.item_name),1),t("td",null,o(s.pickup_location),1),t("td",null,o(new Date(s.pickup_date).toISOString().split("T")[0]),1),t("td",null,o(s.pickup_time),1),t("td",null,o(new Date(s.created_ts).toISOString().split("T")[0]),1),t("td",null,o(s.count),1),t("td",null,o(s.order_price),1),t("td",null,o(s.order_name),1),t("td",null,o(s.order_mobile),1),t("td",null,[c(t("select",{"onUpdate:modelValue":v=>n.orderList[u].order_status=v,class:"form-control"},N,8,z),[[p,n.orderList[u].order_status]])])]))),128))])]),Y,t("button",{class:"btn btn-secondary my-3",onClick:e[5]||(e[5]=(...s)=>i.updateOrder&&i.updateOrder(...s))},"\u5132\u5B58")])])])}var P=g(O,[["render",q]]);export{P as default};
