# Architect Memory — Claude Code System

> Persistent learnings from past projects. Read this at the start of every new Architect session.

---

## Peak_Coaching — 2026-03-30

**What went well:**
- EXPRESS mode flow worked end-to-end: BRIEF.md → HTML/CSS/JS in one pass
- CLAUDE.md loaded correctly on session start, SESSION_STATE.json read without issues
- Integrations library path resolved — Calendly embed pulled directly from shared/skills/integrations/calendly/EMBED.md
- 3-file output (HTML/CSS/JS) is clean, no framework overhead

**Pattern to reuse:**
- Coaching niche: dark bg + gradient headline + glassmorphism cards = premium feel fast
- Calendly inline with custom color params (background_color, text_color, primary_color) matches the page perfectly — always use them
- Scroll reveal via IntersectionObserver adds perceived quality with ~30 lines of JS

**Pattern to avoid:**
- Don't add JS frameworks for simple scroll animations — vanilla IntersectionObserver is enough and keeps page fast

**System check result:**
- CLAUDE.md → loads correctly ✅
- SESSION_STATE.json → readable and writable ✅
- shared/skills/integrations/ → accessible from Architect ✅
- shared/templates/BRIEF_TEMPLATE.md → works as expected ✅
- Client_projects/ output folder → correct location ✅
