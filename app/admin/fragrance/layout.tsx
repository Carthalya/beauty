"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [

{
title:"Ingredients",
href:"/admin/fragrance/ingredients"
},

{
title:"Families",
href:"/admin/fragrance/families"
},

{
title:"Notes",
href:"/admin/fragrance/notes"
},

{
title:"Compatibility",
href:"/admin/fragrance/compatibility"
},

{
title:"Accords",
href:"/admin/fragrance/accords"
},

{
title:"Fixatives",
href:"/admin/fragrance/fixatives"
},

{
title:"Solvents",
href:"/admin/fragrance/solvents"
},

{
title:"Formulas",
href:"/admin/fragrance/formulas"
}

];

export default function FragranceLayout({
children
}:{
children:React.ReactNode
}){

const pathname=usePathname();

return(

<div className="space-y-8">

<div>

<p
className="
text-sm
tracking-[4px]
text-[#8B735C]
"
>
CARTHALYA
</p>

<h1
className="
text-4xl
font-bold
text-[#3F3126]
mt-2
"
>

Fragrance Laboratory

</h1>

<p
className="
text-[#6B5A4B]
mt-3
"
>

Build and manage the complete fragrance ecosystem.

</p>

</div>


<div
className="
flex
gap-3
flex-wrap
"
>

{tabs.map((tab)=>(

<Link

key={tab.title}

href={tab.href}

className={`
px-5
py-3
rounded-2xl
border
transition-all

${
pathname===tab.href

?

"bg-[#6A4E36] text-white border-[#6A4E36]"

:

"bg-white border-[#E8DED2] text-[#3F3126] hover:bg-[#EFE7DC]"
}
`}

>

{tab.title}

</Link>

))}

</div>


<div>

{children}

</div>

</div>

)

}