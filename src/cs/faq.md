---
title: Časté dotazy
description: Časté dotazy o TeamSBC, uceleném linuxovém systému, variantách a prvních krocích.
---

# Časté dotazy {#faq}

## Co je TeamSBC? {#what-is-teamsbc}

TeamSBC je malý Fedora Remix určený pro jednodeskové počítače a virtuální stroje.
Vychází z Fedora balíčků a přidává vlastní konfiguraci a volby. Cíle a přístup
projektu najdete na stránce [O TeamSBC](/cs/about).

## Co je ucelený Linux? {#what-s-a-cohesive-linux}

Znamená to chápat operační systém jako verzovaný celek. Software
a konfigurace se vybírají společně při sestavování obrazu systému a zamýšlený
model aktualizací kompletně nahrazuje tento obraz jako celek. Možná jste se
setkali také s označením „atomický Linux“ nebo „neměnný Linux“. TeamSBC
upřednostňuje slovo „ucelený“, protože systém není *zcela* celistvý blok 
a není ani *zcela* neměnný.

## Jak se liší Makalu a Lhotse? {#how-do-makalu-and-lhotse-differ}

Makalu staví na uceleném modelu, při kterém se operační systém udržuje
jako verzovaný celek. Lhotse používá `dnf` k instalaci, odstraňování
a aktualizaci balíčků na běžícím systému. Obě varianty sdílejí celkovou konfiguraci
a myšlenky TeamSBC, ale Lhotse umožňuje vyzkoušet TeamSBC Linux bez nutnosti učit
se nový přístup.

## Je TeamSBC připraven ke každodennímu používání? {#is-teamsbc-ready-for-everyday-use}

TeamSBC je experimentální a zatím není připraven k běžnému používání. Počítejte
s nedokončenými funkcemi a dokumentací. V současnosti se hodí k průzkumu,
testování a vývoji.

## Na kterých zařízeních jej mohu používat? {#which-devices-can-i-run-it-on}

Dostupné obrazy pro desky a virtuální stroje a jejich architektury najdete
na stránce [Ke stažení](/cs/downloads). Vyberte obraz pro své zařízení;
virtuální stroje potřebují UEFI firmware. Pro zařízení, která nejsou v seznamu,
v současnosti neexistuje obraz TeamSBC.

## Kde najdu pokyny k instalaci? {#where-are-the-installation-instructions}

Anglická příručka popisuje
[instalaci](https://handbook.teamsbc.org/getting-started/installation.html)
a [počáteční nastavení](https://handbook.teamsbc.org/getting-started/provisioning.html).

## Mohu TeamSBC přizpůsobit? {#can-i-customize-teamsbc}

Ano. U uceleného modelu Linuxu jsou rozhodnutí o tom, co patří do operačního systému,
součástí sestavování obrazu. Podívejte se na
[průvodce přizpůsobením obrazů](https://handbook.teamsbc.org/customization/build-your-own.html)
v příručce.

Lhotse podporuje změny prostřednictvím správy balíčků na běžícím systému.

## Jak mohu pomoci? {#how-can-i-help}

Testujte obrazy, hlaste chyby, zlepšujte dokumentaci nebo přispívejte k balíčkům
a definicím obrazů. Pro chyby a návrhy nových funkcí použijte
[systém pro sledování problémů](https://github.com/teamsbc/distribution/issues).
Otázky a diskuse patří do
[komunity](https://handbook.teamsbc.org/preface/community.html).
