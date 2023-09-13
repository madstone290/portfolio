import { Home } from "@mui/icons-material";
import MainLayout from "components/layouts/MainLayout";
import Tech from "pages/Tech";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="tech" element={<Tech />} />
            </Route>
        </Routes >
    );
}

export default MainRoutes;