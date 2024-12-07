import Home from "@/pages/home/Home";
import MainLayout from "components/main-layout/MainLayout";
import { Route, Routes } from "react-router-dom";

const routes = {
    /**
     * 홈 경로
     */
    home: "/Portfolio",
}

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<MainLayout />}>
                <Route path="" element={<Home />} />
            </Route>
        </Routes >
    );
}

export { routes };

export default MainRoutes;