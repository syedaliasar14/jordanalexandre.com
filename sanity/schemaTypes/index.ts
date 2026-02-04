import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './page-type'
import { aboutContent } from './objects/about-content'
import { portfolioType } from './portfolio-type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    aboutContent,
    portfolioType,
  ],
}
