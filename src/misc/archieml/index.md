# ArchieML

An experiment with [ArchieML](https://archieml.org/) on the web.

Here's the Google Doc:

https://docs.google.com/document/d/1GIth0dexxcFBKUr5Tchcd2uz4Az-YbtipHKj6I7SinM/edit?usp=sharing

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

---

## Markdown processing

We can then process any Markdown:

```ts
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "https://esm.sh/unified@11?bundle"

const parseMarkdown = async (markdown: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)

  return file
}
```

```js echo
const markup = await parseMarkdown(data.INTRO)
const wrapper = document.createElement("div")

wrapper.classList.add("card")
wrapper.innerHTML = markup.value

display(wrapper)
```
