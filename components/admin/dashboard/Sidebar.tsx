"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
LayoutDashboard,
FlaskConical,
ShoppingBag,
ClipboardList,
Package,
Share2
} from "lucide-react";

const menu=[

{
title:"Dashboard",
href:"/admin",
icon:LayoutDashboard
},

{
title:"Laboratory",
href:"/admin/laboratory",
icon:FlaskConical,

children:[

{
title:"Fragrance",
href:"/admin/fragrance/ingredients"
},

{
title:"Skin Care",
href:"/admin/oils/essential"
}

]

},

{
title:"Boutique",
href:"/admin/shop/products",
icon:ShoppingBag
},

{
title:"Diagnostic",
href:"/admin/diagnostic/clients",
icon:ClipboardList
},

{
title:"Orders",
href:"/admin/orders/all",
icon:Package
},

{
title:"Social",
href:"/admin/social/accounts",
icon:Share2
}

];

export default function Sidebar(){

const pathname=usePathname();

return(

<aside
className="
w-[290px]
min-h-screen
p-6
bg-[#5C4330]
text-white
border-r
border-[#82634B]
flex
flex-col
"
>

<div>

<p
className="
text-[#D8B88B]
text-sm
tracking-[4px]
"
>
LABORATORY
</p>

<h1
className="
text-4xl
font-bold
mt-2
"
>
✦ Carthalya
</h1>

<p
className="
text-sm
text-[#E9D8C3]
mt-3
leading-6
"
>
Perfume • Skin Care
Luxury Laboratory
</p>

</div>


<div
className="
mt-12
space-y-3
"
>

{menu.map((item)=>{

const Icon=item.icon;

if(item.children){

return(

<div key={item.title}>

<Link href={item.href}>

<div
className={`
flex
items-center
gap-4
px-5
py-4
rounded-[20px]
transition-all

${
pathname===item.href
?
"bg-[#C9A66B]"
:
"hover:bg-[#6B523E]"
}
`}
>

<Icon size={20}/>

<p className="font-medium">
{item.title}
</p>

</div>

</Link>


<div
className="
ml-8
mt-2
space-y-2
"
>

{item.children.map((child)=>(

<Link
key={child.title}
href={child.href}
>

<div
className={`
px-4
py-3
rounded-xl
text-sm
transition-all

${
pathname===child.href
?
"bg-[#C9A66B]"
:
"hover:bg-[#6B523E]"
}
`}
>

{child.title}

</div>

</Link>

))}

</div>

</div>

)

}

return(

<Link
key={item.title}
href={item.href}
>

<div
className={`
flex
items-center
gap-4
px-5
py-4
rounded-[20px]
transition-all

${
pathname===item.href
?
"bg-[#C9A66B]"
:
"hover:bg-[#6B523E]"
}
`}
>

<Icon size={20}/>

<p>
{item.title}
</p>

</div>

</Link>

)

})}

</div>


<div
className="
mt-auto
rounded-[24px]
bg-[#6B523E]
p-5
"
>

<p
className="
text-xs
text-[#E9D8C3]
"
>
Latest Formula
</p>

<h3
className="
font-bold
mt-2
"
>
Amber Vanilla
</h3>

<p
className="
text-sm
mt-3
text-[#D8B88B]
"
>
Updated today
</p>

</div>

</aside>

)

}