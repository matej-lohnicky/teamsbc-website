---
title: About
description: TeamSBC's goal is a cohesive Linux system for single-board computers and virtual machines.
---

# About TeamSBC

TeamSBC is a small Fedora Remix targeting single-board computers and virtual machines.
TeamSBC wants to provide **a cohesive Linux system**: an operating system built
and delivered as a versioned whole, with all of its components and defaults designed
to work together and specific to a target board.

## Cohesive Linux

TeamSBC wants to make the system image the unit of building, delivery, and updates.
The software and configuration that belong in an image are chosen together
when it is prepared. The intended update model replaces the whole versioned system
image instead of single packages at a time.

This goal guides the project's development. It puts image creation, booting,
provisioning, and maintenance into a single design, so the result is a system
whose parts fit together and update together.

**Makalu** is the variant pursuing this cohesive model. We also offer the **Lhotse**
variant which is package-based for those who want an easier transition or want to
test our packages and configuration without learning a new idiom.

## Built on Fedora Linux and systemd

Fedora packages provide the base for TeamSBC. TeamSBC adds its own packages,
configuration, and choices about which components belong in an image and how they
are configured.

TeamSBC prefers systemd functionality where it fits, including tools for booting,
managing services and users, and configuring networking. These choices support
the project's aim of a small, integrated system built on upstream projects.

## Explore and contribute

TeamSBC is experimental and very in development. It is intended for people who want
to explore these systems, test images, and help shape the project.

See the [Downloads page](/downloads) for available images, read the
[FAQ](/faq) for common questions, or join the
[community](https://handbook.teamsbc.org/preface/community.html) to share feedback
and contribute.
