import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'greeting',
      type: 'text',
      defaultValue: "Hi, I'm",
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      admin: { description: 'Main headline — your name' },
    },
    {
      name: 'subheadline',
      type: 'text',
      required: true,
      admin: { description: 'e.g. I build things for the web' },
    },
    {
      name: 'roles',
      type: 'array',
      admin: { description: 'Rotating roles shown in hero — e.g. Full Stack Developer, Open Source Enthusiast' },
      fields: [
        { name: 'role', type: 'text', required: true },
      ],
    },
    {
      name: 'ctaPrimary',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'View Projects' },
        { name: 'href', type: 'text', defaultValue: '/projects' },
      ],
    },
    {
      name: 'ctaSecondary',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Contact Me' },
        { name: 'href', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
