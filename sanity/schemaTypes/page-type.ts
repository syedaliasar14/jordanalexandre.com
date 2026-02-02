import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'About', value: 'about'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Page Content',
      type: 'aboutContent',
      hidden: ({document}) => document?.pageType !== 'about',
    }),
  ],
  preview: {
    select: {
      pageType: 'pageType',
    },
    prepare(selection) {
      const {pageType} = selection
      return {
        title: pageType ? pageType.charAt(0).toUpperCase() + pageType.slice(1) : 'Page',
        subtitle: 'Page Content'
      }
    },
  },
})
