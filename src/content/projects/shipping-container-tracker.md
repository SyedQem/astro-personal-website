---
title: "Shipping Container Tracker"
description: "Java back-end application emphasizing clean OOP, validation, and maintainable structure."
stack: ["Java"]
repo: "https://github.com/SyedQem/TrackShippingContainers"
featured: true
---

## Overview
This project tracks shipping containers and their contents using RFID-style identifiers, with a focus on data correctness and system structure. I built it to practice clean backend design, validation, and modeling real-world constraints in Java.

## What I built
- Validation logic for prevention of invalid container states

- Shipment and Container domain model with clear ownership rules

- Command-driven workflow for querying and updating container data

## Design notes
- Emphasized clear object boundaries to keep domain logic isolated

- Used validation at the model layer instead of relying on callers

- Optimized for readability and extension over premature performance tricks
