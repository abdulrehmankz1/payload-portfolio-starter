import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

interface Props { project: any }

export function ProjectCard({ project }: Props) {
  const coverUrl = typeof project.coverImage === 'object' ? project.coverImage?.url : null

  return (
    <Card className="group overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        {coverUrl ? (
          <Image src={coverUrl} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/20">{project.title.charAt(0)}</span>
          </div>
        )}
        {project.featured && (
          <Badge className="absolute top-3 right-3 bg-primary/90">Featured</Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.category && (
            <Badge variant="secondary" className="text-xs shrink-0">{project.category}</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.tagline}</p>
      </CardHeader>
      <CardContent className="pb-4 flex-1">
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech: any) => (
              <Badge key={tech.name} variant="outline" className="text-xs">{tech.name}</Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" className="text-xs">+{project.techStack.length - 4}</Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 gap-2">
        <Button size="sm" variant="ghost" className="flex-1" asChild>
          <Link href={`/projects/${project.slug}`}>
            Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
        {project.githubUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
