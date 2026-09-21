import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { SITE } from "@/data/site";

type InquirySearch = {
  lot?: number;
};

export const Route = createFileRoute("/inquiry")({
  validateSearch: (search: Record<string, unknown>): InquirySearch => ({
    lot:
      typeof search.lot === "number"
        ? search.lot
        : typeof search.lot === "string"
          ? Number(search.lot) || undefined
          : undefined,
  }),
  component: InquiryPage,
});

function InquiryPage() {
  const { lot } = Route.useSearch();

  return (
    <main className="pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            Inquire
          </p>
          <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">
            Ask about a lot.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Pricing is on request. Offers are considered on the land as-is, with
            entitlements, or vertical-ready. A due-diligence packet is available
            under NDA.
          </p>
          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Contact
              </p>
              <p className="mt-2 text-lg text-ink">{SITE.contact.name}</p>
              <p className="text-sm text-ink-soft">{SITE.contact.company}</p>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <a
                className="text-sage underline-offset-4 hover:underline"
                href={SITE.contact.phoneHref}
              >
                {SITE.contact.phone}
              </a>
              <a
                className="text-sage underline-offset-4 hover:underline"
                href={SITE.contact.mailHref}
              >
                {SITE.contact.email}
              </a>
            </div>
            <p className="text-sm text-muted">{SITE.address}<br />{SITE.city}</p>
          </div>
          <div className="mt-8 border-t border-line pt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Drawings
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="text-sage underline-offset-4 hover:underline"
                  href="/docs/Parkview%20PPlat%20PrePrelim%20-%206.25.2026.pdf"
                >
                  Pre-preliminary plat
                </a>
              </li>
              <li>
                <a
                  className="text-sage underline-offset-4 hover:underline"
                  href="/docs/Parkview%20Lots.pdf"
                >
                  Lot-area exhibit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-xl border border-line bg-paper p-6 md:p-8">
            <InquiryForm defaultLot={lot} />
          </div>
        </div>
      </div>
    </main>
  );
}
