import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { pageCard } from "../lib/page-cards";

const url = "https://www.rambowalls.com/mission";
const title = "Our Mission: Two Triggers. One Mission. | Rambo Walls & Ceilings";
const description = "Keep it clean. Keep it on time. Rambo’s mission brings McKenzie Brothers experience, quality workmanship and hands-on management to walls, ceilings and construction.";
const card = pageCard("/mission");

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:type", content: "website" }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { property: "og:image", content: card.image }, { property: "og:image:alt", content: card.alt }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: title }, { name: "twitter:description", content: description }, { name: "twitter:image", content: card.image }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "AboutPage", "@id": url + "#page", url, name: title, description, image: card.image, about: { "@type": "HomeAndConstructionBusiness", name: SITE.name, url: "https://www.rambowalls.com/", telephone: SITE.phone, email: SITE.email } }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.rambowalls.com/" }, { "@type": "ListItem", position: 2, name: "Our mission", item: url }] }] }) }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return <div>
    <nav aria-label="Breadcrumb" className="rambo-mission-breadcrumb"><a href="/">Home</a><span aria-hidden="true"> / </span><span>Our mission</span></nav>
    <section id="mission" className="rambo-mission" aria-labelledby="rambo-mission-title">
      <div className="rambo-mission-copy">
        <p className="rambo-mission-label">OUR MISSION</p>
        <h1 id="rambo-mission-title">Two triggers.<br/><span>One mission.</span></h1>
        <p className="rambo-mission-lead">Keep it clean. Keep it on time.</p>
        <p>Rambo is the new face of the well-established McKenzie Brothers, with 15 years of servicing and building out projects across the Lower Mainland. Our crews bring that experience to ceilings, walls and general construction.</p>
        <p>Our mission is to bring quality workmanship and hands-on management to every project: keep the work to code, keep the job on budget and deliver a finish we can stand behind. Every time.</p>
        <div className="rambo-mission-priorities"><p><strong>01 / KEEP IT CLEAN</strong><span>Organised work areas. Respect for the site. Care in the details.</span></p><p><strong>02 / KEEP IT ON TIME</strong><span>Plan the sequence. Coordinate the crews. Keep the job moving.</span></p></div>
        <a href="/#contact" className="rambo-mission-link">Talk to Mason about your project ↗</a>
      </div>
      <figure><img src="/brand/rambo-two-triggers-mission.webp" width="1672" height="941" fetchPriority="high" alt="Rambo safety-vest R logo with two gloved arms holding a red impact driver and a red drywall screw gun. Two triggers. One mission."/><figcaption>AI-assisted Rambo brand illustration based on the existing safety-vest logo. Two tools. Two priorities: clean work and an on-time job.</figcaption></figure>
    </section>
  </div>;
}
