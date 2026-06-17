import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SITE, BLOG_POSTS } from "../lib/site";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rambo Walls & Ceilings | Commercial Contractor — Vancouver & Lower Mainland" },
      {
        name: "description",
        content:
          "Commercial walls, suspended ceilings, drywall and steel stud framing across Vancouver and the Lower Mainland. Tenant improvements, custom homes, condo renovations. Call Mason at 778-773-2790.",
      },
      { property: "og:title", content: "Rambo Walls & Ceilings — Commercial Contractor BC" },
      {
        property: "og:description",
        content:
          "Walls, ceilings, drywall and steel stud framing for commercial, custom homes and tenant improvements in Vancouver and the Lower Mainland.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Suspended & T-Bar Ceilings",
    img: IMG.serviceCeilings,
    alt: "Suspended T-bar ceiling grid with white acoustic tiles and recessed LED lighting installed in a Vancouver commercial office.",
    body: "Acoustic grids, mineral fiber tile, metal pan, concealed spline and wood-look ceilings for offices, retail, restaurants and residential basements.",
  },
  {
    title: "Drywall Boarding, Taping & Finishing",
    img: IMG.serviceDrywall,
    alt: "Smooth Level 5 drywall finish on a custom home interior wall in the Lower Mainland, ready for paint under raking natural light.",
    body: "Level 1 through Level 5 finishing, fire-rated assemblies, shaft walls, and ready-for-paint custom home work that holds up under raking light.",
  },
  {
    title: "Steel Stud Framing",
    img: IMG.serviceFraming,
    alt: "Light-gauge galvanized steel stud framing installed at 16 inches on centre inside a Vancouver high-rise condo renovation.",
    body: "Heavy-gauge structural framing and interior partitions for condo renovations, tenant fit-outs and ground-up commercial.",
  },
];

const sectors = [
  {
    title: "Tenant Improvements",
    img: IMG.sectorTenant,
    alt: "Vancouver tenant improvement build-out in progress with steel stud demising walls and a suspended T-bar ceiling grid.",
  },
  {
    title: "Warehouses & Industrial",
    img: IMG.sectorWarehouse,
    alt: "Industrial warehouse interior with suspended ceiling and steel stud demising wall installed by Rambo Walls in the Lower Mainland.",
  },
  {
    title: "Custom Homes & Condos",
    img: IMG.hero,
    alt: "Custom home interior under construction with steel stud framing and drywall in progress, Vancouver BC.",
  },
];


function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <BlogCarousel />
      <Sectors />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${IMG.hero})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.95) 90%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <p
          className="font-display tracking-[0.2em] text-sm"
          style={{ color: "var(--brand)" }}
        >
          VANCOUVER · LOWER MAINLAND · BC
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
          WALLS, CEILINGS & FRAMING <br />
          <span style={{ color: "var(--brand)" }}>BUILT RIGHT THE FIRST TIME.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Commercial contractor specializing in suspended ceilings, drywall and
          steel stud framing. Tenant improvements, condo renovations and custom
          homes across Vancouver and the Lower Mainland.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={SITE.phoneHref}
            className="rounded-md px-6 py-3 text-base font-semibold text-brand-foreground"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Call {SITE.phone}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 text-base font-semibold hover:bg-muted"
          >
            Request a quote
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p
          className="font-display text-sm tracking-[0.2em]"
          style={{ color: "var(--brand)" }}
        >
          WHAT WE DO
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Three trades. One crew. Zero excuses.</h2>
      </header>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                title={s.alt} alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.children[i] as HTMLElement | undefined;
    if (card) t.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    setIndex(i);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % BLOG_POSTS.length;
        scrollTo(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="insights"
      className="border-y border-border bg-surface py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p
              className="font-display text-sm tracking-[0.2em]"
              style={{ color: "var(--brand)" }}
            >
              FROM THE FIELD
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Latest insights</h2>
          </div>
          <Link
            to="/blog"
            className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground sm:inline"
          >
            View all posts →
          </Link>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group min-w-[85%] snap-start overflow-hidden rounded-lg border border-border bg-card sm:min-w-[60%] md:min-w-[40%] lg:min-w-[32%]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  title={p.imageAlt} alt={p.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--brand)" }}
                >
                  {p.category} · {p.readMinutes} min read
                </p>
                <h3 className="mt-2 text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {BLOG_POSTS.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Show post ${i + 1}`}
              className="h-2 w-8 rounded-full transition-colors"
              style={{
                backgroundColor:
                  i === index ? "var(--brand)" : "var(--border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectors" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p
          className="font-display text-sm tracking-[0.2em]"
          style={{ color: "var(--brand)" }}
        >
          WHERE WE WORK
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Sectors we serve</h2>
      </header>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {sectors.map((s) => (
          <div
            key={s.title}
            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border"
          >
            <img
              src={s.img}
              title={s.alt} alt={s.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,0.95) 100%)",
              }}
            />
            <h3 className="absolute bottom-5 left-5 right-5 text-2xl">{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <p
            className="font-display text-sm tracking-[0.2em]"
            style={{ color: "var(--brand)" }}
          >
            START A PROJECT
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Let's price your scope.</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Send drawings, a site address, or just a quick note about what
            you're building. Mason responds personally within one business day.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <a
                  href={SITE.phoneHref}
                  className="text-2xl font-semibold"
                  style={{ color: "var(--brand)" }}
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href={SITE.emailHref} className="text-lg hover:underline">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Service area</dt>
              <dd>Vancouver &amp; the Lower Mainland — West Van to Abbotsford.</dd>
            </div>
          </dl>
        </div>
        <form
          action={SITE.emailHref}
          method="post"
          encType="text/plain"
          className="rounded-lg border border-border bg-card p-6"
        >
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span className="text-muted-foreground">Name</span>
              <input
                name="name"
                required
                className="rounded-md border border-border bg-background px-3 py-2"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-muted-foreground">Email or phone</span>
              <input
                name="contact"
                required
                className="rounded-md border border-border bg-background px-3 py-2"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-muted-foreground">Project details</span>
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-md border border-border bg-background px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-md px-5 py-3 font-semibold text-brand-foreground"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Send to Mason
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
