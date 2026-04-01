import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

// Correct logo SVG paths
const LogoSVG = () => (
  <svg
    width="65"
    height="65"
    viewBox="0 0 100 100"
    fill="white"
  >
    {/* Big L: top bar + right bar */}
    <path d="M0 0 H100 V100 H75 V25 H0 Z" />
    {/* Small L: same orientation */}
    <path d="M0 45 H50 V100 H25 V70 H0 Z" />
  </svg>
)

interface OGImageProps {
  title: string
  subtitle?: string
  tag?: string
}

/**
 * Shared OG Image Template - Variation H (Light Mode)
 *
 * Design:
 * - 180px orange sidebar with white logo
 * - Light gradient background with grain texture
 * - Title + optional subtitle
 * - Horizontal divider + website URL + optional tag
 */
export function createOGImageResponse({ title, subtitle, tag }: OGImageProps) {
  // Truncate title if too long
  const displayTitle = title.length > 60 ? title.slice(0, 57) + '...' : title
  // Truncate subtitle if too long
  const displaySubtitle = subtitle && subtitle.length > 120
    ? subtitle.slice(0, 117) + '...'
    : subtitle

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#F8F6F3',
        }}
      >
        {/* Orange sidebar with logo */}
        <div
          style={{
            width: '180px',
            height: '100%',
            background: '#D54919',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <LogoSVG />
        </div>

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            background: 'linear-gradient(145deg, #FAFAF8 0%, #F5F3F0 100%)',
          }}
        >
          {/* Grain texture overlay - SVG noise pattern */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.06,
              pointerEvents: 'none',
            }}
          >
            <defs>
              <filter id="noise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
            </defs>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>

          {/* Content inner */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '45px 50px',
              position: 'relative',
            }}
          >
            {/* Title section */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Title */}
              <div
                style={{
                  fontSize: displayTitle.length > 40 ? '26px' : '28px',
                  fontFamily: 'Georgia, serif',
                  color: '#1A1A1A',
                  lineHeight: 1.2,
                  maxWidth: '95%',
                }}
              >
                {displayTitle}
              </div>

              {/* Subtitle */}
              {displaySubtitle && (
                <div
                  style={{
                    fontSize: '14px',
                    fontFamily: 'system-ui, sans-serif',
                    color: '#666666',
                    lineHeight: 1.5,
                    maxWidth: '90%',
                  }}
                >
                  {displaySubtitle}
                </div>
              )}
            </div>

            {/* Footer with divider */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Divider line */}
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(0, 0, 0, 0.1)',
                }}
              />

              {/* Footer content */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                {/* Website URL */}
                <div
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: '#888888',
                  }}
                >
                  lobsang-lama.com
                </div>

                {/* Tag */}
                {tag && (
                  <div
                    style={{
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#D54919',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                    }}
                  >
                    {tag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    }
  )
}
