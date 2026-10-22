import { useEffect, useRef, useState } from 'react';

const projects = [
  ['UBC', 'Biomedical engineering · specialty ceilings', 'ubc-biomedical-ceilings', '/project-media/ubc-biomedical-ceilings-1.jpg'],
  ['BMO', 'Lougheed Mall · custom wood slat ceiling', 'bmo-lougheed-wood-ceiling', '/projects/mason-oct21/bmo-lougheed-wood-ceiling.jpg'],
  ['Popeyes', 'Vancouver · restaurant steel stud framing', 'popeyes-vancouver-framing', '/projects/matt-oct14/popeyes-vancouver-restaurant-steel-stud-framing-1.webp'],
  ['Microsoft', 'Suspended acoustic ceiling clouds', 'microsoft-acoustic-clouds', '/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg'],
  ['Autodesk', 'Vancouver · floating T-bar ceiling', 'autodesk-floating-ceiling', '/projects/mason-oct21/autodesk-floating-tbar.jpg'],
  ['Teck Resources', 'Bentall 5 · cassette baffle ceiling', 'teck-cassette-baffles', '/projects/mason-oct21/teck-cassette-baffles.jpg'],
  ['Amazon', 'Pitt Meadows · office T-bar ceiling', 'amazon-pitt-meadows-ceiling', '/project-media/amazon-pitt-meadows-ceiling-1.jpg'],
  ['Winners', 'North Vancouver · retail T-bar ceiling', 'winners-north-vancouver-ceiling', '/projects/mason-oct21/winners-north-vancouver-tbar.jpg'],
];

export function BrandProjects({ paused, onToggle }: { paused: boolean; onToggle: () => void }) {
  const track = useRef<HTMLDivElement>(null);
  const [interacting, setInteracting] = useState(false);
  useEffect(() => {
    const element = track.current;
    if (!element || paused || interacting) return;
    let frame = 0;
    let previous = 0;
    const tick = (time: number) => {
      if (previous && document.visibilityState === 'visible') {
        const end = element.scrollWidth - element.clientWidth;
        element.scrollLeft = element.scrollLeft >= end - 1 ? 0 : element.scrollLeft + Math.min(time - previous, 50) * 0.035;
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, interacting]);
  const move = (direction: number) => {
    track.current?.scrollBy({ left: direction * (track.current.clientWidth * 0.8), behavior: 'auto' });
  };
  return (
    <section id="brands" className="rambo-brands" aria-labelledby="brands-heading">
      <div className="rambo-brands-heading">
        <div>
          <p className="rambo-brands-eyebrow">FAMILIAR NAMES. REAL RAMBO WORK.</p>
          <h2 id="brands-heading">Brands we’ve worked with.</h2>
          <p>From university labs to bank branches and restaurant interiors. Explore the photos and the scope behind each name.</p>
        </div>
        <a href="/projects" className="rambo-brands-all">All projects ↗</a>
      </div>
      <div className="rambo-brands-controls">
        <span>PROJECT LOCATIONS &amp; ORGANISATIONS</span>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous brand projects">←</button>
          <button type="button" onClick={onToggle} aria-pressed={paused}>{paused ? 'Play motion' : 'Pause motion'}</button>
          <button type="button" onClick={() => move(1)} aria-label="Next brand projects">→</button>
        </div>
      </div>
      <div ref={track} className="rambo-brands-track" role="region" aria-label="Brand project gallery" tabIndex={0}
        onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
        onFocus={() => setInteracting(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}
        onTouchStart={() => setInteracting(true)}>
        {projects.map(([brand, scope, slug, image]) => (
          <a className="rambo-brand-card" href={`/project/${slug}`} key={slug}>
            <img src={image} alt="" loading="lazy" width="640" height="480" />
            <div className="rambo-brand-card-copy"><h3>{brand}</h3><p>{scope}</p><span>View project <span aria-hidden="true">↗</span></span></div>
          </a>
        ))}
      </div>
      <p className="rambo-brands-note">Selected Rambo project work at these locations. Each project page documents our scope and photography.</p>
    </section>
  );
}
