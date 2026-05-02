const CACHE = 'note-trainer-v1';
const ASSETS = [
  '/piano-sheet-music-trainer/',
  '/piano-sheet-music-trainer/index.html',
  '/piano-sheet-music-trainer/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
