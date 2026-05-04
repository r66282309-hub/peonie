const CACHE_NAME = "peonie-survey-v1";

const APP_SHELL = [
  "./",
  "index.html",
  "survey.htm",
  "mappa.html",
  "manifest.json"
];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(
        APP_SHELL.map(url =>
          cache.add(url).catch(err => {
            console.warn("Cache saltata:", url, err);
          })
        )
      )
    )
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  /*
    Non intercettiamo le chiamate Supabase.
    Se il telefono è offline, le richieste a Supabase devono fallire,
    così il survey salva correttamente la segnalazione in cache locale.
  */
  if (url.hostname.includes("supabase.co")) {
    return;
  }

  /*
    Navigazione HTML:
    prova prima la rete; se non c'è rete usa la cache.
  */
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request)
            .then(cached =>
              cached ||
              caches.match("survey.htm") ||
              caches.match("index.html")
            )
        )
    );
    return;
  }

  /*
    Risorse statiche:
    usa prima la cache; se non trova la risorsa, prova la rete
    e salva una copia per gli usi successivi.
  */
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      });
    })
  );
});