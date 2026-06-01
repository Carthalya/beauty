'use client'

import { Hero, FeaturedProducts, DiagnosticCTA, LaboratoryCTA, Testimonials, BrandStory } from '@/components/home'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <DiagnosticCTA />
      <LaboratoryCTA />
      <BrandStory />
      <Testimonials />
    </>
  )
}
