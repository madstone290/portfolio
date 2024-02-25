import Home from "@/pages/home/Home";
import MainLayout from "components/main-layout/MainLayout";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
            </Route>
        </Routes >
    );
}

export default MainRoutes;