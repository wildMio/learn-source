display: contents
```css
  display: contents;
```

---
Reporting Observer
```javascript
const observer = new ReportingObserver((reports, observer) => {
  for (const report of reports) {
    // report.type is 'deprecation' or 'intervention'
    // ... send to analytics or something
  }
});

observer.observe();
```

---
Scroll Snap
```css
.gallery {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}
.gallery img {
  scroll-snap-align: center;
}
```

---
Site Isolation

---
Named Workers
```javascript
const worker = new Worker(url, { name: 'whatever' });
```

---
Payment Handler
```javascript
const request = new PaymentRequest([{
  supportedMethods: 'https://surmas.totally.legit.bank'
}], {
  total: {
    label: 'total',
    amount: { value: '10', currency: 'USD' }
  }
});

//<!-- *** -->
const registration = 
  await navigator.serviceWorker.register('service-worker.js');
registration.paymentManager.instruments.set('https://surmas.totally.legit.bank', {
  name: 'Surma`s Totally Legit Bank',
  method: 'surmas.totally.legit.bank'
});

self.addEventListener('paymentrequest', e => {
  // ...
});
```

---
Conic Gradients
```css
.ocean-conic {
  background-image: conic-gradient(
    from 34deg,
    #000046, #1CB5E0, #000046, #1CB5E0, #000046
  );
}
```

---
AV1 Decoding
