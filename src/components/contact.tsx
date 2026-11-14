import { cn } from "@/lib/cn";
import { Reveal } from "./ui/reveal";
import { SplitHeading } from "./ui/split-heading";
import { Arrow, ctaClass } from "./ui/arrow";
import { SectionLabel, sectionPad } from "./ui/section-label";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="border-b border-edge bg-ink text-paper">
      <div className={cn("tt-wrap", sectionPad)}>
        <div className="grid grid-cols-1 items-start gap-[clamp(40px,6vw,96px)] desk:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-8">
            <SectionLabel n="05" dark kind="rv" delay={0.1}>
              CONTACT
            </SectionLabel>
            <SplitHeading
              id="contact-h"
              className="font-heading text-[clamp(46px,7vw,104px)] leading-[0.96] font-bold tracking-[-0.045em] text-white"
            >
              Let&apos;s Make Something <span className="text-lime">Happen.</span>
            </SplitHeading>
            <Reveal
              as="p"
              delay={0.2}
              className="max-w-[30rem] text-[clamp(18px,1.5vw,20px)] leading-[1.6] text-light"
            >
              Have a project in mind? Tell us what you&apos;re building, and let&apos;s see how we can bring it to
              life.
            </Reveal>
            <Reveal
              as="a"
              href="mailto:hello@yourdomain.com"
              delay={0.3}
              className={cn(ctaClass, "min-h-[54px] gap-2.5 self-start px-[26px] text-[16px]")}
            >
              Let&apos;s Talk <Arrow />
            </Reveal>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
