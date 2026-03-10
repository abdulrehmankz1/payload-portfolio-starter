import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { ArrowRight } from 'lucide-react'

interface Props { projects: any[] }

export function ProjectsSection({ projects }: Props) {
  if (!projects.length) return null
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Portfolio</p>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
