"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import LaboratoryLayout from "../core/LaboratoryLayout"

import { fragranceFamilies } from "@/lib/data/fragrance/fragranceFamilies"
import { fragranceNotes } from "@/lib/data/fragrance/fragranceNotes"
import { fragranceFixatives } from "@/lib/data/fragrance/fragranceFixatives"
import { fragranceSolvents } from "@/lib/data/fragrance/fragranceSolvents"
import {
calculateFormula
}
from "@/lib/data/fragrance/logic/formulaEngine"

import {
calculateScore
}
from "@/lib/data/fragrance/logic/scoreEngine"

import {
suggestNotes
}
from "@/lib/data/fragrance/logic/recommendationEngine"

export default function PerfumeLab(){

const [selectedFamilies,setSelectedFamilies]=useState<string[]>([])
const [perfumeName,setPerfumeName]=useState("")

const [quantity,setQuantity]=useState("50ml")
const [oilConcentration,setOilConcentration]=useState(25)

const [selectedTop,setSelectedTop]=useState<string[]>([])
const [selectedHeart,setSelectedHeart]=useState<string[]>([])
const [selectedBase,setSelectedBase]=useState<string[]>([])

const [selectedFixative,setSelectedFixative]=useState<any>(null)
const [selectedSolvent,setSelectedSolvent]=useState<any>(null)

const [noteQuantities,setNoteQuantities]=
useState<Record<string,string>>({})

const [generated,setGenerated]=useState(false)
const [isGenerating,setIsGenerating]=useState(false)

const [generatedName,setGeneratedName]=useState("")
const [generatedScore,setGeneratedScore]=useState(0)
const [spray,setSpray]=useState(false)
const [saved,setSaved]=useState(false)

const luxuryNames=[
"Éclipse Noire",
"Velours Essence",
"Golden Aura",
"Infinite Bloom",
"Crystal Signature"
]

const bottleSize=
parseInt(
quantity.replace("ml","")
)

const totalOil=
bottleSize*(oilConcentration/100)

const totalAlcohol=
bottleSize-totalOil


const suggestedNotes=

suggestNotes([

...selectedTop,
...selectedHeart,
...selectedBase

])
const formulaData=

calculateFormula(
totalOil,
"luxury"
)

const smartFormula={

top:selectedTop.map((note:string)=>({

name:note,

quantity:(
formulaData.topMl/
Math.max(
selectedTop.length,
1
)
).toFixed(1)

})),

heart:selectedHeart.map((note:string)=>({

name:note,

quantity:(
formulaData.heartMl/
Math.max(
selectedHeart.length,
1
)
).toFixed(1)

})),

base:selectedBase.map((note:string)=>({

name:note,

quantity:(
formulaData.baseMl/
Math.max(
selectedBase.length,
1
)
).toFixed(1)

}))

}
const topNotes = fragranceNotes.filter(
(item)=>
item.type==="top" &&
(
selectedFamilies.length===0 ||
selectedFamilies.includes(item.family)
)
)

const heartNotes = fragranceNotes.filter(
(item)=>
item.type==="heart" &&
(
selectedFamilies.length===0 ||
selectedFamilies.includes(item.family)
)
)

const baseNotes = fragranceNotes.filter(
(item)=>
item.type==="base" &&
(
selectedFamilies.length===0 ||
selectedFamilies.includes(item.family)
)
)


const toggleFamily=(family:string)=>{

setSelectedFamilies((prev)=>{

if(prev.includes(family)){

return prev.filter(
item=>item!==family
)

}

if(prev.length>=3){
return prev
}

return[
...prev,
family
]

})

}


const toggleSelection=(

value:string,
state:string[],
setter:any

)=>{

if(state.includes(value)){

setter(

state.filter(
item=>item!==value
)

)

}else{

setter([
...state,
value
])

}

}


const updateQuantity=(

note:string,
value:string

)=>{

setNoteQuantities((prev)=>({

...prev,
[note]:value

}))

}

const totalTop =

selectedTop.reduce(

(total,item)=>

total+
Number(
noteQuantities[item] || 0
)

,0

)


const totalHeart =

selectedHeart.reduce(

(total,item)=>

total+
Number(
noteQuantities[item] || 0
)

,0

)


const totalBase =

selectedBase.reduce(

(total,item)=>

total+
Number(
noteQuantities[item] || 0
)

,0

)
const hasTop =
topNotes.length>0

const hasHeart =
heartNotes.length>0

const hasBase =
baseNotes.length>0


let topLimit=0.30
let heartLimit=0.40
let baseLimit=0.30


if(!hasBase){

topLimit=0.45
heartLimit=0.55
baseLimit=0

}

if(!hasHeart){

topLimit=0.50
heartLimit=0
baseLimit=0.50

}

if(!hasTop){

topLimit=0
heartLimit=0.60
baseLimit=0.40

}


const perfumeColors:Record<string,string>={

Citrus:
"from-yellow-300 via-yellow-500 to-amber-600",

Floral:
"from-pink-300 via-rose-400 to-fuchsia-600",

Woody:
"from-amber-700 via-orange-800 to-stone-900",

Oriental:
"from-red-500 via-orange-700 to-amber-900"

}

const liquidColor=

selectedFamilies.length>0

?

perfumeColors[
selectedFamilies[0]
]

||

"from-yellow-300 via-yellow-500 to-amber-600"

:

"from-yellow-300 via-yellow-500 to-amber-600"


const generateFormula=()=>{

if(

(hasTop && selectedTop.length===0) ||

(hasHeart && selectedHeart.length===0) ||

(hasBase && selectedBase.length===0) ||

!selectedFixative ||

!selectedSolvent

){

alert(
"Please complete all selections"
)

return

}


if(

totalTop>(totalOil*topLimit))

{

alert(
"Top Notes exceed maximum"
)

return

}


if(totalHeart>(totalOil*heartLimit))

{

alert(
"Heart Notes exceed maximum"
)

return

}


if(totalBase>(totalOil*baseLimit))

{

alert(
"Base Notes exceed maximum"
)

return

}


const randomName=

luxuryNames[
Math.floor(
Math.random()*luxuryNames.length
)
]

const score=
calculateScore(

[

...selectedTop,
...selectedHeart,
...selectedBase

],

selectedTop.length+
selectedHeart.length+
selectedBase.length

)

setGeneratedName(
randomName
)

setGeneratedScore(
score
)

setGenerated(false)

setIsGenerating(true)

setTimeout(()=>{

setIsGenerating(false)

setGenerated(true)

},3000)

}
const saveFormula=()=>{

const formula={

id:Date.now(),

name:
perfumeName ||
generatedName,

score:
generatedScore,

families:
selectedFamilies,

topNotes:
selectedTop.map(item=>({

name:item,
quantity:
noteQuantities[item]

})),

heartNotes:
selectedHeart.map(item=>({

name:item,
quantity:
noteQuantities[item]

})),

baseNotes:
selectedBase.map(item=>({

name:item,
quantity:
noteQuantities[item]

})),

fixative:
selectedFixative?.name,

solvent:
selectedSolvent?.name,

bottleSize,

oilConcentration,

createdAt:
new Date()

}

const existing=

JSON.parse(

localStorage.getItem(
"perfumeFormulas"
)

||

"[]"

)

localStorage.setItem(

"perfumeFormulas",

JSON.stringify([
...existing,
formula
])

)

setSaved(true)

setTimeout(()=>{

setSaved(false)

},2000)

}
return(

<LaboratoryLayout>

<section
className="min-h-screen py-32 px-6"
>

<div
className="max-w-7xl mx-auto"
>

<div
className="text-center mb-20"
>

<span
className="text-gold uppercase tracking-[0.4em] text-xs"
>

Perfume Laboratory

</span>

<h1
className="mt-6 text-6xl font-serif"
>

Create Your Luxury Perfume

</h1>

<p
className="mt-6 text-white/60"
>

Build your own perfume formula

</p>

</div>

{/* FAMILY */}

<h2
className="text-3xl font-serif mb-8"
>

01 — Select Fragrance Families

</h2>

<div
className="grid md:grid-cols-4 gap-6"
>

{

fragranceFamilies.map(

(family)=>(

<button

key={family.id}

onClick={()=>

toggleFamily(
family.name
)

}

className={`

p-8
rounded-[30px]
border

${
selectedFamilies.includes(
family.name
)

?

"border-gold bg-gold/10"

:

"border-white/10 bg-white/5"

}

`}

>

<h3
className="text-xl font-serif"
>

{family.name}

</h3>

<p
className="mt-4 text-white/50 text-sm"
>

{family.description}

</p>

</button>

)

)

}

</div>




{/* OIL */}

<div
className="mt-20"
>

<h2
className="text-3xl font-serif mb-8"
>

03 — Oil Concentration

</h2>

<div
className="grid md:grid-cols-5 gap-6"
>

{

[20,25,30,35,40]

.map(

(value)=>(

<button

key={value}

onClick={()=>

setOilConcentration(
value
)

}

className={`

p-8
rounded-[28px]
border

${

oilConcentration===value

?

"border-gold bg-gold/10"

:

"border-white/10 bg-white/5"

}

`}

>

{value}%

</button>

)

)

}

</div>

</div>

{/* CALCULATION */}

<div
className="mt-16 rounded-[30px]
border border-gold/20
bg-gold/5
p-8"
>

<p>

Bottle:
{bottleSize}ml

</p>

<p>

Perfume Oil:
{totalOil.toFixed(1)}ml

</p>

<p>

Alcohol + Solvent:
{totalAlcohol.toFixed(1)}ml

</p>

<p>

Top max:
{(totalOil*topLimit).toFixed(1)}

</p>

<p>

Heart max:
{(totalOil*heartLimit).toFixed(1)}

</p>

<p>

Base max:
{(totalOil*baseLimit).toFixed(1)}

</p>

</div>



{/* PERFUME NAME */}

<div
className="mt-20"
>

<h2
className="text-3xl font-serif mb-8"
>

04 — Perfume Name

</h2>

<input

type="text"

value={perfumeName}

onChange={(e)=>

setPerfumeName(
e.target.value
)

}

placeholder="Midnight Aura"

className="

w-full
rounded-[30px]
bg-white/5
border border-white/10
p-8
text-3xl

"

/>

</div>
{/* TOP NOTES */}

<div className="mt-20">

<h2
className="text-3xl font-serif mb-8"
>

05 — Top Notes

</h2>

<p className="mb-6 text-gold">

Maximum:
{(totalOil*0.30).toFixed(1)}ml

</p>

<div
className="grid md:grid-cols-4 gap-6"
>

{

topNotes.map(

(item)=>(

<div
key={item.id}
className="
rounded-[28px]
border border-white/10
bg-white/5
p-6"
>

<button

onClick={()=>

toggleSelection(

item.name,
selectedTop,
setSelectedTop

)

}

className={`

w-full
rounded-xl
p-4

${

selectedTop.includes(
item.name
)

?

"bg-gold text-black"

:

"bg-black/20"

}

`}

>

{item.name}

</button>

{

selectedTop.includes(
item.name
)

&&

<input

type="number"

placeholder="ml"

value={
noteQuantities[item.name]
||
""
}

onChange={(e)=>

updateQuantity(

item.name,
e.target.value

)

}

className="

mt-4
w-full
rounded-xl
bg-black/20
p-3

"

/>

}

</div>

)

)

}

</div>

</div>



{/* HEART NOTES */}

<div className="mt-20">

<h2
className="text-3xl font-serif mb-8"
>

06 — Heart Notes

</h2>

<p className="mb-6 text-gold">

Maximum:
{(totalOil*0.40).toFixed(1)}ml

</p>

<div
className="grid md:grid-cols-4 gap-6"
>

{

heartNotes.map(

(item)=>(

<div
key={item.id}
className="
rounded-[28px]
border border-white/10
bg-white/5
p-6"
>

<button

onClick={()=>

toggleSelection(

item.name,
selectedHeart,
setSelectedHeart

)

}

className={`

w-full
rounded-xl
p-4

${

selectedHeart.includes(
item.name
)

?

"bg-gold text-black"

:

"bg-black/20"

}

`}

>

{item.name}

</button>

{

selectedHeart.includes(
item.name
)

&&

<input

type="number"

placeholder="ml"

value={
noteQuantities[item.name]
||
""
}

onChange={(e)=>

updateQuantity(

item.name,
e.target.value

)

}

className="

mt-4
w-full
rounded-xl
bg-black/20
p-3

"

/>

}

</div>

)

)

}

</div>

</div>



{/* BASE NOTES */}

<div className="mt-20">

<h2
className="text-3xl font-serif mb-8"
>

07 — Base Notes

</h2>

<p className="mb-6 text-gold">

Maximum:
{(totalOil*0.30).toFixed(1)}ml

</p>

<div
className="grid md:grid-cols-4 gap-6"
>

{

baseNotes.map(

(item)=>(

<div
key={item.id}
className="
rounded-[28px]
border border-white/10
bg-white/5
p-6"
>

<button

onClick={()=>

toggleSelection(

item.name,
selectedBase,
setSelectedBase

)

}

className={`

w-full
rounded-xl
p-4

${

selectedBase.includes(
item.name
)

?

"bg-gold text-black"

:

"bg-black/20"

}

`}

>

{item.name}

</button>

{

selectedBase.includes(
item.name
)

&&

<input

type="number"

placeholder="ml"

value={
noteQuantities[item.name]
||
""
}

onChange={(e)=>

updateQuantity(

item.name,
e.target.value

)

}

className="

mt-4
w-full
rounded-xl
bg-black/20
p-3

"

/>

}

</div>

)

)

}

</div>

</div>
{/* AI Suggestions */}

{
suggestedNotes.length>0 && (

<div className="mt-20">

<h2
className="text-3xl font-serif mb-8"
>

AI Recommended Notes

</h2>

<p className="text-white/60 mb-6">

Suggestions based on your selected notes

</p>

<div
className="grid md:grid-cols-4 gap-6"
>

{

suggestedNotes.map(note=>(

<button

key={note}

onClick={()=>{

const found=

fragranceNotes.find(
n=>n.name===note
)

if(!found) return

if(found.type==="top"){

toggleSelection(
note,
selectedTop,
setSelectedTop
)

}

if(found.type==="heart"){

toggleSelection(
note,
selectedHeart,
setSelectedHeart
)

}

if(found.type==="base"){

toggleSelection(
note,
selectedBase,
setSelectedBase
)

}

}}

className="
p-6
rounded-[28px]

bg-gold/10
border
border-gold/30

hover:bg-gold/20
transition
"
>

✨ {note}

</button>

))

}

</div>

</div>

)
}
{/* FIXATIVE */}

<div className="mt-20">

<h2
className="text-3xl font-serif mb-8"
>

08 — Select Fixative

</h2>

<div
className="grid md:grid-cols-3 gap-6"
>

{

fragranceFixatives.map(

(item)=>(

<button

key={item.id}

onClick={()=>
setSelectedFixative(item)
}

className={`

p-8
rounded-[30px]
border

${
selectedFixative?.id===item.id

?

"border-gold bg-gold/10"

:

"border-white/10 bg-white/5"

}

`}

>

<h3>

{item.name}

</h3>

<p
className="mt-4 text-sm text-white/50"
>

{item.effect}

</p>

</button>

)

)

}

</div>

</div>



{/* SOLVENT */}

<div className="mt-20">

<h2
className="text-3xl font-serif mb-8"
>

09 — Select Solvent

</h2>

<div
className="grid md:grid-cols-3 gap-6"
>

{

fragranceSolvents.map(

(item)=>(

<button

key={item.id}

onClick={()=>
setSelectedSolvent(item)
}

className={`

p-8
rounded-[30px]
border

${
selectedSolvent?.id===item.id

?

"border-gold bg-gold/10"

:

"border-white/10 bg-white/5"

}

`}

>

<h3>

{item.name}

</h3>

<p
className="mt-4 text-sm text-white/50"
>

{item.description}

</p>

</button>

)

)

}

</div>

</div>



{/* GENERATE */}

<div
className="flex justify-center mt-24"
>

<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

onClick={generateFormula}

className="
px-12
py-6
rounded-full
bg-gold
text-black
text-xl
font-medium
"

>

Generate Luxury Perfume

</motion.button>
<motion.button

onClick={()=>{

setSpray(true)

setTimeout(()=>{
setSpray(false)
},1500)

}}

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

className="
ml-6
px-10
py-6
rounded-full

bg-white/10
border
border-white/20
"
>

Spray Perfume

</motion.button>

</div>



{/* LOADING */}

{

isGenerating && (

<div
className="
mt-20
rounded-[30px]
border border-gold/20
bg-white/5
p-10
text-center"
>

<h2
className="text-4xl font-serif"
>

Analyzing Formula...

</h2>

</div>

)

}



{/* RESULT */}

{

generated && (

<div
className="
mt-20
rounded-[30px]
border border-gold/20
bg-white/5
p-10"
>

<h2
className="text-5xl font-serif"
>

{generatedName}

</h2>

{/* PERFUME BOTTLE */}

<div className="flex justify-center my-14">

<div
className="
relative
w-[240px]
h-[320px]
"
>

{/* Cap */}

<div
className="
absolute
left-1/2
-top-10
-translate-x-1/2
w-28
h-12
rounded-t-xl
rounded-b-md
bg-gradient-to-r
from-yellow-700
via-yellow-400
to-yellow-700
border
border-yellow-300
z-50
"
/>

{/* Neck */}

<div
className="
absolute
left-1/2
top-0
-translate-x-1/2
w-12
h-8
bg-black/40
rounded-b-md
z-40
"
/>

{/* Bottle body */}

<div
className="
absolute
bottom-0
w-full
h-[280px]
rounded-[35px]
border
border-white/20
bg-white/10
backdrop-blur-xl
overflow-hidden
shadow-[0_0_60px_rgba(255,215,0,.25)]
"
>

{/* Thick glass */}

<div
className="
absolute
bottom-0
w-full
h-10
bg-white/20
"
/>

{/* Reflections */}

<div
className="
absolute
left-5
top-5
w-6
h-56
bg-white/30
blur-md
rounded-full
"
/>

<div
className="
absolute
right-7
top-8
w-3
h-40
bg-white/20
blur-sm
rounded-full
"
/>
{
spray && (

<>

{/* Main vapor */}

<motion.div

initial={{
opacity:0,
scale:.2,
y:0
}}

animate={{
opacity:[0,.8,.3,0],
scale:[.5,1.5,2.5],
y:[0,-40,-100]
}}

transition={{
duration:1.2
}}

className="
absolute
left-1/2
-top-14
-translate-x-1/2

w-40
h-40

rounded-full
bg-white/30
blur-3xl

z-[100]
"
/>


{/* Spray particles */}

{[...Array(18)].map((_,i)=>(

<motion.div

key={i}

initial={{
opacity:0,
x:0,
y:0
}}

animate={{
opacity:[0,1,0],
x:[
0,
(Math.random()*120)-60
],
y:[
0,
-(Math.random()*80+20)
]
}}

transition={{
duration:0.8,
delay:i*0.02
}}

className="
absolute
left-1/2
top-[-5px]

w-2
h-2

rounded-full
bg-white

blur-[1px]

z-[120]
"
/>

))}

</>

)
}

{/* Liquid */}

<motion.div

animate={{
height:`${oilConcentration*2.2}%`,
y:[0,-3,0]
}}

transition={{
height:{duration:1.5},
y:{
repeat:Infinity,
duration:3
}
}}

className={`
absolute
bottom-0
left-0
w-full
overflow-hidden
bg-gradient-to-t
${liquidColor}
`}
>

{/* Main wave */}

<motion.div

animate={{
x:[-50,50,-50]
}}

transition={{
repeat:Infinity,
duration:6,
ease:"linear"
}}

className="
absolute
top-[-10px]
left-[-20%]

w-[140%]
h-8

bg-white/30
rounded-[100%]
blur-md
"
/>

{/* Secondary wave */}

<motion.div

animate={{
x:[40,-40,40]
}}

transition={{
repeat:Infinity,
duration:8,
ease:"linear"
}}

className="
absolute
top-[-6px]
left-[-15%]

w-[130%]
h-6

bg-white/20
rounded-full
blur-sm
"
/>


{/* Bubble 1 */}

<motion.div

animate={{
y:[0,-140],
x:[0,10,-5],
opacity:[0,.8,0]
}}

transition={{
repeat:Infinity,
duration:5
}}

className="
absolute
bottom-5
left-[20%]

w-4
h-4

rounded-full
bg-white/40
blur-[1px]
"
/>


{/* Bubble 2 */}

<motion.div

animate={{
y:[0,-110],
x:[0,-8,5],
opacity:[0,.7,0]
}}

transition={{
repeat:Infinity,
duration:4,
delay:1
}}

className="
absolute
bottom-10
left-[50%]

w-3
h-3

rounded-full
bg-white/50
"
/>


{/* Bubble 3 */}

<motion.div

animate={{
y:[0,-160],
x:[0,12,-8],
opacity:[0,.6,0]
}}

transition={{
repeat:Infinity,
duration:6,
delay:2
}}

className="
absolute
bottom-8
left-[75%]

w-5
h-5

rounded-full
bg-white/30
blur-[1px]
"
/>

</motion.div>

{/* Label */}

<div
className="
absolute
left-1/2
top-[45%]
-translate-x-1/2
-translate-y-1/2
w-36
h-20
rounded-xl
bg-black/20
backdrop-blur-md
border
border-white/20
flex
flex-col
justify-center
items-center
"
>

<p className="text-[10px] text-gold">
Luxury
</p>

<p
className="
w-full
text-center
font-serif
uppercase
tracking-[0.25em]
text-[11px]
text-white
drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]
"
>
{
perfumeName.trim()
? perfumeName
: generatedName || "Luxury"
}
</p>

</div>

</div>

</div>

</div>


<p
className="mt-4 text-gold"
>

AI Compatibility Score:
{generatedScore}%

</p>

<p
className="mt-6"
>

Perfume:
{perfumeName || generatedName}

</p>

<p>

Fixative:
{selectedFixative?.name}

</p>

<p>

Solvent:
{selectedSolvent?.name}

</p>
<div className="mt-10 border-t border-white/10 pt-8">

<h3 className="text-3xl font-serif mb-6">
Formula Report
</h3>

<div className="mt-10 flex justify-center">

<button

onClick={saveFormula}

className="
px-8
py-4
rounded-full

bg-gold
text-black
font-medium
"
>

Save Formula

</button>

</div>

{
saved && (

<p
className="
mt-6
text-center
text-green-400
"
>

Formula saved successfully

</p>

)
}

<div className="space-y-4">

<p>
Bottle:
{bottleSize}ml
</p>

<p>
Oil concentration:
{oilConcentration}%
</p>

<p>
Total oil:
{totalOil.toFixed(1)}ml
</p>

<p>
Alcohol + Solvent:
{totalAlcohol.toFixed(1)}ml
</p>

<p>
Fixative:
{selectedFixative?.name}
</p>

<p>
Solvent:
{selectedSolvent?.name}
</p>

</div>


<h4 className="mt-8 text-xl text-gold">
Top Notes
</h4>

{
smartFormula.top.map(item=>(

<div
key={item.name}
className="flex justify-between py-2"
>

<span>
{item.name}
</span>

<span>
{item.quantity}ml
</span>

</div>

))
}


<h4 className="mt-8 text-xl text-gold">
Heart Notes
</h4>

{
smartFormula.heart.map(item=>(

<div
key={item.name}
className="flex justify-between py-2"
>

<span>
{item.name}
</span>

<span>
{item.quantity}ml
</span>

</div>

))
}

<h4 className="mt-8 text-xl text-gold">
Base Notes
</h4>

{
smartFormula.base.map(item=>(

<div
key={item.name}
className="flex justify-between py-2"
>

<span>
{item.name}
</span>

<span>
{item.quantity}ml
</span>

</div>

))
}

<div
className="
mt-8
rounded-2xl
bg-gold/10
p-6"
>

<p>

Total Notes:

{(
totalTop+
totalHeart+
totalBase
).toFixed(1)}

ml

</p>

</div>

</div>

</div>

)

}
</div>

</section>

</LaboratoryLayout>

)

}