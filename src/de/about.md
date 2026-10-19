---
title: Über TeamSBC
description: TeamSBC möchte ein cohesive Linux für Einplatinencomputer und virtuelle Maschinen anbieten.
---

# Über TeamSBC {#about-teamsbc}

TeamSBC ist ein kleiner Fedora Remix für Einplatinencomputer und virtuelle Maschinen.
TeamSBC bietet **ein cohesive Linux**: ein Betriebssystem, das als Ganzes
mit einer eigenen Versionsnummer erstellt und ausgeliefert wird. Alle Komponenten
und Voreinstellungen sind aufeinander abgestimmt und für eine bestimmte Platine ausgelegt.

TeamSBC ist eine modifizierte Version von Fedora Linux. Wenn du eine
unveränderte Version von Fedora Linux möchtest, kannst du die Website des
[Fedora-Projekts](http://fedoraproject.org/) besuchen.

## Cohesive Linux {#cohesive-linux}

TeamSBC verwendet Systemabbilder als Einheit für Erstellung, Auslieferung und
Aktualisierung. Die Software und Konfiguration, die in ein Abbild gehören,
werden bei dessen Vorbereitung und Erstellung gemeinsam ausgewählt. Das angestrebte Update-Modell
ersetzt das gesamte Systemabbild durch eine neue Version, statt einzelne packages
nacheinander zu aktualisieren.

Dieses Konzept bestimmt die Entwicklung des Projekts. Es verbindet die Erstellung
von Abbildern, den Systemstart, die Ersteinrichtung und die Wartung zu einem
Ganzen. So entsteht ein System, dessen Teile gemeinsam erstellt werden,
zusammenpassen und gemeinsam aktualisiert werden.

**Makalu** ist die Variante, die dieses Modell von cohesive Linux umsetzt.
Daneben bieten wir **Lhotse** an, eine auf packages basierende Variante für alle,
die einen einfacheren Umstieg möchten oder unsere packages und Konfiguration
testen wollen, ohne eine neue Arbeitsweise zu lernen.

## Auf Fedora Linux und systemd aufgebaut {#built-on-fedora-linux-and-systemd}

Fedora-packages bilden die Grundlage von TeamSBC. TeamSBC ergänzt einige eigene packages,
Konfiguration und Entscheidungen darüber, welche Komponenten in ein Abbild
gehören und wie sie eingerichtet werden.

TeamSBC bevorzugt die Funktionen von systemd, wo sie passen, darunter Werkzeuge
für den Systemstart, die Verwaltung von Diensten und Benutzern sowie die
Netzwerkkonfiguration. Diese Entscheidungen unterstützen ein kleines,
integriertes System auf Basis von Upstream-Projekten.

## Das Projekt erkunden und mitwirken {#explore-and-contribute}

TeamSBC ist experimentell und befindet sich mitten in der Entwicklung. Es richtet
sich an Menschen, die diese Systeme erkunden, Abbilder testen und das Projekt
mitgestalten möchten.

Auf der [Downloadseite](/de/downloads) findest du verfügbare Abbilder, in den
[häufigen Fragen](/de/faq) Antworten auf gängige Fragen. Tritt der
[Community](https://handbook.teamsbc.org/preface/community.html) bei, um Rückmeldungen
zu geben und mitzuwirken.
