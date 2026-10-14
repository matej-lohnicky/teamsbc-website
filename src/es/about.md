---
title: Acerca de TeamSBC
description: TeamSBC quiere ofrecer un sistema cohesive Linux para ordenadores de placa única y máquinas virtuales.
---

# Acerca de TeamSBC {#about-teamsbc}

TeamSBC es un pequeño Fedora Remix orientado a ordenadores de placa única y máquinas virtuales.
TeamSBC quiere ofrecer **un sistema cohesive Linux**: un sistema operativo que se
construye y distribuye como un conjunto con su propio número de versión, cuyos
componentes y ajustes predeterminados están diseñados para funcionar juntos y
adaptados a una placa concreta.

## Cohesive Linux {#cohesive-linux}

TeamSBC quiere que la imagen del sistema sea la unidad de construcción, distribución
y actualización. El software y la configuración que forman parte de una imagen
se eligen juntos al prepararla. El modelo de actualización previsto sustituye
la imagen completa del sistema por una nueva versión, en lugar de actualizar
los packages de uno en uno.

Este objetivo guía el desarrollo del proyecto. Reúne la creación de imágenes,
el arranque, la configuración inicial y el mantenimiento en un único diseño,
para obtener un sistema cuyos componentes encajen y se actualicen juntos.

**Makalu** es la variante que persigue este modelo de cohesive Linux. También
ofrecemos **Lhotse**, una variante basada en packages para quienes quieren una
transición más sencilla o probar nuestros packages y nuestra configuración sin
aprender una nueva forma de trabajar.

## Basado en Fedora Linux y systemd {#built-on-fedora-linux-and-systemd}

Los packages de Fedora proporcionan la base de TeamSBC. TeamSBC añade sus propios
packages, su configuración y sus decisiones sobre qué componentes forman parte
de una imagen y cómo se configuran.

TeamSBC prefiere las funciones de systemd cuando resultan adecuadas, incluidas
las herramientas para el arranque, la gestión de servicios y usuarios y la
configuración de redes. Estas decisiones apoyan el objetivo del proyecto:
un sistema pequeño e integrado construido sobre proyectos upstream.

## Explora el proyecto y contribuye {#explore-and-contribute}

TeamSBC es experimental y está en pleno desarrollo. Está pensado para quienes
quieren explorar estos sistemas, probar imágenes y ayudar a dar forma al proyecto.

Consulta la [página de descargas](/es/downloads) para ver las imágenes disponibles,
lee las [preguntas frecuentes](/es/faq) o únete a la
[comunidad](https://handbook.teamsbc.org/preface/community.html) para compartir
tus comentarios y contribuir.
