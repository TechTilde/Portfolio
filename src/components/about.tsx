import { principles, team } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./ui/reveal";
import { SplitHeading } from "./ui/split-heading";
import { SectionLabel, sectionPad, twoCol } from "./ui/section-label";

const nbsp3 = "   ";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="bg-ink text-paper">
      <div className={cn("tt-wrap flex flex-col gap-[clamp(56px,7vw,104px)]", sectionPad)}>
        <div className={cn(twoCol, "items-start")}>
          <div className="flex flex-col gap-7">
            <SectionLabel n="03" dark>
              ABOUT US
            </SectionLabel>
            <SplitHeading
              id="about-h"
              className="font-heading text-[clamp(42px,6.4vw,92px)] leading-[0.98] font-bold tracking-[-0.04em] text-white"
            >
              Small Team.
              <br />
              Serious About <span className="text-lime">Craft.</span>
            </SplitHeading>
          </div>

          <div className="flex flex-col gap-8 pt-[clamp(0px,4vw,64px)]">
            <Reveal as="p" delay={0.1} className="text-[clamp(18px,1.5vw,20px)] leading-[1.65] text-light">
              TechTilde started with a shared passion for technology and building things that matter.
              We&apos;re a team of developers who believe great software comes from thoughtful engineering,
              clear communication, and genuine collaboration.
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[10px] border border-edge-2 bg-panel px-[22px] py-5 font-mono text-[14px] leading-[1.9] text-soft"
            >
              <Reveal kind="type" delay={0.3}>
                <span className="text-lime">~/techtilde $</span> <span className="text-paper">ls team/</span>
              </Reveal>
              <Reveal kind="type" delay={0.45}>
                {team.map((t) => `${t.file}.md`).join(nbsp3)}
              </Reveal>
              <Reveal kind="type" delay={0.6}>
                <span className="text-lime">~/techtilde $</span>{" "}
                <span className="text-paper">cat team/*.md</span>
              </Reveal>
              {team.map((t, i) => (
                <Reveal key={t.file} kind="type" delay={0.75 + i * 0.15}>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper underline decoration-edge-3 underline-offset-4 transition-colors duration-200 hover:text-lime hover:decoration-lime"
                  >
                    {t.name}
                  </a>{" "}
                  — {t.role}. {t.line}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal
          as="ol"
          kind="obs"
          className="tt-principles grid grid-cols-1 border-t border-edge-2 desk:grid-cols-3"
        >
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={0.05 + i * 0.08}
              className={cn(
                "flex flex-col gap-4 pt-10 pb-2",
                i < principles.length - 1 ? "pr-8" : "pr-0",
              )}
            >
              <span className="font-mono text-[13px] text-lime">→ {String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-white">
                {p.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-soft">{p.description}</p>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
