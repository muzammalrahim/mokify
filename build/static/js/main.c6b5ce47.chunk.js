(this.webpackJsonpmokify=this.webpackJsonpmokify||[]).push([[0],{21:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(13),i=n.n(a),o=(n(44),n(45),n(14)),l=n(15),r=n(17),d=n(16),j=(n(21),n(77)),h=n.p+"static/media/logo.6be71c2c.svg",m=n(12),u=n(0);function b(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"top-bar pt-1",children:Object(u.jsxs)("p",{children:["Luo oma kokoelmasi ja olet aina ajan tasalla sen arvosta!",Object(u.jsx)("span",{children:" Rekister\xf6idy t\xe4st\xe4"})]})}),Object(u.jsxs)(j.a,{className:"navbar-custom pt-5 col-md-12 col-sm-12 col-xs-12",style:{position:"fixed",top:"0",zIndex:"10",backgroundColor:"rgba(255,255,255,1)"},collapseOnSelect:!0,expand:"lg",children:[Object(u.jsx)(j.a.Brand,{className:"custom-width col-md-3 col-sm-3 col-xs-3",children:Object(u.jsx)("div",{className:"header container-fluid ",children:Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:h,alt:"mukify"})})})}),Object(u.jsx)(j.a.Toggle,{className:"mr-5","aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{className:"justify",id:"responsive-navbar-nav",children:Object(u.jsxs)("div",{className:"tabs",children:[Object(u.jsx)("a",{href:"",children:Object(u.jsx)(m.b,{})}),Object(u.jsx)("a",{href:"",children:"Etsi tai tunnista valokuvasta"}),Object(u.jsx)("a",{href:"",children:"Kirjaudu sis\xe4\xe4n"}),Object(u.jsx)("button",{className:"tab-btn ml-2",children:"Rekister\xf6idy"})]})})]})]})}var f=n.p+"static/media/footerLogo.fee7443d.svg",x=n(74),v=n(75);function O(){return Object(u.jsxs)("div",{className:"footer-main mt-5",children:[Object(u.jsx)("div",{className:"logo container",children:Object(u.jsx)(x.a,{children:Object(u.jsx)("img",{className:"mt-5 mb-5",src:f,alt:"footer-logo"})})}),Object(u.jsxs)("div",{className:"links container col-sm-12",children:[Object(u.jsxs)(v.a,{className:"ml-2",children:[Object(u.jsxs)("div",{className:"col-sm-2",children:[Object(u.jsx)("p",{children:"Suosituimmat"}),Object(u.jsx)("a",{href:"",children:"Etusivu"}),Object(u.jsx)("a",{href:"",children:"Muumit"}),Object(u.jsx)("a",{href:"",children:"Merkit"}),Object(u.jsx)("a",{href:"",children:"Kokoelmat"}),Object(u.jsx)("a",{href:"",children:"Arabia"})]}),Object(u.jsxs)("div",{className:"col-sm-2",children:[Object(u.jsx)("p",{children:"Merkit"}),Object(u.jsx)("a",{href:"",children:"Arabia"}),Object(u.jsx)("a",{href:"",children:"Iittala"}),Object(u.jsx)("a",{href:"",children:"Muumimukit"}),Object(u.jsx)("a",{href:"",children:"Arabia"}),Object(u.jsx)("a",{href:"",children:"Iittala"}),Object(u.jsx)("a",{href:"",children:"Muumimukit"})]}),Object(u.jsxs)("div",{className:"col-sm-2",children:[Object(u.jsx)("p",{children:"Valitse kieli"}),Object(u.jsx)("a",{href:"",children:"In english"}),Object(u.jsx)("a",{href:"",children:"Svenska"})]}),Object(u.jsxs)("div",{className:"col-sm-2",children:[Object(u.jsx)("p",{children:"Kokoelmat.fi"}),Object(u.jsx)("a",{href:"",children:"Tietoa meist\xe4"}),Object(u.jsx)("a",{href:"",children:"Tietosuoja ja ev\xe4steet"}),Object(u.jsx)("a",{href:"",children:"Ota yhteytt\xe4"})]}),Object(u.jsxs)("div",{className:"col-sm-4",children:[Object(u.jsx)("p",{children:"Tilaa Kokoelmien uutiskirje"}),Object(u.jsx)("div",{className:"footer-search pl-4 pr-4 pt-1 pb-1",children:Object(u.jsxs)("p",{children:["Anna s\xe4hk\xf6postiosoitteesi",Object(u.jsx)("span",{children:Object(u.jsx)(m.a,{})})]})})]})]}),Object(u.jsx)(v.a,{className:"ml-2 mt-5",children:Object(u.jsx)("p",{className:"copyright-text",children:"Copyright Kokoelmat.fi 2021"})})]})]})}var g=n.p+"static/media/settings.7ff54288.svg",p=n.p+"static/media/down.a824983f.svg";n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p;n.p;var A=n(23),k=n.n(A),N=n.p+"static/media/rightOffer.89e396fb.svg",w=n(76),y=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={data:[],offset:0,moreData:[],apiLength:0},e.url=function(){return"".concat("https://api.mukify.com/graphiql/",'?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ').concat(e.state.offset,", first:").concat(e.state.apiLength<=8&&e.state.apiLength>=1?e.state.apiLength:8,"){totalCount edges{node{id\n        basicInfo {\n          name\n          shortDescription\n          description\n        }\n        additionalInfo {\n          heading\n          numRows\n          numColumns\n          rows {\n            objectType\n            objectId\n            columns\n            id\n          }\n        }\n        itemImagesSet {\n          smallThumbUrl\n          mediumThumbUrl\n          fullsizeUrl\n        }}}}}")},e.getData=function(){var t=e.url();k.a.get(t).then((function(t){var n,c;console.log(null===t||void 0===t||null===(n=t.data)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.localizedFlatItem.totalCount),e.setState({data:t.data.data.localizedFlatItem.edges,offset:e.state.offset+1,apiLength:t.data.data.localizedFlatItem.totalCount-8})})).catch((function(e){console.log(e.message)}))},e.loadMore=function(){var t=e.url();Math.ceil(window.innerHeight+document.documentElement.scrollTop)===document.scrollingElement.scrollHeight&&e.state.apiLength>0&&k.a.get(t).then((function(t){var n=e.state.moreData,c=t.data.data.localizedFlatItem.edges,s=n.concat(c);e.setState({moreData:s,offset:e.state.offset+1,apiLength:e.state.apiLength-8})})).catch((function(e){console.log(e.message)}))},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.loadMore)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.loadMore)}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.moreData,c=e.apiLength;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v.a,{children:t.map((function(e){var t,n,c,s,a,i;return Object(u.jsxs)(x.a,{xs:12,lg:3,md:3,sm:6,children:[Object(u.jsx)(w.a,{className:"product-image",src:null===e||void 0===e||null===(t=e.node)||void 0===t||null===(n=t.itemImagesSet[0])||void 0===n?void 0:n.mediumThumbUrl}),Object(u.jsx)("p",{className:"product-text",children:null===e||void 0===e||null===(c=e.node)||void 0===c||null===(s=c.basicInfo)||void 0===s?void 0:s.shortDescription}),Object(u.jsx)("p",{className:"product-subtext ",children:null===e||void 0===e||null===(a=e.node)||void 0===a||null===(i=a.basicInfo)||void 0===i?void 0:i.name}),Object(u.jsx)("p",{className:"product-price",children:e.node.additionalInfo[0].rows[0].columns[0]})]},e.node.id)}))}),Object(u.jsx)("div",{className:"products-offers container mt-5 mb-5 col-sm-12 col-lg-12",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"left-offer mt-5 mb-5 pt-5 pb-5 pl-5 col-sm-12 col-xs-12 col-md-12 col-lg-6",children:[Object(u.jsx)("h5",{style:{fontWeight:"800"},children:"Tulossa!"}),Object(u.jsx)("h2",{style:{fontWeight:"400"},children:"Tunnista muumimukit suoraan valokuvasta!"}),Object(u.jsx)("h5",{className:"pb-3",style:{fontWeight:"600"},children:"Aloita kokoelmasi ker\xe4\xe4minen valokuvaamalla olemassa olevat aarteesi."}),Object(u.jsx)("button",{children:"Kokeile"})]}),Object(u.jsx)("div",{className:"right-offer mt-5 mb-5 col-md-12 col-sm-12 col-xs-12 col-lg-6",children:Object(u.jsx)("img",{className:"right-offer-img",src:N,alt:"right-offer"})})]})}),Object(u.jsx)(v.a,{children:n.map((function(e){var t,n,c,s,a,i;return Object(u.jsxs)(x.a,{xs:12,lg:3,md:3,sm:6,children:[Object(u.jsx)(w.a,{className:"product-image",src:null===e||void 0===e||null===(t=e.node)||void 0===t||null===(n=t.itemImagesSet[0])||void 0===n?void 0:n.mediumThumbUrl}),Object(u.jsx)("p",{className:"product-text",children:null===e||void 0===e||null===(c=e.node)||void 0===c||null===(s=c.basicInfo)||void 0===s?void 0:s.shortDescription}),Object(u.jsx)("p",{className:"product-subtext ",children:null===e||void 0===e||null===(a=e.node)||void 0===a||null===(i=a.basicInfo)||void 0===i?void 0:i.name}),Object(u.jsx)("p",{className:"product-price",children:e.node.additionalInfo[0].rows[0].columns[0]})]},e.node.id)}))}),c>0&&Object(u.jsxs)("div",{className:"loading mt-5 mb-5 container",children:[Object(u.jsx)("img",{className:"mt-5 mb-4 spinner-loader",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFpSURBVHgB7VY9boMwFH4EhkgZytgxR+gROsHMDdoTtAzAGGdC/CncoL1BuiPU9ga5Qm5AByQWoO9VaQXUhhgpWz7JMvb7td+PAZBAFEW7MAzfZGQ0kMOdoihSAgu4MHoG4jh+wmvYwEyQfBAEz0IDbdvS+ZnICNILECBJkg3SU/zUhQYcxyGGrchIXdd2WZYWT3nTNAzH1vM81qVxI4bKiYk8enRd9xVGgFn1gIF/4Sn/d4LOSRgKWejxB0yAeMgRnvIrzoKCQdrjffdSS9M0y7btQkaR7/trVVV3A12HBeLYs6goRVVVOkhiuVwWQ0dxvYYrZoMqlAI3xUc8xCuicyuZeguVP2bFPUyAeIhX1CBVnvJO40q7NMaYbprmbZ7nfymcZdnBMIyfLowzrT+FJxjrioTVarVHj9PhPvUuOHXh0fcAFX/hZI81LryOG97+rxGsK5gNvOd3GjIyF3+Tpf4qTk/mUUbmG7AHqicgnZbeAAAAAElFTkSuQmCC",alt:"loading"}),Object(u.jsx)("p",{children:"Scrollaa ladataksesi lis\xe4\xe4"}),Object(u.jsxs)("p",{children:["mukeja (",c,")"]})]})]})}}]),n}(c.Component),I=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"home-main",children:[Object(u.jsx)("div",{class:"header=section",children:Object(u.jsx)(b,{})}),Object(u.jsxs)("div",{className:"heading-home text-center mb-5",children:[Object(u.jsx)("h1",{children:"Mik\xe4 on"}),Object(u.jsx)("h1",{children:"muumikokoelmani arvo?"}),Object(u.jsx)("button",{className:"heading-home-btn mt-3",children:"Tee oma kokoelma"})]}),Object(u.jsxs)("div",{className:"filters container col-sm-12",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"custom-width filters-left col-sm-6 col-xs-6",children:Object(u.jsxs)("p",{children:["Rajaa mukeja",Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:g})})]})}),Object(u.jsx)("div",{className:"custom-width filters-right col-sm-6 col-xs-6",children:Object(u.jsxs)("p",{className:"text-right",children:["Uusin ensin"," ",Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:p})})]})})]}),Object(u.jsx)("hr",{})]}),Object(u.jsx)("div",{className:"products container mt-5 col-sm-12",children:Object(u.jsx)(y,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(O,{})})]})}}]),n}(c.Component),S=n(37),M=n(4);var T=function(){return Object(u.jsx)(S.a,{children:Object(u.jsxs)(M.d,{children:[Object(u.jsx)(M.b,{exact:!0,path:"/",component:I}),Object(u.jsx)(M.a,{from:"/home",to:"/"})]})})},C=(n(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};n(71);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}(),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.c6b5ce47.chunk.js.map