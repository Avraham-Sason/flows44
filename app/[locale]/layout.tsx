import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Sora, Heebo } from "next/font/google";
import { locales, isRtl } from "@/i18n/config";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "flows44 — Business Automation Agency | AI-Powered Workflows",
  description:
    "flows44 builds custom automations and AI workflows that save your team 20+ hours/week. Trusted by 50+ businesses. Book a free strategy call.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const rtl = isRtl(locale);
  const fontClass = rtl
    ? `${heebo.variable} ${sora.variable}`
    : `${sora.variable} ${heebo.variable}`;

  return (
    <html lang={locale} dir={rtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={`${fontClass} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="midnight-fire"
          themes={["midnight-fire", "ocean-depth", "phantom-green"]}
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
