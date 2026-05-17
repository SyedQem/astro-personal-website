import * as React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(11rem,auto)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  span?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  children,
  span = 1,
  rowSpan = 1,
}: BentoCardProps) {
  const colClass =
    span === 1
      ? "md:col-span-1"
      : span === 2
      ? "md:col-span-2"
      : "md:col-span-3";
  const rowClass = rowSpan === 1 ? "md:row-span-1" : "md:row-span-2";

  return (
    <div
      className={cn(
        "card-glow group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm md:p-6",
        colClass,
        rowClass,
        className,
      )}
    >
      {icon && (
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-primary">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      )}
      {description && (
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
