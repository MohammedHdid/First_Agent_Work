# REQUIRED CONNECTORS — MCP Server Checklist
> **Boardroom V2.3** — Last verified: 2026-03-27

These MCP (Model Context Protocol) servers must be enabled in your Windsurf/IDE environment to unlock full autonomy for each agent. The Boardroom **works without all of them** (fallbacks exist), but each connection removes a manual step.

---

## Connection Status

| # | MCP Server | Status | Required By | Priority |
|---|---|---|---|---|
| 1 | GitHub | ❌ Not Connected | Architect (Ship phase) | 🔴 Critical |
| 2 | Supabase | ❌ Not Connected | Backend Specialist | 🟡 High |
| 3 | Vercel | ❌ Not Connected | Architect (Deploy) | 🟢 Optional |

> **Note**: Browser automation and file system access are **built-in** to your IDE agent — no MCP server needed for those.

---

## 1. GitHub MCP Server

| Field | Detail |
|---|---|
| **Status** | ❌ Not Connected |
| **Priority** | 🔴 Critical |
| **Used By** | 🧠 Contract Architect (Ship phase), `technical-bridge` skill |
| **Purpose** | Repository management — create repos, commit, push, manage branches, verify remote status |
| **What Happens Without It** | You must run `git add`, `git commit`, and `git push` commands **manually** in the terminal when the Architect asks you to ship. The agent will prepare the commands for you, but cannot execute GitHub API operations autonomously. |
| **How to Enable** | In your IDE settings → MCP Servers → Add GitHub MCP. You will need a GitHub Personal Access Token (PAT) with `repo` scope. |

### Verification Test
Once connected, the agent should be able to:
- List your repositories
- Read repo contents
- Create commits and push

---

## 2. Supabase MCP Server

| Field | Detail |
|---|---|
| **Status** | ❌ Not Connected |
| **Priority** | 🟡 High |
| **Used By** | 🔧 Backend Specialist |
| **Purpose** | Direct database operations — create tables, apply migrations, configure RLS policies, manage auth settings, seed data |
| **What Happens Without It** | The Backend Specialist automatically switches to **Mock API mode** (local JSON/SQLite). It produces a `MIGRATION.md` file with exact steps to transition to live Supabase later. **Your project still works — it just uses fake data.** |
| **How to Enable** | In your IDE settings → MCP Servers → Add Supabase MCP. You will need your Supabase project URL and service role key. |

### Verification Test
Once connected, the agent should be able to:
- List your Supabase projects
- Read/write table schemas
- Execute SQL queries

---

## 3. Vercel MCP Server

| Field | Detail |
|---|---|
| **Status** | ❌ Not Connected |
| **Priority** | 🟢 Optional |
| **Used By** | 🧠 Contract Architect (Deploy phase) |
| **Purpose** | Autonomous deployment — trigger builds, configure domains, manage environment variables on Vercel |
| **What Happens Without It** | You deploy manually: either connect your GitHub repo to Vercel's dashboard (auto-deploy on push) or run `npx vercel --prod` from the terminal. The agent will prepare a `vercel.json` config file either way. |
| **How to Enable** | In your IDE settings → MCP Servers → Add Vercel MCP. You will need a Vercel API token. |

### Verification Test
Once connected, the agent should be able to:
- List your Vercel projects
- Trigger deployments
- Set environment variables

---

## What About Browser / Puppeteer?

The old `REQUIRED_CONNECTORS.md` listed a "Browser MCP Server" — this is **no longer needed**. Your IDE has a **built-in Browser Subagent** that can:
- Navigate to URLs
- Take screenshots
- Inspect the DOM
- Check console errors
- Test responsive viewports

The `ui-sniper` skill and `Quality Judge` both use this built-in capability. No external MCP required.

---

## Recommended Setup Order

For your first project, here's the priority order for connecting MCPs:

| Step | Action | Unlocks |
|---|---|---|
| 1 | **Do nothing** | You can build your first project right now. Git via terminal, mock API, manual deploy. |
| 2 | **Connect GitHub MCP** | Autonomous git operations (commit + push without terminal) |
| 3 | **Connect Supabase MCP** | Live database instead of mock API |
| 4 | **Connect Vercel MCP** | One-click autonomous deployments |

> **💡 TIP**: You don't need ANY MCP servers to start building. The Boardroom has fallbacks for everything. MCPs just remove manual steps.

---

## How to Verify All Connections

After enabling MCPs, open a new chat and ask:

```
Check if the following MCP servers are connected and working:
1. GitHub — try listing my repositories
2. Supabase — try listing my projects
3. Vercel — try listing my deployments
```

The agent will test each connection and report back.
