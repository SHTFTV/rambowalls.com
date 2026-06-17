import { IMG } from "./images";
  name: "Rambo Walls & Ceilings",
  phone: "778-773-2790",
  phoneHref: "tel:+17787732790",
  email: "rambowallceiling@gmail.com",
  emailHref: "mailto:rambowallceiling@gmail.com",
  region: "Vancouver & the Lower Mainland, BC",
  tagline: "Commercial walls, ceilings & framing — built right the first time.",
} as const;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  readMinutes: number;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "steel-stud-framing-condo-renovations-vancouver",
    title: "Steel Stud Framing for Residential Condo Renovations & Drywall in Vancouver",
    description:
      "Why steel stud framing has become the standard for Vancouver condo renovations — load paths, acoustics, fire ratings, and how Rambo Walls delivers a flawless drywall finish on top.",
    excerpt:
      "Steel stud framing isn't just for towers and tenant fit-outs anymore. For Vancouver condo renovations, it's the cleanest, fastest, code-friendly way to reshape a suite.",
    image: IMG.serviceFraming,
    imageAlt:
      "Light-gauge steel stud framing installed in a Vancouver high-rise condo renovation, ready for drywall.",
    category: "Steel Stud Framing",
    date: "2026-06-10",
    readMinutes: 9,
  },
  {
    slug: "custom-homes-drywall-boarding-taping-finishing",
    title: "Custom Homes Drywall: Boarding, Taping & Level 5 Finishing in the Lower Mainland",
    description:
      "A field guide to drywall on custom homes — boarding strategy, taping, mudding, and Level 5 finishing that holds up under raking light and designer paint.",
    excerpt:
      "On a custom home the drywall is the canvas every other trade gets judged against. Here's how Rambo Walls boards, tapes, and finishes to Level 5 standard.",
    image: IMG.serviceDrywall,
    imageAlt:
      "Custom home interior with smooth Level 5 drywall finish ready for paint, photographed in raking natural light.",
    category: "Custom Homes Drywall",
    date: "2026-06-12",
    readMinutes: 10,
  },
  {
    slug: "tbar-ceilings-residential-commercial-vancouver",
    title: "T-Bar Ceilings for Residential & Commercial Projects in Vancouver and the Lower Mainland",
    description:
      "T-bar suspended ceilings explained — grid systems, tile choices, acoustics, lighting integration, and where they win for residential basements, offices, retail and restaurants.",
    excerpt:
      "T-bar ceilings hide mechanical, tame acoustics and pull a room together fast. Here's how to spec and install them right across Vancouver and the Lower Mainland.",
    image: IMG.serviceCeilings,
    imageAlt:
      "Suspended T-bar ceiling grid with acoustic tiles and recessed lighting in a commercial Vancouver office.",
    category: "T-Bar Ceilings",
    date: "2026-06-14",
    readMinutes: 9,
  },
  {
    slug: "tenant-improvements-contractor-vancouver",
    title: "Tenant Improvements Contractor in Vancouver: Walls, Ceilings & Framing Done on Schedule",
    description:
      "What a tenant improvements contractor actually does in Vancouver — permits, base-building coordination, demising walls, ceilings, and turnover that keeps the landlord happy.",
    excerpt:
      "A Vancouver tenant improvement lives or dies on schedule and coordination. Here's how Rambo Walls runs the walls, ceilings, and framing scope on a TI.",
    image: "/images/sector-tenant.png",
    imageAlt:
      "Vancouver tenant improvement build-out in progress with steel stud demising walls and suspended ceiling grid.",
    category: "Tenant Improvements",
    date: "2026-06-16",
    readMinutes: 10,
  },
];
