# be spex – website

**What be spex is and which apps there are.**

Static pages built with [Astro](https://astro.build); no tracking, no cookies, fonts served from here.

**Website:** https://bespex.github.io · [be spex](https://github.com/bespex) – apps for the way you work, for Linux, some also for Windows

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

## Adding an app

1. Add an entry to [`src/data/apps.ts`](src/data/apps.ts): name, what it is in two or three words, one
   sentence that tells a visitor what to expect, three highlights, the feature list, package and repository.
   With `group: "qiew"` it becomes a card in that group, without a group a card under "Desktop apps"; the order
   of the entries is the order on the home page. Optional fields, all described in `apps.ts`:
   - `platforms: ["linux", "windows"]` if it also runs on Windows (default: Linux only). The page title says
     "for Linux and Windows", cards show a small "Windows" label, the install block gets a column with the
     setup `.exe` from the newest release, and the home page and footer mention Windows from then on.
   - `category`: the schema.org `applicationCategory` (default `UtilitiesApplication`).
   - `status: "preview"` or `"private"` with `tryIt` (a sentence and the commands to run it from source),
     until it is released. `"private"`: the page is built but linked nowhere; removing `status` releases it.
   - `status: "unlisted"` for a released app that keeps its full page but is linked nowhere (like HatRack).
   - `icon` if the icon is not `public/icons/<slug>.svg` (e.g. a PNG for now), `afterInstall` for a command
     after `apt install`, `sample` (command lines shown where there is no screenshot), `modes` (ways of
     working, each with a picture, question and result) and `keys` (a keyboard table) for the app's page.
2. Put the icon into `public/icons/<slug>.svg`.
3. Put the screenshots into `public/shots/` as WebP – `<name>-light.webp` and `<name>-dark.webp` if the app
   follows the colour scheme. The first screenshot is the one on the home page: it has to make the impression.
   For Marq, Xaq and Jayq, `node tools/screenshots/shoot.mjs --site` in the Qiew repository writes them; for
   Trisq, `tools/screenshots/trisq.sh --site`. An app without screenshots works too (HatRack: `sample` instead).

4. Run `scripts/og.sh <slug>` (add the app to its list): it cuts the image shown when the app's page is shared,
   `public/og/<slug>.jpg`, from the first screenshot. Without it, the page shares the be spex logo.

The card on the home page, the app's page at `/<slug>/` and the install line come from that entry.

## Being found

Each page tells search engines what it is about: `search` in `apps.ts` is the description shown in search
results (say what the app is in the words people search with), the app pages carry structured data
(schema.org `SoftwareApplication`), and `/sitemap.xml` and `/robots.txt` list the pages. Nothing is tracked.
Download links (AppImage, Windows installer) are read from the GitHub releases when the site is built. The site names no version numbers; it links to the list of releases instead.

## Layout

```
src/data/apps.ts        the apps and groups, with all their texts
src/pages/index.astro   home page
src/pages/[slug].astro  page of one app
src/pages/sitemap.xml.ts  the list of pages for search engines
src/components/         screenshot frame, app card, command block
src/styles/global.css   the one stylesheet
public/                 logo, icons, screenshots, pictures of modes (public/modes/<slug>/)
```
