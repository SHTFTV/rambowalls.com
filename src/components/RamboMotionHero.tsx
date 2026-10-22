import { useEffect, useRef } from 'react';
import { SITE } from '../lib/site';

export const RAMBO_HERO_VIDEO='/brand-motion/rambo-project-hero.mp4';
const POSTER='/projects/mason-oct21/autodesk-floating-tbar.jpg';

function useVisibleVideo(paused:boolean) {
  const ref=useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    const video=ref.current;
    if(!video) return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting && !paused) void video.play().catch(()=>{});
      else video.pause();
    },{threshold:0.1});
    observer.observe(video);
    if(paused) video.pause();
    return ()=>observer.disconnect();
  },[paused]);
  return ref;
}

export function RamboMotionHero({paused,onToggle}:{paused:boolean;onToggle:()=>void}) {
  const videoRef=useVisibleVideo(paused);
  return <section className={`rambo-motion-hero ${paused?'motion-is-paused':''}`} aria-labelledby="rambo-hero-heading">
    <video ref={videoRef} className="rambo-hero-film" src={RAMBO_HERO_VIDEO} poster={POSTER} muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}/>
    <div className="rambo-hero-veil" aria-hidden="true"/>
    <div className="rambo-hero-inner">
      <div className="rambo-hero-layout">
        <div className="rambo-hero-copy">
          <p className="rambo-kicker">VANCOUVER · LOWER MAINLAND · BC</p>
          <h1 id="rambo-hero-heading">THE DETAIL<br/>MAKES THE <span>DIFFERENCE.</span></h1>
          <p className="rambo-hero-description">Walls. Ceilings. Steel stud framing. Real craft, from the first layout to the final finish.</p>
          <p className="rambo-hero-scope">Commercial interiors, tenant improvements, condo renovations and custom homes.</p>
          <div className="rambo-hero-actions"><a href="#contact" className="rambo-primary-action">Talk to Mason <span aria-hidden="true">↗</span></a><a href="/projects" className="rambo-secondary-action">Explore the work <span aria-hidden="true">→</span></a></div>
          <a className="rambo-hero-phone" href={SITE.phoneHref}>{SITE.phone}</a>
        </div>
        <div className="rambo-brand-scene">
          <div className="rambo-logo-turn" role="img" aria-label="Rambo's enlarged orange R badge turns to reveal the branded safety-vest back">
            <div className="rambo-logo-face rambo-logo-front"><img src="/brand-motion/rambo-r-badge.webp" width="2048" height="2048" alt=""/></div>
            <div className="rambo-logo-face rambo-logo-back"><img src="/brand-motion/rambo-vest-back.webp" width="2048" height="2048" alt=""/></div>
          </div>
          <p>THE NAME BEHIND THE WORK.</p>
        </div>
      </div>
      <div className="rambo-hero-bottom"><p>Project photographs: Mason McKenzie / Rambo. Ken Burns photo-motion montage. Logo and vest artwork: owner-supplied AI concepts.</p><button type="button" onClick={onToggle} aria-pressed={paused}>{paused?'▶ Play motion':'Ⅱ Pause motion'}</button></div>
    </div>
  </section>;
}

export function RamboSceneIntro({paused,onToggle,title,eyebrow,description,href,linkText,poster}:{paused:boolean;onToggle:()=>void;title:string;eyebrow:string;description:string;href:string;linkText:string;poster:string}) {
  const ref=useVisibleVideo(paused);
  return <section className="rambo-scene-intro" aria-label={title}>
    <div className="rambo-scene-media"><video ref={ref} src={RAMBO_HERO_VIDEO} poster={poster} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}/><p>Rambo project photo-motion montage</p><button type="button" className="rambo-scene-pause" onClick={onToggle} aria-pressed={paused}>{paused?"▶ Play motion":"Ⅱ Pause motion"}</button></div>
    <div className="rambo-scene-copy"><p className="rambo-kicker">{eyebrow}</p><h2>{title}</h2><p>{description}</p><a href={href}>{linkText} <span aria-hidden="true">↗</span></a></div>
  </section>;
}
