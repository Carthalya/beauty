'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, SlidersHorizontal } from 'lucide-react'
import { categories, skinTypes } from '@/data/products'
import { ProductCategory, SkinType } from '@/types'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { cn } from '@/lib/utils'

interface ProductFiltersProps {
  selectedCategory: ProductCategory | null
  selectedSkinTypes: SkinType[]
  priceRange: [number, number]
  sortBy: string
  onCategoryChange: (category: ProductCategory | null) => void
  onSkinTypeChange: (types: SkinType[]) => void
  onPriceRangeChange: (range: [number, number]) => void
  onSortChange: (sort: string) => void
  onClear: () => void
}

export function ProductFilters({
  selectedCategory,
  selectedSkinTypes,
  priceRange,
  sortBy,
  onCategoryChange,
  onSkinTypeChange,
  onPriceRangeChange,
  onSortChange,
  onClear
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>('category')
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const sortOptions = [
    { value: 'newest', label: t('filters.newest') },
    { value: 'price-asc', label: t('filters.priceLowHigh') },
    { value: 'price-desc', label: t('filters.priceHighLow') },
    { value: 'rating', label: t('filters.topRated') },
  ]

  const hasActiveFilters = selectedCategory || selectedSkinTypes.length > 0 || priceRange[0] > 0 || priceRange[1] < 500

  const FilterSection = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpenSection(openSection === id ? null : id)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium tracking-wider uppercase">{title}</span>
        <ChevronDown className={cn(
          'w-4 h-4 transition-transform',
          openSection === id && 'rotate-180'
        )} />
      </button>
      <AnimatePresence>
        {openSection === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:border-gold transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">{t('common.filter')}</span>
          {hasActiveFilters && (
            <span className="w-2 h-2 bg-gold rounded-full" />
          )}
        </button>
      </div>

      {/* Mobile Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={cn(
                'fixed top-0 bottom-0 w-80 bg-background z-50 lg:hidden shadow-2xl overflow-y-auto',
                isRTL ? 'left-0' : 'right-0'
              )}
            >
              <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
                <span className="font-medium tracking-wider uppercase">{t('common.filter')}</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>
    </div>
  )

  function FilterContent() {
    return (
      <div className="space-y-0">
        {/* Sort (Mobile Only) */}
        <div className="lg:hidden">
          <FilterSection title={t('filters.sortBy')} id="sort">
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onSortChange(option.value)}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                    sortBy === option.value
                      ? 'bg-gold/10 text-gold'
                      : 'hover:bg-accent'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </FilterSection>
        </div>

        {/* Category */}
        <FilterSection title={t('filters.category')} id="category">
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                !selectedCategory
                  ? 'bg-gold/10 text-gold'
                  : 'hover:bg-accent'
              )}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id as ProductCategory)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                  selectedCategory === cat.id
                    ? 'bg-gold/10 text-gold'
                    : 'hover:bg-accent'
                )}
              >
                {t(`categories.${cat.id}`)}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Skin Type */}
        <FilterSection title={t('filters.skinType')} id="skinType">
          <div className="space-y-2">
            {skinTypes.map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedSkinTypes.includes(type.id as SkinType)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onSkinTypeChange([...selectedSkinTypes, type.id as SkinType])
                    } else {
                      onSkinTypeChange(selectedSkinTypes.filter(t => t !== type.id))
                    }
                  }}
                  className="w-4 h-4 rounded border-border text-gold focus:ring-gold"
                />
                <span className="text-sm">{t(`skinTypes.${type.id}`)}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection title={t('filters.priceRange')} id="price">
          <div className="space-y-4 px-3">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => onPriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:border-gold focus:outline-none"
                  min={0}
                />
              </div>
              <span className="text-muted-foreground mt-5">-</span>
              <div className="flex-1">
                <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value) || 500])}
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:border-gold focus:outline-none"
                  min={0}
                />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="w-full mt-6 py-3 text-sm tracking-wider uppercase text-gold hover:underline"
          >
            {t('common.clear')} Filters
          </button>
        )}
      </div>
    )
  }
}
