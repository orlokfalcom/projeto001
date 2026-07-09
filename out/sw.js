const CACHE_NAME = "silencios-da-saude-cache-v1";
const ASSET_CACHE_NAME = "silencios-da-saude-assets-v1";

// Cache core files on installation
const PRECACHE_RESOURCES = [
  "/",
  "/offline.html",
  "/favicon.ico"
];

// Install Event - Precache key resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_RESOURCES);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener("activate", (event) => {
  const cacheAllowList = [CACHE_NAME, ASSET_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheKeys) => {
      return Promise.all(
        cacheKeys.map((key) => {
          if (!cacheAllowList.includes(key)) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Handle caching strategy
self.addEventListener("fetch", (event) => {
  // Only intercept GET requests
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);

  // Ignore cross-origin request or chrome extensions schemes
  if (!requestUrl.protocol.startsWith("http")) return;

  // Determine if it is a static asset (images, fonts, bundles, css, js)
  const isStaticAsset = 
    requestUrl.pathname.includes("/_next/static/") ||
    requestUrl.pathname.startsWith("/images/") ||
    requestUrl.pathname.startsWith("/icons/") ||
    requestUrl.pathname.startsWith("/illustrations/") ||
    requestUrl.pathname.endsWith(".woff") ||
    requestUrl.pathname.endsWith(".woff2") ||
    requestUrl.pathname.endsWith(".png") ||
    requestUrl.pathname.endsWith(".svg") ||
    requestUrl.pathname.endsWith(".jpg") ||
    requestUrl.pathname.endsWith(".jpeg") ||
    requestUrl.pathname.endsWith(".css") ||
    requestUrl.pathname.endsWith(".js") ||
    requestUrl.pathname.endsWith(".ico") ||
    requestUrl.pathname.endsWith(".json");

  if (isStaticAsset) {
    // Cache-First, falling back to network
    event.respondWith(
      caches.open(ASSET_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Offline fallback for static assets (return empty response or null)
            return new Response("", { status: 404, statusText: "Offline asset not found" });
          });
        });
      })
    );
  } else {
    // Network-First, falling back to cache (for HTML routes)
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // If response is valid, clone it and cache it
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline, serve from cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // If it's a page navigation/document request and not in cache, serve offline.html
            if (event.request.headers.get("accept")?.includes("text/html")) {
              return caches.match("/offline.html");
            }
            
            return new Response("Offline", { status: 503, statusText: "Offline" });
          });
        })
    );
  }
});
