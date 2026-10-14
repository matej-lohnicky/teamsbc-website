---
title: FAQ
description: Questions courantes sur TeamSBC, cohesive Linux, les variantes et les premiers pas.
---

# FAQ {#faq}

## Qu’est-ce que TeamSBC ? {#what-is-teamsbc}

TeamSBC est un petit Fedora Remix destiné aux ordinateurs monocartes et aux machines
virtuelles. Il s’appuie sur les packages Fedora et y ajoute sa propre configuration
et ses choix. Consultez [À propos de TeamSBC](/fr/about) pour découvrir les objectifs
et l’approche du projet.

## Qu’est-ce que cohesive Linux ? {#what-s-a-cohesive-linux}

Cela signifie traiter le système d’exploitation comme un ensemble doté d’un numéro
de version. Les logiciels et la configuration sont choisis ensemble lors de la
construction de l’image système, et le modèle de mise à jour envisagé remplace
cette image en une seule opération. Vous avez peut-être aussi rencontré les termes
« Linux atomique » ou « Linux immuable ». TeamSBC préfère le terme « cohesive »,
car le système n’est pas *tout à fait* une seule unité et n’est pas *tout à fait*
entièrement immuable.

## Quelle est la différence entre Makalu et Lhotse ? {#how-do-makalu-and-lhotse-differ}

Makalu suit l’approche de cohesive Linux, où le système d’exploitation est maintenu
sous la forme d’une image dotée d’un numéro de version. Lhotse utilise `dnf` pour
installer, supprimer et mettre à jour les packages sur le système en cours
d’exécution. Les deux partagent la configuration générale et les idées de TeamSBC,
mais Lhotse permet d’essayer TeamSBC Linux sans apprendre une nouvelle façon de travailler.

## TeamSBC est-il prêt pour un usage quotidien ? {#is-teamsbc-ready-for-everyday-use}

TeamSBC est expérimental et n’est pas encore prêt pour une utilisation générale.
Attendez-vous à des fonctionnalités et à une documentation inachevées. Il est
actuellement utile pour l’exploration, les tests et le développement.

## Sur quels appareils puis-je l’utiliser ? {#which-devices-can-i-run-it-on}

Consultez les [téléchargements](/fr/downloads) pour les images disponibles pour les
cartes et les machines virtuelles, ainsi que leurs architectures. Choisissez
l’image adaptée à votre appareil ; les machines virtuelles nécessitent un
micrologiciel UEFI. Les appareils absents de la liste ne disposent actuellement
pas d’image TeamSBC.

## Où trouver les instructions d’installation ? {#where-are-the-installation-instructions}

Le manuel en anglais couvre
l’[installation](https://handbook.teamsbc.org/getting-started/installation.html)
et la [configuration initiale](https://handbook.teamsbc.org/getting-started/provisioning.html).

## Puis-je personnaliser TeamSBC ? {#can-i-customize-teamsbc}

Oui. Avec le modèle de cohesive Linux, les choix concernant le contenu du système
d’exploitation font partie de la construction de l’image. Consultez le
[guide de personnalisation des images](https://handbook.teamsbc.org/customization/build-your-own.html)
dans le manuel.

Lhotse permet des modifications par la gestion des packages sur un système en cours d’exécution.

## Comment puis-je aider ? {#how-can-i-help}

Testez les images, signalez les bugs, améliorez la documentation ou contribuez aux
packages et aux définitions d’images. Utilisez le
[suivi des problèmes](https://github.com/teamsbc/distribution/issues) pour les bugs
et les demandes de fonctionnalités, et la
[communauté](https://handbook.teamsbc.org/preface/community.html) pour les questions
et les discussions.
