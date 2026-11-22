---
layout: ../../../../layouts/Manual.astro
title: "CodeDeck Manual"
nav: "Start"
part: 0
order: 0
purpose: >-
  This is where the manual begins: a short story shows what a working day with CodeDeck looks like, then a signpost leads you to the four parts.
draft: true
translation: /codedeck/manual/de/
---

<aside class="plan">

**Instructions:** This page opens the manual. It first tells a story and then shows the way through the four parts.

 **For every page of the manual** (read before writing any page):

 - Audience: people who program with a coding agent (e.g. Claude Code) or plan to. Git and AI are not
   assumed; every technical term is briefly explained or linked (part 3) where it first appears.
 - Language: addressed to "you", full, easy-to-understand sentences that meet the reader where they are. No
   shortened constructions; write full clauses such as "When an AI session …". A new point starts a new
   paragraph. Highlight important terms subtly (bold) so the topic can be found when skimming.
 - Terms as in the interface: "AI session" (at its first mention in a paragraph, then "session"), "coding agent"
   for the program (never "AI tool"), "round", "turn", "snapshot" (briefly explained at its first mention on a page: a backup of the project files you can return to), "trail", "deck", "Workbench",
   "Next prompt", "attach". Names of buttons and tabs exactly as in the English interface.
 - Check every statement about behaviour in the code before writing it (CodeDeck repo: `CLAUDE.md` "Karte", then the
   files named there; `docs/KONZEPT.md` for the why). What is not built does not go into the manual.
 - Pictures: crops from the preview with sample data (project `orbit-api`, branch `feature/rate-limit`),
   English interface, taken with `tools/shot.mjs` in the CodeDeck repo (`npx vite --port 5391`, usage at the top of
   the file). All pictures of a chapter are collected in one script (`tools/manual-shots.mjs`), so they can be
   made again after the interface changed. Stored as WebP under
   `public/codedeck/manual/en/<chapter>-<name>.webp`, each picture with an alt text that says what you see. Crops
   rather than whole windows where the point is one area; a whole window only for overviews.
 - Remove the boxes "Instructions" and "Content" when filling the page; remove `draft: true` only once the
   page is finished and accepted by the user. One page per session, then show it to the user.
 - The German version comes first; the English one follows under `/codedeck/manual/en/` with the same structure.
 - Length: as detailed as needed, but every page must be understandable without the others; cross-references
   instead of repetition.

</aside>

## A morning with CodeDeck

<aside class="plan">

**Content:** A story addressed to "you" (no named character), about one screen long: in the morning you start your
   project, give an AI session a task and work on something else. CodeDeck reports that the session is asking
   something; you answer. The turn is done, you look at the diff, comment on a line, attach a file and send the
   next prompt. Something goes wrong, you go back to a snapshot. At the end you commit and push. Each step in one
   sentence with the area of CodeDeck that helps with it, linked to the matching page of the tutorial. An overview
   picture of the project window with it.

</aside>

## How the manual is organized

<aside class="plan">

**Content:** Four cards or short paragraphs, one sentence per part, saying for whom and when to read it: Introduction
   (what CodeDeck is and what it is not), Tutorial (work through once), Reference (for questions about single
   topics), Appendix (programs, coding agents, Wayland). Plus a note that the tour in the program (CodeDeck menu →
   "Tutorial: project window") is the short version of the tutorial.

</aside>
