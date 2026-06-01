'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { LuxuryButton } from '@/components/ui/luxury-button'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1920&q=80"
          alt="Luxury skincare"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-gold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t('hero.subtitle')}
            </span>
            <span className="w-12 h-px bg-gold" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide leading-tight"
          >
            <span className="block">{t('hero.title')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/shop">
              <LuxuryButton variant="primary" size="lg">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </LuxuryButton>
            </Link>
            <Link href="/diagnostic">
              <LuxuryButton variant="outline" size="lg">
                {t('hero.secondaryCta')}
              </LuxuryButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
