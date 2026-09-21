import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LOTS, type Lot } from "@/data/site";
import { LotMap } from "@/components/lot-map";
import { Button } from "@/components/ui/button";
import { formatSqFt, formatAcres } from "@/lib/utils";

export const Route = createFileRoute("/lots/")({ component: LotsPage });

function LotsPage() {
  const [active, setActive] = useState<Lot>(LOTS[0]);

  return (
    <main className="pt-20">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          Phase 1 · for sale
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-forest md:text-6xl">
          Eight lots on the lane.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
          Select a parcel on the plan. Square footages on the plat are lot
          area — not the house. Concept homes are sized to each lot.
          Final geometry will be confirmed with the City of Poulsbo. Phase 2
          is grayed — separate ownership, not offered.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-10 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <LotMap selectedId={active.id} onSelect={setActive} linkLots={false} />
        </div>
        <aside className="md:col-span-5">
          <div className="overflow-hidden rounded-xl border border-line bg-paper md:sticky md:top-24">
            <img
              src={active.homeImage}
              alt={`${active.homeName} concept`}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                {active.orientation}
              </p>
              <h2 className="mt-2 font-display text-3xl text-forest">
                {active.name}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{active.homeName}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {active.summary}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    Lot
                  </p>
                  <p className="mt-1 font-display text-2xl text-forest">
                    {formatSqFt(active.areaSqFt)}
                  </p>
                  <p className="text-xs text-muted">
                    {formatAcres(active.acres)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    Concept home
                  </p>
                  <p className="mt-1 font-display text-2xl text-forest">
                    {formatSqFt(active.homeSqFt)}
                  </p>
                  <p className="text-xs text-muted">living area, illustrative</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {active.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link
                    to="/lots/$lotId"
                    params={{ lotId: String(active.id) }}
                  >
                    Lot details
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/inquiry" search={{ lot: active.id }}>
                    Inquire
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="overflow-hidden rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-paper-2 text-xs uppercase tracking-[0.14em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Lot</th>
                <th className="px-4 py-3 font-medium">Lot area</th>
                <th className="px-4 py-3 font-medium">Concept home</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">
                  Position
                </th>
              </tr>
            </thead>
            <tbody>
              {LOTS.map((lot) => (
                <tr
                  key={lot.id}
                  className="cursor-pointer border-t border-line hover:bg-paper-2"
                  onClick={() => setActive(lot)}
                >
                  <td className="px-4 py-3 font-medium text-forest">
                    {lot.name}
                  </td>
                  <td className="px-4 py-3">{formatSqFt(lot.areaSqFt)}</td>
                  <td className="px-4 py-3">
                    {formatSqFt(lot.homeSqFt)}
                    <span className="hidden text-muted sm:inline">
                      {" "}
                      · {lot.homeName}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-ink-soft sm:table-cell">
                    {lot.orientation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Architectural concepts only — living area is illustrative massing,
          not a required floorplan. Lot square footage is from the Seabold
          Engineering pre-preliminary plat. Homes are not built.
        </p>
      </div>
    </main>
  );
}
