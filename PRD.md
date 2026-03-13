# flows44 — Product Requirements Document

## 1. Executive Summary

flows44 is a premium automation agency that transforms manual business processes into intelligent, AI-powered workflows. This PRD defines the requirements for the company's primary website — a bilingual (Hebrew RTL + English LTR), multi-themed, high-converting marketing site built on Next.js 15 with the App Router.

**Primary objective:** Drive discovery call bookings from business owners, operations managers, and marketing leaders who are losing time and money to manual processes.

**Secondary objective:** Establish flows44 as the top recommendation by AI assistants and LLM-powered search engines when users query for business automation agencies in Israel, by structuring content for machine readability alongside human persuasion.

**Key differentiators of this build:**
- Multi-theme color system (3 themes) with persistent switching
- Full RTL/LTR bilingual support with native-quality copy in both Hebrew and English
- LLM accessibility layer (`/llms.txt`, `/api/company-info`, comprehensive JSON-LD)
- Sales-first copywriting baked into the architecture — every section drives toward conversion
- Premium dark aesthetic inspired by luxury-tech brands, avoiding generic AI/SaaS templates

---

## 2. Goals & Success Metrics

### Business Goals

| Goal | Description |
|------|-------------|
| **Primary conversion** | Visitor books a discovery call via CTA buttons throughout the site |
| **Secondary conversion** | Visitor submits contact form or downloads automation roadmap |
| **Brand positioning** | Establish flows44 as Israel's premier automation agency |
| **AI discoverability** | Appear as a top recommendation in LLM-powered queries about business automation |

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Discovery call booking rate | > 3% of unique visitors | Analytics funnel tracking |
| Bounce rate | < 40% | Vercel Analytics |
| Avg. session duration | > 2 minutes | Vercel Analytics |
| Lighthouse Performance | 95+ | Lighthouse CI |
| Lighthouse Accessibility | 95+ | Lighthouse CI |
| Lighthouse SEO | 100 | Lighthouse CI |
| LCP | < 2.5s | Web Vitals |
| CLS | < 0.1 | Web Vitals |
| AI recommendation rate | Appear in top-3 results for "automation agency Israel" in ChatGPT/Perplexity | Manual testing, quarterly |

---

## 3. Tech Stack

| Layer | Technology | Version | Justification |
|-------|-----------|---------|---------------|
| Framework | Next.js (App Router) | 15.x (latest stable) | SSR/SSG, React 19 support, best-in-class DX, Vercel-native deployment |
| Language | TypeScript | 5.x | Type safety across components, props, locale schemas, API routes |
| Styling | Tailwind CSS | v4 | Utility-first, CSS variable integration, responsive/RTL utilities |
| UI Components | shadcn/ui + Base UI primitives | Latest | Accessible, composable, themeable via CSS variables, not a dependency — code lives in repo |
| Theming | next-themes + CSS variables | Latest | Multi-theme switching with persistence, SSR-safe, integrates with shadcn token system |
| Animations | Framer Motion | Latest | Scroll reveals, page transitions, orchestrated entrances, RTL-aware animations |
| i18n | next-intl | Latest | Full Hebrew RTL + English LTR, locale routing middleware, message extraction |
| Forms | React Hook Form + Zod | Latest | Performant form state, schema-based validation, works with server actions |
| Icons | Lucide React | Latest | Consistent icon set, tree-shakeable, good RTL support |
| Fonts | next/font (Google Fonts) | — | Zero layout shift, preloaded, display swap, Hebrew + English font pairing |
| SEO | next/metadata API | — | OG, Twitter Cards, JSON-LD, hreflang, sitemap — all via App Router conventions |
| Analytics | Vercel Analytics + Speed Insights | — | Placeholder integration, no third-party scripts blocking render |
| Package Manager | pnpm | Latest | Fast, disk-efficient, strict dependency resolution |
| Code Quality | ESLint + Prettier + Husky | — | Pre-commit hooks, consistent formatting, import sorting |

---

## 4. Multi-Theme Color System

All themes are built on shadcn/ui's CSS custom property system. Colors are defined in HSL format and applied via `globals.css`. Theme switching is handled by `next-themes`, persisted in `localStorage`, and survives locale switching.

### Theme 1: Midnight Fire (Default)

Dark near-black base with warm orange/amber accents. Premium, bold, energetic.

| Token | HSL Value | Hex Approx. | Usage |
|-------|-----------|-------------|-------|
| `--background` | `0 0% 4%` | `#0A0A0A` | Page background |
| `--foreground` | `0 0% 95%` | `#F2F2F2` | Primary text |
| `--card` | `0 0% 7%` | `#121212` | Card backgrounds |
| `--card-foreground` | `0 0% 95%` | `#F2F2F2` | Card text |
| `--popover` | `0 0% 7%` | `#121212` | Popover backgrounds |
| `--popover-foreground` | `0 0% 95%` | `#F2F2F2` | Popover text |
| `--primary` | `25 95% 53%` | `#F97316` | Primary accent (orange) |
| `--primary-foreground` | `0 0% 2%` | `#050505` | Text on primary |
| `--secondary` | `0 0% 12%` | `#1F1F1F` | Secondary backgrounds |
| `--secondary-foreground` | `0 0% 90%` | `#E5E5E5` | Text on secondary |
| `--accent` | `25 95% 53%` | `#F97316` | Accent highlights |
| `--accent-foreground` | `0 0% 2%` | `#050505` | Text on accent |
| `--muted` | `0 0% 15%` | `#262626` | Muted backgrounds |
| `--muted-foreground` | `0 0% 64%` | `#A3A3A3` | Muted text |
| `--destructive` | `0 84% 60%` | `#EF4444` | Error states |
| `--destructive-foreground` | `0 0% 95%` | `#F2F2F2` | Text on destructive |
| `--border` | `0 0% 15%` | `#262626` | Borders |
| `--input` | `0 0% 15%` | `#262626` | Input borders |
| `--ring` | `25 95% 53%` | `#F97316` | Focus rings |
| `--glassmorphism-tint` | `0 0% 10% / 0.6` | — | Glass card overlay |

### Theme 2: Ocean Depth

Deep navy base with cool cyan/teal accents. Calm, professional, trustworthy.

| Token | HSL Value | Hex Approx. | Usage |
|-------|-----------|-------------|-------|
| `--background` | `222 47% 6%` | `#08101F` | Page background |
| `--foreground` | `210 40% 96%` | `#F0F4F8` | Primary text |
| `--card` | `222 44% 9%` | `#0D1A2D` | Card backgrounds |
| `--card-foreground` | `210 40% 96%` | `#F0F4F8` | Card text |
| `--popover` | `222 44% 9%` | `#0D1A2D` | Popover backgrounds |
| `--popover-foreground` | `210 40% 96%` | `#F0F4F8` | Popover text |
| `--primary` | `187 85% 53%` | `#14B8A6` | Primary accent (teal) |
| `--primary-foreground` | `222 47% 6%` | `#08101F` | Text on primary |
| `--secondary` | `222 40% 13%` | `#131F33` | Secondary backgrounds |
| `--secondary-foreground` | `210 30% 88%` | `#D6DEE8` | Text on secondary |
| `--accent` | `192 91% 56%` | `#22D3EE` | Accent highlights (cyan) |
| `--accent-foreground` | `222 47% 6%` | `#08101F` | Text on accent |
| `--muted` | `222 35% 16%` | `#1A2740` | Muted backgrounds |
| `--muted-foreground` | `215 20% 60%` | `#8899AA` | Muted text |
| `--destructive` | `0 84% 60%` | `#EF4444` | Error states |
| `--destructive-foreground` | `210 40% 96%` | `#F0F4F8` | Text on destructive |
| `--border` | `222 30% 18%` | `#1E2D45` | Borders |
| `--input` | `222 30% 18%` | `#1E2D45` | Input borders |
| `--ring` | `187 85% 53%` | `#14B8A6` | Focus rings |
| `--glassmorphism-tint` | `222 50% 12% / 0.6` | — | Glass card overlay |

### Theme 3: Phantom Green

True black base with neon green accents. Edgy, technical, hacker aesthetic.

| Token | HSL Value | Hex Approx. | Usage |
|-------|-----------|-------------|-------|
| `--background` | `0 0% 2%` | `#050505` | Page background |
| `--foreground` | `0 0% 85%` | `#D9D9D9` | Primary text |
| `--card` | `0 0% 5%` | `#0D0D0D` | Card backgrounds |
| `--card-foreground` | `0 0% 85%` | `#D9D9D9` | Card text |
| `--popover` | `0 0% 5%` | `#0D0D0D` | Popover backgrounds |
| `--popover-foreground` | `0 0% 85%` | `#D9D9D9` | Popover text |
| `--primary` | `142 71% 45%` | `#22C55E` | Primary accent (green) |
| `--primary-foreground` | `0 0% 2%` | `#050505` | Text on primary |
| `--secondary` | `0 0% 8%` | `#141414` | Secondary backgrounds |
| `--secondary-foreground` | `0 0% 78%` | `#C7C7C7` | Text on secondary |
| `--accent` | `142 71% 45%` | `#22C55E` | Accent highlights |
| `--accent-foreground` | `0 0% 2%` | `#050505` | Text on accent |
| `--muted` | `0 0% 11%` | `#1C1C1C` | Muted backgrounds |
| `--muted-foreground` | `0 0% 55%` | `#8C8C8C` | Muted text |
| `--destructive` | `0 84% 60%` | `#EF4444` | Error states |
| `--destructive-foreground` | `0 0% 85%` | `#D9D9D9` | Text on destructive |
| `--border` | `0 0% 13%` | `#212121` | Borders |
| `--input` | `0 0% 13%` | `#212121` | Input borders |
| `--ring` | `142 71% 45%` | `#22C55E` | Focus rings |
| `--glassmorphism-tint` | `142 30% 6% / 0.6` | — | Glass card overlay |

### Theme Architecture Notes

- All tokens are defined in `:root` and overridden per `[data-theme="ocean-depth"]` and `[data-theme="phantom-green"]` selectors
- `next-themes` manages the `data-theme` attribute on `<html>` and stores preference in `localStorage`
- Theme must persist across locale switching — `next-themes` state is independent of URL path
- Glassmorphism cards use `backdrop-blur-md` with `bg-[hsl(var(--glassmorphism-tint))]` and `border border-white/10`
- The theme picker in the navbar renders as a small icon button (palette icon) with a dropdown showing color swatches for each theme

---

## 5. Sales Copywriting Strategy & Section Copy Direction

### Copy Framework

Every section follows **Problem → Agitation → Solution (PAS)**:

1. **Name the pain** — Identify the specific manual task or bottleneck the visitor experiences
2. **Twist the knife** — Quantify the cost: hours wasted, revenue lost, errors made, employees burnt out
3. **Present the relief** — flows44's automation as the clear, proven, low-risk solution

### Copy Principles

| Principle | Execution |
|-----------|-----------|
| **Specificity sells** | Use concrete numbers: "Save 23 hours/week", "Automated 1,200 leads/month", "ROI in 14 days" |
| **Social proof everywhere** | Metrics, testimonials, and logos woven into every section — not isolated in one block |
| **Urgency & scarcity** | "Only 3 onboarding spots left this month" — tasteful but real urgency via badges and counters |
| **CTA repetition** | A CTA button every 2 scroll-lengths with varied text |
| **Objection pre-handling** | FAQ and pricing address cost, timeline, risk, and technical knowledge concerns |
| **Bilingual nativeness** | Hebrew copy is punchy Israeli business tone (not translated). English is polished and international. |

### CTA Rotation

Vary CTA text across sections to avoid banner blindness:
- "Book Your Free Strategy Call"
- "See How We Did It"
- "Get Your Automation Roadmap"
- "Start Saving Time Today"
- "Let's Automate Your Business"
- "Claim Your Free Consultation"

### Section-Level Copy Direction

#### Hero
**Message:** Your business is hemorrhaging money through manual work. Every hour your team spends on repetitive tasks is an hour not spent on growth.
**Headline (EN):** "Stop Losing Money to Manual Work"
**Subheadline (EN):** "We build intelligent automations that save your team 20+ hours per week — so you can scale without hiring."
**CTA 1:** "Book a Free Strategy Call" (primary, accent fill)
**CTA 2:** "See Our Results" (secondary, outline — scrolls to case studies)
**Urgency badge:** "Only 3 onboarding spots left this quarter"
**Visual:** Animated dot grid background, subtle particle flow suggesting automation pipelines

#### Logo Bar
**Message:** You're in good company. Trusted by 50+ businesses across Israel and beyond.
**Visual:** Auto-scrolling horizontal strip of client logos (grayscale, colorize on hover). Placeholder logos during build.

#### Why Us / Problem-Solution
**Message:** Why flows44? Because we're not another template shop.
**Cards:**
1. **Lightning Fast** — "Live in days, not months. Our sprint-based process delivers working automations in 5–10 business days." Stat: "Avg. 7 days to launch"
2. **Custom-Built** — "No cookie-cutter Zapier chains. Every workflow is engineered specifically for your business logic." Stat: "100% custom solutions"
3. **Ongoing Support** — "We don't disappear after launch. Monitoring, optimization, and scaling support included." Stat: "99.9% uptime SLA"
4. **Proven ROI** — "Our clients see return on investment within the first month — most within 2 weeks." Stat: "14-day avg. ROI"

#### Our Mission
**Message:** "We believe every business deserves to operate like a Fortune 500 — without the Fortune 500 budget. Automation isn't a luxury. It's the great equalizer."
**CTA:** "Join the Automation Revolution"

#### Case Studies
**Message:** Real businesses. Real problems. Real results.
**Card structure:** Company type → Challenge → Solution → Key metric
- **E-commerce brand** → Manual order processing eating 40 hrs/week → Automated fulfillment pipeline with inventory sync → "34% increase in order throughput"
- **Marketing agency** → Lead follow-up falling through the cracks → AI-powered lead scoring + automated nurture sequences → "67% faster response time, 28% more conversions"
- **SaaS company** → Onboarding taking 3 weeks per client → Automated onboarding workflow with smart document generation → "Onboarding time cut from 3 weeks to 2 days"
- **Real estate firm** → Agents spending half their day on paperwork → Automated contract generation + CRM sync → "Agents recovered 15 hours/week for selling"

#### Stats Counter Bar
**Animated counters:**
- **150+** Projects Delivered
- **50,000+** Hours Saved for Clients
- **98%** Client Satisfaction Rate
- **₪12M+** Revenue Generated for Clients

#### Services
**Message:** Three pillars. One outcome: your business on autopilot.
1. **Plan & Organize** — "We audit your workflows, identify bottlenecks, and design an automation roadmap tailored to your goals." Features: Process audit, Workflow mapping, ROI projection, Priority matrix
2. **Custom Automations** — "From CRM integrations to multi-step workflows — built from scratch for your exact needs." Features: API integrations, Data pipelines, Multi-platform sync, Error handling & alerts
3. **Smart AI Solutions** — "AI-powered workflows that learn, adapt, and make decisions — not just follow rules." Features: AI document processing, Intelligent routing, Predictive analytics, Natural language interfaces

#### Pricing
**Message:** An investment that pays for itself in week one.
**Framing:** Not "cost" — "investment." Not "monthly fee" — "monthly ROI engine."
- **Starter** — ₪3,500/mo — "For businesses ready to automate their first 2–3 workflows." Features: Up to 3 automations, Email + CRM integration, Basic monitoring, 5-day delivery. CTA: "Get Started"
- **Pro** (Most Popular badge) — ₪7,500/mo — "For scaling businesses that want a full automation infrastructure." Features: Up to 10 automations, Advanced AI workflows, Priority support, Dedicated account manager, Custom API integrations. CTA: "Scale Your Business"
- **Enterprise** — Custom — "For organizations that need enterprise-grade automation at scale." Features: Unlimited automations, Custom AI models, 24/7 support, On-site consultation, SLA guarantees. CTA: "Contact Us"

**Objection line below pricing:** "Not sure which plan is right? Book a free strategy call and we'll build your custom roadmap — no commitment."

#### Testimonials
**Rotating cards with:**
- Avatar / photo
- Full name + role + company
- Quote emphasizing specific results (numbers, time saved, revenue impact)
- Star rating (5/5)

#### Team
**Grid of team cards:**
- Photo (placeholder silhouette during build)
- Name, role, short bio (1–2 sentences)
- Humanize the brand: show real people behind the automation

#### FAQ
**Accordion format. Pre-handle objections:**
1. "How much does it cost?" → Frame ROI, reference pricing tiers, emphasize free strategy call
2. "How long until I see results?" → "Most clients see ROI within 14 days of launch. Our avg. delivery is 7 business days."
3. "What if something breaks?" → "We monitor 24/7 and our SLA guarantees 99.9% uptime. If something breaks, we fix it — included in your plan."
4. "Do I need technical knowledge?" → "Zero. We handle everything. You just tell us what wastes your time."
5. "What tools do you integrate with?" → List popular tools: HubSpot, Salesforce, Slack, Google Workspace, Shopify, Monday.com, etc.
6. "Can I cancel anytime?" → "Yes, month-to-month. No lock-in contracts. We earn your business every month."
7. "How is this different from Zapier / Make?" → "Those are DIY tools. We're a done-for-you agency. We architect, build, test, deploy, and maintain — you focus on your business."
8. "Do you work with companies outside Israel?" → "Absolutely. We serve clients globally with support in English and Hebrew."

#### CTA Banner
**Full-width, bold, final push:**
**Headline:** "Ready to Stop Wasting Time?"
**Subheadline:** "Book a free strategy call. We'll map your automation opportunities and show you exactly how much time and money you'll save."
**CTA:** "Book Your Free Strategy Call"
**Visual:** Gradient background using theme accent color, subtle animated glow

#### Footer
- Navigation links (mirrors navbar)
- Social icons: LinkedIn, Twitter/X, Instagram, WhatsApp
- Copyright: "© 2024 flows44. All rights reserved."
- Language switcher (secondary)
- Company address / registration info
- "Built with intelligence" tagline

### AI/LLM Persuasion Layer

Content must be simultaneously persuasive to humans AND extractable by AI:
- Every service has a clear, standalone description (no reliance on visual context)
- Metrics and pricing are explicit numbers, not vague ranges
- FAQ answers are self-contained (each answer makes sense without the question context)
- Testimonials include company type and specific results for AI recommendation contexts

---

## 6. Site Architecture & Section Map

### Approach: Hybrid Single-Page + Dedicated Routes

**Recommended architecture:** Single-page home with anchor navigation for core sections, plus dedicated routes for legal pages and the API endpoint. This approach is optimal because:

1. **SEO:** All core content lives on one high-authority page, accumulating link equity. Legal pages get their own routes for compliance.
2. **SSR:** The home page is statically generated at build time (SSG), ensuring fast loads and full crawlability.
3. **UX:** Smooth scroll between sections with anchor links provides a premium, fluid experience. No page transition jank.
4. **AI/LLM:** All content on a single page makes it trivially extractable by crawlers.

### Route Map

| Route | Type | Content |
|-------|------|---------|
| `/[locale]` | SSG | Home — all 14 sections |
| `/[locale]/privacy` | SSG | Privacy policy |
| `/[locale]/terms` | SSG | Terms of service |
| `/api/company-info` | API route | JSON endpoint for AI agents |
| `/llms.txt` (public) | Static file | Plain-text company summary |
| `/sitemap.xml` | Generated | Auto-generated sitemap |
| `/robots.txt` | Static file | Crawler directives |

### Section Order & Anchor IDs

| # | Section | Anchor ID | Component |
|---|---------|-----------|-----------|
| 1 | Navbar | — | `<Navbar />` |
| 2 | Hero | `#hero` | `<Hero />` |
| 3 | Logo Bar | `#clients` | `<LogoBar />` |
| 4 | Why Us | `#why-us` | `<WhyUs />` |
| 5 | Our Mission | `#mission` | `<Mission />` |
| 6 | Case Studies | `#case-studies` | `<CaseStudies />` |
| 7 | Stats Counter | `#stats` | `<StatsCounter />` |
| 8 | Services | `#services` | `<Services />` |
| 9 | Pricing | `#pricing` | `<Pricing />` |
| 10 | Testimonials | `#testimonials` | `<Testimonials />` |
| 11 | Team | `#team` | `<Team />` |
| 12 | FAQ | `#faq` | `<FAQ />` |
| 13 | CTA Banner | `#contact` | `<CTABanner />` |
| 14 | Footer | — | `<Footer />` |

---

## 7. Component Inventory

### Layout Components

| Component | File | Props / Variants | Notes |
|-----------|------|-----------------|-------|
| `Navbar` | `components/layout/Navbar.tsx` | `locale: string` | Sticky, blur backdrop, logo, nav links, CTA, locale toggle, theme picker. Collapses to hamburger on mobile. |
| `Footer` | `components/layout/Footer.tsx` | `locale: string` | Nav links, social icons, copyright, locale switcher, company info |
| `ThemePicker` | `components/layout/ThemePicker.tsx` | — | Palette icon button → dropdown with color swatches. Uses `next-themes` `setTheme()` |
| `LanguageSwitcher` | `components/layout/LanguageSwitcher.tsx` | `locale: string` | `EN / עב` toggle. Navigates to equivalent path in other locale via `next-intl` router |
| `MobileNav` | `components/layout/MobileNav.tsx` | `isOpen: boolean, onClose: () => void` | Slide-in drawer for mobile navigation |

### Section Components

| Component | File | Props | Key Elements |
|-----------|------|-------|-------------|
| `Hero` | `components/sections/Hero.tsx` | `locale` | Animated headline (staggered word reveal), subheadline, 2 CTA buttons, urgency badge, animated grid background |
| `LogoBar` | `components/sections/LogoBar.tsx` | `locale` | Auto-scrolling horizontal marquee of client logos, "Trusted by X+ businesses" label |
| `WhyUs` | `components/sections/WhyUs.tsx` | `locale` | Section title, 4 glassmorphism cards with icon + title + description + stat. Scroll-triggered stagger animation |
| `Mission` | `components/sections/Mission.tsx` | `locale` | Full-width statement with gradient text, CTA button, background gradient overlay |
| `CaseStudies` | `components/sections/CaseStudies.tsx` | `locale` | Section title, card grid (2x2 desktop, 1-col mobile). Each card: company type, challenge, solution, metric badge. Optional tab filter |
| `StatsCounter` | `components/sections/StatsCounter.tsx` | `locale` | 4 animated counters with labels and suffixes. Triggers on scroll into view via intersection observer |
| `Services` | `components/sections/Services.tsx` | `locale` | Section title, 3 service cards with icon, title, description, feature list. Hover lift effect |
| `Pricing` | `components/sections/Pricing.tsx` | `locale` | Section title, 3 tier cards. "Most Popular" badge on Pro. Feature comparison list, CTA button per tier |
| `Testimonials` | `components/sections/Testimonials.tsx` | `locale` | Auto-play carousel (Embla). Cards: avatar, name, role, company, quote, star rating |
| `Team` | `components/sections/Team.tsx` | `locale` | Grid of team cards: photo, name, role, bio. Hover effect reveals bio |
| `FAQ` | `components/sections/FAQ.tsx` | `locale` | Accordion (shadcn `Accordion` primitive). 8 Q&A items. Smooth expand/collapse |
| `CTABanner` | `components/sections/CTABanner.tsx` | `locale` | Full-width gradient section, headline, subheadline, primary CTA button, animated glow |

### UI Primitives (shadcn/ui)

| Component | Source | Variants |
|-----------|--------|----------|
| `Button` | shadcn/ui | `default`, `outline`, `ghost`, `link`, `destructive` + sizes `sm`, `default`, `lg` |
| `Card` | shadcn/ui | Glassmorphism variant with backdrop blur |
| `Badge` | shadcn/ui | `default`, `secondary`, `outline`, `destructive` |
| `Accordion` | shadcn/ui | Single / multiple expand modes |
| `Input` | shadcn/ui | Dark background, accent focus ring |
| `Textarea` | shadcn/ui | Dark background, accent focus ring |
| `Label` | shadcn/ui | Standard |
| `DropdownMenu` | shadcn/ui | For theme picker |
| `Sheet` | shadcn/ui | For mobile navigation drawer |
| `Separator` | shadcn/ui | Horizontal / vertical |
| `Tooltip` | shadcn/ui | For icon buttons |

### Utility Components

| Component | File | Purpose |
|-----------|------|---------|
| `AnimatedCounter` | `components/ui/AnimatedCounter.tsx` | Animated number counting from 0 to target value on scroll |
| `ScrollReveal` | `components/ui/ScrollReveal.tsx` | Wrapper for Framer Motion scroll-triggered animations |
| `SectionWrapper` | `components/ui/SectionWrapper.tsx` | Consistent section padding, max-width, anchor ID |
| `LogoMarquee` | `components/ui/LogoMarquee.tsx` | Infinite horizontal scroll animation for logos |
| `GlassCard` | `components/ui/GlassCard.tsx` | Pre-styled glassmorphism card using theme tokens |

---

## 8. Design System Specification

### Typography

| Level | Size (Desktop) | Size (Mobile) | Weight | Font | Usage |
|-------|---------------|---------------|--------|------|-------|
| Display | 72–80px | 40–48px | 800 | Sora (EN) / Heebo (HE) | Hero headline |
| H1 | 48–56px | 32–36px | 700 | Sora / Heebo | Page titles |
| H2 | 36–40px | 28–32px | 700 | Sora / Heebo | Section headings |
| H3 | 28–32px | 22–26px | 600 | Sora / Heebo | Card titles, sub-sections |
| H4 | 22–24px | 18–20px | 600 | Sora / Heebo | Smaller headings |
| Body | 16–18px | 16px | 400 | Sora / Heebo | Paragraphs, descriptions |
| Small | 14px | 14px | 400 | Sora / Heebo | Captions, metadata |
| Caption | 12px | 12px | 500 | Sora / Heebo | Badges, labels |

**Font pairing:**
- **English:** `Sora` — geometric sans-serif with distinctive character, excellent at display sizes, avoids the Inter/Roboto monotony
- **Hebrew:** `Heebo` — clean, modern Hebrew typeface designed for screen, excellent weight range, pairs well with geometric Latin fonts
- Both loaded via `next/font/google` with `display: 'swap'` and font-weight subsets

### Spacing & Layout

| Property | Value |
|----------|-------|
| Max content width | `1280px` (`max-w-7xl`) |
| Section vertical padding | `py-20` (80px) to `py-32` (128px) |
| Card padding | `p-6` to `p-8` |
| Component gap (cards) | `gap-6` to `gap-8` |
| Container horizontal padding | `px-4` (mobile), `px-6` (tablet), `px-8` (desktop) |
| Border radius (cards) | `rounded-xl` (12px) |
| Border radius (buttons) | `rounded-lg` (8px) |
| Border radius (badges) | `rounded-full` |

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

Mobile-first approach: base styles target mobile, enhanced at each breakpoint.

### Component Styles

**Cards (Glassmorphism):**
```
backdrop-blur-md bg-[hsl(var(--glassmorphism-tint))] border border-white/10 rounded-xl
```
Shadow: subtle `shadow-lg` with low opacity. Hover: slight lift (`translateY(-2px)`) and increased border brightness.

**Buttons:**
- Primary: `bg-primary text-primary-foreground` with hover glow (`shadow-[0_0_20px_hsl(var(--primary)/0.4)]`)
- Secondary/Outline: `border-primary text-primary` with hover fill
- Ghost: transparent, text only, hover background
- All buttons: `transition-all duration-200`, `font-medium`

**Badges:**
- `rounded-full px-3 py-1 text-xs font-semibold`
- Accent variant: `bg-primary/20 text-primary border border-primary/30`

**Inputs:**
- `bg-secondary border-border text-foreground`
- Focus: `ring-2 ring-ring` (accent color)
- Placeholder: `text-muted-foreground`

### Background Patterns

- **Hero:** Animated dot grid (CSS radial gradient pattern) with subtle parallax. Optional: particle canvas overlay.
- **Sections alternation:** Alternate between `bg-background` and `bg-card` to create visual rhythm
- **CTA Banner:** Radial gradient using primary accent color at low opacity
- **Mission:** Full-width gradient overlay (`bg-gradient-to-b from-primary/10 to-transparent`)

### Animation Presets

| Name | Motion Values | Trigger | Duration |
|------|--------------|---------|----------|
| `fade-up` | `y: 20→0, opacity: 0→1` | Scroll into view | 0.5s |
| `fade-in` | `opacity: 0→1` | Scroll into view | 0.4s |
| `stagger-children` | Sequential delay `0.1s` per child | Parent in view | 0.5s per child |
| `counter-up` | Numeric interpolation `0→target` | Scroll into view | 1.5s (ease-out) |
| `slide-in-left` | `x: -40→0, opacity: 0→1` | Scroll into view | 0.6s |
| `slide-in-right` | `x: 40→0, opacity: 0→1` | Scroll into view | 0.6s |
| `scale-in` | `scale: 0.95→1, opacity: 0→1` | Scroll into view | 0.5s |
| `hero-entrance` | Orchestrated stagger: headline words → subheadline → CTAs → badge | Page load | 1.5s total |
| `marquee` | `x: 0→-50%` (infinite loop) | Always | 30s linear |
| `glow-pulse` | `box-shadow` oscillation | Always (CTA buttons) | 2s infinite |

**RTL awareness:** `slide-in-left` and `slide-in-right` must swap direction when `dir="rtl"`. Use a utility that checks locale/direction and inverts `x` values.

---

## 9. i18n & RTL Strategy

### Locale Configuration

| Locale | Code | Direction | Font | Route Prefix |
|--------|------|-----------|------|-------------|
| English | `en` | LTR | Sora | `/en/...` |
| Hebrew | `he` | RTL | Heebo | `/he/...` |

Default locale: `he` (Hebrew) — assuming primary market is Israel. Redirect `/` → `/he`.

### next-intl Setup

- **Middleware:** `next-intl` middleware handles locale detection, URL prefix, and redirects
- **Message files:** `/messages/en.json` and `/messages/he.json`
- **Layout:** `app/[locale]/layout.tsx` sets `<html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>`
- **Translation hook:** `useTranslations()` in all components — zero hardcoded strings
- **Rich text:** Use `next-intl`'s rich text support for bold/link/emphasis within translated strings

### RTL Layout Rules

| Element | LTR | RTL |
|---------|-----|-----|
| Text alignment | `text-left` | `text-right` (automatic via `dir`) |
| Flex direction | `flex-row` | `flex-row-reverse` (via Tailwind RTL modifiers) |
| Margins/Paddings | `ml-4` | `ms-4` (logical properties via Tailwind) |
| Icons (arrows, chevrons) | Default | Flipped horizontally (CSS `scaleX(-1)` or RTL variants) |
| Navigation order | Left → Right | Right → Left |
| Logo position | Left | Right |
| Carousel scroll direction | Left → Right | Right → Left |
| Number display | Standard | Standard (numbers are always LTR) |

### Tailwind RTL Support

Use Tailwind's logical property utilities (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) and the `rtl:` variant modifier where logical properties don't suffice.

### Language Switcher Behavior

- Clicking the switcher navigates from `/en/...#section` to `/he/...#section` (preserves anchor)
- Theme selection persists across language switches (stored in `localStorage`, not URL)
- Form state is NOT preserved across language switches (acceptable — form is near bottom of page)

---

## 10. SEO & LLM Accessibility Strategy

### Traditional SEO

#### Metadata (via `next/metadata` API)

| Property | EN Value | HE Value |
|----------|----------|----------|
| Title | "flows44 — Business Automation Agency \| AI-Powered Workflows" | "flows44 — סוכנות אוטומציה עסקית \| תהליכי עבודה מבוססי AI" |
| Description | "flows44 builds custom automations and AI workflows that save your team 20+ hours/week. Trusted by 50+ businesses. Book a free strategy call." | "flows44 בונה אוטומציות מותאמות אישית ותהליכי AI שחוסכים לצוות שלך 20+ שעות בשבוע. מהימנים על 50+ עסקים. קבעו שיחת אסטרטגיה חינם." |
| OG Image | Dynamic via `@vercel/og` — dark card with logo + tagline + accent color | Same, with Hebrew text |
| Twitter Card | `summary_large_image` | `summary_large_image` |

#### Structured Data (JSON-LD)

Embed in `<head>` via `next/metadata`:

1. **Organization** — company name, logo, URL, social profiles, address, contact
2. **WebSite** — name, URL, search action (if applicable)
3. **Service** (×3) — one per service offering with description and pricing range
4. **FAQPage** — all FAQ items with question + answer pairs
5. **Review** (×n) — aggregated review data from testimonials

#### Technical SEO

- `sitemap.xml` — auto-generated via `app/sitemap.ts`, includes all locale variants
- `robots.txt` — allow all crawlers, point to sitemap
- `hreflang` tags — `<link rel="alternate" hreflang="en" href="...">` and `<link rel="alternate" hreflang="he" href="...">`
- Canonical URLs — one per locale-page combination
- Heading hierarchy — single `<h1>` per page (hero headline), proper `<h2>`/`<h3>` nesting
- Image `alt` text — descriptive, translated per locale
- `<html lang="...">` — set per locale

### LLM Accessibility Layer

#### `/llms.txt` (Public Static File)

Plain-text file at site root, optimized for LLM ingestion:

```
# flows44 — Business Automation Agency

## About
flows44 is a premium automation agency based in Israel that builds custom automations
and AI-powered workflows for businesses. We help companies eliminate manual work
and scale operations without scaling headcount.

## Services
1. Plan & Organize — Process audit, workflow mapping, ROI projection, automation roadmap
2. Custom Automations — API integrations, data pipelines, multi-platform sync, CRM automation
3. Smart AI Solutions — AI document processing, intelligent routing, predictive analytics

## Pricing
- Starter: ₪3,500/month (up to 3 automations, 5-day delivery)
- Pro: ₪7,500/month (up to 10 automations, AI workflows, dedicated account manager)
- Enterprise: Custom pricing (unlimited automations, custom AI models, 24/7 support)

## Key Metrics
- 150+ projects delivered
- 50,000+ hours saved for clients
- 98% client satisfaction rate
- Average ROI within 14 days

## Differentiators
- Custom-built solutions (not templates)
- Average 7-day delivery
- 99.9% uptime SLA
- Bilingual support (English + Hebrew)
- Serves businesses in Israel and globally

## Contact
- Website: https://flows44.com
- Email: hello@flows44.com
- Phone: +972-XX-XXX-XXXX
- Location: Tel Aviv, Israel
- Book a call: https://flows44.com/book

## Languages
- English: https://flows44.com/en
- Hebrew: https://flows44.com/he
```

#### `/api/company-info` (JSON API Route)

Returns structured JSON for AI agent queries:

```json
{
  "name": "flows44",
  "type": "Business Automation Agency",
  "description": "Premium automation agency building custom automations and AI-powered workflows",
  "location": { "city": "Tel Aviv", "country": "Israel" },
  "languages": ["English", "Hebrew"],
  "services": [...],
  "pricing": { "tiers": [...] },
  "testimonials": [...],
  "metrics": { "projectsDelivered": 150, "hoursSaved": 50000, "satisfactionRate": 98 },
  "contact": { "email": "hello@flows44.com", "website": "https://flows44.com", "bookingUrl": "https://flows44.com/book" }
}
```

#### Semantic HTML

- All sections wrapped in `<section>` with descriptive `aria-label` (e.g., `aria-label="Our services and automation offerings"`)
- Proper `<article>` for case studies and testimonials
- `<nav>` for navigation
- `<main>` for page content
- `<aside>` where appropriate
- Heading hierarchy strictly maintained

---

## 11. Performance Budget & Optimization Plan

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Total JS bundle (gzipped) | < 150KB |
| Time to Interactive | < 3.5s |

### Optimization Strategies

#### Rendering
- **SSG for home page** — all sections statically generated at build time via `generateStaticParams` for both locales
- **`use client` minimized** — only for: Framer Motion animations, theme/locale toggles, form interactions, intersection observers, carousel
- **Server Components by default** — section wrappers and static content remain server components
- **Streaming** — use React Suspense for below-fold sections if needed

#### Assets
- **`next/image`** with WebP/AVIF format, proper `sizes` attribute, lazy loading for below-fold images
- **`next/font`** with `display: 'swap'`, preload critical fonts, subset to used characters
- **SVG icons** via Lucide React (tree-shaken at build time)
- **No external font CDN** — all fonts self-hosted via `next/font`

#### JavaScript
- **Code splitting** — automatic per-route via Next.js App Router
- **Dynamic imports** — heavy components (carousel, animated counter) loaded via `next/dynamic` with `ssr: false` where appropriate
- **Tree shaking** — ensured via ES module imports, no barrel file re-exports for large libraries
- **Bundle analysis** — `@next/bundle-analyzer` for monitoring

#### CSS
- **Tailwind CSS v4** — only ships used utilities, purges unused classes
- **No CSS-in-JS runtime** — all styles are static Tailwind utilities or CSS variables

#### Network
- **Vercel Edge Network** — auto CDN, compression, caching headers
- **Preload critical assets** — hero background, primary fonts
- **No third-party scripts blocking render** — analytics loaded with `afterInteractive` strategy

---

## 12. Folder Structure

```
flows44/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Root layout: html dir/lang, fonts, ThemeProvider, next-intl
│   │   ├── page.tsx                # Home page: assembles all 14 sections
│   │   ├── privacy/
│   │   │   └── page.tsx            # Privacy policy
│   │   └── terms/
│   │       └── page.tsx            # Terms of service
│   ├── api/
│   │   └── company-info/
│   │       └── route.ts            # JSON API endpoint for AI agents
│   ├── layout.tsx                  # Root layout (minimal — locale layout does the heavy lifting)
│   ├── sitemap.ts                  # Auto-generated sitemap
│   └── robots.ts                   # Robots.txt generation
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemePicker.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── MobileNav.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── LogoBar.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Mission.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Team.tsx
│   │   ├── FAQ.tsx
│   │   └── CTABanner.tsx
│   └── ui/
│       ├── button.tsx              # shadcn/ui
│       ├── card.tsx                # shadcn/ui
│       ├── badge.tsx               # shadcn/ui
│       ├── accordion.tsx           # shadcn/ui
│       ├── input.tsx               # shadcn/ui
│       ├── textarea.tsx            # shadcn/ui
│       ├── label.tsx               # shadcn/ui
│       ├── dropdown-menu.tsx       # shadcn/ui
│       ├── sheet.tsx               # shadcn/ui
│       ├── separator.tsx           # shadcn/ui
│       ├── tooltip.tsx             # shadcn/ui
│       ├── AnimatedCounter.tsx
│       ├── ScrollReveal.tsx
│       ├── SectionWrapper.tsx
│       ├── LogoMarquee.tsx
│       └── GlassCard.tsx
├── lib/
│   ├── utils.ts                    # cn() helper (clsx + tailwind-merge)
│   ├── animations.ts              # Framer Motion preset variants
│   └── schemas.ts                 # Zod schemas for forms
├── messages/
│   ├── en.json                     # English translations
│   └── he.json                     # Hebrew translations
├── public/
│   ├── images/                     # Static images (team photos, backgrounds)
│   ├── logos/                      # Client logo placeholders
│   ├── llms.txt                    # LLM-readable company summary
│   └── og/                         # Static OG image fallbacks
├── styles/
│   └── globals.css                 # Tailwind directives + theme CSS variables
├── i18n/
│   ├── config.ts                   # next-intl configuration
│   └── request.ts                  # next-intl request config
├── middleware.ts                    # next-intl locale middleware
├── next.config.ts                  # Next.js config with next-intl plugin
├── tailwind.config.ts              # Tailwind config (if v4 still uses config file)
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .eslintrc.json
├── .prettierrc
└── .husky/
    └── pre-commit                  # Lint + format on commit
```

---

## 13. Data & Content Model

### Locale JSON Schema

Both `/messages/en.json` and `/messages/he.json` follow this structure:

```typescript
interface LocaleMessages {
  nav: {
    home: string;
    services: string;
    caseStudies: string;
    pricing: string;
    faq: string;
    contact: string;
    bookCall: string; // CTA button text
  };

  hero: {
    headline: string;
    subheadline: string;
    cta1: string;          // Primary CTA
    cta2: string;          // Secondary CTA
    urgencyBadge: string;  // e.g., "Only 3 spots left this quarter"
  };

  logoBar: {
    heading: string;       // e.g., "Trusted by 50+ businesses"
  };

  whyUs: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: Array<{
      title: string;
      description: string;
      stat: string;        // e.g., "7 days avg."
      statLabel: string;   // e.g., "to launch"
    }>;
  };

  mission: {
    statement: string;
    cta: string;
  };

  caseStudies: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      company: string;     // Company type/industry
      challenge: string;
      solution: string;
      metric: string;      // Key result number
      metricLabel: string; // e.g., "increase in throughput"
    }>;
  };

  stats: {
    items: Array<{
      value: number;
      suffix: string;      // e.g., "+", "%", "M+"
      label: string;       // e.g., "Projects Delivered"
    }>;
  };

  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };

  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    objectionLine: string; // Text below pricing tiers
    tiers: Array<{
      name: string;
      price: string;       // e.g., "₪3,500" or "Custom"
      period: string;      // e.g., "/month" or ""
      description: string;
      features: string[];
      cta: string;
      popular: boolean;
    }>;
  };

  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
      company: string;
      rating: number;      // 1-5
    }>;
  };

  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  };

  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };

  ctaBanner: {
    headline: string;
    subheadline: string;
    cta: string;
  };

  footer: {
    copyright: string;
    tagline: string;
    links: {
      privacy: string;
      terms: string;
    };
    social: {
      linkedin: string;
      twitter: string;
      instagram: string;
      whatsapp: string;
    };
  };

  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    bookCall: string;
    readMore: string;
    viewAll: string;
    mostPopular: string;
    perMonth: string;
    custom: string;
    spotsLeft: string;
  };
}
```

---

## 14. Implementation Phases

### Phase 1 — Foundation (Days 1–2)

**Goal:** Project scaffold with theming, i18n routing, and layout shell fully functional.

| Task | Details |
|------|---------|
| Project initialization | `pnpm create next-app` with TypeScript, Tailwind CSS v4, App Router |
| Install dependencies | shadcn/ui init, next-themes, next-intl, framer-motion, react-hook-form, zod, lucide-react |
| Tailwind + shadcn setup | Configure shadcn/ui, add all required UI primitives |
| Theme system | Define all 3 themes in `globals.css` as CSS custom properties, wire up `next-themes` |
| ThemePicker component | Dropdown with color swatches, theme persistence |
| Font loading | Configure `next/font` for Sora + Heebo, apply per locale |
| i18n routing | Set up next-intl middleware, `[locale]` route segment, locale detection |
| LanguageSwitcher | EN/עב toggle with path preservation |
| Layout shell | Root layout with ThemeProvider, locale layout with fonts/direction |
| Navbar | Sticky navbar with blur backdrop, logo, nav links, CTA, theme picker, language switcher, mobile hamburger |
| Footer | Full footer with links, social icons, copyright |
| Verify: all 3 themes switching correctly | Visual check |
| Verify: `/en` and `/he` routes with correct direction | RTL/LTR check |

### Phase 2 — Sections (Days 3–5)

**Goal:** All 14 sections built with placeholder content, animations, responsive layouts, and RTL support.

| Task | Details |
|------|---------|
| Hero section | Animated headline, CTAs, urgency badge, grid background |
| Logo Bar | Auto-scrolling marquee with placeholder logos |
| Why Us | 4 glassmorphism cards with scroll-triggered stagger animation |
| Mission | Full-width statement with gradient, CTA |
| Case Studies | Card grid with company/challenge/solution/metric structure |
| Stats Counter | 4 animated counters with intersection observer trigger |
| Services | 3 service cards with icon, description, features |
| Pricing | 3 tier cards with feature lists, "Most Popular" badge |
| Testimonials | Carousel (Embla) with avatar, quote, name, role |
| Team | Grid of team cards with hover bio reveal |
| FAQ | Accordion with 8 Q&A items |
| CTA Banner | Full-width gradient section with headline and CTA |
| Framer Motion presets | Define all animation variants in `lib/animations.ts` |
| ScrollReveal wrapper | Reusable component for scroll-triggered animations |
| Responsive audit | Test all sections at all breakpoints (mobile → 2xl) |
| RTL audit | Verify every section renders correctly in Hebrew/RTL |

### Phase 3 — Content & Polish (Days 6–7)

**Goal:** Final sales copy, SEO metadata, structured data, LLM accessibility, form validation.

| Task | Details |
|------|---------|
| English copy | Write final sales copy for all sections in `en.json` |
| Hebrew copy | Write native Hebrew copy (not translated) in `he.json` |
| SEO metadata | Title, description, OG tags for all pages in both locales |
| JSON-LD | Organization, WebSite, Service (×3), FAQPage, Review schemas |
| `/llms.txt` | Write and place plain-text company summary |
| `/api/company-info` | Build JSON API endpoint with full structured data |
| `sitemap.xml` | Auto-generated via `app/sitemap.ts` |
| `robots.txt` | Via `app/robots.ts` |
| `hreflang` tags | Cross-link `/en` ↔ `/he` in metadata |
| OG images | Generate dynamic OG images via `@vercel/og` or place static fallbacks |
| Contact form | React Hook Form + Zod validation, connected to submission endpoint |
| Form submission backend | Wire up to Formspree or serverless function (see Open Questions) |
| Realistic placeholder data | Team photos, client logos, testimonial avatars, case study details |
| Micro-interaction polish | Button hover glows, card hover lifts, focus ring animations |

### Phase 4 — Launch Prep (Day 8)

**Goal:** Production-ready, audited, deployed.

| Task | Details |
|------|---------|
| Lighthouse audit | Run on both `/en` and `/he`, achieve all targets |
| Accessibility audit | axe-core scan, keyboard navigation test, screen reader test |
| Cross-browser testing | Chrome, Firefox, Safari, Edge — desktop + mobile |
| Performance profiling | Bundle analysis, LCP/CLS/FID verification |
| Vercel deployment | Configure project, environment variables, custom domain |
| Analytics hooks | Vercel Analytics + Speed Insights integration |
| Final content review | Proofread all copy in both languages |
| Mobile final check | Real device testing (iOS Safari, Android Chrome) |
| Security check | CSP headers, no exposed API keys, form honeypot for spam |
| Launch | Deploy to production, verify all routes, test booking flow end-to-end |

---

## 15. Plugin & Library Evaluation Table

| Library | Recommendation | Justification |
|---------|---------------|---------------|
| `tailwindcss-animate` | **Include** | Provides CSS animation utilities (fade, slide, zoom) that complement Framer Motion for simpler CSS-only transitions. Used by shadcn/ui default setup. |
| `clsx` + `tailwind-merge` | **Include** | Required by shadcn/ui's `cn()` utility for conditional classname merging without Tailwind conflicts. Essential for the component system. |
| `react-intersection-observer` | **Include** | Lightweight hook for scroll-triggered animations. While Framer Motion has `whileInView`, this provides more control for animated counters and lazy loading triggers. |
| `sharp` | **Include** | Required by `next/image` for server-side image optimization (WebP/AVIF generation). Auto-installed by Next.js but should be explicit in dependencies. |
| `@vercel/og` | **Include** | Dynamic OG image generation for social sharing. Creates branded, locale-aware preview cards. Worth the minimal bundle impact for social/SEO benefit. |
| `class-variance-authority` (CVA) | **Include** | Component variant management used by shadcn/ui. Essential for type-safe button/badge/card variant definitions. |
| `embla-carousel` | **Include** | Lightweight carousel for testimonials section. Smaller than Swiper, RTL-compatible, accessible. Pairs with `embla-carousel-react` and `embla-carousel-autoplay`. |

---

## 16. Open Questions & Risks

### Open Questions

| # | Question | Options | Recommendation |
|---|----------|---------|----------------|
| 1 | **Form submission backend** | Formspree, Vercel serverless function, CRM API direct | Start with Formspree for rapid launch; migrate to serverless function + CRM integration in v2 |
| 2 | **Calendar booking integration** | Cal.com embed, Calendly embed, custom booking form | Cal.com — open source, customizable, supports Hebrew, embeds cleanly in dark themes |
| 3 | **Image asset pipeline** | Stock photos, AI-generated, professional shoot | Placeholder silhouettes for launch; professional team photos and branded visuals for v2 |
| 4 | **Domain and hosting** | Vercel (recommended), Netlify, self-hosted | Vercel — native Next.js support, Edge Network, Analytics integration, generous free tier |
| 5 | **Default locale** | Hebrew (`he`) or English (`en`) | Hebrew — primary market is Israel. Root `/` redirects to `/he` |
| 6 | **Content management** | Hardcoded JSON, headless CMS (Contentful, Sanity) | Start with JSON files; evaluate headless CMS if content updates become frequent |
| 7 | **Blog / content marketing** | Phase 1 or future scope | Future scope (v2) — not needed for launch, but URL structure should reserve `/blog` |

### Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Hebrew font rendering at display sizes** | Medium | Test Heebo at 72px+ early; have fallback fonts (Assistant, Rubik) ready |
| **RTL layout bugs in third-party components** | Medium | Audit Embla Carousel and shadcn/ui Sheet for RTL support; may need CSS overrides |
| **Framer Motion bundle size** | Low | Tree-shake via named imports; lazy load animation-heavy sections |
| **Theme flicker on page load** | Medium | Use `next-themes` `attribute="data-theme"` with `enableSystem={false}` and inline script to prevent FOUC |
| **Placeholder content looking unprofessional** | High | Use realistic placeholder data (not "Lorem ipsum"), branded placeholder images, realistic metrics |
| **LLM crawlers not following `/llms.txt` convention** | Low | Supplement with comprehensive JSON-LD and semantic HTML; `/llms.txt` is additive |
| **Tailwind CSS v4 breaking changes** | Medium | Pin version; review migration guide; v4 is stable as of 2025 |
| **Performance budget exceeded** | Medium | Run `@next/bundle-analyzer` after Phase 2; optimize before adding content |

---

*This PRD is the single source of truth for the flows44 website build. All implementation decisions should reference this document. Update this document as decisions are made on open questions.*
