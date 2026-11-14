import { TILDE_PATH } from "@/lib/content";

/** The icon tile + "tech~tilde" wordmark. Wrap it in a link at the call site. */
export function LogoLockup() {
  return (
    <>
      <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
        <rect width="100" height="100" rx="24" fill="#85CC10" />
        <path d={TILDE_PATH} fill="none" stroke="#151719" strokeWidth="9" strokeLinecap="round" />
      </svg>
      <span className="flex items-center font-logo text-[22px] font-bold tracking-[-0.5px] text-white">
        <span>tech</span>
        <svg width="32" height="22" viewBox="18 36 64 28" aria-hidden="true">
          <path d={TILDE_PATH} fill="none" stroke="#85CC10" strokeWidth="7" strokeLinecap="round" />
        </svg>
        <span>tilde</span>
      </span>
    </>
  );
}
