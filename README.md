# parkviewonhostmark.com

Marketing site for **Parkview at Hostmark** — eight Phase 1 custom lots on a
private lane at 1272 NE Hostmark Street, Poulsbo, Washington.

TanStack Start · Cloudflare Pages.

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

Production output is in `dist/`.

## Cloudflare Pages

Connect this private GitHub repository in Cloudflare Pages with these settings:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 22 |
| Root directory | `/` |

Then attach the custom domain:

- `parkviewonhostmark.com`
- `www.parkviewonhostmark.com`

Point both at this Pages project. Use a Cloudflare Redirect Rule so the apex
forwards to `www`.

Inquiry is email-first (`mailto:` to Ian Laughlin). No runtime bindings required.

## Project structure

```text
src/data/site.ts           lots, contact, drive times
src/routes/                pages (home, lots, location, inquiry)
src/components/            header, footer, lot map, form
public/images/             concept homes and Poulsbo photos
public/docs/               plat, lot exhibit, pre-app letters
```
