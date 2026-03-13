import { useTranslations } from "next-intl";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function LogoBar() {
  const t = useTranslations("logoBar");

  return (
    <SectionWrapper id="clients" className="py-12 md:py-16">
      <p className="text-center text-sm text-muted-foreground mb-8">
        {t("heading")}
      </p>
      <LogoMarquee />
    </SectionWrapper>
  );
}
