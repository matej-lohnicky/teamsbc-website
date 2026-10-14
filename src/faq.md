---
title: FAQ
description: Common questions about TeamSBC, cohesive Linux, variants, and getting started.
---

# FAQ

## What is TeamSBC?

TeamSBC is a small Fedora Remix targeting single-board computers and virtual machines.
It builds on Fedora packages and adds its own configuration and choices.
Read [About TeamSBC](/about) for the project's goals and approach.

## What's a cohesive Linux?

It means treating the operating system as a versioned whole. Software and
configuration are selected together when the system image is built, and the
intended update model replaces that image as a single unit. You might have
also seen this be called atomic, or immutable Linux but TeamSBC prefers the
word cohesive as it isn't *quite* a single unit and it isn't *quite* entirely
immutable.

## How do Makalu and Lhotse differ?

Makalu is the cohesive approach, with the operating system maintained as a
versioned image. Lhotse uses `dnf` to install, remove, and update packages on the
running system. Both share TeamSBC's overall configuration and ideas but the
latter allows you to try out TeamSBC Linux without having to learn a new idiom.

## Is TeamSBC ready for everyday use?

TeamSBC is experimental and not ready for general usage. Expect unfinished
features and documentation. It is currently useful for exploration, testing, and
development.

## Which devices can I run it on?

See [Downloads](/downloads) for available board and virtual-machine images and
their architectures. Choose the image for your device; virtual machines need
UEFI firmware. Any unlisted device does not currently have a TeamSBC image.

## Where are the installation instructions?

The handbook covers
[installation](https://handbook.teamsbc.org/getting-started/installation.html)
and [provisioning](https://handbook.teamsbc.org/getting-started/provisioning.html).

## Can I customize TeamSBC?

Yes. For the cohesive model,
choices about what belongs in the operating system become part of building the
image. See the handbook's
[image customization guide](https://handbook.teamsbc.org/customization/build-your-own.html).

Lhotse supports changes through package management on a running system. 

## How can I help?

Test images, report bugs, improve documentation, or contribute to packages and
image definitions. Use the
[issue tracker](https://github.com/teamsbc/distribution/issues) for bugs and feature
requests, and the [community](https://handbook.teamsbc.org/preface/community.html)
for questions and discussions.
