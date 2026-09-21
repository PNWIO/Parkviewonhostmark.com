import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/lots", label: "The lots" },
  { to: "/location", label: "Location" },
  { to: "/inquiry", label: "Inquire" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const inverted = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300",
        inverted
          ? "border-b border-transparent bg-forest-deep/25 text-paper backdrop-blur-[2px]"
          : "border-b border-line bg-paper/95 text-ink backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight md:text-xl">
            {SITE.shortName}
          </span>
          <span
            className={cn(
              "text-[0.65rem] uppercase tracking-[0.22em]",
              inverted ? "text-paper/70" : "text-muted",
            )}
          >
            at Hostmark
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm tracking-wide transition-opacity hover:opacity-70",
                pathname.startsWith(item.to) && item.to !== "/inquiry"
                  ? "opacity-100"
                  : "opacity-90",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            variant={inverted ? "invert" : "default"}
            className="rounded-full px-4"
          >
            <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t px-5 py-6 md:hidden",
            inverted
              ? "border-paper/20 bg-forest-deep text-paper"
              : "border-line bg-paper text-ink",
          )}
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex h-12 items-center text-base"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.contact.phoneHref}
              className="flex h-12 items-center text-base"
            >
              {SITE.contact.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
