import{d as v}from"./dataService.50f846ff.js";import{n as O,F as N,C as F,S as V,P as j,N as L,r as U,e as B,a as T}from"./index.80e38032.js";import{_ as z,r as h,o as d,c,a as p,b as t,w as k,t as u,d as b,v as D,e as A,f as w,F as f,g as M,h as l,n as Y,i as q}from"./index.01211797.js";var J="/assets/img/millefeuille/product_01.jpg";const K={name:"millefeuille",data(){return{formStatus:"",userIP:"",item_name_slug:"millefeuille",order:{item_name:"\u6CD5\u5F0F\u5343\u5C64\u86CB\u7CD5",count:1,pickup_date:"",pickup_time:"12:00",pickup_location:"\u660C\u5409\u5E97",order_mobile:"",order_name:"",order_status:"\u672A\u53D6\u8CA8",order_price:0,created_ts:"",created_date:"",ip:"",userAgent:""},choosePickupDate:"",amount:[],amountKey:[],month:new Date().getMonth()+1,year:new Date().getFullYear(),days:[],orderErrorMsg:[],settingList:[],showAmount:!1}},components:{navbar:O,Footer:N,Carousel:F,Slide:V,Pagination:j,Navigation:L,recommendProduct:U},methods:{getUserIP(){fetch("https://api.ipify.org?format=json").then(s=>s.json()).then(({ip:s})=>{this.userIP=s})},getAmountText(s,e,r){return this.dateAmount(s,e,r)>0?this.showAmount?`${this.dateAmount(s,e,r)} \u500B`:"\u53EF\u8A02\u8CFC":"\u7121\u6CD5\u8A02\u8CFC"},getSetting(){v.getAllSettings().once("value",e=>{var r;this.settingList=e.val(),this.showAmount=(r=this.settingList.showAmount)!=null?r:!1})},getDailyAmount(){this.amount=[],v.getAllAmounts().orderByChild("date").once("value",s=>{for(let e in s.val()){let r=s.val()[e];typeof r=="object"&&r!==null&&r.product===this.item_name_slug&&this.amount.push({...s.val()[e],key:e})}})},calOrderPrice(){return this.order.count*240},dateAmount(s,e,r){var a,o;return(o=(a=this.amount.find(n=>{if(n.date==`${s}/${e}/${r}`&&new Date(`${s}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:a.currentAmount)!=null?o:0},dateAmountIndex(s,e,r){var a,o;return(o=(a=this.amount.find(n=>{if(n.date==`${s}/${e}/${r}`&&new Date(`${s}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:a.key)!=null?o:""},chooseDate(s,e,r){this.dateAmount(s,e,r)>0&&(this.choosePickupDate=`${s}/${e}/${r}`,document.getElementById("datePickerClose").click())},saveOrder(){if(this.order.ip=this.userIP,this.order.userAgent=window.navigator.userAgent,this.order.pickup_date=Date.parse(this.choosePickupDate),!this.order.count||this.order.ip==""||this.order.userAgent==""||!this.checkOrder())return!1;let s=new Date;this.order.created_date=s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate(),this.order.created_ts=Date.parse(new Date),this.order.order_price=this.calOrderPrice(),v.createOrder(this.order).then(()=>{let e=this.choosePickupDate.split("/")[0],r=this.choosePickupDate.split("/")[1],a=this.choosePickupDate.split("/")[2];v.setAmount({currentAmount:this.dateAmount(e,r,a)-this.order.count},this.dateAmountIndex(e,r,a)).then(()=>{B.send("service_s5z4c1n","template_30m3lrz",this.order,"-NNjw4dJJrkwFkMBr").then(o=>{console.log("SUCCESS!",o.text)},o=>{console.log("FAILED...",o.text)}),this.formStatus="\u65B0\u589E\u6210\u529F",this.resetOrder(),this.timeout=setTimeout(()=>{this.formStatus=""},1e4),this.getDailyAmount()})}).catch(e=>{alert("\u65B0\u589E\u5931\u6557"),console.log(e)})},resetOrder(){this.order.count=1,this.order.pickup_date="",this.choosePickupDate="",this.order.pickup_time="12:00",this.order.pickup_location="\u660C\u5409\u5E97",this.order.order_mobile="",this.order.order_name="",this.order.order_status="\u672A\u53D6\u8CA8",this.order.created_ts="",this.order.created_date=""},checkOrder(){return this.orderErrorMsg=[],this.order.order_name==""&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u59D3\u540D"),this.order.order_mobile==""&&this.order.order_mobile.length!=10&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u96FB\u8A71"),(this.order.pickup_date==""||this.choosePickupDate=="")&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u65E5\u671F"),this.order.pickup_time==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u6642\u9593"),this.order.pickup_location==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u5730\u9EDE"),!this.orderErrorMsg.length},getCookie(s){let r=`; ${document.cookie}`.split(`; ${s}=`);if(r.length===2)return r.pop().split(";").shift()},getDaysInMonth(s,e){const r=new Date(e,s,0).getDate();this.days=[];let a=[],o=["\u9031\u65E5","\u9031\u4E00","\u9031\u4E8C","\u9031\u4E09","\u9031\u56DB","\u9031\u4E94","\u9031\u516D"];for(let n=1;n<=r;n++){const m=new Date(e,s-1,n).toLocaleDateString("zh-TW",{weekday:"short"});if(!this.days.length&&!a.length&&m!="\u9031\u65E5")for(let g=0;g<o.indexOf(m);g++)a.push({date:"",day:""});a.push({date:n,day:m}),(m=="\u9031\u516D"||n==r)&&(this.days.push(a),a=[])}},getNextMonth(s,e){return e===12?(this.year=s+1,this.month=1,this.getDaysInMonth(this.month,this.year),{year:s+1,month:1}):(this.month=e+1,this.getDaysInMonth(this.month,this.year),{year:s,month:e+1})},getPrevMonth(s,e){return e===1?(this.year=s-1,this.month=12,this.getDaysInMonth(this.month,this.year),{year:s-1,month:12}):(this.month=e-1,this.getDaysInMonth(this.month,this.year),{year:s,month:e-1})}},mounted(){this.getUserIP(),this.getDailyAmount(),this.getDaysInMonth(this.month,this.year),this.getSetting()}},W={class:"masthead bogres-bg-color text-center",id:"header_form"},G={class:"container text-black"},H={class:"row"},Q={class:"col-md-8 text-center"},R=t("img",{src:J,class:"d-block w-100 rounded",alt:"..."},null,-1),X={class:"col-md-4 text-start"},Z={class:"my-2"},$={class:"h3"},tt=t("hr",null,null,-1),et={class:"row"},ot={class:"col-md-6 pt-1"},st=t("label",{for:"order_name",class:"form-label"},"\u8A02\u8CFC\u8005\u59D3\u540D",-1),rt={class:"col-md-6 pt-1"},nt=t("label",{for:"order_mobile",class:"form-label"},"\u8A02\u8CFC\u8005\u624B\u6A5F",-1),it={class:"row mt-2"},lt={class:"col-md-6 pt-1"},at=t("label",{for:"order_count",class:"form-label"},"\u8A02\u8CFC\u6578\u91CF\uFF08\u7247\uFF09",-1),dt={class:"col-md-6 pt-1"},ct=t("label",{class:"form-label"},"\u81EA\u53D6\u65E5\u671F",-1),ut={type:"button",class:"btn btn-light","data-bs-toggle":"modal",id:"datepickerBtn","data-bs-target":"#datepickerModal"},ht={class:"row"},pt={class:"col-md-6 pt-1"},mt=t("label",{class:"form-label"},"\u81EA\u53D6\u6642\u6BB5",-1),_t=q('<option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option>',21),bt=[_t],gt={class:"col-md-6 pt-1"},vt=t("label",{class:"form-label"},"\u81EA\u53D6\u5206\u5E97",-1),ft=t("option",{value:"\u660C\u5409\u5E97"},"\u660C\u5409\u5E97",-1),yt=t("option",{value:"\u660E\u6C34\u5E97"},"\u660E\u6C34\u5E97",-1),kt=[ft,yt],Dt={class:"col-12 pt-2"},wt={class:"h5"},Mt=t("p",{class:"fw-light small"}," \u6BCF\u7247 240 \u5143 ",-1),xt={key:0,class:"alert alert-success alert-dismissible fade show mt-2",role:"alert"},At=t("strong",null,"\u8A02\u55AE\u5DF2\u63A5\u6536\uFF0C\u7A0D\u5F8C\u6703\u6709\u4EBA\u54E1\u8207\u60A8\u806F\u7E6B\u518D\u9EBB\u7169\u7559\u610F\u4F86\u96FB\uFF0C\u8B1D\u8B1D",-1),Pt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Ct=[At,Pt],St={key:1,class:"alert alert-danger alert-dismissible fade show mt-2",role:"alert"},It=t("strong",null,"\u8ACB\u6AA2\u67E5\u8868\u55AE!",-1),Et=t("br",null,null,-1),Ot=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Nt=t("section",{class:"page-section",id:"product_description"},[t("div",{class:"container"},[t("div",{class:"row d-flex justify-content-center py-5",id:"product_description_content"},[t("div",{class:"col-md-10"},[t("nav",null,[t("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"\u5546\u54C1\u4ECB\u7D39"),t("button",{class:"nav-link",id:"nav-storage-tab","data-bs-toggle":"tab","data-bs-target":"#nav-storage",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"\u4FDD\u5B58\u53CA\u5305\u88DD")])]),t("div",{class:"tab-content mt-3",id:"nav-tabContent"},[t("div",{class:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},[t("p",null,[l(" \u4F60\u5011\u77E5\u9053\u6CD5\u5F0F\u5343\u5C64\u86CB\u7CD5\u4EE5\u524D\u662F\u7D66\u8CB4\u65CF\u4EAB\u7528\u4E0B\u5348\u8336\u55CE"),t("br"),l(" \u9084\u6709\u53E6\u4E00\u500B\u540D\u7A31\u53EB\u5343\u5C64\u53EF\u9E97\u9905"),t("br"),l(" \u6CD5\u5F0F\u7684\u53EF\u9E97\u9905\u5C31\u662F\u9019\u6A23\u8EDF\u8EDF\u7684\u6C92\u932F"),t("br"),l(" \u4E00\u5C64\u4E00\u5C64\u593E\u8457\u5976\u6CB9\u8DDF\u5176\u4ED6\u9921\u6599"),t("br"),l(" \u5207\u9762\u7684\u5730\u65B9\u771F\u7684\u5F88\u6709\u85DD\u8853\u611F"),t("br"),l(" \u6C34\u679C\u8DDF\u5976\u6CB9\u56E0\u70BA\u6709\u9905\u76AE\u7684\u5340\u9694"),t("br"),l(" \u984F\u8272\u7E7D\u7D1B\uFF0C\u5BC6\u96C6\u537B\u53C8\u4E0D\u6CBE\u67D3\u5F7C\u6B64"),t("br"),l(" \u611F\u89BA\u90FD\u6709\u81EA\u5DF1\u7684\u623F\u9593\u53EF\u4EE5\u5F85\u8457"),t("br"),l(" \u6709\u4E00\u7A2E\u96D6\u7136\u662F\u4F4F\u4E00\u8D77\u4F46\u53C8\u7D66\u4E86\u5F7C\u6B64\u96B1\u79C1\u7684\u611F\u89BA"),t("br"),l(" \u7D44\u5408\u518D\u4E00\u8D77\u5403\u5C31\u662F\u9019\u9EBC\u6709\u5C64\u6B21\u53C8\u878D\u6D3D"),t("br")]),t("p",null,[l(" \u5976\u6CB9\u7684\u751C\u800C\u4E0D\u81A9"),t("br"),l(" \u9905\u76AE\u7684\u5C64\u6B21\u53E3\u611F"),t("br"),l(" \u4F86\u9EDE\u9999\u8549\u5947\u7570\u679C\u4E00\u8D77\u8DF3\u821E\u878D\u5408\u7684\u9178\u751C\u611F"),t("br"),l(" \u7136\u5F8C\u6574\u500B\u4E00\u53E3\u585E\u9032\u6211\u7684\u5634\u5DF4\u6EFF\u8DB3\u6211\u7684\u5473\u857E"),t("br"),l(" \u6C92\u932F!!\u9084\u6709\u6817\u5B50\u7684\u9999\u6C23"),t("br"),l(" \u662F\u6817\u5B50!!!\u5C45\u7136\u52A0\u4E86\u6817\u5B50~~\u592A\u597D\u5403\u62C9 ")]),t("div",{class:"row justify-content-center"},[t("div",{class:"col-10 mb-5"},[t("div",{class:"portfolio-item mx-auto","data-bs-toggle":"modal",role:"button","data-bs-target":"#productModal2"},[t("img",{class:"img-fluid",src:T,alt:"..."})])])])]),t("div",{class:"tab-pane fade",id:"nav-storage",role:"tabpanel","aria-labelledby":"nav-storage-tab"},[t("p",{class:"fw-bold"},"\u5EFA\u8B70\u8CDE\u5473\u671F\u4FDD\u5B58\u671F\u9650"),t("p",null,"\u51B7\u85CF3\u5929"),t("p",{class:"fw-bold"},"\u5EFA\u8B70\u300C\u98DF\u7528\u65B9\u6CD5\u300D"),t("p",null,"\u300C\u51B7\u85CF\u300D\u53D6\u51FA\u98DF\u7528\uFF0C\u98DF\u7528\u4E0D\u5B8C\uFF0C\u9700\u518D\u51B7\u85CF")])])])])])],-1),Ft={class:"modal fade",id:"datepickerModal",tabindex:"-1","aria-labelledby":"datepickerModalLabel","aria-hidden":"true"},Vt={class:"modal-dialog modal-lg modal-fullscreen-lg-down"},jt={class:"modal-content"},Lt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"datepickerModalLabel"},"\u8ACB\u9078\u64C7\u65E5\u671F"),t("button",{type:"button",class:"btn-close",id:"datePickerClose","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ut={class:"modal-body"},Bt={class:"h4"},Tt={class:"table",width:"100%"},zt=t("thead",null,[t("th",null,"\u9031\u65E5"),t("th",null,"\u9031\u4E00"),t("th",null,"\u9031\u4E8C"),t("th",null,"\u9031\u4E09"),t("th",null,"\u9031\u56DB"),t("th",null,"\u9031\u4E94"),t("th",null,"\u9031\u516D")],-1),Yt=["role","onClick"],qt={key:0};function Jt(s,e,r,a,o,n){const x=h("navbar"),m=h("slide"),g=h("navigation"),P=h("pagination"),C=h("carousel"),S=h("recommendProduct"),I=h("Footer");return d(),c(f,null,[p(x),t("header",W,[t("div",G,[t("div",H,[t("div",Q,[p(C,{"items-to-show":1},{addons:k(()=>[p(g),p(P)]),default:k(()=>[p(m,{key:"1"},{default:k(()=>[R]),_:1})]),_:1})]),t("div",X,[t("div",Z,[t("span",$,u(o.order.item_name),1)]),tt,t("div",et,[t("div",ot,[st,b(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>o.order.order_name=i),id:"order_name",class:"form-control",type:"text",required:""},null,512),[[D,o.order.order_name]])]),t("div",rt,[nt,b(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>o.order.order_mobile=i),id:"order_mobile",class:"form-control",type:"text",required:""},null,512),[[D,o.order.order_mobile]])])]),t("div",it,[t("div",lt,[at,b(t("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>o.order.count=i),id:"order_count",class:"form-control",type:"number"},null,512),[[D,o.order.count]])]),t("div",dt,[ct,t("p",null,[t("button",ut,"\u9078\u64C7\u81EA\u53D6\u65E5\u671F "+u(o.choosePickupDate),1)])])]),t("div",ht,[t("div",pt,[mt,b(t("select",{"onUpdate:modelValue":e[3]||(e[3]=i=>o.order.pickup_time=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u6642\u6BB5"},bt,512),[[A,o.order.pickup_time]])]),t("div",gt,[vt,b(t("select",{"onUpdate:modelValue":e[4]||(e[4]=i=>o.order.pickup_location=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u5206\u5E97"},kt,512),[[A,o.order.pickup_location]])]),t("div",Dt,[t("p",wt,"\u7E3D\u8A08\uFF1A$"+u(n.calOrderPrice()),1),Mt,t("p",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[5]||(e[5]=(...i)=>n.saveOrder&&n.saveOrder(...i))},"\u9001\u51FA")])])]),o.formStatus.length?(d(),c("div",xt,Ct)):w("",!0),o.orderErrorMsg.length?(d(),c("div",St,[It,Et,(d(!0),c(f,null,M(o.orderErrorMsg,(i,y)=>(d(),c("span",{class:"mx-1",key:y},u(i),1))),128)),Ot])):w("",!0)])])])]),Nt,p(S),t("div",Ft,[t("div",Vt,[t("div",jt,[Lt,t("div",Ut,[t("span",Bt,u(o.year)+" / "+u(o.month),1),t("span",{class:"btn btn-light mx-2",role:"button",onClick:e[6]||(e[6]=i=>n.getPrevMonth(o.year,o.month))},"\u4E0A\u500B\u6708\u4EFD"),t("span",{class:"btn btn-light",role:"button",onClick:e[7]||(e[7]=i=>n.getNextMonth(o.year,o.month))},"\u4E0B\u500B\u6708\u4EFD"),t("table",Tt,[zt,t("tbody",null,[(d(!0),c(f,null,M(o.days,(i,y)=>(d(),c("tr",{key:y},[(d(!0),c(f,null,M(i,(_,E)=>(d(),c("td",{width:"14%",key:E,role:n.dateAmount(o.year,o.month,_.date)>0?"button":"",onClick:Kt=>n.chooseDate(o.year,o.month,_.date)},[_.day.length?(d(),c("span",qt,[t("h5",null,u(o.month)+"/"+u(_.date),1),t("div",{class:Y(["text-white p-1",n.dateAmount(o.year,o.month,_.date)>0?"bg-success":"bg-warning"]),style:{"font-size":"12px"}},u(n.getAmountText(o.year,o.month,_.date)),3)])):w("",!0)],8,Yt))),128))]))),128))])])])])])]),p(I)],64)}var Qt=z(K,[["render",Jt]]);export{Qt as default};
