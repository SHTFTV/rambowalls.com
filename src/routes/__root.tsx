import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE } from "../lib/site";
import { IMG } from "../lib/images";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} | Commercial Contractor — Vancouver & Lower Mainland BC` },
      {
        name: "description",
        content:
          "Rambo Walls & Ceilings — commercial walls, suspended ceilings, drywall and steel stud framing across Vancouver and the Lower Mainland. Tenant improvements, custom homes, condo renovations.",
      },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#ff6a00" },
      { name: "geo.region", content: "CA-BC" },
      { name: "geo.placename", content: "Vancouver, British Columbia" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { property: "og:image", content: IMG.og },
      { property: "og:image:alt", content: "Rambo Walls & Ceilings — commercial walls, ceilings and steel stud framing contractor, Vancouver and the Lower Mainland." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.og },
      { name: "twitter:image:alt", content: "Rambo Walls & Ceilings — commercial contractor, Vancouver BC." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: IMG.favicon },
      { rel: "apple-touch-icon", href: IMG.favicon192 },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#business",
          name: SITE.name,
          description:
            "Commercial walls and ceilings contractor specializing in suspended ceilings, drywall, and steel stud framing across the Lower Mainland of British Columbia.",
          telephone: "+1-778-773-2790",
          email: SITE.email,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressRegion: "BC",
            addressCountry: "CA",
            addressLocality: "Vancouver",
          },
          areaServed: [
            "Vancouver", "Burnaby", "Surrey", "Richmond", "Coquitlam",
            "Langley", "Delta", "North Vancouver", "West Vancouver",
            "New Westminster", "Port Coquitlam", "Port Moody",
            "Maple Ridge", "Pitt Meadows", "White Rock", "Abbotsford",
          ].map((c) => ({ "@type": "City", name: c })),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-md text-brand-foreground"
            style={{ backgroundColor: "var(--brand)" }}
            aria-hidden
          >
            <span className="font-display text-lg leading-none">R</span>
          </span>
          <span className="font-display text-xl tracking-wide">
            RAMBO <span style={{ color: "var(--brand)" }}>WALLS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#services" className="hover:text-foreground">Services</a>
          <a href="/#sectors" className="hover:text-foreground">Sectors</a>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <a href="/#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href={SITE.phoneHref}
          className="hidden rounded-md px-4 py-2 text-sm font-semibold text-brand-foreground sm:inline-flex"
          style={{ backgroundColor: "var(--brand)" }}
        >
          {SITE.phone}
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl">
            RAMBO <span style={{ color: "var(--brand)" }}>WALLS</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Commercial walls, ceilings and steel stud framing across Vancouver
            and the Lower Mainland.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Suspended &amp; T-Bar Ceilings</li>
            <li>Drywall Boarding &amp; Taping</li>
            <li>Steel Stud Framing</li>
            <li>Tenant Improvements</li>
            <li>Custom Homes</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Areas Served</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            Vancouver, Burnaby, Surrey, Richmond, Coquitlam, Langley, Delta,
            North &amp; West Vancouver, New Westminster, Port Moody, Maple
            Ridge, White Rock, Abbotsford.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={SITE.phoneHref} className="hover:text-foreground">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="hover:text-foreground break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
