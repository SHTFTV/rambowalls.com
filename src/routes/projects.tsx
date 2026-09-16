import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PROJECT_CATEGORIES, PROJECT_PHOTOS, type ProjectCategory } from "../lib/projects";

const BASE_URL = "https://www.rambowalls.com";
const PAGE_URL = `${BASE_URL}/projects`;
const OG_IMAGE = `${BASE_URL}/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg`;

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#page`,
      url: PAGE_URL,
      name: "Rambo Walls & Ceilings Project Gallery",
      description:
        "Real Rambo Walls & Ceilings project photographs showing acoustic ceilings, suspended ceilings, specialty systems, drywall and steel stud framing.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#business` },
      primaryImageOfPage: { "@id": `${OG_IMAGE}#image` },
      mainEntity: { "@id": `${PAGE_URL}#gallery` },
    },
    {
      "@type": "ImageGallery",
      "@id": `${PAGE_URL}#gallery`,
      name: "Rambo Walls & Ceilings completed work and construction gallery",
      associatedMedia: PROJECT_PHOTOS.map((photo, index) => ({
        "@type": "ImageObject",
        "@id": `${BASE_URL}${photo.src}#image`,
        contentUrl: `${BASE_URL}${photo.src}`,
        url: `${BASE_URL}${photo.src}`,
        caption: photo.alt,
        name: photo.title ?? `Rambo Walls & Ceilings project photograph ${index + 1}`,
        representativeOfPage: index === 1,
        ...(photo.project ? { about: photo.project } : {}),
        ...(photo.location ? { contentLocation: { "@type": "Place", name: photo.location } } : {}),
      })),
    },
  ],
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title:
          "Project Gallery | Acoustic Ceilings, Drywall & Steel Stud Framing | Rambo Walls & Ceilings",
      },
      {
        name: "description",
        content:
          "Browse 57 real Rambo Walls & Ceilings project photos: acoustic panels, T-bar and suspended ceilings, specialty ceilings, drywall and steel stud framing across commercial interiors.",
      },
      {
        property: "og:title",
        content: "Rambo Walls & Ceilings — Real Project Gallery",
      },
      {
        property: "og:description",
        content:
          "57 real project photographs covering acoustic systems, suspended ceilings, specialty ceilings and commercial interior framing.",
      },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Suspended acoustic ceiling clouds installed by Rambo Walls & Ceilings.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Rambo Walls & Ceilings — Real Project Gallery",
      },
      {
        name: "twitter:description",
        content:
          "Acoustic ceilings, T-bar systems, specialty ceilings and steel stud framing from real Rambo projects.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(gallerySchema),
      },
    ],
  }),
  component: ProjectsPage,
});

type Filter = "All work" | ProjectCategory;

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visiblePhotos = useMemo(
    () =>
      filter === "All work"
        ? PROJECT_PHOTOS
        : PROJECT_PHOTOS.filter((photo) => photo.category === filter),
    [filter],
  );

  const selectedPhoto = selectedIndex === null ? null : visiblePhotos[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? 0 : (current + 1) % visiblePhotos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? 0 : (current - 1 + visiblePhotos.length) % visiblePhotos.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, visiblePhotos.length]);

  const changeFilter = (nextFilter: Filter) => {
    setFilter(nextFilter);
    setSelectedIndex(null);
  };

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-display text-sm tracking-[0.2em]" style={{ color: "var(--brand)" }}>
            REAL RWC PROJECTS
          </p>
          <h1 className="mt-2 max-w-4xl text-5xl leading-none sm:text-7xl">Project gallery</h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            57 photographs from Rambo Walls &amp; Ceilings projects. Select any photo to open it
            full size. Project names and locations are shown only where they have been confirmed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-wrap gap-2" aria-label="Filter project photos">
          {(["All work", ...PROJECT_CATEGORIES] as Filter[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => changeFilter(item)}
              aria-pressed={filter === item}
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              style={
                filter === item
                  ? {
                      borderColor: "var(--brand)",
                      backgroundColor: "var(--brand)",
                      color: "var(--brand-foreground)",
                    }
                  : undefined
              }
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Showing {visiblePhotos.length} {visiblePhotos.length === 1 ? "photo" : "photos"}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-lg border border-border bg-card text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label={`Open photo ${index + 1}: ${photo.alt}`}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              {(photo.title || photo.project) && (
                <div className="p-3">
                  {photo.title && <h2 className="text-base leading-tight">{photo.title}</h2>}
                  {photo.project && (
                    <p className="mt-1 text-xs text-muted-foreground">{photo.project}</p>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 grid bg-black/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/70 text-2xl text-white hover:bg-white hover:text-black"
            aria-label="Close project photo"
          >
            ×
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedIndex((selectedIndex - 1 + visiblePhotos.length) % visiblePhotos.length)
            }
            className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-3xl text-white hover:bg-white hover:text-black sm:left-5"
            aria-label="Previous project photo"
          >
            ‹
          </button>

          <figure className="m-auto flex max-h-[calc(100vh-1.5rem)] max-w-[min(94vw,1400px)] flex-col items-center">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[calc(100vh-8rem)] max-w-full rounded-md object-contain"
            />
            <figcaption className="mt-3 max-w-3xl text-center text-sm text-white/80">
              {selectedPhoto.title && (
                <span className="font-semibold text-white">{selectedPhoto.title}. </span>
              )}
              {selectedPhoto.project && <span>{selectedPhoto.project}. </span>}
              <span>{selectedPhoto.alt}</span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => setSelectedIndex((selectedIndex + 1) % visiblePhotos.length)}
            className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-3xl text-white hover:bg-white hover:text-black sm:right-5"
            aria-label="Next project photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
