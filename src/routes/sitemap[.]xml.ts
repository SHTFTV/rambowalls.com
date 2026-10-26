import stories from "../lib/project-stories.json";
import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "../lib/site";
import { CITIES } from "../lib/cities";
import { PROJECT_PHOTOS } from "../lib/projects";

const BASE_URL = "https://www.rambowalls.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: {
          path: string;
          priority: string;
          changefreq: string;
          images?: typeof PROJECT_PHOTOS;
        }[] = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/mission", priority: "0.6", changefreq: "monthly" },
          { path: "/commercial-drywall-contractor-lower-mainland", priority: "0.9", changefreq: "monthly" },
          { path: "/acoustic-ceiling-contractors", priority: "0.9", changefreq: "monthly" },
          { path: "/projects", priority: "0.9", changefreq: "monthly", images: PROJECT_PHOTOS },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          ...stories.map(p=>({path:`/project/${p.slug}`,priority:"0.8",changefreq:"monthly",images:p.photos.map(photo=>({...photo,category:p.category as typeof PROJECT_PHOTOS[number]["category"]}))})),
          ...CITIES.map((c) => ({
            path: `/locations/${c.slug}`,
            priority: "0.9",
            changefreq: "monthly",
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
        ];
        const escapeXml = (value: string) =>
          value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&apos;");
        const urls = entries
          .map((e) => {
            const images =
              e.images
                ?.map(
                  (photo) =>
                    `\n    <image:image>\n      <image:loc>${BASE_URL}${escapeXml(photo.src)}</image:loc>\n      <image:title>${escapeXml(photo.title ?? photo.category)}</image:title>\n      <image:caption>${escapeXml(photo.alt)}</image:caption>\n    </image:image>`,
                )
                .join("") ?? "";
            return `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>${images}\n  </url>`;
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
