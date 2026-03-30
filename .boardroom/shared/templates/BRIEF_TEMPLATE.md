# BRIEF TEMPLATE — Express Mode
> **Instructions**: Architect fills this single document for Express mode projects. Replaces STRATEGY_MAP + CONTRACT + COPY_DECK for simple landing pages with embed-only backends.

---

# BRIEF.md — [Brand Name]

**Date**: [YYYY-MM-DD]
**Mode**: EXPRESS
**Stack**: HTML / CSS / JS (static)

---

## 1. Brand Profile

| Field | Value |
|---|---|
| Brand Name | |
| Niche | SaaS / E-Com / Coaching / Influencer |
| Core Objective | e.g., "Capture leads for free webinar" |
| Visual Identity | Unicorn Design / Custom (attach brand guide) |
| Language | EN / FR / AR / Other |
| Target Audience | |

---

## 2. Page Sections

List every section needed, in order:

| # | Section | Content Source | Notes |
|---|---|---|---|
| 1 | Hero | Copy below | CTA scrolls to #booking |
| 2 | Problem/Pain | Copy below | 3 bullet points |
| 3 | Features | Copy below | |
| 4 | Testimonials | Client-provided | 3 testimonials |
| 5 | Booking | Calendly embed | See integrations |
| 6 | Footer | Standard | Links: Privacy, Contact |

---

## 3. Copy

### Hero
- **Headline**:
- **Subheadline**:
- **CTA Button Text**:
- **CTA Destination**: (URL or #section-id)

### Problem Section
- **Title**:
- **Pain Points**:
  -
  -
  -

### Features / Offer
- **Title**:
- **Feature 1**: [Title] — [1-line description]
- **Feature 2**:
- **Feature 3**:

### Social Proof
- **Section Title**:
- **Testimonial 1**: "[Quote]" — Name, Title
- **Testimonial 2**:
- **Trust Badges**:

### Final CTA
- **Headline**:
- **Body**:
- **Button Text**:

### SEO
- **Page Title** (60 chars):
- **Meta Description** (155 chars):

---

## 4. Design Tokens

| Token | Value |
|---|---|
| `--brand-primary` | hsl( , , ) |
| `--brand-secondary` | hsl( , , ) |
| `--brand-accent` | hsl( , , ) |
| `--bg-dark` | hsl( , , ) |
| `--text-primary` | hsl( , , ) |
| Font (Heading) | Outfit |
| Font (Body) | Inter |
| Border Radius | 12px |

---

## 5. Integrations (Embeds Only)

| Integration | Type | Config |
|---|---|---|
| Booking | Calendly inline | URL: `https://calendly.com/...` |
| Lead Capture | n8n webhook | Webhook: `https://...` |
| Chatbot | Tidio | Key: `...` |
| Email | ConvertKit embed | Form ID: `...` |

> Reference: `.boardroom/shared/skills/integrations/` for embed code patterns.

---

## 6. Assets

| Asset | Status | Notes |
|---|---|---|
| Logo | Provided / To Design | |
| Hero Image / Video | Provided / Placeholder | |
| Testimonial Photos | Provided / Placeholder | |
| Favicon | To Generate | |

---

## 7. Deployment

| Field | Value |
|---|---|
| Deploy Target | Vercel / Netlify / Client Host |
| Domain | |
| GitHub Repo | |

---

## 8. Acceptance Criteria

- [ ] All sections render on mobile (375px) and desktop (1440px)
- [ ] All embeds load correctly (Calendly, chatbot, forms)
- [ ] No placeholder text anywhere
- [ ] Page loads under 2 seconds
- [ ] Copy matches this document exactly
- [ ] All links and CTAs work
