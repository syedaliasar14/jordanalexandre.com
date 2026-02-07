import { defineField, defineType } from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'sections',
      title: 'About Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'aboutSection',
          title: 'About Section',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              validation: (rule) => rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'text',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
})
