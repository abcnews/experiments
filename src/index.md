---
toc: false
---

# Welcome

```ts
import { Chart } from "/embeds/chart.js"
```

```ts echo
const x = () => "Hello World"

function greeting(name) {
  return html`Hello, <i>${name}</i>!`
}
```

```ts echo
document.createTextNode("[insert chart here]")
```

```ts echo
display(greeting("World"))
```

## Charts

We can output charts.

```js echo
await Chart()
```

## Other

And other things.

<style>



</style>
