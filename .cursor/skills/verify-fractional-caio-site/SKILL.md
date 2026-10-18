---
name: verify-fractional-caio-site
description: Build and run the Fractional CAIO marketing site locally, run doctor checks (including content guardrails), drive home/services/fractional-CAIO/closing CTA with Playwright, capture proof artifacts, and clean up. Use after copy, layout, or CTA changes; pair with /poteto-mode for rigorous builds.
---

# verify-fractional-caio-site

Drive the real single-page site the way a visitor would. **Never** change marketing copy or product code as part of verification unless the task explicitly requests it.

## Content guardrails (must pass)

Doctor and drive both enforce:

- No headshot or profile photo on the page.
- No phone number or `tel:` link.
- No standalone “AI governance” service offering.
- Fractional CAIO copy states it is **positioning, not a held title**.
- LIXIL is not presented as a fractional client.

Implementation: `scripts/verify-fractional-caio-site/lib/guardrails.mjs`.

## Launch

From repo root:

```bash
export VERIFY_RUN_ID="verify-$(date +%Y%m%d-%H%M%S)"
mkdir -p "artifacts/verify-fractional-caio-site/${VERIFY_RUN_ID}"
node scripts/verify-fractional-caio-site/launch.mjs | tee "artifacts/verify-fractional-caio-site/${VERIFY_RUN_ID}/launch.log"
```

Launch:

1. `npm run build` then starts `npm run start` on `http://127.0.0.1:3000` unless the home page already renders.
2. Records dev server PID under the run artifacts directory.

Ready when `GET /` returns HTTP 200 and includes the hero headline “Fractional Chief AI Officer”.

## Doctor

```bash
node scripts/verify-fractional-caio-site/doctor.mjs
```

Confirms home page reachability and content guardrails on server-rendered HTML.

Run doctor after launch and before `drive` if anything failed mid-run.

## Drive

```bash
node scripts/verify-fractional-caio-site/drive.mjs
```

Journey:

1. Home hero (`01-home-hero.png`)
2. Services table (`#services`, `02-services.png`)
3. Fractional CAIO section (`#fractional-caio`, `03-fractional-caio.png`)
4. Closing CTA mailto link (`04-closing-cta.png`)

Uses Playwright Chromium (`npx playwright install chromium` on first run).

## Evidence

Proof directory: `artifacts/verify-fractional-caio-site/<VERIFY_RUN_ID>/`

| Artifact | Proves |
| --- | --- |
| `launch.log` | build/start readiness |
| `dev.log` | server stdout/stderr |
| `01-home-hero.png` | hero render |
| `02-services.png` | services section |
| `03-fractional-caio.png` | positioning copy |
| `04-closing-cta.png` | closing CTA |
| `drive.log` | drive transcript |

Attach screenshots and a one-line doctor result to PR descriptions. Do not delete artifacts in cleanup.

## Cleanup

Stops only the server this run started (PID file).

```bash
node scripts/verify-fractional-caio-site/cleanup.mjs
```

Confirm evidence files still exist under `artifacts/verify-fractional-caio-site/<VERIFY_RUN_ID>/` after cleanup.

## Helpers

| Script | Purpose |
| --- | --- |
| `scripts/verify-fractional-caio-site/launch.mjs` | build + production server |
| `scripts/verify-fractional-caio-site/doctor.mjs` | preflight + guardrails |
| `scripts/verify-fractional-caio-site/drive.mjs` | Playwright journey |
| `scripts/verify-fractional-caio-site/cleanup.mjs` | stop server started by launch |

Maintain selectors and guardrails with `/maintain-verification-skill` when section IDs or copy change.
