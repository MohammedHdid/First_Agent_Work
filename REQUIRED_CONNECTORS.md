# REQUIRED_CONNECTORS

To achieve full "Unicorn" autonomy, the following MCP (Model Context Protocol) Servers must be manually enabled and verified in your environment:

1. **GitHub MCP Server**: 
   - Status: Pending Verification
   - Reason: Essential for Repository Setup, CI/CD pipeline, and continuous multi-agent code pushing.

2. **Supabase / Database MCP Server**:
   - Status: Pending Verification
   - Reason: Required for live DB operations, Auth configuration, and schema migrations. (Note: A local mock SQLite/JSON will be used until this is active).

3. **Browser / UI-Sniper MCP Server (e.g. Puppeteer/Playwright integration)**:
   - Status: Pending Verification
   - Reason: Needed by the `ui-sniper` skill to visually inspect competitor URLs, extract CSS variables, and verify visual component builds against screenshots.

4. **Vercel / Cloud Run Configurator**:
   - Status: Pending Verification
   - Reason: For Autonomous Deployments.

**Action Required:** Please confirm which of these connectors are currently active when we begin the Strategy Phase.
