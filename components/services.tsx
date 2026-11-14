import { services } from "@/lib/content";
import { Reveal } from "./ui/reveal";
import { SplitHeading } from "./ui/split-heading";
import { SectionLabel, h2Light, sectionPad, twoCol } from "./ui/section-label";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="services" aria-labelledby="svc-h" className="bg-paper text-ink">
      <div className={cn("tt-wrap", sectionPad)}>
        <div className={cn(twoCol, "mb-[clamp(48px,6vw,88px)] items-end")}>
          <div className="flex flex-col gap-7">
            <SectionLabel n="01">WHAT WE DO</SectionLabel>
            <SplitHeading id="svc-h" className={h2Light}>
              Digital solutions.
              <br />
              Built with intention.
            </SplitHeading>
          </div>
          <Reveal as="p" delay={0.35} className="max-w-[30rem] pb-2 text-[19px] leading-[1.6] text-body">
            We turn your ideas and business needs into carefully designed, reliable digital products.
          </Reveal>
        </div>

        <ol className="border-b border-rule">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 0.08}
              className="tt-svc group relative grid grid-cols-[44px_minmax(0,1fr)] items-center gap-x-3 gap-y-2.5 border-t border-rule py-7 transition-colors duration-[250ms] hover:bg-[#EFEEE7] tab:grid-cols-[88px_minmax(0,1.1fr)_minmax(0,1.3fr)_56px] tab:gap-8 tab:py-10"
            >
              <span className="font-mono text-[14px] text-mute transition-colors duration-[250ms] group-hover:text-lime-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-[clamp(24px,2.6vw,34px)] leading-[1.15] font-semibold tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="col-start-2 text-[17px] leading-[1.6] text-body tab:col-auto">{s.description}</p>
              <span
                aria-hidden="true"
                className="hidden justify-self-end text-[24px] text-[#9A9F99] transition-[translate,color] duration-[250ms] group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-ink tab:block"
              >
                ↗
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
