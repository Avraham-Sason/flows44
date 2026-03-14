import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("hero");

  const headlineWords = t("headline").split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Urgency badge */}
        <div className="hero-animate hero-delay-10">
          <Badge className="mb-6 animate-[glow-pulse_2s_ease-in-out_infinite]">
            {t("urgencyBadge")}
          </Badge>
        </div>

        {/* Headline with staggered word reveal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold leading-tight tracking-tight">
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className={`inline-block me-[0.3em] hero-animate hero-delay-${Math.min(i + 1, 8)}`}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto hero-animate hero-delay-7">
          {t("subheadline")}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center hero-animate hero-delay-9">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "animate-[glow-pulse_2s_ease-in-out_infinite]"
            )}
          >
            {t("cta1")}
          </a>
          <a
            href="#case-studies"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            {t("cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}
