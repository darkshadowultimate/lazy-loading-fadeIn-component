(window.webpackJsonpexample=window.webpackJsonpexample||[]).push([[6],[,function(n,e,t){"use strict";t.r(e);var o=t(6),a=t.n(o),p=t(11),m=t(5),c=t(0),s=t.n(c),r=t(3),f=(t(8),Object(c.memo)(function(n){var e=n.dataIndexElement,o=void 0===e?0:e,f=n.pathComponent,i=void 0===f?"":f,d=n.fadeInEffect,C=void 0===d?"undefined":d,u=Object(c.useState)(null),l=Object(m.a)(u,2),h=l[0],v=l[1],E={threshold:.3},L=function(n){var e,m=document.querySelector('div[data-index="'.concat(o,'"]'));e=m,new IntersectionObserver(function(n,e){n.forEach(function(n){n.isIntersecting&&(t(24)("./".concat(i)).then(function(){var n=Object(p.a)(a.a.mark(function n(e){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=e.default,v(s.a.createElement(r.default,{fadeInEffect:C},s.a.createElement(t,null)));case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()),e.disconnect())})},E).observe(e)};return Object(c.useEffect)(function(n){L()},[]),s.a.createElement("div",{"data-index":o,className:"lazy-load-component lazy-load-component--not-loaded"},h)}));e.default=f},function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),p=(t(1),t(4)),m=(t(9),[{pathComponent:"TestComponents/Component1/Component1",fadeInEffect:"fadeInLeft"},{pathComponent:"TestComponents/Component2/Component2",fadeInEffect:"fadeInRight"},{pathComponent:"TestComponents/Component3/Component3",fadeInEffect:"fadeInLeft"},{pathComponent:"TestComponents/Component4/Component4",fadeInEffect:"fadeInRight"},{pathComponent:"TestComponents/Component5/Component5",fadeInEffect:"fadeInLeft"},{pathComponent:"TestComponents/Component6/Component6",fadeInEffect:"fadeInRight"}]);e.default=function(n){return a.a.createElement("div",{className:"App"},a.a.createElement(p.default,{componentsInfo:m}))}},function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o);e.default=function(n){var e=n.fadeInEffect,t=void 0===e?"undefined":e,o=n.children;return"undefined"!==t&&null!==t&&""!==t?a.a.createElement("div",{className:"animated ".concat(t)},o):a.a.createElement(a.a.Fragment,null,o)}},function(n,e,t){"use strict";t.r(e);var o=t(5),a=t(0),p=t.n(a),m=t(1),c=Object(a.memo)(function(n){var e=n.componentsInfo,t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1];return Object(a.useEffect)(function(){r(e.map(function(n,e){return p.a.createElement(m.default,{dataIndexElement:e,pathComponent:n.pathComponent,fadeInEffect:n.fadeInEffect,key:e})}))},e),p.a.createElement(p.a.Fragment,null,s.length===e.length?s:null)});e.default=c},,,,function(n,e,t){},function(n,e,t){},,,,,,,,,function(n,e,t){n.exports=t(26)},,,,,,function(n,e,t){var o={"./App/App":[2,9],"./App/App.css":[9,7],"./App/App.jsx":[2,9],"./LazyLoadingComponent/FadeInComponent":[3,9],"./LazyLoadingComponent/FadeInComponent.jsx":[3,9],"./LazyLoadingComponent/GenerateLazyLoadingComponents":[4,9],"./LazyLoadingComponent/GenerateLazyLoadingComponents.jsx":[4,9],"./LazyLoadingComponent/LazyLoadingComponent":[1,9],"./LazyLoadingComponent/LazyLoadingComponent.css":[8,7],"./LazyLoadingComponent/LazyLoadingComponent.jsx":[1,9],"./TestComponents/Component1/Component1":[12,9,0],"./TestComponents/Component1/Component1.jsx":[12,9,0],"./TestComponents/Component2/Component2":[13,9,1],"./TestComponents/Component2/Component2.jsx":[13,9,1],"./TestComponents/Component3/Component3":[14,9,2],"./TestComponents/Component3/Component3.jsx":[14,9,2],"./TestComponents/Component4/Component4":[15,9,3],"./TestComponents/Component4/Component4.jsx":[15,9,3],"./TestComponents/Component5/Component5":[16,9,4],"./TestComponents/Component5/Component5.jsx":[16,9,4],"./TestComponents/Component6/Component6":[17,9,5],"./TestComponents/Component6/Component6.jsx":[17,9,5]};function a(n){if(!t.o(o,n))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=o[n],a=e[0];return Promise.all(e.slice(2).map(t.e)).then(function(){return t.t(a,e[1])})}a.keys=function(){return Object.keys(o)},a.id=24,n.exports=a},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),p=t(10),m=t.n(p),c=t(2);t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(a.a.createElement(c.default,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}],[[18,7,8]]]);
//# sourceMappingURL=main.9f15db9f.chunk.js.map