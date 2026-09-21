import { createFileRoute, Link } from "@tanstack/react-router";
import { DRIVE_TIMES, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

export const Route = createFileRoute("/location")({ component: LocationPage });

function LocationPage() {
  const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=15&output=embed`;

  return (
    <main className="pt-20">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          {SITE.address}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-forest md:text-6xl">
          In-town Poulsbo, with the park behind you.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          Hostmark is a quiet street a mile from Front Street, the marina, and
          Liberty Bay. The north line of Parkview meets Poulsbo’s Wilderness
          Park. Schools, Central Market, and Highway 305 are minutes away.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-3 px-5 md:grid-cols-3 md:px-8">
        <img
          src={asset("/images/poulsbo-front.jpg")}
          alt="Front Street storefronts in Poulsbo"
          className="aspect-[4/3] w-full rounded-xl object-cover md:col-span-2 md:aspect-[16/9]"
        />
        <img
          src={asset("/images/poulsbo-clock.jpg")}
          alt="City of Poulsbo street clock on Front Street"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <img
          src={asset("/images/poulsbo-marina.jpg")}
          alt="Liberty Bay marina"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <img
          src={asset("/images/poulsbo-shop.jpg")}
          alt="Historic shop on Front Street"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <img
          src={asset("/images/forest.jpg")}
          alt="Evergreen forest at the park edge"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <h2 className="font-display text-3xl text-forest">Drive times</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {DRIVE_TIMES.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <dt className="text-sm text-ink-soft">{row.label}</dt>
                <dd className="font-display text-xl text-forest">{row.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Naval Base Kitsap is a short drive. The Bainbridge and Kingston
            ferries put Seattle and Edmonds in reach without living in the
            commute.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl text-forest">On the land</h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
            <li>
              <span className="font-medium text-ink">Wilderness Park.</span> The
              site backs to more than ten acres of city park — second-growth
              firs, not a rear-lot fence line.
            </li>
            <li>
              <span className="font-medium text-ink">City utilities.</span>{" "}
              Poulsbo water and sewer at the street. No septic, no well.
            </li>
            <li>
              <span className="font-medium text-ink">Residential Low.</span>{" "}
              Pre-application with the City in October 2025. Pre-preliminary
              plat by Seabold Engineering, June 2026.
            </li>
            <li>
              <span className="font-medium text-ink">A bike lane already
              there.</span> Hostmark carries a bicycle lane and a short ride
              into downtown.
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="overflow-hidden rounded-xl border border-line">
          <iframe
            title="Map of 1272 NE Hostmark Street, Poulsbo"
            src={mapsSrc}
            className="h-80 w-full border-0 md:h-[28rem]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-16 md:px-8">
        <p className="font-display text-2xl text-forest">
          Walk the lots with us.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/inquiry">Inquire</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/lots">See the lots</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
