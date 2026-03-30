# BRIEF.md — Peak Coaching

**Date**: 2026-03-30
**Mode**: EXPRESS
**Stack**: HTML / CSS / JS (static)

---

## 1. Brand Profile

| Field | Value |
|---|---|
| Brand Name | Peak Coaching |
| Niche | Coaching |
| Core Objective | Book free 30-min discovery calls with executive clients |
| Visual Identity | Unicorn Design (dark, premium, glassmorphism) |
| Language | EN |
| Target Audience | Mid-senior professionals, 30-50, feeling stuck, high buying power |

---

## 2. Page Sections

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Headline + CTA scrolls to #booking |
| 2 | Pain Points | 3 bullets — what clients feel before coaching |
| 3 | What You Get | 3 offer pillars |
| 4 | Testimonials | 3 social proof cards |
| 5 | Booking | Calendly inline embed |
| 6 | Footer | Copyright + links |

---

## 3. Copy

### Hero
- **Headline**: Stop Managing Your Life. Start Leading It.
- **Subheadline**: Private coaching for executives ready to operate at their highest level — mentally, professionally, and personally.
- **CTA Button**: Book Your Free Discovery Call
- **CTA Destination**: #booking

### Pain Points
- **Title**: Sound Familiar?
- You're high-performing at work but running on empty at home
- You've hit your goals — and still feel like something's missing
- You know what to do. You just can't seem to do it consistently

### Offer Pillars
- **Title**: What Changes With Peak Coaching
- **Clarity** — Cut through the noise and get crystal-clear on your next move
- **Momentum** — Build systems that move you forward without burning you out
- **Mastery** — Develop the inner game of a true high performer

### Testimonials
- "In 3 months I went from dreading Mondays to running my best quarter ever." — Sarah K., VP of Sales
- "Peak Coaching gave me the framework to finally stop reacting and start leading." — James R., Founder
- "I thought I needed a strategy. Turns out I needed clarity. Game changer." — Amina T., Director

### Final CTA
- **Headline**: Your Next Level is One Call Away
- **Body**: Free 30-minute discovery call. No pitch, no pressure — just clarity.
- **Button**: Claim Your Free Call

### SEO
- **Page Title**: Peak Coaching — Executive Life Coaching for High Performers
- **Meta Description**: Private 1-on-1 coaching for executives and leaders. Book your free 30-min discovery call and start performing at your peak.

---

## 4. Design Tokens

| Token | Value |
|---|---|
| `--brand-primary` | hsl(262, 83%, 58%) |
| `--brand-secondary` | hsl(220, 70%, 50%) |
| `--brand-accent` | hsl(45, 100%, 65%) |
| `--bg-dark` | hsl(222, 47%, 11%) |
| `--bg-card` | hsl(222, 40%, 15%) |
| `--text-primary` | hsl(0, 0%, 96%) |
| `--text-muted` | hsl(220, 15%, 65%) |
| Font (Heading) | Outfit |
| Font (Body) | Inter |
| Border Radius | 16px |

---

## 5. Integrations

| Integration | Type | Config |
|---|---|---|
| Booking | Calendly inline | URL: `https://calendly.com/YOUR_USERNAME/discovery-call` |

---

## 6. Acceptance Criteria

- [x] All 6 sections render on mobile (375px) and desktop (1440px)
- [x] Calendly embed loads in #booking section
- [x] No placeholder text
- [x] All CTAs scroll to #booking
- [x] Glassmorphism cards, smooth animations
