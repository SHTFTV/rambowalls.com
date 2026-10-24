import RamboContactCard from "../components/RamboContactCard";
import { pageCard } from "../lib/page-cards";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
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
      { property: "og:image", content: pageCard("/").image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      {
        property: "og:image:alt",
        content:
          "Rambo Wall & Ceiling Limited — branded card with real project photography.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: pageCard("/").image },
      {
        name: "twitter:image:alt",
        content: "Rambo Walls & Ceilings — commercial contractor, Vancouver BC.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "48x48", href: IMG.favicon },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/brand-icons/rambo-r-32.png" },
      { rel: "shortcut icon", href: "/favicon.ico?v=2" },
      { rel: "manifest", href: "/site.webmanifest?v=2" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/brand-icons/rambo-r-180.png" },
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
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.rambowalls.com/#website",
              url: "https://www.rambowalls.com/",
              name: SITE.name,
              publisher: { "@id": "https://www.rambowalls.com/#business" },
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://www.rambowalls.com/#business",
              name: SITE.name,
              url: "https://www.rambowalls.com/",
              image: IMG.og,
              logo: "https://www.rambowalls.com/brand-icons/rambo-r-512.png",
              description:
                "Commercial walls and ceilings contractor specializing in suspended ceilings, drywall, and steel stud framing across the Lower Mainland of British Columbia.",
              telephone: "+1-778-773-2790",
              sameAs: ["https://www.google.com/maps?cid=12643128656142868159"],
              email: SITE.email,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressRegion: "BC",
                addressCountry: "CA",
                addressLocality: "Vancouver",
              },
              areaServed: [
                "Vancouver",
                "Burnaby",
                "Surrey",
                "Richmond",
                "Coquitlam",
                "Langley",
                "Delta",
                "North Vancouver",
                "West Vancouver",
                "New Westminster",
                "Port Coquitlam",
                "Port Moody",
                "Maple Ridge",
                "Pitt Meadows",
                "White Rock",
                "Abbotsford",
              ].map((c) => ({ "@type": "City", name: c })),
            },
          ],
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
      <aside className="mt-24 bg-[#ff7900] text-[#10151c]" aria-label="Rambo's two triggers">
        <a href="/mission" data-testid="rambo-two-triggers-banner" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black sm:px-6">
          <strong className="font-display text-2xl tracking-wide">TWO TRIGGERS. ONE MISSION.</strong>
          <span className="text-sm font-semibold">Find out what triggers Rambo crews—and what makes us different <span aria-hidden="true">→</span></span>
        </a>
      </aside>
      <SiteFooter />
      <RamboContactCard />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/brand-motion/rambo-wordmark.webp" alt="Rambo Wall & Ceiling Limited" width="3712" height="1152" className="h-auto w-[180px] rounded-sm lg:w-[255px]" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#services" className="hover:text-foreground">
            Services
          </a>
          <Link to="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <a href="/#sectors" className="hover:text-foreground">
            Sectors
          </a>
          <Link to="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <a href="/#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <Link
          to="/projects"
          className="text-sm font-semibold text-muted-foreground hover:text-foreground md:hidden"
        >
          Projects
        </Link>
        <a
          href={SITE.phoneHref}
          className="hidden rounded-md px-4 py-2 text-sm font-semibold text-brand-foreground lg:inline-flex"
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
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl">
            RAMBO <span style={{ color: "var(--brand)" }}>WALLS</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Commercial walls, ceilings and steel stud framing across Vancouver and the Lower
            Mainland.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/projects" className="hover:text-foreground">
                Project Gallery
              </Link>
            </li>
            <li><a href="/acoustic-ceiling-contractors" className="hover:text-foreground">Acoustic ceiling contractors</a></li>
            <li>Drywall Boarding &amp; Taping</li>
            <li>Steel Stud Framing</li>
            <li>Tenant Improvements</li>
            <li>Custom Homes</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Areas Served</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            Vancouver, Burnaby, Surrey, Richmond, Coquitlam, Langley, Delta, North &amp; West
            Vancouver, New Westminster, Port Moody, Maple Ridge, White Rock, Abbotsford.
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
    <div data-iam-credit="true" style={{boxSizing:"border-box",width:"100%",gridColumn:"1 / -1",padding:"16px 24px",textAlign:"center",fontSize:"12px",lineHeight:1.5,color:"inherit"}}>Powered by <a href="https://industryarmymarketing.com/" style={{color:"inherit",textDecoration:"underline",textUnderlineOffset:"3px"}}>Industry Army Marketing</a></div></footer>
  );
}
