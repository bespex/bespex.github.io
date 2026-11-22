/**
 * Everything the site knows about the apps. To add an app: add an entry here,
 * put its icon into public/icons/ and its screenshots into public/shots/.
 * Cards, the app's own page and the install line are built from this.
 */

export interface Shot {
  /** File name in public/shots without extension; with `themed`, `-light` and `-dark` are appended. */
  file: string;
  themed: boolean;
  width: number;
  height: number;
  /** Title in the window frame, e.g. the file shown. */
  title: string;
  alt: string;
  caption?: string;
  /** Without the window frame, for images that bring their own surroundings. Default: only if not `themed`. */
  bare?: boolean;
}

export type Platform = "linux" | "windows";

/** How to try an app that is not released: a sentence (`code` in backticks) and the commands. */
export interface Try {
  text: string;
  lines: string[];
}

/** One way of working with an app, shown with a picture on its page (e.g. the modes of Pictorix). */
export interface Mode {
  title: string;
  /** File in public/, e.g. "/modes/pictorix/order.svg". */
  image: string;
  /** The question the app asks in this mode. */
  question: string;
  /** What comes out of it, e.g. a file name; shown as code. */
  result: string;
  /** A remark below the result. */
  remark?: string;
}

export interface App {
  slug: string;
  name: string;
  /** How to say the name, where it is not obvious. */
  say?: string;
  /** The same in phonetic spelling (IPA), without slashes. */
  ipa?: string;
  /** What it is, in two or three words: shown next to the name. */
  kind: string;
  /** One sentence that tells a visitor what to expect. */
  tagline: string;
  /** What a search result says about the app: what it is, for whom, in the words people search with. */
  search: string;
  /** Two or three sentences for the app's section and page. */
  description: string;
  /**
   * "preview": works from source, not released yet; shown apart from the released apps, without install instructions.
   * "private": work in progress, not shown yet: its page is built but linked nowhere, left out of the sitemap and
   * marked for search engines not to index it. Anyone with the address can still open it.
   * "unlisted": released, with its full page and install block, but like "private" linked nowhere, left out of
   * the sitemap and not indexed.
   */
  status?: "preview" | "private" | "unlisted";
  /** Group the app is presented in (see `groups`), if any. */
  group?: string;
  /** Accent colour, taken from the app icon. */
  accent: string;
  /** Icon file in public/icons, if not `<slug>.svg` (e.g. a PNG until the SVG exists). */
  icon?: string;
  /** Where the app runs. Default: Linux only. */
  platforms?: Platform[];
  /** schema.org applicationCategory. Default: "UtilitiesApplication". */
  category?: string;
  /** File types or surroundings as small labels, e.g. ".md" or "Cinnamon". */
  labels: string[];
  /** The three points for the home page. */
  highlights: string[];
  /** The full list for the app's page. */
  features: { title: string; text: string }[];
  /** First shot: the one that has to make the impression. May be empty: then `sample` stands in, if given. */
  shots: Shot[];
  /** Command lines shown as a sample where the app has no screenshot (e.g. a command-line tool). */
  sample?: string[];
  /** Ways of working, each with a picture: a section of their own on the app's page. */
  modes?: { title: string; intro?: string; items: Mode[] };
  /** Keyboard shortcuts for the app's page. */
  keys?: { where: string; key: string; action: string }[];
  /** For "preview" and "private": how to try the app from source. Default: the group's, else a pointer to the repository. */
  tryIt?: Try;
  /** APT package name. */
  pkg: string;
  repo: string;
  /** Folder of the app inside `repo`, for monorepos. */
  repoPath?: string;
  /** Prefix of the app's release tags, e.g. "xaq-v" (monorepo) or "v". */
  tagPrefix: string;
  appImage: boolean;
  /** Commands to run after installing the package, e.g. a setup step. */
  afterInstall?: string[];
  /** SPDX identifier, if not MIT. */
  license?: string;
  /** A limitation worth knowing before installing. */
  note?: string;
}

export interface Group {
  id: string;
  name: string;
  kind: string;
  tagline: string;
  description: string;
  /** What all apps of the group share. */
  shared: { title: string; text: string }[];
  repo: string;
  /** How to try one of the group's apps that is not released yet, if the app says nothing itself. */
  tryIt?: (app: App) => Try;
}

export const groups: Group[] = [
  {
    id: "qiew",
    name: "Qiew",
    kind: "Quick viewers",
    tagline: "One small viewer per file type.",
    description:
      "Double-click a file, look at it, close it. Each Qiew viewer opens in an instant, shows one kind of file really well and never changes it.",
    shared: [
      { title: "Read-only by design", text: "A viewer never writes to the file it shows; an export goes to a file you name. The one exception: Marq adds or ticks comment lines when a program such as CodeDeck asks it to." },
      { title: "Follows the file", text: "When another program saves it, the view updates and keeps your place." },
      { title: "Search that finds", text: "Ctrl+F with match count in Marq, Xaq and Jayq; hits inside folded parts open up." },
      { title: "Easy on the eyes", text: "Four colour schemes, light and dark, remembered; Trisq takes its colours from the component it shows." },
    ],
    repo: "bespex/Qiew",
    tryIt: (app) => ({
      text: "It works, and you can build it from source. Needs Node.js, Rust and the usual Tauri requirements; the example file next to `run.sh` shows the common cases.",
      lines: [
        "git clone https://github.com/bespex/Qiew && cd Qiew && npm install",
        `apps/${app.slug}/run.sh apps/${app.slug}/example.${app.labels[0].slice(1)}`,
      ],
    }),
  },
];

const viewerShot = (file: string, title: string, alt: string, caption?: string): Shot => ({
  file, themed: true, width: 1720, height: 1240, title, alt, caption,
});
const wideShot = (file: string, width: number, height: number, title: string, alt: string, caption?: string): Shot => ({
  file, themed: true, width, height, title, alt, caption,
});
const splitShot = (file: string, title: string, alt: string, caption?: string): Shot => ({
  file, themed: true, width: 2880, height: 1240, title, alt, caption,
});

const pictorixShot = (file: string, title: string, alt: string, caption?: string): Shot => ({
  file, themed: true, width: 2200, height: 1480, title, alt, caption,
});

export const apps: App[] = [
  {
    slug: "trisq",
    name: "Trisq",
    say: "Trisk",
    ipa: "trɪsk",
    kind: "TSX/JSX viewer",
    tagline: "React components, running – straight from the file.",
    search:
      "Trisq is a free TSX/JSX viewer for Linux: preview a React component straight from its file, with Tailwind CSS, live reload and error display – no Node.js, no project, no dev server.",
    description:
      "Trisq shows what a .tsx or .jsx file renders: open a component – a prototype an AI assistant wrote, a single screen, a chart – and see it live. No project, no Node.js, no dev server.",
    group: "qiew",
    accent: "#12909a",
    labels: [".tsx", ".jsx"],
    highlights: ["Runs a component without a project", "React, Tailwind, icons and charts built in", "Errors with file, line and context"],
    features: [
      { title: "Just the file", text: "TypeScript and JSX are translated in memory in a few milliseconds. React, Tailwind CSS, lucide-react and recharts come with Trisq and work offline." },
      { title: "Files next to it", text: "Imports of other components, style sheets, JSON and images work; other packages are fetched from esm.sh when a file asks for them." },
      { title: "Fits the component", text: "The window opens as wide as the component is made for, and the toolbar takes on the colour of the page." },
      { title: "Errors where they are", text: "Syntax errors with file, line and the lines around it; missing imports and errors while rendering are shown instead of a blank page." },
      { title: "Export as HTML", text: "One file that runs in any browser, without Trisq: the component, the files it imports and the packages it uses. Works offline." },
      { title: "Kept apart", text: "The component runs in a frame of its own: no access to the app, only to the files of its own project folder." },
    ],
    shots: [viewerShot("trisq", "TrailStats.tsx – Trisq", "Trisq showing a React component: a small dashboard with three figures, an elevation chart and a table")],
    pkg: "trisq",
    repo: "bespex/Qiew",
    repoPath: "apps/trisq",
    tagPrefix: "trisq-v",
    appImage: true,
  },
  {
    slug: "marq",
    name: "Marq",
    say: "Marc",
    ipa: "mɑːk",
    kind: "Markdown viewer",
    tagline: "Markdown files, beautifully rendered – just to read.",
    search:
      "Marq is a free Markdown viewer for Linux: renders .md files as a clean page with tables, code and images, follows links, reloads on change. Read-only, fast, open source.",
    description:
      "Marq turns a Markdown file into a clean, readable page: headings, tables, code, images. Follow links to other documents and step back, like in a browser.",
    group: "qiew",
    accent: "#2f6fe0",
    labels: [".md", ".markdown"],
    highlights: ["Tables, code blocks and images", "Follows links between documents", "Back and forward like a browser"],
    features: [
      { title: "A page, not a source file", text: "Headings, lists, tables, quotes and code blocks in a comfortable reading column; images next to the file are shown." },
      { title: "Links work", text: "Links to other Markdown files open in place, web links go to your browser, anchors jump within the document." },
      { title: "Back and forward", text: "Toolbar, Alt+←/→ or the mouse buttons take you back through the documents you followed." },
      { title: "Copy the source", text: "One click puts the Markdown itself on the clipboard." },
      { title: "Export as HTML", text: "The document as you see it, in one file with its images and your colour scheme – for readers without a Markdown viewer." },
      { title: "Comments in the margin", text: "Comments in the file (`<!-- @ai: … -->`) show up beside their block. Marq only changes them when a program like CodeDeck starts it with `--annotate`; on its own it stays read-only." },
    ],
    shots: [viewerShot("marq", "Trail-Notes.md – Marq", "Marq showing a Markdown document with headings, a numbered list, a quote and a table")],
    pkg: "marq",
    repo: "bespex/Qiew",
    repoPath: "apps/marq",
    tagPrefix: "marq-v",
    appImage: true,
  },
  {
    slug: "jayq",
    name: "Jayq",
    say: "Jake",
    ipa: "dʒeɪk",
    kind: "JSON viewer",
    tagline: "JSON at a glance – and jq filters when you want to dig.",
    search:
      "Jayq is a free JSON viewer for Linux: pretty-prints and folds JSON and JSON Lines without changing a value, with jq filters built in. Read-only, fast, open source.",
    description:
      "Jayq lays out JSON as a coloured, foldable tree and keeps every value exactly as it was written. To dig deeper, type a jq filter and see the result next to the data – jq is built in.",
    group: "qiew",
    accent: "#7c4ddb",
    labels: [".json", ".jsonl", ".geojson"],
    highlights: ["Pretty-prints JSON and JSON Lines", "Numbers and key order stay as written", "jq filters, built in"],
    features: [
      { title: "A tree you can scan", text: "Keys, strings, numbers and literals each have their colour; objects and arrays fold." },
      { title: "Nothing gets rounded", text: "Large integers, 1.0 versus 1, key order, even duplicate keys: Jayq shows what is in the file, not what a parser made of it." },
      { title: "jq filter view", text: "JSON, your filter and the result side by side. Run with Ctrl+Enter, load a .jq file, save or copy the result. No jq installation needed." },
      { title: "Runaway filters are stopped", text: "A filter runs in its own process and is ended after ten seconds, so the viewer always stays responsive." },
      { title: "Save it formatted", text: "Copy the indented JSON or export it as a file of its own; the file shown is never written to." },
      { title: "Precise error messages", text: "If a file is not valid JSON, you get line, column and what was expected – and the text as written." },
    ],
    shots: [
      viewerShot("jayq", "stations.json – Jayq", "Jayq showing a JSON file as an indented, syntax-coloured tree with fold markers"),
      splitShot("jayq-split", "stations.json – Jayq", "Jayq's filter view: the JSON on the left, a jq filter in the middle, its result on the right", "The filter view: JSON, your jq filter and the result side by side."),
    ],
    pkg: "jayq",
    repo: "bespex/Qiew",
    repoPath: "apps/jayq",
    tagPrefix: "jayq-v",
    appImage: true,
  },
  {
    slug: "xaq",
    name: "Xaq",
    say: "Zack",
    ipa: "zæk",
    kind: "XML viewer",
    tagline: "XML you can actually read: indented, coloured, foldable.",
    search:
      "Xaq is a free XML viewer for Linux: pretty-prints and folds XML, XSD, WSDL and XSLT files with syntax colours, and runs an XSLT side by side. Read-only and open source.",
    description:
      "Xaq shows XML the way you wish it had been written: re-indented, syntax-coloured and foldable, whatever the file looked like. Need a different shape? Run an XSLT on it in the mapping view.",
    group: "qiew",
    accent: "#0f9d7a",
    labels: [".xml", ".xsd", ".wsdl", ".xsl"],
    highlights: ["Pretty-prints any XML, however it was saved", "Fold elements to see the structure", "Try an XSLT side by side"],
    features: [
      { title: "Always well laid out", text: "The tree is re-indented; namespaces, attributes, comments and CDATA each have their colour. Text content stays exactly as written." },
      { title: "Fold what you don't need", text: "Collapse single elements or whole subtrees; the folds survive a reload of the file." },
      { title: "XSLT mapping view", text: "XML, an editable stylesheet and the transformed result side by side. Run with Ctrl+Enter, then save or copy the result." },
      { title: "Honest about broken files", text: "If the input is not well-formed, Xaq shows it as written with the parser's message instead of failing." },
      { title: "Save it formatted", text: "Copy the indented XML or export it as a file of its own; the file shown is never written to." },
      { title: "Any encoding", text: "UTF-8, UTF-16 or whatever the XML declaration says." },
    ],
    shots: [
      viewerShot("xaq", "orders.xml – Xaq", "Xaq showing an XML file as an indented, syntax-coloured tree with fold markers"),
      splitShot("xaq-split", "orders.xml – Xaq", "Xaq's mapping view: the XML on the left, an XSLT stylesheet in the middle, the transformed XML on the right", "The mapping view: XML, your XSLT and the result side by side."),
    ],
    pkg: "xaq",
    repo: "bespex/Qiew",
    repoPath: "apps/xaq",
    tagPrefix: "xaq-v",
    appImage: true,
  },
  {
    slug: "maillet",
    name: "Maillet",
    kind: "Mail in your tray",
    tagline: "Your mail, rethought: a quick look, a clear decision, an empty inbox.",
    search:
      "Maillet is a free mail client for the Linux system tray: new mail at a glance, mails as tasks, one-time passwords ready to copy. IMAP, private, open source.",
    description:
      "Maillet is a mail client that lives in the system tray and organises mail around what you do with it. See what's new at a glance, turn a mail into a task and keep track of where it stands. One-time passwords appear the moment they arrive.",
    accent: "#6d5ef5",
    category: "CommunicationApplication",
    labels: ["IMAP", "System tray"],
    highlights: [
      "New mail at a glance, people before noise",
      "Mails become tasks: open, in progress, done",
      "One-time passwords, ready to copy",
    ],
    features: [
      { title: "One click away", text: "Maillet sits in the tray and opens as a compact window: all your mailboxes, the new mails first." },
      { title: "People before noise", text: "Newsletters and automatic mails are set apart, so the mails written to you stand out." },
      { title: "Mails become tasks", text: "Make a mail a task and move it from open to in progress to done. The state lives in folders on your mail server, so nothing is locked in." },
      { title: "Pin, file, archive", text: "Every mail gets its place with one click or one key. The aim is an empty inbox, not a full one." },
      { title: "One-time passwords", text: "Login codes and magic links are recognised as they arrive and offered for copying – without opening the mail." },
      { title: "Private by default", text: "Maillet talks to your mail servers and nobody else. Passwords are kept in the system keyring." },
    ],
    shots: [
      { file: "maillet-home", themed: true, width: 1400, height: 1400, title: "Maillet", alt: "Maillet's overview: a fresh login code, a pinned mail and the new mails as cards, grouped into people and noise" },
      { file: "maillet-tasks", themed: true, width: 1400, height: 1400, title: "Maillet", alt: "Maillet's task board with mails as cards under Open, In progress and Done", caption: "Tasks: every mail you have to act on, with its state." },
    ],
    pkg: "maillet",
    repo: "bespex/Maillet",
    tagPrefix: "v",
    appImage: true,
    note: "Maillet does not replace your mail program yet: it reads, sorts and manages, but does not write mails.",
  },
  {
    slug: "hatrack",
    name: "HatRack",
    kind: "Work context switcher",
    status: "unlisted",
    tagline: "Put on a hat, and your desktop, your apps and your time log follow.",
    search:
      "HatRack is a free work context switcher for Linux: one command or one click in the tray puts on a hat – wallpaper, colour scheme, apps and websites follow, and every switch goes into a time log. Server optional, open source.",
    description:
      "Most of us wear several hats in a day: the job, a client project, a side project, private things. HatRack makes the switch explicit: one command or one click on the tray icon puts on a different hat, and with it a different wallpaper and colour scheme, the apps and websites that belong to it, and a new entry in the log. Over the day, that log becomes a time sheet.",
    accent: "#2fa7e0",
    category: "BusinessApplication",
    labels: ["CLI", "System tray", "MCP"],
    highlights: [
      "A hat brings its wallpaper, colours, apps and sites",
      "Every switch is logged: a time sheet by itself",
      "One command, one click or one shortcut",
    ],
    features: [
      { title: "Hats and activities", text: "Put on a hat for what you work on, add an activity if you like: hat on venom do review. hat off pauses the clock, hat on resumes." },
      { title: "The look follows", text: "Each hat has its wallpaper and colour scheme, so you see at a glance which hat you are wearing. Built-in wallpapers in six colours, or your own." },
      { title: "Apps and sites open", text: "Switching to a hat starts the programs, opens the addresses and folders and runs the scripts that belong to it." },
      { title: "A log that tells the truth", text: "Every switch is appended, never changed; corrections are new entries. hat log today shows the day: which hat, which activity, how long." },
      { title: "Tray and quick switcher", text: "A tray icon with a menu and a quick switcher you bind to a keyboard shortcut; the command line does the same." },
      { title: "Server optional", text: "Without one, everything runs on your computer. With one, your devices share hats and log, there is a web view, and an AI assistant can read your time over MCP." },
    ],
    shots: [],
    sample: [
      "hat on venom            # work on VENOM",
      "hat on venom do review  # ... with an activity",
      "hat do meeting          # change the activity, keep the hat",
      "hat off                 # pause: the look stays, the clock stops",
      "hat                     # what am I working on, since when",
      "hat log today           # today's overview",
    ],
    pkg: "hatrack",
    repo: "bespex/HatRack",
    tagPrefix: "v",
    appImage: false,
    afterInstall: ["hat setup"],
    note: "The look changes on Cinnamon (X11) so far; on other desktops the time log, apps and notifications work.",
  },
  {
    slug: "pockettray",
    name: "PocketTray",
    kind: "Collapse your tray",
    tagline: "A system tray with a pocket for the icons you rarely need.",
    search:
      "PocketTray is a Cinnamon applet for Linux Mint that collapses the system tray: everyday icons stay in the panel, the rest go into a pocket. Free and open source.",
    description:
      "Cinnamon's panel fills up with tray icons. PocketTray keeps the ones you use every day in the panel and tucks the rest into a small pocket that opens with a click.",
    accent: "#8fa3c4",
    category: "DesktopEnhancementApplication",
    labels: ["Cinnamon", "Linux Mint"],
    highlights: ["A tidy panel, nothing lost", "One switch per icon", "Works with old and new tray icons"],
    features: [
      { title: "Sorting with a switch", text: "Right-click PocketTray and decide for each icon: panel or pocket." },
      { title: "One applet for both tray systems", text: "Replaces Cinnamon's System Tray and XApp Status Applet; shows legacy X11 icons as well as StatusNotifier and XApp icons." },
      { title: "Open on click or hover", text: "Or with a keyboard shortcut. The icons in the pocket behave exactly as they would in the panel." },
      { title: "A readable pocket", text: "Icons only, with application names, or with their current status text." },
    ],
    shots: [
      { file: "pockettray", themed: true, bare: true, width: 1666, height: 1116, title: "", alt: "PocketTray: the pocket open above the panel, and the menu with one switch per tray icon" },
    ],
    pkg: "pockettray",
    repo: "bespex/PocketTray",
    tagPrefix: "v",
    appImage: false,
    license: "GPL-2.0-or-later",
    note: "PocketTray is an applet for the Cinnamon desktop (Linux Mint).",
  },
  {
    slug: "hyqe",
    name: "Hyqe",
    say: "HY-kuh",
    ipa: "ˈhaɪkə",
    kind: "HTML viewer",
    tagline: "HTML pages, shown as pages – without starting a browser.",
    search:
      "Hyqe is a lightweight HTML viewer for Linux: shows a local HTML file rendered, with JavaScript, CSS and images next to it, reloads on change and switches to the source in one click. Read-only, open source.",
    description:
      "Hyqe shows an HTML file the way a browser would – a report, a dashboard, a prototype an AI assistant wrote – but opens in a blink and is only a viewer. One click switches to the coloured source.",
    group: "qiew",
    accent: "#c4452d",
    labels: [".html", ".htm"],
    highlights: ["A real page with JavaScript, CSS and images", "Source view one click away", "Follows the file and everything it loads"],
    features: [
      { title: "A real page", text: "Scripts, style sheets, fonts and images next to the file work, relative paths included. The page runs in a frame of its own and cannot reach the app." },
      { title: "Source one click away", text: "The toolbar button (or Ctrl+U) shows the HTML with syntax colours; search and line count work there too." },
      { title: "Live reload", text: "Follows the file and every file the page loads – CSS, JS, images, also ones that appear later." },
      { title: "Colour of the page", text: "The toolbar takes the page's background colour, light or dark." },
      { title: "Links stay out", text: "Web links open in your browser, never inside the viewer." },
      { title: "Search in the page", text: "Ctrl+F finds text in the rendered page, in the source with highlights and a match count." },
    ],
    shots: [wideShot("hyqe", 2320, 1560, "example.html – Hyqe", "Hyqe showing an HTML page with a heading, buttons and a bar chart that scripts on the page draw")],
    pkg: "hyqe",
    repo: "bespex/Qiew",
    repoPath: "apps/hyqe",
    tagPrefix: "hyqe-v",
    appImage: true,
  },
  {
    slug: "cusq",
    name: "Cusq",
    say: "Cask",
    ipa: "kɑːsk",
    kind: "CSV viewer",
    tagline: "CSV and TSV files as a tidy table – no spreadsheet needed.",
    search:
      "Cusq is a free CSV and TSV viewer for Linux: shows a table you can sort, filter and search, recognises numbers and dates, handles large files. Read-only, no spreadsheet program needed.",
    description:
      "Cusq lays a CSV or TSV file out as a table with sortable, filterable columns and a full text search. Whoever just wants to look at data does not have to start a spreadsheet.",
    group: "qiew",
    accent: "#4d7c0f",
    labels: [".csv", ".tsv"],
    highlights: ["Sort and filter every column", "Numbers and dates shown properly", "Full text search over all cells"],
    features: [
      { title: "Reads what people write", text: "Comma, semicolon, tab or pipe (detected), quoted cells, line breaks inside cells, any common encoding." },
      { title: "Numbers and dates as such", text: "Number columns are right-aligned with the same decimals in every row; dates show in your language and sort by time. Postcodes and identifiers stay as written." },
      { title: "Sort", text: "Click a heading: ascending, descending, file order. Numbers by value, text naturally, empty cells last." },
      { title: "Filter", text: "A field under every heading: contains, =exact, !not, >5, <=10, dates too, or /regex/. Combine them across columns." },
      { title: "Full text search", text: "Ctrl+F searches all cells and shows only the rows that match, with the hits marked." },
      { title: "Fits the table", text: "The window opens as wide as the table needs; only the rows in view are drawn, so large files stay quick." },
    ],
    shots: [wideShot("cusq", 2840, 1560, "example.csv – Cusq", "Cusq showing a table of customers with sortable headings, filter fields and right-aligned numbers")],
    pkg: "cusq",
    repo: "bespex/Qiew",
    repoPath: "apps/cusq",
    tagPrefix: "cusq-v",
    appImage: true,
  },
  {
    slug: "dirq",
    name: "Dirq",
    say: "Dirk",
    ipa: "dɜːk",
    kind: "Diff viewer",
    tagline: "Diffs and patches, side by side – like a diff tool.",
    search:
      "Dirq is a free diff and patch viewer for Linux: shows git, IntelliJ and unified diffs side by side with changed words marked, a file list and the patch's subject, author and message. Read-only, open source.",
    description:
      "Dirq shows a diff or patch file the way a diff tool would: old and new text next to each other, changed words marked, the files in a list and the patch's own data – subject, author, message – in a header.",
    group: "qiew",
    accent: "#be185d",
    labels: [".diff", ".patch"],
    highlights: ["Side by side or unified, changed words marked, in colour", "One file alone or all of them, change by change", "Comments for the AI when CodeDeck opens it"],
    features: [
      { title: "Side by side or unified", text: "Switch in the toolbar; the choice is kept. Removed and added blocks line up row by row, changed words are marked inside the lines, code is coloured by its language." },
      { title: "A header for the patch", text: "Subject, author, date and commit, the message, trailers such as Co-Authored-By and the totals as numbers and a bar." },
      { title: "Files at a glance", text: "A side panel lists the files with status and +/− counts; filter and sort them, drag its width, fold it away. Generated files such as lock files start folded." },
      { title: "One file or all", text: "Read the patch file by file, or all files one below the other. Two navigations in the toolbar: Alt+↓/↑ from change to change, Alt+→/← from file to file, each with where you are." },
      { title: "Live review", text: "While a patch changes, the view keeps its place; what is new flashes and shows on a ruler beside the scroll bar." },
      { title: "Comments for the AI", text: "Opened by CodeDeck, you comment on single lines; each comment goes to your next prompt. With the repository at hand, more lines around a change are a click away." },
      { title: "The usual formats", text: "git diff, git format-patch, IntelliJ IDEA patches, Subversion and plain diff -u: renames, mode changes, binary files." },
      { title: "Export", text: "The view as one HTML file for people who do not have a diff viewer." },
    ],
    shots: [wideShot("dirq", 2320, 1560, "example.patch – Dirq", "Dirq showing a patch: header with subject, author and message, a file list on the left and a side by side comparison")],
    pkg: "dirq",
    repo: "bespex/Qiew",
    repoPath: "apps/dirq",
    tagPrefix: "dirq-v",
    appImage: true,
  },
  {
    slug: "maiqe",
    name: "Maiqe",
    say: "MY-kuh",
    ipa: "ˈmaɪkə",
    kind: "Mermaid viewer",
    tagline: "Mermaid diagrams, drawn – straight from the text file.",
    search:
      "Maiqe is a free Mermaid diagram viewer for Linux: draws .mmd files offline – flowcharts, sequence, class and state diagrams – with zoom per diagram, several diagrams per file, live reload and SVG export.",
    description:
      "Maiqe draws the diagrams a Mermaid file describes. Every diagram lies on a card of its own with its own zoom, and the text is one click away. It follows the file while an assistant or you write it.",
    group: "qiew",
    accent: "#b45309",
    labels: [".mmd", ".mermaid"],
    highlights: ["Every Mermaid diagram type, drawn offline", "Several diagrams per file, each on its card", "Zoom, move and fill the window per diagram"],
    features: [
      { title: "Every diagram type", text: "Flowcharts, sequence, class, state and ER diagrams, Gantt and pie charts, mind maps, timelines: Mermaid is part of Maiqe and draws offline." },
      { title: "Several diagrams in one file", text: "Each gets a card with number, title and type – also the mermaid blocks of a Markdown file." },
      { title: "Zoom per diagram", text: "A small control on every card: zoom, fit, actual size, fill the window. Ctrl+wheel zooms at the pointer, drag moves; diagrams stay sharp." },
      { title: "Text one click away", text: "Switch to the file's text with a button or Ctrl+U; search works there." },
      { title: "Errors where they are", text: "A diagram with a syntax error shows the message on its card and the last version that worked; the others are not affected." },
      { title: "Export as SVG", text: "Every card saves its diagram as an SVG file." },
    ],
    shots: [wideShot("maiqe", 2320, 1560, "example.mmd – Maiqe", "Maiqe showing a flowchart on a card with zoom controls, the next diagram's card below it")],
    pkg: "maiqe",
    repo: "bespex/Qiew",
    repoPath: "apps/maiqe",
    tagPrefix: "maiqe-v",
    appImage: true,
  },
  {
    // One name everywhere (brand/README.md, D26): program, command and package codedeck
    slug: "codedeck",
    name: "CodeDeck",
    say: "Code Deck",
    ipa: "ˈkoʊd dɛk",
    kind: "AI session radar",
    tagline: "The quiet radar beside your AI coding sessions.",
    search:
      "CodeDeck is a free desktop app for Linux that runs beside Claude Code: it shows what each AI coding session is doing and what it changed, keeps a snapshot before every turn to go back to, and attaches exactly the files, changes and comments you choose to your next prompt.",
    description:
      "CodeDeck runs next to your AI coding sessions, not instead of them: see what each session is doing and what it changed, go back to the state before any turn, and give it exactly what it needs with your next prompt. It is not an editor; files open in small viewers like Marq and Dirq.",
    accent: "#6366f1",
    category: "DesktopEnhancementApplication",
    labels: ["Claude Code", "Git"],
    highlights: ["Every session, its step and what it changed", "A snapshot before every turn, to go back to", "You choose what goes with the next prompt"],
    features: [
      { title: "Sessions at a glance", text: "Each session with its colour and letter: what it is doing right now, what it asks, which files it wrote. The ones waiting for you are on top." },
      { title: "Turns you can read", text: "Everything a session changed for one prompt, as one diff, with what it said at the end. Mark files as looked at, comment on a line." },
      { title: "Go back to any turn", text: "Before a session writes, CodeDeck keeps the working tree as a snapshot (a Git ref, nothing pushed). One click puts the files back, and that can be undone too." },
      { title: "Attach, don't paste", text: "Files, changes, line comments and @ai hints from your files go with your next prompt, for the session you pick. You see the exact text." },
      { title: "The trail", text: "Commits and snapshots of every repository in the project as one line: what is uncommitted, committed, pushed." },
      { title: "A scratch folder", text: "Drafts and throwaway scripts of the sessions land in .scratch/ in the project, ignored by Git; drag one into the project to keep it." },
    ],
    shots: [
      { file: "codedeck", themed: false, width: 1500, height: 900, title: "orbit-api – CodeDeck", alt: "CodeDeck: the project's files on the left, the changes of a turn in the middle, sessions and the next prompt on the right" },
      { file: "codedeck-trail", themed: false, width: 1500, height: 900, title: "orbit-api – CodeDeck", alt: "CodeDeck with the trail opened: commits and folded snapshots of the project as one timeline", caption: "The trail: what is not committed, not pushed, pushed – and the snapshots of the sessions." },
    ],
    pkg: "codedeck",
    repo: "bespex/CodeDeck",
    tagPrefix: "v",
    appImage: true,
    note: "The package brings Marq, Dirq and Jayq along, the viewers CodeDeck opens things in; each can be removed on its own. CodeDeck works with Claude Code: its welcome window connects it in one click.",
  },
  {
    // Successor of Image Organizr (iorg). Private until v2.0.0 is published: then remove `status`.
    slug: "pictorix",
    name: "Pictorix",
    kind: "Photo sorter",
    tagline: "Sort, rank and rate a folder full of photos – one quick decision at a time.",
    search:
      "Pictorix is a free photo sorter for Linux and Windows: rank, rate or categorize a folder of photos one decision at a time, then rename the files or move them into folders. No database, open source; the successor of Image Organizr.",
    description:
      "Pictorix shows you one image or one pair of images at a time and asks a single question: which one comes first, how many stars, which category? When you are done, it renames the files or moves them into folders, so any file manager shows your result – no database, no lock-in. It is the successor of Image Organizr (iorg).",
    accent: "#284f93",
    platforms: ["linux", "windows"],
    category: "MultimediaApplication",
    labels: [".jpg", ".png", ".webp", ".avif"],
    highlights: [
      "One question at a time: order, stars or category",
      "Saved after every vote, undo everywhere",
      "The result: plain file names and folders",
    ],
    features: [
      { title: "Stop any time", text: "Progress is saved after every vote. Close Pictorix and open the folder again later: it offers to go on where you left off." },
      { title: "Undo every vote", text: "Ctrl+Z or Backspace takes back the last decision, in every mode – the knockout tournaments included." },
      { title: "Undo the result, too", text: "Every applied result can be taken back: right after applying, or later from the start screen of that folder." },
      { title: "Safe renaming", text: "Everything is checked before the first file is touched; a conflict stops without any change. Sorting a folder again replaces the old prefix instead of adding one." },
      { title: "Copy instead of move", text: "Write the result into a separate folder and keep the originals as they are." },
      { title: "Just files", text: "No database, no catalogue: the result is in the file names and folders, and any file manager shows it." },
      { title: "The usual formats", text: "JPG, PNG, WebP, GIF, BMP and AVIF; photos are shown upright according to their EXIF orientation." },
      { title: "Knows how far it is", text: "The start screen estimates the votes each mode needs; while voting you see about how many are left." },
      { title: "English and German", text: "Pictorix speaks both and follows the language of your system." },
    ],
    shots: [
      pictorixShot("pictorix-order", "Fantasy birds – Pictorix", "Pictorix in the order mode: two images side by side, the question which one comes first, and how many comparisons are left"),
      pictorixShot("pictorix-rate", "Fantasy birds – Pictorix", "Pictorix in the rate mode: one image with a row of ten stars below it", "Rate: one to ten stars, one key per image."),
      pictorixShot("pictorix-categorize", "Fantasy birds – Pictorix", "Pictorix in the categorize mode: one image, the categories birds, fantasy and cats, and a field for a new one", "Categorize: the categories are created as you go."),
      pictorixShot("pictorix-select", "Fantasy birds – Pictorix", "Pictorix's start screen for a folder of eight images: the modes as cards with an example file name and the votes each needs", "The start screen: pick a mode, see how many votes it takes."),
      pictorixShot("pictorix-summary", "Fantasy birds – Pictorix", "Pictorix's summary of a categorize session: the images grouped by category with their new paths, and the choice to move them into subfolders or copy them into a folder", "Nothing changes on disk until you click Apply – and you can undo it afterwards."),
    ],
    modes: {
      title: "Five ways to decide",
      intro: "Each mode asks one question, again and again, and turns your answers into file names or folders.",
      items: [
        { title: "Order", image: "/modes/pictorix/order.svg", question: "Which of two images comes first? Until every image has its place – the most precise ranking.", result: "001-beach.jpg" },
        { title: "Knockout · Find the winner", image: "/modes/pictorix/simple-knockout.svg", question: "Images compete in pairs and the winner moves on, until one image is left.", result: "001-beach.jpg", remark: "Images out in the same round share a placement." },
        { title: "Knockout · Rank all", image: "/modes/pictorix/full-knockout.svg", question: "Pairs, round by round, until every placement is decided.", result: "001-beach.jpg" },
        { title: "Rate", image: "/modes/pictorix/rate.svg", question: "How many stars? One to ten for each image.", result: "07-beach.jpg" },
        { title: "Categorize", image: "/modes/pictorix/categorize.svg", question: "Which category? You create the categories as you go.", result: "family/beach.jpg" },
      ],
    },
    keys: [
      { where: "Start screen", key: "1–4, Enter", action: "Pick a mode, start" },
      { where: "Order, Knockout", key: "Enter", action: "Keep the order – the left image comes first" },
      { where: "Order, Knockout", key: "←", action: "Move the right image to the front" },
      { where: "Rate", key: "1–9, 0", action: "1–9 stars, 0 = ten stars" },
      { where: "Categorize", key: "1–9", action: "Assign one of the first nine categories" },
      { where: "Categorize", key: "Tab, then Enter", action: "Type and add a new category (Ctrl+Enter also assigns it)" },
      { where: "While voting", key: "Ctrl+Z / Backspace", action: "Undo" },
      { where: "While voting", key: "F11", action: "Full screen" },
    ],
    tryIt: {
      text: "It works and you can run it from source: Node.js, Rust and the usual Tauri requirements. Once released, it comes as an APT package (`sudo apt install pictorix`), as an AppImage and as an installer for Windows.",
      lines: ["git clone https://github.com/bespex/Pictorix && cd Pictorix && npm install", "npm run tauri dev"],
    },
    pkg: "pictorix",
    repo: "bespex/Pictorix",
    tagPrefix: "v",
    appImage: true,
  },
];

/** Apps the site shows; private ones only have their page, reached by its address. */
export const shown = apps.filter((a) => a.status !== "private" && a.status !== "unlisted");
/** Released apps of a group. */
export const appsOf = (group: string) => shown.filter((a) => a.group === group && a.status !== "preview");
/** The group's apps that work but are not released yet: shown apart. */
export const previewsOf = (group: string) => shown.filter((a) => a.group === group && a.status === "preview");
export const released = shown.filter((a) => a.status !== "preview");
export const standalone = shown.filter((a) => !a.group);
export const sourceUrl = (a: App) => `https://github.com/${a.repo}${a.repoPath ? `/tree/main/${a.repoPath}` : ""}`;
/** Where the app runs; Linux unless it says otherwise. */
export const platformsOf = (a: App): Platform[] => a.platforms ?? ["linux"];
export const onWindows = (a: App) => platformsOf(a).includes("windows");
/** "Linux" or "Linux and Windows", for titles and sentences. */
export const platformText = (a: App) => platformsOf(a).map((p) => (p === "linux" ? "Linux" : "Windows")).join(" and ");
export const iconOf = (a: App) => `/icons/${a.icon ?? `${a.slug}.svg`}`;
/** How to try an app that is not released yet; null: only the pointer to its repository. */
export const tryOf = (a: App): Try | null => a.tryIt ?? groups.find((g) => g.id === a.group)?.tryIt?.(a) ?? null;
