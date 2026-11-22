---
layout: ../../../../../layouts/Manual.astro
title: "What CodeDeck takes off your hands"
nav: "What it does for you"
part: 1
order: 2
purpose: >-
  This page uses six everyday questions to show how CodeDeck helps you when you program with an AI.
translation: /codedeck/manual/de/einleitung/nutzen/
---

When you work with a coding agent, the same questions come up again and again. On this page you'll find them in order, the way they turn up over a working day, each with the answer CodeDeck gives.

## What are my AI sessions doing right now?

As soon as more than one **AI session** is running, it's easy to lose track. Perhaps one session is working on a new feature while a second is revising the documentation, and a third one you started last night and almost forgot.

CodeDeck shows you all sessions of a project in one list. Each session says in a few words what it is doing right now and how long it has been at it. Each session also gets a **colour** of its own and a short name, which it keeps everywhere. So even on a changed file or on a point in the history you immediately recognize which session is behind it.

If you work on several projects, the **project list** shows you in which project a session needs something from you right now. You don't have to open each project one by one for that.

## Is a session waiting for me?

An AI session often stops because it has a question or asks for permission to run a command. If you are working in another window at the moment, it can sit there waiting unnoticed for a long time.

CodeDeck clearly highlights such sessions and tells you **what they are waiting for**. In the same way you find out when a session has finished its work and is waiting for your next task. If you like, CodeDeck then also lets you know through the taskbar and with a notification on the desktop. If you don't want to be disturbed right now, you switch these notifications off for a while.

## What did the AI change?

When a session has finished a task, you want to know what it changed in your project. In the chat, that has long scrolled out of sight and is spread over many messages.

CodeDeck shows you the changes in one place. First you see as an overview which files are new and which were deleted, moved or edited. Click a file and you see the changed lines below it, the so-called **diff**. You can look at the changes of one particular **turn**, that is everything a session did in response to a single prompt, or at everything that has changed since the last commit. You tick off the files you have looked at, so you don't lose the thread when there are many changes.

## How do I get back if something goes wrong?

Sometimes you don't like the result of a turn, or the AI has gone down the wrong path. Without precautions it is tedious to restore the state from before, especially if you have changed other things since the last commit.

That's why CodeDeck creates a **snapshot** on its own, a backup of your project files, before a session changes something in your project for the first time in a turn, and another one when it is done. You see these points on the **trail**, the history of your project at the edge of the window. Click a snapshot and you see what has changed since then, and with "Go back to here" you restore the files as they were at that moment. Before CodeDeck does that, it also saves the current state. So you can undo the step back as well.

With its colour, the trail also shows you **how safe your work is** right now: whether there are still changes that are not committed, whether your commits exist only on your computer, or whether they are already on a server.

## How do I tell the AI exactly what I mean?

Often you want to show the AI something specific for the next step: a file it should take as a model, a change it should look at again, or a single line where something caught your eye. Typing out paths and describing places is tedious and error-prone.

In CodeDeck you **attach** such things with one click. You can attach files and folders, changes, comments on single lines of a diff, and hints you wrote directly into a file with `@ai`. CodeDeck collects everything under **Next prompt**. When you send the session your next prompt in the chat, it receives the attachments along with it, and the list is empty again afterwards. Until then you see exactly what the AI will get in addition.

## And what about the AI's drafts and notes?

During a turn, more than the actual code often comes into being: a draft, a small test script, a note or a page the AI has published somewhere. Such things usually don't belong in the project, but they shouldn't get lost either.

The **Workbench** collects them separately from your actual work. CodeDeck asks every session at its start to put drafts into a folder of their own in the project, which Git ignores. On the Workbench you see these files, plus files a session wrote outside the project and pages it published. What you want to keep you move into the project; the rest you clear away.
