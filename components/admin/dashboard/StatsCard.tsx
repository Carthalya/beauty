import {
FlaskConical,
Users,
Package,
Beaker
} from "lucide-react";

type Props = {
title:string;
value:string;
};

export default function StatsCard({
title,
value
}:Props){

const icons={

Ingredients:Beaker,
Formulas:FlaskConical,
Orders:Package,
Clients:Users

};

const Icon=
icons[title as keyof typeof icons]
|| Beaker;

return(

<div
className="
bg-white
rounded-[28px]
p-6
border
border-[#E8DED2]
shadow-sm
hover:-translate-y-1
transition-all
duration-300
"
>

<div className="flex justify-between">

<div>

<p
className="
text-sm
text-[#8B735C]
"
>
{title}
</p>

<h2
className="
text-3xl
font-bold
mt-2
text-[#3F3126]
"
>
{value}
</h2>

</div>

<div
className="
w-12
h-12
rounded-2xl
bg-[#EFE7DC]
flex
items-center
justify-center
text-[#6A4E36]
"
>

<Icon size={22}/>

</div>

</div>

<p
className="
text-xs
mt-4
text-green-600
"
>
+12% this month
</p>

</div>

)

}