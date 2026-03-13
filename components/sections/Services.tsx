"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ClipboardList, Cog, Brain } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerChildren, fadeUp } from "@/lib/animations";

const icons = [ClipboardList, Cog, Brain];

export function Services() {
  const t = useTranslations("services");

  const rawItems = t.raw("items") as Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  const items = rawItems.map((item, i) => ({ ...item, Icon: icons[i] }));

  return (
    <SectionWrapper id="services" alternate>
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {items.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <GlassCard className="h-full">
              <item.Icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
