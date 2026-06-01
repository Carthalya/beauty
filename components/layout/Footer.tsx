'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'

export function Footer() {
  const { locale } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'

  const footerLinks = {
    customerService: [
      { href: '/shipping', label: t('footer.shippingReturns') },
      { href: '/faq', label: t('footer.faq') },
      { href: '/contact', label: t('footer.contactUs') },
    ],
    company: [
      { href: '/about', label: t('footer.ourStory') },
      { href: '/careers', label: t('footer.careers') },
      { href: '/press', label: t('footer.press') },
    ],
    legal: [
      { href: '/privacy', label: t('footer.privacyPolicy') },
      { href: '/terms', label: t('footer.termsOfService') },
      { href: '/cookies', label: t('footer.cookiePolicy') },
    ],
  }

  const socialLinks = [
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  ]

  return (
    <footer 
      className="bg-primary text-primary-foreground"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif tracking-wide mb-4"
            >
              {t('footer.newsletter')}
            </motion.h3>
            <p className="text-primary-foreground/70 mb-8">
              {t('footer.newsletterText')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="w-full pl-12 pr-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gold text-gold-foreground font-medium tracking-wider uppercase rounded-md hover:bg-gold/90 transition-colors"
              >
                {t('footer.subscribe')}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif tracking-[0.2em] uppercase mb-6">
              Carthalya
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8 max-w-sm">
              {t('about.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">
              {t('footer.customerService')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.customerService.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">
              {t('footer.company')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Carthalya. {t('footer.rights')}.
            </p>
            <p className="text-xs text-primary-foreground/30 tracking-wider uppercase">
              {t('common.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
