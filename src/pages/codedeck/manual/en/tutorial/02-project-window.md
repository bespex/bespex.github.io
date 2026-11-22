---
layout: ../../../../../layouts/Manual.astro
title: "The project window"
nav: "The project window"
part: 2
order: 2
purpose: >-
  You get to know the parts of the project window and learn where to find what and how to switch between projects.
translation: /codedeck/manual/de/tutorial/02-projektfenster/
---

In the previous chapter you opened your first project. The window that opened is the **project window**. It always shows you one project, the one currently shown, with everything that belongs to it: its AI sessions, their changes, its history and its files. This window is where you spend most of your time with CodeDeck. This chapter gives you an overview of its parts. After that, you get to know the project list more closely, which decides which project the window shows, and the menus you can reach from anywhere.

## The parts at a glance

The project window is divided into columns. Each column answers a question that comes up when you work with the AI.

![The project window with all columns, numbered 1 to 6: on the left the project list, next to it the AI sessions and below them Next prompt, in the middle the deck, to its right the trail and on the far right the file list](/codedeck/manual/en/projektfenster-bereiche.webp)

1. **The project list** on the far left shows which project the window is showing and whether anything is going on in your other projects. You use it to switch to another project. The section [The project list](#the-project-list) further down explains how.
2. **The sessions** next to it show all AI sessions of this project, what they are doing right now and whether one is waiting for you. At the top of this column you start new sessions. That is the subject of chapter 3, [Start an AI session](/codedeck/manual/en/tutorial/03-start-session/).
3. **Next prompt** at the bottom of the same column sums up what you have attached to the prompt for the next turn. Chapter 7, [Next prompt](/codedeck/manual/en/tutorial/07-next-prompt/), explains attaching.
4. **The deck** in the middle is the large working area. It has four tabs: **Activity** shows what the sessions have done in the last few hours, **Changes** shows what they have changed, **Workbench** collects whatever else came up, and **Next prompt** shows everything that goes along with your next prompt. On the right of the tab bar is the question the open tab answers, and the bell next to it shows you the latest events and tips. Each tab has its own chapter, from [Activity](/codedeck/manual/en/tutorial/04-activity/) to [Next prompt](/codedeck/manual/en/tutorial/07-next-prompt/).
5. **The trail** is the narrow column with the vertical line. It shows your project's history in git and the snapshots, that is, the backups CodeDeck creates during the turns, and its colour tells you how safe your work is right now. More on this in chapter 8, [Trail and snapshots](/codedeck/manual/en/tutorial/08-trail/).
6. **The file list** on the far right shows your project's files as a tree. At the top is the branch you are working on, and from there you reach the git actions such as commit and push. When you open a project for the first time, the file list is folded so that the deck has more room. All you see of it then is a narrow strip at the right edge. The button at the top of this strip or **Ctrl+B** shows it; in the picture it is shown. That is the subject of chapter 9, [Files and commit](/codedeck/manual/en/tutorial/09-commit/).

You don't have to memorise this layout right away. Every symbol in CodeDeck explains itself in a small tooltip when you point at it with the mouse. And the tour "Tutorial: project window" in the CodeDeck menu highlights the parts one after another whenever you want.

## The project list

At the very top of the left column is the **name of the project** this window is showing, and below it the folder it is in. The coloured sign to its left is the project's **mark**. CodeDeck gives every project a colour of its own and at first shows the first letter of its name, so that you can tell the projects apart in your desktop's taskbar as well. But you can also design the mark yourself: right-click the project in the list to open its menu and choose **Change mark…**. There you pick a symbol from a large selection, an emoji or a letter, and set the colour. The mark then appears in the project list, in the project window and in the window's icon in the taskbar. From the menu of a group you change the mark of all projects in it at once.

![The project list: at the top the current project orbit-api, below it "Waiting in other projects" with four cards, then "Recently" and the projects, grouped by folder](/codedeck/manual/en/projektfenster-projektliste.webp)

Below follows the list of all your projects. It is divided into several sections:

- **Waiting in other projects** appears only when there is something to report. It lists AI sessions from other projects that are asking you something right now or have finished their turn. Each card names the session and says in one line what it is waiting for. Cards with a question have a coloured border so that you don't overlook them.
- **Recently** shows the projects you opened last. That way you quickly get back to the two or three projects you are switching between at the moment.
- Below that are **all your projects**, grouped by the folders they are in. If, for example, several projects are in the folder `acme`, they form a group that you can fold and unfold with a click on its heading.

Next to a project's name there are sometimes small signs. They show you which account the AI sessions of this project work with, whether there are changes that are not committed or pushed yet, and whether there is something new on the workbench. When you point at a sign, CodeDeck explains what it means.

**A click on a project** shows it in this window. CodeDeck remembers for each project which tab was open and what you were looking at, so when you switch back you carry on where you left off. **Ctrl+Tab** takes you back to the previous project at any time. If you would rather have a project in a window of its own next to the current one, click it while holding **Ctrl**, or with the middle mouse button. When you point at a project, small tools also appear, one of them for opening it in a new window. You find further commands for a project in its menu, which you open with a right click.

You add new projects from the ⋯ menu next to the heading "Projects", as described in the [previous chapter](/codedeck/manual/en/tutorial/01-preparation/). That is also where you can sort the list.

## The file list in brief

You will need the file list now and then in the next chapters, so here are the essentials. It shows your project's files as a tree. Files and folders with changes that are not committed yet are highlighted in colour. If a session has just changed a file, a dot in that session's colour appears next to it. The field **Search the project** at the top finds any file in the whole project, and the small buttons below it narrow down the list, for example to changed or attached files.

A double click opens a file for viewing, a click with the middle mouse button opens it for editing. When you point at a file, two tools appear: **Edit** and the **paperclip**, with which you attach the file to your next prompt. Everything else is in the menu that you open with ⋯ or a right click, for example Rename, Hide or Mark as important. You can also drag files from the workbench onto a folder of the file list to take them into the project. Everything else, above all the git actions at the top of the list, is shown in [chapter 9](/codedeck/manual/en/tutorial/09-commit/).

## The CodeDeck menu and the quick settings

At the top right of the project list's header there are two buttons you will need again and again.

The **CodeDeck logo** on the far right opens the **CodeDeck menu**. It holds everything that does not belong to a particular project.

![The CodeDeck menu with the entries About CodeDeck, Welcome and computer check, Tutorial: project window, Tutorial: keyboard shortcuts, Manual, Website, Copy diagnostics, Report a problem and Close project](/codedeck/manual/en/projektfenster-menue.webp)

- **About CodeDeck** shows the version and the licence.
- **Welcome and computer check** opens the welcome window from the first chapter again, for example after you have installed a missing program.
- **Tutorial: project window** starts the tour of the window, and **Tutorial: keyboard shortcuts** shows you the most important keyboard shortcuts.
- **Manual** and **Website** open CodeDeck's pages in the browser.
- **Copy diagnostics** puts details about your CodeDeck version, your desktop and the connections on the clipboard. You need them when you report a problem with **Report a problem…**.
- **Close project** closes the project and its window with it. **Ctrl+W** does the same.

To the left of the logo, the symbol with the sliders opens the **Quick settings**. Here you find what you change more often in everyday work.

![The quick settings: "Do not disturb" with a choice, below it "Tell me when I look elsewhere" with the checkboxes "a session asks", "a turn is finished", "a git command fails", "in the taskbar" and "as a notification", at the very bottom "All settings…"](/codedeck/manual/en/projektfenster-schnelleinstellungen.webp)

**Do not disturb** turns off CodeDeck's notifications for a while, for example during a meeting. Under **Tell me when I look elsewhere** you decide when CodeDeck lets you know something while you are working in another window: when a session asks you something, when a turn is finished or when a git command fails. You also choose whether it does so in the taskbar, with a notification on the desktop, or both. **All settings…** opens the settings with all remaining options in a window of their own, among them the language and the colour scheme under **Interface**.

## Adjusting the columns

You can change the width of the sessions and of the file list by dragging the dividing line between two columns with the mouse. The deck in the middle takes the room that is left.

If you need more room, you can also fold columns completely. The **file list** is folded for a new project. You unfold and fold it with **Ctrl+B**. When folded, a narrow strip of it remains at the right edge, and a click on the button at the top of the strip opens it. You fold the **project list** with **Ctrl+Shift+L** or with a click on the project's mark at the top left. When folded, it shows only the marks of your projects one below the other, and a click on a mark still switches the project.

CodeDeck remembers the widths and the folded file list for each project separately. That way each project can look the way that suits working on it best. Whether the project list is folded, on the other hand, applies to all projects together, because it is what you use to move between projects.

## Try it out

Add a second project to the list if you don't have one yet, and switch to it with a click. Then go back to the first project with **Ctrl+Tab**, and back again to the second. Next, fold the file list with **Ctrl+B** and unfold it again, and drag the dividing line next to the sessions a little to the right. If you then switch projects and come back, CodeDeck has remembered the new width.

## More on this

- [Projects and windows](/codedeck/manual/en/reference/projects/): the project list, groups, several windows and the start page in detail.
- [Notifications](/codedeck/manual/en/reference/attention/): when and how CodeDeck lets you know, and "Do not disturb".
- [Settings](/codedeck/manual/en/reference/settings/): all settings, themes and the language.
- [Keyboard shortcuts](/codedeck/manual/en/reference/keyboard-shortcuts/): all keyboard shortcuts at a glance.
