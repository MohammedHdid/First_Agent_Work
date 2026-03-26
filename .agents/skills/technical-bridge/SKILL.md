---
name: Technical Bridge (Link & Repository Phase)
description: Handles GitHub setup, CI/CD integrations, and backend mock/live setups.
---
# Technical Bridge Skill: Link & Repository Phase

**Logic:** Treat GitHub as the central "Source of Truth" for the Agency.

**Repository Setup:**
1. You MUST ask the user for a GitHub Repository URL before beginning any build.
2. Perform a `git remote -v` check. Verify that the local `.agents/` structure is tracked by the remote before beginning the Strategy Interview.
3. If the repository is empty, initialize a `.gitignore` and `README.md` autonomously to establish the first commit.

**CI/CD Integration:**
- **Frontend:** Automatically prepare a `vercel.json` for deployment from the main branch.
- **Backend (The Brain):** Use **Modal.com** for lightweight Python agents OR **Google Cloud Run** for enterprise-grade serverless execution depending on project scale.

**Git Protocol:**
Every successful "Mission" must end with a structured Commit and Push. **CRITICAL:** Do NOT push until the user validates the build on localhost and gives explicit confirmation to push.

**Autonomy / Fallbacks:**
If the live Database (Supabase) is not yet connected via MCP, you are commanded to build a **Local Mock API (JSON/SQLite)** so the frontend works immediately. Provide a `MIGRATION.md` detailing how to switch to the real DB later.

**Error Handling:**
If Git operations fail (e.g., merge conflicts or detached heads), pause execution, capture the `git status` output, create an `ERROR_LOG.md` explaining the state, and await user intervention.
