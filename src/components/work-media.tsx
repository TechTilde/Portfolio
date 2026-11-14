import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Screenshots for the Work section. Each export renders the contents of a project's media frame;
 * the first child gets the hover-lift + parallax (see .tt-proj-media in globals.css).
 */

/** Thin browser title bar (three dots) above a screenshot. */
function WindowChrome() {
  return (
    <div className="flex h-6 items-center gap-1.5 border-b border-[#DEDED8] bg-[#EDEDEA] px-2.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-[7px] rounded-full bg-[#CFCFC9]" />
      ))}
    </div>
  );
}

/** The admin panel and the public site it manages, as two overlapping browser windows. */
export function PortfolioMedia() {
  return (
    <div className="relative aspect-[16/10]">
      <div className="absolute top-0 left-0 w-[84%] overflow-hidden rounded-t-lg bg-white shadow-[0_24px_48px_rgba(21,23,25,0.25)]">
        <WindowChrome />
        <Image
          src="/projects/portfolio-admin.webp"
          alt="Admin panel for a business website: sections with visibility toggles and drag to reorder"
          width={1440}
          height={900}
          sizes="(min-width: 961px) 40vw, 80vw"
          className="block h-auto w-full"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-[58%] translate-y-[16%] overflow-hidden rounded-t-lg bg-white shadow-[0_24px_48px_rgba(21,23,25,0.35)]">
        <WindowChrome />
        <Image
          src="/projects/portfolio-site.webp"
          alt="A business portfolio website managed from the admin panel: a featured projects section"
          width={1440}
          height={900}
          sizes="(min-width: 961px) 28vw, 55vw"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

const phones = [
  {
    src: "/projects/qr-menu-en.webp",
    alt: "QR menu in English with categories and offers",
    offset: "-mb-16",
  },
  {
    src: "/projects/qr-menu-cart.webp",
    alt: "Cart with quantities, total and an Order on WhatsApp button",
    offset: "-mb-8",
  },
  {
    src: "/projects/qr-menu-ar.webp",
    alt: "The same menu in Arabic, right-to-left",
    offset: "-mb-16",
  },
];

/** Three phone screens: English menu, cart, Arabic menu. The middle one sits a little higher. */
export function QrMenuMedia() {
  return (
    <div className="flex items-end justify-center gap-[clamp(10px,2.4vw,28px)]">
      {phones.map((p) => (
        <div
          key={p.src}
          className={cn(
            "w-[30%] max-w-[190px] overflow-hidden rounded-[22px] border-[5px] border-edge-3 bg-ink shadow-[0_24px_48px_rgba(0,0,0,0.4)]",
            p.offset,
          )}
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={540}
            height={1169}
            sizes="(min-width: 961px) 12vw, 28vw"
            className="block h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
