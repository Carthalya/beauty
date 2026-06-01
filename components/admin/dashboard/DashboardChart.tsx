const families = [
  {
    name: "Woody",
    percentage: 82,
  },

  {
    name: "Floral",
    percentage: 67,
  },

  {
    name: "Oriental",
    percentage: 58,
  },

  {
    name: "Citrus",
    percentage: 44,
  },
];

export default function DashboardChart(){

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

<div className="flex justify-between">

<div>

<h2
className="
text-xl
font-bold
text-[#3F3126]
"
>
Laboratory Activity
</h2>

<p
className="
text-sm
text-[#8B735C]
mt-1
"
>
Most used fragrance families
</p>

</div>

<div
className="
px-4
py-2
rounded-xl
bg-[#EFE7DC]
text-sm
"
>

This Month

</div>

</div>


<div className="mt-8 space-y-6">

{families.map((item,index)=>(

<div key={index}>

<div className="flex justify-between mb-2">

<span
className="
text-sm
font-medium
text-[#3F3126]
"
>

{item.name}

</span>

<span
className="
text-sm
text-[#8B735C]
"
>

{item.percentage}%

</span>

</div>

<div
className="
h-3
bg-[#F4EFE8]
rounded-full
overflow-hidden
"
>

<div
style={{
width:`${item.percentage}%`
}}

className="
h-full
rounded-full
bg-linear-to-r
from-[#6A4E36]
to-[#C9A66B]
transition-all
duration-1000
"
></div>

</div>

</div>

))}

</div>


<div
className="
grid
grid-cols-3
gap-4
mt-8
"
>

<div
className="
bg-[#F8F5F0]
rounded-2xl
p-4
"
>
<p className="text-xs text-[#8B735C]">
Formulas
</p>

<h3 className="text-2xl font-bold">
84
</h3>
</div>


<div
className="
bg-[#F8F5F0]
rounded-2xl
p-4
"
>
<p className="text-xs text-[#8B735C]">
Ingredients
</p>

<h3 className="text-2xl font-bold">
342
</h3>
</div>


<div
className="
bg-[#F8F5F0]
rounded-2xl
p-4
"
>
<p className="text-xs text-[#8B735C]">
Reports
</p>

<h3 className="text-2xl font-bold">
127
</h3>
</div>

</div>

</div>

)

}