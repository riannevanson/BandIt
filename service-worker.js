"use strict";var precacheConfig=[["/BandIt/index.html","d1912eb1f3df390b4346e5f2120d8975"],["/BandIt/static/css/main.298d0971.css","c6d02873e4d647b16b56df4f831376c8"],["/BandIt/static/js/main.a1f8155e.js","108031ae293596764674fef542695ee9"],["/BandIt/static/media/1.7e0649d5.png","7e0649d5dcb2eb4440eb49e1c54993a6"],["/BandIt/static/media/10.47ff0f5e.png","47ff0f5eb945ec410b70979ce58301d0"],["/BandIt/static/media/11.7fa42a11.png","7fa42a11a67742bbd8278230a62c0282"],["/BandIt/static/media/12.d6cf48b5.png","d6cf48b59a4cf9e83b54f91986d19771"],["/BandIt/static/media/13.537ecf22.png","537ecf22b0f10f325225b2b711d1dbe3"],["/BandIt/static/media/2.01c68073.png","01c68073deb4007c70c34795ed74781b"],["/BandIt/static/media/3.07dac765.png","07dac765f49eb187328df7e9f04329bd"],["/BandIt/static/media/4.4c1073fd.png","4c1073fdd36152993957b50657310a37"],["/BandIt/static/media/5.8ea8f876.png","8ea8f87678f86034192887736d79839a"],["/BandIt/static/media/6.5ca37b53.png","5ca37b535d8e914276b06d66aebcf160"],["/BandIt/static/media/7.6f82ea14.png","6f82ea14d7a19666ee6b931ec4ae2085"],["/BandIt/static/media/8.cc9c252a.png","cc9c252a8820852af22dcf501c7a5a1a"],["/BandIt/static/media/9.6ea013c8.png","6ea013c85ef5f61620dce0e2b33bb138"],["/BandIt/static/media/Dislike.6cca2a5c.svg","6cca2a5c9f5a5acd3ca8a7997925741d"],["/BandIt/static/media/LOGO.a07cfc98.svg","a07cfc986f9f683f650c3f083c0572c0"],["/BandIt/static/media/LOGO1.893e82de.svg","893e82dee98120080380bb517bf300ab"],["/BandIt/static/media/Like.11b2c022.svg","11b2c022fa59aa67a692ef18dfbd36a0"],["/BandIt/static/media/TextLogoBar.fb55aaab.svg","fb55aaab21cba7cae11ab4d009c7b966"],["/BandIt/static/media/circle.925d3c81.svg","925d3c81d11032fddc20472fc075f288"],["/BandIt/static/media/gear.2de8a182.svg","2de8a182860f4c87aebff4ad9c372086"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/BandIt/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});