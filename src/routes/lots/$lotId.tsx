import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getLot, LOTS, SITE } from "@/data/site";
import { LotMap } from "@/components/lot-map";
import { Button } from "@/components/ui/button";
import { formatAcres, formatSqFt } from "@/lib/utils";

export const Route = createFileRoute("/lots/$lotId")({
  loader: ({ params }) => {
    const lot = getLot(Number(params.lotId));
    if (!lot) throw notFound();
    return { lot };
  },
  component: LotDetailPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.lot.name ?? "Lot"} · Parkview at Hostmark`,
      },
    ],
  }),
});

function LotDetailPage() {
  const { lot } = Route.useLoaderData();
  const index = LOTS.findIndex((item) => item.id === lot.id);
  const prev = LOTS[index - 1];
  const next = LOTS[index + 1];

  return (
    <main className="pt-16">
      <div className="relative min-h-[58vh] overflow-hidden bg-forest-deep">
        <img
          src={lot.homeImage}
          alt={`${lot.homeName} concept for ${lot.name}`}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24 md:px-8">
          <Link
            to="/lots"
            className="inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper"
          >
            <ArrowLeft className="size-4" />
            All lots
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-limestone">
            Phase 1 · {lot.orientation}
          </p>
          <h1 className="mt-2 font-display text-5xl text-paper md:text-6xl">
            {lot.name}
          </h1>
          <p className="mt-2 text-lg text-paper/85">{lot.homeName}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <p className="text-base leading-relaxed text-ink-soft">{lot.summary}</p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            <Row label="Lot area" value={formatSqFt(lot.areaSqFt)} />
            <Row label="Acres" value={formatAcres(lot.acres)} />
            <Row label="Concept home" value={formatSqFt(lot.homeSqFt)} />
            <Row label="Status" value="Phase 1 · available" />
            <Row label="Address" value={`${SITE.address}, ${SITE.city}`} />
          </dl>
          <ul className="mt-6 flex flex-wrap gap-2">
            {lot.features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
              >
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/inquiry" search={{ lot: lot.id }}>
                Inquire on {lot.name}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.contact.phoneHref}>Call {SITE.contact.phone}</a>
            </Button>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Concept home only — the square footage is living area sized to this
            lot, not the plat lot area. Buyers design with their own architect.
            Lot area is approximate pending final plat.
          </p>
        </div>
        <div className="md:col-span-6">
          <LotMap selectedId={lot.id} />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 md:px-8">
          {prev ? (
            <Link
              to="/lots/$lotId"
              params={{ lotId: String(prev.id) }}
              className="inline-flex items-center gap-2 text-sm text-forest hover:opacity-70"
            >
              <ArrowLeft className="size-4" />
              {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/lots/$lotId"
              params={{ lotId: String(next.id) }}
              className="inline-flex items-center gap-2 text-sm text-forest hover:opacity-70"
            >
              {next.name}
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <dt className="text-xs uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="text-sm text-ink">{value}</dd>
    </div>
  );
}
