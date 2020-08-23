(this["webpackJsonpfucn-project"]=this["webpackJsonpfucn-project"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"ADD_PROJECT",(function(){return p})),a.d(r,"EDIT_PROJECT",(function(){return b})),a.d(r,"DELETE_PROJECT",(function(){return f})),a.d(r,"addProjectAction",(function(){return g})),a.d(r,"editProjectAction",(function(){return E})),a.d(r,"deleteProjectAction",(function(){return x}));var n=a(0),c=a.n(n),l=a(46),o=a.n(l),s=a(18),i=a(6),d=a(22),m=a(15),u=a(213),p="ADD_PROJECT",b="EDIT_PROJECT",f="DELETE_PROJECT";function g(e){return{type:p,payload:e}}function E(e){return{type:b,payload:e}}function x(e){return{type:f,payload:{id:e}}}var y={projects:[{id:1,title:"Vivencias acad\xe9micas de los ECAES",description:"Esta investigaci\xf3n de corte etnogr\xe1fico describe las principales acciones y consecuencias acad\xe9micas que, de cara a los Ex\xe1menes de Calidad de la Educaci\xf3n Superior en Colombia (ECAES), est\xe1n sucediendo",finish_date:"2020-12-31",student_list:["Luisa Fernanda Cano","Alejandro Cardenas","Jose Gabriel","Nelson Fernando"],adviser:"Profesor Asesor",state:"En proceso",tasks:[{id:1,name:"Tarea 1",description:"Descripcion de la tarea",finish_date:"2020-04-04"}]}]};var w=Object(i.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var a=t.payload;return Object(m.a)(Object(m.a)({},e),{},{projects:[].concat(Object(d.a)(e.projects),[a])});case b:var r=t.payload,n=e.projects.filter((function(e){return e.id!==r.id}));return Object(m.a)(Object(m.a)({},e),{},{projects:[].concat(Object(d.a)(n),[r])});case f:var c=t.payload.id,l=e.projects.filter((function(e){return e!==c}));return{projects:l};default:return e}},form:u.a}),h=(a(167),a(168),a(13));var v=function(){return c.a.createElement("header",{className:"z-40 shadow-xs p-6 bg-white shadow-bottom"},"Gesti\xf3n de Proyectos de Grado")};var N=function(){return c.a.createElement("aside",{className:"border p-3 m-2 min-h-full w-full md:w-64"},c.a.createElement("ul",{className:"flex flex-row md:flex-col"},c.a.createElement("li",{className:"mr-3"},c.a.createElement(h.b,{to:"/"},"Ver Proyectos")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/crear-proyecto"},"Crear Proyecto"))))},j=a(7),k=a(49),O=a(50);var _=function(e){var t=e.projects;return c.a.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4"},t&&t.map((function(e,t){return c.a.createElement("div",{className:"md:max-w-md rounded overflow-hidden shadow-lg",key:t},c.a.createElement("div",{className:"px-6 py-4"},c.a.createElement("div",{className:"font-bold text-xl mb-2 flex justify-between"},e.title,c.a.createElement(h.b,{to:"/editar-proyecto/".concat(e.id)},c.a.createElement(k.a,{icon:O.a}))),c.a.createElement("p",{className:"text-gray-700 text-base"},"Asesor: ",e.adviser),c.a.createElement("p",{className:"text-gray-700 text-base"},"Estudiantes: ",e.student_list.join(" - "))),c.a.createElement("div",{className:"px-6 pt-4 pb-2"},c.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},e.state)))})))};var P=Object(j.h)(Object(s.b)((function(e,t){return{projects:e.data.projects}}),(function(e){return{actions:Object(i.a)(r,e)}}))((function(e){var t=e.projects;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"text-center text-3xl font-semibold"},"Lista de Proyectos"),c.a.createElement(_,{projects:t}))}))),C=a(212),T=a(211),F=a(30);var D=function(e){var t=e.input,a=t.value,r=t.onChange,l=Object(n.useState)(a||[]),o=Object(F.a)(l,2),s=o[0],i=o[1],m=function(e){r(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-city"},"Seleccionar estudiantes"),c.a.createElement("input",{onKeyDown:function(e){if("Enter"===e.key){var t=[].concat(Object(d.a)(s),[e.target.value]);i(t),m(t),e.target.value="",e.preventDefault()}},className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"Ingrese el nombre del estudiante"}),c.a.createElement("ul",{className:"mt-2"},s.map((function(e,t){return c.a.createElement("li",{key:t,className:"border p-2 flex justify-between"},e," ",c.a.createElement(k.a,{onClick:function(){!function(e){var t=Object(d.a)(s);t.splice(e,1),i(t),m(t)}(t)},icon:O.b}))}))))};var S=Object(T.a)({form:"project"})((function(e){e.projectInfo;var t=e.handleSubmit,a=e.pristine,r=e.submitting;return c.a.createElement("form",{className:"w-full max-w-6xl m-auto mt-8",onSubmit:t},c.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},c.a.createElement("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-first-name"},"Nombre del Proyecto"),c.a.createElement(C.a,{name:"title",component:"input",type:"text",placeholder:"Nombre de Proyecto",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"})),c.a.createElement("div",{className:"w-full md:w-1/2 px-3"},c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-last-name"},"Fecha de Entrega"),c.a.createElement(C.a,{name:"finish_date",component:"input",type:"date",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}))),c.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},c.a.createElement("div",{className:"w-full md:w-1/2 px-3"},c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password"},"Descripci\xf3n del Proyecto"),c.a.createElement(C.a,{name:"description",component:"textarea",rows:"10",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"})),c.a.createElement("div",{className:"w-full md:w-1/2 px-3"},c.a.createElement(C.a,{name:"student_list",component:D}))),c.a.createElement("div",{className:"flex flex-wrap -mx-3"},c.a.createElement("div",{className:"w-full md:w-full px-3"},c.a.createElement("button",{type:"submit",disabled:a||r,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Guardar"))))}));var A=function(){var e=Object(j.g)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"text-center text-3xl font-semibold"},"Crear Proyecto"),c.a.createElement(S,{onSubmit:function(t,a){a(g({id:Math.random().toString(36).substr(2,9),title:t.title,description:t.description,finish_date:t.finish_date,student_list:t.student_list||[],adviser:"Profesor Logeado",state:"En proceso",tasks:[]})),alert("Tu Proyecto fue creado correctamente"),e.push("/")}}))},J=a(48);var L=function(e){var t=e.handleTaskCreation,a=Object(n.useState)({id:"",name:"",description:"",finish_date:""}),r=Object(F.a)(a,2),l=r[0],o=r[1];function s(e){o(Object(m.a)(Object(m.a)({},l),{},Object(J.a)({},e.target.name,e.target.value)))}return c.a.createElement("form",{className:"w-full max-w-6xl m-auto mt-8"},c.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},c.a.createElement("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"name"},"Nombre de la Tarea"),c.a.createElement("input",{onChange:s,name:"name",value:l.name,className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text"}),c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"finish_date"},"Fecha de L\xedmite"),c.a.createElement("input",{onChange:s,name:"finish_date",value:l.finish_date,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"date"})),c.a.createElement("div",{className:"w-full md:w-1/2 px-3"},c.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"description"},"Descripci\xf3n de la tarea"),c.a.createElement("textarea",{onChange:s,name:"description",value:l.description,rows:"6",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}))),c.a.createElement("div",{className:"flex flex-wrap -mx-3"},c.a.createElement("div",{className:"w-full md:w-full px-3"},c.a.createElement("button",{onClick:function(){t(l)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},"Crear Tarea"))))};var R=function(e){var t=e.tasks;return c.a.createElement("div",{className:"grid grid-flow-row md:grid-cols-3 grid-cols-1 grid-rows-3 gap-4"},t&&t.map((function(e,t){return c.a.createElement("div",{className:"rounded overflow-hidden shadow-lg",key:t},c.a.createElement("div",{className:"px-6 py-4"},c.a.createElement("div",{className:"font-bold text-xl mb-2 flex justify-between"},e.name),c.a.createElement("p",{className:"text-gray-700 text-base"},e.description)),c.a.createElement("div",{className:"px-6 pt-4 pb-2"},c.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"Fecha l\xedmite ",e.finish_date)))})))};var I=Object(j.h)(Object(s.b)((function(e,t){return{project:e.data.projects.find((function(e){return e.id==t.match.params.id}))}}),(function(e){return{actions:Object(i.a)(r,e),dispatch:e}}))((function(e){var t=e.project,a=e.actions,r=e.dispatch,l=Object(n.useState)(t),o=Object(F.a)(l,2),s=o[0],i=o[1];return t?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"text-center text-3xl font-semibold"},"Editar Proyecto"),c.a.createElement(S,{initialValues:t,onSubmit:function(e,r){var n={id:t.id,title:e.title,description:e.description,finish_date:e.finish_date,student_list:e.student_list||[],adviser:"Profesor Logeado",state:"En proceso",tasks:t.tasks};i(n),r(a.editProjectAction(n)),alert("Tu Proyecto fue actualizado correctamente")}}),c.a.createElement("h2",{className:"text-center text-3xl font-semibold"},"Tareas del Proyecto"),c.a.createElement(L,{handleTaskCreation:function(e){var t=Object(m.a)(Object(m.a)({},s),{},{tasks:[].concat(Object(d.a)(s.tasks),[e])});i(t),r(a.editProjectAction(t)),alert("La tarea fue creada correctamente")}}),c.a.createElement("div",{className:"w-full max-w-6xl m-auto mt-8"},c.a.createElement(R,{tasks:s.tasks||[]}))):c.a.createElement(j.a,{to:"/"})})));var G=function(){return c.a.createElement("main",{className:"border p-3 m-2 flex-grow"},c.a.createElement(j.d,null,c.a.createElement(j.b,{path:"/crear-proyecto"},c.a.createElement(A,null)),c.a.createElement(j.b,{path:"/editar-proyecto/:id"},c.a.createElement(I,null)),c.a.createElement(j.b,{path:"/"},c.a.createElement(P,null))))};var V=function(){return c.a.createElement("div",{className:"p-5 flex flex-col md:flex-row"},c.a.createElement(N,null),c.a.createElement(G,null))};var z=function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,M=Object(i.d)(w,B());o.a.render(c.a.createElement(s.a,{store:M},c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(210)}},[[99,1,2]]]);
//# sourceMappingURL=main.33936733.chunk.js.map