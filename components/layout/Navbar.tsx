"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemePicker } from "./ThemePicker";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "services", href: "#services" },
  { key: "caseStudies", href: "#case-studies" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 start-0 end-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <a href={`/${locale}`} className="text-xl font-bold text-primary">
          flows<span className="text-foreground">44</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemePicker />
          <LanguageSwitcher />
          <a href="#contact" className={cn(buttonVariants({ size: "sm" }))}>
            {t("bookCall")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
              <ThemePicker />
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className={cn(buttonVariants({ size: "sm" }), "flex-1")}
              >
                {t("bookCall")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
