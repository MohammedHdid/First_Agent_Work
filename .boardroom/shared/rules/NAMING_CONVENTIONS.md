# NAMING CONVENTIONS — Shared Standards

> All agents MUST follow these conventions. The Contract Architect enforces these when writing CONTRACT.md. The Quality Judge verifies compliance during QA.
> Applies to: Antigravity system + Claude Code system

---

## Database (Supabase / PostgreSQL)

| Element | Convention | Example |
|---|---|---|
| Table names | `snake_case`, plural | `user_profiles`, `lead_submissions` |
| Column names | `snake_case` | `full_name`, `created_at`, `is_active` |
| Primary keys | Always `id` (type `uuid`) | `id uuid PRIMARY KEY` |
| Foreign keys | `[referenced_table_singular]_id` | `user_id`, `project_id` |
| Timestamps | `created_at`, `updated_at` (type `timestamptz`) | Always include both |
| Boolean columns | `is_` or `has_` prefix | `is_active`, `has_paid` |
| Enum values | `SCREAMING_SNAKE_CASE` | `PENDING`, `IN_PROGRESS`, `COMPLETED` |

---

## TypeScript Interfaces (`src/types/contract.ts`)

| Element | Convention | Example |
|---|---|---|
| Interface names | `PascalCase`, singular | `UserProfile`, `LeadSubmission` |
| Input types | `[Action][Resource]Input` | `CreateLeadInput`, `UpdateProfileInput` |
| Response types | `[Resource]Response` (if differs from base) | `LeadResponse` |
| Enum types | `PascalCase` | `SubmissionStatus` |
| Properties | `camelCase` (matching DB `snake_case` via Supabase auto-transform) | `fullName`, `createdAt` |

> **Note**: Supabase JS client auto-transforms `snake_case` DB columns to `camelCase` in TypeScript. Interfaces should use `camelCase` properties.

---

## Server Actions & API Functions

| Element | Convention | Example |
|---|---|---|
| Server Action functions | `camelCase`, verb-first | `createLead`, `getUserProfile`, `deleteProject` |
| Action file names | `camelCase` or resource-based | `src/actions/leads.ts`, `src/actions/auth.ts` |
| API route folders | `kebab-case` | `app/api/user-profiles/route.ts` |
| HTTP methods | Standard REST | `GET`, `POST`, `PUT`, `DELETE` |

### CRUD Verb Mapping

| Operation | Function Prefix | Example |
|---|---|---|
| Create | `create` | `createLead()` |
| Read (single) | `get` | `getLead()` |
| Read (list) | `list` or `getAll` | `listLeads()` |
| Update | `update` | `updateLead()` |
| Delete | `delete` | `deleteLead()` |

---

## React Components

| Element | Convention | Example |
|---|---|---|
| Component files | `PascalCase.tsx` | `HeroSection.tsx`, `PricingCard.tsx` |
| Component names | `PascalCase` | `export function HeroSection()` |
| Props interfaces | `[Component]Props` | `HeroSectionProps` |
| Hook files | `camelCase` with `use` prefix | `useAuth.ts`, `useLeads.ts` |
| Utility files | `camelCase` | `formatDate.ts`, `cn.ts` |

---

## CSS & Styling

| Element | Convention | Example |
|---|---|---|
| CSS custom properties | `--kebab-case` | `--brand-primary`, `--bg-dark` |
| Tailwind classes | Framework default | `bg-brand-primary`, `text-lg` |
| CSS files | `kebab-case` | `globals.css`, `hero-section.css` |

---

## Environment Variables

| Element | Convention | Example |
|---|---|---|
| Public (client-safe) | `NEXT_PUBLIC_[NAME]` | `NEXT_PUBLIC_SUPABASE_URL` |
| Private (server-only) | `[NAME]` (no prefix) | `SUPABASE_SERVICE_ROLE_KEY` |
| All env vars | `SCREAMING_SNAKE_CASE` | `DATABASE_URL` |

---

## File & Folder Structure

| Element | Convention | Example |
|---|---|---|
| Next.js route folders | `kebab-case` | `app/sign-up/page.tsx` |
| Component folders | `kebab-case` or flat | `components/sections/`, `components/ui/` |
| Lib folders | `kebab-case` | `lib/supabase/`, `lib/validators/` |
| Config files | Framework default | `tailwind.config.ts`, `next.config.ts` |

---

## Git Commits

| Element | Convention | Example |
|---|---|---|
| Commit messages | `[Agent] Description` | `[Architect] Add CONTRACT.md v1.0` |
| | | `[FE] Build Hero and CTA sections` |
| | | `[BE] Create leads table + RLS` |
| | | `[QA] QA_REPORT.md — PASS` |
| | | `[Express] Complete build for [Brand]` |
