'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Heart, Search, Globe } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { localeConfigs, locales } from '@/lib/i18n/config'
import { Locale } from '@/types'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { cartItemCount, wishlistCount, locale, setLocale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/diagnostic', label: t('nav.diagnostic') },
    { href: '/laboratory/entrance', label: t('nav.laboratory') },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
            : 'bg-transparent'
        )}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.h1 
                className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Carthalya
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-widest uppercase hover:text-gold transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="p-2 hover:bg-accent rounded-md transition-colors flex items-center gap-1"
                >
                  <Globe className="w-5 h-5" />
                  <span className="hidden md:inline text-xs uppercase tracking-wider">
                    {locale}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[150px]"
                    >
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setLocale(loc)
                            setIsLangMenuOpen(false)
                          }}
                          className={cn(
                            'w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3',
                            locale === loc && 'bg-accent'
                          )}
                        >
                          <span>{localeConfigs[loc].flag}</span>
                          <span className="text-sm">{localeConfigs[loc].nativeName}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search */}
              <button className="p-2 hover:bg-accent rounded-md transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative p-2 hover:bg-accent rounded-md transition-colors">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-gold-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 hover:bg-accent rounded-md transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-gold-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={cn(
                'fixed top-0 bottom-0 w-80 bg-background z-50 lg:hidden shadow-2xl',
                isRTL ? 'right-0' : 'left-0'
              )}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-xl font-serif tracking-[0.15em] uppercase">
                    Carthalya
                  </h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-accent rounded-md transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 py-8 px-6 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-lg tracking-wider uppercase hover:text-gold transition-colors border-b border-border/50"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="p-6 border-t border-border">
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-4">
                    {t('common.tagline')}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
