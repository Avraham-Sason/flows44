import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-[hsl(var(--glassmorphism-tint))] border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}
