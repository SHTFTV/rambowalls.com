import type { ReactNode } from "react";
import { BLOG_POSTS, type BlogPost } from "./site";

export type BlogContent = {
  intro: string;
  sources?: { label: string; href: string }[];
  gallery?: {src:string;alt:string;caption:string}[];
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
};

export const BLOG_CONTENT: Record<string, BlogContent> = {
"vancouver-commercial-tbar-grid-before-panels":{"intro": "A finished ceiling is only one view of a commercial interior. This project archive photograph, supplied by Mason McKenzie and identified as a commercial T-bar ceiling in Vancouver, shows the stage before the panels are in place. The open grid frames a dense overhead space of ductwork, piping and other services. It is a useful picture for anyone planning a tenant improvement: the visible finish needs to be considered alongside the work above it. This is an archive feature, not an announcement of a newly completed project. The client, installation date, product specification and performance results have not been confirmed.", "sections": [{"heading": "What the photograph shows", "paragraphs": ["The regular T-bar grid is visible across the room, with the overhead services still exposed. Several rectangular duct drops extend below the higher duct runs, and the surrounding walls help define the future ceiling area. These are observations from the photograph; they do not establish the final panel layout or which trade supplied each element.", "The value of this stage is that it makes the coordination questions easier to see. Where will a panel, light, diffuser or other ceiling element sit? Which locations need to remain accessible? What belongs in the ceiling installer’s package, and what is being completed by another trade? Those answers should come from the project drawings and the people responsible for the work."]}, {"heading": "Start an enquiry with the ceiling plan", "paragraphs": ["For a comparable commercial space, send Rambo the current drawings and location, along with photographs that show the existing overhead conditions. Identify the intended room use, the ceiling area and any parts of the design that are still being decided. A reflected ceiling plan and relevant sections give the team a clearer basis for discussing the package.", "If you have a selected grid, panel or perimeter detail, include the specification. If you do not, flag the selection as unresolved. Pricing a defined installation and discussing an unfinished design are different conversations; identifying the unknowns early helps the enquiry reach the right people."]}, {"heading": "Make the boundaries between trades clear", "paragraphs": ["An open-ceiling photograph does not tell us the contractual responsibilities. For your own project, identify who is responsible for each overhead service and who coordinates its position with the ceiling layout. Ask which information Rambo needs before proceeding with the agreed ceiling work.", "Keep changes visible. A moved fitting or revised ceiling detail should be reflected in the information used for pricing and coordination. The point is to make the scope understandable, rather than expect a photograph to answer questions that belong in the drawings, specification or project discussion."]}, {"heading": "Plan the visible finish and future access together", "paragraphs": ["Bring the desired appearance into the same conversation as the practical requirements. Discuss the module, panel edge, perimeter, transitions and any changes in level shown in the design. Identify the places where access above the ceiling is required and have the responsible project team confirm the arrangement.", "The photograph is not evidence of a particular acoustic result, fire rating or code approval. Where your project requires documented performance, include the applicable design requirements and product information in the enquiry. Rambo can then discuss the installation scope against the documents supplied, without relying on an assumed specification."]}, {"heading": "Bring your next Vancouver ceiling to Rambo", "paragraphs": ["Rambo Wall & Ceiling Limited handles commercial walls, ceilings and framing enquiries across Vancouver and the Lower Mainland. For a T-bar ceiling, send the team your drawings, project location, intended schedule and the scope you need priced. Explain whether the space is an existing interior or part of a wider tenant improvement.", "Explore the related T-bar installation story and the commercial ceiling gallery for more examples from the team’s archive. For a project-specific discussion, use the Rambo contact card on this page, call the office at 778-773-2790 or email rambowallceiling@gmail.com. The photograph starts the conversation; your own project information establishes the work to review."]}], "faq": [{"q": "Is this a newly completed Vancouver project?", "a": "No. This is a project archive photograph supplied by Mason McKenzie. The installation date and client have not been confirmed, and the image shows an open-grid stage rather than a finished panelled ceiling."}, {"q": "Can the photo establish the ceiling system or acoustic performance?", "a": "No. The photograph does not identify the complete product specification or a measured performance result. Provide the design and product documents for your own project."}, {"q": "What should I send for a commercial T-bar ceiling enquiry?", "a": "Send your location, current drawings, ceiling area and intended schedule, plus the selected grid and panel information if available. Identify unresolved details and any coordination or access questions."}]},
"tbar-ceilings-acoustic-spray-insulation-coordination":{"intro": "An acoustic ceiling is more useful when the work above it has been considered before the last panel goes in. If a designer proposes spray-applied acoustic treatment together with a suspended T-bar ceiling, Rambo’s installation package needs to connect with that plan: where the grid hangs, what the panel schedule says, how services remain accessible and when the overhead work can proceed. This is a coordination guide for Vancouver and Lower Mainland enquiries, not a claim that the pictured Rambo project includes a PSI installation or a tested combined acoustic system.", "gallery": [], "sections": [{"heading": "Agree the acoustic brief before pricing the finish", "paragraphs": ["Tell the team what is wrong with the existing room or what the new space needs to achieve. Is speech difficult to follow because the room is lively? Can conversations be heard through an adjoining office? Is equipment noise entering through a grille? These are different starting points. Record the room use, ceiling height and adjoining spaces, and have the design team establish any required performance criteria.", "A request for ‘good acoustics’ alone leaves too much interpretation in a tender. The installer needs a specified ceiling package and clearly identified unresolved design questions. A manufacturer’s product report can support a selection, but it is not a measurement of the whole finished room."]}, {"heading": "Show the ceiling and spray locations in section", "paragraphs": ["A reflected ceiling plan establishes the visible layout. A section helps explain the relationship to the structure, services, partitions and proposed upper treatment. Identify whether the T-bar ceiling is continuous, floating or partly open, and where the spray will remain exposed to room sound.", "Do not ask the trades to add separate absorption figures into a new combined rating. The designer needs to assess the actual arrangement. If the specification changes during pricing, issue that change to both the spray applicator and the ceiling installer so the two packages still describe the same design."]}, {"heading": "Define the ceiling package Rambo is pricing", "paragraphs": ["Confirm the selected grid and compatible panel, module, edge, finish, perimeter and suspension details. Identify changes in level, floating edges, bulkheads and transitions to other finishes. Add the reflected ceiling plan and relevant sections to the enquiry.", "The Autodesk office photograph shows Rambo’s floating painted T-bar ceiling with Axiom trim during installation. It is a useful example of why the visible perimeter and overhead zone need coordination. It does not identify the coating above as a particular acoustic spray or establish a room rating. Use it as a visual reference, then specify the actual assembly needed for your own building."]}, {"heading": "Set an order of work that keeps access practical", "paragraphs": ["The sequence should follow the selected products, site conditions and project requirements. Ask the team when substrate review, spray preparation, application, relevant inspections, suspension work and final panels are to occur. Identify who protects completed work and who repairs damage caused by later trades.", "Agree access routes, working heights, equipment, occupied-area restrictions and cleanup responsibilities before the schedule is fixed. Required drying or curing conditions come from the proposed material’s instructions, not a generic time allowance. Do not close the ceiling while a known above-ceiling issue is waiting for review."]}, {"heading": "Make service access part of the layout", "paragraphs": ["Lights, sprinklers, diffusers, speakers and equipment access share the ceiling plane. Their positions should be coordinated with the grid rather than left as field compromises. Ask the design team to confirm required supports, clearances and any assembly-specific details.", "Keep maintenance access realistic. A removable panel helps only if the equipment can actually be reached and the panel can be removed without disrupting adjacent work. Record the agreed access points in the handover information. Where a privacy requirement depends on the ceiling and plenum, later service changes should be reviewed against that design."]}, {"heading": "Use the correct evidence for the acoustic claim", "paragraphs": ["NRC is an absorption rating; CAC and STC address different transmission arrangements. Armstrong’s linked performance FAQ explains these terms. A high-NRC surface does not, by itself, demonstrate confidential speech privacy between rooms. Ask for the test or assessment that corresponds to the actual objective.", "The spray scope and the ceiling scope can contribute to a coordinated design, but neither business should promise an unsupported combined result. The relevant designer or acoustic consultant should resolve the target, assembly and verification requirements. Rambo’s quotation can then identify the installation it includes and the assumptions that still need confirmation."]}, {"heading": "Send one useful package to each business", "paragraphs": ["For Rambo’s suspended-ceiling enquiry, send the city, ceiling area and height, current drawings, panel and grid schedule, access restrictions and target programme. Include the spray-treatment information where it affects the ceiling work. Call 778-773-2790 or email rambowallceiling@gmail.com to discuss Rambo’s scope and availability.", "For a PSI spray enquiry, follow the WeSprayIt companion guide to the performing business’s direct contacts. ACUSTIQ’s companion article helps organise the acoustic-system questions. Keeping the contacts and scopes separate makes the quotation clearer without implying that either contractor has accepted the other’s work. Source information checked October 23, 2026."]}], "sources": [{"label": "WeSprayIt / PSI: acoustic spray insulation and T-bar ceilings", "href": "https://wesprayit.ca/guides/spray-insulation-tbar-ceilings-acoustic-performance"}, {"label": "ACUSTIQ: specify spray treatment, ceiling and sound path", "href": "https://www.acustiq.ca/insights/spray-insulation-suspended-ceiling-acoustic-design"}, {"label": "Rambo’s existing T-bar ceiling guide", "href": "https://www.rambowalls.com/blog/tbar-ceilings-residential-commercial-vancouver"}, {"label": "Autodesk: the original Rambo floating-ceiling project record", "href": "https://www.rambowalls.com/project/autodesk-floating-ceiling"}, {"label": "Armstrong: acoustic rating definitions", "href": "https://www.armstrongceilings.com/commercial/en/technical-downloads/ceiling-performance-faqs.html"}], "faq": [{"q": "Can acoustic spray and a T-bar ceiling be used in the same project?", "a": "They can form parts of a coordinated design, subject to the selected products and assembly. The designer should establish the intended performance, spray location, ceiling arrangement and relevant evidence before installation is priced."}, {"q": "Does the photograph prove a PSI and Rambo acoustic installation?", "a": "No. The photograph records Rambo’s Autodesk floating-ceiling work. It does not identify the visible coating, its installer or a measured acoustic result, and no PSI involvement is claimed."}, {"q": "Who quotes the suspended-ceiling installation?", "a": "Contact Rambo at 778-773-2790 or rambowallceiling@gmail.com with the current plans, selected system, city, area, access and schedule. The WeSprayIt companion guide provides PSI’s direct contacts for a separate spray enquiry."}]},
"commercial-ceiling-details-from-rambo-projects":{"intro":"Mason’s latest project photographs show several ways to give a commercial ceiling its own character. Floating T-bar defines an area with a finished perimeter. Cassette baffles create a repeated overhead pattern. Wood slats bring a strong direction to an interior. These are photographs of Rambo’s work, shared as examples to help start a project conversation.","gallery":[{"src":"/projects/mason-oct21/autodesk-floating-tbar.jpg","alt":"Floating painted T-bar ceiling at the Autodesk office in Vancouver.","caption":"Autodesk office, Vancouver: floating painted T-bar with perimeter trim. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."},{"src":"/projects/mason-oct21/bmo-lougheed-wood-ceiling.jpg","alt":"Custom wood slat ceiling at BMO Lougheed Mall.","caption":"BMO Lougheed Mall, Burnaby: custom wood slat ceiling installation. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}],"sections":[{"heading":"Floating T-bar: make the perimeter part of the plan","paragraphs":["At the Autodesk office in Vancouver, Mason identifies a custom painted floating T-bar installation with Axiom trim. The visible perimeter is part of the ceiling’s appearance, so it belongs in the design discussion from the start.","For a similar ceiling, provide the reflected ceiling plan, elevations and selected system. Confirm how lights, suspension points and adjoining finishes meet the edge before installation begins."]},{"heading":"Cassette baffles: look at the spacing","paragraphs":["The Teck Resources photographs from Bentall 5 in Vancouver show a custom cassette baffle installation. Repeated elements create a distinct pattern across the overhead space.","Bring the intended layout, ceiling height and product information to the quotation discussion. Coordinate lighting and services with the pattern. Product data and the project specification establish performance; the photographs show the appearance of the installation."]},{"heading":"Wood slats: carry the lines through the room","paragraphs":["Mason’s BMO Lougheed Mall photographs document a custom wood slat ceiling. His separate Government of Canada office photographs from Robson Street in Vancouver show another wood slat installation.","Direction, spacing and the transitions at walls affect how the ceiling reads from below. Confirm the specified finish and the way lights, sprinklers and access points fit into the layout with the design team."]},{"heading":"Send the details that help Rambo quote","paragraphs":["Share the site location, current drawings, approximate ceiling area and height, selected product, access conditions and intended schedule. Photos of the existing space help explain constraints.","Text 778-773-2790 or email rambowallceiling@gmail.com with your drawings and project details. Explore the individual project pages below for more photographs and the project collages."]}],"sources":[{"label":"Autodesk floating ceiling project","href":"https://www.rambowalls.com/project/autodesk-floating-ceiling"},{"label":"Teck cassette baffle project","href":"https://www.rambowalls.com/project/teck-cassette-baffles"},{"label":"BMO Lougheed wood ceiling project","href":"https://www.rambowalls.com/project/bmo-lougheed-wood-ceiling"},{"label":"Robson wood slat ceiling project","href":"https://www.rambowalls.com/project/robson-wood-slat-ceiling"}],"faq":[{"q":"Are these product catalogue images?","a":"No. Mason McKenzie supplied these photographs of Rambo Wall & Ceiling Limited’s project work. Confirm the current manufacturer, model and specification for your own project."},{"q":"How do I request a ceiling quote?","a":"Text 778-773-2790 or email rambowallceiling@gmail.com with your location, plans or photos, ceiling system and schedule."}]},
"metro-vancouver-tenant-improvements-walls-ceilings-planning":{"intro":"A landlord’s improvement allowance can help make a commercial move possible. The construction scope determines how far that contribution goes. For tenants comparing Metro Vancouver office spaces, the useful question is what must change before the business can operate comfortably. An existing fit-out may offer a starting point, but partitions, finishes and ceilings still need to suit the next occupant.","sections":[{"heading":"Start with what can stay","paragraphs":["Before planning demolition, review the existing layout with the project’s design and construction team.","Which rooms work? Which partitions must move? Can the ceiling grid remain? Where will new doors, lighting and building services affect the walls?","Reusing suitable elements may reduce work. Keeping unsuitable elements can create awkward layouts and expensive alterations later. Make the decision from the actual space and approved design."]},{"heading":"Define the wall and ceiling scope","paragraphs":["A useful quotation needs more than floor area and a desired completion date.","Identify partition locations, wall heights, door openings, finish expectations and ceiling systems. Have the design team confirm any required fire-resistance or acoustic performance.","For sound control, discuss the whole assembly. Doors, glazing, penetrations and adjoining construction matter alongside the wall itself. A material label alone does not establish the performance of a completed room."]},{"heading":"Coordinate before closing up","paragraphs":["Wall and ceiling work intersects with electrical, mechanical, sprinkler and other services.","Confirm where access is needed, which inspections must occur and when the area can be closed. Late changes above a finished ceiling or behind completed drywall can affect several trades.","For an occupied building, include delivery routes, protection, working hours, waste removal and building-management requirements in the discussion."]},{"heading":"Check the permit route","paragraphs":["Vancouver’s Tenant Improvement Program provides an expedited route for eligible minor office renovations in qualifying commercial buildings. It is not a blanket fast-track for every commercial alteration. Confirm eligibility with the project team and City.","A permit pathway helps organise approvals; it does not replace complete drawings, coordinated construction or required inspections."]},{"heading":"Bring Rambo a clear package","paragraphs":["Rambo Walls & Ceilings specialises in steel stud framing, drywall and suspended ceilings. Bring the current drawings, site photographs, specifications, access requirements and intended schedule so the relevant scope can be reviewed.","A useful allowance starts the conversation. A clear walls-and-ceilings package helps turn it into work that can be priced and coordinated."]}],"faq":[{"q":"Does Vancouver TIPs cover every commercial renovation?","a":"No. The City describes a dedicated route for eligible minor office renovations in qualifying commercial buildings. Confirm the building and proposed scope before relying on it."},{"q":"What should I send Rambo for a tenant-improvement quote?","a":"Send the current drawings, site location, wall and ceiling specifications, photographs, access requirements and intended schedule. Call 778-773-2790 or email rambowallceiling@gmail.com."}],"sources":[{"label":"City of Vancouver: Tenant Improvement Program (TIPs)","href":"https://vancouver.ca/home-property-development/tenant-improvement-program.aspx"}]},
"the-post-celebration-ceiling-panels":{"intro": "A ceiling can bring order to a busy interior without hiding every part of the building above it. At The Post, Rambo’s project photographs show a linear installation that Mason McKenzie identifies as 2 × 8-foot Celebration panels. The repeated white elements give the space a clear direction while lighting and services remain part of the overhead design.", "sections": [{"heading": "Start with the look you want", "paragraphs": ["The long panel lines draw the eye through the interior. For an owner planning a similar feature, a reflected ceiling plan and a few reference images help explain the intended spacing, direction and relationship to the walls. A ceiling finish should be selected together with the lighting, rather than treated as a final decorative purchase.", "Bring the actual product name and panel dimensions to your enquiry. Different ceiling systems can look similar in a photograph while requiring different supports, trims and installation details."]}, {"heading": "Plan what happens above the panels", "paragraphs": ["Ask how the design will accommodate lights, sprinklers, air distribution and future access. The project team needs room to install and maintain those items without losing the ceiling pattern you chose.", "The photograph illustrates the finished appearance in the area shown. It does not establish an acoustic rating, a fire rating or the specification for another building. Those requirements belong in your project documents."]}, {"heading": "Ask Rambo about your ceiling", "paragraphs": ["Send your ceiling area, location, drawings or photographs, and the panel system you are considering. Rambo can discuss the installation scope and the information needed for a project-specific quote."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": []},"popeyes-vancouver-restaurant-steel-stud-framing":{"intro": "The finished restaurant starts with the walls you cannot yet see. Mason McKenzie’s Popeyes Vancouver photograph shows exposed steel framing and overhead coordination during construction. It is a useful view for restaurant owners deciding how a new layout will become a workable interior.", "sections": [{"heading": "Get the layout right before closing the walls", "paragraphs": ["Dining areas, customer circulation, staff access and the service counter all compete for floor space. Review the plan at the framing stage so doorways, sight lines and circulation can be checked before the walls are boarded.", "A photograph cannot confirm a complete restaurant subcontract. The image featured here documents framing in progress; kitchen equipment, ventilation, plumbing and the full renovation are separate scopes to confirm with the project team."]}, {"heading": "Make the wall package clear", "paragraphs": ["Ask for a quote that identifies the wall types, heights, board layers, insulation where specified, and backing for items attached to the walls. Share the latest drawings rather than relying on a room count alone.", "Wall-mounted screens, shelves and joinery can need preparation before boarding. Identify those locations early and agree who is responsible for the supporting details."]}, {"heading": "Allow time for the next finishes", "paragraphs": ["Discuss how framing, service work, inspections where required and drywall will be sequenced. Your opening plan needs to allow for more than installing the studs.", "For a similar Vancouver interior, send Rambo the site location, current plans and your intended opening timeline. The team can review the framing and wall-work requirements with you."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": []},"downtown-thai-restaurant-wood-baffle-ceiling":{"intro": "A warm ceiling can change how a restaurant feels as soon as guests enter. Mason’s photographs of a downtown Thai restaurant show wood baffles being installed beneath a dark overhead space. The contrast makes the timber elements stand out and gives the room a more deliberate, welcoming character.", "sections": [{"heading": "Use the ceiling to define the room", "paragraphs": ["A baffle feature can mark a dining zone or draw attention along a room. Decide where you want that visual emphasis before choosing the number and direction of the elements.", "Bring samples or a clear finish reference when requesting pricing. Natural colour, grain, edge details and spacing all affect the result; the term “wood baffles” alone leaves too much open to interpretation."]}, {"heading": "Coordinate the feature with lights and services", "paragraphs": ["These construction photos show the baffles in relation to the surrounding overhead work. Light positions, ducts, sprinklers and maintenance access need to be considered alongside the feature layout.", "Ask who supplies the baffles, who provides the support details and what is included in installation. Any acoustic performance should come from the selected system’s documentation, not an assumption based on its appearance."]}, {"heading": "Create a useful restaurant-ceiling enquiry", "paragraphs": ["Share your location, approximate ceiling area, reflected ceiling plan, finish preference and intended work hours. If the restaurant is operating, mention access and protection requirements.", "Rambo’s photos record its installation contribution. The restaurant name, street address and general contractor were not supplied with this set, so the feature is presented without those additional project claims."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": [{"src": "/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-2.webp", "alt": "The baffle installation taking shape around overhead services.", "caption": "The baffle installation taking shape around overhead services. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}, {"src": "/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-3.webp", "alt": "Installation-stage view of the restaurant ceiling feature.", "caption": "Installation-stage view of the restaurant ceiling feature. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}]},"langley-tenant-improvement-steel-stud-framing":{"intro": "An open commercial unit becomes useful when the layout supports the people using it. These Rambo photographs, identified by Mason as a Langley tenant improvement, show steel stud partitions creating separate spaces beneath existing overhead services. It is the stage where your floor plan becomes tangible.", "sections": [{"heading": "Think about how you will use each room", "paragraphs": ["Before approving the layout, consider work areas, privacy, storage, door swings and movement through the space. A room that looks large enough on a plan may feel different once the framing is standing.", "Share your furniture and equipment requirements with the design team. Shelving, screens and wall-mounted items may need backing that is easier to coordinate while the cavities are still open."]}, {"heading": "Compare complete wall scopes", "paragraphs": ["A useful framing quote identifies wall heights, openings, backing and the wall assemblies shown in the drawings. Ask whether drywall, insulation and finishing are included or priced separately.", "The photographs show steel stud work, not a verified wall rating or a complete finished tenant improvement. Your approved documents determine the requirements for your own unit."]}, {"heading": "Keep the next stage moving", "paragraphs": ["Coordinate service installations and required inspections before boarding. Ask the GC and wall contractor how changes will be recorded and which areas can be released for the next trade.", "For a Langley quote, send Rambo your site address, current drawings, desired room uses and target schedule. Good starting information helps the team identify what needs to be included."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": [{"src": "/projects/matt-oct14/langley-tenant-improvement-steel-stud-framing-2.webp", "alt": "New wall framing before the next construction stage.", "caption": "New wall framing before the next construction stage. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}, {"src": "/projects/matt-oct14/langley-tenant-improvement-steel-stud-framing-3.webp", "alt": "A wider view of the steel stud partition work in Langley.", "caption": "A wider view of the steel stud partition work in Langley. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}]},"commercial-tbar-ceiling-installation":{"intro": "A suspended T-bar ceiling can give a commercial interior a consistent finish while allowing planned access above selected ceiling panels. Mason’s installation photographs show the grid being assembled in a business interior, before the ceiling is complete.", "sections": [{"heading": "Choose the ceiling as a system", "paragraphs": ["Tile size, grid appearance, border details and lighting affect how the room will look. Bring a reflected ceiling plan and the proposed tile specification when asking for a quote.", "A clean layout avoids awkward narrow cuts at edges and makes the pattern feel intentional. Discuss the visible perimeter as well as the main ceiling area."]}, {"heading": "Keep access and coordination in the plan", "paragraphs": ["Lights, air outlets and other ceiling components need agreed positions. Access needs should be reviewed before the grid layout is finalised, especially where equipment above the ceiling will need attention later.", "A suspended ceiling is not automatically a rated or acoustically suitable assembly. Ask the design team to identify any performance requirements and have the selected system checked against them."]}, {"heading": "What to send for pricing", "paragraphs": ["Provide the ceiling area, height, location, grid and tile selection, and whether work takes place in an occupied building. Mention removals, protection and disposal so the quote addresses the whole installation.", "The location and GC were not named in Mason’s T-bar email. The photos are featured as a commercial installation example without adding an unconfirmed city or project identity."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": [{"src": "/projects/matt-oct14/commercial-tbar-ceiling-installation-2.webp", "alt": "The wider interior while ceiling work is underway.", "caption": "The wider interior while ceiling work is underway. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}]},"curved-arch-steel-stud-framing":{"intro": "A curved opening gives an interior a softer, more distinctive shape. The final finish depends on the structure beneath it. Mason’s arch-framing photograph shows the curved metal work while it is still exposed, giving owners a useful look at the preparation behind a shaped interior feature.", "sections": [{"heading": "Agree on the shape first", "paragraphs": ["Bring dimensions, a drawing or a clear reference image to the discussion. The opening width, rise and relationship to the adjoining walls determine how an arch will feel in the room.", "Confirm the profile before boarding starts. Changing the curve after the receiving surfaces are installed can mean repeating work at several stages."]}, {"heading": "Include the finish in the conversation", "paragraphs": ["Ask how the curve will be boarded and how its edges will meet the adjacent surfaces. The framing, board selection and finishing approach need to suit the intended geometry.", "The photograph shows a construction detail rather than a complete assembly specification. It does not establish that the feature carries structural loads or has a particular rating."]}, {"heading": "Request a feature-specific quote", "paragraphs": ["Send Rambo the opening dimensions, site location, desired appearance and surrounding finishes. Include any drawing supplied by your designer.", "Mason identified this set as arch framing but did not supply a location or GC name. Those details are not added to the project description."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": []},"dp-world-suspended-ceiling-baffles":{"intro": "Repeating suspended elements can give a large interior a strong sense of rhythm. Mason identified this photo set as Rambo’s DP World baffle installation. The white linear elements sit below the overhead construction, with daylight and lighting helping define the finished appearance in the areas shown.", "sections": [{"heading": "Balance the pattern with the space", "paragraphs": ["Baffle direction and spacing affect what you see from each part of a room. Review the arrangement from entrances, work areas and glazing rather than looking only at the ceiling plan.", "The DP World photos show several viewpoints, making the relationship between the repeated elements and the wider interior easier to understand. Use similar viewpoints when discussing a ceiling proposal for your own premises."]}, {"heading": "Specify performance separately from appearance", "paragraphs": ["If sound control is a priority, ask for the selected product’s acoustic data and a project-specific design review. A photograph of baffles is not evidence of a particular acoustic result.", "The product model, acoustic test data and full contract scope were not included with this set. Rambo’s installation contribution and Mason’s project identification are the basis for this story."]}, {"heading": "Plan access before installation", "paragraphs": ["Coordinate lighting, services, suspension details and access needs while the layout can still be adjusted. Agree how the pattern will meet walls and other ceiling features.", "For a similar commercial ceiling, send Rambo your reflected ceiling plan, ceiling height, approximate area, selected system and site location. The team can review the installation requirements for your space."]}], "faq": [{"q": "Who supplied these project photographs?", "a": "Mason McKenzie of Rambo Wall & Ceiling Limited supplied the photographs and project description."}, {"q": "How do I ask Rambo about similar work?", "a": "Call 778-773-2790 or email rambowallceiling@gmail.com with your location, drawings or photos, and the work you need."}], "gallery": [{"src": "/projects/matt-oct14/dp-world-suspended-ceiling-baffles-2.webp", "alt": "A wider view of the baffle arrangement and surrounding space.", "caption": "A wider view of the baffle arrangement and surrounding space. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}, {"src": "/projects/matt-oct14/dp-world-suspended-ceiling-baffles-3.webp", "alt": "Baffle spacing around lighting and overhead services.", "caption": "Baffle spacing around lighting and overhead services. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited."}]},
"club-champion-steel-stud-framing-drywall-surrey": {
  "intro": "Rambo Wall & Ceiling Limited carried out framing and drywall at Club Champion in Semiahmoo Shopping Centre, Surrey, under general contractor White Knight Construction Ltd. The photographs show the interior walls during construction.",
  "sections": [
    {
      "heading": "Compare the whole finishing package",
      "paragraphs": [
        "Rambo’s original estimate included drywall on both sides of the walls, wall insulation and Level 4 finishing. For your own project, ask whether the quote includes insulation, taping, finishing, opening details and preparation for painting.",
        "Lighting and paint choice affect the finish you may need. Show your contractor any areas with large windows, strong side lighting or decorative finishes so expectations are clear."
      ]
    },
    {
      "heading": "Prepare for your own renovation",
      "paragraphs": [
        "Send your site address, drawings or photos, the rooms involved and your preferred schedule. Mention access restrictions and whether the business will be open during construction.",
        "Kudos to general contractor White Knight Construction and Rambo for their contributions to the Club Champion project. Follow the project link for more construction photographs and Rambo’s account."
      ]
    }
  ],
  "faq": [
    {
      "q": "What should I include in a renovation enquiry?",
      "a": "Send your site address, drawings or photos, the changes you want and your preferred timeline. Mention any access restrictions or occupied areas."
    }
  ]
},
"regus-mission-drywall-project": {
  "intro": "New partitions help organise offices, meeting rooms and customer areas. These photos show Rambo’s drywall work during construction at the Regus project, 31999 Lougheed Highway in Mission, along with framing and taping views from the site.",
  "sections": [
    {
      "heading": "Pay attention to windows and doorways",
      "paragraphs": [
        "Drywall work includes more than the large flat walls. The window-detail photograph shows board fitted beside glazing, where neat edges and transitions matter to the finished appearance.",
        "When asking for a quote, include window returns, door openings and areas where new walls meet existing surfaces. Ask whether trims, repairs and preparation for painting are included so you can compare estimates fairly."
      ]
    },
    {
      "heading": "Choose the finish for your space",
      "paragraphs": [
        "Discuss your paint choice and lighting with your contractor. Large windows and strong side lighting can make surface imperfections more noticeable, so agree on the intended finish before work begins.",
        "Ask how boarding, taping and drying time will fit the schedule. The photos show construction stages, rather than a finished office; they are useful examples of the work that happens before decorating."
      ]
    },
    {
      "heading": "Tell us what you want to change",
      "paragraphs": [
        "For your enquiry, send the property location, a few photos or drawings, the rooms involved and your preferred timeline. Mention any occupied areas so access and disruption can be discussed before work is priced."
      ]
    }
  ],
  "faq": [
    {
      "q": "What should I include in a renovation enquiry?",
      "a": "Send your site address, drawings or photos, the changes you want and your preferred timeline. Mention any access restrictions or occupied areas."
    }
  ]
},
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
