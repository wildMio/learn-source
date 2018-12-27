Web Auth PublicKeyCredential

---
Toggle Attribute
```javascript
someElement.toggleAttribute('hidden');
```

---
OffScreenCanvas
```javascript
const canvas = new OffScreenCanvas(256, 256);
```

---
Focus Management API
```javascript
someElement.focus({preventScroll: true});
```

---
Sensors
```javascript
const acceletometer = new Acceletometer();
const linearAccelerationSensor = new LinearAccelerationSensor();
const gravitySensor = new GravitySensor();
const gyroscope = new Gyroscope();
const absoluteOrientationSensor = new AbsouluteOrientationSensor = new AbsoluteOrientationSensor();
const relativeOrientationSersor = new RelativeOrientationSensor();

sensor.addEventListener('reading', () => {
  // ...
});
```

---
BigInt
```javascript
const bigNumber = 123456789012345678901234567890n;
typeof 123n; // bigint
```

---
Lifecycle API
```javascript
document.addEventListener('freeze', (event) => {
  // The page is now forzen. 
});

document.addEventListener('resume', (event) => {
  // The page has been unfrozen.
});

if (document.wasDiscarded) {
  // Oage was previously discarded by the
  // browser while in a hidden tab.
}
```

---
Server Timing
```javascript
// Server-Timeing: missedCache, cpu;sur=2.4;desc="Processing time"
let entries = performance.getEntriesByType('resource');
for (const entry of entries) {
  entry.serverTiming[0];
  // == {name: "missedCache", duration: 0.0, description: ""}
  entry.serverTiming[1];
  // == {name: "cpu", duration: 2.4, description: "Processing time"}
}