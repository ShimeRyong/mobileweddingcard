'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/font/KoPubWorldBatang-Bold.ttf": "4b759a6d60511b54f8e123d7c0a11146",
"assets/asset/font/KoPubWorldBatang-Light.ttf": "3a73a481ddc3e93d5d2a5d6dd23c7691",
"assets/asset/font/KoPubWorldBatang-Medium.ttf": "7a1fb8dfef15428e23e94b235587075c",
"assets/asset/img/calendar/march.jpg": "92e60790f843d7cc7e7d9aee976fc78a",
"assets/asset/img/contact/contactbutton.png": "47411b20955efce939207765d235558e",
"assets/asset/img/contact/kakaosharebutton.png": "3744c53eec34ad2ef15153512e7795c2",
"assets/asset/img/contact/sharelinkbutton.png": "29d0bd13fbd71d7e98278f1e46cfa0a5",
"assets/asset/img/gallery/0.jpg": "a5f26375d2814c77a78b3a9a1fe2e175",
"assets/asset/img/gallery/1.jpg": "74cb8cccc718e9471252c5f44ae0b404",
"assets/asset/img/gallery/10.jpg": "22d2d9b3e07fd5b50e1ee681ff0d10a7",
"assets/asset/img/gallery/11.jpg": "66c6ae070b7b3ff2064409fef4f15240",
"assets/asset/img/gallery/12.jpg": "01528a3532240a4f4ff4016f20c685c9",
"assets/asset/img/gallery/13.jpg": "2f4b0d415ea3bf17e70a78c8cd194625",
"assets/asset/img/gallery/14.jpg": "1fdcf2d10233aeb670b9589ee3815738",
"assets/asset/img/gallery/15.jpg": "10336ef27a9d940928c967a78aeaf701",
"assets/asset/img/gallery/16.jpg": "83b1b07a0664e96942ccfc870463923e",
"assets/asset/img/gallery/17.jpg": "db79d79bf4ade09a34d02f5fcf1b3baa",
"assets/asset/img/gallery/18.jpg": "777f376fd639418920d686133e874e51",
"assets/asset/img/gallery/19.jpg": "b7dc15cc0eb7c6e7a9e2b11e8b1349b3",
"assets/asset/img/gallery/2.jpg": "d6aac25f0a5909b412bc4c56639470b7",
"assets/asset/img/gallery/20.jpg": "6ae5d33aeb17250ddcb9ebfd372f3df6",
"assets/asset/img/gallery/21.jpg": "d3fc8be00e6a09836b9007dbaadd7d65",
"assets/asset/img/gallery/22.jpg": "ad0c4c93e8866e2594216ddd594f04fd",
"assets/asset/img/gallery/23.jpg": "ea55f565ead0f5b838a48fb742db4001",
"assets/asset/img/gallery/3.jpg": "27219e1aed06c79f51895b2f994ceba8",
"assets/asset/img/gallery/4.jpg": "c63482e6c6330f2aea01cfa8167bf3ca",
"assets/asset/img/gallery/5.jpg": "da037c480a1c7c20bc0b66a53aa1bf2a",
"assets/asset/img/gallery/6.jpg": "ac68369a75b9a2f6ac3c06f5a62f11db",
"assets/asset/img/gallery/7.jpg": "8fae9616b42e1e39ef31f11759d2dd52",
"assets/asset/img/gallery/8.jpg": "4bfa2b918a624bfde064ff92e0034429",
"assets/asset/img/gallery/9.jpg": "c99571d68d88dd5b07147316875471fb",
"assets/asset/img/infomation/introtext.jpg": "12438b16b94589604433fcd1d18ad7b5",
"assets/asset/img/infomation/lineimg.png": "8805def276531d5f63b732b2b89cefc4",
"assets/asset/img/infomation/nameText.jpg": "b6f048b3651a69b7fb8d850519d2bdc9",
"assets/asset/img/infomation/parkinginfomation.jpg": "365bbb611d8577e008e5393bb6c676f3",
"assets/asset/img/location/copybutton.png": "9439c288a63c9439c7cc09ea5cf005dd",
"assets/asset/img/location/howtocome.jpg": "0665a508a31f26209fd9d9596f7fcb89",
"assets/asset/img/location/kakaomapicon.png": "3df8f5d53a77af21837d68c09103bf53",
"assets/asset/img/location/navermap.png": "996a4caa1142e80460acd7c5e44f9e8d",
"assets/asset/img/location/navermapicon.png": "8737a0d5cb0d360227b1493133d460ef",
"assets/asset/img/location/thelinkhotelmap.png": "5ce10645d7166bc6b430151c06b5a87c",
"assets/asset/img/title/ending.jpg": "d34c98d4f7c7d768418612d9f8132ddf",
"assets/asset/img/title/middlepage.jpg": "889cec926aa1fe851361944033ac73cd",
"assets/asset/img/title/title.jpg": "56246745d07f7cc48fd2c63d5b79a428",
"assets/AssetManifest.bin": "5a7f93a96db4b66c7855778c9c7858a0",
"assets/AssetManifest.bin.json": "7c4712e6edd827195a700136d73b666d",
"assets/AssetManifest.json": "ec5f8434623e170e7b32ee3004ce3f93",
"assets/FontManifest.json": "713e1849168006d724c0815fe13604cb",
"assets/fonts/MaterialIcons-Regular.otf": "1c26451afb9df8aac0239f60efee3d2b",
"assets/NOTICES": "9db9a0b844e671f849758f42f1b86856",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "afad849d940b81ebe2c60e73a958546f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1a40dde4b47e04c6c8dcc677be216a6e",
"/": "1a40dde4b47e04c6c8dcc677be216a6e",
"main.dart.js": "ecd62cf2e73859071654b0f29c1d9e92",
"manifest.json": "a2c9c7bb2362d8f0a4351caa51c9399d",
"splash/img/dark-1x.png": "afdc0e73c506fc7d5d34aa9ea7d65524",
"splash/img/dark-2x.png": "015135d59dd2f1e6fe0048d58aa0028a",
"splash/img/dark-3x.png": "a66f392897a4a246840bcbbde4edf476",
"splash/img/dark-4x.png": "dcef4d01e864af6bb3741d8863bcd88e",
"splash/img/light-1x.png": "afdc0e73c506fc7d5d34aa9ea7d65524",
"splash/img/light-2x.png": "015135d59dd2f1e6fe0048d58aa0028a",
"splash/img/light-3x.png": "a66f392897a4a246840bcbbde4edf476",
"splash/img/light-4x.png": "dcef4d01e864af6bb3741d8863bcd88e",
"version.json": "23f82fc130181afdc051c9b8f55e53c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
