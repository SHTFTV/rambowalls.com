import batch3 from './october-26-batch3-projects.json';
export const PROJECT_CATEGORIES = [
  "Acoustic panels",
  "Suspended & T-bar ceilings",
  "Linear & specialty ceilings",
  "Steel stud framing & interiors",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type ProjectPhoto = {
  src: string;
  alt: string;
  category: ProjectCategory;
  title?: string;
  project?: string;
  location?: string;
  date?: string;
  projectUrl?: string;
  credit?: string;
};

const archive = (
  filename: string,
  alt: string,
  category: ProjectCategory,
  date?: string,
  title?: string,
): ProjectPhoto => ({
  src: `/projects/rwc-archive/${filename}`,
  alt,
  category,
  date,
  title,
});

export const FEATURED_PROJECT_PHOTOS: ProjectPhoto[] = [
  {
    src: "/projects/rwc-featured/ilm-disney-acoustic-baffles.jpg",
    alt: "Suspended acoustic ceiling baffles installed for an ILM and Disney commercial interior project.",
    category: "Acoustic panels",
    title: "Suspended acoustic baffles",
    project: "ILM / Disney",
  },
  {
    src: "/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg",
    alt: "Wide view of suspended acoustic ceiling clouds installed for a Microsoft commercial interior.",
    category: "Acoustic panels",
    title: "Suspended acoustic clouds",
    project: "Microsoft",
  },
  {
    src: "/projects/rwc-featured/microsoft-acoustic-clouds-vertical.jpg",
    alt: "Vertical view of suspended acoustic clouds and ceiling services in a Microsoft interior.",
    category: "Acoustic panels",
    title: "Acoustic cloud installation",
    project: "Microsoft",
  },
  {
    src: "/projects/rwc-featured/microsoft-acoustic-clouds-detail.jpg",
    alt: "Close detail of suspended acoustic cloud panels installed for Microsoft.",
    category: "Acoustic panels",
    title: "Acoustic cloud detail",
    project: "Microsoft",
  },
  {
    src: "/projects/rwc-featured/southpoint-wood-slat-acoustic-ceiling.jpg",
    alt: "Wood-slat acoustic ceiling installed at Southpointe Academy.",
    category: "Linear & specialty ceilings",
    title: "Wood-slat acoustic ceiling",
    project: "Southpointe Academy",
  },
  {
    src: "/projects/rwc-featured/suspended-wood-slat-ceiling.jpg",
    alt: "Suspended wood-slat feature ceiling installed in a commercial interior.",
    category: "Linear & specialty ceilings",
    title: "Suspended wood-slat ceiling",
  },
];

export const BEATTY_PROJECT_PHOTOS: ProjectPhoto[] = [
  [
    "837-beatty-tectum-panels-material.jpg",
    "Tectum acoustic wall panels staged for installation at 837 Beatty Street.",
  ],
  [
    "837-beatty-tectum-panel-layout.jpg",
    "Tectum acoustic panels laid out before wall installation at 837 Beatty Street.",
  ],
  [
    "837-beatty-beveled-tectum-panels.jpg",
    "Bevelled Tectum acoustic wall panels prepared for the 837 Beatty Street installation.",
  ],
  [
    "837-beatty-acoustic-wall-installation.jpg",
    "Tectum acoustic wall-panel installation in progress at 837 Beatty Street in Vancouver.",
  ],
  [
    "837-beatty-acoustic-panel-detail.jpg",
    "Close detail of aligned Tectum acoustic wall panels at 837 Beatty Street.",
  ],
  [
    "837-beatty-tectum-wall-progress.jpg",
    "Tectum acoustic feature wall installation progressing through the 837 Beatty Street corridor.",
  ],
  [
    "837-beatty-tectum-wall-finished.jpg",
    "Completed Tectum acoustic wall-panel installation at 837 Beatty Street in Vancouver.",
  ],
].map(([filename, alt]) => ({
  src: `/projects/837-beatty/${filename}`,
  alt,
  category: "Acoustic panels" as const,
  title: "Tectum acoustic wall panels",
  project: "837 Beatty Street",
  location: "Vancouver, BC",
  date: "2026",
}));

export const RWC_ARCHIVE_PHOTOS: ProjectPhoto[] = [
  archive(
    "20160817_235638.jpg",
    "Completed commercial reception area with acoustic ceiling panels and integrated lighting.",
    "Acoustic panels",
    "2016",
  ),
  archive(
    "20160817_235654.jpg",
    "Hatch reception area showing suspended acoustic ceiling panels above the front desk.",
    "Acoustic panels",
    "2016",
    "Hatch acoustic ceiling",
  ),
  archive(
    "20190805_154522.jpg",
    "Curved suspended ceiling feature with acoustic panels in a completed commercial interior.",
    "Linear & specialty ceilings",
    "2019",
  ),
  archive(
    "20190805_154545.jpg",
    "Completed curved specialty ceiling and acoustic panel installation.",
    "Linear & specialty ceilings",
    "2019",
  ),
  archive(
    "20210809_133608.jpg",
    "Finished commercial room with a suspended linear baffle ceiling and integrated lighting.",
    "Linear & specialty ceilings",
    "2021",
  ),
  archive(
    "20210825_085832.jpg",
    "Commercial ceiling framing and curved bulkhead work in progress.",
    "Steel stud framing & interiors",
    "2021",
  ),
  archive(
    "20211004_140229.jpg",
    "Steel stud wall and ceiling framing for a commercial interior build-out.",
    "Steel stud framing & interiors",
    "2021",
  ),
  archive(
    "20211004_140238.jpg",
    "Commercial interior framing beneath exposed building services.",
    "Steel stud framing & interiors",
    "2021",
  ),
  archive(
    "20211004_140254.jpg",
    "Steel stud partitions and ceiling backing during a commercial renovation.",
    "Steel stud framing & interiors",
    "2021",
  ),
  archive(
    "20211005_130649.jpg",
    "Completed suspended T-bar ceiling around an architectural column.",
    "Suspended & T-bar ceilings",
    "2021",
  ),
  archive(
    "20211005_130715.jpg",
    "Commercial meeting room with completed acoustic ceiling tile and T-bar grid.",
    "Suspended & T-bar ceilings",
    "2021",
  ),
  archive(
    "20211005_130727.jpg",
    "Finished suspended acoustic tile ceiling in a bright commercial room.",
    "Suspended & T-bar ceilings",
    "2021",
  ),
  archive(
    "20211009_134839.jpg",
    "Steel stud partitions and interior framing in progress on a commercial floor.",
    "Steel stud framing & interiors",
    "2021",
  ),
  archive(
    "20220803_121928.jpg",
    "Linear metal ceiling slats installed across a commercial interior.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220803_121946.jpg",
    "Curved linear ceiling feature following a circular opening.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220803_122001.jpg",
    "Linear metal ceiling installation around a curved architectural feature.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220812_140127.jpg",
    "Suspended linear ceiling system installed beneath exposed mechanical services.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220812_140252.jpg",
    "Linear ceiling slats and integrated lighting in a commercial project.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220823_124638.jpg",
    "Curved ceiling framing and linear feature ceiling installation in progress.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220901_123214.jpg",
    "Tall curved architectural ceiling feature viewed from below.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20220907_095928.jpg",
    "Completed circular ceiling detail with integrated downlights.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20221007_162247.jpg",
    "Commercial tenant improvement with framing and ceiling services exposed during construction.",
    "Steel stud framing & interiors",
    "2022",
  ),
  archive(
    "20221124_100329.jpg",
    "Finished wood-slat feature wall and ceiling inside a commercial interior.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20221124_100347.jpg",
    "Completed commercial interior with wood-slat architectural ceiling details.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20221124_100357.jpg",
    "Wood-slat feature ceiling and integrated lighting in a finished interior.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20221124_100407.jpg",
    "Completed wood-slat partition and ceiling feature at a commercial project.",
    "Linear & specialty ceilings",
    "2022",
  ),
  archive(
    "20231106_123855.jpg",
    "Commercial ceiling installation in progress beneath exposed structure.",
    "Suspended & T-bar ceilings",
    "2023",
  ),
  archive(
    "20231106_123900.jpg",
    "Suspended ceiling work progressing through a commercial corridor.",
    "Suspended & T-bar ceilings",
    "2023",
  ),
  archive(
    "20231108_094347.jpg",
    "Large-format suspended ceiling panels installed along a commercial interior.",
    "Suspended & T-bar ceilings",
    "2023",
  ),
  archive(
    "20231220_133619.jpg",
    "Curved specialty ceiling with linear panels and integrated strip lighting.",
    "Linear & specialty ceilings",
    "2023",
  ),
  archive(
    "20231220_134121.jpg",
    "Completed linear-panel feature ceiling with recessed lighting.",
    "Linear & specialty ceilings",
    "2023",
  ),
  archive(
    "20240912_161125.jpg",
    "Black and white geometric specialty ceiling installation in progress.",
    "Linear & specialty ceilings",
    "2024",
  ),
  archive(
    "20241011_125846.jpg",
    "High commercial interior with ceiling framing and services under construction.",
    "Steel stud framing & interiors",
    "2024",
  ),
  archive(
    "20241018_090504.jpg",
    "Suspended white acoustic ceiling panels installed below open services.",
    "Acoustic panels",
    "2024",
  ),
  archive(
    "20250514_110803.jpg",
    "Completed linear slat ceiling with integrated lighting over a glazed office wall.",
    "Linear & specialty ceilings",
    "2025",
  ),
  archive(
    "hatchacousticpanelinstall.jpg",
    "Completed Hatch reception with suspended acoustic ceiling panels.",
    "Acoustic panels",
    undefined,
    "Hatch acoustic ceiling",
  ),
  archive(
    "img_6681.jpg",
    "Steel stud corridor partitions during a commercial interior build-out.",
    "Steel stud framing & interiors",
  ),
  archive(
    "img_6693.jpg",
    "Commercial ceiling backing and steel stud wall framing in progress.",
    "Steel stud framing & interiors",
  ),
  archive(
    "img_6770-1.jpg",
    "Steel stud partitions built around existing columns in a commercial renovation.",
    "Steel stud framing & interiors",
  ),
  archive(
    "img_6771.jpg",
    "Wide view of steel stud partitions on a commercial construction floor.",
    "Steel stud framing & interiors",
  ),
  archive(
    "img_6787.jpg",
    "Overhead steel stud ceiling framing during a tenant improvement.",
    "Steel stud framing & interiors",
  ),
  archive(
    "img_6794.jpg",
    "Commercial ceiling framing and building services before board installation.",
    "Steel stud framing & interiors",
  ),
  archive(
    "img_6800.jpg",
    "Steel stud walls and ceiling framing beside exterior windows in a commercial interior.",
    "Steel stud framing & interiors",
  ),
  archive(
    "screenshot_20180427-183620_messages.jpg",
    "Finished yellow acoustic wall panels in a commercial meeting and seating area.",
    "Acoustic panels",
    "2018",
  ),
];

export const RECENT_PROJECT_PHOTOS: ProjectPhoto[] = [
{"src": "/projects/matt-oct14/the-post-celebration-ceiling-panels-1.webp", "alt": "Celebration panels create a repeating ceiling pattern at The Post.", "category": "Linear & specialty ceilings", "title": "The Post: A Clean Linear Ceiling with Celebration Panels", "project": "The Post", "projectUrl": "/blog/the-post-celebration-ceiling-panels", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/popeyes-vancouver-restaurant-steel-stud-framing-1.webp", "alt": "Steel stud framing during the Popeyes Vancouver restaurant interior work.", "category": "Steel stud framing & interiors", "title": "Popeyes Vancouver: Framing the Space Before the Restaurant Finish", "project": "Vancouver", "projectUrl": "/blog/popeyes-vancouver-restaurant-steel-stud-framing", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-1.webp", "alt": "Wood baffles form a warm ceiling feature in the Thai restaurant.", "category": "Linear & specialty ceilings", "title": "Wood Baffles Bring Warmth to a Downtown Thai Restaurant", "project": "Downtown restaurant", "projectUrl": "/blog/downtown-thai-restaurant-wood-baffle-ceiling", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-2.webp", "alt": "The baffle installation taking shape around overhead services.", "category": "Linear & specialty ceilings", "title": "Wood Baffles Bring Warmth to a Downtown Thai Restaurant", "project": "Downtown restaurant", "projectUrl": "/blog/downtown-thai-restaurant-wood-baffle-ceiling", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-3.webp", "alt": "Installation-stage view of the restaurant ceiling feature.", "category": "Linear & specialty ceilings", "title": "Wood Baffles Bring Warmth to a Downtown Thai Restaurant", "project": "Downtown restaurant", "projectUrl": "/blog/downtown-thai-restaurant-wood-baffle-ceiling", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/langley-tenant-improvement-steel-stud-framing-1.webp", "alt": "Steel stud partitions define the Langley tenant improvement layout.", "category": "Steel stud framing & interiors", "title": "Langley Tenant Improvement: Turn an Open Space into Useful Rooms", "project": "Langley, BC", "projectUrl": "/blog/langley-tenant-improvement-steel-stud-framing", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/langley-tenant-improvement-steel-stud-framing-2.webp", "alt": "New wall framing before the next construction stage.", "category": "Steel stud framing & interiors", "title": "Langley Tenant Improvement: Turn an Open Space into Useful Rooms", "project": "Langley, BC", "projectUrl": "/blog/langley-tenant-improvement-steel-stud-framing", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/langley-tenant-improvement-steel-stud-framing-3.webp", "alt": "A wider view of the steel stud partition work in Langley.", "category": "Steel stud framing & interiors", "title": "Langley Tenant Improvement: Turn an Open Space into Useful Rooms", "project": "Langley, BC", "projectUrl": "/blog/langley-tenant-improvement-steel-stud-framing", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/commercial-tbar-ceiling-installation-1.webp", "alt": "Suspended T-bar grid during a commercial ceiling installation.", "category": "Suspended & T-bar ceilings", "title": "T-Bar Ceilings: A Practical Finish for Your Commercial Space", "project": "Commercial interior", "projectUrl": "/blog/commercial-tbar-ceiling-installation", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/commercial-tbar-ceiling-installation-2.webp", "alt": "The wider interior while ceiling work is underway.", "category": "Suspended & T-bar ceilings", "title": "T-Bar Ceilings: A Practical Finish for Your Commercial Space", "project": "Commercial interior", "projectUrl": "/blog/commercial-tbar-ceiling-installation", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/curved-arch-steel-stud-framing-1.webp", "alt": "Curved framing detail before the finished interior surfaces.", "category": "Steel stud framing & interiors", "title": "An Arch Starts in the Framing: Planning a Curved Interior Feature", "project": "Interior feature", "projectUrl": "/blog/curved-arch-steel-stud-framing", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/dp-world-suspended-ceiling-baffles-1.webp", "alt": "Repeating suspended baffles at the DP World interior.", "category": "Acoustic panels", "title": "DP World: Repeating Ceiling Baffles with a Light, Open Look", "project": "DP World project", "projectUrl": "/blog/dp-world-suspended-ceiling-baffles", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/dp-world-suspended-ceiling-baffles-2.webp", "alt": "A wider view of the baffle arrangement and surrounding space.", "category": "Acoustic panels", "title": "DP World: Repeating Ceiling Baffles with a Light, Open Look", "project": "DP World project", "projectUrl": "/blog/dp-world-suspended-ceiling-baffles", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src": "/projects/matt-oct14/dp-world-suspended-ceiling-baffles-3.webp", "alt": "Baffle spacing around lighting and overhead services.", "category": "Acoustic panels", "title": "DP World: Repeating Ceiling Baffles with a Light, Open Look", "project": "DP World project", "projectUrl": "/blog/dp-world-suspended-ceiling-baffles", "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},
  {
    "src": "/projects/club-champion/steel-stud-framing.webp",
    "alt": "Full-height steel stud framing and backing before drywall at Club Champion in Surrey.",
    "category": "Steel stud framing & interiors",
    "title": "Club Champion framing & drywall",
    "project": "Club Champion \u2014 Semiahmoo",
    "location": "Surrey, BC",
    "date": "October 2026",
    "projectUrl": "/blog/club-champion-steel-stud-framing-drywall-surrey",
    "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/club-champion/drywall-wide.webp",
    "alt": "Boarded interior partitions during the Club Champion retail tenant improvement.",
    "category": "Steel stud framing & interiors",
    "title": "Club Champion framing & drywall",
    "project": "Club Champion \u2014 Semiahmoo",
    "location": "Surrey, BC",
    "date": "October 2026",
    "projectUrl": "/blog/club-champion-steel-stud-framing-drywall-surrey",
    "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/club-champion/drywall-interior.webp",
    "alt": "Drywall installation around openings at Club Champion, Semiahmoo Shopping Centre.",
    "category": "Steel stud framing & interiors",
    "title": "Club Champion framing & drywall",
    "project": "Club Champion \u2014 Semiahmoo",
    "location": "Surrey, BC",
    "date": "October 2026",
    "projectUrl": "/blog/club-champion-steel-stud-framing-drywall-surrey",
    "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mission-lougheed/drywall.webp",
    "alt": "Drywall partitions at the Regus project in Mission during construction.",
    "category": "Steel stud framing & interiors",
    "title": "Regus Mission drywall",
    "project": "Regus \u2014 31999 Lougheed Highway",
    "location": "Mission, BC",
    "date": "October 2026",
    "projectUrl": "/blog/regus-mission-drywall-project",
    "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mission-lougheed/window-detail.webp",
    "alt": "Drywall return beside a window at the Regus project, 31999 Lougheed Highway, Mission.",
    "category": "Steel stud framing & interiors",
    "title": "Regus Mission drywall",
    "project": "Regus \u2014 31999 Lougheed Highway",
    "location": "Mission, BC",
    "date": "October 2026",
    "projectUrl": "/blog/regus-mission-drywall-project",
    "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
{
  "src": "/projects/mission-lougheed/framing.webp",
  "alt": "Steel stud partitions before drywall at 31999 Lougheed Highway, Mission.",
  "category": "Steel stud framing & interiors",
  "title": "Mission site framing before drywall",
  "project": "31999 Lougheed Highway",
  "location": "Mission, BC",
  "date": "September 2026",
  "projectUrl": "/blog/regus-mission-drywall-project",
  "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."
},
{
  "src": "/projects/mission-lougheed/taping.webp",
  "alt": "Taping-stage walls at 31999 Lougheed Highway, Mission.",
  "category": "Steel stud framing & interiors",
  "title": "Mission site taping",
  "project": "31999 Lougheed Highway",
  "location": "Mission, BC",
  "date": "September 2026",
  "projectUrl": "/blog/regus-mission-drywall-project",
  "credit": "Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."
}
];

export const OCTOBER_21_PROJECT_PHOTOS: ProjectPhoto[] = [
  {
    "src": "/projects/mason-oct21/autodesk-floating-tbar.jpg",
    "category": "Suspended & T-bar ceilings",
    "project": "Autodesk Office",
    "location": "Vancouver",
    "title": "Custom painted floating T-bar ceiling with Axiom trim",
    "alt": "Custom painted floating T-bar ceiling with Axiom trim. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
    "credit": "Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mason-oct21/teck-cassette-baffles.jpg",
    "category": "Linear & specialty ceilings",
    "project": "Teck Resources, Bentall 5",
    "location": "Vancouver",
    "title": "Custom cassette baffle ceiling",
    "alt": "Custom cassette baffle ceiling. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
    "credit": "Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mason-oct21/robson-wood-slat-ceiling.jpg",
    "category": "Linear & specialty ceilings",
    "project": "Government of Canada office on Robson",
    "location": "Vancouver",
    "title": "Custom wood slat ceiling installation",
    "alt": "Custom wood slat ceiling installation. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
    "credit": "Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mason-oct21/bmo-lougheed-wood-ceiling.jpg",
    "category": "Linear & specialty ceilings",
    "project": "BMO, Lougheed Mall",
    "location": "Burnaby",
    "title": "Custom wood slat ceiling installation",
    "alt": "Custom wood slat ceiling installation. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
    "credit": "Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mason-oct21/winners-north-vancouver-tbar.jpg",
    "category": "Suspended & T-bar ceilings",
    "project": "Winners, Park & Tilford",
    "location": "North Vancouver",
    "title": "T-bar ceiling installation in progress",
    "alt": "T-bar ceiling installation in progress. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
    "credit": "Mason McKenzie / Rambo Wall & Ceiling Limited"
  },
  {
    "src": "/projects/mason-oct21/annacis-office-framing.jpg",
    "category": "Steel stud framing & interiors",
    "project": "Office tenant improvement, Annacis Island",
    "location": "Annacis Island",
    "title": "New steel stud interior walls",
    "alt": "New steel stud interior walls. Photo supplied by Mason McKenzie, Rambo Wall & Ceiling Limited.",
    "credit": "Mason McKenzie / Rambo Wall & Ceiling Limited"
  }
];

// Same Popeyes photograph under an archive filename, plus a near-identical ceiling view.
// Keep original assets available for existing articles and project records.
const REPEATED_GALLERY_SOURCES = new Set([
  "/projects/rwc-archive/20211004_140229.jpg",
  "/projects/rwc-archive/20190805_154545.jpg",
]);
const seenGallerySources = new Set<string>();

export const PROJECT_PHOTOS: ProjectPhoto[] = [
  ...batch3.flatMap(p=>p.photos.map(photo=>({...photo,category:p.category as ProjectCategory,project:p.title,title:p.title,location:p.location,projectUrl:`/project/${p.slug}`}))),
  ...OCTOBER_21_PROJECT_PHOTOS,
  ...RECENT_PROJECT_PHOTOS,
  ...FEATURED_PROJECT_PHOTOS,
  ...BEATTY_PROJECT_PHOTOS,
  ...RWC_ARCHIVE_PHOTOS,
].filter((photo) => {
  if (REPEATED_GALLERY_SOURCES.has(photo.src) || seenGallerySources.has(photo.src)) return false;
  seenGallerySources.add(photo.src);
  return true;
});
