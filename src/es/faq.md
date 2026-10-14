---
title: Preguntas frecuentes
description: Preguntas frecuentes sobre TeamSBC, cohesive Linux, las variantes y los primeros pasos.
---

# Preguntas frecuentes {#faq}

## ¿Qué es TeamSBC? {#what-is-teamsbc}

TeamSBC es un pequeño Fedora Remix orientado a ordenadores de placa única y máquinas
virtuales. Se basa en los packages de Fedora y añade su propia configuración
y sus decisiones. Lee [Acerca de TeamSBC](/es/about) para conocer los objetivos
y el enfoque del proyecto.

## ¿Qué es cohesive Linux? {#what-s-a-cohesive-linux}

Significa tratar el sistema operativo como un conjunto con su propio número de
versión. El software y la configuración se eligen juntos al construir la imagen
del sistema, y el modelo de actualización previsto sustituye esa imagen como una
sola unidad. Quizá también hayas visto los términos «Linux atómico» o «Linux
inmutable». TeamSBC prefiere la palabra «cohesive», porque el sistema no es
*exactamente* una sola unidad ni es *totalmente* inmutable.

## ¿En qué se diferencian Makalu y Lhotse? {#how-do-makalu-and-lhotse-differ}

Makalu sigue el enfoque de cohesive Linux, donde el sistema operativo se mantiene
como una imagen con su propio número de versión. Lhotse utiliza `dnf` para
instalar, eliminar y actualizar packages en el sistema en ejecución. Ambos
comparten la configuración general y las ideas de TeamSBC, pero Lhotse te permite
probar TeamSBC Linux sin aprender una nueva forma de trabajar.

## ¿Está TeamSBC listo para el uso diario? {#is-teamsbc-ready-for-everyday-use}

TeamSBC es experimental y aún no está listo para un uso general. Encontrarás
funciones y documentación sin terminar. Actualmente es útil para explorar,
probar y desarrollar.

## ¿En qué dispositivos puedo utilizarlo? {#which-devices-can-i-run-it-on}

Consulta las [descargas](/es/downloads) para ver las imágenes disponibles para
placas y máquinas virtuales y sus arquitecturas. Elige la imagen de tu dispositivo;
las máquinas virtuales necesitan firmware UEFI. Los dispositivos que no aparecen
en la lista no tienen actualmente una imagen de TeamSBC.

## ¿Dónde están las instrucciones de instalación? {#where-are-the-installation-instructions}

El manual en inglés explica la
[instalación](https://handbook.teamsbc.org/getting-started/installation.html)
y la [configuración inicial](https://handbook.teamsbc.org/getting-started/provisioning.html).

## ¿Puedo personalizar TeamSBC? {#can-i-customize-teamsbc}

Sí. En el modelo de cohesive Linux, las decisiones sobre qué forma parte del
sistema operativo se toman durante la construcción de la imagen. Consulta la
[guía de personalización de imágenes](https://handbook.teamsbc.org/customization/build-your-own.html)
en el manual.

Lhotse permite realizar cambios mediante la gestión de packages en un sistema en ejecución.

## ¿Cómo puedo ayudar? {#how-can-i-help}

Prueba imágenes, informa de errores, mejora la documentación o contribuye a los
packages y las definiciones de imágenes. Utiliza el
[seguimiento de incidencias](https://github.com/teamsbc/distribution/issues) para
errores y solicitudes de funciones, y la
[comunidad](https://handbook.teamsbc.org/preface/community.html) para preguntas y debates.
