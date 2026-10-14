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
