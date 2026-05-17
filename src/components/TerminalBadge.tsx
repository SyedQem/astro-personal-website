import * as React from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Badge } from "@/components/ui/badge";

interface TerminalBadgeProps {
  messages: string[];
  typeSpeed?: number; // ms per char while typing
  eraseSpeed?: number; // ms per char while erasing
  holdMs?: number; // pause when full message shown
  pauseMs?: number; // pause between messages
}

/**
 * Cycles through messages with a typewriter effect inside a status pill.
 * Respects prefers-reduced-motion by showing just the first message.
 */
export function TerminalBadge({
  messages,
  typeSpeed = 55,
  eraseSpeed = 28,
  holdMs = 1900,
  pauseMs = 360,
}: TerminalBadgeProps) {
  const reduced = useReducedMotion();
  const [text, setText] = React.useState(messages[0] ?? "");
  const indexRef = React.useRef(0);
  const phaseRef = React.useRef<"typing" | "hold" | "erasing" | "pause">(
    "hold",
  );
  const charRef = React.useRef(messages[0]?.length ?? 0);

  React.useEffect(() => {
    if (reduced || messages.length <= 1) {
      setText(messages[0] ?? "");
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = messages[indexRef.current] ?? "";
      const phase = phaseRef.current;

      if (phase === "hold") {
        phaseRef.current = "erasing";
        timer = setTimeout(tick, holdMs);
        return;
      }

      if (phase === "erasing") {
        charRef.current -= 1;
        setText(current.slice(0, Math.max(0, charRef.current)));
        if (charRef.current <= 0) {
          phaseRef.current = "pause";
          timer = setTimeout(tick, pauseMs);
        } else {
          timer = setTimeout(tick, eraseSpeed);
        }
        return;
      }

      if (phase === "pause") {
        indexRef.current = (indexRef.current + 1) % messages.length;
        charRef.current = 0;
        phaseRef.current = "typing";
        timer = setTimeout(tick, typeSpeed);
        return;
      }

      // typing
      const next = messages[indexRef.current] ?? "";
      charRef.current += 1;
      setText(next.slice(0, charRef.current));
      if (charRef.current >= next.length) {
        phaseRef.current = "hold";
        timer = setTimeout(tick, typeSpeed);
      } else {
        timer = setTimeout(tick, typeSpeed);
      }
    };

    timer = setTimeout(tick, holdMs);
    return () => clearTimeout(timer);
  }, [messages, reduced, typeSpeed, eraseSpeed, holdMs, pauseMs]);

  return (
    <Badge variant="mono" className="gap-1.5">
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span className="tabular-nums">{text}</span>
      <span aria-hidden="true" className="caret-blink text-primary">
        |
      </span>
    </Badge>
  );
}
