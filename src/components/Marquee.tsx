import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  separator?: string;
}

/**
 * CSS-only infinite marquee. Duplicates items so the seam is invisible.
 * Pauses on hover. Auto-disables under prefers-reduced-motion via CSS.
 */
export function Marquee({
  items,
  className,
  separator = "·",
}: MarqueeProps) {
  // Render the list twice so translateX(-50%) wraps seamlessly.
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "marquee-pause marquee-mask relative overflow-hidden py-3",
        className,
      )}
    >
      <div className="marquee-track gap-8 px-4">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 font-mono text-sm text-muted-foreground"
          >
            <span>{item}</span>
            <span aria-hidden="true" className="text-primary/60">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
