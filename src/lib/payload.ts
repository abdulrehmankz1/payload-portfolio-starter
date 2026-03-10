import configPromise from '@payload-config'
import { getPayload as getPayloadClient } from 'payload'

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

export async function getPayload() {
  if (cached.client) return cached.client

  if (!cached.promise) {
    cached.promise = getPayloadClient({ config: configPromise })
  }

  cached.client = await cached.promise
  return cached.client
}

// Helper to fetch projects
export async function getProjects(options?: {
  featured?: boolean
  limit?: number
  page?: number
}) {
  const payload = await getPayload()
  const where: any = { status: { equals: 'published' } }
  if (options?.featured !== undefined) {
    where.featured = { equals: options.featured }
  }
  return payload.find({
    collection: 'projects',
    where,
    limit: options?.limit || 100,
    page: options?.page || 1,
    sort: '-completedAt',
  })
}

// Helper to fetch blog posts
export async function getBlogPosts(options?: { limit?: number; page?: number }) {
  const payload = await getPayload()
  return payload.find({
    collection: 'blog-posts',
    where: { status: { equals: 'published' } },
    limit: options?.limit || 10,
    page: options?.page || 1,
    sort: '-publishedAt',
  })
}

// Helper to fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return result.docs[0] || null
}

// Helper to fetch a single project by slug
export async function getProjectBySlug(slug: string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })
  return result.docs[0] || null
}

// Helper to fetch testimonials
export async function getTestimonials(featured?: boolean) {
  const payload = await getPayload()
  const where: any = {}
  if (featured !== undefined) where.featured = { equals: featured }
  return payload.find({ collection: 'testimonials', where, sort: '-createdAt' })
}

// Helper to fetch work experience
export async function getWorkExperience() {
  const payload = await getPayload()
  return payload.find({
    collection: 'work-experience',
    sort: 'order,-startDate',
  })
}

// Helper to fetch skills
export async function getSkills() {
  const payload = await getPayload()
  return payload.find({
    collection: 'skills',
    sort: 'order,category',
  })
}

// Helper to fetch site settings global
export async function getSiteSettings() {
  const payload = await getPayload()
  return payload.findGlobal({ slug: 'site-settings' })
}

// Helper to fetch hero section global
export async function getHeroSection() {
  const payload = await getPayload()
  return payload.findGlobal({ slug: 'hero-section' })
}
