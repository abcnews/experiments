---
title: Miscellaneous
---

# Miscellaneous

Here are just some miscellaneous experiments.

## Confetti

```js echo
import confetti from "npm:canvas-confetti"
```

If we import `canvas-confetti` from npm we can use it to create confetti!

```js
Inputs.button("Throw confetti! 🎉", { reduce: () => confetti() })
```

---

## Web components

Let's import and define globally a few [custom elements](https://svelte.dev/docs/svelte/custom-elements) we made in Svelte and exported as [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) so we can use them here.

```js echo
import "./sample-web-components.js"
```

```html echo
<my-element name="whoever you are"></my-element>
<my-counter></my-counter>
```
