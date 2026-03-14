import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function CTABanner() {
  const t = useTranslations("ctaBanner");

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("headline")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subheadline")}
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "animate-[glow-pulse_2s_ease-in-out_infinite]"
              )}
            >
              {t("cta")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
