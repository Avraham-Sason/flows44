import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "flows44",
    type: "Business Automation Agency",
    description:
      "Premium automation agency building custom automations and AI-powered workflows for businesses",
    location: { city: "Tel Aviv", country: "Israel" },
    languages: ["English", "Hebrew"],
    services: [
      {
        name: "Plan & Organize",
        description:
          "Process audit, workflow mapping, ROI projection, automation roadmap",
        features: [
          "Process audit",
          "Workflow mapping",
          "ROI projection",
          "Priority matrix",
        ],
      },
      {
        name: "Custom Automations",
        description:
          "API integrations, data pipelines, multi-platform sync, CRM automation",
        features: [
          "API integrations",
          "Data pipelines",
          "Multi-platform sync",
          "Error handling & alerts",
        ],
      },
      {
        name: "Smart AI Solutions",
        description:
          "AI document processing, intelligent routing, predictive analytics",
        features: [
          "AI document processing",
          "Intelligent routing",
          "Predictive analytics",
          "Natural language interfaces",
        ],
      },
    ],
    pricing: {
      tiers: [
        {
          name: "Starter",
          price: "₪3,500/month",
          features: [
            "Up to 3 automations",
            "Email + CRM integration",
            "Basic monitoring",
            "5-day delivery",
          ],
        },
        {
          name: "Pro",
          price: "₪7,500/month",
          mostPopular: true,
          features: [
            "Up to 10 automations",
            "Advanced AI workflows",
            "Priority support",
            "Dedicated account manager",
            "Custom API integrations",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited automations",
            "Custom AI models",
            "24/7 support",
            "On-site consultation",
            "SLA guarantees",
          ],
        },
      ],
    },
    metrics: {
      projectsDelivered: 150,
      hoursSaved: 50000,
      satisfactionRate: 98,
      avgDaysToLaunch: 7,
      avgDaysToROI: 14,
      uptimeSLA: 99.9,
    },
    differentiators: [
      "Custom-built solutions (not templates)",
      "Average 7-day delivery",
      "99.9% uptime SLA",
      "Bilingual support (English + Hebrew)",
      "Serves businesses in Israel and globally",
    ],
    contact: {
      email: "hello@flows44.com",
      website: "https://flows44.com",
      bookingUrl: "https://flows44.com/book",
      phone: "+972-XX-XXX-XXXX",
      location: "Tel Aviv, Israel",
    },
    urls: {
      english: "https://flows44.com/en",
      hebrew: "https://flows44.com/he",
    },
  });
}
