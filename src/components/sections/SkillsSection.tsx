import { Badge } from '@/components/ui/badge'

interface Props { skills: any[] }

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps & Cloud',
  mobile: 'Mobile',
  design: 'Design Tools',
  other: 'Other',
}

export function SkillsSection({ skills }: Props) {
  if (!skills.length) return null

  const grouped = skills.reduce((acc: any, skill: any) => {
    const cat = skill.category || 'other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Toolkit</p>
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid gap-8">
            {Object.entries(grouped).map(([category, categorySkills]: any) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {categoryLabels[category] || category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill: any) => (
                    <Badge key={skill.id} variant="secondary" className="text-sm py-1.5 px-3">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
