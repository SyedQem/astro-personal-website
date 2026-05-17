import * as React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}

export function Reveal({
  children,
  delay = 0,
  y = 12,
  duration = 0.5,
  once = true,
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // cubic-out
      }}
    >
      {children}
    </MotionTag>
  );
}
