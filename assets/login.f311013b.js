import{d as a}from"./dataService.02d58fab.js";import{_ as d,o as m,c as p,b as e,d as n,v as i}from"./index.98db41d3.js";const c={name:"adminLogin",components:{},data(){return{email:"",password:""}},methods:{login(){a.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{a.auth().currentUser&&this.$router.push({name:"adminOrderList"})}).catch(t=>{console.log(t),alert(t.message)})}},mounted(){a.authSetPersistence()}},u={class:"list row my-2"},_={class:"col-md-12 form-control"},f={class:"form-group"},h=e("label",{for:"exampleInputEmail1"},"\u5E33\u865F",-1),v={class:"form-group"},g=e("label",{for:"exampleInputPassword1"},"\u5BC6\u78BC",-1);function w(t,s,x,y,l,r){return m(),p("div",u,[e("div",_,[e("form",null,[e("div",f,[h,n(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=o=>l.email=o),class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"\u5E33\u865F"},null,512),[[i,l.email]])]),e("div",v,[g,n(e("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":s[1]||(s[1]=o=>l.password=o),placeholder:"\u5BC6\u78BC"},null,512),[[i,l.password]])]),e("div",{class:"btn btn-primary my-2",onClick:s[2]||(s[2]=(...o)=>r.login&&r.login(...o))},"\u9001\u51FA")])])])}var E=d(c,[["render",w]]);export{E as default};
