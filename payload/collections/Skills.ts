import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'proficiency'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
      admin: { description: 'Devicon class or emoji e.g. devicon-react-original' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Database', value: 'database' },
        { label: 'DevOps & Cloud', value: 'devops' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'Design Tools', value: 'design' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'proficiency',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
        { label: 'Expert', value: 'expert' },
      ],
      defaultValue: 'intermediate',
    },
    {
      name: 'yearsOfExperience',
      type: 'number',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
