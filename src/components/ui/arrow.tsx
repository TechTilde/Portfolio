/** The ↗ that nudges up-right when its parent (`group`) is hovered. */
export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
    >
      ↗
    </span>
  );
}

/** Shared look of the lime call-to-action buttons. Add size classes at the call site. */
export const ctaClass =
  "group inline-flex items-center rounded-lg bg-lime font-medium text-ink transition-colors duration-200 hover:bg-lime-hi";
