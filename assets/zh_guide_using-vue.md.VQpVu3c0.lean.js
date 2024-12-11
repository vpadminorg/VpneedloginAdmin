import{_ as x}from"./chunks/appearance-toggle-transition.esn6gqS6.js";import{d as A,s as d,h as B,o as t,c as e,j as s,t as k,e as y,a5 as S,ap as q,a2 as V,F as _,p as P,l as M,_ as I,D as m,I as l,a as r,E as L,aT as c}from"./chunks/framework.BcjNouYM.js";const N=n=>(P("data-v-85e5c8c7"),n=n(),M(),n),H={class:"pro-text-small"},$={class:"pro-text"},U={key:0,class:"iframe-container"},j={key:0,class:"loading"},R=N(()=>s("div",{class:"spinner"},null,-1)),z=[R],O=["src"],J=A({__name:"SupportButton",props:{paymentPlatform:{default:"ko-fi"},paymentType:{default:"donation"},buttonText:{default:"Support me"},iframeUrl:{default:""},paymentName:{default:"SupportMe"},needLogin:{type:Boolean,default:!0},size:{default:"default"}},setup(n){const i=n,p=d(!1),a=d(!0),g=d(null),h=d(""),E=B(()=>i.paymentType.toLowerCase()==="donation"),b=()=>{const o=i.paymentType.toLowerCase();if(o==="donation")f(),p.value=!0;else if(o==="shop"){const T=(window.screen.width-800)/2,w=(window.screen.height-600)/2,D=`width=800,height=600,left=${T},top=${w},resizable=yes,scrollbars=yes,status=yes`;window.open(i.iframeUrl,"ShopPaymentWindow",D)}},f=()=>{h.value=`${i.iframeUrl}${i.iframeUrl.includes("?")?"&":"?"}timestamp=${Date.now()}`,a.value=!0},C=()=>{a.value=!1},F=()=>{a.value=!1},v=()=>{p.value=!1};return(o,u)=>(t(),e(_,null,[i.size==="small"?(t(),e("button",{key:0,class:"pro-button-small",onClick:b},[s("span",H,k(i.buttonText),1)])):(t(),e("button",{key:1,class:"pro-button",onClick:b},[s("span",$,k(i.buttonText),1)])),p.value?(t(),e("div",{key:2,class:"dialog-overlay",onClick:v},[s("div",{class:"dialog-content",onClick:u[0]||(u[0]=V(()=>{},["stop"]))},[s("button",{class:"close-button",onClick:v},"×"),s("h2",null,k(i.buttonText),1),E.value?(t(),e("div",U,[a.value?(t(),e("div",j,z)):y("",!0),S(s("iframe",{id:"kofiframe",ref_key:"iframeRef",ref:g,src:h.value,class:"pro-iframe",onLoad:C,onError:F},null,40,O),[[q,!a.value]])])):y("",!0)])])):y("",!0)],64))}}),G=I(J,[["__scopeId","data-v-85e5c8c7"]]),W=s("h1",{id:"using-vue-in-markdown",tabindex:"-1"},[r("在 Markdown 使用 Vue "),s("a",{class:"header-anchor",href:"#using-vue-in-markdown","aria-label":'Permalink to "在 Markdown 使用 Vue {#using-vue-in-markdown}"'},"​")],-1),K=s("p",null,[s("a",{href:"https://ko-fi.com/s/ce3b2d46c1",target:"_blank"},"点击跳转")],-1),Q=s("img",{src:x,alt:"Appearance Toggle Transition Demo"},null,-1),X=c("",15),Y={class:"language-text"},Z=c("",17),ss={id:"using-components-in-headers",tabindex:"-1"},is=s("a",{class:"header-anchor",href:"#using-components-in-headers","aria-label":'Permalink to "在标题中使用组件 <ComponentInHeader /> {#using-components-in-headers}"'},"​",-1),as=c("",28),ts=c("",2),hs=JSON.parse('{"title":"在 Markdown 使用 Vue","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/using-vue.md","filePath":"zh/guide/using-vue.md","lastUpdated":1733930522000}'),es={name:"zh/guide/using-vue.md"},os=Object.assign(es,{setup(n){return(i,p)=>{const a=m("SupportButton"),g=m("ComponentInHeader"),h=m("ModalDemo");return t(),e("div",null,[W,l(a,{paymentPlatform:"ko-fi",paymentType:"donation",buttonText:"Upgrade to pro",iframeUrl:"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true",paymentName:"test"}),l(a,{paymentPlatform:"ko-fi",paymentType:"donation",buttonText:"Support me",iframeUrl:"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true",paymentName:"test",needLogin:!1}),l(G,{paymentPlatform:"ko-fi",paymentType:"donation",buttonText:"Support me",iframeUrl:"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true",paymentName:"test",needLogin:!1}),K,s("p",null,[Q,r("                     My design    "),l(a,{paymentPlatform:"ko-fi",paymentType:"shop",buttonText:"Buy it",iframeUrl:"https://ko-fi.com/s/ce3b2d46c1",paymentName:"test"})]),X,s("div",Y,[s("pre",null,[s("code",null,[(t(),e(_,null,L(3,E=>s("span",null,k(E)+" ",1)),64))])])]),Z,s("h3",ss,[r("在标题中使用组件 "),l(g),r(),is]),as,l(h),ts])}}});export{hs as __pageData,os as default};
