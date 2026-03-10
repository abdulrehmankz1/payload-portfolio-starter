import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'featured', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'techStack',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'icon', type: 'text', admin: { description: 'Lucide icon name or emoji' } },
      ],
    },
    {
      name: 'liveUrl',
      type: 'text',
      admin: { description: 'Live demo URL' },
    },
    {
      name: 'githubUrl',
      type: 'text',
      admin: { description: 'GitHub repository URL' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published', 'archived'],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
    {
      name: 'category',
      type: 'select',
      options: ['web', 'mobile', 'backend', 'fullstack', 'design', 'other'],
      admin: { position: 'sidebar' },
    },
    {
      name: 'completedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
  ],
}
