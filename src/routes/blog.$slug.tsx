import projectStories from "../lib/project-stories.json";
import { pageCard } from "../lib/page-cards";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SITE, type BlogPost } from "../lib/site";
import type { BlogContent } from "../lib/blog-content";
import { getBlogPost, getBlogContent, getRelatedPosts } from "../lib/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    const content = getBlogContent(params.slug);
    if (!post || !content) throw notFound();
    return { post, content };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Post not found" }] };
    const { post } = loaderData;
    const url = `https://www.rambowalls.com/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | Rambo Walls & Ceilings` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: pageCard(`/blog/${params.slug}`).image },
        { name: "twitter:image", content: pageCard(`/blog/${params.slug}`).image },
        { property: "og:image:alt", content: pageCard(`/blog/${params.slug}`).alt },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:site_name", content: "Rambo Walls & Ceilings" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image:alt", content: pageCard(`/blog/${params.slug}`).alt },
        { name: "article:section", content: post.category },
        { name: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: `https://www.rambowalls.com${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Organization", name: SITE.name },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              logo: { "@type": "ImageObject", url: "/favicon-512.svg" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: post.category,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: (loaderData.content.faq ?? []).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl">Post not found</h1>
      <p className="mt-4 text-muted-foreground">
        We couldn't find that post.{" "}
        <Link to="/blog" className="underline">Browse all posts</Link>.
      </p>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl">Something went wrong</h1>
      <p className="mt-4">
        <Link to="/blog" className="underline">Back to blog</Link>
      </p>
    </div>
  ),
});

function BlogPostPage() {
  const data = Route.useLoaderData() as { post: BlogPost; content: BlogContent };
  const { post, content } = data;
  const related = getRelatedPosts(post.slug);
  const projectRecord = projectStories.find(p=>p.earlierStory===`/blog/${post.slug}`);

  return (
    <article>
      {post.slug==="tbar-ceilings-acoustic-spray-insulation-coordination"?<header className="acoustic-story-hero"><div><p className="acoustic-story-label">RAMBO / ACOUSTIC CEILING COORDINATION</p><h1>{post.title}</h1><p>{post.description}</p><p className="acoustic-story-date">Rambo Walls &amp; Ceilings · <time dateTime={post.date}>October 23, 2026</time></p></div><figure><img src={post.image} alt={post.imageAlt}/><figcaption>{post.imageAlt}</figcaption></figure></header>:<header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${post.image})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.95) 100%)",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <p
            className="font-display text-sm tracking-[0.2em]"
            style={{ color: "var(--brand)" }}
          >
            {post.category.toUpperCase()} · {post.readMinutes} MIN READ
          </p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{SITE.name} · {post.date}</p>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {post.description}
          </p>
        </div>
      </header>}

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {post.slug!=="tbar-ceilings-acoustic-spray-insulation-coordination"&&<figure className="overflow-hidden rounded-lg border border-border">
          <img
            src={post.image}
            title={post.imageAlt} alt={post.imageAlt}
            className="h-full w-full object-cover"
          />
          <figcaption className="border-t border-border bg-card px-4 py-2 text-xs text-muted-foreground">
            {post.imageAlt}
          </figcaption>
        </figure>}

        {projectRecord && <aside className="mt-7 rounded-xl border border-border bg-card p-5"><h2 className="text-2xl">See this project together</h2><p className="mt-2 text-muted-foreground">Watch the silent photo collage, open the full images and explore the project record.</p><a className="mt-3 inline-block underline font-bold" href={`/project/${projectRecord.slug}#project-video`}>Open project video, photos &amp; story →</a></aside>}

        <div className="prose-content mt-10 space-y-10 text-base leading-relaxed text-foreground">
          <p className="text-lg text-muted-foreground">{content.intro}</p>{post.slug==="tbar-ceilings-acoustic-spray-insulation-coordination"&&<nav aria-label="Companion acoustic guides" className="grid gap-4 rounded-lg border border-border bg-card p-5"><a className="underline font-semibold" href="https://wesprayit.ca/guides/spray-insulation-tbar-ceilings-acoustic-performance">WeSprayIt / PSI: acoustic spray materials and performance ↗</a><a className="underline font-semibold" href="https://www.acustiq.ca/insights/spray-insulation-suspended-ceiling-acoustic-design">ACUSTIQ: specify the ceiling and the whole sound path ↗</a></nav>}

          {post.slug === "club-champion-steel-stud-framing-drywall-surrey" && <section aria-label="Club Champion project photographs" className="grid gap-6 sm:grid-cols-2">{[{src:"steel-stud-framing",alt:"Steel stud wall framing with backing and services before boarding."},{src:"drywall-interior",alt:"Drywall partitions and openings during the retail fit-out."}].map(photo => <figure key={photo.src}><img src={`/projects/club-champion/${photo.src}.webp`} alt={photo.alt} loading="lazy" className="w-full rounded-lg" /><figcaption className="mt-2 text-xs text-muted-foreground">{photo.alt} Photo: Mason McKenzie / Rambo Wall &amp; Ceiling Limited.</figcaption></figure>)}</section>}
          {post.slug === "regus-mission-drywall-project" && <section className="space-y-6">{[{src:"framing",alt:"Steel stud partitions before drywall at 31999 Lougheed Highway, Mission."},{src:"taping",alt:"Taping-stage walls at the same Mission address."}].map(photo => <figure key={photo.src}><img src={`/projects/mission-lougheed/${photo.src}.webp`} alt={photo.alt} loading="lazy" className="w-full rounded-lg" /><figcaption className="mt-2 text-xs text-muted-foreground">{photo.alt} Photo: Mason McKenzie / Rambo Wall &amp; Ceiling Limited.</figcaption></figure>)}</section>}
          {post.slug === "regus-mission-drywall-project" && <figure><img src="/projects/mission-lougheed/window-detail.webp" alt="Drywall window return at Regus in Mission." loading="lazy" className="w-full rounded-lg" /><figcaption className="mt-2 text-xs text-muted-foreground">Drywall window return during the Regus work in Mission. Photo: Mason McKenzie / Rambo Wall &amp; Ceiling Limited.</figcaption></figure>}
          {post.slug === "club-champion-steel-stud-framing-drywall-surrey" && <p>General contractor: <a href="https://members.edmca.com/member-directory/Details/white-knight-construction-ltd-1967881" className="underline">White Knight Construction Ltd.</a> · <a href="/projects" className="underline">View Rambo’s project gallery</a></p>}
          {content.gallery?.length ? <section aria-label="Project photographs" className="grid gap-6 sm:grid-cols-2">{content.gallery.map(photo => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-auto rounded-lg" /><figcaption className="mt-2 text-xs text-muted-foreground">{photo.caption}</figcaption></figure>)}</section> : null}
          {content.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-3xl sm:text-4xl">{s.heading}</h2>
              <div className="mt-4 space-y-4 text-[15px] text-muted-foreground">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2 border-l-2 border-border pl-5">
                    {s.list.map((li, i) => (
                      <li key={i} className="text-foreground">
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {content.sources?.length ? <section aria-label="Article sources"><h2 className="text-3xl">Sources</h2><ul className="mt-4 space-y-3">{content.sources.map(source => <li key={source.href}><a className="underline" href={source.href} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section> : null}
          <section
            className="rounded-lg border border-border bg-card p-6"
            aria-labelledby="faq-heading"
          >
            <h2 id="faq-heading" className="text-3xl">Frequently asked questions</h2>
            <dl className="mt-5 space-y-5">
              {content.faq.map((f) => (
                <div key={f.q}>
                  <dt className="text-lg font-semibold">{f.q}</dt>
                  <dd className="mt-1 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            className="rounded-lg p-6 text-brand-foreground"
            style={{ backgroundColor: "var(--brand)" }}
          >
            <h2 className="text-3xl text-brand-foreground">
              Have a project that fits this scope?
            </h2>
            <p className="mt-2 max-w-xl">
              Text us or send drawings — we quote walls, ceilings
              and framing across {SITE.region}.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="sms:+17787732790"
                className="rounded-md bg-background px-5 py-3 font-semibold text-foreground"
              >
                Text {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="rounded-md border border-brand-foreground/40 px-5 py-3 font-semibold"
              >
                Email {SITE.email}
              </a>
            </div>
          </section>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h2 className="text-3xl">Keep reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      title={r.imageAlt} alt={r.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--brand)" }}
                    >
                      {r.category}
                    </p>
                    <h3 className="mt-2 text-lg leading-snug">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}


