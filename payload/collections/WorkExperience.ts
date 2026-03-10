import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const WorkExperience: CollectionConfig = {
  slug: 'work-experience',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'company', 'startDate', 'current'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'Job title e.g. Senior Frontend Developer' },
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'companyUrl',
      type: 'text',
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'employmentType',
      type: 'select',
      options: ['full-time', 'part-time', 'contract', 'freelance', 'internship'],
      defaultValue: 'full-time',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'highlights',
      type: 'array',
      fields: [
        { name: 'point', type: 'text', required: true },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'current',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
