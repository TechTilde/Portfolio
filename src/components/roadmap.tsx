"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/lib/content";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/use-in-view";

const ROAD =
  "M60 168 C95 108 128 80 162 80 C198 80 222 112 246 140 C272 172 300 196 338 196 C378 196 412 168 452 98";

/** x positions of the four step dots on the road (matches ROAD) */
const dots = [
  { cx: 60, cy: 168 },
  { cx: 162, cy: 80 },
  { cx: 338, cy: 196 },
  { cx: 452, cy: 98 },
];

const waves = {
  down: "M8 0 C8 50 40 50 40 100",
  up: "M40 0 C40 50 8 50 8 100",
};

type StepProps = {
  index: number;
  step: (typeof steps)[number];
  onHover: (index: number | null) => void;
};

function Step({ index, step, onHover }: StepProps) {
  // Needed for the phone layout, where each step animates as it scrolls into view.
  const { ref, seen } = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={cn("tt-step group", index % 2 === 0 ? "tt-lo" : "tt-hi", seen && "is-in")}
    >
      {step.wave && (
        <svg className="tt-wave tt-wave-v" viewBox="0 0 48 100" preserveAspectRatio="none" aria-hidden="true">
          <path pathLength="1" d={waves[step.wave]} />
        </svg>
      )}
      <span className="tt-step-dot" aria-hidden="true" />
      <p className="mb-3.5 font-mono text-[13px] text-mute">{String(index + 1).padStart(2, "0")} —</p>
      <h3 className="mb-3 font-heading text-[26px] leading-[1.15] font-semibold tracking-[-0.02em] transition-colors duration-[250ms] group-hover:text-lime-deep">
        {step.title}
      </h3>
      <p className="text-[16px] leading-[1.6] text-body">{step.description}</p>
    </li>
  );
}

/** The tilde "road" with four milestones. On wide screens the tilde draws itself; on phones the steps stack. */
export function Roadmap() {
  const { ref, seen } = useInView<HTMLDivElement>();
  const [done, setDone] = useState(false);
  const [hot, setHot] = useState<number | null>(null);

  // After the draw-in finishes, the dots start pulsing rings and a dot runs along the road.
  const doneTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    if (!seen) return;
    doneTimer.current = setTimeout(() => setDone(true), 2900);
    return () => clearTimeout(doneTimer.current);
  }, [seen]);

  return (
    <div ref={ref} className={cn("tt-roadwrap", seen && "is-on", done && "is-done")}>
      <svg className="tt-road" viewBox="-8.86 62 529.73 165" aria-hidden="true">
        <g fill="none" stroke="#C9CBC2" strokeWidth="1" strokeDasharray="3 5">
          {[
            { x: 60, y1: 168, c: "g1" },
            { x: 162, y1: 80, c: "g2" },
            { x: 338, y1: 196, c: "g3" },
            { x: 452, y1: 98, c: "g4" },
          ].map((g) => (
            <line
              key={g.c}
              className={`tt-road-guide ${g.c}`}
              x1={g.x}
              y1={g.y1}
              x2={g.x}
              y2="227"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
        <path className="tt-road-track" d={ROAD} fill="none" stroke="#E6E6DF" strokeWidth="18" strokeLinecap="round" />
        <path
          className="tt-road-path"
          pathLength="1"
          d={ROAD}
          fill="none"
          stroke="#85CC10"
          strokeWidth="18"
          strokeLinecap="round"
        />
        {dots.map((d, i) => (
          <circle
            key={`ring-${i}`}
            className={`tt-road-ring r${i + 1}`}
            cx={d.cx}
            cy={d.cy}
            r="3.6"
            fill="none"
            stroke="#4D7A08"
            strokeWidth="1"
          />
        ))}
        <circle className="tt-road-runner" r="2.4" fill="#151719">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            path={ROAD}
          />
        </circle>
        {dots.map((d, i) => (
          <circle
            key={`dot-${i}`}
            className={cn("tt-road-dot", `d${i + 1}`, hot === i && "is-hot")}
            cx={d.cx}
            cy={d.cy}
            r="3.6"
            fill="#151719"
          />
        ))}
      </svg>
      <ol className="tt-steps">
        {steps.map((s, i) => (
          <Step key={s.title} index={i} step={s} onHover={setHot} />
        ))}
      </ol>
    </div>
  );
}
