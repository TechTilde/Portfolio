"use client";

import {
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
} from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/use-in-view";

/**
 * rv   — fades up when scrolled into view
 * type — typewriter wipe; triggered by its parent coming into view
 * obs  — adds `is-in` only; CSS on the element or its children does the rest
 */
type Kind = "rv" | "type" | "obs";

const kindClass: Record<Kind, string> = { rv: "tt-rv", type: "tt-type", obs: "" };

type RevealProps<T extends ElementType> = {
  as?: T;
  kind?: Kind;
  /** Seconds before the animation starts (stagger). */
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "kind" | "delay">;

export function Reveal<T extends ElementType = "div">(props: RevealProps<T>) {
  const {
    as,
    kind = "rv",
    delay = 0,
    className,
    style,
    ...rest
  } = props as RevealProps<"div"> & { as?: ElementType };
  // Typed as "div" only to keep TypeScript from building a huge union of every tag's props;
  // at runtime this is whatever tag `as` names.
  const Tag = (as ?? "div") as "div";

  const { ref, seen } = useInView<HTMLDivElement>({ watchParent: kind === "type" });

  // Once revealed, drop the delay so hover transitions feel instant.
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (!seen || kind !== "rv") return;
    const t = setTimeout(() => setSettled(true), (delay + 1.4) * 1000);
    return () => clearTimeout(t);
  }, [seen, kind, delay]);

  const cssVars = { "--d": `${settled ? 0 : delay}s` } as CSSProperties;

  return (
    <Tag
      ref={ref}
      className={cn(kindClass[kind], seen && "is-in", className)}
      style={{ ...style, ...cssVars }}
      {...rest}
    />
  );
}
