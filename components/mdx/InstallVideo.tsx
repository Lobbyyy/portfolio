"use client"

import { useEffect, useRef } from "react"

/**
 * Silent looping demo clip for install walkthroughs.
 * React doesn't reliably render the `muted` attribute, and iOS only autoplays muted video,
 * so it's set on the element directly.
 * Used in markdown as <install-video src="..." poster="..." label="..."></install-video>.
 */
export default function InstallVideo({
  src,
  poster,
  label,
}: {
  src: string
  poster?: string
  label?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {
      // Autoplay blocked (e.g. low-power mode): the poster and controls still work
    })
  }, [])

  return (
    <figure className="not-prose my-8">
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="metadata"
        aria-label={label}
        className="w-full rounded-xl border border-[rgb(var(--border))]"
      />
      {label && (
        <figcaption className="mt-2 text-center text-sm italic text-[rgb(var(--muted))]">{label}</figcaption>
      )}
    </figure>
  )
}
