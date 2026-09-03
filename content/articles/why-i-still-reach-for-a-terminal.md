---
name: "Why I Still Reach for a Terminal"
date: "2026-02-11"
description: "GUIs are faster to learn and slower to leave. A case for keeping the terminal as the default, not the fallback."
tags: ["Software"]
status: "published"
duration: "4 mins"
---

Every few years a new tool promises to finally replace the terminal. A visual git client, a database GUI with a friendly diagram view, an IDE that turns your whole toolchain into panels and buttons. I install most of them. I use almost none of them past the second week.

It isn't nostalgia. It's that the terminal is the one interface in my stack that never renegotiates the contract. A command I wrote in 2019 still runs today, unchanged, because it's text in, text out, composable with everything else that speaks the same language. The GUI redesigns itself every major version and asks me to relearn where the button went.

## Composability beats discoverability

GUIs win on discoverability — you can poke around and find the feature. The terminal wins on composability — once you know the pieces, you can combine them in ways nobody designed for. `grep` doesn't know about `jq`, and `jq` doesn't know about `grep`, but pipe them together and you've built something the tool authors never had to anticipate.

```
git log --since="2 weeks ago" --pretty=format:"%an" | sort | uniq -c | sort -rn
```

That's not a feature any git client shipped. It's four small tools that happen to agree on a shared format: lines of text.

## The real cost is elsewhere

The honest tradeoff isn't speed — a well-built GUI is often faster for a one-off task. It's that fluency in a GUI doesn't transfer. Fluency in a shell does. Every hour I spend getting better at `awk` pays off in every project I touch for the rest of my career, because the terminal doesn't get replaced, it gets extended.

I still open GUIs. Some problems really are visual — a merge conflict with a genuinely tangled history, a schema with forty tables. But they're the exception I reach for, not the default I live in.
