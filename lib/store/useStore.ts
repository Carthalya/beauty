'use client'

import { useState, useCallback, useEffect } from 'react'
import { Product, CartItem, Locale } from '@/types'

// Cart Store
export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])
  
  useEffect(() => {
    const stored = localStorage.getItem('carthalya-cart')
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse cart', e)
      }
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('carthalya-cart', JSON.stringify(items))
  }, [items])
  
  const addItem = useCallback((product: Product, quantity: number = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
  }, [])
  
  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId))
  }, [])
  
  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }, [removeItem])
  
  const clearCart = useCallback(() => {
    setItems([])
  }, [])
  
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  
  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount
  }
}

// Wishlist Store
export function useWishlist() {
  const [items, setItems] = useState<Product[]>([])
  
  useEffect(() => {
    const stored = localStorage.getItem('carthalya-wishlist')
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse wishlist', e)
      }
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('carthalya-wishlist', JSON.stringify(items))
  }, [items])
  
  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }, [])
  
  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId))
  }, [])
  
  const isInWishlist = useCallback((productId: string) => {
    return items.some(item => item.id === productId)
  }, [items])
  
  const toggleItem = useCallback((product: Product) => {
    if (isInWishlist(product.id)) {
      removeItem(product.id)
    } else {
      addItem(product)
    }
  }, [isInWishlist, addItem, removeItem])
  
  return {
    items,
    addItem,
    removeItem,
    isInWishlist,
    toggleItem,
    count: items.length
  }
}

// Locale Store
export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>('en')
  
  useEffect(() => {
    const stored = localStorage.getItem('carthalya-locale') as Locale | null
    if (stored && ['en', 'fr', 'ar'].includes(stored)) {
      setLocaleState(stored)
    }
  }, [])
  
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('carthalya-locale', newLocale)
  }, [])
  
  return { locale, setLocale }
}
