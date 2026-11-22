---
layout: ../../../../../layouts/Manual.astro
title: "AI basics for CodeDeck"
nav: "AI basics"
part: 3
order: 1
purpose: >-
  The terms around AI and coding agents that you need for CodeDeck, explained simply.
draft: true
translation: /codedeck/manual/de/nachschlagen/ki-grundlagen/
---

<aside class="plan">

**Instructions:** For readers without experience with coding agents. Explain what holds in general, then how CodeDeck
 deals with it. Check: `docs/KONZEPT.md` 2.x, `harness/mod.rs` (Event, Capabilities).

</aside>

## Coding agent

<aside class="plan">

**Content:** A program that reads and writes code with an AI model (example: Claude Code).

</aside>

## AI session and conversation

<aside class="plan">

**Content:** A session is an ongoing conversation in a project; resuming, ending.

</aside>

## Prompt and turn

<aside class="plan">

**Content:** A prompt starts a turn; the turn ends when the AI is done or asks.

</aside>

## Context and tokens

<aside class="plan">

**Content:** What the AI “knows”, why context is limited, what tokens are, compacting/clearing.

</aside>

## Permissions and questions

<aside class="plan">

**Content:** Why a coding agent asks before running commands; where the question is answered.

</aside>

## Hooks: how CodeDeck listens

<aside class="plan">

**Content:** What hooks are, which events CodeDeck listens to, what is changed when connecting.

</aside>

## Start rules

<aside class="plan">

**Content:** The fixed text that every new session gets once, and why (scratch folder, naming links).

</aside>
