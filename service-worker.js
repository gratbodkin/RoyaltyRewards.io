"use strict";var precacheConfig=[["/index.html","02d3b8174c4e1d9dfdb91628738d2553"],["/static/css/main.b10930d8.css","bf0507415b5c538a2bd326adb1bc7615"],["/static/js/main.ed44dfa8.js","58f4591c04df9e310390fa57cd34375c"],["/static/media/Poppins-Bold.81873d33.woff","81873d33ae530a7a1beed1ec45d0fab7"],["/static/media/Poppins-Bold.a4388a34.woff2","a4388a3476c182dda53a535f11348f42"],["/static/media/Poppins-Bold.a98acb50.eot","a98acb5010302065d6966495359b1af2"],["/static/media/Poppins-Bold.bb1e75e2.ttf","bb1e75e2fbcfd9be04dededb41cece6a"],["/static/media/Poppins-Light.0caa2667.woff2","0caa2667cc5997bf6e54e86a6f7e0697"],["/static/media/Poppins-Light.a67ce206.ttf","a67ce2065ea6d7b3be397e9800f2cdac"],["/static/media/Poppins-Light.af7b7661.eot","af7b766154a0c6d892ff813b45b4655d"],["/static/media/Poppins-Light.ceaf8c4d.woff","ceaf8c4de9ee0f8530fddaa4a76a4df9"],["/static/media/Poppins-Medium.322761ea.ttf","322761eacde6d5bf51c6ad9b946fddc4"],["/static/media/Poppins-Medium.896fb06c.woff","896fb06c7b3bead35bb2fbe6be7d8b54"],["/static/media/Poppins-Medium.c9b71db7.woff2","c9b71db74c678649db55e9ff2a6ae4a9"],["/static/media/Poppins-Medium.dedb4980.eot","dedb4980ba19642c0a1ffc8c7ac5df15"],["/static/media/Poppins-Regular.1ed9a698.woff","1ed9a698de5b1b3328ff71950731a500"],["/static/media/Poppins-Regular.4702686f.woff2","4702686fb1679679583db2b0655ce47b"],["/static/media/Poppins-Regular.b400e683.ttf","b400e683d795d2d3e6085ec181b02784"],["/static/media/Poppins-Regular.e54f6a91.eot","e54f6a914cfdad667f28e87396234bda"],["/static/media/Poppins-SemiBold.16426925.woff","164269256f0c2b8f3f3e7aa19a8edeb4"],["/static/media/Poppins-SemiBold.97933fdf.ttf","97933fdf508c009aed802530d1daf3d0"],["/static/media/Poppins-SemiBold.9af4a50c.woff2","9af4a50c2a5a672c4d01d9ab50e04176"],["/static/media/Poppins-SemiBold.d7ff87b1.eot","d7ff87b101632ea96eae90aa476e10a9"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.acf3dcb7.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/footer-bg.478941a7.png","478941a7be5cbc368f547a07d88471a6"],["/static/media/graph-dark-a.71b0df74.png","71b0df74adf1679b88060736ef8b56fb"],["/static/media/graph-dark-b.b4745d5c.png","b4745d5c83f9da967e97d51fee48fc10"],["/static/media/graph-dark-c.98575aaa.png","98575aaa0bb0af442e95009d601e0d1a"],["/static/media/grat.9b5fbb64.jpg","9b5fbb64f417b46e73cd4a69dbe7c39c"],["/static/media/header-bottom-light.eb0e0513.png","eb0e0513dcb2f6bad8942a3bc8f88313"],["/static/media/header-bottom.63a4ba9c.png","63a4ba9c6a34d99d5843333ad8ba24b2"],["/static/media/icomoon.9d786ac1.svg","9d786ac1cf3f37f4dc40003e1170e696"],["/static/media/joshua.f0644938.jpg","f0644938e5ada3377b0321d568dec50d"],["/static/media/logo.ee7cd8ed.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["/static/media/particle-left.333c30ef.png","333c30efc43224429e3177cdf027b4c2"],["/static/media/particle-right.80f46b51.png","80f46b51e3cbd76b8c8d34f95edca581"],["/static/media/piers.d3f65baa.jpg","d3f65baa4abc1eb4a081a29c7e9bd058"],["/static/media/themify.2c454669.eot","2c454669bdf3aebf32a1bd8ac1e0d2d6"],["/static/media/themify.a1ecc3b8.woff","a1ecc3b826d01251edddf29c3e4e1e97"],["/static/media/themify.cba68f98.svg","cba68f986e60df8c74f4a53c3e39595c"],["/static/media/themify.e23a7dca.ttf","e23a7dcaefbde4e74e263247aa42ecd7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});