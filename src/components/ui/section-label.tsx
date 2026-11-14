import { Reveal } from "./reveal";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  /** Section number, e.g. "01" */
  n: string;
  children: React.ReactNode;
  /** Use on dark sections. */
  dark?: boolean;
  kind?: "rv" | "type";
  delay?: number;
};

/** "01 / WHAT WE DO" — the small mono label above each section heading. */
export function SectionLabel({ n, children, dark = false, kind = "type", delay = 0 }: SectionLabelProps) {
  return (
    <Reveal
      as="p"
      kind={kind}
      delay={delay}
      className={cn(
        "font-mono text-[13px] font-medium tracking-[0.1em]",
        dark ? "text-soft" : "text-mute",
      )}
    >
      <span className={dark ? "text-lime" : "text-lime-deep"}>{n}</span> / {children}
    </Reveal>
  );
}

/** Vertical padding shared by every section. */
export const sectionPad = "pt-[clamp(88px,11vw,160px)] pb-[clamp(88px,11vw,160px)]";

/** Two-column intro row (heading left, blurb right) that stacks on narrower screens. */
export const twoCol =
  "grid grid-cols-1 gap-[clamp(24px,6vw,96px)] desk:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]";

/** Heading style used by the light sections. */
export const h2Light =
  "font-heading text-[clamp(38px,5.4vw,76px)] leading-none font-semibold tracking-[-0.035em]";
