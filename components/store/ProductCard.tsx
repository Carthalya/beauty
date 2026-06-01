'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Product } from '@/types'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const { addToCart, toggleWishlist, isInWishlist, locale } = useStore()
  const { t } = useTranslations(locale)
  const inWishlist = isInWishlist(product.id)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={cn(
              'object-cover transition-all duration-700 group-hover:scale-105',
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setIsImageLoaded(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Skeleton */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse" />
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1 bg-gold text-gold-foreground text-xs tracking-wider uppercase">
                {t('common.new')}
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider uppercase">
                {t('common.bestSeller')}
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1 bg-destructive text-white text-xs tracking-wider uppercase">
                {t('common.sale')}
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault()
                toggleWishlist(product)
              }}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                inWishlist 
                  ? 'bg-gold text-gold-foreground' 
                  : 'bg-background/90 backdrop-blur-sm hover:bg-gold hover:text-gold-foreground'
              )}
              aria-label={inWishlist ? t('common.removeFromWishlist') : t('common.addToWishlist')}
            >
              <Heart className={cn('w-5 h-5', inWishlist && 'fill-current')} />
            </motion.button>
          </div>

          {/* Add to Cart Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault()
                addToCart(product)
              }}
              className="w-full py-3 bg-background text-foreground text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {t('common.addToCart')}
            </motion.button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg tracking-wide group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3.5 h-3.5',
                    i < Math.floor(product.rating) 
                      ? 'text-gold fill-gold' 
                      : 'text-border'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
