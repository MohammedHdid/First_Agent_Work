# QA CHECKLIST — Quality Judge Reference

> Used for every project. Every checked item must be recorded in `QA_REPORT.md`.
> Applies to: Antigravity system + Claude Code system

---

## Pre-Flight Checks

- [ ] BRIEF.md / CONTRACT.md exists at `Client_projects/[Brand]/`
- [ ] Build mode confirmed (Express / Freestyle / Boardroom)
- [ ] `[Boardroom only]` Both FE and BE have signaled completion in `SESSION_STATE.json`
- [ ] `[Boardroom only]` `src/types/contract.ts` exists and is importable
- [ ] `[Boardroom only]` `.env.local` exists with all variables from CONTRACT.md

---

## 1. Build Verification

| Check | Command | Pass Criteria |
|---|---|---|
| `[Express]` Files exist | Check `index.html`, `css/`, `js/` | All files present |
| `[Next.js]` Dependencies install | `npm install` | Exit code 0 |
| `[Next.js]` TypeScript compiles | `npx tsc --noEmit` | 0 errors |
| `[Next.js]` Production build | `npm run build` | Exit code 0 |
| Dev server / preview | `npm run dev` or open HTML | No crash, page loads |

---

## 2. Contract / Brief Compliance

| Check | How to Verify | Pass Criteria |
|---|---|---|
| All sections exist | Scroll through page | Every section from BRIEF/CONTRACT rendered |
| All routes exist | Navigate to each route | Page renders, no 404 |
| `[Boardroom]` All API endpoints exist | Check `src/actions/` | Every function from CONTRACT implemented |
| `[Boardroom]` All DB tables exist | Check migrations | Every table has a migration |
| `[Boardroom]` Function names match | Compare vs CONTRACT | Exact match |
| All integrations load | Check embeds | Calendly/chatbot/forms visible and functional |
| Copy matches | Compare vs COPY_DECK/BRIEF | Exact copy, no placeholders |

---

## 3. Runtime Verification

| Check | Method | Pass Criteria |
|---|---|---|
| No JS errors | Browser console | Zero uncaught exceptions |
| No hydration errors | Browser console | Zero `Hydration` warnings |
| `[Next.js]` No failed API calls | Browser network tab | All XHR/fetch return 2xx |
| No missing images | Visual inspection | All images render |
| No broken links | Click every link | All navigate correctly |
| Forms submit correctly | Fill and submit | Success state reached |
| Embeds load | Visual check | Calendly / chatbot / forms display |

---

## 4. Visual / Responsive Verification

| Viewport | Width | Check |
|---|---|---|
| Mobile | 375px | No horizontal overflow, readable text, tappable buttons |
| Tablet | 768px | Layout adapts, no broken grids |
| Desktop | 1440px | Full layout renders, proper spacing |

Additional visual checks:
- [ ] Glassmorphism effects render (blur, transparency)
- [ ] Animations play (page transitions, scroll reveals)
- [ ] Hover states work on interactive elements
- [ ] Typography hierarchy clear (H1 > H2 > H3 > body)
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text)

---

## 5. Performance (Lighthouse)

| Metric | Target | Severity if Missed |
|---|---|---|
| Performance | ≥ 95 | WARNING (≥ 85) / CRITICAL (< 85) |
| Accessibility | ≥ 95 | CRITICAL (any miss) |
| Best Practices | ≥ 95 | WARNING |
| SEO | ≥ 95 | WARNING |

---

## 6. Security `[Boardroom Only]`

- [ ] RLS enabled on every Supabase table
- [ ] No `service_role` key in client-side code
- [ ] All user inputs validated with Zod
- [ ] Auth middleware on protected routes
- [ ] `NEXT_PUBLIC_` prefix only on safe variables

---

## 7. Copy & Content

- [ ] All headlines match COPY_DECK.md / BRIEF.md
- [ ] All CTA text matches
- [ ] No placeholder text (no "Lorem ipsum", "Coming soon", "TODO")
- [ ] No broken/missing social proof (testimonials, logos)

---

## Severity Levels

| Level | Definition | Action |
|---|---|---|
| **CRITICAL** | Blocks launch. Broken functionality, security flaw, build failure | Return to responsible agent. Freeze ship. |
| **WARNING** | Should fix. Performance miss, minor visual bug | Return to responsible agent. Ship pauses. |
| **INFO** | Nice to have. Cosmetic, minor spacing | Log in report. Ship allowed. |

---

## QA Report Template

```markdown
# QA_REPORT.md — [Brand Name]

**Date**: [YYYY-MM-DD]
**Mode**: EXPRESS / FREESTYLE / BOARDROOM
**Verdict**: PASS / CONDITIONAL PASS / FAIL
**Confidence Score**: [X]/10

## Results Summary
| Category | Status |
|---|---|
| Build Verification | ✅ / ❌ |
| Brief/Contract Compliance | ✅ / ❌ |
| Runtime Verification | ✅ / ❌ |
| Visual / Responsive | ✅ / ❌ |
| Lighthouse Performance | [Score] |
| Lighthouse Accessibility | [Score] |
| Security (Boardroom) | ✅ / ❌ / N/A |
| Copy & Content | ✅ / ❌ |

## Defects Found
| # | Severity | Description | Assigned To |
|---|---|---|---|
| 1 | CRITICAL/WARNING/INFO | [Description] | FE / BE / Architect |
```
