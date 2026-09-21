# parkviewonhostmark.com

Marketing site for **Parkview at Hostmark** — eight Phase 1 custom lots on a
private lane at 1272 NE Hostmark Street, Poulsbo, Washington.

Published from this repository with GitHub Pages.

**Live:** https://pnwio.github.io/Parkviewonhostmark.com/

Custom domain (after DNS is pointed at GitHub Pages):
https://www.parkviewonhostmark.com

## Local development

Node 22 or newer.

```bash
npm install
npm run dev
```

```bash
npm run typecheck
GITHUB_PAGES=1 npm run build
```

Static output is in `dist/client/`.

## GitHub Pages

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

To attach `www.parkviewonhostmark.com`:

1. Repo **Settings → Pages → Custom domain** → `www.parkviewonhostmark.com`
2. At the DNS host, add a CNAME: `www` → `pnwio.github.io`
3. Enable HTTPS once the certificate is issued

## Cloudflare Pages (optional)

Same source can be connected in Cloudflare Pages:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Environment variable | leave `GITHUB_PAGES` unset |
| Node version | 22 |
