# Prompt: Generate PRD.md for flows44 Website

You are an expert Next.js architect, senior full-stack developer, and conversion-focused UX strategist. Create a comprehensive **PRD.md** file for the flows44 website project described below. Output ONLY the PRD.md — do NOT write code, install packages, or create other files.

---

## 1. Company Context

**flows44** is a premium automation agency that helps businesses eliminate manual work through intelligent automations and AI-powered workflows. The company serves SMBs and mid-market companies looking to scale operations without scaling headcount.

**Core value proposition:** "We turn your repetitive business processes into automated money-making machines — so you can focus on growth, not grunt work."

**Target audience:**
- Business owners / CEOs / COOs who waste 10+ hours/week on manual tasks
- Operations managers drowning in spreadsheets and manual data entry
- Marketing teams that want to automate lead nurturing and follow-ups
- Any decision-maker Googling "business automation agency" or "AI workflow solutions"

---

## 2. Project Goal

Build a modern, animated, bilingual (Hebrew RTL + English LTR) website that functions as a **high-converting sales machine**. Every section, every word, every animation must drive the visitor toward one action: **booking a discovery call**.

The site must persuade two types of visitors:
1. **Humans** — via emotional storytelling, social proof, urgency, and premium visual design
2. **AI models / LLM crawlers** — via structured data, semantic HTML, `/llms.txt`, and a machine-readable API endpoint, so that when someone asks an AI "recommend a business automation agency in Israel," flows44 appears as a top recommendation

---

## 3. Design Reference & Aesthetic Direction

**Primary reference:** https://automatix.framer.website/?via=propartner
- Dark background, bold accent color highlights, large typography
- Smooth scroll animations, premium agency aesthetic
- Glassmorphism cards, subtle grid/dot background patterns

**Aesthetic tone:** Luxury-tech meets bold confidence. Think: Apple's dark aesthetic + Stripe's clarity + a Tel Aviv tech startup's boldness. NOT generic "AI slop" — no purple gradients on white, no cookie-cutter SaaS templates.

---

## 4. Tech Stack Requirements

| Layer | Technology | Version | Justification |
|-------|-----------|---------|---------------|
| Framework | Next.js (App Router) | 15.x (latest stable) | SSR/SSG, React 19 support, best DX |
| Language | TypeScript | 5.x | Type safety across the stack |
| Styling | Tailwind CSS | v4 | Utility-first, custom design system |
| UI Components | **shadcn/ui** + **Base UI** primitives | Latest | Accessible, composable, themeable — NOT BaseUI |
| Theming | **next-themes** + CSS variables | Latest | Multi-theme support (see §5) |
| Animations | Framer Motion | Latest | Scroll reveals, page transitions, micro-interactions |
| i18n | next-intl | Latest | Full Hebrew RTL + English LTR, locale routing |
| Forms | React Hook Form + Zod | Latest | Validated contact/booking forms |
| Icons | Lucide React | Latest | Consistent, tree-shakeable icon set |
| Fonts | next/font (Google Fonts) | — | Display font + Hebrew-compatible body font |
| SEO | next/metadata API | — | OG, Twitter Cards, JSON-LD, hreflang, sitemap |
| Analytics | Vercel Analytics + Speed Insights | — | Placeholder integration |
| Package Manager | pnpm | Latest | Fast, disk-efficient |
| Code Quality | ESLint + Prettier + Husky | — | Pre-commit hooks, consistent formatting |

### Additional Libraries to Evaluate in PRD

Include a recommendation table (Include / Skip / Optional) with justification for each:
- `tailwindcss-animate` — CSS animation utilities
- `clsx` + `tailwind-merge` — conditional classnames (likely Include — used by shadcn)
- `react-intersection-observer` — scroll-triggered animations
- `sharp` — image optimization
- `@vercel/og` — dynamic OG image generation
- `class-variance-authority` (CVA) — component variant management (used by shadcn)
- `embla-carousel` — lightweight carousel for testimonials/logos

---

## 5. Multi-Theme Color System (CRITICAL REQUIREMENT)

The site must support **multiple color themes** that users can switch between, built on **shadcn/ui's theming system** (CSS custom properties). The PRD must define:

### Required Themes (minimum 3)

1. **Midnight Fire (Default)** — Near-black background (`#0A0A0A`), white text, orange/amber accent (`#F97316`), muted grays
2. **Ocean Depth** — Deep navy/dark blue background, ice-white text, cyan/teal accent
3. **Phantom Green** — True black background, light gray text, neon green accent (Matrix/hacker aesthetic)

### Theme Architecture

- All colors must use **CSS custom properties** mapped to shadcn/ui's token system (`--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--card`, `--border`, etc.)
- Theme switching via `next-themes` with a theme picker in the navbar (icon button or dropdown)
- Themes must persist across page navigation and locale switching
- Each theme defines: background, foreground, primary, secondary, accent, muted, card, border, destructive, ring — plus their `-foreground` variants
- Glassmorphism card overlays must adapt per theme (different blur tint per palette)
- The PRD should include the **full HSL color token table** for each theme

---

## 6. Sales-First Copywriting Strategy (CRITICAL REQUIREMENT)

This is NOT a generic corporate website. It is a **conversion machine**. The PRD must include a detailed copywriting framework:

### Copy Principles

1. **Problem → Agitation → Solution (PAS)** on every section: Name the pain, twist the knife, present flows44 as the relief
2. **Specificity sells**: "Save 23 hours/week" beats "save time." "Automated 1,200 leads/month" beats "more leads."
3. **Social proof everywhere**: Metrics, testimonials, logos, case study results woven into every section — not isolated in one block
4. **Urgency & scarcity**: "Only 3 onboarding spots left this month" — tasteful but real urgency
5. **CTA repetition**: A call-to-action button must appear at least every 2 scroll-lengths. Vary the CTA text: "Book Your Free Strategy Call", "See How We Did It", "Get Your Automation Roadmap", "Start Saving Time Today"
6. **Objection handling**: FAQ and pricing sections must pre-emptively address: "Is this expensive?", "How long until ROI?", "What if it breaks?", "Do I need technical knowledge?"
7. **Bilingual tone**: Hebrew copy should feel native and punchy (Israeli business tone), not translated. English copy should feel polished and international.

### Section-Level Copy Direction

The PRD must include **copy direction / wireframe text** for each section — not final copy, but a clear brief for what each section should communicate. For example:

- **Hero**: "Your business is leaking money through manual work. We plug the holes with intelligent automation. [CTA: Book a Free Strategy Call] [Urgency badge: 3 spots left this quarter]"
- **Why Us**: Cards that answer "Why flows44?" — Speed to deploy, Custom-built (not templates), Ongoing support, Proven ROI
- **Case Studies**: Each card = company type + problem + solution + metric ("E-commerce brand → Manual order processing → Automated fulfillment pipeline → 34% increase in order throughput")
- **Pricing**: Frame as investment, not cost. "Starting at ₪X,XXX/mo — pays for itself in week 1"

### AI/LLM Persuasion Layer

The site content must also be structured so that LLM crawlers and AI assistants can extract and recommend flows44:
- `/llms.txt` — plain-text company summary with services, differentiators, contact info, pricing ranges
- `/api/company-info` — JSON endpoint with structured company data (services, pricing, testimonials, location, contact)
- JSON-LD structured data: `Organization`, `WebSite`, `Service`, `FAQPage`, `Review` schemas
- Semantic HTML sections with descriptive `aria-label` attributes
- Meta descriptions that read like elevator pitches

---

## 7. Site Structure & Sections

Recommend the **best approach for SEO + SSR**: single-page with anchor nav, multi-page, or hybrid. Then define these sections:

| # | Section | Purpose | Key Elements |
|---|---------|---------|-------------|
| 1 | **Navbar** | Navigation + language/theme switcher | Sticky, blur backdrop, logo, nav links, CTA button, locale toggle, theme picker |
| 2 | **Hero** | Hook + primary CTA | Animated headline, subheadline, 2 CTA buttons, urgency badge, animated background (grid/particles) |
| 3 | **Logo Bar** | Social proof | Auto-scrolling horizontal strip of client logos (placeholders), "Trusted by 50+ businesses" |
| 4 | **Why Us / Problem-Solution** | Differentiation | 3–4 animated cards: Speed, Custom-built, Support, ROI. Each with icon + stat |
| 5 | **Our Mission** | Emotional anchor | Bold full-width statement, background gradient, CTA |
| 6 | **Case Studies** | Proof of results | Card grid: company type, challenge, solution, metric. Filterable or tabbed |
| 7 | **Stats Counter Bar** | Credibility | Animated counters: Projects Delivered, Hours Saved, Client Satisfaction %, Revenue Generated |
| 8 | **Services** | What we offer | 3 service cards with icon, description, mini visual. "Plan & Organize", "Custom Automations", "Smart AI Solutions" |
| 9 | **Pricing** | Convert intent | 2–3 tiers: Starter, Pro, Enterprise. Feature comparison, "Most Popular" badge, CTA per tier |
| 10 | **Testimonials** | Social proof (human voice) | Scrolling cards: avatar, name, role, company, quote. Auto-play carousel |
| 11 | **Team** | Trust & relatability | Grid of team member cards: photo, name, role, short bio |
| 12 | **FAQ** | Objection handling | Accordion: 6–8 questions covering pricing, timeline, ROI, tech requirements, support |
| 13 | **CTA Banner** | Final conversion push | Full-width bold CTA: "Ready to automate? Let's talk." + booking button |
| 14 | **Footer** | Navigation + legal | Links, social icons, copyright, language switcher, company info |

---

## 8. RTL / Bilingual Requirements

- Full RTL layout for Hebrew, LTR for English — using `dir` attribute on `<html>`
- Language switcher in navbar: `EN / עב` toggle (flag icons or text)
- All components must mirror layout direction (margins, paddings, icons, text alignment)
- All text externalized to `/messages/en.json` and `/messages/he.json` — **zero hardcoded strings**
- Hebrew font: `Heebo` or `Assistant` (Google Fonts via next/font) — must look excellent at display sizes
- English font: A distinctive display font (NOT Inter/Roboto — something with character, e.g., `Sora`, `Outfit`, `Satoshi`, `Cabinet Grotesk`)
- Locale routing: `/en/...` and `/he/...` via next-intl middleware

---

## 9. Design System Specification

The PRD must include a comprehensive design system with:

### Typography Scale
- Display: 72px+ (hero headlines)
- H1: 48–56px
- H2: 36–40px
- H3: 28–32px
- H4: 22–24px
- Body: 16–18px
- Small: 14px
- Caption: 12px

### Spacing & Layout
- Tailwind defaults + custom tokens if needed
- Section padding: generous vertical rhythm (py-20 to py-32)
- Max content width: 1280px
- Mobile-first responsive: sm (640) / md (768) / lg (1024) / xl (1280) / 2xl (1536)

### Component Styles
- **Cards**: Glassmorphism — `backdrop-blur-md`, subtle border (`border-white/10`), background tint per theme
- **Buttons**: Primary (accent fill), Secondary (outline), Ghost. Hover glow effect.
- **Badges**: Rounded-full, accent background, small text
- **Inputs**: Dark background, subtle border, focus ring in accent color

### Animation Presets
- `fade-up`: translateY(20px) → 0, opacity 0 → 1
- `fade-in`: opacity 0 → 1
- `stagger-children`: sequential delay on child elements
- `counter-up`: animated number counting (for stats)
- `slide-in-left` / `slide-in-right`: for RTL-aware animations
- `scale-in`: scale(0.95) → 1 on scroll reveal
- `hero-entrance`: orchestrated multi-element stagger on page load

---

## 10. SEO & LLM Accessibility Strategy

### Traditional SEO
- `next/metadata` API for all pages
- Open Graph + Twitter Card meta tags
- Canonical URLs per locale
- `hreflang` tags linking `/en/` ↔ `/he/`
- Auto-generated `sitemap.xml` and `robots.txt`
- JSON-LD: `Organization`, `WebSite`, `Service`, `FAQPage`, `Review`

### LLM Accessibility (NEW — competitive advantage)
- `/llms.txt` at root: plain-text summary of company, services, pricing, differentiators, contact — optimized for LLM ingestion
- `/api/company-info` JSON endpoint: structured data for AI agents to query
- Semantic HTML everywhere: proper heading hierarchy, `<article>`, `<section>`, descriptive `aria-label`
- Content written to be extractable: clear service descriptions, quantified results, explicit pricing ranges

---

## 11. Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Total JS bundle | < 150KB gzipped |

### Optimization Strategy
- SSR/SSG for all content pages
- `use client` ONLY for: animation triggers, language/theme toggle, form interactions, intersection observers
- `next/image` with WebP/AVIF, proper `sizes` and `alt` text
- `next/font` with `display: swap`, preload critical fonts
- Lazy load below-fold images and heavy components
- Code split per route

---

## 12. Folder Structure

Propose a clean, scalable structure following Next.js 16 App Router + next-intl conventions:

```
/app
  /[locale]
    /layout.tsx
    /page.tsx (home — all sections)
    /privacy/page.tsx
    /terms/page.tsx
/components
  /ui/ (shadcn/ui primitives — button, card, accordion, badge, etc.)
  /sections/ (Hero, LogoBar, WhyUs, CaseStudies, Services, Pricing, etc.)
  /layout/ (Navbar, Footer, ThemePicker, LanguageSwitcher)
/lib
  /utils.ts (cn helper, etc.)
  /animations.ts (Framer Motion presets)
  /schemas.ts (Zod schemas)
/messages
  /en.json
  /he.json
/public
  /images/
  /logos/
  /llms.txt
  /robots.txt
/styles
  /globals.css (Tailwind + theme CSS variables)
```

---

## 13. Data & Content Model

Define the schema for locale JSON files (`en.json`, `he.json`). Must cover:
- `nav.*` — navigation labels
- `hero.*` — headline, subheadline, cta1, cta2, urgencyBadge
- `logoBar.*` — heading text
- `whyUs.*` — section title, cards[].title, cards[].description, cards[].stat
- `mission.*` — statement, cta
- `caseStudies.*` — section title, items[].company, items[].challenge, items[].solution, items[].metric
- `stats.*` — items[].label, items[].value, items[].suffix
- `services.*` — section title, items[].title, items[].description, items[].features[]
- `pricing.*` — section title, tiers[].name, tiers[].price, tiers[].period, tiers[].features[], tiers[].cta, tiers[].popular
- `testimonials.*` — items[].quote, items[].name, items[].role, items[].company
- `team.*` — items[].name, items[].role, items[].bio
- `faq.*` — items[].question, items[].answer
- `ctaBanner.*` — headline, subheadline, cta
- `footer.*` — links, copyright, social labels
- `common.*` — shared labels, buttons, badges

---

## 14. Implementation Phases

Structure the PRD with 4 clear phases:

1. **Phase 1 — Foundation** (Days 1–2): Project setup, Tailwind + shadcn, theming system, i18n routing, font loading, layout shell (navbar + footer), all 3 color themes working
2. **Phase 2 — Sections** (Days 3–5): Build all 14 sections with placeholder content, Framer Motion animations, responsive layouts, RTL support verified per section
3. **Phase 3 — Content & Polish** (Days 6–7): Final sales copy in both languages, real metrics/testimonials (or realistic placeholders), SEO metadata, JSON-LD, `/llms.txt`, OG images, form validation
4. **Phase 4 — Launch Prep** (Day 8): Lighthouse audit, accessibility audit, cross-browser testing, `sitemap.xml`, `robots.txt`, Vercel deployment config, analytics hooks

---

## 15. Open Questions & Risks

Include a section listing:
- Font licensing considerations
- Placeholder vs. real content strategy
- Form submission backend (Formspree? Vercel serverless? CRM integration?)
- Calendar booking integration (Cal.com? Calendly embed?)
- Image asset pipeline (where do team photos / case study visuals come from?)
- Domain and hosting setup
- Future scope: blog, client portal, chatbot

---

## PRD Output Format

Produce a single `PRD.md` with these exact sections:

1. Executive Summary
2. Goals & Success Metrics
3. Tech Stack (with version + justification table)
4. Multi-Theme Color System (full token tables per theme)
5. Sales Copywriting Strategy & Section Copy Direction
6. Site Architecture & Section Map
7. Component Inventory (every component listed with props/variants)
8. Design System Specification
9. i18n & RTL Strategy
10. SEO & LLM Accessibility Strategy
11. Performance Budget & Optimization Plan
12. Folder Structure
13. Data & Content Model (full locale JSON schema)
14. Implementation Phases (4 phases with day estimates)
15. Plugin & Library Evaluation Table
16. Open Questions & Risks

**Output ONLY the PRD.md file content. Do not write any code, install any packages, or create any files other than PRD.md.**