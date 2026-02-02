import { defineField, defineType } from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'section1',
      title: 'Section 1',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'text', title: 'Text', type: 'text' },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
})
