const actions = [

{
title:"New Formula",
icon:"⚗",
description:"Create perfume formula"
},

{
title:"Add Product",
icon:"✦",
description:"Add new shop product"
},

{
title:"Diagnostic",
icon:"◎",
description:"Create client report"
},

{
title:"Social Post",
icon:"◍",
description:"Schedule content"
}

];

export default function QuickActions(){

return(

<div
className="
bg-white
rounded-[28px]
border
border-[#E8DED2]
p-6
shadow-sm
"
>

<h2
className="
text-xl
font-bold
text-[#3F3126]
mb-6
"
>
Quick Actions
</h2>

<div
className="
grid
grid-cols-2
gap-4
"
>

{actions.map((item,index)=>(

<button

key={index}

className="
bg-[#F8F5F0]
rounded-[22px]
p-5
text-left
hover:bg-[#EFE7DC]
hover:-translate-y-1
transition-all
duration-300
"

>

<div className="text-2xl">
{item.icon}
</div>

<h3
className="
font-semibold
mt-3
text-[#3F3126]
"
>
{item.title}
</h3>

<p
className="
text-xs
text-[#8B735C]
mt-1
"
>
{item.description}
</p>

</button>

))}

</div>

</div>

)

}