---
layout: ../../../../../layouts/Manual.astro
title: "Whatever else came up: Workbench"
nav: "Workbench"
part: 2
order: 6
purpose: >-
  You know where the AI's drafts and throwaway files end up, how you take what is useful into the project, and how you leave the AI tasks in files with @ai hints.
translation: /codedeck/manual/de/tutorial/06-werkbank/
---

Besides the actual changes, a turn often produces more: a draft, test data, a small script to try something out, or a page the AI published somewhere. The **Workbench** tab collects all of this, kept apart from your actual work. It also lists the tasks you left for the AI in your files with `@ai`.

## Why there is a Workbench

Without being told otherwise, the AI usually puts such files into a temporary folder like `/tmp`, sometimes into your home folder, far away from the project. You will hardly find them there again, and after a restart they are often gone. If they land in the middle of the project instead, they sit among the real changes and easily slip into a commit. That is why CodeDeck gives every new AI session a **start rule**: drafts, mock-ups, throwaway scripts and test data belong in the `.scratch/` folder in the project. Whatever still ends up elsewhere, CodeDeck finds as well and shows you.

The Workbench shows its content in **tiles**, with what most likely needs a decision from you at the top. Anything you have not seen since you last looked carries the mark **new** or **changed**, and a dot on the tab shows that there is something new. Each tile can be folded with the arrow in front of its title, and the question mark on the right explains it.

## The scratch folder

The **scratch folder** `.scratch/` is in your project, but git ignores it. To do this, CodeDeck adds it to git's local exclude list (`.git/info/exclude`), not to `.gitignore`, so nothing in your project changes. What lies there therefore never ends up in a commit by accident.

![The Scratch folder tile with 20 files: files with their size and age, two of them marked “new”, and two folders](/codedeck/manual/en/werkbank-scratch.webp)

The tile lists the files and folders with their size, age and the session that wrote them. With the tools on the right, you view a file, edit it, show it in the file manager or move it to the trash. A double click opens a file for viewing, a middle click for editing.

If you want to keep a file, **drag it onto a folder in the file list**. CodeDeck moves it there, and it becomes part of your project. Whatever you no longer need, you move to the trash, from where you can still get it back.

## Outside the project

Sometimes a session still writes a file outside the project, for example to `/tmp` or into its own folder. The **Outside the project** tile shows such files under **Files**, with the session that wrote them.

![The “Outside the project” tile: under Files a new file in ~/.claude/plans with the “Into scratch” button and a file from /tmp that was already copied, under Online an artifact on claude.ai](/codedeck/manual/en/werkbank-ausserhalb.webp)

With **Into scratch**, you bring a copy into the project, and from there you can drag it into the project as described above. The original stays where it is.

Under **Online** are pages a session published on the web, such as an artifact on claude.ai, a gist or a paste. There is no file of these, only the address the session names at the end of its turn. CodeDeck keeps it so that it does not get lost in the chat. You open the page in the browser or copy its link.

The cross takes an entry off the list. The file or page itself stays. This tile only appears when there is something to show.

## @ai hints

Sometimes, while reading a file, you notice something the AI should take care of. Instead of describing it to the AI later in a roundabout way, you write it right at the spot, in the editor you are used to. Such a line starts with `@ai`, either on its own or as a comment in the file's own syntax:

```
@ai An example with curl is missing here.
// @ai The error message should name the limit.
# @ai Explain this option in the README.
<!-- @ai Shorten this paragraph. -->
```

What matters is that `@ai` is at the start of the line. If other text comes before it, or if the line is in a code block in a Markdown file, it is not a hint. This way, texts that only talk about such hints are left out.

![The “Hints in your files” tile with three open hints in docs/api.md and docs/limits.md, each with its line number, “Attach all” at the top right](/codedeck/manual/en/werkbank-hinweise.webp)

The **Hints in your files** tile collects all hints in the project with their file and line. The paperclip on a hint attaches it to your next prompt, and **Attach all** attaches all of them at once. Once the AI has dealt with a hint and removed the line, it disappears from the list, and CodeDeck counts it as done. If your coding agent cannot take attachments, you copy the hints with **Copy as a task** and paste them into the chat.

## Try it

In a file of your project, write a line like `// @ai Add a comment to this function` and save it. Open the **Workbench** tab: the hint is listed under **Hints in your files**. Attach it to your next prompt with the paperclip. Then look at the scratch folder and, if something is already there, try dragging a file onto a folder in the file list.

## More on this

- [Workbench](/codedeck/manual/en/reference/workbench/): the scratch folder, files kept elsewhere and @ai hints in detail.
- [Next prompt](/codedeck/manual/en/reference/attachments/): how attached hints reach the AI and when they count as done.
