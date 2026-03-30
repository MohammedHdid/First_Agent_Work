# Agent Memory System — Claude Code

This directory stores persistent learnings across sessions for the Claude Code system.

## Structure

```
claude/memory/
├── README.md              ← This file
├── architect_memory.md    ← Architect learnings
├── frontend_memory.md     ← Frontend subagent learnings
├── backend_memory.md      ← Backend subagent learnings
├── qa_memory.md           ← QA subagent learnings
└── project_log.md         ← Master log of all completed projects
```

## Rules

1. **Read at start**: Every subagent reads its memory file before beginning work
2. **Append at end**: Before completing, the subagent appends key learnings
3. **Never delete entries** — old entries provide pattern recognition
4. **Keep entries concise** — 3-5 bullets per entry
5. **The Architect owns `project_log.md`**

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
