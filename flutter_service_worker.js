'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7577792c53d527463102a8475b2bfac7",
".git/config": "33c2dacd8ef85356da22f30cf55e2129",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "744baa341e2bab1b6e52839c9205c91e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "317d944fba60364a951e4386cf46ce2f",
".git/logs/refs/heads/master": "317d944fba60364a951e4386cf46ce2f",
".git/logs/refs/remotes/origin/master": "b45c05d424a693c39f90e626ca33a7a2",
".git/objects/01/9180d69b1176d088c7a211130fad94e54be65b": "207b44b46d7b5343b926a5145d1eaf2c",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/54753b0491b42779504034488bfa924f690e8a": "da8c83a5869b7b6db89cc0fd52f78c6c",
".git/objects/0e/789729e94a0433d6ad52eb105685569c43c485": "6fac2ca3c4354bac8d61eb22bf1f5c82",
".git/objects/0f/4b6805b29ec51d89e66f855b751c4d06752f6a": "04fb8429e4e9f3b154a4be8ad24a3ad9",
".git/objects/10/587a661779235dd52870f2bef6298f2141508e": "4f6f82cd7b4f0676d7dd1977ff5dfd0e",
".git/objects/12/9cc11828f96ed05fe951523e38610a6cb4973a": "d012dc836fae2c6ef7b1948463fe5b35",
".git/objects/16/f5225b7596bf807cd764ddc27c4bf1c0b96990": "ade2cf2dc7f96f57db677dbc2b29e30e",
".git/objects/1a/11883cc3e39b81f66da3b759280dc8b642c86b": "f3f4c3d51b00a16c96edcb43eab1211d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/34772bee4ff64ec946714c08d35534b8469e38": "ff8f18928939cbcfa942feccf1a86a8e",
".git/objects/2b/76405b625fe043f9b6dbc90bba712c707fcb38": "dbfa4fdd9addabb9348fcb82a543fa52",
".git/objects/2d/219efdce5db9cc76c2b39f70990ffe3b918219": "6a8f98814518b40130f06a0a5a2daa98",
".git/objects/2e/1b1f91045c75199f59208c9843cadc23ff3682": "ffd1521e1e81d79a0fcb4be266681489",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/96d6fe052e9713274abc73a7c2d83be21e6018": "b8e3628fdab21b7a894ccc17dc6444db",
".git/objects/4a/945098bfa23f59cde35f87bc1bb492929c9a4b": "03ed86454b6a4782e45d701b97f39b97",
".git/objects/50/f70bebaead088afc1afc0f79d29c79fd302eab": "4662456989d0251f55a3def9ac7da43f",
".git/objects/51/40b0f6183929e0203448dd8f8003331eda1738": "4caa8e6529d55e5530606dc9a0dd6622",
".git/objects/53/1f265de6f1835e024b91ffa6a5301ce4f0480f": "cefd4aa54d77f7c50e02b1a579e30e12",
".git/objects/61/e6391e75f5170b69e0550a05acf7bd8ae23715": "09de72f158ecf15a49b5311ae84e980b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/91b90b31c0309c6a71bb6edee57d30fcd873fd": "63922e039dcee7f8b5b74bbe1ad616db",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/3680ee5b46e23b6dc0344c3f1397a0c863b48d": "351ca6b59a89848c3949ef56fe30f2da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5ee3cfcccd336aaa94fe67801e3d1837503d27": "ed86df1b25386894bb2d82ca43653aee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/87015f23eeba5c0c84eb7ca1dd33c4b7742ae7": "fcfa1cf1512dd3b2baf61fe1942d5211",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/397cded47f55396b003c31482b214fd49d02d6": "ef69efccb220efc116fa6d00effdeb09",
".git/objects/ad/894ac3b581e6c81aaac23d459029d751a25710": "fb035ce1285fd25d785bd089366d0b32",
".git/objects/ae/e202216b239b1b7c5e981340a265933124f4d9": "02855f4e5c092331ca101b15ade76fdd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/906d84cd2a815355e593503c4d2770a920b4f7": "0951d187a5af9bbc28c6ecb15fbfe81b",
".git/objects/be/39fe2dd4bba52061ca3413772d79d4ea33247c": "1519f22e4b4f4cb7f287dc9050572d5e",
".git/objects/c1/fcf3c871c12ce0a4c770aea74d2b70d6c1a71a": "db6d81e4f74aa84815b9c789b4107fe9",
".git/objects/c4/5bc7e2c071e9852a1f9b12e71874b3eb8a1e2a": "d21bdfe2075d9f9d9014294defb32ba0",
".git/objects/c6/2171d87c60b69c6e0bb73decbe7ec1a3f277e0": "4e31133465e884dd79707362aa2065df",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/212faa6ac6a0b810c644bbf8de4828fbb51921": "a9d877830ae8213721b08ca4f88603e2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/ea/6ce3d459255be5b0a3a60c3ff2db601acf6caa": "7309ca1084bedc51f753c7f1de112b0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/468af4687be7515d75cf7f98bf585cef0a8ce1": "d6fe964604a8bb07b2edc77126a7d52e",
".git/objects/f9/1fbaacf0b1f639217dd53d04441125d6d0e845": "e86523ceab247a26ccc38299b4dffae6",
".git/objects/fb/71713c3632f96f5c630a5995826ba18b8ebfd8": "6f169bad3ebeb72295ef160ce3f592fd",
".git/objects/fe/9ef0931d22f4e8c750b04003633b3332891860": "dba011353a6693b7fad866ec10e552c4",
".git/refs/heads/master": "583f3999c9ff446ad323024cfae1b4b4",
".git/refs/remotes/origin/master": "583f3999c9ff446ad323024cfae1b4b4",
"assets/asset/img/gallery/0.jpg": "738cb5e3c4afc1a621eff9b912577578",
"assets/asset/img/gallery/1.jpg": "e58cd51f8d17deb2f1df54b7ccf006da",
"assets/asset/img/gallery/2.jpg": "61a40149905270bab0d07fa2bd345466",
"assets/asset/img/gallery/3.jpg": "725d713f5ff935277730b761e5ae6488",
"assets/asset/img/gallery/4.jpg": "273f9cae4f9e828dafad38403e375e5e",
"assets/asset/img/title/title.jpg": "e58cd51f8d17deb2f1df54b7ccf006da",
"assets/AssetManifest.bin": "ff94b1f7ecdb9375a13a41550511040c",
"assets/AssetManifest.bin.json": "32d41363ec6430b1b32f0a300943c04d",
"assets/AssetManifest.json": "8fe4d6955ddad377ae9032a0037891c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6fd1c90975305e39d871fdbcfdcfa142",
"assets/NOTICES": "f42b62f6a209f6326900113b7c7ef6e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_naver_map/assets/icon/location_overlay_icon.png": "c18d8758d9d961b87fb1e8522e89dc66",
"assets/packages/flutter_naver_map/assets/icon/location_overlay_sub_icon.png": "cbcc0806d9a1e8c4b995f7ade0c3bcb9",
"assets/packages/flutter_naver_map/assets/icon/location_overlay_sub_icon_face.png": "7068b8f349f637d4f1e0403da60cd11b",
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
"flutter_bootstrap.js": "815f182debf0346ed274868f6fd69339",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "124e57dd1183aec89a7a2b6dfbbef845",
"/": "124e57dd1183aec89a7a2b6dfbbef845",
"main.dart.js": "e41a3138b49add32bd40892c1ec957fe",
"manifest.json": "a2c9c7bb2362d8f0a4351caa51c9399d",
"version.json": "1896919c2ff31cd689d3e35458a1306a"};
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
