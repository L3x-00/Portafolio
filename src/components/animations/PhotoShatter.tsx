import { useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

const COLS = 7;
const ROWS = 10;
const JITTER = 2.8;

interface Tri { clip: string; cx: number; cy: number; }

function makeGrid(): Tri[] {
  const clamp = (v: number) => Math.max(0.1, Math.min(99.9, v));
  const j = () => (Math.random() - 0.5) * JITTER;

  const pts: [number, number][] = [];
  for (let r = 0; r <= ROWS; r++)
    for (let c = 0; c <= COLS; c++)
      pts.push([clamp(c / COLS * 100 + j()), clamp(r / ROWS * 100 + j())]);

  const at = (r: number, c: number) => pts[r * (COLS + 1) + c];
  const tris: Tri[] = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const [ax, ay] = at(r, c);
      const [bx, by] = at(r, c + 1);
      const [ex, ey] = at(r + 1, c);
      const [fx, fy] = at(r + 1, c + 1);

      tris.push({ clip: `polygon(${ax}% ${ay}%, ${bx}% ${by}%, ${ex}% ${ey}%)`, cx: (ax + bx + ex) / 3, cy: (ay + by + ey) / 3 });
      tris.push({ clip: `polygon(${bx}% ${by}%, ${fx}% ${fy}%, ${ex}% ${ey}%)`, cx: (bx + fx + ex) / 3, cy: (by + fy + ey) / 3 });
    }
  }
  return tris;
}

export default function PhotoShatter({
  imgFront,
  imgMid,
  imgBack,
}: {
  imgFront: string;
  imgMid: string;
  imgBack: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frontRefs = useRef<(HTMLDivElement | null)[]>([]);
  const midRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const phase = useRef(0); // 0: Ambas completas, 1: Front destruida, 2: Ambas destruidas
  const isHovering = useRef(false);
  const midTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tris = useMemo(makeGrid, []);

  const getEls = useCallback(
    (refs: React.MutableRefObject<(HTMLDivElement | null)[]>) =>
      refs.current
        .map((el, i) => (el ? { el, tri: tris[i] } : null))
        .filter((v): v is { el: HTMLDivElement; tri: Tri } => v !== null),
    [tris]
  );

  const scatterFront = useCallback(() => {
    if (phase.current !== 0) return;

    const pairs = getEls(frontRefs);
    const els = pairs.map(p => p.el);

    // Micro-shake
    gsap.to(wrapRef.current, {
      keyframes: [
        { x: -3, duration: 0.045 },
        { x: 4, duration: 0.045 },
        { x: -2, duration: 0.045 },
        { x: 0, duration: 0.045 },
      ],
    });

    // Explosión hacia afuera
    gsap.to(els, {
      duration: 0.72,
      ease: 'expo.in',
      stagger: { amount: 0.22, from: 'random' },
      x: (i: number) => {
        const { tri } = pairs[i];
        const dirX = (tri.cx - 50) / 50;
        return dirX * (190 + Math.random() * 260) + (Math.random() - 0.5) * 95;
      },
      y: (i: number) => {
        const { tri } = pairs[i];
        return 85 + tri.cy * 0.9 + Math.random() * 230;
      },
      rotation: () => (Math.random() - 0.5) * 215,
      scale: () => 0.5 + Math.random() * 0.45,
      opacity: 0,
      onComplete: () => {
        phase.current = 1;
        
        // Si sigue el mouse encima, programar la segunda fragmentación en 3s
        if (isHovering.current) {
          midTimer.current = setTimeout(() => {
            if (isHovering.current && phase.current === 1) {
              scatterMid();
            }
          }, 1500);
        }
      },
    });
  }, [getEls]);

  const scatterMid = useCallback(() => {
    if (phase.current !== 1) return;

    const pairs = getEls(midRefs);
    const els = pairs.map(p => p.el);

    // Implosión hacia el centro
    gsap.to(els, {
      duration: 0.65,
      ease: 'power4.in',
      stagger: { amount: 0.18, from: 'edges' },
      x: (i: number) => {
        const { tri } = pairs[i];
        const dirX = (tri.cx - 50) / 50;
        return -dirX * (80 + Math.random() * 120); // Hacia adentro
      },
      y: (i: number) => {
        const { tri } = pairs[i];
        const dirY = (tri.cy - 50) / 50;
        return -dirY * (80 + Math.random() * 120); // Hacia adentro
      },
      rotation: () => (Math.random() - 0.5) * 360,
      scale: 0,
      opacity: 0,
      onComplete: () => {
        phase.current = 2;
      },
    });
  }, [getEls]);

  const handleEnter = useCallback(() => {
    isHovering.current = true;
    if (phase.current === 0) {
      scatterFront();
    } else if (phase.current === 1) {
      // Si entras cuando la primera ya se había ido pero la segunda está esperando los 3s
      midTimer.current = setTimeout(() => {
        if (isHovering.current && phase.current === 1) scatterMid();
      }, 1500);
    }
  }, [scatterFront, scatterMid]);

    const handleLeave = useCallback(() => {
    isHovering.current = false;
    
    // Limpiar el timer si el usuario sale antes de los 2s
    if (midTimer.current) {
      clearTimeout(midTimer.current);
      midTimer.current = null;
    }

    // Reconstruir en cadena: Primero Alex 2, y al terminar, Alex 1
    if (phase.current === 2) {
      const midEls = getEls(midRefs).map(p => p.el);
      
      // FASE 1 DE RECONSTRUCCIÓN: Armar Alex 2 sobre Alex 3
      gsap.to(midEls, {
        duration: 0.65,
        ease: 'power3.out',
        stagger: { amount: 0.15, from: 'random' },
        x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
        onComplete: () => {
          phase.current = 1; // Ya estamos en Alex 2
          
          // FASE 2 DE RECONSTRUCCIÓN: Armar Alex 1 sobre Alex 2
          const frontEls = getEls(frontRefs).map(p => p.el);
          gsap.to(frontEls, {
            duration: 0.65,
            ease: 'power3.out',
            stagger: { amount: 0.15, from: 'random' },
            x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
            onComplete: () => {
              phase.current = 0; // Volvimos al estado original (Alex 1)
            },
          });
        },
      });
    } else if (phase.current === 1) {
      // Si el usuario sale rápido (solo se había roto Alex 1)
      const frontEls = getEls(frontRefs).map(p => p.el);
      gsap.to(frontEls, {
        duration: 0.65,
        ease: 'power3.out',
        stagger: { amount: 0.15, from: 'random' },
        x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
        onComplete: () => { phase.current = 0; },
      });
    }
  }, [getEls]);

  return (
    <>
      <div className="ps-outer">
        <div
          ref={wrapRef}
          className="ps-canvas"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onTouchStart={(e) => { e.preventDefault(); handleEnter(); }}
          onTouchEnd={handleLeave}
          role="img"
          aria-label="Foto de perfil interactiva"
        >
          {/* Capa 3: Base (Se ve al final) */}
          <img className="ps-back" src={imgBack} alt="Tercera foto de perfil" draggable={false} />

          {/* Capa 2: Medio (Animación de Implosión a los 3s) */}
          {tris.map((t, i) => (
            <div
              key={`mid-${i}`}
              ref={(el) => { midRefs.current[i] = el; }}
              className="ps-frag"
              style={{
                clipPath: t.clip,
                backgroundImage: `url(${imgMid})`,
              }}
            />
          ))}

          {/* Capa 1: Frontal (Animación de Explosión inmediata) */}
          {tris.map((t, i) => (
            <div
              key={`front-${i}`}
              ref={(el) => { frontRefs.current[i] = el; }}
              className="ps-frag"
              style={{
                clipPath: t.clip,
                backgroundImage: `url(${imgFront})`,
              }}
            />
          ))}

          <div className="ps-vignette" aria-hidden="true" />
          
          <div className="ps-hint" aria-hidden="true">
            <span>hover</span>
          </div>
        </div>
      </div>

      <style>{`
        .ps-outer {
          width: 100%;
          height: 100%;
          padding: 1.5px;
          border-radius: 22px;
          background: linear-gradient(145deg, rgba(0,240,255,0.38) 0%, rgba(191,0,255,0.24) 38%, rgba(0,240,255,0.12) 65%, rgba(191,0,255,0.32) 100%);
          transition: background 0.5s ease;
        }
        .ps-outer:hover {
          background: linear-gradient(145deg, rgba(0,240,255,0.62) 0%, rgba(191,0,255,0.46) 38%, rgba(0,240,255,0.24) 65%, rgba(191,0,255,0.58) 100%);
        }
        .ps-canvas {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          cursor: crosshair;
          background: #050505;
        }
        .ps-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          pointer-events: none;
          user-select: none;
        }
        .ps-frag {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center top;
          will-change: transform, opacity;
          pointer-events: none;
        }
        .ps-vignette {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          pointer-events: none;
          z-index: 10;
          background: radial-gradient(ellipse 88% 91% at 50% 43%, transparent 50%, rgba(5,5,5,0.17) 66%, rgba(5,5,5,0.52) 83%, rgba(5,5,5,0.88) 100%);
        }
        .ps-hint {
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.4s ease;
        }
        .ps-canvas:hover .ps-hint { opacity: 0; }
        .ps-hint span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,240,255,0.5);
          border: 1px solid rgba(0,240,255,0.2);
          padding: 0.25rem 0.7rem;
          border-radius: 100px;
          backdrop-filter: blur(4px);
        }
      `}</style>
    </>
  );
}