import { recentClients } from "@/lib/data/dashboard";

export default function RecentClients(){

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
mb-6
text-[#3F3126]
"
>
Recent Clients
</h2>

<div className="space-y-4">

{recentClients.map((client,index)=>(

<div
key={index}

className="
flex
items-center
gap-3
"
>

<div
className="
w-10
h-10
rounded-full
bg-[#EFE7DC]
"
></div>

<div>

<p>
{client.name}
</p>

<p
className="
text-xs
text-[#8B735C]
"
>
Diagnostic report
</p>

</div>

</div>

))}

</div>

</div>

)

}