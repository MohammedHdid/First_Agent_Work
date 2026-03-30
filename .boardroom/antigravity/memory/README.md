# Agent Memory System — Antigravity

This directory stores persistent learnings across conversations for the Antigravity system.

## Structure

```
antigravity/memory/
├── README.md              ← This file
├── architect_memory.md    ← Architect learnings
├── frontend_memory.md     ← Frontend Sniper learnings
├── backend_memory.md      ← Backend Specialist learnings
├── qa_memory.md           ← Quality Judge learnings
└── project_log.md         ← Master log of all completed projects
```

## Rules

1. **Read at start**: Add to your starter prompt — "Read `.boardroom/antigravity/memory/[agent]_memory.md`"
2. **Append at end**: Before signing off, add a new entry with key learnings
3. **Never delete entries** — old entries provide pattern recognition
4. **Keep entries concise** — 3-5 bullet points per entry, not an essay
5. **The Architect owns `project_log.md`** — updated during Post-Mortem

## Memory Entry Format

```markdown
## [Brand Name] — [YYYY-MM-DD]

**What went well:**
- [Bullet]

**What broke / needed fixing:**
- [Bullet]

**Pattern to reuse:**
- [Bullet]

**Pattern to avoid:**
- [Bullet]
```
