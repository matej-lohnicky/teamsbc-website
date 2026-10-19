---
title: Acerca de TeamSBC
description: TeamSBC quiere ofrecer un sistema cohesive Linux para ordenadores de placa única y máquinas virtuales.
---

# Acerca de TeamSBC {#about-teamsbc}

TeamSBC es un pequeño Fedora Remix orientado a ordenadores de placa única y máquinas virtuales.
TeamSBC ofrece **un sistema cohesive Linux**: un sistema operativo que se
construye y distribuye como un conjunto con su propio número de versión, cuyos
componentes y ajustes predeterminados están diseñados para funcionar juntos y
adaptados a una placa concreta.

TeamSBC es una versión modificada de Fedora Linux. Si quieres obtener
una versión sin modificar de Fedora Linux, puedes visitar el sitio web del
[Proyecto Fedora](http://fedoraproject.org/).

## Cohesive Linux {#cohesive-linux}

TeamSBC utiliza las imágenes del sistema como unidad de construcción, distribución
y actualización. El software y la configuración que forman parte de una imagen
se eligen juntos al prepararla y construirla. El modelo de actualización previsto sustituye
la imagen completa del sistema por una nueva versión, en lugar de actualizar
los packages de uno en uno.

Este diseño guía el desarrollo del proyecto. Reúne la creación de imágenes,
el arranque, la configuración inicial y el mantenimiento en una sola unidad,
para obtener un sistema cuyos componentes se construyan juntos, encajen y se actualicen juntos.

**Makalu** es la variante que implementa este modelo de cohesive Linux. También
ofrecemos **Lhotse**, una variante basada en packages para quienes quieren una
transición más sencilla o probar nuestros packages y nuestra configuración sin
aprender una nueva forma de trabajar.

## Basado en Fedora Linux y systemd {#built-on-fedora-linux-and-systemd}

Los packages de Fedora proporcionan la base de TeamSBC. TeamSBC añade algunos de sus propios
packages, su configuración y sus decisiones sobre qué componentes forman parte
de una imagen y cómo se configuran.

TeamSBC prefiere las funciones de systemd cuando resultan adecuadas, incluidas
las herramientas para el arranque, la gestión de servicios y usuarios y la
configuración de redes. Estas decisiones apoyan un sistema pequeño e integrado
construido sobre proyectos upstream.

## Explora el proyecto y contribuye {#explore-and-contribute}

TeamSBC es experimental y está en pleno desarrollo. Está pensado para quienes
quieren explorar estos sistemas, probar imágenes y ayudar a dar forma al proyecto.

Consulta la [página de descargas](/es/downloads) para ver las imágenes disponibles,
lee las [preguntas frecuentes](/es/faq) o únete a la
[comunidad](https://handbook.teamsbc.org/preface/community.html) para compartir
tus comentarios y contribuir.
