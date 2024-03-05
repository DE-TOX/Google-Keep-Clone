import { useEffect, useState, useContext } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import ViewModeContext from "./ViewContext";


function Dashboard() {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const [viewMode, setViewMode] = useState('grid');
    const navigate = useNavigate();

    const handleListItemClick = (text) => {
        const route = `${text.toLowerCase()}`
        navigate(route);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '200%',

        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',

        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        height: '46px',
        width: '100%',
        border: 'none',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                height: '30px',
                marginBottom: "1px",
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <>
            <PrimarySearchAppBar onMenuButtonClick={() => setToggleDrawer(!toggleDrawer)} />
            <br />
            <SwipeableDrawer
                anchor={'left'}
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
                sx={{ zIndex: 0 }}
                margin-top={"50px"}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        margin={"2%"}
                    >
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" style={{ height: "40px", width: "40px" }} alt="" />
                        FUNDONOTES
                    </Typography>
                    <List style={{ marginTop: "100px" }}>
                        {["Notes", "Archive", "Trash"].map((text, index) => (

                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() =>
                                    handleListItemClick(text)}>
                                    <ListItemIcon>
                                        {index === 0 && <LightbulbOutlinedIcon />}
                                        {index === 1 && <ArchiveOutlinedIcon />}
                                        {index === 2 && <DeleteOutlineOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                </Box>
            </SwipeableDrawer>
            <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
                <Outlet />
            </ViewModeContext.Provider>
        </>
    )
}

export default Dashboard