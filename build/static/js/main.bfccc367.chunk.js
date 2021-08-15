(this.webpackJsonpcrud_react_contextapi=this.webpackJsonpcrud_react_contextapi||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),l=a.n(c),u=a(9),o=a(12),m=a(40),s=a(41),i=a(42),d=a(43),E=a(44),b=function(){return r.a.createElement(m.a,{color:"dark",dark:!0,className:"rounded"},r.a.createElement(s.a,null,r.a.createElement(i.a,{href:"/"},"Home"),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.b,{className:"btn btn-primary",to:"/add"},"Add User")))))},p=a(13),f=a(26),h=a(10),O=function(e,t){switch(t.type){case"REMOVE_USER":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});case"ADD_USER":return Object(h.a)(Object(h.a)({},e),{},{users:[t.payload].concat(Object(f.a)(e.users))});case"EDIT_USER":var a=t.payload,n=e.users.map((function(e){return e.id===a.id?a:e}));return Object(h.a)(Object(h.a)({},e),{},{users:n});default:return e}},j={users:[]},v=Object(n.createContext)(j),g=function(e){var t=e.children,a=Object(n.useReducer)(O,j),c=Object(p.a)(a,2),l=c[0],u=c[1];return r.a.createElement(v.Provider,{value:{users:l.users,removeUser:function(e){u({type:"REMOVE_USER",payload:e})},addUser:function(e){u({type:"ADD_USER",payload:e})},editUser:function(e){u({type:"EDIT_USER",payload:e})}}},t)},y=a(45),U=a(46),x=a(47),N=function(){var e=Object(n.useContext)(v),t=e.users,a=e.removeUser;return localStorage.setItem("users",t),r.a.createElement(y.a,{className:"mt-4"},t.length>0?r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(U.a,{className:"d-flex",key:e.id},r.a.createElement("strong",null,e.name),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(u.b,{to:"/edit/".concat(e.id),color:"warning",className:"btn btn-warning mr-1"},"Edit"),r.a.createElement(x.a,{onClick:function(){return a(e.id)},color:"danger"},"Delete")))}))):r.a.createElement("h4",{className:"text-center"},"No Users Added"))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(N,null))},w=a(52),_=a(48),C=a(49),D=a(50),R=a(51),k=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(v).addUser,m=Object(o.f)();return r.a.createElement(_.a,{onSubmit:function(e){e.preventDefault();var t={id:Object(w.a)(),name:a};l(t),m.push("/")}},r.a.createElement(C.a,null,r.a.createElement(D.a,null,"Name"),r.a.createElement(R.a,{type:"text",value:a,onChange:function(e){c(e.target.value)},name:"name",placeholder:"Enter user",required:!0})),r.a.createElement(x.a,{type:"submit"},"Submit"),r.a.createElement(u.b,{to:"/",className:"btn btn-danger ml-2"},"Cancel"))},A=a(16),I=function(e){var t=Object(n.useContext)(v),a=t.editUser,c=t.users,l=Object(n.useState)({id:"",name:""}),m=Object(p.a)(l,2),s=m[0],i=m[1],d=Object(o.f)(),E=e.match.params.id;Object(n.useEffect)((function(){var e=E,t=c.find((function(t){return t.id===e}));i(t)}),[E,c]);return r.a.createElement(_.a,{onSubmit:function(e){e.preventDefault(),a(s),d.push("/")}},r.a.createElement(C.a,null,r.a.createElement(D.a,null,"Name"),r.a.createElement(R.a,{type:"text",value:s.name,onChange:function(e){i(Object(h.a)(Object(h.a)({},s),{},Object(A.a)({},e.target.name,e.target.value)))},name:"name",placeholder:"Enter user",required:!0})),r.a.createElement(x.a,{type:"submit"},"Edit Name"),r.a.createElement(u.b,{to:"/",className:"btn btn-danger ml-2"},"Cancel"))},M=(a(37),function(){return r.a.createElement("div",{style:{maxWidth:"30rem",margin:"4rem auto"}},r.a.createElement(g,null,r.a.createElement(u.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:S}),r.a.createElement(o.a,{path:"/add",component:k}),r.a.createElement(o.a,{path:"/edit/:id",component:I})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bfccc367.chunk.js.map