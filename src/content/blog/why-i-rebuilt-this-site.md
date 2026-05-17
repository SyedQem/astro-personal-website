---
title: "why i rebuilt this site"
description: "the old site was nice. this one is more me."
date: "2026-05-16"
tags: ["meta", "design"]
draft: false
---

i shipped the first version of this site a few months ago. it had a space-themed background — nebulas, parallax stars, the works. i liked it. and i also liked it less every time i opened it.

the issue wasn't that it looked bad. the issue was it looked like *every other portfolio* on dev twitter circa 2023. emerald accent, glassmorphic cards, dark mode by default, a tagline about being "passionate about clean code." the surface area was generic even when the content was specific.

## what changed

a friend of mine ([mubarak](https://mubarakpiracha.xyz)) shipped his site recently and it just had *vibes*. lowercase, a little irreverent, monospace heading, basically zero ornament. it felt like him — not like a designer's mood board.

that was the unlock. the goal isn't *to look modern*. it's to feel like a place a specific person made.

## what i did

a few decisions:

- **dropped the nebula.** the background is now a quiet dot grid with a faint primary glow at the top. it gets out of the way.
- **switched to geist.** geist sans for body, geist mono for prompts and tags. one font family, two purposes.
- **lowercased everything.** headings, nav, badges. it's a vibe shift more than a design system.
- **added shadcn primitives.** buttons, cards, badges, separator. consistent, small, easy to extend.
- **added a `/now` page** because i wanted somewhere honest to write what i'm actually doing instead of a static "about."
- **added this blog** because, well, you're reading it. low pressure. occasional notes.

## stack

astro 5, react 19 (for islands only), tailwind 4, shadcn/ui patterns. zero radix yet — i'm trying to keep the bundle small for now.

## what's next

a few more posts when i feel like it. tightening the project case studies. probably a dark/light toggle eventually. that's the list. nothing earth-shattering.

thanks for reading. → [home](/)
