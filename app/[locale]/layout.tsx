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

const baseUrl = "https://flows44.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";

  const title = isHe
    ? "flows44 — סוכנות אוטומציה עסקית | תהליכי עבודה מבוססי AI"
    : "flows44 — Business Automation Agency | AI-Powered Workflows";

  const description = isHe
    ? "flows44 בונה אוטומציות מותאמות ותהליכי AI שחוסכים לצוות שלך 20+ שעות בשבוע. מהימנים על 50+ עסקים. קבעו שיחת אסטרטגיה חינם."
    : "flows44 builds custom automations and AI workflows that save your team 20+ hours/week. Trusted by 50+ businesses. Book a free strategy call.";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        he: `${baseUrl}/he`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "flows44",
      locale: isHe ? "he_IL" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og/og-${locale}.png`,
          width: 1200,
          height: 630,
          alt: "flows44 — Business Automation Agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og/og-${locale}.png`],
    },
    icons: {
      icon: "/images/small_logo.png",
      apple: "/images/small_logo.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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
