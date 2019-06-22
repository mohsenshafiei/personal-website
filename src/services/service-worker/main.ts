const SkipWaitingAndClaim = () => {
  //@ts-ignore

  workbox.skipWaiting();
  //@ts-ignore

  workbox.clientsClaim();
};

const hideLogs = () => {
  //@ts-ignore

  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);
};
const precacheAndRoute = () => {
  //@ts-ignore

  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
};

const handleJsFiles = () => {
  //cache js files from third paty domains with 7 days expiration
  //@ts-ignore

  workbox.routing.registerRoute(
    new RegExp(".+\\.js$"),
    //@ts-ignore

    workbox.strategies.cacheFirst({
      cacheName: "js-cache-files",
      plugins: [
        //@ts-ignore

        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60 //
        })
      ]
    })
  );
};



const handleCssFiles = () => {
  //cache css files from third paty domains with 7 days expiration
  //@ts-ignore

  workbox.routing.registerRoute(
    new RegExp(".+\\.css$"),
    //@ts-ignore

    workbox.strategies.cacheFirst({
      cacheName: "css-cache-files",
      plugins: [
        //@ts-ignore

        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60 //
        })
      ]
    })
  );
};

const handlePngfiles = () => {
  //cache png files from third paty domains with 7 days expiration
  //@ts-ignore

  workbox.routing.registerRoute(
    new RegExp(".+\\.png$"),
    //@ts-ignore

    workbox.strategies.cacheFirst({
      cacheName: "png-cache-files",
      plugins: [
        //@ts-ignore

        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60 //
        })
      ]
    })
  );
};

const handleMapPbfFiles = () => {
  //cache map files from third paty domains. this startegy first read data from cache then use network to update cache
  //@ts-ignore

  workbox.routing.registerRoute(
    new RegExp(".+\\.pbf$"),
    //@ts-ignore

    workbox.strategies.staleWhileRevalidate()
  );
};
//@ts-ignore

const handleJsonFiles = () => {
  //cache map json files from third paty domains. this startegy first read data from cache then use network to update cache
  //@ts-ignore

  workbox.routing.registerRoute(
    new RegExp(".+\\.json$"),
    //@ts-ignore

    workbox.strategies.staleWhileRevalidate()
  );
};

const navigationFallBack = () => {
  self.addEventListener("fetch", event => {
    //@ts-ignore

    if (event.request.method !== "GET") {
      return;
    }
    //@ts-ignore
    if (event.request.mode === "navigate") {
      //@ts-ignore
      event.respondWith(caches.match("index.html"));
      return;
    }
  });
};

// const installServiceWorker = () => {
//   if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//       navigator.serviceWorker.register("/service-worker.js");
//     });
//   }
// };

// installServiceWorker();
navigationFallBack();
handleCssFiles();
handleJsFiles();
handleJsonFiles();
handleMapPbfFiles();
handlePngfiles();
SkipWaitingAndClaim();
precacheAndRoute();
