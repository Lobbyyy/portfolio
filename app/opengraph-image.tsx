import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Lobsang Lama - Stoic. Entrepreneur. Creative. Athlete.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
        }}
      >
        {/* Orange sidebar with logo */}
        <div
          style={{
            width: '200px',
            height: '100%',
            background: '#D54919',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logo - simplified L shape */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="white"
          >
            <path d="M0 0h100v25H25v50h25v25H0V0z" />
            <path d="M75 50h25v50H50V75h25V50z" />
          </svg>
        </div>

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '50px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '64px',
              fontFamily: 'Georgia, serif',
              color: '#F5F5F5',
              lineHeight: 1.2,
            }}
          >
            Lobsang Lama
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                fontSize: '28px',
                color: '#888888',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Stoic. Entrepreneur. Creative. Athlete.
            </div>
            <div
              style={{
                fontSize: '16px',
                color: '#D54919',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: 'monospace',
              }}
            >
              lobsang-lama.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
