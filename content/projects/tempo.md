---
name: "Tempo"
date: "2026-05-30"
description: "A practice log for bass — tracks what I worked on, at what tempo, and for how long, instead of trusting memory for any of it."
tags: ["Music", "Software"]
status: "active"
type: "Web App"
repoLink: "https://github.com/lorem-ipsum/tempo"
---

I kept a paper practice log for about two years and it worked fine right up until I wanted to ask it a question more complicated than "what did I do yesterday." Questions like: which tunes have I neglected for over a month, or what's my actual tempo trend on a passage I've been grinding on for weeks. Paper doesn't answer those. Tempo is the small tool I built so I could.

Each session is a short entry — tune or exercise, tempo, duration, a one-line note — and the app does the boring aggregation I didn't want to do by hand: rolling tempo charts per piece, a "hasn't touched in N days" list sorted by neglect, total minutes per week against a rough weekly goal.

## Why not just use a spreadsheet

I did, for a while. The friction that killed it was entry speed — a spreadsheet on a phone, mid-practice, between takes, is enough friction that I'd stop logging within a week every time. Tempo's entire UI is one screen: tune, tempo, duration, done. Anything that isn't on that screen didn't make the cut, on purpose.

## What's next

Metronome-linked auto-logging is the obvious next step — right now tempo is typed in by hand, and it'd be nicer if the app could read it directly from whatever click track I'm practicing against. Still figuring out the cleanest way to do that without turning a one-screen app into a five-screen one.
