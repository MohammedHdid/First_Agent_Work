---
name: UI Sniper (Interface phase)
description: Inspects modern SaaS and competitor URLs to extract aesthetic design primitives.
tag: Frontend
systems: antigravity, claude
---
# UI Sniper Skill: Interface Extraction

**Task:** Perform Multimodal Browser inspection of competitor/inspiration URLs provided in the STRATEGY_MAP.md / BRIEF.md or found autonomously. Default reference: 21st.dev.

**When to Execute:**
- In **Boardroom mode**: Executed by the Frontend agent during the Build phase
- In **Freestyle / Express mode**: Executed by the Architect before building the UI

**Logic:**
1. Navigate to each reference URL using the Browser/Web tool
2. Extract exact CSS variables:
   - Color palette (HSL values for primary, secondary, accent, background, text)
   - Font families and sizes for H1, H2, H3, body, captions
   - Border radius values, shadow styles, spacing rhythm
3. Identify and catalog UI component patterns:
   - Hero layout (split, centered, full-bleed image, video)
   - Card designs (testimonial cards, feature cards, pricing cards)
   - Navigation style (sticky, transparent, hamburger breakpoint)
   - CTA button styles (gradient, glow, micro-animation)
   - Footer layout (simple, multi-column, newsletter)
4. Detect animation & interaction patterns:
   - Scroll-triggered reveals (fade-in, slide-up, parallax)
   - Hover states (scale, color shift, underline slide)
   - Page transition style (fade, slide, morph)
   - Loading states (skeleton, spinner, shimmer)

**Output:**
Produce a design brief (inline in conversation or separate file) with:

```markdown
## Design Extraction — [Reference URL]

### Color Palette
| Token | HSL Value | Usage |
|---|---|---|
| Primary | hsl(X, X%, X%) | CTAs, links |
| Secondary | hsl(X, X%, X%) | Accents |
| Background | hsl(X, X%, X%) | Page bg |
| Text | hsl(X, X%, X%) | Body text |

### Typography
| Element | Font | Size | Weight |
|---|---|---|---|
| H1 | [font] | [size] | [weight] |
| Body | [font] | [size] | [weight] |

### Component Patterns
- Hero: [layout type]
- Cards: [style description]
- Nav: [behavior]
- CTA: [style + animation]

### Motion
- Scroll reveals: [type + timing]
- Hover effects: [description]
- Page transitions: [type]
```

**Adaptation Rules:**
- Do NOT blindly copy. Adapt extracted primitives to match the brand's identity from STRATEGY_MAP.md / BRIEF.md
- If the reference is dark-mode and the brand needs light-mode, invert the palette intelligently
- If the reference uses a paid font, substitute with the closest Google Font equivalent
- Always apply `.boardroom/shared/rules/UNICORN_STANDARDS.md` quality gates on top of any extraction

**Verification:**
After generating the frontend, compare the rendered output against reference screenshots to ensure the design captures the same energy and quality level — not a pixel-perfect clone, but the same tier of polish.

**Error Handling:**
If the target URL blocks automated browsers or extraction fails, fall back strictly to `UNICORN_STANDARDS.md`. Log the extraction failure but do not halt the build.
