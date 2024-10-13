const CACHE_NAME = 'autismo-naty-cache-v1';
const urlsToCache = [
  './index.html',
  './pictogramas.html',
  './animales.html',
  './frutas.html',
  './juegos.html',
  './emociones.html',
  './numeros.html',
  './regulacion.html',
  './preposiciones.html',
  './imagenes/icon1.png',
  './imagenes/icon2.png',
  './estilos.css', // Asegúrate de que todos los archivos CSS necesarios están cacheados
  './index.js',    
  './juegos.js', 
];



// Instala el Service Worker y cachea los archivos necesarios
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Archivos cacheados:', urlsToCache);
      return cache.addAll(urlsToCache);
    })
  );
});

// Responde con los archivos cacheados si están disponibles, o busca en la red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si hay una respuesta en caché, devuélvela; de lo contrario, busca en la red
      return response || fetch(event.request).then((networkResponse) => {
        // Abrir caché y almacenar la respuesta en caché dinámica si no está cacheada
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

// Evento de activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

