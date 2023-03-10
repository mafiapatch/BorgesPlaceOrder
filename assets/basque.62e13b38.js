import{d as v}from"./dataService.50f846ff.js";import{n as V,F,C as N,S as B,P as L,N as U,r as j,b as C}from"./carousel.es.91dad1ca.js";import{_ as q,r as h,o as a,c as d,a as p,b as t,w as k,t as c,d as b,v as w,e as D,f as M,F as f,g as A,h as u,n as T,i as Y}from"./index.5e72db3a.js";const z={name:"millefeuille",data(){return{formStatus:"",userIP:"",item_name_slug:"basque",order:{item_name:"\u5DF4\u65AF\u514B\u4E73\u916A\u86CB\u7CD5",count:1,pickup_date:"",pickup_time:"12:00",pickup_location:"\u660C\u5409\u5E97",order_mobile:"",order_name:"",order_status:"\u672A\u53D6\u8CA8",order_price:0,created_ts:"",created_date:"",ip:"",userAgent:""},amount:[],amountKey:[],month:new Date().getMonth()+1,year:new Date().getFullYear(),days:[],orderErrorMsg:[],settingList:[],showAmount:!1}},components:{navbar:V,Footer:F,Carousel:N,Slide:B,Pagination:L,Navigation:U,recommendProduct:j},methods:{getUserIP(){fetch("https://api.ipify.org?format=json").then(o=>o.json()).then(({ip:o})=>{this.userIP=o})},getAmountText(o,e,r){return this.dateAmount(o,e,r)>0?this.showAmount?`${this.dateAmount(o,e,r)} \u500B`:"\u53EF\u8A02\u8CFC":"\u7121\u6CD5\u8A02\u8CFC"},getSetting(){v.getAllSettings().once("value",e=>{var r;this.settingList=e.val(),this.showAmount=(r=this.settingList.showAmount)!=null?r:!1})},getDailyAmount(){this.amount=[],v.getAllAmounts().orderByChild("date").once("value",o=>{for(let e in o.val()){let r=o.val()[e];typeof r=="object"&&r!==null&&r.product===this.item_name_slug&&this.amount.push({...o.val()[e],key:e})}})},calOrderPrice(){let o=this.order.count%2,e=Math.floor(this.order.count/2);return o===0?e*1350:e*1350+680},dateAmount(o,e,r){var l,s;return(s=(l=this.amount.find(n=>{if(n.date==`${o}/${e}/${r}`&&new Date(`${o}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:l.currentAmount)!=null?s:0},dateAmountIndex(o,e,r){var l,s;return(s=(l=this.amount.find(n=>{if(n.date==`${o}/${e}/${r}`&&new Date(`${o}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:l.key)!=null?s:""},chooseDate(o,e,r){this.dateAmount(o,e,r)>0&&(this.order.pickup_date=`${o}/${e}/${r}`,document.getElementById("datePickerClose").click())},saveOrder(){if(this.order.ip=this.userIP,this.order.userAgent=window.navigator.userAgent,!this.order.count||this.order.ip==""||this.order.userAgent==""||!this.checkOrder())return!1;let o=new Date;this.order.created_date=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate(),this.order.created_ts=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds(),this.order.order_price=this.calOrderPrice(),v.createOrder(this.order).then(()=>{let e=this.order.pickup_date.split("/")[0],r=this.order.pickup_date.split("/")[1],l=this.order.pickup_date.split("/")[2];v.setAmount({currentAmount:this.dateAmount(e,r,l)-this.order.count},this.dateAmountIndex(e,r,l)),this.formStatus="\u65B0\u589E\u6210\u529F",this.resetOrder(),this.timeout=setTimeout(()=>{this.formStatus=""},1e4),this.getDailyAmount()}).catch(e=>{alert("\u65B0\u589E\u5931\u6557"),console.log(e)})},resetOrder(){this.order.count=1,this.order.pickup_date="",this.order.pickup_time="12:00",this.order.pickup_location="\u660C\u5409\u5E97",this.order.order_mobile="",this.order.order_name="",this.order.order_status="\u672A\u53D6\u8CA8",this.order.created_ts="",this.order.created_date=""},checkOrder(){return this.orderErrorMsg=[],this.order.order_name==""&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u59D3\u540D"),this.order.order_mobile==""&&this.order.order_mobile.length!=10&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u96FB\u8A71"),this.order.pickup_date==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u65E5\u671F"),this.order.pickup_time==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u6642\u9593"),this.order.pickup_location==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u5730\u9EDE"),!this.orderErrorMsg.length},getCookie(o){let r=`; ${document.cookie}`.split(`; ${o}=`);if(r.length===2)return r.pop().split(";").shift()},getDaysInMonth(o,e){const r=new Date(e,o,0).getDate();this.days=[];let l=[],s=["\u9031\u65E5","\u9031\u4E00","\u9031\u4E8C","\u9031\u4E09","\u9031\u56DB","\u9031\u4E94","\u9031\u516D"];for(let n=1;n<=r;n++){const _=new Date(e,o-1,n).toLocaleDateString("zh-TW",{weekday:"short"});if(!this.days.length&&!l.length&&_!="\u9031\u65E5")for(let g=0;g<s.indexOf(_);g++)l.push({date:"",day:""});l.push({date:n,day:_}),(_=="\u9031\u516D"||n==r)&&(this.days.push(l),l=[])}},getNextMonth(o,e){return e===12?(this.year=o+1,this.month=1,this.getDaysInMonth(this.month,this.year),{year:o+1,month:1}):(this.month=e+1,this.getDaysInMonth(this.month,this.year),{year:o,month:e+1})},getPrevMonth(o,e){return e===1?(this.year=o-1,this.month=12,this.getDaysInMonth(this.month,this.year),{year:o-1,month:12}):(this.month=e-1,this.getDaysInMonth(this.month,this.year),{year:o,month:e-1})}},mounted(){this.getUserIP(),this.getDailyAmount(),this.getDaysInMonth(this.month,this.year),this.getSetting()}},H={class:"masthead bogres-bg-color text-center",id:"header_form"},K={class:"container text-black"},W={class:"row"},G={class:"col-md-8 text-center"},J=t("img",{src:C,class:"d-block w-100 rounded",alt:"..."},null,-1),Q={class:"col-md-4 text-start"},R={class:"my-2"},X={class:"h3"},Z=t("hr",null,null,-1),$={class:"row"},tt={class:"col-md-6 pt-1"},et=t("label",{for:"order_name",class:"form-label"},"\u8A02\u8CFC\u8005\u59D3\u540D",-1),ot={class:"col-md-6 pt-1"},st=t("label",{for:"order_mobile",class:"form-label"},"\u8A02\u8CFC\u8005\u624B\u6A5F",-1),rt={class:"row mt-2"},nt={class:"col-md-6 pt-1"},it=t("label",{for:"order_count",class:"form-label"},"\u8A02\u8CFC\u6578\u91CF",-1),lt={class:"col-md-6 pt-1"},at=t("label",{class:"form-label"},"\u81EA\u53D6\u65E5\u671F",-1),dt={type:"button",class:"btn btn-light","data-bs-toggle":"modal",id:"datepickerBtn","data-bs-target":"#datepickerModal"},ct={class:"row"},ut={class:"col-md-6 pt-1"},ht=t("label",{class:"form-label"},"\u81EA\u53D6\u6642\u6BB5",-1),pt=Y('<option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option>',21),_t=[pt],mt={class:"col-md-6 pt-1"},bt=t("label",{class:"form-label"},"\u81EA\u53D6\u5206\u5E97",-1),gt=t("option",{value:"\u660C\u5409\u5E97"},"\u660C\u5409\u5E97",-1),vt=t("option",{value:"\u660E\u6C34\u5E97"},"\u660E\u6C34\u5E97",-1),ft=[gt,vt],yt={class:"col-12 pt-2"},kt={class:"h5"},wt=t("p",{class:"fw-light small"}," \u4E00\u76D2 680 \u5143\uFF0C\u4E8C\u76D2 1350 \u5143\u3001\u6BCF\u5169\u76D2\u9001\u4E00\u53EA\u7CBE\u7F8E\u4FDD\u51B7\u888B ",-1),Mt={key:0,class:"alert alert-success alert-dismissible fade show mt-2",role:"alert"},At=t("strong",null,"\u8A02\u55AE\u5DF2\u63A5\u6536\uFF0C\u7A0D\u5F8C\u6703\u6709\u4EBA\u54E1\u8207\u60A8\u806F\u7E6B\u518D\u9EBB\u7169\u7559\u610F\u4F86\u96FB\uFF0C\u8B1D\u8B1D",-1),xt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Dt=[At,xt],Ct={key:1,class:"alert alert-danger alert-dismissible fade show mt-2",role:"alert"},Pt=t("strong",null,"\u8ACB\u6AA2\u67E5\u8868\u55AE!",-1),St=t("br",null,null,-1),It=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Et=t("section",{class:"page-section",id:"product_description"},[t("div",{class:"container"},[t("div",{class:"row d-flex justify-content-center py-5",id:"product_description_content"},[t("div",{class:"col-md-10"},[t("nav",null,[t("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"\u5546\u54C1\u4ECB\u7D39"),t("button",{class:"nav-link",id:"nav-storage-tab","data-bs-toggle":"tab","data-bs-target":"#nav-storage",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"\u4FDD\u5B58\u53CA\u5305\u88DD")])]),t("div",{class:"tab-content mt-3",id:"nav-tabContent"},[t("div",{class:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},[t("p",null,[u(" \u5DF4\u65AF\u514B\u7684\u8D77\u6E90\u65BC\u4F4D\u65BC\u6CD5\u570B\u3001\u897F\u73ED\u7259\u908A\u5883\u7684\u5DF4\u65AF\u514B\u5730\u5340\uFF08Basque\uFF09"),t("br"),u(" \u5403\u8D77\u4F86\u5F88\u50CF\u4E00\u822C\u5E02\u9762\u4E0A\u7684\u4E73\u916A\u86CB\u7CD5 \u4F46\u53C8\u89BA\u5F97\u4E0D\u592A\u4E00\u6A23\u5C0D\u55CE\uFF0C\u751A\u81F3\u9084\u89BA\u5F97\u8868\u76AE\u6709\u9EDE\u9ED1"),t("br"),u(" \u6C92\u932F\u5537! \u9019\u5C31\u662F\u5DF4\u65AF\u514B\u7684\u7279\u8272 ")]),t("p",null,[u(" \u5728\u5DF4\u65AF\u514B\u5730\u5340\u70BA\u7576\u5730\u7684\u50B3\u7D71\u7CD5\u9EDE\uFF0C\u53C8\u88AB\u7A31\u70BA\u300C\u70E4\u7126\u7684\u8D77\u53F8\u86CB\u7CD5\u300D"),t("br"),u(" \u6BD4\u4E00\u822C\u7684\u8D77\u53F8\u86CB\u7CD5\u9084\u591A\u589E\u6DFB\u4E86\u7126\u9999\u7684\u5473\u9053\u8DDF\u53E3\u611F"),t("br"),u(" \u6CE2\u8D6B\u58EB\u7684\u5DF4\u65AF\u514B\u5403\u7B2C\u4E00\u53E3\u7684\u6642\u5019\u4E5F\u6703\u89BA\u5F97\u5F88\u7279\u5225\uFF0C\u662F\u4EC0\u9EBC\u5473\u9053?"),t("br"),u(" \u662F\u8702\u871C\u5537!! \u60F3\u4E0D\u5230\u8702\u871C\u8DDF\u5DF4\u65AF\u514B\u53EF\u4EE5\u76F8\u8655\u5F97\u5982\u6B64\u878D\u6D3D"),t("br"),u(" \u518D\u52A0\u4E0A\u8868\u5C64\u7684\u6AB8\u6AAC\u788E\uFF0C\u65E2\u5403\u7684\u5230\u8702\u871C\u7684\u9999\uFF0C\u4E73\u916A\u7684\u7DBF\u5BC6\uFF0C\u5C3E\u97FB\u518D\u4F86\u9EDE\u6AB8\u6AAC\u6E05\u723D\u611F"),t("br"),u(" \u6574\u500B\u723D\u5EA6\u5C31\u662F\u66F4\u4E0A\u4E00\u5C64\u6A13\u963F!! ")]),t("div",{class:"row justify-content-center"},[t("div",{class:"col-10 mb-5"},[t("div",{class:"portfolio-item mx-auto","data-bs-toggle":"modal",role:"button","data-bs-target":"#productModal2"},[t("img",{class:"img-fluid",src:C,alt:"..."})])])])]),t("div",{class:"tab-pane fade",id:"nav-storage",role:"tabpanel","aria-labelledby":"nav-storage-tab"},[t("p",null,"\u5EFA\u8B70\u6700\u4F73\u4EAB\u5473\u4FDD\u5B58\u671F\u9650\u70BA\u51B7\u51CD3\u661F\u671F\u6216\u51B7\u85CF3\u5929\u5167\uFF0C\u51B7\u51CD\u5F8C\u7F6E\u65BC\u51B7\u85CF\u9000\u51B0\u7D041\u5C0F\u6642\uFF0C\u51B7\u85CF\u53D6\u51FA\u98DF\u7528\uFF0C\u98DF\u7528\u4E0D\u5B8C\u8ACB\u518D\u51B7\u85CF\u6216\u51B7\u51CD\u4FDD\u5B58\u3002")])])])])])],-1),Ot={class:"modal fade",id:"datepickerModal",tabindex:"-1","aria-labelledby":"datepickerModalLabel","aria-hidden":"true"},Vt={class:"modal-dialog modal-lg modal-fullscreen-lg-down"},Ft={class:"modal-content"},Nt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"datepickerModalLabel"},"\u8ACB\u9078\u64C7\u65E5\u671F"),t("button",{type:"button",class:"btn-close",id:"datePickerClose","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Bt={class:"modal-body"},Lt={class:"h4"},Ut={class:"table",width:"100%"},jt=t("thead",null,[t("th",null,"\u9031\u65E5"),t("th",null,"\u9031\u4E00"),t("th",null,"\u9031\u4E8C"),t("th",null,"\u9031\u4E09"),t("th",null,"\u9031\u56DB"),t("th",null,"\u9031\u4E94"),t("th",null,"\u9031\u516D")],-1),qt=["role","onClick"],Tt={key:0};function Yt(o,e,r,l,s,n){const x=h("navbar"),_=h("slide"),g=h("navigation"),P=h("pagination"),S=h("carousel"),I=h("recommendProduct"),E=h("Footer");return a(),d(f,null,[p(x),t("header",H,[t("div",K,[t("div",W,[t("div",G,[p(S,{"items-to-show":1},{addons:k(()=>[p(g),p(P)]),default:k(()=>[p(_,{key:"1"},{default:k(()=>[J]),_:1})]),_:1})]),t("div",Q,[t("div",R,[t("span",X,c(s.order.item_name),1)]),Z,t("div",$,[t("div",tt,[et,b(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.order.order_name=i),id:"order_name",class:"form-control",type:"text",required:""},null,512),[[w,s.order.order_name]])]),t("div",ot,[st,b(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>s.order.order_mobile=i),id:"order_mobile",class:"form-control",type:"text",required:""},null,512),[[w,s.order.order_mobile]])])]),t("div",rt,[t("div",nt,[it,b(t("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>s.order.count=i),id:"order_count",class:"form-control",type:"number"},null,512),[[w,s.order.count]])]),t("div",lt,[at,t("p",null,[t("button",dt,"\u9078\u64C7\u81EA\u53D6\u65E5\u671F "+c(s.order.pickup_date),1)])])]),t("div",ct,[t("div",ut,[ht,b(t("select",{"onUpdate:modelValue":e[3]||(e[3]=i=>s.order.pickup_time=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u6642\u6BB5"},_t,512),[[D,s.order.pickup_time]])]),t("div",mt,[bt,b(t("select",{"onUpdate:modelValue":e[4]||(e[4]=i=>s.order.pickup_location=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u5206\u5E97"},ft,512),[[D,s.order.pickup_location]])]),t("div",yt,[t("p",kt,"\u7E3D\u8A08\uFF1A$"+c(n.calOrderPrice()),1),wt,t("p",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[5]||(e[5]=(...i)=>n.saveOrder&&n.saveOrder(...i))},"\u9001\u51FA")])])]),s.formStatus.length?(a(),d("div",Mt,Dt)):M("",!0),s.orderErrorMsg.length?(a(),d("div",Ct,[Pt,St,(a(!0),d(f,null,A(s.orderErrorMsg,(i,y)=>(a(),d("span",{class:"mx-1",key:y},c(i),1))),128)),It])):M("",!0)])])])]),Et,p(I),t("div",Ot,[t("div",Vt,[t("div",Ft,[Nt,t("div",Bt,[t("span",Lt,c(s.year)+" / "+c(s.month),1),t("span",{class:"btn btn-light mx-2",role:"button",onClick:e[6]||(e[6]=i=>n.getPrevMonth(s.year,s.month))},"\u4E0A\u500B\u6708\u4EFD"),t("span",{class:"btn btn-light",role:"button",onClick:e[7]||(e[7]=i=>n.getNextMonth(s.year,s.month))},"\u4E0B\u500B\u6708\u4EFD"),t("table",Ut,[jt,t("tbody",null,[(a(!0),d(f,null,A(s.days,(i,y)=>(a(),d("tr",{key:y},[(a(!0),d(f,null,A(i,(m,O)=>(a(),d("td",{width:"14%",key:O,role:n.dateAmount(s.year,s.month,m.date)>0?"button":"",onClick:zt=>n.chooseDate(s.year,s.month,m.date)},[m.day.length?(a(),d("span",Tt,[t("h5",null,c(s.month)+"/"+c(m.date),1),t("div",{class:T(["text-white p-1",n.dateAmount(s.year,s.month,m.date)>0?"bg-success":"bg-warning"]),style:{"font-size":"12px"}},c(n.getAmountText(s.year,s.month,m.date)),3)])):M("",!0)],8,qt))),128))]))),128))])])])])])]),p(E)],64)}var Gt=q(z,[["render",Yt]]);export{Gt as default};
