(this["webpackJsonpfucn-project"]=this["webpackJsonpfucn-project"]||[]).push([[0],{20:function(e,a,t){e.exports=t(34)},25:function(e,a,t){},26:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(18),o=t.n(l),c=(t(25),t(26),t(9));var s=function(){return n.a.createElement("header",{className:"z-40 shadow-xs p-6 bg-white shadow-bottom"},"Gesti\xf3n de Proyectos de Grado")};var m=function(){return n.a.createElement("aside",{className:"border p-3 m-2 min-h-full w-full md:w-64"},n.a.createElement("ul",{className:"flex flex-row md:flex-col"},n.a.createElement("li",{className:"mr-3"},n.a.createElement(c.b,{to:"/"},"Ver Proyectos")),n.a.createElement("li",null,n.a.createElement(c.b,{to:"/crear-proyecto"},"Crear Proyecto"))))},i=t(2),d=t(7),u=t(8);var b=function(e){var a=e.projects;return n.a.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4"},a&&a.map((function(e,a){return n.a.createElement("div",{className:"md:max-w-md rounded overflow-hidden shadow-lg",key:a},n.a.createElement("div",{className:"px-6 py-4"},n.a.createElement("div",{className:"font-bold text-xl mb-2 flex justify-between"},e.title,n.a.createElement(c.b,{to:"/editar-proyecto/".concat(a)},n.a.createElement(d.a,{icon:u.a}))),n.a.createElement("p",{className:"text-gray-700 text-base"},"Asesor: ",e.adviser),n.a.createElement("p",{className:"text-gray-700 text-base"},"Estudiantes: ",e.students.join(" - "))),n.a.createElement("div",{className:"px-6 pt-4 pb-2"},n.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},e.state)))})))};var p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-center text-3xl font-semibold"},"Lista de Proyectos"),n.a.createElement(b,{projects:[{title:"Vivencias acad\xe9micas de los ECAES",adviser:"Profesor Asesor",students:["Luisa Fernanda Cano Cano","Alejandro Cardenas","Jose Gabriel","Juan David G\xf3mez","Nelson Fernando"],state:"En proceso"},{title:"Vivencias acad\xe9micas de los ECAES",adviser:"Profesor Asesor",students:["Luisa Fernanda Cano Cano","Alejandro Cardenas","Jose Gabriel","Juan David G\xf3mez","Nelson Fernando"],state:"En proceso"},{title:"Vivencias acad\xe9micas de los ECAES",adviser:"Profesor Asesor",students:["Luisa Fernanda Cano Cano","Alejandro Cardenas","Jose Gabriel","Juan David G\xf3mez","Nelson Fernando"],state:"En proceso"},{title:"Vivencias acad\xe9micas de los ECAES",adviser:"Profesor Asesor",students:["Luisa Fernanda Cano Cano","Alejandro Cardenas","Jose Gabriel","Juan David G\xf3mez","Nelson Fernando"],state:"En proceso"}]}))};var f=function(e){var a=e.projectInfo,t=void 0===a?{}:a;function r(e){console.log(e)}return n.a.createElement("form",{className:"w-full max-w-6xl m-auto mt-8"},n.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},n.a.createElement("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-first-name"},"Nombre del Proyecto"),n.a.createElement("input",{onChange:r,value:t.title,className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-first-name",type:"text"})),n.a.createElement("div",{className:"w-full md:w-1/2 px-3"},n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-last-name"},"Fecha de Entrega"),n.a.createElement("input",{onChange:r,value:t.finishDate,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-last-name",type:"date"}))),n.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},n.a.createElement("div",{className:"w-full md:w-1/2 px-3"},n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password"},"Descripci\xf3n del Proyecto"),n.a.createElement("textarea",{onChange:r,value:t.description,rows:"10",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"})),n.a.createElement("div",{className:"w-full md:w-1/2 px-3"},n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-city"},"Seleccionar estudiantes"),n.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"Buscar nombre de estudiante"}),n.a.createElement("ul",{className:"mt-2"},n.a.createElement("li",{className:"border p-2 flex justify-between"},"Luisa Fernanda Cano Cano ",n.a.createElement(d.a,{icon:u.b})),n.a.createElement("li",{className:"border p-2 flex justify-between"},"Alejandro Cardenas Pab\xf3n ",n.a.createElement(d.a,{icon:u.b})),n.a.createElement("li",{className:"border p-2 flex justify-between"},"Jose Gabriel Ahumada Soto ",n.a.createElement(d.a,{icon:u.b})),n.a.createElement("li",{className:"border p-2 flex justify-between"},"Juan David G\xf3mez Escobar ",n.a.createElement(d.a,{icon:u.b})),n.a.createElement("li",{className:"border p-2 flex justify-between"},"Nelson Fernando Pi\xf1eros Ram\xedrez ",n.a.createElement(d.a,{icon:u.b}))))),n.a.createElement("div",{className:"flex flex-wrap -mx-3"},n.a.createElement("div",{className:"w-full md:w-full px-3"},t?n.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},"Editar Proyecto"):n.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},"Crear Proyecto"))))};var g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-center text-3xl font-semibold"},"Crear Proyecto"),n.a.createElement(f,null))};var x=function(e){var a=e.projectInfo,t=void 0===a?{}:a;function r(e){console.log(e)}return n.a.createElement("form",{className:"w-full max-w-6xl m-auto mt-8"},n.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},n.a.createElement("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-first-name"},"Nombre de la Tarea"),n.a.createElement("input",{onChange:r,value:t.title,className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-first-name",type:"text"}),n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-last-name"},"Fecha de L\xedmite"),n.a.createElement("input",{onChange:r,value:t.finishDate,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-last-name",type:"date"})),n.a.createElement("div",{className:"w-full md:w-1/2 px-3"},n.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password"},"Descripci\xf3n del Proyecto"),n.a.createElement("textarea",{onChange:r,value:t.description,rows:"6",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}))),n.a.createElement("div",{className:"flex flex-wrap -mx-3"},n.a.createElement("div",{className:"w-full md:w-full px-3"},n.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},"Crear Tarea"))))};var E=function(){return n.a.createElement("div",{className:"grid grid-flow-row grid-cols-3 grid-rows-3 gap-4"},[1,2,3].map((function(e){return n.a.createElement("div",{className:"max-w-md rounded overflow-hidden shadow-lg",key:e},n.a.createElement("div",{className:"px-6 py-4"},n.a.createElement("div",{className:"font-bold text-xl mb-2 flex justify-between"},"Tarea 1",n.a.createElement(c.b,{to:"/editar-proyecto/".concat(e)},n.a.createElement(d.a,{icon:u.a}))),n.a.createElement("p",{className:"text-gray-700 text-base"},"This is another card with title and supporting text below it. This card has some additional content to make it slightly taller overall.")),n.a.createElement("div",{className:"px-6 pt-4 pb-2"},n.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"Fecha l\xedmite 05 / 09 / 2020")))})))};var w=function(){var e={title:"title",finishDate:"2020-04-04",description:"description"};return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-center text-3xl font-semibold"},"Editar Proyecto"),n.a.createElement(f,{projectInfo:e}),n.a.createElement("h2",{className:"text-center text-3xl font-semibold"},"Tareas del Proyecto"),n.a.createElement(x,{projectInfo:e}),n.a.createElement("div",{className:"w-full max-w-6xl m-auto mt-8"},n.a.createElement(E,null)))};var y=function(){return n.a.createElement("main",{className:"border p-3 m-2 flex-grow"},n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/crear-proyecto"},n.a.createElement(g,null)),n.a.createElement(i.a,{path:"/editar-proyecto/:id"},n.a.createElement(w,null)),n.a.createElement(i.a,{path:"/"},n.a.createElement(p,null))))};var h=function(){return n.a.createElement("div",{className:"p-5 flex flex-col md:flex-row"},n.a.createElement(m,null),n.a.createElement(y,null))};var v=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.03d62cbd.chunk.js.map