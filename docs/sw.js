var serviceWorkerOption = {
  "assets": [
    "/assets/fonts/Roboto-Medium.woff",
    "/assets/fonts/Roboto-Medium.eot",
    "/assets/fonts/Roboto-Medium.ttf",
    "/assets/fonts/ProximaNovaCond-Regular.eot",
    "/assets/fonts/ProximaNovaCond-Regular.woff",
    "/assets/fonts/ProximaNovaCond-Regular.ttf",
    "/main.css",
    "/main.js",
    "/list.html",
    "./img/content/user-photo.png",
    "./img/content/document.svg",
    "./img/cover/add-tel.svg",
    "./img/cover/avatar.jpg",
    "./img/cover/cover.jpg",
    "./img/footer/AppStore.svg",
    "./img/footer/fb.svg",
    "./img/footer/GooglePlay.svg",
    "./img/footer/gh.svg",
    "./img/footer/inst.svg",
    "./img/header/arrow_left.png",
    "./img/header/open-menu.svg",
    "./img/header/sprite.svg",
    "/README.md",
    "./img/header/photo.jpg"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=["app-static-v6"];self.addEventListener("install",(function(e){e.waitUntil(caches.open("app-static-v6").then((function(e){return e.addAll(["/index.html","/main.js"])})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.filter((function(e){return e.startsWith("app-static-")&&!n.includes(e)})).map((function(e){return caches.delete(e)})))})))})),self.addEventListener("fetch",(function(e){var t=new URL(e.request.url);t.origin!==location.origin||"/"!==t.pathname?e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)}))):e.respondWith(caches.match("/index.html"))})),self.addEventListener("message",(function(e){"skipWaiting"===e.data.action&&self.skipWaiting()}))}]);