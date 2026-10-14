import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'TeamSBC',
  description: 'A minimal Fedora Remix for single-board computers and virtual machines.',
  lang: 'en',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      description: 'Een minimale Fedora Remix voor single-board computers en virtuele machines.',
      themeConfig: {
        nav: [
          { text: 'Startpagina', link: '/nl/', activeMatch: '^/nl/$' },
          { text: 'Over TeamSBC', link: '/nl/about', activeMatch: '^/nl/about(?:\\.html)?$' },
          { text: 'Downloads', link: '/nl/downloads', activeMatch: '^/nl/downloads(?:\\.html)?$' },
          { text: 'Veelgestelde vragen', link: '/nl/faq', activeMatch: '^/nl/faq(?:\\.html)?$' },
          { text: 'Sponsoring', link: '/nl/sponsoring', activeMatch: '^/nl/sponsoring(?:\\.html)?$' },
          { text: 'Handboek (Engels)', link: 'https://handbook.teamsbc.org' }
        ],
        langMenuLabel: 'Taal wijzigen',
        darkModeSwitchLabel: 'Weergave',
        lightModeSwitchTitle: 'Licht thema inschakelen',
        darkModeSwitchTitle: 'Donker thema inschakelen',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Terug naar boven',
        skipToContentLabel: 'Naar de inhoud',
        outlineTitle: 'Op deze pagina',
        docFooter: { prev: 'Vorige pagina', next: 'Volgende pagina' },
        notFound: {
          title: 'PAGINA NIET GEVONDEN',
          quote: 'Deze pagina bestaat niet. Ga terug naar de startpagina om verder te lezen.',
          linkLabel: 'Naar de startpagina',
          linkText: 'Terug naar de startpagina'
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      description: 'Un Fedora Remix minimal pour les ordinateurs monocartes et les machines virtuelles.',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/', activeMatch: '^/fr/$' },
          { text: 'À propos', link: '/fr/about', activeMatch: '^/fr/about(?:\\.html)?$' },
          { text: 'Téléchargements', link: '/fr/downloads', activeMatch: '^/fr/downloads(?:\\.html)?$' },
          { text: 'FAQ', link: '/fr/faq', activeMatch: '^/fr/faq(?:\\.html)?$' },
          { text: 'Soutenir le projet', link: '/fr/sponsoring', activeMatch: '^/fr/sponsoring(?:\\.html)?$' },
          { text: 'Manuel (anglais)', link: 'https://handbook.teamsbc.org' }
        ],
        langMenuLabel: 'Changer de langue',
        darkModeSwitchLabel: 'Apparence',
        lightModeSwitchTitle: 'Activer le thème clair',
        darkModeSwitchTitle: 'Activer le thème sombre',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Retour en haut',
        skipToContentLabel: 'Aller au contenu',
        outlineTitle: 'Sur cette page',
        docFooter: { prev: 'Page précédente', next: 'Page suivante' },
        notFound: {
          title: 'PAGE INTROUVABLE',
          quote: 'Cette page n’existe pas. Revenez à l’accueil pour poursuivre votre lecture.',
          linkLabel: 'Aller à l’accueil',
          linkText: 'Retour à l’accueil'
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      description: 'Ein minimaler Fedora Remix für Einplatinencomputer und virtuelle Maschinen.',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/', activeMatch: '^/de/$' },
          { text: 'Über TeamSBC', link: '/de/about', activeMatch: '^/de/about(?:\\.html)?$' },
          { text: 'Downloads', link: '/de/downloads', activeMatch: '^/de/downloads(?:\\.html)?$' },
          { text: 'Häufige Fragen', link: '/de/faq', activeMatch: '^/de/faq(?:\\.html)?$' },
          { text: 'Sponsoring', link: '/de/sponsoring', activeMatch: '^/de/sponsoring(?:\\.html)?$' },
          { text: 'Handbuch (Englisch)', link: 'https://handbook.teamsbc.org' }
        ],
        langMenuLabel: 'Sprache wechseln',
        darkModeSwitchLabel: 'Darstellung',
        lightModeSwitchTitle: 'Helles Design aktivieren',
        darkModeSwitchTitle: 'Dunkles Design aktivieren',
        sidebarMenuLabel: 'Menü',
        returnToTopLabel: 'Nach oben',
        skipToContentLabel: 'Zum Inhalt springen',
        outlineTitle: 'Auf dieser Seite',
        docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
        notFound: {
          title: 'SEITE NICHT GEFUNDEN',
          quote: 'Diese Seite existiert nicht. Kehre zur Startseite zurück, um weiterzulesen.',
          linkLabel: 'Zur Startseite',
          linkText: 'Zurück zur Startseite'
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      description: 'Un Fedora Remix mínimo para ordenadores de placa única y máquinas virtuales.',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/', activeMatch: '^/es/$' },
          { text: 'Acerca de TeamSBC', link: '/es/about', activeMatch: '^/es/about(?:\\.html)?$' },
          { text: 'Descargas', link: '/es/downloads', activeMatch: '^/es/downloads(?:\\.html)?$' },
          { text: 'Preguntas frecuentes', link: '/es/faq', activeMatch: '^/es/faq(?:\\.html)?$' },
          { text: 'Patrocinio', link: '/es/sponsoring', activeMatch: '^/es/sponsoring(?:\\.html)?$' },
          { text: 'Manual (inglés)', link: 'https://handbook.teamsbc.org' }
        ],
        langMenuLabel: 'Cambiar idioma',
        darkModeSwitchLabel: 'Apariencia',
        lightModeSwitchTitle: 'Activar el tema claro',
        darkModeSwitchTitle: 'Activar el tema oscuro',
        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
        skipToContentLabel: 'Ir al contenido',
        outlineTitle: 'En esta página',
        docFooter: { prev: 'Página anterior', next: 'Página siguiente' },
        notFound: {
          title: 'PÁGINA NO ENCONTRADA',
          quote: 'Esta página no existe. Vuelve al inicio para seguir leyendo.',
          linkLabel: 'Ir al inicio',
          linkText: 'Volver al inicio'
        }
      }
    },
    cs: {
      label: 'Čeština',
      lang: 'cs',
      description: 'Minimální Fedora Remix pro jednodeskové počítače a virtuální stroje.',
      themeConfig: {
        nav: [
          { text: 'Úvod', link: '/cs/', activeMatch: '^/cs/$' },
          { text: 'O TeamSBC', link: '/cs/about', activeMatch: '^/cs/about(?:\\.html)?$' },
          { text: 'Ke stažení', link: '/cs/downloads', activeMatch: '^/cs/downloads(?:\\.html)?$' },
          { text: 'Časté dotazy', link: '/cs/faq', activeMatch: '^/cs/faq(?:\\.html)?$' },
          { text: 'Sponzorství', link: '/cs/sponsoring', activeMatch: '^/cs/sponsoring(?:\\.html)?$' },
          { text: 'Příručka (anglicky)', link: 'https://handbook.teamsbc.org' }
        ],
        langMenuLabel: 'Změnit jazyk',
        darkModeSwitchLabel: 'Vzhled',
        lightModeSwitchTitle: 'Zapnout světlý motiv',
        darkModeSwitchTitle: 'Zapnout tmavý motiv',
        sidebarMenuLabel: 'Nabídka',
        returnToTopLabel: 'Zpět nahoru',
        skipToContentLabel: 'Přejít na obsah',
        outlineTitle: 'Na této stránce',
        docFooter: { prev: 'Předchozí stránka', next: 'Další stránka' },
        notFound: {
          title: 'STRÁNKA NENALEZENA',
          quote: 'Tato stránka neexistuje. Vraťte se na úvodní stránku a pokračujte ve čtení.',
          linkLabel: 'Přejít na úvodní stránku',
          linkText: 'Zpět na úvodní stránku'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      description: 'Минимальный Fedora Remix для одноплатных компьютеров и виртуальных машин.',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/', activeMatch: '^/ru/$' },
          { text: 'О TeamSBC', link: '/ru/about', activeMatch: '^/ru/about(?:\\.html)?$' },
          { text: 'Загрузки', link: '/ru/downloads', activeMatch: '^/ru/downloads(?:\\.html)?$' },
          { text: 'Частые вопросы', link: '/ru/faq', activeMatch: '^/ru/faq(?:\\.html)?$' },
          { text: 'Поддержать проект', link: '/ru/sponsoring', activeMatch: '^/ru/sponsoring(?:\\.html)?$' },
          { text: 'Руководство (англ.)', link: 'https://handbook.teamsbc.org' }
        ],
        langMenuLabel: 'Выбрать язык',
        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Включить светлую тему',
        darkModeSwitchTitle: 'Включить тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
        skipToContentLabel: 'Перейти к содержимому',
        outlineTitle: 'На этой странице',
        docFooter: { prev: 'Предыдущая страница', next: 'Следующая страница' },
        notFound: {
          title: 'СТРАНИЦА НЕ НАЙДЕНА',
          quote: 'Этой страницы не существует. Вернитесь на главную страницу, чтобы продолжить чтение.',
          linkLabel: 'Перейти на главную страницу',
          linkText: 'На главную'
        }
      }
    }
  },
  srcDir: './src',
  base,
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }],
    ['script', { async: '', src: 'https://scripts.simpleanalyticscdn.com/latest.js' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/', activeMatch: '^/$' },
      { text: 'About', link: '/about', activeMatch: '^/about(?:\\.html)?$' },
      { text: 'Downloads', link: '/downloads', activeMatch: '^/downloads(?:\\.html)?$' },
      { text: 'FAQ', link: '/faq', activeMatch: '^/faq(?:\\.html)?$' },
      { text: 'Sponsoring', link: '/sponsoring', activeMatch: '^/sponsoring(?:\\.html)?$' },
      { text: 'Handbook', link: 'https://handbook.teamsbc.org' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/teamsbc/distribution' }
    ]
  }
})
