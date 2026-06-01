const reports=[

{
client:"Sarah",
status:"Skin Analysis Complete"
},

{
client:"Mohamed",
status:"Perfume Profile Generated"
},

{
client:"Emma",
status:"New Diagnostic Started"
}

];

export default function DiagnosticActivity(){

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
Diagnostic Activity
</h2>

<div className="space-y-5">

{reports.map((item,index)=>(

<div
key={index}
className="
flex
justify-between
items-center
border-b
pb-4
"
>

<div>

<p className="font-medium">
{item.client}
</p>

<p
className="
text-sm
text-[#8B735C]
"
>
{item.status}
</p>

</div>

<div
className="
w-3
h-3
rounded-full
bg-green-500
"
></div>

</div>

))}

</div>

</div>

)

}