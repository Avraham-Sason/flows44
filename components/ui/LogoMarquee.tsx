"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
}

const placeholderLogos = [
  "TechCorp", "InnovateLTD", "ScaleUp", "DataFlow",
  "CloudNine", "AutoPilot", "SmartBiz", "GrowthLab",
  "SyncWorks", "FlowState", "ByteForce", "NexGen",
];

export function LogoMarquee({ className }: LogoMarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex animate-[marquee_30s_linear_infinite]">
        {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-12 px-6 text-muted-foreground/40 font-semibold text-lg grayscale hover:grayscale-0 hover:text-muted-foreground transition-all duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
