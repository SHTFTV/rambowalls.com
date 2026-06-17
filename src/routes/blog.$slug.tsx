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
    const url = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | Rambo Walls & Ceilings` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
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
            image: post.image,
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

  return (
    <article>
      <header className="relative overflow-hidden">
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
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {post.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <figure className="overflow-hidden rounded-lg border border-border">
          <img
            src={post.image}
            title={post.imageAlt} alt={post.imageAlt}
            className="h-full w-full object-cover"
          />
          <figcaption className="border-t border-border bg-card px-4 py-2 text-xs text-muted-foreground">
            {post.imageAlt}
          </figcaption>
        </figure>

        <div className="prose-content mt-10 space-y-10 text-base leading-relaxed text-foreground">
          <p className="text-lg text-muted-foreground">{content.intro}</p>

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
              Call Mason directly or send drawings — we quote walls, ceilings
              and framing across {SITE.region}.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="rounded-md bg-background px-5 py-3 font-semibold text-foreground"
              >
                Call {SITE.phone}
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
