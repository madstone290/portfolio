import { Stack } from "@mui/material";
import { NavItem } from "./NavItem";
import { NavItemInfo } from "./NavItemInfo";
import { v4 as uuidv4 } from 'uuid';

const NAV_ITEM_LIST: NavItemInfo[] = [
    {
        title: '홈',
        href: '/',
    },
    {
        title: '기술',
        href: '/tech',
    },
];

export default NavBar;
function NavBar() {
    return (
        <Stack direction="row"
        component="nav"
        borderColor="border"
        justifyContent={'center'}
        flexWrap="wrap"
        padding={1}
        sx={{
            flexGrow: 1,
            justifyContent: 'center'
        }}
    >
        {NAV_ITEM_LIST.map((item) => (
            <NavItem key={uuidv4()}
                info={item}
            />
        ))}
    </Stack>
    );

}