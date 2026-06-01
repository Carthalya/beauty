// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  category: ProductCategory
  subcategory?: string
  skinTypes?: SkinType[]
  hairTypes?: HairType[]
  ingredients: Ingredient[]
  benefits: string[]
  image: string
  gallery: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  isNew?: boolean
  isBestSeller?: boolean
  routineSuggestions?: string[]
}

export type ProductCategory = 
  | 'skincare'
  | 'haircare'
  | 'bodycare'
  | 'oils'
  | 'serums'
  | 'cleansers'
  | 'masks'

export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive' | 'normal'
export type HairType = 'straight' | 'wavy' | 'curly' | 'coily' | 'fine' | 'thick'

export interface Ingredient {
  name: string
  description: string
  benefits: string[]
  origin?: string
}

// Cart Types
export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

// Wishlist Types
export interface WishlistItem {
  product: Product
  addedAt: Date
}

// Review Types
export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  title: string
  content: string
  date: Date
  verified: boolean
  helpful: number
}

// Diagnostic Types
export interface SkinAnalysis {
  overallScore: number
  hydration: number
  elasticity: number
  texture: number
  pores: number
  wrinkles: number
  darkSpots: number
  oiliness: number
  sensitivity: number
  skinType: SkinType
  concerns: string[]
  recommendations: Product[]
  routine: SkincareRoutine
}

export interface HairAnalysis {
  overallScore: number
  scalp: number
  hydration: number
  damage: number
  shine: number
  thickness: number
  hairType: HairType
  concerns: string[]
  recommendations: Product[]
}

export interface SkincareRoutine {
  morning: RoutineStep[]
  evening: RoutineStep[]
}

export interface RoutineStep {
  order: number
  type: string
  product?: Product
  instructions: string
}

// Laboratory Types
export interface LabBase {
  id: string
  name: string
  skinType: SkinType
  description: string
  properties: string[]
}

export interface LabIngredient {
  id: string
  name: string
  category: 'essential-oil' | 'botanical' | 'active' | 'vitamin'
  description: string
  benefits: string[]
  compatibility: string[]
  concentration: string
}

export interface CustomFormulation {
  base: LabBase
  ingredients: LabIngredient[]
  name: string
  texture: string
  benefits: string[]
  synergy: string
}

// i18n Types
export type Locale = 'en' | 'fr' | 'ar'

export interface LocaleConfig {
  code: Locale
  name: string
  nativeName: string
  direction: 'ltr' | 'rtl'
  flag: string
}
