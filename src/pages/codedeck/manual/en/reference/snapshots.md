---
layout: ../../../../../layouts/Manual.astro
title: "Snapshots"
part: 3
order: 5
purpose: >-
  How CodeDeck saves your work before every turn, where the snapshots are kept and how you go back.
draft: true
translation: /codedeck/manual/de/nachschlagen/snapshots/
---

<aside class="plan">

**Instructions:** Check: `src-tauri/src/snapshot.rs`, `bridge.rs` (points in time), `Trail.tsx`.

</aside>

## When CodeDeck saves

<aside class="plan">

**Content:** before the first write of a turn, at the end of the turn; what is saved (uncommitted files too).

</aside>

## Where the snapshots are kept

<aside class="plan">

**Content:** `refs/codedeck/snapshots/` in the repository; not pushed; space needed.

</aside>

## Going back and undoing it

<aside class="plan">

**Content:** How it goes, what happens to uncommitted changes.

</aside>

## Tidying up

<aside class="plan">

**Content:** How long they stay, how to remove them.

</aside>
