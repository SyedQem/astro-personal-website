import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Desktop-only follower dot that lags the cursor and grows on hover
 * over interactive elements. Hides on touch / reduced-motion / <768px.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  React.useEffect(() => {
    if (reduced) {
      setEnabled(false);
      return;
    }
    // Disable on touch or small screens
    const isTouch = window.matchMedia("(hover: none)").matches;
    const isNarrow = window.matchMedia("(max-width: 767px)").matches;
    if (isTouch || isNarrow) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], .card-glow, input, textarea',
      );
      setHovering(!!interactive);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1000] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        width: hovering ? 28 : 8,
        height: hovering ? 28 : 8,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    />
  );
}
