(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),i=c.n(o),a=c(7),r=c.n(a),j=(c(13),c(3)),l=c(2),u=Object(o.createContext)(),s=function(e){var t=Object(o.useState)([]),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoStore"));e&&a(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoStore",JSON.stringify(i))}),[i]),Object(n.jsx)(u.Provider,{value:[i,a],children:e.children})};function b(){var e=Object(o.useContext)(u),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(o.useState)(""),r=Object(l.a)(a,2),s=r[0],b=r[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),i([].concat(Object(j.a)(c),[{name:s,complete:!1}])),b("")},children:[Object(n.jsx)("input",{type:"text",name:"todos",id:"todos",required:!0,placeholder:"What needs to be done?",value:s,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("button",{type:"submit",children:"Create"})]})})}function d(e){var t=e.todo,c=e.id,i=e.checkComplete,a=e.handleEditTodos,r=Object(o.useState)(!1),j=Object(l.a)(r,2),u=j[0],s=j[1],b=Object(o.useState)(t.name),d=Object(l.a)(b,2),O=d[0],h=d[1];return u?Object(n.jsxs)("li",{children:[Object(n.jsx)("input",{type:"text",id:"editValue",value:O,name:"editValue",onChange:function(e){return h(e.target.value.toLowerCase())}}),Object(n.jsx)("button",{onClick:function(){return function(e){s(!1),O?a(O,e):h(t.name)}(c)},children:"Save"})]}):Object(n.jsx)("div",{children:Object(n.jsxs)("li",{children:[Object(n.jsxs)("label",{htmlFor:c,className:t.complete?"active":"",children:[Object(n.jsx)("input",{type:"checkbox",id:c,checked:t.complete,onChange:function(){return i(c)}}),t.name]}),Object(n.jsx)("button",{disabled:t.complete,onClick:function(){s(!0)},children:"Edit"})]})})}function O(){var e=Object(o.useContext)(u),t=Object(l.a)(e,2),c=t[0],i=t[1],a=function(e){var t=Object(j.a)(c);t.forEach((function(t,c){c===e&&(t.complete=!t.complete)})),i(t)},r=function(e,t){var n=Object(j.a)(c);n.forEach((function(c,n){n===t&&(c.name=e)})),i(n)};return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)(d,{todo:e,id:t,checkComplete:a,handleEditTodos:r},t)}))})})}function h(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(o.useContext)(u),r=Object(l.a)(a,2),s=r[0],b=r[1];return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("label",{htmlFor:"all",children:[Object(n.jsx)("input",{type:"checkbox",name:"all",id:"all",onClick:function(){var e=Object(j.a)(s);e.forEach((function(e){e.complete=!c})),b(e),i(!c)},checked:c}),"ALL"]}),Object(n.jsxs)("p",{children:["You have ",s.length," to do"]}),Object(n.jsx)("button",{id:"delete",onClick:function(){var e=s.filter((function(e){return!1===e.complete}));b(e),i(!1)},children:"Delete"})]})}var f=function(){return Object(n.jsx)(s,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"To Do List"}),Object(n.jsx)(b,{}),Object(n.jsx)(O,{}),Object(n.jsx)(h,{})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.e3e9b608.chunk.js.map