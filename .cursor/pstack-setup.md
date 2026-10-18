# pstack setup (fractional-caio marketing site)

This repo uses [pstack](https://github.com/cursor/plugins/tree/main/pstack) so agents can build with rigor and verify the public site before opening PRs.

## Cloud Agent note

Verification is a static Next.js site. No Docker or database is required. Cloud Agent VMs need Node 22 (see `.github/workflows/ci.yml`), `npm ci`, and Playwright Chromium (installed on first `drive` via `npx playwright install chromium` if missing).

## 1. Install the plugin (per Cursor user)

In Cursor chat:

```text
/add-plugin pstack
```

Slash commands are not available in every environment (for example some Cloud Agent shells). When `/add-plugin` is unavailable, install **pstack** from the Cursor plugin marketplace (`cursor-public` → **pstack**). Cloud Agent VMs in this org often already have pstack cached.

## 2. Configure models (per Cursor user)

In chat:

```text
/setup-pstack
```

That writes `~/.cursor/rules/pstack-models.mdc` (always-applied model choices). It is user-local, not committed.

**Cloud Agent equivalent:** when `/setup-pstack` cannot be invoked interactively, write the default `large` (xhigh) role map to `~/.cursor/rules/pstack-models.mdc` (see pstack `setup-pstack` skill for the canonical shape). Rerun `/setup-pstack` in the desktop IDE to customize per user.

## 3. Project verification skill (committed)

Agents prove home, services, fractional-CAIO positioning, and contact CTA behavior with:

```text
.cursor/skills/verify-fractional-caio-site/SKILL.md
```

Invoke by path or name **`verify-fractional-caio-site`**. Pair it with `/poteto-mode` for feature work (see `AGENTS.md`).

## 4. Maintenance

After section IDs, copy, or CTA behavior change, run `/maintain-verification-skill` (pstack) to refresh selectors and the content guardrail map in the skill.
