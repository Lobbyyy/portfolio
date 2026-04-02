import { ImageResponse } from 'next/og'
import { shareImageSizes, type ShareImageFormat } from './share-image-config'

// Re-export for convenience in server components
export { shareImageSizes, type ShareImageFormat } from './share-image-config'

// Logo SVG component
const LogoSVG = ({ size = 65, fill = 'white' }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={fill}>
    <path d="M0 0 H100 V100 H75 V25 H0 Z" />
    <path d="M0 45 H50 V100 H25 V70 H0 Z" />
  </svg>
)

// Grain texture SVG
const GrainTexture = ({ opacity = 0.06, mode = 'multiply' }: { opacity?: number; mode?: string }) => (
  <svg
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity,
      pointerEvents: 'none',
      mixBlendMode: mode as 'multiply' | 'overlay',
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
)

interface ShareImageProps {
  title: string
  subtitle?: string
  tag?: string
  format: ShareImageFormat
  variation?: string
}

// Helper to truncate text
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

// ============================================
// LANDSCAPE VARIATION H - Sidebar with grain
// ============================================
function createLandscapeH({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.landscape
  const displayTitle = truncate(title, 60)
  const displaySubtitle = subtitle ? truncate(subtitle, 120) : undefined

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F6F3' }}>
        {/* Orange sidebar with logo */}
        <div style={{
          width: 180,
          height: '100%',
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <LogoSVG size={65} />
        </div>

        {/* Content area */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: 'linear-gradient(145deg, #FAFAF8 0%, #F5F3F0 100%)',
        }}>
          <GrainTexture />

          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '45px 50px',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{
                fontSize: 28,
                fontFamily: 'Georgia, serif',
                color: '#1A1A1A',
                lineHeight: 1.2,
              }}>
                {displayTitle}
              </div>
              {displaySubtitle && (
                <div style={{
                  fontSize: 14,
                  fontFamily: 'system-ui, sans-serif',
                  color: '#666666',
                  lineHeight: 1.5,
                  maxWidth: '90%',
                }}>
                  {displaySubtitle}
                </div>
              )}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div style={{ width: '100%', height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
                <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#888888' }}>
                  lobsang-lama.com
                </div>
                {tag && (
                  <div style={{
                    fontSize: 11,
                    fontFamily: 'monospace',
                    color: '#D54919',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}>
                    {tag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// SQUARE VARIATION A - Centered quote
// ============================================
function createSquareA({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.square
  const displayTitle = truncate(title, 60)
  const displaySubtitle = subtitle ? truncate(subtitle, 120) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F5F3F0 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <GrainTexture />

        {/* Content centered */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 120,
          position: 'relative',
        }}>
          <div style={{
            fontSize: 72,
            fontFamily: 'Georgia, serif',
            color: '#1A1A1A',
            lineHeight: 1.15,
            maxWidth: '90%',
          }}>
            {displayTitle}
          </div>
          {displaySubtitle && (
            <div style={{
              fontSize: 28,
              fontFamily: 'system-ui, sans-serif',
              color: '#666666',
              lineHeight: 1.6,
              marginTop: 48,
              maxWidth: '80%',
            }}>
              {displaySubtitle}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 80px',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
        }}>
          <LogoSVG size={72} fill="#D54919" />
          <div style={{ fontSize: 22, fontFamily: 'monospace', color: '#888888' }}>
            lobsang-lama.com
          </div>
          {tag && (
            <div style={{
              fontSize: 22,
              fontFamily: 'monospace',
              color: '#D54919',
              textTransform: 'uppercase',
              letterSpacing: '4px',
            }}>
              {tag}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// SQUARE VARIATION B - Sidebar
// ============================================
function createSquareB({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.square
  const displayTitle = truncate(title, 60)
  const displaySubtitle = subtitle ? truncate(subtitle, 120) : undefined

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F6F3' }}>
        {/* Sidebar */}
        <div style={{
          width: 200,
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <LogoSVG size={80} />
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          position: 'relative',
          background: 'linear-gradient(145deg, #FAFAF8 0%, #F5F3F0 100%)',
        }}>
          <GrainTexture />

          <div style={{
            position: 'relative',
            padding: '100px 80px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: 64,
                fontFamily: 'Georgia, serif',
                color: '#1A1A1A',
                lineHeight: 1.15,
              }}>
                {displayTitle}
              </div>
              {displaySubtitle && (
                <div style={{
                  fontSize: 28,
                  fontFamily: 'system-ui, sans-serif',
                  color: '#666666',
                  lineHeight: 1.5,
                  marginTop: 32,
                  maxWidth: '95%',
                }}>
                  {displaySubtitle}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ width: '100%', height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 24, fontFamily: 'monospace', color: '#888888' }}>
                  lobsang-lama.com
                </div>
                {tag && (
                  <div style={{
                    fontSize: 24,
                    fontFamily: 'monospace',
                    color: '#D54919',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                  }}>
                    {tag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// SQUARE VARIATION C - Dark dramatic
// ============================================
function createSquareC({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.square
  const displayTitle = truncate(title, 60)
  const displaySubtitle = subtitle ? truncate(subtitle, 120) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Top accent bar */}
        <div style={{ height: 16, background: '#D54919' }} />

        <GrainTexture opacity={0.15} mode="overlay" />

        {/* Logo in corner */}
        <div style={{ position: 'absolute', top: 48, right: 48 }}>
          <LogoSVG size={72} fill="#D54919" />
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 120,
          position: 'relative',
        }}>
          <div style={{
            fontSize: 96,
            fontFamily: 'Georgia, serif',
            color: '#FFFFFF',
            lineHeight: 1.1,
          }}>
            {displayTitle}
          </div>
          {displaySubtitle && (
            <div style={{
              fontSize: 28,
              fontFamily: 'system-ui, sans-serif',
              color: '#888888',
              lineHeight: 1.6,
              marginTop: 48,
              maxWidth: '85%',
            }}>
              {displaySubtitle}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '48px 120px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}>
          <div style={{ fontSize: 22, fontFamily: 'monospace', color: '#666666' }}>
            lobsang-lama.com
          </div>
          {tag && (
            <div style={{
              fontSize: 22,
              fontFamily: 'monospace',
              color: '#D54919',
              textTransform: 'uppercase',
              letterSpacing: '4px',
            }}>
              {tag}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// INSTAGRAM VARIATION A - Sidebar
// ============================================
function createInstagramA({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.instagram
  const displayTitle = truncate(title, 70)
  const displaySubtitle = subtitle ? truncate(subtitle, 150) : undefined

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F6F3' }}>
        {/* Sidebar */}
        <div style={{
          width: 200,
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <LogoSVG size={80} />
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          position: 'relative',
          background: 'linear-gradient(145deg, #FAFAF8 0%, #F5F3F0 100%)',
        }}>
          <GrainTexture />

          <div style={{
            position: 'relative',
            padding: '125px 90px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: 70,
                fontFamily: 'Georgia, serif',
                color: '#1A1A1A',
                lineHeight: 1.15,
              }}>
                {displayTitle}
              </div>
              {displaySubtitle && (
                <div style={{
                  fontSize: 32,
                  fontFamily: 'system-ui, sans-serif',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginTop: 40,
                }}>
                  {displaySubtitle}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ width: '100%', height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 25, fontFamily: 'monospace', color: '#888888' }}>
                  lobsang-lama.com
                </div>
                {tag && (
                  <div style={{
                    fontSize: 25,
                    fontFamily: 'monospace',
                    color: '#D54919',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                  }}>
                    {tag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// INSTAGRAM VARIATION B - Top logo centered
// ============================================
function createInstagramB({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.instagram
  const displayTitle = truncate(title, 70)
  const displaySubtitle = subtitle ? truncate(subtitle, 150) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F5F3F0 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <GrainTexture />

        {/* Logo header */}
        <div style={{
          padding: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 30,
        }}>
          <div style={{
            width: 80,
            height: 80,
            background: '#D54919',
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <LogoSVG size={45} />
          </div>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 100px',
          position: 'relative',
        }}>
          <div style={{
            fontSize: 75,
            fontFamily: 'Georgia, serif',
            color: '#1A1A1A',
            lineHeight: 1.15,
          }}>
            {displayTitle}
          </div>
          {displaySubtitle && (
            <div style={{
              fontSize: 32,
              fontFamily: 'system-ui, sans-serif',
              color: '#666666',
              lineHeight: 1.6,
              marginTop: 50,
            }}>
              {displaySubtitle}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '60px 100px',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
        }}>
          <div style={{ fontSize: 25, fontFamily: 'monospace', color: '#888888' }}>
            lobsang-lama.com
          </div>
          {tag && (
            <div style={{
              fontSize: 25,
              fontFamily: 'monospace',
              color: '#D54919',
              textTransform: 'uppercase',
              letterSpacing: '4px',
            }}>
              {tag}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// INSTAGRAM VARIATION C - Rule of thirds
// ============================================
function createInstagramC({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.instagram
  const displayTitle = truncate(title, 70)
  const displaySubtitle = subtitle ? truncate(subtitle, 150) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#F8F6F3',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Orange header - 1/3 of height */}
        <div style={{
          height: 450, // 1/3 of 1350
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LogoSVG size={150} />
        </div>

        {/* Content - 2/3 of height */}
        <div style={{
          flex: 1,
          position: 'relative',
          background: 'linear-gradient(180deg, #FAFAF8 0%, #F5F3F0 100%)',
        }}>
          <GrainTexture />

          <div style={{
            position: 'relative',
            padding: '90px 100px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: 70,
                fontFamily: 'Georgia, serif',
                color: '#1A1A1A',
                lineHeight: 1.15,
              }}>
                {displayTitle}
              </div>
              {displaySubtitle && (
                <div style={{
                  fontSize: 32,
                  fontFamily: 'system-ui, sans-serif',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginTop: 40,
                }}>
                  {displaySubtitle}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ width: '100%', height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 25, fontFamily: 'monospace', color: '#888888' }}>
                  lobsang-lama.com
                </div>
                {tag && (
                  <div style={{
                    fontSize: 25,
                    fontFamily: 'monospace',
                    color: '#D54919',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                  }}>
                    {tag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// VERTICAL VARIATION A - Statement
// ============================================
function createVerticalA({ title, subtitle }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.vertical
  const displayTitle = truncate(title, 80)
  const displaySubtitle = subtitle ? truncate(subtitle, 200) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F3F1EE 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <GrainTexture />

        {/* Content centered */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '160px 120px',
          position: 'relative',
        }}>
          <div style={{
            fontSize: 112,
            fontFamily: 'Georgia, serif',
            color: '#1A1A1A',
            lineHeight: 1.1,
          }}>
            {displayTitle}
          </div>
          {displaySubtitle && (
            <div style={{
              fontSize: 44,
              fontFamily: 'system-ui, sans-serif',
              color: '#666666',
              lineHeight: 1.55,
              marginTop: 80,
              maxWidth: '90%',
            }}>
              {displaySubtitle}
            </div>
          )}
        </div>

        {/* Orange footer */}
        <div style={{
          background: '#D54919',
          padding: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 64,
        }}>
          <LogoSVG size={96} />
          <div style={{
            fontSize: 36,
            fontFamily: 'monospace',
            color: 'rgba(255, 255, 255, 0.9)',
          }}>
            lobsang-lama.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// VERTICAL VARIATION B - Dark dramatic
// ============================================
function createVerticalB({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.vertical
  const displayTitle = truncate(title, 80)
  const displaySubtitle = subtitle ? truncate(subtitle, 200) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <GrainTexture opacity={0.12} mode="overlay" />

        {/* Accent line on left */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 16,
          height: '100%',
          background: '#D54919',
        }} />

        {/* Logo in corner */}
        <div style={{ position: 'absolute', top: 120, right: 96 }}>
          <LogoSVG size={112} fill="#D54919" />
        </div>

        {/* Content at bottom */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '160px 120px',
          position: 'relative',
        }}>
          <div style={{
            fontSize: 104,
            fontFamily: 'Georgia, serif',
            color: '#FFFFFF',
            lineHeight: 1.15,
          }}>
            {displayTitle}
          </div>
          {displaySubtitle && (
            <div style={{
              fontSize: 40,
              fontFamily: 'system-ui, sans-serif',
              color: '#888888',
              lineHeight: 1.6,
              marginTop: 64,
            }}>
              {displaySubtitle}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '80px 120px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}>
          <div style={{ fontSize: 32, fontFamily: 'monospace', color: '#666666' }}>
            lobsang-lama.com
          </div>
          {tag && (
            <div style={{
              fontSize: 32,
              fontFamily: 'monospace',
              color: '#D54919',
              textTransform: 'uppercase',
              letterSpacing: '4px',
            }}>
              {tag}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// VERTICAL VARIATION C - Book cover
// ============================================
function createVerticalC({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.vertical
  const displayTitle = truncate(title, 80)
  const displaySubtitle = subtitle ? truncate(subtitle, 200) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #F8F6F3 0%, #EDE9E4 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <GrainTexture />

        {/* Top space with logo */}
        <div style={{
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            width: 200,
            height: 200,
            background: '#D54919',
            borderRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <LogoSVG size={104} />
          </div>
        </div>

        {/* Content centered */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 120px',
          position: 'relative',
        }}>
          <div style={{
            fontSize: 104,
            fontFamily: 'Georgia, serif',
            color: '#1A1A1A',
            lineHeight: 1.1,
          }}>
            {displayTitle}
          </div>
          {displaySubtitle && (
            <div style={{
              fontSize: 40,
              fontFamily: 'system-ui, sans-serif',
              color: '#666666',
              lineHeight: 1.6,
              marginTop: 80,
            }}>
              {displaySubtitle}
            </div>
          )}

          {/* Divider */}
          <div style={{
            width: 240,
            height: 1,
            background: 'rgba(0, 0, 0, 0.15)',
            margin: '96px auto',
          }} />
        </div>

        {/* Footer */}
        <div style={{
          padding: '96px 120px 160px',
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: 36, fontFamily: 'monospace', color: '#888888' }}>
            lobsang-lama.com
          </div>
          {tag && (
            <div style={{
              fontSize: 36,
              fontFamily: 'monospace',
              color: '#D54919',
              textTransform: 'uppercase',
              letterSpacing: '8px',
              marginTop: 32,
            }}>
              {tag}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// VERTICAL VARIATION D - Side stripe
// ============================================
function createVerticalD({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.vertical
  const displayTitle = truncate(title, 80)
  const displaySubtitle = subtitle ? truncate(subtitle, 200) : undefined

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F6F3' }}>
        {/* Sidebar */}
        <div style={{
          width: 180,
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <LogoSVG size={80} />
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          position: 'relative',
          background: 'linear-gradient(145deg, #FAFAF8 0%, #F5F3F0 100%)',
        }}>
          <GrainTexture />

          <div style={{
            position: 'relative',
            padding: '160px 96px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: 88,
                fontFamily: 'Georgia, serif',
                color: '#1A1A1A',
                lineHeight: 1.15,
              }}>
                {displayTitle}
              </div>
              {displaySubtitle && (
                <div style={{
                  fontSize: 40,
                  fontFamily: 'system-ui, sans-serif',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginTop: 64,
                }}>
                  {displaySubtitle}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ width: '100%', height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
              <div style={{ fontSize: 32, fontFamily: 'monospace', color: '#888888' }}>
                lobsang-lama.com
              </div>
              {tag && (
                <div style={{
                  fontSize: 32,
                  fontFamily: 'monospace',
                  color: '#D54919',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                }}>
                  {tag}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// VERTICAL VARIATION E - Rule of thirds
// ============================================
function createVerticalE({ title, subtitle, tag }: Omit<ShareImageProps, 'format' | 'variation'>) {
  const size = shareImageSizes.vertical
  const displayTitle = truncate(title, 80)
  const displaySubtitle = subtitle ? truncate(subtitle, 200) : undefined

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#F8F6F3',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Orange header - 1/3 of height */}
        <div style={{
          height: 640, // ~1/3 of 1920
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LogoSVG size={192} />
        </div>

        {/* Content - 2/3 of height */}
        <div style={{
          flex: 1,
          position: 'relative',
          background: 'linear-gradient(180deg, #FAFAF8 0%, #F5F3F0 100%)',
        }}>
          <GrainTexture />

          <div style={{
            position: 'relative',
            padding: '120px 96px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: 88,
                fontFamily: 'Georgia, serif',
                color: '#1A1A1A',
                lineHeight: 1.15,
              }}>
                {displayTitle}
              </div>
              {displaySubtitle && (
                <div style={{
                  fontSize: 40,
                  fontFamily: 'system-ui, sans-serif',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginTop: 56,
                }}>
                  {displaySubtitle}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
              <div style={{ width: '100%', height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 32, fontFamily: 'monospace', color: '#888888' }}>
                  lobsang-lama.com
                </div>
                {tag && (
                  <div style={{
                    fontSize: 32,
                    fontFamily: 'monospace',
                    color: '#D54919',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                  }}>
                    {tag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

// ============================================
// Main function to create share image response
// ============================================
export function createShareImageResponse({ title, subtitle, tag, format, variation }: ShareImageProps) {
  const props = { title, subtitle, tag }

  // Route to the correct variation template
  if (format === 'landscape') {
    return createLandscapeH(props)
  }

  if (format === 'square') {
    switch (variation) {
      case 'b': return createSquareB(props)
      case 'c': return createSquareC(props)
      case 'a':
      default: return createSquareA(props)
    }
  }

  if (format === 'instagram') {
    switch (variation) {
      case 'b': return createInstagramB(props)
      case 'c': return createInstagramC(props)
      case 'a':
      default: return createInstagramA(props)
    }
  }

  if (format === 'vertical') {
    switch (variation) {
      case 'b': return createVerticalB(props)
      case 'c': return createVerticalC(props)
      case 'd': return createVerticalD(props)
      case 'e': return createVerticalE(props)
      case 'a':
      default: return createVerticalA(props)
    }
  }

  // Fallback to square A
  return createSquareA(props)
}
