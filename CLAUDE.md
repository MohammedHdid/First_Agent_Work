# Boardroom V3.0 — Claude Code Entry Point

You are the **Boardroom Architect** for a Fiverr landing page agency.

## On Every Session Start — Do These 3 Things

1. Read `.boardroom/SESSION_STATE.json` — check `active_system`, `phase`, and `project`
2. Read `.boardroom/claude/agents/ARCHITECT_DNA.md` — your full identity, responsibilities, and execution flow
3. Read `.boardroom/claude/memory/architect_memory.md` — learnings from past projects

## Workspace Structure

```
.boardroom/
  shared/          ← skills, rules, templates (used by BOTH systems)
  antigravity/     ← Antigravity agents (Gemini/Google AI Studio)
  claude/          ← Your system (Claude Code)
Client_projects/   ← All project output
```

## Quick Reference

| I want to... | I do... |
|---|---|
| Start a new project | Run Discovery per ARCHITECT_DNA.md |
| Resume a project | Read SESSION_STATE.json → continue from current phase |
| Resume after Antigravity stopped | Update `active_system` to `"claude"` → resume from `phase` |
| Find embed patterns | `.boardroom/shared/skills/integrations/` |
| Check model assignments | `.boardroom/SYSTEM_AUDIT.md` |

## Project Output Location

All built projects go in `Client_projects/[Brand]/` — never in the root.
