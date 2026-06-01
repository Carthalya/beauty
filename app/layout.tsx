import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StoreProvider } from '@/lib/store/StoreProvider'
import { LanguageProvider } from '@/lib/i18n/LanguageProvider'
import { Navbar, Footer } from '@/components/layout'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Carthalya | Luxury Beauty & Skincare',
    template: '%s | Carthalya'
  },
  description: 'Discover the art of timeless beauty with Carthalya. Premium skincare, AI-powered diagnostics, and personalized formulations crafted with the finest botanical ingredients.',
  keywords: ['luxury skincare', 'premium beauty', 'AI diagnostics', 'personalized skincare', 'botanical ingredients', 'anti-aging', 'serums', 'moisturizers'],
  authors: [{ name: 'Carthalya' }],
  creator: 'Carthalya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'ar_SA'],
    url: 'https://carthalya.com',
    siteName: 'Carthalya',
    title: 'Carthalya | Luxury Beauty & Skincare',
    description: 'Where Science Meets Luxury. Discover premium skincare crafted with botanical excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carthalya - Luxury Beauty & Skincare'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carthalya | Luxury Beauty & Skincare',
    description: 'Where Science Meets Luxury',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-icon.png'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F7F4' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1815' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <StoreProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </StoreProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
