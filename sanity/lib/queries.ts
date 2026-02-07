import { groq } from 'next-sanity'

// Base page fields used by all pages
const BASE_PAGE_FIELDS = groq`
  _id,
  pageType,
  title,
  slug
`

// Specific page queries
export const ABOUT_PAGE_QUERY = groq`*[_type == "page" && pageType == "about"][0]{
  ${BASE_PAGE_FIELDS},
  aboutContent{
    section1{
      title,
      text,
      image{asset->}
    }
  }
}`

// Get all portfolio categories for the main portfolio page
export const PORTFOLIO_CATEGORIES_QUERY = groq`*[_type == "portfolio" && defined(slug.current)] { 
  _id,
  category,
  slug,
}`

// Get a specific portfolio category with all its items
export const PORTFOLIO_CATEGORY_QUERY = groq`*[_type == "portfolio" && slug.current == $category][0]{
  _id,
  category,
  slug,
  portfolioItems[]{
    title,
    slug,
    thumbnail{ asset-> }
  }
}`

// Get a specific portfolio item by category and item slug
export const PORTFOLIO_ITEM_QUERY = groq`*[_type == "portfolio" && slug.current == $category][0]{
  _id,
  category,
  slug,
  "portfolioItem": portfolioItems[slug.current == $itemSlug][0]{
    title,
    slug,
    thumbnail{ asset-> },
    description,
    gallery[]{ asset-> }
  }
}`
