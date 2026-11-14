import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ctaClass } from "@/components/ui/arrow";
import { LogoLockup } from "@/components/ui/logo";
import { cn } from "@/lib/cn";

// Next.js serves this for any address that doesn't exist, with a real HTTP 404 status
// (and keeps it out of search results).
export const metadata: Metadata = { title: "Page not found — TechTilde" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-ink text-paper">
      {/* Same faint grid as the home page hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(#202426 1px, transparent 1px), linear-gradient(90deg, #202426 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "-1px -1px",
        }}
      />

      <header className="tt-wrap relative flex h-18 w-full shrink-0 items-center">
        <Link href="/" aria-label="TechTilde home" className="flex items-center gap-3 text-white">
          <LogoLockup />
        </Link>
      </header>

      <div className="tt-wrap relative flex w-full flex-1 flex-col justify-center gap-7 py-16">
        <p className="font-mono text-[13px] tracking-[0.08em] text-soft">
          <span className="text-lime">~/techtilde $</span> cd this-page
        </p>
        <h1 className="font-heading text-[clamp(96px,22vw,280px)] leading-[0.9] font-bold tracking-[-0.05em] text-white">
          404<span className="text-lime">.</span>
        </h1>
        <div className="flex flex-col gap-3">
          <p className="font-heading text-[clamp(24px,3vw,36px)] leading-[1.15] font-semibold tracking-[-0.02em] text-white">
            This page doesn&apos;t exist.
          </p>
          <p className="max-w-[30rem] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-light">
            The address may be mistyped, or the page may have moved. The home page is a good place to start.
          </p>
          <p className="font-mono text-[13px] text-faint">bash: cd: this-page: No such file or directory</p>
        </div>
        <Link href="/" className={cn(ctaClass, "mt-2 min-h-[54px] gap-2.5 self-start px-[26px] text-[16px]")}>
          Back to home <Arrow />
        </Link>
      </div>
    </main>
  );
}
