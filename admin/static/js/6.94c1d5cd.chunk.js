(this.webpackJsonpmanodyam=this.webpackJsonpmanodyam||[]).push([[6],{253:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(1),n=c(126),l=c(125),i=c(106),o=c(40),r=c(5),m=c(4),d=c(45),b=c(48),j=(c(35),c(0)),u=l.a().shape({email:l.c().email().required("please provide valid email.")});t.default=function(e){var t,c,l=Object(r.b)(),p=Object(m.h)(),h=Object(r.c)((function(e){return e.userLogin})).loading,x=(null!==(t=Object(r.c)((function(e){return e.userLogin})))&&void 0!==t?t:{user:null}).user,O=Object(i.d)({resolver:Object(n.a)(u)}),f=O.register,g=O.handleSubmit,v=O.formState.errors;O.reset;Object(a.useEffect)((function(){x&&(null===x||void 0===x?void 0:x.status)&&"undone"===x.loginStatus&&(l(Object(b.b)(x)),p("/"))}),[x]);return console.log("propd",h),Object(j.jsx)("div",{className:"container-fluid page-body-wrapper full-page-wrapper",children:Object(j.jsx)("div",{className:"content-wrapper d-flex align-items-center auth px-0",children:Object(j.jsx)("div",{className:"row w-100 mx-0",children:Object(j.jsx)("div",{className:"col-lg-4 mx-auto",children:Object(j.jsxs)("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5",children:[Object(j.jsx)("div",{className:"brand-logo",children:Object(j.jsx)("img",{src:"../images/logo.png",alt:"logo"})}),Object(j.jsx)("h4",{children:"Hello! let's get started"}),Object(j.jsx)("h6",{className:"font-weight-light",children:"Sign in to continue."}),Object(j.jsxs)("form",{className:"pt-3",onSubmit:g((function(e){l(Object(o.a)(e))})),children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",Object(s.a)(Object(s.a)({type:"email",name:"email",className:"form-control form-control-lg"},f("email")),{},{id:"exampleInputEmail1",placeholder:"Username"})),v.email&&Object(j.jsx)("span",{className:"validationError",children:null===v||void 0===v||null===(c=v.email)||void 0===c?void 0:c.message})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",Object(s.a)(Object(s.a)({type:"password",name:"password"},f("password")),{},{className:"form-control form-control-lg",id:"exampleInputPassword1",placeholder:"Password"}))}),Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(d.b,{to:"/Main",children:Object(j.jsx)("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",children:"Sign In"})})}),Object(j.jsxs)("div",{className:"my-2 d-flex justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"form-check",children:Object(j.jsxs)("label",{className:"form-check-label text-muted",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input"}),"Keep me signed in"]})}),Object(j.jsx)(d.b,{to:"/admin/forgotpassword",className:"auth-link text-black",children:"Forgot password?"})]}),Object(j.jsx)("div",{className:"mb-2",style:{display:"none"},children:Object(j.jsxs)("button",{type:"submit",className:"btn btn-block btn-facebook auth-form-btn",children:[Object(j.jsx)("i",{className:"ti-facebook mr-2"}),"Connect using facebook"]})}),Object(j.jsxs)("div",{className:"text-center mt-4 font-weight-light",children:["Don't have an account?"," ",Object(j.jsx)("a",{href:"javascript:void(0)",onClick:function(){p("/admin/register")},className:"text-primary",children:"Create New Account"})]})]})]})})})})})}}}]);
//# sourceMappingURL=6.94c1d5cd.chunk.js.map