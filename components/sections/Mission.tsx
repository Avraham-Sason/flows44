import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Mission() {
  const t = useTranslations("mission");

  return (
    <section
      id="mission"
      className="relative py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent"
    >
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
            &ldquo;{t("statement")}&rdquo;
          </blockquote>
          <div className="mt-8">
            <a href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
              {t("cta")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
