/**
 * Content guardrails for the marketing site (read-only checks on rendered text/DOM).
 */

const PHONE_IN_TEXT =
  /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/

const TEL_HREF = /href\s*=\s*["']tel:/i

const HEADSHOT_PATTERN = /headshot|profile\s*photo|author\s*photo/i

function htmlWithoutScripts(raw) {
  return raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
}

export function assertContentGuardrails({ pageText, html }) {
  const errors = []
  const visibleHtml = htmlWithoutScripts(html)

  if (PHONE_IN_TEXT.test(pageText)) {
    errors.push('Page must not expose a phone number in visible copy.')
  }

  if (TEL_HREF.test(visibleHtml)) {
    errors.push('Page must not expose a tel: link.')
  }

  if (HEADSHOT_PATTERN.test(visibleHtml)) {
    errors.push('Page must not include a headshot or profile photo.')
  }

  for (const line of pageText.split('\n')) {
    const trimmed = line.trim()
    if (!/\bAI\s+governance\b/i.test(trimmed)) continue
    if (/\?/.test(trimmed) && /\boffer\b/i.test(trimmed)) continue
    if (/\b(?:do not|don't|not)\s+offer\b/i.test(trimmed)) continue
    if (/\bstandalone\b/i.test(trimmed) && /\b(?:offer|service|product)\b/i.test(trimmed)) {
      errors.push('Page must not offer AI governance as a standalone service.')
      break
    }
  }

  if (/LIXIL\s+is\s+(a\s+)?client/i.test(pageText)) {
    errors.push('LIXIL must not be shown as a fractional client.')
  }

  if (!/positioning,\s*not a title/i.test(pageText)) {
    errors.push('Fractional CAIO positioning copy must state it is positioning, not a held title.')
  }

  return errors
}
