---
title: Veelgestelde vragen
description: Veelgestelde vragen over TeamSBC, cohesive Linux, de varianten en hoe je aan de slag gaat.
---

# Veelgestelde vragen {#faq}

## Wat is TeamSBC? {#what-is-teamsbc}

TeamSBC is een kleine Fedora Remix voor single-board computers en virtuele
machines. Het bouwt voort op Fedora-packages en voegt eigen configuratie en
keuzes toe. Lees [Over TeamSBC](/nl/about) voor de doelen en aanpak van het project.

## Wat is cohesive Linux? {#what-s-a-cohesive-linux}

Het betekent dat het besturingssysteem wordt behandeld als één geheel met een
eigen versienummer. Software en configuratie worden samen gekozen wanneer de
systeemimage wordt gebouwd. Het beoogde updatemodel vervangt die image als
één geheel. Je hebt misschien ook de termen 'atomic' of 'immutable Linux'
gezien. TeamSBC geeft de voorkeur aan 'cohesive', omdat het systeem niet
*helemaal* één eenheid is en ook niet *helemaal* onveranderlijk.

## Wat is het verschil tussen Makalu en Lhotse? {#how-do-makalu-and-lhotse-differ}

Makalu volgt de aanpak van cohesive Linux, waarbij het besturingssysteem wordt
onderhouden als een image met een eigen versienummer. Lhotse gebruikt `dnf`
om packages op het draaiende systeem te installeren, te verwijderen en bij
te werken. Beide delen de algemene configuratie en ideeën van TeamSBC, maar
met Lhotse kun je TeamSBC Linux uitproberen zonder een nieuwe werkwijze te
hoeven leren.

## Is TeamSBC klaar voor dagelijks gebruik? {#is-teamsbc-ready-for-everyday-use}

TeamSBC is experimenteel en nog niet klaar voor algemeen gebruik. Houd rekening
met onvoltooide functies en documentatie. Het is op dit moment geschikt om te
verkennen, te testen en te ontwikkelen.

## Op welke apparaten kan ik het gebruiken? {#which-devices-can-i-run-it-on}

Bekijk [Downloads](/nl/downloads) voor beschikbare images voor apparaten en
virtuele machines en hun architecturen. Kies de image voor jouw apparaat;
virtuele machines hebben UEFI-firmware nodig. Voor apparaten die niet in de
lijst staan, is er op dit moment geen TeamSBC-image.

## Waar vind ik de installatie-instructies? {#where-are-the-installation-instructions}

Het Engelstalige handboek behandelt
[de installatie](https://handbook.teamsbc.org/getting-started/installation.html)
en [de initiële inrichting](https://handbook.teamsbc.org/getting-started/provisioning.html).

## Kan ik TeamSBC aanpassen? {#can-i-customize-teamsbc}

Ja. Bij het model van cohesive Linux maak je de keuzes over wat er in het
besturingssysteem hoort tijdens het bouwen van de image. Zie de
[handleiding voor het aanpassen van images](https://handbook.teamsbc.org/customization/build-your-own.html)
in het handboek.

Lhotse ondersteunt aanpassingen via het beheer van packages op een draaiend systeem.

## Hoe kan ik helpen? {#how-can-i-help}

Test images, meld fouten, verbeter de documentatie of draag bij aan packages
en imagedefinities. Gebruik de
[issuetracker](https://github.com/teamsbc/distribution/issues) voor foutmeldingen
en functieverzoeken, en de
[community](https://handbook.teamsbc.org/preface/community.html) voor vragen en
discussies.
