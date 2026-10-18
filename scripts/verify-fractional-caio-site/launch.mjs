#!/usr/bin/env node
/**
 * Build and start the Next.js site for verification.
 * Writes PID to artifacts/verify-fractional-caio-site/<runId>/dev.pid
 */
import { spawn, spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

import { artifactsDir, baseUrl, repoRootPath } from './lib/env.mjs'

const runId = process.env.VERIFY_RUN_ID ?? `run-${Date.now()}`
const repo = repoRootPath()
const outDir = artifactsDir(runId)
const pidFile = path.join(outDir, 'dev.pid')
const logFile = path.join(outDir, 'dev.log')

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, {
    cwd: repo,
    env: { ...process.env, ...opts.env },
    encoding: 'utf8',
    stdio: opts.silent ? 'pipe' : 'inherit',
  })
  if (res.status !== 0) {
    process.stderr.write(res.stderr ?? '')
    process.exit(res.status ?? 1)
  }
  return res
}

const homeUrl = `${baseUrl()}/`

try {
  const existing = await fetch(homeUrl, { signal: AbortSignal.timeout(3_000) })
  if (existing.ok) {
    const text = await existing.text()
    if (text.includes('Fractional Chief AI Officer')) {
      process.stdout.write(`verify-fractional-caio-site launch: reusing server at ${baseUrl()}\n`)
      process.stdout.write(`VERIFY_RUN_ID=${runId}\n`)
      process.stdout.write(`ARTIFACTS_DIR=${outDir}\n`)
      process.exit(0)
    }
  }
} catch {
  // start fresh
}

run('npm', ['run', 'build'])

const logFd = fs.openSync(logFile, 'a')
const child = spawn('npm', ['run', 'start'], {
  cwd: repo,
  env: {
    ...process.env,
    PORT: '3000',
    HOSTNAME: '127.0.0.1',
  },
  detached: true,
  stdio: ['ignore', logFd, logFd],
})
child.unref()
fs.writeFileSync(pidFile, String(child.pid))

for (let i = 0; i < 120; i++) {
  try {
    const res = await fetch(homeUrl, { signal: AbortSignal.timeout(5_000) })
    const text = await res.text()
    if (res.ok && text.includes('Fractional Chief AI Officer')) {
      process.stdout.write(
        `verify-fractional-caio-site launch: ready at ${baseUrl()} (pid ${child.pid})\n`,
      )
      process.stdout.write(`VERIFY_RUN_ID=${runId}\n`)
      process.stdout.write(`ARTIFACTS_DIR=${outDir}\n`)
      process.exit(0)
    }
  } catch {
    spawnSync('sleep', ['1'])
  }
}

process.stderr.write('verify-fractional-caio-site launch: timed out waiting for home page\n')
process.exit(1)
