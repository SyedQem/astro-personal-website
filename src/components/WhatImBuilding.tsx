import * as React from "react";
import { Code2, Brain, Compass, Sparkles } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

export function WhatImBuilding() {
  return (
    <BentoGrid>
      <Reveal delay={0.0} className="md:col-span-2">
        <BentoCard
          span={2}
          icon={<Code2 className="h-4 w-4" />}
          title="building real backend systems"
          description="shipping projects end-to-end — apis, data models, the unglamorous middle. learning by doing > learning by reading."
          className="h-full"
        >
          <div className="flex flex-wrap gap-1.5 pt-1">
            <Badge variant="mono">spring</Badge>
            <Badge variant="mono">postgres</Badge>
            <Badge variant="mono">docker</Badge>
          </div>
        </BentoCard>
      </Reveal>

      <Reveal delay={0.08}>
        <BentoCard
          icon={<Brain className="h-4 w-4" />}
          title="deepening fundamentals"
          description="systems, networks, dsa. the stuff that actually makes you dangerous."
          className="h-full"
        />
      </Reveal>

      <Reveal delay={0.16}>
        <BentoCard
          icon={<Compass className="h-4 w-4" />}
          title="ottawa, canada"
          description="4th-year software engineering @ carleton. open to internships & full-time roles."
          className="h-full"
        />
      </Reveal>

      <Reveal delay={0.24} className="md:col-span-2">
        <BentoCard
          span={2}
          icon={<Sparkles className="h-4 w-4" />}
          title="taste > trends"
          description="i care about code that's still readable in 3 years. boring tech, clean architecture, thoughtful naming. all of it."
          className="h-full"
        />
      </Reveal>
    </BentoGrid>
  );
}
