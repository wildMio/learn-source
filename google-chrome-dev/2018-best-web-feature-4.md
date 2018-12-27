TrimStart TrimEnd
```javascript
' hello world '.trim();
' hello world '.trimLeft();
' hello world '.trimRight();
' hello world '.trimStart();
' hello world '.trimEnd();
```

---
import.meta

---
Regex Named Capture Groups
```javascript
const pattern = /(?<year>d{4})-(?<month>d{2})-(?<day>d{2})/;
const result = pattern.exec('2018-12-25');
const {year, month, day} = result.groups;

const transformed = '2018-12-25'.replace(
  pattern,
  '$<day>/$<month>/$<year>'
)
// 25/12/2018
```

---
Relative Time Format
```javascript
const rtf = new Intl.RelativeTimeFormat('en');

rft.format(3.14, 'second');
// -> 'in 3.14 secons'

rft.format(-15, 'minute');
// -> '15 minutes age'
```

---
ResizeObserver
```javascript
const observer = new ResizeObserver((change) => {
  for (const {target, contentRect } of changes) {
    // ...
  }
})

observer.observe(element);
```

---
Audio Worklet
```javascript
const audioCtx = new AudioContext();
const track = audioCtx.createMediaElementSource(audioElement);
const gainNode = audioCtx.createGain();
// Manipulate gainNode.gain.value...
const panner = new SteroPannerNode(audioCtx, {pan: 0});
// Manipulate panner.pan.value...
track
  .connect(gainNode)
  .connect(panner)
  .connect(audio.destination);


// app.js
const audioCtx = new AudioContext();
await audioCtx.audioWorklet.addModule('surm-node.js');
const track = audioCtx.createMediaElementSource(audioElement);
const surmNode = new AudioWorkletNode(context, 'surm-node');
track
  .connect(surmNode)
  .connect(audioCtx.destination);
// surm-node.js
class SurmNode extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // ...
  }
}

registerProcessor('gain-processor', GainProcessor);
```

---
CacheMode
```javascript
const response = await fetch(url, {
  cache: 'reload',
  // or 'default'
  // or 'no-store'
  // or 'no-cache'
  // or 'force-cache'
  // or 'only-if-cached'
});
```

---
Class Fields
```javascript
class MyClass {
  x = 4;
  static y = 9;
}