'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('max-w-3xl mb-12 md:mb-16', alignmentClasses[align], className)}
    >
      {eyebrow && (
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
