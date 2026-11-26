import { NextResponse } from "next/server"

// Resource signups: one Resend contact per email, in the "Resources" segment, tagged with the page and keyword it came from.
// Docs: https://resend.com/docs/api-reference/contacts/create-contact
//       https://resend.com/docs/api-reference/contacts/add-contact-to-segment
//       https://resend.com/docs/api-reference/emails/send-email

const RESEND = "https://api.resend.com"
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SLUG_RE = /^[a-z0-9-]{1,80}$/
const KEYWORD_RE = /^[A-Za-z0-9]{1,30}$/

async function resend(path: string, key: string, body?: unknown) {
  const res = await fetch(`${RESEND}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  const json = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, json }
}

function welcomeHtml(source: string) {
  return `<p>Hey,</p>
<p>Thanks for grabbing <strong>${source}</strong>. You're on the list.</p>
<p>Every Sunday I send the week's best GitHub repos and tools, each with one line on what it does and a prompt you can hand straight to your agent.</p>
<p>Everything so far lives here: <a href="https://lobsang-lama.com/resources?tab=guides">lobsang-lama.com/resources</a></p>
<p>Lobsang</p>`
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY
  const segment = process.env.RESEND_RESOURCES_SEGMENT_ID
  if (!key || !segment) {
    console.error("[subscribe] RESEND_API_KEY or RESEND_RESOURCES_SEGMENT_ID is not set")
    return NextResponse.json({ error: "Signups are not open yet" }, { status: 503 })
  }

  let input: { email?: unknown; source?: unknown; keyword?: unknown }
  try {
    input = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : ""
  const source = typeof input.source === "string" && SLUG_RE.test(input.source) ? input.source : "unknown"
  const keyword = typeof input.keyword === "string" && KEYWORD_RE.test(input.keyword) ? input.keyword.toUpperCase() : ""
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "That email does not look right" }, { status: 400 })
  }

  const created = await resend("/contacts", key, {
    email,
    unsubscribed: false,
    segments: [{ id: segment }],
    properties: { source_page: source, ...(keyword ? { source_keyword: keyword } : {}) },
  })

  let already = false
  if (!created.ok) {
    // The contact may exist already (signed up from another page): add it to the segment instead.
    const added = await resend(`/contacts/${encodeURIComponent(email)}/segments/${segment}`, key)
    if (!added.ok) {
      console.error("[subscribe] Resend failed", { create: created.status, createBody: created.json, add: added.status, addBody: added.json, source })
      return NextResponse.json({ error: "Could not add you to the list" }, { status: 502 })
    }
    already = true
  }

  const from = process.env.RESEND_FROM
  if (!already && from) {
    const sent = await resend("/emails", key, {
      from,
      to: [email],
      subject: "You're on the list",
      html: welcomeHtml(source),
      tags: [{ name: "source_page", value: source.replace(/-/g, "_") }],
    })
    if (!sent.ok) console.error("[subscribe] welcome email failed", { status: sent.status, body: sent.json, source })
  } else if (!from) {
    console.error("[subscribe] RESEND_FROM is not set: no welcome email sent")
  }

  return NextResponse.json({ ok: true, already })
}
