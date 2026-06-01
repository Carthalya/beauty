'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Scan, Sparkles, ArrowRight } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { LuxuryButton } from '@/components/ui/luxury-button'

export function DiagnosticCTA() {
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden bg-primary text-primary-foreground"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs tracking-widest uppercase text-gold">
                AI-Powered
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight">
              {t('diagnostic.title')}
            </h2>

            <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-lg">
              {t('diagnostic.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/diagnostic">
                <LuxuryButton variant="gold" size="lg">
                  {t('diagnostic.skinDiagnostic')}
                  <Scan className="w-4 h-4 ml-2" />
                </LuxuryButton>
              </Link>
              <Link href="/diagnostic?type=hair">
                <LuxuryButton variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t('diagnostic.hairDiagnostic')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LuxuryButton>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary-foreground/10">
              {[
                { label: 'AI Analysis', value: '99%' },
                { label: 'Personalized', value: '100%' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-serif text-gold">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80"
                alt="AI Beauty Diagnostic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              
              {/* Floating UI Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Scan className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Skin Analysis Complete</div>
                    <div className="text-xs text-white/60">Score: 87/100</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/30 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
