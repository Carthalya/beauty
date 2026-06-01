'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LuxuryButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all duration-300 overflow-hidden group'
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'text-foreground hover:bg-accent',
      gold: 'bg-gold text-gold-foreground hover:bg-gold/90'
    }
    
    const sizes = {
      sm: 'px-6 py-2.5 text-xs',
      md: 'px-8 py-3.5 text-sm',
      lg: 'px-12 py-4 text-sm'
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </motion.button>
    )
  }
)

LuxuryButton.displayName = 'LuxuryButton'
