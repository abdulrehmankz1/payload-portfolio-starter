'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props { hero: any; settings: any }

const availabilityConfig = {
  available: { label: 'Available for work', color: 'bg-green-500' },
  busy: { label: 'Currently busy', color: 'bg-yellow-500' },
  'not-available': { label: 'Not available', color: 'bg-red-500' },
}

export function HeroSection({ hero, settings }: Props) {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = hero?.roles?.map((r: any) => r.role) || ['Developer', 'Designer', 'Builder']
  const availability = availabilityConfig[settings?.availability as keyof typeof availabilityConfig] || availabilityConfig.available

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            {/* Availability badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className={cn('w-2 h-2 rounded-full animate-pulse', availability.color)} />
              <span className="text-sm text-muted-foreground">{availability.label}</span>
              {settings?.location && (
                <>
                  <span className="text-muted-foreground">·</span>
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{settings.location}</span>
                </>
              )}
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="text-muted-foreground text-3xl lg:text-4xl font-normal block mb-2">
                {hero?.greeting || "Hi, I'm"}
              </span>
              <span className="text-gradient">{hero?.headline || settings?.name || 'Your Name'}</span>
            </h1>

            <div className="h-12 mb-4 flex items-center">
              <p className="text-2xl lg:text-3xl font-semibold text-primary transition-all duration-500">
                {roles[roleIndex]}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {hero?.subheadline || settings?.bio}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href={hero?.ctaPrimary?.href || '/projects'}>
                  {hero?.ctaPrimary?.label || 'View Projects'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={hero?.ctaSecondary?.href || '#contact'}>
                  {hero?.ctaSecondary?.label || 'Contact Me'}
                </Link>
              </Button>
              {settings?.resume && (
                <Button size="lg" variant="ghost" asChild>
                  <a href={settings.resume} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              )}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-8">
              {settings?.social?.github && (
                <a href={settings.social.github} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {settings?.social?.linkedin && (
                <a href={settings.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 glow">
                {settings?.avatar && typeof settings.avatar === 'object' ? (
                  <Image
                    src={(settings.avatar as any).url}
                    alt={settings.name || 'Avatar'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/50">
                      {(settings?.name || 'P').charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-2xl border border-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
