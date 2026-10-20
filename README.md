> [!IMPORTANT]
> Issues for this repository are tracked at the [distribution bug tracker](https://github.com/teamsbc/distribution/issues).

# TeamSBC Website

The website uses [VitePress](https://vitepress.dev/) with its default theme.
Use Node.js 22 or newer. If you use nvm, run `nvm use` first.
`package.json` overrides VitePress 1.x's Vite dependency with a patched Vite 6
release to avoid the advisories affecting Vite 5.

Install dependencies and start the development server:

```sh
npm ci
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```
