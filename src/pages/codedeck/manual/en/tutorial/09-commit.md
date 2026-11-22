---
layout: ../../../../../layouts/Manual.astro
title: "Files and commit"
nav: "Files and commit"
part: 2
order: 9
purpose: >-
  You find your way around the file tree and bring your work into Git with commit and push.
draft: true
translation: /codedeck/manual/de/tutorial/09-commit/
---

You have checked the turn, and you like the result. Now you keep it safe in Git. In this chapter you get to know the file list better and learn how to commit and push with CodeDeck.

## The file tree

The file list on the far right shows the files of your project as a tree. If it is folded, you open it with **Ctrl+B** or the button at the top of the narrow bar.

![The file list: at the top the branch with its numbers, below it the search field and the filters, then the tree with highlighted folders, a number at changed folders and a letter at a changed file](/codedeck/manual/en/dateien-baum.webp)

**What you see in the tree:**

- Files and folders with changes that are not committed yet have a coloured name. A letter on the right says what happened: **M** for modified, **A** for added, **?** for new and not yet known to Git, **R** for renamed. These are the short signs Git itself uses, for example in the command `git status --short`. CodeDeck uses them too, so you recognise them in the terminal and in other Git programs. If you point at a letter, CodeDeck explains it. Deleted files stay in the list, grey and struck through, until you commit.
- A folded folder shows next to its name how many changes are inside it. If you let the mouse rest on its name, you see a profile: files, size, estimated tokens, changes, and which sessions have written in it.
- A dot in the colour of a session shows that it has just changed the file. In the list's quick settings you can choose to keep the dots until the next commit.
- An **@** marks a file with @ai hints, a paperclip an attached file.
- Folders that are a Git repository of their own carry their branch. A click on it opens their Git actions.

**How you work with it:** A double click opens a file to view it, a click with the middle mouse button opens it for editing. When you move the mouse over a row, **Edit**, the **paperclip** and **⋯** appear. The ⋯ menu or a right click holds everything else: copy the path, open in the file manager or terminal, rename, move to the trash, attach, mark as important, and hide. For folders, new files and folders and "Open as project" are added.

Holding **Ctrl**, you select several entries; holding **Shift**, a whole range. The menu then acts on all selected entries.

You can get around the tree with the keyboard too: the arrow keys move you, **Right** opens a folder and **Left** folds it, **Enter** opens a file to view it and **Ctrl+Enter** for editing, the **space bar** attaches, and the context menu key opens the menu.

**Searching and filtering:** The field **Search the project** finds any file in the whole project, even if its folder is folded. A few letters from the name are enough. The filters below show only certain files: **New** and **Changed** show what is open, **Attached**, **@ai** and **Important** what you have marked. Within a group, each chosen filter adds to what is shown; between the two groups, they narrow it down. So "Changed" together with "Important" shows only the changed important files. With a search or a filter, the tree becomes a flat list, and the orange symbol on the right clears the filters.

**Hiding and important:** What you don't want to see, you hide through the menu, for example a large folder with test data. What Git ignores, such as `node_modules`, is hidden by itself. Whether hidden things show faded or disappear completely, you set in the list's quick settings, the symbol with the sliders. What you need often, you mark as **important**: it then stands in the tree with a bright, bold name, an important folder with a filled symbol.

## Branch and numbers at the top

At the top of the file list is the **branch** you work on, `feature/rate-limit` in the picture. The numbers next to it sum up what is open: the number with the document counts the changes that are not committed yet, the number with **↑** the commits not pushed yet, and a number with **↓** the commits waiting on the server.

![The top of the folded file list: the button to open it, below it the branch symbol with the numbers 5 and 2](/codedeck/manual/en/dateien-leiste.webp)

The folded bar shows these numbers too, so you always have them in view.

## The Git actions

A click on the branch or **Ctrl+G** opens the **Git actions**. They hold the four steps you need all the time when working with the AI, each with a sentence on what it does.

![The Git actions: Fetch and Pull, below them "5 uncommitted changes" with the field for the commit message and the Commit button, then "2 commits not pushed yet" with Push](/codedeck/manual/en/dateien-aktionen.webp)

- **Fetch** looks on the server for new commits. Your files stay as they are.
- **Pull** brings new commits from the server into your files. This only works when there is something new there and you have no commits of your own that are not pushed yet. If there are new commits on both sides, Git would have to merge them. CodeDeck deliberately doesn't do that; for this you use the command line, for example with `git pull --rebase`. The numbers come from the last fetch, which is why Fetch is right above.
- **Commit** saves your changes with a message as one commit in your repository.
- **Push** sends your commits to the server, so they are safe there too. If your branch has no counterpart there yet, Push **publishes** it. If your repository has no server at all yet, you enter its address under **Add remote**, and from then on Push goes there.

If you point at an action, you see the exact Git command before it runs. Afterwards it shows what Git answered. All commands CodeDeck has run are listed under **Git commands** with **Ctrl+Shift+G**. What lies behind fetch, pull, commit and push is explained in the [Git basics](/codedeck/manual/en/reference/git-basics/).

## Committing

The easiest place to commit is the **Changes** tab. Above the changes of each repository there is a line for the commit message.

![The commit line in the Changes tab: "orbit-api", the branch and "5 uncommitted changes", below it the field "Commit message for orbit-api" and the Commit button](/codedeck/manual/en/dateien-commit.webp)

Write in one sentence what has changed, and click **Commit** or press **Ctrl+Enter**. The commit contains all changes of this repository that are not committed yet. Staging single files or lines, as some Git programs offer, is deliberately not part of CodeDeck: what you see is what you commit. Afterwards the line on the trail turns pale amber, because the commit is now only on your computer.

If you made a mistake in the message and the commit is not pushed yet, you can change it: choose the commit on the trail, and the Changes tab shows a pencil next to its message, **Change the commit message**.

## Pushing

As long as commits are only on your computer, they are lost if the disk fails, and nobody else sees them. So push regularly, at the latest when a piece of work is done. To do this, open the Git actions and click **Push**. Afterwards the line on the trail turns grey, and the top commit carries the name of the server.

### No server, no push

Pushing needs your repository to be connected to a second repository on a server, for example on GitHub, GitLab or a server of your own. Git calls this connection a **remote**, and the first one is usually called `origin`. If you cloned your project from a server, the connection is already there.

If, on the other hand, you created your repository with **git init**, as described in [chapter 1](/codedeck/manual/en/tutorial/01-preparation/), at first there is only the repository on your computer. You can still commit, and the snapshots work too; only push is not available. The Git actions tell you so with "No remote yet: this repository exists only here."

To change that, you create an empty repository with the provider of your choice and copy its address, for example `git@github.com:you/project.git`. In the Git actions, you enter it under **Add remote**. CodeDeck connects your repository to it as `origin`, and the next click on **Push** publishes your branch there.

## Try it

Commit the changes of your last turn in the **Changes** tab with a short message. Then open the Git actions with **Ctrl+G**, point at **Push**, read the command and click it. Finally, look at the trail to see how the colour of the line has changed.

## More on this

- [Git basics](/codedeck/manual/en/reference/git-basics/): commit, branch, push and pull explained.
- [Projects and windows](/codedeck/manual/en/reference/projects/): projects with several repositories.
- [Settings](/codedeck/manual/en/reference/settings/): the section "Files and folders".
