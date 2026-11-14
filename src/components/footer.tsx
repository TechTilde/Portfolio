import type { CSSProperties } from "react";
import { TILDE_PATH } from "@/lib/content";
import { Reveal } from "./ui/reveal";
import { LogoLockup } from "./ui/logo";

const footLink = "py-1.5 text-[15px] text-light transition-colors duration-200 hover:text-white";
const colTitle = "mb-2.5 font-mono text-[12px] tracking-[0.1em] text-faint";

const navigate = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep text-soft">
      {/* Big faint tilde watermark that draws itself in */}
      <Reveal
        kind="obs"
        aria-hidden="true"
        className="absolute -right-[35%] -bottom-[4%] w-[130%] max-w-[760px] opacity-[0.09] tab:-right-[6%] tab:-bottom-[12%] tab:w-[56%] tab:opacity-[0.06]"
      >
        <svg viewBox="18 36 64 28" className="block h-auto w-full">
          <path className="tt-draw" style={{ "--d": "0.1s" } as CSSProperties} pathLength="1" d={TILDE_PATH} fill="none" stroke="#85CC10" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </Reveal>

      <div className="tt-wrap relative flex flex-col gap-[72px] pt-22 pb-10">
        <div className="grid grid-cols-1 gap-12 tab:grid-cols-2 desk:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <Reveal className="flex flex-col gap-5">
            <a href="#top" aria-label="TechTilde home" className="flex items-center gap-3 self-start">
              <LogoLockup />
            </a>
            <p className="max-w-[22rem] text-[15px] leading-[1.6]">
              A small team of developers building websites, web applications and custom software for businesses.
            </p>
          </Reveal>

          <Reveal as="nav" aria-label="Footer" delay={0.06} className="flex flex-col gap-1">
            <p className={colTitle}>NAVIGATE</p>
            {navigate.map((l) => (
              <a key={l.href} href={l.href} className={footLink}>
                {l.label}
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-1">
            <p className={colTitle}>CONTACT</p>
            <a href="mailto:hello@yourdomain.com" className={footLink}>
              hello@[yourdomain].com
            </a>
          </Reveal>

          <Reveal delay={0.18} className="flex flex-col gap-1">
            <p className={colTitle}>ELSEWHERE</p>
            <a href="#top" className={footLink}>
              GitHub ↗ <span className="font-mono text-[12px] text-faint">[link]</span>
            </a>
            <a href="#top" className={footLink}>
              LinkedIn ↗ <span className="font-mono text-[12px] text-faint">[link]</span>
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="flex flex-wrap justify-between gap-4 border-t border-edge pt-7 font-mono text-[13px]"
        >
          <span>
            <span className="text-lime">~</span>
            <span className="text-paper">/techtilde</span>
            <span aria-hidden="true" className="ml-1 inline-block h-3.5 w-2 animate-caret bg-lime align-[-2px]" />{" "}
            <span className="text-faint">— built with care.</span>
          </span>
          <span className="text-dim">© 2026 TechTilde. All rights reserved.</span>
        </Reveal>
      </div>
    </footer>
  );
}
