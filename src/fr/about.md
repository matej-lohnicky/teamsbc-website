---
title: À propos
description: TeamSBC souhaite proposer un système cohesive Linux pour les ordinateurs monocartes et les machines virtuelles.
---

# À propos de TeamSBC {#about-teamsbc}

TeamSBC est un petit Fedora Remix destiné aux ordinateurs monocartes et aux machines virtuelles.
TeamSBC souhaite proposer **un système cohesive Linux** : un système d’exploitation
construit et livré comme un ensemble doté d’un numéro de version, dont tous les
composants et réglages par défaut sont conçus pour fonctionner ensemble et adaptés
à une carte précise.

## Cohesive Linux {#cohesive-linux}

TeamSBC souhaite faire de l’image système l’unité de construction, de livraison
et de mise à jour. Les logiciels et la configuration inclus dans une image sont
choisis ensemble lors de sa préparation. Le modèle de mise à jour envisagé
remplace l’image système complète par une nouvelle version, au lieu de mettre
à jour les packages un par un.

Cet objectif guide le développement du projet. Il réunit la création des images,
le démarrage, la configuration initiale et la maintenance dans une même conception,
pour obtenir un système dont les composants fonctionnent et se mettent à jour ensemble.

**Makalu** est la variante qui poursuit ce modèle de cohesive Linux. Nous proposons
également **Lhotse**, une variante basée sur les packages, pour ceux qui souhaitent
une transition plus simple ou tester nos packages et notre configuration sans
apprendre une nouvelle façon de travailler.

## Basé sur Fedora Linux et systemd {#built-on-fedora-linux-and-systemd}

Les packages Fedora constituent la base de TeamSBC. TeamSBC y ajoute ses propres
packages, sa configuration et ses choix concernant les composants inclus dans
une image et leur configuration.

TeamSBC privilégie les fonctionnalités de systemd lorsqu’elles conviennent,
notamment pour le démarrage, la gestion des services et des utilisateurs et la
configuration du réseau. Ces choix soutiennent l’objectif du projet : un petit
système intégré, construit à partir de projets en amont.

## Découvrir le projet et contribuer {#explore-and-contribute}

TeamSBC est expérimental et en plein développement. Il s’adresse aux personnes
qui souhaitent explorer ces systèmes, tester des images et contribuer à
l’évolution du projet.

Consultez la [page de téléchargements](/fr/downloads) pour les images disponibles,
lisez la [FAQ](/fr/faq) pour les questions courantes, ou rejoignez la
[communauté](https://handbook.teamsbc.org/preface/community.html) pour partager
vos retours et contribuer.
