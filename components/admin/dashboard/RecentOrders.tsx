import { recentOrders } from "@/lib/data/dashboard";

export default function RecentOrders(){

return(

<div
className="
bg-white
rounded-[28px]
p-6
border
border-[#E8DED2]
"
>

<h2
className="
font-bold
text-xl
text-[#3F3126]
mb-6
"
>
Recent Orders
</h2>

<div className="space-y-4">

{recentOrders.map((item,index)=>(

<div
key={index}
className="
flex
justify-between
border-b
pb-3
"
>

<div>

<p className="font-medium">
{item.name}
</p>

</div>

<span
className="
text-sm
text-[#8B735C]
"
>

{item.status}

</span>

</div>

))}

</div>

</div>

)

}