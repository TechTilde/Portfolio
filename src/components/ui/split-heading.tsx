"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/use-in-view";

/** Wrap every word in a clipped span so it can rise into place. Elements are walked recursively. */
function splitWords(node: ReactNode, counter: { i: number }): ReactNode {
  if (typeof node === "string") {
    return node
      .split(/(\s+)/)
      .filter(Boolean)
      .map((part, k) =>
        /^\s+$/.test(part) ? (
          " "
        ) : (
          <span key={k} className="tt-w">
            <span className="tt-wi" style={{ "--i": counter.i++ } as CSSProperties}>
              {part}
            </span>
          </span>
        ),
      );
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    if (node.type === "br") return node;
    return cloneElement(
      node,
      undefined,
      ...Children.toArray(node.props.children).map((c) => splitWords(c, counter)),
    );
  }
  return node;
}

type SplitHeadingProps = {
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  /** Seconds before the first word starts rising. */
  delay?: number;
  children: ReactNode;
};

export function SplitHeading({ as: Tag = "h2", id, className, delay = 0.12, children }: SplitHeadingProps) {
  const { ref, seen } = useInView<HTMLHeadingElement>();
  const counter = { i: 0 };

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn("tt-split", seen && "is-in", className)}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {Children.toArray(children).map((c) => splitWords(c, counter))}
    </Tag>
  );
}
