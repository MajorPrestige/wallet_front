"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[674],{9189:function(e,r,s){s.r(r),s.d(r,{default:function(){return I}});var n,a=s(4805),t=s(9434),i=s(854),o=s(8207),c=s(9439),d=s(2791),m=s(5705),l=s(1724),x=s(7184),p=s(9230),h=s(472),u=s(8211),g=s(2661),j=s(3387),f=s(1463),w=s(9869),F=s(188),b=s(3394),_=s(184),v=function(){var e=(0,d.useState)("password"),r=(0,c.Z)(e,2),s=r[0],n=r[1],a=(0,p.$G)().t,i=(0,t.I0)(),o=(0,t.v9)(w.Gl),v=l.Ry().shape({email:l.Z_().matches(b.LX,"".concat(a("registrationForm.email_matches"))).required("".concat(a("registrationForm.email_required"))),password:l.Z_().required("".concat(a("registrationForm.password_required"))).min(6,"".concat(a("registrationForm.password_min"))).max(16,"".concat(a("registrationForm.password_max"))).matches(b.qH.lettersFull,"".concat(a("registrationForm.password_matchesFull"))).matches(b.qH.numbers,"".concat(a("registrationForm.password_matchesNum"))),confirmPassword:l.Z_().oneOf([l.iH("password")],"".concat(a("registrationForm.confirmPassword_oneOf"))).required("".concat(a("registrationForm.confirmPassword_required"))),firstName:l.Z_().max(12,"".concat(a("registrationForm.firstName_max"))).required("".concat(a("registrationForm.firstName_rquired")))}),q=function(e){if(e)return e.length<=16&&e.length>5&&(b.qH.lettersShort.test(e)||/\d/.test(e))?b.qH.strong.test(e)?"strong":"normal":"week"},N=function(){n("string")},y=function(){n("password")};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.P0,{children:(0,_.jsxs)(f.n5,{children:[(0,_.jsx)(f.K7,{children:(0,_.jsx)(u.Z,{})}),(0,_.jsx)(m.J9,{initialValues:{email:"",password:"",confirmPassword:"",firstName:""},validationSchema:v,onSubmit:function(e){var r=e.firstName,s=e.email,n=e.password,a={name:r.trim(),email:s,password:n};i((0,x.IU)(a))},children:function(e){var r=e.values,n=e.errors,t=e.touched,i=e.handleChange,o=e.handleSubmit;return(0,_.jsxs)(f.Gq,{onSubmit:o,children:[(0,_.jsxs)(f.ar,{children:[(0,_.jsx)(f.ob,{name:"email",type:"email",placeholder:"E-mail",value:r.name,onChange:i}),(0,_.jsx)(f.sj,{}),t.email&&n.email&&(0,_.jsx)(f.l4,{children:n.email})]}),(0,_.jsxs)(f.ar,{children:[(0,_.jsx)(f.ob,{name:"password",type:s,placeholder:"".concat(a("registrationForm.password_placeholder")),value:r.name,required:!0,onChange:i}),(0,_.jsx)(f.cU,{}),r.password&&(0,_.jsxs)(f.gf,{security:q(r.password),children:[(0,_.jsx)("span",{}),(0,_.jsx)("span",{}),(0,_.jsx)("span",{})]}),(n.password&&r.password||t.password)&&(0,_.jsx)(f.l4,{children:n.password})]}),(0,_.jsxs)(f.ar,{children:[(0,_.jsx)(f.ob,{name:"confirmPassword",type:s,placeholder:"".concat(a("registrationForm.confirmPassword_placeholder")),value:r.name,onChange:i}),(0,_.jsx)(f.cU,{}),(0,_.jsx)(f.Jr,{onMouseDown:N,onMouseUp:y}),t.confirmPassword&&n.confirmPassword&&(0,_.jsx)(f.l4,{children:n.confirmPassword})]}),(0,_.jsxs)(f.ar,{children:[(0,_.jsx)(f.ob,{name:"firstName",type:"text",placeholder:"".concat(a("registrationForm.firstName_placeholder")),value:r.name,onChange:i}),(0,_.jsx)(f.Hl,{}),(t.firstName||n.firstName&&r.firstName)&&(0,_.jsx)(f.l4,{children:n.firstName})]}),(0,_.jsxs)(f.W4,{children:[(0,_.jsx)(j.zx,{primary:!0,marginBotom:"20px",type:"submit",children:a("registrationForm.signUpButton")}),(0,_.jsx)(j.Fg,{to:"/",outlined:"true",children:a("registrationForm.signInButton")}),(0,_.jsx)(f.CH,{href:"https://wallet-back-onrender.onrender.com/api/users/google",children:(0,_.jsxs)(p.cC,{i18nKey:"registrationForm.signInGoogle",children:["SIGN IN WITH",(0,_.jsx)(f.av,{}),"OOGLE"]})})]})]})}})]})}),o&&(0,_.jsx)(h.Z,{toggleModal:function(){i((0,F.$)())},isSignIn:!1,children:(0,_.jsx)(g.Z,{message:o})})]})},q=s(4481),N=s(168),y=s(4313),P=s(8629),Z=y.ZP.img(n||(n=(0,N.Z)(["\n\t\n\t@media "," {\n\t\tmargin-right: 40px;\n\t\twidth: 274px;\n\t\theight: 250px;\n\t}\n\n\t@media "," {\n\t\tmargin-bottom: 32px;\n\t\twidth: 453px;\n\t\theight: 413px;\n\t}\n"])),P.U.tabletOnly,P.U.desktop),k=s(2470),S=s(6557),C=s(6164),H=s(2841),I=function(){var e=(0,a.useMediaQuery)({minWidth:768}),r=(0,t.v9)(w.Kv);return(0,_.jsxs)(_.Fragment,{children:[r&&(0,_.jsx)(i.Z,{}),(0,_.jsx)(q.Mk,{children:(0,_.jsx)(q.nB,{children:(0,_.jsxs)(q.P0,{children:[(0,_.jsx)(q.dt,{children:(0,_.jsx)(o.V,{})}),e&&(0,_.jsxs)(q.W_,{children:[(0,_.jsx)("div",{children:(0,_.jsxs)("picture",{children:[(0,_.jsx)("source",{media:"(min-width: 1280px)",srcSet:"".concat(C," 1x, ").concat(H," 2x"),type:"image/png"}),(0,_.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(k," 1x, ").concat(S," 2x"),type:"image/png"}),(0,_.jsx)(Z,{src:k,alt:"Finance App"})]})}),(0,_.jsx)(j.Dx,{children:"Finance App"})]}),(0,_.jsx)(v,{})]})})})]})}},6164:function(e,r,s){e.exports=s.p+"static/media/FinanceDesk.44db5f5e9f6ce433eb25.png"},2841:function(e,r,s){e.exports=s.p+"static/media/FinanceDesk@2x.b6bae1d47d97ecdda1c9.png"},2470:function(e,r,s){e.exports=s.p+"static/media/FinanceTab.d71c789137f1f83b8afc.png"},6557:function(e,r,s){e.exports=s.p+"static/media/FinanceTab@2x.640125759eb7a4a9ca52.png"}}]);
//# sourceMappingURL=674.2c79c44d.chunk.js.map