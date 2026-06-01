"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import LaboratoryLayout from "../core/LaboratoryLayout"
import { ingredients } from "@/lib/data/ingredients"

const skinGoals = [
  "Deep Hydration",
  "Glow Enhancement",
  "Skin Repair",
  "Silky Finish",
]

const milkBases = [
  "Velvet Milk Base",
  "Botanical Cream Base",
  "Silk Hydration Base",
  "Luxury Shea Base",
]

const fragrances =
  ingredients.fragranceNotes
export default function BodyMilkLab() {

  const [skinGoal, setSkinGoal] = useState("")
  const [milkBase, setMilkBase] = useState("")
  const [selectedOils, setSelectedOils] = useState<string[]>([])
  const [fragrance, setFragrance] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  const compatibleOils =
  ingredients.plantOils

  const toggleOil = (oil:string) => {

    if(selectedOils.includes(oil)){

      setSelectedOils(
        selectedOils.filter(
          (i)=>i !== oil
        )
      )

    }else{

      setSelectedOils([
        ...selectedOils,
        oil
      ])

    }

  }

  const generateFormula = ()=>{

    setIsGenerating(true)

    setTimeout(()=>{

      setIsGenerating(false)
      setGenerated(true)

    },4000)

  }

  const liquidColor =
    fragrance === "Vanilla Amber"
      ? "from-amber-200/40 to-orange-400/20"
      : fragrance === "White Musk"
      ? "from-white/40 to-zinc-300/20"
      : fragrance === "Rose Oud"
      ? "from-rose-200/40 to-red-400/20"
      : fragrance === "Orange Blossom"
      ? "from-orange-200/40 to-yellow-300/20"
      : "from-gold/30 to-yellow-500/20"

  const auraGlow =
    fragrance === "Vanilla Amber"
      ? "bg-orange-400/20"
      : fragrance === "White Musk"
      ? "bg-white/20"
      : fragrance === "Rose Oud"
      ? "bg-rose-400/20"
      : fragrance === "Orange Blossom"
      ? "bg-yellow-300/20"
      : "bg-gold/20"

  const randomName =
    fragrance
      ? `${fragrance} Body Elixir`
      : "Luxury Body Elixir"

  const compatibilityScore =
    92 + Math.floor(Math.random()*7)

  const downloadFormula=()=>{

    window.print()

  }

  return (
    <LaboratoryLayout>

      <section className="relative min-h-screen py-32 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >

            <span className="text-gold uppercase tracking-[0.4em] text-xs">
              Body Milk Laboratory
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
              Create Your <br />
              Luxury Body Milk
            </h1>

            <p className="mt-8 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
              Engineer a cinematic body hydration formula powered by botanical
              actives, silk textures and AI formulation science.
            </p>

          </motion.div>

          <div className="space-y-20">

            {/* Skin Goals */}
            <div>

              <h2 className="text-3xl font-serif mb-8">
                01 — Select Skin Goal
              </h2>

              <div className="grid md:grid-cols-4 gap-6">

                {skinGoals.map((goal) => (

                  <button
                    key={goal}
                    onClick={() => setSkinGoal(goal)}
                    className={`p-8 rounded-[28px] border transition-all ${
                      skinGoal === goal
                        ? "border-gold bg-gold/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >

                    {goal}

                  </button>

                ))}

              </div>

            </div>

            {/* Milk Base */}
            <div>

              <h2 className="text-3xl font-serif mb-8">
                02 — Select Milk Base
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {milkBases.map((base) => (

                  <button
                    key={base}
                    onClick={() => setMilkBase(base)}
                    className={`p-8 rounded-[28px] border text-left transition-all ${
                      milkBase === base
                        ? "border-gold bg-gold/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >

                    <h3 className="text-2xl font-serif">
                      {base}
                    </h3>

                  </button>

                ))}

              </div>

            </div>

            {/* Nourishing Oils */}

<div>

  <h2 className="text-3xl font-serif mb-8">
    03 — Nourishing Oils
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {compatibleOils.map((oil)=>{

      const active =
        selectedOils.includes(
          oil.name
        )

      return(

        <motion.button
          key={oil.id}
          whileHover={{
            scale:1.04,
            y:-6
          }}
          whileTap={{
            scale:0.98
          }}
          onClick={()=>
            toggleOil(
              oil.name
            )
          }
          className={`relative overflow-hidden p-8 rounded-[32px] border transition-all ${
            active
            ? "border-gold bg-gold/10"
            : "border-white/10 bg-white/5"
          }`}
        >

          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"/>

          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 text-2xl">
            ✦
          </div>

          <h3 className="text-xl font-serif">
            {oil.name}
          </h3>

          <p className="mt-3 text-sm text-white/50 leading-relaxed">
            {oil.benefits.join(" • ")}
          </p>

        </motion.button>

      )

    })}

  </div>

</div>

{/* Fragrance Aura */}

<div>

  <h2 className="text-3xl font-serif mb-8">
    04 — Select Fragrance Aura
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {fragrances.map((item)=>{

      const active =
        fragrance === item.name

      return(

        <motion.button
          key={item.id}
          whileHover={{
            y:-8,
            scale:1.03
          }}
          whileTap={{
            scale:0.98
          }}
          onClick={()=>
            setFragrance(
              item.name
            )
          }
          className={`relative overflow-hidden rounded-[32px] border p-8 transition-all ${
            active
            ? "border-gold bg-gold/10"
            : "border-white/10 bg-white/5"
          }`}
        >

          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"/>

          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 text-2xl">
            ✦
          </div>

          <h3 className="text-xl font-serif">
            {item.name}
          </h3>

          <p className="mt-4 text-sm text-white/50">
            {item.family}
          </p>

        </motion.button>

      )

    })}

  </div>

</div>

                  
{/* Generate */}
<div className="flex justify-center pt-10">

  <motion.button
    whileHover={{
      scale: 1.05,
      y: -4,
    }}
    whileTap={{ scale: 0.98 }}
    onClick={generateFormula}
    className="px-12 py-5 rounded-full bg-gold text-black font-medium text-lg shadow-[0_0_50px_rgba(212,175,55,0.35)]"
  >
    Generate Luxury Formula
  </motion.button>

</div>
{/* AI Generation */}
{isGenerating && (

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="mt-24 rounded-[40px] border border-gold/20 bg-black/40 backdrop-blur-2xl p-16 relative overflow-hidden"
  >

    {/* Glow */}
    <div className="absolute inset-0 bg-linear-to-r from-gold/10 via-transparent to-gold/10 animate-pulse" />

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
        Engineering cinematic hydration textures, botanical nourishment
        synergy and luxury sensory diffusion.
      </p>

    </div>

  </motion.div>

)}
{/* Generated Formula */}
{generated && (

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative mt-24 rounded-[40px] border border-gold/20 bg-linear-to-br from-gold/10 to-white/5 backdrop-blur-2xl p-12 overflow-hidden"
  >
{/* Ambient Pulse */}
<motion.div
  animate={{
    opacity: [0.15, 0.35, 0.15],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute inset-0 bg-radial from-gold/20 via-transparent to-transparent"
/>
    <div className="text-center">

      <span className="text-gold uppercase tracking-[0.4em] text-xs">
        AI FORMULATION COMPLETE
      </span>

      <h2 className="mt-6 text-5xl font-serif">
        {randomName}
      </h2>

      {/* Bottle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="relative mt-20 flex justify-center"
      >
{/* Floating Particles */}
{[...Array(14)].map((_, i) => (

  <motion.div
    key={i}
    animate={{
      y: [0, -40, 0],
      opacity: [0.2, 1, 0.2],
      x: [0, Math.random() * 30 - 15, 0],
    }}
    transition={{
      duration: 4 + i * 0.3,
      repeat: Infinity,
      delay: i * 0.2,
    }}
    className="absolute w-2 h-2 rounded-full bg-gold"
    style={{
      left: `${20 + Math.random() * 60}%`,
      top: `${10 + Math.random() * 70}%`,
    }}
  />

))}
        {/* Dynamic Aura Glow */}
<motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.7, 0.4],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className={`absolute w-72 h-72 rounded-full ${auraGlow} blur-[120px]`}
/>

        {/* Bottle */}
        <motion.div
          animate={{
  y: [0, -18, 0],
  rotateY: [0, 8, 0],
  rotateX: [0, -4, 0],
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
          {/* Gold Rings */}
{[1, 2, 3].map((ring) => (

  <motion.div
    key={ring}
    animate={{
      rotate: 360,
      scale: [1, 1.05, 1],
    }}
    transition={{
      rotate: {
        duration: 20 + ring * 6,
        repeat: Infinity,
        ease: "linear",
      },
      scale: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="absolute border border-gold/20 rounded-full"
    style={{
      width: `${320 + ring * 50}px`,
      height: `${320 + ring * 50}px`,
    }}
  />

))}
{/* Luxury Smoke */}
{[...Array(6)].map((_, i) => (

  <motion.div
    key={i}
    animate={{
      y: [0, -120],
      x: [0, Math.random() * 60 - 30],
      opacity: [0, 0.25, 0],
      scale: [0.8, 1.6],
    }}
    transition={{
      duration: 8 + i,
      repeat: Infinity,
      delay: i * 1.2,
      ease: "easeOut",
    }}
    className="absolute bottom-0 w-40 h-40 rounded-full bg-white/10 blur-[80px]"
  />

))}
{/* AI Scanner */}
<motion.div
  animate={{
    y: [-220, 220, -220],
    opacity: [0.2, 1, 0.2],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[320px] h-[2px] bg-gold blur-sm"
/>

          {/* Glass */}
          <div className="absolute inset-0 rounded-[70px] border border-white/20 bg-white/10 backdrop-blur-2xl overflow-hidden">

            {/* Moving Reflection */}
<motion.div
  animate={{
    x: [-120, 260],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-white/40 to-transparent blur-2xl rotate-12"
/>
            {/* Liquid */}
            <motion.div
              animate={{
                height: ["58%", "63%", "58%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${liquidColor} backdrop-blur-xl`}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

              <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
                Luxury Body Milk
              </span>

              <h3 className="mt-6 text-3xl font-serif text-center px-6">
                {randomName}
              </h3>

              <div className="mt-8 w-24 h-[1px] bg-gold/40" />

              <p className="mt-8 text-xs text-white/50 uppercase tracking-[0.3em]">
                AI Molecular Hydration
              </p>

            </div>

          </div>

          {/* Cap */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-16 rounded-t-[30px] bg-gradient-to-b from-gold to-yellow-700 border border-gold/40 shadow-2xl" />

        </motion.div>

      </motion.div>

      <p className="mt-12 text-white/60 max-w-2xl mx-auto leading-relaxed">
        A cinematic body hydration formula engineered with luxury botanical
        nourishment, silky textures and AI sensory balance.
      </p>

      {/* Score */}
      <div className="mt-16 flex justify-center">

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-10">

          <span className="text-white/40 text-xs uppercase">
            Hydration Compatibility
          </span>

          <h3 className="mt-6 text-6xl font-serif text-gold">
            {compatibilityScore}%
          </h3>

        </div>

      </div>
      {/* Formula Composition */}
<div className="mt-20">

  <h3 className="text-3xl font-serif mb-10">
    Formula Composition
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {selectedOils.map((oil, index) => (

      <motion.div
        key={oil}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.12,
        }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-gold/5 to-transparent" />

        {/* Orb */}
        <div className="relative w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-2xl mb-6">
          ✦
        </div>

        <h4 className="relative text-2xl font-serif">
          {oil}
        </h4>

        <p className="relative mt-4 text-white/50 leading-relaxed text-sm">
          Active botanical nourishment engineered for cinematic skin softness,
          hydration retention and luxury sensory finish.
        </p>

      </motion.div>

    ))}

  </div>

</div>
{/* Certificate */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.4,
  }}
  className="mt-24 overflow-hidden rounded-[40px] border border-gold/20 bg-black/40 backdrop-blur-2xl"
>

  {/* Header */}
  <div className="border-b border-white/10 p-10 flex items-center justify-between">

    <div>

      <span className="text-gold uppercase tracking-[0.4em] text-xs">
        Luxury Certification
      </span>

      <h3 className="mt-4 text-4xl font-serif">
        Official Body Milk Certificate
      </h3>

    </div>

    <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center text-gold text-3xl">
      ✦
    </div>

  </div>

  {/* Body */}
  <div className="grid md:grid-cols-2 gap-12 p-10">

    {/* Left */}
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
          Skin Goal
        </span>

        <p className="mt-3 text-lg text-white/80">
          {skinGoal}
        </p>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Milk Base
        </span>

        <p className="mt-3 text-lg text-white/80">
          {milkBase}
        </p>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Fragrance Aura
        </span>

        <p className="mt-3 text-lg text-white/80">
          {fragrance}
        </p>
      </div>

    </div>

    {/* Right */}
    <div className="space-y-8">

      <div>
        <span className="text-white/40 text-xs uppercase">
          Active Oils
        </span>

        <div className="mt-4 flex flex-wrap gap-3">

          {selectedOils.map((oil) => (

            <div
              key={oil}
              className="px-4 py-2 rounded-full border border-gold/20 bg-gold/10 text-sm"
            >
              {oil}
            </div>

          ))}

        </div>
      </div>

      <div>
        <span className="text-white/40 text-xs uppercase">
          Hydration Compatibility
        </span>

        <p className="mt-3 text-5xl font-serif text-gold">
          {compatibilityScore}%
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

</motion.div>
{/* AI Hydration Analysis */}
<div className="mt-24">

  <h3 className="text-3xl font-serif mb-10">
    AI Hydration Analysis
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Absorption */}
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <span className="text-white/40 text-xs uppercase">
        Absorption Rate
      </span>

      <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "92%" }}
          transition={{ duration: 1.5 }}
          className="h-full rounded-full bg-gold"
        />

      </div>

      <p className="mt-4 text-white/60">
        Fast luxury skin infusion technology.
      </p>

    </div>

    {/* Nutrition */}
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <span className="text-white/40 text-xs uppercase">
        Botanical Nutrition
      </span>

      <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "96%" }}
          transition={{ duration: 1.8 }}
          className="h-full rounded-full bg-gold"
        />

      </div>

      <p className="mt-4 text-white/60">
        AI-balanced active nourishment synergy.
      </p>

    </div>

    {/* Silk Finish */}
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <span className="text-white/40 text-xs uppercase">
        Silk Finish
      </span>

      <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "98%" }}
          transition={{ duration: 2 }}
          className="h-full rounded-full bg-gold"
        />

      </div>

      <p className="mt-4 text-white/60">
        Cinematic softness and sensory glow.
      </p>

    </div>

  </div>

</div>
{/* Download */}
<div className="mt-16 flex justify-center">

  <button
    onClick={downloadFormula}
    className="px-10 py-5 rounded-full bg-gold text-black font-medium hover:scale-105 transition-transform"
  >
    Download Formula PDF
  </button>

</div>

    </div>

  </motion.div>

)}
          </div>

        </div>

      </section>

    </LaboratoryLayout>
  )
}