"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[210],{182:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(4942),r=t(1413);function i(e,n,t){var i=e.target,s=i.name,c=i.value;t((0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},s,c)))}},1865:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(2791),r=t(3464),i=t(8617),s=t(9271),c=t(184),o=function(e){var n=e.children,t=e.title,o=(0,s.k6)();(0,a.useContext)(r.s);return(0,c.jsx)("div",{className:"container_app",children:(0,c.jsxs)("div",{className:"container_init_app",children:[(0,c.jsxs)("div",{className:"container_init_app_header my-4",children:[(0,c.jsx)(i.PSe,{onClick:function(){return o.goBack()}}),(0,c.jsx)("span",{children:t})]}),(0,c.jsx)("div",{className:"container_init_app_main",children:n}),(0,c.jsx)("div",{className:"container_init_app_footer my-4"})]})})}},5210:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(4165),r=t(5861),i=t(885),s=t(2791),c=t(1865),o=t(8820),u=(t(3452),t(182)),d=t(5411),l=t(184);function p(){var e=s.useState(),n=(0,i.Z)(e,2),t=n[0],p=n[1],x=s.useState({text:""}),f=(0,i.Z)(x,2),h=f[0],v=f[1];return s.useEffect((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.text?d.ZP.get("https://me-ajuda-ai.herokuapp.com/api/provider?provider=".concat(h.text)).then((function(e){e.data&&p(e.data)})):d.ZP.get("https://me-ajuda-ai.herokuapp.com/api/provider").then((function(e){e.data&&p(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[h.text]),(0,l.jsx)(c.Z,{title:"Pontua\xe7\xe3o de provedores",children:(0,l.jsx)("div",{className:"satisfaction_box",children:(0,l.jsxs)("div",{className:"box_provider",children:[(0,l.jsx)("form",{action:"",children:(0,l.jsx)("div",{className:"controllerForm mt-3",children:(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Pesquisar provedor...",name:"text",value:h.text,onChange:function(e){return(0,u.Z)(e,h,v)}})})}),null===t||void 0===t?void 0:t.map((function(e,n){return(0,l.jsxs)("div",{className:"box_list",children:[(0,l.jsx)("h2",{style:{textTransform:"capitalize"},children:e.provider}),(0,l.jsxs)("span",{children:["Plano de ",e.plan,"mbps"]}),(0,l.jsxs)("span",{className:"box_list_start",children:[(0,l.jsx)(o.pHD,{}),e.rate]})]},n)}))]})})})}},3452:function(){}}]);
//# sourceMappingURL=210.956b44ad.chunk.js.map