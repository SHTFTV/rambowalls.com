import type { ReactNode } from "react";
import { BLOG_POSTS, type BlogPost } from "./site";

export type BlogContent = {
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
};

export const BLOG_CONTENT: Record<string, BlogContent> = {
  "steel-stud-framing-condo-renovations-vancouver": {
    intro:
      "If you've cracked open a Vancouver condo in the last five years, you've probably noticed the wood is missing. Where renovators used to slap up 2x4s, the framing is now light-gauge galvanized steel — straight, dry, screwed instead of nailed, and stamped with the manufacturer's name. That shift didn't happen by accident. Strata bylaws, fire code, acoustic ratings, and the simple reality of moving material into a 28-storey tower have made steel stud framing the default for residential condo renovations across Vancouver and the Lower Mainland. This guide walks through why, how, and what to watch for when planning your renovation — and how Rambo Walls & Ceilings runs the framing-and-drywall scope on suite-level work from Yaletown to Brentwood.",
    sections: [
      {
        heading: "Why strata buildings prefer steel studs",
        paragraphs: [
          "Most concrete towers in Vancouver were built with non-combustible interior framing in the common areas, and many newer buildings extend that requirement into the suites. Steel studs are non-combustible by definition, which means a renovation that swaps wood walls for steel is one less conversation with the building's risk manager and one less fire-stopping headache at every penetration.",
          "Strata councils also care about water. Condos sit on top of each other, and a leak from a renovated suite can ruin twenty units below. Steel framing doesn't rot, doesn't grow mould, and doesn't swell when a dishwasher line lets go in 2031. For a strata that has to insure the building envelope, a steel-framed reno is a measurably lower-risk renovation than a wood-framed one.",
          "Finally, steel studs travel well. A bundle of 25-gauge 3-5/8\" studs fits in a service elevator and stacks against a hallway wall without a permit from the building manager. Plywood and dimensional lumber do not. On a tight Vancouver site with two-hour load-in windows, that logistics advantage alone is often the deciding factor.",
        ],
      },
      {
        heading: "Gauge, spacing, and what your drawings should actually say",
        paragraphs: [
          "Residential condo partitions are almost always non-load-bearing, so the framing is sized for stiffness and acoustics rather than structural load. The standard kit is 25-gauge 3-5/8\" studs at 16\" on centre with matching top and bottom track, fastened to concrete with powder-actuated pins or Tapcons depending on the building's no-shot policy.",
          "Where the spec gets interesting is the demising wall between suites and any wall that wraps a bathroom or bedroom. Those want 20-gauge studs, double-layer 5/8\" Type X drywall, and resilient channel or a staggered-stud assembly to hit STC 50+. A good set of drawings calls out the assembly by name — UL U419, CGC WP-3510, or an equivalent — instead of leaving it to the framer to guess.",
          "Ceiling drops, bulkheads, and soffits are where steel really shines. Hat channel, RC1, and cold-rolled channel let you build a perfectly flat ceiling under a concrete deck that's anything but flat. We routinely pull 3/4\" of waviness out of a slab using nothing but a laser and a couple of extra screws.",
        ],
      },
      {
        heading: "Acoustic and fire performance in the real world",
        paragraphs: [
          "Vancouver's building code requires STC 50 between dwelling units, but most owners experience STC 50 as \"I can hear my neighbour's TV.\" A renovation is the cheapest chance you'll ever get to upgrade. Adding a layer of 5/8\" Type X, packing the cavity with mineral wool instead of fiberglass, and decoupling one face with resilient channel will push a wall into the high 50s — the range where conversation becomes inaudible.",
          "Fire ratings are non-negotiable. Any wall that separates suites or wraps a corridor needs a one-hour rating, and the assembly only works if the penetrations are firestopped properly. Steel framing makes this easier because the framing itself doesn't burn — but a sloppy firestop around a copper line still fails inspection. We use UL-listed firestop systems and photograph every penetration before the drywall closes it in.",
        ],
      },
      {
        heading: "Drywall on top of steel — the finish is what gets seen",
        paragraphs: [
          "Framing is what holds the building up; drywall is what your client sees every day. We board steel-stud walls with 5/8\" for stiffness even where 1/2\" would meet code, because the difference in feel at a light switch is obvious. Screws are #6 fine-thread bugle-head, set just below the paper without breaking it.",
          "For taping we run paper tape on all flats and inside corners, and metal beads on outside corners and J-trims wherever drywall meets a different material. Three coats of mud is the minimum for a Level 4 finish; for feature walls under wall washers or in suites where the owner is colour-matching to a designer board, we'll go Level 5 with a full skim coat.",
        ],
        list: [
          "Steel-framed partitions screwed at 16\" o.c.",
          "Mineral wool batts in every cavity for STC and fire",
          "Double-layer 5/8\" Type X at demising walls",
          "Resilient channel or RSIC clips on bedrooms and media walls",
          "Level 4 finish standard; Level 5 on raking-light walls",
        ],
      },
      {
        heading: "Schedule, dust, and keeping the neighbours on your side",
        paragraphs: [
          "A typical 900-square-foot condo gut takes our crew four to six days to frame, board and tape — including bulkheads, ceiling drops, and any closet rebuilds. We run a HEPA negative-air machine on every reno, mask the corridor and the elevator landing, and clean the common areas every night before we leave.",
          "On the strata side, we file the renovation indemnity, provide insurance certificates, and walk the building manager through the schedule before day one. Most of the friction between owners and stratas during a renovation is communication, not the work itself. A framer who picks up the phone is worth their weight in galvanized steel.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a permit for steel stud framing in a Vancouver condo?",
        a: "Any reno that moves a wall, changes a plumbing fixture, or alters an electrical circuit needs a City of Vancouver permit. Some buildings additionally require an engineer-stamped drawing for any wall that touches a slab or column. Rambo Walls handles the framing scope and coordinates with your designer or PM on the paperwork.",
      },
      {
        q: "Can you frame over an existing concrete slab without damaging it?",
        a: "Yes. We use a combination of Tapcons, mechanical anchors, and acoustic mat under the bottom track so the floor stays intact and the wall doesn't telegraph footstep noise from below. Powder-actuated fasteners are used only in buildings that allow them.",
      },
      {
        q: "How thick is a typical steel-stud condo wall?",
        a: "Interior partitions are usually 4-5/8\" finished (3-5/8\" stud plus 1/2\" drywall each side). Plumbing walls bump to 6-5/8\" with a 6\" stud. Demising walls between suites are typically 8-10\" with a double-stud assembly and double-layer board.",
      },
      {
        q: "Will steel framing affect my Wi-Fi or cellphone signal?",
        a: "Marginally, in the same way wood lath plus plaster would. Modern routers and 5G repeaters handle a steel-framed suite without issue. We run conduit for hardwired ethernet during framing if you want guaranteed signal in every room.",
      },
    ],
  },

  "custom-homes-drywall-boarding-taping-finishing": {
    intro:
      "On a custom home, the drywall doesn't get its own line item in the marketing brochure — and that's exactly the point. Drywall is the surface every other trade gets judged against. Paint either lays flat or it doesn't. Lights either wash a wall evenly or they spotlight every flaw. Casework either butts cleanly into a return or it shows a 1/16\" gap. Get the boarding, taping and finishing right and the rest of the home reads as expensive. Get it wrong and a million-dollar house looks like a flip. This is a field guide to how Rambo Walls & Ceilings handles drywall on custom homes across Vancouver and the Lower Mainland, from boarding the rough frame to a true Level 5 finish under raking morning light.",
    sections: [
      {
        heading: "Start before the boards arrive: framing prep",
        paragraphs: [
          "The best drywall finish in the world cannot save a framing job that wasn't strung. We walk every custom home before we order board — checking the wall planes with a 6-foot level, sighting ceiling joists for sag, and flagging any stud crowned more than 1/4\". Crooked studs get planed, twisted ones get sistered, and any junction where two materials meet (wood to steel, beam to stud) gets a hat channel to float the transition.",
          "Backing is the other invisible-but-critical step. Every TV mount, every grab bar location, every floating-vanity bracket, every curtain rod and every art-light gets a piece of 2x10 fly-blocking installed before the rock goes up. We mark each backing on the framing in red Sharpie and shoot a photo to the homeowner — six months later when they want to hang a 90-pound mirror, the photo tells them exactly where to drill.",
        ],
      },
      {
        heading: "Boarding strategy — orientation, fasteners, and edges",
        paragraphs: [
          "On ceilings we run 5/8\" Type X horizontally across the joists in the longest practical sheets, screws every 12\" in the field and 8\" at the edges. On walls we go horizontal as well, with the factory edge tight to the ceiling and the cut edge to the floor. Horizontal boarding cuts the linear footage of butt joints — and butt joints are where finishes fail.",
          "Where we have to butt, we use a butt-board (a strip of OSB recessed behind the joint) so the two pieces of board can pull together into a slight valley. That valley fills with mud and disappears. A butt joint on a flush surface, mudded flat, will telegraph forever.",
          "Around windows we run the board past the opening and cut after, never picture-frame the rough opening. That single habit eliminates the cracks that radiate from window corners six months after the heat is turned on for the first winter.",
        ],
      },
      {
        heading: "Taping and mudding to Level 4 — the standard for paint",
        paragraphs: [
          "Level 4 is the industry baseline for any wall that's going to be painted in a flat or eggshell sheen under normal lighting. It means three coats of compound on flats and bevels, two coats on fasteners, paper tape embedded in the first coat, and the whole thing sanded to a uniform surface.",
          "Our taping rhythm on a custom home runs like this: day one, paper-tape every joint and fill the screw heads with a quick first coat. Day two, a wider second coat with a 10\" knife, feathered out 8\" past the joint. Day three, a final skim with a 12\" knife and a final pass on the screws. We let each coat dry overnight before sanding — never the same day — to keep the mud from rolling.",
          "Outside corners get steel bead on anything below shoulder height, paper-faced bead on cathedral ceilings and any corner that needs to look like a knife edge. Where the homeowner has selected a square archway with no casing, we run an L-bead for a hard, paintable terminator.",
        ],
      },
      {
        heading: "Level 5 — when raking light is the test",
        paragraphs: [
          "A Level 5 finish is a full skim coat over the entire wall, sanded to a porcelain surface, primed with a high-build drywall primer. We don't do Level 5 on every wall — it would double the price of the drywall scope on a 6,000-square-foot home — but we always do it on the walls that earn it: the entry hallway, the great-room walls under floor-to-ceiling glass, any wall washed by integrated cove lighting, and any wall that's painted a dark or high-gloss colour.",
          "The reason is simple: raking light (light striking a wall at a low angle) magnifies every imperfection. A Level 4 wall under raking light shows tape lines, butt joints, and screw dimples. A Level 5 wall reads as a single, continuous plane.",
          "We use an airless sprayer with a fine tip to lay the skim coat, then back-roll with a 1/4\" nap before it sets. After it dries, two passes with a 220-grit pole sander and a vacuum-attached drywall sander leaves a surface a designer will run their hand across and not ask a question.",
        ],
        list: [
          "Walls under wall washers — Level 5",
          "Walls beside or below floor-to-ceiling glass — Level 5",
          "Walls painted in dark or high-gloss colours — Level 5",
          "Standard bedroom walls in flat or eggshell — Level 4",
          "Closet interiors and mechanical rooms — Level 3 with hot mud",
        ],
      },
      {
        heading: "Sanding, cleanup, and the handoff to paint",
        paragraphs: [
          "Dust is the lasting impression a drywall crew leaves on a custom home. We sand exclusively with vacuum-attached pole sanders and HEPA shop vacs, then double-pass the whole site with a damp microfiber before paint touches the walls. Any cabinetry, glazing, or hardwood that's already installed gets fully draped and taped — drywall dust on raw oak is a stain we don't make the painters fix.",
          "Before we leave we walk the home with the painter and the GC, light each wall with a 500-watt LED handheld at a 15-degree angle, and mark any defect with painters tape. Every flag gets touched up and re-sanded the next morning. The painter primes a perfect surface; the homeowner moves into a house that looks the way the renderings looked.",
        ],
      },
    ],
    faq: [
      {
        q: "What's the difference between Level 4 and Level 5 drywall?",
        a: "Level 4 is three coats of compound on joints, two on screws, sanded smooth — standard for most painted walls. Level 5 adds a full skim coat over the entire surface, eliminating the texture difference between mudded areas and bare paper. Level 5 is required for walls under raking light, high-gloss paint, or large unbroken planes.",
      },
      {
        q: "Should I use 1/2\" or 5/8\" drywall in a custom home?",
        a: "We board ceilings in 5/8\" Type X for sag resistance and fire performance, and walls in 5/8\" Type X as standard. The extra stiffness at light switches and corners is noticeable, and the cost difference over the whole house is a few hundred dollars.",
      },
      {
        q: "How long does drywall take on a 5,000-square-foot custom home?",
        a: "Roughly 3-4 weeks for boarding and a Level 4 finish, with another 5-7 days added if any walls require Level 5. We typically board for a week, tape for two, then sand and walk for defects in the final week.",
      },
      {
        q: "Do you handle abuse-resistant drywall for mudrooms and hallways?",
        a: "Yes. We use AR-rated board (Gold Bond XP or USG Sheetrock Mold Tough AR) in mudrooms, pantries, kid hallways and behind any door that swings hard. The cost premium is small and it eliminates the dings that show up in year two.",
      },
    ],
  },

  "tbar-ceilings-residential-commercial-vancouver": {
    intro:
      "Walk into almost any office, school, clinic, retail unit or finished basement in the Lower Mainland and look up. Odds are you're looking at a T-bar ceiling — a suspended grid of light metal sections holding lay-in tiles a few inches below the structural deck. T-bar gets dismissed as utilitarian, but in 2026 it's the most versatile, serviceable, acoustically effective ceiling system available, with tile and grid options that look as good as a plaster bulkhead at a fraction of the cost. This guide explains how T-bar ceilings actually go in, what to spec for residential basements versus commercial offices, restaurants and retail, and how Rambo Walls & Ceilings installs them across Vancouver, Burnaby, Surrey and the rest of the Lower Mainland.",
    sections: [
      {
        heading: "What a T-bar ceiling actually is",
        paragraphs: [
          "A T-bar ceiling, properly called a suspended acoustical ceiling, is built from four components: main tees, cross tees, perimeter wall angle, and lay-in tiles. The main tees run the long direction of the room, suspended from the structural deck by 12-gauge hanger wire on a 4-foot grid. Cross tees clip into the mains at 2-foot or 4-foot intervals, forming either a 2'×2' or 2'×4' grid pattern. The tiles drop in from above. The whole assembly is a fully demountable ceiling that you can take apart with a screwdriver to access anything above.",
          "That demountability is the whole point. Every duct, sprinkler line, fire damper, low-voltage cable tray, and lighting whip lives in the ceiling plenum, and every one of them needs to be reachable. Drywall ceilings look great until the day the fire marshal asks you to access a damper that's behind 600 square feet of taped and painted board.",
        ],
      },
      {
        heading: "Grid systems — 15/16\", 9/16\", and what to ask for",
        paragraphs: [
          "The standard grid in North America is the 15/16\" exposed tee — wider, heavier, and the cheapest to install. It's the right call for warehouses, mechanical rooms, back-of-house in retail, and any space where the ceiling is functional rather than featured.",
          "For offices, classrooms, restaurants and lobbies we usually upgrade to a 9/16\" narrow-profile grid. The thinner sightline makes the ceiling read as planes of tile separated by a fine line, instead of a heavy grid. Combined with a tegular (stepped-edge) tile, the tile drops below the grid by 1/4\" and the lines almost disappear from a typical viewing angle.",
          "For high-end commercial work — restaurant dining rooms, executive suites, gallery spaces — we install a fully concealed system or a knife-edge tegular grid that reads as a flush plaster ceiling but still pops apart for service. The premium over standard 9/16\" is real, but so is the visual upgrade.",
        ],
      },
      {
        heading: "Tile choices — acoustics, NRC, and tile aesthetics",
        paragraphs: [
          "Tiles do most of the visible and acoustic work. Mineral fiber tiles are the workhorse — affordable, good NRC (noise reduction coefficient) ratings, and available in dozens of textures from fissured to fine-sand to smooth-finish. For most offices we spec a smooth-finish mineral fiber tile with an NRC of 0.70 or higher; that one number tells you the tile absorbs 70% of the sound that hits it, which is the difference between a buzzy open office and a calm one.",
          "Fiberglass tiles step up the acoustics, especially at lower frequencies, and they look cleaner up close. They're standard in conference rooms and any private office where speech privacy matters.",
          "For restaurants and retail we'll specify metal pan tiles, wood-veneer tiles, or acoustic baffles in a partial-coverage layout. The goal in those spaces is usually a high-design ceiling that still tames the noise enough that a couple at the next table can hear each other.",
          "For residential basements, a smooth-finish mineral fiber tile in a 9/16\" white grid gives a clean modern look that beats drywall on cost, on noise control, and on plumbing serviceability. Owners who insist on drywall in a basement usually call us back two years later when they need to cut it open to fix a leak.",
        ],
      },
      {
        heading: "Lighting, sprinklers, and the trades above the grid",
        paragraphs: [
          "Recessed LED panels designed for T-bar (typically 2'×2' or 2'×4' edge-lit) drop into the grid like a tile. They're the cleanest, most efficient lighting choice for a suspended ceiling and they let you change the colour temperature or output years later without re-trimming anything.",
          "Sprinkler heads need to land cleanly in the tile. Either centred in the tile or on a quartered grid; never within 4\" of a tile edge. We coordinate the sprinkler layout with the grid before any tile gets cut. Re-coring a tile because somebody dropped a head in the wrong place is the most avoidable callback in the business.",
          "Air diffusers and return grilles come in tile-format sizes too. The trick is making sure the mechanical contractor and the ceiling contractor are looking at the same reflected ceiling plan — which sounds obvious and is the number one source of friction on a fast-track tenant improvement.",
        ],
        list: [
          "Residential basements: 9/16\" grid, smooth mineral fiber tile",
          "Open offices: 9/16\" grid, NRC 0.70+ fissured or smooth tile",
          "Conference rooms: fiberglass tile for speech privacy",
          "Restaurants: metal pan, wood-veneer, or baffle accents",
          "Warehouses & back-of-house: 15/16\" grid, scrubbable tile",
        ],
      },
      {
        heading: "Installation, code, and what a good crew does differently",
        paragraphs: [
          "A T-bar ceiling that gets installed level and stays level comes down to discipline at three points. First, the wall angle is laid out with a laser and shot into the studs, not eyeballed off the floor. Second, the main tees are hung off a level string line, with hanger wires plumb and tied with three full turns, not two. Third, the perimeter cuts are made with a sharp shears and a back-bevel so the tile drops in without binding.",
          "Seismic code in BC requires bracing every 12 feet in each direction for ceilings above a certain size, plus a 2\" perimeter clearance on two adjacent walls so the grid can move during an earthquake without ripping itself apart. We brace every commercial install to current ASCE 7 and BCBC requirements, which is invisible work that becomes very visible the first time the room shakes.",
        ],
      },
    ],
    faq: [
      {
        q: "Can T-bar ceilings be used in a residential home?",
        a: "Yes — and they're an excellent choice for basements, rec rooms, home gyms and home theaters. The serviceability, acoustic performance, and ease of integrating lighting make T-bar a smarter choice than drywall in any room sitting under plumbing or mechanical.",
      },
      {
        q: "How much ceiling height do I lose to a T-bar?",
        a: "Minimum 4\" below the lowest obstruction (duct, beam, sprinkler line). In a typical Vancouver basement we can usually hold the finished ceiling at 7'-6\" or better. We laser the deck before quoting so the height is locked in before any work starts.",
      },
      {
        q: "Are T-bar ceilings fire-rated?",
        a: "Yes, when installed as a tested assembly. Specific tile-and-grid combinations carry one-hour and two-hour ratings, which we use for corridor ceilings, demising-wall continuations, and any commercial application where the rated assembly is required by code.",
      },
      {
        q: "How fast can you install a typical office T-bar?",
        a: "A 5,000-square-foot office takes our crew about a week from layout to final tile, assuming the mechanical and electrical above the ceiling are sequenced and ready. We hand the ceiling off vacuumed, with a punch-list walk and any tile damage flagged for replacement.",
      },
    ],
  },

  "tenant-improvements-contractor-vancouver": {
    intro:
      "A Vancouver tenant improvement — a TI in the trade — is the build-out a commercial tenant does inside leased space to turn a base-building shell into an office, clinic, retail store, restaurant or showroom. TIs run on tight schedules because the tenant is usually paying rent on a space they can't occupy yet, and they run on tight budgets because TI allowances rarely cover everything a tenant actually wants. The walls, ceilings and framing scope sits in the critical path of every TI: nothing else finishes until the partitions are framed, the ceiling grid is up, and the drywall is taped and sanded. This guide explains how Rambo Walls & Ceilings runs the TI scope in Vancouver — permits, base-building coordination, demising walls, ceilings, and a turnover that keeps both the landlord and the tenant happy.",
    sections: [
      {
        heading: "What a tenant improvements contractor actually does",
        paragraphs: [
          "A TI contractor is the trades sub on the inside of a base-building lease. The landlord's base building provides a structural shell, demising walls between units, a serviced washroom (sometimes), a sprinkler grid, a main electrical service, and a rough HVAC distribution. Everything else — partitions, ceilings, finishes, lighting, casework, plumbing connections, low-voltage — is the tenant's responsibility, executed under their lease and (in most cases) their permit.",
          "Rambo Walls owns the walls-and-ceilings portion of that scope. We frame the partitions, hang the doors in our walls, install the suspended ceiling grid, board the bulkheads, tape to Level 4 or Level 5, and coordinate the holes for diffusers, sprinklers, lighting and security. We work directly under a GC or, on smaller TIs, as the lead trade reporting straight to the tenant or designer.",
        ],
      },
      {
        heading: "Permits, landlord approvals, and base-building rules",
        paragraphs: [
          "Every Vancouver TI needs a building permit. The drawings get reviewed by the City of Vancouver and by the building's landlord — usually their property manager and their building engineer of record. The landlord review almost always flags something the City review doesn't: a wall location that conflicts with future suite reconfiguration, a sprinkler relocation that triggers a hydraulic recalc, a partition that closes off an existing exit corridor.",
          "We've worked in enough buildings — from the Bentall complex downtown to industrial parks in Annacis Island — that we know what each landlord cares about. Some are obsessive about floor loading. Some won't let you penetrate a slab without an x-ray. Some require a building-engineer sign-off on every steel-stud connection to a column. Knowing those rules before you frame is the difference between a smooth job and a re-do.",
        ],
      },
      {
        heading: "Demising walls, partitions, and acoustic separations",
        paragraphs: [
          "Demising walls between leased suites are usually provided by the landlord — but \"provided\" often means a single layer of board on each side of unfinished framing. For an office tenant who wants speech privacy from the neighbour, we upgrade the demising wall by adding a layer of 5/8\" Type X plus mineral wool and (where the ceiling height allows) extending the wall slab-to-slab through the ceiling plenum.",
          "Interior partitions are spec'd by function. Open-office furniture systems need only a low partition with backing for a millwork ledge. Private offices need full-height walls with mineral wool insulation and an STC 45-50 assembly. Conference rooms get the same plus a sealed plenum return. Sensitive areas — HR offices, executive suites, medical exam rooms — get a fully insulated, double-board, sealed assembly that hits STC 55+.",
          "We routinely run partitions in 3-5/8\" 25-gauge steel for tenant office work, bumping to 20-gauge for any wall over 12 feet tall or any wall carrying heavy millwork. Bottom track is shot to the slab through acoustic tape; top track lands in a Fast-Top slip connector when the wall goes deck-to-deck so the structure can deflect without cracking the drywall.",
        ],
      },
      {
        heading: "Ceilings on a tenant improvement",
        paragraphs: [
          "Most TIs run a 2'×2' or 2'×4' T-bar ceiling on a 9/16\" narrow grid because it integrates cleanly with LED panel lighting, allows quick access to ductwork and sprinklers, and finishes faster than any alternative. Where the designer wants a featured ceiling — exposed in lobbies, drywall bulkheads over reception, wood slats over a conference table — we frame those out of light-gauge steel and finish them to Level 4 or Level 5 depending on the lighting.",
          "Sprinkler relocation is the single biggest schedule risk on a TI ceiling scope. The base-building sprinkler grid was designed for the empty shell; the moment you put partitions in, half the heads are in the wrong place. We coordinate the sprinkler shop early — usually before framing — so the relocations are drawn, permitted, and scheduled into the same week as the grid install.",
        ],
        list: [
          "Frame partitions, board both sides, tape to Level 4",
          "Hang doors and HM frames in our walls",
          "Install suspended ceiling grid and tile",
          "Frame drywall ceilings, bulkheads and feature walls",
          "Coordinate openings for HVAC, sprinkler, lighting and security",
          "Final clean and punch-walk with the GC and designer",
        ],
      },
      {
        heading: "Schedule, turnover, and keeping the landlord happy",
        paragraphs: [
          "A typical 5,000-square-foot office TI in Vancouver runs 8-10 weeks from demolition to keys. The walls-and-ceilings scope occupies weeks two through six, and we live in the critical path the entire time. We staff the job with a foreman who's on site every day, a crew that doesn't change, and a project coordinator who attends every weekly site meeting.",
          "Turnover is where landlords either love or hate a TI contractor. We hand back common-area protection in better condition than we found it, vacuum the corridor on the elevator floor every night, and complete a punch-list walk with the GC before we demobilize. The strata or property manager gets a closeout package with photos of every fire-stopped penetration, every backing location and every concealed condition. That package is what gets us invited back to do the next TI in the same building.",
        ],
      },
    ],
    faq: [
      {
        q: "What's typically included in a Vancouver tenant improvement allowance?",
        a: "A TI allowance is a per-square-foot dollar amount the landlord credits to the tenant to fund the build-out. It usually covers partitions, ceilings, doors and basic finishes. It rarely covers branded interiors, premium millwork or technology infrastructure — those are paid by the tenant directly.",
      },
      {
        q: "Do I need to use the landlord's preferred contractor?",
        a: "Some Vancouver buildings have a contractor approval list, but most allow open bidding as long as the contractor carries the required insurance, WCB clearance, and base-building familiarity. Rambo Walls is set up to work in any commercial building in the Lower Mainland.",
      },
      {
        q: "Can you work after hours to keep occupied businesses operating?",
        a: "Yes. On occupied-suite renovations, occupied retail, and any TI where the tenant next door can't tolerate daytime noise, we run evening and weekend crews. We coordinate elevator bookings and security access with the property manager in advance.",
      },
      {
        q: "How early should I bring in a walls-and-ceilings contractor on a TI?",
        a: "As early as the floor plan is sketched. The framing, ceiling height, and acoustic strategy all influence the design — and the trades that sit above the ceiling all influence the framing. Pricing during design development saves money and saves weeks during construction.",
      },
    ],
  },
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogContent(slug: string): BlogContent | undefined {
  return BLOG_CONTENT[slug];
}

export function getRelatedPosts(slug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
}

// Helper: re-export ReactNode to satisfy unused-import linters if extended later
export type _NodeT = ReactNode;
