# TeamSBC Website

The main website uses VitePress's default theme and homepage layout. Its
Home/About/Downloads/FAQ/Sponsoring/Handbook navigation links to the landing page,
project goals, image downloads for supported boards and virtual machines, common
questions, ways to support the project, and the handbook.

Use Node.js 22 or newer. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```

Edit `src/index.md` for the landing page, `src/about.md` for project goals,
`src/downloads.md` for image downloads, `src/faq.md` for common questions,
`src/sponsoring.md` for sponsorship information, and `.vitepress/config.js` for
site settings. Keep the board list and download links aligned with the artifacts
repository's build matrix and the handbook's installation page. Shared images
and the custom domain file live in `src/public/`.
There is no documentation sidebar, search, or page-edit link.

English pages live directly in `src/` and keep their existing URLs. Dutch
translations live in `src/nl/` and are served under `/nl/`; French translations
live in `src/fr/` and are served under `/fr/`; German translations live in
`src/de/` and are served under `/de/`; Russian translations live in `src/ru/`
and are served under `/ru/`. Leave the terms
"cohesive Linux" and "packages" untranslated in translations. Keep matching filenames
and heading IDs across languages so the language selector can open the same page
and section. Update all language versions when changing content, especially download links.
Locale settings and navigation live in `.vitepress/config.js`; the translated
experimental notice lives in `.vitepress/theme/ExperimentalNotice.vue`.
The handbook is a separate site and remains in English.

The dependencies match the handbook: VitePress 1.6.4, with a patched Vite 6
override to avoid the advisories affecting Vite 5. Commit `package-lock.json`
and `.nvmrc`; generated output and dependencies are ignored.

GitHub Actions checks pull requests and deploys `.vitepress/dist/` on pushes to
`main`. In the repository's GitHub Pages settings, use **GitHub Actions** as the
build source and retain the `teamsbc.org` custom domain. The workflow uses the
base path supplied by GitHub Pages. For a local build under a subpath, use
`VITEPRESS_BASE=/website/ npm run build`.
