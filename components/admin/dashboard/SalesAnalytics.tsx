const months = [

40,
55,
70,
45,
80,
95,
65

];

export default function SalesAnalytics(){

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

<div className="mb-8">

<h2
className="
font-bold
text-xl
text-[#3F3126]
"
>
Sales Analytics
</h2>

<p
className="
text-sm
text-[#8B735C]
"
>
Monthly performance
</p>

</div>

<div
className="
flex
items-end
gap-4
h-[220px]
"
>

{months.map((value,index)=>(

<div
key={index}
className="
flex-1
flex
flex-col
justify-end
"
>

<div

style={{
height:`${value}%`
}}

className="
rounded-t-2xl
bg-linear-to-t
from-[#6A4E36]
to-[#C9A66B]
transition-all
duration-700
"

></div>

</div>

))}

</div>

</div>

)

}