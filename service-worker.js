// service-worker.js

const CACHE_NAME = 'autismo-naty-cache-v1'; // Cambia esto si actualizas los archivos en el futuro
const urlsToCache = [
  './index.html',
  './pictogramas.html',
  './animales.html',
  './frutas.html',       // Asegúrate de que esta línea esté incluida
  './juegos.html',       // Y que esta línea también esté incluida
  './emociones.html',
  './numeros.html',
  './regulacion.html',   // Incluye todos los HTML necesarios
  './preposiciones.html',
  './imagenes/icon1.png',
  './imagenes/icon2.png',
  './estilos.css', // Ruta a tu archivo CSS
  './index.js', 
   './juegos.js', 
]

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
