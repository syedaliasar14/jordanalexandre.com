import { SanityImageSource } from '@sanity/image-url/lib/types/types'

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
  section1?: {
    title?: string
    text?: string
    image?: SanityImageSource
  }
}

export interface PortfolioItem {
  title: string
  slug: {
    current: string
  }
  thumbnail?: SanityImageSource
  description?: string
  gallery?: SanityImageSource[]
}

export interface Portfolio {
  _id: string
  category: string
  slug: {
    current: string
  }
  portfolioItems?: PortfolioItem[]
}

export interface PortfolioWithItem {
  _id: string
  category: string
  slug: {
    current: string
  }
  portfolioItem?: PortfolioItem
}