// service-worker.js

const CACHE_NAME = 'autismo-naty-cache-v1'; // Cambia esto si actualizas los archivos en el futuro
const urlsToCache = [
  './', // Incluye el index.html
  './index.html',
  './pictogramas.html',
  './animales.html',
  './frutas.html',
  './juegos.html',
  './emociones.html',
  './numeros.html',
  './egulacion.html',
  './preposiciones.html',
  './imagenes/icon1.png', // Incluye tus iconos
  './imagenes/icon2.png',
 
];

// Instala el service worker y cachea los archivos necesarios
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Archivos cacheados:', urlsToCache);
      return cache.addAll(urlsToCache);
    })
  );
});

// Responde con los archivos cacheados
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si hay una respuesta en caché, devuélvela; de lo contrario, busca en la red
      return response || fetch(event.request);
    })
  );
});
