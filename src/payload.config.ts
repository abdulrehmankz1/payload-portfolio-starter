import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from '../payload/collections/Users'
import { Projects } from '../payload/collections/Projects'
import { BlogPosts } from '../payload/collections/BlogPosts'
import { Testimonials } from '../payload/collections/Testimonials'
import { WorkExperience } from '../payload/collections/WorkExperience'
import { Skills } from '../payload/collections/Skills'
import { Media } from '../payload/collections/Media'
import { SiteSettings } from '../payload/globals/SiteSettings'
import { HeroSection } from '../payload/globals/HeroSection'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: { titleSuffix: '— Portfolio CMS' },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Projects, BlogPosts, Testimonials, WorkExperience, Skills, Media],
  globals: [SiteSettings, HeroSection],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || process.env.MONGODB_URI || '',
  }),
  sharp,
  plugins: [],
})
