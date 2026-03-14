export function getOrganizationSchema(locale: string) {
  const isHe = locale === "he";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "flows44",
    url: "https://flows44.vercel.app",
    logo: "https://flows44.vercel.app/images/small_logo.png",
    description: isHe
      ? "סוכנות אוטומציה עסקית פרימיום הבונה אוטומציות מותאמות ותהליכי עבודה מבוססי AI"
      : "Premium automation agency building custom automations and AI-powered workflows for businesses",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tel Aviv",
      addressCountry: "IL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@flows44.com",
      contactType: "sales",
      availableLanguage: ["English", "Hebrew"],
    },
    sameAs: [
      "https://linkedin.com/company/flows44",
      "https://twitter.com/flows44",
      "https://instagram.com/flows44",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
    },
  };
}

export function getFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema(locale: string) {
  const isHe = locale === "he";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isHe ? "אוטומציה עסקית" : "Business Automation",
    provider: {
      "@type": "Organization",
      name: "flows44",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isHe ? "שירותי אוטומציה" : "Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isHe ? "סטארטר" : "Starter",
            description: isHe
              ? "עד 3 אוטומציות, אינטגרציית דואל + CRM"
              : "Up to 3 automations, Email + CRM integration",
          },
          price: "1000",
          priceCurrency: "ILS",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1000",
            priceCurrency: "ILS",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isHe ? "פרו" : "Pro",
            description: isHe
              ? "עד 10 אוטומציות, תהליכי AI מתקדמים"
              : "Up to 10 automations, Advanced AI workflows",
          },
          price: "2500",
          priceCurrency: "ILS",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2500",
            priceCurrency: "ILS",
            unitText: "MONTH",
          },
        },
      ],
    },
  };
}
