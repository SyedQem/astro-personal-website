import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "wide";
}

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  // Lazy-init from documentElement (already set by the inline pre-paint script).
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof document === "undefined") return true;
    return document.documentElement.classList.contains("dark");
  });

  // Keep state in sync if something else flips it (e.g. another tab,
  // or the inline applyTheme() that runs after each view-transition swap).
  React.useEffect(() => {
    const syncFromDom = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key !== "theme") return;
      const nextIsDark = e.newValue !== "light";
      setIsDark(nextIsDark);
      document.documentElement.classList.toggle("dark", nextIsDark);
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("themechange", syncFromDom);
    document.addEventListener("astro:after-swap", syncFromDom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("themechange", syncFromDom);
      document.removeEventListener("astro:after-swap", syncFromDom);
    };
  }, []);

  const toggle = React.useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new Event("themechange"));
      return next;
    });
  }, []);

  const label = isDark ? "switch to light mode" : "switch to dark mode";

  if (variant === "wide") {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        className={cn(
          "flex w-full items-center gap-3 rounded-md px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
          className,
        )}
      >
        <span className="relative inline-flex h-4 w-4 items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            {isDark ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <Moon className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <Sun className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        {isDark ? "light mode" : "dark mode"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "group relative inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        className,
      )}
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
