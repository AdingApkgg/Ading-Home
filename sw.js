if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const c=e=>s(e,f),d={module:{uri:f},exports:o,require:c};i[f]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f8357146"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-5813445a.css",revision:null},{url:"assets/index-d3b6fffc.js",revision:null},{url:"index.html",revision:"0741db5e023306ef3d3049b87e7e75dd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"d73be626256fa290bbae71d9b53ec282"},{url:"images/icon/72.png",revision:"477f2868e3df0b4bbd36fde296b86eef"},{url:"images/icon/96.png",revision:"156992f5bfd1cbf819e804ed4dee3989"},{url:"images/icon/128.png",revision:"ea397a86bf197b8ca2226f79e46f9dfe"},{url:"images/icon/144.png",revision:"7c4e10505e13a25f8b669843d381a942"},{url:"images/icon/192.png",revision:"e0d11f7e6a817e84d7c65a0168cd5912"},{url:"images/icon/512.png",revision:"51252b8fdbb6a21cb31a913d4911ebd1"},{url:"manifest.webmanifest",revision:"82fbbe36b9b9fd13f45adc7808f2308f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
