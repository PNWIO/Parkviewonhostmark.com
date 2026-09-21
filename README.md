# parkviewonhostmark.com

Marketing site for **Parkview at Hostmark**.

**Live (GitHub Pages):** https://pnwio.github.io/

Custom domain: `www.parkviewonhostmark.com` (Cloudflare DNS, zone is currently empty).

## Local

```bash
npm install
npm run dev
npm run build
```

Static output: `dist/client/`.

## Cloudflare Pages (production)

In [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com/?to=/:account/pages):

1. **Create** → **Connect to Git** → `PNWIO/Parkviewonhostmark.com`
2. Production branch: `main`
3. Build command: `npm run build`
4. Build output directory: `dist/client`
5. Environment variables: none (`GITHUB_PAGES` must stay unset)
6. Node version: `22`
7. **Custom domains** → `www.parkviewonhostmark.com` and `parkviewonhostmark.com`

Cloudflare will write the DNS records. Proxy can stay orange (unlike GitHub Pages).

`wrangler.toml` already sets `pages_build_output_dir = "dist/client"`.
