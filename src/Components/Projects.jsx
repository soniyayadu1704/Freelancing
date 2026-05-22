const projects=[

{

title:"Luxury Landing Page",

stack:"React • Tailwind",

img:"/project1.png",

},

{

title:"Business Website",

stack:"React • UI Design",

img:"/project2.png",

},

{

title:"Creative Portfolio",

stack:"React • Animation",

img:"/project3.jpg",

},

{

title:"Startup Website",

stack:"React • Framer Motion",

img:"/project4.jpg",

}

]

export default function Projects(){

return(

<section

id="projects"

className="
max-w-[1450px]
mx-auto
mt-32
px-6
"

>

<div
className="
flex
flex-col
md:flex-row
justify-between
gap-8
mb-14
"
>

<div>

<p
className="
uppercase
tracking-[4px]
text-[#6f5ea0]
"
>

Selected Work

</p>

<h2
className="
text-[54px]
md:text-[88px]
leading-[0.9]
font-black
text-[#2b214c]
"
>

Featured

<br/>

Projects

</h2>

</div>

</div>





<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-8
"
>

{

projects.map((project,index)=>(

<div

key={index}

className="
group
rounded-[36px]
overflow-hidden
bg-white/50
backdrop-blur-xl
border
border-white
shadow-xl
hover:-translate-y-3
transition
"

>

<div className="relative">

<img

src={project.img}

className="
w-full
h-[260px]
md:h-[420px]
object-cover
group-hover:scale-105
transition
duration-700
"

/>

<a

href={project.website}

target="_blank"

className="
absolute
top-5
right-5

w-[65px]
h-[65px]

bg-white/70

rounded-full

flex

items-center

justify-center

text-3xl

hover:rotate-45

transition
"

>

↗

</a>

</div>





<div className="p-8">

<h3
className="
text-[32px]
md:text-[42px]
font-black
text-[#2b214c]
"
>

{project.title}

</h3>

<p
className="
mt-3
text-[#6a6287]
"
>

{project.stack}

</p>





<div
className="
mt-8
flex
flex-col
sm:flex-row
gap-4
"
>

</div>

</div>

</div>

))

}

</div>

</section>

)

}