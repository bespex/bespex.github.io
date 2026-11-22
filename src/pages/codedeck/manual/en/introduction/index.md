---
layout: ../../../../../layouts/Manual.astro
title: "What CodeDeck is"
nav: "What CodeDeck is"
part: 1
order: 1
purpose: >-
  After this page you know what CodeDeck is for and how it runs alongside your coding agent.
translation: /codedeck/manual/de/einleitung/
---

## Working with a coding agent

When you program with a **coding agent** such as Claude Code, you describe in a chat what you want. The AI then reads the files of your project on its own, writes code, creates files and runs commands. This is fast, and often a few minutes are enough for something that used to take you an hour.

But all the chat shows you is one long, scrolling text. After a quarter of an hour you often no longer know exactly which files the AI has touched. When you run several **AI sessions** side by side, perhaps even in several projects, you sometimes notice only minutes later that a session has long been waiting for an answer from you. And when you don't like what a session produced, it isn't always clear how to get back safely to where you were before.

## What CodeDeck changes

CodeDeck is a desktop app for Linux that runs alongside your coding agent. It doesn't take over the conversation with the AI; it shows you what comes out of it.

In a window of its own you can see at any time **which AI sessions** are working in your project, which are **waiting for you** right now and **what they have changed**. Every time before a session changes something in your project, CodeDeck creates a **snapshot** on its own, a backup of your project files that you can return to later. And when you want to give the AI something for the next step, such as a file, a change or a comment on a line, CodeDeck collects it for you and attaches it to your **next prompt**. And because CodeDeck also shows you the **files of your project** as a tree, in which every file a session has changed carries that session's colour, you see at a glance where in the project work is going on.

CodeDeck doesn't push itself into the foreground. As long as everything runs, you can ignore the window or move it to the background. Only when a session needs something from you does CodeDeck speak up.

![The project window of CodeDeck: on the left the list of projects, next to it the AI sessions of the project with their state, in the middle the changes as a file tree, to its right the trail with the history of the project and on the far right the files of the project](/codedeck/manual/en/einleitung-projektfenster.webp)

## You keep working as you're used to

You still talk to the AI where you are used to: in the terminal or in the desktop app of your coding agent. That is where you write your tasks, and that is where you answer questions. CodeDeck has no chat of its own and writes nothing into your chat.

It's best to picture two windows side by side. In one you talk to the AI, in the other you see what happens in your project as a result. You can glance over at any time and don't have to scroll up in the chat or search through other windows.

![Sketch: on the left the window of the coding agent, where you talk to the AI, on the right next to it CodeDeck, showing the AI sessions, the changes and the history of the project](/codedeck/manual/en/einleitung-daneben.svg)

For this to work, you connect your coding agent to CodeDeck once. From then on, CodeDeck learns on its own when a session starts, when it is working, when it asks you something and when it has finished its work. The [tutorial](/codedeck/manual/en/tutorial/01-preparation/) shows you how to set up the connection.

If you like, CodeDeck also starts new AI sessions for you, with one click and in the right project folder. Even then the AI runs in your coding agent, and you can open any session in the terminal or in the desktop app and carry on working with it there.

## Everything stays on your computer

CodeDeck is not an online service. You don't need a be spex account, and CodeDeck itself sends nothing to the internet. Only when you click Push, Pull or Fetch in CodeDeck does Git talk to your project's server, exactly as on the command line. Everything CodeDeck knows about your projects lives in your project folder and in your home directory. Which data that is exactly is described on the page [Your data](/codedeck/manual/en/reference/data/).

<aside class="box">

### For the technically curious: how it all works together

CodeDeck learns what is happening in two ways.

The first way is the **hooks** of your coding agent. Hooks are small commands that the coding agent runs itself on certain events. When you connect your coding agent to CodeDeck, CodeDeck adds such a command to its settings. The command reports every event of an AI session to the running CodeDeck, for example that it has started, is writing a file, is asking for permission or has finished its turn. The report stays on your computer, and the content of your files doesn't go with it. If CodeDeck isn't running, the command does nothing. The settings file as it was before is kept as a copy, and "Disconnect" takes the entries out again.

The second way is **Git**. CodeDeck reads the state of your project, the changes and the history with the perfectly ordinary `git` program on the command line. That is why your own Git configuration and your credentials apply, and every command CodeDeck runs is shown to you.

The **snapshots** are Git commits too. But CodeDeck doesn't create them on your branches; it puts them under a name of its own (`refs/codedeck/snapshots/`) and uses a copy of the Git index. Your branches, your index and what you push stay untouched as a result.

</aside>
