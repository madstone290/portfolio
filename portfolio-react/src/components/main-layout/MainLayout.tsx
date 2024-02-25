import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import css from './MainLayout.module.scss';
import Header from "@/components/header/Header";
import LightControl from "@/components/light-control/LightControl";

export default MainLayout;

function MainLayout() {
    return (
        <Box className={css.layout}>
            <Header />
            <div className={css.content}>
                <LightControl />
                <Outlet />
            </div>
        </Box >
    );
}
