import { IMG } from "./images";

export const SITE = {
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
{"slug":"commercial-ceiling-details-from-rambo-projects","title":"From Floating T-Bar to Wood Slats: Ceiling Details from Rambo Projects","description":"Explore Mason’s real project photos of floating T-bar, cassette baffles and wood slat ceilings across Vancouver and Burnaby.","excerpt":"Three ceiling approaches, photographed on real Rambo projects, show how edges, spacing and direction shape a commercial interior.","image":"/projects/mason-oct21/teck-cassette-baffles.jpg","imageAlt":"Custom cassette baffle ceiling at Teck Resources in Bentall 5, Vancouver. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.","category":"Specialty Ceilings","date":"2026-10-22","readMinutes":4},
{"slug":"metro-vancouver-tenant-improvements-walls-ceilings-planning","title":"Metro Vancouver Tenant Improvements: Make the Walls and Ceilings Part of the Plan Early","description":"Plan a commercial fit-out around existing partitions, drywall, ceiling systems, service coordination and the right permit route.","excerpt":"A landlord allowance starts the conversation. A clear framing, drywall and ceiling package helps turn it into work that can be priced and coordinated.","image":"/projects/rwc-archive/20211004_140229.jpg","imageAlt":"Tenant-improvement construction with exposed steel stud partitions. Photo: Rambo Wall & Ceiling Limited project archive; shown as an example of framing coordination, not a new project announcement.","category":"Tenant Improvements","date":"2026-10-21","readMinutes":4},
{"slug": "the-post-celebration-ceiling-panels", "title": "The Post: A Clean Linear Ceiling with Celebration Panels", "description": "See Rambo’s 2 × 8-foot Celebration panel installation at The Post and explore the details that shape a specialty ceiling.", "excerpt": "A ceiling can bring order to a busy interior without hiding every part of the building above it.", "image": "/projects/matt-oct14/the-post-celebration-ceiling-panels-1.webp", "imageAlt": "Celebration panels create a repeating ceiling pattern at The Post. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "Specialty Ceilings", "date": "2026-10-14", "readMinutes": 3},{"slug": "popeyes-vancouver-restaurant-steel-stud-framing", "title": "Popeyes Vancouver: Framing the Space Before the Restaurant Finish", "description": "A look at Rambo’s Popeyes Vancouver construction photo and the wall-layout questions to settle before a restaurant fit-out.", "excerpt": "The finished restaurant starts with the walls you cannot yet see.", "image": "/projects/matt-oct14/popeyes-vancouver-restaurant-steel-stud-framing-1.webp", "imageAlt": "Steel stud framing during the Popeyes Vancouver restaurant interior work. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "Steel Stud Framing", "date": "2026-10-14", "readMinutes": 3},{"slug": "downtown-thai-restaurant-wood-baffle-ceiling", "title": "Wood Baffles Bring Warmth to a Downtown Thai Restaurant", "description": "See Rambo’s wood-baffle ceiling installation and the practical choices behind a welcoming restaurant interior.", "excerpt": "A warm ceiling can change how a restaurant feels as soon as guests enter.", "image": "/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-1.webp", "imageAlt": "Wood baffles form a warm ceiling feature in the Thai restaurant. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "Specialty Ceilings", "date": "2026-10-14", "readMinutes": 3},{"slug": "langley-tenant-improvement-steel-stud-framing", "title": "Langley Tenant Improvement: Turn an Open Space into Useful Rooms", "description": "Real Rambo steel stud framing photos from a Langley TI, with practical advice for planning your next commercial layout.", "excerpt": "An open commercial unit becomes useful when the layout supports the people using it.", "image": "/projects/matt-oct14/langley-tenant-improvement-steel-stud-framing-1.webp", "imageAlt": "Steel stud partitions define the Langley tenant improvement layout. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "Steel Stud Framing", "date": "2026-10-14", "readMinutes": 3},{"slug": "commercial-tbar-ceiling-installation", "title": "T-Bar Ceilings: A Practical Finish for Your Commercial Space", "description": "Rambo’s T-bar installation photos show how a suspended ceiling takes shape and what to ask before pricing your own space.", "excerpt": "A suspended T-bar ceiling can give a commercial interior a consistent finish while allowing planned access above selected ceiling panels.", "image": "/projects/matt-oct14/commercial-tbar-ceiling-installation-1.webp", "imageAlt": "Suspended T-bar grid during a commercial ceiling installation. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "T-Bar Ceilings", "date": "2026-10-14", "readMinutes": 3},{"slug": "curved-arch-steel-stud-framing", "title": "An Arch Starts in the Framing: Planning a Curved Interior Feature", "description": "See Rambo’s arch-framing detail and learn what to confirm before adding a curved opening or ceiling feature.", "excerpt": "A curved opening gives an interior a softer, more distinctive shape.", "image": "/projects/matt-oct14/curved-arch-steel-stud-framing-1.webp", "imageAlt": "Curved framing detail before the finished interior surfaces. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "Steel Stud Framing", "date": "2026-10-14", "readMinutes": 3},{"slug": "dp-world-suspended-ceiling-baffles", "title": "DP World: Repeating Ceiling Baffles with a Light, Open Look", "description": "Explore Rambo’s DP World baffle installation photos and the design questions behind an open commercial ceiling.", "excerpt": "Repeating suspended elements can give a large interior a strong sense of rhythm.", "image": "/projects/matt-oct14/dp-world-suspended-ceiling-baffles-1.webp", "imageAlt": "Repeating suspended baffles at the DP World interior. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited.", "category": "Ceiling Baffles", "date": "2026-10-14", "readMinutes": 3},
{
  "slug": "club-champion-steel-stud-framing-drywall-surrey",
  "title": "Club Champion at Semiahmoo: Steel Stud Framing & Drywall",
  "description": "Rambo\u2019s steel stud framing and drywall work for the Club Champion tenant improvement in Surrey, with White Knight Construction as general contractor.",
  "excerpt": "See the walls taking shape at Club Champion in Surrey, and plan the framing and drywall for your own retail renovation.",
  "image": "/projects/club-champion/drywall-wide.webp",
  "imageAlt": "Drywall partitions during the Club Champion tenant improvement at Semiahmoo in Surrey. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
  "category": "Steel Stud Framing",
  "date": "2026-10-11",
  "readMinutes": 4
},
{
  "slug": "regus-mission-drywall-project",
  "title": "Regus in Mission: Drywall Work at 31999 Lougheed Highway",
  "description": "Photographs of Rambo\u2019s drywall work at the Regus project in Mission, showing interior partitions and window returns during construction.",
  "excerpt": "See Rambo’s Regus drywall work in Mission and learn what to discuss when planning your own office renovation.",
  "image": "/projects/mission-lougheed/drywall.webp",
  "imageAlt": "Drywall partitions and openings at the Regus project in Mission. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
  "category": "Commercial Drywall",
  "date": "2026-10-11",
  "readMinutes": 3
},
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
    image: IMG.sectorTenant,
    imageAlt:
      "Vancouver tenant improvement build-out in progress with steel stud demising walls and suspended ceiling grid.",
    category: "Tenant Improvements",
    date: "2026-06-16",
    readMinutes: 10,
  },
];
