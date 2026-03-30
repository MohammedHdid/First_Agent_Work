---
name: Calendly / TidyCal Embed Patterns
description: Ready-to-use booking widget embed patterns.
systems: antigravity, claude
---
# Booking Widget Embed Patterns

---

## Calendly

### Option 1: Inline Widget (embedded in page)
```html
<!-- In <head> -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">

<!-- In page body where you want the calendar -->
<div class="calendly-inline-widget"
     data-url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
     style="min-width:320px;height:700px;">
</div>

<!-- Before </body> -->
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Option 2: Popup on Button Click
```html
<!-- In <head> -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">

<!-- Button -->
<button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/YOUR_USERNAME/YOUR_EVENT'}); return false;">
  Book a Call
</button>

<!-- Before </body> -->
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Option 3: Floating Button
```html
<!-- In <head> -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">

<!-- Before </body> -->
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
<script>
  Calendly.initBadgeWidget({
    url: 'https://calendly.com/YOUR_USERNAME/YOUR_EVENT',
    text: 'Schedule time with me',
    color: '#0069ff',
    textColor: '#ffffff'
  });
</script>
```

### Customize Calendly Appearance
Add query params to the data-url:
```
?hide_landing_page_details=1   ← cleaner look
&hide_gdpr_banner=1            ← remove GDPR banner
&background_color=1a1a2e       ← match page background (hex without #)
&text_color=ffffff             ← match page text
&primary_color=6366f1          ← match brand color (hex without #)
```

---

## TidyCal

### Inline Widget
```html
<script src="https://tidycal.com/js/script.js"></script>
<div class="tidycal-embed" data-path="YOUR_USERNAME/YOUR_EVENT"></div>
```

### Button Popup
```html
<script src="https://tidycal.com/js/script.js"></script>
<a href="https://tidycal.com/YOUR_USERNAME/YOUR_EVENT"
   class="tidycal-popup"
   data-tidycal-popup>
  Book a Call
</a>
```

---

## Cal.com (Open Source Alternative)

### Inline Widget
```html
<script src="https://cal.com/embed.js"></script>
<script>
  Cal("init", { origin: "https://cal.com" });
  Cal("inline", {
    elementOrSelector: "#cal-booking",
    calLink: "YOUR_USERNAME/YOUR_EVENT",
    config: { layout: "month_view" }
  });
</script>
<div id="cal-booking"></div>
```

---

## ENV Variables (if booking URL is dynamic)
| Variable | Purpose |
|---|---|
| `BOOKING_URL` | Calendly/TidyCal booking link |
| `BOOKING_EVENT_TYPE` | Which event type to default to |
