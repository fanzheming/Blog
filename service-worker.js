/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "89c70481b73ad69d40f324fb9cc0c211"
  },
  {
    "url": "assets/css/0.styles.a4e69676.css",
    "revision": "e6d39ed1cffff110a2642d54e7e1ad4e"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.2ebb30ca.js",
    "revision": "8f1a2178a3def7db0cad003722e8accf"
  },
  {
    "url": "assets/js/10.d1fa7b8c.js",
    "revision": "037324e8f30ce1b44a03209ad8e927dd"
  },
  {
    "url": "assets/js/11.df8f200c.js",
    "revision": "8608c19767cc5b36cb7771ce323b71aa"
  },
  {
    "url": "assets/js/12.1578b83f.js",
    "revision": "b80f59c4fcc9abe2c43eb98a2c32f8e9"
  },
  {
    "url": "assets/js/13.d0d9ea60.js",
    "revision": "fd695c2d233a2e79e1e28db886f25b06"
  },
  {
    "url": "assets/js/14.737013a2.js",
    "revision": "5d13c714c5cbe3aa8e8142586f9dae97"
  },
  {
    "url": "assets/js/15.5af1553c.js",
    "revision": "f3a79ccbbfdf79eaffb5081731ec1c9c"
  },
  {
    "url": "assets/js/16.730c9274.js",
    "revision": "2f824cfb05439feef05f0612110b1b30"
  },
  {
    "url": "assets/js/17.808875c1.js",
    "revision": "7a1a777fdbd023179831cc286e485554"
  },
  {
    "url": "assets/js/18.72be21e3.js",
    "revision": "3cf5111bc51507b0ab2e5f229175cd98"
  },
  {
    "url": "assets/js/4.63c2c9e3.js",
    "revision": "d63305df54ac7f36a2304ca9dfc7ded6"
  },
  {
    "url": "assets/js/5.72799f2d.js",
    "revision": "fd3d3ba0c6e7d90cf6b4d27d6dffcc81"
  },
  {
    "url": "assets/js/6.c5a6d2c5.js",
    "revision": "9f09ddd8c453f237541c8924fc1ce79e"
  },
  {
    "url": "assets/js/7.705dce02.js",
    "revision": "f389345e044626b596260efe23b5bc4a"
  },
  {
    "url": "assets/js/8.1af3eb19.js",
    "revision": "a2a489976b351f451b526c43cb6c3991"
  },
  {
    "url": "assets/js/9.439b8e22.js",
    "revision": "e88d92daf042be50cf4e7c2a9dc5bc1e"
  },
  {
    "url": "assets/js/app.c2f2c7ba.js",
    "revision": "56ccc8f1890d9d243e853ee143d21d38"
  },
  {
    "url": "assets/js/vendors~flowchart.0327d349.js",
    "revision": "0403b51e58c9a28ce59f8ddb2a93337b"
  },
  {
    "url": "categories/index.html",
    "revision": "f64e75c040e5697565f84ca660c226a5"
  },
  {
    "url": "categories/其它/index.html",
    "revision": "c72679115bb150a2d56e6c5267582bf1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "560f7839ff9029b61fff8dbe1375666d"
  },
  {
    "url": "head1.png",
    "revision": "7d4e3c020ee2e60093d40506c99dc09b"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "imgs/前端知识体系图.png",
    "revision": "597a602e49e86fea640cca01cfb9504e"
  },
  {
    "url": "index.html",
    "revision": "f5287945adbeabfd4586c92b69c9328c"
  },
  {
    "url": "line_bg.svg",
    "revision": "5825f033c6ff12cd1ed1f3c99dff5e4b"
  },
  {
    "url": "note/前端知识体系.html",
    "revision": "6f4ef96b20302f9663223e9ec77adca8"
  },
  {
    "url": "pg1.png",
    "revision": "f22a3387c8632b8037a2fb8579ef0ac9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "60bea9c096238dbef829d78a222c9b70"
  },
  {
    "url": "tag/index.html",
    "revision": "255b480e374914faa8074d92e7d994b3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5a64fe2503008222033fd80b453871f3"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "9abaa5444ea9ebb8935f992eac675676"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bb9cd6c376b80075e54b312c4f9fc224"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "d9322669ee3d3aa8416b331d0d4abeab"
  },
  {
    "url": "timeline/index.html",
    "revision": "2d501946e3f462beab538a6c421f6006"
  },
  {
    "url": "views/其它/markdown语法.html",
    "revision": "2b6fe93d1457302ebd246324185086e6"
  },
  {
    "url": "views/其它/小知识.html",
    "revision": "1f3c1a38957572bb079152e0a4f88bc4"
  },
  {
    "url": "views/前端/Grid布局笔记.html",
    "revision": "c15027aa7104be03128e549c892470c4"
  },
  {
    "url": "views/前端/localStorage变动监听.html",
    "revision": "2d798780e856f901ce0d3c105c6b806b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
