# cv

Personal CV in English and Russian, built as a single page that serves both as the online version and as the source for the PDFs.

## Stack

- [Vite+](https://viteplus.dev) (`vp`) — dev server, build, format, lint, type check, tests
- Vue 3 + TypeScript
- pnpm (pinned via `devEngines` in `package.json`)

## Getting started

Requires the [Vite+ CLI](https://viteplus.dev/guide/):

```bash
curl -fsSL https://vite.plus | bash
```

Then:

```bash
vp install   # install dependencies
vp dev       # start the dev server
vp check     # format, lint and type check
vp build     # production build to dist/
```

Node.js and pnpm versions are resolved by Vite+ from the project pins. Run `vp env doctor` if the wrong version is picked up.

## Roadmap

- [ ] Typed CV data with `en` / `ru` fields for every text
- [ ] A4-first layout with print styles and an EN/RU toggle
- [ ] PDF generation for both languages (`cv-en.pdf`, `cv-ru.pdf`)
- [ ] CI: check, build, generate PDFs and deploy the site
