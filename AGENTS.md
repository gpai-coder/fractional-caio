# Agent instructions (fractional-caio)

Marketing site for Ganesh Pai’s Fractional Chief AI Officer advisory practice. **Site copy lives in `src/content.ts`.** UI in `src/components/`.

## Content guardrails (do not violate)

- No headshot or profile photo on the site.
- No phone number or `tel:` link.
- Do not add a standalone “AI governance” service offering.
- “Fractional CAIO” is **positioning**, not a title held in employment.
- LIXIL is an employer reference only; never list LIXIL as a fractional client.

## Local commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## pstack: build, verify, ship

1. **Install pstack** — In Cursor: `/add-plugin pstack`, then `/setup-pstack` (writes `~/.cursor/rules/pstack-models.mdc`). Repo notes: `.cursor/pstack-setup.md`. On Cloud Agents, use the marketplace install and default model rule file described there when slash commands are unavailable.
2. **Rigorous work** — Start with `/poteto-mode` and a clear goal (feature, bug fix, refactor). Respect content guardrails above when editing `src/content.ts` or components.
3. **Prove behavior** — After code changes, run the **`verify-fractional-caio-site`** skill (`.cursor/skills/verify-fractional-caio-site/SKILL.md`): launch → doctor → drive → cleanup.
4. **PR evidence** — Attach screenshots and logs from `artifacts/verify-fractional-caio-site/<VERIFY_RUN_ID>/` in the PR description.
5. **Keep verification current** — When routes, section IDs, or guardrails change, run `/maintain-verification-skill` (pstack) and update the skill scripts if needed.
