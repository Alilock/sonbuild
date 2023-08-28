(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1304:function(e,t,a){},1652:function(e,t,a){"use strict";a.r(t);var l=a(17),c=a(1),s=a(6),n=a.n(s),r=a(105),i=a(12),d=a(799),o=a(1298),b=a(1014),j=a(1301),u=a(1303),m=a(148),h=a(907),v=a(13),O=function(e){var t=Object(c.useRef)(null),a=e.store,l=e.isRtl,s=e.dispatch,n=e.calendarsColor,O=e.calendarApi,f=e.setCalendarApi,p=e.handleAddEventSidebar,x=e.blankEvent,g=e.toggleSidebar,N=e.selectEvent,y=e.updateEvent;Object(c.useEffect)((function(){null===O&&f(t.current.getApi())}),[O]);var E={events:a.events.length?a.events:[],plugins:[u.a,b.b,j.a,o.a],initialView:"dayGridMonth",headerToolbar:{start:"sidebarToggle, prev,next, title",end:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventClassNames:function(e){var t=e.event,a=n[t._def.extendedProps.calendar];return["bg-light-".concat(a)]},eventClick:function(e){var t=e.event;s(N(t)),p()},customButtons:{sidebarToggle:{text:Object(v.jsx)(h.a,{className:"d-xl-none d-block"}),click:function(){g(!0)}}},dateClick:function(e){var t=x;t.start=e.date,t.end=e.date,s(N(t)),p()},eventDrop:function(e){var t=e.event;s(y(t)),m.b.success("Event Updated")},eventResize:function(e){var t=e.event;s(y(t)),m.b.success("Event Updated")},ref:t,direction:l?"rtl":"ltr"};return Object(v.jsx)(r.l,{className:"shadow-none border-0 mb-0 rounded-0",children:Object(v.jsxs)(r.m,{className:"pb-0",children:[Object(v.jsx)(d.b,Object(i.a)({},E))," "]})})},f=Object(c.memo)(O),p=a(19),x=a(701),g=[{label:"Personal",color:"danger",className:"form-check-danger mb-1"},{label:"Business",color:"primary",className:"form-check-primary mb-1"},{label:"Family",color:"warning",className:"form-check-warning mb-1"},{label:"Holiday",color:"success",className:"form-check-success mb-1"},{label:"ETC",color:"info",className:"form-check-info"}],N=function(e){var t=e.handleAddEventSidebar,a=e.toggleSidebar,l=e.updateFilter,s=e.updateAllFilters,i=e.store,d=e.dispatch;return Object(v.jsxs)(c.Fragment,{children:[Object(v.jsxs)("div",{className:"sidebar-wrapper",children:[Object(v.jsx)(r.m,{className:"card-body d-flex justify-content-center my-sm-0 mb-3",children:Object(v.jsx)(r.i,{color:"primary",block:!0,onClick:function(){a(!1),t()},children:Object(v.jsx)("span",{className:"align-middle",children:"Add Event"})})}),Object(v.jsxs)(r.m,{children:[Object(v.jsx)("h5",{className:"section-label mb-1",children:Object(v.jsx)("span",{className:"align-middle",children:"Filter"})}),Object(v.jsxs)("div",{className:"form-check mb-1",children:[Object(v.jsx)(r.K,{id:"view-all",type:"checkbox",label:"View All",className:"select-all",checked:i.selectedCalendars.length===g.length,onChange:function(e){return d(s(e.target.checked))}}),Object(v.jsx)(r.N,{className:"form-check-label",for:"view-all",children:"View All"})]}),Object(v.jsx)("div",{className:"calendar-events-filter",children:g.length&&g.map((function(e){return Object(v.jsxs)("div",{className:n()("form-check",Object(p.a)({},e.className,e.className)),children:[Object(v.jsx)(r.K,{type:"checkbox",label:e.label,className:"input-filter",id:"".concat(e.label,"-event"),checked:i.selectedCalendars.includes(e.label),onChange:function(){d(l(e.label))}},e.label),Object(v.jsx)(r.N,{className:"form-check-label",for:"".concat(e.label,"-event"),children:e.label})]},"".concat(e.label,"-key"))}))})]})]}),Object(v.jsx)("div",{className:"mt-auto",children:Object(v.jsx)("img",{className:"img-fluid",src:x.default,alt:"illustration"})})]})},y=a(29),E=a(147),C=a(505),k=a(808),w=a(510),D=a.n(w),S=a(566),A=a(509),F=a(531),P=a.n(F),B=a(507),R=a(506),T=a(49),L=a(87),U=a(86),V=a(111),G=a(55),H=a(285),K=(a(512),a(525),["data"]),M=["data"],z=function(e){var t=e.open,a=e.store,s=e.dispatch,n=e.addEvent,d=e.calendarApi,o=e.selectEvent,b=e.updateEvent,j=e.removeEvent,u=e.refetchEvents,h=e.calendarsColor,O=e.handleAddEventSidebar,f=a.selectedEvent,p=Object(B.e)({defaultValues:{title:""}}),x=p.control,g=p.setError,N=p.setValue,w=p.getValues,F=p.handleSubmit,z=p.formState.errors,J=Object(c.useState)(""),q=Object(l.a)(J,2),I=q[0],Y=q[1],Q=Object(c.useState)(""),W=Object(l.a)(Q,2),_=W[0],X=W[1],Z=Object(c.useState)({}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)(!1),le=Object(l.a)(ae,2),ce=le[0],se=le[1],ne=Object(c.useState)(""),re=Object(l.a)(ne,2),ie=re[0],de=re[1],oe=Object(c.useState)(new Date),be=Object(l.a)(oe,2),je=be[0],ue=be[1],me=Object(c.useState)(new Date),he=Object(l.a)(me,2),ve=he[0],Oe=he[1],fe=Object(c.useState)([{value:"Business",label:"Business",color:"primary"}]),pe=Object(l.a)(fe,2),xe=pe[0],ge=pe[1],Ne=[{value:"Donna Frank",label:"Donna Frank",avatar:T.default},{value:"Jane Foster",label:"Jane Foster",avatar:L.default},{value:"Gabrielle Robertson",label:"Gabrielle Robertson",avatar:U.default},{value:"Lori Spears",label:"Lori Spears",avatar:V.default},{value:"Sandy Vega",label:"Sandy Vega",avatar:G.default},{value:"Cheryl May",label:"Cheryl May",avatar:H.default}],ye=function(){if(w("title").length){var e={id:f.id,title:w("title"),allDay:ce,start:ve,end:je,url:I,display:!1===ce?"block":void 0,extendedProps:{location:ie,description:_,guests:ee,calendar:xe[0].label}};s(b(e)),function(e,t,a){for(var l=d.getEventById(e.id),c=0;c<t.length;c++){var s=t[c];l.setProp(s,e[s])}l.setDates(new Date(e.start),new Date(e.end),{allDay:e.allDay});for(var n=0;n<a.length;n++){var r=a[n];l.setExtendedProp(r,e.extendedProps[r])}}(e,["id","title","url"],["calendar","guests","location","description"]),O(),m.b.success("Event Updated")}else g("title",{type:"manual"})},Ee=function(){var e;s(j(f.id)),e=f.id,d.getEventById(e).remove(),O(),m.b.error("Event Removed")},Ce=function(){return Object(R.f)(f)||!Object(R.f)(f)&&!f.title.length?Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(r.i,{className:"me-1",type:"submit",color:"primary",children:"Add"}),Object(v.jsx)(r.i,{color:"secondary",type:"reset",onClick:O,outline:!0,children:"Cancel"})]}):Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(r.i,{className:"me-1",color:"primary",onClick:ye,children:"Update"}),Object(v.jsx)(r.i,{color:"danger",onClick:Ee,outline:!0,children:"Delete"})]})},ke=Object(v.jsx)(k.a,{className:"cursor-pointer",size:15,onClick:O});return Object(v.jsxs)(r.Q,{isOpen:t,className:"sidebar-lg",toggle:O,onOpened:function(){if(!Object(R.f)(f)){var e=f.extendedProps.calendar;N("title",f.title||w("title")),se(f.allDay||ce),Y(f.url||I),de(f.extendedProps.location||ie),X(f.extendedProps.description||_),te(f.extendedProps.guests||ee),Oe(new Date(f.start)),ue(f.allDay?new Date(f.start):new Date(f.end)),ge([e.length?{label:e,value:e,color:h[e]}:{value:"Business",label:"Business",color:"primary"}])}},onClosed:function(){s(o({})),N("title",""),se(!1),Y(""),de(""),X(""),te({}),ge([{value:"Business",label:"Business",color:"primary"}]),Oe(new Date),ue(new Date)},contentClassName:"p-0 overflow-hidden",modalClassName:"modal-slide-in event-sidebar",children:[Object(v.jsx)(r.T,{className:"mb-1",toggle:O,close:ke,tag:"div",children:Object(v.jsxs)("h5",{className:"modal-title",children:[f&&f.title&&f.title.length?"Update":"Add"," Event"]})}),Object(v.jsx)(P.a,{options:{wheelPropagation:!1},children:Object(v.jsx)(r.R,{className:"flex-grow-1 pb-sm-0 pb-3",children:Object(v.jsxs)(r.H,{onSubmit:F((function(e){e.title.length?Object(R.f)(z)&&(Object(R.f)(f)||!Object(R.f)(f)&&!f.title.length?function(){var e={title:w("title"),start:ve,end:je,allDay:ce,display:"block",extendedProps:{calendar:xe[0].label,url:I.length?I:void 0,guests:ee.length?ee:void 0,location:ie.length?ie:void 0,desc:_.length?_:void 0}};s(n(e)),u(),O(),m.b.success("Event Added")}():ye(),O()):g("title",{type:"manual"})})),children:[Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsxs)(r.N,{className:"form-label",for:"title",children:["Title ",Object(v.jsx)("span",{className:"text-danger",children:"*"})]}),Object(v.jsx)(B.a,{name:"title",control:x,render:function(e){var t=e.field;return Object(v.jsx)(r.K,Object(i.a)({id:"title",placeholder:"Title",invalid:z.title&&!0},t))}})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"label",children:"Label"}),Object(v.jsx)(A.a,{id:"label",value:xe,options:[{value:"Business",label:"Business",color:"primary"},{value:"Personal",label:"Personal",color:"danger"},{value:"Family",label:"Family",color:"warning"},{value:"Holiday",label:"Holiday",color:"success"},{value:"ETC",label:"ETC",color:"info"}],theme:R.i,className:"react-select",classNamePrefix:"select",isClearable:!1,onChange:function(e){return ge([e])},components:{Option:function(e){var t=e.data,a=Object(E.a)(e,K);return Object(v.jsxs)(S.r.Option,Object(i.a)(Object(i.a)({},a),{},{children:[Object(v.jsx)("span",{className:"bullet bullet-".concat(t.color," bullet-sm me-50")}),t.label]}))}}})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"startDate",children:"Start Date"}),Object(v.jsx)(D.a,{required:!0,id:"startDate",name:"startDate",className:"form-control",onChange:function(e){return Oe(e[0])},value:ve,options:{enableTime:!1===ce,dateFormat:"Y-m-d H:i"}})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"endDate",children:"End Date"}),Object(v.jsx)(D.a,{required:!0,id:"endDate",name:"endDate",className:"form-control",onChange:function(e){return ue(e[0])},value:je,options:{enableTime:!1===ce,dateFormat:"Y-m-d H:i"}})]}),Object(v.jsxs)("div",{className:"form-switch mb-1",children:[Object(v.jsx)(r.K,{id:"allDay",type:"switch",className:"me-1",checked:ce,name:"customSwitch",onChange:function(e){return se(e.target.checked)}}),Object(v.jsx)(r.N,{className:"form-label",for:"allDay",children:"All Day"})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"eventURL",children:"Event URL"}),Object(v.jsx)(r.K,{type:"url",id:"eventURL",value:I,onChange:function(e){return Y(e.target.value)},placeholder:"https://www.google.com"})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"guests",children:"Guests"}),Object(v.jsx)(A.a,{isMulti:!0,id:"guests",className:"react-select",classNamePrefix:"select",isClearable:!1,options:Ne,theme:R.i,value:ee.length?Object(y.a)(ee):null,onChange:function(e){return te(Object(y.a)(e))},components:{Option:function(e){var t=e.data,a=Object(E.a)(e,M);return Object(v.jsx)(S.r.Option,Object(i.a)(Object(i.a)({},a),{},{children:Object(v.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(v.jsx)(C.a,{className:"my-0 me-1",size:"sm",img:t.avatar}),Object(v.jsx)("div",{children:t.label})]})}))}}})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"location",children:"Location"}),Object(v.jsx)(r.K,{id:"location",value:ie,onChange:function(e){return de(e.target.value)},placeholder:"Office"})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(r.N,{className:"form-label",for:"description",children:"Description"}),Object(v.jsx)(r.K,{type:"textarea",name:"text",id:"description",rows:"3",value:_,onChange:function(e){return X(e.target.value)},placeholder:"Description"})]}),Object(v.jsx)("div",{className:"d-flex mb-1",children:Object(v.jsx)(Ce,{})})]})})})]})},J=a(554),q=a(146),I=a(186),Y=(a(1304),{Business:"primary",Holiday:"success",Personal:"danger",Family:"warning",ETC:"info"});t.default=function(){var e=Object(q.b)(),t=Object(q.c)((function(e){return e.calendar})),a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],d=s[1],o=Object(c.useState)(!1),b=Object(l.a)(o,2),j=b[0],u=b[1],m=Object(c.useState)(!1),h=Object(l.a)(m,2),O=h[0],p=h[1],x=Object(J.a)(),g=Object(l.a)(x,1)[0],y=function(){return u(!j)},E=function(e){return p(e)};return Object(c.useEffect)((function(){e(Object(I.c)(t.selectedCalendars))}),[]),Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)("div",{className:"app-calendar overflow-hidden border",children:Object(v.jsxs)(r.ib,{className:"g-0",children:[Object(v.jsx)(r.B,{id:"app-calendar-sidebar",className:n()("col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column",{show:O}),children:Object(v.jsx)(N,{store:t,dispatch:e,updateFilter:I.h,toggleSidebar:E,updateAllFilters:I.f,handleAddEventSidebar:y})}),Object(v.jsx)(r.B,{className:"position-relative",children:Object(v.jsx)(f,{isRtl:g,store:t,dispatch:e,blankEvent:{title:"",start:"",end:"",allDay:!1,url:"",extendedProps:{calendar:"",guests:[],location:"",description:""}},calendarApi:i,selectEvent:I.e,updateEvent:I.g,toggleSidebar:E,calendarsColor:Y,setCalendarApi:d,handleAddEventSidebar:y})}),Object(v.jsx)("div",{className:n()("body-content-overlay",{show:!0===O}),onClick:function(){return E(!1)}})]})}),Object(v.jsx)(z,{store:t,dispatch:e,addEvent:I.a,open:j,selectEvent:I.e,updateEvent:I.g,removeEvent:I.d,calendarApi:i,refetchEvents:function(){null!==i&&i.refetchEvents()},calendarsColor:Y,handleAddEventSidebar:y})]})}},701:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/calendar-illustration.42be42ce.png"}}]);