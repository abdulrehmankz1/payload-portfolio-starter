import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'Your full name' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'e.g. Full Stack Developer' },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'resume',
      type: 'text',
      admin: { description: 'Link to your resume PDF' },
    },
    {
      name: 'location',
      type: 'text',
      admin: { description: 'e.g. Karachi, Pakistan' },
    },
    {
      name: 'availability',
      type: 'select',
      options: ['available', 'busy', 'not-available'],
      defaultValue: 'available',
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'github', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'twitter', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'youtube', type: 'text' },
        { name: 'website', type: 'text' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
