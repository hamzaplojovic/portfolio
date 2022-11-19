import { About } from "./About/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Header/Header"

export const App = () => {
    return <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<About/>}/>
        </Routes>
    </BrowserRouter>
}