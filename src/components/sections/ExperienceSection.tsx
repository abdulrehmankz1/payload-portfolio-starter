import Image from "next/image"
import { format } from "date-fns"
import { MapPin, ExternalLink } from "lucide-react"

function ExperienceCard({ job }: { job: any }) {
  const start = job.startDate ? format(new Date(job.startDate), "MMM yyyy") : ""
  const end = job.current ? "Present" : job.endDate ? format(new Date(job.endDate), "MMM yyyy") : ""
  return (
    <div className="relative pl-6 pb-10 last:pb-0">
      <div className="absolute left-0 top-1 bottom-0 w-px bg-border" />
      <div className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
      <div className="rounded-xl border border-border/60 bg-card p-5 space-y-3 hover:border-primary/30 transition-colors">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            {job.companyLogo?.url ? (
              <div className="h-10 w-10 rounded-lg overflow-hidden border border-border flex-shrink-0">
                <Image src={job.companyLogo.url} alt={job.company} width={40} height={40} className="object-contain" />
              </div>
            ) : (
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">{job.company.charAt(0)}</span>
              </div>
            )}
            <div>
              <h3 className="font-semibold">{job.role}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">{job.company}<ExternalLink className="h-3 w-3"/></a>
                ) : <span className="text-sm text-primary">{job.company}</span>}
                {job.employmentType && <span className="text-xs bg-muted px-2 py-0.5 rounded-full capitalize">{job.employmentType}</span>}
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <p>{start} – {end}</p>
            {job.location && <p className="flex items-center gap-1 justify-end mt-0.5"><MapPin className="h-3 w-3"/>{job.location}</p>}
          </div>
        </div>
        {job.achievements?.length > 0 && (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {job.achievements.map((a: any, i: number) => <li key={i} className="flex gap-2"><span className="text-primary mt-0.5">▸</span><span>{a.achievement}</span></li>)}
          </ul>
        )}
        {job.techUsed?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {job.techUsed.map((t: any, i: number) => <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{t.tech}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}

export function ExperienceSection({ experience }: { experience: any[] }) {
  if (!experience?.length) return null
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">My professional journey.</p>
        </div>
        <div className="mt-8">
          {experience.map(job => <ExperienceCard key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  )
}
