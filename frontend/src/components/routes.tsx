import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useData } from "../hooks/useData";
import { Footer } from "./Footer/Footer";
import { AppHeader } from "./Header/Header";
import { Home } from "./Home/Home";

export const AppRoutes = () => {
    const { data } = useData({ url: "projects" });
    console.log(data);
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
