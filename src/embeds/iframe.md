---
# Start iframe blank
sidebar: false
header: false
footer: false
pager: false
# End iframe blank
theme: [air, near-midnight]
---

```js
import { Chart } from "./chart.js"
import { autoResize } from "../lib/iframeResizer.js"
autoResize()
```

```js
Chart()
```

<style>
  #observablehq-center, #observablehq-main, .observablehq {
    margin: 0;
  }
</style>
