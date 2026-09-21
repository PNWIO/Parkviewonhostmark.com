import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import appCss from "../styles.css?url";

const APP_NAME = "Parkview at Hostmark";
const CANONICAL = "https://www.parkviewonhostmark.com";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Eight custom lots for Northwest contemporary homes on a private lane in in-town Poulsbo. Phase 1 at Parkview at Hostmark — 1272 NE Hostmark Street.",
      },
      { name: "theme-color", content: "#24352c" },
      { property: "og:title", content: APP_NAME },
      {
        property: "og:description",
        content:
          "Eight custom lots on a private lane in Poulsbo. Phase 1 at 1272 NE Hostmark Street.",
      },
      { property: "og:image", content: `${CANONICAL}/og.jpg` },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "canonical", href: CANONICAL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink">
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-3 font-display text-4xl text-forest">
        That page isn’t on the plat.
      </h1>
      <a href="/" className="mt-8 text-sm text-sage underline-offset-4 hover:underline">
        Back to Parkview
      </a>
    </main>
  );
}
