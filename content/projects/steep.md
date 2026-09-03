---
name: "Steep"
date: "2026-06-14"
description: "A brewing log and inventory tracker for loose-leaf tea — what's in the cabinet, what's been steeped, and what worked."
tags: ["Tea", "Software"]
status: "active"
type: "Web App"
repoLink: "https://github.com/lorem-ipsum/steep"
---

The inventory problem came first: enough loose-leaf tea accumulates in a cabinet that "what do I actually have" stops being answerable from memory. Steep started as a spreadsheet solving that, then grew a second half almost by accident — a brewing log, because once I was already opening the app to check inventory, logging the steep felt like one extra step instead of a whole separate habit.

Each tea gets a record — type, origin, vendor, how much is left — and each brewing session logs against it: water temp, steep time, number of infusions, and a short tasting note. Over enough sessions the log starts answering questions I didn't know I wanted answered, like which of my "everyday" teas I actually reach for versus which ones just look good on the shelf.

## The inventory math

Nothing clever here, deliberately — grams remaining just decrements by an estimated per-session weight, entered once per tea rather than measured every time. Precision wasn't the goal; a rough "you're running low" signal before a favorite runs out silently was.

```
remaining_g -= session.estimated_grams_used
if remaining_g < REORDER_THRESHOLD_G:
    flag_low(tea)
```

## What's still missing

No steep-timer built in yet — I still use a separate kitchen timer and log the result after the fact. Folding the timer into the app is on the list, mostly blocked on deciding whether it's worth the UI complexity for something a $10 timer already does fine.
