"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue>({
  openItems: new Set(),
  toggle: () => {},
  type: "single",
});

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}

function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (!defaultValue) return new Set();
    return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
  });

  const toggle = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(value)) {
          next.delete(value);
        } else {
          if (type === "single") {
            next.clear();
          }
          next.add(value);
        }
        return next;
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <div className={cn("border-b border-border", className)} data-value={value}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ value?: string }>, { value });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  value?: string;
  className?: string;
  children: React.ReactNode;
}

function AccordionTrigger({ value, className, children }: AccordionTriggerProps) {
  const { openItems, toggle } = React.useContext(AccordionContext);
  const isOpen = value ? openItems.has(value) : false;

  return (
    <button
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 text-start font-medium transition-all hover:text-primary cursor-pointer",
        className
      )}
      onClick={() => value && toggle(value)}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  value?: string;
  className?: string;
  children: React.ReactNode;
}

function AccordionContent({ value, className, children }: AccordionContentProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = value ? openItems.has(value) : false;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("text-muted-foreground text-sm", className)}>
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
