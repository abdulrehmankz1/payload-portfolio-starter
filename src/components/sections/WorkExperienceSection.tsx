import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'
import { formatDateShort } from '@/lib/utils'

interface Props { experience: any[] }

export function WorkExperienceSection({ experience }: Props) {
  if (!experience.length) return null
  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Career</p>
          <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {experience.map((job: any) => (
                <div key={job.id} className="relative pl-16">
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>
                        {formatDateShort(job.startDate)} — {job.current ? 'Present' : job.endDate ? formatDateShort(job.endDate) : ''}
                      </p>
                      {job.location && <p>{job.location}</p>}
                      {job.employmentType && <Badge variant="outline" className="mt-1 text-xs">{job.employmentType}</Badge>}
                    </div>
                  </div>
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="space-y-1 mt-3">
                      {job.highlights.map((h: any, i: number) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">▸</span>
                          {h.point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {job.technologies && job.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {job.technologies.map((t: any) => (
                        <Badge key={t.name} variant="outline" className="text-xs">{t.name}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
