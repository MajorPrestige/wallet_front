"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[606],{269:function(n,e,i){i.r(e),i.d(e,{default:function(){return V}});var t,r,o,s,a,c,d,l,p=i(4805),x=i(9434),u=i(854),h=i(9439),m=i(2791),g=i(1087),f=i(5705),j=i(1724),w=i(7184),b=i(9230),v=i(8211),k=i(4164),y=i(168),Z=i(4313),S=i(8629),F=i(2898),C=Z.ZP.div(t||(t=(0,y.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background-color: rgba(43, 43, 43, 0);\n  z-index: 12000;\n  pointer-events: auto;\n\n  &::-webkit-scrollbar {\n  }\n\n  @media screen and (min-width: 768px) {\n  }\n"]))),P=Z.ZP.div(r||(r=(0,y.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-shrink: 0;\n  -webkit-box-pack: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n"]))),q=Z.ZP.div(o||(o=(0,y.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  cursor: pointer;\n"]))),E=Z.ZP.div(s||(s=(0,y.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  height: 100%;\n  padding: size(24px);\n  padding-top: size(32px);\n\n  border-radius: 16px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n    flex-direction: row;\n    height: auto;\n    background-color: rgba(43, 43, 43, 0.3);\n  }\n"]))),M=Z.ZP.div(a||(a=(0,y.Z)(["\n  position: relative;\n  width: 280px;\n  min-height: 520px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);\n\n  @media (",") {\n    width: 440px;\n  }\n\n  @media (",") {\n    width: 533px;\n    min-height: 616px;\n  }\n"])),S.U.mobileTablet,S.U.tablet),T=(0,Z.ZP)(F.r)(c||(c=(0,y.Z)(["\n  position: absolute;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  top: 20px;\n  right: 20px;\n  stroke: #000000;\n\n  ","\n"])),(function(n){return n.dark&&(0,Z.iv)(d||(d=(0,y.Z)(["\n      stroke: ",";\n      fill: ",";\n    "])),(function(n){return n.theme.reverseBlack}),(function(n){return n.theme.reverseBlack}))})),U=i(184),_=document.querySelector("#modal-root"),A=function(n){var e=n.toggleModal,i=n.children,t=(0,p.useMediaQuery)({minWidth:768});(0,m.useEffect)((function(){return window.document.body.classList.add("scroll-lock"),function(){return window.document.body.classList.remove("scroll-lock")}}),[]),(0,m.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,k.createPortal)((0,U.jsx)(C,{className:"container",children:(0,U.jsxs)(P,{className:"wrapper",isTablet:t,children:[(0,U.jsx)(q,{className:"overlayClick",onClick:function(n){e(),n.target,n.currentTarget}}),(0,U.jsx)(E,{className:"overlay",children:(0,U.jsxs)(M,{children:[(0,U.jsx)(T,{onClick:e}),i]})})]})}),_)},B=i(3387),G=i(1463),I=i(9869),L=i(188),N=i(2661),W=i(3394),z=function(){var n=(0,m.useState)("password"),e=(0,h.Z)(n,2),i=e[0],t=e[1],r=(0,b.$G)().t,o=(0,x.I0)(),s=(0,g.lr)(),a=(0,h.Z)(s,1)[0],c=(0,x.v9)(I.Gl),d=a.get("token");d&&o((0,w.vT)({token:d}));var l=j.Ry().shape({email:j.Z_().matches(W.LX,"".concat(r("loginForm.email_matches"))).required("".concat(r("loginForm.email_required"))),password:j.Z_().required("".concat(r("loginForm.password_required")))}),p=function(){t("string")},u=function(){t("password")};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(G.P0,{children:(0,U.jsxs)(G.n5,{children:[(0,U.jsx)(G.K7,{children:(0,U.jsx)(v.Z,{})}),(0,U.jsx)(f.J9,{initialValues:{email:"",password:""},validationSchema:l,onSubmit:function(n){o((0,w.xJ)(n))},children:function(n){var e=n.values,t=n.errors,o=n.touched,s=n.handleChange,a=n.handleSubmit;return(0,U.jsxs)(G.Gq,{onSubmit:a,children:[(0,U.jsxs)(G.ar,{children:[(0,U.jsx)(G.ob,{name:"email",type:"email",placeholder:"E-mail",value:e.name,onChange:s}),(0,U.jsx)(G.sj,{}),o.email&&t.email&&(0,U.jsx)(G.l4,{children:t.email})]}),(0,U.jsxs)(G.ar,{children:[(0,U.jsx)(G.ob,{name:"password",type:i,placeholder:"".concat(r("loginForm.password_placeholder")),value:e.name,required:!0,onChange:s}),(0,U.jsx)(G.cU,{}),(0,U.jsx)(G.Jr,{onMouseDown:p,onMouseUp:u}),(t.password&&e.password||o.password)&&(0,U.jsx)(G.l4,{children:t.password})]}),(0,U.jsxs)(G.W4,{children:[(0,U.jsx)(B.zx,{primary:!0,marginBotom:"20px",type:"submit",children:r("loginForm.signInButton")}),(0,U.jsx)(B.Fg,{to:"/signup",outlined:"true",children:r("loginForm.signUpButton")}),(0,U.jsx)(G.CH,{href:"https://wallet-back-onrender.onrender.com/api/users/google",children:(0,U.jsxs)(b.cC,{i18nKey:"loginForm.signInGoogle",children:["SIGN IN WITH",(0,U.jsx)(G.av,{}),"OOGLE"]})})]})]})}})]})}),c&&(0,U.jsx)(A,{toggleModal:function(){o((0,L.$)())},children:(0,U.jsx)(N.Z,{message:c})})]})},D=Z.ZP.img(l||(l=(0,y.Z)(["\n\t@media "," {\n    margin-right: 40px;\n\t\twidth: 261px;\n\t\theight: 250px;\n\t}\n\n\t@media "," {\n\t\tmargin-bottom: 32px;\n\t\twidth: 435px;\n\t\theight: 420px;\n\t}\n"])),S.U.tabletOnly,S.U.desktop),J=i(4481),K=i(8207),O=i(5716),H=i(165),Q=i(2423),R=i(6692),V=function(){var n=(0,p.useMediaQuery)({minWidth:768}),e=(0,x.v9)(I.Rp),i=(0,x.v9)(I.Kv);return e?(0,U.jsx)(u.Z,{}):(0,U.jsxs)(U.Fragment,{children:[i&&(0,U.jsx)(u.Z,{}),(0,U.jsx)(J.Mk,{children:(0,U.jsx)(J.nB,{children:(0,U.jsxs)(J.P0,{children:[(0,U.jsx)(J.dt,{children:(0,U.jsx)(K.V,{})}),n&&(0,U.jsxs)(J.W_,{children:[(0,U.jsx)("div",{children:(0,U.jsxs)("picture",{children:[(0,U.jsx)("source",{media:"(min-width: 1280px)",srcSet:"".concat(Q," 1x, ").concat(R," 2x"),type:"image/png"}),(0,U.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(O," 1x, ").concat(H," 2x"),type:"image/png"}),(0,U.jsx)(D,{src:O,alt:"Finance App"})]})}),(0,U.jsx)(B.Dx,{children:"Finance App"})]}),(0,U.jsx)(z,{})]})})})]})}},2423:function(n,e,i){n.exports=i.p+"static/media/SigninAppDesk.9eddf7712a70a5d1290d.png"},6692:function(n,e,i){n.exports=i.p+"static/media/SigninAppDeskt@2x.d8f64e3e7c50a467da40.png"},5716:function(n,e,i){n.exports=i.p+"static/media/SigninAppTab.bf9ee2ea3880266b790b.png"},165:function(n,e,i){n.exports=i.p+"static/media/SigninAppTab@2x.efa6ceb36013e5bcbfdc.png"}}]);
//# sourceMappingURL=606.8e6d8c4e.chunk.js.map