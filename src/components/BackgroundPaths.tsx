import * as React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface FloatingPathsProps {
  position: number;
}

function buildPaths(position: number) {
  return Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));
}

function FloatingPaths({ position }: FloatingPathsProps) {
  const paths = React.useMemo(() => buildPaths(position), [position]);

  return (
    <svg
      className="absolute inset-0 h-full w-full text-primary"
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((p) => (
        <motion.path
          key={p.id}
          d={p.d}
          stroke="currentColor"
          strokeWidth={p.width * 0.7}
          strokeOpacity={Math.min(0.08 + p.id * 0.012, 0.5)}
          initial={{ pathLength: 0.3, opacity: 0.4 }}
          animate={{
            pathLength: 1,
            opacity: [0.2, 0.45, 0.2],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 22 + Math.random() * 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

function FloatingPathsStatic({ position }: FloatingPathsProps) {
  const paths = React.useMemo(() => buildPaths(position), [position]);
  return (
    <svg
      className="absolute inset-0 h-full w-full text-primary"
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((p) => (
        <path
          key={p.id}
          d={p.d}
          stroke="currentColor"
          strokeWidth={p.width * 0.7}
          strokeOpacity={Math.min(0.08 + p.id * 0.012, 0.5)}
        />
      ))}
    </svg>
  );
}

/**
 * Full-viewport ambient SVG path background.
 * Two mirrored sets of 36 curved paths, each path slowly animating its
 * pathLength + opacity. Inherits stroke color from --foreground so it
 * adapts automatically to light/dark mode.
 *
 * Ported from Kokonut UI's "background-paths" pattern.
 */
export function BackgroundPaths() {
  const reduced = useReducedMotion();

  // Mask: paths fade out toward the center where content lives,
  // visible at the periphery as ambient decoration.
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage:
      "radial-gradient(ellipse 65% 70% at 50% 50%, transparent 10%, transparent 35%, black 95%)",
    maskImage:
      "radial-gradient(ellipse 65% 70% at 50% 50%, transparent 10%, transparent 35%, black 95%)",
  };

  if (reduced) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={maskStyle}
      >
        <FloatingPathsStatic position={1} />
        <FloatingPathsStatic position={-1} />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={maskStyle}
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
