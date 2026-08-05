// Self-hosted images. Files live in /public/images/ and are served from the
// site's own origin (/images/...), so nothing depends on any external site.
// Sourced from real steel-stud/drywall job photos as a mid-week placeholder;
// swap for the client's own verified photos once TALC intake is live.

export const IMG = {
  hero: "/images/hero.png",
  abstract: "/images/abstract.png",
  sectorTenant: "/images/sector-tenant.png",
  sectorWarehouse: "/images/sector-warehouse.png",
  serviceCeilings: "/images/service-ceilings.png",
  serviceDrywall: "/images/service-drywall.png",
  serviceFraming: "/images/service-framing.png",
  og: "/images/opengraph.jpg",
  favicon: "/favicon.svg",
  favicon192: "/favicon.svg",
  favicon512: "/favicon.svg",
} as const;
