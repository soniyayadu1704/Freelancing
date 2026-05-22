export default function Hero() {

return (

<section
id="hero"
className="
max-w-[1450px]
mx-auto
px-6
pt-4
"
>

<div
className="
relative
rounded-[55px]
overflow-hidden
h-[780px]
"
>

<img
src="/hero.png"
className="
absolute
inset-0
w-full
h-full
object-cover
"
/>

<div
className="
absolute
inset-0
bg-gradient-to-b
from-[#f3efff]/70
via-transparent
to-[#f3efff]/20
"
/>

<div
className="
absolute
top-[90px]
left-1/2
-translate-x-1/2
text-center
w-full
px-10
"
>

<p
className="
uppercase
tracking-[6px]
text-[#5e547f]
font-medium
"
>

Creative Developer

</p>

<h1
className="
text-[90px]
leading-[0.9]
font-black
mt-6
text-[#2c214b]
"
>

Bold Ideas

<br/>

That Start

With Vision

</h1>

<p
className="
mt-8
max-w-[650px]
mx-auto
text-[20px]
leading-[1.8]
text-[#4a416b]
"
>

We help modern brands craft digital stories
that inspire action and drive results.

</p>

<button
className="
mt-10
bg-[#5d527d]
text-white
px-10
py-5
rounded-full
hover:scale-105
transition
"
>

Get In Touch

</button>

</div>

</div>

</section>

)

}