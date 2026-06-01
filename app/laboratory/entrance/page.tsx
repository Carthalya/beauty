"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function LaboratoryEntrancePage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/laboratory")
    }, 5500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_45%)]" />

      {/* Golden Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gold/20 blur-[140px]"
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
            }}
            className="absolute w-1 h-1 rounded-full bg-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">

        {/* Door */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeInOut",
          }}
          className="origin-top mx-auto w-[260px] h-[420px] rounded-t-[140px] border border-gold/30 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl"
        />

        {/* Scanner */}
        <motion.div
          animate={{
            y: [-120, 120, -120],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-72 h-1 bg-gold blur-sm"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-16"
        >
          <span className="text-gold uppercase tracking-[0.5em] text-xs">
            AI Luxury Laboratory
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-serif">
            Molecular Entry
          </h1>

          <p className="mt-8 text-white/60 max-w-2xl mx-auto leading-relaxed text-lg">
            Initializing biometric formulation environment...
          </p>
        </motion.div>

        {/* Loading Dots */}
        <div className="mt-16 flex justify-center gap-4">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: item * 0.2,
              }}
              className="w-4 h-4 rounded-full bg-gold"
            />
          ))}
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
          }}
          className="mt-12 space-y-3 text-sm tracking-[0.3em] uppercase text-white/40"
        >
          <p>Identity Verified</p>
          <p>Skin Analysis Ready</p>
          <p>Opening Laboratory Chamber</p>
        </motion.div>

      </div>
    </section>
  )
}