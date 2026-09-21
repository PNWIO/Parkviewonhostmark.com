import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-display text-2xl tracking-tight">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-limestone">
            Eight custom lots on a private lane in in-town Poulsbo. Phase 1 is
            offered by {SITE.contact.company}. Phase 2 is under separate
            ownership and is not for sale.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.16em] text-limestone">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {SITE.address}
            <br />
            {SITE.city}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/lots" className="hover:text-limestone">
              The lots
            </Link>
            <Link to="/location" className="hover:text-limestone">
              Location
            </Link>
            <Link to="/inquiry" className="hover:text-limestone">
              Inquire
            </Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.16em] text-limestone">
            Inquire
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {SITE.contact.name}
            <br />
            {SITE.contact.company}
          </p>
          <a
            href={SITE.contact.phoneHref}
            className="mt-2 block text-sm hover:text-limestone"
          >
            {SITE.contact.phone}
          </a>
          <a
            href={SITE.contact.mailHref}
            className="block text-sm hover:text-limestone"
          >
            {SITE.contact.email}
          </a>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-limestone/80 md:flex-row md:items-start md:justify-between md:px-8">
          <p>
            Home images are architectural concepts for a Northwest contemporary
            vocabulary — buyers and their architects design the houses. Lot
            areas are approximate from survey and pre-preliminary plat exhibits
            and remain subject to City of Poulsbo review.
          </p>
          <p className="shrink-0 md:max-w-xs md:text-right">
            © {new Date().getFullYear()} {SITE.contact.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
