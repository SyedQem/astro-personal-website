---
title: "Maximus"
description: "A personal AI agent self-hosted on a Raspberry Pi 5, reached through Telegram and a content pipeline with a human approval queue."
stack: ["Raspberry Pi", "OpenClaw", "Gemini", "n8n", "Cloudflare", "Telegram"]
featured: false
---

## Overview
Maximus is a personal AI agent running on a Raspberry Pi 5 at home. I talk to it through a Telegram bot, and the box is reachable through a Cloudflare Tunnel.

## What I built
- The self-hosted agent, the Telegram control path, and the tunnel in front of it
- A content pipeline on the Claude API with ideator, drafter, and critic stages, feeding a Telegram approval queue before anything goes out

## Design notes
- **Local by default:** the agent lives on hardware I control, not only in someone else's dashboard.
- **Telegram is the interface:** no extra app to open.
- **A person still approves:** the critic stage lands in a queue, it doesn't publish on its own.
