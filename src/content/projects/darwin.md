---
title: "Darwin"
description: "Verified marketplace for Canadian university students — student-gated access, Stripe Connect escrow, and a live founding-tier waitlist."
role: "founding team"
stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Postgres", "Stripe", "Vercel"]
repo: "https://github.com/SyedQem/darwin"
demo: "https://darwinmarketplace.ca"
featured: true
---

## Overview
Darwin is a verified marketplace for Canadian university students. Access is gated with a student email, a student ID, and a face photo, so the people on both sides of a listing are actually students.

## What I built
- A verification flow that checks student email, student ID, and a face photo before someone can use the marketplace
- An escrow payment flow on Stripe Connect that holds funds when an order is placed and releases them only after the buyer and seller both confirm the handoff in-app
- The waitlist at darwinmarketplace.ca, including a paid founding-tier whitelist — checkout moved from Lemon Squeezy to Stripe, with claims processed through a live webhook
- The product with a 5-person founding team, through an MVP launch at Carleton and incubator applications to Hatch and Lead to Win

## Design notes
- **Trust before listings:** verification is the front door, not a setting buried in a profile.
- **Money stays put:** escrow only releases after both sides confirm the handoff.
- **Waitlist as a product:** the founding tier is a real checkout, not a fake email form.
