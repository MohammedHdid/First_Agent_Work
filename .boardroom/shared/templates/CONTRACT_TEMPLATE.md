# CONTRACT TEMPLATE
> **Instructions**: Architect copies this to `Client_projects/[Brand]/CONTRACT.md` for Freestyle or Boardroom projects. Sections marked `[BOARDROOM ONLY]` are optional for Freestyle — skip if no dedicated backend agent.

---

# CONTRACT.md — [Brand Name]

**Version**: v1.0
**Mode**: FREESTYLE / BOARDROOM
**Author**: Contract Architect
**Date**: [YYYY-MM-DD]
**Status**: DRAFT | ACTIVE | AMENDED

---

## 1. Project Overview

| Field | Value |
|---|---|
| Brand Name | |
| Niche | SaaS / E-Com / Coaching / Influencer |
| Core Objective | |
| Visual Identity | Unicorn / Custom Brand Guidelines |
| Offer Structure | Digital Leads / Packaged Services / Physical Products |
| Nervous System | None / n8n / AI Chatbot / Calendly |
| Build Mode | FREESTYLE / BOARDROOM |

---

## 2. UI Requirements

### 2.1 Pages & Routes

| Route | Page Name | Data Dependencies | Auth Required |
|---|---|---|---|
| `/` | Homepage | — | No |
| `/[route]` | [Page Name] | [list data needed] | Yes/No |

### 2.2 Sections per Page

**Homepage (`/`)**:
1. Hero Section (PAS framework — copy from COPY_DECK.md)
2. Features / Offer Section
3. Social Proof / Testimonials
4. [Integration Section — Booking / Lead Capture / Chatbot]
5. Final CTA
6. Footer

### 2.3 Design Tokens

| Token | Value |
|---|---|
| `--brand-primary` | `hsl(, , )` |
| `--brand-secondary` | `hsl(, , )` |
| `--brand-accent` | `hsl(, , )` |
| `--bg-dark` | `hsl(, , )` |
| `--text-primary` | `hsl(, , )` |
| Font (Heading) | Outfit / [Custom] |
| Font (Body) | Inter / [Custom] |
| Border Radius | `12px` / [Custom] |

---

## 3. Integrations

| Service | Type | Config |
|---|---|---|
| Calendly / TidyCal | Booking embed | URL: `...` |
| n8n | Webhook automation | Webhook URL: `...` |
| Chatbot | Embed | Platform + Key: `...` |
| ConvertKit / Mailchimp | Email capture | Form ID / API: `...` |

> Reference: `.boardroom/shared/skills/integrations/` for embed patterns.

---

## 4. DB Schema `[BOARDROOM ONLY]`

### 4.1 Tables

**Table: `[table_name]`**

| Column | Type | Nullable | Default | Constraints |
|---|---|---|---|---|
| `id` | `uuid` | No | `gen_random_uuid()` | PRIMARY KEY |
| `created_at` | `timestamptz` | No | `now()` | — |
| `[column]` | `[type]` | Yes/No | [default] | [FK, UNIQUE, etc.] |

**RLS Policy**: [Describe who can SELECT/INSERT/UPDATE/DELETE]

*(Repeat for each table)*

---

## 5. API Endpoints `[BOARDROOM ONLY]`

### 5.1 Server Actions (Preferred)

| Function Name | File Path | Inputs | Returns | Auth Required |
|---|---|---|---|---|
| `createLead` | `src/actions/leads.ts` | `CreateLeadInput` | `Lead` | No |

### 5.2 API Routes (If needed)

| Method | Path | Request Body | Response Body | Auth Required |
|---|---|---|---|---|
| `POST` | `/api/[resource]` | `[RequestType]` | `[ResponseType]` | Yes/No |

---

## 6. Canary Endpoint `[BOARDROOM ONLY]`

> One minimal endpoint both FE and BE implement FIRST to verify the handshake.

| Field | Value |
|---|---|
| **Function Name** | `[e.g., createLead]` |
| **File Path** | `src/actions/[file].ts` |
| **Input Type** | `[e.g., CreateLeadInput]` |
| **Return Type** | `[e.g., Lead]` |
| **Success Criteria** | FE calls → BE processes → typed response renders in UI |

---

## 7. Shared TypeScript Interfaces `[BOARDROOM ONLY]`

> File: `src/types/contract.ts` — Backend writes, Frontend imports.

```typescript
export interface Lead {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

export interface CreateLeadInput {
  email: string;
  full_name: string;
}
```

---

## 8. Environment Variables

| Variable | Description | Public? | Example Value |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Yes | `eyJ...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key | **No** | `eyJ...` |
| `N8N_WEBHOOK_URL` | n8n webhook endpoint | **No** | `https://...` |
| `[OTHER]` | [Description] | Yes/No | |

---

## 9. Acceptance Criteria

- [ ] All pages render without console errors
- [ ] All integrations load and function correctly
- [ ] Lighthouse scores ≥ 95 across all metrics
- [ ] Responsive at 375px, 768px, 1440px
- [ ] All copy matches COPY_DECK.md exactly
- [ ] `[BOARDROOM]` All API endpoints return correct data shapes
- [ ] `[BOARDROOM]` All DB tables have RLS policies enabled
- [ ] `[BOARDROOM]` TypeScript strict mode — 0 errors

---

## Changelog

| Version | Date | Change | Author |
|---|---|---|---|
| v1.0 | [Date] | Initial contract | Architect |
