"use client";

import { useTranslations } from "next-intl";
import { Star, User } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const items = t.raw("items") as Array<{
    quote: string;
    name: string;
    role: string;
    company: string;
    rating: number;
  }>;

  return (
    <SectionWrapper id="testimonials" alternate>
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

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <GlassCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-6 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
