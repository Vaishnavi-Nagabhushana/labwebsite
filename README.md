## Getting started

```sh
nvm install
nvm use
npm ci
npm run dev
```

The `.nvmrc` file specifies the project's Node.js version. If you use another version manager, select that version before installing dependencies.

Open the local address printed in your terminal, usually `http://localhost:4321`. Changes to your content and settings appear as you edit.

## Build and deploy

Before building, set `template.website_url` and `template.base` in `src/settings.ts` for your hosting location:

| Hosting location | `website_url` | `base` |
| --- | --- | --- |
| GitHub Pages project site | `https://your-username.github.io` | `/your-repository` |
| GitHub Pages user site | `https://your-username.github.io` | `''` |
| Custom domain | `https://example.com` | `''` |

These values are used by the Astro configuration and site links. Replace the default localhost URL before publishing.

```sh
npm run build
npm run preview
```

The build writes the site to `dist/`. Preview it locally, then configure your static hosting service to run `npm ci` and `npm run build` with the Node.js version from `.nvmrc`, and publish `dist/`.

For GitHub Pages, configure a Pages deployment workflow to build and upload `dist/`. The workflows currently included in this repository run development checks and update the changelog; deployment needs its own setup.

## Development checks

```sh
npm test       # Core search tests
npm run lint   # ESLint
npm run check  # Astro diagnostics and TypeScript checks
```
