(this["webpackJsonphw-23-redux-intro"]=this["webpackJsonphw-23-redux-intro"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),s=a.n(c),i=(a(28),a(29),a(3)),o=a.p+"static/media/fletcher_homepage.ca4082a3.png",r=a(1),l=function(){return Object(r.jsxs)("div",{className:"home-page",children:[Object(r.jsx)("img",{className:"home-pic",src:o,alt:"fletcher"}),Object(r.jsx)("h1",{children:"Buenos Tardes, Raymondo!"})]})},j=a(10),h=(a(31),a(8)),d=a(22),m=a(14),u=a(23),p=a.p+"static/media/Gentlemen.cbf05b61.jpg",b=a.p+"static/media/the-coach.56b5da8a.jpg",O=[{name:"The Coach",photo:b,nickname:"@I_am_the_coach",date:(new Date).toLocaleString(),text:"Kids stab, girls shout, boys punch. Grown-ups fight with their heads!",image:p}],x={posts:[]},f=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add-post":return Object(m.a)(Object(m.a)({},e),{},{posts:O});case"new-post":return Object(m.a)(Object(m.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[t.payload])});default:return e}})),g=a.p+"static/media/mickey.a3e8c77d.jpg",v=a.p+"static/media/raymond.09ab1b03.jpg",y=a.p+"static/media/fletcher.408c0865.jpg",k=a.p+"static/media/rosalind.8f60b061.jpg",N=a.p+"static/media/dry-eye.057f8ab5.jpg",w={name:"Mickey Pearson",photo:g,nickname:"@theboss"},S={name:"Raymond Smith",photo:v,nickname:"@Raymond_S"},C={name:"The Coach",photo:b,nickname:"@I_am_the_coach"},F={name:"Fletcher",photo:y,nickname:"@Fletchermundo"},R={name:"Rosalind Pearson",photo:k,nickname:"@Rosalind"},E={name:"Dry Eye",photo:N,nickname:"@Dry-eye"},P=function(e){var t=Object(h.b)(),a=Object(n.useState)(),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(),l=Object(j.a)(o,2),d=l[0],m=l[1],u=Object(n.useState)(),p=Object(j.a)(u,2),b=p[0],O=p[1],x=Object(n.useState)(),f=Object(j.a)(x,2),g=f[0],v=f[1],y=Object(n.useState)(),k=Object(j.a)(y,2),N=k[0],P=k[1];return Object(r.jsxs)("form",{className:"input-form",children:[Object(r.jsxs)("div",{className:"input-box",children:[Object(r.jsxs)("select",{className:"author-choice",value:s,onChange:function(e){i(e.target.value),function(e){if("Mickey Pearson"===e)O(w.nickname),m(w.photo);else if("Raymond Smith"===e)O(S.nickname),m(S.photo);else if("The Coach"===e)O(C.nickname),m(C.photo);else if("Fletcher"===e)O(F.nickname),m(F.photo);else if("Rosalind Pearson"===e)O(R.nickname),m(R.photo);else{if("Dry Eye"!==e)return null;O(E.nickname),m(E.photo)}}(e.target.value)},children:[Object(r.jsx)("option",{selected:!0,value:"Select author",children:"Select author"}),Object(r.jsx)("option",{value:w.name,children:"Mickey Pearson"}),Object(r.jsx)("option",{value:S.name,children:"Raymond Smith"}),Object(r.jsx)("option",{value:C.name,children:"Coach"}),Object(r.jsx)("option",{value:F.name,children:"Fletcher"}),Object(r.jsx)("option",{value:R.name,children:"Rosalind"}),Object(r.jsx)("option",{value:E.name,children:"Dry Eye"})]}),Object(r.jsx)("input",{className:"user-input",id:"link-input",type:"text",placeholder:"Enter the image link here",onChange:function(e){P(e.target.value)}}),Object(r.jsx)("textarea",{className:"user-input",id:"message-input",placeholder:"Write your message here...",cols:"30",rows:"7",onChange:function(e){v(e.target.value)}})]}),Object(r.jsx)("div",{className:"button flex",children:Object(r.jsx)("button",{className:"submit-button",onClick:function(e){e.preventDefault(),t({type:"new-post",payload:{photo:d,name:s,nickname:b,text:g,image:N}}),document.getElementById("link-input").value="",document.getElementById("message-input").value=""},children:"Add Post"})})]})},_=(a(35),function(e){var t=Object(h.c)((function(e){return e.posts}));return Object(r.jsx)(r.Fragment,{children:t.map((function(e){return Object(r.jsxs)("div",{className:"post-container",children:[Object(r.jsx)("div",{className:"user-avatar",children:Object(r.jsx)("img",{src:e.photo,alt:"avatar"})}),Object(r.jsxs)("div",{className:"post-body",children:[Object(r.jsxs)("div",{className:"user-info",children:[Object(r.jsx)("p",{className:"user-name",children:e.name}),Object(r.jsx)("p",{className:"user-nickname",children:e.nickname}),Object(r.jsx)("p",{className:"post-date",children:e.date})]}),Object(r.jsxs)("div",{className:"post-content",children:[Object(r.jsx)("p",{className:"post-text",children:e.text}),Object(r.jsx)("img",{className:"post-image",src:e.image,alt:"post-pic"})]})]})]})}))})});var D=function(){return Object(r.jsx)("main",{className:"main-block",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/hw-23-redux-intro/",exact:!0,children:Object(r.jsx)(l,{})}),Object(r.jsxs)(i.a,{path:"/hw-23-redux-intro/feed",children:[Object(r.jsx)(P,{}),Object(r.jsx)(_,{})]})]})})},I=a(11),T=[{to:"/hw-23-redux-intro/",label:"Home"},{to:"/hw-23-redux-intro/feed",label:"Feed"}],B=function(){return Object(r.jsx)("nav",{className:"navigation",children:Object(r.jsx)("ul",{className:"flex",children:T.map((function(e){return Object(r.jsx)("li",{className:"navigation-item",children:Object(r.jsx)(I.b,{exact:!0,to:e.to,children:e.label})},e.to)}))})})};var L=function(){var e=Object(h.b)();return Object(n.useEffect)((function(){e({type:"add-post"})}),[e]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"header flex",children:Object(r.jsx)(B,{})}),Object(r.jsx)("main",{className:"app-content",children:Object(r.jsx)(D,{})})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};s.a.render(Object(r.jsx)(I.a,{children:Object(r.jsx)(h.a,{store:f,children:Object(r.jsx)(L,{})})}),document.getElementById("root")),M()}},[[38,1,2]]]);
//# sourceMappingURL=main.05ce743e.chunk.js.map