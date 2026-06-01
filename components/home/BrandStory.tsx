'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, Gem, FlaskConical, Award } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Ethically sourced ingredients and eco-conscious packaging.'
  },
  {
    icon: FlaskConical,
    title: 'Innovation',
    description: 'Cutting-edge science meets botanical excellence.'
  },
  {
    icon: Gem,
    title: 'Quality',
    description: 'Only the finest ingredients make it into our formulations.'
  },
  {
    icon: Award,
    title: 'Transparency',
    description: 'Complete clarity about what goes into every product.'
  }
]

export function BrandStory() {
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  return (
    <section 
      className="py-24 md:py-32 bg-secondary"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80"
                    alt="Botanical ingredients"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80"
                    alt="Laboratory research"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative aspect-[3/5] rounded-2xl overflow-hidden mt-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&q=80"
                  alt="Luxury product"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full flex flex-col items-center justify-center text-gold-foreground"
            >
              <span className="text-3xl font-serif">25+</span>
              <span className="text-xs tracking-wider uppercase">Years</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                {t('about.title')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-6">
                {t('about.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <value.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
