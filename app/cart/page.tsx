'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { LuxuryButton } from '@/components/ui/luxury-button'
import { cn } from '@/lib/utils'

export default function CartPage() {
  const { cart, cartTotal, updateCartQuantity, removeFromCart, locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const shippingThreshold = 100
  const freeShipping = cartTotal >= shippingThreshold
  const shippingCost = freeShipping ? 0 : 15

  if (cart.length === 0) {
    return (
      <div className="pt-24 min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl mb-4">{t('cart.empty')}</h1>
            <p className="text-muted-foreground mb-8">
              {t('cart.emptyDescription')}
            </p>
            <Link href="/shop">
              <LuxuryButton variant="primary">
                {t('cart.continueShopping')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-center mb-12"
        >
          {t('cart.title')}
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-card rounded-xl border border-border"
              >
                {/* Image */}
                <Link 
                  href={`/shop/${item.product.slug}`}
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link 
                        href={`/shop/${item.product.slug}`}
                        className="font-serif text-lg hover:text-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t(`categories.${item.product.category}`)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="font-serif text-lg">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      {item.quantity > 1 && (
                        <div className="text-xs text-muted-foreground">
                          ${item.product.price} each
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="bg-card rounded-xl border border-border p-6 space-y-6">
              <h2 className="font-serif text-xl">Order Summary</h2>

              {/* Free Shipping Progress */}
              {!freeShipping && (
                <div className="p-4 bg-gold/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-4 h-4 text-gold" />
                    <span className="text-sm">
                      Add ${(shippingThreshold - cartTotal).toFixed(2)} for free shipping
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(cartTotal / shippingThreshold) * 100}%` }}
                      className="h-full bg-gold"
                    />
                  </div>
                </div>
              )}

              {freeShipping && (
                <div className="flex items-center gap-2 p-4 bg-emerald-500/10 text-emerald-600 rounded-lg">
                  <Truck className="w-4 h-4" />
                  <span className="text-sm font-medium">You qualify for free shipping!</span>
                </div>
              )}

              {/* Totals */}
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('cart.shipping')}</span>
                  <span className={cn(freeShipping && 'text-emerald-600')}>
                    {freeShipping ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-serif text-xl pt-4 border-t border-border">
                  <span>{t('cart.total')}</span>
                  <span>${(cartTotal + shippingCost).toFixed(2)}</span>
                </div>
              </div>

              <LuxuryButton variant="gold" size="lg" className="w-full">
                {t('cart.checkout')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </LuxuryButton>

              <Link
                href="/shop"
                className="block text-center text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {t('cart.continueShopping')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
