import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  const t = useTranslations("pricing");
  const tc = useTranslations("common");

  const tiers = t.raw("tiers") as Array<{
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  }>;

  return (
    <SectionWrapper id="pricing">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {tiers.map((tier, i) => (
          <ScrollReveal key={tier.name} variant="up" delay={i * 120}>
            <GlassCard
              className={`h-full flex flex-col relative ${
                tier.popular
                  ? "border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                  : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                  {tc("mostPopular")}
                </Badge>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-primary">
                  {tier.price}
                </span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({
                    variant: tier.popular ? "default" : "outline",
                  }),
                  "w-full"
                )}
              >
                {tier.cta}
              </a>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          {t("objectionLine")}
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
