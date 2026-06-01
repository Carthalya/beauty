"use client";

export default function Navbar(){

const today = new Date().toLocaleDateString(
"en-US",
{
weekday:"long",
day:"numeric",
month:"long"
}
);

return(

<div
className="
bg-white
rounded-[30px]
border
border-[#E8DED2]
px-8
py-5
shadow-sm
flex
justify-between
items-center
"
>

{/* Left */}

<p
className="
text-[#8B735C]
font-medium
"
>
{today}
</p>


{/* Right */}

<div
className="
flex
items-center
gap-4
"
>

<input

placeholder="Search ingredients, formulas..."

className="
w-[300px]
bg-[#F8F5F0]
rounded-2xl
px-5
py-3
outline-none
border
border-[#EFE7DC]
focus:border-[#C9A66B]
"
/>


<button
className="
w-12
h-12
rounded-2xl
bg-[#F8F5F0]
"
>
🔔
</button>


<button
className="
w-12
h-12
rounded-2xl
bg-[#F8F5F0]
"
>
⚙️
</button>


<div
className="
flex
items-center
gap-3
bg-[#F8F5F0]
rounded-2xl
px-3
py-2
"
>

<div
className="
w-10
h-10
rounded-full
bg-[#C9A66B]
"
></div>

<div>

<p className="font-medium">
Admin
</p>

<p
className="
text-xs
text-[#8B735C]
"
>
Carthalya Team
</p>

</div>

</div>

</div>

</div>

)

}