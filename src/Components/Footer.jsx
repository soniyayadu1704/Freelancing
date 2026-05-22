import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

export default function Footer(){

return(

<footer
className="
max-w-[1450px]
mx-auto
mt-10
mb-6
px-6
"
>

<div
className="
relative
overflow-hidden

rounded-[34px]

px-8
md:px-12

py-8

bg-white/40

backdrop-blur-xl

border
border-white

shadow-[0_30px_80px_rgba(120,95,180,.12)]
"
>

<div
className="
absolute
top-[-90px]
left-[10%]

w-[260px]
h-[220px]

bg-[#d8cfff]

blur-[110px]

rounded-full

opacity-70
"
/>

<div
className="
absolute
right-[-40px]
bottom-[-60px]

w-[220px]
h-[220px]

bg-[#9f8cf0]

blur-[120px]

rounded-full

opacity-30
"
/>

<div
className="
relative
z-10

flex
flex-col
md:flex-row

justify-between

items-center

gap-8
"
>

<div>

<h2
className="
text-[42px]

font-black

italic

tracking-[-2px]

bg-gradient-to-r
from-[#8a75d9]
via-[#705aa9]
to-[#43306f]

bg-clip-text

text-transparent

hover:scale-105

transition
"
>

SONIYA and PAGAL

</h2>

<p
className="
mt-1

text-[#6b5d92]

text-[15px]
"
>

Freelance Web Developer

</p>

</div>





<div
className="
flex
flex-col
sm:flex-row

gap-4
"
>

<a
href="mailto:yourmail@gmail.com"

className="
group

flex

items-center

gap-3

px-5
py-3

rounded-full

bg-white/50

hover:bg-[#ede7ff]

transition
"
>

<div
className="
w-10
h-10

rounded-full

bg-[#8168d2]

text-white

flex

items-center

justify-center

group-hover:rotate-12

transition
"
>

<MdEmail size={18}/>

</div>

<span
className="
text-[#584b7f]

text-[14px]
"
>

yourmail@gmail.com

</span>

</a>





<a
href="tel:+919999999999"

className="
group

flex

items-center

gap-3

px-5
py-3

rounded-full

bg-white/50

hover:bg-[#ede7ff]

transition
"
>

<div
className="
w-10
h-10

rounded-full

bg-[#705aa9]

text-white

flex

items-center

justify-center

group-hover:scale-110

transition
"
>

<FaPhoneAlt size={14}/>

</div>

<span
className="
text-[#584b7f]

text-[14px]
"
>

+91 99999 99999

</span>

</a>

</div>

</div>

</div>

</footer>

)

}