import { pageCard } from "../lib/page-cards";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CITIES, getCity } from "../lib/cities";
import { PROJECT_PHOTOS, type ProjectPhoto } from "../lib/projects";
import { SITE } from "../lib/site";

const BASE_URL = "https://www.rambowalls.com";

const photo = (src: string) => {
  const match = PROJECT_PHOTOS.find((item) => item.src === src);
  if (!match) throw new Error(`Missing city-page project photo: ${src}`);
  return match;
};

const heroPhoto = photo("/projects/rwc-archive/20231220_133619.jpg");

const services = [
  {
    number: "01",
    title: "Suspended & T-Bar Ceilings",
    description:
      "Commercial ceiling grid, acoustic tile, borders and access coordinated around lighting, diffusers, sprinklers and the work above the ceiling plane.",
    image: photo("/projects/rwc-archive/20211005_130715.jpg"),
    fieldGuide: "/blog/tbar-ceilings-residential-commercial-vancouver",
    knowledgeUrl: "https://www.acustiq.ca/systems/suspended-tbar",
  },
  {
    number: "02",
    title: "Acoustic & Feature Ceilings",
    description:
      "Clouds, baffles, acoustic panels, linear systems and specialty ceiling forms installed from coordinated layouts and verified product requirements.",
    image: photo("/projects/rwc-featured/ilm-disney-acoustic-baffles.jpg"),
    knowledgeUrl: "https://www.acustiq.ca/systems/acoustic-baffles",
  },
  {
    number: "03",
    title: "Steel Stud Framing & Drywall",
    description:
      "Interior partitions, bulkheads, backing, boarding and finishing for commercial interiors, renovations, custom homes and multi-family projects.",
    image: photo("/projects/rwc-archive/img_6771.jpg"),
    fieldGuide: "/blog/steel-stud-framing-condo-renovations-vancouver",
  },
  {
    number: "04",
    title: "Tenant Improvements",
    description:
      "A coordinated wall-and-ceiling scope for offices, clinics, retail, restaurants and occupied-building renovations with schedule and adjacent trades in view.",
    image: photo("/projects/rwc-archive/20221007_162247.jpg"),
    fieldGuide: "/blog/tenant-improvements-contractor-vancouver",
  },
] as const;

const cityGallery: ProjectPhoto[] = [
  photo("/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg"),
  photo("/projects/rwc-featured/southpoint-wood-slat-acoustic-ceiling.jpg"),
  photo("/projects/rwc-archive/20211005_130727.jpg"),
  photo("/projects/rwc-archive/20190805_154522.jpg"),
  photo("/projects/837-beatty/837-beatty-tectum-wall-finished.jpg"),
  photo("/projects/rwc-archive/20220803_121946.jpg"),
  photo("/projects/rwc-archive/20231108_094347.jpg"),
  photo("/projects/matt-oct14/popeyes-vancouver-restaurant-steel-stud-framing-1.webp"),
];

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    return city;
  },
  head: ({ loaderData: city }) => {
    if (!city) return {};
    const pageUrl = `${BASE_URL}/locations/${city.slug}`;
    const title = `Drywall, Steel Stud & Ceiling Contractor ${city.name}, BC | Rambo Walls`;
    const description = `${city.intro} See real Rambo Walls & Ceilings project work and request pricing for a ${city.name} project.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "website" },
        { property: "og:image", content: pageCard(`/locations/${city.slug}`).image },
        { property: "og:image:alt", content: pageCard(`/locations/${city.slug}`).alt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: pageCard(`/locations/${city.slug}`).image },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
    };
  },
  component: CityPage,
});

function PhotoCaption({ item }: { item: ProjectPhoto }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-4 pb-4 pt-14">
      <p className="text-sm font-semibold text-white">{item.title ?? item.category}</p>
      {item.project && <p className="mt-1 text-xs text-white/70">{item.project}</p>}
    </div>
  );
}

function CityPage() {
  const city = Route.useLoaderData();
  const nearby = CITIES.filter((item) => item.slug !== city.slug).slice(0, 10);
  const pageUrl = `${BASE_URL}/locations/${city.slug}`;
  const acustiqCityUrl = `https://www.acustiq.ca/installers/${city.slug}?utm_source=rambowalls&utm_medium=referral&utm_campaign=${city.slug}-ceiling-contractor`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: `Wall & Ceiling Contractor in ${city.name}, BC`,
        description: city.intro,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${pageUrl}#service` },
        primaryImageOfPage: { "@id": `${BASE_URL}${heroPhoto.src}#image` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Drywall, Steel Stud and Ceiling Contractor — ${city.name}, BC`,
        url: pageUrl,
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: city.name },
        serviceType: [
          "Suspended T-bar ceilings",
          "Acoustic and feature ceilings",
          "Steel stud framing",
          "Drywall boarding and finishing",
          "Tenant improvements",
        ],
        image: cityGallery.map((item) => `${BASE_URL}${item.src}`),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: city.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <span aria-hidden className="px-2">
                /
              </span>
              <span>{city.name}</span>
            </nav>
            <p
              className="mt-8 font-display text-sm tracking-[0.2em]"
              style={{ color: "var(--brand)" }}
            >
              RAMBO WALLS &amp; CEILINGS · {city.name.toUpperCase()}, BC
            </p>
            <h1 className="mt-3 max-w-4xl text-5xl leading-[.95] sm:text-7xl">
              Wall &amp; ceiling contractor in {city.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{city.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="rounded-md px-6 py-3 font-semibold text-brand-foreground"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Request {city.name} pricing
              </a>
              <a
                href={SITE.phoneHref}
                className="rounded-md border border-border px-6 py-3 font-semibold hover:bg-muted"
              >
                Call {SITE.phone}
              </a>
              <Link
                to="/projects"
                className="rounded-md border border-border px-6 py-3 font-semibold hover:bg-muted"
              >
                View all project photos
              </Link>
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                title={heroPhoto.alt}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs leading-5 text-muted-foreground">
              Real Rambo Walls &amp; Ceilings project work. Archive photography demonstrates field
              capability; a city is named only when the project location is verified.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="max-w-3xl">
          <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
            WALLS, CEILINGS &amp; INTERIORS
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl">
            One field team across the full interior scope.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Rambo coordinates framing, boarding, finishing and ceiling installation as connected
            work—not isolated trade packages. Explore the service, see a real project example, then
            use the field or ACUSTIQ guide for deeper detail.
          </p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href="/commercial-drywall-contractor-lower-mainland" className="mb-5 inline-block font-semibold text-brand underline">Commercial drywall contractor · Lower Mainland →</a>
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  title={service.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p
                  className="font-display text-sm tracking-[0.18em]"
                  style={{ color: "var(--brand)" }}
                >
                  {service.number}
                </p>
                <h3 className="mt-1 text-3xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {"fieldGuide" in service && service.fieldGuide && (
                    <Link to={service.fieldGuide}>Read the Rambo field guide →</Link>
                  )}
                  {"knowledgeUrl" in service && service.knowledgeUrl && (
                    <a href={service.knowledgeUrl}>ACUSTIQ system guide →</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <header className="max-w-3xl">
              <p
                className="font-display text-sm tracking-[0.2em]"
                style={{ color: "var(--brand)" }}
              >
                REAL RAMBO PROJECT WORK
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl">Ceilings, acoustic systems and framing.</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A selection from the verified Rambo gallery. No stock photography and no invented
                project addresses.
              </p>
            </header>
            <Link
              to="/projects"
              className="rounded-md px-5 py-3 text-sm font-semibold text-brand-foreground"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Open the full {PROJECT_PHOTOS.length}-photo gallery →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {cityGallery.map((item) => (
              <Link
                key={item.src}
                to="/projects"
                className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-card"
                aria-label={`Open project gallery: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  title={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <PhotoCaption item={item} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_.9fr]">
        <div>
          <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
            WORKING IN {city.name.toUpperCase()}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl">
            Plan the field conditions before the finish.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{city.local}</p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Scope can include layout, light-gauge steel stud framing, drywall boarding and
            finishing, suspended grid, acoustic panels, bulkheads, access conditions, and
            coordination around lighting, HVAC and fire-protection services.
          </p>
        </div>
        <aside className="rounded-xl border border-border bg-card p-7 sm:p-8">
          <h3 className="text-3xl">Common {city.name} project types</h3>
          <ul className="mt-5 space-y-3">
            {city.projectTypes.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <span aria-hidden style={{ color: "var(--brand)" }}>
                  ●
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
              SYSTEM KNOWLEDGE + FIELD INSTALLATION
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">
              Research the ceiling. Then price the installation.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ACUSTIQ carries the deeper ceiling-system education. Rambo Walls &amp; Ceilings
              carries the contractor and field-installation path for suitable Lower Mainland
              projects.
            </p>
            <a
              href={acustiqCityUrl}
              className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-semibold text-brand-foreground"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Explore ACUSTIQ for {city.name} →
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.acustiq.ca/systems/suspended-tbar"
              className="rounded-lg border border-border bg-card p-5 hover:bg-muted"
            >
              <strong>Suspended T-Bar Ceilings</strong>
              <p className="mt-2 text-sm text-muted-foreground">
                Grid, panels, borders, access and service coordination.
              </p>
            </a>
            <a
              href="https://www.acustiq.ca/systems/acoustic-clouds"
              className="rounded-lg border border-border bg-card p-5 hover:bg-muted"
            >
              <strong>Cloud Ceilings</strong>
              <p className="mt-2 text-sm text-muted-foreground">
                Dropped ceiling islands, acoustic clouds and lighting integration.
              </p>
            </a>
            <a
              href="https://www.acustiq.ca/systems/acoustic-baffles"
              className="rounded-lg border border-border bg-card p-5 hover:bg-muted"
            >
              <strong>Acoustic Baffles</strong>
              <p className="mt-2 text-sm text-muted-foreground">
                Vertical absorptive elements for open-plenum spaces.
              </p>
            </a>
            <a
              href="https://www.acustiq.ca/systems/acoustic-panels"
              className="rounded-lg border border-border bg-card p-5 hover:bg-muted"
            >
              <strong>Acoustic Panels</strong>
              <p className="mt-2 text-sm text-muted-foreground">
                Wall and ceiling panels, layouts, edges and mounting.
              </p>
            </a>
            <a
              href="https://www.acustiq.ca/systems/linear-wood"
              className="rounded-lg border border-border bg-card p-5 hover:bg-muted"
            >
              <strong>Linear Wood Ceilings</strong>
              <p className="mt-2 text-sm text-muted-foreground">
                Slats, carriers, acoustic backing and service access.
              </p>
            </a>
            <a
              href="https://www.acustiq.ca/systems/specialty"
              className="rounded-lg border border-border bg-card p-5 hover:bg-muted"
            >
              <strong>Specialty Ceilings</strong>
              <p className="mt-2 text-sm text-muted-foreground">
                Curves, islands, canopies and custom assemblies.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
          LOWER MAINLAND SERVICE AREAS
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Nearby wall and ceiling contractor pages.</h2>
        <div className="mt-7 flex flex-wrap gap-3">
          {nearby.map((item) => (
            <Link
              key={item.slug}
              to="/locations/$city"
              params={{ city: item.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              {item.name} →
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
        <div
          className="rounded-xl p-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10"
          style={{ backgroundColor: "var(--brand)", color: "var(--brand-foreground)" }}
        >
          <div>
            <p className="font-display text-sm tracking-[0.2em]">
              DRAWINGS, DIMENSIONS OR A PROJECT SCOPE
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Pricing a {city.name} project?</h2>
            <p className="mt-3 max-w-2xl">
              Send the wall and ceiling requirements for review, or call Mason to discuss the field
              conditions and schedule.
            </p>
          </div>
          <div className="mt-6 flex shrink-0 flex-wrap gap-3 sm:mt-0">
            <a
              href="/#contact"
              className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Request pricing →
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-md border border-black/30 px-5 py-3 text-sm font-semibold"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
