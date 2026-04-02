"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Download, Check } from "lucide-react"
import { shareImageSizes, VARIATIONS, getDefaultVariation, type ShareImageFormat } from "@/lib/share-image-config"

interface ShareImageModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  tag?: string
}

const FORMAT_OPTIONS: { key: ShareImageFormat; label: string; description: string }[] = [
  { key: "vertical", label: "Vertical", description: "Stories (9:16)" },
  { key: "square", label: "Square", description: "Feed (1:1)" },
  { key: "instagram", label: "Instagram", description: "Feed (4:5)" },
  { key: "landscape", label: "Landscape", description: "Twitter/LinkedIn" },
]

export default function ShareImageModal({
  isOpen,
  onClose,
  title,
  subtitle,
  tag,
}: ShareImageModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<ShareImageFormat>("square")
  const [selectedVariation, setSelectedVariation] = useState<string>(getDefaultVariation("square"))
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)

  // Get variations for current format
  const variations = VARIATIONS[selectedFormat]

  // Build the image URL
  const imageUrl = `/api/share-image?${new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
    ...(tag && { tag }),
    format: selectedFormat,
    variation: selectedVariation,
  }).toString()}`

  // Handle format change - reset to first variation
  const handleFormatChange = useCallback((format: ShareImageFormat) => {
    setSelectedFormat(format)
    setSelectedVariation(getDefaultVariation(format))
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setDownloadComplete(false)
    }
  }, [isOpen])

  // Download handler
  const handleDownload = useCallback(async () => {
    setIsDownloading(true)
    setDownloadComplete(false)

    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      // Create filename from title
      const safeTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .slice(0, 50)

      const link = document.createElement("a")
      link.href = url
      link.download = `${safeTitle}-${selectedFormat}-${selectedVariation}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setDownloadComplete(true)
      setTimeout(() => setDownloadComplete(false), 2000)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsDownloading(false)
    }
  }, [imageUrl, title, selectedFormat, selectedVariation])

  if (!isOpen) return null

  const currentSize = shareImageSizes[selectedFormat]
  const aspectRatio = currentSize.width / currentSize.height

  // Build thumbnail URLs for variation previews
  const getVariationUrl = (variationKey: string) => {
    return `/api/share-image?${new URLSearchParams({
      title,
      ...(subtitle && { subtitle }),
      ...(tag && { tag }),
      format: selectedFormat,
      variation: variationKey,
    }).toString()}`
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-50 max-h-[90vh] overflow-hidden">
        <div className="mx-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[rgb(var(--border))] flex-shrink-0">
            <div>
              <h2 className="text-lg font-medium text-[rgb(var(--text))]">
                Download as image
              </h2>
              <p className="text-sm text-[rgb(var(--muted))]">
                Choose a format and style
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[rgb(var(--border))] transition-colors"
            >
              <X className="w-5 h-5 text-[rgb(var(--muted))]" />
            </button>
          </div>

          {/* Content - scrollable */}
          <div className="p-5 space-y-5 overflow-y-auto flex-1">
            {/* Format selector */}
            <div className="flex gap-2">
              {FORMAT_OPTIONS.map((option) => (
                <button
                  key={option.key}
                  onClick={() => handleFormatChange(option.key)}
                  className={`
                    flex-1 px-3 py-2 rounded-lg border text-sm transition-colors
                    ${
                      selectedFormat === option.key
                        ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]"
                        : "border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:border-[rgb(var(--text))]/30"
                    }
                  `}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-xs opacity-70">{option.description}</div>
                </button>
              ))}
            </div>

            {/* Variation selector - only show if more than 1 variation */}
            {variations.length > 1 && (
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[rgb(var(--muted))]">
                  Style
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {variations.map((variation) => {
                    const isSelected = selectedVariation === variation.key
                    return (
                      <button
                        key={variation.key}
                        onClick={() => setSelectedVariation(variation.key)}
                        className={`
                          relative rounded-lg border overflow-hidden transition-all
                          ${
                            isSelected
                              ? "border-[rgb(var(--primary))] ring-2 ring-[rgb(var(--primary))]/20"
                              : "border-[rgb(var(--border))] hover:border-[rgb(var(--text))]/30"
                          }
                        `}
                      >
                        {/* Thumbnail preview */}
                        <div
                          className="relative bg-[rgb(var(--border))]/50"
                          style={{ aspectRatio: `${currentSize.width} / ${currentSize.height}`, maxHeight: '100px' }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={getVariationUrl(variation.key)}
                            alt={variation.label}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        {/* Label */}
                        <div className={`
                          px-2 py-1.5 text-center text-xs font-medium
                          ${isSelected ? "text-[rgb(var(--primary))]" : "text-[rgb(var(--muted))]"}
                        `}>
                          {variation.label}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Main image preview */}
            <div className="relative bg-[rgb(var(--border))]/50 rounded-lg overflow-hidden flex items-center justify-center p-4">
              <div
                className="relative bg-white rounded shadow-lg overflow-hidden"
                style={{
                  width: aspectRatio >= 1 ? "100%" : `${aspectRatio * 300}px`,
                  maxWidth: "100%",
                  aspectRatio: `${currentSize.width} / ${currentSize.height}`,
                  maxHeight: "350px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt="Share image preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Size info */}
            <div className="text-center text-xs text-[rgb(var(--muted))]">
              {currentSize.width} x {currentSize.height} px
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-[rgb(var(--border))] bg-[rgb(var(--background))] flex-shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:border-[rgb(var(--text))]/30 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  downloadComplete
                    ? "bg-green-600 text-white"
                    : "bg-[rgb(var(--primary))] text-white hover:bg-[rgb(var(--primary))]/90"
                }
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {downloadComplete ? (
                <>
                  <Check className="w-4 h-4" />
                  Downloaded
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  {isDownloading ? "Downloading..." : "Download"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
