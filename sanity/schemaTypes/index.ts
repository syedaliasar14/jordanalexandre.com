import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './page-type'
import { aboutContent } from './objects/about-content'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    aboutContent
  ],
}
