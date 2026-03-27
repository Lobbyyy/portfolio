"use client"

import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'

// Dynamic import to prevent SSR issues with @studio-freight/lenis
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), {
  ssr: false,
})

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </ThemeProvider>
  )
}
