(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[106],{1642:function(e,r,c){"use strict";c.r(r);var n=c(1),t=c(266),a=c.n(t),s=c(105),b=c(145),d=c(13),i=function(){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)(s.g,{listClassName:"breadcrumb-slash",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-dots",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-dashes",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-pipes",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-chevron",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]})]})},m=function(){return Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]})})},j=c(504),l=function(){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"d-flex justify-content-start breadcrumb-wrapper",children:Object(d.jsxs)(s.g,{className:"ms-1",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)("span",{children:" Data "})})]})}),Object(d.jsx)("div",{className:"d-flex justify-content-center breadcrumb-wrapper my-1",children:Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)("span",{children:" Data "})})]})}),Object(d.jsx)("div",{className:"d-flex justify-content-end breadcrumb-wrapper",children:Object(d.jsxs)(s.g,{className:"me-1",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{className:"pe-1",children:Object(d.jsx)("span",{children:" Data "})})]})})]})},h=c(508),o=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsDefault = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='ms-1'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsDefault\n    "})}),u=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsStyles = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='breadcrumb-slash'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dots'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dashes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-pipes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-chevron'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsStyles\n\n      "})}),x=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsAlignment = () => {\n  return (\n    <React.Fragment>\n      <div className='justify-content-start breadcrumb-wrapper'>\n        <Breadcrumb className='ms-1'>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-center breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-end breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsAlignment\n\n      "})});r.default=function(){return Object(n.useEffect)((function(){a.a.highlightAll()}),[]),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(j.a,{title:"Breadcrumbs",data:[{title:"Components"},{title:"Breadcrumbs"}]}),Object(d.jsxs)(s.ib,{children:[Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)("section",{id:"component-breadcrumbs",children:[Object(d.jsx)(h.a,{title:"Default",code:o,children:Object(d.jsx)(m,{})}),Object(d.jsxs)(h.a,{title:"Styles",code:u,children:[Object(d.jsxs)(s.u,{children:["These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing"," ",Object(d.jsx)("code",{children:"$breadcrumb-divider"})," variable value in scss"]}),Object(d.jsx)(i,{})]})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)("section",{id:"breadcrumb-alignment",children:Object(d.jsxs)(h.a,{title:"Alignment",code:x,children:[Object(d.jsxs)(s.u,{children:["Use class ",Object(d.jsxs)("code",{children:[".justify-content-","{position}"]})," to align breadcrumb to desired position."]}),Object(d.jsx)(l,{})]})})})]})]})}},504:function(e,r,c){"use strict";var n=c(12),t=c(1),a=c(145),s=c(6),b=c.n(s),d=c(889),i=c(818),m=c(819),j=c(817),l=c(845),h=c(105),o=c(13);r.a=function(e){var r=e.data,c=e.title;return Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(o.jsx)("div",{className:"row breadcrumbs-top",children:Object(o.jsxs)("div",{className:"col-12",children:[c?Object(o.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(o.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(o.jsxs)(h.g,{children:[Object(o.jsx)(h.h,{tag:"li",children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),r.map((function(e,c){var s=e.link?a.b:t.Fragment,d=r.length-1===c;return Object(o.jsx)(h.h,{tag:"li",active:!d,className:b()({"text-primary":!d}),children:Object(o.jsx)(s,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(o.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(o.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(o.jsxs)(h.tb,{children:[Object(o.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(o.jsx)(d.a,{size:14})}),Object(o.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(o.jsxs)(h.E,{tag:a.b,to:"/apps/todo",children:[Object(o.jsx)(i.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(o.jsxs)(h.E,{tag:a.b,to:"/apps/chat",children:[Object(o.jsx)(m.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(o.jsxs)(h.E,{tag:a.b,to:"/apps/email",children:[Object(o.jsx)(j.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(o.jsxs)(h.E,{tag:a.b,to:"/apps/calendar",children:[Object(o.jsx)(l.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},508:function(e,r,c){"use strict";var n=c(17),t=c(1),a=c(860),s=c(105),b=c(13);r.a=function(e){var r=e.title,c=e.children,d=e.noBody,i=e.code,m=e.iconCode,j=Object(t.useState)(!1),l=Object(n.a)(j,2),h=l[0],o=l[1],u=m||Object(b.jsx)(a.a,{size:15}),x=d?t.Fragment:s.m;return Object(b.jsxs)(s.l,{className:"card-snippet",children:[Object(b.jsxs)(s.p,{children:[Object(b.jsx)(s.v,{tag:"h4",children:r}),Object(b.jsx)("div",{className:"views cursor-pointer",onClick:function(){return o(!h)},children:u})]}),Object(b.jsx)(x,{children:c}),Object(b.jsx)(s.C,{isOpen:h,children:Object(b.jsx)(s.m,{children:i})})]})}}}]);