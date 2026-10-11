# TeamSBC Website

The main website uses VitePress's default theme and homepage layout. Its
Home/Devices/Handbook navigation links to the landing page, supported devices,
and the handbook.

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

Edit `src/index.md` for the landing page, `src/devices.md` for supported devices,
and `.vitepress/config.js` for site settings. Keep the device list and download
links aligned with the artifacts repository's build matrix and the handbook's
installation page. Shared images and the custom domain file live in `src/public/`.
There is no documentation sidebar, search, or page-edit link.

The dependencies match the handbook: VitePress 1.6.4, with a patched Vite 6
override to avoid the advisories affecting Vite 5. Commit `package-lock.json`
and `.nvmrc`; generated output and dependencies are ignored.

GitHub Actions checks pull requests and deploys `.vitepress/dist/` on pushes to
`main`. In the repository's GitHub Pages settings, use **GitHub Actions** as the
build source and retain the `teamsbc.org` custom domain. The workflow uses the
base path supplied by GitHub Pages. For a local build under a subpath, use
`VITEPRESS_BASE=/website/ npm run build`.
