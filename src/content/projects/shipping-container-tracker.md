---
title: "Shipping Container Tracker"
description: "Java back-end application emphasizing clean OOP, validation, and maintainable structure."
stack: ["Java"]
repo: "https://github.com/SyedQem/TrackShippingContainers"
featured: true
---


## Overview
A Java CLI-based back end application that tracks shipping containers and their contents using RFID style identifiers. I built this project with my team, Uday and Srivathsan (Shout out to the boys!), as a part of my coursework to practice clean domain-modeling, validation, and designing workflows that prevent invalid system states.

## What I built
- A shipment and container domain model with clear ownership rules and state transitions
- Validation logic to prevent invalid container states and inconsistent updates
- A command driven CLI workflow for querying and updating data of containers

## Design notes
- **Explicit domain boundaries:** kept business rules inside domain models instead of scattering logic across commands.
- **Validation as core behavior:** treated correctness checks as first-class features, not defensive afterthoughts.
- **Simplicity over abstraction:** optimized for clarity and extension rather than over-engineered patterns.



