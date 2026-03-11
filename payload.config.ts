import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './payload/collections/Users'
import { Projects } from './payload/collections/Projects'
import { BlogPosts } from './payload/collections/BlogPosts'
import { Testimonials } from './payload/collections/Testimonials'
import { WorkExperience } from './payload/collections/WorkExperience'
import { Skills } from './payload/collections/Skills'
import { Media } from './payload/collections/Media'
import { SiteSettings } from './payload/globals/SiteSettings'
import { HeroSection } from './payload/globals/HeroSection'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Database connection string check
const databaseUri = process.env.MONGODB_URI || process.env.DATABASE_URL

if (!databaseUri) {
  throw new Error('MONGODB_URI is not defined in environment variables')
}

export default buildConfig({
  // Production mein admin panel ke liye ye URL lazmi hai
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Portfolio CMS',
    },
  },
  collections: [Users, Projects, BlogPosts, Testimonials, WorkExperience, Skills, Media],
  globals: [SiteSettings, HeroSection],
  editor: lexicalEditor({}),
  // Secret key ko string cast kiya hai taake auth crash na ho
  secret: (process.env.PAYLOAD_SECRET as string) || 'change-me-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: databaseUri,
  }),
  upload: {
    limits: { fileSize: 5000000 },
  },
})
