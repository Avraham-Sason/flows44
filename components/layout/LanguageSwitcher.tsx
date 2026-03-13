"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const newLocale = locale === "en" ? "he" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    // Preserve hash
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(newPath + hash);
  }

  return (
    <button
      onClick={switchLocale}
      className={cn(
        "flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium hover:bg-muted transition-colors cursor-pointer"
      )}
      aria-label={locale === "en" ? "Switch to Hebrew" : "Switch to English"}
    >
      {locale === "en" ? "עב" : "EN"}
    </button>
  );
}
