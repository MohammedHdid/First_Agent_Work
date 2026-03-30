# ORCHESTRATION RULES — Antigravity System
> How the 4 Boardroom agents coordinate. Every agent MUST read this before starting work.
> **Triggering**: Manual — you open each chat in Google AI Studio and paste the starter prompt.

---

## 1. The Three Modes

```
After Discovery, Architect scores complexity (0-5) and recommends a mode:

Score 0   → 🟢 EXPRESS    → 1 chat · HTML/CSS/JS · ~30 min
Score 1-2 → 🟡 FREESTYLE  → 1 chat · builds all · ~60 min
Score 3-5 → 🔴 BOARDROOM  → 4 chats · multi-agent · ~2h
```

### Mode: Express
- Architect builds everything in ONE conversation
- Single output: `BRIEF.md` (replaces all other docs)
- Stack: HTML / CSS / JS — no framework
- Integrations via embeds from `.boardroom/shared/skills/integrations/`
- Closed-loop verification: open HTML in browser, check all sections + embeds
- Ship on user confirmation

### Mode: Freestyle
- Architect builds everything in ONE conversation
- Outputs: `STRATEGY_MAP.md` + `CONTRACT.md` (slim) + `COPY_DECK.md`
- Stack: HTML+webhooks OR Next.js — Architect decides based on complexity
- Closed-loop verification before shipping
- Ship on user confirmation

### Mode: Boardroom
- Multi-chat, multi-agent flow (see Section 2)
- Full CONTRACT.md with all sections
- Canary verification before full build
- QA Judge runs before ship

---

## 2. Boardroom Lifecycle

```
Phase 1: DISCOVERY           → Architect (alone)
Phase 2: CONTRACT + COPY     → Architect (alone)
Phase 3: CANARY              → FE + BE implement one endpoint, verify handshake
Phase 4: BUILD               → Frontend Sniper ∥ Backend Specialist (parallel)
Phase 5: QA                  → Quality Judge
Phase 6: SHIP                → Architect (git commit + push, with user approval)
Phase 7: POST-MORTEM         → Optional (recommended for first project in a niche)
```

### Boardroom Rules
- No phase may start before its predecessor completes
- Canary verifies FE↔BE handshake before full build
- QA requires BOTH FE and BE to signal completion
- Ship requires QA PASS and explicit user approval
- Post-Mortem: recommended, not mandatory

---

## 3. How to Start Each Agent (Copy-Paste Starters)

### Chat 1 — Contract Architect
```
You are the Contract Architect. Read your DNA at:
.boardroom/antigravity/agents/CONTRACT_ARCHITECT_DNA.md

Also read:
- .boardroom/shared/rules/UNICORN_STANDARDS.md
- .boardroom/shared/rules/NAMING_CONVENTIONS.md
- .boardroom/antigravity/memory/architect_memory.md

Begin the Discovery Phase for a new project.
```

### Chat 2 — Frontend Sniper (Boardroom only)
```
You are the Frontend Sniper. Read your DNA at:
.boardroom/antigravity/agents/FRONTEND_SNIPER_DNA.md

Also read:
- .boardroom/shared/rules/UNICORN_STANDARDS.md
- .boardroom/shared/rules/NAMING_CONVENTIONS.md
- .boardroom/antigravity/memory/frontend_memory.md

The project is [BRAND] at Client_projects/[BRAND]/.
CONTRACT.md and COPY_DECK.md are ready. Begin building.
```

### Chat 3 — Backend Specialist (Boardroom only)
```
You are the Backend Specialist. Read your DNA at:
.boardroom/antigravity/agents/BACKEND_SPECIALIST_DNA.md

Also read:
- .boardroom/shared/rules/NAMING_CONVENTIONS.md
- .boardroom/antigravity/memory/backend_memory.md

The project is [BRAND] at Client_projects/[BRAND]/.
CONTRACT.md is ready. Begin building.
```

### Chat 4 — Quality Judge (Boardroom only)
```
You are the Quality Judge. Read your DNA at:
.boardroom/antigravity/agents/QUALITY_JUDGE_DNA.md

Also read:
- .boardroom/shared/templates/QA_CHECKLIST.md
- .boardroom/antigravity/memory/qa_memory.md

The project is [BRAND] at Client_projects/[BRAND]/.
Both FE and BE are complete. Begin full QA.
```

---

## 4. Single Source of Truth

`CONTRACT.md` (located at `Client_projects/[Brand]/CONTRACT.md`) is the ONLY source of truth for:
- API endpoint names, methods, paths, and payloads
- Database table names, columns, types, and constraints
- Shared TypeScript interface definitions
- UI page routes and data requirements
- Environment variable names

**No agent may deviate from the Contract. If reality conflicts with the Contract, update the Contract first.**

---

## 5. Parallel Work Protocol (Phase 4)

During the Build phase:
- Frontend Sniper and Backend Specialist do NOT communicate directly
- Both consume CONTRACT.md independently
- Both follow `NAMING_CONVENTIONS.md` for compatibility
- Backend Specialist produces `src/types/contract.ts` — Frontend imports it
- If either agent finds a CONTRACT ambiguity:
  1. STOP work on ambiguous item
  2. Continue work on unambiguous items
  3. Signal Architect with specific amendment request
  4. Wait for Contract update before resuming

---

## 6. Handoff Signals

Agents update `.boardroom/SESSION_STATE.json` to signal phase transitions:

| Signal | From | Meaning |
|---|---|---|
| `DISCOVERY_COMPLETE` | Architect | Strategy locked |
| `CONTRACT_READY` | Architect | Begin Build |
| `FE_COMPLETE` | Frontend Sniper | Frontend ready for QA |
| `BE_COMPLETE` | Backend Specialist | Backend ready for QA |
| `QA_PASS` | Quality Judge | Ready to ship |
| `QA_FAIL` | Quality Judge | Defects found, fix required |
| `SHIP_APPROVED` | User | Push to remote |

---

## 7. Contract Versioning

When Architect amends the Contract mid-build:
1. Add timestamped entry to `## Changelog` section
2. Increment version number (v1.0 → v1.1)
3. Mark what changed (added/modified/removed)
4. Notify affected agents to re-read updated sections

---

## 8. Complexity Scoring Reference

| Factor | Yes=1 / No=0 |
|---|---|
| Custom Backend Code (real DB/auth/APIs) | 0 or 1 |
| Multi-Page with data dependencies | 0 or 1 |
| Custom API development | 0 or 1 |
| User Auth / Accounts | 0 or 1 |
| Real-Time features | 0 or 1 |

Score 0 → Express · Score 1-2 → Freestyle · Score 3-5 → Boardroom
