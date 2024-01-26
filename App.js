import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Layout from "./Pages/Layout"
import Service from "./Service"
import Counter from "./Counter"
import Effect from "./Effect"
import Reducer from "./Reducer"
import Callback from "./Callback"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="effect" element={<Effect/>}/>
        <Route path="reducer" element={<Reducer/>}/>
        <Route path="callback" element={<Callback/>}/>
        

      </Route>
      </Routes>
      </BrowserRouter>
  )
}

// import React from 'react'
// import Basic from './Events/Basic'
// import Counter from './useState/Counter'

// export default function App() {
//   return (
//     <div>
//       <Basic/>
//       <Counter/>
//       </div>
//   )
// }