"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { trackSignupDrawer } from "@/lib/analytics"
import { AGENT_PROMPT_COPIED_EVENT } from "./ResourceTLDR"

const DISMISSED_KEY = "signup-drawer-dismissed-at"
const SUBSCRIBED_KEY = "signup-drawer-subscribed"
const SHOWN_THIS_VISIT_KEY = "signup-drawer-shown"
const DISMISS_DAYS = 30
const SWIPE_CLOSE_PX = 80

function read(storage: () => Storage, key: string): string | null {
  try {
    return storage().getItem(key)
  } catch {
    return null
  }
}

function write(storage: () => Storage, key: string, value: string) {
  try {
    storage().setItem(key, value)
  } catch {
    // Storage blocked (private mode): the drawer still works, it just may show again.
  }
}

function suppressed(): boolean {
  if (read(() => localStorage, SUBSCRIBED_KEY)) return true
  if (read(() => sessionStorage, SHOWN_THIS_VISIT_KEY)) return true
  const at = Number(read(() => localStorage, DISMISSED_KEY) || 0)
  return at > 0 && Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000
}

type Status = "idle" | "sending" | "done" | "error"

interface SignupDrawerProps {
  resource: string
  keyword?: string
}

// Optional bottom drawer: opens once per visit, after the visitor copies the prompt or reads halfway. Swipe down or tap X to close.
export default function SignupDrawer({ resource, keyword }: SignupDrawerProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")
  const [dragY, setDragY] = useState(0)
  const dragStart = useRef<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const show = useCallback(
    (trigger: "copy" | "scroll") => {
      if (open || suppressed()) return
      write(() => sessionStorage, SHOWN_THIS_VISIT_KEY, "1")
      setMounted(true)
      requestAnimationFrame(() => setOpen(true))
      trackSignupDrawer("opened", resource, { trigger })
    },
    [open, resource]
  )

  const close = useCallback(() => {
    setOpen(false)
    setDragY(0)
    if (status !== "done") {
      write(() => localStorage, DISMISSED_KEY, String(Date.now()))
      trackSignupDrawer("dismissed", resource)
    }
  }, [resource, status])

  useEffect(() => {
    const onCopy = () => setTimeout(() => show("copy"), 600)
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY / max >= 0.5) show("scroll")
    }
    window.addEventListener(AGENT_PROMPT_COPIED_EVENT, onCopy)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener(AGENT_PROMPT_COPIED_EVENT, onCopy)
      window.removeEventListener("scroll", onScroll)
    }
  }, [show])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setMessage("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: resource, keyword }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`)
      setStatus("done")
      setMessage(body.already ? "You're already on the list. Next one lands Sunday." : "You're in. Check your inbox.")
      write(() => localStorage, SUBSCRIBED_KEY, "1")
      trackSignupDrawer("submitted", resource, { keyword, already: Boolean(body.already) })
    } catch (err) {
      const text = err instanceof Error ? err.message : "Something went wrong"
      setStatus("error")
      setMessage(`${text}. Try again in a minute.`)
      trackSignupDrawer("failed", resource, { error: text })
    }
  }

  if (!mounted) return null

  // Phone: drawer from the bottom that swipes away. Desktop (md and up): a centred pop-up over a dim backdrop.
  const easing = "cubic-bezier(0.32, 0.72, 0, 1)"
  const cardStyle: React.CSSProperties = isDesktop
    ? {
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
        transition: `opacity 200ms ease-out, transform 240ms ${easing}`,
      }
    : {
        transform: open ? `translateY(${dragY}px)` : "translateY(110%)",
        transition: dragStart.current === null ? `transform 320ms ${easing}` : "none",
      }

  return (
    <div
      role="dialog"
      aria-modal={isDesktop}
      aria-label="Get the next repo by email"
      aria-hidden={!open}
      className={
        isDesktop
          ? `fixed inset-0 z-50 flex items-center justify-center p-6 transition-colors duration-200 ${open ? "bg-black/40 pointer-events-auto" : "bg-transparent pointer-events-none"}`
          : "fixed inset-x-0 bottom-0 z-50 flex justify-center pointer-events-none"
      }
      onClick={(e) => {
        if (isDesktop && e.target === e.currentTarget) close()
      }}
    >
      <div
        className={
          isDesktop
            ? "pointer-events-auto w-full max-w-md rounded-[22px] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-6 pb-6 pt-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] motion-reduce:transition-none"
            : "pointer-events-auto w-full max-w-md rounded-t-[22px] border border-b-0 border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 pb-[calc(env(safe-area-inset-bottom)+20px)] pt-2 shadow-[0_-12px_40px_rgba(0,0,0,0.25)] motion-reduce:transition-none"
        }
        style={cardStyle}
        onPointerDown={(e) => {
          if (isDesktop || (e.target as HTMLElement).closest("input,button")) return
          dragStart.current = e.clientY
        }}
        onPointerMove={(e) => {
          if (dragStart.current === null) return
          setDragY(Math.max(0, e.clientY - dragStart.current))
        }}
        onPointerUp={() => {
          const dragged = dragY
          dragStart.current = null
          if (dragged > SWIPE_CLOSE_PX) close()
          else setDragY(0)
        }}
        onPointerCancel={() => {
          dragStart.current = null
          setDragY(0)
        }}
      >
        {!isDesktop && <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[rgb(var(--border))]" aria-hidden />}
        <div className="flex items-start justify-between gap-4">
          <p className="font-medium text-[rgb(var(--text))]">Get the next repo in your inbox</p>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="-mr-1 -mt-1 rounded-lg p-1.5 text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {status === "done" ? (
          <p className="mt-3 text-sm text-[rgb(var(--muted))]">{message}</p>
        ) : (
          <form onSubmit={submit} className="mt-3">
            <div className="flex gap-2">
              <input
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-3.5 py-2.5 text-[16px] text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--primary))] focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="shrink-0 rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-medium text-white transition-transform duration-150 ease-out active:scale-[0.97] disabled:opacity-60"
              >
                {status === "sending" ? "Sending" : "Send it"}
              </button>
            </div>
            <p className="mt-2.5 text-xs leading-relaxed text-[rgb(var(--muted))]">
              One email on Sundays with the week&apos;s repos and tools, plus the odd launch. Unsubscribe in one click.
            </p>
            {status === "error" && <p className="mt-2 text-xs text-[rgb(var(--primary))]">{message}</p>}
          </form>
        )}
      </div>
    </div>
  )
}
