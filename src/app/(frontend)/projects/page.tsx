import { getProjects } from '@/lib/payload'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have built',
}

export default async function ProjectsPage() {
  const result = await getProjects().catch(() => ({ docs: [] })) as any

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground text-lg">A showcase of things I have built.</p>
        </div>
        {result.docs.length === 0 ? (
          <p className="text-muted-foreground">No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.docs.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
