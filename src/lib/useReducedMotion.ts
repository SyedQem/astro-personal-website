import * as React from "react";

/**
 * Reads the user's prefers-reduced-motion preference and stays in sync.
 * Returns true on the server (safe default — render static).
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setReduced(false);
      return;
    }
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    // Safari < 14 fallback
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  return reduced;
}
