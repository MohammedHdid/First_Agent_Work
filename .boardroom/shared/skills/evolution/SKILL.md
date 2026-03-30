---
name: Self-Evolution (Improvement Phase)
description: Autonomously updates rules and skills to match next-generation trends.
assignee: Architect DNA
systems: antigravity, claude
---
# Evolution Skill: Self-Improvement

**Logic:** Research new design trends and technical frameworks periodically and promote recurring memory patterns into permanent rules.

**Authority:**
Granted Write-Access to `.boardroom/shared/` to improve skills, rules, and templates. May also create new specialized agents if a project requires it (e.g., SEO Specialist, Ads Conversion Agent).

**Triggers:**
1. **Post-Mortem trigger**: After Architect completes a Post-Mortem and identifies systemic improvements
2. **Manual trigger**: User explicitly asks to evolve/update the system
3. **Pattern trigger**: Memory files contain recurring patterns (3+ same "what worked" → promote to rule; 2+ same "what broke" → add prevention rule)

**Process:**
1. Read current trends from top design engineering resources.
2. Compare against `.boardroom/shared/rules/UNICORN_STANDARDS.md`.
3. If enhancements found, update the standards and adapt skills.
4. Review all memory files for recurring patterns and promote them as described above.
5. Check if any skill references deprecated APIs or outdated framework versions.
6. **MANDATORY: Update README.md** after ANY change to the system (DNA files, rules, skills, templates, structure). The README is the single user-facing source of truth.

**Evolution Log:**
After every evolution session, append to the active system's `memory/architect_memory.md`:
```markdown
## Evolution — [YYYY-MM-DD]

**What was updated:**
- [File]: [Change description]

**Why:**
- [Reasoning]

**Impact:**
- [What agents/workflows are affected]
```

**Scope of Changes:**
- `.boardroom/shared/` — OK to update freely (affects both systems)
- `.boardroom/antigravity/` — only update if the change is Antigravity-specific
- `.boardroom/claude/` — only update if the change is Claude-specific
- When a change applies to both systems, update `shared/` only — never duplicate

**Guardrails:**
- Conversion and Accessibility (WCAG 2.1) are non-negotiable — never sacrifice for trends
- Do NOT remove working patterns just because something new appeared — add, don't replace without testing
- After updating a shared skill, re-read both system DNA files that use it to ensure consistency
- Flag proposed breaking changes with `⚠️ PROPOSED` markers for user approval before applying
