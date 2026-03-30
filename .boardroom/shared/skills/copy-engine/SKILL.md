---
name: Copy Engine (Conversion phase)
description: Generates high-converting, context-aware copywriting tailored to the niche.
assignee: Architect DNA
systems: antigravity, claude
---
# Copy Engine Skill: Context-Aware Conversion

**Logic:** Produce highly persuasive, context-aware copywriting based on the `STRATEGY_MAP.md` or `BRIEF.md`. Focus the tone based on the niche:
- **SaaS:** Benefit-driven, metric-focused (e.g., "Save 10 hours a week").
- **E-Com:** Offer-driven, urgency-focused (e.g., "Limited drop, secure yours now").
- **Coaching/Influencer:** Transformation-driven, empathetic (e.g., "Finally break through your revenue ceiling").

**Instruction:**
Use the following structured progression for EVERY Landing Page.
1. **Hero (PAS):** Call out the pain point (Problem), twist the knife (Agitate), and introduce the Unicorn solution (Solve).
2. **Features/Offers:** Detail exactly what the customer gets.
3. **Social Proof (Mandatory):** Always include a Reviews/Testimonials section to build trust.
4. **Final CTA (Mandatory):** Always close the page with a dedicated Final Call-to-Action section before the footer.

**Output Format:**
Produce a `Client_projects/[Brand]/COPY_DECK.md` with the following structure:

```markdown
# COPY_DECK — [Brand Name]

## Meta
- **Page Title (SEO):** [60 chars max]
- **Meta Description:** [155 chars max]
- **OG Title:** [same or variant of page title]
- **OG Description:** [same or variant of meta description]

## Hero Section
- **Headline:** [Main headline — max 10 words, punchy]
- **Subheadline:** [Supporting text — 1-2 sentences]
- **CTA Button:** [Action text — e.g., "Start Free Trial"]
- **CTA Destination:** [URL or section anchor]

## Problem / Pain Section
- **Section Title:** [e.g., "You're Tired of..."]
- **Pain Points:** [3-4 bullet points]

## Solution / Features Section
- **Section Title:** [e.g., "Here's How We Fix It"]
- **Features:** [3-5 features with title + 1-line description each]

## Social Proof Section
- **Section Title:** [e.g., "Trusted by 500+ Coaches"]
- **Testimonials:** [2-4 testimonials with name, role, quote]
- **Trust Badges:** [e.g., "As seen in...", star ratings, client count]

## Final CTA Section
- **Headline:** [Urgency-driven closing headline]
- **Body:** [1-2 sentences reinforcing the offer]
- **CTA Button:** [Action text]

## Footer
- **Links:** [Privacy, Terms, Contact, Social icons]
- **Copyright:** [© Year Brand Name. All rights reserved.]
```

**Language Rules:**
- Use the language specified in the STRATEGY_MAP.md or BRIEF.md
- If Arabic/RTL is required, produce a separate section or file with RTL copy (flag word direction issues)
- Keep sentences short. Max 20 words per sentence for headlines, max 25 for body text.
- Use power verbs: Transform, Unlock, Accelerate, Discover, Master, Launch
- Avoid jargon unless the target audience expects it (SaaS technical buyers vs fitness moms)

**SEO Guidelines:**
- Include primary keyword in: page title, H1, meta description, first paragraph
- Use secondary keywords naturally in H2s and body text
- Every image alt text should be descriptive and keyword-aware

**Error Handling:**
If the provided niche context is too sparse to write compelling copy, infer standard pain points for that industry and explicitly note these assumptions with `⚠️ ASSUMED` markers so the user can refine them later.
