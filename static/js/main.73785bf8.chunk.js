(this["webpackJsonpcat-facts"]=this["webpackJsonpcat-facts"]||[]).push([[0],{405:function(e,t,n){},406:function(e,t,n){},412:function(e,t,n){},431:function(e,t,n){},432:function(e,t,n){},434:function(e,t,n){},439:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);n(204),n(214);var r,a=n(1),c=n.n(a),s=n(197),i=n.n(s),o=(n(405),n(60)),l=n(14),u=(n(406),n(2)),d=function(){return Object(u.jsx)("nav",{className:"main-nav",children:Object(u.jsx)(o.b,{to:"/","aria-label":"Cat Facts home page",children:"Cat Facts"})})},b=n(124),j=n.n(b),h=n(95),f=n(199),O=n(28),x=(n(412),n(200)),m=n.n(x);n(431);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){var n=e.title,c=e.titleId,s=g(e,["title","titleId"]);return a.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},s),n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{d:"M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"})))}var w,_=a.forwardRef(p);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function C(e,t){var n=e.title,r=e.titleId,c=T(e,["title","titleId"]);return a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,w||(w=a.createElement("path",{d:"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"})))}var k,N=a.forwardRef(C),z=(n.p,function(e){var t=e.view,n=e.setView;return Object(u.jsxs)("div",{className:"view-buttons",children:[Object(u.jsxs)("button",{className:"button btn-primary ".concat("grid"===t?"active":""),onClick:function(){return n("grid")},"aria-label":"Enable grid view",children:["Grid",Object(u.jsx)(_,{})]}),Object(u.jsxs)("button",{className:"button btn-primary ".concat("list"===t?"active":""),onClick:function(){return n("list")},"aria-label":"Enable list view",children:["List",Object(u.jsx)(N,{})]})]})}),S=(n(432),n(203)),F=(n(434),n(201)),E=n.n(F),q=function(e,t){var n=Object(a.useState)(e),r=Object(O.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){s(e);var n=new Image;n.src=t,n.onload=function(){s(t)}}),[e,t]),[c,{blur:c===e}]},I=function(e){var t=e.small,n=e.large,r=e.altText,a=q(t,n),c=Object(O.a)(a,2),s=c[0],i=c[1].blur;return Object(u.jsx)("img",{src:s,alt:r,style:{filter:i?"blur(5px)":"none",transition:i?"none":"filter 0.3s ease-out"}})},M=function(e){var t=e.details,n=e.index,r=new Date(t.createdAt),a="\n  ".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r.getDay()],"\n  ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]," ").concat(r.getDate(),", ").concat(r.getFullYear());return Object(u.jsxs)("div",{className:"card__content",children:[Object(u.jsxs)("h2",{className:"heading",children:["Cat Fact #",n+1]}),Object(u.jsxs)("p",{className:"post-date",children:["Posted: ",a]}),Object(u.jsx)("p",{children:t.text})]})},P=function(e){var t=e.data,n=t.details,r=t.index,a=[{version:"v1622026660",fileName:"sleeping_cat",altText:"Sleeping cat"},{version:"v1622031187",fileName:"cat_looking_angry",altText:"Cat looking angry"},{version:"v1622030705",fileName:"cat_in_basket",altText:"Cat looking up from inside basket"},{version:"v1622031186",fileName:"kitten_on_floor",altText:"Kitten standing on back two legs"},{version:"v1622031187",fileName:"cat_being_held",altText:"Woman holding cat in arms"}],c="https://res.cloudinary.com/dgomlckzh/image/upload/w_50/".concat(a[r].version,"/cat_facts/").concat(a[r].fileName,".jpg"),s="https://res.cloudinary.com/dgomlckzh/image/upload/w_800/".concat(a[r].version,"/cat_facts/").concat(a[r].fileName,".jpg"),i=a[r].altText;return Object(u.jsxs)("article",{className:"card",children:[Object(u.jsx)("div",{className:"card__number",children:r+1}),Object(u.jsx)(E.a,{className:"card__image",children:Object(u.jsx)(I,{small:c,large:s,altText:i})}),Object(u.jsx)(M,{details:n,index:r})]})},R=(n(439),function(){return Object(u.jsxs)("div",{className:"loader",children:[Object(u.jsx)("div",{className:"bounce1"}),Object(u.jsx)("div",{className:"bounce2"}),Object(u.jsx)("div",{className:"bounce3"})]})}),L=function(e){var t=e.view,n=e.catFacts;e.setCatFacts;return Object(u.jsx)("div",{className:"card-container ".concat("grid"===t?"card-container__grid":"card-container__list"),children:n?Object(u.jsx)(S.a,{children:n.map((function(e,t){return Object(u.jsx)(P,{data:{details:e,index:t}},e._id)}))}):Object(u.jsx)(R,{})})};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function A(e,t){var n=e.title,r=e.titleId,c=D(e,["title","titleId"]);return a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,k||(k=a.createElement("path",{d:"M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"})))}var J=a.forwardRef(A),W=(n.p,function(){var e=Object(a.useState)("grid"),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(O.a)(c,2),i=s[0],l=s[1],d=Object(a.useState)(null),b=Object(O.a)(d,2),x=b[0],v=b[1];return Object(a.useEffect)((function(){var e="https://cat-fact.herokuapp.com/facts";function t(){return(t=Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get(e);case 3:n=t.sent,l(Object(h.a)(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),v("There was an issue returning the results. Try reloading the page.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(u.jsxs)("section",{className:"max-width",children:[x?Object(u.jsx)("p",{children:x}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"intro-text",children:Object(u.jsx)("h1",{children:"Cat Facts"})}),Object(u.jsx)(L,{view:n,catFacts:i,setCatFacts:l}),Object(u.jsx)(z,{view:n,setView:r})]}),Object(u.jsxs)(o.b,{to:"/quiz",className:"button btn-primary btn-quiz-link",children:["Take Quiz",Object(u.jsx)(J,{})]})]})}),Q=(n(440),n(441),n(202)),V=function(e){var t=e.score,n=e.resetPage,r=e.rewardRef;return Object(u.jsx)("div",{className:"score",children:t>3?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Congratulations!!"}),Object(u.jsxs)(Q.a,{ref:r,type:"confetti",config:{lifetime:100,elementCount:100,spread:120,elementSize:10},children:["You answered ",20*t,"% of the questions correctly."]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["Sorry, you only answered ",20*t,"% of the questions correctly."]}),Object(u.jsx)("button",{className:"button btn-primary",onClick:n,children:"Try again"})]})})},Y=(n(442),function(e){var t=e.questions,n=e.currentQuestion,r=e.handleClick,a=e.correctAnswer,c=e.questionRef;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"questions",children:[Object(u.jsxs)("h2",{tabIndex:"0",ref:c,children:["Question ",n+1]}),Object(u.jsx)("p",{children:t[n].questionText})]}),t[n].answerOptions.map((function(e,t){return Object(u.jsxs)("button",{onClick:function(t){return r(t,e.isCorrect)},className:"btn-answer",ref:e.isCorrect?a:null,"aria-label":"answer number ".concat(t+1,", ").concat(e.answerText),children:[Object(u.jsxs)("span",{className:"btn-answer__number",children:[t+1,") "]}),e.answerText]},e.answerText+t)}))]})}),G=function(){var e=[{questionText:"Which of the following has a recording of a cat meowing?",answerOptions:[{answerText:"McDonald's",isCorrect:!1},{answerText:"Voyager II",isCorrect:!1},{answerText:"Wikipedia",isCorrect:!0},{answerText:"The New York Knicks",isCorrect:!1}]},{questionText:"When cats grimace, they are usually ___________. They have an extra organ that, with some breathing control, allows the cats to ___________ ",answerOptions:[{answerText:"curious, attack anything near by.",isCorrect:!1},{answerText:"happy, take a long nap",isCorrect:!1},{answerText:"angry, fly through the air",isCorrect:!1},{answerText:"taste-scenting, taste-sense the air",isCorrect:!0}]},{questionText:"Cats make more than ___________ different sounds whereas dogs make around 10.",answerOptions:[{answerText:"32",isCorrect:!1},{answerText:"20",isCorrect:!1},{answerText:"100",isCorrect:!0},{answerText:"10,000",isCorrect:!1}]},{questionText:"Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool ___________.",answerOptions:[{answerText:"Red Bull",isCorrect:!1},{answerText:"drinking water",isCorrect:!0},{answerText:"beer",isCorrect:!1},{answerText:"Gatorade",isCorrect:!1}]},{questionText:"Owning a cat can reduce the risk of ___________ by a third.",answerOptions:[{answerText:"stroke and heart attack",isCorrect:!0},{answerText:"dying alone",isCorrect:!1},{answerText:"being attacked by a bear",isCorrect:!1},{answerText:"gaining weight",isCorrect:!1}]}],t=Object(a.useState)(0),n=Object(O.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(O.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(0),b=Object(O.a)(d,2),j=b[0],h=b[1],f=Object(a.useState)(!1),x=Object(O.a)(f,2),m=x[0],v=x[1],g=Object(a.useRef)(null),p=Object(a.useRef)(),w=Object(a.useRef)();return Object(u.jsx)("section",{className:"quiz-container max-width",children:o?Object(u.jsx)(V,{score:j,resetPage:function(){c(0),l(!1),h(0),v(!1)},rewardRef:w}):Object(u.jsx)(Y,{questions:e,currentQuestion:r,handleClick:function(t,n){m||(n?(t.target.classList.add("correct"),h(j+1)):(g.current.classList.add("correct"),t.target.classList.add("incorrect")),v(!0),setTimeout((function(){var t=r+1;t<e.length?(c(t),v(!1),p.focus()):(l(!0),j>3&&w.current.rewardMe())}),1200))},correctAnswer:g,questionRef:p})})};var K=function(){return Object(a.useEffect)((function(){!!window.MSInputMethodContext&&!!document.documentMode&&document.body.classList.add("ie11")}),[]),Object(u.jsxs)(o.a,{basename:"/",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/quiz",children:Object(u.jsx)(G,{})}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(W,{})})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,444)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root")),H()}},[[443,1,2]]]);
//# sourceMappingURL=main.73785bf8.chunk.js.map