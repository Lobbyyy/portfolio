import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F6F3',
          borderRadius: '32px',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="#D54919">
          <path d="M0 0 H100 V100 H75 V25 H0 Z" />
          <path d="M0 45 H50 V100 H25 V70 H0 Z" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
