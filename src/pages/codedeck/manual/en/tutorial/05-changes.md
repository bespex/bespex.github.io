---
layout: ../../../../../layouts/Manual.astro
title: "When a turn is done: Changes"
nav: "Changes"
part: 2
order: 5
purpose: >-
  You look at what a turn changed, comment on single lines for the AI and mark files as viewed.
translation: /codedeck/manual/de/tutorial/05-aenderungen/
---

Your session reports **turn done**. Now comes the most important step of a round: you check what the AI changed. That is what the **Changes** tab is for. The quickest way there is **See the turn** on the session's card.

## What a turn is

A **turn** is everything an AI session does in response to one of your prompts, until it is done and waiting for you again. Before the first change of a turn, CodeDeck takes a **snapshot**, a backup of your project files, and, if something changed, a second one at the end. What lies between these two points is exactly what the turn changed. This way you can look at each turn on its own, even when several sessions work in the same project.

## What you look at

At the top of the tab you choose which changes are shown:

- **All uncommitted** shows every change since the last commit, no matter who made it. This is how the tab opens if you have not chosen anything else.
- **Turn 6**, **Turn 7** and so on show the latest turns, each with the short name of its session. Older turns since the last commit are under **Earlier**.
- If you choose a point on the **trail**, the tab shows what that commit or snapshot changed. If you hold down **Ctrl** and click a second point, CodeDeck compares the two. There is more on this in [chapter 8](/codedeck/manual/en/tutorial/08-trail/).

![A chosen turn in the Changes tab: “What Claude did in turn 6” with “done 11:45”, below it the session, what you asked, what it said at the end, the counts of the changes and the tree of changed files](/codedeck/manual/en/aenderungen-runde.webp)

For a turn, a **short report** sits at the top: which session ran it, what you asked, and what the session said at the end. If the turn is still running, it says **still working**, and you see what has changed so far. To the right of it, **Attach** attaches the whole turn to your next prompt, **Dirq** opens it in be spex's diff program if it is installed (see [With Dirq](#with-dirq)), and **Before this turn…** takes you to the snapshot before it, from which you can go back.

## Reading the diff

A **diff** shows what changed in a file: removed lines in red with a minus, new lines in green with a plus, and a few unchanged lines in between so you can find your way. The [Git basics](/codedeck/manual/en/reference/git-basics/) explain more.

At the top right you choose between two views. **Structure** shows the changed files and folders as a tree and says for each one what happened to it: new, deleted, changed, moved or renamed. The counts above sum this up, and a click on a count filters the tree. A click on a file unfolds its diff right where it is. **Code** shows all diffs one below the other, file by file.

Next to each file is the short name of the session that wrote it, in its colour. The numbers on the right are the added and removed lines.

### With Dirq

If **Dirq**, be spex's diff program, is installed, CodeDeck uses it for showing diffs automatically. You do not have to set anything up for this. The tab then shows only the files in both views: a click no longer unfolds anything, and a **double click** opens that file's diff in Dirq. The **Dirq** button at the top opens the whole change with all its files. **Viewed**, **Attach** and the other tools stay here in the tab.

Dirq can do more than the built-in view, for example old and new side by side with the changed words marked, syntax colours, and more lines around a change. Everything Dirq can do is on [its page](/dirq/). If Dirq is not installed, CodeDeck shows the diffs the way this chapter describes.

## Commenting on lines

If you notice something about a line, you write the AI a **comment** right there. In the Code view, point at the line with the mouse and click the speech bubble that appears in the margin. Write what should change, and click **Attach to next prompt** or press **Ctrl+Enter**.

![A comment below a line in the diff: “Please cover the case without a client ID here too.”, below it the note that it is attached to your next prompt with the file, the line and its text, and the buttons “Cancel” and “Attach to next prompt”](/codedeck/manual/en/aenderungen-kommentar.webp)

The comment stays at the line and goes to the session with your next prompt, together with the file, the line number and the text of the line. That way you do not have to describe to the AI which place you mean.

With Dirq, you comment on lines in Dirq, for the uncommitted changes, the running turn and the changes since a snapshot. The comments reach your next prompt in the same way. [Chapter 7](/codedeck/manual/en/tutorial/07-next-prompt/) shows how attaching works as a whole.

## Marking files as viewed

With many changed files, it is easy to lose track of what you have already checked. That is why each file has the **Viewed** switch on its right. Once you have looked at a file, you click it: the file folds up, and the count at the top goes up, for example “2 of 5 viewed”.

The mark is only for you and has no effect on what goes into a commit. If the file changes again afterwards, for example in the next turn, CodeDeck shows **changed since viewed**, so that you look at it again.

## Opening, attaching and discarding files

When you point at a file with the mouse, its two most used tools and the ⋯ menu appear:

![A file in the tree with its tools shown: Edit, Attach and ⋯, on the right the “Viewed” switch](/codedeck/manual/en/aenderungen-werkzeuge.webp)

- **Edit** opens the file in your editor. The tooltip on the icon says which program starts.
- **Attach** attaches the change to this one file to your next prompt.
- **⋯** opens a menu with everything else: **View** for reading, **Its diff in Dirq** if Dirq is installed, **Show in tree**, which finds the file in the file list, and **Discard**. Discard takes back the changes to the file that are not committed yet. CodeDeck asks first, because this cannot be undone.

A click on a file only unfolds and folds its diff; with Dirq it does nothing. Opening, editing and everything else work only through the tools and the menu on purpose (with Dirq also the double click), so that you do not set anything off by accident.

## Try it

After a turn is done, open the **Changes** tab with **See the turn** and read the short report. In the **Structure** view, click a file and look at its diff. Switch to the **Code** view, comment on a line, and then mark a file as **Viewed**. If Dirq is installed, open a file in Dirq with a double click.

## More on this

- [Changes and turns](/codedeck/manual/en/reference/changes/): all views, comparisons and special cases such as very long diffs.
- [Next prompt](/codedeck/manual/en/reference/attachments/): everything that can be attached and how it reaches the AI.
- [Git basics](/codedeck/manual/en/reference/git-basics/): diff, commit and branch explained.
