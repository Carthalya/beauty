"use client"

import { motion } from "framer-motion"

export default function LaboratoryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_40%)]" />

      {/* Glow Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gold/10 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-[140px]"
      />

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -80, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-gold"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}