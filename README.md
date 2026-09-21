# parkviewonhostmark.com

Marketing site for **Parkview at Hostmark** — eight Phase 1 custom lots on a
private lane at 1272 NE Hostmark Street, Poulsbo, Washington.

**Live on GitHub Pages:** https://pnwio.github.io/

Source of truth is this repo. The published files are in
[PNWIO/PNWIO.github.io](https://github.com/PNWIO/PNWIO.github.io).

Custom domain (needs DNS + Pages custom domain):
https://www.parkviewonhostmark.com

## Local development

Node 22 or newer.

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```

Static output is in `dist/client/`.

## Attach www.parkviewonhostmark.com

1. Open [PNWIO.github.io Settings → Pages](https://github.com/PNWIO/PNWIO.github.io/settings/pages)
2. Custom domain: `www.parkviewonhostmark.com`
3. At the DNS host, CNAME `www` → `pnwio.github.io`
4. Enable HTTPS once the certificate is issued
