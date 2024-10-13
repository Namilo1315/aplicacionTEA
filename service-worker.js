const CACHE_NAME = 'autismo-naty-cache-v2'; // Cambia la versión para forzar la actualización del caché

// Instalar el Service Worker y cachear los archivos necesarios
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
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
      ]);
    })
  );
});

// Eliminar cachés antiguas en la activación del nuevo Service Worker
self.addEventListener('activate', (event) => {
  const cacheAllowlist = [CACHE_NAME];  // Solo el nuevo caché se mantendrá
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (!cacheAllowlist.includes(key)) {
            return caches.delete(key);  // Eliminar caché antiguo
          }
        })
      );
    })
  );
});

// Responder con los archivos cacheados si están disponibles, o buscar en la red y cachear dinámicamente
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si se encuentra en caché, lo devuelve; de lo contrario, intenta la red
        return response || fetch(event.request);
      })
      .catch(() => {
        // Si falla todo (sin caché ni red), puedes mostrar una página de error personalizada
        return caches.match('./offline.html');  // Debes crear una página 'offline.html'
      })
  );
});
