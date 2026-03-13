"use client";

import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsCounter() {
  const t = useTranslations("stats");

  const items = t.raw("items") as Array<{
    value: number;
    suffix: string;
    label: string;
  }>;

  return (
    <section
      id="stats"
      className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-card border-y border-border"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {items.map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  <AnimatedCounter
                    target={item.value}
                    suffix={item.suffix}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
