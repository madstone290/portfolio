import { Link, useMatch } from 'react-router-dom';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import React, { useState } from 'react';
import NavItemMenu from './NavItemMenu';

interface NavItemProps {
    info: NavItemInfo;
}

export function NavItem(props: NavItemProps) {
    const { title, href, basePath, children } = props.info;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    }

    let match: any = null;
    if (basePath) {
        match = useMatch({
            path: basePath,
            end: false,
            caseSensitive: false,
        });
    } else {
        match = useMatch({
            path: href!,
            end: true,
            caseSensitive: false,
        });
    }
    const selected = match ? true : false;

    return (
        <ButtonBase
            sx={{
                // flexGrow: 1,
                padding: 1
            }}
            component={Link}
            to={href!}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <Stack
                width="100%"
                direction="row"
                p={1}
                borderLeft={0}
                borderColor="border"
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                spacing={0}
                title={title}
            >
                <Typography
                    pt={0}
                    fontSize={18}
                    color={selected ? 'green' : 'black'}
                    sx={{
                        '&:hover': {
                            color: 'orange',
                        }
                    }}
                >
                    {title}
                </Typography>
            </Stack>
            {children && children.length > 0 &&
                <NavItemMenu open={open}
                    anchorEl={anchorEl!}
                    items={children} />}

        </ButtonBase>
    );
}