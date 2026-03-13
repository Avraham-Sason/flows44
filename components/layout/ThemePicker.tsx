"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { id: "midnight-fire", label: "Midnight Fire", color: "#F97316" },
  { id: "ocean-depth", label: "Ocean Depth", color: "#14B8A6" },
  { id: "phantom-green", label: "Phantom Green", color: "#22C55E" },
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors cursor-pointer"
        aria-label="Change theme"
      >
        <Palette className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute end-0 top-full mt-2 z-50 rounded-xl border border-border bg-popover p-2 shadow-lg min-w-[160px]">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted cursor-pointer",
                theme === t.id && "bg-muted"
              )}
            >
              <span
                className="h-4 w-4 rounded-full border border-white/20"
                style={{ backgroundColor: t.color }}
              />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
