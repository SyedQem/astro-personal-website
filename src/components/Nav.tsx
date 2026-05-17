import * as React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Github } from "@/components/BrandIcons";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/writing", label: "writing" },
  { href: "/now", label: "now" },
];

interface NavProps {
  currentPath?: string;
}

export function Nav({ currentPath = "/" }: NavProps) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on route changes (view transitions)
  React.useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a
            href="/"
            className="group flex items-center gap-2 font-mono text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
          >
            <span className="text-primary">$</span>
            <span>kirby</span>
            <span className="animate-pulse text-primary">_</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </a>
              );
            })}
            <div className="mx-2 h-4 w-px bg-border" />
            <ThemeToggle />
            <a
              href="https://github.com/SyedQem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="rounded-md p-2 text-foreground hover:bg-accent"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-border/50">
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
            transition={{ type: "tween", duration: 0.1 }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute top-14 right-0 left-0 border-b border-border bg-background/95 backdrop-blur-xl transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-4",
          )}
        >
          <nav className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-base transition-colors",
                    active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="https://github.com/SyedQem"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md px-4 py-3 text-base text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              github
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
