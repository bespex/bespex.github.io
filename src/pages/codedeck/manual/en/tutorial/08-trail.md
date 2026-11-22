---
layout: ../../../../../layouts/Manual.astro
title: "Kept safe: trail and snapshots"
nav: "Trail and snapshots"
part: 2
order: 8
purpose: >-
  You read from the trail how safe your work is, and you go back to a snapshot when a turn went wrong.
draft: true
translation: /codedeck/manual/de/tutorial/08-trail/
---

Sometimes a turn goes wrong: the AI got lost, or it rebuilt something that was fine. Then you want to get back to where you were before, quickly and safely. That is what the **trail** and the **snapshots** are for: the snapshots are copies of your project files that CodeDeck keeps during the turns.

## What the trail shows

The trail is the narrow column with the vertical line between the deck and the file list. It shows the **history** of your project in Git, newest at the top. If there are more Git repositories in subfolders of the project, it shows their commits on the same line too.

![The folded trail: a vertical line with dots, amber at the top, grey further down](/codedeck/manual/en/trail-zu.webp)

The **colour of the line** tells you at a glance how safe your work is:

- It is **amber** at the top as long as there are changes that are not committed yet. They exist only in your project folder and in the snapshots.
- It is **pale amber with hollow rings** for commits that are only on your computer and not pushed yet.
- It is **grey with filled dots** for commits that are already on the server.

The newest pushed commit carries the name of the server, for example `origin`, and next to it how many commits are still to be pushed or fetched. A small spark in a dot means that a coding agent took part in that commit.

## With the mouse

If you let the mouse rest on the trail for a moment, it opens as a **timeline** across the deck. Then you see for each dot the commit message or the name of the snapshot, the time, the number of changed files and, separated by days, when what happened.

![The opened trail: at the top "Uncommitted changes in 2 repos", below it snapshots and commits ordered by day, each with its message, time and number of files](/codedeck/manual/en/trail-offen.webp)

A **click on a dot** shows in the Changes tab what that commit or snapshot changed. If you then click a second dot while holding **Ctrl**, CodeDeck compares the two. Every sign on the trail explains itself in a tooltip when you point at it.

## Snapshots

Before an AI session changes anything in your project for the first time in a turn, CodeDeck takes a **snapshot**, a copy of your project files. When the turn is over and something has changed, a second one follows. You don't have to do anything for this.

On the trail, snapshots appear in the colour of the session that caused them: an **anchor** before a turn, a **flag** at its end, and a **curved arrow** where someone went back. When three or more snapshots follow each other, CodeDeck folds them into a stack with their number, so the trail stays short. A click opens it.

Snapshots are not commits. They don't end up on your branches and are not pushed; they belong to you alone. The trail shows the snapshots since the last commit, because that is the work that isn't kept safe in any other way. CodeDeck keeps them for 14 days, at most 50 per repository. There is more on the page [Snapshots](/codedeck/manual/en/reference/snapshots/).

## Going back to a snapshot

This is how you get back what you had before a turn that went wrong:

1. On the trail, click the **anchor** before that turn. If it is in a stack, open the stack first.
2. The Changes tab now shows what has changed since that snapshot. Look at it to be sure it is the right one.
3. Click **Go back to here**.

![A chosen snapshot in the Changes tab: at the top its name, the session and the date, below it "11 files changed since this snapshot was taken, when the turn was over." and the button "Go back to here"](/codedeck/manual/en/trail-snapshot.webp)

CodeDeck asks once more and tells you exactly what will happen: the changed files are set back to how they were in the snapshot, and files that are new since then are deleted. You confirm with **Go back**.

![The question: "Puts 11 files back as they were in orbit-api; files that are new since then are deleted. What is there now is kept as a snapshot first, so you can come back to it." with the buttons "Cancel" and "Go back"](/codedeck/manual/en/trail-zurueckgehen.webp)

Before CodeDeck goes back, it keeps **what is there now** as a snapshot of its own. It appears on the trail with the curved arrow. If you change your mind, you click that snapshot and go back to it in the same way. So going back can always be undone, and you lose nothing.

If several sessions work in the project, you can choose **only this session** for a chosen snapshot, and the trail then shows only the snapshots of that one session. **Back to uncommitted** takes you back to the usual view of the changes.

## Try it

Let a session make a small change. When the turn is done, click the anchor before that turn on the trail and go back there with **Go back to here**. Check that the change has gone. Then click the new snapshot with the curved arrow and go back to it: the change is there again.

## More on this

- [Snapshots](/codedeck/manual/en/reference/snapshots/): how CodeDeck takes them, how long they stay and how they work underneath.
- [Git basics](/codedeck/manual/en/reference/git-basics/): commit, push and server explained.
- [Changes and turns](/codedeck/manual/en/reference/changes/): comparing two points.
