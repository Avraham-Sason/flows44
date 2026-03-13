import { useTranslations } from "next-intl";
import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  { key: "linkedin", icon: Linkedin, href: "#" },
  { key: "twitter", icon: Twitter, href: "#" },
  { key: "instagram", icon: Instagram, href: "#" },
  { key: "whatsapp", icon: MessageCircle, href: "#" },
];

const navLinks = [
  { key: "services", href: "#services" },
  { key: "caseStudies", href: "#case-studies" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
];

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href={`/${locale}`} className="text-xl font-bold text-primary">
              flows<span className="text-foreground">44</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {tNav("home")}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tNav(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${locale}/privacy`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.privacy")}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/terms`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.terms")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Social</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.key}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
