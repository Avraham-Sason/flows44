"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerChildren, fadeUp } from "@/lib/animations";

export function CaseStudies() {
  const t = useTranslations("caseStudies");

  const items = t.raw("items") as Array<{
    company: string;
    challenge: string;
    solution: string;
    metric: string;
    metricLabel: string;
  }>;

  return (
    <SectionWrapper id="case-studies">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("sectionTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("sectionSubtitle")}
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {items.map((item) => (
          <motion.div key={item.company} variants={fadeUp}>
            <GlassCard className="h-full">
              <Badge variant="outline" className="mb-3">
                {item.company}
              </Badge>
              <h3 className="text-base font-semibold text-muted-foreground mb-2">
                {item.challenge}
              </h3>
              <p className="text-sm text-foreground mb-4">{item.solution}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">
                  {item.metric}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.metricLabel}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
