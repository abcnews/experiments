---
toc: true
---

# Hello World!

This website is a home for [ABC Developers](https://github.com/abcnews/) expiriments for the web. It's a static site built using [Observable Framework](https://observablehq.com/framework/) which lets us experiment with data and charts and all kinds of stuff.

We're just getting started so check back later for more.

---

## Here's some code

We can do imports:

```js echo
import { Chart } from "./embeds/chart.js"
```

Here we can run code, define function (and display the code):

```ts echo
const x: string = () => "Hello World"

function greeting(name) {
  return html`Hello, <i>${name}</i>!`
}
```

We can then call those functions and have them display:

```js echo
greeting("World")
```

We can output that chart we imported up top:

```js echo
Chart()
```
