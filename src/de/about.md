---
title: Über TeamSBC
description: TeamSBC möchte ein cohesive Linux für Einplatinencomputer und virtuelle Maschinen anbieten.
---

# Über TeamSBC {#about-teamsbc}

TeamSBC ist ein kleiner Fedora Remix für Einplatinencomputer und virtuelle Maschinen.
TeamSBC möchte **ein cohesive Linux** anbieten: ein Betriebssystem, das als Ganzes
mit einer eigenen Versionsnummer erstellt und ausgeliefert wird. Alle Komponenten
und Voreinstellungen sind aufeinander abgestimmt und für eine bestimmte Platine ausgelegt.

## Cohesive Linux {#cohesive-linux}

TeamSBC möchte das Systemabbild zur Einheit für Erstellung, Auslieferung und
Aktualisierung machen. Die Software und Konfiguration, die in ein Abbild gehören,
werden bei dessen Erstellung gemeinsam ausgewählt. Das angestrebte Update-Modell
ersetzt das gesamte Systemabbild durch eine neue Version, statt einzelne packages
nacheinander zu aktualisieren.

Dieses Ziel bestimmt die Entwicklung des Projekts. Es verbindet die Erstellung
von Abbildern, den Systemstart, die Ersteinrichtung und die Wartung in einem
gemeinsamen Konzept. So entsteht ein System, dessen Teile zusammenpassen und
gemeinsam aktualisiert werden.

**Makalu** ist die Variante, die dieses Modell von cohesive Linux verfolgt.
Daneben bieten wir **Lhotse** an, eine auf packages basierende Variante für alle,
die einen einfacheren Umstieg möchten oder unsere packages und Konfiguration
testen wollen, ohne eine neue Arbeitsweise zu lernen.

## Auf Fedora Linux und systemd aufgebaut {#built-on-fedora-linux-and-systemd}

Fedora-packages bilden die Grundlage von TeamSBC. TeamSBC ergänzt eigene packages,
Konfiguration und Entscheidungen darüber, welche Komponenten in ein Abbild
gehören und wie sie eingerichtet werden.

TeamSBC bevorzugt die Funktionen von systemd, wo sie passen, darunter Werkzeuge
für den Systemstart, die Verwaltung von Diensten und Benutzern sowie die
Netzwerkkonfiguration. Diese Entscheidungen unterstützen das Ziel des Projekts:
ein kleines, integriertes System auf Basis von Upstream-Projekten.

## Das Projekt erkunden und mitwirken {#explore-and-contribute}

TeamSBC ist experimentell und befindet sich mitten in der Entwicklung. Es richtet
sich an Menschen, die diese Systeme erkunden, Abbilder testen und das Projekt
mitgestalten möchten.

Auf der [Downloadseite](/de/downloads) findest du verfügbare Abbilder, in den
[häufigen Fragen](/de/faq) Antworten auf gängige Fragen. Tritt der
[Community](https://handbook.teamsbc.org/preface/community.html) bei, um Rückmeldungen
zu geben und mitzuwirken.
