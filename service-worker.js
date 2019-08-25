var cacheName = 'pwa-starter';
var filesToCache = [
  '/',
  'index.html',
  'css/style.css',
  'main.js'
];

/* Start the service worker and cache all of the app's shell content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
