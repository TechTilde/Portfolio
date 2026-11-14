"use client";

import { useEffect } from "react";

/**
 * Page-level motion with no markup of its own:
 *  - marks the page as loaded so the hero grid can fade in
 *  - parallax on elements tagged with data-parallax ("grid", "fig", "frame")
 *
 * Does nothing when the visitor prefers reduced motion (no `tt-js` class on <html>).
 */
export function PageEffects() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("tt-js")) return;

    const loaded = requestAnimationFrame(() => root.classList.add("tt-loaded"));

    const grid = document.querySelector<HTMLElement>('[data-parallax="grid"]');
    const fig = document.querySelector<HTMLElement>('[data-parallax="fig"]');
    const frames = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax="frame"]'))
      .map((media) => ({ media, inner: media.firstElementChild as HTMLElement | null }))
      .filter((f): f is { media: HTMLElement; inner: HTMLElement } => f.inner !== null);

    let ticking = false;
    let applied = false;

    const clear = () => {
      if (grid) grid.style.transform = "";
      if (fig) fig.style.translate = "";
      for (const f of frames) f.inner.style.transform = "";
    };

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (window.innerWidth > 960) {
        if (grid && y < window.innerHeight * 1.5) grid.style.transform = `translate3d(0,${y * 0.25}px,0)`;
        if (fig && y < window.innerHeight * 1.5) fig.style.translate = `0 ${-y * 0.06}px`;
        for (const f of frames) {
          const r = f.media.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) continue;
          const off = r.top + r.height / 2 - window.innerHeight / 2;
          f.inner.style.transform = `translate3d(0,${(off * -0.05).toFixed(1)}px,0)`;
        }
        applied = true;
      } else if (applied) {
        // Narrow layout: clear offsets left over from a wider window.
        clear();
        applied = false;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(loaded);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      clear();
    };
  }, []);

  return null;
}
