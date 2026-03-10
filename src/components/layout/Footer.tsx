import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

interface FooterProps { settings: any }

export function Footer({ settings }: FooterProps) {
  const year = new Date().getFullYear()
  const name = settings?.name || 'Developer'
  const social = settings?.social || {}

  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-muted-foreground mt-1">{settings?.title}</p>
          </div>

          <div className="flex items-center gap-4">
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {settings?.email && (
              <a href={`mailto:${settings.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            © {year} {name} · Built with{' '}
            <a href="https://github.com/your-username/portfolio-cms" 
              className="hover:text-primary transition-colors underline underline-offset-4">
              Portfolio CMS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
