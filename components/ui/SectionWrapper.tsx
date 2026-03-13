import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  alternate?: boolean;
}

export function SectionWrapper({
  id,
  className,
  children,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={id}
      className={cn(
        "py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8",
        alternate ? "bg-card" : "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
