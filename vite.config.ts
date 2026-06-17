import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      { path: "/", prerender: { enabled: true, crawlLinks: true } },
      { path: "/blog", prerender: { enabled: true, crawlLinks: true } },
      { path: "/blog/steel-stud-framing-condo-renovations-vancouver", prerender: { enabled: true } },
      { path: "/blog/custom-homes-drywall-boarding-taping-finishing", prerender: { enabled: true } },
      { path: "/blog/tbar-ceilings-residential-commercial-vancouver", prerender: { enabled: true } },
      { path: "/blog/tenant-improvements-contractor-vancouver", prerender: { enabled: true } },
      { path: "/sitemap.xml", prerender: { enabled: true } },
    ],
  },
});
