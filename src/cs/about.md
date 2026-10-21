---
title: O TeamSBC
description: TeamSBC chce nabídnout ucelený linuxový systém pro jednodeskové počítače a virtuální stroje.
---

# O TeamSBC {#about-teamsbc}

TeamSBC je malý Fedora Remix určený pro jednodeskové počítače a virtuální stroje.
TeamSBC nabízí **ucelený linuxový systém**: operační systém vytvářený a dodávaný 
jako verzovaný celek. Všechny jeho součásti a výchozí nastavení jsou navrženy tak, 
aby spolupracovaly a jsou přizpůsobeny konkrétní desce.

TeamSBC je upravenou verzí Fedora Linux. Pokud chcete získat neupravenou
verzi Fedora Linux, navštivte web
[projektu Fedora](http://fedoraproject.org/).

## Ucelený Linux {#cohesive-linux}

TeamSBC používá obrazy systému jako základní jednotku pro sestavení, dodávání
a aktualizace. Software a konfigurace, které patří do obrazu, se vybírají
společně při jeho přípravě a sestavení. Zamýšlený model aktualizací nahrazuje celý obraz
systému novou verzí namísto postupné aktualizace jednotlivých balíčků.

Tento návrh určuje směr vývoje projektu. Spojuje vytváření obrazů, spouštění systému,
počáteční nastavení a údržbu do jednoho celku. Výsledkem je systém, jehož
součásti se sestavují společně, pasují k sobě a aktualizují se společně.

**Makalu** je varianta, která implementuje tento ucelený model. Nabízíme
také **Lhotse**, variantu založenou na balíčcích pro ty, kteří chtějí jednodušší
přechod, nebo chtějí vyzkoušet naše balíčky a konfiguraci, aniž by se museli
učit nový přístup.

## Postaveno na Fedora Linux a systemd {#built-on-fedora-linux-and-systemd}

Základ TeamSBC tvoří Fedora balíčky. TeamSBC k nim přidává několik vlastních balíčků,
konfiguraci a rozhodnutí o tom, které součásti patří do obrazu a jak jsou nastaveny.

TeamSBC upřednostňuje funkce systemd tam, kde se hodí, včetně nástrojů pro
spouštění systému, správu služeb a uživatelů či konfiguraci sítí. Tyto volby
podporují malý, integrovaný systém postavený na upstreamových projektech.

## Prozkoumejte projekt a zapojte se {#explore-and-contribute}

TeamSBC je experimentální a intenzivně se vyvíjí. Je určen lidem, kteří chtějí
tyto systémy prozkoumat, testovat obrazy a pomáhat projekt rozvíjet.

Dostupné obrazy najdete na [stránce ke stažení](/cs/downloads), odpovědi na běžné
otázky v [častých dotazech](/cs/faq). Připojte se ke
[komunitě](https://handbook.teamsbc.org/preface/community.html), sdílejte zpětnou
vazbu a zapojte se do projektu.
