# SYSTEM AUDIT — Boardroom V3.0

## 1. Local Runtime Versions
- **Node.js**: `v22.13.1`
- **Python**: `3.12.9`
- **Bun**: Not Installed
- **Deno**: Not Installed

## 2. Tech Stacks by Mode

| Mode | Stack |
|---|---|
| **Express** | HTML5 / CSS3 / Vanilla JS → Vercel static |
| **Freestyle** | HTML+webhooks OR Next.js 15 (Architect decides) |
| **Boardroom** | Next.js 15 (App Router) + Tailwind CSS 4 + Supabase + Framer Motion + Shadcn/UI |

## 3. Integration Stack
- **Automation**: n8n (workflows + webhook handling)
- **Booking**: Calendly / TidyCal / Cal.com
- **Email Capture**: ConvertKit / Mailchimp / n8n webhook
- **Chatbot**: Tidio / Crisp / Tawk.to / Custom (n8n + OpenAI)

## 4. Model Assignments

### Antigravity System
| Agent | Model | Reason |
|---|---|---|
| Contract Architect | Gemini 3.1 Pro High | Strategic reasoning + long-form copy |
| Frontend Sniper | Gemini 3.1 Pro High | Visual reasoning + UI code quality |
| Backend Specialist | Claude Sonnet 4.6 | Structured code patterns, no Opus needed for CRUD/auth |
| Quality Judge | Gemini Flash | Analytical checklist work, speed > creativity |

### Claude Code System
| Agent | Model | Reason |
|---|---|---|
| Architect | Claude Opus 4.6 | Strategic reasoning + copy + orchestration |
| Frontend | Claude Sonnet 4.6 | UI code, component building |
| Backend | Claude Sonnet 4.6 | Structured technical work |
| QA | Claude Sonnet 4.6 | Bash command execution, analytical |

## 5. Required MCP Connectors

| MCP Server | Status | Used By | Fallback |
|---|---|---|---|
| **GitHub** | ❌ Not Connected | Architect (Ship) | `git push` manually |
| **Supabase** | ❌ Not Connected | Backend (Boardroom) | Mock API + MIGRATION.md |
| **Vercel** | ❌ Not Connected | Architect (Deploy) | `npx vercel --prod` manually |
