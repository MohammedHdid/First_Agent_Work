---
name: Technical Bridge (Link & Repository Phase)
description: Handles GitHub setup, CI/CD integrations, and backend mock/live setups.
tag: Backend
systems: antigravity, claude
---
# Technical Bridge Skill: Link & Repository Phase

**Logic:** Treat GitHub as the central "Source of Truth" for the Agency.

**When to Execute:**
- In **Boardroom mode**: Executed by the Backend agent
- In **Freestyle / Express mode**: Executed by the Architect during the Ship phase

**Folder Architecture Requirements:**
1. Do NOT scaffold project code directly in the root directory. The root is reserved exclusively for `.boardroom/` (the agent brain) and global git config.
2. Every new project MUST create a directory inside `Client_projects/` named after the Brand Name (e.g., `Client_projects/Vanguard_AI`).
3. Initialize the codebase and run all `npm` / terminal operations inside that client's directory.

**Repository Setup:**
1. Check if a GitHub Repository URL is already in `.boardroom/SESSION_STATE.json`. If not, ask the user.
2. Perform a `git remote -v` check. Verify the remote is configured correctly.
3. If the repository is empty, initialize a `.gitignore` and `README.md` autonomously to establish the first commit.

**Stack-Dependent Scaffolding:**

**Express mode (HTML/CSS/JS):**
```bash
mkdir -p Client_projects/[Brand]/{css,js,assets}
touch Client_projects/[Brand]/index.html
touch Client_projects/[Brand]/css/style.css
touch Client_projects/[Brand]/js/main.js
```

**Freestyle / Boardroom mode (Next.js):**
```bash
cd Client_projects/[Brand]
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
npm install framer-motion @supabase/supabase-js
npx shadcn@latest init
```

**CI/CD Integration:**
- **Frontend:** Prepare a `vercel.json` for deployment from the main branch:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```
For Express (HTML): Vercel auto-detects static sites, no config needed.

**Git Protocol & Closed-Loop Verification:**
Before pushing, MUST perform Closed-Loop Verification:
1. Express: Open `index.html` in browser, check all sections render + embeds load
2. Next.js: Run `npm run build` → `npm run dev` → navigate to `http://localhost:3000` → check console for errors
3. Test at 375px (mobile) and 1440px (desktop) viewports
4. Fix any errors autonomously
5. Do NOT push until localhost verification passes AND user gives explicit confirmation

**Commit Message Format:**
```
[Agent] Brief description

- Detail 1
- Detail 2
```
Examples:
- `[Architect] Add BRIEF.md — Express mode`
- `[Architect] Add CONTRACT.md v1.0 and COPY_DECK.md`
- `[FE] Build Hero, Features, and CTA sections`
- `[BE] Create leads table + RLS + createLead action`
- `[QA] QA_REPORT.md — PASS`

**Mock API Fallback (Freestyle/Boardroom only):**
If the live Database (Supabase) is not yet connected, build a Local Mock API (JSON/SQLite) so the frontend works immediately. Provide a `MIGRATION.md` detailing how to switch to the real DB later.

**Error Handling:**
If Git operations fail (merge conflicts, detached heads), pause execution, capture `git status` output, create `ERROR_LOG.md` explaining the state, and await user intervention.
