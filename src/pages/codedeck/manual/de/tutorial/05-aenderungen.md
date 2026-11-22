---
layout: ../../../../../layouts/Manual.astro
title: "Wenn eine Runde fertig ist: Änderungen"
nav: "Änderungen"
part: 2
order: 5
purpose: >-
  Du siehst dir an, was eine Runde geändert hat, kommentierst einzelne Zeilen für die KI und markierst Dateien als angesehen.
---

Deine Session meldet **Runde fertig**. Jetzt kommt der wichtigste Schritt einer Arbeitsrunde: Du prüfst, was die KI geändert hat. Dafür ist der Reiter **Änderungen** da. Am schnellsten kommst du mit **Runde ansehen** auf der Karte der Session hin.

## Was eine Runde ist

Eine **Runde** ist alles, was eine KI-Session auf einen deiner Prompts hin tut, bis sie fertig ist und wieder auf dich wartet. CodeDeck legt vor der ersten Änderung einer Runde einen **Snapshot** an, eine Sicherung deiner Projektdateien, und, wenn sich etwas geändert hat, einen zweiten am Ende. Was zwischen diesen beiden Punkten liegt, ist genau das, was die Runde geändert hat. So kannst du jede Runde für sich ansehen, auch wenn mehrere Sessions im selben Projekt arbeiten.

## Was du dir ansiehst

Oben im Reiter wählst du, welche Änderungen angezeigt werden:

- **Alles nicht Committete** zeigt alle Änderungen seit dem letzten Commit, egal von wem. So öffnet der Reiter, wenn du nichts anderes gewählt hast.
- **Runde 6**, **Runde 7** und so weiter zeigen die letzten Runden, jeweils mit dem Kurznamen der Session. Ältere Runden seit dem letzten Commit findest du unter **Frühere**.
- Wählst du einen Punkt auf dem **Trail**, zeigt der Reiter, was dieser Commit oder Snapshot geändert hat. Klickst du mit gedrückter **Strg**-Taste einen zweiten Punkt an, vergleicht CodeDeck die beiden. Mehr dazu in [Kapitel 8](/codedeck/manual/de/tutorial/08-trail/).

![Eine gewählte Runde im Reiter Änderungen: „Was Claude in Runde 6 getan hat“ mit „fertig 11:45“, darunter die Session, was du gefragt hast, was sie am Ende gesagt hat, die Zahlen der Änderungen und der Baum der geänderten Dateien](/codedeck/manual/de/aenderungen-runde.webp)

Bei einer Runde steht oben ein **Kurzbericht**: welche Session sie ausgeführt hat, was du gefragt hast und was die Session am Ende gesagt hat. Läuft die Runde noch, steht dort **arbeitet noch**, und du siehst, was sich bisher geändert hat. Rechts daneben hängst du mit **Anhängen** die ganze Runde an deinen nächsten Prompt, öffnest sie mit **Dirq** im Diff-Programm von be spex, falls es installiert ist (siehe [Mit Dirq](#mit-dirq)), oder springst mit **Vor dieser Runde…** zum Snapshot davor, von dem aus du zurückgehen kannst.

## Den Diff lesen

Ein **Diff** zeigt, was sich in einer Datei geändert hat: entfernte Zeilen rot mit einem Minus, neue Zeilen grün mit einem Plus, dazwischen ein paar unveränderte Zeilen zur Orientierung. Mehr dazu erklären die [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/).

Rechts oben wählst du zwischen zwei Ansichten. **Struktur** zeigt die geänderten Dateien und Ordner als Baum und sagt bei jeder, was mit ihr geschehen ist: neu, gelöscht, geändert, verschoben oder umbenannt. Die Zahlen darüber fassen das zusammen, und ein Klick auf eine Zahl filtert den Baum. Ein Klick auf eine Datei klappt ihren Diff an Ort und Stelle auf. **Code** zeigt alle Diffs untereinander, Datei für Datei.

Neben jeder Datei steht der Kurzname der Session, die sie geschrieben hat, in ihrer Farbe. Die Zahlen rechts nennen die hinzugefügten und entfernten Zeilen.

### Mit Dirq

Ist **Dirq** installiert, das Diff-Programm von be spex, nimmt CodeDeck es automatisch für die Diff-Anzeige. Einstellen musst du dafür nichts. Der Reiter zeigt dann in beiden Ansichten nur noch die Dateien: Ein Klick klappt nichts mehr auf, ein **Doppelklick** öffnet den Diff dieser Datei in Dirq. Der Knopf **Dirq** oben öffnet die ganze Änderung mit allen Dateien. **Angesehen**, **Anhängen** und die übrigen Werkzeuge bleiben hier im Reiter.

Dirq kann mehr als die eingebaute Ansicht, zum Beispiel alt und neu nebeneinander mit markierten geänderten Wörtern, Syntaxfarben und weitere Zeilen rund um eine Änderung. Was Dirq alles kann, steht auf [seiner Seite](/dirq/). Ist Dirq nicht installiert, zeigt CodeDeck die Diffs so, wie dieses Kapitel es beschreibt.

## Zeilen kommentieren

Fällt dir an einer Zeile etwas auf, schreibst du der KI direkt dort einen **Kommentar**. Zeige in der Ansicht Code mit der Maus auf die Zeile und klicke auf die Sprechblase, die am Rand erscheint. Schreibe, was sich ändern soll, und klicke auf **An den nächsten Prompt hängen** oder drücke **Strg+Enter**.

![Ein Kommentar unter einer Zeile im Diff: „Hier bitte auch den Fall ohne Client-ID abdecken.“, darunter der Hinweis, dass er mit Datei, Zeile und Zeilentext an den nächsten Prompt gehängt wird, und die Knöpfe „Abbrechen“ und „An den nächsten Prompt hängen“](/codedeck/manual/de/aenderungen-kommentar.webp)

Der Kommentar bleibt an der Zeile stehen und geht mit deinem nächsten Prompt an die Session, zusammen mit der Datei, der Zeilennummer und dem Text der Zeile. So musst du der KI nicht beschreiben, welche Stelle du meinst.

Mit Dirq kommentierst du die Zeilen in Dirq, bei den nicht committeten Änderungen, der laufenden Runde und den Änderungen seit einem Snapshot. Die Kommentare kommen genauso an deinen nächsten Prompt. Wie das Anhängen im Ganzen funktioniert, zeigt [Kapitel 7](/codedeck/manual/de/tutorial/07-naechster-prompt/).

## Dateien als angesehen markieren

Bei vielen geänderten Dateien verliert man leicht den Überblick, was man schon geprüft hat. Rechts an jeder Datei steht deshalb der Schalter **Angesehen**. Hast du dir eine Datei angesehen, klickst du darauf: Sie klappt zu, und oben steigt die Zahl, zum Beispiel „2 von 5 angesehen“.

Die Markierung gilt nur für dich und hat keinen Einfluss darauf, was in einen Commit kommt. Ändert sich die Datei danach noch einmal, zum Beispiel in der nächsten Runde, zeigt CodeDeck **seit dem Ansehen geändert**, damit du sie dir erneut ansiehst.

## Dateien öffnen, anhängen und verwerfen

Zeigst du mit der Maus auf eine Datei, erscheinen ihre beiden häufigsten Werkzeuge und das Menü ⋯:

![Eine Datei im Baum mit eingeblendeten Werkzeugen: Bearbeiten, Anhängen und ⋯, rechts der Schalter „Angesehen“](/codedeck/manual/de/aenderungen-werkzeuge.webp)

- **Bearbeiten** öffnet die Datei in deinem Editor. Welches Programm dabei startet, sagt der Hinweis am Symbol.
- **Anhängen** hängt die Änderung dieser einen Datei an deinen nächsten Prompt.
- **⋯** öffnet ein Menü mit allem Weiteren: **Ansehen** zum Lesen, **Diff in Dirq**, falls Dirq installiert ist, **Im Baum zeigen**, das die Datei in der Dateiliste aufsucht, und **Verwerfen**. Verwerfen nimmt die Änderungen an der Datei zurück, die noch nicht committet sind. CodeDeck fragt vorher nach, denn das lässt sich nicht rückgängig machen.

Ein Klick auf eine Datei klappt nur ihren Diff auf und zu, mit Dirq tut er nichts. Öffnen, Bearbeiten und alles andere geht bewusst nur über die Werkzeuge und das Menü (mit Dirq zusätzlich der Doppelklick), damit du nichts aus Versehen auslöst.

## Probier es aus

Öffne nach einer fertigen Runde den Reiter **Änderungen** über **Runde ansehen** und lies den Kurzbericht. Klicke in der Ansicht **Struktur** auf eine Datei und sieh dir ihren Diff an. Wechsle zur Ansicht **Code**, kommentiere eine Zeile und markiere danach eine Datei als **Angesehen**. Ist Dirq installiert, öffne eine Datei mit einem Doppelklick in Dirq.

## Mehr dazu

- [Änderungen und Runden](/codedeck/manual/de/nachschlagen/aenderungen/): alle Ansichten, Vergleiche und Sonderfälle wie sehr lange Diffs.
- [Nächster Prompt](/codedeck/manual/de/nachschlagen/anhaenge/): was alles angehängt werden kann und wie es bei der KI ankommt.
- [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/): Diff, Commit und Branch erklärt.
