(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),i=c.n(s),r=c(9),o=c(2),j=c(4),l=c.n(j),u=c(10),d=c(6);function m(e){return"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(e)}var b=c(0),h=function(e){var t=e.movie;return console.log("Movie=",t),Object(b.jsxs)(r.b,{to:"/movie/".concat(t.id),className:"movie-item",children:[Object(b.jsx)("img",{className:"movie-item__image",src:"".concat(t.poster_path?m(t.poster_path):"/noposter.jpeg"),alt:"".concat(t.title)}),Object(b.jsx)("div",{className:"movie-item__vote",children:t.vote_average}),Object(b.jsxs)("p",{className:"movie-item__title",children:["Title: ",t.title]})]})},v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return console.log("data",c),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("h1",{className:"home__title",children:"Popular \xa0\xa0 films"}),Object(b.jsx)("div",{className:"home__container",children:c.map((function(e){return Object(b.jsx)(h,{movie:e},e.id)}))})]})},f=function(e){var t=e.onSumbit,c=Object(n.useState)(""),a=Object(d.a)(c,2),s=a[0],i=a[1];return Object(b.jsx)("div",{className:"search-bar",children:Object(b.jsxs)("form",{className:"search-bar__form",onSubmit:function(e){e.preventDefault(),s&&(t(s),i(""))},children:[Object(b.jsx)("input",{value:s,onChange:function(e){i(e.currentTarget.value)},className:"search-bar__input"}),Object(b.jsx)("button",{className:"search-bar__button",type:"submit",children:Object(b.jsx)("span",{children:"Search"})})]})})},p=function(){var e=Object(o.f)(),t=Object(o.g)().search,c=new URLSearchParams(t).get("query")||"",a=Object(n.useState)(c),s=Object(d.a)(a,2),i=s[0],r=s[1],j=Object(n.useState)([]),m=Object(d.a)(j,2),v=m[0],p=m[1];Object(n.useEffect)((function(){i&&function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&query=".concat(t,"&=en-US&page=1&include_adult=false"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,console.log("result",n),p(n.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(i)}),[i]);return Object(b.jsxs)("div",{className:"movies",children:[Object(b.jsx)(f,{onSumbit:function(t){r(t),e.push("/movies/?query=".concat(t))}}),Object(b.jsx)("div",{className:"movies__container",children:v.map((function(e){return Object(b.jsx)(h,{movie:e},e.id)}))})]})},O=function(){return Object(b.jsx)("div",{children:"About PAGE"})},x=function(e){var t=e.id,c=Object(n.useState)([]),a=Object(d.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("use Effect! funct"),e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&language=en-US"));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log("result cast:",n),i(n.cast);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(b.jsx)("div",{className:"movie-cast",children:s.filter((function(e){return null!==e.profile_path})).map((function(e){return Object(b.jsxs)("div",{className:"movie-cast__cart",children:[Object(b.jsx)("p",{className:"movie-cast__name",children:e.original_name}),Object(b.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(e.profile_path),alt:e.original_name,className:"movie-cast__image"})]},e.id)}))})},_=function(e){var t=e.id,c=Object(n.useState)([]),a=Object(d.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("use Effect! funct"),e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&language=en-US"));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log("result review:",n.results),i(n.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(b.jsx)("div",{className:"movie-review",children:Object(b.jsx)("div",{className:"movie-review__container",children:s.map((function(e){return Object(b.jsxs)("div",{className:"movie-review__card",children:[Object(b.jsx)("p",{className:"movie-review__username",children:e.author_details.username}),Object(b.jsx)("div",{className:"movie-review__text",children:e.content})]},e.id)}))})})},g=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(o.h)();return console.log("id",s.id),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("use Effect! funct"),e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(s.id,"?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&language=en-US"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s.id]),console.log("data=",c),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"movie-info",children:[Object(b.jsx)("img",{className:"movie-info__image",src:m(c.poster_path),alt:c.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"movie-info__title",children:c.title}),Object(b.jsx)("p",{className:"movie-info__text",children:c.overview}),Object(b.jsxs)("div",{className:"movie-info__information",children:[Object(b.jsxs)("p",{children:["Runtime: ",c.runtime]}),Object(b.jsxs)("p",{children:["Rating: ",c.vote_average]})]}),Object(b.jsx)("a",{className:"movie-info__homepage",href:c.homepage,target:"_blank",rel:"noopener noreferrer",children:c.homepage}),Object(b.jsxs)("div",{className:"movie-info__more",children:[Object(b.jsx)(r.b,{className:"movie-info__cast navigation__link",to:"/movie/".concat(s.id,"/cast"),children:Object(b.jsx)("span",{children:"show \xa0 \xa0 cast"})}),Object(b.jsx)(r.b,{className:"movie-info__revies navigation__link",to:"/movie/".concat(s.id,"/reviews"),children:Object(b.jsx)("span",{children:"show \xa0 \xa0 reviews"})})]})]})]}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/movie/".concat(s.id,"/cast"),children:Object(b.jsx)(x,{id:s.id})}),Object(b.jsx)(o.a,{path:"/movie/".concat(s.id,"/reviews"),children:Object(b.jsx)(_,{id:s.id})})]})]})},N=function(){var e=Object(o.g)();return Object(b.jsxs)("div",{className:"navigation",children:[Object(b.jsx)(r.b,{className:"navigation__link",to:"/",children:Object(b.jsx)("span",{children:" Home"})}),Object(b.jsx)(r.b,{className:"navigation__link",to:"/movies",children:Object(b.jsx)("span",{children:"Movies"})}),"/"!==e.pathname&&Object(b.jsx)(r.b,{className:"navigation__link",to:"/",children:Object(b.jsx)("span",{children:"Back"})})]})},w=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(N,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,children:Object(b.jsx)(v,{})}),Object(b.jsx)(o.a,{path:"/movies",children:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/about",children:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{path:"/movie/:id",children:Object(b.jsx)(g,{})})]})]})};c(31);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.fb419058.chunk.js.map