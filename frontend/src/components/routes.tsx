import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { AppHeader } from "./Header/Header";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
