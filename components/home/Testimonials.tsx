'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { SectionHeader } from '@/components/ui/section-header'

const testimonials = [
  {
    id: 1,
    name: 'Sophia Laurent',
    role: 'Beauty Editor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'Carthalya has completely transformed my skincare routine. The AI diagnostic was incredibly accurate, and the personalized recommendations have given me the best skin of my life.',
    rating: 5,
    product: 'Elixir de Jeunesse'
  },
  {
    id: 2,
    name: 'Isabella Chen',
    role: 'Wellness Influencer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content: 'The Virtual Laboratory experience is unlike anything I have ever tried. Creating my own custom serum felt luxurious and scientific at the same time. Absolutely revolutionary!',
    rating: 5,
    product: 'Custom Formulation'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    content: 'As a dermatologist, I am impressed by the quality of ingredients and the science behind Carthalya products. I recommend them to my patients with confidence.',
    rating: 5,
    product: 'Crème Royale'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { locale } = useStore()
  const isRTL = locale === 'ar'

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      className="py-24 md:py-32 bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by Beauty Enthusiasts"
          subtitle="Discover what our community says about their transformative journey with Carthalya."
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-gold/30 mb-6" />

              {/* Content */}
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-gold fill-gold'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
                <div className="ml-auto text-sm text-gold">
                  {testimonials[currentIndex].product}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-gold w-6' 
                      : 'bg-border hover:bg-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
