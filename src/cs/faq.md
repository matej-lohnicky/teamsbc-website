---
title: Časté dotazy
description: Časté dotazy o TeamSBC, cohesive Linux, variantách a prvních krocích.
---

# Časté dotazy {#faq}

## Co je TeamSBC? {#what-is-teamsbc}

TeamSBC je malý Fedora Remix určený pro jednodeskové počítače a virtuální stroje.
Vychází z Fedora packages a přidává vlastní konfiguraci a volby. Cíle a přístup
projektu najdete na stránce [O TeamSBC](/cs/about).

## Co je cohesive Linux? {#what-s-a-cohesive-linux}

Znamená to chápat operační systém jako celek s vlastním číslem verze. Software
a konfigurace se vybírají společně při sestavování obrazu systému a zamýšlený
model aktualizací nahrazuje tento obraz jako jednu jednotku. Možná jste se
setkali také s označením „atomický Linux“ nebo „neměnný Linux“. TeamSBC
upřednostňuje slovo „cohesive“, protože systém není *zcela* jedinou jednotkou
a není ani *zcela* neměnný.

## Jak se liší Makalu a Lhotse? {#how-do-makalu-and-lhotse-differ}

Makalu sleduje přístup cohesive Linux, při kterém se operační systém udržuje
jako obraz s vlastním číslem verze. Lhotse používá `dnf` k instalaci, odstraňování
a aktualizaci packages na běžícím systému. Obě varianty sdílejí celkovou konfiguraci
a myšlenky TeamSBC, ale Lhotse umožňuje vyzkoušet TeamSBC Linux bez nutnosti učit
se nový způsob práce.

## Je TeamSBC připraven k každodennímu používání? {#is-teamsbc-ready-for-everyday-use}

TeamSBC je experimentální a zatím není připraven k běžnému používání. Počítejte
s nedokončenými funkcemi a dokumentací. V současnosti se hodí k průzkumu,
testování a vývoji.

## Na kterých zařízeních jej mohu používat? {#which-devices-can-i-run-it-on}

Dostupné obrazy pro desky a virtuální stroje a jejich architektury najdete
na stránce [Ke stažení](/cs/downloads). Vyberte obraz pro své zařízení;
virtuální stroje potřebují firmware UEFI. Pro zařízení, která nejsou v seznamu,
v současnosti neexistuje obraz TeamSBC.

## Kde najdu pokyny k instalaci? {#where-are-the-installation-instructions}

Anglická příručka popisuje
[instalaci](https://handbook.teamsbc.org/getting-started/installation.html)
a [počáteční nastavení](https://handbook.teamsbc.org/getting-started/provisioning.html).

## Mohu TeamSBC přizpůsobit? {#can-i-customize-teamsbc}

Ano. U modelu cohesive Linux jsou rozhodnutí o tom, co patří do operačního systému,
součástí sestavování obrazu. Podívejte se na
[průvodce přizpůsobením obrazů](https://handbook.teamsbc.org/customization/build-your-own.html)
v příručce.

Lhotse podporuje změny prostřednictvím správy packages na běžícím systému.

## Jak mohu pomoci? {#how-can-i-help}

Testujte obrazy, hlaste chyby, zlepšujte dokumentaci nebo přispívejte k packages
a definicím obrazů. Pro chyby a návrhy nových funkcí použijte
[systém pro sledování problémů](https://github.com/teamsbc/distribution/issues).
Otázky a diskuse patří do
[komunity](https://handbook.teamsbc.org/preface/community.html).
