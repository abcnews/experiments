---
title: Miscellaneous
---

```js
import confetti from "npm:canvas-confetti"
```

# Miscellaneous

A few other things.

```js
Inputs.button("Throw confetti! 🎉", { reduce: () => confetti() })
```

---

## Other experiments

Let's import a custom element

```js echo
import "../lib/my-library.js"
```

```html echo
<my-element name="Joshua"></my-element>
```
