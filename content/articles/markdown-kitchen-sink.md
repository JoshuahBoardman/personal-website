---
name: "Markdown Kitchen Sink"
date: "2026-08-10"
description: "Every standard CommonMark element in one document, used to stress-test the .content CSS rather than to be read."
tags: ["Software"]
status: "draft"
duration: "5 mins"
---

This document is not meant to be read for content — it exists to exercise every CommonMark construct the `remark` + `remark-html` pipeline can produce, so the `.content` styles have something real to fail against.

# Heading One

## Heading Two

### Heading Three

#### Heading Four

##### Heading Five

###### Heading Six

Emphasis comes in a few shapes: *italic*, **bold**, ***bold italic***, and `inline code` sitting in the middle of a sentence to check baseline alignment against surrounding text.

A [link with a title](https://example.com "Example Domain") and a [link without one](https://example.com) should both pick up the site's global underline treatment.

![A placeholder image with alt text](https://example.com/does-not-exist.png)

> A single-level blockquote to confirm the rust left-border and Fraunces sizing.
>
> > A blockquote nested inside a blockquote — this should visibly indent again and stack the left borders.
> >
> > > And a third level, mostly to see whether the indentation keeps compounding sensibly or starts to look broken.

Unordered list, plain:

- First item
- Second item
- Third item

Ordered list starting at a non-1 number:

7. Seventh
8. Eighth
9. Ninth

Deeply nested, mixed ordered/unordered:

1. Top-level ordered item
   - Nested unordered
   - Another nested unordered
     1. Nested ordered inside unordered
     2. Second nested ordered
        - Fourth level, unordered again
        - One more at fourth level
2. Second top-level ordered item

Fenced code block with a language tag:

```js
function reduceByKey(xs, key) {
  return xs.reduce((acc, x) => {
    (acc[x[key]] ??= []).push(x);
    return acc;
  }, {});
}
```

Fenced code block with no language tag at all:

```
$ curl -s https://example.com | wc -c
1256
```

Three different horizontal rule syntaxes, back to back:

---

***

___

A raw HTML block, since remark treats HTML blocks as passthrough per the CommonMark spec with no plugin required:

<details>
<summary>Click to expand — raw HTML inside markdown</summary>

This paragraph lives inside a raw `<details>` element, not a markdown block, so it should render as plain unstyled HTML unless `.content` reaches inside it too.

</details>

An inline raw tag for good measure: this sentence has <mark>a highlighted phrase</mark> sitting in the middle of it.

Overflow bait — a single unbroken "word" long enough to test whether `.content p` wraps instead of blowing out the container width:

Supercalifragilisticexpialidocioussupercalifragilisticexpialidocioussupercalifragilisticexpialidocious

And a wide, unwrapped line inside a code block to check `.content pre`'s `overflow-x`:

```text
this-is-one-extremely-long-single-token-line-with-no-spaces-anywhere-in-it-at-all-to-force-horizontal-scroll-instead-of-a-layout-break-000000000000000000000000000000000000000000000000000
```

A final paragraph, so the document doesn't end mid-code-block.
