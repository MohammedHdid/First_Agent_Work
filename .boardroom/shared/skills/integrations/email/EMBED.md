---
name: Email Capture Embed Patterns
description: ConvertKit, Mailchimp, and custom form embed patterns for lead capture.
systems: antigravity, claude
---
# Email Capture Embed Patterns

---

## ConvertKit

### Option 1: ConvertKit Hosted Form (simplest)
```html
<!-- Paste the embed code from ConvertKit → Forms → Embed -->
<script src="https://f.convertkit.com/XXXXXXXX/XXXXXXXXXX.js"
        data-uid="XXXXXXXXXX"
        async>
</script>
```

### Option 2: Custom Styled Form → ConvertKit API
Use this when you need the form to match the page design exactly.

```html
<form id="subscribe-form">
  <input type="text" id="first-name" placeholder="First Name" required>
  <input type="email" id="email" placeholder="Email Address" required>
  <button type="submit">Get Access</button>
  <p id="form-message"></p>
</form>

<script>
document.getElementById('subscribe-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  try {
    const res = await fetch('https://api.convertkit.com/v3/forms/FORM_ID/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: 'YOUR_CONVERTKIT_API_KEY',
        email: document.getElementById('email').value,
        first_name: document.getElementById('first-name').value
      })
    });

    if (res.ok) {
      document.getElementById('form-message').textContent = '✓ You\'re in! Check your email.';
      e.target.reset();
    }
  } catch {
    document.getElementById('form-message').textContent = 'Something went wrong. Try again.';
  } finally {
    btn.textContent = 'Get Access';
    btn.disabled = false;
  }
});
</script>
```

> ⚠️ For production: proxy the API call through n8n or a server function to hide the API key.

---

## Mailchimp

### Option 1: Mailchimp Hosted Form
```html
<!-- Get embed code from Mailchimp → Audience → Signup Forms → Embedded Forms -->
<div id="mc_embed_signup">
  <form action="https://YOURSITE.us1.list-manage.com/subscribe/post?u=XXXX&amp;id=XXXX"
        method="post" id="mc-embedded-subscribe-form">
    <input type="email" name="EMAIL" placeholder="Email Address" required>
    <!-- Honeypot field — do not remove -->
    <div style="position:absolute;left:-5000px;" aria-hidden="true">
      <input type="text" name="b_XXXX_XXXX" tabindex="-1" value="">
    </div>
    <button type="submit">Subscribe</button>
  </form>
</div>
```

---

## Custom Form → n8n (Recommended for flexibility)

When the client already has n8n: skip ConvertKit/Mailchimp APIs entirely and send to n8n, which routes to any email platform.

```javascript
// See n8n/PATTERNS.md — Pattern 2: Lead Capture
// This is the cleanest approach — single webhook, any destination
```

---

## ENV Variables
| Variable | Purpose |
|---|---|
| `CONVERTKIT_API_KEY` | ConvertKit API key (keep server-side) |
| `CONVERTKIT_FORM_ID` | Target form ID |
| `MAILCHIMP_ACTION_URL` | Form action URL from Mailchimp |
| `N8N_LEAD_WEBHOOK_URL` | n8n lead capture webhook (preferred) |
