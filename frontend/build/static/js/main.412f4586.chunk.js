(this.webpackJsonpfactorize=this.webpackJsonpfactorize||[]).push([[0],{27:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(16),r=c.n(n),l=(c(20),c(27),c(17)),i=c(2),o=c(0),d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"ABOUT"})})},j=c(9),b=c.n(j),h=c(13),m=c(4),x=(c(30),function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(0),l=Object(m.a)(r,2),i=(l[0],l[1]),d=Object(s.useState)(0),j=Object(m.a)(d,2),x=j[0],u=j[1],p=Object(s.useState)({}),O=Object(m.a)(p,2),g=O[0],v=O[1],f=Object(s.useState)([]),w=Object(m.a)(f,2),y=w[0],N=w[1],k=Object(s.useState)(!0),S=Object(m.a)(k,2),C=(S[0],S[1],a.a.useRef(null)),E=function(){var e=Object(h.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(C.current.value),s={val:c},e.next=5,fetch("/tlink",{timeout:1e3,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 5:e.sent.ok?(console.log("it worked damn it!!!"),_()):(console.log("failed:"),alert("Please enter correct tweet link")),console.log("inside");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside getpred"),e.next=3,fetch("/tlink",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),v(c),i(c.pred),console.log(c),console.log("Prediction is",c.pred),u(1),T();case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside webscrap"),e.next=3,fetch("/tlink_webscrap",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,N(c.links),console.log(c.links);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container border",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)("h2",{className:"my-md-5",children:"Enter link here:"})}),Object(o.jsx)("div",{className:"col-9",children:Object(o.jsx)("div",{className:"form-group my-md-5",children:Object(o.jsx)("input",{type:"text",name:"tlink",class:"form-control form-control-lg bg-light",placeholder:"Enter Tweet Link",onChange:function(e){n(e.target.value),console.log(c)},ref:C})})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"d-grid gap-2 col-2   mx-auto mb-sm-3 mb-md-4",children:Object(o.jsx)("button",{type:"submit",value:"submit",className:"glow-on-hover",onClick:E,children:"Submit"})})}),x>0&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"card bg-light-gray text-dark col-sm-6 mx-auto",children:[Object(o.jsx)("div",{className:"card-header text-center",children:Object(o.jsxs)("h4",{className:"card-title",children:["Name: ",g.data.name]})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("img",{className:"col-lg-2 mb-sm-2",src:g.data.profile_image_url}),Object(o.jsxs)("h5",{className:"card-subtitle mb-2","text-muted":!0,children:[" @",g.data.screen_name]})]}),Object(o.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsxs)("h4",{children:["Prediction: ",g.pred]})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsxs)("h5",{children:["Tweets: ",g.data.statuses_count]})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsxs)("h5",{children:["Followers: ",g.data.followers_count," \xa0\xa0&\xa0\xa0 Following: ",g.data.friends_count]})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsxs)("h5",{children:["Verified: ",g.data.verified>0?"True":"False"]})})]})]})]}),Object(o.jsx)("div",{className:"mt-5 pt-2",children:Object(o.jsx)("h2",{className:"ml-5",children:"Links related to the tweet:"})}),Object(o.jsxs)("ul",{class:"list-group list-group-flush pb-3 pt-2",children:[Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-12 text-truncate",children:Object(o.jsxs)("h5",{children:["1. \xa0",Object(o.jsx)("a",{href:y[0],target:"_blank",children:Object(o.jsx)("span",{class:"badge bg-primary rounded-pill",children:"Open"})}),"\xa0",y[0]]})})})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-12 text-truncate",children:Object(o.jsxs)("h5",{children:["2. \xa0",Object(o.jsx)("a",{href:y[1],target:"_blank",children:Object(o.jsx)("span",{class:"badge bg-primary rounded-pill",children:"Open"})}),"\xa0",y[1]]})})})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-12 text-truncate",children:Object(o.jsxs)("h5",{children:["3. \xa0",Object(o.jsx)("a",{href:y[2],target:"_blank",children:Object(o.jsx)("span",{class:"badge bg-primary rounded-pill",children:"Open"})}),"\xa0",y[2]]})})})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-12 text-truncate",children:Object(o.jsxs)("h5",{children:["4. \xa0",Object(o.jsx)("a",{href:y[3],target:"_blank",children:Object(o.jsx)("span",{class:"badge bg-primary rounded-pill",children:"Open"})}),"\xa0",y[3]]})})})}),Object(o.jsx)("li",{class:"list-group-item imppp",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-12 text-truncate",children:Object(o.jsxs)("h5",{children:["5. \xa0",Object(o.jsx)("a",{href:y[4],target:"_blank",children:Object(o.jsx)("span",{class:"badge bg-primary rounded-pill",children:"Open"})}),"\xa0",y[4]]})})})})]})]})]})})}),u=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],r=a.a.useRef(null);return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container border",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)("h2",{className:"my-md-5",children:"Enter link here:"})}),Object(o.jsx)("div",{className:"col-9",children:Object(o.jsx)("div",{className:"form-group my-md-5",children:Object(o.jsx)("input",{type:"email",class:"form-control form-control-lg",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Facebook Link",onChange:function(e){n(e.target.value),console.log(c)},ref:r})})})]}),Object(o.jsx)("div",{className:"row justify-content-md-center",children:Object(o.jsx)("div",{className:"col-2 mb-md-5",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),n(r.current.value),alert(c),console.log(c)},children:"Submit"})})}),Object(o.jsx)("div",{className:"row"})]})})},p=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],r=a.a.useRef(null);return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container border",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)("h2",{className:"my-md-5",children:"Enter link here:"})}),Object(o.jsx)("div",{className:"col-9",children:Object(o.jsx)("div",{className:"form-group my-md-5",children:Object(o.jsx)("input",{type:"text",name:"tlink",class:"form-control form-control-lg",placeholder:"Enter News Link",onChange:function(e){n(e.target.value),console.log(c)},ref:r})})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"d-grid gap-2 col-2   mx-auto mb-sm-3 mb-md-4",children:Object(o.jsx)("button",{type:"submit",value:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),n(r.current.value),alert(c),console.log(c)},children:"Submit"})})})]})})},O=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{style:{"--color-1":"deepskyblue","--color-2":"navy",background:"\n            linear-gradient(\n                170deg,\n                var(--color-1),\n                var(--color-2) 80%\n            )\n            ","min-height":"90vh",color:"white",textAlign:"center",padding:30,borderRadius:5},children:Object(o.jsx)("div",{className:"jumbotron jumbotron-fluid my-md-5",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"display-5",children:"Choose the link type"}),Object(o.jsx)("p",{className:"lead",children:"Allows a customized prediction for your links !"}),Object(o.jsxs)("ul",{class:"nav nav-tabs bg-light rounded border-dark pt-1 p-1",id:"myTab",role:"tablist",children:[Object(o.jsx)("li",{class:"nav-item",role:"presentation",children:Object(o.jsx)("button",{class:"nav-link active text-white bg-primary",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#twitter",type:"button",role:"tab","aria-controls":"twitter","aria-selected":"true",children:"Twitter Link"})}),Object(o.jsx)("li",{class:"nav-item pl-1",role:"presentation",children:Object(o.jsx)("button",{class:"nav-link text-white bg-primary",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#news",type:"button",role:"tab","aria-controls":"news","aria-selected":"false",children:"News Link"})})]}),Object(o.jsxs)("div",{class:"tab-content",id:"myTabContent",children:[Object(o.jsx)("div",{class:"tab-pane fade show active",id:"twitter",role:"tabpanel","aria-labelledby":"home-tab",children:Object(o.jsx)(x,{})}),Object(o.jsx)("div",{class:"tab-pane fade",id:"news",role:"tabpanel","aria-labelledby":"profile-tab",children:Object(o.jsx)(p,{})}),Object(o.jsx)("div",{class:"tab-pane fade",id:"facebook",role:"tabpanel","aria-labelledby":"contact-tab",children:Object(o.jsx)(u,{})})]})]})})})})},g=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"LEARN"})})},v=function(){return Object(o.jsx)("h1",{children:"Contact"})},f=(c(31),c.p+"static/media/logo.b51ac0da.jpg"),w=(c(37),function(){var e=Object(s.useState)(!0),t=Object(m.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded",children:[Object(o.jsx)("a",{className:"navbar-brand text-info font-weight-bolder",href:"/",children:Object(o.jsx)("img",{src:f,alt:"Logo",width:"100",height:"50",className:"vertical-align-middle"})}),Object(o.jsx)("button",{class:"custom-toggler navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":!c,"aria-label":"Toggle navigation",onClick:function(){return a(!c)},children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{class:"".concat(c?"collapse":""," navbar-collapse justify-content-end"),id:"navbarsExample09",children:[Object(o.jsxs)("a",{className:"nav-link text-dark border border-primary rounded px-md-2 mx-md-1",href:"https://github.com/Soorya001/Factorize",target:"_blank",children:["Learn More",Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",fill:"currentColor",class:"bi bi-github pb-1",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})]}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/jayasooryan-saravanan-139256188/",target:"_blank",className:"btn btn-sm btn-primary nav-link text-white mx-md-2",children:"Contact Me"})]})]})}),y=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(w,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",exact:!0,children:Object(o.jsx)(O,{})}),Object(o.jsx)(i.b,{path:"/about",exact:!0,children:Object(o.jsx)(d,{})}),Object(o.jsx)(i.b,{path:"/learn",exact:!0,children:Object(o.jsx)(g,{})}),Object(o.jsx)(i.b,{path:"/contact",exact:!0,children:Object(o.jsx)(v,{})}),Object(o.jsx)(i.a,{to:"/"})]})})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.412f4586.chunk.js.map