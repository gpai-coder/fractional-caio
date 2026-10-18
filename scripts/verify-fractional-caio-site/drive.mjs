#!/usr/bin/env node
/**
 * Drive home → services → fractional CAIO → closing CTA. Screenshots + guardrails.
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { chromium } from '@playwright/test'

import { assertContentGuardrails } from './lib/guardrails.mjs'
import { artifactsDir, baseUrl } from './lib/env.mjs'

const runId = process.env.VERIFY_RUN_ID ?? `run-${Date.now()}`
const outDir = artifactsDir(runId)
const logPath = path.join(outDir, 'drive.log')
const origin = baseUrl()

const lines = []
function log(line) {
  lines.push(line)
  process.stdout.write(`${line}\n`)
}

spawnSync('npx', ['playwright', 'install', 'chromium'], {
  stdio: 'inherit',
  env: process.env,
})

const browser = await chromium.launch({ channel: 'chromium', headless: true })
const context = await browser.newContext({ baseURL: origin })
const page = await context.newPage()

try {
  await page.goto('/')
  await page.getByRole('heading', { level: 1 }).waitFor({ state: 'visible', timeout: 30_000 })
  await page.screenshot({ path: path.join(outDir, '01-home-hero.png'), fullPage: false })

  await page.locator('#services').scrollIntoViewIfNeeded()
  await page.getByRole('heading', { name: 'What I can help with' }).waitFor({ state: 'visible' })
  await page.screenshot({ path: path.join(outDir, '02-services.png'), fullPage: false })

  await page.locator('#fractional-caio').scrollIntoViewIfNeeded()
  await page.getByRole('heading', { name: 'What is a Fractional CAIO?' }).waitFor({
    state: 'visible',
  })
  await page.screenshot({ path: path.join(outDir, '03-fractional-caio.png'), fullPage: false })

  await page.getByRole('heading', { name: 'Have an AI decision to make?' }).scrollIntoViewIfNeeded()
  const cta = page.getByRole('link', { name: /Book a conversation/i })
  await cta.waitFor({ state: 'visible' })
  const mailto = await cta.getAttribute('href')
  if (!mailto?.startsWith('mailto:')) {
    throw new Error(`Closing CTA expected mailto link, got ${mailto ?? 'null'}`)
  }
  await page.screenshot({ path: path.join(outDir, '04-closing-cta.png'), fullPage: false })

  const html = await page.content()
  const pageText = await page.locator('body').innerText()
  const guardErrors = assertContentGuardrails({ pageText, html })
  if (guardErrors.length > 0) {
    throw new Error(guardErrors.join('; '))
  }

  log(`drive: OK (closing CTA ${mailto.slice(0, 40)}…)`)
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err)
  log(`drive: FAIL ${msg}`)
  process.exitCode = 1
} finally {
  await browser.close()
  fs.writeFileSync(logPath, `${lines.join('\n')}\n`)
  if (process.exitCode) {
    process.exit(process.exitCode)
  }
}
