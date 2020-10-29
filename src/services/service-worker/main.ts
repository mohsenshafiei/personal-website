const SkipWaitingAndClaim = () => {
  //@ts-ignore
  workbox.core.skipWaiting();
  //@ts-ignore
  workbox.core.clientsClaim();
};

const hideLogs = () => {
  //@ts-ignore
  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);
};
const precacheAndRoute = () => {
  //@ts-ignore
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
};

const handleJsFiles = () => {
  //cache js files from third paty domains with 7 days expiration
  //@ts-ignore
  workbox.routing.registerRoute(
    new RegExp(".+\\.js$"),
    //@ts-ignore
    new workbox.strategies.NetworkOnly()
  );
};

const handleHtmlFiles = () => {
  //@ts-ignore
  workbox.routing.registerRoute(
    new RegExp(".+\\.html$"),
    //@ts-ignore
    new workbox.strategies.NetworkOnly()
  );
};

const handleCssFiles = () => {
  //cache css files from third paty domains with 7 days expiration
  //@ts-ignore
  workbox.routing.registerRoute(
    new RegExp(".+\\.css$"),
    //@ts-ignore
    new workbox.strategies.NetworkOnly()
  );
};

const handleFontFiles = () => {
  //cache font files from third paty domains with 7 days expiration
  //@ts-ignore
  workbox.routing.registerRoute(
    new RegExp(".+\\.ttf|.woff|.woff2$"),
    //@ts-ignore
    new workbox.strategies.CacheFirst({
      cacheName: "font-cache-files",
      plugins: [
        //@ts-ignore
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60, //
        }),
      ],
    })
  );
};

const handlePngfiles = () => {
  //cache png files from third paty domains with 7 days expiration
  //@ts-ignore
  workbox.routing.registerRoute(
    new RegExp(".+\\.png$"),
    //@ts-ignore\
    new workbox.strategies.CacheFirst({
      cacheName: "png-cache-files",
      plugins: [
        //@ts-ignore
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60, //
        }),
      ],
    })
  );
};

//@ts-ignore
const handleJsonFiles = () => {
  //cache map json files from third paty domains. this startegy first read data from cache then use network to update cache
  //@ts-ignore
  workbox.routing.registerRoute(
    new RegExp(".+\\.json$"),
    //@ts-ignore
    new workbox.strategies.StaleWhileRevalidate()
  );
};

handleHtmlFiles();
handleCssFiles();
handleJsFiles();
handleJsonFiles();
handleFontFiles();
handlePngfiles();
SkipWaitingAndClaim();
precacheAndRoute();
