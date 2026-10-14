---
title: O TeamSBC
description: TeamSBC chce nabídnout systém cohesive Linux pro jednodeskové počítače a virtuální stroje.
---

# O TeamSBC {#about-teamsbc}

TeamSBC je malý Fedora Remix určený pro jednodeskové počítače a virtuální stroje.
TeamSBC chce nabídnout **systém cohesive Linux**: operační systém vytvářený
a dodávaný jako celek s vlastním číslem verze. Všechny jeho součásti a výchozí
nastavení jsou navrženy tak, aby spolupracovaly, a přizpůsobeny konkrétní desce.

TeamSBC je tedy upravenou verzí Fedora Linux. Pokud chcete získat neupravenou
verzi Fedora Linux, můžete navštívit web
[projektu Fedora](http://fedoraproject.org/).

## Cohesive Linux {#cohesive-linux}

TeamSBC chce používat obraz systému jako jednotku pro sestavení, dodávání
a aktualizace. Software a konfigurace, které patří do obrazu, se vybírají
společně při jeho přípravě. Zamýšlený model aktualizací nahrazuje celý obraz
systému novou verzí namísto postupné aktualizace jednotlivých packages.

Tento cíl určuje směr vývoje projektu. Spojuje vytváření obrazů, spouštění systému,
počáteční nastavení a údržbu do jednoho návrhu. Výsledkem má být systém, jehož
součásti k sobě pasují a aktualizují se společně.

**Makalu** je varianta, která usiluje o tento model cohesive Linux. Nabízíme
také **Lhotse**, variantu založenou na packages pro ty, kteří chtějí jednodušší
přechod nebo chtějí vyzkoušet naše packages a konfiguraci, aniž by se museli
učit nový způsob práce.

## Postaveno na Fedora Linux a systemd {#built-on-fedora-linux-and-systemd}

Základ TeamSBC tvoří Fedora packages. TeamSBC přidává vlastní packages,
konfiguraci a rozhodnutí o tom, které součásti patří do obrazu a jak jsou nastaveny.

TeamSBC upřednostňuje funkce systemd tam, kde se hodí, včetně nástrojů pro
spouštění systému, správu služeb a uživatelů a konfiguraci sítí. Tyto volby
podporují cíl projektu: malý, integrovaný systém postavený na upstreamových projektech.

## Prozkoumejte projekt a zapojte se {#explore-and-contribute}

TeamSBC je experimentální a intenzivně se vyvíjí. Je určen lidem, kteří chtějí
tyto systémy prozkoumat, testovat obrazy a pomáhat utvářet projekt.

Dostupné obrazy najdete na [stránce ke stažení](/cs/downloads), odpovědi na běžné
otázky v [častých dotazech](/cs/faq). Připojte se ke
[komunitě](https://handbook.teamsbc.org/preface/community.html), sdílejte zpětnou
vazbu a zapojte se do projektu.
