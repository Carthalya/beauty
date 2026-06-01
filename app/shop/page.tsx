'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Grid3X3, LayoutList, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCategory, SkinType, Product } from '@/types'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { ProductGrid } from '@/components/store/ProductGrid'
import { ProductFilters } from '@/components/store/ProductFilters'
import { SectionHeader } from '@/components/ui/section-header'
import { cn } from '@/lib/utils'

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<SkinType[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const sortOptions = [
    { value: 'newest', label: t('filters.newest') },
    { value: 'price-asc', label: t('filters.priceLowHigh') },
    { value: 'price-desc', label: t('filters.priceHighLow') },
    { value: 'rating', label: t('filters.topRated') },
  ]

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Skin type filter
    if (selectedSkinTypes.length > 0) {
      result = result.filter(p => 
        p.skinTypes?.some(type => selectedSkinTypes.includes(type))
      )
    }

    // Price filter
    result = result.filter(p => 
      p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    return result
  }, [searchQuery, selectedCategory, selectedSkinTypes, priceRange, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory(null)
    setSelectedSkinTypes([])
    setPriceRange([0, 500])
    setSortBy('newest')
  }

  return (
    <div className="pt-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Banner */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Collection"
            title="Luxury Skincare"
            subtitle="Discover our complete collection of premium skincare, crafted with the finest botanical ingredients."
          />

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('common.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters
                selectedCategory={selectedCategory}
                selectedSkinTypes={selectedSkinTypes}
                priceRange={priceRange}
                sortBy={sortBy}
                onCategoryChange={setSelectedCategory}
                onSkinTypeChange={setSelectedSkinTypes}
                onPriceRangeChange={setPriceRange}
                onSortChange={setSortBy}
                onClear={clearFilters}
              />
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown (Desktop) */}
                  <div className="hidden lg:block relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-transparent pr-8 py-2 text-sm cursor-pointer focus:outline-none"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* View Toggle */}
                  <div className="hidden md:flex items-center gap-1 border border-border rounded-md p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        'p-2 rounded transition-colors',
                        viewMode === 'grid' ? 'bg-accent' : 'hover:bg-accent/50'
                      )}
                      aria-label="Grid view"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        'p-2 rounded transition-colors',
                        viewMode === 'list' ? 'bg-accent' : 'hover:bg-accent/50'
                      )}
                      aria-label="List view"
                    >
                      <LayoutList className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
