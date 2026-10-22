import { pageCard } from "../lib/page-cards";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "../lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { property: "og:image", content: pageCard("/blog").image },
      { name: "twitter:image", content: pageCard("/blog").image },
      { property: "og:image:alt", content: pageCard("/blog").alt },
      { title: "Field Notes — Rambo Walls & Ceilings Blog" },
      {
        name: "description",
        content:
          "Deep-dive guides from Rambo Walls & Ceilings on steel stud framing, drywall, T-bar ceilings and tenant improvements across Vancouver and the Lower Mainland.",
      },
      { property: "og:title", content: "Rambo Walls & Ceilings — Field Notes" },
      { property: "og:url", content: "https://www.rambowalls.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.rambowalls.com/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <p
        className="font-display text-sm tracking-[0.2em]"
        style={{ color: "var(--brand)" }}
      >
        FIELD NOTES
      </p>
      <h1 className="mt-2 text-5xl sm:text-6xl">From the jobsite.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Practical guides on the trades we live in: steel stud framing, drywall,
        T-bar ceilings and tenant improvements — written from a Vancouver and
        Lower Mainland field perspective.
      </p>

      <figure className="mt-8"><img src="/projects/mason-oct21/annacis-office-framing.jpg" width="1800" height="853" alt="Steel stud interior walls at an Annacis Island office tenant improvement by Rambo Wall & Ceiling Limited" className="max-h-[360px] w-full rounded-xl object-cover" /><figcaption className="mt-2 text-xs text-muted-foreground">Annacis Island office tenant improvement · Photo supplied by Mason McKenzie / Rambo Wall & Ceiling Limited.</figcaption></figure>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="aspect-[16/9] overflow-hidden">
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
              <h2 className="mt-2 text-2xl leading-snug">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
