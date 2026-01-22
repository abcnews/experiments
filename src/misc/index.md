---
title: Miscellaneous
---

# Miscellaneous

Here are just some miscellaneous experiments.

## Confetti

```js echo
import confetti from "npm:canvas-confetti"
```

We imported `canvas-confetti` from npm and we can use it to create confetti!

```js
Inputs.button("Throw confetti! 🎉", { reduce: () => confetti() })
```

---

## Other experiments

Let's import a few custom elements we made in Svelte.

```js echo
import "../lib/sample-web-components.js"
```

```html echo
<my-element name="whoever you are"></my-element>
<my-counter></my-counter>
```
