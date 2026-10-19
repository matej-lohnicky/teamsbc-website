---
title: Descargas
description: Descarga imágenes de TeamSBC para las placas y máquinas virtuales compatibles.
---

# Descargas {#downloads}

TeamSBC proporciona imágenes para Raspberry Pi 4, Raspberry Pi 5 y máquinas
virtuales. Elige a continuación una placa o máquina virtual y su arquitectura,
y descarga una imagen de la variante que quieras utilizar.

[Makalu](https://handbook.teamsbc.org/getting-started/variants.html#makalu) es la
variante de cohesive Linux.
[Lhotse](https://handbook.teamsbc.org/getting-started/variants.html#lhotse)
utiliza un mantenimiento basado en packages.

## Placas y máquinas virtuales compatibles {#supported-boards-and-virtual-machines}

Los siguientes enlaces abren los directorios de descarga de las imágenes experimentales de TeamSBC 46.

| Placa / máquina virtual | Arquitectura | Lhotse | Makalu |
| --- | --- | --- | --- |
| Raspberry Pi 4 | ARM64 (`aarch64`) | [Descargar](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi4/index.html) | [Descargar](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi4/index.html) |
| Raspberry Pi 5 | ARM64 (`aarch64`) | [Descargar](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi5/index.html) | [Descargar](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi5/index.html) |
| Máquina virtual | x86-64 (`x86_64`) | [Descargar](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-lhotse-virt/index.html) | [Descargar](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-makalu-virt/index.html) |
| Máquina virtual | ARM64 (`aarch64`) | [Descargar](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-virt/index.html) | [Descargar](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-virt/index.html) |

Las máquinas virtuales necesitan firmware UEFI y una imagen que coincida con su
arquitectura. En los demás casos, utiliza la imagen específica para la placa
en la que quieras ejecutar el sistema.

## Primeros pasos {#get-started}

Sigue la [guía de instalación](https://handbook.teamsbc.org/getting-started/installation.html)
del manual en inglés para descomprimir tu imagen y preparar una máquina virtual
o escribirla en el almacenamiento de tu dispositivo. Consulta la
[configuración inicial](https://handbook.teamsbc.org/getting-started/provisioning.html)
para configurar el sistema en el primer arranque o preparar una imagen con antelación.

Si tu dispositivo no aparece en la lista, TeamSBC no produce imágenes para él
actualmente. Puedes [solicitar compatibilidad con tu dispositivo](https://github.com/teamsbc/distribution/issues)
o [unirte a la comunidad](https://handbook.teamsbc.org/preface/community.html).
