---
toc: true
---

# Hello World!

This website is intended to be a playground for [ABC Developers](https://github.com/abcnews/) expiriments for the web. It's a static site built using [Observable Framework](https://observablehq.com/framework/) which lets us experiment with data and charts and all kinds of stuff.

We're just getting started so check back later for more.

---

## A brief introduction

With Framework can do JavaScript imports:

```js echo
import { Chart } from "./components/sampleChart.js"
```

Here we are displaying TypeScript code (and running it to define a function):

```ts echo
function greeting(name): string {
  return html`Hello, <i>${name}</i>!`
}
```

Afterwards we can call the function:

```js echo
greeting("World")
```

And finally we can display chart we imported up top:

```js echo
Chart()
```

---

Consult the [Framework docs](https://observablehq.com/framework/getting-started) for more info.
