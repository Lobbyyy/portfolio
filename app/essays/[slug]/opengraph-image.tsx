import { ImageResponse } from 'next/og'
import { getEssayBySlug, getAllEssays } from '@/lib/essays'

export const runtime = 'nodejs'
export const alt = 'Essay by Lobsang Lama'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  const essays = getAllEssays()
  return essays.map((essay) => ({
    slug: essay.slug,
  }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const essay = getEssayBySlug(slug)

  const title = essay?.title || 'Essay'

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
          {/* Title */}
          <div
            style={{
              fontSize: title.length > 40 ? '42px' : '52px',
              fontFamily: 'Georgia, serif',
              color: '#F5F5F5',
              lineHeight: 1.2,
              maxWidth: '90%',
            }}
          >
            {title}
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '20px',
                color: '#888888',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Lobsang Lama
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
              Essay
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
