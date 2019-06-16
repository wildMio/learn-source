##The Costs & bebefits
Costs:
- Service worker startup time isn't free.
- Cache reads aren't necessarily always instant
- Aggressive precaching in the service worker can deprive network bandwidth from the main page.

```javascript
// Get the performance entry for the page or resource.
const entry = performance.getEntriesByName(url)[0];

// Service Worker startup time is the delta between when the browser
// starts the service worker and when it dispatched the fetch event.
const swStartupTime = entry.requestStart - entry.workerStart;
```

```javascript
// Get the performance entry for the page or resource.
const entry = performance.getEntriesByName(url)[0];

// A transfore size of 0 neans this was handled by the cache.
if (entry.transferSize === 0) {
  const cacheTime = entry.responseStart - entry.requestStart;
}
```

```javascript
// Measure before and after the cache read.
const cacheStart = performance.now();
const response = await caches.match(event.request);
const cacheEnd = performance.now();
```

## Serving Strategy

### 3 Ways to Speed Up Navigations
- Respond from cache right away(then check for updates afterward)
- When network is needed, fetch partial content and stream the rest from cache.
- Use navigation preload so network requests and service worker startup can happen in parallel. 

```javascript
// Use a cache-first strategy
workbox.routing.registerRoute(
  '/about',
  workbox.strategies.cacheFirst()
);

// Or, use a stale-while-revalidate strategy
workbox.outing.registerRoute(
  '/about',
  workbox.strategies.staleWhileRevalidate()
);
```

```javascript
workbox.routing.registerRoute(
  '/about',
  workbox.streams.strategy([
    cacheFirst.makeRequest({
      request: new Request('/_header.html'),
    }),
    networkFirst.makeRequest({
      request: new Request('/about.content.html'),
    }),
    cacheFitst.makeRequest({
      request: new Request('/_footer.html'),
    }),
  ]),
);
```

GET /index.html HTTP/2
Service-Worker-Navigation-Preload: true

```javascript
// In the activate event, enable Navigation Preload (if supported).
if (self.registration.navigationPreload) {
  self.registration.navigationPreload.enable();
}

// In the fetch event, respond with the preloaded response.
event.respondWith(event.preloadResponse);
```

## Cache strategy

### Cache Management
- store the **right resource** at the **right time**
- Control **size**
- Prevent **quota** overflow
- **Update** efficiently

```javascript
// Use the StorageManager API's estimate() method to get
// a sense for both your usage and total available quota.
const {usage, quota} = await navigator.storage.estimate();
```

```javascript 
workbox.strategies.cacheFirst({
  cacheName: 'non-critical-assets',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 100,
      maxAgeSeconds: 60 * 60 * 24 * 90, // 90 ddays
      purgeOnQuotaError: true,
    }),
  ],
});
```

### How to update?
Update versioned files on a new SW installation


```javascript
workbox.precaching.precacheAndRoute([
  // Versioned by content hash
  '/styles/index.0c9a31.css',
  '/scripts/main.0d5770.js',
  // Versioned by revision data
  {
    url: '/index.html',
    revision: '383676'
  }
]);
```

$ workbox wizard --injectManifest

## Key Points
- Have a plan
- Don't just re-invent the HTTP cache
- Optimize navigation requests
- Make performance decision based on data
- Control app size and quota usage
- Respect the user