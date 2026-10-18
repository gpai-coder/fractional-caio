import fs from 'node:fs'
import path from 'node:path'

const repoRoot = path.resolve(import.meta.dirname, '../../..')

export function repoRootPath() {
  return repoRoot
}

export function baseUrl() {
  return (
    process.env.VERIFY_BASE_URL ??
    process.env.PLAYWRIGHT_BASE_URL ??
    'http://127.0.0.1:3000'
  ).replace(/\/$/, '')
}

export function artifactsDir(runId) {
  const dir = path.join(repoRoot, 'artifacts', 'verify-fractional-caio-site', runId)
  fs.mkdirSync(dir, { recursive: true })
  return dir
}
