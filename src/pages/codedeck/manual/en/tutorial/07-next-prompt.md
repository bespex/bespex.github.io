---
layout: ../../../../../layouts/Manual.astro
title: "Handing over: Next prompt"
nav: "Next prompt"
part: 2
order: 7
purpose: >-
  You understand what attaching means, everything you can attach to your next prompt, and how it reaches the coding agent.
translation: /codedeck/manual/de/tutorial/07-naechster-prompt/
---

You have checked the turn, commented on lines and maybe written an @ai hint. Now you prepare the next turn. The **Next prompt** tab shows you what the AI gets in addition to your prompt.

## What attaching means

**Attaching** means that you collect in CodeDeck what the AI should know for its next turn, and CodeDeck hands it over together with your next prompt. You write the prompt itself in the session's chat as always. You do not have to copy anything into the chat, type out paths or describe places.

The AI only gets from CodeDeck what you have explicitly attached, and only once. If you have not attached anything, it works as usual without extra content.

## What you can attach, and where

You attach with the **paperclip**, wherever you come across something:

- **Files and folders**: with the paperclip in the file list, or by dragging them onto the Next prompt area at the bottom of the sessions column.
- **Changes**: with the paperclip on a turn, a commit or a single file in the Changes tab (see [chapter 5](/codedeck/manual/en/tutorial/05-changes/)).
- **Line comments**: with the speech bubble on a line of a diff.
- **@ai hints**: with the paperclip in the Workbench (see [chapter 6](/codedeck/manual/en/tutorial/06-workbench/)).

Passages from be spex's viewers can end up here too; in the picture below, a query from Jayq. The Next prompt tab collects everything that is attached, sorted by kind and each with where it came from.

![The Next prompt tab: “For: Choose…” at the top, below it the attached files with their estimated size in tokens, a query from Jayq and a folder](/codedeck/manual/en/naechster-prompt-liste.webp)

The cross on an entry takes it out again, and **remove all** removes a whole kind. The number next to each file estimates how many **tokens** it costs when the AI reads the file. Tokens are the unit in which coding agents count and bill text. Large attachments therefore fill the session's memory and your quota faster.

## How it reaches the coding agent

As soon as you send your next prompt in the chat, the coding agent tells CodeDeck, and CodeDeck adds the attachments to your prompt as text. The AI gets:

- **Files and folders** as a path. It reads what it needs of them itself and so always sees the current state.
- **Changes** as a git command with which it can look at the change, not the whole diff. New files it gets as a path.
- **Line comments** with the file, the line number and the text of the line.
- **@ai hints** with the file, the line and the text of the hint.

You can look at the exact text the AI gets beforehand under **The exact text** with **Show**. It is in English and comes below what you write.

After you send, the list is empty again. The session's card then shows a **receipt**, for example “Got your attachments at 11:42: 2 files”, and its details show under **Got from CodeDeck** what it got and when.

Not every coding agent can take such attachments. If yours cannot, the tab tells you, and you copy the attachments to the clipboard instead and paste them into the chat. Which coding agent can do what is in the appendix under [Coding agents](/codedeck/manual/en/appendix/coding-agents/).

## For which session

If several sessions are running in a project, you decide which one should get the attachments. For this there is the **For** choice at the top of the tab.

![The “For” choice, opened: the four running sessions with their short names and titles, below them “any session – whichever you prompt first”](/codedeck/manual/en/naechster-prompt-fuer.webp)

If you choose a session, only that one gets the attachments, with its next prompt. With **any session**, they go to the session you send your next prompt to. If only one session is running, everything goes to it, even without a choice. If several are running and you have not chosen one, nothing goes out until you have decided. If the chosen session ends before it got the attachments, CodeDeck tells you who gets them instead.

At the bottom of the sessions column there is always a **summary** of the tab: who the attachments are for, what they are waiting for, how much of which kind is attached, and roughly how many tokens it costs if the AI reads all the files. **Open** takes you to the tab, **Clear** removes all attachments.

![The “Next prompt” summary at the bottom of the sessions column: “For: Choose…”, “Waiting for your next prompt”, “4 files” and “about 7.7k tokens if Claude reads all files”](/codedeck/manual/en/naechster-prompt-zusammenfassung.webp)

## Preparing prompts

Sometimes you want to word a prompt carefully, without an accidental Enter sending it off. For this, there is the **Prepared** area below the attachments. With the **+** you create a prompt and give it a name. A click on the name opens it in an editor right in the sessions column, which grows a little taller for it. That way it can stay open while you look something up in the file list or the Changes tab and copy it in.

In the editor, Enter is a new line; nothing is sent. You write plain text, headings with `##` and lists with `-`. CodeDeck saves on its own, shortly after you stop typing. When the prompt is ready, you copy it with the copy icon and paste it into the session's chat. Each prompt is a Markdown file in the project's scratch folder under `.scratch/prompts/`, so you can also open it in an editor of your own.

<aside class="plan">

**Note:** This is the beginning. Prepared prompts will be extended, for example with starting a new session with the prompt and with attachments you attach directly to a prompt. This section will then go into more detail.

</aside>

## The start rules

![The start rules: “last given at 11:56 to Per-client rate limit for orders”, below it the explanation and the two rules word for word](/codedeck/manual/en/naechster-prompt-startregeln.webp)

Below the attachments are the **Start rules**. They are not an attachment: every new session gets them once when it starts, as long as the project is open in CodeDeck, and once more after its memory has been cleared or compacted. Today there are two short rules: drafts and throwaway files belong in the scratch folder, and when the AI publishes a page somewhere, it names its link. The rules are shown here word for word, so you can always see what the AI gets from CodeDeck.

## Try it

Attach a file in the file list and write a comment on a line in the Changes tab. Open the **Next prompt** tab and look under **The exact text** at what the AI will get. Then send the session a short prompt in the chat, for example “Please take care of the comments”. Afterwards the list is empty, and the session's card shows the receipt.

## More on this

- [Next prompt](/codedeck/manual/en/reference/attachments/): all kinds of attachments, their exact text and special cases.
- [AI basics](/codedeck/manual/en/reference/ai-basics/): prompt, context and tokens explained.
- [Coding agents](/codedeck/manual/en/appendix/coding-agents/): what each coding agent can do with CodeDeck.
