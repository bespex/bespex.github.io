---
layout: ../../../../../layouts/Manual.astro
title: "Closing the round"
nav: "Closing the round"
part: 2
order: 10
purpose: >-
  You sum up the round, know the way into the next one, and know how to work with several sessions and projects at once.
draft: true
translation: /codedeck/manual/de/tutorial/10-naechste-runde/
---

You have gone through a whole round of work with CodeDeck. This last chapter sums it up and shows you how to work with several sessions and projects at the same time.

## The round as a cycle

A round doesn't really end; it leads into the next one. With your next prompt, the cycle starts again.

![The round of work as a cycle with six stations: give the task, follow the work, check the changes, sort the Workbench, prepare the prompt, keep it safe](/codedeck/manual/en/runde-kreislauf.svg)

1. **Give the task:** You start an AI session, or you tell a running one in the chat what it should do ([chapter 3](/codedeck/manual/en/tutorial/03-start-session/)).
2. **Follow the work:** While it works, the sessions column shows you its state and the Activity tab its course. If it asks something, CodeDeck lets you know ([chapter 4](/codedeck/manual/en/tutorial/04-activity/)).
3. **Check the changes:** When the turn is done, you look in the Changes tab at what it did, and you comment on lines ([chapter 5](/codedeck/manual/en/tutorial/05-changes/)).
4. **Look through the Workbench:** You look at what came about on the side, take over what is useful and clear away the rest ([chapter 6](/codedeck/manual/en/tutorial/06-workbench/)).
5. **Prepare the prompt:** You attach what the AI needs for the next turn ([chapter 7](/codedeck/manual/en/tutorial/07-next-prompt/)).
6. **Keep it safe:** If the result is good, you commit and push it. If it went wrong, you go back to a snapshot ([chapters 8](/codedeck/manual/en/tutorial/08-trail/) and [9](/codedeck/manual/en/tutorial/09-commit/)).

Not every round needs every station. Often you only check the changes briefly and send the next prompt, and you commit only after a few rounds. The snapshots keep you safe in the meantime.

## With several sessions

Several AI sessions can work side by side in one project, for example one on a feature and one on the documentation. CodeDeck keeps them apart: each has its colour and its short name, on its card, on the files it changed and on its snapshots. If you point at a session, its files and snapshots stand out, and the rest steps back.

Keep two things in mind. First, under **Next prompt** you choose with **For** which session gets the attachments, because with several running sessions nothing goes out otherwise. Second, it pays to give the sessions tasks in different parts of the project. If two sessions change the same file, they get in each other's way, and it becomes hard to tell which change came from whom.

## With several projects

If you work on several projects, you keep them in view through the **project list**. Under **Waiting in other projects**, sessions from other projects appear that are asking you something or are done, and a click takes you there. **Ctrl+Tab** takes you back to the previous project.

If you work on the same projects every day, you can put them on **today's list**: in a project's menu with **On today's list**. The ▶ button at the top of the project list then starts a session for every project on today's list that doesn't have one running yet. In the settings under **General**, you can have this happen by itself when CodeDeck starts.

So that you miss nothing while you work in another window, CodeDeck makes itself noticed in the taskbar and, if you like, with a message on the desktop. What it reports, you set in the quick settings under **Tell me when I look elsewhere**. When you need some quiet, you turn the messages off there for a while with **Do not disturb**. There is more under [Notifications](/codedeck/manual/en/reference/attention/).

## What comes next

Now you know all the parts of CodeDeck and the steps of a round of work. When you later want to know something in more detail, the [Reference](/codedeck/manual/en/reference/) part helps you. It covers each topic on its own and in full. Questions about setup, programs and installation are answered in the [Appendix](/codedeck/manual/en/appendix/).

And when, after a break, you want to remember quickly where things are: the tour **Tutorial: project window** in the CodeDeck menu behind the logo goes through the same round in a few steps, right in your window.

Enjoy working with CodeDeck.
