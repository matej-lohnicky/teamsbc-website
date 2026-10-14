---
title: Загрузки
description: Скачайте образы TeamSBC для поддерживаемых плат и виртуальных машин.
---

# Загрузки {#downloads}

TeamSBC предоставляет образы для Raspberry Pi 4, Raspberry Pi 5 и виртуальных
машин. Выберите ниже плату или виртуальную машину и её архитектуру, затем
скачайте образ нужного варианта системы.

[Lhotse](https://handbook.teamsbc.org/getting-started/variants.html#lhotse)
обслуживается через управление packages.
[Makalu](https://handbook.teamsbc.org/getting-started/variants.html#makalu) —
вариант cohesive Linux.

## Поддерживаемые платы и виртуальные машины {#supported-boards-and-virtual-machines}

Ссылки ниже открывают каталоги с экспериментальными образами TeamSBC 46.

| Плата / виртуальная машина | Архитектура | Lhotse | Makalu |
| --- | --- | --- | --- |
| Raspberry Pi 4 | ARM64 (`aarch64`) | [Скачать](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi4/index.html) | [Скачать](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi4/index.html) |
| Raspberry Pi 5 | ARM64 (`aarch64`) | [Скачать](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-rpi5/index.html) | [Скачать](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-rpi5/index.html) |
| Виртуальная машина | x86-64 (`x86_64`) | [Скачать](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-lhotse-virt/index.html) | [Скачать](https://artifacts.teamsbc.net/main/46/x86_64/teamsbc-makalu-virt/index.html) |
| Виртуальная машина | ARM64 (`aarch64`) | [Скачать](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-lhotse-virt/index.html) | [Скачать](https://artifacts.teamsbc.net/main/46/aarch64/teamsbc-makalu-virt/index.html) |

Для виртуальных машин требуется прошивка UEFI и образ, соответствующий их
архитектуре. Для Raspberry Pi используйте образ для вашей конкретной модели
платы.

## Начало работы {#get-started}

Следуйте [инструкции по установке](https://handbook.teamsbc.org/getting-started/installation.html)
в англоязычном руководстве, чтобы распаковать образ и подготовить виртуальную
машину или записать образ на накопитель вашего устройства. Раздел о
[первоначальной настройке](https://handbook.teamsbc.org/getting-started/provisioning.html)
описывает настройку при первом запуске и предварительную подготовку образа.

Если вашего устройства нет в списке, TeamSBC пока не выпускает для него образы.
Вы можете [запросить поддержку устройства](https://github.com/teamsbc/distribution/issues)
или [присоединиться к сообществу](https://handbook.teamsbc.org/preface/community.html).
