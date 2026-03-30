# HANDOFF PROTOCOL — Antigravity System
> Phase transition signals for Boardroom mode.

---

## Signal Mechanism

Agents signal transitions by updating `.boardroom/SESSION_STATE.json`.

### SESSION_STATE.json Structure

```json
{
  "mission": "PROJECT BOARDROOM V3.0",
  "active_system": "antigravity",
  "mode": "EXPRESS | FREESTYLE | BOARDROOM",
  "phase": "DISCOVERY | CONTRACT | BUILD | QA | SHIP",
  "project": {
    "brand": "[Brand Name]",
    "github_url": "[URL]",
    "contract_version": "v1.0"
  },
  "status": {
    "architect": "CONTRACT_READY",
    "frontend": "IN_PROGRESS",
    "backend": "IN_PROGRESS",
    "qa": "WAITING"
  },
  "last_updated": "[ISO 8601 timestamp]"
}
```

---

## Signal Definitions

### Discovery → Contract
| Field | Value |
|---|---|
| **Signal** | `DISCOVERY_COMPLETE` |
| **Set by** | Architect |
| **Precondition** | STRATEGY_MAP.md / BRIEF.md exists |
| **Action** | Architect writes CONTRACT.md / proceeds to build |

### Contract → Build
| Field | Value |
|---|---|
| **Signal** | `CONTRACT_READY` |
| **Set by** | Architect |
| **Precondition** | CONTRACT.md + COPY_DECK.md exist |
| **Action** | FE Sniper and BE Specialist begin parallel work |

### Build → QA
| Field | Value |
|---|---|
| **Signal** | `FE_COMPLETE` + `BE_COMPLETE` (both required) |
| **Set by** | FE Sniper + BE Specialist independently |
| **Precondition** | Each agent completed Closed-Loop Verification |
| **Action** | Quality Judge begins full integration testing |

### QA → Ship
| Field | Value |
|---|---|
| **Signal** | `QA_PASS` |
| **Set by** | Quality Judge |
| **Precondition** | All quality gates pass |
| **Action** | Architect prepares commit, requests user confirmation |

### QA Failure → Rework
| Field | Value |
|---|---|
| **Signal** | `QA_FAIL` |
| **Set by** | Quality Judge |
| **Precondition** | Critical defects found |
| **Action** | Judge creates `FIX_REQUEST.md`, responsible agent resumes |
| **Re-entry** | After fix: agent sets `FIX_APPLIED`, QA re-runs full cycle |

---

## Rules

1. Only the responsible agent updates their own status field
2. The Architect may update any field (as Mission Controller)
3. No agent may begin work until preconditions are met
4. SESSION_STATE.json must always reflect current reality
5. Always update `last_updated` on every status change
6. When switching to Claude Code system: set `active_system` to `"claude"` — Claude reads this to know where to resume
