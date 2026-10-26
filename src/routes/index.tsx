import { BrandProjects } from "../components/BrandProjects";
import { RamboMotionHero, RamboSceneIntro } from "../components/RamboMotionHero";
import stories from "../lib/project-stories.json";
import { pageCard } from "../lib/page-cards";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SITE, BLOG_POSTS } from "../lib/site";
import { IMG } from "../lib/images";
import {
  RECENT_PROJECT_PHOTOS,
  BEATTY_PROJECT_PHOTOS,
  FEATURED_PROJECT_PHOTOS,
  RWC_ARCHIVE_PHOTOS,
} from "../lib/projects";

const LATEST_POSTS = [...BLOG_POSTS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: pageCard("/").image },
      { property: "og:image:alt", content: pageCard("/").alt },
      { name: "twitter:image", content: pageCard("/").image },
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
      { property: "og:url", content: "https://www.rambowalls.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.rambowalls.com/" }],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Acoustic & T-Bar Ceilings",
    img: IMG.serviceCeilings,
    alt: "Completed suspended T-bar ceiling with white acoustic tiles and integrated lighting in a commercial room.",
    body: "Acoustic grids, mineral fiber tile, metal pan, concealed spline and wood-look ceilings for offices, retail, restaurants and residential basements.",
  },
  {
    title: "Drywall Boarding, Taping & Finishing",
    img: IMG.serviceDrywall,
    alt: "Commercial steel stud partitions with drywall installation in progress around existing columns.",
    body: "Level 1 through Level 5 finishing, fire-rated assemblies, shaft walls, and ready-for-paint custom home work that holds up under raking light.",
  },
  {
    title: "Steel Stud Framing",
    img: IMG.serviceFraming,
    alt: "Light-gauge steel stud walls and ceiling framing installed in a commercial interior.",
    body: "Heavy-gauge structural framing and interior partitions for condo renovations, tenant fit-outs and ground-up commercial.",
  },
];

const sectors = [
  {
    title: "Tenant Improvements",
    img: IMG.sectorTenant,
    alt: "Tenant improvement build-out in progress with steel stud interior partitions.",
  },
  {
    title: "Warehouses & Industrial",
    img: IMG.sectorWarehouse,
    alt: "Commercial interior with overhead steel stud ceiling framing and building services in progress.",
  },
  {
    title: "Specialty Ceilings & Interiors",
    img: IMG.hero,
    alt: "Curved linear specialty ceiling with integrated lighting completed by Rambo Walls and Ceilings.",
  },
];

const projectPreviewPhotos = [0,3,9,16,18,13].map(i=>({src:stories[i].hero,alt:stories[i].photos[0].alt,title:stories[i].title,project:stories[i].location,category:stories[i].category,projectUrl:`/project/${stories[i].slug}`,credit:"Photo: Mason McKenzie / Rambo"}));

function HomePage() {
  const [paused,setPaused]=useState(true);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync=()=>setPaused(media.matches);
    sync(); media.addEventListener('change',sync);
    return ()=>media.removeEventListener('change',sync);
  },[]);
  return <div className={`rambo-home-facelift ${paused?'motion-is-paused':''}`}>
    <RamboMotionHero paused={paused} onToggle={()=>setPaused(value=>!value)}/>
    <RamboSceneIntro onToggle={()=>setPaused(value=>!value)} paused={paused} eyebrow="THE CRAFT" title="Good interiors start with the details." description="Ceiling systems, drywall and steel framing: explore the trades behind the finished space." href="#services" linkText="See our services" poster="/projects/mason-oct21/bmo-lougheed-wood-ceiling.jpg"/>
    <Services/>
    <RamboSceneIntro onToggle={()=>setPaused(value=>!value)} paused={paused} eyebrow="THE PROOF" title="Built by Rambo. Seen in the details." description="Explore completed work and installation stages, with the project photographs and scope together." href="/projects" linkText="Open the project gallery" poster="/projects/mason-oct21/teck-cassette-baffles.jpg"/>
    <ProjectsPreview/>
    <BlogCarousel paused={paused}/>
    <RamboSceneIntro onToggle={()=>setPaused(value=>!value)} paused={paused} eyebrow="YOUR NEXT SPACE" title="From an empty shell to a considered interior." description="A clear scope for tenant improvements, commercial spaces and specialty ceiling work." href="#contact" linkText="Discuss your project" poster="/projects/mason-oct21/annacis-office-framing.jpg"/>
    <Sectors/>
    <Contact/>
    <BrandProjects paused={paused} onToggle={() => setPaused(value => !value)} />
  </div>;
}

function ProjectsPreview() {
  return (
    <section className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <header className="max-w-2xl">
            <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
              REAL PROJECTS
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">See the work</h2>
            <p className="mt-3 text-muted-foreground">
              Acoustic systems, suspended ceilings, specialty finishes and commercial framing from
              the Rambo Walls &amp; Ceilings archive.
            </p>
          </header>
          <Link
            to="/projects"
            className="rounded-md px-5 py-3 text-sm font-semibold text-brand-foreground"
            style={{ backgroundColor: "var(--brand)" }}
          >
            View the project gallery →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {projectPreviewPhotos.map((photo) => (
            <Link
              key={photo.src}
              to={photo.projectUrl ?? "/projects"}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card"
              aria-label={`View project: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                title={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-12">
                <p className="text-sm font-semibold text-white">{photo.title ?? photo.category}</p>
                {photo.project && <p className="mt-1 text-xs text-white/70">{photo.project}</p>}
                {photo.credit && <p className="mt-1 text-xs text-white/70">{photo.credit}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
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
                title={s.alt}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              {s.title.toLowerCase().includes("drywall") && <a href="/commercial-drywall-contractor-lower-mainland" className="mt-4 inline-block font-semibold text-brand underline">Commercial drywall · Lower Mainland →</a>}
              {s.title === "Acoustic & T-Bar Ceilings" && <a href="/acoustic-ceiling-contractors" className="mt-4 inline-block font-semibold text-brand underline">Acoustic ceiling contractors →</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogCarousel({paused}:{paused:boolean}) {
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
    if (paused) return;
    let current=0;
    const id=setInterval(()=>{
      current=(current+1)%LATEST_POSTS.length;
      scrollTo(current);
    },6000);
    return ()=>clearInterval(id);
  },[paused]);

  return (
    <section id="insights" className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
              FROM THE FIELD
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Latest insights</h2><p className="mt-2 text-sm text-muted-foreground">Latest article: {LATEST_POSTS[0]?.date}</p>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            View all posts →
          </Link>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {LATEST_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group min-w-[85%] snap-start overflow-hidden rounded-lg border border-border bg-card sm:min-w-[60%] md:min-w-[40%] lg:min-w-[32%]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  title={p.imageAlt}
                  alt={p.imageAlt}
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
                  <time className="mt-2 block" dateTime={p.date}>{new Date(p.date + "T12:00:00Z").toLocaleDateString("en-CA", {year:"numeric",month:"long",day:"numeric",timeZone:"America/Vancouver"})}</time>
                </p>
                <h3 className="mt-2 text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {LATEST_POSTS.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Show post ${i + 1}`}
              className="h-2 w-8 rounded-full transition-colors"
              style={{
                backgroundColor: i === index ? "var(--brand)" : "var(--border)",
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
        <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
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
              title={s.alt}
              alt={s.alt}
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
          <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
            START A PROJECT
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Let's price your scope.</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Send drawings, a site address, or just a quick note about what you're building. Mason
            responds personally within one business day.
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
