import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import { getSiteSettings } from '@/lib/payload'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = (await getSiteSettings()) as any
    return {
      title: {
        default: settings?.seo?.metaTitle || `${settings?.name} — Portfolio`,
        template: `%s | ${settings?.name}`,
      },
      description: settings?.seo?.metaDescription || settings?.bio,
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: settings?.name,
      },
      twitter: { card: 'summary_large_image' },
    }
  } catch {
    return { title: 'Portfolio', description: 'My Portfolio' }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
