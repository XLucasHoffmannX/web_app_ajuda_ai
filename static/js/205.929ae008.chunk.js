"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[205],{182:function(e,n,s){s.d(n,{Z:function(){return t}});var a=s(4942),r=s(1413);function t(e,n,s){var t=e.target,i=t.name,o=t.value;s((0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},i,o)))}},1865:function(e,n,s){s.d(n,{Z:function(){return l}});var a=s(2791),r=s(3464),t=s(8617),i=s(9271),o=s(184),l=function(e){var n=e.children,s=e.title,l=(0,i.k6)();(0,a.useContext)(r.s);return(0,o.jsx)("div",{className:"container_app",children:(0,o.jsxs)("div",{className:"container_init_app",children:[(0,o.jsxs)("div",{className:"container_init_app_header my-4",children:[(0,o.jsx)(t.PSe,{onClick:function(){return l.goBack()}}),(0,o.jsx)("span",{children:s})]}),(0,o.jsx)("div",{className:"container_init_app_main",children:n}),(0,o.jsx)("div",{className:"container_init_app_footer my-4"})]})})}},6205:function(e,n,s){s.r(n),s.d(n,{default:function(){return m}});var a=s(4165),r=s(1413),t=s(5861),i=s(885),o=s(2791),l=s(182),c=s(1865),u=s(5411),d=(s(7406),s(184));function m(){var e=o.useState({plan:0,support:0,devices:0}),n=(0,i.Z)(e,2),s=n[0],m=n[1],p=o.useState(!1),h=(0,i.Z)(p,2),x=h[0],v=h[1],f=function(e){return(0,l.Z)(e,s,m)},b=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),n.preventDefault(),e.next=4,u.ZP.post("https://me-ajuda-ai.herokuapp.com/api/best",(0,r.Z)({},s)).then((function(e){e.data.msg&&(document.location.href="/best-search/result/".concat(e.data.msg),v(!1))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsx)(c.Z,{title:"Melhor Equipamento",children:(0,d.jsx)("div",{className:"best_search_box",children:(0,d.jsxs)("div",{className:"search_e1",children:[(0,d.jsx)("h2",{children:"Formul\xe1rio de Pesquisa"}),(0,d.jsxs)("form",{onSubmit:b,children:[(0,d.jsxs)("div",{className:"controllerForm mt-3",children:[(0,d.jsx)("label",{className:"form-label",children:"Qual velocidade do seu plano?"}),(0,d.jsxs)("select",{name:"plan",defaultValue:s.plan,onChange:f,className:"form-control",style:{color:"var(--grey-secondary-font)"},required:!0,children:[(0,d.jsx)("option",{value:Number(0),children:"Menos ou igual a 60 megas"}),(0,d.jsx)("option",{value:Number(1),children:"80 megas"}),(0,d.jsx)("option",{value:Number(2),children:"Mais que 100 megas"})]})]}),(0,d.jsxs)("div",{className:"controllerForm mt-3",children:[(0,d.jsx)("label",{className:"form-label",children:"Dispositivos suportam 5ghz?"}),(0,d.jsxs)("select",{name:"support",className:"form-control",defaultValue:s.support,onChange:f,style:{color:"var(--grey-secondary-font)"},required:!0,children:[(0,d.jsx)("option",{value:Number(0),children:"N\xe3o"}),(0,d.jsx)("option",{value:Number(1),children:"N\xe3o sei"}),(0,d.jsx)("option",{value:Number(2),children:"Sim"})]})]}),(0,d.jsxs)("div",{className:"controllerForm mt-3",children:[(0,d.jsx)("label",{className:"form-label",children:"Quantos dispositivos conectados?"}),(0,d.jsxs)("select",{name:"devices",defaultValue:s.devices,onChange:f,className:"form-control",style:{color:"var(--grey-secondary-font)"},required:!0,children:[(0,d.jsx)("option",{value:Number(0),children:"1"}),(0,d.jsx)("option",{value:Number(1),children:"2"}),(0,d.jsx)("option",{value:Number(2),children:"3 ou mais"})]})]}),x?(0,d.jsx)("div",{className:"btn_box",children:(0,d.jsx)("div",{className:"btn_primary_box mt-4",children:(0,d.jsx)("button",{type:"submit",children:"Aguarde ..."})})}):(0,d.jsx)("div",{className:"btn_box",children:(0,d.jsx)("div",{className:"btn_primary_box btn_load mt-4",children:(0,d.jsx)("button",{type:"submit",children:"Confirmar"})})})]})]})})})}},7406:function(){}}]);
//# sourceMappingURL=205.929ae008.chunk.js.map