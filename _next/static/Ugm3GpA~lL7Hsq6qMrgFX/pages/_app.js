(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),u=n("O40h"),o=n("0iUn"),l=n("sLSF"),i=n("MI3g"),c=n("a7VT"),s=n("Tit0"),p=n("8Bbg"),f=n.n(p),d=n("q1tI"),h=n.n(d),v=n("PgRs"),m=n.n(v),b=n("kpGK"),y=function(e){function t(){return Object(o.default)(this,t),Object(i.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return h.a.createElement("div",null,h.a.createElement(m.a,null,h.a.createElement("title",null,"SLN"),h.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",crossorigin:"anonymous"}),h.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),h.a.createElement(p.Container,null,h.a.createElement(t,n)),h.a.createElement(b.default,null))}}],[{key:"getInitialProps",value:function(){var e=Object(u.default)(a.a.mark(function e(t){var n,r,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,u={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:u=e.sent;case 6:return e.abrupt("return",{pageProps:u});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.a);t.default=y},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),u=r(n("+oT+")),o=r(n("UXZV")),l=r(n("/HRN")),i=r(n("WaGi")),c=r(n("ZDA2")),s=r(n("/+P4")),p=r(n("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=f(n("q1tI")),v=d(n("17x9")),m=n("Bu4q"),b=n("20a2"),y=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,i.default)(t,[{key:"getChildContext",value:function(){return{router:b.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=g(t);return h.default.createElement(w,null,h.default.createElement(n,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(a.default.mark(function e(t){var n,r,u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,m.loadGetInitialProps(n,r);case 3:return u=e.sent,e.abrupt("return",{pageProps:u});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);y.childContextTypes={router:v.default.object},t.default=y;var w=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=w;var k=m.execOnce(function(){0});function g(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return k(),r},get pathname(){return k(),t},get asPath(){return k(),n},back:function(){k(),e.back()},push:function(t,n){return k(),e.push(t,n)},pushTo:function(t,n){k();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return k(),e.replace(t,n)},replaceTo:function(t,n){k();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=g},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])}},[["GcxT",1,0]]]);