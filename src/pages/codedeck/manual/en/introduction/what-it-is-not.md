---
layout: ../../../../../layouts/Manual.astro
title: "What CodeDeck is not"
nav: "What it is not"
part: 1
order: 3
purpose: >-
  Here you learn what CodeDeck deliberately doesn't do and why, so you don't expect anything it can't do.
translation: /codedeck/manual/de/einleitung/abgrenzung/
---

CodeDeck has a clearly defined job: it shows you what your AI sessions are doing, keeps your work safe and helps you give the AI the right things. Much of what lies close by it deliberately leaves to other programs. This page explains what that is and why.

## Not an editor

You don't write code in CodeDeck. When you want to read or edit a file, CodeDeck opens it in the program you have set up for that, or in a small viewer that suits the file type. So you keep working with the editor you know, and CodeDeck doesn't have to pretend to be a better development environment.

## Not a coding agent and not a chat

CodeDeck contains no AI. The AI runs in your coding agent, and that is also where you talk to it. Two places to talk to the AI would be one too many, and with every task you would have to think about where to write it.

CodeDeck doesn't write prompts for you either. What the AI gets from CodeDeck is up to you: you decide by attaching something to the next prompt. On top of that there are only a few fixed **start rules** that every new AI session receives when it starts, for example the request to put drafts into the folder for drafts. You can read these rules word for word in CodeDeck at any time.

## Not a complete Git program

CodeDeck shows you the state and the history of your project and offers the Git steps you need all the time when working with the AI: committing, pushing, fetching new commits (Pull and Fetch) and changing the message of a commit that isn't pushed yet. You can't switch, merge or rebase branches in CodeDeck. For that you keep using the command line or the Git program you are used to. This keeps CodeDeck clear, and it can't break anything you don't have an overview of.

## Not an online service

CodeDeck runs entirely on your computer. There is no account, no sign-in and no be spex server your data passes through. The AI itself of course keeps working the way your coding agent intends, which usually means through its provider's service.

## Not a replacement for your own judgement

CodeDeck makes visible what the AI has changed, and it makes it easy to go back a step. But whether a change is right is still for you to decide. CodeDeck doesn't check code, and it doesn't replace a review by a human if your project needs one.

## Not a brake on the AI

CodeDeck doesn't ask before every change whether the AI may make it. The AI works as freely as you have set it up in your coding agent. The safety net comes afterwards instead: because a snapshot is created before every turn, you can always go back. That is more convenient than approving every single step beforehand.
