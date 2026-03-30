---
name: AI Chatbot Embed Patterns
description: Tidio, Crisp, Tawk.to, and custom chatbot embed patterns.
systems: antigravity, claude
---
# AI Chatbot Embed Patterns

---

## Tidio (Most Popular for Fiverr Clients)

### Basic Embed
```html
<!-- Before </body> -->
<script src="//code.tidio.co/YOUR_TIDIO_KEY.js" async></script>
```

### Customize Tidio Appearance (via JS)
```javascript
// Set chat position, color, and welcome message
window.tidioChatApi = window.tidioChatApi || {};
window.tidioChatApi.on('ready', function() {
  window.tidioChatApi.setColorScheme('#6366f1');  // brand color
});
```

### Open Chat on Button Click
```html
<button onclick="window.tidioChatApi.open()">Chat with us</button>
```

---

## Crisp

### Basic Embed
```html
<script>
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID";
  (function() {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
```

### Pre-fill User Info (if you have it)
```javascript
window.$crisp.push(["set", "user:email", ["user@example.com"]]);
window.$crisp.push(["set", "user:nickname", ["John"]]);
```

### Open Chat on Button Click
```javascript
window.$crisp.push(["do", "chat:open"]);
```

---

## Tawk.to (Free Option)

### Basic Embed
```html
<!-- Before </body> -->
<script>
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
</script>
```

---

## Custom AI Chatbot via n8n + OpenAI

For clients who want a custom-branded chatbot (not a third-party widget):

### Frontend (Chat UI)
```html
<div id="chat-widget" class="fixed bottom-4 right-4">
  <button id="chat-toggle" class="chat-button">💬</button>
  <div id="chat-window" class="hidden">
    <div id="chat-messages"></div>
    <input type="text" id="chat-input" placeholder="Type a message...">
    <button id="chat-send">Send</button>
  </div>
</div>

<script>
document.getElementById('chat-send').addEventListener('click', async () => {
  const msg = document.getElementById('chat-input').value;
  if (!msg.trim()) return;

  appendMessage('user', msg);
  document.getElementById('chat-input').value = '';

  const res = await fetch('N8N_CHATBOT_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: msg, session_id: getSessionId() })
  });
  const data = await res.json();
  appendMessage('bot', data.reply);
});

function appendMessage(role, text) {
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.textContent = text;
  document.getElementById('chat-messages').appendChild(div);
}

function getSessionId() {
  if (!localStorage.getItem('chat_session')) {
    localStorage.setItem('chat_session', Math.random().toString(36).substring(2));
  }
  return localStorage.getItem('chat_session');
}
</script>
```

**n8n workflow:**
```
Webhook → OpenAI (Chat) → Memory Node (session context) → Respond to Webhook
```

---

## ENV Variables
| Variable | Purpose |
|---|---|
| `TIDIO_KEY` | Tidio property key |
| `CRISP_WEBSITE_ID` | Crisp website ID |
| `TAWK_PROPERTY_ID` | Tawk.to property ID |
| `N8N_CHATBOT_WEBHOOK_URL` | Custom AI chatbot via n8n |
