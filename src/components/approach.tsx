import { cn } from "@/lib/cn";
import { SplitHeading } from "./ui/split-heading";
import { SectionLabel, h2Light, sectionPad, twoCol } from "./ui/section-label";
import { Roadmap } from "./roadmap";

export function Approach() {
  return (
    <section id="approach" aria-labelledby="appr-h" className="bg-paper text-ink">
      <div className={cn("tt-wrap flex flex-col gap-[clamp(56px,7vw,96px)]", sectionPad)}>
        <div className={cn(twoCol, "items-end")}>
          <div className="flex flex-col gap-7">
            <SectionLabel n="04">OUR APPROACH</SectionLabel>
            <SplitHeading id="appr-h" className={h2Light}>
              A clear process.
              <br />
              Better results.
            </SplitHeading>
          </div>
          <span />
        </div>
        <Roadmap />
      </div>
    </section>
  );
}
