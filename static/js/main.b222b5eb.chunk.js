(this["webpackJsonpfrancisco-xifra"]=this["webpackJsonpfrancisco-xifra"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),a=c(7),n=c.n(a),o=(c(13),c(2)),i=(c(14),c.p+"static/media/busk.c2c17110.svg"),l=c(0),j=function(e){var t=e.link;return Object(l.jsx)("a",{href:t,alt:"Secure payments through busk.co tips",className:"linkTip",target:"_BLANK",rel:"noreferrer",children:Object(l.jsxs)("div",{className:"tipMe",children:[Object(l.jsx)("div",{className:"tipMeTexto",children:"Click here to Donate! "}),Object(l.jsx)("div",{className:"buskIcon",children:Object(l.jsx)("img",{src:i,alt:"busk.co icon",width:"35"})})]})})},d=(c(16),function(e){var t=e.canciones;return Object(l.jsxs)("div",{children:[t&&Object(l.jsx)("p",{children:"Loading Songs"}),Object(l.jsxs)("span",{className:"dots-cont",children:[" ",Object(l.jsx)("span",{className:"dot dot-1"})," ",Object(l.jsx)("span",{className:"dot dot-2"})," ",Object(l.jsx)("span",{className:"dot dot-3"})," "]})]})}),b=function(e){var t=e.link,c="https://w.soundcloud.com/player"+"?url=".concat(t)+"&color=C98C41&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false";return Object(l.jsx)("div",{className:"reproductor",children:t?Object(l.jsx)("iframe",{title:"Soundcloud",width:"100%",height:"100%",scrolling:"no",frameBorder:"no",allow:"autoplay",src:c}):Object(l.jsx)(d,{canciones:!0})})},u=c(4),h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"currentlyParagraph",children:"Find me on:"}),Object(l.jsxs)("div",{className:"iconosContainer",children:[Object(l.jsx)("a",{href:"https://instagram.com/franxifra",target:"_BLANK",rel:"noopener noreferrer",children:Object(l.jsx)(u.a,{className:"icono"})}),Object(l.jsx)("a",{href:"https://open.spotify.com/artist/6MgxRbMya8hZ7PqXT4wS2o?si=oEJW2uyVTeOmDudg5y6Rcw&dl_branch=1",target:"_BLANK",rel:"noreferrer",children:Object(l.jsx)(u.c,{className:"icono"})})," ",Object(l.jsx)("a",{href:"https://www.youtube.com/c/FranciscoXifra/featured",target:"_BLANK",rel:"noopener noreferrer",children:Object(l.jsx)(u.d,{className:"icono"})}),Object(l.jsx)("a",{href:"https://soundcloud.com/franxifra/",target:"_BLANK",rel:"noopener noreferrer",children:Object(l.jsx)(u.b,{className:"icono"})})]})]})},m=c.p+"static/media/musica.c4ed3790.svg",O=(c(17),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:m,alt:"decorative music icon",className:"musicIcon"}),Object(l.jsxs)("h1",{className:"logo",children:[Object(l.jsx)("span",{className:"logoFrancisco",children:"Francisco"})," ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"logoXifra",children:"Xifra"})]})]})}),f=c(8),p=function(e){var t=e.busking,c=e.bandera;var s="https://www.google.com/maps/search/".concat(t," ").concat(c,"/");return Object(l.jsxs)("div",{className:"locationContainer",children:[Object(l.jsx)("p",{className:"currentlyParagraph",children:"Currently busking in:"}),t?Object(l.jsx)("h2",{className:"buskingCity",children:Object(l.jsxs)("a",{href:s,target:"_BLANK",className:"mapsLink",rel:"noreferrer",children:[t," ",function(e){var t=e.toUpperCase().split("").map((function(e){return 127397+e.charCodeAt()}));return String.fromCodePoint.apply(String,Object(f.a)(t))}(c)]})}):Object(l.jsx)(d,{})]})},x=(c(18),function(e){var t=e.data,c=t.feed?t.feed.entry.slice(3):[];return!!(t.feed&&t.feed.entry.length>3)?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Next shows"}),Object(l.jsx)("div",{className:"show-container",children:c.map((function(e,t){return Object(l.jsx)("div",{className:"show",children:e.content.$t},t)}))})]}):Object(l.jsx)("div",{})});var g=function(){var e=Object(s.useState)("Alghero, Sardegna"),t=Object(o.a)(e,2),c=t[0],r=(t[1],Object(s.useState)("IT")),a=Object(o.a)(r,2),n=a[0],i=(a[1],Object(s.useState)("https://soundcloud.com/franxifra/sets/busking-2023")),d=Object(o.a)(i,2),u=d[0],m=(d[1],Object(s.useState)("https://busk.co/22427/qr")),f=Object(o.a)(m,2),g=f[0],N=(f[1],Object(s.useState)([])),v=Object(o.a)(N,2),w=v[0];return v[1],Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(O,{}),Object(l.jsx)(p,{busking:c,bandera:n}),Object(l.jsx)("iframe",{className:"video",width:"100%",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PL28qvn4LcCEs_pHWqXy4luX9l6oyyvC58",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(l.jsx)(j,{link:g}),Object(l.jsx)(b,{link:u}),Object(l.jsx)(x,{data:w,lugar:c}),Object(l.jsx)(h,{}),Object(l.jsx)(j,{link:g})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),N()}],[[19,1,2]]]);
//# sourceMappingURL=main.b222b5eb.chunk.js.map