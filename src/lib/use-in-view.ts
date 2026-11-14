"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reports (once) when an element has scrolled into view.
 *
 * Only active when the visitor allows motion (the `tt-js` class on <html>, set by the
 * inline script in the root layout). Otherwise nothing is hidden, so there is nothing to reveal.
 *
 * `watchParent`: observe the element's parent instead of the element itself. Needed for the
 * typewriter lines, which start fully clipped and so never count as "visible" on their own.
 */
export function useInView<T extends HTMLElement>({ watchParent = false } = {}) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const target = watchParent ? el?.parentElement : el;
    if (!target || !document.documentElement.classList.contains("tt-js")) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 8% 0px" },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [watchParent]);

  return { ref, seen };
}
