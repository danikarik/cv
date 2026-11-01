# cv

Personal CV in English and Russian, built as a single page that serves both as the online version and as the source for the PDFs.

**Live:** https://cv.ozimiz.app

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

If `vp dev` hangs without output in an embedded terminal, run `CI=1 vp dev` — it skips a terminal capability query that some terminals don't answer.

## Deployment

Hosted on Cloudflare Pages (project `cv`, see `wrangler.jsonc`):

- Production: https://cv.ozimiz.app
- Pages URL: https://cv-3q1.pages.dev

Every push to `main` runs `.github/workflows/deploy.yml`: `vp check`, tests, build, then `wrangler pages deploy`. The workflow needs the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets.

Manual deploy (after `wrangler login`):

```bash
vp run deploy
```

## Roadmap

- [ ] Typed CV data with `en` / `ru` fields for every text
- [ ] A4-first layout with print styles and an EN/RU toggle
- [ ] PDF generation for both languages (`cv-en.pdf`, `cv-ru.pdf`)
- [x] CI: check, build and deploy the site to Cloudflare Pages
- [ ] CI: generate PDFs and publish them with the site
