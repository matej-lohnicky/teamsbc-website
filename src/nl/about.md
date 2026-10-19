---
title: Over TeamSBC
description: TeamSBC wil cohesive Linux bieden voor single-board computers en virtuele machines.
---

# Over TeamSBC {#about-teamsbc}

TeamSBC is een kleine Fedora Remix voor single-board computers en virtuele machines.
TeamSBC biedt **cohesive Linux**: een besturingssysteem dat
als één geheel wordt gebouwd en geleverd, met een eigen versienummer. Alle
onderdelen en standaardinstellingen zijn ontworpen om samen te werken en zijn
afgestemd op een specifiek apparaat.

TeamSBC is een aangepaste versie van Fedora Linux. Als je een ongewijzigde
versie van Fedora Linux wilt, kun je de website van het
[Fedora Project](http://fedoraproject.org/) bezoeken.

## Cohesive Linux {#cohesive-linux}

TeamSBC gebruikt systeemimages als eenheid voor het bouwen, leveren en
bijwerken van het systeem. De software en configuratie die in een image horen,
worden samen gekozen bij het voorbereiden en bouwen ervan. Het beoogde updatemodel vervangt de
volledige systeemimage door een nieuwe versie, in plaats van afzonderlijke
packages bij te werken.

Dit ontwerp geeft richting aan de ontwikkeling van het project. Het brengt het
maken van images, het opstarten, de initiële inrichting en het onderhoud samen
in één geheel. Het resultaat is een systeem waarvan de onderdelen samen worden
gebouwd, op elkaar aansluiten en samen worden bijgewerkt.

**Makalu** is de variant die dit model van cohesive Linux implementeert. We bieden ook
**Lhotse** aan, een variant op basis van packages. Die is bedoeld voor wie
een eenvoudigere overstap wil, of onze packages en configuratie wil testen
zonder een nieuwe werkwijze te hoeven leren.

## Gebouwd op Fedora Linux en systemd {#built-on-fedora-linux-and-systemd}

Fedora-packages vormen de basis van TeamSBC. TeamSBC voegt enkele eigen packages,
configuratie en keuzes toe over welke onderdelen in een image horen en hoe
ze worden ingesteld.

TeamSBC gebruikt bij voorkeur de functionaliteit van systemd waar die past,
zoals hulpmiddelen voor het opstarten, het beheren van diensten en gebruikers,
en het configureren van netwerken. Deze keuzes ondersteunen een klein,
geïntegreerd systeem op basis van upstreamprojecten.

## Ontdek het project en draag bij {#explore-and-contribute}

TeamSBC is experimenteel en volop in ontwikkeling. Het is bedoeld voor mensen
die deze systemen willen verkennen, images willen testen en willen helpen om
het project vorm te geven.

Bekijk de [downloadpagina](/nl/downloads) voor beschikbare images, lees de
[veelgestelde vragen](/nl/faq), of sluit je aan bij de
[community](https://handbook.teamsbc.org/preface/community.html) om feedback te
delen en bij te dragen.
