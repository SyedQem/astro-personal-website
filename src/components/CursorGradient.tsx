import * as React from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface CursorGradientProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

/**
 * Tracks the cursor inside the wrapped element and sets --cx / --cy
 * CSS variables. Pair with the `.cursor-light` utility in global.css
 * (or use these vars in your own gradient).
 */
export function CursorGradient({
  children,
  className,
  as = "div",
}: CursorGradientProps) {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = ((e.clientX - rect.left) / rect.width) * 100;
      const cy = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--cx", `${cx}%`);
      el.style.setProperty("--cy", `${cy}%`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("cursor-light", className)}
    >
      {children}
    </Tag>
  );
}
