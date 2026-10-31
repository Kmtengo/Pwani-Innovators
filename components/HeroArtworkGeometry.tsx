"use client";

import { useLayoutEffect, useRef } from "react";

/** Fit the photo to the shoreline as the responsive layout changes. */
export default function HeroArtworkGeometry() {
  const anchorRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const art = anchorRef.current?.parentElement;
    const hero = art?.closest(".hero");
    const photo = art?.querySelector<HTMLElement>(".hero-photo");
    const surface = art?.querySelector<HTMLElement>(".hero-photo-surface");
    const wave = hero?.querySelector<SVGPathElement>(".hero-shore-wave");
    const waveSvg = wave?.ownerSVGElement;
    if (!art || !hero || !photo || !surface || !wave || !waveSvg) return;

    let frame = 0;

    function fitShoreline() {
      const matrix = waveSvg!.getScreenCTM();
      if (!matrix) return;
      const inverse = matrix.inverse();
      const rect = photo!.getBoundingClientRect();
      const points: { x: number; y: number }[] = [];
      // Find the filled wave's upper edge at closely spaced photo columns.
      for (let i = 0; i <= 80; i++) {
        const x = rect.width * i / 80;
        const local = new DOMPoint(rect.left + x, rect.top).matrixTransform(inverse);
        let low = 0;
        let high = waveSvg!.viewBox.baseVal.height;
        for (let step = 0; step < 18; step++) {
          const y = (low + high) / 2;
          if (wave!.isPointInFill(new DOMPoint(local.x, y))) high = y;
          else low = y;
        }
        const edge = new DOMPoint(local.x, high).matrixTransform(matrix);
        points.push({ x, y: Math.max(0, edge.y - rect.top) });
      }
      surface!.style.height = `${Math.max(rect.height, ...points.map((point) => point.y))}px`;
      surface!.style.clipPath = `polygon(0px 0px, ${rect.width}px 0px, ${points.reverse().map(({ x, y }) => `${x}px ${y}px`).join(", ")})`;
    }

    const update = () => { frame = 0; fitShoreline(); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    [hero, art, photo].forEach((element) => observer.observe(element));
    addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      removeEventListener("resize", schedule);
      surface.style.removeProperty("height");
      surface.style.removeProperty("clip-path");
    };
  }, []);

  return <span ref={anchorRef} hidden aria-hidden="true" />;
}
