import { topIngredients } from "@/lib/data/dashboard";
export default function LabOverview(){

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

<div
className="
flex
justify-between
items-center
mb-6
"
>

<div>

<h2
className="
font-bold
text-xl
text-[#3F3126]
"
>
Top Ingredients
</h2>

<p
className="
text-sm
text-[#8B735C]
"
>
Most used this month
</p>

</div>

<div
className="
bg-[#F8F5F0]
rounded-xl
px-4
py-2
text-sm
"
>
Live
</div>

</div>


<div className="space-y-5">

{topIngredients.map((item,index)=>(

<div
key={index}
>

<div
className="
flex
justify-between
mb-2
"
>

<p className="font-medium">

{item.name}

</p>

<p
className="
text-[#8B735C]
text-sm
"
>

{item.usage}

</p>

</div>


<div
className="
h-2
rounded-full
bg-[#F1ECE5]
overflow-hidden
"
>

<div

style={{
width:item.usage
}}

className="
h-full
rounded-full
bg-[#C9A66B]
"

></div>

</div>

</div>

))}

</div>

</div>

)

}