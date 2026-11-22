---
layout: ../../../../../layouts/Manual.astro
title: "While it works: Activity"
nav: "Activity"
part: 2
order: 4
purpose: >-
  You understand the sessions' timeline, see how safe your work is right now, and read your account's usage.
translation: /codedeck/manual/de/tutorial/04-aktivitaet/
---

Your session is now working on its task. While you wait or work on something else, the **Activity** tab gives you an overview of the last few hours.

## The deck and its four tabs

The **deck** in the middle of the window has four tabs. Each one answers a question that comes up during a round, and the question of the open tab is shown on the right of the tab bar:

- **Activity**: What are the sessions doing?
- **Changes**: What did the AI change? The number on the tab counts the files that are not committed yet.
- **Workbench**: What else came up that is not part of the project yet? A dot on the tab shows that something new is there, the number shows what is still waiting for a decision.
- **Next prompt**: What do you attach to your next prompt? The number counts the attachments.

When you point at a tab with the mouse, it explains in a few sentences what it is for. A project opens in the Changes tab.

## Reading the timeline

At the top of the Activity tab is the day's **timeline**. Each AI session has a row in it with its short name, its title, the number of its turns and the time it was last active.

![The top of the Activity tab with the day's timeline: three sessions with their blocks, above them the legend with “working”, “asks”, “in the background” and “snapshot before a turn”](/codedeck/manual/en/aktivitaet-zeitleiste.webp)

The blocks in a row show what the session did and when. The legend above the timeline names the marks:

- A **filled block** means that the session was working. One block roughly corresponds to one turn.
- A **framed block** means that the session asked you something and waited for your answer.
- A **striped block** means that the turn was over, but something the session had started was still running, for example a build. If CodeDeck does not know when it ended, the block fades out.
- A small **triangle** below the row marks a snapshot that CodeDeck made before a turn.
- The vertical line shows the current time.

When you point at a block with the mouse, you see the prompt that started the turn and how long the session worked and waited. With the arrows at the top left you go back to earlier days, and the calendar symbol brings you back to today. With **Ctrl** and the mouse wheel you zoom in at the mouse pointer, by dragging you move the view, and a double click shows the whole day again. The question mark next to the heading explains all marks and terms.

## How safe is your work

Below that, CodeDeck sums up in three numbers how well your work is secured right now:

![“How safe is your work”: 6 files not committed, 3 commits committed, not pushed yet, 9 snapshots to go back to, below it an explaining sentence](/codedeck/manual/en/aktivitaet-sicherheit.webp)


- **Not committed** counts the files with changes that are not secured in Git yet. They exist only in your project folder and in the snapshots.
- **Committed, not pushed yet** counts the commits that are only on your computer and not on the server yet.
- **Snapshots to go back to** counts the snapshots you can return to.

The sentence below says what this means for you, for example “Uncommitted work exists only in your folder and in the snapshots.” When everything is pushed, it says that nothing is at risk. What a commit and a push are exactly is explained in the [Git basics](/codedeck/manual/en/reference/git-basics/).

## Your account's usage

Most coding agents work with a **quota**: within a certain period you may only use a certain amount, after which you have to wait until it starts over. The **usage** section shows a card for each account with one bar per period; for Claude Code, for the last five hours and for the week.

![The usage section with the cards of the accounts Work and Private, each with a bar for the last five hours and one for the week; for Private the five-hour bar is amber with the warning “at this pace used up before the reset”](/codedeck/manual/en/aktivitaet-verbrauch.webp)

Each bar says how many percent are used, when the quota starts over and how much of the period has already passed. The white mark in the bar shows that share of the time: if the bar reaches beyond the mark, you are using it up faster than time passes. When it gets tight, the bar turns amber and warns **at this pace used up before the reset**.

CodeDeck does not estimate anything here: the figures come from the coding agent itself via its status line, and only while a session is running. So before the first session has answered, there are no figures yet. If the figures are not set up yet, you click on the bars at the top of the sessions column and there on **Set up…**. The bars in the sessions column show only the project's account, the cards here show all accounts. There is more on this under [Accounts and usage](/codedeck/manual/en/reference/accounts/).

## Documents written and the bell

At the very bottom, **Documents written** lists the Markdown, HTML and text files your sessions have written in the last 24 hours, the newest at the top. Often such a document is the real result of a turn, for example a concept or a summary. With the eye you open it for reading, with the pen for editing in your editor.

The difference from the Changes tab: there you see every changed file as a diff, to check what changed line by line. Here only documents are listed, and you read them in one piece, even if they are already committed. If you are working on a concept and mostly create Markdown files, this list is long and largely matches the changes. If, on the other hand, you mainly change program code, for example in Java, little or nothing shows up here, because code only appears in the Changes tab.

![“Documents written – last 24 hours” with two Markdown files, each with the session's short name, the time and the symbols for viewing and editing](/codedeck/manual/en/aktivitaet-dokumente.webp)

The **bell** on the right of the tab bar opens **Notices and tips**. There you find tips for the tab that is open, the latest events in the project under **What happened**, what each coding agent can do with CodeDeck, and under **Detected on this computer** which programs CodeDeck has found.

![The open bell “Notices and tips”: at the top “Good to know here” with two tips, below it “What happened” with the latest events and their times](/codedeck/manual/en/aktivitaet-glocke.webp)

## Try it out

Give your session a task and open the **Activity** tab while it works. Watch a block grow in its row. Then point at the block with the mouse and read the prompt. Look under **How safe is your work** to see how many files are not committed yet, and finally open the bell.

## More on this

- [AI sessions](/codedeck/manual/en/reference/sessions/): turns, background tasks and what CodeDeck knows about a session.
- [Accounts and usage](/codedeck/manual/en/reference/accounts/): setting up usage, and several accounts.
- [Snapshots](/codedeck/manual/en/reference/snapshots/): when CodeDeck makes them and how long they are kept.
