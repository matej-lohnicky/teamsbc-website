---
title: Häufige Fragen
description: Häufige Fragen zu TeamSBC, cohesive Linux, den Varianten und den ersten Schritten.
---

# Häufige Fragen {#faq}

## Was ist TeamSBC? {#what-is-teamsbc}

TeamSBC ist ein kleiner Fedora Remix für Einplatinencomputer und virtuelle Maschinen.
Es baut auf Fedora-packages auf und ergänzt eigene Konfiguration und Entscheidungen.
Unter [Über TeamSBC](/de/about) erfährst du mehr über die Ziele und den Ansatz des Projekts.

## Was ist cohesive Linux? {#what-s-a-cohesive-linux}

Dabei wird das Betriebssystem als Ganzes mit einer eigenen Versionsnummer behandelt.
Software und Konfiguration werden bei der Erstellung des Systemabbilds gemeinsam
ausgewählt. Das angestrebte Update-Modell ersetzt dieses Abbild als eine Einheit.
Vielleicht kennst du dafür auch die Begriffe „atomares Linux“ oder „unveränderliches
Linux“. TeamSBC bevorzugt das Wort „cohesive“, weil das System nicht *ganz* eine
einzige Einheit und auch nicht *ganz* vollständig unveränderlich ist.

## Wie unterscheiden sich Makalu und Lhotse? {#how-do-makalu-and-lhotse-differ}

Makalu folgt dem Ansatz von cohesive Linux, bei dem das Betriebssystem als Abbild
mit einer eigenen Versionsnummer gepflegt wird. Lhotse verwendet `dnf`, um packages
auf dem laufenden System zu installieren, zu entfernen und zu aktualisieren.
Beide teilen die allgemeine Konfiguration und die Ideen von TeamSBC. Mit Lhotse
kannst du TeamSBC Linux ausprobieren, ohne eine neue Arbeitsweise lernen zu müssen.

## Ist TeamSBC bereit für den täglichen Einsatz? {#is-teamsbc-ready-for-everyday-use}

TeamSBC ist experimentell und noch nicht für den allgemeinen Einsatz bereit.
Rechne mit unfertigen Funktionen und unvollständiger Dokumentation. Derzeit eignet
es sich zum Erkunden, Testen und Entwickeln.

## Auf welchen Geräten kann ich es verwenden? {#which-devices-can-i-run-it-on}

Unter [Downloads](/de/downloads) findest du verfügbare Abbilder für Platinen und
virtuelle Maschinen sowie deren Architekturen. Wähle das Abbild für dein Gerät;
virtuelle Maschinen benötigen UEFI-Firmware. Für nicht aufgeführte Geräte gibt
es derzeit kein TeamSBC-Abbild.

## Wo finde ich die Installationsanleitung? {#where-are-the-installation-instructions}

Das englischsprachige Handbuch beschreibt die
[Installation](https://handbook.teamsbc.org/getting-started/installation.html)
und die [Ersteinrichtung](https://handbook.teamsbc.org/getting-started/provisioning.html).

## Kann ich TeamSBC anpassen? {#can-i-customize-teamsbc}

Ja. Beim Modell von cohesive Linux werden die Entscheidungen darüber, was zum
Betriebssystem gehört, Teil der Erstellung des Abbilds. Siehe die
[Anleitung zur Anpassung von Abbildern](https://handbook.teamsbc.org/customization/build-your-own.html)
im Handbuch.

Lhotse unterstützt Änderungen über die Verwaltung von packages auf einem laufenden System.

## Wie kann ich helfen? {#how-can-i-help}

Teste Abbilder, melde Fehler, verbessere die Dokumentation oder trage zu packages
und Abbilddefinitionen bei. Nutze den
[Issue-Tracker](https://github.com/teamsbc/distribution/issues) für Fehler und
Funktionswünsche und die
[Community](https://handbook.teamsbc.org/preface/community.html) für Fragen und Diskussionen.
