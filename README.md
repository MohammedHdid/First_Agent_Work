# BOARDROOM V3.0 — Landing Page Factory
> Dual-system multi-agent workspace. Use Antigravity agents or Claude Code — same structure, same output.

---

## The Workspace at a Glance

```
Landing Pages Agent/
│
├── .boardroom/                          ← THE BRAIN
│   │
│   ├── shared/                          ← USED BY BOTH SYSTEMS
│   │   ├── skills/
│   │   │   ├── copy-engine/             ← Conversion copywriting
│   │   │   ├── discovery/               ← Strategy interview
│   │   │   ├── ui-sniper/               ← Competitor design extraction
│   │   │   ├── technical-bridge/        ← Git, scaffolding, CI/CD
│   │   │   ├── evolution/               ← Self-improvement
│   │   │   └── integrations/            ← ★ NEW — embed patterns
│   │   │       ├── n8n/PATTERNS.md      ← Webhook automations
│   │   │       ├── calendly/EMBED.md    ← Booking widgets
│   │   │       ├── email/EMBED.md       ← ConvertKit, Mailchimp
│   │   │       └── chatbots/EMBED.md    ← Tidio, Crisp, Tawk, Custom AI
│   │   ├── rules/
│   │   │   ├── NAMING_CONVENTIONS.md    ← DB/TS/CSS/Git standards
│   │   │   └── UNICORN_STANDARDS.md     ← Design quality gates
│   │   └── templates/
│   │       ├── BRIEF_TEMPLATE.md        ← ★ NEW — Express mode doc
│   │       ├── CONTRACT_TEMPLATE.md     ← Freestyle/Boardroom doc
│   │       └── QA_CHECKLIST.md          ← All modes QA reference
│   │
│   ├── antigravity/                     ← ANTIGRAVITY ONLY
│   │   ├── agents/
│   │   │   ├── CONTRACT_ARCHITECT_DNA.md   ← Gemini 3.1 Pro High
│   │   │   ├── FRONTEND_SNIPER_DNA.md      ← Gemini 3.1 Pro High
│   │   │   ├── BACKEND_SPECIALIST_DNA.md   ← Claude Sonnet 4.6
│   │   │   └── QUALITY_JUDGE_DNA.md        ← Gemini Flash
│   │   ├── rules/
│   │   │   ├── ORCHESTRATION_RULES.md   ← Manual chat-based flow
│   │   │   └── HANDOFF_PROTOCOL.md      ← Phase transition signals
│   │   └── memory/                      ← Antigravity learning history
│   │
│   ├── claude/                          ← CLAUDE CODE ONLY
│   │   ├── agents/
│   │   │   ├── ARCHITECT_DNA.md         ← Claude Opus 4.6
│   │   │   ├── FRONTEND_DNA.md          ← Claude Sonnet 4.6
│   │   │   ├── BACKEND_DNA.md           ← Claude Sonnet 4.6
│   │   │   └── QA_DNA.md                ← Claude Sonnet 4.6
│   │   ├── rules/
│   │   │   └── ORCHESTRATION_RULES.md   ← Programmatic subagent flow
│   │   └── memory/                      ← Claude learning history
│   │
│   ├── SESSION_STATE.json               ← SHARED bridge between systems
│   └── SYSTEM_AUDIT.md                 ← Models, stack, MCP status
│
├── Client_projects/                     ← ALL PROJECT OUTPUT (shared)
│   └── [Brand]/
│       ├── BRIEF.md                     ← Express mode
│       ├── CONTRACT.md                  ← Freestyle/Boardroom
│       ├── COPY_DECK.md                 ← Freestyle/Boardroom
│       ├── STRATEGY_MAP.md              ← Freestyle/Boardroom
│       └── src/                         ← Built code
│
└── .agents/                             ← LEGACY (V2.3 — kept for reference)
```

---

## Model Assignments

### Antigravity System
| Agent | Model | Why |
|---|---|---|
| Contract Architect | **Gemini 3.1 Pro High** | Strategy + copy + mode decision = max reasoning needed |
| Frontend Sniper | **Gemini 3.1 Pro High** | UI is the deliverable — visual reasoning matters most |
| Backend Specialist | **Claude Sonnet 4.6** | CRUD/auth patterns are structured work, Sonnet is enough |
| Quality Judge | **Gemini Flash** | Checklist verification = analytical speed, not creativity |

### Claude Code System
| Agent | Model | Why |
|---|---|---|
| Architect | **Claude Opus 4.6** | Strategy + copy + orchestrating subagents |
| Frontend | **Claude Sonnet 4.6** | UI code generation |
| Backend | **Claude Sonnet 4.6** | Structured technical work |
| QA | **Claude Sonnet 4.6** | Runs bash commands natively |

---

## The Three Modes

```
Every project starts with a complexity score (0-5):

  Custom Backend Code?   Yes=1  No=0
  Multi-Page Dynamic?    Yes=1  No=0
  Custom APIs?           Yes=1  No=0
  User Auth?             Yes=1  No=0
  Real-Time?             Yes=1  No=0

Score 0   → 🟢 EXPRESS    — Embeds only. 1 doc. 1 agent. ~30 min.
Score 1-2 → 🟡 FREESTYLE  — Light backend. 1 agent builds all. ~60 min.
Score 3-5 → 🔴 BOARDROOM  — Real backend. 4 agents. ~2h.
```

### Express (Score 0) — Most Fiverr Jobs
- Stack: HTML / CSS / JS (no framework)
- Output: single `BRIEF.md`
- Integrations: Calendly embed, n8n webhook, Tidio chatbot, ConvertKit form — all from `shared/skills/integrations/`
- One agent, one conversation, ship to Vercel

### Freestyle (Score 1-2) — Custom Logic Needed
- Stack: HTML+webhooks OR Next.js depending on complexity
- Output: `STRATEGY_MAP.md` + slim `CONTRACT.md` + `COPY_DECK.md`
- One agent builds everything solo
- More docs, more control

### Boardroom (Score 3-5) — Full Stack
- Stack: Next.js 15 + Tailwind 4 + Supabase + Framer Motion
- Output: Full `CONTRACT.md` + all docs
- 4 agents: Architect → FE ∥ BE → QA → Ship
- For real booking systems, auth, complex automations

---

## Using Antigravity System

### Start a new project (Chat 1 — Architect)
```
Read .boardroom/antigravity/START_ARCHITECT.md and begin.
```

### If Boardroom — Chat 2 (Frontend Sniper)
```
Read .boardroom/antigravity/START_FRONTEND.md — project is [BRAND], begin building.
```

### If Boardroom — Chat 3 (Backend Specialist)
```
Read .boardroom/antigravity/START_BACKEND.md — project is [BRAND], begin building.
```

### If Boardroom — Chat 4 (Quality Judge)
```
Read .boardroom/antigravity/START_QA.md — project is [BRAND], begin full QA.
```

---

## Using Claude Code System

### Start a new project
Open Claude Code terminal and say:
```
Start a new project. Read .boardroom/claude/agents/ARCHITECT_DNA.md and begin Discovery.
```

That's it. The Architect handles mode decision, builds, and spawns subagents automatically.

### Resume after Antigravity stopped (credit switchover)
```
Resume the [Brand] project. Read .boardroom/SESSION_STATE.json
and .boardroom/claude/agents/ARCHITECT_DNA.md.
```
Claude reads the session state, updates `active_system` to `"claude"`, and picks up from the current phase.

---

## Switching Between Systems Mid-Project

The `SESSION_STATE.json` is the bridge:
```json
{
  "active_system": "antigravity",  ← change to "claude" when switching
  "phase": "BUILD",                ← tells Claude where to resume
  "status": {
    "frontend": "FE_COMPLETE",     ← Claude knows FE is done, only BE needed
    "backend": "IN_PROGRESS"
  }
}
```

Both systems write to the same `Client_projects/[Brand]/` folder. No file is lost when switching.

---

## What Lives Where — Quick Reference

| If you want to... | Go to... |
|---|---|
| Improve copywriting technique | `shared/skills/copy-engine/SKILL.md` |
| Add a new embed pattern | `shared/skills/integrations/` |
| Update naming conventions | `shared/rules/NAMING_CONVENTIONS.md` |
| Update design standards | `shared/rules/UNICORN_STANDARDS.md` |
| Tune Gemini agent behavior | `antigravity/agents/` |
| Tune Claude agent behavior | `claude/agents/` |
| Update Antigravity orchestration | `antigravity/rules/ORCHESTRATION_RULES.md` |
| Update Claude orchestration | `claude/rules/ORCHESTRATION_RULES.md` |
| Check current project state | `SESSION_STATE.json` |
| Check models and stack | `SYSTEM_AUDIT.md` |

**Rule of thumb**: If a change applies to both systems → update `shared/`. If it's AI-specific → update only that system's folder.

---

*Boardroom V3.0 — Upgraded 2026-03-30*
*Changes from V2.3: Added Express mode · 3-mode scoring · Integrations library · Claude Code system · Hybrid handover · Model reassignments*
