import { BrandProjects } from "../components/BrandProjects";
import { RamboMotionHero, RamboSceneIntro } from "../components/RamboMotionHero";
import stories from "../lib/updated-project-stories";
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

const postTime = (date: string) => Date.parse(date.includes("T") ? date : date + "T12:00:00Z");
const LATEST_POSTS = [...BLOG_POSTS].sort((a,b)=>postTime(b.date)-postTime(a.date)).slice(0,4);

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
    <BlogCarousel/>
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

function BlogCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const indexRef = useRef(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(i, maxIndex));
    const card = track.children[next] as HTMLElement | undefined;
    if (!card) return;
    const left = card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    indexRef.current = next;
    setIndex(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.getBoundingClientRect().width + 20;
      const max = Math.max(0, Math.ceil((track.scrollWidth - track.clientWidth - 1) / step));
      setMaxIndex(max);
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      const current = atEnd ? max : Math.min(max, Math.round(track.scrollLeft / step));
      indexRef.current = current;
      setIndex(current);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    track.addEventListener("scroll", measure, { passive: true });
    measure();
    return () => { observer.disconnect(); track.removeEventListener("scroll", measure); };
  }, []);

  useEffect(() => {
    if (!playing || maxIndex === 0) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || media.matches || document.hidden) return;
      const bounds = track.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight || track.contains(document.activeElement)) return;
      scrollTo(indexRef.current >= maxIndex ? 0 : indexRef.current + 1);
    }, 6000);
    return () => window.clearInterval(id);
  }, [playing, maxIndex]);

  return (
    <section id="insights" aria-label="Latest blog posts, newest first" className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
              FROM THE FIELD
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Latest insights</h2><p className="mt-2 text-sm text-muted-foreground">Newest posts first · {new Date(LATEST_POSTS[0].date).toLocaleDateString("en-CA", {year:"numeric",month:"long",day:"numeric",timeZone:"America/Vancouver"})}</p>
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
          id="latest-blog-track"
          onPointerDown={() => setPlaying(false)}
          onFocusCapture={() => setPlaying(false)}
          style={{ position: "relative" }}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {LATEST_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group shrink-0 basis-[85%] snap-start overflow-hidden rounded-lg border border-border bg-card sm:basis-[60%] md:basis-[40%] lg:basis-[32%]"
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
                  <time className="mt-2 block" dateTime={p.date}>{new Date(p.date.includes("T") ? p.date : p.date + "T12:00:00Z").toLocaleDateString("en-CA", {year:"numeric",month:"long",day:"numeric",timeZone:"America/Vancouver"})}</time>
                </p>
                <h3 className="mt-2 text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3" aria-label="Blog carousel controls">
          <button type="button" onClick={() => { setPlaying(false); scrollTo(index - 1); }} disabled={index === 0} aria-controls="latest-blog-track" className="rounded-md border border-border px-4 py-2 text-sm disabled:opacity-40">← Previous</button>
          <button type="button" onClick={() => { setPlaying(false); scrollTo(index + 1); }} disabled={index >= maxIndex} aria-controls="latest-blog-track" className="rounded-md border border-border px-4 py-2 text-sm disabled:opacity-40">Next →</button>
          <button type="button" onClick={() => setPlaying(value => !value)} aria-pressed={playing} aria-controls="latest-blog-track" className="rounded-md border border-border px-4 py-2 text-sm">{playing ? "Pause posts" : "Play posts"}</button>
          <div className="flex gap-2">
            {Array.from({length: maxIndex + 1}, (_, i) => (
              <button key={i} type="button" onClick={() => { setPlaying(false); scrollTo(i); }} aria-label={i === 0 ? "Show newest posts" : `Show older posts, position ${i + 1}`} aria-current={i === index ? "true" : undefined} className="h-3 w-7 rounded-full" style={{backgroundColor: i === index ? "var(--brand)" : "var(--border)"}} />
            ))}
          </div>
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
