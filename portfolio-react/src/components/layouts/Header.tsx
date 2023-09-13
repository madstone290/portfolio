import { AppBar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const headerData = {
    title: '이규호의 포트폴리오'
}

export default Header;
function Header() {
    return (
        <AppBar elevation={0} position="static"
            sx={{
                borderWidth: "1px 0px 1px 0px",
                borderStyle: "solid",
                borderColor: "#ccc",
                backgroundColor: "white",
                color: "black",
            }}>
            <Stack direction={"row"}
                sx={{
                    alignItems: "center",
                }}>
                <Box component={"img"}
                    src="https://source.unsplash.com/random/80x80"
                    sx={{
                        width: 50
                    }}
                />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography sx={{
                        paddingLeft: 2
                    }}>{headerData.title}</Typography>
                </Link>

            </Stack>
        </AppBar>
    );
}