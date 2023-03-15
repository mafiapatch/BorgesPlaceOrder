import{d as v}from"./dataService.02d58fab.js";import{n as N,F,C as V,S as j,P as B,N as L,r as U,e as q,b as P}from"./index.2cd03f83.js";import{_ as T,r as u,o as a,c as d,a as p,b as t,w as k,t as c,d as b,v as D,e as A,f as w,F as f,g as M,h,n as z,i as Y}from"./index.98db41d3.js";const J={name:"millefeuille",data(){return{formStatus:"",userIP:"",item_name_slug:"basque",order:{item_name:"\u5DF4\u65AF\u514B\u4E73\u916A\u86CB\u7CD5",count:1,pickup_date:"",pickup_time:"12:00",pickup_location:"\u660C\u5409\u5E97",order_mobile:"",order_name:"",order_status:"\u672A\u53D6\u8CA8",order_price:0,created_ts:"",created_date:"",ip:"",userAgent:""},choosePickupDate:"",amount:[],amountKey:[],month:new Date().getMonth()+1,year:new Date().getFullYear(),days:[],orderErrorMsg:[],settingList:[],showAmount:!1}},components:{navbar:N,Footer:F,Carousel:V,Slide:j,Pagination:B,Navigation:L,recommendProduct:U},methods:{getUserIP(){fetch("https://api.ipify.org?format=json").then(s=>s.json()).then(({ip:s})=>{this.userIP=s})},getAmountText(s,e,r){return this.dateAmount(s,e,r)>0?this.showAmount?`${this.dateAmount(s,e,r)} \u500B`:"\u53EF\u8A02\u8CFC":"\u7121\u6CD5\u8A02\u8CFC"},getSetting(){v.getAllSettings().once("value",e=>{var r;this.settingList=e.val(),this.showAmount=(r=this.settingList.showAmount)!=null?r:!1})},getDailyAmount(){this.amount=[],v.getAllAmounts().orderByChild("date").once("value",s=>{for(let e in s.val()){let r=s.val()[e];typeof r=="object"&&r!==null&&r.product===this.item_name_slug&&this.amount.push({...s.val()[e],key:e})}})},calOrderPrice(){let s=this.order.count%2,e=Math.floor(this.order.count/2);return s===0?e*1350:e*1350+680},dateAmount(s,e,r){var l,o;return(o=(l=this.amount.find(n=>{if(n.date==`${s}/${e}/${r}`&&new Date(`${s}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:l.currentAmount)!=null?o:0},dateAmountIndex(s,e,r){var l,o;return(o=(l=this.amount.find(n=>{if(n.date==`${s}/${e}/${r}`&&new Date(`${s}/${e}/${r} 00:00:00`)>new Date)return n}))==null?void 0:l.key)!=null?o:""},chooseDate(s,e,r){this.dateAmount(s,e,r)>0&&(this.choosePickupDate=`${s}/${e}/${r}`,document.getElementById("datePickerClose").click())},saveOrder(){if(this.order.ip=this.userIP,this.order.userAgent=window.navigator.userAgent,this.order.pickup_date=Date.parse(this.choosePickupDate),!this.order.count||this.order.ip==""||this.order.userAgent==""||!this.checkOrder())return!1;let s=new Date;this.order.created_date=s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate(),this.order.created_ts=Date.parse(new Date),this.order.order_price=this.calOrderPrice(),v.createOrder(this.order).then(()=>{let e=this.choosePickupDate.split("/")[0],r=this.choosePickupDate.split("/")[1],l=this.choosePickupDate.split("/")[2];v.setAmount({currentAmount:this.dateAmount(e,r,l)-this.order.count},this.dateAmountIndex(e,r,l)).then(()=>{q.send("service_s5z4c1n","template_30m3lrz",this.order,"-NNjw4dJJrkwFkMBr").then(o=>{console.log("SUCCESS!",o.text)},o=>{console.log("FAILED...",o.text)}),this.formStatus="\u65B0\u589E\u6210\u529F",this.resetOrder(),this.timeout=setTimeout(()=>{this.formStatus=""},1e4),this.getDailyAmount()})}).catch(e=>{alert("\u65B0\u589E\u5931\u6557"),console.log(e)})},resetOrder(){this.order.count=1,this.order.pickup_date="",this.choosePickupDate="",this.order.pickup_time="12:00",this.order.pickup_location="\u660C\u5409\u5E97",this.order.order_mobile="",this.order.order_name="",this.order.order_status="\u672A\u53D6\u8CA8",this.order.created_ts="",this.order.created_date=""},checkOrder(){return this.orderErrorMsg=[],this.order.order_name==""&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u59D3\u540D"),this.order.order_mobile==""&&this.order.order_mobile.length!=10&&this.orderErrorMsg.push("\u8ACB\u8F38\u5165\u96FB\u8A71"),(this.order.pickup_date==""||this.choosePickupDate=="")&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u65E5\u671F"),this.order.pickup_time==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u6642\u9593"),this.order.pickup_location==""&&this.orderErrorMsg.push("\u8ACB\u9078\u64C7\u53D6\u8CA8\u5730\u9EDE"),!this.orderErrorMsg.length},getCookie(s){let r=`; ${document.cookie}`.split(`; ${s}=`);if(r.length===2)return r.pop().split(";").shift()},getDaysInMonth(s,e){const r=new Date(e,s,0).getDate();this.days=[];let l=[],o=["\u9031\u65E5","\u9031\u4E00","\u9031\u4E8C","\u9031\u4E09","\u9031\u56DB","\u9031\u4E94","\u9031\u516D"];for(let n=1;n<=r;n++){const m=new Date(e,s-1,n).toLocaleDateString("zh-TW",{weekday:"short"});if(!this.days.length&&!l.length&&m!="\u9031\u65E5")for(let g=0;g<o.indexOf(m);g++)l.push({date:"",day:""});l.push({date:n,day:m}),(m=="\u9031\u516D"||n==r)&&(this.days.push(l),l=[])}},getNextMonth(s,e){return e===12?(this.year=s+1,this.month=1,this.getDaysInMonth(this.month,this.year),{year:s+1,month:1}):(this.month=e+1,this.getDaysInMonth(this.month,this.year),{year:s,month:e+1})},getPrevMonth(s,e){return e===1?(this.year=s-1,this.month=12,this.getDaysInMonth(this.month,this.year),{year:s-1,month:12}):(this.month=e-1,this.getDaysInMonth(this.month,this.year),{year:s,month:e-1})}},mounted(){this.getUserIP(),this.getDailyAmount(),this.getDaysInMonth(this.month,this.year),this.getSetting()}},K={class:"masthead bogres-bg-color text-center",id:"header_form"},W={class:"container text-black"},G={class:"row"},H={class:"col-md-8 text-center"},Q=t("img",{src:P,class:"d-block w-100 rounded",alt:"..."},null,-1),R={class:"col-md-4 text-start"},X={class:"my-2"},Z={class:"h3"},$=t("hr",null,null,-1),tt={class:"row"},et={class:"col-md-6 pt-1"},ot=t("label",{for:"order_name",class:"form-label"},"\u8A02\u8CFC\u8005\u59D3\u540D",-1),st={class:"col-md-6 pt-1"},rt=t("label",{for:"order_mobile",class:"form-label"},"\u8A02\u8CFC\u8005\u624B\u6A5F",-1),nt={class:"row mt-2"},it={class:"col-md-6 pt-1"},lt=t("label",{for:"order_count",class:"form-label"},"\u8A02\u8CFC\u6578\u91CF",-1),at={class:"col-md-6 pt-1"},dt=t("label",{class:"form-label"},"\u81EA\u53D6\u65E5\u671F",-1),ct={type:"button",class:"btn btn-light","data-bs-toggle":"modal",id:"datepickerBtn","data-bs-target":"#datepickerModal"},ht={class:"row"},ut={class:"col-md-6 pt-1"},pt=t("label",{class:"form-label"},"\u81EA\u53D6\u6642\u6BB5",-1),mt=Y('<option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option>',21),_t=[mt],bt={class:"col-md-6 pt-1"},gt=t("label",{class:"form-label"},"\u81EA\u53D6\u5206\u5E97",-1),vt=t("option",{value:"\u660C\u5409\u5E97"},"\u660C\u5409\u5E97",-1),ft=t("option",{value:"\u660E\u6C34\u5E97"},"\u660E\u6C34\u5E97",-1),yt=[vt,ft],kt={class:"col-12 pt-2"},Dt={class:"h5"},wt=t("p",{class:"fw-light small"}," \u4E00\u76D2 680 \u5143\uFF0C\u4E8C\u76D2 1350 \u5143\u3001\u6BCF\u5169\u76D2\u9001\u4E00\u53EA\u7CBE\u7F8E\u4FDD\u51B7\u888B ",-1),Mt={key:0,class:"alert alert-success alert-dismissible fade show mt-2",role:"alert"},xt=t("strong",null,"\u8A02\u55AE\u5DF2\u63A5\u6536\uFF0C\u7A0D\u5F8C\u6703\u6709\u4EBA\u54E1\u8207\u60A8\u806F\u7E6B\u518D\u9EBB\u7169\u7559\u610F\u4F86\u96FB\uFF0C\u8B1D\u8B1D",-1),At=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Pt=[xt,At],Ct={key:1,class:"alert alert-danger alert-dismissible fade show mt-2",role:"alert"},St=t("strong",null,"\u8ACB\u6AA2\u67E5\u8868\u55AE!",-1),It=t("br",null,null,-1),Et=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Ot=t("section",{class:"page-section",id:"product_description"},[t("div",{class:"container"},[t("div",{class:"row d-flex justify-content-center py-5",id:"product_description_content"},[t("div",{class:"col-md-10"},[t("nav",null,[t("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"\u5546\u54C1\u4ECB\u7D39"),t("button",{class:"nav-link",id:"nav-storage-tab","data-bs-toggle":"tab","data-bs-target":"#nav-storage",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"\u4FDD\u5B58\u53CA\u5305\u88DD")])]),t("div",{class:"tab-content mt-3",id:"nav-tabContent"},[t("div",{class:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},[t("p",null,[h(" \u5DF4\u65AF\u514B\u7684\u8D77\u6E90\u65BC\u4F4D\u65BC\u6CD5\u570B\u3001\u897F\u73ED\u7259\u908A\u5883\u7684\u5DF4\u65AF\u514B\u5730\u5340\uFF08Basque\uFF09"),t("br"),h(" \u5403\u8D77\u4F86\u5F88\u50CF\u4E00\u822C\u5E02\u9762\u4E0A\u7684\u4E73\u916A\u86CB\u7CD5 \u4F46\u53C8\u89BA\u5F97\u4E0D\u592A\u4E00\u6A23\u5C0D\u55CE\uFF0C\u751A\u81F3\u9084\u89BA\u5F97\u8868\u76AE\u6709\u9EDE\u9ED1"),t("br"),h(" \u6C92\u932F\u5537! \u9019\u5C31\u662F\u5DF4\u65AF\u514B\u7684\u7279\u8272 ")]),t("p",null,[h(" \u5728\u5DF4\u65AF\u514B\u5730\u5340\u70BA\u7576\u5730\u7684\u50B3\u7D71\u7CD5\u9EDE\uFF0C\u53C8\u88AB\u7A31\u70BA\u300C\u70E4\u7126\u7684\u8D77\u53F8\u86CB\u7CD5\u300D"),t("br"),h(" \u6BD4\u4E00\u822C\u7684\u8D77\u53F8\u86CB\u7CD5\u9084\u591A\u589E\u6DFB\u4E86\u7126\u9999\u7684\u5473\u9053\u8DDF\u53E3\u611F"),t("br"),h(" \u6CE2\u8D6B\u58EB\u7684\u5DF4\u65AF\u514B\u5403\u7B2C\u4E00\u53E3\u7684\u6642\u5019\u4E5F\u6703\u89BA\u5F97\u5F88\u7279\u5225\uFF0C\u662F\u4EC0\u9EBC\u5473\u9053?"),t("br"),h(" \u662F\u8702\u871C\u5537!! \u60F3\u4E0D\u5230\u8702\u871C\u8DDF\u5DF4\u65AF\u514B\u53EF\u4EE5\u76F8\u8655\u5F97\u5982\u6B64\u878D\u6D3D"),t("br"),h(" \u518D\u52A0\u4E0A\u8868\u5C64\u7684\u6AB8\u6AAC\u788E\uFF0C\u65E2\u5403\u7684\u5230\u8702\u871C\u7684\u9999\uFF0C\u4E73\u916A\u7684\u7DBF\u5BC6\uFF0C\u5C3E\u97FB\u518D\u4F86\u9EDE\u6AB8\u6AAC\u6E05\u723D\u611F"),t("br"),h(" \u6574\u500B\u723D\u5EA6\u5C31\u662F\u66F4\u4E0A\u4E00\u5C64\u6A13\u963F!! ")]),t("div",{class:"row justify-content-center"},[t("div",{class:"col-10 mb-5"},[t("div",{class:"portfolio-item mx-auto","data-bs-toggle":"modal",role:"button","data-bs-target":"#productModal2"},[t("img",{class:"img-fluid",src:P,alt:"..."})])])])]),t("div",{class:"tab-pane fade",id:"nav-storage",role:"tabpanel","aria-labelledby":"nav-storage-tab"},[t("p",null,"\u5EFA\u8B70\u6700\u4F73\u4EAB\u5473\u4FDD\u5B58\u671F\u9650\u70BA\u51B7\u51CD3\u661F\u671F\u6216\u51B7\u85CF3\u5929\u5167\uFF0C\u51B7\u51CD\u5F8C\u7F6E\u65BC\u51B7\u85CF\u9000\u51B0\u7D041\u5C0F\u6642\uFF0C\u51B7\u85CF\u53D6\u51FA\u98DF\u7528\uFF0C\u98DF\u7528\u4E0D\u5B8C\u8ACB\u518D\u51B7\u85CF\u6216\u51B7\u51CD\u4FDD\u5B58\u3002")])])])])])],-1),Nt={class:"modal fade",id:"datepickerModal",tabindex:"-1","aria-labelledby":"datepickerModalLabel","aria-hidden":"true"},Ft={class:"modal-dialog modal-lg modal-fullscreen-lg-down"},Vt={class:"modal-content"},jt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"datepickerModalLabel"},"\u8ACB\u9078\u64C7\u65E5\u671F"),t("button",{type:"button",class:"btn-close",id:"datePickerClose","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Bt={class:"modal-body"},Lt={class:"h4"},Ut={class:"table",width:"100%"},qt=t("thead",null,[t("th",null,"\u9031\u65E5"),t("th",null,"\u9031\u4E00"),t("th",null,"\u9031\u4E8C"),t("th",null,"\u9031\u4E09"),t("th",null,"\u9031\u56DB"),t("th",null,"\u9031\u4E94"),t("th",null,"\u9031\u516D")],-1),Tt=["role","onClick"],zt={key:0};function Yt(s,e,r,l,o,n){const x=u("navbar"),m=u("slide"),g=u("navigation"),C=u("pagination"),S=u("carousel"),I=u("recommendProduct"),E=u("Footer");return a(),d(f,null,[p(x),t("header",K,[t("div",W,[t("div",G,[t("div",H,[p(S,{"items-to-show":1},{addons:k(()=>[p(g),p(C)]),default:k(()=>[p(m,{key:"1"},{default:k(()=>[Q]),_:1})]),_:1})]),t("div",R,[t("div",X,[t("span",Z,c(o.order.item_name),1)]),$,t("div",tt,[t("div",et,[ot,b(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>o.order.order_name=i),id:"order_name",class:"form-control",type:"text",required:""},null,512),[[D,o.order.order_name]])]),t("div",st,[rt,b(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>o.order.order_mobile=i),id:"order_mobile",class:"form-control",type:"text",required:""},null,512),[[D,o.order.order_mobile]])])]),t("div",nt,[t("div",it,[lt,b(t("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>o.order.count=i),id:"order_count",class:"form-control",type:"number"},null,512),[[D,o.order.count]])]),t("div",at,[dt,t("p",null,[t("button",ct,"\u9078\u64C7\u81EA\u53D6\u65E5\u671F "+c(o.choosePickupDate),1)])])]),t("div",ht,[t("div",ut,[pt,b(t("select",{"onUpdate:modelValue":e[3]||(e[3]=i=>o.order.pickup_time=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u6642\u6BB5"},_t,512),[[A,o.order.pickup_time]])]),t("div",bt,[gt,b(t("select",{"onUpdate:modelValue":e[4]||(e[4]=i=>o.order.pickup_location=i),class:"form-control",placeholder:"\u8ACB\u9078\u64C7\u81EA\u53D6\u5206\u5E97"},yt,512),[[A,o.order.pickup_location]])]),t("div",kt,[t("p",Dt,"\u7E3D\u8A08\uFF1A$"+c(n.calOrderPrice()),1),wt,t("p",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[5]||(e[5]=(...i)=>n.saveOrder&&n.saveOrder(...i))},"\u9001\u51FA")])])]),o.formStatus.length?(a(),d("div",Mt,Pt)):w("",!0),o.orderErrorMsg.length?(a(),d("div",Ct,[St,It,(a(!0),d(f,null,M(o.orderErrorMsg,(i,y)=>(a(),d("span",{class:"mx-1",key:y},c(i),1))),128)),Et])):w("",!0)])])])]),Ot,p(I),t("div",Nt,[t("div",Ft,[t("div",Vt,[jt,t("div",Bt,[t("span",Lt,c(o.year)+" / "+c(o.month),1),t("span",{class:"btn btn-light mx-2",role:"button",onClick:e[6]||(e[6]=i=>n.getPrevMonth(o.year,o.month))},"\u4E0A\u500B\u6708\u4EFD"),t("span",{class:"btn btn-light",role:"button",onClick:e[7]||(e[7]=i=>n.getNextMonth(o.year,o.month))},"\u4E0B\u500B\u6708\u4EFD"),t("table",Ut,[qt,t("tbody",null,[(a(!0),d(f,null,M(o.days,(i,y)=>(a(),d("tr",{key:y},[(a(!0),d(f,null,M(i,(_,O)=>(a(),d("td",{width:"14%",key:O,role:n.dateAmount(o.year,o.month,_.date)>0?"button":"",onClick:Jt=>n.chooseDate(o.year,o.month,_.date)},[_.day.length?(a(),d("span",zt,[t("h5",null,c(o.month)+"/"+c(_.date),1),t("div",{class:z(["text-white p-1",n.dateAmount(o.year,o.month,_.date)>0?"bg-success":"bg-warning"]),style:{"font-size":"12px"}},c(n.getAmountText(o.year,o.month,_.date)),3)])):w("",!0)],8,Tt))),128))]))),128))])])])])])]),p(E)],64)}var Ht=T(J,[["render",Yt]]);export{Ht as default};
