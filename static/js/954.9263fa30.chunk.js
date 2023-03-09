"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[954],{4628:function(n,e,t){t.d(e,{Z:function(){return O}});var r=t(9439),i=t(5861),a=t(4687),o=t.n(a),l=t(1044),d=t(2791),c=t(5243),s=t(168),p=t(4313),u=t(8629);var f,x,h,g,m=t.p+"static/media/currency-bg.79c23c3b7292d14148dba4e0343c8ea9.svg",b=p.ZP.div(f||(f=(0,s.Z)(["\n  height: 174px;\n  position: relative;\n  width: 280px;\n\n  color: #ffffff;\n  border-radius: 30px;\n  overflow: hidden;\n  background: #4a56e2 url(",");\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n  @media "," {\n    margin: 0 auto;\n    margin-top: 28px;\n  }\n\n  @media "," {\n    height: 182px;\n    width: 336px;\n  }\n\n  @media "," {\n    height: 331px;\n    width: 393px;\n  }\n"])),m,u.U.tabletBefore,u.U.tablet,u.U.desktop),y=p.ZP.div(x||(x=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),v=p.ZP.div(h||(h=(0,s.Z)(["\n  align-items: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  font-size: 18px;\n  text-align: center;\n"]))),w=p.ZP.table(g||(g=(0,s.Z)(["\n  width: 100%;\n  height: max-content;\n\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  & thead {\n    font-weight: 700;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  & th {\n    padding-bottom: 12px;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 17px;\n      padding-top: 17px;\n    }\n  }\n\n  & td {\n    text-align: center;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 4px;\n      padding-top: 20px;\n    }\n  }\n\n  & th:first-child,\n  td:first-child {\n    padding-left: 20px;\n    padding-right: 24px;\n\n    @media "," {\n      padding-left: 20px;\n      padding-right: 42px;\n    }\n\n    @media "," {\n      padding-left: 44px;\n      padding-right: 40px;\n      text-align: center;\n    }\n  }\n\n  & th:last-child,\n  td:last-child {\n    padding-right: 17px;\n    padding-left: 38px;\n\n    @media "," {\n      text-align: left;\n      padding-right: 25px;\n      padding-left: 70px;\n    }\n\n    @media "," {\n      padding-right: 44px;\n      padding-left: 70px;\n    }\n  }\n\n  & th,\n  td {\n    @media "," {\n      text-align: left;\n    }\n  }\n"])),u.U.tabletBefore,u.U.desktop,u.U.desktop,u.U.tabletOnly,u.U.desktop,u.U.tabletOnly,u.U.desktop,u.U.tabletBefore),j=t(9230),Z=t(184);function C(){return(C=(0,i.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.get("https://api.monobank.ua/bank/currency");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function k(){return JSON.parse(localStorage.getItem("keyCurrency"))}var O=function(){var n=(0,j.$G)().t,e=(0,d.useState)([]),t=(0,r.Z)(e,2),i=t[0],a=t[1],o=(0,d.useState)(!1),l=(0,r.Z)(o,2),s=l[0],p=l[1],u=(0,d.useState)(null),f=(0,r.Z)(u,2),x=f[0],h=f[1];return(0,d.useEffect)((function(){if(k()&&(new Date).getTime()-JSON.parse(localStorage.getItem("keyDate"))<36e5)return a(k());p(!0),function(){return C.apply(this,arguments)}().then((function(n){var e,t=n.filter((function(n){return(840===n.currencyCodeA||978===n.currencyCodeA)&&980===n.currencyCodeB}));return e=t,localStorage.removeItem("keyCurrency"),localStorage.removeItem("keyDate"),localStorage.setItem("keyCurrency",JSON.stringify(e)),localStorage.setItem("keyDate",JSON.stringify((new Date).getTime())),h(null),a(t)})).catch((function(n){return h(n.message)})).finally((function(){return p(!1)}))}),[a]),(0,Z.jsxs)(b,{children:[s&&(0,Z.jsx)(y,{children:(0,Z.jsx)(c.g4,{height:"80",width:"80",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),x&&(0,Z.jsx)(v,{children:(0,Z.jsxs)(j.cC,{i18nKey:"currency.wrapError",children:[(0,Z.jsx)("p",{children:"Currency is not available now."}),(0,Z.jsx)("p",{children:"Please check later."})]})}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:n("currency.table.currency")}),(0,Z.jsx)("th",{children:n("currency.table.purchase")}),(0,Z.jsx)("th",{children:n("currency.table.sale")})]})}),(0,Z.jsx)("tbody",{children:i.length>0&&i.map((function(n){return(0,Z.jsxs)("tr",{children:[840===n.currencyCodeA?(0,Z.jsx)("td",{children:"USD"}):(0,Z.jsx)("td",{children:"EUR"}),(0,Z.jsx)("td",{children:n.rateBuy.toFixed(2)}),(0,Z.jsx)("td",{children:n.rateSell.toFixed(2)})]},n.currencyCodeA)}))})]})]})}},1273:function(n,e,t){t.d(e,{Z:function(){return I}});var r,i,a=t(9439),o=t(2791),l=t(8211),d=t(9434),c=t(4805),s=t(9869),p=t(9230),u=t(168),f=t(4313),x=t(8629),h=["title","titleId"];function g(){return g=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},g.apply(this,arguments)}function m(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function b(n,e){var t=n.title,a=n.titleId,l=m(n,h);return o.createElement("svg",g({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},l),t?o.createElement("title",{id:a},t):null,r||(r=o.createElement("g",{clipPath:"url(#clip0_7_47)"},o.createElement("path",{d:"M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"}))),i||(i=o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_7_47"},o.createElement("rect",{width:18,height:18,fill:"white"})))))}var y,v,w,j,Z,C,k=o.forwardRef(b),O=(t.p,f.ZP.div(y||(y=(0,u.Z)(["\n  background-color: ",";\n  text-align: center;\n\n  @media "," {\n    position: sticky;\n    top: 0;\n    z-index: 9;\n  }\n"])),(function(n){return n.theme.bgPrimary2}),x.U.tabletBefore)),P=f.ZP.header(v||(v=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  @media "," {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])),x.U.mobileOnly,x.U.mobile,x.U.desktop),E=f.ZP.div(w||(w=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  color: ",";\n"])),(function(n){return n.theme.txtGrey})),S=(0,f.ZP)(k)(j||(j=(0,u.Z)(["\n  fill: ",";\n"])),(function(n){return n.theme.txtGrey})),U=f.ZP.button(Z||(Z=(0,u.Z)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  padding-left: 8px;\n  transition: 0.2s ease-in-out;\n  &:hover svg,\n  &:focus svg,\n  &:hover span,\n  &:focus span {\n    transform: scale(1.05);\n    fill: #ff6596;\n    filter: drop-shadow(0px 3px 10px rgb(255, 101, 150, 0.3));\n    color: #ff6596;\n  }\n\n  ","\n"])),(function(n){return n.tablet&&(0,f.iv)(C||(C=(0,u.Z)(["\n      font-size: 18px;\n      color: ",";\n      padding-left: 12px;\n      border-left: 1px solid ",";\n    "])),(function(n){return n.theme.txtGrey}),(function(n){return n.theme.txtGrey}))})),L=t(8207),H=t(2067),B=t(2658),V=t(7184),M=t(184),I=function(){var n=(0,p.$G)().t,e=(0,d.v9)(s.S4),t=(0,c.useMediaQuery)({maxWidth:480}),r=(0,c.useMediaQuery)({maxWidth:767}),i=(0,c.useMediaQuery)({minWidth:768}),u=(0,o.useState)(!1),f=(0,a.Z)(u,2),x=f[0],h=f[1],g=function(){h(!x)},m=(0,d.I0)();return(0,M.jsx)(O,{children:(0,M.jsxs)(P,{children:[t?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Z,{header:!0}),(0,M.jsx)(L.V,{})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L.V,{}),(0,M.jsx)(l.Z,{header:!0})]}),(0,M.jsxs)(E,{children:[r&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("p",{children:e}),(0,M.jsx)(U,{onClick:g,type:"button",children:(0,M.jsx)(S,{})})]}),i&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("p",{style:{marginRight:"8px"},children:e}),(0,M.jsxs)(U,{onClick:g,tablet:!0,children:[(0,M.jsx)(S,{}),(0,M.jsx)("span",{style:{marginLeft:"8px"},children:n("header.exit")})]})]})]}),x&&(0,M.jsx)(B.Z,{toggleModal:g,isSignIn:!0,children:(0,M.jsx)(H.Z,{toggleModalCancel:g,text:"".concat(n("header.modalAnswer.text")),onButtonClick:function(){m((0,V.uf)())}})})]})})}},2658:function(n,e,t){t.d(e,{Z:function(){return V}});var r,i,a,o,l,d,c,s,p,u,f,x=t(4164),h=t(2791),g=t(4805),m=t(168),b=t(4313),y=t(8629),v=t(2898),w=(0,b.F4)(r||(r=(0,m.Z)(["\n  0% {\n  transform: translateY(-700px);\n  }\n  100% {\n  transform: translateY(0px);\n  }\n"]))),j=(0,b.F4)(i||(i=(0,m.Z)(["\n  0% {\n  transform: scale(0.5);\n  }\n  100% {\n  transform: scale(1);\n  }\n"]))),Z=b.ZP.div(a||(a=(0,m.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background-color: rgba(43, 43, 43, 0);\n  z-index: 12000;\n  pointer-events: auto;\n\n  &::-webkit-scrollbar {\n  }\n\n  @media screen and (min-width: 768px) {\n    background-color: rgba(43, 43, 43, 0.3);\n  }\n"]))),C=b.ZP.div(o||(o=(0,m.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-shrink: 0;\n  -webkit-box-pack: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n  padding: ",";\n"])),(function(n){return n.isTablet?"20px 40px":"0"})),k=b.ZP.div(l||(l=(0,m.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  height: 100%;\n\n  border-radius: 16px;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n    flex-direction: row;\n    height: auto;\n  }\n"]))),O=b.ZP.div(d||(d=(0,m.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  cursor: pointer;\n"]))),P=b.ZP.div(c||(c=(0,m.Z)(["\n  position: relative;\n  width: 280px;\n  min-height: 520px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);\n\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n\n  @media (",") {\n    width: 440px;\n  }\n\n  @media (",") {\n    width: 533px;\n    min-height: 616px;\n  }\n"])),y.U.mobileTablet,y.U.tablet),E=b.ZP.div(s||(s=(0,m.Z)(["\n  position: relative;\n  width: 540px;\n  min-height: 204px;\n  margin: 0;\n  border-radius: 8px;\n  background-color: ",";\n  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);\n  pointer-events: auto;\n\n  @media screen and (max-width: 767.98px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    height: 100%;\n    width: 100vw;\n    border-radius: 0;\n    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0);\n    animation: "," 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  }\n\n  @media screen and (min-width: 768px) {\n    animation: "," 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  }\n"])),(function(n){return n.theme.bgPrimary2}),w,j),S=(0,b.ZP)(v.r)(p||(p=(0,m.Z)(["\n  position: absolute;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  top: 20px;\n  right: 20px;\n  stroke: #000000;\n\n  ","\n"])),(function(n){return n.dark&&(0,b.iv)(u||(u=(0,m.Z)(["\n      stroke: ",";\n      fill: ",";\n    "])),(function(n){return n.theme.reverseBlack}),(function(n){return n.theme.reverseBlack}))})),U=b.ZP.div(f||(f=(0,m.Z)(["\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  animation: none;\n"]))),L=t(1273),H=t(184),B=document.querySelector("#modal-root"),V=function(n){var e=n.toggleModal,t=n.children,r=n.isSignIn,i=n.InnerComponent,a=(0,g.useMediaQuery)({minWidth:768});(0,h.useEffect)((function(){return window.document.body.classList.add("scroll-lock"),function(){return window.document.body.classList.remove("scroll-lock")}}),[]),(0,h.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(n){"Escape"===n.code&&e()};return(0,x.createPortal)((0,H.jsx)(Z,{className:"container",children:(0,H.jsxs)(C,{className:"wrapper",isTablet:a,children:[(0,H.jsx)(O,{className:"overlayClick",onClick:function(n){e(),n.target,n.currentTarget}}),(0,H.jsx)(k,{className:"overlay",children:r?(0,H.jsxs)(H.Fragment,{children:[!a&&(0,H.jsx)(U,{children:(0,H.jsx)(L.Z,{})}),i?(0,H.jsx)(i,{}):(0,H.jsxs)(E,{children:[a&&(0,H.jsx)(S,{dark:"true",onClick:e}),t]})]}):(0,H.jsxs)(P,{children:[(0,H.jsx)(S,{onClick:e}),t]})})]})}),B)}},2067:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,a,o=t(3387),l=t(168),d=t(4313),c=t(8629),s=t(9180),p=d.ZP.p(r||(r=(0,l.Z)(["\n\tfont-size: 17px;\n  font-family: ",";  \n  line-height: 36px;\n  text-align: center;\n  color:  ",";\n  padding-top: 60px;\n\n\n  @media "," {\n    font-size: 24px;\n    line-height: 45px;\n  }\n\t\n"])),s.LZ.title,(function(n){return n.theme.reverseBlack}),c.U.tablet),u=d.ZP.div(i||(i=(0,l.Z)(["\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n  padding-bottom: 60px;\n"]))),f=d.ZP.div(a||(a=(0,l.Z)(["\n  margin: 0 auto;  \n  display:flex;\n  flex-direction:column;\n  text-align: center;\n  justify-content:center;\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  @media "," {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media "," {\n    padding-left: 16px;\n    padding-right: 16px;\n    display: flex;\n  }\n"])),c.U.mobileOnly,c.U.mobile,c.U.desktop),x=t(9230),h=t(184),g=function(n){var e=n.toggleModalCancel,t=n.text,r=n.onButtonClick,i=(0,x.$G)().t;return(0,h.jsxs)(f,{children:[(0,h.jsx)(p,{children:t}),(0,h.jsxs)(u,{children:[(0,h.jsx)(o.zx,{primary:"true",marginBotom:"20px",onClick:function(){return r(e)},type:"submit",children:i("modalAnswer.yes")}),(0,h.jsx)(o.zx,{outlined:"true",onClick:e,type:"button",children:i("modalAnswer.no")})]})]})}},5672:function(n,e,t){t.d(e,{Z:function(){return J}});var r,i=t(4805),a=t(9230),o=t(168),l=t(4313),d=t(1087),c=t(8629),s=t(2791),p=["title","titleId"];function u(){return u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}function f(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function x(n,e){var t=n.title,i=n.titleId,a=f(n,p);return s.createElement("svg",u({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),t?s.createElement("title",{id:i},t):null,r||(r=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.9333 24.3594V32.5555H12.1V21.6274H8L21.6667 9.33325L35.3333 21.6274H31.2333V32.5555H24.4V24.3594H18.9333Z"})))}var h,g=s.forwardRef(x),m=(t.p,["title","titleId"]);function b(){return b=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},b.apply(this,arguments)}function y(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function v(n,e){var t=n.title,r=n.titleId,i=y(n,m);return s.createElement("svg",b({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?s.createElement("title",{id:r},t):null,h||(h=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM32.5 19.5555C33.7833 19.5555 34.8333 18.4555 34.8333 17.1111C34.8333 15.7666 33.7833 14.6666 32.5 14.6666C31.2166 14.6666 30.1666 15.7666 30.1666 17.1111C30.1666 17.3311 30.19 17.5389 30.2483 17.7344L26.1066 22.0855C25.92 22.0244 25.71 22 25.5 22C25.29 22 25.08 22.0244 24.8933 22.0855L21.9183 18.9689C21.9766 18.7733 22 18.5533 22 18.3333C22 16.9889 20.95 15.8889 19.6666 15.8889C18.3833 15.8889 17.3333 16.9889 17.3333 18.3333C17.3333 18.5533 17.3566 18.7733 17.415 18.9689L12.095 24.53C11.9083 24.4689 11.71 24.4444 11.5 24.4444C10.2166 24.4444 9.16664 25.5444 9.16664 26.8889C9.16664 28.2333 10.2166 29.3333 11.5 29.3333C12.7833 29.3333 13.8333 28.2333 13.8333 26.8889C13.8333 26.6689 13.81 26.4611 13.7516 26.2655L19.06 20.6922C19.2466 20.7533 19.4566 20.7778 19.6666 20.7778C19.8766 20.7778 20.0866 20.7533 20.2733 20.6922L23.2483 23.8089C23.19 24.0044 23.1666 24.2244 23.1666 24.4444C23.1666 25.7889 24.2166 26.8889 25.5 26.8889C26.7833 26.8889 27.8333 25.7889 27.8333 24.4444C27.8333 24.2244 27.81 24.0044 27.7516 23.8089L31.905 19.47C32.0916 19.5311 32.29 19.5555 32.5 19.5555Z"})))}var w,j=s.forwardRef(v),Z=(t.p,["title","titleId"]);function C(){return C=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},C.apply(this,arguments)}function k(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function O(n,e){var t=n.title,r=n.titleId,i=k(n,Z);return s.createElement("svg",C({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?s.createElement("title",{id:r},t):null,w||(w=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.7523 18.5989C18.7523 19.7809 19.6607 20.5399 22.4852 21.2741C25.3096 22.0082 28.3332 23.2151 28.3332 26.7489C28.3332 29.2996 26.4046 30.7056 23.9783 31.166V33.8412H20.2455V31.1411C17.8565 30.631 15.8159 29.1005 15.6666 26.3756H18.4039C18.5408 27.8438 19.5487 28.9885 22.1119 28.9885C24.8617 28.9885 25.4714 27.6198 25.4714 26.7613C25.4714 25.6041 24.8493 24.5092 21.7386 23.7626C18.2671 22.9289 15.8905 21.498 15.8905 18.6238C15.8905 16.2223 17.8316 14.6546 20.2455 14.132V11.4443H23.9783V14.1693C26.5788 14.8039 27.8853 16.7698 27.9724 18.91H25.2225C25.1479 17.3546 24.3267 16.297 22.1119 16.297C20.0091 16.297 18.7523 17.2426 18.7523 18.5989Z"})))}var P,E,S,U,L,H,B,V,M,I=s.forwardRef(O),A=(t.p,l.ZP.div(P||(P=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n\n  @media "," {\n    margin-top: 0px;\n    flex-direction: column;\n  }\n"])),c.U.tablet)),F=(0,l.ZP)(d.OL)(E||(E=(0,o.Z)(["\n  padding: 0px;\n  background-color: transparent;\n  border: none;\n  height: 44px;\n  font-family: 'Poppins', \"Montserrat\";\n  font-size: 18px;\n  color: ",";\n\n  &:not(:last-child) {\n    margin-right: 32px;\n  }\n\n  &:hover svg,\n  &:focus svg{\n    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));\n    fill: #4a56e2;\n  }\n\n  @media "," {\n    display: flex;\n    align-items: center;\n    height: auto;\n\n    &:not(:last-child) {\n    margin-right: 0px;\n    margin-bottom: 12px;\n  }\n  }\n"])),(function(n){return n.theme.reverseBlack}),c.U.tablet),z=l.ZP.span(S||(S=(0,o.Z)(["\n  ","\n"])),(function(n){return n.current&&(0,l.iv)(U||(U=(0,o.Z)(["\n      font-weight: 700;\n    "])))})),D=(0,l.iv)(L||(L=(0,o.Z)(["\n  fill: #6e78e8;\n  transition: 0.2s ease-in-out;\n\n  ","\n\n    @media "," {\n      width: 24px;\n      height: 24px;\n      margin-right: 20px;\n    }\n"])),(function(n){return n.current&&(0,l.iv)(H||(H=(0,o.Z)(["\n      fill: #4a56e2;\n    "])))}),c.U.tablet),T=(0,l.ZP)(g)(B||(B=(0,o.Z)(["\n  ","\n"])),D),R=(0,l.ZP)(j)(V||(V=(0,o.Z)(["\n  ","\n"])),D),G=(0,l.ZP)(I)(M||(M=(0,o.Z)(["\n  ","\n"])),D),N=t(184),J=function(n){var e=n.current,t=(0,a.$G)().t,r=(0,i.useMediaQuery)({minWidth:768});return(0,N.jsxs)(A,{children:[(0,N.jsxs)(F,{type:"button",to:"/home",children:["home"===e?(0,N.jsx)(T,{current:"true"}):(0,N.jsx)(T,{}),r?"home"===e?(0,N.jsx)(z,{current:"true",children:t("navigation.navigateText.home")}):(0,N.jsx)(z,{children:t("navigation.navigateText.home")}):null]}),(0,N.jsxs)(F,{type:"button",to:"/statistics",children:["statistics"===e?(0,N.jsx)(R,{current:"true"}):(0,N.jsx)(R,{}),r?"statistics"===e?(0,N.jsx)(z,{current:"true",children:t("navigation.navigateText.statistics")}):(0,N.jsx)(z,{children:t("navigation.navigateText.statistics")}):null]}),!r&&(0,N.jsx)(F,{type:"button",to:"/currency",children:"currency"===e?(0,N.jsx)(G,{current:"true"}):(0,N.jsx)(G,{})})]})}},6587:function(n,e,t){t.d(e,{Eq:function(){return h},H_:function(){return u},L:function(){return f},kC:function(){return x}});var r,i,a,o,l=t(168),d=t(4313),c=t(8629),s=t(1082),p=t(3995),u=d.ZP.div(r||(r=(0,l.Z)(["\n  min-height: 100vh;\n  background-color: ",";\n\n  @media "," {\n    background: top 0% right 0% no-repeat url(","),\n      bottom 0% left 0% no-repeat url(","), ",";\n  }\n"])),(function(n){return n.theme.bgPrimary1}),c.U.tablet,p,s,(function(n){return n.theme.bgPrimary1})),f=d.ZP.div(i||(i=(0,l.Z)(["\n  min-height: 100vh;\n\n  @media "," {\n    background-color: ",";\n    backdrop-filter: blur(25px);\n  }\n"])),c.U.tablet,(function(n){return n.theme.bgBlurColor})),x=d.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  @media "," {\n    padding-top: 32px;\n    padding-bottom: 20px;\n\n    /* & > div {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-right: 32px;\n    } */\n  }\n\n  @media "," {\n    min-height: calc(100vh - 85px);\n    display: block;\n    padding-right: 70px;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    border-right: 2px solid rgba(0, 0, 0, 0.05);\n  }\n"])),c.U.tabletOnly,c.U.desktop),h=d.ZP.div(o||(o=(0,l.Z)(["\n  @media "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 32px;\n  }\n"])),c.U.tabletOnly)},9180:function(n,e,t){t.d(e,{$S:function(){return o},BC:function(){return d},Cg:function(){return c},Cz:function(){return a},LZ:function(){return r},V$:function(){return i},be:function(){return l},q:function(){return s}});var r={main:"Circe, sans-serif",title:'Poppins, "Montserrat", sans-serif'},i={black:"#000000",white:"#ffffff",green:"#24cca7",red:"#FF6596",blue:"#4A56E2",headerGrey:"#BDBDBD",balanceGrey:"#A6A6A6",modalMailPassword:" #e0e0e0",transparent:"transparent"},a={primary:"#E7EAF2",white:"#ffffff",blueActive:"#4A56E2",blueNoActive:"#6E78E8",desktop:"rgba(255, 255, 255, 0.4)",green:"#24cca7",modalCategoryList:"rgba(255, 255, 255, 0.7)",scrollbarThumb:"#c0c5f5",transparent:"transparent"},o=["#FED057","#FFD8D0","#FD9498","#C5BAFF","#6E78E8","#4A56E2","#81E1FF","#24CCA7","#00AD84"],l=["January","February","March","April","May","June","July","August","September","October","November","December"],d=["\u0421\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],c={blue:"1px solid #4a56e2",green:"1px solid #24cca7",greyModal:"1px solid #e0e0e0",homeTabGrey:"1px solid #dcdcdf",scrollbarThumb:"3px solid #c0c5f5"},s={selectList:"0px 6px 15px rgba(0, 0, 0, 0.1)",diagramTabShadow:"0px 1px 0px rgba(255, 255, 255, 0.6)",tableHomeShadows:"20px 20px 20px -2px rgba(0, 0, 0, 0.1)",roundButton:"0px 6px 15px rgba(36, 204, 167, 0.5)"}}}]);
//# sourceMappingURL=954.9263fa30.chunk.js.map