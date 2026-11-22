---
layout: ../../../../../layouts/Manual.astro
title: "When something doesn't work"
nav: "When something doesn't work"
part: 3
order: 14
purpose: >-
  Answers to common questions and problems, each with its cause and what helps.
draft: true
translation: /codedeck/manual/de/nachschlagen/probleme/
---

<aside class="plan">

**Instructions:** Worded as questions, each answer with cause and remedy. Collect questions from field tests and feedback
 (`docs/PLAN.md`, `docs/praxistest-*`). Starting list below, add to it while writing.

</aside>

## CodeDeck does not see my session

<aside class="plan">

**Content:** Coding agent not connected, session started before connecting.

</aside>

## The question shows in the terminal but not in the desktop app

**What you see:** CodeDeck reports that an AI session is asking something, for example for permission to run a command. But in the desktop app of your coding agent, in the browser or on your phone, the question does not appear, and there the session looks as if it were stuck. When you open the session in the terminal, the question is there.

**Cause:** A coding agent asks for permission in the program in which the session actually runs, that is, in the terminal. With Claude Code, Remote Control is meant to pass such questions on to the desktop app, the browser and the phone as well. At the moment this does not work reliably: depending on the version of Claude Code and on the kind of question, it arrives there or it does not. This is a known problem of Claude Code, with many bug reports about it, and not one of CodeDeck. CodeDeck does not interfere with permission questions.

**What helps:** Open the session in the terminal and answer the question there. In the sessions column you do this with the tool **Open in a terminal**, which appears when you point at the card with the mouse, or by clicking the card with the middle mouse button. If the session runs in tmux, simply close the terminal window again afterwards; the session keeps running. Then you can go on working in the desktop app as usual.

This behaviour is still being watched. As soon as it is clear when questions arrive and when they do not, CodeDeck will be adjusted to it.

## ▶ and ＋ are missing

<aside class="plan">

**Content:** tmux or the coding agent is missing; computer check.

</aside>

## The terminal does not open

<aside class="plan">

**Content:** no terminal program found, `$TERMINAL`.

</aside>

## Pull is blocked

<aside class="plan">

**Content:** Reasons and remedy.

</aside>

## Copying diagnostics and reporting a problem

<aside class="plan">

**Content:** CodeDeck menu.

</aside>
