import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trees, MapPin, Compass } from "lucide-react";
import { DRIVE_TIMES, LOTS, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { LotMap } from "@/components/lot-map";
import { formatSqFt } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-forest-deep">
        <img
          src="/images/hero.jpg"
          alt="Northwest contemporary home among Douglas firs at dusk"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/35" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="text-xs uppercase tracking-[0.28em] text-limestone">
            Poulsbo, Washington · Phase 1
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-paper md:text-7xl">
            Eight lots. A private lane. The park at the back.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">
            Custom home sites for Northwest contemporary houses, one mile from
            Liberty Bay, on a quiet in-town street.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="invert">
              <Link to="/lots">
                View the lots
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-paper/40 text-paper hover:bg-paper/10 hover:text-paper"
            >
              <Link to="/inquiry">Request pricing</Link>
            </Button>
          </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            { k: "8", v: "lots in Phase 1" },
            { k: "3.06", v: "acres, in-town" },
            { k: "1 mi", v: "to Liberty Bay" },
            { k: "Park", v: "at the north line" },
          ].map((item) => (
            <div key={item.v} className="px-5 py-8 md:px-8">
              <p className="font-display text-3xl text-forest md:text-4xl">
                {item.k}
              </p>
              <p className="mt-1 text-sm text-muted">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            The offering
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest md:text-5xl">
            Phase 1 is eight custom lots on a new private lane.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Lots 1–8 sit west and east of a short lane off NE Hostmark Street.
            Homes shown are a Northwest contemporary vocabulary — cedar, metal,
            glass, and the forest kept — not a production floorplan. You bring
            the architect.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Phase 2, on the east side of the property with the existing house,
            is owned separately and is not part of this sale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/lots">Explore lots 1–8</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/location">Why Hostmark</Link>
            </Button>
          </div>
        </div>
        <img
          src="/images/lane.jpg"
          alt="Private lane of contemporary cedar houses in the firs"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      </section>

      <section className="bg-forest text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-limestone">
              Site plan
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight">
              Click a lot.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/80">
              The lane runs north from Hostmark. Wilderness Park holds the north
              line. Open space and retained trees sit between the lots and the
              street.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-limestone">
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-forest-deep ring-1 ring-paper/30" />
                Phase 1 · for sale
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-phase2" />
                Phase 2 · not offered
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-moss" />
                Open space
              </li>
            </ul>
          </div>
          <div className="md:col-span-8">
            <LotMap />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              The lots
            </p>
            <h2 className="mt-3 font-display text-4xl text-forest">
              From the lane to the park.
            </h2>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/lots">All eight</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOTS.map((lot) => (
            <Link
              key={lot.id}
              to="/lots/$lotId"
              params={{ lotId: String(lot.id) }}
              className="group overflow-hidden rounded-xl border border-line bg-paper"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={lot.homeImage}
                  alt={`${lot.homeName} concept on ${lot.name}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-4 py-4">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-medium text-forest">{lot.name}</p>
                  <p className="text-xs text-muted">{formatSqFt(lot.areaSqFt)} lot</p>
                </div>
                <p className="mt-1 text-sm text-ink-soft">{lot.homeName}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {formatSqFt(lot.homeSqFt)} concept home
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <img
            src="/images/interior.jpg"
            alt="Great room with a window wall into the firs"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Architecture
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest">
              Northwest contemporary, not a style package.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Deep overhangs. Cedar that weathers. Standing-seam roofs.
              Windows that hold the trees. The images are a brief — a way of
              building that belongs on this hillside — not a required plan.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Trees, label: "Retain the firs" },
                { icon: Compass, label: "Quiet lane living" },
                { icon: MapPin, label: "In-town Poulsbo" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-line bg-paper px-4 py-4"
                >
                  <item.icon className="size-4 text-sage" />
                  <p className="mt-2 text-sm text-ink-soft">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            Poulsbo
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest">
            A mile from Front Street. Ten minutes to Bangor.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Walk or bike to the marina, the bakeries, and Liberty Bay. Poulsbo
            Elementary and the North Kitsap schools are close. The property
            backs to the City’s Wilderness Park, with a partial Olympic
            Mountain view through the trees.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {DRIVE_TIMES.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <dt className="text-sm text-ink-soft">{row.label}</dt>
                <dd className="font-display text-lg text-forest">{row.time}</dd>
              </div>
            ))}
          </dl>
          <Button asChild className="mt-8">
            <Link to="/location">The neighborhood</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/poulsbo-marina.jpg"
            alt="Poulsbo marina on Liberty Bay"
            className="col-span-2 aspect-[16/9] w-full rounded-xl object-cover"
          />
          <img
            src="/images/poulsbo-clock.jpg"
            alt="Front Street clock in downtown Poulsbo"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <img
            src="/images/forest.jpg"
            alt="Second-growth firs at the park edge"
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep text-paper">
        <img
          src="/images/house-8.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-forest-deep/70" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs uppercase tracking-[0.22em] text-limestone">
            Inquire
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Pricing on request.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-paper/80">
            Offers considered on the land as-is, with entitlements, or
            vertical-ready. {SITE.contact.name} at {SITE.contact.company}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="invert">
              <Link to="/inquiry">Start a conversation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-paper/40 text-paper hover:bg-paper/10 hover:text-paper"
            >
              <a href={SITE.contact.phoneHref}>Call {SITE.contact.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
