if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),d={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-082d0e8a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.753dd00c.css",revision:null},{url:"assets/index.d3c11cea.js",revision:null},{url:"index.html",revision:"fb8a89fee0ef9ceee5d48e7ff0f85707"},{url:"loading/loading.css",revision:"97fefeccd8990346f6e8ae49101507fa"},{url:"loading/loading.min.css",revision:"545e4423de4c59bc4303fc592da53790"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"d73be626256fa290bbae71d9b53ec282"},{url:"images/icon/72.png",revision:"477f2868e3df0b4bbd36fde296b86eef"},{url:"images/icon/96.png",revision:"156992f5bfd1cbf819e804ed4dee3989"},{url:"images/icon/128.png",revision:"ea397a86bf197b8ca2226f79e46f9dfe"},{url:"images/icon/144.png",revision:"7c4e10505e13a25f8b669843d381a942"},{url:"images/icon/192.png",revision:"e0d11f7e6a817e84d7c65a0168cd5912"},{url:"images/icon/512.png",revision:"51252b8fdbb6a21cb31a913d4911ebd1"},{url:"manifest.webmanifest",revision:"b4b21c2e99f4476c59456756b029ea7e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
