---
name: n8n Integration Patterns
description: Ready-to-use n8n webhook patterns for landing page automations.
systems: antigravity, claude
---
# n8n Integration Patterns

> These patterns cover the most common automations for Fiverr landing pages. Use them as-is or adapt to the client's n8n instance.

---

## Pattern 1: Contact Form → Email Notification

**Use case:** Client wants to receive an email every time someone submits the contact form.

**Frontend code:**
```javascript
async function submitContactForm(formData) {
  const response = await fetch('N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      source: 'landing_page',
      timestamp: new Date().toISOString()
    })
  });
  return response.ok;
}
```

**n8n workflow structure:**
```
Webhook (POST) → Set Node (format data) → Send Email (Gmail/SMTP) → Respond to Webhook
```

**ENV variable needed:** `N8N_CONTACT_WEBHOOK_URL`

---

## Pattern 2: Lead Capture → CRM + Email Sequence

**Use case:** Capture email leads and add them to a CRM (Airtable, Notion, Google Sheets) + trigger an email welcome sequence.

**Frontend code:**
```javascript
async function captureLead(email, name) {
  const response = await fetch('N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      name,
      source: 'landing_page',
      timestamp: new Date().toISOString()
    })
  });
  return response.ok;
}
```

**n8n workflow structure:**
```
Webhook → Google Sheets (append row) → ConvertKit/Mailchimp (add subscriber) → Respond to Webhook
```

**ENV variable needed:** `N8N_LEAD_WEBHOOK_URL`

---

## Pattern 3: Booking Confirmation → Notification + Calendar

**Use case:** After a Calendly booking, trigger a custom n8n flow (send SMS, notify client, add to sheet).

**Implementation:** Use Calendly's native webhook integration (no custom code needed):
- Calendly → Settings → Webhooks → Add endpoint: your n8n webhook URL
- Event: `invitee.created`

**n8n workflow structure:**
```
Webhook (Calendly POST) → Extract invitee data → Send SMS (Twilio) → Notify client (Email) → Log to Sheet
```

---

## Pattern 4: AI Chatbot Lead Handoff → CRM

**Use case:** When AI chatbot qualifies a lead, push the conversation summary to n8n.

**Frontend code (chatbot callback):**
```javascript
// Called when chatbot marks lead as qualified
async function handoffQualifiedLead(leadData) {
  await fetch('N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      intent: leadData.intent,
      chat_summary: leadData.summary,
      timestamp: new Date().toISOString()
    })
  });
}
```

**n8n workflow structure:**
```
Webhook → Score lead → If qualified: Add to CRM + Notify sales → If not: Add to nurture list
```

---

## Webhook Security (Always Apply)

Add a shared secret to verify requests are coming from your frontend:

```javascript
// Frontend: include secret in header
headers: {
  'Content-Type': 'application/json',
  'X-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET
}
```

```
// n8n: Header Auth node to verify
If Header[X-Webhook-Secret] !== env.WEBHOOK_SECRET → Reject
```

---

## ENV Variables Reference

| Variable | Purpose |
|---|---|
| `N8N_CONTACT_WEBHOOK_URL` | Contact form submission |
| `N8N_LEAD_WEBHOOK_URL` | Lead capture / email opt-in |
| `N8N_BOOKING_WEBHOOK_URL` | Post-booking automation |
| `N8N_WEBHOOK_SECRET` | Shared secret for request verification |
