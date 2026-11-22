---
layout: ../../../../../layouts/Manual.astro
title: "Start and follow an AI session"
nav: "Start an AI session"
part: 2
order: 3
purpose: >-
  You start an AI session, tell from its status what it is doing right now, and answer it when it asks you something.
translation: /codedeck/manual/de/tutorial/03-session-starten/
---

Now the actual round of work begins. In this chapter you start an AI session, give it a task and follow what it does in the **Sessions** column. When it asks you something, you answer it.

## What an AI session is

An **AI session** is a conversation with your coding agent in a particular project. You write in the session's chat what you would like, and the AI then works in your project folder: it reads files, changes them and runs commands. The session runs in a terminal or in your coding agent's desktop app, not in CodeDeck. CodeDeck shows you what it does.

Several sessions can run in one project at the same time, for example one for a new feature and one for the documentation. In CodeDeck each one gets its own **colour** and a one-letter **short name**, which it keeps everywhere: in the sessions column, on the files it changed and on its snapshots on the trail. You can learn more about sessions on the page [AI sessions](/codedeck/manual/en/reference/sessions/).

## Starting a session

There are two ways to start a session, and both lead to the same result: the session appears in the sessions column as soon as it reports its first step.

![The sessions column: at the top the account “Work” with the buttons ▶ and ＋, below it five AI sessions: one is working, two are asking something, one has finished its turn, and one is just being started](/codedeck/manual/en/session-starten-spalte.webp)

**In CodeDeck** you start a session with the two buttons at the top of the column. The **＋** button begins a new conversation. The **▶** button continues this project's last conversation in a new session, so the AI knows what it was working on last. As long as a session is already running in the project, ▶ does not start a second one.

CodeDeck starts the session in **tmux**, a program that keeps terminal sessions running in the background. This has two advantages: the session keeps running even if you close CodeDeck or a terminal window, and you can open it in a terminal at any time. With Claude Code, CodeDeck also starts the session so that you can reach it from the desktop app, in the browser or from your phone.

Right after the click, the line **Starting…** appears at the end of the list. It stays until the session reports its first step. When you start a new session in a folder where the coding agent has never worked before, it often first asks whether you trust the folder. Until that question is answered it does not report anything, which is why the line says **may be asking**. With the **Terminal** button you open the session and answer the question. After that you can simply close the terminal window: the session keeps running in tmux, only the window looking at it is gone. If you prefer the keyboard, you leave tmux with **Ctrl+B** followed by **D**, and the terminal is free for other things again.

**By hand** you start a session as usual: you open a terminal in the project folder and start your coding agent there. This session also shows up in CodeDeck as soon as it takes its first step, provided your coding agent is connected to CodeDeck (see [chapter 1](/codedeck/manual/en/tutorial/01-preparation/)). Sessions that were already running before CodeDeck are found in the coding agent's logs, and CodeDeck shows them too.

Now give your session a task. To do this, write in the session's chat, that is, in the terminal or in the desktop app, what the AI should do, for example “Add a section on installation to the README”.

## Reading the status

Each session is shown in the list as a **card**. The cards are in the order in which the sessions were started, and they keep their place. That way nothing jumps around when a session asks something or finishes.

At the top of the card are the short name, the session's title and, on the right, its **status** as a coloured badge.

![Three session cards side by side: on the left “working” with the current step, in the middle “asks · 3 min” with the permission question, the command and the “Answer” button, on the right “turn done · 6 min ago” with the session's last words and “See the turn”](/codedeck/manual/en/session-starten-zustaende.webp)

These are the most important states:

- **working** means that the session is working on your task right now. Below it is the step it is on, for example the file it is editing.
- **asks** means that the session is waiting for an answer from you, and the time next to it says since when. Its question is shown below. When it asks for permission for a command or a file, the command or file is shown right there, so you can decide without a detour.
- **turn done** means that the session has finished its work and is waiting for your next prompt. Below it are its last words, usually a short summary of what it did.
- **idle** means that the session is still running but has not done anything for a while.
- **ended** means that the session's program is no longer running. The conversation is not lost, though: you can continue it.

Sessions that are waiting for you, because they are asking or have a finished turn you have not looked at yet, are **highlighted**: their card is raised and has a coloured border. The number next to the heading “Sessions” counts them. A finished turn stays highlighted until you have looked at it or put it aside.

With the small arrow at the bottom left of a card you unfold its details: which files the session wrote, what CodeDeck attached for it, which folder it works in and what it was started with.

Sessions you are not busy with right now are collected by CodeDeck under **Earlier** at the end of the list. These include ended sessions, sessions CodeDeck only knows from the logs, and sessions that have been idle for hours. This area is folded as long as other sessions are running, and the most recently active session is at its top.

## Answering and switching to the session

At the bottom right of every card is the button that takes you to the session. Which one it is depends on where the session runs and what is needed right now:

- **Answer** appears when the session asks you something. It takes you to where the session runs: to the desktop app if it can be reached there, otherwise to the terminal.
- **Desktop** opens the session in your coding agent's desktop app if it can be reached there.
- **Terminal** opens the session in a terminal window. If it runs in tmux, the new window attaches to its tmux session. If you started it yourself in a terminal, CodeDeck brings that window to the front. This only works under X11, though; under Wayland you switch to it yourself.

You get the same with a double click on the card. A click with the middle mouse button always opens the session in the terminal.

There is one limitation you should know about: with Claude Code, permission questions currently do not always arrive in the desktop app, but they always show in the terminal. So if the desktop app shows no question although CodeDeck reports **asks**, open the session in the terminal, fastest with the middle mouse button. There is more on this under [When something doesn't work](/codedeck/manual/en/reference/troubleshooting/#the-question-shows-in-the-terminal-but-not-in-the-desktop-app).

When a turn is done, the card also shows **See the turn**. This button opens the Changes tab in the deck with exactly what the session changed in this turn. That is what [chapter 5](/codedeck/manual/en/tutorial/05-changes/) is about. For an ended session the button says **Continue**: with it you continue its conversation in a new session in tmux.

When you point at a card with the mouse, small tools appear as symbols to the left of the button. What each symbol does is told by its tooltip when you point at it.

![A session card with its tools shown: desktop app, terminal and ⋯ next to the “Desktop” button, below it the open menu with “Rename”, “Copy how it was started” and “Remove from list”](/codedeck/manual/en/session-starten-werkzeuge.webp)

Depending on the session, these are **Open in the desktop app** and **Open in a terminal**, as well as **Restart** and **Stop** for sessions that CodeDeck started. Stop only halts the program: the conversation is kept and can be continued. A session you started by hand, on the other hand, is ended where it runs. For a finished turn you will also find the check mark **Viewed**, which puts the card aside until the next turn. The last symbol, ⋯, opens the **More** menu. You open the same menu with a right click on the card. In it you can rename the session and give it a short name of your own, copy how it was started, or remove a session that is no longer running from the list.

## Choosing the coding agent and account

At the very top of the sessions column you see which **account** and which coding agent this project's sessions start with, in the picture “Work” with Claude Code. An account is a configuration of your coding agent, as you connected it in [chapter 1](/codedeck/manual/en/tutorial/01-preparation/).

![The account menu: “This project's sessions run with”, below it the accounts Work with a check mark and Private, at the very bottom “Set up accounts…”](/codedeck/manual/en/session-starten-konto.webp)

With a click on the name you choose a different account for this project. This choice determines only two things: which coding agent and which account **new** sessions start with when you start them with ▶ or ＋, and **which usage** is shown in the bars below it. Sessions that are already running keep their account, and sessions you start by hand run with the account you start them with. If sessions are still running with the previous account, CodeDeck asks whether you want to **let them run until they end** or whether CodeDeck should **stop them now**. **Set up accounts…** opens the settings in the Coding agents section.

The two bars below the account show how much of your quota with the provider has been used. The next chapter explains what they mean.

## Try it out

Start a new session in your project with **＋**. If the line shows **may be asking**, open the session with **Terminal**, answer the question and close the terminal window again. Give the session a small task in the chat and watch its status change from **working** to **turn done**. If it asks for permission along the way, answer it via **Answer**. Finally, unfold the details of its card and look at which files it wrote.

## More on this

- [AI sessions](/codedeck/manual/en/reference/sessions/): all states, ways into a session, sessions in the background and remote access in detail.
- [Accounts and usage](/codedeck/manual/en/reference/accounts/): using several accounts and keeping an eye on usage.
- [Notifications](/codedeck/manual/en/reference/attention/): how CodeDeck lets you know when a session is waiting for you.
- [Programs](/codedeck/manual/en/appendix/programs/): tmux and the terminal program.
