import * as React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TerminalBadge } from "@/components/TerminalBadge";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

const headingWords = ["hi,", "i'm", "qurb."];
const stack = ["java", "c++", "python", "sql", "astro", "tailwind"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-4xl flex-col items-start justify-center overflow-hidden px-6 pb-20 pt-16">
      <motion.div
        variants={containerVariants}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="w-full"
      >
        <motion.div variants={itemVariants} className="corner-brackets inline-block">
          <TerminalBadge
            messages={[
              "available for opportunities",
              "shipping side projects",
              "looking for sum '26 internships",
              "vibe-coding clean backends",
            ]}
          />
        </motion.div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          <span className="text-gradient inline-block">
            {headingWords.map((word, i) => (
              <motion.span
                key={word + i}
                variants={wordVariants}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          backend &amp; systems engineer-in-training. i obsess over clean code,
          sturdy fundamentals, and the kind of architecture that ages well.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-4 max-w-2xl text-sm text-muted-foreground/80"
        >
          <span className="font-mono text-primary">→</span> currently 4th-year
          software engineering @ carleton · ottawa, canada
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
          <a
            href="/projects"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <span className="inline-flex items-center justify-center gap-2">
              see what i've built
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <FileText className="h-4 w-4" />
              resume
            </span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center gap-2"
        >
          <span className="font-mono text-xs text-muted-foreground/60">
            stack:
          </span>
          {stack.map((t) => (
            <Badge key={t} variant="mono">
              {t}
            </Badge>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
