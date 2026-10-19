---
title: Téléchargements
description: Téléchargez les images TeamSBC pour les cartes et les machines virtuelles prises en charge.
---

# Téléchargements {#downloads}

TeamSBC fournit des images pour les Raspberry Pi 4, Raspberry Pi 5 et les machines
virtuelles. Choisissez ci-dessous une carte ou une machine virtuelle ainsi que
son architecture, puis téléchargez une image de la variante que vous souhaitez utiliser.

[Makalu](https://handbook.teamsbc.org/getting-started/variants.html#makalu) est la
variante de cohesive Linux.
[Lhotse](https://handbook.teamsbc.org/getting-started/variants.html#lhotse)
utilise une maintenance basée sur les packages.

## Cartes et machines virtuelles prises en charge {#supported-boards-and-virtual-machines}

Les liens ci-dessous ouvrent les répertoires de téléchargement des images expérimentales de TeamSBC 46.

| Carte / machine virtuelle | Architecture | Lhotse | Makalu |
| --- | --- | --- | --- |
| Raspberry Pi 4 | ARM64 (`aarch64`) | [Télécharger](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi4/index.html) | [Télécharger](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi4/index.html) |
| Raspberry Pi 5 | ARM64 (`aarch64`) | [Télécharger](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi5/index.html) | [Télécharger](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi5/index.html) |
| Machine virtuelle | x86-64 (`x86_64`) | [Télécharger](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-lhotse-virt/index.html) | [Télécharger](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-makalu-virt/index.html) |
| Machine virtuelle | ARM64 (`aarch64`) | [Télécharger](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-virt/index.html) | [Télécharger](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-virt/index.html) |

Les machines virtuelles nécessitent un micrologiciel UEFI et une image correspondant
à leur architecture. Sinon, utilisez l’image spécifique à la carte sur laquelle
vous souhaitez faire fonctionner le système.

## Premiers pas {#get-started}

Suivez le [guide d’installation](https://handbook.teamsbc.org/getting-started/installation.html)
du manuel en anglais pour décompresser votre image et préparer une machine virtuelle
ou écrire l’image sur le support de stockage de votre appareil. Consultez la
[configuration initiale](https://handbook.teamsbc.org/getting-started/provisioning.html)
pour configurer le système au premier démarrage ou préparer une image à l’avance.

Si votre appareil ne figure pas dans la liste, TeamSBC ne produit actuellement
pas d’image pour celui-ci. Vous pouvez [demander sa prise en charge](https://github.com/teamsbc/distribution/issues)
ou [rejoindre la communauté](https://handbook.teamsbc.org/preface/community.html).
