import Sidebar from "@/components/admin/dashboard/Sidebar";
import Navbar from "@/components/admin/dashboard/Navbar";

export default function AdminLayout({
children,
}:{
children:React.ReactNode
}){

return(

<div
className="
min-h-screen
bg-[#F7F4EF]
flex
"
>

<Sidebar/>

<div
className="
flex-1
p-6
"
>

<Navbar/>

<div className="mt-6">

{children}

</div>

</div>

</div>

)

}