import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'TeamSBC',
  description: 'A minimal Fedora Remix for single-board computers and virtual machines.',
  lang: 'en',
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
