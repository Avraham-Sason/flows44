"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Zap, Wrench, HeadphonesIcon, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerChildren, fadeUp } from "@/lib/animations";

const icons = [Zap, Wrench, HeadphonesIcon, TrendingUp];

export function WhyUs() {
  const t = useTranslations("whyUs");

  const rawCards = t.raw("cards") as Array<{
    title: string;
    description: string;
    stat: string;
    statLabel: string;
  }>;
  const cards = rawCards.map((card, i) => ({ ...card, Icon: icons[i] }));

  return (
    <SectionWrapper id="why-us" alternate>
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp}>
            <GlassCard className="h-full text-center">
              <card.Icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {card.description}
              </p>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-primary">
                  {card.stat}
                </span>
                <span className="block text-xs text-muted-foreground mt-1">
                  {card.statLabel}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
