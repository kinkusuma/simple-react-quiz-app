(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"category":"","type":"","difficulty":"","question":"","correct_answer":"","incorrect_answers":["","",""],"answers":[""]}')},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(22),s=n.n(a),i=(n(28),n(6)),o=n(3),l=n(10),u=n(5),d=n.n(u),b=n(12),j=n(13),f=n.n(j),x=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://opentdb.com/api_token.php?command=request");case 2:return t=e.sent,e.abrupt("return",t.data.token);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://opentdb.com/api.php?amount=1&token=".concat(t));case 2:return n=e.sent,(c=n.data.results[0]).answers=[c.correct_answer].concat(Object(l.a)(c.incorrect_answers)).sort((function(){return Math.random()-.5})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={getToken:x,getQuestion:p},O=n(23);function m(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}var v=n(0);function g(e){var t=e.question,n=e.category,c=e.difficulty;return Object(v.jsxs)("div",{className:"relative p-5 my-3 w-96 bg-blue-200 rounded border-2 border-blue-300",children:[Object(v.jsx)("div",{className:"p-1 mb-3 w-10 h-7 absolute -top-3 -left-3 flex justify-center items-center rounded bg-blue-500",children:Object(v.jsx)("div",{className:" text-white font-bold",children:"easy"===c?"10":"20"})}),Object(v.jsx)("div",{className:"my-3 text-lg font-bold ",children:m(t)}),Object(v.jsx)("div",{className:"text-center font-bold text-blue-400 text-sm",children:n})]})}function w(e){var t=e.id,n=e.value,c=e.clickHandler;return Object(v.jsx)("button",{id:t,type:"button",onClick:function(){return c(n)},className:"w-96 h-min p-2 border-2 rounded border-blue-300 hover:bg-blue-200",children:Object(v.jsx)("div",{className:"font-bold text-left text-sm",children:m(n)})})}function y(e){var t=e.answers,n=e.color,c=e.clickHandler;return Object(v.jsx)("div",{className:"flex flex-col space-y-3",children:t.map((function(e,t){return Object(v.jsx)(w,{id:t,value:e,color:n,clickHandler:c})}))})}function N(e){var t=e.value;return Object(v.jsx)("div",{className:"w-96 flex justify-center items-top",children:Object(v.jsx)("div",{className:"w-28 h-7 flex justify-center items-center rounded-full bg-indigo-400",children:Object(v.jsx)("div",{className:"font-bold text-white",children:t})})})}function k(e){var t=e.point,n=Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"orange",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",clipRule:"evenodd"})});return Object(v.jsx)("div",{className:"pb-3 flex flex-row justify-end",children:Object(l.a)(Array(t)).map((function(){return n}))})}function S(e){var t=e.score,n=e.clickHandler;return Object(v.jsxs)("div",{className:"w-96 p-3 flex flex-col space-y-8 items-center",children:[Object(v.jsx)("div",{className:"text-lg font-bold",children:"Game Over, Your Score:"}),Object(v.jsx)(N,{value:t}),Object(v.jsx)("button",{type:"button",onClick:n,className:"w-60 h-min p-2 bg-indigo-200 border-2 border-indigo-300 rounded hover:bg-indigo-300",children:Object(v.jsx)("div",{className:"font-bold",children:"Play Again"})})]})}var C=function(){var e=Object(c.useState)(Object(i.a)({},O)),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(o.a)(a,2),l=s[0],u=s[1],d=Object(c.useState)(0),b=Object(o.a)(d,2),j=b[0],f=b[1],x=Object(c.useState)(3),p=Object(o.a)(x,2),m=p[0],w=p[1],C=Object(c.useState)(!1),H=Object(o.a)(C,2),_=H[0],A=H[1];Object(c.useEffect)((function(){h.getToken().then((function(e){u(e)})),h.getQuestion(l).then((function(e){r(e)}))}),[]);var F=function(e,t){e===t?f(j+("easy"===n.difficulty?10:20)):(1===m&&A(!0),w(m-1)),h.getQuestion(l).then((function(e){r(e)}))};return Object(v.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(v.jsx)("div",{className:"rounded-lg border shadow-lg p-10 m-20",children:_?Object(v.jsx)(S,{score:j,clickHandler:function(){A(!1),w(3),f(0)}}):Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{value:j}),Object(v.jsx)(k,{point:m}),Object(v.jsx)(g,Object(i.a)({},n)),Object(v.jsx)(y,Object(i.a)(Object(i.a)({},n),{},{clickHandler:function(e){F(e,n.correct_answer)}}))]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),H()}},[[49,1,2]]]);
//# sourceMappingURL=main.8878a20c.chunk.js.map