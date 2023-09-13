import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

export default MyLayout;

function MyLayout() {
    return (
        <Box display="flex" height="100%" flexDirection="column">
            <Header />
            <NavBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{
                    padding: 2
                }}
            >
                <Outlet />
            </Container>
            <Box>Footer</Box>
        </Box>
    );
}
