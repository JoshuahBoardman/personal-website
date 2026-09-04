---
name: "Markdown Edge Cases"
date: "2026-08-11"
description: "GFM-only syntax and other odd structural cases, kept unrendered-as-intended on purpose to see exactly how the pipeline degrades."
tags: ["Software", "Tea", "TEST", "Music"]
duration: "4 mins"
---

This document exists to see what breaks. The site's remark pipeline does not have `remark-gfm` installed, so every GFM construct below should render as literal text rather than a real element — that gap is the point of this file.

A table, which without `remark-gfm` should just print as a run of pipe characters and dashes rather than becoming a `<table>`:

| Column A | Column B | Column C |
| --- | :---: | ---: |
| left | center | right |
| a longer cell value | x | 3 |

Strikethrough that should stay literal: ~~this text should still have tildes around it~~.

A task list that should render as a plain unordered list with literal `[ ]`/`[x]` text rather than checkboxes:

- [ ] Unchecked task
- [x] Checked task
- [ ] Another unchecked task

A bare autolink that CommonMark (without GFM) should leave as plain text, not a clickable link: visit https://example.com/some/path?query=1 for more.

A footnote reference, which also requires GFM/an extension to resolve[^1]:

[^1]: This footnote definition will most likely just print as its own paragraph rather than linking anywhere.

A list immediately followed by a blockquote with no blank line between them, to see whether the parser separates them cleanly or merges them into one block:
- List item right before a quote
> Blockquote with no blank line above it

Four consecutive headings with no body text between any of them, to check heading-to-heading spacing without a paragraph acting as a buffer:

## Heading A
### Heading B
#### Heading C
##### Heading D

A fenced code block that is empty except for whitespace:

```
   
```

A very deeply nested list — five levels, alternating ordered and unordered every level:

1. Level one, ordered
   - Level two, unordered
     1. Level three, ordered
        - Level four, unordered
          1. Level five, ordered — if this still has visible structure at this depth, the nested spacing rules are holding up

A paragraph containing an escaped literal asterisk (\*not emphasis\*) and an escaped literal underscore (\_not emphasis either\_), to confirm escaping doesn't accidentally trigger emphasis styling.
