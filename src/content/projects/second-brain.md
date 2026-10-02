---
title: "Second Brain"
description: "A shared context layer in Notion so a handful of agents across a few projects work from the same up-to-date state."
stack: ["Claude", "Grok", "Notion", "MCP"]
featured: false
---

## Overview
Second Brain is a shared context layer in Notion, exposed through the Notion MCP server. The point is that 4–6 agents across 3 active projects read and write the same state, instead of each one drifting off a stale copy.

## What I built
- A Notion workspace the agents can reach through MCP, so ongoing work stays in one place
- A proactive Grok bot that asks questions about that work, surfaces priorities, and writes updates back to Notion — context stays current without someone pasting status updates by hand
- A content path for Builders Collective Ottawa, where agents share brand and event context and draft posts and announcements from it

## Design notes
- **One source of state:** if it isn't in Notion, the agents don't get to invent a second version.
- **The bot does the upkeep:** questions and writebacks replace a manual status ritual.
- **Brand context included:** drafts for the collective come from the same place as the project notes.
