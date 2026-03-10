/**
 * Seed script — run after setting up your admin user
 * Usage: npx tsx scripts/seed.ts
 * 
 * This creates sample data to get you started quickly.
 */
import 'dotenv/config'

async function seed() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@example.com'
  const password = process.env.SEED_ADMIN_PASSWORD || 'changeme123'

  console.log('🌱 Seeding Portfolio CMS...')

  // Login to get token
  const loginRes = await fetch(`${baseUrl}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const { token } = await loginRes.json()

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  }

  // Seed Site Settings
  await fetch(`${baseUrl}/api/globals/site-settings`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: 'John Doe',
      title: 'Full Stack Developer',
      email: 'hello@johndoe.dev',
      bio: 'I build fast, accessible, and beautiful web applications. Passionate about open source and developer experience.',
      location: 'Karachi, Pakistan',
      availability: 'available',
      social: {
        github: 'https://github.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    }),
  })

  // Seed Hero Section
  await fetch(`${baseUrl}/api/globals/hero-section`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      greeting: "Hi, I'm",
      headline: 'John Doe',
      subheadline: 'I build things for the web',
      roles: [
        { role: 'Full Stack Developer' },
        { role: 'Open Source Enthusiast' },
        { role: 'Problem Solver' },
      ],
      ctaPrimary: { label: 'View Projects', href: '/projects' },
      ctaSecondary: { label: 'Contact Me', href: '#contact' },
    }),
  })

  // Seed Skills
  const skills = [
    { name: 'Next.js', category: 'frontend', proficiency: 'expert', featured: true },
    { name: 'React', category: 'frontend', proficiency: 'expert', featured: true },
    { name: 'TypeScript', category: 'frontend', proficiency: 'advanced', featured: true },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert', featured: true },
    { name: 'Node.js', category: 'backend', proficiency: 'advanced', featured: true },
    { name: 'Payload CMS', category: 'backend', proficiency: 'advanced', featured: true },
    { name: 'MongoDB', category: 'database', proficiency: 'advanced', featured: true },
    { name: 'PostgreSQL', category: 'database', proficiency: 'intermediate' },
    { name: 'Docker', category: 'devops', proficiency: 'intermediate' },
    { name: 'Vercel', category: 'devops', proficiency: 'advanced' },
  ]
  for (const skill of skills) {
    await fetch(`${baseUrl}/api/skills`, { method: 'POST', headers, body: JSON.stringify(skill) })
  }

  // Seed Work Experience
  await fetch(`${baseUrl}/api/work-experience`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      title: 'Senior Full Stack Developer',
      company: 'Acme Corp',
      location: 'Remote',
      employmentType: 'full-time',
      current: true,
      startDate: '2022-01-01',
      highlights: [
        { point: 'Led migration of monolith to microservices, reducing deploy time by 60%' },
        { point: 'Mentored 3 junior developers and conducted weekly code reviews' },
        { point: 'Built real-time dashboard serving 50k+ daily users' },
      ],
      technologies: [
        { name: 'Next.js' }, { name: 'TypeScript' }, { name: 'PostgreSQL' }, { name: 'AWS' }
      ],
      order: 1,
    }),
  })

  console.log('✅ Seed complete! Visit /admin to manage your content.')
}

seed().catch(console.error)
