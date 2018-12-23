Async Clipboard
```javascript
button.addEventListener('click', () => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.value = text;
  input.focus();
  input.select();
  document.execCommand('copy');
});

// ↓↓↓
button.addEventListener('click', async () => {
  await navigator.clipboard.writeText(text);
});

button.addEventListener('click', async () => {
  const text = await navigator.clipvoard.readText();
  console.log(text);
});
```

---
Typed OM
```javascript
styleMap = someElement.computedStyleMap()
// <=> getComputedStyles(someElement)
styleMap = someElement.attributeStyleMap
// <=> someElement.style

styleMap.get("opacity") // == {value: 1, unit: "number"}
styleMap.get("top") // == {value: 0, unit: "px"}
styleMap.get("margin-left") // == {value: 10, unit: "percent"}

newValue = CSSNumbericValue.parse('10px');
newValue = new CSSUnitValue(10, 'px');
style.set('top', newValue);

styleMap.set(
  "margin-left",
  newValue.add(new CSSUnitValue(5, 'px'))
); // => 15px;
styleMap.set(
  "margin-left",
  CSSNumbericValue("10px")
    .add(new CSSUnitValue(5, "percent"))
);
/*
=> {
  operator: "sum",
  value: [
    {value: 10, unit: "px"},
    {value: 5, unit: "percent"}
  ]
}
*/
```

---
UpdateViaCache
```javascript
navigator.serviceWorker.register('/service-worker.js', {
  updateViaCache: 'none',
});
```

---
Desktop PWAs

---
BitMapRenderer
```javascript
const canvas = document.createElement('canvas');
const context = canvas.getContext('bitmaprenderer');
const image = await createImageBitmap(imageBlob);
context.transferFromImageBitmap(image);
```

---
Web Locks
```javascript
await do_something_without_lock();

await navigator.locks.request('my_resource', async lock => {
  await do_something();
  await do_something_else();
});

await do_something_else_without_lock();
```

---
Feature-Policy
Feature-Policy: geolocation 'none'
```html
<iframe src="..." allow="geolocation 'none'"></iframe>
```

---
CSS Paint API
```html
<style>
  main {
    border-image: paint(squircle-corners);
  }
</style>
<main></main>
<script>
CSS.paintWorklet.addModule('squircle-corners.js');
</script>
```

```javascript
registerPaint('squircle-corners', class {
  paint(ctx, geometry, properties) {
    // ... just like <canvas>
  }
});
```