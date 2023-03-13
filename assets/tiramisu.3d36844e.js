import{d as v}from"./dataService.50f846ff.js";import{n as j,F,C as N,S as V,P as L,N as U,r as B,e as T,_ as z}from"./index.d18af753.js";import{_ as Y,r as m,o as a,c as d,a as u,b as t,w as f,t as c,d as _,v as w,e as D,f as M,F as y,g as x,h as g,n as q,i as J}from"./index.c5fd807e.js";var C="/assets/img/tiramisu/product_02.jpg",H="/assets/img/tiramisu/package_01.jpg";const K={name:"tiramisu",data(){return{formStatus:"",userIP:"",item_name_slug:"tiramisu",order:{item_name:"\u63D0\u62C9\u7C73\u8607",count:1,pickup_date:"",pickup_time:"12:00",pickup_location:"\u660C\u5409\u5E97",order_mobile:"",order_name:"",order_status:"\u672A\u53D6\u8CA8",order_price:0,created_ts:"",created_date:"",ip:"",userAgent:""},amount:[],amountKey:[],month:new Date().getMonth()+1,year:new Date().getFullYear(),days:[],orderErrorMsg:[],settingList:[],showAmount:!1}},components:{navbar:j,Footer:F,Carousel:N,Slide:V,Pagination:L,Navigation:U,recommendProduct:B},methods:{getUserIP(){fetch("https://api.ipify.org?format=json").then(o=>o.json()).then(({ip:o})=>{this.userIP=o})},getAmountText(o,e,r){return this.dateAmount(o,e,r)>0?this.showAmount?`${this.dateAmount(o,e,r)} \u500B`:"\u53EF\u8A02\u8CFC":"\u7121\u6CD5\u8A02\u8CFC"},getSetting(){v.getAllSettings().once("value",e=>{var r;this.settingList=e.val(),this.showAmount=(r=this.settingList.showAmount)!=null?r:!1})},getDailyAmount(){this.amount=[],v.getAllAmounts().orderByChild("date").once("value",o=>{for(let e in o.val()){let r=o.val()[e];typeof r=="object"&&r!==null&&r.product===this.item_name_slug&&this.amount.push({...o.val()[e],key:e})}})},calOrderPrice(){let o=this.order.count%2,e=Math.floor(this.order.count/2);return o===0?e*900:e*900+460},dateAmount(o,e,r){var l,s;return(s=(l=this.amount.find(n=>{if(n.date==`${o}/${e}/${r}`&&new Date(`${o}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:l.currentAmount)!=null?s:0},dateAmountIndex(o,e,r){var l,s;return(s=(l=this.amount.find(n=>{if(n.date==`${o}/${e}/${r}`&&new Date(`${o}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:l.key)!=null?s:""},chooseDate(o,e,r){this.dateAmount(o,e,r)>0&&(this.order.pickup_date=`${o}/${e}/${r}`,document.getElementById("datePickerClose").click())},saveOrder(){if(this.order.ip=this.userIP,this.order.userAgent=window.navigator.userAgent,!this.order.count||this.order.ip==""||this.order.userAgent==""||!this.checkOrder())return!1;let o=new Date;this.order.created_date=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate(),this.order.created_ts=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds(),this.order.order_price=this.calOrderPrice(),v.createOrder(this.order).then(()=>{let e=this.order.pickup_date.split("/")[0],r=this.order.pickup_date.split("/")[1],l=this.order.pickup_date.split("/")[2];v.setAmount({currentAmount:this.dateAmount(e,r,l)-this.order.count},this.dateAmountIndex(e,r,l)),T.send("service_s5z4c1n","template_30m3lrz",this.order,"-NNjw4dJJrkwFkMBr").then(s=>{console.log("SUCCESS!",s.text)},s=>{console.log("FAILED...",s.text)}),this.formStatus="\u65B0\u589E\u6210\u529F",this.resetOrder(),this.timeout=setTimeout(()=>{this.formStatus=""},1e4),this.getDailyAmount()}).catch(e=>{alert("\u65B0\u589E\u5931\u6557"),console.log(e)})},resetOrder(){this.order.count=1,this.order.pickup_date="",this.order.pickup_time="12:00",this.order.pickup_location="\u660C\u5409\u5E97",this.order.order_mobile="",this.order.order_name="",this.order.order_status="\u672A\u53D6\u8CA8",this.order.created_ts="",this.order.created_date=""},checkOrder(){return this.orderErrorMsg=[],this.order.order_name==""&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u59D3\u540D"),this.order.order_mobile==""&&this.order.order_mobile.length!=10&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u96FB\u8A71"),this.order.pickup_date==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u65E5\u671F"),this.order.pickup_time==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u6642\u9593"),this.order.pickup_location==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u5730\u9EDE"),!this.orderErrorMsg.length},getCookie(o){let r=`; ${document.cookie}`.split(`; ${o}=`);if(r.length===2)return r.pop().split(";").shift()},getDaysInMonth(o,e){const r=new Date(e,o,0).getDate();this.days=[];let l=[],s=["\u9031\u65E5","\u9031\u4E00","\u9031\u4E8C","\u9031\u4E09","\u9031\u56DB","\u9031\u4E94","\u9031\u516D"];for(let n=1;n<=r;n++){const h=new Date(e,o-1,n).toLocaleDateString("zh-TW",{weekday:"short"});if(!this.days.length&&!l.length&&h!="\u9031\u65E5")for(let b=0;b<s.indexOf(h);b++)l.push({date:"",day:""});l.push({date:n,day:h}),(h=="\u9031\u516D"||n==r)&&(this.days.push(l),l=[])}},getNextMonth(o,e){return e===12?(this.year=o+1,this.month=1,this.getDaysInMonth(this.month,this.year),{year:o+1,month:1}):(this.month=e+1,this.getDaysInMonth(this.month,this.year),{year:o,month:e+1})},getPrevMonth(o,e){return e===1?(this.year=o-1,this.month=12,this.getDaysInMonth(this.month,this.year),{year:o-1,month:12}):(this.month=e-1,this.getDaysInMonth(this.month,this.year),{year:o,month:e-1})}},mounted(){this.getUserIP(),this.getDailyAmount(),this.getDaysInMonth(this.month,this.year),this.getSetting()}},W={class:"masthead bogres-bg-color text-center",id:"header_form"},G={class:"container text-black"},Q={class:"row"},R={class:"col-md-8 text-center"},X=t("img",{src:z,class:"d-block w-100 rounded",alt:"..."},null,-1),Z=t("img",{src:C,class:"d-block w-100 rounded",alt:"..."},null,-1),$={class:"col-md-4 text-start"},tt={class:"my-2"},et={class:"h3"},ot=t("hr",null,null,-1),st={class:"row"},rt={class:"col-md-6 pt-1"},nt=t("label",{for:"order_name",class:"form-label"},"\u8A02\u8CFC\u8005\u59D3\u540D",-1),it={class:"col-md-6 pt-1"},lt=t("label",{for:"order_mobile",class:"form-label"},"\u8A02\u8CFC\u8005\u624B\u6A5F",-1),at={class:"row mt-2"},dt={class:"col-md-6 pt-1"},ct=t("label",{for:"order_count",class:"form-label"},"\u8A02\u8CFC\u6578\u91CF",-1),ut={class:"col-md-6 pt-1"},ht=t("label",{class:"form-label"},"\u81EA\u53D6\u65E5\u671F",-1),mt={type:"button",class:"btn btn-light","data-bs-toggle":"modal",id:"datepickerBtn","data-bs-target":"#datepickerModal"},pt={class:"row"},_t={class:"col-md-6 pt-1"},gt=t("label",{class:"form-label"},"\u81EA\u53D6\u6642\u6BB5",-1),bt=J('<option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option>',21),vt=[bt],ft={class:"col-md-6 pt-1"},yt=t("label",{class:"form-label"},"\u81EA\u53D6\u5206\u5E97",-1),kt=t("option",{value:"\u660C\u5409\u5E97"},"\u660C\u5409\u5E97",-1),wt=t("option",{value:"\u660E\u6C34\u5E97"},"\u660E\u6C34\u5E97",-1),Mt=[kt,wt],xt={class:"col-12 pt-2"},At={class:"h5"},Dt=t("p",{class:"fw-light small"}," \u4E00\u76D2 460 \u5143\uFF0C\u4E8C\u76D2 900 \u5143\u3001\u6BCF\u5169\u76D2\u9001\u4E00\u53EA\u7CBE\u7F8E\u4FDD\u51B7\u888B ",-1),Ct={key:0,class:"alert alert-success alert-dismissible fade show mt-2",role:"alert"},St=t("strong",null,"\u8A02\u55AE\u5DF2\u63A5\u6536\uFF0C\u7A0D\u5F8C\u6703\u6709\u4EBA\u54E1\u8207\u60A8\u806F\u7E6B\u518D\u9EBB\u7169\u7559\u610F\u4F86\u96FB\uFF0C\u8B1D\u8B1D",-1),Pt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),It=[St,Pt],Et={key:1,class:"alert alert-danger alert-dismissible fade show mt-2",role:"alert"},Ot=t("strong",null,"\u8ACB\u6AA2\u67E5\u8868\u55AE!",-1),jt=t("br",null,null,-1),Ft=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Nt=t("section",{class:"page-section",id:"product_description"},[t("div",{class:"container"},[t("div",{class:"row d-flex justify-content-center py-5",id:"product_description_content"},[t("div",{class:"col-md-10"},[t("nav",null,[t("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"\u5546\u54C1\u4ECB\u7D39"),t("button",{class:"nav-link",id:"nav-storage-tab","data-bs-toggle":"tab","data-bs-target":"#nav-storage",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"\u4FDD\u5B58\u53CA\u5305\u88DD")])]),t("div",{class:"tab-content mt-3",id:"nav-tabContent"},[t("div",{class:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},[t("p",{class:"fw-bold"},"\u63D0\u62C9\u7C73\u8607Tirami s\xF9"),t("p",null,[g(" \u5728\u7FA9\u5927\u5229\u6587\u6709\u500B\u542B\u610F\u662F\u300C\u5E36\u6211\u8D70\uFF01\u300D"),t("br"),g(" \u5E36\u8D70\u7684\u4E0D\u53EA\u662F\u7F8E\u5473\uFF0C\u9084\u6709\u6CE2\u8D6B\u58EB\u7684\u611B"),t("br"),g(" \u597D\u6D6A\u6F2B~~\u0669(\u0E51\u275B\u1D17\u275B\u0E51)\u06F6"),t("br"),g(" \u8AAA\u5230\u6CE2\u8D6B\u58EB\u9818\u5730\u5C31\u60F3\u5230\u559D\u5496\u5561\u4EE5\u5916\uFF0C\u9084\u6709\u6211\u5011\u6700\u706B\u7D05\u7684\u5546\u54C1\uFF0C\u63D0\u62C9\u7C73\u8607!!"),t("br"),g(" \u5438\u6EFF\u5496\u5561\u9152\u7684\u624B\u6307\u9905\u4E7E\uFF0C\u8207\u7279\u88FD\u5361\u5F6D\u91AC\u5DE7\u5999\u878D\u5408\uFF0C\u53E3\u611F\u76F8\u7576\u6FC3\u90C1\u8C50\u5BCC\u6709\u5C64\u6B21\u3002"),t("br")]),t("p",null,"\u4F7F\u7528\u7684\u662F\u6CD5\u570B\u512A\u8CEA\u9BAE\u5976\u6CB9\u8207\u9AD8\u6EAB\u6BBA\u9752\u5F8C\u7684\u86CB\u9EC3\u6DB2\uFF0C\u4EE5\u53CA\u7D30\u7DFB\u67D4\u6ED1\u7684\u99AC\u65AF\u5361\u5F6D\u8D77\u53F8\u548C\u624B\u6307\u9905\u4E7E\uFF0C\u7D50\u5408\u6210\u4E00\u9053\u6FC3\u90C1\u6ED1\u9806\u3001\u6E05\u723D\u4E0D\u81A9\u7684\u63D0\u62C9\u7C73\u8607\u3002 \u518D\u6492\u4E0A\u53EF\u53EF\u7C89\uFF0C\u8B93\u53E3\u611F\u66F4\u52A0\u8C50\u5BCC\u7F8E\u5473\u3002"),t("p",null,"\u6211\u5011\u9075\u5FAA\u99AC\u65AF\u5361\u5F6D\u8207\u624B\u6307\u9905\u4E7E\u7684\u9EC3\u91D1\u6BD4\u4F8B\u6392\u5217\uFF0C\u642D\u914D\u5E97\u5167\u9802\u7D1A\u9ED1\u9DF9\u5496\u5561\u6A5F\u63D0\u53D6\u51FA\u7684\u6FC3\u7E2E\u5496\u5561\u6DB2\uFF0C \u5448\u73FE\u51FA\u63D0\u62C9\u7C73\u8607\u7368\u7279\u7684\u8FF7\u4EBA\u9999\u6C23\u3001\u5165\u53E3\u5373\u5316\u3001\u53E3\u611F\u6ED1\u9806\u3001\u5473\u9053\u9999\u6FC3\u3001\u9BAE\u751C\u4E0D\u81A9\uFF0C\u8B93\u60A8\u4E0D\u65B7\u56DE\u5473\u60F3\u5FF5\u3002"),t("p",{class:"fw-bold"},"\u98DF\u7528\u65B9\u5F0F"),t("p",null,"\u5EFA\u8B70\u51B7\u51CD\u5F8C\u9000\u51B01\u5C0F\u6642\u518D\u4F86\u98DF\u7528\uFF0C\u5403\u8D77\u4F86\u50CF\u51B0\u6DC7\u6DCB\u53E3\u611F\uFF0C\u518D\u653E\u4E45\u4E00\u9EDE\u6703\u8B8A\u8EDF\uFF0C\u5403\u8D77\u4F86\u6709\u7D72\u6ED1\u7684\u611F\u89BA\uFF0C\u4E5F\u4E0D\u932F! \u90FD\u53EF\u4EE5\u5617\u8A66\u770B\u770B\uFF0C\u5404\u6709\u64C1\u6234\u8005\u5537~"),t("div",{class:"row justify-content-center"},[t("div",{class:"col-10 mb-5"},[t("div",{class:"portfolio-item mx-auto","data-bs-toggle":"modal",role:"button","data-bs-target":"#productModal2"},[t("img",{class:"img-fluid",src:C,alt:"..."})])])])]),t("div",{class:"tab-pane fade",id:"nav-storage",role:"tabpanel","aria-labelledby":"nav-storage-tab"},[t("p",null,"\u5EFA\u8B70\u6700\u4F73\u4EAB\u5473\u4FDD\u5B58\u671F\u9650\u70BA\u51B7\u51CD3\u661F\u671F\u6216\u51B7\u85CF3\u5929\u5167\uFF0C\u51B7\u51CD\u5F8C\u7F6E\u65BC\u51B7\u85CF\u9000\u51B0\u7D041\u5C0F\u6642\uFF0C\u51B7\u85CF\u53D6\u51FA\u98DF\u7528\uFF0C\u98DF\u7528\u4E0D\u5B8C\u8ACB\u518D\u51B7\u85CF\u6216\u51B7\u51CD\u4FDD\u5B58\u3002"),t("div",{class:"row justify-content-center"},[t("div",{class:"col-10 mb-5"},[t("div",{class:"portfolio-item mx-auto"},[t("img",{class:"img-fluid",src:H,alt:"..."})])])])])])])])])],-1),Vt={class:"modal fade",id:"datepickerModal",tabindex:"-1","aria-labelledby":"datepickerModalLabel","aria-hidden":"true"},Lt={class:"modal-dialog modal-lg modal-fullscreen-lg-down"},Ut={class:"modal-content"},Bt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"datepickerModalLabel"},"\u8ACB\u9078\u64C7\u65E5\u671F"),t("button",{type:"button",class:"btn-close",id:"datePickerClose","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Tt={class:"modal-body"},zt={class:"h4"},Yt={class:"table",width:"100%"},qt=t("thead",null,[t("th",null,"\u9031\u65E5"),t("th",null,"\u9031\u4E00"),t("th",null,"\u9031\u4E8C"),t("th",null,"\u9031\u4E09"),t("th",null,"\u9031\u56DB"),t("th",null,"\u9031\u4E94"),t("th",null,"\u9031\u516D")],-1),Jt=["role","onClick"],Ht={key:0};function Kt(o,e,r,l,s,n){const A=m("navbar"),h=m("slide"),b=m("navigation"),S=m("pagination"),P=m("carousel"),I=m("recommendProduct"),E=m("Footer");return a(),d(y,null,[u(A),t("header",W,[t("div",G,[t("div",Q,[t("div",R,[u(P,{"items-to-show":1},{addons:f(()=>[u(b),u(S)]),default:f(()=>[u(h,{key:"1"},{default:f(()=>[X]),_:1}),u(h,{key:"2"},{default:f(()=>[Z]),_:1})]),_:1})]),t("div",$,[t("div",tt,[t("span",et,c(s.order.item_name),1)]),ot,t("div",st,[t("div",rt,[nt,_(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.order.order_name=i),id:"order_name",class:"form-control",type:"text",required:""},null,512),[[w,s.order.order_name]])]),t("div",it,[lt,_(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>s.order.order_mobile=i),id:"order_mobile",class:"form-control",type:"text",required:""},null,512),[[w,s.order.order_mobile]])])]),t("div",at,[t("div",dt,[ct,_(t("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>s.order.count=i),id:"order_count",class:"form-control",type:"number"},null,512),[[w,s.order.count]])]),t("div",ut,[ht,t("p",null,[t("button",mt,"\u9078\u64C7\u81EA\u53D6\u65E5\u671F "+c(s.order.pickup_date),1)])])]),t("div",pt,[t("div",_t,[gt,_(t("select",{"onUpdate:modelValue":e[3]||(e[3]=i=>s.order.pickup_time=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u6642\u6BB5"},vt,512),[[D,s.order.pickup_time]])]),t("div",ft,[yt,_(t("select",{"onUpdate:modelValue":e[4]||(e[4]=i=>s.order.pickup_location=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u5206\u5E97"},Mt,512),[[D,s.order.pickup_location]])]),t("div",xt,[t("p",At,"\u7E3D\u8A08\uFF1A$"+c(n.calOrderPrice()),1),Dt,t("p",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[5]||(e[5]=(...i)=>n.saveOrder&&n.saveOrder(...i))},"\u9001\u51FA")])])]),s.formStatus.length?(a(),d("div",Ct,It)):M("",!0),s.orderErrorMsg.length?(a(),d("div",Et,[Ot,jt,(a(!0),d(y,null,x(s.orderErrorMsg,(i,k)=>(a(),d("span",{class:"mx-1",key:k},c(i),1))),128)),Ft])):M("",!0)])])])]),Nt,u(I),t("div",Vt,[t("div",Lt,[t("div",Ut,[Bt,t("div",Tt,[t("span",zt,c(s.year)+" / "+c(s.month),1),t("span",{class:"btn btn-light mx-2",role:"button",onClick:e[6]||(e[6]=i=>n.getPrevMonth(s.year,s.month))},"\u4E0A\u500B\u6708\u4EFD"),t("span",{class:"btn btn-light",role:"button",onClick:e[7]||(e[7]=i=>n.getNextMonth(s.year,s.month))},"\u4E0B\u500B\u6708\u4EFD"),t("table",Yt,[qt,t("tbody",null,[(a(!0),d(y,null,x(s.days,(i,k)=>(a(),d("tr",{key:k},[(a(!0),d(y,null,x(i,(p,O)=>(a(),d("td",{width:"14%",key:O,role:n.dateAmount(s.year,s.month,p.date)>0?"button":"",onClick:Wt=>n.chooseDate(s.year,s.month,p.date)},[p.day.length?(a(),d("span",Ht,[t("h5",null,c(s.month)+"/"+c(p.date),1),t("div",{class:q(["text-white p-1",n.dateAmount(s.year,s.month,p.date)>0?"bg-success":"bg-warning"]),style:{"font-size":"12px"}},c(n.getAmountText(s.year,s.month,p.date)),3)])):M("",!0)],8,Jt))),128))]))),128))])])])])])]),u(E)],64)}var Xt=Y(K,[["render",Kt]]);export{Xt as default};
