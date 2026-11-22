---
layout: ../../../../../layouts/Manual.astro
title: "AI sessions in detail"
nav: "AI sessions"
part: 3
order: 3
purpose: >-
  Every state of an AI session, where sessions can run and what CodeDeck can do with them.
draft: true
translation: /codedeck/manual/de/nachschlagen/sessions/
---

<aside class="plan">

**Instructions:** Check: `SessionsPanel.tsx`, `doors.rs`, `place.rs`, `tmux.rs`, `docs/SITZUNGEN.md`,
 `docs/SITZUNGEN-PRUEFUNG.md`, `harness/claude.rs` (`parked`, `attach`).

</aside>

## The states

<aside class="plan">

**Content:** working, asks, may be asking, turn done, idle, ended, in the background, starting.

</aside>

## Where a session runs

<aside class="plan">

**Content:** tmux (started by CodeDeck), a terminal of its own, desktop app, in the background, reachable remotely.

</aside>

## Ways into a session

<aside class="plan">

**Content:** Answer, Terminal, Desktop; what is offered depending on place and computer, and why.

</aside>

## Starting, resuming, ending

<aside class="plan">

**Content:** What CodeDeck starts and ends (only sessions it started itself), viewing and copying the start command.

</aside>

## Title, colour, short name

<aside class="plan">

**Content:** How sessions are named and coloured; renaming; removing from “Earlier”.

</aside>
