"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface LaboratoryLayoutProps {
  children: ReactNode
}

export default function LaboratoryLayout({
  children,
}: LaboratoryLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_45%)]" />

      {/* Secondary Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gold/10 blur-[140px]" />

      {/* Floating Golden Orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-20 w-72 h-72 rounded-full bg-gold/10 blur-[120px]"
      />

      {/* Floating Emerald Orb */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-[140px]"
      />

      {/* Tiny Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-gold/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Noise Overlay */}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}