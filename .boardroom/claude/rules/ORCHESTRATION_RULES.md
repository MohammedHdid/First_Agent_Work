# ORCHESTRATION RULES — Claude Code System
> How the Boardroom runs when using Claude Code (terminal/VSCode).
> **Triggering**: Programmatic — the Architect (main conversation) spawns subagents using the Agent tool.

---

## 1. The Three Modes

Same logic as Antigravity, different execution:

| Mode | Score | Who Builds | How |
|---|---|---|---|
| EXPRESS | 0 | Architect (this conversation) | Everything in one conversation |
| FREESTYLE | 1-2 | Architect (this conversation) | Everything in one conversation |
| BOARDROOM | 3-5 | 3 subagents spawned by Architect | Agent tool (background + foreground) |

---

## 2. How to Start a Project

Tell the Architect in Claude Code terminal:
```
Start a new project. Read .boardroom/claude/agents/ARCHITECT_DNA.md and begin.
```
Or to resume:
```
Resume the [Brand] project. Read .boardroom/SESSION_STATE.json and .boardroom/claude/agents/ARCHITECT_DNA.md.
```

The Architect handles everything from there. You don't open separate chat windows.

---

## 3. Boardroom Subagent Spawning

When the Architect determines Boardroom mode, it spawns agents programmatically:

### Parallel Build (FE + BE simultaneously)
The Architect uses the Agent tool with `run_in_background: true` for both:

```
Frontend subagent (background):
  Reads: .boardroom/claude/agents/FRONTEND_DNA.md
  Builds: Client_projects/[Brand]/ frontend
  Signals: writes FE_COMPLETE.md + updates SESSION_STATE.json

Backend subagent (background):
  Reads: .boardroom/claude/agents/BACKEND_DNA.md
  Builds: Client_projects/[Brand]/ backend
  Signals: writes BE_COMPLETE.md + updates SESSION_STATE.json
```

Both run simultaneously. The Architect waits for both to complete.

### QA (after both FE + BE complete)
```
QA subagent (foreground — Architect waits for result):
  Reads: .boardroom/claude/agents/QA_DNA.md
  Runs: actual bash commands (npm install, build, dev, lighthouse)
  Produces: QA_REPORT.md
  Verdict: PASS → Architect ships | FAIL → Architect routes fixes
```

### If QA Fails
Architect spawns a fix subagent (FE or BE depending on defect type), then re-spawns QA.

---

## 4. Session State

The Architect reads and writes `.boardroom/SESSION_STATE.json` to track state across sessions.

```json
{
  "mission": "PROJECT BOARDROOM V3.0",
  "active_system": "claude",
  "mode": "EXPRESS | FREESTYLE | BOARDROOM",
  "phase": "READY | DISCOVERY | CONTRACT | BUILD | QA | SHIP",
  "project": {
    "brand": "[Brand Name]",
    "github_url": "[URL]",
    "contract_version": "v1.0"
  },
  "status": {
    "architect": "CONTRACT_READY",
    "frontend": "IN_PROGRESS | FE_COMPLETE",
    "backend": "IN_PROGRESS | BE_COMPLETE",
    "qa": "WAITING | QA_PASS | QA_FAIL"
  },
  "last_updated": "[ISO 8601 timestamp]"
}
```

---

## 5. Switching From Antigravity Mid-Project

If Antigravity ran out of credits mid-project:
1. Open Claude Code terminal
2. Run: `Start a new project. Read .boardroom/SESSION_STATE.json and .boardroom/claude/agents/ARCHITECT_DNA.md.`
3. Architect reads SESSION_STATE.json → sees `active_system: "antigravity"` and current `phase`
4. Architect updates `active_system` to `"claude"` and resumes from the current phase
5. All project files in `Client_projects/[Brand]/` are already there — nothing is lost

---

## 6. Single Source of Truth

`CONTRACT.md` (at `Client_projects/[Brand]/CONTRACT.md`) governs all agents regardless of system.
**Neither system may deviate from the Contract. If reality conflicts, update the Contract first.**

---

## 7. Complexity Scoring Reference

| Factor | Yes=1 / No=0 |
|---|---|
| Custom Backend Code (real DB/auth/APIs, not embeds) | |
| Multi-Page with data dependencies | |
| Custom API development | |
| User Auth / Accounts | |
| Real-Time features | |

Score 0 → Express · Score 1-2 → Freestyle · Score 3-5 → Boardroom
