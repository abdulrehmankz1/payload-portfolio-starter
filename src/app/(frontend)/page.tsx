import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { WorkExperienceSection } from '@/components/sections/WorkExperienceSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactSection } from '@/components/sections/ContactSection'
import {
  getSiteSettings,
  getHeroSection,
  getProjects,
  getSkills,
  getWorkExperience,
  getTestimonials,
  getBlogPosts,
} from '@/lib/payload'

export default async function HomePage() {
  const [settings, hero, projects, skills, experience, testimonials, posts] = await Promise.all([
    getSiteSettings().catch(() => null),
    getHeroSection().catch(() => null),
    getProjects({ featured: true, limit: 6 }).catch(() => ({ docs: [] })),
    getSkills().catch(() => ({ docs: [] })),
    getWorkExperience().catch(() => ({ docs: [] })),
    getTestimonials(true).catch(() => ({ docs: [] })),
    getBlogPosts({ limit: 3 }).catch(() => ({ docs: [] })),
  ])

  return (
    <div className="flex flex-col">
      <HeroSection hero={hero} settings={settings} />
      <ProjectsSection projects={(projects as any).docs} />
      <SkillsSection skills={(skills as any).docs} />
      <WorkExperienceSection experience={(experience as any).docs} />
      <TestimonialsSection testimonials={(testimonials as any).docs} />
      <BlogSection posts={(posts as any).docs} />
      <ContactSection settings={settings} />
    </div>
  )
}
