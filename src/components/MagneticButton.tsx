import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number; // 0-1, default 0.3 (lower = more dampened)
  radius?: number; // detection radius in px
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  href,
  className,
  strength = 0.35,
  radius = 80,
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  React.useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > rect.width / 2 + radius) {
        x.set(0);
        y.set(0);
        return;
      }
      x.set(dx * strength);
      y.set(dy * strength);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, strength, reduced, x, y]);

  const inner = (
    <motion.span
      className="inline-flex items-center justify-center gap-2"
      style={reduced ? undefined : { x: sx, y: sy }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={cn(className)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={cn(className)}
    >
      {inner}
    </button>
  );
}
