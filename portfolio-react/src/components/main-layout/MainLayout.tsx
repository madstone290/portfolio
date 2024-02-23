import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import css from './MainLayout.module.scss';
import Header from "@/components/header/Header";

export default MainLayout;

function MainLayout() {
    return (
        <Box className={css.layout}>
            <Header />
            <div className={css.content}>
                <Outlet />
            </div>
        </Box >
    );
}
