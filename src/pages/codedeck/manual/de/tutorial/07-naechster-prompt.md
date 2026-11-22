---
layout: ../../../../../layouts/Manual.astro
title: "Übergabe: Nächster Prompt"
nav: "Nächster Prompt"
part: 2
order: 7
purpose: >-
  Du verstehst, was Anhängen bedeutet, was du alles an den nächsten Prompt hängen kannst und wie es beim Coding-Agent ankommt.
---

Du hast die Runde geprüft, Zeilen kommentiert und vielleicht einen @ai-Hinweis geschrieben. Jetzt bereitest du die nächste Runde vor. Der Reiter **Nächster Prompt** zeigt dir, was die KI dabei zusätzlich zu deinem Prompt bekommt.

## Was Anhängen bedeutet

**Anhängen** heißt: Du sammelst in CodeDeck, was die KI für ihre nächste Runde wissen soll, und CodeDeck gibt es ihr zusammen mit deinem nächsten Prompt mit. Den Prompt selbst schreibst du wie immer im Chat der Session. Du musst nichts in den Chat kopieren, keine Pfade abtippen und keine Stellen beschreiben.

Die KI bekommt von CodeDeck nur, was du ausdrücklich angehängt hast, und nur einmal. Hast du nichts angehängt, arbeitet sie ganz normal ohne zusätzlichen Inhalt.

## Was du anhängen kannst und wo

Angehängt wird mit der **Büroklammer** dort, wo dir etwas begegnet:

- **Dateien und Ordner**: mit der Büroklammer in der Dateiliste, oder du ziehst sie auf den Bereich Nächster Prompt unten in der Sessionspalte.
- **Änderungen**: mit der Büroklammer an einer Runde, einem Commit oder einer einzelnen Datei im Reiter Änderungen (siehe [Kapitel 5](/codedeck/manual/de/tutorial/05-aenderungen/)).
- **Zeilenkommentare**: mit der Sprechblase an einer Zeile eines Diffs.
- **@ai-Hinweise**: mit der Büroklammer in der Werkbank (siehe [Kapitel 6](/codedeck/manual/de/tutorial/06-werkbank/)).

Auch Textstellen aus den Betrachtern von be spex können hier landen, im Bild unten eine Abfrage aus Jayq. Alles, was angehängt ist, sammelt der Reiter Nächster Prompt, nach Art geordnet und jeweils mit seiner Herkunft.

![Der Reiter Nächster Prompt: oben „Für: Wählen…“, darunter die angehängten Dateien mit ihrer geschätzten Größe in Tokens, eine Abfrage aus Jayq und ein Ordner](/codedeck/manual/de/naechster-prompt-liste.webp)

Mit dem Kreuz an einem Eintrag nimmst du ihn wieder heraus, mit **alle entfernen** eine ganze Art. Die Zahl neben jeder Datei schätzt, wie viele **Tokens** es kostet, wenn die KI die Datei liest. Tokens sind die Einheit, in der Coding-Agents Text zählen und abrechnen. Große Anhänge füllen also das Gedächtnis der Session und dein Kontingent schneller.

## Wie es beim Coding-Agent ankommt

Sobald du im Chat deinen nächsten Prompt abschickst, meldet der Coding-Agent das an CodeDeck, und CodeDeck fügt die Anhänge als Text an deinen Prompt an. Dabei bekommt die KI:

- **Dateien und Ordner** als Pfad. Sie liest selbst, was sie davon braucht, und sieht so immer den aktuellen Stand.
- **Änderungen** als Git-Befehl, mit dem sie sich die Änderung ansehen kann, nicht den ganzen Diff. Neue Dateien bekommt sie als Pfad.
- **Zeilenkommentare** mit Datei, Zeilennummer und dem Text der Zeile.
- **@ai-Hinweise** mit Datei, Zeile und Text des Hinweises.

Den genauen Text, den die KI bekommt, kannst du dir unter **Der genaue Text** mit **Zeigen** vorher ansehen. Er steht auf Englisch unter dem, was du schreibst.

Nach dem Abschicken ist die Liste wieder leer. Auf der Karte der Session steht dann eine **Quittung**, zum Beispiel „Hat deine Anhänge um 11:42 bekommen: 2 Dateien“, und in ihren Einzelheiten unter **Von CodeDeck bekommen**, was sie wann bekommen hat.

Nicht jeder Coding-Agent kann solche Anhänge entgegennehmen. Kann er es nicht, sagt dir der Reiter das, und du kopierst die Anhänge stattdessen in die Zwischenablage und fügst sie im Chat ein. Welche Coding-Agents was können, steht im Anhang unter [Coding-Agents](/codedeck/manual/de/anhang/coding-agents/).

## Für welche Session

Laufen in einem Projekt mehrere Sessions, entscheidest du, welche die Anhänge bekommen soll. Dafür gibt es oben im Reiter die Auswahl **Für**.

![Die geöffnete Auswahl „Für“: die vier laufenden Sessions mit Kurzname und Titel, darunter „jede Session – die du zuerst promptest“](/codedeck/manual/de/naechster-prompt-fuer.webp)

Wählst du eine Session, bekommt nur sie die Anhänge, mit ihrem nächsten Prompt. Mit **jede Session** bekommt sie die Session, der du als Nächstes einen Prompt schickst. Läuft nur eine Session, geht alles an sie, auch ohne Wahl. Laufen mehrere und du hast keine gewählt, geht nichts raus, bis du dich entschieden hast. Endet die gewählte Session, bevor sie die Anhänge bekommen hat, sagt CodeDeck dir, wer sie stattdessen bekommt.

Unten in der Sessionspalte steht immer eine **Zusammenfassung** des Reiters: für wen die Anhänge sind, worauf sie warten, wie viel von welcher Art angehängt ist und wie viele Tokens es ungefähr kostet, wenn die KI alle Dateien liest. **Öffnen** führt in den Reiter, **Leeren** entfernt alle Anhänge.

![Die Zusammenfassung „Nächster Prompt“ unten in der Sessionspalte: „Für: Wählen…“, „Wartet auf deinen nächsten Prompt“, „4 Dateien“ und „etwa 7.7k Tokens, wenn Claude alle Dateien liest“](/codedeck/manual/de/naechster-prompt-zusammenfassung.webp)

## Prompts vorbereiten

Manchmal willst du einen Prompt in Ruhe formulieren, ohne dass ihn ein versehentliches Enter abschickt. Dafür gibt es unter den Anhängen den Bereich **Vorbereitet**. Mit dem **+** legst du einen Prompt an und gibst ihm einen Namen. Ein Klick auf den Namen öffnet ihn in einem Editor direkt in der Sessionspalte, die dafür etwas höher wird. So kann er offen bleiben, während du in der Dateiliste oder im Reiter Änderungen nachsiehst und etwas hineinkopierst.

Im Editor ist Enter eine neue Zeile, es wird nichts abgeschickt. Du schreibst normalen Text, Überschriften mit `##` und Aufzählungen mit `-`. CodeDeck speichert von selbst, kurz nachdem du aufgehört hast zu tippen. Ist der Prompt fertig, kopierst du ihn mit dem Kopieren-Symbol und fügst ihn im Chat der Session ein. Jeder Prompt liegt als Markdown-Datei im Scratch-Ordner des Projekts unter `.scratch/prompts/`, du kannst ihn also auch in einem eigenen Editor öffnen.

<aside class="plan">

**Hinweis:** Das ist der Anfang. Vorbereitete Prompts werden noch erweitert, etwa um das Starten einer neuen Session mit dem Prompt und um Anhänge, die du direkt an einen Prompt hängst. Dieser Abschnitt wird dann ausführlicher.

</aside>

## Die Startregeln

![Die Startregeln: „zuletzt um 11:56 an Per-client rate limit for orders“, darunter die Erklärung und die beiden Regeln im Wortlaut](/codedeck/manual/de/naechster-prompt-startregeln.webp)

Unter den Anhängen stehen die **Startregeln**. Sie sind kein Anhang: Jede neue Session bekommt sie einmal beim Start, solange das Projekt in CodeDeck offen ist, und noch einmal, nachdem ihr Gedächtnis geleert oder verdichtet wurde. Heute sind es zwei kurze Regeln: Entwürfe und Wegwerf-Dateien gehören in den Scratch-Ordner, und wenn die KI eine Seite irgendwo veröffentlicht, nennt sie deren Link. Die Regeln stehen hier Wort für Wort, damit du jederzeit siehst, was die KI von CodeDeck bekommt.

## Probier es aus

Hänge in der Dateiliste eine Datei an und schreibe im Reiter Änderungen einen Kommentar zu einer Zeile. Öffne den Reiter **Nächster Prompt** und sieh dir unter **Der genaue Text** an, was die KI bekommen wird. Schicke der Session dann im Chat einen kurzen Prompt, zum Beispiel „Bitte kümmere dich um die Anmerkungen“. Danach ist die Liste leer, und die Karte der Session zeigt die Quittung.

## Mehr dazu

- [Nächster Prompt](/codedeck/manual/de/nachschlagen/anhaenge/): alle Arten von Anhängen, ihr genauer Text und Sonderfälle.
- [KI-Grundlagen](/codedeck/manual/de/nachschlagen/ki-grundlagen/): Prompt, Kontext und Tokens erklärt.
- [Coding-Agents](/codedeck/manual/de/anhang/coding-agents/): was welcher Coding-Agent mit CodeDeck kann.
