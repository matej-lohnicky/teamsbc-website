---
title: À propos
description: TeamSBC souhaite proposer un système cohesive Linux pour les ordinateurs monocartes et les machines virtuelles.
---

# À propos de TeamSBC {#about-teamsbc}

TeamSBC est un petit Fedora Remix destiné aux ordinateurs monocartes et aux machines virtuelles.
TeamSBC propose **un système cohesive Linux** : un système d’exploitation
construit et livré comme un ensemble doté d’un numéro de version, dont tous les
composants et réglages par défaut sont conçus pour fonctionner ensemble et adaptés
à une carte précise.

TeamSBC est une version modifiée de Fedora Linux. Si vous souhaitez obtenir
une version non modifiée de Fedora Linux, vous pouvez consulter le site du
[Projet Fedora](http://fedoraproject.org/).

## Cohesive Linux {#cohesive-linux}

TeamSBC fait des images système l’unité de construction, de livraison
et de mise à jour. Les logiciels et la configuration inclus dans une image sont
choisis ensemble lors de sa préparation et de sa construction. Le modèle de mise à jour envisagé
remplace l’image système complète par une nouvelle version, au lieu de mettre
à jour les packages un par un.

Cette conception guide le développement du projet. Elle réunit la création des images,
le démarrage, la configuration initiale et la maintenance dans un même ensemble,
pour obtenir un système dont les composants sont construits ensemble, fonctionnent
ensemble et se mettent à jour ensemble.

**Makalu** est la variante qui met en œuvre ce modèle de cohesive Linux. Nous proposons
également **Lhotse**, une variante basée sur les packages, pour ceux qui souhaitent
une transition plus simple ou tester nos packages et notre configuration sans
apprendre une nouvelle façon de travailler.

## Basé sur Fedora Linux et systemd {#built-on-fedora-linux-and-systemd}

Les packages Fedora constituent la base de TeamSBC. TeamSBC y ajoute quelques
packages qui lui sont propres, sa configuration et ses choix concernant les composants inclus dans
une image et leur configuration.

TeamSBC privilégie les fonctionnalités de systemd lorsqu’elles conviennent,
notamment pour le démarrage, la gestion des services et des utilisateurs et la
configuration du réseau. Ces choix soutiennent un petit
système intégré, construit à partir de projets en amont.

## Découvrir le projet et contribuer {#explore-and-contribute}

TeamSBC est expérimental et en plein développement. Il s’adresse aux personnes
qui souhaitent explorer ces systèmes, tester des images et contribuer à
l’évolution du projet.

Consultez la [page de téléchargements](/fr/downloads) pour les images disponibles,
lisez la [FAQ](/fr/faq) pour les questions courantes, ou rejoignez la
[communauté](https://handbook.teamsbc.org/preface/community.html) pour partager
vos retours et contribuer.
