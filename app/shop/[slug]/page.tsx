'use client'

import { useState } from 'react'
import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star, Minus, Plus, Check, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '@/data/products'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { LuxuryButton } from '@/components/ui/luxury-button'
import { ProductCard } from '@/components/store/ProductCard'
import { cn } from '@/lib/utils'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params)
  const product = products.find(p => p.slug === slug)
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'reviews'>('description')
  const [isAdded, setIsAdded] = useState(false)
  
  const { addToCart, toggleWishlist, isInWishlist, locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  if (!product) {
    notFound()
  }

  const inWishlist = isInWishlist(product.id)
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const tabs = [
    { id: 'description', label: t('product.description') },
    { id: 'ingredients', label: t('product.ingredients') },
    { id: 'reviews', label: `${t('product.reviews')} (${product.reviewCount})` },
  ]

  return (
    <div className="pt-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
              <Image
                src={product.gallery[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-gold-foreground text-xs tracking-wider uppercase">
                  {t('common.new')}
                </span>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors',
                    selectedImage === index ? 'border-gold' : 'border-transparent hover:border-border'
                  )}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-gold tracking-wider uppercase mb-2">
                {t(`categories.${product.category}`)}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < Math.floor(product.rating) 
                          ? 'text-gold fill-gold' 
                          : 'text-border'
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Skin Types */}
            {product.skinTypes && (
              <div>
                <p className="text-sm font-medium mb-2">Suitable for:</p>
                <div className="flex flex-wrap gap-2">
                  {product.skinTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {t(`skinTypes.${type}`)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <LuxuryButton
                variant={isAdded ? 'gold' : 'primary'}
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    {t('product.addedToCart')}
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {t('common.addToCart')}
                  </>
                )}
              </LuxuryButton>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleWishlist(product)}
                className={cn(
                  'p-4 rounded-md border transition-colors',
                  inWishlist 
                    ? 'border-gold bg-gold/10 text-gold' 
                    : 'border-border hover:border-gold'
                )}
                aria-label={inWishlist ? t('common.removeFromWishlist') : t('common.addToWishlist')}
              >
                <Heart className={cn('w-5 h-5', inWishlist && 'fill-current')} />
              </motion.button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-5 h-5 text-gold" />
                <span className="text-xs text-muted-foreground">{t('product.freeShipping')}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-5 h-5 text-gold" />
                <span className="text-xs text-muted-foreground">{t('product.returns')}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-xs text-muted-foreground">Secure Payment</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="flex gap-8 border-b border-border mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  'pb-4 text-sm tracking-wider uppercase transition-colors relative',
                  activeTab === tab.id 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                {product.benefits.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-4">{t('product.benefits')}</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.routineSuggestions && (
                  <div>
                    <h3 className="font-medium mb-4">{t('product.howToUse')}</h3>
                    <ol className="space-y-3">
                      {product.routineSuggestions.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-sm flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'ingredients' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {product.ingredients.map((ingredient) => (
                  <div key={ingredient.name} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{ingredient.name}</h4>
                      {ingredient.origin && (
                        <span className="text-xs text-gold">Origin: {ingredient.origin}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {ingredient.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ingredient.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-2 py-1 bg-background rounded text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">
              {t('product.relatedProducts')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
