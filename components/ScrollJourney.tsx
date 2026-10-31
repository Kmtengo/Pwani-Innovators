"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type Stop = { element: HTMLElement; top: number; bottom: number; node: SVGCircleElement };

/** Round the corners of an orthogonal circuit without crossing its content. */
function circuitPath(points: Point[]) {
  let d = `M${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const previous = points[i - 1];
    const current = points[i];
    const next = points[i + 1];
    const incoming = Math.hypot(current.x - previous.x, current.y - previous.y);
    const outgoing = Math.hypot(next.x - current.x, next.y - current.y);
    if (!incoming || !outgoing) continue;
    const radius = Math.min(24, incoming / 2, outgoing / 2);
    const before = {
      x: current.x + (previous.x - current.x) * radius / incoming,
      y: current.y + (previous.y - current.y) * radius / incoming,
    };
    const after = {
      x: current.x + (next.x - current.x) * radius / outgoing,
      y: current.y + (next.y - current.y) * radius / outgoing,
    };
    d += `L${before.x} ${before.y}Q${current.x} ${current.y} ${after.x} ${after.y}`;
  }
  const last = points[points.length - 1];
  return `${d}L${last.x} ${last.y}`;
}

/** Native scrolling drives one continuous circuit and its content highlights. */
export default function ScrollJourney() {
  const layer = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = layer.current;
    const main = svg?.parentElement;
    if (!svg || !main) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const ns = "http://www.w3.org/2000/svg";
    let frame = 0;
    let rebuild = true;
    let mainTop = 0;
    let stops: Stop[] = [];
    let path: SVGPathElement;
    let dot: SVGCircleElement;
    let halo: SVGCircleElement;
    let length = 0;
    let samples: { timeline: number; distance: number }[] = [];
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const make = <K extends keyof SVGElementTagNameMap>(tag: K, attributes: Record<string, string>) => {
      const el = document.createElementNS(ns, tag);
      Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
      svg.appendChild(el);
      return el;
    };
    // Offset coordinates ignore section reveal transforms, which must not bend the route.
    const bounds = (element: HTMLElement) => {
      let x = 0;
      let y = 0;
      let current: HTMLElement | null = element;
      while (current && current !== main) {
        x += current.offsetLeft;
        y += current.offsetTop;
        current = current.offsetParent as HTMLElement | null;
      }
      return { x, y, width: element.offsetWidth, height: element.offsetHeight };
    };
    const measure = () => {
      stops.forEach(({ element }) => element.classList.remove("journey-active"));
      svg.replaceChildren();
      mainTop = main.getBoundingClientRect().top + scrollY;
      const width = main.clientWidth;
      const height = main.offsetHeight;
      const small = width < 900;
      const left = small ? 9 : Math.max(18, (width - 1256) / 2 + 20);
      const right = width - left;
      const hero = main.querySelector<HTMLElement>(".hero");
      const start = hero ? hero.offsetTop + hero.offsetHeight : 0;
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      const points: Point[] = [{ x: left, y: start }];
      const measured = Array.from(main.querySelectorAll<HTMLElement>("[data-journey]")).map((element) => ({ element, ...bounds(element) }));
      let previousX = left;
      let previousY = start;
      measured.forEach((target) => {
        // Narrow screens keep the line in the margin, with the same content stops.
        const x = small ? left : Math.max(left, Math.min(right,
          target.element.dataset.journey === "right" ? target.x + target.width + 16 : target.x - 16));
        const entry = Math.max(previousY + 8, target.y - 24);
        const exit = Math.max(entry + 8, target.y + target.height + 24);
        const gutter = previousX > width / 2 ? right : left;
        const departure = Math.min(entry, previousY + 20);
        points.push(
          { x: previousX, y: departure },
          { x: gutter, y: departure },
          { x: gutter, y: entry },
          { x, y: entry },
          { x, y: exit },
        );
        previousX = x;
        previousY = exit;
      });
      // Close the circuit at the lower-left edge of the final contact invitation.
      const finish = Math.max(previousY + 20, height - 12);
      points.push({ x: previousX, y: finish - 8 }, { x: left, y: finish - 8 }, { x: left, y: finish });
      points.forEach((point) => { point.y = Math.min(height - 10, point.y); });
      const unique = points.filter((point, i) => !i || point.x !== points[i - 1].x || point.y !== points[i - 1].y);
      const d = circuitPath(unique);
      make("path", { d, class: "journey-companion", transform: "translate(-5 0)" });
      make("path", { d, class: "journey-track" });
      path = make("path", { d, class: "journey-ink" });
      length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      make("circle", { cx: `${left}`, cy: `${start}`, r: "4", class: "journey-node" });
      stops = measured.map((target) => {
        const x = small ? left : Math.max(left, Math.min(right,
          target.element.dataset.journey === "right" ? target.x + target.width + 16 : target.x - 16));
        const top = target.y;
        const bottom = target.y + target.height;
        const node = make("circle", { cx: `${x}`, cy: `${top + Math.min(30, target.height / 2)}`, r: small ? "3" : "5", class: "journey-node" });
        return { element: target.element, top, bottom, node };
      });
      make("circle", { cx: `${left}`, cy: `${height - 10}`, r: "5", class: "journey-node journey-terminal" });
      halo = make("circle", { r: "13", class: "journey-halo", opacity: "0" });
      dot = make("circle", { r: small ? "3.5" : "5", class: "journey-signal", opacity: "0" });
      // Blend height and travelled distance so horizontal turns take scroll time.
      // Sample only on layout changes to keep scrolling free of layout reads.
      const count = Math.ceil(length / 8);
      samples = Array.from({ length: count + 1 }, (_, i) => {
        const distance = length * i / count;
        const point = path.getPointAtLength(distance);
        return { distance, timeline: point.y * .82 + (start + (height - 10 - start) * i / count) * .18 };
      });
      rebuild = false;
    };
    const update = () => {
      frame = 0;
      if (rebuild) measure();
      const reduced = media.matches;
      const cursor = scrollY - mainTop + innerHeight * .66;
      let low = 0;
      let high = samples.length - 1;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (samples[mid].timeline < cursor) low = mid + 1;
        else high = mid;
      }
      const before = samples[Math.max(0, low - 1)];
      const after = samples[low];
      const fraction = clamp((cursor - before.timeline) / (after.timeline - before.timeline || 1));
      const distance = reduced ? length : before.distance + (after.distance - before.distance) * fraction;
      path.style.strokeDashoffset = `${length - distance}`;
      const point = path.getPointAtLength(distance);
      const active = !reduced && distance > 0 && distance < length;
      [dot, halo].forEach((el) => {
        el.setAttribute("opacity", active ? "1" : "0");
        el.setAttribute("cx", `${point.x}`);
        el.setAttribute("cy", `${point.y}`);
      });
      stops.forEach(({ element, top, bottom, node }) => {
        const lit = !reduced && active && point.y >= top - 12 && point.y <= bottom + 24;
        element.classList.toggle("journey-active", lit);
        node.classList.toggle("is-active", lit);
      });
      main.style.setProperty("--hero-drift", `${reduced ? 0 : Math.min(scrollY, innerHeight) * .045}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => { rebuild = true; schedule(); };
    const resize = new ResizeObserver(onResize);
    resize.observe(main);
    Array.from(main.children).filter((el) => el.tagName === "SECTION").forEach((el) => resize.observe(el));
    // Keyed tab panels can be replaced without changing the section's height.
    const mutations = new MutationObserver((records) => {
      const changedStop = records.some((record) => !svg.contains(record.target) &&
        [...record.addedNodes, ...record.removedNodes].some((node) =>
          node instanceof HTMLElement && (node.matches("[data-journey]") || node.querySelector("[data-journey]"))));
      if (changedStop) onResize();
    });
    mutations.observe(main, { childList: true, subtree: true });
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", onResize);
    media.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      mutations.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", onResize);
      media.removeEventListener("change", schedule);
      stops.forEach(({ element }) => element.classList.remove("journey-active"));
      main.style.removeProperty("--hero-drift");
    };
  }, []);
  return <svg ref={layer} className="scroll-journey" aria-hidden="true" focusable="false" />;
}
