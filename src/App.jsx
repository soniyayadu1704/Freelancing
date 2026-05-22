import {
BrowserRouter,
Routes,
Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Contact from "./components/Contact"
import HireUs from "./pages/HireUs"

export default function App(){

return(

<BrowserRouter>

<div
className="
min-h-screen
bg-gradient-to-b
from-[#faf8ff]
to-[#f1edff]
"
>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/contact"
element={<Contact/>}
/>

<Route
path="/hire"
element={<HireUs/>}
/>
<Route
path="/contact"
element={<Contact/>}
/>

</Routes>

<Footer/>

</div>

</BrowserRouter>

)

}