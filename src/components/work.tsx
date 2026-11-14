import { projects } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./ui/reveal";
import { SplitHeading } from "./ui/split-heading";
import { Arrow } from "./ui/arrow";
import { SectionLabel, h2Light, sectionPad, twoCol } from "./ui/section-label";
import { PortfolioMedia, QrMenuMedia } from "./work-media";

const media = {
  portfolio: {
    Component: PortfolioMedia,
    frame: "bg-rule p-[clamp(20px,3vw,40px)] pb-0",
  },
  qrMenu: {
    Component: QrMenuMedia,
    frame: "bg-panel-3 p-[clamp(28px,4vw,56px)] pb-0",
  },
};

/** Text blocks of a project animate in one after another, starting shortly after the media. */
const textDelay = (k: number) => 0.1 + k * 0.05;

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h" className="bg-sand text-ink">
      <div className={cn("tt-wrap flex flex-col gap-[clamp(64px,9vw,128px)]", sectionPad)}>
        <div className={cn(twoCol, "items-end")}>
          <div className="flex flex-col gap-7">
            <SectionLabel n="02">SELECTED WORK</SectionLabel>
            <SplitHeading id="work-h" className={h2Light}>
              Work that speaks
              <br />
              for itself.
            </SplitHeading>
          </div>
          <Reveal as="p" delay={0.15} className="max-w-[26rem] pb-2 text-[19px] leading-[1.6] text-body">
            A selection of recent projects, built end to end.
          </Reveal>
        </div>

        {projects.map((p, i) => {
          const { Component, frame } = media[p.media];
          return (
            <article
              key={p.name}
              className={cn(
                "grid grid-cols-1 items-center gap-[clamp(32px,5vw,80px)]",
                // The wide column always holds the media, including on the mirrored row.
                p.reverse
                  ? "desk:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]"
                  : "desk:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]",
              )}
            >
              <Reveal
                data-parallax="frame"
                className={cn("tt-proj-media overflow-hidden rounded-xl", frame, p.reverse && "desk:order-2")}
              >
                <Component />
              </Reveal>

              <div className="flex flex-col gap-5">
                <Reveal as="p" delay={textDelay(0)} className="font-mono text-[12px] tracking-[0.1em] text-mute">
                  {String(i + 1).padStart(2, "0")} — {p.kind}
                </Reveal>
                <Reveal
                  as="h3"
                  delay={textDelay(1)}
                  className="font-heading text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-semibold tracking-[-0.03em]"
                >
                  {p.name}
                </Reveal>
                <Reveal as="p" delay={textDelay(2)} className="text-[17px] leading-[1.6] text-body">
                  {p.description}
                </Reveal>
                <Reveal
                  as="ul"
                  delay={textDelay(3)}
                  aria-label="Technologies"
                  className="flex flex-wrap gap-2 font-mono text-[12px] text-edge-3"
                >
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-md border border-rule-2 px-2.5 py-1.5">
                      {t}
                    </li>
                  ))}
                </Reveal>
                {p.link && (
                  <Reveal
                    as="a"
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    delay={textDelay(4)}
                    className="group inline-flex min-h-11 items-center gap-2 self-start border-b border-ink text-[16px] font-medium text-ink transition-[gap,color] duration-200 hover:gap-3.5 hover:text-lime-deep"
                  >
                    {p.link.label} <Arrow />
                  </Reveal>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
