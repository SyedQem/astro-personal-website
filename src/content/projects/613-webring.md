---
title: "613 Webring"
description: "A webring connecting the personal sites of Ottawa builders, with an embeddable widget and a crawled index of member sites."
stack: ["JavaScript", "Vercel"]
demo: "https://613webring.ca"
featured: false
---

## Overview
613 Webring connects the personal sites of Ottawa builders. It lives at 613webring.ca, and member sites can drop in a small widget instead of maintaining a directory by hand.

## What I built
- The webring itself, plus an embeddable widget for member sites
- A crawled index of those sites, which is the data layer for community tools still on the list — a member matchmaker among them

## Design notes
- **A ring, not a directory:** members link to each other; the index is a side effect of that, not a spreadsheet.
- **Easy to embed:** the widget is the whole integration.
- **Index first:** the crawl is there so later tools have something real to read.
