import { defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "category" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "portfolioItems",
      title: "Portfolio Items",
      type: "array",
      of: [{ type: "portfolioItem" }],
    }),
  ],
  preview: {
    select: {
      title: "category",
      media: "portfolioItems.0.thumbnail",
    },
  },
})