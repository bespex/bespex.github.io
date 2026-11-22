---
layout: ../../../../../layouts/Manual.astro
title: "Preparation: setting up CodeDeck"
nav: "Preparation"
part: 2
order: 1
purpose: >-
  After this chapter, CodeDeck is running, knows your coding agent and has your first project on its list.
translation: /codedeck/manual/de/tutorial/01-vorbereitung/
---

Before the first round of work can begin, there are three things to do: CodeDeck has to run on your computer, it has to be connected to your coding agent, and it has to know which projects you work on. This only takes a few minutes, and you do it only once.

## Installing CodeDeck

How to install CodeDeck and update it later is described in the appendix under [Installation](/codedeck/manual/en/appendix/installation/). Once CodeDeck is installed, you start it like any other program from your desktop's menu, or with the command `codedeck` in the terminal.

## Welcome and computer check

On the first start, the window **Welcome to CodeDeck** opens. By this time, CodeDeck has already looked at which programs on your computer it can work with, and it shows you the result as a list.

![The welcome window: at the top "Everything CodeDeck needs is there.", below it the list of programs found, such as Claude Code, git and tmux, each with "found" or "missing" and a rating; under Claude Code the note "Not connected yet" with the button "Connect"](/codedeck/manual/en/vorbereitung-willkommen.webp)

Each row names a program and tells you whether CodeDeck has **found** it or whether it is **missing**. Next to it you see how important the program is for CodeDeck:

- **essential** means that CodeDeck needs it for its actual work. This includes your coding agent, git and tmux.
- **helpful** means that without the program a part of CodeDeck is missing, for example opening a session in the terminal with one click, or the icon in your desktop's panel.
- **nice to have** means that the program makes the work more pleasant, for example a small viewer for Markdown files or diffs.

When you point at the ⓘ symbol at the end of a row, CodeDeck explains what it needs the program for. If a program is missing that can be installed with your system's package manager, CodeDeck shows the matching command below the row, ready to copy. After you have installed something, click **Check again**, and the list is updated. You find detailed notes on each program in the appendix under [Programs](/codedeck/manual/en/appendix/programs/).

If your desktop runs under Wayland, the welcome window also shows a note on which functions are limited there and how you can still set up a keyboard shortcut for CodeDeck. The background is explained on the page [Wayland and X11](/codedeck/manual/en/appendix/wayland/).

Under your coding agent, the window also shows whether it is already connected to CodeDeck. The next section explains what this is about.

**Tell me more** takes you to a second page. In four short sections, it explains what a project is, how the project list is organised and how CodeDeck learns about your AI sessions. You can read it now or rely on this tutorial, which explains the same things in more detail.

![The second page of the welcome window, "Your projects", with four boxes: The project list, A project, Hearing AI sessions, Adding and opening](/codedeck/manual/en/vorbereitung-deine-projekte.webp)

The welcome window appears every time CodeDeck starts, until you tick **Don't show this at start** at the bottom. Should an essential program disappear later, for example after a change of system, CodeDeck shows the window again by itself. You can also open it at any time from the CodeDeck menu behind the logo, with the entry **Welcome and computer check**.

## Connecting the coding agent

For CodeDeck to see what your AI sessions are doing, your coding agent has to let CodeDeck know: when a session starts, when it works, when it asks you something and when it has finished its turn. For this, you connect the coding agent to CodeDeck once.

The easiest way is right in the welcome window. If your coding agent is not connected yet, its row says **Not connected yet**, with the button **Connect** next to it. One click is enough; afterwards it says **Connected with CodeDeck**.

CodeDeck adds a small command to your coding agent's settings, which from then on reports every step of a session to it. Nothing else in the file changes, and the previous version is kept as a copy next to it. AI sessions that were already running before you connected report from their next step on, so you don't have to restart them.

### Several configurations and the settings

In Claude Code, a **configuration** is a folder such as `~/.claude`, where the coding agent keeps its settings and its login. Most people have exactly one. If you use one account for work and one for private projects, for example, you have two. The welcome window offers you a button of its own for each configuration that is not connected yet.

Everything else about this is in the settings, in the section **Coding agents**. The settings open in a window of their own, and you can reach them at any time, even when no project is open yet: on the start page from the ⋯ menu at the top right, in the project window from the quick settings and **All settings…**, and from the CodeDeck icon in your desktop's panel.

![The settings in the section Coding agents: three configurations of Claude Code, one of them "Connected" with the button "Disconnect", two "Not connected" with the button "Connect"](/codedeck/manual/en/vorbereitung-coding-agents.webp)

CodeDeck treats each configuration as an **account** of its own and later shows its name, mark and colour on the projects and sessions. You can change the name here. This is also where you connect further configurations, and **Disconnect** removes a connection again.

How the reports work technically is explained in the [AI basics](/codedeck/manual/en/reference/ai-basics/). Which coding agents CodeDeck supports is listed in the appendix under [Coding agents](/codedeck/manual/en/appendix/coding-agents/).

## Adding the first project

For CodeDeck, a **project** is a folder in which you work with a coding agent. Usually it is a git repository, but it can also be a folder that contains several repositories. CodeDeck remembers your projects in a **project list** and follows the AI sessions of every project on that list, even when the project's window is closed.

On the first start, the list is still empty, and CodeDeck offers you two ways to fill it.

![The empty project list with the note "No projects yet" and the two buttons "Add a project…" and "All projects in a folder…"](/codedeck/manual/en/vorbereitung-leere-liste.webp)

**Add a project…** lets you choose a single folder, which then goes on the list. **All projects in a folder…** lets you choose a parent folder, and CodeDeck adds every folder in it as a project of its own. That is handy if you keep all your projects in one place, for example under `~/projects`.

Later, once the list is no longer empty, you find both commands in the ⋯ menu next to the heading "Projects". A click on a project in the list opens it in a **project window**. The next chapter shows in detail how this window is laid out.

### If the folder is not a git repository yet

CodeDeck needs a **git repository** for many of its tasks: only then can it create **snapshots**, that is, backups of your project files that you can return to, show you what changed in each turn, and go back to an earlier state. A git repository is nothing elaborate. It simply comes into being in your project folder; you need neither a server nor an account anywhere.

If the folder you added is not a git repository yet, you don't have to switch to the terminal. CodeDeck does it for you if you want. As soon as you open the project, you see the note **This folder has no git repository** in the middle of the window. It briefly explains what the repository is good for, and below it is the button **git init**.

![The note "This folder has no git repository" in the middle of the project window: it explains what a local repository makes possible and what stays empty without one, below it the button "git init"](/codedeck/manual/en/vorbereitung-git-init.webp)

A click on **git init** makes the folder a git repository with the branch `main`. CodeDeck never does this by itself, because it changes your project; it only does it when you press the button. Your files stay as they are. You also find the button at the bottom of the file list next to "No git repository", in case you don't have the note in the middle in front of you.

## Try it out

Check in the welcome window whether all programs rated as essential were found, and whether your coding agent says **Connected with CodeDeck**. Then add a small project of your own to the list and open it with a click. If it is not a git repository yet, make it one with **git init**. Finally, open the settings and look in the section **Coding agents** to see under which name CodeDeck lists your configuration.

## More on this

- [Projects and windows](/codedeck/manual/en/reference/projects/): all about the project list, groups and several project windows.
- [Accounts and usage](/codedeck/manual/en/reference/accounts/): using several configurations of your coding agent.
- [Programs](/codedeck/manual/en/appendix/programs/), [Coding agents](/codedeck/manual/en/appendix/coding-agents/) and [Wayland and X11](/codedeck/manual/en/appendix/wayland/) in the appendix.
