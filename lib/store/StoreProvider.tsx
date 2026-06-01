'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useCart, useWishlist, useLocale } from './useStore'
import { Product, CartItem, Locale } from '@/types'

interface StoreContextType {
  // Cart
  cart: CartItem[]
  cartTotal: number
  cartItemCount: number
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  
  // Wishlist
  wishlist: Product[]
  wishlistCount: number
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  toggleWishlist: (product: Product) => void
  
  // Locale
  locale: Locale
  setLocale: (locale: Locale) => void
}

const StoreContext = createContext<StoreContextType | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const cart = useCart()
  const wishlist = useWishlist()
  const localeStore = useLocale()
  
  const value: StoreContextType = {
    // Cart
    cart: cart.items,
    cartTotal: cart.total,
    cartItemCount: cart.itemCount,
    addToCart: cart.addItem,
    removeFromCart: cart.removeItem,
    updateCartQuantity: cart.updateQuantity,
    clearCart: cart.clearCart,
    
    // Wishlist
    wishlist: wishlist.items,
    wishlistCount: wishlist.count,
    addToWishlist: wishlist.addItem,
    removeFromWishlist: wishlist.removeItem,
    isInWishlist: wishlist.isInWishlist,
    toggleWishlist: wishlist.toggleItem,
    
    // Locale
    locale: localeStore.locale,
    setLocale: localeStore.setLocale
  }
  
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}
