---
name: "Ledger"
date: "2025-11-02"
description: "A self-hosted personal-finance dashboard built on plain-text double-entry files, parsed and charted locally with nothing sent anywhere."
tags: ["Software"]
status: "paused"
type: "Dashboard"
repoLink: "https://github.com/lorem-ipsum/ledger"
---

Every personal-finance app I tried wanted an OAuth connection to a bank account, and I didn't want that badly enough to give it up. Ledger is the alternative I built instead — plain-text, double-entry accounting files in the `ledger-cli` format, entered by hand, parsed locally, charted locally. Nothing leaves the machine, because nothing has anywhere to go.

The entry format is deliberately unglamorous — a date, a payee, a couple of account lines that have to balance to zero — and the app's only real job is turning a folder of those files into monthly rollups and category trends without asking me to trust a third party with read access to my bank.

## Why it's paused, not finished

Manual entry is the honest tradeoff for the privacy, and it's also exactly why this one is paused rather than actively developed — the discipline of logging every transaction by hand held for about four months and then didn't. The dashboard and parser both work fine; the bottleneck turned out to be the human step upstream of them. Next attempt is probably a lightweight CSV-import path from bank statement exports, which keeps the "nothing auto-connects" principle while cutting the entry friction that actually killed the habit.
