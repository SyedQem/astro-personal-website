import * as React from "react";
import {
  Code2,
  GraduationCap,
  MapPin,
  Heart,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

const stack = [
  "java",
  "c++",
  "python",
  "sql",
  "spring",
  "postgres",
  "docker",
  "astro",
  "tailwind",
  "react",
];

const learning = ["distributed systems", "rust", "system design", "design taste"];

export function AboutBento() {
  return (
    <BentoGrid>
      <Reveal delay={0.0} className="md:col-span-2">
        <BentoCard
          span={2}
          icon={<Code2 className="h-4 w-4" />}
          title="my stack"
          description="tools i actually reach for. not a list of everything i've touched once."
          className="h-full"
        >
          <div className="flex flex-wrap gap-1.5 pt-1">
            {stack.map((t) => (
              <Badge key={t} variant="mono">
                {t}
              </Badge>
            ))}
          </div>
        </BentoCard>
      </Reveal>

      <Reveal delay={0.08}>
        <BentoCard
          icon={<MapPin className="h-4 w-4" />}
          title="based in"
          description="ottawa, canada 🇨🇦 — open to remote &amp; relocation."
          className="h-full"
        />
      </Reveal>

      <Reveal delay={0.16}>
        <BentoCard
          icon={<GraduationCap className="h-4 w-4" />}
          title="studying"
          description="4th-year software engineering at carleton university. graduating soon."
          className="h-full"
        />
      </Reveal>

      <Reveal delay={0.24} className="md:col-span-2">
        <BentoCard
          span={2}
          icon={<BookOpen className="h-4 w-4" />}
          title="currently learning"
          description="going deeper on the parts of cs that don't show up in tutorials."
          className="h-full"
        >
          <div className="flex flex-wrap gap-1.5 pt-1">
            {learning.map((t) => (
              <Badge key={t} variant="mono">
                {t}
              </Badge>
            ))}
          </div>
        </BentoCard>
      </Reveal>

      <Reveal delay={0.32} className="md:col-span-2">
        <BentoCard
          span={2}
          icon={<Heart className="h-4 w-4" />}
          title="what i care about"
          description="boring tech that lasts. honest docs. fast feedback loops. small commits. shipping > perfect."
          className="h-full"
        />
      </Reveal>

      <Reveal delay={0.4}>
        <BentoCard
          icon={<Sparkles className="h-4 w-4" />}
          title="off the clock"
          description="deep work, slow coffee, finding music nobody else listens to."
          className="h-full"
        />
      </Reveal>
    </BentoGrid>
  );
}
