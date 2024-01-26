// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Layout from "./Pages/Layout"
// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Contact from "./Pages/Contact"
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//        <Route path="contact" element={<Contact/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }
import React from 'react'
import Counter from './Counter'
//import Reducer from './Reducer'
//import Effect from './Effect'
export default function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}
