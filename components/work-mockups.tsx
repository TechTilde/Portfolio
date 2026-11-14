import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Decorative CSS "screenshots" for the placeholder projects. Each export renders the inner
 * contents of a project's media frame; the first child gets the hover-lift + parallax.
 * Replace these with real screenshots (next/image) when real projects are added.
 */

/** A flat placeholder bar/block. Pass size and colour utilities via className. */
function Bar({ className }: { className: string }) {
  return <div className={cn("rounded-[3px]", className)} />;
}

export function SiteMockup() {
  return (
    <div className="overflow-hidden rounded-t-lg bg-white shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
      <div className="flex h-8 items-center gap-1.5 border-b border-[#DEDED8] bg-[#EDEDEA] px-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-[9px] rounded-full bg-[#CFCFC9]" />
        ))}
        <span className="ml-3 h-[18px] flex-1 rounded bg-white pl-2 font-mono text-[10px] leading-[18px] text-dim">
          project-one.example
        </span>
      </div>
      <div className="flex flex-col gap-[18px] px-7 pt-6">
        <div className="flex items-center justify-between">
          <Bar className="h-2.5 w-[72px] bg-ink" />
          <div className="flex gap-3.5">
            {[0, 1, 2].map((i) => (
              <Bar key={i} className="h-1.5 w-[34px] bg-rule-2" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-5 pt-2.5">
          <div className="flex flex-col gap-2.5">
            <Bar className="h-[18px] w-[92%] bg-ink" />
            <Bar className="h-[18px] w-[68%] bg-ink" />
            <Bar className="mt-2 h-[7px] w-[84%] bg-[#D5D6CF]" />
            <Bar className="h-[7px] w-[70%] bg-[#D5D6CF]" />
            <div className="mt-2.5 h-6 w-[86px] rounded-[5px] bg-lime" />
          </div>
          <div className="aspect-[4/3] rounded-lg bg-[linear-gradient(135deg,#DDE6CF,#C7D4B2)]" />
        </div>
        <div className="grid grid-cols-3 gap-3.5 pt-3 pb-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 rounded-md bg-[#F2F2EE]" />
          ))}
        </div>
      </div>
    </div>
  );
}

const tableRows = [
  { name: "w-[78%]", pill: "bg-[#2B3A1A] w-[58%]", meta: "w-[50%]" },
  { name: "w-[64%]", pill: "bg-[#33363A] w-[52%]", meta: "w-[44%]" },
  { name: "w-[82%]", pill: "bg-[#2B3A1A] w-[58%]", meta: "w-[56%]" },
  { name: "w-[58%]", pill: "bg-[#33363A] w-[48%]", meta: "w-[38%]" },
];

export function DashboardMockup() {
  return (
    <div className="grid min-h-[300px] grid-cols-[132px_minmax(0,1fr)] overflow-hidden rounded-t-lg bg-ink shadow-[0_24px_48px_rgba(21,23,25,0.25)]">
      <div className="flex flex-col gap-3 border-r border-edge bg-panel-2 px-3.5 py-[18px]">
        <Bar className="mb-2.5 h-2 w-16 bg-paper" />
        <div className="flex h-[22px] items-center rounded-[5px] bg-panel-3 pl-2">
          <Bar className="h-[5px] w-14 bg-lime" />
        </div>
        <Bar className="ml-2 h-[5px] w-[70px] bg-edge-3" />
        <Bar className="ml-2 h-[5px] w-[54px] bg-edge-3" />
        <Bar className="ml-2 h-[5px] w-[62px] bg-edge-3" />
      </div>
      <div className="flex flex-col gap-3.5 px-5 py-[18px]">
        <div className="flex items-center justify-between">
          <Bar className="h-[9px] w-[110px] bg-paper" />
          <div className="h-[22px] w-16 rounded-[5px] bg-lime" />
        </div>
        <div className="overflow-hidden rounded-md border border-edge">
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 bg-panel-2 px-3 py-2.5">
            <Bar className="h-[5px] w-[50%] bg-mute" />
            <Bar className="h-[5px] w-[60%] bg-mute" />
            <Bar className="h-[5px] w-[40%] bg-mute" />
          </div>
          {tableRows.map((r, i) => (
            <div key={i} className="grid grid-cols-[2fr_1fr_1fr] items-center gap-3 border-t border-edge p-3">
              <Bar className={cn("h-1.5 bg-light", r.name)} />
              <div className={cn("h-4 rounded-lg", r.pill)} />
              <Bar className={cn("h-1.5 bg-faint", r.meta)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppMockup() {
  return (
    <>
      <div className="flex flex-[0_1_380px] flex-col gap-3.5 rounded-[10px] bg-paper p-[22px] shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between">
          <Bar className="h-[9px] w-[90px] bg-ink" />
          <div className="size-[26px] rounded-full bg-rule" />
        </div>
        <div className="relative h-[120px] overflow-hidden rounded-lg border border-rule bg-white">
          <svg
            viewBox="0 0 300 120"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              className="tt-draw"
              style={{ "--d": "0.9s" } as CSSProperties}
              pathLength="1"
              d="M0 90 C40 85 60 60 100 64 C140 68 160 40 200 36 C240 32 260 50 300 28"
              fill="none"
              stroke="#85CC10"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="h-12 rounded-md bg-sand" />
          <div className="h-12 rounded-md bg-sand" />
        </div>
      </div>
      <div className="-mb-[60px] hidden h-[300px] flex-[0_0_150px] flex-col gap-2.5 rounded-3xl border-[6px] border-edge-3 bg-ink px-3 py-4 shadow-[0_24px_48px_rgba(0,0,0,0.4)] tab:flex">
        <Bar className="h-1.5 w-[50px] bg-paper" />
        <div className="h-[70px] rounded-lg bg-panel-3" />
        <Bar className="h-1.5 w-[80%] bg-mute" />
        <Bar className="h-1.5 w-[60%] bg-mute" />
        <div className="mt-1.5 h-[30px] rounded-md bg-lime" />
      </div>
    </>
  );
}
