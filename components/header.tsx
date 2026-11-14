"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { navLinks, spyMap } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Arrow, ctaClass } from "./ui/arrow";
import { LogoLockup } from "./ui/logo";

/** Stagger for the mobile menu links (the CTA is last). */
const menuDelays = [0, 0.04, 0.08, 0.12, 0.16, 0.22];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("#top");
  const progressRef = useRef<HTMLSpanElement>(null);

  // Shadow once scrolled + reading-progress bar. The bar is updated through its ref so
  // scrolling doesn't re-render the component on every frame.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
      ticking = false;
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
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close the mobile menu when the viewport grows past the mobile layout.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // The nav link follows the section you're reading.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(spyMap[e.target.id]);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of Object.keys(spyMap)) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-20 border-b border-edge bg-[rgba(21,23,25,0.92)] backdrop-blur-[10px] backdrop-saturate-[1.4] transition-shadow duration-300",
        scrolled && "shadow-[0_10px_30px_rgba(0,0,0,0.28)]",
      )}
    >
      <div className="tt-wrap flex h-18 items-center justify-between gap-6">
        <a href="#top" aria-label="TechTilde home" className="flex items-center gap-3 text-white">
          <LogoLockup />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 text-[15px] font-medium desk:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className={cn(
                "relative p-3 transition-colors duration-[250ms] hover:text-white",
                "after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-lime after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.2,.7,.2,1)] aria-[current=page]:after:scale-x-100",
                current === l.href ? "text-white" : "text-navmute",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(ctaClass, "min-h-11 gap-2 px-5 text-[15px] max-desk:hidden")}
        >
          Let&apos;s Talk <Arrow />
        </a>

        <button
          type="button"
          id="tt-menu-btn"
          aria-expanded={open}
          aria-controls="tt-mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-edge-3 bg-transparent px-3.5 font-mono text-[13px] tracking-[0.08em] text-paper desk:hidden"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      <nav
        id="tt-mobile-menu"
        hidden={!open}
        aria-label="Mobile"
        className="tt-wrap flex max-h-[calc(100dvh-72px)] flex-col overflow-y-auto overscroll-contain border-t border-edge pt-2 pb-7 desk:hidden"
      >
        {navLinks.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ animationDelay: `${menuDelays[i]}s` } as CSSProperties}
            className="animate-menu-in border-b border-edge py-3 font-heading text-[32px] font-semibold tracking-[-0.02em] text-white"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{ animationDelay: `${menuDelays[5]}s` } as CSSProperties}
          className={cn(ctaClass, "mt-6 min-h-[52px] animate-menu-in justify-center gap-2 text-[16px]")}
        >
          Let&apos;s Talk <Arrow />
        </a>
      </nav>

      <span
        ref={progressRef}
        aria-hidden="true"
        style={{ transform: "scaleX(0)" }}
        className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 origin-left bg-lime"
      />
    </header>
  );
}
