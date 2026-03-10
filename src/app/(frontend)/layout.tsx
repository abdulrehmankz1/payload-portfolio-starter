import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getSiteSettings } from '@/lib/payload'

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings().catch(() => null) as any
  return (
    <>
      <Navbar settings={settings} />
      <main className="min-h-screen">{children}</main>
      <Footer settings={settings} />
    </>
  )
}
