# ArchieML

An experiment with [ArchieML](https://archieml.org/) on the web.

Here's the Google Doc:

https://docs.google.com/document/d/1GIth0dexxcFBKUr5Tchcd2uz4Az-YbtipHKj6I7SinM/edit?tab=t.0

---

## Fetching data

I've set up a Doc-to-JSON converter so we can fetch it.

```ts echo
const response = await fetch(
  "https://archieml-to-json.vercel.app/1GIth0dexxcFBKUr5Tchcd2uz4Az-YbtipHKj6I7SinM",
)
const data = await response.json()

display(data)
```

Let's try formatting the JSON:

```js echo
html`<pre>${JSON.stringify(data, null, 2)}</pre>`
```

And we can process any Markdown here:

```js echo
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "https://esm.sh/unified@11"

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify)
  .process(data.INTRO)

const wrapper = document.createElement("div")
wrapper.classList.add("card")
wrapper.innerHTML = file.value
display(wrapper)
```

---

## Templating & Markdown processing

Let's process the JSON data a bit:

```js echo
html` <div class="card">${data.INTRO}</div>`
```
