import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import Providers from '@/components/Providers'
import './globals.css'

const siteUrl = 'https://lobsang-lama.com'

export const metadata: Metadata = {
  title: {
    default: 'Lobsang Lama',
    template: '%s | Lobsang Lama',
  },
  description: 'Stoic. Entrepreneur. Creative. Athlete. Building companies and sharing what I learn along the way.',
  keywords: ['entrepreneur', 'founder', 'essays', 'startups', 'philosophy', 'building in public'],
  authors: [{ name: 'Lobsang Lama', url: siteUrl }],
  creator: 'Lobsang Lama',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Lobsang Lama',
    description: 'Stoic. Entrepreneur. Creative. Athlete.',
    url: siteUrl,
    siteName: 'Lobsang Lama',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lobsang Lama',
    description: 'Stoic. Entrepreneur. Creative. Athlete.',
    creator: '@Lobbyyyyyy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Person schema for the site owner
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lobsang Lama',
  url: siteUrl,
  sameAs: [
    'https://x.com/Lobbyyyyyy',
    'https://www.linkedin.com/in/lobsang-lama-42a76b63/',
    'https://github.com/Lobbyyy',
    'https://www.youtube.com/@lobsang_lama',
    'https://www.instagram.com/seca.mp4/',
    'https://substack.com/@lobsanglama',
  ],
  jobTitle: 'Entrepreneur',
  description: 'Stoic. Entrepreneur. Creative. Athlete.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Instrument Serif for headlines */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
