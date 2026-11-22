---
layout: ../../../../../layouts/Manual.astro
title: "Who CodeDeck is for"
nav: "Who it is for"
part: 1
order: 4
purpose: >-
  This page helps you judge whether CodeDeck suits the way you work, and says what you need on your computer for it.
translation: /codedeck/manual/de/einleitung/voraussetzungen/
---

## Who gets the most out of CodeDeck

CodeDeck is made for people who work on real projects with a coding agent, not just ask it a question now and then. You get the most out of it when you give the AI larger tasks and then let it work on its own for a while. Afterwards you want to see exactly what it did, and you want to be able to go back safely if it doesn't fit.

CodeDeck becomes especially helpful when you run **several AI sessions** at the same time or switch between **several projects**. That is exactly when, with the chat alone, it's easy to lose sight of who is doing what and who is waiting for you.

If, on the other hand, you only use the AI now and then for a quick question and take over every answer yourself right away, you probably don't need CodeDeck.

## What you should bring along

You should know the basics of using a terminal, because many coding agents run there, and it helps with the installation too.

You don't need to know Git, though. CodeDeck uses Git in the background, and the manual explains everything you need to know about it at the point where it is needed. If you want to understand better what is behind terms like commit, branch or push, you'll find the basics on the page [Git basics](/codedeck/manual/en/reference/git-basics/). For terms from the world of AI there are likewise the [AI basics](/codedeck/manual/en/reference/ai-basics/).

## What you need on your computer

CodeDeck runs on **Linux**. It also needs three programs: **git** for the state and the history of your projects, a **coding agent** you work with, and **tmux**, so that CodeDeck can start, resume and end AI sessions for you. As a coding agent, CodeDeck supports Claude Code today. More are to follow.

CodeDeck also works without tmux, but then only as an observer: it shows you the AI sessions you started yourself, but it can't start new ones. Also helpful are a terminal program in which CodeDeck can open a session with one click, and an icon in your desktop's panel that quickly brings CodeDeck to the front. A few small viewers for Markdown, diffs and other formats make the work more pleasant, but they aren't required.

You don't have to check all of this beforehand. At its first start, CodeDeck looks at what is available on your computer and tells you in the **welcome window** what is missing and what it is needed for. You'll find detailed notes on the individual programs in the appendix under [Programs](/codedeck/manual/en/appendix/programs/) and [Coding agents](/codedeck/manual/en/appendix/coding-agents/). If your desktop runs on Wayland, also read the page [Wayland and X11](/codedeck/manual/en/appendix/wayland/) there, because some features behave a little differently then.
