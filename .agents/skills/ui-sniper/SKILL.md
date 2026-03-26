---
name: UI Sniper (Interface phase)
description: Inspects modern SaaS and competitor URLs to extract aesthetic design primitives.
---
# UI Sniper Skill: Interface Extraction

**Task:** Perform Multimodal Browser inspection of 21st.dev and competitor URLs provided or found autonomously.

**Logic:**
1. Extract exact CSS variables (e.g., HSL values, font families).
2. Identify and replicate Shadcn/UI component structures suitable for the layout.
3. Detect "Micro-interaction" triggers (e.g., hover states, Framer Motion parameters) needed to achieve the "Unicorn" feel.

**Verification:**
After generating the frontend, compare the rendered code against a screenshot of the reference URL using your Vision capabilities to ensure a perfect match.

**Error Handling:**
If the target URL blocks automated browsers or if extraction fails, fall back strictly to the `UNICORN_STANDARDS.md` internal guidelines to generate the interface. Log the extraction failure in the terminal but do not halt the build.
