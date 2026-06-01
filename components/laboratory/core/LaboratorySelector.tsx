"use client"

import LaboratoryLayout from "./LaboratoryLayout"
import { motion } from "framer-motion"
import Link from "next/link"

export default function LaboratorySelector() {
  return (
    <LaboratoryLayout>
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <span className="text-gold tracking-[0.4em] uppercase text-xs">
              Carthalya Laboratory
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
              Create Your <br />
              Personalized Beauty Formula
            </h1>

            <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Enter a cinematic luxury laboratory where artificial intelligence,
              natural ingredients and sensory artistry combine to craft unique
              beauty creations designed exclusively for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skincare */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  Universe 01
                </span>

                <h2 className="mt-4 text-4xl font-serif">
                  Skincare Laboratory
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed">
                  Design luxury skincare formulas adapted to your skin profile,
                  textures, active ingredients and botanical extracts.
                </p>

                <ul className="mt-8 space-y-3 text-sm text-white/70">
                  <li>• Gel Nettoyant</li>
                  <li>• Sérum Visage</li>
                  <li>• Lait de Corps</li>
                  <li>• Brume Bio</li>
                </ul>

                <Link
                  href="/laboratory/skincare"
                  className="inline-flex mt-10 items-center gap-3 px-8 py-4 rounded-full bg-gold text-black font-medium hover:scale-105 transition-transform"
                >
                  Enter Laboratory
                </Link>
              </div>
            </motion.div>

            {/* Perfume */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                  Universe 02
                </span>

                <h2 className="mt-4 text-4xl font-serif">
                  Perfume Laboratory
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed">
                  Build signature fragrances with top notes, heart notes and
                  deep base accords inspired by luxury perfumery.
                </p>

                <ul className="mt-8 space-y-3 text-sm text-white/70">
                  <li>• Signature Perfume</li>
                  <li>• Brume Parfumée</li>
                  <li>• Ambiance Fragrance</li>
                  <li>• Linen Perfume</li>
                </ul>

                <Link
                  href="/laboratory/fragrance"
                  className="inline-flex mt-10 items-center gap-3 px-8 py-4 rounded-full bg-emerald-400 text-black font-medium hover:scale-105 transition-transform"
                >
                  Enter Laboratory
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LaboratoryLayout>
  )
}