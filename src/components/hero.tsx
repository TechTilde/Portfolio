import type { CSSProperties } from "react";
import { Reveal } from "./ui/reveal";
import { SplitHeading } from "./ui/split-heading";
import { Arrow, ctaClass } from "./ui/arrow";
import { cn } from "@/lib/cn";

const vars = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

/** The four marked points on the FIG. 01 curve. Dots pop in left to right along it. */
const points = [
  { cx: 162, cy: 80 },
  { cx: 338, cy: 196 },
  { cx: 60, cy: 168 },
  { cx: 452, cy: 98 },
];
const popDelay = (cx: number) => 0.75 + ((cx - 60) / 392) * 0.9;

const labels = [
  { x: 170, y: 34, text: "PEAK 162, 80" },
  { x: 346, y: 234, text: "TROUGH 338, 196" },
  { x: 22, y: 196, text: "START" },
  { x: 462, y: 92, text: "END" },
];

const CURVE =
  "M60 168 C95 108 128 80 162 80 C198 80 222 112 246 140 C272 172 300 196 338 196 C378 196 412 168 452 98";

const commands = ["design --with-intent", "build --to-last", "ship"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-h" className="relative overflow-hidden border-b border-edge bg-ink">
      <div aria-hidden="true" data-parallax="grid" className="tt-hero-grid absolute inset-0 opacity-55" />

      <div className="tt-wrap relative flex flex-col gap-[clamp(48px,6vw,88px)] pt-[clamp(72px,10vw,140px)] pb-[clamp(64px,8vw,112px)]">
        <div className="flex flex-col gap-8">
          <Reveal
            kind="type"
            delay={0.05}
            className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[13px] tracking-[0.08em] text-soft"
          >
            <span className="text-lime">~/techtilde</span>
            <span aria-hidden="true" className="h-px w-8 bg-edge-3" />
            <span>BUILDING DIGITAL EXPERIENCES</span>
          </Reveal>
          <SplitHeading
            as="h1"
            id="hero-h"
            delay={0.1}
            className="max-w-[13ch] font-heading text-[clamp(46px,8.2vw,124px)] leading-[0.96] font-bold tracking-[-0.045em] text-white"
          >
            Good Ideas Deserve Great <span className="text-lime">Engineering.</span>
          </SplitHeading>
        </div>

        <div className="grid grid-cols-1 items-end gap-[clamp(40px,6vw,96px)] desk:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="flex flex-col gap-9 pb-2">
            <Reveal
              as="p"
              delay={0.4}
              className="max-w-[34rem] text-[clamp(18px,1.5vw,20px)] leading-[1.6] text-light"
            >
              We&apos;re TechTilde, a team of developers crafting thoughtful websites, powerful applications, and
              digital solutions that help businesses move forward.
            </Reveal>
            <div className="flex flex-wrap gap-3">
              <Reveal
                as="a"
                href="#contact"
                delay={0.5}
                className={cn(ctaClass, "min-h-[54px] gap-2.5 px-[26px] text-[16px]")}
              >
                Start a Project <Arrow />
              </Reveal>
              <Reveal
                as="a"
                href="#work"
                delay={0.6}
                className="inline-flex min-h-[54px] items-center rounded-lg border border-edge-3 px-[26px] text-[16px] font-medium text-[#E2E5E1] transition-colors duration-200 hover:border-lime hover:text-white"
              >
                Explore Our Work
              </Reveal>
            </div>
          </div>

          <Reveal
            as="figure"
            aria-hidden="true"
            data-parallax="fig"
            delay={0.55}
            className="relative rounded-xl border border-edge-2 bg-panel px-[22px] pt-5 pb-6 max-tab:[&_text]:text-[20px]"
          >
            <div className="flex justify-between border-b border-edge pb-3.5 font-mono text-[11px] tracking-[0.08em] text-dim">
              <span>FIG. 01 — THE TILDE</span>
              <span>v1.0.0</span>
            </div>
            <svg viewBox="0 0 560 260" className="mt-2 block h-auto w-full">
              <g stroke="#2A2F2C" strokeWidth="1">
                {[40, 160, 280, 400, 520].map((x) => (
                  <line key={x} x1={x} y1="20" x2={x} y2="240" />
                ))}
                {[70, 130, 190].map((y) => (
                  <line key={y} x1="20" y1={y} x2="540" y2={y} />
                ))}
              </g>
              <path
                className="tt-draw"
                style={vars(0.7)}
                pathLength="1"
                d={CURVE}
                fill="none"
                stroke="#85CC10"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <g
                className="tt-fade"
                style={vars(1.1)}
                fill="none"
                stroke="#5E655F"
                strokeWidth="1"
                strokeDasharray="3 4"
              >
                <line x1="162" y1="80" x2="162" y2="30" />
                <line x1="338" y1="196" x2="338" y2="236" />
              </g>
              {points.map((p) => (
                <circle
                  key={p.cx}
                  className="tt-pop"
                  style={vars(Number(popDelay(p.cx).toFixed(2)))}
                  cx={p.cx}
                  cy={p.cy}
                  r="4"
                  fill="#F6F5F0"
                />
              ))}
              <g className="font-mono" fontSize="11" fill="#8A918C" letterSpacing="0.5">
                {labels.map((l, i) => (
                  <text
                    key={l.text}
                    className="tt-fade"
                    style={vars(Number((1.2 + i * 0.06).toFixed(2)))}
                    x={l.x}
                    y={l.y}
                  >
                    {l.text}
                  </text>
                ))}
              </g>
            </svg>
            <div className="mt-2.5 flex flex-wrap gap-x-6 gap-y-2 border-t border-edge pt-3.5 font-mono text-[12px] text-soft">
              {commands.map((c, i) => (
                <Reveal as="span" kind="type" delay={1.3 + i * 0.15} key={c}>
                  <span className="text-lime">$</span> {c}
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
