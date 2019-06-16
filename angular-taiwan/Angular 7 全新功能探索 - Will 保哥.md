- Bundle Budget
- Virtual Scrolling
- drag and drop
- angular Elements
  ```
  1. 將自訂元素註冊至瀏覽器
  2. 將自訂元素加入DOM
  3. 初始化自訂元素
  4. 事件繫結 & 變更偵測

  step:
  1. ng add @angular/elements
  2. "target": "es2015"  (tsconfig.json)
  3. ng g c made-with-love -v ShadowDom
  4. - 刪除AppComponent元件 / 刪除bootstrap屬性 / 新增 ngDoBootstrap() 方法
     - 新增entryComponents屬性並加入MadeWithLoveComponent元件
     - import { createCustomElement } from '@angular/elements'
     - 建立 constructor() 建構式並透過 createCustomElement() 建立自訂元素
  ```
- ivy (render engine)
- ng update