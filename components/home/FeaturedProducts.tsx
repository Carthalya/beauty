'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { SectionHeader } from '@/components/ui/section-header'
import { ProductCard } from '@/components/store/ProductCard'
import { LuxuryButton } from '@/components/ui/luxury-button'

export function FeaturedProducts() {
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const featuredProducts = products.filter(p => p.isBestSeller || p.isNew).slice(0, 4)

  return (
    <section 
      className="py-24 md:py-32 bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Collection"
          title="Discover Our Bestsellers"
          subtitle="Experience the transformative power of botanical luxury with our most beloved formulations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/shop">
            <LuxuryButton variant="outline">
              {t('common.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </LuxuryButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
