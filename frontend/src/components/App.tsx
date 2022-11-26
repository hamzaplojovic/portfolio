import React, { useState } from "react"
import { About } from "./About/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Header/Header"
import { Contact } from "./Contact/Contact"

export const App = () => {
    const [toggle, setToggle] = useState(false);
    const location = window.location.pathname;
    return <BrowserRouter>
        <Header toggle={toggle} setToggle={setToggle} color={location === "/" ? "black": "white"}/>
        <Routes>
            <Route path="/" element={<About toggle={toggle}/>}/>
            <Route path="/contact" element={<Contact toggle={toggle}/>}/>
        </Routes>
    </BrowserRouter>
}