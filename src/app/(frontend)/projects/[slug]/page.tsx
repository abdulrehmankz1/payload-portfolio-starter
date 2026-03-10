import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug } from '@/lib/payload'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug).catch(() => null) as any
  if (!project) return { title: 'Project Not Found' }
  return { title: project.title, description: project.tagline }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug).catch(() => null) as any
  if (!project) notFound()

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      <Link href="/projects">
        <Button variant="ghost" className="mb-8 -ml-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Link>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {project.category && <Badge variant="secondary">{project.category}</Badge>}
          {project.completedAt && (
            <span className="text-sm text-muted-foreground">{formatDate(project.completedAt)}</span>
          )}
        </div>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
      {project.coverImage && typeof project.coverImage === 'object' && (
        <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden border">
          <Image src={(project.coverImage as any).url} alt={(project.coverImage as any).alt || project.title} fill className="object-cover" />
        </div>
      )}
      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: any) => (
              <Badge key={tech.name} variant="outline">{tech.name}</Badge>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
