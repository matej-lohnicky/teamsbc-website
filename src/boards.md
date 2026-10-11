---
title: Boards
description: Supported TeamSBC boards and virtual machines, architectures, and image downloads.
---

# Boards

TeamSBC provides images for Raspberry Pi 4, Raspberry Pi 5, and virtual machines.
Choose a board or virtual machine and its architecture below, then download an
image for the variant you want to run.

[Lhotse](https://handbook.teamsbc.org/getting-started/variants.html#lhotse) uses
package-based maintenance.
[Makalu](https://handbook.teamsbc.org/getting-started/variants.html#makalu) is the
image-based variant.

## Supported boards and virtual machines

The links below open the download directories for experimental TeamSBC 46 images.

| Board / virtual machine | Architecture | Lhotse | Makalu |
| --- | --- | --- | --- |
| Raspberry Pi 4 | ARM64 (`aarch64`) | [Download](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi4/index.html) | [Download](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi4/index.html) |
| Raspberry Pi 5 | ARM64 (`aarch64`) | [Download](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi5/index.html) | Not available |
| Virtual machine | x86-64 (`x86_64`) | [Download](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-lhotse-virt/index.html) | [Download](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-makalu-virt/index.html) |
| Virtual machine | ARM64 (`aarch64`) | [Download](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-virt/index.html) | Not available |

Virtual machines require UEFI firmware and an image matching their architecture.
For a Raspberry Pi, use the image for your specific board model.

## Get started

Follow the handbook's [installation guide](https://handbook.teamsbc.org/getting-started/installation.html)
to unpack your image and prepare a virtual machine or write it to your device's
storage. See [provisioning](https://handbook.teamsbc.org/getting-started/provisioning.html)
for first-boot setup or preparing an image ahead of time.

If your device is not listed, TeamSBC does not currently produce images for it.
You can [request device support](https://github.com/teamsbc/distribution/issues)
or [join the community](https://handbook.teamsbc.org/preface/community.html).
