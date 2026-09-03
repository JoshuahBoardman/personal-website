---
name: "On Caching and Forgetting"
date: "2025-09-08"
description: "Cache invalidation and forgetting a bassline you haven't played in months turn out to be the same problem wearing different clothes."
tags: ["Software", "Music"]
status: "archived"
duration: "6 mins"
---

There's an old joke that there are only two hard problems in computer science: cache invalidation, naming things, and off-by-one errors. I'd been living with the joke for years as a joke, and then one afternoon, trying to relearn a bassline I hadn't played in four months, I realized it wasn't a joke at all — it was a description of memory in general, and I was debugging my own.

A cache is supposed to be a cheap, fast copy of something expensive to recompute. The danger isn't that it goes empty — an empty cache just costs you a recompute. The danger is that it goes *stale* and you don't find out until it hands you the wrong answer with total confidence. That's exactly what happened with the bassline. My fingers had a cached version of the fingering. It was fast, it was confident, and it was subtly wrong — I'd drifted a passing tone somewhere around month two and never noticed, because the cache never told me it was serving stale data. It just served it.

## Two ways to invalidate

In software you get two honest strategies:

- **Time-based expiry** — the cache admits it might be stale after N minutes and forces a recompute, whether or not anything actually changed
- **Explicit invalidation** — something that changed the underlying data also tells the cache to drop its copy, which is more precise and also the thing everyone gets wrong

Practicing against a recording turned out to be explicit invalidation. The recording doesn't care what my fingers think happened — it's the source of truth, and reconciling against it forces the stale cache entry to get overwritten instead of quietly compounding. Playing from memory with no reference, the way I'd been doing it, was a cache with no invalidation path at all. Just time-based drift, forever, with nothing ever checking it against ground truth.

I don't think this metaphor extends much further than that — most good metaphors don't — but it did change how I practice. I check against the recording now, on purpose, on a schedule, the same way I'd set a TTL on anything else I didn't fully trust to stay correct on its own.
