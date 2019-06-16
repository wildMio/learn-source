squoosh.app

```javascript
const leftWorker = new Worker('processor.7a100.js');
const id = Math.random();

leftWorker.postMessage({
  id, data, options, action: 'encode-webp-please'
});

leftWorker.onmessage = (event) => {
  if (event.data.id === id) {
    const webp = event.data.image;
    // ...
  }
};
```

```javascript
// In the worker
import { expose } from 'comlink';

async function webpEncode(data, options) {
  const { encode } = await import('/webp/encoder');
  return encode(data, options);
}

expose({ webpEncode }, self);

// In the page
import { proxy } from 'comlink';

const leftWorker = new Worker('processor.7a100.js');
const workerApi = proxy(leftWorker);

workerApi.wrbpEncode(data, options).then(() => {
  // ...
});
```

github.com/GoogleChromeLabs/