"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import LaboratoryLayout from "../core/LaboratoryLayout"
import { ingredients } from "@/lib/data/ingredients"

const skinTypes = [
  "Dry Skin",
  "Oily Skin",
  "Combination Skin",
  "Sensitive Skin",
]

const bases = [
  "Hydrating Crystal Base",
  "Purifying Botanical Base",
  "Soft Milky Gel Base",
  "Luxury Foam Base",
]

const fragrances =
ingredients.fragranceNotes

export default function GelCleanserLab() {
  const [generated, setGenerated] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const luxuryNames = [
    "Velours Botanique",
    "Éclipse Pure",
    "Aura Celeste",
    "Crystal Skin Elixir",
    "Lune Dorée",
  ]

  const randomName =
    luxuryNames[Math.floor(Math.random() * luxuryNames.length)]

  const [skinType, setSkinType] = useState("")
  const [base, setBase] = useState("")
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [fragrance, setFragrance] = useState("")
  const compatibleOils =
  ingredients.plantOils.filter(
    (item) =>
      item.skin_types.includes(
        skinType.replace(" Skin", "")
      )
  )
  const compatibilityScore =
  92 + Math.floor(Math.random() * 7)

const textures = [
  "Silky Gel Texture",
  "Crystal Fresh Gel",
  "Velvet Foam Texture",
  "Milky Botanical Cleanser",
]

const generatedTexture =
  textures[Math.floor(Math.random() * textures.length)]

  const toggleIngredient = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((i) => i !== ingredient)
      )
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }
const incompatibleIngredients =
  skinType === "Sensitive Skin"
    ? ["Tea Tree"]
    : []

const synergyBonus =
  selectedIngredients.includes("Hyaluronic Acid") &&
  selectedIngredients.includes("Aloe Vera")

const glowBoost =
  selectedIngredients.includes("Vitamin C") &&
  selectedIngredients.includes("Rose Extract")

const bottleColor =
  fragrance === "Rose Oud"
    ? "from-rose-200/40 to-red-400/20"
    : fragrance === "White Musk"
    ? "from-white/40 to-zinc-300/20"
    : fragrance === "Orange Blossom"
    ? "from-orange-200/40 to-yellow-300/20"
    : fragrance === "Vanilla Amber"
    ? "from-amber-200/40 to-orange-500/20"
    : "from-emerald-200/40 to-cyan-400/20"

const liquidColor =
  skinType === "Dry Skin"
    ? "from-blue-200/40 to-cyan-400/20"
    : skinType === "Oily Skin"
    ? "from-emerald-200/40 to-green-400/20"
    : skinType === "Sensitive Skin"
    ? "from-pink-200/40 to-rose-400/20"
    : "from-amber-200/40 to-orange-500/20"

const downloadFormula = () => {
  window.print()
}
    return (
    <LaboratoryLayout>
      <section className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs">
              Gel Nettoyant Laboratory
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-serif">
              Create Your Cleansing Formula
            </h1>

            <p className="mt-8 text-white/60 max-w-3xl mx-auto leading-relaxed text-lg">
              Build your personalized luxury cleansing gel using advanced
              botanical ingredients, textures and signature fragrances.
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Skin Type */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                01 — Select Skin Type
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {skinTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSkinType(type)}
                    className={`p-8 rounded-[28px] border transition-all ${
                      skinType === type
                        ? "border-gold bg-gold/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Base */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                02 — Select Gel Base
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {bases.map((item) => (
                  <button
                    key={item}
                    onClick={() => setBase(item)}
                    className={`p-8 rounded-[28px] border text-left transition-all ${
                      base === item
                        ? "border-gold bg-gold/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <h3 className="text-2xl font-serif">
                      {item}
                    </h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                03 — Active Ingredients
              </h2>

              <div className="grid md:grid-cols-4 gap-6">

  {compatibleOils.map((oil) => {

    const incompatible =
      incompatibleIngredients.includes(oil.name)

    const active =
      selectedIngredients.includes(oil.name)

    return (

      <button
        disabled={incompatible}
        key={oil.id}
        onClick={() => toggleIngredient(oil.name)}
        className={`p-6 rounded-[24px] border transition-all ${
          incompatible
            ? "border-red-500/40 bg-red-500/10 opacity-40 cursor-not-allowed"
            : active
            ? "border-gold bg-gold/10"
            : "border-white/10 bg-white/5"
        }`}
      >

        {oil.name}

        {incompatible && (
          <p className="mt-2 text-xs text-red-400">
            Incompatible
          </p>
        )}

      </button>

    )

  })}

</div>
            </div>

            {/* Fragrance */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                04 — Signature Fragrance
              </h2>

              <div className="grid md:grid-cols-5 gap-6">
                {fragrances.map((item) => (
  <button
    key={item.id}
    onClick={() => setFragrance(item.name)}
    className={`p-6 rounded-[24px] border transition-all ${
      fragrance === item.name
        ? "border-gold bg-gold/10"
        : "border-white/10 bg-white/5"
    }`}
  >
    {item.name}
  </button>
))}
              </div>
            </div>
            {/* Floating Bottle Preview */}
<div className="relative flex justify-center py-10">

  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [0, 1.5, -1.5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >

    {/* Glow */}
    <div className="absolute inset-0 blur-3xl opacity-40 bg-gold rounded-full scale-150" />

    {/* Bottle */}
    <div
      className={`relative w-[220px] h-[420px] rounded-[60px] border border-white/20 bg-gradient-to-b ${bottleColor} backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.25)]`}
    >
      {/* Hologram Scan */}
<motion.div
  animate={{
    y: [-420, 420],
    opacity: [0, 1, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute left-0 w-full h-24 bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent blur-xl z-20"
/>
{/* Liquid */}
<motion.div
  initial={{ height: 0 }}
  animate={{ height: "78%" }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className={`absolute bottom-0 left-0 right-0 rounded-b-[44px]
  bg-gradient-to-b ${liquidColor}`}
>

  {/* Animated Waves */}
  <motion.div
    animate={{
      x: [0, -40, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-0 left-0 w-[200%] h-12 bg-white/10 blur-xl"
  />

  {/* Glow */}
  <div className="absolute inset-0 bg-gold/10 blur-2xl" />

</motion.div>

{/* Reflection */}
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/30 to-transparent blur-xl" />

<div className="absolute inset-6 rounded-[50px] border border-gold/20 overflow-hidden">

  {/* Liquid */}
  <motion.div
    animate={{
      height: ["58%", "62%", "58%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute bottom-0 left-0 w-full bg-gradient-to-b ${liquidColor}`}
  >
    <div className="absolute inset-0 bg-white/10 blur-2xl" />
  </motion.div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-xl flex flex-col items-center justify-center">

    <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
      Luxury Formula
    </span>

    <h3 className="mt-6 text-3xl font-serif text-center px-6">
      {randomName}
    </h3>

    <div className="mt-8 w-24 h-[1px] bg-gold/40" />

    <p className="mt-8 text-xs text-white/50 uppercase tracking-[0.3em]">
      AI Molecular Blend
    </p>

  </div>

</div>
      {/* Liquid reflection */}
      {/* Animated Liquid */}
<motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-0 left-0 right-0 h-[55%]"
>
  <div
    className={`absolute inset-0 bg-gradient-to-t ${bottleColor} opacity-80`}
  />

  {/* Liquid wave */}
  <motion.div
    animate={{
      x: [0, 20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-0 left-[-10%] w-[120%] h-10 bg-white/10 blur-xl rounded-full"
  />

  {/* Bubbles */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -180],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + i * 0.4,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeOut",
      }}
      className="absolute bottom-0 rounded-full bg-white/30"
      style={{
        left: `${10 + i * 8}%`,
        width: `${4 + (i % 3) * 3}px`,
        height: `${4 + (i % 3) * 3}px`,
      }}
    />
  ))}
</motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

      {/* Top cap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-10 rounded-b-3xl bg-black/50 border border-white/10" />

      {/* Brand */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">
          Carthalya
        </span>

        <h3 className="mt-4 text-3xl font-serif">
          {generated ? randomName : "Luxury Formula"}
        </h3>

        <p className="mt-4 text-sm text-white/50">
          Bio Molecular Cleanser
        </p>

        {/* Ingredients glow */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {selectedIngredients.slice(0, 3).map((ingredient) => (
            <span
              key={ingredient}
              className="px-3 py-1 rounded-full bg-white/10 text-xs"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom light */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gold/20 to-transparent" />
    </div>
  </motion.div>
</div>

            {/* Generate */}
            <div className="text-center pt-10">
              <button
  onClick={() => {
  setIsGenerating(true)

  setTimeout(() => {
    setIsGenerating(false)
    setGenerated(true)
  }, 3500)
}}
  className="px-12 py-5 rounded-full bg-gold text-black text-lg font-medium hover:scale-105 transition-transform"
>
  Generate Luxury Formula
</button>
            </div>
            {isGenerating && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="mt-20 rounded-[40px] border border-gold/20 bg-black/40 backdrop-blur-2xl p-16 overflow-hidden relative"
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 animate-pulse" />

    <div className="relative z-10 text-center">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-32 h-32 mx-auto rounded-full border border-gold/20 flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center">
          ✦
        </div>
      </motion.div>

      <h2 className="mt-10 text-4xl font-serif">
        AI Molecular Analysis
      </h2>

      <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
        Analyzing ingredient synergy, sensory harmony and luxury formulation architecture...
      </p>
      <div className="mt-16 space-y-6 max-w-2xl mx-auto">

  {[
    "Analyzing skin compatibility",
    "Calculating ingredient harmony",
    "Generating molecular balance",
    "Optimizing luxury texture",
    "Finalizing AI formulation",
  ].map((step, index) => (

    <motion.div
      key={step}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.5,
      }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between text-sm text-white/60">
        <span>{step}</span>

        <span>{20 * (index + 1)}%</span>
      </div>

      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${20 * (index + 1)}%` }}
          transition={{
            duration: 1.2,
            delay: index * 0.5,
          }}
          className="h-full bg-gradient-to-r from-gold to-yellow-200"
        />
      </div>
    </motion.div>
  ))}
</div>

      <div className="mt-12 flex justify-center gap-3">
        {[1,2,3].map((item) => (
          <motion.div
            key={item}
            animate={{
              y: [0, -10, 0],
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

    </div>
  </motion.div>
)}
            {generated && (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="mt-24 rounded-[40px] border border-gold/20 bg-gradient-to-br from-gold/10 to-white/5 backdrop-blur-2xl p-12"
  >
    <div className="text-center">
      <span className="text-gold uppercase tracking-[0.4em] text-xs">
        AI FORMULATION COMPLETE
      </span>

      <h2 className="mt-6 text-5xl font-serif">
        {randomName}
      </h2>
      <motion.div
  initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{
    duration: 1.4,
    ease: "easeOut",
  }}
  className="relative mt-16 flex justify-center"
>

  {/* Glow */}
  <div className="absolute w-72 h-72 rounded-full bg-gold/20 blur-[120px]" />

  {/* Bottle */}
  <motion.div
    animate={{
      y: [0, -18, 0],
      rotateY: [0, 8, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-[260px] h-[520px]"
    style={{
      transformStyle: "preserve-3d",
    }}
  >

    {/* Reflection */}
    <div className="absolute inset-0 rounded-[60px] bg-white/10 backdrop-blur-2xl border border-white/20 overflow-hidden">

      {/* Gold reflection */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/30 to-transparent blur-xl" />

      {/* Bottle Content */}
      <div className="absolute inset-6 rounded-[50px] bg-gradient-to-b from-gold/20 to-black/40 border border-gold/20 flex flex-col items-center justify-center">

        <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
          Luxury Formula
        </span>

        <h3 className="mt-6 text-3xl font-serif text-center px-6">
          {randomName}
        </h3>

        <div className="mt-8 w-24 h-[1px] bg-gold/40" />

        <p className="mt-8 text-xs text-white/50 uppercase tracking-[0.3em]">
          AI Molecular Blend
        </p>

      </div>
    </div>

    {/* Cap */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-16 rounded-t-[30px] bg-gradient-to-b from-gold to-yellow-700 border border-gold/40 shadow-2xl" />

  </motion.div>
</motion.div>

      <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
        A personalized luxury cleansing gel crafted using botanical science,
        advanced ingredient synergy and sensory formulation intelligence.
      </p>
    </div>
    <div className="mt-16">
  <h3 className="text-3xl font-serif mb-8">
    Formula Composition
  </h3>

  <div className="space-y-6">

    {selectedIngredients.map((ingredient, index) => {

      const percentage =
        Math.floor(Math.random() * 8) + 2

      return (
        <div
          key={ingredient}
          className="rounded-[24px] border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">
              {ingredient}
            </span>

            <span className="text-gold text-xl font-serif">
              {percentage}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage * 10}%` }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gold"
            />
          </div>
        </div>
      )
    })}
  </div>
</div>

    <div className="grid md:grid-cols-3 gap-8 mt-16">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <span className="text-white/40 text-sm uppercase">
          Skin Profile
        </span>

        <h3 className="mt-4 text-2xl font-serif">
          {skinType}
        </h3>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <span className="text-white/40 text-sm uppercase">
          Signature Base
        </span>

        <h3 className="mt-4 text-2xl font-serif">
          {base}
        </h3>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <span className="text-white/40 text-sm uppercase">
          Fragrance
        </span>

        <h3 className="mt-4 text-2xl font-serif">
          {fragrance}
        </h3>
        <p className="mt-4 text-white/50 text-sm">
  {generatedTexture}
</p>
      </div>
    </div>

    <div className="mt-16">
      <h3 className="text-3xl font-serif mb-8">
        Active Ingredients
      </h3>

      <div className="flex flex-wrap gap-4">
        {selectedIngredients.map((ingredient) => (
          <div
            key={ingredient}
            className="px-5 py-3 rounded-full bg-gold/10 border border-gold/20"
          >
            {ingredient}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-16 grid md:grid-cols-2 gap-8">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <span className="text-white/40 text-sm uppercase">
          Formula Benefits
        </span>

        <ul className="mt-6 space-y-4 text-white/70">

  {selectedIngredients.includes("Niacinamide") && (
    <li>• Pore refining and oil balancing</li>
  )}

  {selectedIngredients.includes("Hyaluronic Acid") && (
    <li>• Multi-layer hydration infusion</li>
  )}

  {selectedIngredients.includes("Vitamin C") && (
    <li>• Skin radiance enhancement</li>
  )}

  {selectedIngredients.includes("Tea Tree Oil") && (
    <li>• Botanical purification technology</li>
  )}

  {selectedIngredients.includes("Green Tea Extract") && (
    <li>• Antioxidant environmental protection</li>
  )}

  {selectedIngredients.includes("Chamomile") && (
    <li>• Sensitive skin calming effect</li>
  )}

  {selectedIngredients.includes("Rose Water") && (
    <li>• Luxury floral skin nourishment</li>
  )}

  {selectedIngredients.includes("Aloe Vera") && (
    <li>• Deep soothing hydration therapy</li>
  )}

</ul>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <span className="text-white/40 text-sm uppercase">
          AI Compatibility Score
        </span>

        <h3 className="mt-6 text-6xl font-serif text-gold">
          {compatibilityScore}%
        </h3>

        <p className="mt-4 text-white/60">
          Exceptional ingredient synergy and sensory harmony.
        </p>
      </div>
    </div>
    <div className="mt-24 rounded-[40px] border border-gold/20 bg-black/30 backdrop-blur-2xl overflow-hidden">

  {/* Header */}
  <div className="border-b border-white/10 p-10 flex items-center justify-between">

    <div>
      <span className="text-gold uppercase tracking-[0.4em] text-xs">
        Luxury Certification
      </span>

      <h3 className="mt-4 text-4xl font-serif">
        Official Formula Certificate
      </h3>
    </div>

    <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center text-gold text-3xl">
      ✦
    </div>

  </div>

  {/* Body */}
  <div className="grid md:grid-cols-2 gap-12 p-10">

    <div className="space-y-8">

      <div>
        <span className="text-white/40 text-xs uppercase">
          Formula Name
        </span>

        <h4 className="mt-3 text-3xl font-serif">
          {randomName}
        </h4>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Skin Profile
        </span>

        <p className="mt-3 text-lg text-white/80">
          {skinType}
        </p>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Signature Fragrance
        </span>

        <p className="mt-3 text-lg text-white/80">
          {fragrance}
        </p>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          AI Compatibility
        </span>

        <p className="mt-3 text-5xl font-serif text-gold">
          {compatibilityScore}%
        </p>
      </div>

    </div>

    {/* Right Side */}
    <div className="space-y-8">

      <div>
        <span className="text-white/40 text-xs uppercase">
          Active Ingredients
        </span>

        <div className="mt-4 flex flex-wrap gap-3">
          {selectedIngredients.map((ingredient) => (
            <div
              key={ingredient}
              className="px-4 py-2 rounded-full border border-gold/20 bg-gold/10 text-sm"
            >
              {ingredient}
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Formula ID
        </span>

        <p className="mt-3 text-white/70 tracking-[0.3em]">
          LX-{Math.floor(Math.random() * 999999)}
        </p>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Certified By
        </span>

        <p className="mt-3 text-xl font-serif text-gold">
          AI Luxury Laboratory
        </p>
      </div>

    </div>

  </div>

</div>
<div className="mt-16 flex justify-center">
  <button
  onClick={downloadFormula}
  className="px-8 py-4 rounded-full bg-gold text-black font-medium hover:scale-105 transition-transform"
>
  Download Formula PDF
</button>
</div>
  </motion.div>
)}
          </div>
        </div>
      </section>
    </LaboratoryLayout>
  )
}