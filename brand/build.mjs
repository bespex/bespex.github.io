// Brand board for be spex (README.md here). Run from the repo root: node brand/build.mjs → brand/board.html
import { writeFileSync } from "node:fs";

const ORANGE = "#f26500";
// Qiew viewers: [name, accent, parts]; a part is [text, role]: "a" accent (format letters), "q" orange, "" plain
const qiew = [
  ["trisq", "#12909a", [["T", "a"], ["ri", ""], ["s", "a"], ["q", "q"]], "TSX/JSX viewer", "T·S from TSX"],
  ["marq", "#2f6fe0", [["Mar", "a"], ["q", "q"]], "Markdown viewer", "Mar from Markdown"],
  ["jayq", "#7c4ddb", [["Jay", "a"], ["q", "q"]], "JSON viewer", "Jay as JSON is said: „Jaison“"],
  ["xaq", "#0f9d7a", [["X", "a"], ["a", ""], ["q", "q"]], "XML viewer", "X from XML"],
  ["hyqe", "#c4452d", [["Hy", "a"], ["q", "q"], ["e", ""]], "HTML viewer", "Hy from HyperText"],
  ["cusq", "#4d7c0f", [["C", "a"], ["u", ""], ["s", "a"], ["q", "q"]], "CSV viewer", "C·S from CSV"],
  ["dirq", "#be185d", [["Di", "a"], ["r", ""], ["q", "q"]], "Diff viewer", "Di from Diff"],
  ["maiqe", "#b45309", [["Mai", "a"], ["q", "q"], ["e", ""]], "Mermaid viewer", "Mai from merMAId"],
];
// Other apps: [icon, accent, orange part, grey part(s), full title, kind]
const others = [
  ["codedeck", "#6366f1", [["code", "o"], ["deck", ""]], "AI session radar for Linux", "CodeDeck · your co-deck for AI sessions"],
  ["maillet", "#0f7f73", [["mail", "o"], ["let", ""]], "Mail in your tray", "Maillet"],
  ["hatrack", "#2fa7e0", [["hat", "o"], ["rack", ""]], "Work context switcher", "HatRack"],
  ["pockettray", "#8fa3c4", [["pocket", "o"], ["tray", ""]], "Collapse your tray", "PocketTray"],
  ["pictorix", "#284f93", [["pict", "o"], ["orix", ""]], "Photo sorter", "Pictorix"],
];

const cap = (s) => s[0].toUpperCase() + s.slice(1);
// Two colours at most: the format letters in full text colour, the other letters the same colour half
// transparent, the q in the brand orange. Orange is the only real colour; the app's own colour stays in the icon
const qwm = (parts, _accent, size = 44) =>
  `<span class="wm" style="font-size:${size}px">${parts
    .map(([t, r]) => `<span style="color:${r === "q" ? ORANGE : "var(--fg)"};opacity:${r === "" ? 0.5 : 1}">${t.toLowerCase()}</span>`)
    .join("")}</span>`;
const owm = (parts, size = 44) =>
  `<span class="wm" style="font-size:${size}px">${parts
    .map(([t, r]) => `<span style="color:${r === "o" ? ORANGE : "var(--grey)"}">${t}</span>`)
    .join("")}</span>`;
const bespex = (size = 30, stacked = true) =>
  stacked
    ? `<span class="bs" style="--s:${size}px"><span class="be">be</span><span class="spex">spex</span></span>`
    : `<span class="bs1" style="font-size:${size}px"><span class="be">be</span> <span class="spex">spex</span></span>`;
const ICONS_HERE = ["codedeck", "hatrack"]; // not on the website yet
const icon = (n, s = 72) => `<img src="${ICONS_HERE.includes(n) ? "icons" : "../public/icons"}/${n}.svg" width="${s}" height="${s}" alt="">`;

const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>be spex – Corporate Identity (Entwurf)</title><style>
@font-face{font-family:"Open Sans";src:url("../node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2") format("woff2");font-weight:300 800}
:root{--paper:#fbfaf7;--night:#131417;--surface:#1b1d21;--line:#2b2e34;--fg:#ecedf0;--muted:#a2a8b2;--grey:#f1f2f4}
.light{--fg:#1d1f23;--muted:#5d646e;--grey:#7b828c;--line:#e4e1da;--surface:#fff;background:var(--paper);color:var(--fg)}
*{box-sizing:border-box}body{margin:0;background:var(--night);color:var(--fg);font:15px/1.5 "Open Sans",sans-serif;padding:36px 40px;width:1500px}
h1{font-size:28px;margin:0;letter-spacing:-.02em}h2{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:40px 0 14px;font-weight:700}
.sub{color:var(--muted);margin:4px 0 0}.row{display:grid;gap:14px}.c2{grid-template-columns:1fr 1fr}.c3{grid-template-columns:repeat(3,1fr)}.c4{grid-template-columns:repeat(4,1fr)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:20px 22px;display:flex;flex-direction:column;gap:10px}
.card.light{border-color:#e4e1da}.lbl{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700}
.wm{font-weight:800;letter-spacing:-.03em;line-height:1}.bs{display:inline-flex;flex-direction:column;font-weight:800;letter-spacing:-.03em;line-height:.86}.bs .be{color:${ORANGE};font-size:var(--s)}.bs .spex{color:var(--grey);font-size:calc(var(--s)*.7)}
.bs1{font-weight:800;letter-spacing:-.03em}.bs1 .be{color:${ORANGE}}.bs1 .spex{color:var(--grey)}
.sw{height:64px;border-radius:10px;display:flex;align-items:flex-end;padding:8px 10px;font:600 12px "Open Sans";color:#fff}
.mono{font-family:ui-monospace,"JetBrains Mono","DejaVu Sans Mono",monospace;font-size:13px}.mut{color:var(--muted)}
.title{font-size:13px;color:var(--muted)}.title b{color:var(--fg);font-weight:700}
.q{display:flex;gap:14px;align-items:center}.why{font-size:12px;color:var(--muted)}
.fam{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.lock{display:flex;align-items:center;gap:16px}.lock .tl{font-size:14px;color:var(--muted);margin-top:6px}
.win{border:1px solid #3a3f46;border-radius:10px;overflow:hidden;background:#24272c}.wbar{background:#2b2e33;padding:7px 12px;font-size:12px;color:#d2d6da;text-align:center;border-bottom:1px solid #3a3f46}
.about{padding:26px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}.about .k{color:#a9afb5;font-size:13px}
.about a{color:#ff8a3c;font-size:13px;text-decoration:none}.foot{border-top:1px solid #3a3f46;width:100%;padding-top:10px;margin-top:6px;display:flex;justify-content:space-between;font-size:12px;color:#959ca4}
.term{background:#0d0e10;border-radius:10px;padding:14px 16px;font-family:ui-monospace,monospace;font-size:13px;color:#e9eaee;line-height:1.6}.term .p{color:#9cc39a}
.og{width:100%;aspect-ratio:1200/630;border-radius:12px;position:relative;overflow:hidden;background:radial-gradient(120% 90% at 85% 20%,color-mix(in srgb,#6366f1 35%,transparent),transparent 60%),#131417;padding:34px;display:flex;flex-direction:column;justify-content:center;gap:10px;border:1px solid var(--line)}
.og .shot{position:absolute;right:-30px;bottom:-40px;width:46%;height:70%;border-radius:10px;background:#24272c;border:1px solid #3a3f46;box-shadow:0 20px 50px rgba(0,0,0,.6)}
.og .shot i{display:block;height:10px;margin:14px;border-radius:5px;background:#3a3f46}.og .shot i:nth-child(2){width:60%;background:#e0a868}.og .shot i:nth-child(3){width:75%;background:#818cf8}
.doc{background:#fff;color:#1d1f23;border-radius:8px;padding:22px 26px;font-size:12px;box-shadow:0 10px 30px rgba(0,0,0,.4)}.doc .h{display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid ${ORANGE};padding-bottom:10px;margin-bottom:12px}
.doc h3{margin:0 0 6px;font-size:17px}.doc .f{border-top:1px solid #e4e1da;margin-top:16px;padding-top:6px;color:#5d646e;display:flex;justify-content:space-between;font-size:10.5px}
.url{font-weight:800;letter-spacing:-.03em;font-size:34px}.url .d{font-weight:400;color:var(--fg);letter-spacing:-.01em}
table{border-collapse:collapse;width:100%;font-size:13px}td{border-bottom:1px solid var(--line);padding:6px 8px;vertical-align:top}td:first-child{color:var(--muted);white-space:nowrap}
</style></head><body>
<div style="display:flex;justify-content:space-between;align-items:flex-end"><div><h1>be spex – Corporate Identity</h1><p class="sub">Entwurf 2026-11-16 · Regeln in brand/README.md · baut auf Website, Icons und Logos auf, die es schon gibt</p></div>${bespex(44)}</div>

<h2>1 · Dachmarke</h2>
<div class="row c4">
  <div class="card light"><span class="lbl">Hauptform, hell</span><div style="padding:14px 0">${bespex(64)}</div></div>
  <div class="card"><span class="lbl">Hauptform, dunkel</span><div style="padding:14px 0">${bespex(64)}</div></div>
  <div class="card"><span class="lbl">Einzeilig · Absender</span><div style="padding:22px 0">${bespex(34, false)}</div><span class="why">Fußzeilen, About, Dokumente. Im Text: „be spex“, technisch „bespex“, nie „be-spex“.</span></div>
  <div class="card"><span class="lbl">Plakette · nur Avatar</span><div style="display:flex;justify-content:center"><img src="../public/be-spex-badge.webp" width="110" height="110" alt=""></div><span class="why">GitHub-Organisation, Social. Nicht in Programmen.</span></div>
</div>

<h2>2 · Farben</h2>
<div class="row" style="grid-template-columns:repeat(7,1fr)">
  <div class="sw" style="background:#f26500">Orange #f26500</div><div class="sw" style="background:#ff8a3c">hell #ff8a3c</div><div class="sw" style="background:#b84a00">Text #b84a00</div>
  <div class="sw" style="background:#7b828c">Grau #7b828c</div><div class="sw" style="background:#f1f2f4;color:#1d1f23">spex dunkel #f1f2f4</div><div class="sw" style="background:#fbfaf7;color:#1d1f23">Papier #fbfaf7</div><div class="sw" style="background:#131417;border:1px solid #2b2e34">Nacht #131417</div>
</div>
<div class="row" style="grid-template-columns:repeat(12,1fr);margin-top:10px">
  ${[...qiew.map(([n, a]) => [n, a]), ...others.map(([n, a]) => [n === "codedeck" ? "CodeDeck" : n, a])].map(([n, a]) => `<div class="sw" style="background:${a};height:48px;font-size:11px">${cap(n)}<br>${a}</div>`).join("")}
</div>

<h2>3 · Qiew: das Format voll, der Rest halb, das q orange</h2>
<div class="row" style="grid-template-columns:1.1fr 3fr;align-items:stretch">
  <div class="card" style="justify-content:center;gap:14px"><span class="lbl">Familie</span><span class="wm" style="font-size:64px"><span style="color:${ORANGE}">Q</span>iew</span><span class="title"><b>Qiew</b> – Quick viewers · be spex</span><span class="why">Regel: zwei Farben. Buchstaben aus dem Formatnamen voll in Schriftfarbe, die übrigen dieselbe Farbe halb durchsichtig, das q im Markenorange (Familienzeichen). Die App-Farbe bleibt im Icon. Klein, Open Sans 800.</span></div>
  <div class="row c4">${qiew
    .map(([n, a, parts, kind, why]) => `<div class="card"><div class="q">${icon(n, 56)}${qwm(parts, a, 40)}</div><span class="title"><b>${cap(n)}</b> – ${kind} · Qiew · be spex</span><span class="why">${why}</span></div>`)
    .join("")}</div>
</div>
<div class="row c4" style="margin-top:14px">${qiew
  .slice(0, 4)
  .map(([n, a, parts]) => `<div class="card light" style="flex-direction:row;align-items:center;gap:14px">${icon(n, 44)}${qwm(parts, a, 34)}<span class="mut" style="margin-left:auto;font-size:12px">auf Papier</span></div>`)
  .join("")}</div>

<h2>4 · Die anderen Programme: die Idee in Orange</h2>
<div class="row c4">${others
  .map(([n, a, parts, kind, name]) => `<div class="card"><div class="q">${icon(n, 56)}${owm(parts, 40)}</div><span class="title"><b>${name}</b> – ${kind} · be spex</span></div>`)
  .join("")}</div>

<h2>5 · Icons: drei Formen, ein orangefarbener Akzent</h2>
<div class="row c3">
  <div class="card"><span class="lbl">Blatt · Qiew-Viewer</span><div class="fam">${qiew.map(([n]) => icon(n, 56)).join("")}</div><span class="why">Dokument mit Eselsohr, Verlauf in der App-Farbe, weißer Glyph des Formats, ein Akzent in Orange. Alle acht stimmen.</span></div>
  <div class="card"><span class="lbl">Rahmen · Tray-Helfer</span><div class="fam">${icon("maillet", 56)}${icon("hatrack", 56)}${icon("pockettray", 56)}<span class="mono mut">→</span>
    <svg width="56" height="56" viewBox="0 0 512 512"><rect x="16" y="16" width="480" height="480" rx="110" fill="#1f2a3d" stroke="#8fa3c4" stroke-width="32"/><path d="M256 120 316 230H196Z M186 250 246 360H126Z M326 250 386 360H266Z" fill="#c8a265"/><path d="M100 330 256 400 412 330" fill="none" stroke="#8fa3c4" stroke-width="16" stroke-linecap="round"/></svg></div>
    <span class="why">Dunkle Fläche, dicker Rahmen in der App-Farbe, heller Glyph. PocketTray weicht ab: Vorschlag rechts, mit Rahmen in #8fa3c4.</span></div>
  <div class="card"><span class="lbl">Fläche · Arbeitsplatz</span><div class="fam">${icon("codedeck", 56)}</div><span class="why">Dunkle Fläche mit Verlauf, Glyph in Orange (du) und App-Farbe (KI). Größen 16–512 px, unter 32 px eine dickere eigene Fassung; symbolische Fassung für Tray und Seitenleiste.</span></div>
  <div class="card"><span class="lbl">Fotos</span><div class="fam">${icon("pictorix", 56)}</div><span class="why">Blaue Fläche mit Verlauf, Fotostapel mit weißem Rahmen, Krone im Gelb-Orange-Verlauf als Akzent. Unter 32 px eine eigene Fassung: ein Foto mit dickem Rahmen, die Krone größer und auf dem Rahmen.</span></div>
</div>

<h2>6 · Lockups</h2>
<div class="row c3">
  <div class="card"><span class="lbl">Kopf · README, App-Seite</span><div class="lock">${icon("codedeck", 76)}<div>${owm(others[0][2], 48)}<div class="tl">The quiet radar beside your AI</div></div></div></div>
  <div class="card"><span class="lbl">Kopf · Qiew-Viewer</span><div class="lock">${icon("jayq", 76)}<div>${qwm(qiew[2][2], qiew[2][1], 48)}<div class="tl">JSON, pretty-printed and foldable</div></div></div></div>
  <div class="card"><span class="lbl">URL · Folien, Aufkleber, Social</span><div style="display:flex;flex-direction:column;gap:12px;padding:6px 0">
    <span class="url"><span class="d">bespex.run/</span>${owm([["code", "o"], ["deck", ""]], 34)}</span>
    <span class="url"><span class="d">bespex.run/</span>${qwm(qiew[2][2], qiew[2][1], 34)}</span></div><span class="why">Pfad = Befehl, bei Produkten der Produktname (codedeck; codeck leitet weiter), keine Subdomains. Neu gesetzt in Open Sans 800 und als Pfade, statt „Nimbus Sans“ als Text im SVG.</span></div>
</div>

<h2>7 · Wo was zu sehen ist</h2>
<div class="row c3">
  <div class="win"><div class="wbar">Über CodeDeck</div><div class="about">${icon("codedeck", 72)}${owm(others[0][2], 38)}<span class="k">AI session radar for Linux · say „Codeck“</span><span class="k">Version 0.1.1</span><a>bespex.run/codedeck</a><div class="foot"><span>MIT License</span>${bespex(14, false)}</div></div></div>
  <div class="win"><div class="wbar">orders.json – Jayq</div><div class="about">${icon("jayq", 72)}${qwm(qiew[2][2], qiew[2][1], 38)}<span class="k">JSON viewer · Qiew · say „Jake“</span><span class="k">Version 1.4.0</span><a>bespex.run/jayq</a><div class="foot"><span>MIT License</span>${bespex(14, false)}</div></div></div>
  <div style="display:flex;flex-direction:column;gap:12px">
    <div class="term"><span class="p">$</span> codedeck --version<br>codedeck 0.1.3 · be spex<br><span class="p">$</span> jayq --help | head -1<br>Jayq – JSON viewer · Qiew · be spex</div>
    <div class="term" style="font-size:12px">[Desktop Entry]<br>Name=Jayq<br>GenericName=JSON Viewer<br>Comment=JSON, pretty-printed and foldable – be spex<br>Icon=jayq</div>
  </div>
</div>
<div class="row c3" style="margin-top:14px">
  <div class="og"><span class="lbl" style="color:#a2a8b2">Social-/OG-Bild 1200 × 630</span>${owm(others[0][2], 56)}<div style="color:#ecedf0;font-size:15px;max-width:50%;margin-bottom:26px">The quiet radar beside your AI.</div><div style="position:absolute;left:34px;bottom:24px">${bespex(18, false)}</div><div class="shot"><i></i><i></i><i></i><i></i></div></div>
  <div class="doc"><div class="h"><span style="display:flex;align-items:center;gap:8px">${icon("codedeck", 26)}<b style="font-size:14px">CodeDeck</b></span><span style="--grey:#7b828c">${bespex(14, false)}</span></div><h3>Konzept: Seitenleiste</h3><p style="margin:0;color:#5d646e">Dokumentkopf: App links, Absender rechts, orange Linie als einziger Akzent. Fließtext Open Sans, Überschriften fett ohne Farbe.</p><div class="f"><span>CodeDeck · Konzept Seitenleiste</span><span>16.11.2026 · Seite 1</span></div></div>
  <div class="card"><span class="lbl">Domains</span><table>
    <tr><td>Hauptseite</td><td class="mono">bespex.run</td></tr><tr><td>App</td><td class="mono">bespex.run/maillet · /hatrack · /pockettray</td></tr><tr><td>Produkt</td><td class="mono">bespex.run/codedeck (codeck → hierher)</td></tr>
    <tr><td>Qiew</td><td class="mono">bespex.run/qiew · bespex.run/jayq …</td></tr><tr><td>Umleitung</td><td class="mono">bespex.run/codeck → /codedeck</td></tr>
    <tr><td>App-ID</td><td class="mono">net.spex.&lt;app&gt; bleibt</td></tr><tr><td>Repos</td><td class="mono">github.com/bespex/&lt;Name&gt;</td></tr></table></div>
</div>
</body></html>`;

writeFileSync(new URL("./board.html", import.meta.url), html);
console.log("written");
