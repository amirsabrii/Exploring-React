import {Route, Routes} from "react-router";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import RootLayuots from "./layuots/Layuots.tsx";


import './App.css'

function App() {


  return (
    <Routes>
        <Route element={<RootLayuots/>}>

        <Route index element={<Home/>}/>
        <Route path={'about'} element={<About/>} />

        </Route>
    </Routes>
  )
}

export default App
