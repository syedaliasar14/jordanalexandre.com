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

export const PORTFOLIO_QUERY = groq`*[
  _type == "portfolio"
  && defined(slug.current)
] | order(order asc){ 
  _id,
  title,
  slug,
  thumbnail{ asset-> },
  order
}`

export const PORTFOLIO_BY_SLUG_QUERY = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  _id, 
  title,
  slug, 
  description,
  thumbnail{ asset-> },
  gallery[]{ asset-> }
}`

export const BLOGS_QUERY = groq`*[
  _type == "blog"
  && defined(slug.current)
] | order(publishedAt desc){
  _id,
  title,
  slug,
  image{asset->},
  publishedAt
}`

export const BLOG_BY_SLUG_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  photosAltText,
  image{asset->, alt},
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  publishedAt
}`


