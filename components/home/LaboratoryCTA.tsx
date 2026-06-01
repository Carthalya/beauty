'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Beaker, Droplets, Leaf, ArrowRight } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { LuxuryButton } from '@/components/ui/luxury-button'

export function LaboratoryCTA() {
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const steps = [
    { icon: Droplets, label: 'Choose Base', step: '01' },
    { icon: Leaf, label: 'Select Ingredients', step: '02' },
    { icon: Beaker, label: 'AI Formulation', step: '03' },
  ]

  return (
    <section 
      className="relative py-24 md:py-32 bg-secondary overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80"
                alt="Virtual Laboratory"
                fill
                className="object-cover"
              />
              
              {/* Glassmorphism Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 left-6 p-4 glass rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Beaker className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Custom Formula</div>
                    <div className="text-sm font-medium text-white">Hydrating Serum</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 right-6 p-4 glass rounded-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-white/80">Ingredients Synergy</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-1 rounded-full bg-gold/80"
                      style={{ opacity: i <= 4 ? 1 : 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Innovation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-6">
                {t('laboratory.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('laboratory.description')}
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground tracking-wider">
                      STEP {step.step}
                    </div>
                    <div className="font-medium">{step.label}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              ))}
            </div>

            <Link href="/laboratory/entrance">
              <LuxuryButton variant="primary" size="lg">
                {t('common.enterLaboratory')}
                <Beaker className="w-4 h-4 ml-2" />
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
