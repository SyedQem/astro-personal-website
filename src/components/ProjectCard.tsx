import * as React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  stack?: string[];
  repo?: string;
  demo?: string;
  role?: string;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  slug,
  stack = [],
  repo,
  demo,
  role,
  featured,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "card-glow group relative rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm md:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <a
          href={`/projects/${slug}`}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {title}
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </a>
        {featured && (
          <Badge variant="mono" className="shrink-0">
            featured
          </Badge>
        )}
      </div>

      {role && (
        <div className="mt-1 font-mono text-xs text-muted-foreground/70">
          {role}
        </div>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {stack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <Badge key={s} variant="mono">
              {s}
            </Badge>
          ))}
        </div>
      )}

      {(repo || demo) && (
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              repo
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              live demo
            </a>
          )}
          <a
            href={`/projects/${slug}`}
            className="ml-auto inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
          >
            read more →
          </a>
        </div>
      )}
    </article>
  );
}
