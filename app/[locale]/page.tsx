import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Mission } from "@/components/sections/Mission";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <WhyUs />
        <Mission />
        <CaseStudies />
        <StatsCounter />
        <Services />
        <Pricing />
        <Testimonials />
        <Team />
        <FAQ />
        <CTABanner />
      </main>
      <Footer locale={locale} />
    </>
  );
}
