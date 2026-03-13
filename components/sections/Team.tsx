"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerChildren, fadeUp } from "@/lib/animations";

export function Team() {
  const t = useTranslations("team");

  const items = t.raw("items") as Array<{
    name: string;
    role: string;
    bio: string;
  }>;

  return (
    <SectionWrapper id="team">
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
        {items.map((member) => (
          <motion.div key={member.name} variants={fadeUp}>
            <GlassCard className="h-full text-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto mb-4">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.bio}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
