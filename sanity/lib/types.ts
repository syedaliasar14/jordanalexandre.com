import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PortableTextBlock } from 'next-sanity'

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  pageType: 'about' | 'contact'
  aboutContent?: AboutContent
}

export interface AboutContent {
  heroSection?: {
    title?: string
    text?: string
    image?: SanityImageSource
  }
}

export interface PortfolioItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  photosAltText?: string
  thumbnail?: SanityImageSource
  publishedAt: string
  order?: number
}

export interface Blog {
  _id: string
  title: string
  slug: {
    current: string
  }
  photosAltText?: string
  image?: SanityImageSource
  content: PortableTextBlock[]
  publishedAt: string
}

export interface BlogListItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  image?: SanityImageSource
  publishedAt: string
}
