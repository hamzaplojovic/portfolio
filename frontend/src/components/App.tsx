import { About } from "./About/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Header/Header"
import { Dropdown } from "./Dropdown/Dropdown"
import { useState } from "react"

export const App = () => {
    const [toggle, setToggle] = useState(false);
    return <BrowserRouter>
        <Header toggle={toggle} setToggle={setToggle}/>
        <Dropdown isOpen={toggle}/>
        <Routes>
            <Route path="/" element={<About toggle={toggle}/>}/>
        </Routes>
    </BrowserRouter>
}