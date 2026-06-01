"use client"

import { motion } from "framer-motion"
import LaboratoryLayout from "../core/LaboratoryLayout"

const products = [

{
id:"perfume",
name:"Luxury Perfume",
description:
"Create your signature fragrance powered by AI molecular harmony.",
href:"/laboratory/fragrance/perfume"
},

{
id:"brume",
name:"Body Brume",
description:
"Light refreshing fragrance with elegant sensory diffusion.",
href:"/laboratory/fragrance/body-brume"
},

{
id:"linen",
name:"Linen Perfume",
description:
"Luxury fabric fragrance with long-lasting freshness.",
href:"/laboratory/fragrance/linen"
},

{
id:"ambiance",
name:"Home Ambiance",
description:
"Create personalized home fragrance atmospheres.",
href:"/laboratory/fragrance/ambiance"
}

]

export default function FragranceLaboratory(){

return(

<LaboratoryLayout>

<section className="relative min-h-screen py-32 px-6">

<div className="max-w-7xl mx-auto">

{/* Hero */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-center mb-24"
>

<span className="text-gold uppercase tracking-[0.4em] text-xs">
Fragrance Laboratory
</span>

<h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">

Craft Your <br/>
Luxury Fragrance

</h1>

<p className="mt-8 text-white/60 max-w-2xl mx-auto leading-relaxed text-lg">

Select your fragrance universe and build a personalized sensory experience.

</p>

</motion.div>


{/* Products */}

<div className="grid md:grid-cols-2 gap-8">

{products.map((product,index)=>(

<motion.div
key={product.id}
initial={{
opacity:0,
y:40
}}
animate={{
opacity:1,
y:0
}}
transition={{
delay:index*0.1
}}
whileHover={{
y:-10
}}
className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
>

<div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

<div className="relative z-10">

<div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold text-2xl">

✦

</div>

<h2 className="mt-8 text-4xl font-serif">

{product.name}

</h2>

<p className="mt-4 text-white/60 leading-relaxed">

{product.description}

</p>

<a
href={product.href}
className="inline-block mt-10 px-8 py-4 rounded-full bg-gold text-black font-medium hover:scale-105 transition-transform"
>

Create Formula

</a>

</div>

</motion.div>

))}

</div>

</div>

</section>

</LaboratoryLayout>

)

}