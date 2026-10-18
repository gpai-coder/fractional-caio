#!/usr/bin/env node
/**
 * Read-only preflight for verify-fractional-caio-site.
 */
import { assertContentGuardrails } from './lib/guardrails.mjs'
import { baseUrl } from './lib/env.mjs'

const errors = []
const homeUrl = `${baseUrl()}/`

let pageText = ''
let html = ''

try {
  const res = await fetch(homeUrl, {
    headers: { Accept: 'text/html' },
    signal: AbortSignal.timeout(15_000),
  })
  html = await res.text()
  pageText = html.replace(/<[^>]+>/g, ' ')
  if (!res.ok) {
    errors.push(`Home page failed at ${homeUrl} (status=${res.status}).`)
  } else if (!pageText.includes('Fractional Chief AI Officer')) {
    errors.push('Home page missing expected hero headline.')
  }
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err)
  errors.push(`Home page unreachable at ${homeUrl}: ${msg}`)
}

if (html) {
  for (const e of assertContentGuardrails({ pageText, html })) {
    errors.push(e)
  }
}

if (errors.length > 0) {
  process.stderr.write('verify-fractional-caio-site doctor: FAIL\n')
  for (const e of errors) {
    process.stderr.write(`  - ${e}\n`)
  }
  process.exit(1)
}

process.stdout.write('verify-fractional-caio-site doctor: OK\n')
process.stdout.write(`  baseURL=${baseUrl()}\n`)
