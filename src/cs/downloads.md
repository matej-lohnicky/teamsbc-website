---
title: Ke stažení
description: Stáhněte si obrazy TeamSBC pro podporované desky a virtuální stroje.
---

# Ke stažení {#downloads}

TeamSBC poskytuje obrazy pro Raspberry Pi 4, Raspberry Pi 5 a virtuální stroje.
Níže vyberte desku nebo virtuální stroj a jeho architekturu. Poté stáhněte obraz
varianty, kterou chcete používat.

[Makalu](https://handbook.teamsbc.org/getting-started/variants.html#makalu) je
varianta pro cohesive Linux.
[Lhotse](https://handbook.teamsbc.org/getting-started/variants.html#lhotse)
využívá údržbu založenou na správě packages.

## Podporované desky a virtuální stroje {#supported-boards-and-virtual-machines}

Následující odkazy otevřou adresáře ke stažení experimentálních obrazů TeamSBC 46.

| Deska / virtuální stroj | Architektura | Lhotse | Makalu |
| --- | --- | --- | --- |
| Raspberry Pi 4 | ARM64 (`aarch64`) | [Stáhnout](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi4/index.html) | [Stáhnout](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi4/index.html) |
| Raspberry Pi 5 | ARM64 (`aarch64`) | [Stáhnout](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi5/index.html) | [Stáhnout](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi5/index.html) |
| Virtuální stroj | x86-64 (`x86_64`) | [Stáhnout](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-lhotse-virt/index.html) | [Stáhnout](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-makalu-virt/index.html) |
| Virtuální stroj | ARM64 (`aarch64`) | [Stáhnout](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-virt/index.html) | [Stáhnout](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-virt/index.html) |

Virtuální stroje vyžadují firmware UEFI a obraz odpovídající jejich architektuře.
V ostatních případech použijte obraz určený pro konkrétní desku, na které chcete
systém provozovat.

## První kroky {#get-started}

Postupujte podle [průvodce instalací](https://handbook.teamsbc.org/getting-started/installation.html)
v anglické příručce. Dozvíte se, jak rozbalit obraz a připravit virtuální stroj
nebo zapsat obraz na úložiště zařízení. Informace o nastavení při prvním spuštění
nebo přípravě obrazu předem najdete v kapitole o
[počátečním nastavení](https://handbook.teamsbc.org/getting-started/provisioning.html).

Pokud vaše zařízení není v seznamu, TeamSBC pro něj v současnosti nevytváří obrazy.
Můžete [požádat o podporu zařízení](https://github.com/teamsbc/distribution/issues)
nebo se [připojit ke komunitě](https://handbook.teamsbc.org/preface/community.html).
